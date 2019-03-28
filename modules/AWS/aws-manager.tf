resource "aws_eip_association" "swarm_manager" {
  count       = "${var.provider == "AWS" ? 1 : 0}"
  instance_id = "${aws_instance.swarm_manager.id}"
  public_ip   = "${var.manager_ip}"
}

resource "aws_instance" "swarm_manager" {
  count             = "${var.provider == "AWS" ? 1 : 0}"
  key_name          = "${var.key_name}"
  ami               = "${var.image}"
  availability_zone = "${var.availability_zone}"
  instance_type     = "${var.manager_instance_type}"
  security_groups   = ["${aws_security_group.security_group_manager.name}"]

  root_block_device {
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

  provisioner "remote-exec" {
    inline = [
      "mkdir ~/.kaabah",
    ]
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_cert}"
    destination = "~/.kaabah/ca.cert"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_key}"
    destination = "~/.kaabah/ca.key"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_pass}"
    destination = "~/.kaabah/ca.pass"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "~/.kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ~/.kaabah/install-manager.sh ${var.docker_version} ${self.private_ip}",
    ]
  }

  tags {
    Name = "${terraform.workspace}-manager"
  }
}

resource "null_resource" "manager_crontab" {
  count = "${var.provider == "AWS" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      # we stop the actions and in case the resource is recreated 
      "crontab -r", 
    ]
    on_failure = "continue"  # if no crontab keep on the process
  }

  provisioner "file" {
    source      = "${var.manager_crontab != "" ? var.manager_crontab : "scripts/null-files/crontab"}"
    destination = "~/.kaabah/crontab"
  }

  provisioner "remote-exec" {
    inline = [
      "cat ~/.kaabah/crontab | crontab -",
    ]
  }

  depends_on = ["aws_instance.swarm_manager"]
}