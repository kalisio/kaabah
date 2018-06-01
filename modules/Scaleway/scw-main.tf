provider "scaleway" {
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
