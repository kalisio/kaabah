#!/bin/bash
export PLATFORM=$1 > .env
export DOMAIN=kalisio.xyz >> .env
docker-compose -f /$1/services.yml up -d
