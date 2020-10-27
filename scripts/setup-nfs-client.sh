#!/usr/bin/env bash
set -euo pipefail

NFS_SERVER_IP=$1
NFS_EXPORT=$2
MOUNT_POINT=$3
MOUNT_OPTS=_netdev,ro,async,nosuid,nodev,noexec

sudo apt-get install -y nfs-common

printf "%s:%s %s nfs4 %s 0 0\n" $NFS_SERVER_IP $NFS_EXPORT $MOUNT_POINT $MOUNT_OPTS | sudo tee -a /etc/fstab
