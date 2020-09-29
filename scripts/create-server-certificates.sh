#!/usr/bin/env bash
set -euo pipefail

MANAGER_PRIVATE_IP=$1

TMP_DIR=/tmp/kaabah

echo Generating server certificates

WORK_DIR=$TMP_DIR/server_certs
mkdir -p $WORK_DIR

# Copy CA public key
cp $TMP_DIR/ca.cert $WORK_DIR/ca.pem

# Generate private key
openssl req -new \
  -newkey rsa:4096 -keyout $WORK_DIR/key.pem -nodes \
  -out $TMP_DIR/server.csr -subj "/CN=$HOSTNAME"

# Generate pulic key
EXTFILE="extendedKeyUsage = serverAuth\nsubjectAltName = IP:$MANAGER_PRIVATE_IP"
openssl x509 -req \
  -days 1825 -sha256 \
  -in $TMP_DIR/server.csr -passin file:$TMP_DIR/ca.pass \
  -CA $TMP_DIR/ca.cert -CAkey $TMP_DIR/ca.key -CAcreateserial \
  -out $WORK_DIR/cert.pem \
  -extfile <(echo -e "${EXTFILE}")

# Clean temporary files
rm $TMP_DIR/server.csr
# Fix certificates permissions
chmod 644 $WORK_DIR/*.pem
# And put to final location
sudo cp -fR $WORK_DIR /etc/docker/tls

echo [ok] server certificates generated
