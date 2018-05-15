#!/bin/bash
cd $1
echo export WORKSPACE=$1 > .env
echo export DOMAIN=$2 >> .env
source .env
docker network create -d overlay --attachable swarm-network
docker stack deploy -c traefik.yml -c portainer.yml -c prometheus.yml $WORKSPACE

