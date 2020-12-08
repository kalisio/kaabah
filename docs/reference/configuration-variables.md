---
sidebarDepth: 3
---

#  Configuration variables

## Providers

### Scaleway

| Variables | Description |
|--- | --- |
| `SCW_ORGNIZATION_ID` | Your **Scaleway** organization id |
| `SCW_ACCESS_KEY` | Your **Scaleway** access key |
| `SCW_SECRET_KEY` | Your **Scaleway** secret key |

### AWS

| Variables | Description |
|--- | --- |
| `AWS_ACCESS_KEY` | Your **AWS** access key. This is important to note that your credential must allows access to **AWS EC2** and **S3** services |
| `AWS_SECRET_KEY` | Your **AWS** secret key |

### Provider

| Variables | Description |
|--- | --- |
| `cloud_provider` | The provider to host the infrastructure. It must be `AWS`, `OVH` or `SCW`. There is no default value. |
| `region` | The region to host the infrastructure. There is no default value. The default value for **AWS** is `eu-central-1`, for **OVH** is `GRA5` and for **Scaleway** is `fr-par`. |
| `availability_zone` | The availability zone to host the infrastructure. On **AWS** and **Scaleway**, the default value is set to the first availability zone of the specified region. For instance, if you provide the `eu-central-1` region on **AWS**, the default value will be `eu-central-1a`, and if you provide the region `fr-par` on **Scaleway** the default value will be `fr-par-1` |

## Network

| Variables | Description |
|--- | --- |
| `ssh_user` | The user to get connected to the instances. On **Scaleway** the default value is `root` and on **AWS** and **OVH** the default value is `ubuntu`. |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. There is no default value. |
| `bastion_ip` | The IP address of the bastion to be used. The default value is the value of the `manager_ip` variable. |
| `bastion_ssh_user` | The user to be used to get connected to the bastion. The default value is the value of the `ssh_user` variable. |
| `bastion_ssh_key` | The private key to be used to get connected to the bastion. The default value is the value of the `ssh_key` variable. |

## Instances

| Variables | Description |
|--- | --- |
| `gluster_share_volume_mount_point` | The mount point used to mount the volume **share** created by **Gluster**. The default value is `/mnt/share`. |
| `rclone_conf` | The path to the **rclone** configuration you want to provision on the nodes. The default values is `""`. |
| `user_script` | The user scripts to be executed when the instances are created. It must be the file path to the script. Refer to the section [Using user script](../../docs/guides/advanced-usage.md#using-user-script) to learn more. The default value is ``. |

### Manager

| Variables | Description |
|--- | --- |
| `manager_instance_type` | The instance type of the manager instances. It must be a X86 64bits architecture and it depends on the provider. There is no default value. |
| `manager_instance_count` | The number of manager instances. The default value is `1` |
| `manager_additional_volume_size` | The size in giga bytes of the additional volume. You must provide a size larger than `0` to setup an additional volume. The default value is `0` |
| `manager_additional_volume_type` | The type of additional volumes to add. This option only works on AWS. The different [types](https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) are `gp2`, `io1`, `st1` and `sc1`. The default value is `sc1` |
| `manager_additional_volume_mount_point` | The mount point used to mount the devices. The default value is `/mnt/data` |
| `manager_ips` | If defined, it represents the IP addressed to be retrieved and attached to each managers. On **Scaleway** it must be the IDs of a [Flexible IP](https://www.scaleway.com/en/faq/servers/network/#-What-is-a-flexible-IP-address), on **AWS** the address of an [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) and on **OVH** the address of a [Floating IP](https://www.ovhcloud.com/en/bare-metal/ip/). If undefined, the managers are assigned a public IP defined by the provider. | The default value is `[]`. |
| `manager_crontabs` | The crontabs file to be provisioned on the managers. The default value is `[]`. |

::: tip
On **Scaleway** the ID of a flexible IP can be retrieved using the `More info` entry of the overflow menu assigned to this flexible IP.
:::

### Workers

| Variables | Description |
|--- | --- |
| `worker_instance_type` | The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value |
| `worker_instance_count` | The number of worker instances. The default value is `0` |
| `worker_additional_volume_size` | The size in giga bytes of the additional volume. You must provide a size larger than `0` to setup an additional volume. The default value is `0` |
| `worker_additional_volume_type` | The type of additional volumes to add. This option only works on AWS. The different [types](https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) are `gp2`, `io1`, `st1` and `sc1`. The default value is `sc1` |
| `worker_additional_volume_mount_point` | The mount point used to mount the devices. The default value is `/mnt/data` |

## Docker

| Variables | Description |
|--- | --- |
| `docker_version` | The version of the Docker engine to be installed. The available versions can be obtained using the command `apt-cache madison docker-ce` . The default value is `5:19.03.2~3-0~ubuntu-bionic` |
| `docker_tls_ca_key` | The path to the CA private key. The default value is `ca.key` |
| `docker_tls_ca_cert` | The path to the CA public key. The default value is `ca.cert` |
| `docker_tls_ca_pass` | The path to the CA passphrase file. The default value is `ca.pass` |
