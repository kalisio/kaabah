#!/usr/bin/env bash
set -euo pipefail

FAILOVER_IP=$1
IFACE_NAME=ens3

# Declare an additional network interface using failover ip
echo "auto $IFACE_NAME" > failover_iface
echo "allow-hotplug $IFACE_NAME" >> failover_iface
echo "iface $IFACE_NAME inet static" >> failover_iface
echo "  address $FAILOVER_IP/32" >> failover_iface

# Copy the interface definition
sudo mv failover_iface /etc/network/interfaces.d
sudo chown root:root /etc/network/interfaces.d/failover_iface

# Start interface
# sudo ifup $IFACE_NAME
