---
sidebar: auto
---

# Helper commands

::: tip Helper commands
**Kaabah** comes with various helper commands that you can use to manage your cluster. 
These commands are installed in `/usr/local/sbin` and can be used out of the box.
:::

## k-label-add

Adds the specified labels to a given node

### Usage

`k-label-add <node_id> <labels>`

### Example

```bash
$k-label-add 87vv4tmksirt646er0l1jk66h "label1=value1 label2=value label3=value3"
```

## k-label-clear

Clears the labels attached to a given node

### Usage

`k-label-clear <node_id>`

### Example

```bash
$k-label-clear 87vv4tmksirt646er0l1jk66h
```

## k-label-list

Lists the labels attached to a given node

### Usage

`k-label-list <node_id>`

### Example

```bash
$k-label-list 87vv4tmksirt646er0l1jk66h 
label1=value1 label2=value label3=value3
```

## k-node-exec

Executes a command on the given node

### Usage

`k-node-exec <node_id> <command>`

### Example

```bash
$k-node-exec  "ping "
```

## k-node-find

Returns the node ID corresponding to the given node IP address

### Usage

`k-node-find <node_ip>`

### Example

```bash
$k-node-find 172.31.34.218
87vv4tmksirt646er0l1jk66h
```

## k-service-check

Checks the status of the given service.

::: tip 
It is useful for determining why a service can't start
:::

### Usage

`k-serice-check <service_id|service_name>`

### Example

```bash
$k-service-check kaabah_portainer
ID                          NAME                 IMAGE           NODE                DESIRED STATE       CURRENT                                                          STATE               ERROR               PORTS
ne6otm12od24hmj576bj8322c   kaabah_portainer.1   portainer/portainer:latest@sha256:07c0e19e28e18414dd02c313c36b293758acf197d5af45077e3dd69c630e25cc   ip-172-31-36-140    Running             Running about an hour ago
```

## k-worker-list

Displays the worker nodes 

### Usage

`k-worker-list`

### Example

```bash
$k-worker-list
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
afwvqo2pv90jc5us3t8nvwzsd     ip-172-31-35-40     Ready               Active                                  18.03.1-ce
wyo0dvb85bn0ziw58v0o8u4tl     ip-172-31-39-133    Ready               Active                                  18.03.1-ce
```

## k-worker-foreach

Executes a command on each worker

### Usage

`k-worker-foreach`

### Example

```bash
$k-worker-foreach "echo 'a command' > command"
```

## k-swarm-info

Displays the main information about the cluster

### Usage

`k-swarm-info`

### Example

```bash
$k-swarm-info
```
