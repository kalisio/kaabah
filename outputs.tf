output "manager_ip" {
  value = "${concat(module.AWS.manager_ip, module.Scaleway.manager_ip)}"
}
