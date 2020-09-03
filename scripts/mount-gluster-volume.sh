#!/bin/bash
MOUNT_POINT=$1

# Create the mount point
mkdir -p $MOUNT_POINT

# Setup the mount entry
echo localhost:/share $MOUNT_POINT glusterfs defaults,_netdev,backupvolfile-server=localhost 0 0 | tee -a /etc/fstab

# Mount the volume
mount.glusterfs localhost:/share $MOUNT_POINT

# Grant the current user the ownership of the mounted volume
K_USER=${SUDO_USER:-$USER}
if [ "$K_USER" != "root" ]; then
  chown -R $SUDO_USER:$SUDO_USER $MOUNT_POINT
fi