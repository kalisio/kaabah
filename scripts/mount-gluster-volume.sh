#!/usr/bin/env bash
set -euo pipefail

MOUNT_POINT=$1

# Create the mount point
sudo mkdir -p $MOUNT_POINT

# Setup the mount entry
echo localhost:/share $MOUNT_POINT glusterfs defaults,_netdev,backupvolfile-server=localhost 0 0 | sudo tee -a /etc/fstab

# Mount the volume
sudo mount.glusterfs localhost:/share $MOUNT_POINT

# Grant the current user the ownership of the mounted volume
sudo chown -R $USER:$USER $MOUNT_POINT
