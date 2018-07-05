---
sidebar: auto
---

# Tips

## Docker swarm

### How to find out why service can't start ?

```bash
$docker service ps --no-trunc {serviceName}
```

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

## AWS

### Use an additional volume

1. Create the mount point: `sudo mkdir -p /mnt/data`
2. Determine the name of the device assigned to the volume: `lsblk`  
3. Format the additional volume: `sudo mkfs -t ext4 /dev/xvdf`
4. Update the `ftsab` to mount the volume automatically: `sudo nano /etc/fstab` and add the following line:
```
/dev/xvdf /mnt/data ext4 defaults,noatime 1 1
```
5. Mount the volume: `sudo mount -a`

See the [following article](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html) for details.