#!/bin/bash

# Check the swarm
k-leader-exec k-swarm-info

# Check gluster
touch /mnt/share/dummy