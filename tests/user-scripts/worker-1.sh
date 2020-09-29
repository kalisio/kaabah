#!/usr/bin/env bash
set -euo pipefail

# Check docker
docker version

# Check gluster
ls -al /mnt/share

# Check extra volume
touch /mnt/extra/dummy
