# kaabah

## What is it ?

<b>Kaabah</b> is a [Terraform](https://www.terraform.io/) based solution to create and manage a [Docker Swarm](https://docs.docker.com/engine/swarm/) infrastructure either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com) bootstrapped with high level services such. This bouquet of services includes [traefik](https://traefik.io/), [portainer](https://portainer.io/), [prometheus](https://prometheus.io/) and [grafana](https://grafana.com/) in order to help you operate your cluster easily.

## How does it work ?

### Overview

The overall approach is based on the use of Terraform Workspaces. As a reminder, a Workspace  is a collection of everything Terraform needs to run: a configuration of your infrastructure (i.e. <b>kaabah</b>), values for that configuration's variables, and state data to keep track of operations. Therefore a Workplace could be considered as an instance of the the infrastructure with its own environment. Follow this [link](https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure) to read more about Terraform Workspaces and best practices. 

Starting from this premise, <b>Kaabah</b> allows you to manage as many clusters as your projects require and stores their states in a bucket on Amazon S3. Moreover, you have the capability to use Scaleway or AWS to host your infrastructure. Assuming, we name the our workspaces with both the project name and its environment (i.e. dev, test...), we can sketch the following diagram to illustrate the overall functioning of <b>Kaabah</b>

![Kaabah overview](./assets/kaabah-overview.svg)

### Terraform configuration

The Terraform configuration is composed of 2 modules:
* the <b>AWS</b> module which has the responsibility to create the Docker Swarm infrastructure on AWS
* the <b>Scaleway</b> module has the responsibility to create the Docker Swarm infrastructure on Scaleway

And it exposes the following variables:

| Variables | Description |
|--- | --- |
| `SCALEWAY_ACCESS_KEY` | Your Scaleway access key |
| `SCALEWAY_TOKEN` | Your Scaleway token |
| `AWS_ACCESS_KEY` | Your AWS access key |
| `AWS_SECRET_KEY` | Your AWS secret key |
| `provider` | The provider to host the infrastructure. It must be `AWS` or `Scaleway`. The default value is `Scaleway` |
| `domain` | The domain to be added to the traefik rules. The default value is `kalisio.xyz` |
| `subdomain` | The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name |
| `docker_version` | The version of the Docker engine to be installed. The default value is `18.03.1~ce-0~ubuntu` |
| `manager_instance_type` | The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. The default value is `START1-S` |
| `worker_instance_type` | The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. The default value is `START1-S` |
| `worker_instance_count | The number of worker instances. The default value is `1` |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. The default value is `secrets/kalisio.pem` |
| `aws_key_name` | The AWS name of the ssh key to be used when creating the instance. the default value is `kalisio` |

These variables can be overridden to match your environments. See the section [How to use it ?](## How to use it ?)

### Docker Swarm

<b>Kaabah</b> provides the Terraform and Docker configuration to create and manage a Docker Swarm with a stack of high level services that allows you to:
* route the traffic to the Docker Swarm: [traefik](https://traefik.io/)
* manage the services deployed on the Docker Swarm: [portainer](https://portainer.io/)
* monitor the Docker Swarm: [prometheus](https://prometheus.io/)
* analyze the Docker Swarm metrics: [grafana](https://grafana.com/)

The following diagram illustrates a Swarm cluster composed of 4 nodes including a <b>manager</b> and 3 <b>workers</b> and the corresponding stack of services.

![swarm concept](./assets/kaabah-swarm.svg)

The instances are named according the following convention:
*  `<WORKSAPCE>-manager`
*  `<WORKSAPCE>-woker-<INDEX>`

### Traefik routing

<b>traefik</b> allows to route the traffic from internet to the Docker Swarm infrastructure. <b>Kabbah</b> specializes the <b>traefik</b> configuration with:
* 2 entrypoints: 
  * to allow HTTPS requests
  * to allow and redirect HTTP request to HTTPS
* 4 frontends to access the services: <b>traefik (ui)</b>, <b>portainer</b>, <b>prometheus</b> and <b>grafana</b>. The frontend rules depend on the `subdomain` and `donain` variables defined in the Terraform configuration.

Considering a Terraform workspace named `app-dev`, the default subdomain will be `app.dev`and the <b>traefik</b> configuration will be as the following diagram:

![traefik routing](./assets/kaabah-traefik.svg)

> traefik is also configured to generate and renew [Let's Encrypt](https://letsencrypt.org/) certificates

## How to use it ?

### Installation

#### Clone the Github repository

```bash
$ git clone https://github.com/kalisio/kaabah.git
$ cd kaabah
```

#### Setup your Terraform environment

1. Define your Scaleway credentials

```bash
$ export TF_VAR_SCALEWAY_ACCESS_KEY="<ACCESS-KEY>"
$ export TF_VAR_SCALEWAY_TOKEN="<ACCESS-TOKEN>" 
```

2. Define your AWS credentials

```bash
$ export TF_VAR_AWS_ACCESS_KEY="<ACCESS-KEY>"
$ export TF_VAR_AWS_SECRET_KEY="<SECRET-KEY>" 
```

3. Define the [S3 backend](https://www.terraform.io/docs/backends/types/s3.html) properties 

Create a file `backend.config` with the following properties:
```
bucket = "the name of the bucket"
region = "the region of the bucket"
key    = "the key to the states"
```

1. Initialize Terraform

```bash
$ terraform init -backend-config="path/to/your/backend.config"
```

### Usage

#### Create a workspace

```bash
terraform workspace new my-app
```

Terraform will automatically switch to the created workspace `my-test`

#### Configure the workspace

We recommend to create a `tfvars` file to override the default variables for your workspace. For instance, the `app-dev.tfvars` file may look like this:

```
provider = "SCALEWAY"

manager_instance_type = "C2M"

worker_instance_type = "C2S"

worker_instance_count = 2
```

#### Apply the changes

Within your workspace, apply Terraform with your specific configuration:

```
terraform apply -var-file app-dev.tfvars
```

#### Use the services




