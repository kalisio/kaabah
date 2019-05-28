resource "null_resource" "manager_labels" {
  count = "${var.provider == "SCALEWAY" && var.manager_labels != "" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${local.use_bastion ? var.bastion_ip : ""}"
    bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
    bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key): ""}"
    host                = "${local.use_bastion ? scaleway_server.manager.private_ip : scaleway_server.manager.public_ip}"    
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "k-label-clear `k-node-find ${element(scaleway_server.manager.*.private_ip, 0)}`",
      "k-label-add `k-node-find ${element(scaleway_server.manager.*.private_ip, 0)}` \"${var.manager_labels}\""
    ]
  }

  depends_on = ["scaleway_server.manager", "scaleway_server.worker"]
}

resource "null_resource" "worker_labels" {
  count = "${var.provider == "SCALEWAY" ? length(var.worker_labels) : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${local.use_bastion ? var.bastion_ip : ""}"
    bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
    bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key): ""}"
    host                = "${local.use_bastion ? scaleway_server.manager.private_ip : scaleway_server.manager.public_ip}"    
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "k-label-clear `k-node-find ${element(scaleway_server.worker.*.private_ip, count.index)}`",
      "k-label-add `k-node-find ${element(scaleway_server.worker.*.private_ip, count.index)}` \"${var.worker_labels[count.index]}\""
    ]
  }

  depends_on = ["scaleway_server.manager", "scaleway_server.worker"]
}