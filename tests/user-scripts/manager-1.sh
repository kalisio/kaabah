#!/bin/bash

# Check docker
k-leader-exec k-swarm-info
k-worker-list

# Check gluster
if [ "$USER" == root ]; then
  echo root
else
  echo sudo
fi

