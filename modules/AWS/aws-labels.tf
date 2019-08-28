resource "null_resource" "manager_labels" {
  count = "${var.provider == "AWS" && var.manager_labels != "" ? 1 : 0}"

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

  provisioner "remote-exec" {
    inline = [
      "sudo k-label-clear `sudo k-node-find ${element(aws_instance.manager.*.private_ip, 0)}`",
      "sudo k-label-add `sudo k-node-find ${element(aws_instance.manager.*.private_ip, 0)}` \"${var.manager_labels}\""
    ]
  }

  depends_on = ["aws_instance.manager", "aws_instance.worker"]
}

resource "null_resource" "worker_labels" {
  count = "${var.provider == "AWS" ? length(var.worker_labels) : 0}"

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

  provisioner "remote-exec" {
    inline = [
      "sudo k-label-clear `sudo k-node-find ${element(aws_instance.worker.*.private_ip, count.index)}`",
      "sudo k-label-add `sudo k-node-find ${element(aws_instance.worker.*.private_ip, count.index)}` \"${var.worker_labels[count.index]}\""
    ]
  }

  depends_on = ["aws_instance.manager", "aws_instance.worker"]
}