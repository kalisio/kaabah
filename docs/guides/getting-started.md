---
sidebarDepth: 3
---

# Getting started

::: warning 
Because **Kaabah** relies on [Terraform](https://www.terraform.io/) and [Docker Swarm](https://docs.docker.com/engine/swarm/), we assume you are enough familiar with them. If not, please take a while to discover them.
:::

## Prerequisites

### Terraform

You must have **Terraform** installed on your computer. For now **Kaabah** requires the `0.12.29` version of Terraform. Please refer to the [official guide](https://learn.hashicorp.com/terraform/getting-started/install.html) to install **Terraform**.

::: tip
You can directly download the `0.12.29` release [here](https://releases.hashicorp.com/terraform/0.12.29)
:::

### Providers 

#### Account authentication

To enable **Terraform** to exploit the providers APIs, you must have created an account on the various providers and be aware of your credentials to access the APIs.

#### Instances authentication

When running **Kaabah** and to get connected to your instances, you must be aware of the private SSH keys to access the instances. These keys are generally created using the providers functionalities.

In addition, **Kaabah** makes the assumption you already have a [**Bastion**](https://en.wikipedia.org/wiki/Bastion_host) installed for each providers. You must provide the information to access the bastions:
* the public IP
* the SSH private key
* the SSH public key
* the SSH user

::: tip
When needed, you can use the following command to retrieve the public key from the private key:
```bash
$ssh-keygen -y -f <key>.pem > <key>.pub
```
:::

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
$export TF_VAR_SCW_ORGANIZATION_ID="<ORGANIZATION-ID>"
$export TF_VAR_SCW_ACCESS_KEY="<ACCESS-KEY>" 
$export TF_VAR_SCW_SECRET_KEY="<SECRET_KEY>"
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
$export TF_VAR_bastion_ips = '{ AWS = "X.X.X.X", SCW = "Y.Y.Y.Y", OVH = "Z.Z.Z.Z" }'
$export TF_VAR_bastion_ssh_keys = '{ AWS = "aws.pem", SCW = "scw.pem", OVH = "ovh.pem" }'
$export TF_VAR_bastion_ssh_users = '{ AWS = "user", SCW = "user", OVH = "user" }'
```

5. Define your Certificate Authority files

```bash
$export TF_VAR_docker_tls_ca_key="../workspaces/master/ca.key"
$export TF_VAR_docker_tls_ca_cert="../workspaces/master/ca.cert"
$export TF_VAR_docker_tls_ca_pass="../workspaces/master/ca.pass"
```

6. Define the [S3 backend](https://www.terraform.io/docs/backends/types/s3.html) properties 

Create a file `backend.config` with the following properties:
```
bucket = "the name of the bucket"
region = "the region of the bucket"
key    = "the key to the states"
```

7. Initialize Terraform

```bash
$terraform init -backend-config="path/to/your/backend.config"
```

## Usage

### Create a workspace

```bash
$terraform workspace new test
```

Terraform will automatically switch to the created workspace `test`

### Configure the workspace

We recommend to create a `tfvars` file to override the default variables for your workspace. For instance, the `test.tfvars` file may look like this:

```text
cloud_provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test.pem"

key_name = "test"

manager_instance_count = 1

manager_instance_type = "t2.small"

manager_additional_volume_size = 500

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "3.120.200.41"
]

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

worker_instance_type = "t3.large"

worker_instance_count = 2

worker_additional_volume_size = 500

worker_user_scripts=[
  "tests/user-scripts/worker-0.sh",
  "tests/user-scripts/worker-1.sh"
]
```

### Apply the changes

Within your workspace, apply Terraform with your specific configuration:

```bash
$terraform apply -var-file="path/to/your/config.tfvars"
```

After a while, your cluster should be created and the corresponding states stored in your **S3** backend.

### Check the infrastructure

Get connected to the manager of your infrastructure using `ssh` and type the following commands:

```bash
ubuntu@test-aws-manager:~$ k-swarm-info

Nodes >-----

ID                              HOSTNAME                STATUS          ADDRESS         LABELS
4ylkfx3vis3zlxqwvs7rcms0p       test-manager        Ready/Active    172.31.25.252
svpnq8a71v90hu7ir6ng7335d       test-worker-0       Ready/Active    172.31.21.238  
jwgud49dpjvxfdkgnfa1we9la       test-worker-1       Ready/Active    172.31.19.239  

Stacks >------

NAME            SERVICES

Services >------

ID                  NAME                   MODE                REPLICAS            IMAGE                        PORTS

Containers >-----

test-manager
ID              NAMES   STATUS

test-worker-0
ID              NAMES   STATUS

test-worker-1
ID              NAMES   STATUS
ubuntu@test-aws-manager:~$
```

### Destroy the infrastructure

To destroy the created infrastructure, you can simply type the following command:

```bash
$terraform destroy -var-file="path/to/your/config.tfvars"
```