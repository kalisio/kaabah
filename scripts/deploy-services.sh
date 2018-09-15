#!/bin/bash
set -a
. ./.env
set +a

EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi
docker stack deploy -c traefik.yml -c portainer.yml -c prometheus.yml -c registry.yml services

