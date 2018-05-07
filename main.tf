provider "scaleway" {
  organization = "${var.SCALEWAY_ACCESS_KEY}"
  token        = "${var.SCALEWAY_TOKEN}"
  region       = "${var.region}"
}

data "scaleway_image" "manager_image" {
  architecture = "${lookup(var.architectures, var.manager_instance_type)}"
  name         = "Ubuntu Xenial"
}

data "scaleway_image" "worker_image" {
  architecture = "${lookup(var.architectures, var.worker_instance_type)}"
  name         = "Ubuntu Xenial"
}
