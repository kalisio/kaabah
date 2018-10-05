---
sidebar: auto
---

::: warning Prerequisites 
**Kaabah** relies on various technologies such as [Terraform](https://www.terraform.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/), [Traefik](https://portainer.io)... and we assume that you are enough familiar with them. If not, please take a while to discover them.
:::

## Main concepts

**Kaabah** let you manipulate 4 kind of entities:
* **Configuration**: a set of Terraform variables used to design your infrastructure: the cloud provider, the number of workers, the number of volumes...
* **Workspace**: a collection of everything Terraform needs to manager an infrastructure: the configuration and state data to keep track of operations.
* **Cluster**: a Docker Swarm infrastructure built using **Kaabah*. Such an infrastructure is composed a manager node and a set of worker nodes. By default, **Kaabah** will protect your cluster with TLS certificates. 
* **Service**: an application deployed on your **Cluster**. By default, **Kaabah** comes with the following services:
  * [Registry](https://docs.docker.com/registry/)
  * [Traefik](https://traefik.io)
  * [Portainer](https://portainer.io/)
  * [Prometheus](https://prometheus.io/)
  * [Grafana](https://grafana.com/)
  
## Global approach

**Kaabah** is designed to take advantage of Terraform Workspaces and its usage relies on the recommend practices as presented in this [article](https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure). Thus, we assume a workspace is used to store the configuration of your infrastructure for each environment. 

Starting from this premise, **Kaabah** lets you to manage as many clusters as your projects require. If we decide to name our workspaces with both the project name and its environment (i.e. dev, test...), we can sketch the following diagram to illustrate the overall functioning of **Kaabah**:

![Kaabah terraform](./../assets/kaabah-terraform.svg)

In this diagram, the states of the different workspaces are stored within a dedicated bucket on amazon S3, but you are free to use any other Terraform [backends](https://www.terraform.io/docs/backends/).

## Terraform 

The Terraform code is composed of 2 modules:
- the **AWS** module which implements the Docker Swarm infrastructure on AWS
- the **Scaleway** module which implements the Docker Swarm infrastructure on Scaleway

And it exposes the following variables:

| Variables | Description |
|--- | --- |
| `SCALEWAY_ACCESS_KEY` | Your Scaleway access key |
| `SCALEWAY_TOKEN` | Your Scaleway token |
| `AWS_ACCESS_KEY` | Your AWS access key. This is important to note that your credential must allows access to AWS EC2 and S3 services |
| `AWS_SECRET_KEY` | Your AWS secret key |
| `AUTH_USER` | Your authentication identity to access the services |
| `AUTH_PASSWORD` | Your authentication password to access the services. It must be encrypted and for now only <b>SHA1</b> encryption is supported |
| `provider` | The provider to host the infrastructure. It must be `AWS` or `Scaleway`. There is no default value |
| `domain` | The domain to be added to the traefik rules. The default value is `kalisio.xyz` |
| `subdomain` | The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name by replacing each `-` by `.`. For instance, the subdomain for the workspace `app-dev` will be `app.dev` |
| `ca_server` | The Let's Encrypt server to generate certificates. The default value is empty to let traefik manage for you. However and because Let's Encrypt provides [rate limits](https://letsencrypt.org/docs/rate-limits/) it is recommended to set this value to `https://acme-staging-v02.api.letsencrypt.org/directory` when testing your infrastructure. |
| `contact`| The email contact provided to Let's Encrypt when generating certificates. The default value is `contact@kalisio.com` |
| `docker_version` | The version of the Docker engine to be installed. The default value is `18.03.1~ce-0~ubuntu` |
| `docker_network` | The name of the Docker network to be created. The default value is the name of the Terraform workspace without the environment part. For instance, the Docker network for the workspace `app-dev` will be `app` |
| `manager_instance_type` | The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. There is no default value |
| `manager_labels` | The labels to add to the manager node. Labels are defined using a set of *key=value* pairs separated with spaces. The default value is `""` |
| `manager_user_script` | The user script to be executed when when the manager is ready. It must be the file path to the script. The default value is `""` |
| `worker_instance_type` | The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value |
| `worker_instance_count` | The number of worker instances. The default value is `1` |
| `worker_additional_volume_count` | The number of volumes attached to each worker. The default value is `0` |
| `worker_additional_volume_size` | The size in giga bytes of the additional volumes. Note that on Scaleway you are limited to 150GB and the minimum size is 50GB. Moreover, you can add volumes to baremetal instances only. The default value is `150` |
| `worker_additional_volume_type` | The type of additional volumes to add. This option only works on AWS. The different [types](https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) are `gp2`, `io1`, `st1` and `sc1`. The default value is `sc1` |
| `worker_additional_volume_mount_point` | The mount point used to mount the devices. The prefix `/dev/` is automatically added and the default value is `data` |
| `worker_labels` | The labels to add to the different worker nodes. Labels are defined using a set of *key=value* pairs separated with spaces. Labels for each workers are declared using a list, e.g. `["worker0:true", "worker1:true", ...]`. The default value is `[]` |
| `worker_user_scripts` | The scripts to be executed once the workers are ready. It must be a list of file paths. The default value is `[]` |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. The default value is `ssh.pem` |
| `key_name` | The AWS name of the ssh key to be used when creating the instance. The default value is `kalisio` |

These variables can be overridden to match your environment requirements. See the section [How to use it ?](./../how-to-use-it/getting-started.md)

## Docker Swarm

<b>Kaabah</b> provides the Terraform and Docker configuration to create and manage a Docker Swarm with a stack of high level services that allows you to:
- route the traffic to the cluster and ensure SSL termination using [Traefik](https://traefik.io/)
- manage the services deployed on the cluster using [Portainer](https://portainer.io/)
- monitor the cluster using [Prometheus](https://prometheus.io/)
- analyze the cluster metrics using [Grafana](https://grafana.com/)
- share files among the nodes of the cluster using [SSHFS](https://fr.wikipedia.org/wiki/Secure_shell_file_system)

The following diagram illustrates a Swarm cluster composed of 4 nodes including a <b>manager</b> and 3 <b>workers</b> and the corresponding stack of services.

![swarm concept](./../assets/kaabah-swarm.svg)

The instances are named according the following convention:
-  `<WORKSPACE>-manager`
-  `<WORKSPACE>-woker-<INDEX>`

## Traefik

**traefik** allows to route the traffic from internet to the Docker Swarm infrastructure with SSL termination. It uses [Let's Encrypt](https://letsencrypt.org/) to generate and renew SSL certificates for each services.

::: warning
Du to rate limits fixed by Let's Encrypt, it is highly recommend to set the `ca_server` variable to `https://acme-staging-v02.api.letsencrypt.org/directory` when testing your infrastructure.
:::

By default, **Kaabah** specializes the **traefik** configuration with:
* 2 entrypoints: 
  * to allow HTTPS requests (port 443)
  * to redirect HTTP (port 80) request to HTTPS (port 443)
* 5 frontends to access the services: 
  - **traefik (dashboard)**
  - **Portainer**
  - **Prometheus**
  - **Alertmanager**
  - **Grafana** 

The frontend rules depend on the `subdomain` and `donain` variables defined in the Terraform configuration.

It also support basic authentication to access the services using the variables `AUTH_USER` and `AUTH_PASSWORD`. This means that **portainer** and **grafana** authentication have been disabled.

Considering a Terraform workspace named `app-dev`, the default subdomain will be `app.dev`and the **traefik** configuration will be as shown in the following diagram:

![traefik routing](./../assets/kaabah-traefik.svg)

## Prometheus

## Grafana

By default, **Grafana** is shipped with the following customisation:
* UI: 
  * Login form disabled: indeed the access to **Grafana** requires to be authenticated (basic auth). This requirement is defined using Traefik frontend rule.
  * The default user is granted the `EDITOR` permissions.
* Datasources: the Prometheus datasource is included by default. 
* Dashboards: 2 dashboards are provided by default:
  * Cluster overview which allow to visualize the main metrics of the cluster nodes
  * Swarm overview which allow to visualize the main metrics of the Docker swarm   
  