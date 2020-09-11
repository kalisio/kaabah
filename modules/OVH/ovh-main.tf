provider "openstack" {
  version = "~> 1.31"

  domain_name         = "default" # Alawys default for OVH
  alias               = "ovh" # Un alias
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
  image = "Ubuntu 20.04"
  device_names = [
    "/dev/sdb",
    "/dev/sdc",
    "/dev/sdd",
    "/dev/sde",
    "/dev/sdf",
    "/dev/sdg",
    "/dev/sdh",
  ]
}