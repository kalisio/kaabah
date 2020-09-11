---
sidebarDepth: 3
---

# Understanding Kaabah

::: warning Prerequisites 
**Kaabah** relies on various technologies such as [Terraform](https://www.terraform.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/), [Traefik](https://traefik.io)... and we assume that you are enough familiar with them. If not, please take a while to discover them.
:::

## Key concepts

**Kaabah** let you manipulate 4 kind of entities:
* **Workspace**: a collection of everything **Kaabah** needs to create and manage an infrastructure.
* **Configuration**: a set of Terraform variables used to define your infrastructure.
* **Cluster**: a [Docker Swarm](https://docs.docker.com/engine/swarm/key-concepts/) infrastructure. 
  
The following image illustrates how these entities interact:

![Kaabah principle](../assets/kaabah-principle.svg)

In addition **Kaabah** provides a set of commands that help you to operate the cluster. For instance, you can easily prune all the images on the different nodes, execute a command on a given node... See the [reference](../reference/helper-commands) page to have the complete list.

## Workspace

**Kaabah** is designed to take advantage of Terraform Workspaces. Indeed, **Kaabah** relies on the [Terraform recommend practices](https://www.terraform.io/docs/enterprise/guides/recommended-practices/part1.html#the-recommended-terraform-workspace-structure) and assume a **Workspace** is used to store the required data needed to build and manage an infrastructure for a specific environment (staging, production...):
* the configuration of the infrastructure.
* the SSH private key to get connected to the infrastructure
* the user scripts you want to be executed when creating the infrastructure
* the Terraform states of the infrastructure.

Starting from this premise, **Kaabah** lets you to manage as many clusters as your projects require. If we decide to name our workspaces with both the project name and its environment (i.e. dev, test...), we can sketch the following diagram to illustrate the overall functioning of **Kaabah**:

![Kaabah terraform](../assets/kaabah-terraform.svg)

In this diagram, the states of the different workspaces are stored within a dedicated bucket on amazon S3, but you are free to use any other Terraform [backends](https://www.terraform.io/docs/backends/).

## Configuration

The **Kaabah** configuration file is a **Terraform** variable file describing the characteristics of the desired infrastructure.

Here is an example of a configuration file:

```ini
cloud_provider = "AWS"

manager_instance_type = "t2.small"

manager_ips = ["3.115.176.41"]

worker_instance_type = "t3.large"

worker_instance_count = 3

worker_additional_volume_size = 500

worker_additional_volume_type = "st1"

worker_additional_volume_mount_point = "/mnt/data"

```

Assuming the current workspace is `app-dev`, then when applying such a configuration, **Kaabah** will generate a Docker Swarm infrastructure on `AWS` (`cloud_provider` variable) composed of:
* `1` manager node, `app-dev-manager`, of type `t2.small` with the public IP address `3.115.176.41`.
* `3` worker nodes, `app-dev-worker-0`, `app-dev-worker-1` and `app-dev-worker-2`, of type of `t3.large`. To each worker is attached `2` optimized hard-disk (`sc1`) of `500`GB and these volumes are accessible through the mount points: `/mnt/data0` and `/mnt/data1`.

**Kaabah** exposes many more variables allowing you to customize in detail your infrastructure such as adding labels, running user scripts... Have a look at the complete list of [variables](../reference/configuration-variables.md) and the [tests](https://github.com/kalisio/kaabah/tree/master/tests) as an example.

## Cluster

The **cluster** consists in of multiple Docker hosts which run in **swarm** mode and act as **Manager**, to manage membership and delegation, and as **Workers** which run the services. 

![swarm concept](./../assets/kaabah-swarm.svg)

### Instances

#### Instance types

**Kaabah** let you provide a same instance types for each managers and another instance type for each workers. 

::: warning
**Kaabah** supports only x86 architecture.
:::

#### Naming convention

Each created instances are named according the following convention:
-  `<WORKSPACE>-manager-<INDEX>`
-  `<WORKSPACE>-woker-<INDEX>`

where `<WORKSPACE>` specify the name of the **Terraform** workspace.

#### Operating system

All the instances are created using the **Ubuntu Bionic** image provided by **AWS**, **OVH** and **Scaleway**.

#### Docker

**Kaabah** installs the version `19.03.2` of **Docker**.

::: tip
You can override the version using the [`docker_version`](../reference/configuration-variables.md#docker)
:::

### Volumes

#### Gluster Shared volume

When creating the cluster, **Kaabah** creates a shared volume among the nodes using [Gluster](https://www.gluster.org/). 

![gluster concept](../assets/kaabah-gluster.svg)

If your cluster is composed of 1 manager only, the shared volume is created in `distributed` mode, otherwise the shared volume is created in `replicated` mode to enhance the resilience. Check the [documentation](https://docs.gluster.org/en/latest/Administrator%20Guide/Setting%20Up%20Volumes/#creating-distributed-volumes) to learn more about these modes.

By default, the **Gluster** volume is mounted using the default mount point `/mnt/share`. It can be overridden by setting the variable `gluster_share_volume_mount_point`.

#### Additional block volumes

When needed extra disk spaces, you can attach an additional volume either on the managers, either on the workers or both. These volumes are automatically attached, formatted to [EXT4](https://en.wikipedia.org/wiki/Ext4) and mounted on the nodes. By default the volumes are accessible through the mount point `/mnt/data`. 


::: tip
You can override this default mount point by overriding the `manager_additional_volume_mount_point` and `worker_additional_volume_mount_point` variables.
:::

### Network

#### IP addresses

**Kaabah** let you define the IP addresses of the managers nodes. The IP addresses you can assign to the managers are given (usually bought) by your provider:

* on **AWS** it must be an [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
* on **Scaleway** it must be a [Flexible IP](https://www.scaleway.com/en/faq/servers/network/#-What-is-a-flexible-IP-address)
* on **OVH** it must be a [Floating IP](https://www.ovhcloud.com/en/bare-metal/ip/)

::: Warning
On **OVH**, even if **Kaabahh** adds automatically a network interface to allow the binding of the **Floating IP** to this instance, you need to do manually this binding using the **OVH** interface.
:::

#### Security Groups

By default, **Kaabah** creates 2 security groups:
* a security group assigned to the managers with the following rules:
  * external HTTP traffic (port 80)
  * external HTTPS traffic (port 443)
  * internal SSH traffic (port 22)
  * internal Docker swarm traffic
  * internal Gluster traffic
* a security group assigned to the workers with the following rules:
  * internal SSH traffic (port 22)
  * internal Docker swarm traffic
  * internal Gluster traffic

### Security

#### SSH

**Kaabah** requires the use of a [**Bastion**](https://en.wikipedia.org/wiki/Bastion_host) to get connected to your instances.
The implemented solution relies on the following architecture:


![bastion architecture](./../assets/bastion-architecture.svg)


Your bastion instance must be instantiated in the same network of your cluster. The Security Groups rules allows the SSH traffic from the bastion.

::: warning
It is a best practice to harden your bastion host because it is a critical point of network security. Hardening might include disabling 
unnecessary applications or services, restrict the inbound traffic to well-known hosts.
:::

#### Docker Engine

The Docker daemon only allows connections from clients authenticated by a certificate signed by a Certificate Authority (CA). 

When creating the cluster, **Kaabah** handles the creation of the server and client keys but it requires you to provide this CA. Check out the [Getting started section](./getting-started.md) to learn how to generate this CA.

::: tip Note
**Kaabah** relies on [OpenSSL](https://www.openssl.org/) to generate the server and client keys.
:::

