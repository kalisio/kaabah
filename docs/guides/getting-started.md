---
sidebarDepth: 3
---

# Getting started

::: warning 
Because **Kaabah** relies on [Terraform](https://www.terraform.io/) and [Docker Swarm](https://docs.docker.com/engine/swarm/), we assume you are enough familiar with them. If not, please take a while to discover them.
:::

## Prerequisites

### Terraform

You must have **Terraform** installed on your computer. For now **Kaabah** requires the `0.11.12` version of Terraform. Please refer to the [official guide](https://learn.hashicorp.com/terraform/getting-started/install.html) to install **Terraform**.

### Providers 

#### Account authentication

To enable **Terraform** to exploit the providers APIs, you must have created an account on the various providers and be aware of your credentials to access the APIs.

#### Instances authentication

When running **Kaabah** and to get connected to your instances, you must be aware of the private SSH keys to access the instances. These keys are generally created using the providers functionalities.

In addition, **Kaabah** makes the assumption you already have a [**Bastion**](https://en.wikipedia.org/wiki/Bastion_host) installed for each providers. You must provide the information to access the bastions:
* the public IP
* the SSH private key
* the SSH user

#### Network 

Because each of the cloud providers do not offer the same solutions regarding the network, there are some specificities to take into account. Mainly, to use the **OVH** module, it is necessary beforehand to create a private network named **Private-Net** and a subnet named **Private-Subnet**. In the other hand, you can assign to the subnet the **CIDR** of your choice, **Kaabah** will retrieve it.

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

The **OVH** module relies on the [OpenStack provider](https://www.terraform.io/docs/providers/openstack/), thus you need to provide the
**OpenStack** credentials only:

```bash
export OS_AUTH_URL="https://auth.cloud.ovh.net/v3" // authentication URL
export OS_TENANT_ID="<TENANT-ID>" # Horizon project ID
export OS_TENANT_NAME="<TENANT-NAME>" # Horizon project name
export OS_USERNAME="<USERNAME>" # Horizon username
export OS_PASSWORD="<PASSWORD>" # Horizon password
```

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

6. Initialize Terraform

```bash
$terraform init -backend-config="path/to/your/backend.config"
```

## Usage

### Create a workspace

```bash
$terraform workspace new demo
```

Terraform will automatically switch to the created workspace `demo`

### Configure the workspace

We recommend to create a `tfvars` file to override the default variables for your workspace. For instance, the `demo.tfvars` file may look like this:

```text
provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test-aws.pem"

key_name = "test-aws"

manager_instance_type = "t2.small"

manager_crontab = "tests/crontab"

manager_user_script = "tests/manager.sh"

worker_instance_type = "t3.large"

worker_instance_count = 2

worker_additional_volume_count = 1

worker_additional_volume_size = 500

worker_additional_volume_type = "sc1"

worker_additional_volume_mount_point = "data"

worker_user_scripts=["tests/worker.sh", "tests/worker.sh"]
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
ubuntu@test-aws-manager:~$ k-swarm-info

Nodes >-----

ID                              HOSTNAME                STATUS          ADDRESS         LABELS
4ylkfx3vis3zlxqwvs7rcms0p       test-aws-manager        Ready/Active    172.31.25.252
svpnq8a71v90hu7ir6ng7335d       test-aws-worker-0       Ready/Active    172.31.21.238   apps=true worker0=true
jwgud49dpjvxfdkgnfa1we9la       test-aws-worker-1       Ready/Active    172.31.19.239   dbs=true worker1=true

Stacks >------

NAME            SERVICES
kaabah          8

Services >------

ID                  NAME                   MODE                REPLICAS            IMAGE                        PORTS
imt4640a55sa        kaabah_alertmanager    replicated          1/1                 prom/alertmanager:v0.17.0
2dk1t5jaeleq        kaabah_cadvisor        global              3/3                 google/cadvisor:v0.33.0
3moom2hbx8o7        kaabah_grafana         replicated          1/1                 grafana/grafana:6.1.6
s1m29d7c51zw        kaabah_node-exporter   global              3/3                 prom/node-exporter:v0.17.0
y1zm0h699q60        kaabah_prometheus      replicated          1/1                 prom/prometheus:v2.9.2
1fwm7sexsz4k        kaabah_pushgateway     replicated          1/1                 prom/pushgateway:v0.8.0
wa262dqh51qt        kaabah_registry        replicated          1/1                 registry:2                   *:5000->5000/tcp
a8xhmu9k7jbq        kaabah_traefik         replicated          1/1                 traefik:1.7-alpine

Containers >-----


test-aws-manager
ID              NAMES   STATUS
0eb9d385fc74    kaabah_grafana.1.u42yijzrl7vhubfb4ufup4hgq      Up About an hour (healthy)
7c8ad92974d4    kaabah_cadvisor.4ylkfx3vis3zlxqwvs7rcms0p.0bcnfte5qsr4zxvim4dvapywg     Up About an hour (healthy)
e26ab0a9a84a    kaabah_traefik.1.kn2pnp5wm9s2kqsm7x7ukl0gt      Up About an hour (healthy)
a401aba300b1    kaabah_alertmanager.1.n424mme5cpqh1gbyqtwvn1cfi Up About an hour (healthy)
bf10a39ce027    kaabah_prometheus.1.tzoe5g0rfnodzq84h73elavoa   Up About an hour (healthy)
3b5aeb22291a    kaabah_registry.1.41f8l2p5fh2kam5qx2mj8a2rk     Up About an hour (healthy)
b97a12b43694    kaabah_pushgateway.1.rbrtvtz3xcjy6uda7w6d3wdbz  Up About an hour (healthy)
7cb96b612380    kaabah_node-exporter.4ylkfx3vis3zlxqwvs7rcms0p.ftmk23sinf18w5zhzp5fhg5yj        Up About an hour

test-aws-worker-0
ID              NAMES   STATUS
0c483b70fedd    kaabah_cadvisor.svpnq8a71v90hu7ir6ng7335d.kfloir1m5cv012ogb5ck7wnhh     Up About an hour (healthy)
b3e1a4117807    kaabah_node-exporter.svpnq8a71v90hu7ir6ng7335d.4n71fp7vpvi7z0avzpkriuypv        Up About an hour

test-aws-worker-1
ID              NAMES   STATUS
0168740c5c45    kaabah_cadvisor.jwgud49dpjvxfdkgnfa1we9la.qj55xvd5ugood47e7wz35mbgn     Up About an hour (healthy)
420e5b27bccb    kaabah_node-exporter.jwgud49dpjvxfdkgnfa1we9la.ihi62eehuwna6a1qxzjt9lx2g        Up About an hour
ubuntu@test-aws-manager:~$
```

### Destroy the infrastructure

To destroy the created infrastructure, you can simply type the following command:

```bash
$terraform apply -var-file="path/to/your/config.tfvars"
```