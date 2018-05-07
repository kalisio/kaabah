[Service]
ExecStart=
ExecStart=/usr/bin/dockerd -H fd:// \
  -H tcp://SWARM_MANAGER_PRIVATE_IP:2375 \
  --storage-driver=overlay2 \
  --log-driver json-file \
  --log-opt max-size=50m --log-opt max-file=10 \
  --experimental=true \
  --metrics-addr SWARM_MANAGER_PRIVATE_IP:9323