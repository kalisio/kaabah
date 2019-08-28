output "manager_public_ip" {
  value = "${scaleway_server.manager.*.public_ip}"
}
output "manager_private_ip" {
  value = "${scaleway_server.manager.*.private_ip}"
}

output "workers_private_ip" {
  value = "${scaleway_server.worker.*.private_ip}"
}
