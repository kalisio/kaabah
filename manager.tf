resource "scaleway_ip" "swarm_manager_ip" {}

resource "scaleway_server" "swarm_manager" {
  name           = "${terraform.workspace}-manager"
  image          = "${data.scaleway_image.manager_image.id}"
  type           = "${var.manager_instance_type}"
  security_group = "${scaleway_security_group.swarm_manager.id}"
  public_ip      = "${scaleway_ip.swarm_manager_ip.ip}"

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
    source      = "configs/manager.tpl"
    destination = "/tmp/manager.tpl"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sed -e 's/SWARM_MANAGER_PRIVATE_IP/${self.private_ip}/g' /tmp/manager.tpl > /etc/systemd/system/docker.service.d/docker.conf",
      "chmod +x /tmp/install-docker.sh",
      "/tmp/install-docker.sh ${var.docker_version}",
      "chmod +x /tmp/install-docker-compose.sh",
      "/tmp/install-docker-compose.sh ${var.docker_compose_version}",
      "docker swarm init --advertise-addr ${self.private_ip} --listen-addr ${self.private_ip}:2377",
    ]
  }
}
