#!/usr/bin/env bash
set -euo pipefail

DEVICE_NAME=$1
MOUNT_POINT=$2

# Format the volume
sudo mkfs -t ext4 $DEVICE_NAME

# Retrieve UUID to mount the volume
# The problem is that the mapping doesn't appear to be consistent. Upon reboot the drives sometimes 
# get mapped in a different order. This means that my /etc/fstab which specifies /dev/nvme1n1 gets 
# one drive one time and a different drive the next => so it is required to use the UUID
VOLUME_UUID=`sudo blkid -s UUID -o value $DEVICE_NAME`
sudo mkdir -p $MOUNT_POINT
sudo mount UUID=$VOLUME_UUID $MOUNT_POINT

# Update the fstab
echo UUID=$VOLUME_UUID $MOUNT_POINT ext4 defaults,nofail 0 2 | sudo tee -a /etc/fstab

# Grant the current user the ownership of the mounted volume
sudo chown -R $USER:$USER $MOUNT_POINT
