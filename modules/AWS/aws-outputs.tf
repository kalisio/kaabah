output "manager_ip" {
  value = "${aws_eip.swarm_manager.*.public_ip}"
}
