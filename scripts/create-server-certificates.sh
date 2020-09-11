#!/bin/bash
MANAGER_PRIVATE_IP=$1

TMP_DIR=/tmp/kaabah

echo Generating server certificates 

# Create docker engine certificates directory
mkdir -p /etc/docker/tls

# Copy CA public key
cp $TMP_DIR/ca.cert /etc/docker/tls/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout /etc/docker/tls/key.pem -nodes \
  -out $TMP_DIR/server.csr -subj "/CN=$HOSTNAME"

# Generate pulic key
EXTFILE="extendedKeyUsage = serverAuth\nsubjectAltName = IP:$MANAGER_PRIVATE_IP"
openssl x509 -req \
  -days 1825 -sha256 \
  -in $TMP_DIR/server.csr -passin file:$TMP_DIR/ca.pass \
  -CA $TMP_DIR/ca.cert -CAkey $TMP_DIR/ca.key -CAcreateserial \
  -out /etc/docker/tls/cert.pem \
  -extfile <(echo -e "${EXTFILE}")

# Fix certificates permissions
chmod 644 \
  /etc/docker/tls/ca.pem \
  /etc/docker/tls/key.pem \
  /etc/docker/tls/cert.pem

# Clean temporary files
rm $TMP_DIR/server.csr

echo [ok] server certificates generated
