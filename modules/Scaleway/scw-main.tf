provider "scaleway" {
  organization = "${var.scw_access_key}"
  token        = "${var.scw_token}"
  region       = "${var.scw_region}"
}

data "scaleway_image" "manager_image" {
  architecture = "${lookup(var.scw_architectures, var.scw_manager_instance_type)}"
  name         = "Ubuntu Xenial"
}

data "scaleway_image" "worker_image" {
  architecture = "${lookup(var.scw_architectures, var.scw_worker_instance_type)}"
  name         = "Ubuntu Xenial"
}
