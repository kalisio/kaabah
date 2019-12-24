#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
apt-get -y install sshfs
# Uncomment fuse conf to enable the allow_other option
sed -i '/user_allow_other/s/^#//g' /etc/fuse.conf
