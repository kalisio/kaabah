provider "scaleway" {
  version = "~> 1.9.0"

  organization = "${var.organization}"
  token        = "${var.token}"
  region       = "${var.region}"
}

data "scaleway_image" "manager_image" {
  count        = "${var.provider == "SCALEWAY" ? 1 : 0}"
  architecture = "${lookup(local.architectures, var.manager_instance_type)}"
  name         = "${local.image}"
}

data "scaleway_image" "worker_image" {
  count        = "${var.provider == "SCALEWAY" ? 1 : 0}"
  architecture = "${lookup(local.architectures, var.worker_instance_type)}"
  name         = "${local.image}"
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "360s"
  private_network_cidr = "10.0.0.0/8"
  scw_manager_tcp_ports = [ 2376, 2377, 7946, 22]
  scw_manager_udp_ports = [ 7946, 4789 ]
  scw_worker_tcp_ports = [ 2377, 7946, 22]
  scw_worker_udp_ports = [ 7946, 4789 ]
  image = "Ubuntu Bionic"
  architectures = {
    GP1-XS      = "x86_64"
    GP1-S       = "x86_64"
    GP1-M       = "x86_64"
    GP1-L       = "x86_64"
    GP1-XL      = "x86_64"
    DEV1-S      = "x86_64"
    DEV1-M      = "x86_64"
    DEV1-L      = "x86_64"
    DEV1-XL     = "x86_64"
    C2S         = "x86_64"
    C2M         = "x86_64"
    C2L         = "x86_64"
  }
  additional_volume_size = {
    GP1-XS     = 0
    GP1-S       = 0
    GP1-M       = 0
    GP1-L       = 0
    GP1-XL      = 0
    DEV1-S      = 0
    DEV1-M      = 0
    DEV1-L      = 0
    DEV1-XL     = 0
    C2S         = 0
    C2M         = 0
    C2L         = 0
  }
  device_names = [
    "/dev/nbd2",
    "/dev/nbd3",
    "/dev/nbd4",
    "/dev/nbd5",
    "/dev/nbd6",
    "/dev/nbd7",
    "/dev/nbd8",
    "/dev/nbd9",
    "/dev/nbd10",
    "/dev/nbd11"
  ]
}