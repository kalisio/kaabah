# kaabah

[![Build Status](https://travis-ci.org/kalisio/kaabah.png?branch=master)](https://travis-ci.org/kalisio/kaabah)

<b>Kaabah</b> is a [Terraform](https://www.terraform.io/) based solution to manager a [Docker Swarm](https://docs.docker.com/engine/swarm/)) infrastructure either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com).In addition your infrastructure is powered with a stack of services such as [Traefik](https://traefik.io/), [portainer](https://portainer.io/) and [Prometheus](https://prometheus.io/) to let you exploit your cluster easily.


## Diving deeper

The overall approach is based on the use of Terrafrom [Workspaces](https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure). Since each workspace could be considered as an instance of the infrastructure with its onw configuration, Kaabah let you manage as many infrastructure as you require.

```bash
$ git clone https://github.com/kalisio/kaabah.git
$ cd kaabah
$ terraform init -backend-config="path/to/your/backend.config"
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
terraform apply -var-file app.tfvars
```

This will do the following:
* reserves public IPs for each instance
* creates a security group for the instances allowing SSH and HTTP/S inbound traffic
* provisions N instances with Kalisio image

The naming convention for an instance is in `<INSTANCE_NAME>-<INDEX>` format, 
running the project with 3 `scw` instances will create: scw-1, scw-3, scw-3. Each instance is mapped to a particular domain so that apps running on it (eg reverse proxy) are accessible through it.

Customize the instance specs via terraform variables instead of default values in *variables.tf*:

```bash
terraform apply \
-var instance_name=scw \
-var region=ams1 \
-var instance_type=VC1S \
-var instance_count=2 \
-var instance_domains='{1 = "first.instance.domain", 2 = "second.instance.domain"}'
```

You can scale up or down the cluster by modifying the `instance_count` and `instance_domains` map. 

After running the Terraform plan you'll see several output variables like the public IPs of each instances. 
You can use it to connect via SSH and launch a service within the cluster.

## Battery-powered

The project contains the Docker compose file and commands to be executed on the remote infrastructure in order to install all required tools like [traefik](https://docs.traefik.io) reverse proxy or [portainer](https://portainer.readthedocs.io) container manager, each app is accessible under `appname.instance.domain`. To ensure the deploy scripts are executed on each apply you need to enforce terraform to do so because otherwise this will only be executed on the instance creation:
```
// N is the instance number
terraform taint null_resource.deploy.N
```

A Docker compose file with a `whoami` test app is also provided and is accessible under `kaabah.instance.domain`.

## Testing during development

Due to the *Let's encrypt* configuration for HTTPS you cannot simply use `localhost` on your local machine, you need to run "behind" a domain.

First we create a "fake" domain by editing the `hosts` file (*/etc/hosts* under Linux or *C:\Windows\System32\drivers\etc\hosts* under Windows) and add this line to redirect it to local host:
```
127.0.0.1 kalisio.xyz
```

Then edit the traefik ACME configuration to use the staging *Let's encrypt* environment https://letsencrypt.org/docs/staging-environment/. Last but not least, since the `hosts` file does not allow to manage port redirections we need to do so using the operating system network tools.

### Windows

To see what is currently running:
```
netstat -a -n -p TCP | grep "LISTENING"
```

To add port redirection for HTTP:
```
netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.0.0.1 connectport=8080 connectaddress=127.0.0.1
```

To add port redirection for HTTPS:
```
netsh interface portproxy add v4tov4 listenport=443 listenaddress=127.0.0.1 connectport=8083 connectaddress=127.0.0.1
```

To see running proxied port:
```
netsh interface portproxy show v4tov4
```

To see remove proxied port:
```
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=127.0.0.1
```

### Linux

First enable port redirection:
```
echo "1" > /proc/sys/net/ipv4/ip_forward
```

Then add port redirect:
```
iptables -t nat -A PREROUTING -s 127.0.0.1 -p tcp --dport 80 -j REDIRECT --to 8080`
iptables -t nat -A OUTPUT -s 127.0.0.1 -p tcp --dport 80 -j REDIRECT --to 8080`
```

To remove simply replace in the previous command the `-D` switch instead of the `-A` switch.
