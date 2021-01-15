resource "null_resource" "manager_gluster_create" {
  count = var.AWS ? 1 : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.manager_instances.*.private_ip[0]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/setup-gluster-volume.sh \"${join(" ", aws_instance.manager_instances.*.name)} ${join(" ", aws_instance.worker_instances.*.name)}\""
    ]
  }

  depends_on = [
    null_resource.manager_hosts,
    null_resource.manager_volume_mounts,
    null_resource.worker_volume_mounts
  ]
}

resource "null_resource" "manager_gluster_mount" {
  count = var.AWS ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.manager_instances.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-gluster-volume.sh ${var.gluster_share_volume_mount_point}"
    ]
  }

  depends_on = [
    null_resource.manager_gluster_create
  ]
}

resource "null_resource" "worker_gluster_mount" {
  count = var.AWS ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(aws_instance.worker_instances.*.private_ip, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

   provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-gluster-volume.sh ${var.gluster_share_volume_mount_point}"
    ]
  }

  depends_on = [
    null_resource.manager_gluster_create
  ]
}
