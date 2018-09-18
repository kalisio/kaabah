#!/bin/bash
DEVICE_NAME=$1
MOUNT_POINT=$2

mkdir -p /mnt/$MOUNT_POINT
mkfs -t ext4 $DEVICE_NAME

# Retrieve UUID
# The problem is that the mapping doesn't appear to be consistent. Upon reboot the drives sometimes 
# get mapped in a different order. This means that my /etc/fstab which specifies /dev/nvme1n1 gets 
# one drive one time and a different drive the next => so use the UUID
VOLUME_UUID=`blkid -s UUID -o value $DEVICE_NAME`

# Mount the volume
mount UUID=$VOLUME_UUID /mnt/$MOUNT_POINT

# Updated the fstab
echo UUID=$VOLUME_UUID /mnt/$MOUNT_POINT ext4 defaults,nofail 0 2 | sudo tee -a /etc/fstab
