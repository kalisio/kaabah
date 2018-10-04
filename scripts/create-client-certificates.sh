#!/bin/bash

mkdir $HOME/.docker

# Copy CA public key
cp $HOME/.kaabah/ca.cert ~/.docker/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout $HOME/.docker/key.pem -nodes \
  -out $HOME/.kaabah/client.csr -subj "/CN=$HOSTNAME"

# Generate public key
EXTFILE="extendedKeyUsage = clientAuth"
openssl x509 -req \
  -days 1825 -sha256 \
  -in $HOME/.kaabah/client.csr -passin file:$HOME/.kaabah/ca.pass \
  -CA $HOME/.kaabah/ca.cert -CAkey $HOME/.kaabah/ca.key -CAcreateserial \
  -out $HOME/.docker/cert.pem \
  -extfile <(echo -e "${EXTFILE}")
  
# Fix certificates permissions
chmod 600 \
  $HOME/.docker/ca.pem \
  $HOME/.docker/key.pem \
  $HOME/.docker/cert.pem

# Clean temporary files
rm $HOME/.kaabah/client.csr