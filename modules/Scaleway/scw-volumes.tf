resource "scaleway_volume" "swarm_volume" {
  count      = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  name       = "${terraform.workspace}-volume-${count.index}"
  size_in_gb = "${var.worker_additional_volume_size}"
  type       = "l_ssd"
}

resource "scaleway_volume_attachment" "swarm_volume_attachement" {
  count  = "${var.provider == "SCALEWAY" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  server = "${scaleway_server.swarm_worker.*.id[count.index / var.worker_additional_volume_count]}"
  volume = "${scaleway_volume.swarm_volume.*.id[count.index]}"

   provisioner "remote-exec" {
    inline = [
      "sudo sh /tmp/mount-volume.sh ${var.device_names[count.index % var.worker_additional_volume_count]} data${count.index % var.worker_additional_volume_count}",
    ]

    connection {
      type        = "ssh"
      user        = "${var.ssh_user}"
      private_key = "${file(var.ssh_key)}"
      host        = "${aws_instance.swarm_worker.*.public_ip[count.index / var.worker_additional_volume_count]}"
    }
  }
}
