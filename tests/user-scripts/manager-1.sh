#!/bin/bash

# Check docker
k-leader-exec k-swarm-info

# Check gluster
if [ "$SUDO_USER" == "$USER" ]; then
  gluster pool list
else
  sudo gluster pool list
fi
