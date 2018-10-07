resource "null_resource" "services" {
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

  provisioner "file" {
    source      = "${var.extensions_dir != "" ? format("%s/", var.extensions_dir) : "scripts/null-extensions/"}"
    destination = "kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "set -a && . ./.bash_profile && set +a",
      "bash ~/.kaabah/install-services.sh ${var.subdomain} ${var.domain} ${var.ca_server} ${var.contact} ${var.auth_user} \"${var.auth_password}\" ${var.docker_network}",
      "cd kaabah && sudo ./deploy-services.sh",
    ]
  }

  provisioner "remote-exec" {
    inline = [
      "sudo docker stack rm kaabah",
      "rm -fr kaabah"
    ]
    when       = "destroy"
    on_failure = "continue"
  }

  depends_on = ["aws_instance.swarm_manager", "aws_instance.swarm_worker"]
}
