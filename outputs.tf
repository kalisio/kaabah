output "swarm_manager_public_ip" {
  value = "${scaleway_server.swarm_manager.public_ip}"
}

output "swarm_manager_private_ip" {
  value = "${scaleway_server.swarm_manager.private_ip}"
}

output "swarm_workers_public_ip" {
  value = "${concat(scaleway_server.swarm_worker.*.name, scaleway_server.swarm_worker.*.public_ip)}"
}

output "swarm_workers_private_ip" {
  value = "${concat(scaleway_server.swarm_worker.*.name, scaleway_server.swarm_worker.*.private_ip)}"
}

output "workspace" {
  value = "${terraform.workspace}"
}
