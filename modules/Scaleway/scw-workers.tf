resource "scaleway_ip" "worker" {
  count = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"
}

resource "scaleway_server" "worker" {
  count          = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"
  name           = "${terraform.workspace}-worker-${count.index}"
  image          = "${data.scaleway_image.worker_image.id}"
  type           = "${var.worker_instance_type}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  public_ip      = "${element(scaleway_ip.worker.*.ip, count.index)}"

  volume {
    size_in_gb = "${lookup(local.additional_volume_size, var.worker_instance_type)}"
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
    timeout             = "${local.timeout}"
  }

  provisioner "file" {
    source      = "${var.ssh_key}"
    destination = "~/.ssh/ssh.pem"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir ${local.tmp_dir}",
      "mkdir -p $HOME/.config/rclone"
    ]
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_cert}"
    destination = "${local.tmp_dir}/ca.cert"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_key}"
    destination = "${local.tmp_dir}/ca.key"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_pass}"
    destination = "${local.tmp_dir}/ca.pass"
  }

  provisioner "file" {
    source      = "${var.rclone_conf != "" ? var.rclone_conf : "scripts/null-files/rclone.conf"}"
    destination = "$HOME/.config/rclone/rclone.conf"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "${local.tmp_dir}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/setup-prerequisites.sh \"${local.private_network_cidr}\"",
      "bash ${local.tmp_dir}/setup-worker.sh ${var.docker_version} ${scaleway_server.manager.0.private_ip}"
    ]
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
      bastion_host        = "${var.bastion_ip}"
      bastion_user        = "${var.bastion_ssh_user}"
      bastion_private_key = "${file(var.bastion_ssh_key)}"
      host                = "${scaleway_server.manager.0.private_ip}"    
      user                = "${var.ssh_user}"
      private_key         = "${file(var.ssh_key)}"
      timeout             = "${local.timeout}"
    }
  }
}
