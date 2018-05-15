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
    private_key = "${file("secrets/scaleway.pem")}"
    timeout     = "30s"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir -p /etc/docker",
    ]
  }

  provisioner "file" {
    source      = "configs/worker.json"
    destination = "/etc/docker/daemon.json"
  }

  provisioner "file" {
    source      = "scripts/install-docker.sh"
    destination = "/tmp/install-docker.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/install-docker.sh",
      "/tmp/install-docker.sh ${var.scw_docker_version}",
      "docker swarm join  ${scaleway_server.swarm_manager.private_ip}:2377 --token $(docker -H ${scaleway_server.swarm_manager.private_ip}:2375 swarm join-token -q worker)",
    ]
  }

  # drain worker on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "docker node update --availability drain ${self.name}",
    ]

    on_failure = "continue"

    connection {
      type = "ssh"
      user = "root"
      host = "${scaleway_server.swarm_manager.public_ip}"
    }
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
      user = "root"
      host = "${scaleway_server.swarm_manager.public_ip}"
    }
  }
}
