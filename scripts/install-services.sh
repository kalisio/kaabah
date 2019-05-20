#!/bin/bash
DOMAIN=$1
SUBDOMAIN=$2
CA_SERVER=$3
CONTACT=$4
AUTH_USER=$5
AUTH_PASSWORD=$6
DOCKER_NETWORK=$7
MANAGER_PRIVATE_IP=$8
SLACK_WEBHOOK_URL=$9
SLACK_CHANNEL=${10}

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
echo SLACK_WEBHOOK_URL=$SLACK_WEBHOOK_URL >> .env
echo SLACK_CHANNEL=$SLACK_CHANNEL >> .env

# Customize promotheus configuration
export MANAGER_PRIVATE_IP
envsubst < configs/prometheus/prometheus.yml.tpl > configs/prometheus/prometheus.yml

if [ "$SLACK_WEBHOOK_URL" != "" ] && [ "$SLACK_CHANNEL" != "" ]; then
  export SLACK_WEBHOOK_URL
  export SLACK_CHANNEL
  envsubst < configs/prometheus/alertmanager.yml.tpl > configs/prometheus/alertmanager.yml
fi
  
# Copy the scripts to manage the stack
cp ~/.kaabah/deploy-services.sh .
cp ~/.kaabah/remove-services.sh .
chmod +x deploy-services.sh
chmod +x remove-services.sh
