output "instance_public_ip" {
  value = "${concat(scaleway_server.instance.*.name, scaleway_server.instance.*.public_ip)}"
}
