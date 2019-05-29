provider "scaleway" {
  version = "~> 1.9.0"

  organization = "${var.access_key}"
  token        = "${var.token}"
  region       = "${var.region}"
}

data "scaleway_image" "manager_image" {
  count        = "${var.provider == "SCALEWAY" ? 1 : 0}"
  architecture = "${lookup(var.architectures, var.manager_instance_type)}"
  name         = "${var.image}"
}

data "scaleway_image" "worker_image" {
  count        = "${var.provider == "SCALEWAY" ? 1 : 0}"
  architecture = "${lookup(var.architectures, var.worker_instance_type)}"
  name         = "${var.image}"
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "180s"
  scw_cidr = "10.0.0.0/8"
  use_bastion = "${var.bastion_ip != var.manager_ip ? true : false}"
}