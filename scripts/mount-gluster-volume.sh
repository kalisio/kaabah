#!/bin/bash

# Create the mount point
mkdir -p /mnt/share

# Setup the mount entry
echo localhost:/share /mnt/share glusterfs defaults,_netdev,backupvolfile-server=localhost 0 0 | tee -a /etc/fstab

# Mount the volume
mount.glusterfs localhost:/share /mnt/share

# Grant the current user the ownership of the mounted volume
K_USER=${SUDO_USER:-$USER}
if [ "$K_USER" != "root" ]; then
  chown -R $SUDO_USER:$SUDO_USER /mnt/$MOUNT_POINT
fi