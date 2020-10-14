---
sidebarDepth: 3
---

# Tips

## Debian

### How to install Node.js (>8) & Yarn ?

* Node.js
  
```bash
$curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$sudo apt-get update && sudo apt-get install -y nodejs
```
* Yarn

```bash
$curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$sudo apt-get update && sudo apt-get install yarn
```
  
### How to install AWS CLI ?

```bash
$sudo apt install python-pip
$pip install awscli --upgrade --user
```

You can then configure the CLI with your credentials:

```bash
$aws configure
```

## Docker swarm

### How to find out why service can't start ?

```bash
$docker service ps --no-trunc {serviceName}
```

### How to list nodes with labels ?

```bash
$docker node ls -q | xargs docker node inspect -f '{{ .ID }} [{{ .Description.Hostname }}]: {{ .Spec.Labels }}'
```

