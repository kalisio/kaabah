resource "openstack_compute_instance_v2" "manager" {
  count             = "${var.provider == "OVH" ? 1 : 0}"
  name              = "${terraform.workspace}-manager" 
  image_name        = "${local.image}"
  flavor_name       = "${var.manager_instance_type}"
  security_groups   = ["${openstack_networking_secgroup_v2.manager_security_group.name}"]
  key_pair          = "${var.key_name}"
  region            = "${var.region}"

  network = [
    {
      name = "Ext-Net"
      access_network = "true"
    },
    {
      name ="${local.private_network_name}"
    }
  ]

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${self.access_ip_v4}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    script = "modules/OVH/setup-nic.sh"
  }

  provisioner "file" {
    source      = "${var.ssh_key}"
    destination = "~/.ssh/ssh.pem"
  }

  provisioner "remote-exec" {
    inline = [
      "mkdir ${local.tmp_dir}",
    ]
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_cert}"
    destination = "${local.tmp_dir}/ca.cert"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_key}"
    destination = "${local.tmp_dir}/ca.key"
  }

  provisioner "file" {
    source      = "${var.docker_tls_ca_pass}"
    destination = "${local.tmp_dir}/ca.pass"
  }
  provisioner "file" {
    source      = "scripts/"
    destination = "${local.tmp_dir}"
  }

  provisioner "file" {
    source      = "commands/"
    destination = "${local.tmp_dir}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/install-manager.sh ${var.docker_version} ${self.network.1.fixed_ip_v4} ${data.openstack_networking_subnet_v2.private_subnet.cidr} ${terraform.workspace} ${var.subdomain}",
    ]
  }
}
