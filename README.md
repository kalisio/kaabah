# kaabah

[![Build Status](https://travis-ci.org/kalisio/kaabah.png?branch=master)](https://travis-ci.org/kalisio/kaabah)

Terraform solution to deploy Docker-based infrastructures on Scaleway using Travis CI

## Installation

```bash
$ git clone https://github.com/kalisio/kaabah.git
$ cd kaabah
$ terraform init
```

Before running the project you'll have to defined an access token for Terraform to connect to the Scaleway API. 
Using the token and your access key, create two environment variables:

```bash
$ export TF_VAR_SCALEWAY_ACCESS_KEY="<ACCESS-KEY>"
$ export TF_VAR_SCALEWAY_TOKEN="<ACCESS-TOKEN>" 
```

The project contains the encrypted SSH key required to access the remote instances.

## Usage

Create a cluster of instances:
```bash
# generate plan
terraform plan

# run the plan
terraform apply 
```

This will do the following:
* reserves public IPs for each instance
* creates a security group for the instances allowing SSH and HTTP/S inbound traffic
* provisions N instances with Kalisio image

The naming convention for an instance is in `<INSTANCE_NAME>-<INDEX>` format, 
running the project with 3 `scw` instances will create: scw-1, scw-3, scw-3. 

Customizing the instance specs via terraform variables:

```bash
terraform apply \
-var instance_name=scw \
-var region=ams1 \
-var instance_type=VC1S \
-var instance_count=2
```

You can scale up or down the cluster by modifying the `instance_count`. 

After running the Terraform plan you'll see several output variables like the public IPs of each instances. 
You can use it to connect via SSH and launch a service within the cluster.

## Battery-powered

The project contains the Docker compose file and commands to be executed on the remote infrastructure in order to install all required tools like [traefik](https://docs.traefik.io) reverse proxy or [portainer](https://portainer.readthedocs.io) container manager. To ensure the deploy scripts are executed on each apply you need to enforce terraform to do so because otherwise this will only be executed on the instance creation:
```
terraform taint null_resource.deploy
```

### Testing during development

Due to the *Let's encrypt* configuration for HTTPS you cannot simply use `localhost` on your local machine, you need to run "behind" a domain.

First we create a "fake" domain by editing the `hosts` file (*/etc/hosts* under Linux or *C:\Windows\System32\drivers\etc\hosts* under Windows) and add this line to redirect it to local host:
```
127.0.0.1 kalisio.xyz
```

Then edit the traefik ACME configuration to use the stagining *Let's encrypt* environment https://letsencrypt.org/docs/staging-environment/.

A Docker compose file with a `whoami` test app is also provided.
