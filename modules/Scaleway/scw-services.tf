resource "null_resource" "services" {
  count = "${var.provider == "SCALEWAY" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${local.use_bastion ? var.bastion_ip : ""}"
    bastion_user        = "${local.use_bastion ? var.bastion_ssh_user: ""}"
    bastion_private_key = "${local.use_bastion ? file(var.bastion_ssh_key): ""}"
    host                = "${local.use_bastion ? scaleway_server.swarm_manager.private_ip : scaleway_server.swarm_manager.public_ip}"    
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      # we stop the services and remove the files in the case the resource is recreated 
      "docker stack rm kaabah", 
      "rm -fr kaabah && mkdir kaabah",
    ]
  }

  provisioner "file" {
    source      = "services/"
    destination = "kaabah"
  }

  provisioner "file" {
    source      = "${var.extensions_dir != "" ? format("%s/", var.extensions_dir) : "scripts/null-files/extensions/"}"
    destination = "kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "set -a && . ./.bash_profile && set +a", # required to take into account Docker environment variables
      "bash ~/.kaabah/install-services.sh ${var.domain} ${var.subdomain} ${var.ca_server} ${var.contact} ${var.auth_user} '${var.auth_password}' ${var.docker_network} ${scaleway_server.swarm_manager.private_ip}",
      "cd kaabah && ./deploy-services.sh",
    ]
  }

  depends_on = ["scaleway_server.swarm_manager", "scaleway_server.swarm_worker"]
}
