resource "null_resource" "manager_user_script" {
  count = "${var.provider == "OVH" && var.manager_user_script != "" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${openstack_compute_instance_v2.manager.access_ip_v4}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "file" {
    source      = "${var.manager_user_script}"
    destination = "${local.tmp_dir}/${basename(var.manager_user_script)}"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/${basename(var.manager_user_script)}"
    ]
  }

  depends_on = ["openstack_compute_instance_v2.manager", "openstack_compute_instance_v2.worker"]
}

resource "null_resource" "worker_user_scripts" {
  count = "${var.provider == "OVH" ? length(var.worker_user_scripts) : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${element(openstack_compute_instance_v2.worker.*.access_ip_v4, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }
   provisioner "file" {
    source      = "${var.worker_user_scripts[count.index]}"
    destination = "${local.tmp_dir}/${basename(var.worker_user_scripts[count.index])}"
  }
  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/${basename(var.worker_user_scripts[count.index])}"
    ]
  }

  depends_on = ["openstack_compute_instance_v2.manager", "openstack_compute_instance_v2.worker"]
}
