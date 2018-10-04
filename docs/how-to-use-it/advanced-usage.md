---
sidebar: auto
---

# Advanced usage

## Docker swarm

### Managing labels

If you desire to update the labels on your cluster and keep track of the changes, you need to:
1. taint the resources attached to the labels you want to change
2. update your variables file
3. apply the changes
   
```bash
# Taint the labels attached to the worker 1
$terraform taint -module=AWS null_resource.worker_labels.1
# Taint the labels attached to the manager
$terraform taint -module=AWS null_resource.manager_labels
# Edit the current tfvars file and apply the changes
 $terraform apply -var-file="workspaces/<file>.tfvars"
```

### Using the registry

Using the registry is simple as:

```bash
# Build or get an existing image, i.e:
$docker build https://github.com/<organisation>/<repository>.git -t <image> 
# Tag the image
$docker tag <image> 127.0.0.1:5000/<image>:<tag>
# Push the image in the local registry
$docker push 127.0.0.1:5000/<image>:<tag>
```

One the image pushed in the registry, you can use it to create a service:

```bash
$docker service create --replicas 4 --name <service> 127.0.0.4:5000/<image>:<tag>
```

Or deploy the service within a stack:

```bash
$docker stack deploy -c <service.yml> <stack>
```

where <service.yml> is a **Docker Compose** file with the following skeleton:

```yaml
version: '3.5'

services:
  <service>:
    image: 127.0.0.1:5000/<image>:<tag>
    networks:
      - kaabah-network
    deploy:
      replicas: <replicas>

networks:
  kargo-network:
    name: ${DOCKER_NETWORK}
    external: true
```

