resource "null_resource" "manager_user_script" {
  count = "${var.provider == "SCALEWAY" && var.manager_user_script != "" ? 1 : 0}"

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

  provisioner "file" {
    source      = "${var.manager_user_script}"
    destination = "~/.kaabah/${basename(var.manager_user_script)}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ~/.kaabah/${basename(var.manager_user_script)}"
    ]
  }

  depends_on = [
    "scaleway_server.manager",
    "scaleway_server.worker", # Ensure dependency to the workers (https://github.com/kalisio/kaabah/issues/102)
    "null_resource.worker_volume_mount"
  ]
}

resource "null_resource" "worker_user_scripts" {
  count = "${var.provider == "SCALEWAY" ? length(var.worker_user_scripts) : 0}"

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

   provisioner "file" {
    source      = "${var.worker_user_scripts[count.index]}"
    destination = "~/.kaabah/${basename(var.worker_user_scripts[count.index])}"
  }
  provisioner "remote-exec" {
    inline = [
      "bash ~/.kaabah/${basename(var.worker_user_scripts[count.index])}"
    ]
  }

  depends_on = [
    "null_resource.worker_volume_mount"
  ]
}