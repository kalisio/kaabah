#!/usr/bin/env bash
set -euo pipefail

SUBNET_CIDR=$1

TMP_DIR=/tmp/kaabah

# Wait for cloud init stuff to finish
cloud-init status --wait

bash $TMP_DIR/setup-fail2ban.sh $SUBNET_CIDR
bash $TMP_DIR/setup-gluster.sh

# Make journald store it's logs on disk
sudo mkdir /etc/systemd/journald.conf.d
printf "# store logs on persistent storage\n# by default will use max 10%% of the file system, capped to 4G\n[Journal]\nStorage=persistent\n" | sudo tee /etc/systemd/journald.conf.d/persistent-logs.conf
# journald restart may fail, but that's ok
sudo sh -c "systemctl restart systemd-journald || true"
