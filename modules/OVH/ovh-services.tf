resource "null_resource" "services" {
  count = "${var.provider == "OVH" ? 1 : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${openstack_compute_instance_v2.manager.network.0.fixed_ip_v4}"    
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      # we stop the services and remove the files in the case the resource is recreated 
      "sudo docker stack rm kaabah", 
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
      "sudo bash ${local.tmp_dir}/install-services.sh ${var.domain} ${var.subdomain} ${var.ca_server} ${var.contact} ${var.auth_user} '${var.auth_password}' ${var.docker_network}",
      "cd kaabah && sudo ./deploy-services.sh",
    ]
  }

  depends_on = ["openstack_compute_instance_v2.manager", "openstack_compute_instance_v2.worker"]
}
