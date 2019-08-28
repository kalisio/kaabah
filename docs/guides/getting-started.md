---
sidebarDepth: 3
---

# Getting started

::: warning 
**Kaabah** relies on various technologies such as [Terraform](https://www.terraform.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/), [Traefik](https://portainer.io)... and we assume that you are enough familiar with them. If not, please take a while to discover them.
:::

## Prerequisites

### Providers authentication

To enable **Terraform** to exploit the providers APIs, you must have created an account and be aware of your credentials to access the APIs.

### Instances authentication

When running **Kaabah** and to get connected to your instances, you must be aware of the private SSH keys to access the instances. These keys are generally created 
using the providers functionalities.

In addition, **Kaabah** makes the assumption you already have a [**Bastion**](https://en.wikipedia.org/wiki/Bastion_host) installed for each providers. You must provide the information to access the bastions:
* the public IP
* the SSH private key
* the SSH user

### Docker TLS Certificate Authority

**Kaabah** ensures TLS authentication for Docker daemon and requires a Certificate Authority (CA). The following files are required to run **Kaabah**:
- the CA private key: `ca.key`
- the CA public key: `ca.cert`
- the CA passphrase file: `ca.pass`

You can use the following [script](https://gist.github.com/cnouguier/c5cb4ba99ad45bced4476e2d175342a1) to create these files. 

### Terraform backend

You must have the credentials set to access the desired bucket on AWS S3 otherwise **Terraform** won't initialize. 
If needed, follow this [guide](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html) to set up your credentials. 

## Installation

### Clone the Github repository

```bash
$ git clone https://github.com/kalisio/kaabah.git
$ cd kaabah
```

### Setup your Terraform environment

::: warning Security
Hard-coding credentials into any **Terraform** configuration is not recommended, and risks secret leakage should this file ever be committed to a public version control system.
We strongly recommend to store the credentials using environment variables.
:::

1. Define your **Scaleway** credentials

```bash
$export TF_VAR_SCALEWAY_ORGANIZATION="<ORGANIZATION-ID>"
$export TF_VAR_SCALEWAY_TOKEN="<ACCESS-TOKEN>" 
```

2. Define your **AWS** credentials

```bash
$export TF_VAR_AWS_ACCESS_KEY="<ACCESS-KEY>"
$export TF_VAR_AWS_SECRET_KEY="<SECRET-KEY>" 
```

3. Define your **OVH** credentials
   

4. Define your bastions configuration

``` bash
$TF_VAR_bastion_ips = '{ AWS = "X.X.X.X", SCW = "Y.Y.Y.Y", OVH = "Z.Z.Z.Z" }'
$TF_VAR_bastion_ssh_keys = '{ AWS = "aws.pem", SCW = "scw.pem", OVH = "ovh.pem" }'
$TF_VAR_bastion_ssh_users = '{ AWS = "user", SCW = "user", OVH = "user" }'
```

5. Define the [S3 backend](https://www.terraform.io/docs/backends/types/s3.html) properties 

Create a file `backend.config` with the following properties:
```
bucket = "the name of the bucket"
region = "the region of the bucket"
key    = "the key to the states"
```

5. Initialize Terraform

```bash
$terraform init -backend-config="path/to/your/backend.config"
```

## Usage

::: warning ACME certificates
To ensure ACME certificates generation, **traefik** has to be reachable by **Let's Encrypt** through port 80. You can refer to [ACME configuration (httpChallenge)](https://docs.traefik.io/configuration/acme/#httpchallenge) for further information. 

Please take care your DNS is correctly configured. A **A Record** should map your domain to the Swarm manager IP address.
:::

### Create a workspace

```bash
$terraform workspace new demo
```

Terraform will automatically switch to the created workspace `demo`

### Configure the workspace

We recommend to create a `tfvars` file to override the default variables for your workspace. For instance, the `demo.tfvars` file may look like this:

```text
provider = "AWS"

ssh_key = "workspaces/key.pem" # the path to the private key

manager_ip = "3.120.200.41"

manager_instance_type = "t2.small"

manager_user_script = "workspaces/test-script.sh"

worker_instance_type = "t3.large"

worker_instance_count = 3

worker_additional_volume_count = 1

worker_additional_volume_size = 1000

worker_additional_volume_type = "io1"

worker_labels=["worker0=true apps=true", "worker1=true", "worker2=true dbs=true"]

worker_user_scripts=["workspaces/test-script.sh", "workspaces/test-script.sh", "workspaces/test-script.sh"]

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"
```

### Apply the changes

Within your workspace, apply Terraform with your specific configuration:

```bash
$terraform apply -var-file="path/to/your/config.tfvars"
```

After a while, your cluster should be created and the corresponding Terraform states stored in your S3 backend.

### Check the infrastructure

Get connected to the manager of your infrastructure using `ssh` and type the following commands:

```bash
$docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
rwwms640br7eworemnzm71kas *   app-dev-manager    Ready               Active              Leader              18.03.1-ce
cncd3bj11drznaih0zgsxoi2y     app-dev-worker-1   Ready               Active                                  18.03.1-ce
4fup9ac9pklv5h81v0o99w40h     app-dev-worker-2   Ready               Active                                  18.03.1-ce
```

```bash
$docker service ls
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

### Destroy the infrastructure

To destroy the created infrastructure, you can simply type the following command:

```bash
$terraform apply -var-file="path/to/your/config.tfvars"
```