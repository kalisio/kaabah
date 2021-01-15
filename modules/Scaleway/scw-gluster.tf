resource "null_resource" "manager_gluster_create" {
  count = var.SCW ? 1 : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = scaleway_instance_server.manager.*.private_ip[0]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/setup-gluster-volume.sh \"${join(" ", scaleway_instance_server.manager.*.name)} ${join(" ", scaleway_instance_server.worker.*.name)}\""
    ]
  }

  depends_on = [
    null_resource.manager_hosts
  ]
}

resource "null_resource" "manager_gluster_mount" {
  count = var.SCW ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(scaleway_instance_server.manager.*.private_ip, count.index)
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
  count = var.SCW ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(scaleway_instance_server.worker.*.private_ip, count.index)
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
