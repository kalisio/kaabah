#!/usr/bin/env bash
set -euo pipefail

KIND=$1
INDEX=$2

if [ "$KIND" != "manager" ]; then
    exit 1
fi

if [ $INDEX -ne 1 ]; then
    exit 1
fi

# Check docker
k-leader-exec k-swarm-info
k-worker-list

# Check gluster
sudo gluster pool list

