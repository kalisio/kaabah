#!/usr/bin/env bash
set -euo pipefail

IGNORE_IP=$1

echo Configuring fail2ban ...

# Onverwrites the SSHD configuration to avoid : Too many authentication failures
# https://visser.io/2017/07/resetting-ssh-access-after-too-many-authentication-failures-for-on-google-cloud-compute-engine/
echo "MaxAuthTries 25" | sudo tee -a /etc/ssh/sshd_config

# Configure the SSHD service
echo "[sshd]" | sudo tee -a /etc/fail2ban/kaabah.conf
echo "enabled = true" | sudo tee -a /etc/fail2ban/kaabah.conf
echo "maxretry = 3" | sudo tee -a /etc/fail2ban/kaabah.conf
echo "ignoreip = 127.0.0.1 $IGNORE_IP" | sudo tee -a /etc/fail2ban/kaabah.conf

# Restart services
sudo systemctl restart sshd
sudo systemctl restart fail2ban

echo [ok] fail2ban configured
