---
sidebarDepth: 3
---

# Helper commands

::: tip Note
The helper commands are installed in `/usr/local/sbin` and can be used out of the box.
:::

## k-label-add

### Description

`usage: k-label-add <node_id> <labels>`

Adds the specified labels to a given node

### Example

```bash
$k-label-add 87vv4tmksirt646er0l1jk66h "label1=value1 label2=value label3=value3"
```

## k-label-clear

### Description

`usage: k-label-clear <node_id>`

Clears the labels attached to a given node

### Example 

```bash
$k-label-clear 87vv4tmksirt646er0l1jk66h
```

## k-label-list

### Description

`usage: k-label-list <node_id>`

Lists the labels attached to a given node

### Example 

```bash
$k-label-list 87vv4tmksirt646er0l1jk66h 
label1=value1 label2=value label3=value3
```

## k-node-exec

### Description

Executes a command or a script on the given node.

`usage: k-node-exec -command|-c <node_id> <command>`
`usage: k-node-exec -script|-s <node_id> <script> [arguments...]`

The script will be automatically provisioned on the `tmp` directory and then executed with the given arguments.

### Example

```bash
$k-node-exec -c "echo 'foo bar' > foobar"
```

## k-node-find

### Description

Returns the node ID corresponding to the given node IP address

`usage: k-node-find <node_ip>`

### Example

```bash
$k-node-find 172.31.34.218
87vv4tmksirt646er0l1jk66h
```

## k-service-check

### Description

Checks the status of the given service.

`usage: k-service-check <service_id|service_name>`

::: tip 
This command is often used to find why a service can't start
:::

### Example 

```bash
$k-service-check kaabah_portainer
ID                          NAME                 IMAGE           NODE                DESIRED STATE       CURRENT                                                          STATE               ERROR               PORTS
ne6otm12od24hmj576bj8322c   kaabah_portainer.1   portainer/portainer:latest@sha256:07c0e19e28e18414dd02c313c36b293758acf197d5af45077e3dd69c630e25cc   ip-172-31-36-140    Running             Running about an hour ago
```

## k-worker-list

### Description

Displays the worker nodes. If the options `--id-only` is defined, it returns the IDs of the workers.

`usage: k-worker-list [--id-only|-i]`

### Example

```bash
$k-worker-list
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
afwvqo2pv90jc5us3t8nvwzsd     ip-172-31-35-40     Ready               Active                                  18.03.1-ce
wyo0dvb85bn0ziw58v0o8u4tl     ip-172-31-39-133    Ready               Active                                  18.03.1-ce
$k-worker-list -i
afwvqo2pv90jc5us3t8nvwzsd
wyo0dvb85bn0ziw58v0o8u4tl
```

## k-worker-foreach

### Description

Executes the given command or script on each worker

`usage: k-worker-foreach --command|-c <command>`
`usage: k-worker-foreach --script|-s <script> [arguments...]`

### Example

```bash
$k-worker-foreach -c "echo 'foo bar' > foobar.txt"
```
## k-swarm-check

### Description

Checks the docker events for the events of type of `unhealthy` and `die` status. The command returns only the latest events during the given time gap.

`usage: k-swarm-check <time_gap>`
`usage: k-swarm-check --slack|-s <slack_webhook_url> <slack_message_template> <time_gap>`

The parameter `time_gap` is defined in **Go** duration strings (e.g. 30s, 10m, 1h30m) 

If the `slack` option is enabled, you must provide:
* the slack webhook url
* a notification template. The following variables are templatized: 
** `SERVICE`: the observed service
** `STATUS`: the observed status
** `ACTION`: the action is set to `FIRING` when emitting a new alert and `RESOLVED` when resolving an alert
** `COLOR`:  the color is set to `daner` when emitting a new alert and `good` when resolving an alert

Here is an example of message template that can be used as a payload for slack notification:

```json
{
  "text":"*My platform - ${SERVICE}*",
  "attachments": [
     {
        "title":"[${ACTION}] status: ${STATUS}",
        "title_link": "https://portainer.my-subdomain",
        "color":"${COLOR}"
     }
   ]
}
```

::: tip
See the [Messaging payload reference](https://api.slack.com/reference/messaging/payload) for a complete description.
:::

### Example

```
$k-swarm-check -s https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXXXXX alert.tpl 30s 
```

## k-swarm-info

### Description

Displays the main information about the cluster. It lists:
* the nodes
* the labels on each nodes
* the services

`usage: k-swarm-info`

### Example

```bash
$k-swarm-info
```

## k-swarm-prune

### Description

Removes the unused images, volumes and networks on the nodes

`usage: k-swarm-prune`

### Example

```bash
$k-swarm-prune
```
