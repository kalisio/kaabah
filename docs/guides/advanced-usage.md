---
sidebarDepth: 3
---

# Advanced usage

## Using rclone

**Kaabah** installs [rclone](https://https://rclone.org/) on each node of your cluster. By default, the configuration file is empty and you must configure it as you need it. Please refer to the official [guide](https://rclone.org/docs/#configure) to configure **rclone**.
However you can tell **Kaabah** to provision an already defined configuration using the variable `rclone_conf` in your configuration file:

```bash
rclone_conf = "path_to_workspace/rclone.conf"
```

## Using fail2ban

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

### Checking the service

You can test the service using the command:

```bash
$sudo fail2ban-client status sshd
```

### Unban an IP address

```bash
$sudo fail2ban-client set sshd unbanip <ip_address>
```

### Ban an IP address

```bash
$sudo fail2ban-client set sshd banip <ip_address>
```

## Using crontabs

**Kaabah** provides you the capability to assign a **crontab** to the manager.

### Declaring the crontabs

When building a cluster, you can take advantage of the `manager_crontabs` variable to declare a crontab file to be provisioned on the manager.

```bash
manager_crontabs = ["workspaces/my-workspace/my-crontab]
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

### Updating the crontabs

To update the crontab, on the manager, follow this procedure:

1. taint the resource assigned to the crontab, that is to say: `null_resource.manager_crontabs`

```bash
$terraform taint -module=AWS null_resource.manager_crontabs
```

2. apply to update the services

```bash
$terraform apply -var-file="workspaces/my-workspace/my-vars.tfvars"
```

::: tip
To remove the crontabs, just simply clear the `manager_crontabs` variable and update the `null_resource.manager_crontab` resource as indicated above.
:::

