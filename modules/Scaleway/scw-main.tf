provider "scaleway" {
  version = "~> 1.16.0"

  organization_id = var.organization_id
  access_key      = var.access_key
  secret_key      = var.secret_key
  region          = var.region
  zone            = var.availability_zone
}

data "scaleway_image" "manager_image" {
  count        = var.SCW ? 1 : 0
  architecture = lookup(local.architectures, var.manager_instance_type)
  name         = local.image
}

data "scaleway_image" "worker_image" {
  count        = var.SCW ? 1 : 0
  architecture = lookup(local.architectures, var.worker_instance_type)
  name         = local.image
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "360s"
  private_network_cidr = "10.0.0.0/8"
  manager_tcp_ports = [ 2376, 2377, 7946, 24007, 24008, 49152, 22]
  manager_udp_ports = [ 7946, 4789, 24007, 24008, 49152 ]
  worker_tcp_ports = [ 2377, 7946, 24007, 24008, 49152, 22]
  worker_udp_ports = [ 7946, 4789, 24007, 24008, 49152 ]
  image = "Ubuntu 20.04 Focal Fossa"
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
    RENDER-S     = "x86_64"
  }
  root_volume_size = {
    GP1-XS      = 150 
    GP1-S       = 300
    GP1-M       = 600
    GP1-L       = 600
    GP1-XL      = 600
    DEV1-S      = 20
    DEV1-M      = 40
    DEV1-L      = 80
    DEV1-XL     = 120
    RENDER-S    = 400
  }
  device_names = [
    "/dev/sda",
    "/dev/sdb",
    "/dev/sdc",
    "/dev/sdd",
    "/dev/sde",
    "/dev/sdf",
    "/dev/sdg"
  ]
}
