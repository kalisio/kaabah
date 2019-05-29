resource "scaleway_ip" "manager" {
  count = "${var.provider == "SCALEWAY" && var.manager_ip =="" ? 1 : 0}"
}

resource "scaleway_server" "manager" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  name           = "${terraform.workspace}-manager"
  image          = "${data.scaleway_image.manager_image.id}"
  type           = "${var.manager_instance_type}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  public_ip      = "${var.manager_ip}"

  volume {
    size_in_gb = "${lookup(var.additional_volume_size, var.manager_instance_type)}"
    type       = "l_ssd"
  }

  connection {
    type        = "ssh"
    bastion_host        = "${local.use_bastion ? var.bastion_ip : ""}"
    bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
    bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key) : ""}"
    host                = "${local.use_bastion ? self.private_ip : self.public_ip}" # use public ip instead of manager_ip because the eip is not associated right now
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout     = "${local.timeout}"
  }

  provisioner "file" {
    source      = "${var.ssh_key}"
    destination = "~/.ssh/ssh.pem"
  }

 provisioner "remote-exec" {
    inline = [
      "mkdir ${local.tmp_dir}",
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
    source      = "scripts/"
    destination = "${local.tmp_dir}"
  }

  provisioner "file" {
    source      = "commands/"
    destination = "${local.tmp_dir}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/install-manager.sh ${var.docker_version} ${self.private_ip} \"${local.scw_cidr}\" ${terraform.workspace} ${var.subdomain}",
    ]
  }
}

resource "null_resource" "manager_crontab" {
  count = "${var.provider == "SCALEWAY" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${local.use_bastion ? var.bastion_ip : ""}"
    bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
    bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key): ""}"
    host                = "${local.use_bastion ? scaleway_server.manager.private_ip : var.manager_ip}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
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
    destination = "${local.tmp_dir}/crontab"
  }

  provisioner "remote-exec" {
    inline = [
      "cat ${local.tmp_dir}/crontab | crontab -",
    ]
  }

  depends_on = ["scaleway_server.manager"]
}