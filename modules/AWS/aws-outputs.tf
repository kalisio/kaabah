
output "manager_public_ip" {
  value = aws_instance.manager_instances.*.public_ip
}
output "manager_private_ip" {
  value = aws_instance.manager_instances.*.private_ip
}

output "workers_public_ip" {
  value = aws_instance.worker_instances.*.public_ip
}

output "workers_private_ip" {
  value = aws_instance.worker_instances.*.private_ip
}
