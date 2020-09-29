#!/usr/bin/env bash
set -euo pipefail

echo Configuring GlusterFS ...

# Enable service
sudo systemctl enable glusterd
sudo systemctl start glusterd

# Create glusterfs data space
sudo mkdir -p /glusterfs/volume0/brick0

echo [ok] GlusterFS configured
