provider "scaleway" {
  version = "~> 1.9.0"

  organization = "${var.access_key}"
  token        = "${var.token}"
  region       = "${var.region}"
}

data "scaleway_image" "manager_image" {
  count        = "${var.provider == "SCALEWAY" ? 1 : 0}"
  architecture = "${lookup(local.architectures, var.manager_instance_type)}"
  name         = "${var.image}"
}

data "scaleway_image" "worker_image" {
  count        = "${var.provider == "SCALEWAY" ? 1 : 0}"
  architecture = "${lookup(local.architectures, var.worker_instance_type)}"
  name         = "${var.image}"
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "180s"
  scw_cidr = "10.0.0.0/8"
  use_bastion = "${var.bastion_ip != var.manager_ip ? true : false}"
  architectures = {
    DEV1-S    = "x86_64"
    DEV1-M    = "x86_64"
    DEV1-L    = "x86_64"
    DEV1-XL   = "x86_64"
    C1        = "arm"
    C2S       = "x86_64"
    C2M       = "x86_64"
    C2L       = "x86_64"
  }
  additional_volume_size = {
    DEV1-S   = 0
    DEV1-M   = 0
    DEV1-L   = 0
    DEV1-XL  = 0
    C1       = 0
    C2S      = 0
    C2M      = 0
    C2L      = 0
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