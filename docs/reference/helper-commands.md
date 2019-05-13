---
sidebarDepth: 3
---

# Helper commands

::: tip Note
The helper commands are installed in `/usr/local/sbin` and can be used out of the box.
:::

## k-label-add

`usage: k-label-add <node_id> <labels>`

Adds the specified labels to a given node

```bash
$k-label-add 87vv4tmksirt646er0l1jk66h "label1=value1 label2=value label3=value3"
```

## k-label-clear

`usage: k-label-clear <node_id>`

Clears the labels attached to a given node

```bash
$k-label-clear 87vv4tmksirt646er0l1jk66h
```

## k-label-list

`usage: k-label-list <node_id>`

Lists the labels attached to a given node

```bash
$k-label-list 87vv4tmksirt646er0l1jk66h 
label1=value1 label2=value label3=value3
```

## k-node-exec

`usage: k-node-exec <node_id> <command>`

Executes a command on the given node

```bash
$k-node-exec "echo 'foo bar' > foobar"
```

## k-node-find

`usage: k-node-find <node_ip>`

Returns the node ID corresponding to the given node IP address

```bash
$k-node-find 172.31.34.218
87vv4tmksirt646er0l1jk66h
```

## k-service-check

`usage: k-serice-check <service_id|service_name>`

Checks the status of the given service.

::: tip 
This command is often used to find why a service can't start
:::

```bash
$k-service-check kaabah_portainer
ID                          NAME                 IMAGE           NODE                DESIRED STATE       CURRENT                                                          STATE               ERROR               PORTS
ne6otm12od24hmj576bj8322c   kaabah_portainer.1   portainer/portainer:latest@sha256:07c0e19e28e18414dd02c313c36b293758acf197d5af45077e3dd69c630e25cc   ip-172-31-36-140    Running             Running about an hour ago
```

## k-worker-list

`usage: k-worker-list`

Displays the worker nodes 

```bash
$k-worker-list
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
afwvqo2pv90jc5us3t8nvwzsd     ip-172-31-35-40     Ready               Active                                  18.03.1-ce
wyo0dvb85bn0ziw58v0o8u4tl     ip-172-31-39-133    Ready               Active                                  18.03.1-ce
```

## k-worker-foreach

`usage: k-worker-foreach <command>`

Executes the given command on each worker

```bash
$k-worker-foreach "echo 'foo bar'" > foobar"
```

## k-swarm-prune

`usage: k-swarm-prune`

Removes the unused images, volumes and networks on the nodes

## k-swarm-info

`usage: k-swarm-info`

Displays the main information about the cluster
