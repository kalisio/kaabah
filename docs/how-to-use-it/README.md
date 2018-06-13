---
sidebar: auto
---

# How to use it ?

## Prerequisites

::: tip Certificate Authority

*Kaabah* ensures TLS authentication for Docker daemon and requires a Certificate Authority. More precisely, to use *Kaabah*, you need the following files:
- the private key
- the public key
- the passphrase file
You can use the following [script](https://gist.github.com/cnouguier/c5cb4ba99ad45bced4476e2d175342a1) to create the required files. 
:::

::: tip SSH key
*Kaabah* uses SSH to operate on the various nodes. Consequently you need the private key used to connect to the different instances.
Such a key are emitted by the providers (i.e. Scaleway and AWS)
:::

::: tip AWS S3 Credentials

You must have the credentials set to access the desired bucket on AWS S3 otherwise **Terraform** won't initialize. 
If needed, follow this [guide](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html) to set up your credentials. 
::: 

## Installation

### Clone the Github repository

```bash
$ git clone https://github.com/kalisio/kaabah.git
$ cd kaabah
```

### Setup your Terraform environment

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
$terraform init -backend-config="path/to/your/backend.config"
```

## Usage

### Create a workspace

```bash
$terraform workspace new demo-dev
```

Terraform will automatically switch to the created workspace `demo-dev`

### Configure the workspace

We recommend to create a `tfvars` file to override the default variables for your workspace. For instance, the `demo-dev.tfvars` file may look like this:

```
provider = "SCALEWAY"

manager_instance_type = "t2.nano"

worker_instance_type = "t2.nano"

worker_instance_count = 2

worker_additional_volume_size = 100

worker_additional_volume_count = 2

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"
```

### Apply the changes

Within your workspace, apply Terraform with your specific configuration:

```bash
$terraform apply -var-file demo-dev.tfvars
```

After a while, your cluster should be created and the corresponding Terraform states stored in your S3 backend.

### Check the infrastructure

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

## Tips

### Scaleway

#### Attach an additional volume

1. Create the mount point: `mkdir -p /mnt/data`
2. Format the additional volume: `mkfs -t ext4 /dev/nbd2`
3. Retrieve the UUID of your additional volume: `blkid`
4. Create the *systemd* mount file: `nano /etc/systemd/system/mnt-data.mount` and add the following content:
```
[Unit]
Description=Mount NDB Volume at boot

[Mount]
What=UUID="16575a81-bb2c-46f3-9ad8-3bbe20157f7c"
Where=/mnt/data
Type=ext4
Options=defaults

[Install]
WantedBy=multi-user.target
```
5. Reload *systemd*: `systemctl daemon-reload`
6. Mount the volume: `systemctl start mnt-data.mount`
7. Enable automatic mount during boot: `systemctl enable mnt-data.mount` 

Check this [tutorial](https://www.scaleway.com/docs/attach-and-detach-a-volume-to-an-existing-server/) for further information.
