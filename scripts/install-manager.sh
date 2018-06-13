#!/bin/bash
DOCKER_VERSION=$1
MANAGER_PRIVATE_IP=$2

# Generate TLS certificates
bash /tmp/create-server-certificates.sh $MANAGER_PRIVATE_IP
bash /tmp/create-client-certificates.sh
rm /tmp/ca.*

# Setup Docker configuration to enable TLS protection
mkdir -p /etc/systemd/system/docker.service.d
cp /tmp/docker-configs/override.conf /etc/systemd/system/docker.service.d/.

mkdir -p /etc/docker
cp /tmp/docker-configs/manager.json /etc/docker/daemon.json

export DOCKER_TLS_VERIFY=1
export DOCKER_CERT_PATH=$HOME/.docker
export DOCKER_HOST=tcp://$MANAGER_PRIVATE_IP:2376

echo "export DOCKER_TLS_VERIFY=$DOCKER_TLS_VERIFY" >> ~/.bash_profile
echo "export DOCKER_CERT_PATH=$DOCKER_CERT_PATH" >> ~/.bash_profile
echo "export DOCKER_HOST=$DOCKER_HOST" >> ~/.bash_profile

# Install docker
bash /tmp/install-docker.sh $DOCKER_VERSION

# Initialise swarm
docker swarm init --advertise-addr $MANAGER_PRIVATE_IP --listen-addr $MANAGER_PRIVATE_IP:2377


