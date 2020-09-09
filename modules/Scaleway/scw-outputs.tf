output "manager_public_ip" {
  value = scaleway_instance_server.manager.*.public_ip
}
output "manager_private_ip" {
  value = scaleway_instance_server.manager.*.private_ip
}

output "workers_public_ip" {
  value = scaleway_instance_server.worker.*.public_ip
}

output "workers_private_ip" {
  value = scaleway_instance_server.worker.*.private_ip
}
