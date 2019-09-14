
output "manager_public_ip" {
  value = "${aws_instance.manager.*.public_ip}"
}
output "manager_private_ip" {
  value = "${aws_instance.manager.*.private_ip}"
}

output "workers_public_ip" {
  value = "${aws_instance.worker.*.public_ip}"
}

output "workers_private_ip" {
  value = "${aws_instance.worker.*.private_ip}"
}
