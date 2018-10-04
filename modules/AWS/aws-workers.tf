resource "aws_instance" "swarm_worker" {
  count                       = "${var.provider == "AWS" ? var.worker_instance_count : 0}"
  key_name                    = "${var.key_name}"
  ami                         = "${var.image}"
  instance_type               = "${var.manager_instance_type}"
  security_groups             = ["${aws_security_group.swarm_manager.name}"]
  associate_public_ip_address = true

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
      "sudo sh /tmp/install-worker.sh ${var.docker_version} ${aws_instance.swarm_manager.private_ip} ${basename(var.ssh_key)}",
    ]
  }

  #  Leave swarm
  provisioner "remote-exec" {
    inline = [
      "sudo sh /tmp/remove-worker.sh ${aws_instance.swarm_manager.private_ip}",
    ]
    when       = "destroy"
    on_failure = "continue"
  }

  # Tell the manager to remove the node on destroy
  provisioner "remote-exec" {
    inline = [
      "sudo docker node rm --force ${self.tags.Name}",
    ]
    when       = "destroy"
    on_failure = "continue"
    
    connection {
      type = "ssh"
      user = "${var.ssh_user}"
      host = "${aws_instance.swarm_manager.public_ip}"
    }
  }

  tags {
    Name = "${terraform.workspace}-worker-${count.index}"
  }
}
