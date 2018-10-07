#!/bin/bash
set -a
. ./.env
set +a

EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi

SERVICES_TO_DEPLOY=
for SERVICE in deploy/*.yml; do
  SERVICES_TO_DEPLOY="$SERVICES_TO_DEPLOY -c $SERVICE"
done

docker stack deploy $SERVICES_TO_DEPLOY kaabah

