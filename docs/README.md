# kaabah

## What is it ?

<b>Kaabah</b> is a [Terraform](https://www.terraform.io/) based solution to create and manage a [Docker Swarm](https://docs.docker.com/engine/swarm/) infrastructure either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com). In addition, the infrastructure is powered with a stack of services including [traefik](https://traefik.io/), [portainer](https://portainer.io/) and [prometheus](https://prometheus.io/) to help you operate the cluster easily.

The overall approach is based on the use of [Terrafrom Workspaces](https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure). Since each workspace could be considered as an instance of the infrastructure with its onw configuration, Kaabah let you manage as many infrastructure as you require.

![Kaabah overview](./assets/kaabah-overview.png)

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

4. Initialise Terraform

```bash
$ terraform init -backend-config="path/to/your/backend.config"
```


### Usage

#### Create a workspace

```bash
terraform workspace new app-dev
```

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

Roughly, this will produce the following:
* reserves public IPs for each nodes (manager and workers)
* creates a security group for the instances allowing SSH, HTTP/S inbound traffic and private Docker swarm traffic.
* provision one Xenial Ubuntu instance as the docker manager with the naming convention:  `<WORKSAPCE>-manage`
* provision 2 Xenial Ubuntu instances as the docker workers with the naming convetion: `<WORKSPACE>-worker-<INDEX>`

#### Check the services

The infrastructure is powered with the following services:
* the reverse proxy [traefik](https://docs.traefik.io)
* the container manager [portainer](https://portainer.readthedocs.io) 
* the monitoring solution [prometheus](https://prometheus.io) 



