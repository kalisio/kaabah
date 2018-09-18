#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2

# Secure ssh key permissions
chmod 600 ~/.ssh/ssh.pem

# Generate TLS certificates
bash /tmp/create-client-certificates.sh
rm /tmp/ca.*

# Configure Docker
mkdir -p /etc/docker
cp /tmp/docker-configs/worker.json /etc/docker/daemon.json

# Install docker
bash /tmp/install-docker.sh $DOCKER_VERSION

# Join swarm
docker swarm join $MANAGER_PRIVATE_IP:2377 \
  --token $(docker --tlsverify --tlscacert=.docker/ca.pem --tlscert=.docker/cert.pem --tlskey=.docker/key.pem -H=$MANAGER_PRIVATE_IP:2376 swarm join-token -q worker)

# Install sshfs
bash /tmp/install-sshfs.sh
