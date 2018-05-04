provider "scaleway" {
  organization = "${var.SCALEWAY_ACCESS_KEY}"
  token        = "${var.SCALEWAY_TOKEN}"
  region       = "${var.region}"
}

/*data "scaleway_bootscript" "rancher" {
  architecture = "${lookup(var.architectures, var.instance_type)}"
  name = "x86_64 mainline 4.9.48 rev1"
}*/

data "scaleway_image" "manager_image" {
  architecture = "${lookup(var.architectures, var.manager_instance_type)}"
  name         = "Ubuntu Xenial"
}

data "scaleway_image" "worker_image" {
  architecture = "${lookup(var.architectures, var.worker_instance_type)}"
  name         = "Ubuntu Xenial"
}

data "template_file" "docker_conf" {
  template = "${file("configs/docker/docker.tpl")}"

  vars {
    ip = "${var.docker_api_ip}"
  }
}