#!/bin/bash
CONTACT=$1
SUBDOMAIN=$2
DOMAIN=$3

cd $HOME/services

echo CONTACT=$CONTACT > .env
echo SUBDOMAIN=$SUBDOMAIN >> .env
echo DOMAIN=$DOMAIN >> .env

cp /tmp/deploy-services.sh deploy.sh
chmod +x deploy.sh




