resource "scaleway_volume" "worker_volume" {
  count      = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  name       = "${terraform.workspace}-volume-${count.index}"
  size_in_gb = "${var.worker_additional_volume_size}"
  type       = "l_ssd"
}

resource "scaleway_volume_attachment" "worker_volume_attachement" {
  count  = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  server = "${scaleway_server.worker.*.id[count.index / var.worker_additional_volume_count]}"
  volume = "${scaleway_volume.worker_volume.*.id[count.index]}"
}

resource "null_resource" "worker_volume_mount" {
  count = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${scaleway_server.worker.*.private_ip[count.index / var.worker_additional_volume_count]}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/mount-volume.sh ${local.device_names[count.index % var.worker_additional_volume_count]} ${format("%s%d", var.worker_additional_volume_mount_point, count.index % var.worker_additional_volume_count)}",
    ]
  }

  depends_on = ["scaleway_volume_attachment.worker_volume_attachement"]
}