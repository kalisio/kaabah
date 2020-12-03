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

## k-leader-exec

### Description

`usage: k-leader-exec <command>`

Execute the given command when called from the leader node

::: tip
The `k-leader-exec` is useful to setup cron jobs redundancy and failover over a swarm with multiple manager because it ensures that the jobs will only run on the leader.
:::

### Example 

```bash
$k-leader-exec k-swarm-prune
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

## k-node-foreach

### Description

Executes the given command or script on each node.

`usage: k-node-foreach [--worker|--manager] --command|-c <command>`

`usage: k-node-foreach [--worker|--manager] --script|-s <script> [arguments...]`

The `worker` and `manager` options allow you to filter the nodes according their role."

### Example

```bash
# All nodes
$k-node-foreach -c "echo 'foo bar' > foobar.txt"
# Workers only
$k-node-foreach --worker -c "echo 'foo bar' > foobar.txt"
```

## k-service-check

### Description

Checks whether the service is healthy.

`usage: k-service-check <service_name> [starting_duration]`

The `starting_duration` provides initialization time for services that need time to bootstrap. It must be expressed in seconds and the default value is `300`.

You can take advantage of raising an alert using **Slack** if you predefined the following environment variable: 
* `SLACK_WEBHOOK_URL`: the URL of the **Slack** webhook
* `SLACK_PAYLOAD_TEMPLATE`: the path to the payload template file. The following variables are templatized by the command:
  * `SERVICE`: the observed service
  * `STATUS`: the observed status
  * `ACTION`: the action is set to `FIRING` when emitting a new alert and `RESOLVED` when resolving an alert
  * `COLOR`:  the color is set to `daner` when emitting a new alert and `good` when resolving an alert

Here is an example of message template that can be used as a payload for slack notification:

```json
{
  "text":"*My cluster specific notification*",
  "attachments": [
     {
        "title":"[${ACTION}] ${SERVICE} (status: ${STATUS})",
        "title_link": "https://an-url",
        "color":"${COLOR
     }
   ]
}
```

::: tip
See the [Messaging payload reference](https://api.slack.com/reference/messaging/payload) for a complete description.
:::

### Example

```bash
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/my-application-webook
export SLACK_PAYLOAD_TEMPLATE=$HOME/slack-payload.tpl
$k-service-check kaabah_grafana   # ok
$k-service-check kaabah_cadvisor # nok
[alert] service kaabah_cadvisor is unhealthy  # raises an alert in slack
```

## k-service-status

### Description

Returns the status of the given service.

`usage: k-service-status <service_id|service_name>`

::: tip 
This command is often used to find why a service can't start
:::

### Example 

```bash
$k-service-status kaabah_portainer
ID                          NAME                 IMAGE           NODE                DESIRED STATE       CURRENT                                                          STATE               ERROR               PORTS
ne6otm12od24hmj576bj8322c   kaabah_portainer.1   portainer/portainer:latest@sha256:07c0e19e28e18414dd02c313c36b293758acf197d5af45077e3dd69c630e25cc   ip-172-31-36-140    Running             Running about an hour ago
```

## k-stack-check

### Description

Checks the health of the services belonging to the given stack.

`usage: k-stack-check <stack_name> [starting_duration]`

The `starting_duration` provides initialization time for services that need time to bootstrap. It must be expressed in seconds and the default value is `300`.

::: tip 
You can take advantage of raising an alert using **Slack** if you predefined the following environment variables: `SLACK_WEBHOOK_URL` and
`SLACK_PAYLOAD_TEMPLATE`. More details [here](#k-service-check).
:::

### Example

```bash
$k-stack-check kaabah
checking service kaabah_registry
checking service kaabah_node-exporter
[critical] service kaabah_node-exporter reminds unhealthy
checking service kaabah_prometheus
checking service kaabah_grafana
checking service kaabah_cadvisor
[critical] service kaabah_cadvisor reminds unhealthy
checking service kaabah_pushgateway
checking service kaabah_alertmanager
checking service kaabah_traefik
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

Checks the health of the services.

`usage: k-swarm-check [starting_duration]`

The `starting_duration` provides initialization time for services that need time to bootstrap. It must be expressed in seconds and the default value is `300`.

::: tip 
You can take advantage of raising an alert using **Slack** if you predefined the following environment variables: `SLACK_WEBHOOK_URL` and
`SLACK_PAYLOAD_TEMPLATE`. More details [here](#k-service-check).
:::

### Example

```
$k-swarm-check
checking service kaabah_alertmanager
checking service kaabah_cadvisor
[critical] service kaabah_cadvisor reminds unhealthy
checking service kaabah_grafana
checking service kaabah_node-exporter
[critical] service kaabah_node-exporter reminds unhealthy
checking service kaabah_prometheus
checking service kaabah_pushgateway
checking service kaabah_registry
checking service kaabah_traefik
checking service kapp_app
[critical] service kapp_app reminds unhealthy
checking service kapp_mongodb
checking service kargo-hubeau_hubeau-observations
checking service kargo-hubeau_hubeau-stations
checking service kargo-ows_mapproxy
checking service kargo-ows_mapserver
checking service kargo-services_mongodb
checking service kargo-services_redis
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

Remove all unused containers, networks and dangling images.

`usage: k-swarm-prune`

### Example

```bash
$k-swarm-prune
```
