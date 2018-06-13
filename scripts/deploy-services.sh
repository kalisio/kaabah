#!/bin/bash
set -a
. ./.env
set +a

EXISTING_SWARM_NETWORK=`docker network ls | grep $SWARM_NETWORK`
if [ "$EXISTING_SWARM_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $SWARM_NETWORK
fi
docker stack deploy -c traefik.yml -c portainer.yml -c prometheus.yml services

