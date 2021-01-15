resource "null_resource" "manager_hosts" {
  count = var.OVH ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(openstack_compute_instance_v2.manager_instances.*.network.1.fixed_ip_v4, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  depends_on = [
    openstack_compute_instance_v2.manager_instances,
    openstack_compute_instance_v2.worker_instances
  ]

  provisioner "remote-exec" {
    inline = [
      "printf \"\\n%{ for host in openstack_compute_instance_v2.manager_instances }${host.network.1.fixed_ip_v4}\\t${host.name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
      "printf \"\\n%{ for host in openstack_compute_instance_v2.worker_instances }${host.network.1.fixed_ip_v4}\\t${host.name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
    ]
  }
}

resource "null_resource" "worker_hosts" {
  count = var.OVH ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(openstack_compute_instance_v2.worker_instances.*.network.1.fixed_ip_v4, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  depends_on = [
    openstack_compute_instance_v2.manager_instances,
    openstack_compute_instance_v2.worker_instances
  ]

  provisioner "remote-exec" {
    inline = [
      "printf \"\\n%{ for host in openstack_compute_instance_v2.manager_instances }${host.network.1.fixed_ip_v4}\\t${host.name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
      "printf \"\\n%{ for host in openstack_compute_instance_v2.worker_instances }${host.network.1.fixed_ip_v4}\\t${host.name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
    ]
  }
}
