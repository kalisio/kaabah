#!/bin/bash
IGNORE_IP=$1

echo Installing Fail2ban ...

# Onverwrites the SSHD configuration to avoid : Too many authentication failures
# https://visser.io/2017/07/resetting-ssh-access-after-too-many-authentication-failures-for-on-google-cloud-compute-engine/
echo "MaxAuthTries 25" | tee -a /etc/ssh/sshd_config
systemctl restart sshd

# Install fail2ban
# https://www.techrepublic.com/article/how-to-install-fail2ban-on-ubuntu-server-18-04/
export DEBIAN_FRONTEND=noninteractive #https://github.com/kalisio/kaabah/issues/134
apt-get -y install fail2ban > /dev/null

# Configure the SSHD service
echo "[sshd]" > /etc/fail2ban/kaabah.conf
echo "enabled = true" >> /etc/fail2ban/kaabah.conf
echo "maxretry = 3" >> /etc/fail2ban/kaabah.conf
echo "ignoreip = 127.0.0.1 $IGNORE_IP" >> /etc/fail2ban/kaabah.conf

# Restart the service
systemctl restart fail2ban

echo [ok] Fail2ban installed