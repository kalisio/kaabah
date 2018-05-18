#!/bin/bash
set -a
. ./services.env
set +a

SWARM_NETWORK=`docker network ls | grep swarm-network`
if [ "$SWARM_NETWORK" = "" ]; then
  docker network create -d overlay --attachable swarm-network
fi
docker stack deploy -c traefik.yml -c portainer.yml -c prometheus.yml services

