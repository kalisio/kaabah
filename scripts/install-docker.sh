#!/bin/bash
DOCKER_VERSION=$1

# setup Docker repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# install Docker CE
apt-get update -y
apt-get install -y docker-ce=$DOCKER_VERSION
