#!/usr/bin/env bash
set -euo pipefail

# Check docker
k-leader-exec k-swarm-info
k-worker-list

# Check gluster
sudo gluster pool list

