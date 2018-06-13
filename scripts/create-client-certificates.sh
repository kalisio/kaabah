#!/bin/bash

mkdir ~/.docker

# Copy CA public key
cp /tmp/ca.cert ~/.docker/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout ~/.docker/key.pem -nodes \
  -out /tmp/client.csr -subj "/CN=$HOSTNAME"

# Generate public key
EXTFILE="extendedKeyUsage = clientAuth"
openssl x509 -req \
  -days 1825 -sha256 \
  -in /tmp/client.csr -passin file:/tmp/ca.pass \
  -CA /tmp/ca.cert -CAkey /tmp/ca.key -CAcreateserial \
  -out ~/.docker/cert.pem \
  -extfile <(echo -e "${EXTFILE}")
  
# Fix certificates permissions
chmod 600 \
  ~/.docker/ca.pem \
  ~/.docker/key.pem \
  ~/.docker/cert.pem

# Clean temporary files
rm /tmp/client.csr