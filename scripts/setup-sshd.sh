#!/bin/bash
IGNORE_IP=$1

# Onverwrites the SSHD configuration to avoid : Too many authentication failures
# https://visser.io/2017/07/resetting-ssh-access-after-too-many-authentication-failures-for-on-google-cloud-compute-engine/
echo "# Max login attempts for Kaabah" >> /etc/ssh/sshd_config
echo "MaxAuthTries 10" >> /etc/ssh/sshd_config
systemctl restart sshd

# Install fail2ban
# https://www.techrepublic.com/article/how-to-install-fail2ban-on-ubuntu-server-18-04/
apt-get -y install fail2ban
# Configure the SSHD service
echo "[sshd]" > /etc/fail2ban/sshd-jail.conf
echo "enabled = true" >> /etc/fail2ban/sshd-jail.conf
echo "maxretry = 3" >> /etc/fail2ban/sshd-jail.conf
echo "ignoreip = 127.0.0.1 $IGNORE_IP" >> /etc/fail2ban/sshd-jail.conf
# Restart the service
systemctl restart fail2ban