resource "null_resource" "manager_user_script" {
  count = "${var.provider == "SCALEWAY" && var.manager_user_script != "" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "file" {
    source      = "${var.manager_user_script}"
    destination = "~/.kaabah/${basename(var.manager_user_script)}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ~/.kaabah/${basename(var.manager_user_script)}"
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}

resource "null_resource" "worker_user_scripts" {
  count = "${var.provider == "SCALEWAY" ? length(var.worker_user_scripts) : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${element(scaleway_server.swarm_worker.*.public_ip, count.index)}"
    timeout     = "120s"
  }

   provisioner "file" {
    source      = "${var.worker_user_scripts[count.index]}"
    destination = "~/.kaabah/${basename(var.worker_user_scripts[count.index])}"
  }
  provisioner "remote-exec" {
    inline = [
      "sudo bash ~/.kaabah/${basename(var.worker_user_scripts[count.index])}"
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}