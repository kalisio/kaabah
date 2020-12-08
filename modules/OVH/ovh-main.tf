provider "openstack" {
  version = "~> 1.31"

  domain_name         = "default" # Alawys default for OVH
  alias               = "ovh" # Un alias
}

data "template_cloudinit_config" "prerequisites_config" {
  gzip          = true
  base64_encode = true

  part {
       content_type = "text/cloud-config"
       content = templatefile("${path.cwd}/cloudinit/prerequisites.yml.tpl", {
               user = var.ssh_user,
               ssh_pubkey = file(var.ssh_pubkey),
               docker_version = var.docker_version,
               nvm_version = var.nvm_version
               yq_version = var.yq_version
               })
  }
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "360s"
  private_network_name = "Private-Net"
  private_subnet_name = "Private-Subnet"
  private_network_cidr = "192.168.0.0/24"
  manager_tcp_ports = [ 2376, 2377, 7946, 22]
  manager_udp_ports = [ 7946, 4789 ]
  worker_tcp_ports = [ 2377, 7946, 22]
  worker_udp_ports = [ 7946, 4789 ]
  image = "Debian 10"
  additional_device_name = "/dev/sdb"
}
