# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy_services" {
  count = "${var.scw_provider == "SCALEWAY" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.scw_ssh_user}"
    private_key = "${file(var.scw_ssh_key)}"
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
      "sh /tmp/install-services.sh ${var.scw_subdomain} ${var.scw_domain} ${var.scw_ca_server} ${var.scw_contact} ${var.scw_auth_user} ${var.scw_auth_password}",
      "cd services && ./deploy.sh",
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}
