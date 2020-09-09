resource "aws_ebs_volume" "manager_volume" {
  count             = var.AWS ? var.manager_additional_volume_count * var.manager_instance_count : 0
  availability_zone = var.availability_zone
  size              = var.manager_additional_volume_size
  type              = var.manager_additional_volume_type

  tags = {
    Name = "${terraform.workspace}-manager-${count.index}"
  }
}

resource "aws_volume_attachment" "manager_volume_attachement" {
  count         = var.AWS ? var.manager_additional_volume_count * var.manager_instance_count : 0
  device_name   = local.device_names[count.index % var.manager_additional_volume_count]
  instance_id   = aws_instance.manager.*.id[count.index / var.manager_additional_volume_count]
  volume_id     = aws_ebs_volume.manager_volume.*.id[count.index]
  force_detach  = true
}

resource "null_resource" "manager_volume_mount" {
  count = var.AWS ? var.manager_additional_volume_count * var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.manager.*.private_ip[count.index / var.manager_additional_volume_count]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-block-volume.sh ${local.manager_use_nvme_device ? local.nvme_devices[count.index % var.manager_additional_volume_count] : local.standard_devices[count.index % var.manager_additional_volume_count]} ${format("%s%d", var.manager_additional_volume_mount_point, count.index % var.manager_additional_volume_count)}",
    ]
  }

  depends_on = [
    aws_volume_attachment.manager_volume_attachement
  ]
}

resource "aws_ebs_volume" "worker_volume" {
  count             = var.AWS ? var.worker_additional_volume_count * var.worker_instance_count : 0
  availability_zone = var.availability_zone
  size              = var.worker_additional_volume_size
  type              = var.worker_additional_volume_type

  tags = {
    Name = "${terraform.workspace}-worker-${count.index}"
  }
}

resource "aws_volume_attachment" "worker_volume_attachement" {
  count         = var.AWS ? var.worker_additional_volume_count * var.worker_instance_count : 0
  device_name   = local.device_names[count.index % var.worker_additional_volume_count]
  instance_id   = aws_instance.worker.*.id[count.index / var.worker_additional_volume_count]
  volume_id     = aws_ebs_volume.worker_volume.*.id[count.index]
  force_detach  = true
}

resource "null_resource" "worker_volume_mount" {
  count = var.AWS ? var.worker_additional_volume_count * var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.worker.*.private_ip[count.index / var.worker_additional_volume_count]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-block-volume.sh ${local.worker_use_nvme_device ? local.nvme_devices[count.index % var.worker_additional_volume_count] : local.standard_devices[count.index % var.worker_additional_volume_count]} ${format("%s%d", var.worker_additional_volume_mount_point, count.index % var.worker_additional_volume_count)}",
    ]
  }

  depends_on = [
    aws_volume_attachment.worker_volume_attachement
  ]
}
