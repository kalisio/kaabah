#!/usr/bin/env bash
set -euo pipefail

NFS_MOUNT_POINT=$1
NFS_CLIENT_IPS=$2
NFS_OPTS=ro,async,subtree_check

sudo apt-get install -y nfs-kernel-server

# DENY all clients access to nfs
printf "rpcbind mountd nfsd statd lockd rquotad : ALL\n" | sudo tee -a /etc/hosts.deny

# ALLOW only specified clients
for CLIENT_IP in $NFS_CLIENT_IPS; do
  printf "rpcbind mountd nfsd statd lockd rquotad : $CLIENT_IP\n" | sudo tee -a /etc/hosts.allow
done

# Create exported mount point
printf "%s\t" $NFS_MOUNT_POINT | sudo tee -a /etc/exports
for CLIENT_IP in $NFS_CLIENT_IPS; do
  printf " %s(%s)" $CLIENT_IP $NFS_OPTS | sudo tee -a /etc/exports
done
printf "\n" | sudo tee -a /etc/exports

# define specific ports to use for the service so we can add rules to security groups
# ports 111 2049 32764:32769 (tcp/udp) must be allowed on the server
# ports 111 & 2049 are default ports for rpcbind & nfsd

# options for kernel modules
printf "options lockd nlm_udpport=32768 nlm_tcpport=32768\n" | sudo tee -a /etc/modprobe.d/nfs-static-ports.conf
printf "options nfs callback_tcpport=32764\n" | sudo tee -a /etc/modprobe.d/nfs-static-ports.conf

# also define through sysctl
printf "fs.nfs.nfs_callback_tcpport = 32764\n" | sudo tee -a /etc/sysctl.d/nfs-static-ports.conf
printf "fs.nfs.nlm_tcpport = 32768\n" | sudo tee -a /etc/sysctl.d/nfs-static-ports.conf
printf "fs.nfs.nlm_udpport = 32768\n" | sudo tee -a /etc/sysctl.d/nfs-static-ports.conf

sudo sed -i 's/STATDOPTS="/STATDOPTS="--port 32765 --outgoing-port 32766 /' /etc/default/nfs-common
sudo sed -i 's/RPCMOUNTDOPTS="/RPCMOUNTDOPTS="--port 32767 /' /etc/default/nfs-kernel-server

sudo sysctl --system
sudo systemctl restart nfs-server
