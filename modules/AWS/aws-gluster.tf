resource "null_resource" "manager_gluster_create" {
  count = "${var.provider == "AWS" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${aws_instance.manager.0.private_ip}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/setup-gluster-volume.sh \"${join(" ", aws_instance.manager.*.private_ip)} ${join(" ", aws_instance.worker.*.private_ip)}\""
    ]
  }

  depends_on = [
    "aws_instance.manager", 
    "aws_instance.worker", 
    "null_resource.worker_volume_mount"
  ]
}

resource "null_resource" "manager_gluster_mount" {
  count = "${var.provider == "AWS" ? var.manager_instance_count : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${element(aws_instance.manager.*.private_ip, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-gluster-volume.sh"
    ]
  }

  depends_on = [
    "null_resource.manager_gluster_create"
  ]
}

resource "null_resource" "worker_gluster_mount" {
  count = "${var.provider == "AWS" ? var.worker_instance_count : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${element(aws_instance.worker.*.private_ip, count.index)}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

   provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/mount-gluster-volume.sh"
    ]
  }

  depends_on = [
    "null_resource.manager_gluster_create"
  ]
}