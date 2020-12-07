resource "openstack_blockstorage_volume_v2" "manager_volumes" {
  count         = var.OVH  && var.manager_additional_volume_size > 0 ?  var.manager_instance_count : 0
  region        = var.region  
  size          = var.manager_additional_volume_size
  volume_type   = var.manager_additional_volume_type
}

resource "openstack_compute_volume_attach_v2" "manager_volume_attachements" {
  count         = var.OVH && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0
  region        = var.region
  instance_id   = openstack_compute_instance_v2.manager_instances.*.id[count.index]
  volume_id     = openstack_blockstorage_volume_v2.manager_volumes.*.id[count.index]
}

resource "null_resource" "manager_volume_mounts" {
  count = var.OVH && var.manager_additional_volume_size > 0 ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = openstack_compute_instance_v2.manager_instances.*.network.1.fixed_ip_v4[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }  

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-block-volume.sh ${local.additional_device_name} ${var.manager_additional_volume_mount_point}",
    ]
  }

  depends_on = [
    openstack_compute_volume_attach_v2.manager_volume_attachements
  ]
}

resource "openstack_blockstorage_volume_v2" "worker_volumes" {
  count         = var.OVH && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0
  region        = var.region  
  size          = var.worker_additional_volume_size
  volume_type   = var.worker_additional_volume_type
}


resource "openstack_compute_volume_attach_v2" "worker_volume_attachements" {
  count         = var.OVH && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0
  region        = var.region
  instance_id   = element(openstack_compute_instance_v2.worker_instances.*.id, count.index)
  volume_id     = element(openstack_blockstorage_volume_v2.worker_volumes.*.id, count.index)
}

resource "null_resource" "worker_volume_mounts" {
  count         = var.OVH && var.worker_additional_volume_size > 0 ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = openstack_compute_instance_v2.worker_instances.*.network.1.fixed_ip_v4[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }  

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-block-volume.sh ${local.additional_device_name} ${var.worker_additional_volume_mount_point}",
    ]
  }

  depends_on = [
    openstack_compute_volume_attach_v2.worker_volume_attachements
  ]
}
