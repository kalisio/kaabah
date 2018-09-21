---
sidebar: auto
---

# Tips

## Ubuntu

### How to install Node.js (>8) & Yarn ?

```bash
$curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$sudo apt install -y nodejs
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

## Traefik

### Let's Encrypt "300 Multiple Choices" error

If **Traefik** is getting a `300 Multiple Choices` error when generating a Let's Encrypt certificate, it can be linked to the fact that your DNS has a `A-Record` pointing to the server and an `AAAA-Record` (IPv6) pointing to a different location. Remove the `AAAA-Record` to make it work

More details [here](https://dev.to/c33s/lets-encrypt-certbotacmesh-and-the-300-multiple-choices-error-3e4i)


## Scaleway

### Use an additional volume

1. Create the mount point: `mkdir -p /mnt/data`
2. Format the additional volume: `mkfs -t ext4 /dev/nbd2`
3. Retrieve the UUID of your additional volume: `blkid`
4. Create the **systemd** mount file: `nano /etc/systemd/system/mnt-data.mount` and add the following content:
```
[Unit]
Description=Mount NDB Volume at boot

[Mount]
What=UUID="16575a81-bb2c-46f3-9ad8-3bbe20157f7c"
Where=/mnt/data
Type=ext4
Options=defaults

[Install]
WantedBy=multi-user.target
```
5. Reload **systemd**: `systemctl daemon-reload`
6. Mount the volume: `systemctl start mnt-data.mount`
7. Enable automatic mount during boot: `systemctl enable mnt-data.mount` 

See the [following article](https://www.scaleway.com/docs/attach-and-detach-a-volume-to-an-existing-server/) for details.
