#!/bin/bash
DOCKER_VERSION=$1

echo Installing Docker $DOCKER_VERSION ...

# setup Docker repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" > /dev/null
apt-get update > /dev/null

# install Docker CE
apt-get install -y docker-ce=$DOCKER_VERSION > /dev/null

# Add the user to the docker group
K_USER=${SUDO_USER:-$USER}
if [ "$K_USER" != "root" ]; then
  usermod -a -G docker $K_USER
fi

echo [x] Docker installed