resource "scaleway_volume" "swarm_worker_volume" {
  count      = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  name       = "${terraform.workspace}-volume-${count.index}"
  size_in_gb = "${var.worker_additional_volume_size}"
  type       = "l_ssd"
}

resource "scaleway_volume_attachment" "swarm_worker_volume_attachement" {
  count  = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  server = "${scaleway_server.swarm_worker.*.id[count.index / var.worker_additional_volume_count]}"
  volume = "${scaleway_volume.swarm_worker_volume.*.id[count.index]}"
}

resource "null_resource" "swarm_worker_volume_mount" {
  count = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${scaleway_server.swarm_worker.*.public_ip[count.index / var.worker_additional_volume_count]}"
    timeout     = "300s"
  }

  # Need to re-provision the mount-volume.sh script as on Scaleway attaching volumes requires 
  # the servers to be powered and consequently it clears /tmp directory.
  provisioner "file" {
    source      = "scripts/mount-volume.sh"
    destination = "/tmp/mount-volume.sh"
  }
  provisioner "remote-exec" {
    inline = [
      "sh /tmp/mount-volume.sh ${var.device_names[count.index % var.worker_additional_volume_count]} data${count.index % var.worker_additional_volume_count}",
    ]
  }

  depends_on = ["scaleway_volume_attachment.swarm_worker_volume_attachement"]
}