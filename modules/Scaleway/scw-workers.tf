resource "scaleway_ip" "swarm_worker_ip" {
  count = "${var.scw_provider == "SCALEWAY" ? var.scw_worker_instance_count : 0}"
}

resource "scaleway_server" "swarm_worker" {
  count          = "${var.scw_provider == "SCALEWAY" ? var.scw_worker_instance_count : 0}"
  name           = "${terraform.workspace}-worker-${count.index + 1}"
  image          = "${data.scaleway_image.worker_image.id}"
  type           = "${var.scw_worker_instance_type}"
  security_group = "${scaleway_security_group.swarm_workers.id}"
  public_ip      = "${element(scaleway_ip.swarm_worker_ip.*.ip, count.index)}"

  connection {
    type        = "ssh"
    user        = "${var.scw_ssh_user}"
    private_key = "${file(var.scw_ssh_key)}"
    timeout     = "120s"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sh /tmp/install-worker.sh ${var.scw_docker_version} ${scaleway_server.swarm_manager.private_ip}",
    ]
  }

  # leave swarm on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "docker swarm leave",
    ]

    on_failure = "continue"
  }

  # remove node on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "docker node rm --force ${self.name}",
    ]

    on_failure = "continue"

    connection {
      type = "ssh"
      user = "${var.scw_ssh_user}"
      host = "${scaleway_server.swarm_manager.public_ip}"
    }
  }
}
