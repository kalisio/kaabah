resource "aws_eip" "swarm_manager" {
  count    = "${var.provider == "AWS" ? 1 : 0}"
  instance = "${aws_instance.swarm_manager.id}"

  tags {
    Name = "${terraform.workspace}-manager"
  }
}

resource "aws_instance" "swarm_manager" {
  count           = "${var.provider == "AWS" ? 1 : 0}"
  key_name        = "${var.key_name}"
  ami             = "${var.image}"
  instance_type   = "${var.manager_instance_type}"
  security_groups = ["${aws_security_group.swarm_manager.name}"]

  ebs_block_device {
    device_name = "/dev/sda1"
    volume_type = "gp2"
    volume_size = "${var.instance_volume_size}"
  }

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    timeout     = "120s"
  }

  provisioner "file" {
    source      = "${var.ssh_key}"
    destination = "~/.ssh/ssh.pem"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_cert}"
    destination = "/tmp/ca.cert"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_key}"
    destination = "/tmp/ca.key"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_pass}"
    destination = "/tmp/ca.pass"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo sh /tmp/install-manager.sh ${var.docker_version} ${self.private_ip}",
    ]
  }

  tags {
    Name = "${terraform.workspace}-manager"
  }
}
