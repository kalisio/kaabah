#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2
FAIL2BAN_IGNORE_IP=$3

# Secure ssh key permissions
chmod 600 $HOME/.ssh/ssh.pem

# Generate TLS certificates
bash $HOME/.kaabah/create-client-certificates.sh
rm $HOME/.kaabah/ca.*

# Configure Docker
mkdir -p /etc/docker
cp $HOME/.kaabah/docker-configs/worker.json /etc/docker/daemon.json

# Install docker
bash $HOME/.kaabah/install-docker.sh $DOCKER_VERSION

# Join swarm
docker swarm join $MANAGER_PRIVATE_IP:2377 \
  --token $(docker --tlsverify --tlscacert=.docker/ca.pem --tlscert=.docker/cert.pem --tlskey=.docker/key.pem -H=$MANAGER_PRIVATE_IP:2376 swarm join-token -q worker)

# Configure SSHD
bash $HOME/.kaabah/setup-sshd.sh $FAIL2BAN_IGNORE_IP

# Install sshfs
bash $HOME/.kaabah/install-sshfs.sh

