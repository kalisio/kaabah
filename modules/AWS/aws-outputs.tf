output "manager_private_ip" {
  value = "${aws_instance.swarm_manager.*.private_ip}"
}

output "workers_public_ip" {
  value = "${aws_instance.swarm_worker.*.public_ip}"
}

output "workers_private_ip" {
  value = "${aws_instance.swarm_worker.*.private_ip}"
}
