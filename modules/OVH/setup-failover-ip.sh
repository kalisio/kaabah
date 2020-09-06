#!/bin/bash
FAILOVER_IP=$1

# Copy the file
cp /etc/netplan/50-cloud-init.yaml 50-cloud-init.yaml

# setup the failover ip if any
# configure netplan
echo "network:" > ens3.yml
echo "    ethernets:" >> ens3.yml
echo "        ens3:" >> ens3.yml
echo "            addresses:" >> ens3.yml
echo "            - $FAILOVER_IP/32" >> ens3.yml
yq m -i 50-cloud-init.yaml ens3.yml
rm ens3.yml

# Copy the updated file
mv 50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml 

# Restart netplan
sudo netplan apply
