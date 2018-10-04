#!/bin/bash
set -a
. ./.env
set +a

EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi
docker stack deploy -c deploy/traefik.yml -c deploy/portainer.yml -c deploy/prometheus.yml -c deploy/grafana.yml -c deploy/registry.yml kaabah

