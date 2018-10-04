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
      "bash ~/.kaabah/add-labels.sh ${element(scaleway_server.swarm_manager.*.private_ip, 0)} \"${var.manager_labels}\""
    ]
  }

  provisioner "remote-exec" {
    inline     = [
      "bash ~/.kaabah/clean-labels.sh ${element(scaleway_server.swarm_manager.*.private_ip, 0)}"
    ]
    when       = "destroy"
    on_failure = "continue"
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
      "bash ~/.kaabah/add-labels.sh ${element(scaleway_server.swarm_worker.*.private_ip, count.index)} \"${var.worker_labels[count.index]}\""
    ]
  }

  provisioner "remote-exec" {
    inline     = [ 
      "bash ~/.kaabah/clean-labels.sh ${element(scaleway_server.swarm_worker.*.private_ip, count.index)}" 
    ]
    when       = "destroy"
    on_failure = "continue"
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}