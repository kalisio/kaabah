#!/bin/bash

# Check docker
k-leader-exec k-swarm-info
k-worker-list

# Check gluster
if [ "$SUDO_USER" != "" ]; then
  gluster pool list
else
  sudo gluster pool list
fi
