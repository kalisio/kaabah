#!/bin/bash
NODE_IP=$1
LABELS=$2

NODE_ID=`docker node ls -q | xargs docker node inspect -f '{{ .ID }} {{ .Status.Addr }}' | grep $NODE_IP | cut -d" " -f1`

for LABEL in $LABELS; do
  if [ "$LABEL" != "" ]; then
    docker node update --label-add $LABEL $NODE_ID
  fi
done
