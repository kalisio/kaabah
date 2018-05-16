resource "aws_instance" "swarm_worker" {
  count                       = "${var.aws_provider == "AWS" ? var.aws_worker_instance_count : 0}"
  key_name                    = "AWS"
  ami                         = "${var.aws_ami}"
  instance_type               = "${var.aws_manager_instance_type}"
  security_groups             = ["${aws_security_group.swarm_manager.name}"]
  associate_public_ip_address = true

  connection {
    type        = "ssh"
    user        = "${var.aws_ssh_user}"
    private_key = "${file("secrets/aws.pem")}"
    timeout     = "30s"
  }

  provisioner "file" {
    source      = "configs/worker.json"
    destination = " /tmp/daemon.json"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo mkdir -p /etc/docker",
      "sudo mv /tmp/daemon.json /etc/docker/daemon.json",
    ]
  }

  provisioner "file" {
    source      = "scripts/install-docker.sh"
    destination = "/tmp/install-docker.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo chmod +x /tmp/install-docker.sh",
      "sudo /tmp/install-docker.sh ${var.aws_docker_version}",
      "sudo docker swarm join  ${aws_instance.swarm_manager.private_ip}:2377 --token $(docker -H ${aws_instance.swarm_manager.private_ip}:2375 swarm join-token -q worker)",
    ]
  }

  # drain worker on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "sudo docker node update --availability drain ${self.tags.Name}",
    ]

    on_failure = "continue"

    connection {
      type = "ssh"
      user = "${var.aws_ssh_user}"
      host = "${aws_instance.swarm_manager.public_ip}"
    }
  }

  # leave swarm on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "sudo docker swarm leave",
    ]

    on_failure = "continue"
  }

  # remove node on destroy
  provisioner "remote-exec" {
    when = "destroy"

    inline = [
      "sudo docker node rm --force ${self.tags.Name}",
    ]

    on_failure = "continue"

    connection {
      type = "ssh"
      user = "${var.aws_ssh_user}"
      host = "${aws_instance.swarm_manager.public_ip}"
    }
  }

  tags {
    Name = "${terraform.workspace}-worker-${count.index}"
  }
}
