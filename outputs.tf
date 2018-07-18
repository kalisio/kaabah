output "manager_private_ip" {
  value = "${concat(module.AWS.manager_private_ip, module.Scaleway.manager_private_ip)}"
}

output "workers_private_ip" {
  value = "${concat(module.AWS.workers_private_ip, module.Scaleway.workers_private_ip)}"
}
