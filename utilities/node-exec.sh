
#!/bin/bash
NODE_NAME=$1
COMMAND=$2
PEM_KEY=$3

NODE_IP="$(docker inspect -f {{.Status.Addr}} ${NODE_NAME})"

eval "$(ssh-agent -s)"
chmod 600 $3
ssh -o StrictHostKeyChecking=no root@${NODE_IP} bash -c "${COMMAND}"
