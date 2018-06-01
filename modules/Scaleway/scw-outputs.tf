output "manager_ip" {
  value = "${scaleway_ip.swarm_manager.*.ip}"
}
