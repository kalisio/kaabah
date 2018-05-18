#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2

# Setup the docker configuration
mkdir -p /etc/systemd/system/docker.service.d
sed -e "s/SWARM_MANAGER_PRIVATE_IP/$MANAGER_PRIVATE_IP/g" /tmp/manager.tpl > /etc/systemd/system/docker.service.d/docker.conf

# Install docker
sh /tmp/install-docker.sh $DOCKER_VERSION

# Add user to the docker group
usermod -aG docker `whoami`

# Initialise the manager
docker swarm init --advertise-addr $MANAGER_PRIVATE_IP --listen-addr $MANAGER_PRIVATE_IP:2377