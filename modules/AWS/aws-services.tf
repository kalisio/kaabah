# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy_services" {
  count = "${var.aws_provider == "AWS" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.aws_ssh_user}"
    private_key = "${file("secrets/aws.pem")}"
    host        = "${aws_instance.swarm_manager.public_ip}"
    timeout     = "30s"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir -p ${terraform.workspace}",
    ]
  }

  provisioner "file" {
    source      = "services/"
    destination = "${terraform.workspace}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo chmod +x /tmp/deploy-services.sh",
      "sudo /tmp/deploy-services.sh ${terraform.workspace} ${var.aws_domain}",
    ]
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}
