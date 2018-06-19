terraform {
  backend "s3" {}
}

locals {
  subdomain      = "${replace(terraform.workspace, "-",".")}"
  docker_network = "${element(split("-", terraform.workspace), 0)}"
}

module "Scaleway" {
  source = "./modules/Scaleway"

  provider                       = "${var.provider}"
  domain                         = "${var.domain}"
  subdomain                      = "${var.subdomain != "" ? var.subdomain : local.subdomain}"
  ca_server                      = "${var.ca_server}"
  contact                        = "${var.contact}"
  auth_user                      = "${var.KAABAH_AUTH_USER}"
  auth_password                  = "${var.KAABAH_AUTH_PASSWORD}"
  access_key                     = "${var.SCALEWAY_ACCESS_KEY}"
  token                          = "${var.SCALEWAY_TOKEN}"
  docker_version                 = "${var.docker_version}"
  docker_network                 = "${var.docker_network != "" ? var.docker_network : local.docker_network}"
  docker_tls_ca_key              = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert             = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass             = "${var.docker_tls_ca_pass}"
  manager_instance_type          = "${var.provider == "SCALEWAY" ? var.manager_instance_type : "START1-S"}"
  worker_instance_type           = "${var.provider == "SCALEWAY" ? var.worker_instance_type : "START1-S"}"
  worker_instance_count          = "${var.worker_instance_count}"
  worker_additional_volume_count = "${var.worker_additional_volume_count}"
  worker_additional_volume_size  = "${var.worker_additional_volume_size}"
  ssh_key                        = "${var.ssh_key}"
}

module "AWS" {
  source = "./modules/AWS"

  provider                       = "${var.provider}"
  domain                         = "${var.domain}"
  subdomain                      = "${var.subdomain != "" ? var.subdomain : local.subdomain}"
  ca_server                      = "${var.ca_server}"
  contact                        = "${var.contact}"
  auth_user                      = "${var.KAABAH_AUTH_USER}"
  auth_password                  = "${var.KAABAH_AUTH_PASSWORD}"
  access_key                     = "${var.AWS_ACCESS_KEY}"
  secret_key                     = "${var.AWS_SECRET_KEY}"
  docker_version                 = "${var.docker_version}"
  docker_network                 = "${var.docker_network != "" ? var.docker_network : local.docker_network}"
  docker_tls_ca_key              = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert             = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass             = "${var.docker_tls_ca_pass}"
  manager_instance_type          = "${var.provider == "AWS" ? var.manager_instance_type : "t2.mico"}"
  worker_instance_type           = "${var.provider == "AWS" ? var.worker_instance_type : "t2.micro"}"
  worker_instance_count          = "${var.worker_instance_count}"
  worker_additional_volume_count = "${var.worker_additional_volume_count}"
  worker_additional_volume_size  = "${var.worker_additional_volume_size}"
  ssh_key                        = "${var.ssh_key}"
  key_name                       = "${var.aws_key_name}"
}
