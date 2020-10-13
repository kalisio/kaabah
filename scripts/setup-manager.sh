#!/usr/bin/env bash
set -euo pipefail

MANAGER_PRIVATE_IP=$1
LEADER_PRIVATE_IP=$2

TMP_DIR=/tmp/kaabah

# Generate TLS certificates
bash $TMP_DIR/create-server-certificates.sh $MANAGER_PRIVATE_IP
bash $TMP_DIR/create-client-certificates.sh
rm $TMP_DIR/ca.*

# Secure ssh key permissions
chmod 600 $HOME/.ssh/ssh.pem

# Setup Docker configuration to enable TLS protection
sudo mkdir -p /etc/systemd/system/docker.service.d
sudo cp $TMP_DIR/docker-configs/override.conf /etc/systemd/system/docker.service.d/

sudo mkdir -p /etc/docker
export MANAGER_PRIVATE_IP
envsubst < $TMP_DIR/docker-configs/manager.json.tpl | sudo tee /etc/docker/daemon.json

# Reload docker systemd unit
sudo systemctl daemon-reload
# And restart docker
sudo systemctl restart docker

export DOCKER_TLS_VERIFY=1
export DOCKER_CERT_PATH=$HOME/.docker
export DOCKER_HOST=tcp://$MANAGER_PRIVATE_IP:2376

echo "export DOCKER_TLS_VERIFY=$DOCKER_TLS_VERIFY" | tee -a $HOME/.bashrc
echo "export DOCKER_CERT_PATH=$DOCKER_CERT_PATH" | tee -a $HOME/.bashrc
echo "export DOCKER_HOST=$DOCKER_HOST" | tee -a $HOME/.bashrc
echo "export KAABAH_MANAGER_IP=$MANAGER_PRIVATE_IP" | tee -a $HOME/.bashrc

# Initialise swarm
if [ "$LEADER_PRIVATE_IP" == "$MANAGER_PRIVATE_IP" ]; then
  docker swarm init --advertise-addr $MANAGER_PRIVATE_IP --listen-addr $MANAGER_PRIVATE_IP:2377
else
  docker swarm join $LEADER_PRIVATE_IP:2377 \
    --token $(docker --tlsverify --tlscacert=.docker/ca.pem --tlscert=.docker/cert.pem --tlskey=.docker/key.pem -H=$LEADER_PRIVATE_IP:2376 swarm join-token -q manager)
fi

# Install helper commands
for COMMAND in $TMP_DIR/k-*; do
  chmod +x $COMMAND
  sudo mv $COMMAND /usr/local/bin
done
