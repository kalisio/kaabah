#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2

TMP_DIR=/tmp/kaabah

# Define the user and its home directory
K_USER=${SUDO_USER:-$USER}
if [ "$K_USER" != "root" ]; then
  K_HOME=/home/$K_USER
else
  K_HOME=/root
fi

# Secure ssh key permissions
chmod 600 $K_HOME/.ssh/ssh.pem

# Generate TLS certificates
bash $TMP_DIR/create-client-certificates.sh $K_USER $K_HOME
rm $TMP_DIR/ca.*

# Configure Docker
mkdir -p /etc/docker
cp $TMP_DIR/docker-configs/worker.json /etc/docker/daemon.json

# Install docker
bash $TMP_DIR/install-docker.sh $DOCKER_VERSION

# Join swarm
docker swarm join $MANAGER_PRIVATE_IP:2377 \
  --token $(docker --tlsverify --tlscacert=.docker/ca.pem --tlscert=.docker/cert.pem --tlskey=.docker/key.pem -H=$MANAGER_PRIVATE_IP:2376 swarm join-token -q worker)
