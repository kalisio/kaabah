#!/usr/bin/env bash
set -euo pipefail

KIND=$1
INDEX=$2

if [ "$KIND" = "manager" ]; then
    # Check the swarm
    k-leader-exec k-swarm-info
    
    if [ $INDEX -eq 0 ]; then
        # Check share volume
        touch /mnt/share/dummy

        # Check extra volume
        touch /mnt/extra/dummy
    else
        # Check gluster
        sudo gluster pool list
    fi
elif [ "$KIND" = "worker" ]; then
    # Check gluster
    ls -al /mnt/share

    # Check extra volume
    touch /mnt/extra/dummy
fi

# Check docker is available
docker version
