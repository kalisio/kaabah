---
sidebarDepth: 3
---

# Advanced usage

## Cluster 

### Using rclone

**Kaabah** installs [rclone](https://https://rclone.org/) on each node of your cluster. By default, the configuration file is empty and you must configure it as you need it. Please refer to the official [guide](https://rclone.org/docs/#configure) to configure **rclone**.
However you can tell **Kaabah** to provision an already defined configuration using the variable `rclone_conf` in your configuration file:

```bash
rclone_conf = "path_to_workspace/rclone.conf"
```

### Using fail2ban

**Kaabah** installs [fail2ban](https://www.fail2ban.org/wiki/index.php/Main_Page) on each node of your cluster with one customized **jail** for SSH connection attempts. By default, it comes with the following configuration:

```ini
[sshd]
enabled = true
maxretry = 3
ignoreip = 127.0.0.1 PRIVATE_NETWORK_CIDR
```

::: tip
By default **fail2ban** will ignore SSH connections from any hosts in your private network.
:::

#### Checking the service

You can test the service using the command:

```bash
$sudo fail2ban-client status sshd
```

#### Unban an IP address

```bash
$sudo fail2ban-client set sshd unbanip <ip_address>
```

#### Ban an IP address

```bash
$sudo fail2ban-client set sshd banip <ip_address>
```

### Using crontab

**Kaabah** provides you the capability to assign a **crontab** to the manager.

#### Declaring a crontab

When building a cluster, you can take advantage of the `manager_crontab` variable to declare a crontab file to be provisioned on the manager.

```bash
manager_crontab = "workspaces/my-workspace/my-crontab
```

The pointed file must be a valid crontab file. See the [crontab file format](https://en.wikipedia.org/wiki/Cron) to have the complete specifications.

Here is an example of a crontab file that executes the [`k-swarm-prune`](../reference/helper-commands.md#k-swarm-prune) command every 2 hours:

```bash
# Clears the swarm every tow hour
0 */2 * * * k-swarm-prune

```

Once installed, you can list the actions using the command:

```bash
$crontab -l
```

And check the logs with the command:

```bash
$grep CRON /var/log/syslog
```

::: warning
Do not forget to add a `newline` at the end of the file, otherwise the installation will fail.
:::

#### Updating a crontab

To update the crontab, on the manager, follow this procedure:

1. taint the resource assigned to the crontab, that is to say: `null_resource.manager_crontab`

```bash
$terraform taint -module=AWS null_resource.manager_crontab
```

2. apply to update the services

```bash
$terraform apply -var-file="workspaces/my-workspace/my-vars.tfvars"
```

::: tip
To remove a crontab, just simply clear the `manager_crontab` variable and update the `null_resource.manager_crontab` resource as indicated above.
:::

## Docker swarm

### Managing labels

If you desire to update the labels on your cluster and keep track of the changes, you need to:

1. taint the resources attached to the labels you want to change: `null_resource.manager_labels` and `null_resource.worker_labels.*` 

```bash
# Taint the labels attached to the desired nodes, i.e. the worker 1 and the manager
$terraform taint -module=AWS null_resource.worker_labels.1
$terraform taint -module=AWS null_resource.manager_labels
```

2. update your variables file: `workspaces/<file>.tfvars`
   
3. apply the changes

```bash
$terraform apply -var-file="workspaces/<file>.tfvars"
```

### Using the registry

Using the registry is simple as:

1. build or pull the desired Docker image

```bash
# Build example
$docker build https://github.com/<organisation>/<repository>.git -t localhost:5000/<image>:<tag>
```

2. push the image into the registry

```bash
$docker push localhost:5000/<image>:<tag>
```

4. create or deploy a service using the image in the registry

```bash
# create a service
$docker service create --replicas 4 --name <service> localhost:5000/<image>:<tag>
```

or 

```bash
# deploy the service within a stack:
$docker stack deploy -c <service.yml> -c <other-service.yml> ... <stack>
```

where `<service.yml>` is a **Docker Compose file** with the following skeleton:

```yaml
version: '3.5'

services:
  <service>:
    image: localhost:5000/<image>:<tag>
    networks:
      - kaabah-network
    deploy:
      replicas: <replicas>

networks:
  kargo-network:
    name: ${DOCKER_NETWORK}
    external: true
```

## Services

### Updating the services

When updating **Kaabah**, you may need to update the services running on a given infrastructure. You can rely on Terraform to proceed:

1. taint the resource assigned to the services, that is to say: `null_resource.services`

```bash
$terraform taint -module=AWS null_resource.services
```

2. apply to update the services

```bash
$terraform apply -var-file="workspaces/my-workspace/my-vars.tfvars"
```

### Extending the services

**Kaabah** allows you to extend the default services for a given cluster. For this, you must use the `extensions_dir` variable and let it to point to an existing directory that includes:
* a `deploy` directory where to put the **Docker Compose files** to be used to deploy the services
* a `configs` directory to be used to store the configuration of the services

You can take advantage of this feature to:
* extend the configuration of an existing service, i.e. add some limits to the container's resources
* override the default configuration of the existing services
* bootstrap your cluster with additional services
  
### Monitoring the services

Even if the combination **Prometheus**/**Grafana** provides the capabilities to monitor the services, **Kaabah** is shipped with the [`k-swarm-check`](../reference/helper-commands.md#k-swarm-check) command that allows you to check the health of a service. It relies on [Docker Events](https://docs.docker.com/engine/reference/commandline/events/) and can emit a slack notification when an alert is raised or resolved. The use of the command is complementary to the use of **Prometheus**/**Grafana** and brings an extra level of reliability.

To monitor the services of your cluster, you can add the following line to your manager crontab

```bash
# k-swarm-check executed every minute
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/my-application-webook
export SLACK_TEMPLATE_MESSAGE=/etc/kaabah/slack-notification.tpl
* * * * * k-swarm-check 
```

Check the [`k-swarm-check`](../reference/helper-commands.md#k-swarm-check) documentation for more detail.

### Securing the services

#### Cross site scripting

To enable Cross [Site Scripting protection](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS), you should add the following **Traefik** label:

```yml
services:
  my_service:
    deploy:
      label:
       - "traefik.frontend.headers.customResponseHeaders=X-XSS-Protection: 1; mode=block"
```    