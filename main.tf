provider "scaleway" {
  organization = "${var.SCALEWAY_ACCESS_KEY}"
  token        = "${var.SCALEWAY_TOKEN}"
  region       = "${var.region}"
}

data "scaleway_image" "instance_image" {
  architecture = "${lookup(var.architectures, var.instance_type)}"
  name         = "Kalisio-ubuntu-xenial-docker"
}
