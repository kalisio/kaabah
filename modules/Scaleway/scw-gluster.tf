resource "null_resource" "manager_gluster_create" {
  count = "${var.provider == "SCALEWAY" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${scaleway_server.manager.0.private_ip}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/setup-gluster-volume.sh \"${join(" ", scaleway_server.manager.*.private_ip)} ${join(" ", scaleway_server.worker.*.private_ip)}\""
    ]
  }

  depends_on = [
    "scaleway_server.manager",
    "scaleway_server.worker", # Ensure dependency to the workers (https://github.com/kalisio/kaabah/issues/102)
    "null_resource.worker_volume_mount"
  ]
}

resource "null_resource" "manager_gluster_mount" {
  count = "${var.provider == "SCALEWAY" ? var.manager_instance_count : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${element(scaleway_server.manager.*.private_ip, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-gluster-volume.sh ${var.gluster_share_volume_mount_point}"
    ]
  }

  depends_on = [
    "null_resource.manager_gluster_create"
  ]
}

resource "null_resource" "worker_gluster_mount" {
  count = "${var.provider == "SCALEWAY" ? var.worker_instance_count : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${element(scaleway_server.worker.*.private_ip, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

   provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-gluster-volume.sh ${var.gluster_share_volume_mount_point}"
    ]
  }

  depends_on = [
    "null_resource.manager_gluster_create"
  ]
}