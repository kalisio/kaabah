terraform {
  backend "s3" {}
}

locals {
  subdomain = "${replace(terraform.workspace, "-",".")}"
}

module "Scaleway" {
  source = "./modules/Scaleway"

  scw_provider              = "${var.provider}"
  scw_domain                = "${var.domain}"
  scw_subdomain             = "${var.subdomain != "" ? var.subdomain : local.subdomain}"
  scw_ca_server             = "${var.ca_server}"
  scw_contact               = "${var.contact}"
  scw_auth_user            = "${var.KAABAH_AUTH_USER}"
  scw_auth_password        = "${var.KAABAH_AUTH_PASSWORD}"
  scw_access_key            = "${var.SCALEWAY_ACCESS_KEY}"
  scw_token                 = "${var.SCALEWAY_TOKEN}"
  scw_docker_version        = "${var.docker_version}"
  scw_manager_instance_type = "${var.provider == "SCALEWAY" ? var.manager_instance_type : "C2S"}"
  scw_worker_instance_type  = "${var.provider == "SCALEWAY" ? var.worker_instance_type : "C2S"}"
  scw_worker_instance_count = "${var.worker_instance_count}"
  scw_ssh_key               = "${var.ssh_key}"
}

module "AWS" {
  source = "./modules/AWS"

  aws_provider              = "${var.provider}"
  aws_domain                = "${var.domain}"
  aws_subdomain             = "${var.subdomain != "" ? var.subdomain : local.subdomain}"
  aws_ca_server             = "${var.ca_server}"
  aws_contact               = "${var.contact}"
  aws_auth_user            = "${var.KAABAH_AUTH_USER}"
  aws_auth_password        = "${var.KAABAH_AUTH_PASSWORD}"
  aws_access_key            = "${var.AWS_ACCESS_KEY}"
  aws_secret_key            = "${var.AWS_SECRET_KEY}"
  aws_docker_version        = "${var.docker_version}"
  aws_manager_instance_type = "${var.provider == "AWS" ? var.manager_instance_type : "t2.mico"}"
  aws_worker_instance_type  = "${var.provider == "AWS" ? var.worker_instance_type : "t2.micro"}"
  aws_worker_instance_count = "${var.worker_instance_count}"
  aws_ssh_key               = "${var.ssh_key}"
  aws_key_name              = "${var.aws_key_name}"
}
