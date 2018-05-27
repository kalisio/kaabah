#!/bin/bash
SUBDOMAIN=$1
DOMAIN=$2
CA_SERVER=$3
CONTACT=$4
AUTH_USER=$5
AUTH_PASSWORD=$6

cd $HOME/services

echo SUBDOMAIN=$SUBDOMAIN > .env
echo DOMAIN=$DOMAIN >> .env
echo CA_SERVER=$CA_SERVER >> .env
echo CONTACT=$CONTACT >> .env
echo AUTH_USER=$AUTH_USER >> .env
echo AUTH_PASSWORD=$AUTH_PASSWORD >> .env

cp /tmp/deploy-services.sh deploy.sh
chmod +x deploy.sh




