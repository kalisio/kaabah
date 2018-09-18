#!/bin/bash
apt-get install sshfs
# Uncomment fuse conf to enable the allow_other option
sed -i '/user_allow_other/s/^#//g' /etc/fuse.conf
