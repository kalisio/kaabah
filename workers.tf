resource "scaleway_ip" "swarm_worker_ip" {
  count = "${var.worker_instance_count}"
}

resource "scaleway_server" "swarm_worker" {
  count          = "${var.worker_instance_count}"
  name           = "${terraform.workspace}-worker-${count.index + 1}"
  image          = "${data.scaleway_image.worker_image.id}"
  type           = "${var.worker_instance_type}"
  security_group = "${scaleway_security_group.swarm_workers.id}"
  public_ip      = "${element(scaleway_ip.swarm_worker_ip.*.ip, count.index)}"

  connection {
    type        = "ssh"
    user        = "root"
    private_key = "${file("ssh.pem")}"
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
      "/tmp/install-docker.sh ${var.docker_version}",
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
