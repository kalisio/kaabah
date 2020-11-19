#!/usr/bin/env bash
set -euo pipefail

KIND=$1
INDEX=$2

if [ "$KIND" != "worker" ]; then
    exit 1
fi

if [ $INDEX -ne 1 ]; then
    exit 1
fi

# Check docker
docker version

# Check gluster
ls -al /mnt/share

# Check extra volume
touch /mnt/extra/dummy
