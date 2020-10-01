resource "scaleway_instance_ip" "manager" {
  count   = var.SCW && length(var.manager_ips) == 0 ? var.manager_instance_count : 0
}

resource "scaleway_instance_server" "manager" {
  count             = var.SCW ? var.manager_instance_count : 0
  name              = "${terraform.workspace}-manager-${count.index}"
  image             = data.scaleway_image.manager_image.*.id[0]
  type              = var.manager_instance_type
  security_group_id = scaleway_instance_security_group.manager_security_group.*.id[0]
  ip_id             = length(var.manager_ips) > 0 ? var.manager_ips[count.index] : scaleway_instance_ip.manager.*.id[count.index]
  cloud_init        = data.template_cloudinit_config.prerequisies_config.rendered

  root_volume {
    size_in_gb     = lookup(local.root_volume_size, var.manager_instance_type)
  }

  additional_volume_ids = [scaleway_instance_volume.manager_volumess.*.id[count.index]]

  connection {
    type        = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = self.private_ip 
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "file" {
    source      = var.ssh_key
    destination = "~/.ssh/ssh.pem"
  }

 provisioner "remote-exec" {
    inline = [
      "mkdir ${local.tmp_dir}",
      "mkdir -p $HOME/.config/rclone"
    ]
  }

  provisioner "file" {
    source      = var.rclone_conf != "" ? var.rclone_conf : "scripts/null-files/rclone.conf"
    destination = "$HOME/.config/rclone/rclone.conf"
  }
  
  provisioner "file" {
    source      = var.docker_tls_ca_cert
    destination = "${local.tmp_dir}/ca.cert"
  }

  provisioner "file" {
    source      = var.docker_tls_ca_key
    destination = "${local.tmp_dir}/ca.key"
  }

  provisioner "file" {
    source      = var.docker_tls_ca_pass
    destination = "${local.tmp_dir}/ca.pass"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = local.tmp_dir
  }

  provisioner "file" {
    source      = "commands/"
    destination = local.tmp_dir
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/setup-prerequisites.sh \"${local.private_network_cidr}\"",
      "bash ${local.tmp_dir}/setup-manager.sh ${self.private_ip} ${scaleway_instance_server.manager.0.private_ip}"
    ]
  }

  /*depends_on = [ 
    "scaleway_instance_security_group.manager"
  ]*/
}
