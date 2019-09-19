resource "null_resource" "manager_labels" {
  count = "${var.provider == "OVH" && var.manager_labels != "" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${aws_instance.manager.acess_ip_v4}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "k-label-clear `k-node-find ${element(openstack_compute_instance_v2.manager.*.network.1.fixed_ip_v4, 0)}`",
      "k-label-add `k-node-find ${element(openstack_compute_instance_v2.manager.*.network.1.fixed_ip_v4, 0)}` \"${var.manager_labels}\""
    ]
  }

  depends_on = ["openstack_compute_instance_v2.manager", "openstack_compute_instance_v2.worker"]
}

resource "null_resource" "worker_labels" {
  count = "${var.provider == "OVH" ? length(var.worker_labels) : 0}"

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

  provisioner "remote-exec" {
    inline = [
      "k-label-clear `k-node-find ${element(openstack_compute_instance_v2.worker.*.network.1.fixed_ip_v4, count.index)}`",
      "k-label-add `k-node-find ${element(openstack_compute_instance_v2.worker.*.network.1.fixed_ip_v4, count.index)}` \"${var.worker_labels[count.index]}\""
    ]
  }

  depends_on = ["openstack_compute_instance_v2.manager", "openstack_compute_instance_v2.worker"]
}