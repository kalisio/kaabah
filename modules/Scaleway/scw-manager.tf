resource "scaleway_ip" "swarm_manager" {
  count = "${var.scw_provider == "SCALEWAY" ? 1 : 0}"
}

resource "scaleway_server" "swarm_manager" {
  count          = "${var.scw_provider == "SCALEWAY" ? 1 : 0}"
  name           = "${terraform.workspace}-manager"
  image          = "${data.scaleway_image.manager_image.id}"
  type           = "${var.scw_manager_instance_type}"
  security_group = "${scaleway_security_group.swarm_manager.id}"
  public_ip      = "${scaleway_ip.swarm_manager.ip}"

  volume {
    size_in_gb = "${lookup(var.scw_additional_volume_size, var.scw_manager_instance_type)}"
    type       = "l_ssd"
  }

  connection {
    type        = "ssh"
    user        = "${var.scw_ssh_user}"
    private_key = "${file(var.scw_ssh_key)}"
    timeout     = "120s"
  }

  provisioner "file" {
    source      = "${var.aws_ssh_key}"
    destination = "~/.ssh/${terraform.workspace}.pem"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sh /tmp/install-manager.sh ${var.scw_docker_version} ${self.private_ip}",
    ]
  }
}
