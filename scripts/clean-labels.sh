
#!/bin/bash
NODE_IP=$1


NODE_ID=`docker node ls -q | xargs docker node inspect -f '{{ .ID }} {{ .Status.Addr }}' | grep $NODE_IP | cut -d" " -f1`
if [ "$NODE_ID" != "" ]; then
  LABELS=`docker node inspect -f '{{ range $k, $v := .Spec.Labels }}{{ $k }} {{end}}' $NODE`
  for LABEL in $LABELS; do
    if [ "$LABEL" != "" ]; then
      docker node update --label-rm $LABEL $NODE
    fi
  done
fi

