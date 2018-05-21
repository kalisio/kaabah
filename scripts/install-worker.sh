#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2

# Setup docker configuration
mkdir -p /etc/docker
mv /tmp/configs/worker.json /etc/docker/daemon.json

# Install docker
sh /tmp/install-docker.sh $DOCKER_VERSION

# Join the manager
docker swarm join  $MANAGER_PRIVATE_IP:2377 --token $(docker -H $MANAGER_PRIVATE_IP:2375 swarm join-token -q worker)