# kaabah

## What is it ?

<b>Kaabah</b> is a [Terraform](https://www.terraform.io/) based solution to create and manage a [Docker Swarm](https://docs.docker.com/engine/swarm/) infrastructure either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com) bootstrapped with high level services such. This bouquet of services includes [traefik](https://traefik.io/), [portainer](https://portainer.io/), [prometheus](https://prometheus.io/) and [grafana](https://grafana.com/) in order to help you operate your cluster easily.

> The Kaabah project was initiated by Kalision to provide us with the necessary tools to manage the different infrastructures we need to support our development.<br/><br/>
[![kalisio](./assets/kalisio-banner.png)](https://kalisio.com)<br/>
<i>Unleashing the potential of spatial information</i>

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
| `AUTH_USER` | Your authentication identity to access the services |
| `AUTH_PASSWORD` | Your authentication password to access the services. It must be encrypted and for now only <b>SHA1</b> encryption is supported |
| `provider` | The provider to host the infrastructure. It must be `AWS` or `Scaleway`. The default value is `Scaleway` |
| `domain` | The domain to be added to the traefik rules. The default value is `kalisio.xyz` |
| `subdomain` | The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name by replacing each `-` by `.` (i.e. the output of `app-dev` will be `app.dev`). |
| `ca_server` | The Let's Encrypt server to generate certificates. The default value is empty to let traefik manage for you. However and because Let's Encrypt provides [rate limits](https://letsencrypt.org/docs/rate-limits/) it is recommended to set this value to `https://acme-staging-v02.api.letsencrypt.org/directory` when testing your infrastructure. |
| `contact`| The email contact provided to Let's Encrypt when generating certificates. The default value is `contact@kalisio.com` |
| `docker_version` | The version of the Docker engine to be installed. The default value is `18.03.1~ce-0~ubuntu` |
| `manager_instance_type` | The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. The default value is `START1-S` |
| `worker_instance_type` | The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. The default value is `START1-S` |
| `worker_instance_count | The number of worker instances. The default value is `1` |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. The default value is `secrets/kalisio.pem` |
| `aws_key_name` | The AWS name of the ssh key to be used when creating the instance. The default value is `kalisio` |

These variables can be overridden to match your environment requirements. See the section [How to use it ?](## How to use it ?)

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

### traefik

<b>traefik</b> allows to route the traffic from internet to the Docker Swarm infrastructure with SSL termination. It uses [Let's Encrypt](https://letsencrypt.org/) to generate and renew SSL certificates for each services.

> Du to rate limits fixed by Let's Encrypt, it is highly recommend to set the `ca_server` to `https://acme-staging-v02.api.letsencrypt.org/directory` when testing your infrastructure.

By default, <b>Kabbah</b> specializes the <b>traefik</b> configuration with:
* 2 entrypoints: 
  * to allow HTTPS requests
  * to allow and redirect HTTP request to HTTPS
* 5 frontends to access the services: 
  * <b>traefik (ui)</b> 
  * <b>portainer</b>, 
  * <b>prometheus</b>
  * <b>alertmanager</b>
  * <b>grafana</b>. 
The frontend rules depend on the `subdomain` and `donain` variables defined in the Terraform configuration.

It also support basic authentication to access the services using the variables `AUTH_USER` and `AUTH_PASSWORD`. This means that <b>portainer</b> and <b>grafana</b> authentication have been disabled.

Considering a Terraform workspace named `app-dev`, the default subdomain will be `app.dev`and the <b>traefik</b> configuration will be as the following diagram:

![traefik routing](./assets/kaabah-traefik.svg)


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
$export TF_VAR_SCALEWAY_ACCESS_KEY="<ACCESS-KEY>"
$export TF_VAR_SCALEWAY_TOKEN="<ACCESS-TOKEN>" 
```

2. Define your AWS credentials

```bash
$export TF_VAR_AWS_ACCESS_KEY="<ACCESS-KEY>"
$export TF_VAR_AWS_SECRET_KEY="<SECRET-KEY>" 
```

3. Define your authentication parameters

```bash
$export TF_VAR_KAABAH_AUTH_USER="<AUTH_USER>"
$export TF_VAR_KAABAH_AUTH_PASSWORD="<ENCRYPTED_AUTH_PASSWORD>"
```

4. Define the [S3 backend](https://www.terraform.io/docs/backends/types/s3.html) properties 

Create a file `backend.config` with the following properties:
```
bucket = "the name of the bucket"
region = "the region of the bucket"
key    = "the key to the states"
```

5. Initialize Terraform

```bash
$ terraform init -backend-config="path/to/your/backend.config"
```

### Usage

#### Create a workspace

```bash
terraform workspace new app-dev
```

Terraform will automatically switch to the created workspace `my-test`

#### Configure the workspace

We recommend to create a `tfvars` file to override the default variables for your workspace. For instance, the `app-dev.tfvars` file may look like this:

```
provider = "SCALEWAY"

manager_instance_type = "START1-S"

worker_instance_type = "START1-S"

worker_instance_count = 2

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"
```

#### Apply the changes

Within your workspace, apply Terraform with your specific configuration:

```
terraform apply -var-file app-dev.tfvars
```

After a while, your cluster should be created and the corresponding Terraform states stored in your S3 backend.

#### Check the infrastructure

Get connected to the manager of your infrastructure using `ssh` and type the following commands:

```bash
root@app-dev-manager:~# docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
rwwms640br7eworemnzm71kas *   app-dev-manager    Ready               Active              Leader              18.03.1-ce
cncd3bj11drznaih0zgsxoi2y     app-dev-worker-1   Ready               Active                                  18.03.1-ce
4fup9ac9pklv5h81v0o99w40h     app-dev-worker-2   Ready               Active                                  18.03.1-ce
```
```bash
root@app-dev-manager:~# docker service ls
ID                  NAME                         MODE                REPLICAS            IMAGE                           PORTS
jwyzwgo2mjyb        services_alertmanager        replicated          1/1                 prom/alertmanager:latest
a35bnom5voa1        services_blackbox-exporter   replicated          1/1                 prom/blackbox-exporter:latest
sr7c26casj5o        services_cadvisor            global              3/3                 google/cadvisor:latest          *:8081->8080/tcp
yp94tsujdftq        services_grafana             replicated          1/1                 grafana/grafana:latest
jql9o8nawlkm        services_node-exporter       global              3/3                 prom/node-exporter:latest
0jl7slbb6tll        services_portainer           replicated          1/1                 portainer/portainer:latest
hgeulxbwkex2        services_prometheus          replicated          1/1                 prom/prometheus:latest
ltstocwymexj        services_traefik             replicated          1/1                 traefik:latest
```

#### Deploy your application

TODO





