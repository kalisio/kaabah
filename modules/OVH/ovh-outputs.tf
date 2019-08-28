
output "manager_public_ip" {
  value = "${openstack_compute_instance_v2.manager.*.network.0.fixed_ip_v4}"
}
output "manager_private_ip" {
  value = "${openstack_compute_instance_v2.manager.*.network.0.fixed_ip_v4}"
}

output "workers_private_ip" {
  value = "${openstack_compute_instance_v2.worker.*.network.0.fixed_ip_v4}"
}
