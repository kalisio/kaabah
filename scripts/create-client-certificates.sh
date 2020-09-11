#!/bin/bash
K_USER=$1
K_HOME=$2

TMP_DIR=/tmp/kaabah

echo Generating client certificates

# Create .docker directory
mkdir $K_HOME/.docker

# Copy CA public key
cp $TMP_DIR/ca.cert $K_HOME/.docker/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout $K_HOME/.docker/key.pem -nodes \
  -out $TMP_DIR/client.csr -subj "/CN=$HOSTNAME"

# Generate public key
EXTFILE="extendedKeyUsage = clientAuth"
openssl x509 -req \
  -days 1825 -sha256 \
  -in $TMP_DIR/client.csr -passin file:$TMP_DIR/ca.pass \
  -CA $TMP_DIR/ca.cert -CAkey $TMP_DIR/ca.key -CAcreateserial \
  -out $K_HOME/.docker/cert.pem \
  -extfile <(echo -e "${EXTFILE}")
  
# Fix certificates permissions
chmod 600 \
  $K_HOME/.docker/ca.pem \
  $K_HOME/.docker/key.pem \
  $K_HOME/.docker/cert.pem

if [ "$K_USER" != "root" ]; then
  chown -R $SUDO_USER:$SUDO_USER $K_HOME/.docker
fi

# Clean temporary files
rm $TMP_DIR/client.csr

echo [ok] client certificates generated