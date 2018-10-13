resource "null_resource" "manager_labels" {
  count = "${var.provider == "SCALEWAY" && var.manager_labels != "" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      "k-label-clear `k-node-find ${element(scaleway_server.swarm_manager.*.private_ip, 0)}`",
      "k-label-add `k-node-find ${element(scaleway_server.swarm_manager.*.private_ip, 0)}` \"${var.manager_labels}\""
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}

resource "null_resource" "worker_labels" {
  count = "${var.provider == "SCALEWAY" ? length(var.worker_labels) : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      "k-label-clear `k-node-find ${element(scaleway_server.swarm_worker.*.private_ip, count.index)}`",
      "k-label-add `k-node-find ${element(scaleway_server.swarm_worker.*.private_ip, count.index)}` \"${var.worker_labels[count.index]}\""
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}