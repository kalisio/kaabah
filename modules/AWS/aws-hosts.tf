resource "null_resource" "manager_hosts" {
  count = var.AWS ? var.manager_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = aws_instance.manager_instances.*.private_ip[count.index]
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  depends_on = [
    aws_instance.manager_instances,
    aws_instance.worker_instances
  ]

  provisioner "remote-exec" {
    inline = [
      "printf \"\\n%{ for host in aws_instance.manager_instances }${host.private_ip}\\t${host.tags.Name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
      "printf \"\\n%{ for host in aws_instance.worker_instances }${host.private_ip}\\t${host.tags.Name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
    ]
  }
}

resource "null_resource" "worker_hosts" {
  count = var.AWS ? var.worker_instance_count : 0

  connection {
    type                = "ssh"
    bastion_host        = var.bastion_ip
    bastion_user        = var.bastion_ssh_user
    bastion_private_key = file(var.bastion_ssh_key)
    host                = element(aws_instance.worker_instances.*.private_ip, count.index)
    user                = var.ssh_user
    private_key         = file(var.ssh_key)
    timeout             = local.timeout
  }

  depends_on = [
    aws_instance.manager_instances,
    aws_instance.worker_instances
  ]

  provisioner "remote-exec" {
    inline = [
      "printf \"\\n%{ for host in aws_instance.manager_instances }${host.private_ip}\\t${host.tags.Name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
      "printf \"\\n%{ for host in aws_instance.worker_instances }${host.private_ip}\\t${host.tags.Name}\\n%{ endfor ~} \" | sudo tee -a /etc/hosts",
    ]
  }
}
