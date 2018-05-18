#!/bin/bash
WORKSPACE=$1
DOMAIN=$2

cd $HOME/services

echo WORKSPACE=$WORKSPACE > services.env
echo DOMAIN=$DOMAIN >> services.env

cp /tmp/deploy-services.sh deploy.sh
chmod +x deploy.sh




