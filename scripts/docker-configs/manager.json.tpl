{
  "experimental": true,
  "metrics-addr" : "${MANAGER_PRIVATE_IP}:9323",
  "storage-driver" : "overlay2",
  "hosts": [
    "tcp://0.0.0.0:2376",
    "unix:///var/run/docker.sock"
  ],
  "tls": true,
  "tlsverify": true,
  "tlscacert": "/etc/docker/tls/ca.pem",
  "tlscert": "/etc/docker/tls/cert.pem",
  "tlskey": "/etc/docker/tls/key.pem"
}
