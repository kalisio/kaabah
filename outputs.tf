output "manager_public_ip" {
  value = "${concat(module.AWS.manager_public_ip, module.Scaleway.manager_public_ip, module.OVH.manager_public_ip)}"
}

output "manager_private_ip" {
  value = "${concat(module.AWS.manager_private_ip, module.Scaleway.manager_private_ip, module.OVH.manager_private_ip)}"
}

output "workers_public_ip" {
  value = "${concat(module.AWS.workers_public_ip, module.Scaleway.workers_public_ip, module.OVH.workers_public_ip)}"
}

output "workers_private_ip" {
  value = "${concat(module.AWS.workers_private_ip, module.Scaleway.workers_private_ip, module.OVH.workers_private_ip)}"
}
