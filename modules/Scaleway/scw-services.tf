# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy_services" {
  count = "${var.provider == "SCALEWAY" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${scaleway_server.swarm_manager.public_ip}"
    timeout     = "120s"
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
      "sh /tmp/install-services.sh ${var.subdomain} ${var.domain} ${var.ca_server} ${var.contact} ${var.auth_user} ${var.auth_password}",
      "cd services && ./deploy.sh",
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}
