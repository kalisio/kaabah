output "manager_private_ip" {
  value = "${aws_instance.swarm_manager.*.private_ip}"
}

output "workers_private_ip" {
  value = "${aws_instance.swarm_worker.*.private_ip}"
}
