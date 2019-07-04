#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2
FAIL2BAN_IGNORE_IP=$3
WORKSPACE=$4
SUBDOMAIN=$5

TMP_DIR=/tmp/kaabah
CONFIG_DIR=/etc/kaabah

# Generate TLS certificates
bash $TMP_DIR/create-server-certificates.sh $MANAGER_PRIVATE_IP
bash $TMP_DIR/create-client-certificates.sh
rm $TMP_DIR/ca.*

# Secure ssh key permissions
chmod 600 $HOME/.ssh/ssh.pem

# Setup Docker configuration to enable TLS protection
mkdir -p /etc/systemd/system/docker.service.d
cp $TMP_DIR/docker-configs/override.conf /etc/systemd/system/docker.service.d/.

mkdir -p /etc/docker
export MANAGER_PRIVATE_IP
envsubst < $TMP_DIR/docker-configs/manager.json.tpl > /etc/docker/daemon.json

export DOCKER_TLS_VERIFY=1
export DOCKER_CERT_PATH=$HOME/.docker
export DOCKER_HOST=tcp://$MANAGER_PRIVATE_IP:2376

echo "export DOCKER_TLS_VERIFY=$DOCKER_TLS_VERIFY" >> $HOME/.bash_profile
echo "export DOCKER_CERT_PATH=$DOCKER_CERT_PATH" >> $HOME/.bash_profile
echo "export DOCKER_HOST=$DOCKER_HOST" >> $HOME/.bash_profile

# Install docker
bash $TMP_DIR/install-docker.sh $DOCKER_VERSION

# Add the user to the docker group
K_USER=${SUDO_USER:-$USER}
if [ "$K_USER" != "root" ]; then
  usermod -a -G docker $K_USER
fi

# Initialise swarm
docker swarm init --advertise-addr $MANAGER_PRIVATE_IP --listen-addr $MANAGER_PRIVATE_IP:2377

# Configure SSHD
bash $TMP_DIR/setup-sshd.sh $FAIL2BAN_IGNORE_IP

# Install sshfs
bash $TMP_DIR/install-sshfs.sh

# Install jq
apt-get -y install jq

# Install helper commands
for COMMAND in $TMP_DIR/k-*; do
  chmod +x $COMMAND
  mv $COMMAND /usr/local/sbin/.
done
mkdir $CONFIG_DIR
export WORKSPACE
export SUBDOMAIN
envsubst '${WORKSPACE},${SUBDOMAIN}' < $TMP_DIR/slack-notification.tpl > $CONFIG_DIR/slack-notification.tpl

