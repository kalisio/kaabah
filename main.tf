terraform {
  backend "s3" {}
}

module "Scaleway" {
  source = "./modules/Scaleway"

  scw_provider              = "${var.provider}"
  scw_domain                = "${var.domain}"
  scw_access_key            = "${var.SCALEWAY_ACCESS_KEY}"
  scw_token                 = "${var.SCALEWAY_TOKEN}"
  scw_docker_version        = "${var.docker_version}"
  scw_manager_instance_type = "${lookup(var.manager_instance_type, "SCALEWAY")}"
  scw_worker_instance_type  = "${lookup(var.worker_instance_type, "SCALEWAY")}"
  scw_worker_instance_count = "${var.worker_instance_count}"
  scw_ssh_key               = "${var.ssh_key}"
}

module "AWS" {
  source = "./modules/AWS"

  aws_provider              = "${var.provider}"
  aws_domain                = "${var.domain}"
  aws_access_key            = "${var.AWS_ACCESS_KEY}"
  aws_secret_key            = "${var.AWS_SECRET_KEY}"
  aws_docker_version        = "${var.docker_version}"
  aws_manager_instance_type = "${lookup(var.manager_instance_type, "AWS")}"
  aws_worker_instance_type  = "${lookup(var.worker_instance_type, "AWS")}"
  aws_worker_instance_count = "${var.worker_instance_count}"
  aws_ssh_key               = "${var.ssh_key}"
  aws_key_name              = "${var.aws_key_name}"
}
