---
sidebar: auto
---

# Advanced usage

## Docker swarm

### Managing labels

If you desire to update the labels on your cluster and keep track of the changes, you need to:
1. taint the resources attached to the labels you want to change: `null_resource.manager_labels` and `null_resource.worker_labels.*` 

```bash
# Taint the labels attached to the desired nodes, i.e. the worker 1 and the manager
$terraform taint -module=AWS null_resource.worker_labels.1
$terraform taint -module=AWS null_resource.manager_labels
```

2. update your variables file: `workspaces/<file>.tfvars`
   
3. apply the changes

```bash
$terraform apply -var-file="workspaces/<file>.tfvars"
```

### Using the registry

Using the registry is simple as:

1. build or pull the desired Docker image

```bash
# Build example
$docker build https://github.com/<organisation>/<repository>.git -t <image>
```

2. tag the image
  
```bash
$docker tag <image> 127.0.0.1:5000/<image>:<tag>
```

3. push the image into the registry

```bash
$docker push 127.0.0.1:5000/<image>:<tag>
```

4. create or deploy a service using the image in the registry

```bash
# create a service
$docker service create --replicas 4 --name <service> 127.0.0.4:5000/<image>:<tag>
```

or 

```bash
# deploy the service within a stack:
$docker stack deploy -c <service.yml> -c <other-service.yml> ... <stack>
```

where <service.yml> is a **Docker Compose file** with the following skeleton:

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

## Services

### Updating the services

When updating Kaabah, you may need to update the services running on a given infrastructure. You can rely on Terraform to proceed:

1. taint the resource assigned to the services, that is to say: `null_resource.services`

```bash
$terraform taint -module=AWS null_resource.services
```

2. apply to update the services

```bash
$terraform apply -var-file="workspaces/<file>.tfvars"
```

### Extending the services

**Kaabah** allows you to extend the default services for a given cluster. For this, you must use the `extensions_dir` variable and let it to point to an existing directory that includes:
* a `deploy` directory where to put the **Docker Compose files** to be used to deploy the services
* a `configs` directory to be used to store the configuration of the services

You can take advantage of this feature to:
* extend the configuration of an existing service, i.e. add some limits to the container's resources
* override the default configuration of the existing services
* bootstrap your cluster with additional services
  
