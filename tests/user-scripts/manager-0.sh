#!/usr/bin/env bash
set -euo pipefail

# Check the swarm
k-leader-exec k-swarm-info

# Check share volume
touch /mnt/share/dummy

# Check extra volume
touch /mnt/extra/dummy
