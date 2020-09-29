#!/usr/bin/env bash
set -euo pipefail

SUBNET_CIDR=$1

TMP_DIR=/tmp/kaabah

# Wait for cloud init stuff to finish
cloud-init status --wait

bash $TMP_DIR/setup-fail2ban.sh $SUBNET_CIDR
bash $TMP_DIR/setup-gluster.sh
