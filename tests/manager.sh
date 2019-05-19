#!/bin/bash

echo "#!/bin/bash" >> /tmp/script.sh
echo 'echo $1 >> $HOME/manager'  >> /tmp/script.sh

chmod +x /tmp/script.sh

sudo k-worker-foreach -s /tmp/script.sh `hostname -i`