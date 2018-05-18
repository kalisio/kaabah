# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy_services" {
  count = "${var.aws_provider == "AWS" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.aws_ssh_user}"
    private_key = "${file(var.aws_ssh_key)}"
    host        = "${aws_eip.swarm_manager.public_ip}"
    timeout     = "30s"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir -p services",
    ]
  }

  provisioner "file" {
    source      = "services/"
    destination = "services"
  }

  provisioner "remote-exec" {
    inline = [
      "sh /tmp/install-services.sh ${terraform.workspace} ${var.aws_domain}",
      "cd services && sudo ./deploy.sh",
    ]
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}
