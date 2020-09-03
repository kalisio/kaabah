#!/bin/bash

# Check docker
k-leader-exec k-swarm-info

# Check gluster
sudo gluster pool list
