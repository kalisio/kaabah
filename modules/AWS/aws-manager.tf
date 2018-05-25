resource "aws_eip" "swarm_manager" {
  count    = "${var.aws_provider == "AWS" ? 1 : 0}"
  instance = "${aws_instance.swarm_manager.id}"

  tags {
    Name = "${terraform.workspace}-manager"
  }
}

resource "aws_instance" "swarm_manager" {
  count           = "${var.aws_provider == "AWS" ? 1 : 0}"
  key_name        = "${var.aws_key_name}"
  ami             = "${var.aws_image}"
  instance_type   = "${var.aws_manager_instance_type}"
  security_groups = ["${aws_security_group.swarm_manager.name}"]

  connection {
    type        = "ssh"
    user        = "${var.aws_ssh_user}"
    private_key = "${file(var.aws_ssh_key)}"
    timeout     = "120s"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo sh /tmp/install-manager.sh ${var.aws_docker_version} ${self.private_ip}",
    ]
  }

  tags {
    Name = "${terraform.workspace}-manager"
  }
}
