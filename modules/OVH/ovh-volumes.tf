resource "openstack_blockstorage_volume_v2" "manager_volume" {
  count         = var.OVH ? var.manager_additional_volume_count * var.manager_instance_count : 0
  region        = var.region  
  size          = var.manager_additional_volume_size
}


resource "openstack_compute_volume_attach_v2" "manager_volume_attachement" {
  count         = var.OVH ? var.manager_additional_volume_count * var.manager_instance_count : 0
  region        = var.region
  instance_id   = element(openstack_compute_instance_v2.manager.*.id, count.index)
  volume_id     = element(openstack_blockstorage_volume_v2.manager_volume.*.id, count.index)
}

resource "null_resource" "manager_volume_mount" {
  count = var.OVH ? var.manager_additional_volume_count * var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = openstack_compute_instance_v2.manager.*.access_ip_v4[count.index / var.worker_additional_volume_count]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }  

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-block-volume.sh ${local.device_names[count.index % var.manager_additional_volume_count]} ${format("%s%d", var.manager_additional_volume_mount_point, count.index % var.manager_additional_volume_count)}",
    ]
  }

  depends_on = [
    openstack_compute_volume_attach_v2.manager_volume_attachement
  ]
}

resource "openstack_blockstorage_volume_v2" "worker_volume" {
  count         = var.OVH ? var.worker_additional_volume_count * var.worker_instance_count : 0
  region        = var.region  
  size          = var.worker_additional_volume_size
}


resource "openstack_compute_volume_attach_v2" "worker_volume_attachement" {
  count         = var.OVH ? var.worker_additional_volume_count * var.worker_instance_count : 0
  region        = var.region
  instance_id   = element(openstack_compute_instance_v2.worker.*.id, count.index)
  volume_id     = element(openstack_blockstorage_volume_v2.worker_volume.*.id, count.index)
}

resource "null_resource" "worker_volume_mount" {
  count = var.OVH ? var.worker_additional_volume_count * var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = openstack_compute_instance_v2.worker.*.access_ip_v4[count.index / var.worker_additional_volume_count]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }  

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-block-volume.sh ${local.device_names[count.index % var.worker_additional_volume_count]} ${format("%s%d", var.worker_additional_volume_mount_point, count.index % var.worker_additional_volume_count)}",
    ]
  }

  depends_on = [
    openstack_compute_volume_attach_v2.worker_volume_attachement
  ]
}
