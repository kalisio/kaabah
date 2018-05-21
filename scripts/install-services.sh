#!/bin/bash
SUBDOMAIN=$1
DOMAIN=$2

cd $HOME/services

echo SUBDOMAIN=$SUBDOMAIN > services.env
echo DOMAIN=$DOMAIN >> services.env

cp /tmp/deploy-services.sh deploy.sh
chmod +x deploy.sh




