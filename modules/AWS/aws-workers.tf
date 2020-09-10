resource "aws_instance" "worker_instances" {
  count                       = var.AWS ? var.worker_instance_count : 0
  key_name                    = var.key_name
  ami                         = local.image
  availability_zone           = var.availability_zone
  instance_type               = var.worker_instance_type
  security_groups             = [aws_security_group.worker_security_group.*.name[0]]

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
      "mkdir -p $HOME/.config/rclone",
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

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/setup-prerequisites.sh ${aws_default_vpc.default_vpc.*.cidr_block[0]}",
      "sudo bash ${local.tmp_dir}/setup-worker.sh ${var.docker_version} ${aws_instance.manager_instances.0.private_ip}",
      "echo '127.0.0.1 ${terraform.workspace}-worker-${count.index}' | sudo tee -a /etc/hosts",
      "sudo hostnamectl set-hostname ${terraform.workspace}-worker-${count.index}"
    ]
  }
 
  tags = {
    Name = "${terraform.workspace}-worker-${count.index}"
  }
}
