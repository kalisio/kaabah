resource "aws_instance" "swarm_worker" {
  count                       = "${var.aws_provider == "AWS" ? var.aws_worker_instance_count : 0}"
  key_name                    = "${var.aws_key_name}"
  ami                         = "${var.aws_image}"
  instance_type               = "${var.aws_manager_instance_type}"
  security_groups             = ["${aws_security_group.swarm_manager.name}"]
  associate_public_ip_address = true

  connection {
    type        = "ssh"
    user        = "${var.aws_ssh_user}"
    private_key = "${file(var.aws_ssh_key)}"
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
      "sudo sh /tmp/install-worker.sh ${var.aws_docker_version} ${aws_instance.swarm_manager.private_ip}",
    ]
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
