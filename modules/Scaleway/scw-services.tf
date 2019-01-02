resource "null_resource" "services" {
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
      "mkdir -p kaabah",
    ]
  }

  provisioner "file" {
    source      = "services/"
    destination = "kaabah"
  }

  provisioner "file" {
    source      = "${var.extensions_dir != "" ? format("%s/", var.extensions_dir) : "scripts/null-extensions/"}"
    destination = "kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "set -a && . ./.bash_profile && set +a",
      "bash ~/.kaabah/install-services.sh ${var.domain} ${var.subdomain} ${var.ca_server} ${var.contact} ${var.auth_user} '${var.auth_password}' ${var.docker_network}",
      "cd kaabah && ./deploy-services.sh",
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}
