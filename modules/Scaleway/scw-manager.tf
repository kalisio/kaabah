resource "scaleway_ip" "swarm_manager" {
  count = "${var.provider == "SCALEWAY" && var.manager_ip =="" ? 1 : 0}"
}

resource "scaleway_server" "swarm_manager" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  name           = "${terraform.workspace}-manager"
  image          = "${data.scaleway_image.manager_image.id}"
  type           = "${var.manager_instance_type}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  public_ip      = "${var.manager_ip}"

  volume {
    size_in_gb = "${lookup(var.additional_volume_size, var.manager_instance_type)}"
    type       = "l_ssd"
  }

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    timeout     = "300s"
  }

  provisioner "file" {
    source      = "${var.ssh_key}"
    destination = "~/.ssh/ssh.pem"
  }

 provisioner "remote-exec" {
    inline = [
      "mkdir ~/.kaabah",
    ]
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_cert}"
    destination = "~/.kaabah/ca.cert"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_key}"
    destination = "~/.kaabah/ca.key"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_pass}"
    destination = "~/.kaabah/ca.pass"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "~/.kaabah"
  }

  provisioner "remote-exec" {
    inline = [
      "bash ~/.kaabah/install-manager.sh ${var.docker_version} ${self.private_ip}",
    ]
  }
}

resource "null_resource" "manager_crontab" {
  count = "${var.provider == "SCW" ? 1 : 0}"

  connection {
    type        = "ssh"
    user        = "${var.ssh_user}"
    private_key = "${file(var.ssh_key)}"
    host        = "${var.manager_ip}"
    timeout     = "120s"
  }

  provisioner "remote-exec" {
    inline = [
      # we stop the actions and in case the resource is recreated 
      "crontab -r", 
    ]
    on_failure = "continue"  # if no crontab keep on the process
  }

  provisioner "file" {
    source      = "${var.manager_crontab != "" ? var.manager_crontab : "scripts/null-files/crontab"}"
    destination = "~/.kaabah/crontab"
  }

  provisioner "remote-exec" {
    inline = [
      "cat ~/.kaabah/crontab | crontab -",
    ]
  }

  depends_on = ["scaleway_server.swarm_manager"]
}