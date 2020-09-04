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
NB_NODES=`echo $NODES | wc -w`
if [ "$NB_NODES" != "1" ]; then
  echo "Creating share volume in replicated mode"
  gluster volume create share replica `echo $NODES | wc -w` transport tcp $CRATE_NODE_LIST force
else
  echo "Creating share volume in distributed mode"
  gluster volume create share transport tcp $CRATE_NODE_LIST force
fi

# Start the volume
# Sometimes a delay is required before starting the volume
sleep 15s
gluster volume start share

# Setup security
gluster volume set share auth.allow $SHARE_NODE_LIST
