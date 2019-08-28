resource "null_resource" "manager_user_script" {
  count = "${var.provider == "AWS" && var.manager_user_script != "" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${aws_instance.manager.private_ip}"
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

  depends_on = [
    "aws_instance.manager", 
    "aws_instance.worker",  # Ensure dependency to the workers (https://github.com/kalisio/kaabah/issues/102)
    "null_resource.worker_volume_mount"
  ]
}

resource "null_resource" "worker_user_scripts" {
  count = "${var.provider == "AWS" ? length(var.worker_user_scripts) : 0}"

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

   provisioner "file" {
    source      = "${var.worker_user_scripts[count.index]}"
    destination = "${local.tmp_dir}/${basename(var.worker_user_scripts[count.index])}"
  }
  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/${basename(var.worker_user_scripts[count.index])}"
    ]
  }

  depends_on = [
    "null_resource.worker_volume_mount",
    "null_resource.manager_user_script"
  ]
}