#!/bin/bash

# Retrieve the unconfigured interface
INTERFACE_DOWN=`ip address list | grep DOWN`
# Retrieve the name of the interface 
INTERFACE_NAME=${INTERFACE_DOWN:3:4}
# Retrieve the unconfigured interface
INTERFACE_INFO=`ip address show label $INTERFACE_NAME | grep ether`
# Retrieve the mac address
INTERFACE_MAC=${INTERFACE_INFO:15:17}
# Configure netplan
echo "        ens4:" | sudo tee -a /etc/netplan/50-cloud-init.yaml
echo "            dhcp4: true" | sudo tee -a /etc/netplan/50-cloud-init.yaml
echo "            match:" | sudo tee -a /etc/netplan/50-cloud-init.yaml
echo "                macaddress: $INTERFACE_MAC" | sudo tee -a /etc/netplan/50-cloud-init.yaml
echo "            set-name: ens4" | sudo tee -a /etc/netplan/50-cloud-init.yaml
# Restart netplan
sudo netplan apply
