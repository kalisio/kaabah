#!/bin/bash
NODES=$1

CRATE_NODE_LIST=
SHARE_NODE_LIST=
for NODE in $NODES; do
  gluster peer probe $NODE
  CRATE_NODE_LIST="$CRATE_NODE_LIST $NODE:/glusterfs/volume0/brick0"
  SHARE_NODE_LIST="$SHARE_NODE_LIST,$NODE"
done

# Display the pool (not necessary)
gluster pool list

# Create the volume 
gluster volume create share replica `echo $NODES | wc -w` transport tcp $CRATE_NODE_LIST force
gluster volume start share

# Setup security
gluster volume set share auth.allow $SHARE_NODE_LIST
