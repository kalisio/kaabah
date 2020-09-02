resource "null_resource" "manager_crontab" {
  count = "${var.provider == "OVH" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${openstack_compute_instance_v2.manager.0.access_ip_v4}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      # we stop the actions and in case the resource is recreated 
      "crontab -r", 
    ]
    on_failure = "continue"  # if no crontab keep on the process
  }

  provisioner "file" {
    source      = "${var.manager_crontab != "" ? var.manager_crontab : "scripts/null-files/crontab"}"
    destination = "${local.tmp_dir}/crontab"
  }

  provisioner "remote-exec" {
    inline = [
      "cat ${local.tmp_dir}/crontab | crontab -",
    ]
  }
}