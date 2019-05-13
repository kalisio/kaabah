resource "aws_instance" "swarm_worker" {
  count                       = "${var.provider == "AWS" ? var.worker_instance_count : 0}"
  key_name                    = "${var.key_name}"
  ami                         = "${var.image}"
  availability_zone           = "${var.availability_zone}"
  instance_type               = "${var.worker_instance_type}"
  security_groups             = ["${aws_security_group.security_group_worker.name}"]

  root_block_device {
    volume_type = "gp2"
    volume_size = "${var.instance_volume_size}"
  }

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${self.private_ip}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
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
      "sudo bash ~/.kaabah/install-worker.sh ${var.docker_version} ${aws_instance.swarm_manager.private_ip} ${aws_default_vpc.swarm_vpc.cidr_block}",
    ]
  }

  #  Leave swarm
  provisioner "remote-exec" {
    inline = [
      "sudo bash ~/.kaabah/remove-worker.sh ${aws_instance.swarm_manager.private_ip}",
    ]
    when       = "destroy"
    on_failure = "continue"
  }
  
  # Tell the manager to remove the node on destroy
  provisioner "remote-exec" {
    inline = [
      "sudo docker node rm --force `sudo k-node-find ${self.private_ip}`",
    ]
    when       = "destroy"
    on_failure = "continue"
    
    connection {
      type                = "ssh"
      bastion_host       = "${local.use_bastion ? var.bastion_ip : ""}"
      bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
      bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key): ""}"
      host                = "${local.use_bastion ? aws_instance.swarm_manager.private_ip : var.manager_ip}"
      user                = "${var.ssh_user}"
      private_key         = "${file(var.ssh_key)}"
      timeout             = "${local.timeout}"
    }
  }

  tags {
    Name = "${terraform.workspace}-worker-${count.index}"
  }
}
