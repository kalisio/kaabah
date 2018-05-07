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
      "mkdir -p /${terraform.workspace}",
      "mkdir -p /etc/systemd/system/docker.service.d",
    ]
  }

  provisioner "file" {
    source      = "configs/docker/manager.tpl"
    destination = "/tmp/manager.tpl"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "file" {
    source      = "services/"
    destination = "/${terraform.workspace}"
  }

  provisioner "remote-exec" {
    inline = [
      "sed -e 's/SWARM_MANAGER_PRIVATE_IP/${self.private_ip}/g' /tmp/manager.tpl > /etc/systemd/system/docker.service.d/docker.conf",
      "chmod +x /tmp/install-docker.sh",
      "/tmp/install-docker.sh ${var.docker_version}",
      "chmod +x /tmp/install-docker-compose.sh",
      "/tmp/install-docker-compose.sh ${var.docker_compose_version}",
      "docker swarm init --advertise-addr ${self.private_ip} --listen-addr ${self.private_ip}:2377",
      "chmod +x /tmp/setup-services.sh",
      "/tmp/setup-services.sh ${terraform.workspace}",
    ]
  }
}
