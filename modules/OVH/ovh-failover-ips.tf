resource "null_resource" "manager_failover_ips" {
  count = var.OVH && length(var.manager_ips) > 0 ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(openstack_compute_instance_v2.manager_instances.*.access_ip_v4, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  provisioner "file" {
    source      = "modules/OVH/setup-failover-ip.sh"
    destination = "${local.tmp_dir}/setup-failover-ip.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ${local.tmp_dir}/setup-failover-ip.sh ${var.manager_ips[count.index]}"
    ]
  }

  depends_on = [
    openstack_compute_instance_v2.manager_instances
  ]
}