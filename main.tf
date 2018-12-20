terraform {
  backend "s3" {}
}

provider "null" {
  version = "~> 1.0.0"
}

locals {
  subdomain      = "${replace(terraform.workspace, "-",".")}"
}

module "Scaleway" {
  source = "./modules/Scaleway"

  provider                              = "${var.provider}"
  domain                                = "${var.domain}"
  subdomain                             = "${var.subdomain != "" ? var.subdomain : local.subdomain}"
  ca_server                             = "${var.ca_server}"
  contact                               = "${var.contact}"
  auth_user                             = "${var.auth_user != "" ? var.auth_user : var.KAABAH_AUTH_USER}"
  auth_password                         = "${var.auth_password != "" ? var.auth_password : var.KAABAH_AUTH_PASSWORD}"
  access_key                            = "${var.SCALEWAY_ACCESS_KEY}"
  token                                 = "${var.SCALEWAY_TOKEN}"
  docker_version                        = "${var.docker_version}"
  docker_network                        = "${var.docker_network}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_ip                            = "${var.manager_ip}"
  manager_instance_type                 = "${var.provider == "SCALEWAY" ? var.manager_instance_type : "START1-S"}"
  manager_labels                        = "${var.manager_labels}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.provider == "SCALEWAY" ? var.worker_instance_type : "START1-S"}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_labels                         = "${var.worker_labels}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  extensions_dir                        = "${var.extensions_dir}"
  ssh_key                               = "${var.ssh_key}"
}

module "AWS" {
  source = "./modules/AWS"

  provider                              = "${var.provider}"
  domain                                = "${var.domain}"
  subdomain                             = "${var.subdomain != "" ? var.subdomain : local.subdomain}"
  ca_server                             = "${var.ca_server}"
  contact                               = "${var.contact}"
  auth_user                             = "${var.auth_user != "" ? var.auth_user : var.KAABAH_AUTH_USER}"
  auth_password                         = "${var.auth_password != "" ? var.auth_password : var.KAABAH_AUTH_PASSWORD}"
  access_key                            = "${var.AWS_ACCESS_KEY}"
  secret_key                            = "${var.AWS_SECRET_KEY}"
  docker_version                        = "${var.docker_version}"
  docker_network                        = "${var.docker_network}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_ip                            = "${var.manager_ip}"
  manager_instance_type                 = "${var.provider == "AWS" ? var.manager_instance_type : "t2.mico"}"
  manager_labels                        = "${var.manager_labels}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.provider == "AWS" ? var.worker_instance_type : "t2.micro"}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_type         = "${var.worker_additional_volume_type != "" ? var.worker_additional_volume_type : "sc1"}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_labels                         = "${var.worker_labels}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  extensions_dir                        = "${var.extensions_dir}"
  ssh_key                               = "${var.ssh_key}"
  key_name                              = "${var.aws_key_name}"
}
