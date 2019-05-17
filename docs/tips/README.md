---
sidebarDepth: 3
---

# Tips

## Ubuntu

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

### How to know your private IP address

```bash
$hostname -I | awk '{print $1}'
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

## Traefik

### Let's Encrypt "300 Multiple Choices" error

If **Traefik** is getting a `300 Multiple Choices` error when generating a Let's Encrypt certificate, it can be linked to the fact that your DNS has a `A-Record` pointing to the server and an `AAAA-Record` (IPv6) pointing to a different location. Remove the `AAAA-Record` to make it work

More details [here](https://dev.to/c33s/lets-encrypt-certbotacmesh-and-the-300-multiple-choices-error-3e4i)

