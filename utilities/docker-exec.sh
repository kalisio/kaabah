
#!/bin/bash
SERVICE_NAME=$1
COMMAND=$2
PEM_KEY=$3


TASK_ID="$(docker service ps -q ${SERVICE_NAME})"
CONT_ID="$(docker inspect -f "{{.Status.ContainerStatus.ContainerID}}" ${TASK_ID})"
NODE_ID="$(docker inspect -f "{{.NodeID}}" ${TASK_ID})"
NODE_IP="$(docker inspect -f {{.Status.Addr}} ${NODE_ID})"

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/$3

ssh -o StrictHostKeyChecking=no root@${NODE_IP} docker exec ${CONT_ID} bash -c "${COMMAND}"
