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

## k-stack-update

### Description

`uage: k-stack-update [--force|-f] <stack>`

Update the services within the given stack. The `--force` flag causes the service’s tasks to be shut down and replaced with new ones. 

### Example

```bash
$k-stack-update --force kargo-ows
kargo-ows_mapserver
overall progress: 1 out of 1 tasks
1/1: running   [==================================================>]
verify: Service converged
kargo-ows_tileservergl
overall progress: 4 out of 4 tasks
1/4: running   [==================================================>]
2/4: running   [==================================================>]
3/4: running   [==================================================>]
4/4: running   [==================================================>]
verify: Service converged
kargo-ows_mapproxy
overall progress: 4 out of 4 tasks
1/4: running   [==================================================>]
2/4: running   [==================================================>]
3/4: running   [==================================================>]
4/4: running   [==================================================>]
verify: Service converged
kargo-ows_k2
overall progress: 4 out of 4 tasks
1/4: running   [==================================================>]
2/4: running   [==================================================>]
3/4: running   [==================================================>]
4/4: running   [==================================================>]
verify: Service converged
```

## k-swarm-check

### Description

Checks the docker events for the events of type of `unhealthy` and `die` status. The command returns only the latest events during the given time gap.

`usage: k-swarm-check <time_gap>`
`usage: k-swarm-check --slack|-s <time_gap> <slack_webhook_url> [slack_message_template]`

The parameter `time_gap` is defined in **Go** duration strings (e.g. 30s, 10m, 1h30m) 

If the `slack` option is enabled, you must provide the slack webhook url and optionally a notification template.
By default, **Kaabah** provides the following template:

<<< @/docs/../commands/slack-notification.tpl

If you provide your own notification template, take note that the following variables are templatized by the command:
** `SERVICE`: the observed service
** `STATUS`: the observed status
** `ACTION`: the action is set to `FIRING` when emitting a new alert and `RESOLVED` when resolving an alert
** `COLOR`:  the color is set to `daner` when emitting a new alert and `good` when resolving an alert

Here is an example of message template that can be used as a payload for slack notification:

```json
{
  "text":"*My cluster specific notification*",
  "attachments": [
     {
        "title":"[${ACTION}] ${SERVICE} (status: ${STATUS})",
        "title_link": "https://an-url",
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
$k-swarm-check -s 30s https://hooks.slack.com/services/my-application-webook
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
Nodes ----------
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
0suedzfgjrxfdvfu6zwbsd3hx     ip-172-31-20-82     Ready               Active                                  18.06.1-ce
p2yvjlwzrx16o1tqx7sp3mob0 *   ip-172-31-24-162    Ready               Active              Leader              18.06.1-ce
nlcpbu4x8luvkz8ix7yv6iu58     ip-172-31-31-32     Ready               Active                                  18.06.1-ce
Labels ---------
ID                              LABELS
0suedzfgjrxfdvfu6zwbsd3hx       apps=true worker0=true
nlcpbu4x8luvkz8ix7yv6iu58       dbs=true worker1=true
Stacks --------
NAME                SERVICES            ORCHESTRATOR
kaabah              8                   Swarm
Services ------
ID                  NAME                   MODE                REPLICAS            IMAGE                        PORTS
hz4enqth3nfn        kaabah_alertmanager    replicated          1/1                 prom/alertmanager:v0.17.0
tl6r8dks3zos        kaabah_cadvisor        global              3/3                 google/cadvisor:v0.33.0
ookvvdimww2u        kaabah_grafana         replicated          1/1                 grafana/grafana:6.1.6
8yybzr4sjqf7        kaabah_node-exporter   global              3/3                 prom/node-exporter:v0.17.0
49le2ooi5xt0        kaabah_portainer       replicated          1/1                 portainer/portainer:1.20.2
5uy2selhx8ah        kaabah_prometheus      replicated          1/1                 prom/prometheus:v2.9.2
uw8y4yv003ev        kaabah_registry        replicated          1/1                 registry:2                   *:5000->5000/tcp
shecw660oiaq        kaabah_traefik         replicated          1/1                 traefik:1.7-alpine
```

## k-swarm-prune

### Description

Removes the unused images, volumes and networks on the nodes

`usage: k-swarm-prune`

### Example

```bash
$k-swarm-prune
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