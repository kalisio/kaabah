---
sidebarDepth: 3
---

#  Configuration variables

## Providers

### Scaleway

| Variables | Description |
|--- | --- |
| `SCALEWAY_ACCESS_KEY` | Your **Scaleway** access key |
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

## Cluster

### Routing

| Variables | Description |
|--- | --- |
| `domain` | The domain to be added to the traefik rules. There is no default value. |
| `subdomain` | The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name by replacing each `-` by `.`. For instance, the subdomain for the workspace `app-dev` will be `app.dev.domain` |
| `ca_server` | The **Let's Encrypt** server to generate certificates. The default value is empty to let traefik manage for you. However and because **Let's Encrypt** provides [rate limits](https://letsencrypt.org/docs/rate-limits/) it is recommended to set this value to `https://acme-staging-v02.api.letsencrypt.org/directory` when testing your infrastructure. |
| `acme_file` | A certificates file if you want to reuse generated certificates. It may be useful to avoid reaching **Let's Encrypt** [rate limits](https://letsencrypt.org/docs/rate-limits/) when regenerating an infrastructure. You are responsible of retrieving the `acme.json` file from the previous infrastructure before deleting it. | The default value is ``. |
| `contact`| The email contact provided to Let's Encrypt when generating certificates. The default value is `contact@kalisio.com` |

### Security

| Variables | Description |
|--- | --- |
| `ssh_user` | The user to get connected to the instances. on **Scaleway** the default value is `root` and on **AWS** the default value is `ubuntu`. |
| `ssh_key` | The path to the the ssh key required to get connected to the instances. There is no default value. |
| `key_name` | The name of the ssh key to be used when creating the instance. The default value is `""`. This variable is ignored for **Scaleway**. |
| `bastion_ip` | The IP address of the bastion to be used. The default value is the value of the `manager_ip` variable. |
| `bastion_ssh_user` | The user to be used to get connected to the bastion. The default value is the value of the `ssh_user` variable. |
| `bastion_ssh_key` | The private key to be used to get connected to the bastion. The default value is the value of the `ssh_key` variable. |

## Swarm 

### Manager

| Variables | Description |
|--- | --- |
| `manager_instance_type` | The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. There is no default value. |
| `manager_labels` | The labels to add to the manager node. Labels are defined using a set of *key=value* pairs separated with spaces. The default value is `""`. |
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
| `worker_labels` | The labels to add to the different worker nodes. Labels are defined using a set of *key=value* pairs separated with spaces. Labels for each workers are declared using a list, e.g. `["worker0:true", "worker1:true", ...]`. The default value is `[]` |
| `worker_user_scripts` | The scripts to be executed once the workers are ready. It must be a list of file paths. The default value is `[]` |

### Docker 

| Variables | Description |
|--- | --- |
| `docker_version` | The version of the Docker engine to be installed. The default value is `18.06.1ce3-0~ubuntu` |
| `docker_network` | The name of the Docker network to be created. The default value is `kaabah` |
| `docker_tls_ca_key` | The path to the CA private key. The default value is `ca.key` |
| `docker_tls_ca_cert` | The path to the CA public key. The default value is `ca.cert` |
| `docker_tls_ca_pass` | The path to the CA passphrase file. The default value is `ca.pass` |

## Services

| Variables | Description |
|--- | --- |
| `auth_user` | Your authentication identity to access the services. There is no default value. |
| `auth_password` | Your authentication password to access the services. It can be encoded in **MD5**, **SHA1** and **BCrypt**: you can use [htpasswd](http://www.htaccesstools.com/htpasswd-generator/) to generate it. There is no default value. |
| `slack_webhook_url` | The URL to the slack webhook. The Default value is `""`. If you do not provide any value you must override the **AlertManager** configuration through the extensions. |
| `slack_channel` | The channel or user to send notifications to. Note that you must escape the `#` character by adding `\\` before it. The Default value is `"\\#alerts"`. If you do not provide any value you must override the **AlertManager** configuration through the extensions. |
| `extensions_dir` | The directory to provision to extend the services. The default value is `""`. |
