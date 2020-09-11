#!/bin/bash

echo Installing GlutterFS ...

# Setup glusterfs repository
add-apt-repository -y ppa:gluster/glusterfs-7 > /dev/null
apt-get update > /dev/null

# Install glusterfs
apt install -y glusterfs-server > /dev/null

# Enable glusterd
systemctl start glusterd
systemctl enable glusterd

# Create glusterfs data space
mkdir -p /glusterfs/volume0/brick0

echo [ok] GlutterFS installed