provider "scaleway" {
  version = "~> 1.6.0"

  organization = "${var.access_key}"
  token        = "${var.token}"
  region       = "${var.region}"
}

data "scaleway_image" "manager_image" {
  architecture = "${lookup(var.architectures, var.manager_instance_type)}"
  name         = "${var.image}"
}

data "scaleway_image" "worker_image" {
  architecture = "${lookup(var.architectures, var.worker_instance_type)}"
  name         = "${var.image}"
}

locals {
  use_bastion = "${var.bastion_ip != var.manager_ip ? true : false}"
}