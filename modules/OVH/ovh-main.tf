provider "openstack" {
  version = "~> 1.22"

  domain_name         = "default" # Alawys default for OVH
  alias               = "ovh" # Un alias
}

locals {
  image = "Ubuntu 18.04"
  tmp_dir = "/tmp/kaabah"
  timeout = "180s"
  private_network_name = "${terraform.workspace}"
  manager_tcp_ports = [ 2376, 2377, 7946, 22]
  manager_udp_ports = [ 7946, 4789 ]
  worker_tcp_ports = [ 2377, 7946, 22]
  worker_udp_ports = [ 7946, 4789 ]
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