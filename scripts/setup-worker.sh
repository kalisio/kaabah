#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2

TMP_DIR=/tmp/kaabah

# Secure ssh key permissions
chmod 600 $HOME/.ssh/ssh.pem

# Generate TLS certificates
bash $TMP_DIR/create-client-certificates.sh
rm $TMP_DIR/ca.*

# Configure Docker
mkdir -p /etc/docker
cp $TMP_DIR/docker-configs/worker.json /etc/docker/daemon.json

# Install docker
bash $TMP_DIR/install-docker.sh $DOCKER_VERSION

# Join swarm
docker swarm join $MANAGER_PRIVATE_IP:2377 \
  --token $(docker --tlsverify --tlscacert=.docker/ca.pem --tlscert=.docker/cert.pem --tlskey=.docker/key.pem -H=$MANAGER_PRIVATE_IP:2376 swarm join-token -q worker)
