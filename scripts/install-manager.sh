#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2
FAIL2BAN_IGNORE_IP=$3

TMP_DIR=/tmp/kaabah

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

# Initialise swarm
docker swarm init --advertise-addr $MANAGER_PRIVATE_IP --listen-addr $MANAGER_PRIVATE_IP:2377

# Configure SSHD
bash $TMP_DIR/setup-sshd.sh $FAIL2BAN_IGNORE_IP

# Install sshfs
bash $TMP_DIR/install-sshfs.sh

# Install jq
apt-get -y install jq

# Install helper commands
cp $TMP_DIR/helper-commands/* /usr/local/sbin/.
for UTILITY in /usr/local/sbin//k-*; do
  chmod +x $UTILITY
done
