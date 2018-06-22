output "manager_private_ip" {
  value = "${scaleway_server.swarm_manager.*.private_ip}"
}

output "workers_private_ip" {
  value = "${scaleway_server.swarm_worker.*.private_ip}"
}
