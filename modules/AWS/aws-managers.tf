resource "aws_instance" "manager_instances" {
  count             = var.AWS ? var.manager_instance_count : 0
  ami               = local.image
  availability_zone = var.availability_zone
  instance_type     = var.manager_instance_type
  security_groups   = [aws_security_group.manager_security_group.*.name[0]]
  user_data         = data.template_cloudinit_config.prerequisites_config.rendered

  root_block_device {
    volume_type = "gp2"
    volume_size = var.instance_volume_size
  }

  connection {
    type                = "ssh"
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
      "bash ${local.tmp_dir}/setup-prerequisites.sh ${aws_default_vpc.default_vpc.*.cidr_block[0]}",
      "bash ${local.tmp_dir}/setup-manager.sh ${self.private_ip} ${aws_instance.manager_instances.0.private_ip}",
      "echo '127.0.0.1 ${terraform.workspace}-manager-${count.index}' | sudo tee -a /etc/hosts",
      "sudo hostnamectl set-hostname ${terraform.workspace}-manager-${count.index}"
    ]
  }

  tags = {
    Name = "${terraform.workspace}-manager-${count.index}"
  }
}

