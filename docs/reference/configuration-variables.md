---
sidebarDepth: 3
---

#  Configuration variables

## Providers

### Scaleway

| Variables | Description |
|--- | --- |
| `SCALEWAY_ORGNIZATION` | Your **Scaleway** organization id |
| `SCALEWAY_TOKEN` | Your **Scaleway** token |

### AWS

| Variables | Description |
|--- | --- |
| `AWS_ACCESS_KEY` | Your **AWS** access key. This is important to note that your credential must allows access to **AWS EC2** and **S3** services |
| `AWS_SECRET_KEY` | Your **AWS** secret key |

### Provider

| Variables | Description |
|--- | --- |
| `provider` | The provider to host the infrastructure. It must be `AWS` or `Scaleway`. There is no default value. |
| `region` | The region to host the infrastructure. There is no default value. |
| `availability_zone` | The availability zone to host the infrastructure. This variable is ignored in the case of **Scaleway**. On **AWS**, the default value is set to the first AZ of the specified region. For instance, if you provide the `eu-central-1` region, the default value will be `eu-central-1a`. |

## Network

| Variables | Description |
|--- | --- |
| `ssh_user` | The user to get connected to the instances. On **Scaleway** the default value is `root` and on **AWS** and **OVH** the default value is `ubuntu`. |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. There is no default value. |
| `key_name` | The name of the ssh key to be used when creating the instance. The default value is `""`. This variable is ignored for **Scaleway**. |
| `bastion_ip` | The IP address of the bastion to be used. The default value is the value of the `manager_ip` variable. |
| `bastion_ssh_user` | The user to be used to get connected to the bastion. The default value is the value of the `ssh_user` variable. |
| `bastion_ssh_key` | The private key to be used to get connected to the bastion. The default value is the value of the `ssh_key` variable. |

## Instances

| Variables | Description |
|--- | --- |
| `gluster_share_volume_mount_point` | The mount point used to mount the volume **share** created by **Gluster**. The default value is `/mnt/share`. |
| `rclone_conf` | The path to the **rclone** configuration you want to provision on the nodes. The default values is `""`. |

### Manager

| Variables | Description |
|--- | --- |
| `manager_ip` | If define, it represents the IP address to be retrieved and attached to the manager. On **Scaleway** it must be a [Flexible IP](https://www.scaleway.com/en/faq/servers/network/#-What-is-a-flexible-IP-address) and on **AWS** an [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html). On **OVH** the variable is omitted because the support of the [Floating IP](https://labs.ovh.com/public-cloud-l3-services) is still experimental. If undefined, the manager is assigned a public IP defined by the providers. | The default value is `""`. |
| `manager_instance_type` | The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. There is no default value. |
| `manager_crontab` | The crontab file to be provisioned on the manger. The default value is `""`. |
| `manager_user_script` | The user script to be executed when when the manager is ready. It must be the file path to the script. The default value is `""`. |

### Workers

| Variables | Description |
|--- | --- |
| `worker_instance_type` | The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value |
| `worker_instance_count` | The number of worker instances. The default value is `1` |
| `worker_additional_volume_count` | The number of volumes attached to each worker. The default value is `0` |
| `worker_additional_volume_size` | The size in giga bytes of the additional volumes. Note that on Scaleway you are limited to 150GB and the minimum size is 50GB. Moreover, you can add volumes to bare-metal instances only. The default value is `150` |
| `worker_additional_volume_type` | The type of additional volumes to add. This option only works on AWS. The different [types](https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) are `gp2`, `io1`, `st1` and `sc1`. The default value is `sc1` |
| `worker_additional_volume_mount_point` | The mount point used to mount the devices. The prefix `/dev/` is automatically added and the default value is `data` |
| `worker_user_scripts` | The scripts to be executed once the workers are ready. It must be a list of file paths. The default value is `[]` |

## Docker

| Variables | Description |
|--- | --- |
| `docker_version` | The version of the Docker engine to be installed. The available versions can be obtained using the command `apt-cache madison docker-ce` . The default value is `5:19.03.2~3-0~ubuntu-bionic` |
| `docker_tls_ca_key` | The path to the CA private key. The default value is `ca.key` |
| `docker_tls_ca_cert` | The path to the CA public key. The default value is `ca.cert` |
| `docker_tls_ca_pass` | The path to the CA passphrase file. The default value is `ca.pass` |
