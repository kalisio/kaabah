# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy_services" {
  count = "${var.provider == "AWS" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir -p kaabah",
    ]
  }

  provisioner "file" {
    source      = "services/"
    destination = "kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "set -a && . ./.bash_profile && set +a",
      "sh /tmp/install-services.sh ${var.subdomain} ${var.domain} ${var.ca_server} ${var.contact} ${var.auth_user} ${var.auth_password} ${var.docker_network}",
      "cd kaabah && sudo ./deploy-services.sh",
    ]
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}
