#!/bin/bash

TMP_DIR=/tmp/kaabah

mkdir $HOME/.docker

# Copy CA public key
cp $TMP_DIR/ca.cert ~/.docker/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout $HOME/.docker/key.pem -nodes \
  -out $TMP_DIR/client.csr -subj "/CN=$HOSTNAME"

# Generate public key
EXTFILE="extendedKeyUsage = clientAuth"
openssl x509 -req \
  -days 1825 -sha256 \
  -in $TMP_DIR/client.csr -passin file:$TMP_DIR/ca.pass \
  -CA $TMP_DIR/ca.cert -CAkey $TMP_DIR/ca.key -CAcreateserial \
  -out $HOME/.docker/cert.pem \
  -extfile <(echo -e "${EXTFILE}")
  
# Fix certificates permissions
chmod 600 \
  $HOME/.docker/ca.pem \
  $HOME/.docker/key.pem \
  $HOME/.docker/cert.pem

K_USER=${SUDO_USER:-$USER}
if [ "$K_USER" != "root" ]; then
  chown -R $SUDO_USER:$SUDO_USER $HOME/.docker
fi

# Clean temporary files
rm $TMP_DIR/client.csr