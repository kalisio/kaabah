provider "aws" {
  version = "~> 1.21.0"

  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

locals {
  timeout = "${local.timeout}"
  worker_instance_class = "${element(split(".", var.worker_instance_type), 0)}"
  worker_use_nvme_device = "${contains(var.nvme_list, local.worker_instance_class) ? true : false}"
  use_bastion = "${var.bastion_ip != var.manager_ip ? true : false}"
}
