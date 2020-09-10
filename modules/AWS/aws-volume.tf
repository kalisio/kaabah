resource "aws_ebs_volume" "manager_volume" {
  count             = var.AWS && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0
  availability_zone = var.availability_zone
  size              = var.manager_additional_volume_size
  type              = var.manager_additional_volume_type

  tags = {
    Name = "${terraform.workspace}-manager-${count.index}-additional-volume"
  }
}

resource "aws_volume_attachment" "manager_volume_attachement" {
  count            = var.AWS && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0
  device_name     = local.device_names[count.index]
  instance_id     = aws_instance.manager.*.id[count.index]
  volume_id       = aws_ebs_volume.manager_volume.*.id[count.index]
  force_detach    = true
}

resource "null_resource" "manager_volume_mount" {
  count  = var.AWS && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.manager.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-block-volume.sh ${local.manager_use_nvme_device ? local.nvme_devices[count.index] : local.standard_devices[count.index]} ${var.manager_additional_volume_mount_point}",
    ]
  }

  depends_on = [
    aws_volume_attachment.manager_volume_attachement
  ]
}

resource "aws_ebs_volume" "worker_volume" {
  count             = var.AWS && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0
  availability_zone = var.availability_zone
  size              = var.worker_additional_volume_size
  type              = var.worker_additional_volume_type

  tags = {
    Name = "${terraform.workspace}-worker-${count.index}"
  }
}

resource "aws_volume_attachment" "worker_volume_attachement" {
  count         = var.AWS && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0
  device_name   = local.device_names[count.index]
  instance_id   = aws_instance.worker.*.id[count.index]
  volume_id     = aws_ebs_volume.worker_volume.*.id[count.index]
  force_detach  = true
}

resource "null_resource" "worker_volume_mount" {
  count = var.AWS && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.worker.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-block-volume.sh ${local.worker_use_nvme_device ? local.nvme_devices[count.index] : local.standard_devices[count.index]} ${var.worker_additional_volume_mount_point}",
    ]
  }

  depends_on = [
    aws_volume_attachment.worker_volume_attachement
  ]
}
