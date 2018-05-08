# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy_services" {
  connection {
    type        = "ssh"
    user        = "root"
    private_key = "${file("ssh.pem")}"
    host        = "${scaleway_server.swarm_manager.public_ip}"
    timeout     = "30s"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir -p /${terraform.workspace}",
    ]
  }

  provisioner "file" {
    source      = "services/"
    destination = "/${terraform.workspace}"
  }

  provisioner "remote-exec" {
    inline = [
      "echo PLATFORM=${terraform.workspace} > .env",
      "echo DOMAIN=kalisio.xyz >> .env",
      "docker-compose -f /${terraform.workspace}/services.yml up -d",
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}
