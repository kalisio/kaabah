resource "null_resource" "services" {
  count = "${var.provider == "SCALEWAY" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${scaleway_server.manager.private_ip}"    
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
    source      = "${var.acme_file != "" ? var.acme_file : "scripts/null-files/acme.json"}"
    destination = "${local.tmp_dir}/acme.json"
  }
  
  provisioner "file" {
    source      = "${var.extensions_dir != "" ? format("%s/", var.extensions_dir) : "scripts/null-files/extensions/"}"
    destination = "kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ${local.tmp_dir}/install-services.sh ${var.domain} ${var.subdomain} ${var.ca_server} ${var.contact} ${var.auth_user} '${var.auth_password}' ${var.docker_network} ${var.slack_webhook_url} ${var.slack_channel}",
      ". ./.bash_profile && cd kaabah && ./deploy-services.sh",
    ]
  }

  depends_on = ["scaleway_server.manager", "scaleway_server.worker"]
}
