#!/bin/bash
DEVICE_NAME=$1
MOUNT_POINT=$2
OWNER=$3

echo $DEVICE_NAME
echo $MOUNT_POINT
echo $OWNER

# Format the volume
mkfs -t ext4 $DEVICE_NAME

# Retrieve UUID to mount the volume
# The problem is that the mapping doesn't appear to be consistent. Upon reboot the drives sometimes 
# get mapped in a different order. This means that my /etc/fstab which specifies /dev/nvme1n1 gets 
# one drive one time and a different drive the next => so it is required to use the UUID
VOLUME_UUID=`blkid -s UUID -o value $DEVICE_NAME`
mkdir -p /mnt/$MOUNT_POINT
mount UUID=$VOLUME_UUID /mnt/$MOUNT_POINT

# Update the fstab
echo UUID=$VOLUME_UUID /mnt/$MOUNT_POINT ext4 defaults,nofail 0 2 | sudo tee -a /etc/fstab

# Grant the current user the ownership of the mounted volume
if [ "$OWNER" != "" ]; then
  chown -R $OWNER:$OWNER /mnt/$MOUNT_POINT
fi