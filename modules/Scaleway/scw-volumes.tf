resource "scaleway_volume" "swarm_volume" {
  count      = "${var.scw_provider == "SCALEWAY" ? var.scw_worker_additional_volume_count * var.scw_worker_instance_count : 0}"
  name       = "${terraform.workspace}-volume-${count.index + 1}"
  size_in_gb = 100
  type       = "l_ssd"
}

resource "scaleway_volume_attachment" "swarm_volume_attachement" {
  count  = "${var.scw_provider == "SCALEWAY" ? var.scw_worker_additional_volume_count * var.scw_worker_instance_count : 0}"
  server = "${scaleway_server.swarm_worker.*.id[count.index % var.scw_worker_instance_count]}"
  volume = "${scaleway_volume.swarm_volume.*.id[count.index]}"
}
