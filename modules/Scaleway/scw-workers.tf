resource "scaleway_ip" "swarm_worker" {
  count = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"
}

resource "scaleway_server" "swarm_worker" {
  count          = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"
  name           = "${terraform.workspace}-worker-${count.index}"
  image          = "${data.scaleway_image.worker_image.id}"
  type           = "${var.worker_instance_type}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  public_ip      = "${element(scaleway_ip.swarm_worker.*.ip, count.index)}"

  volume {
    size_in_gb = "${lookup(var.additional_volume_size, var.worker_instance_type)}"
    type       = "l_ssd"
  }

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${self.private_ip}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "300s"
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
      "sh ~/.kaabah/install-worker.sh ${var.docker_version} ${scaleway_server.swarm_manager.private_ip} \"10.0.0.0/8\"",
    ]
  }

  # leave swarm on destroy
  provisioner "remote-exec" {
    inline = [
      "sh ~/.kaabah/remove-worker.sh",
    ]
    when       = "destroy"
    on_failure = "continue"
  }

  # Tell the manager to remove the node on destroy
  provisioner "remote-exec" {
    inline = [
      "docker node rm --force `k-node-find ${self.private_ip}`",
    ]
    when       = "destroy"
    on_failure = "continue"
    
    connection {
      type                = "ssh"
      bastion_host        = "${local.use_bastion ? var.bastion_ip : ""}"
      bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
      bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key): ""}"
      host                = "${local.use_bastion ? scaleway_server.swarm_manager.private_ip : scaleway_server.swarm_manager.public_ip}"    
      user                = "${var.ssh_user}"
      private_key         = "${file(var.ssh_key)}"
      timeout             = "300s"
    }
  }
}
