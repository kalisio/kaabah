#!/usr/bin/env bash
set -euo pipefail

KIND=$1
INDEX=$2

if [ "$KIND" != "manager" ]; then
    exit 1
fi

if [ $INDEX -ne 0 ]; then
    exit 1
fi

# Check the swarm
k-leader-exec k-swarm-info

# Check share volume
touch /mnt/share/dummy

# Check extra volume
touch /mnt/extra/dummy
