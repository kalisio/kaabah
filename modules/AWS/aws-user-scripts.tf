resource "null_resource" "manager_user_script" {
  count = "${var.provider == "AWS" && var.manager_user_script != "" ? 1 : 0}"

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
      "bash ~/.kaabah/${basename(var.manager_user_script)}"
    ]
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}

resource "null_resource" "worker_user_scripts" {
  count = "${var.provider == "AWS" ? length(var.worker_user_scripts) : 0}"

  connection {
    type          = "ssh"
    bastion_host  = "${var.manager_ip}"
    host          = "${element(aws_instance.swarm_worker.*.private_ip, count.index)}"
    user          = "${var.ssh_user}"
    private_key   = "${file(var.ssh_key)}"
    timeout       = "300s"
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

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}