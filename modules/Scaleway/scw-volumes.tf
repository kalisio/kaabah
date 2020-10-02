resource "scaleway_instance_volume" "manager_volumes" {
  count       = var.SCW && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0
  name        = "${terraform.workspace}-manager-${count.index}-additional-volume"
  size_in_gb  = var.manager_additional_volume_size
  type        = "b_ssd"
}

resource "null_resource" "manager_volume_mounts" {
  count = var.SCW && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = scaleway_instance_server.manager.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-block-volume.sh ${local.additional_device_name} ${var.manager_additional_volume_mount_point}"
    ]
  }

  depends_on = [
    scaleway_instance_server.manager
  ]
}

resource "scaleway_instance_volume" "worker_volumes" {
  count       = var.SCW && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0
  name        = "${terraform.workspace}-worker-${count.index}-additional-volume"
  size_in_gb  = var.worker_additional_volume_size
  type        = "b_ssd"
}

resource "null_resource" "worker_volume_mounts" {
  count = var.SCW && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = scaleway_instance_server.worker.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-block-volume.sh ${local.additional_device_name} ${var.worker_additional_volume_mount_point}"
    ]
  }

  depends_on = [
    scaleway_instance_server.worker
  ]
}
