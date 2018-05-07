resource "scaleway_ip" "swarm_manager_ip" {
  count = 1
}

resource "scaleway_server" "swarm_manager" {
  count               = 1
  name                = "${terraform.workspace}-manager-${count.index + 1}"
  image               = "${data.scaleway_image.manager_image.id}"
  type                = "${var.manager_instance_type}"
  dynamic_ip_required = "true"
  security_group      = "${scaleway_security_group.swarm_managers.id}"

  connection {
    type        = "ssh"
    user        = "root"
    private_key = "${file("ssh.pem")}"
    timeout     = "30s"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir -p /etc/systemd/system/docker.service.d",
    ]
  }

  provisioner "file" {
    source      = "configs/docker/manager.tpl"
    destination = "/tmp/manager.tpl"
  }

  provisioner "file" {
    source      = "scripts/install-docker-ce.sh"
    destination = "/tmp/install-docker-ce.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "sed -e 's/SWARM_MANAGER_PRIVATE_IP/${self.private_ip}/g' /tmp/manager.tpl > /etc/systemd/system/docker.service.d/docker.conf",
      "chmod +x /tmp/install-docker-ce.sh",
      "/tmp/install-docker-ce.sh ${var.docker_version}",
      "docker swarm init --advertise-addr ${self.private_ip} --listen-addr ${self.private_ip}:2377",
    ]
  }
}
