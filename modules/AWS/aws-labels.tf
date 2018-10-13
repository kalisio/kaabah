resource "null_resource" "manager_labels" {
  count = "${var.provider == "AWS" && var.manager_labels != "" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo k-label-clear `sudo k-node-find ${element(aws_instance.swarm_manager.*.private_ip, 0)}`",
      "sudo k-label-add `sudo k-node-find ${element(aws_instance.swarm_manager.*.private_ip, 0)}` \"${var.manager_labels}\""
    ]
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}

resource "null_resource" "worker_labels" {
  count = "${var.provider == "AWS" ? length(var.worker_labels) : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo k-label-clear `sudo k-node-find ${element(aws_instance.swarm_worker.*.private_ip, count.index)}`",
      "sudo k-label-add `sudo k-node-find ${element(aws_instance.swarm_worker.*.private_ip, count.index)}` \"${var.worker_labels[count.index]}\""
    ]
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}