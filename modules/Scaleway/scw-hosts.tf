resource "null_resource" "manager_hosts" {
  count = var.SCW ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = scaleway_instance_server.manager.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  depends_on = [
    scaleway_instance_server.manager,
    scaleway_instance_server.worker
  ]

  provisioner "remote-exec" {
    inline = [
      <<-EOT
      printf "%{ for host in scaleway_instance_server.manager }${host.private_ip}\t${host.name}\n%{ endfor }" | sudo tee -a /etc/hosts
      %{ if var.worker_instance_count > 0 }
        printf "%{ for host in scaleway_instance_server.worker }${host.private_ip}\t${host.name}\n%{ endfor }" | sudo tee -a /etc/hosts
      %{ endif }
      EOT
    ]
  }
}

resource "null_resource" "worker_hosts" {
  count = var.SCW ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = scaleway_instance_server.worker.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  depends_on = [
    scaleway_instance_server.manager,
    scaleway_instance_server.worker
  ]

  provisioner "remote-exec" {
    inline = [
      <<-EOT
      printf "%{ for host in scaleway_instance_server.manager }${host.private_ip}\t${host.name}\n%{ endfor }" | sudo tee -a /etc/hosts
      printf "%{ for host in scaleway_instance_server.worker }${host.private_ip}\t${host.name}\n%{ endfor }" | sudo tee -a /etc/hosts
      EOT
    ]
  }
}
