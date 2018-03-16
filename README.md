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

### Usage

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
