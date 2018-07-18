#!/bin/bash
MANAGER_PRIVATE_IP=$1

mkdir -p /etc/docker/tls

# Copy CA public key
cp /tmp/ca.cert /etc/docker/tls/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout /etc/docker/tls/key.pem -nodes \
  -out /tmp/server.csr -subj "/CN=$HOSTNAME"

# Generate pulic key
EXTFILE="extendedKeyUsage = serverAuth\nsubjectAltName = IP:$MANAGER_PRIVATE_IP"
openssl x509 -req \
  -days 1825 -sha256 \
  -in /tmp/server.csr -passin file:/tmp/ca.pass \
  -CA /tmp/ca.cert -CAkey /tmp/ca.key -CAcreateserial \
  -out /etc/docker/tls/cert.pem \
  -extfile <(echo -e "${EXTFILE}")

# Fix certificates permissions
chmod 644 \
  /etc/docker/tls/ca.pem \
  /etc/docker/tls/key.pem \
  /etc/docker/tls/cert.pem

# Clean temporary files
rm /tmp/server.csr

