#!/bin/bash

mkdir -p $HOME/shared
echo "hello world" > shared/file

echo "#!/bin/bash" > /tmp/script.sh
echo 'mkdir -p $HOME/shared'  >> /tmp/script.sh
echo 'sshfs ${SUDO_USER:-$USER}@$1:$HOME/shared $HOME/shared -o IdentityFile=$HOME/.ssh/ssh.pem -o allow_other -o StrictHostKeyChecking=no' >> /tmp/script.sh

chmod +x /tmp/script.sh

k-worker-foreach -s /tmp/script.sh `hostname -I | awk '{print $2;}'`