#!/bin/bash

echo Installing GlutterFS ...

# Install prerequisite
apt-get install -y software-properties-common > /dev/null

# Setup glusterfs repository
add-apt-repository -y ppa:gluster/glusterfs-3.12 > /dev/null
apt-get update > /dev/null

# Install glusterfs
apt install -y glusterfs-server > /dev/null

# Enable glusterd
systemctl start glusterd
systemctl enable glusterd

# Create glusterfs data space
mkdir -p /glusterfs/volume0/brick0

echo [ok] GlutterFS installed