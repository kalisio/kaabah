resource "null_resource" "manager_user_scripts" {
  count = var.SCW && var.user_script != "" ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(scaleway_instance_server.manager.*.private_ip, count.index)    
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "file" {
    source      = var.user_script
    destination = "${local.tmp_dir}/${basename(var.user_script)}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/${basename(var.user_script)} manager ${count.index}"
    ]
  }

  depends_on = [
    null_resource.manager_gluster_mount,
    null_resource.worker_gluster_mount
  ]
}

resource "null_resource" "worker_user_scripts" {
  count = var.SCW && var.user_script != "" ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(scaleway_instance_server.worker.*.private_ip, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

   provisioner "file" {
    source      = var.user_script
    destination = "${local.tmp_dir}/${basename(var.user_script)}"
  }
  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/${basename(var.user_script)} worker ${count.index}"
    ]
  }

  depends_on = [
    null_resource.manager_user_scripts
  ]
}
