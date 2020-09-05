resource "scaleway_ip" "manager" {
  count = "${var.provider == "SCALEWAY" ? var.manager_instance_count : 0}"
}

resource "scaleway_server" "manager" {
  count          = "${var.provider == "SCALEWAY" ? var.manager_instance_count : 0}"
  name           = "${terraform.workspace}-manager-${count.index}"
  image          = "${data.scaleway_image.manager_image.id}"
  type           = "${var.manager_instance_type}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  public_ip      = "${var.manager_ips[count.index] != "" ? var.manager_ips[count.index] : element(scaleway_ip.manager.*.ip, count.index)}"

  volume {
    size_in_gb = "${lookup(local.additional_volume_size, var.manager_instance_type)}"
    type       = "l_ssd"
  }

  connection {
    type        = "ssh"
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
    source      = "${var.rclone_conf != "" ? var.rclone_conf : "scripts/null-files/rclone.conf"}"
    destination = "$HOME/.config/rclone/rclone.conf"
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
    source      = "scripts/"
    destination = "${local.tmp_dir}"
  }

  provisioner "file" {
    source      = "commands/"
    destination = "${local.tmp_dir}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/setup-prerequisites.sh \"${local.private_network_cidr}\"",
      "bash ${local.tmp_dir}/setup-manager.sh ${var.docker_version} ${self.private_ip} ${scaleway_server.manager.0.private_ip}"
    ]
  }

  depends_on = [ 
    "scaleway_security_group_rule.manager_internal_in_accept_TCP",
    "scaleway_security_group_rule.manager_internal_in_accept_UDP" 
  ]
}
