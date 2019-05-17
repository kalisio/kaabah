#!/bin/bash
DOMAIN=$1
SUBDOMAIN=$2
CA_SERVER=$3
CONTACT=$4
AUTH_USER=$5
AUTH_PASSWORD=$6
DOCKER_NETWORK=$7
MANAGER_PRIVATE_IP=$8

# Create the kaabah diectory
cd $HOME/kaabah

# Create the .env file
echo DOMAIN=$DOMAIN >> .env
echo SUBDOMAIN=$SUBDOMAIN > .env
echo CA_SERVER=$CA_SERVER >> .env
echo CONTACT=$CONTACT >> .env
echo AUTH_USER=$AUTH_USER >> .env
echo AUTH_PASSWORD=\'$AUTH_PASSWORD\' >> .env
echo DOCKER_NETWORK=$DOCKER_NETWORK >> .env

# Customize promotheus configuration
export MANAGER_PRIVATE_IP
envsubst < configs/prometheus/prometheus.yml.tpl > configs/prometheus/prometheus.yml

# Copy the scripts to manage the stack
cp ~/.kaabah/deploy-services.sh .
cp ~/.kaabah/remove-services.sh .
chmod +x deploy-services.sh
chmod +x remove-services.sh




