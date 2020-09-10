resource "null_resource" "manager_gluster_create" {
  count = var.OVH ? 1 : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = openstack_compute_instance_v2.manager_instances.*.access_ip_v4[0]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/setup-gluster-volume.sh \"${join(" ", openstack_compute_instance_v2.manager_instances.*.network.1.fixed_ip_v4)} ${join(" ", openstack_compute_instance_v2.worker_instances.*.network.1.fixed_ip_v4)}\""
    ]
  }

  depends_on = [
    openstack_compute_instance_v2.manager_instances, 
    openstack_compute_instance_v2.worker_instances,
    null_resource.manager_volume_mounts,
    null_resource.worker_volume_mounts
  ]
}

resource "null_resource" "manager_gluster_mount" {
  count = var.OVH ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(openstack_compute_instance_v2.manager_instances.*.access_ip_v4, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-gluster-volume.sh ${var.gluster_share_volume_mount_point}"
    ]
  }

  depends_on = [
    null_resource.manager_gluster_create
  ]
}

resource "null_resource" "worker_gluster_mount" {
  count = var.OVH ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(openstack_compute_instance_v2.worker_instances.*.access_ip_v4, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

   provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-gluster-volume.sh ${var.gluster_share_volume_mount_point}"
    ]
  }

  depends_on = [
    null_resource.manager_gluster_create
  ]
}