#!/bin/bash
SUBNET_CIDR=$1

TMP_DIR=/tmp/kaabah

apt-get update > /dev/null

bash $TMP_DIR/install-fail2ban.sh $SUBNET_CIDR
bash $TMP_DIR/install-gluster.sh
bash $TMP_DIR/install-rclone.sh
bash $TMP_DIR/install-jq.sh
bash $TMP_DIR/install-yq.sh
