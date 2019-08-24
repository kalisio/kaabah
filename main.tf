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
  region                                = "${var.provider == "SCALEWAY" ? var.region : "par1"}"  # Must provide a valid Scaleway region
  domain                                = "${var.domain}"
  subdomain                             = "${var.subdomain != "" ? var.subdomain : format("%s.%s", local.subdomain, var.domain)}"
  ca_server                             = "${var.ca_server}"
  acme_file                             = "${var.acme_file}"
  contact                               = "${var.contact}"
  auth_user                             = "${var.auth_user}"
  auth_password                         = "${var.auth_password}"
  access_key                            = "${var.SCALEWAY_ACCESS_KEY}"
  token                                 = "${var.SCALEWAY_TOKEN}"
  docker_version                        = "${var.docker_version}"
  docker_network                        = "${var.docker_network}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_ip                            = "${var.manager_ip}"
  manager_instance_type                 = "${var.manager_instance_type}"
  manager_labels                        = "${var.manager_labels}"
  manager_crontab                       = "${var.manager_crontab}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.worker_instance_type}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_labels                         = "${var.worker_labels}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  extensions_dir                        = "${var.extensions_dir}"
  ssh_ip_whitelist                      = "${var.ssh_ip_whitelist}"
  ssh_key                               = "${var.ssh_key}"
  ssh_user                              = "${var.ssh_user != "" ? var.ssh_user : "root"}"
  bastion_ip                            = "${var.bastion_ip != "" ? var.bastion_ip : var.manager_ip}"
  bastion_ssh_user                      = "${var.bastion_ssh_user != "" ? var.bastion_ssh_user : var.ssh_user}"
  bastion_ssh_key                       = "${var.bastion_ssh_key != "" ? var.bastion_ssh_key : var.ssh_key}"
  slack_webhook_url                     = "${var.slack_webhook_url}"
  slack_channel                         = "${var.slack_channel}"
}

module "AWS" {
  source = "./modules/AWS"

  provider                              = "${var.provider}"
  region                                = "${var.provider == "AWS" ? var.region : "eu-central-1"}"  # Must provide a valid AWS region
  availability_zone                     = "${var.availability_zone != "" ? var.availability_zone : format("%sa", var.region)}"
  domain                                = "${var.domain}"
  subdomain                             = "${var.subdomain != "" ? var.subdomain : format("%s.%s", local.subdomain, var.domain)}"
  ca_server                             = "${var.ca_server}"
  acme_file                             = "${var.acme_file}"  
  contact                               = "${var.contact}"
  auth_user                             = "${var.auth_user}"
  auth_password                         = "${var.auth_password}"
  access_key                            = "${var.AWS_ACCESS_KEY}"
  secret_key                            = "${var.AWS_SECRET_KEY}"
  docker_version                        = "${var.docker_version}"
  docker_network                        = "${var.docker_network}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_ip                            = "${var.manager_ip}"
  manager_instance_type                 = "${var.manager_instance_type}"
  manager_labels                        = "${var.manager_labels}"
  manager_crontab                       = "${var.manager_crontab}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.worker_instance_type}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_type         = "${var.worker_additional_volume_type != "" ? var.worker_additional_volume_type : "sc1"}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_labels                         = "${var.worker_labels}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  extensions_dir                        = "${var.extensions_dir}"
  ssh_ip_whitelist                      = "${var.ssh_ip_whitelist}"
  ssh_key                               = "${var.ssh_key}"
  ssh_user                              = "${var.ssh_user != "" ? var.ssh_user : "ubuntu"}"
  key_name                              = "${var.key_name}"
  bastion_ip                            = "${var.bastion_ip != "" ? var.bastion_ip : var.manager_ip}"
  bastion_ssh_user                      = "${var.bastion_ssh_user != "" ? var.bastion_ssh_user : var.ssh_user}"
  bastion_ssh_key                       = "${var.bastion_ssh_key != "" ? var.bastion_ssh_key : var.ssh_key}"
  slack_webhook_url                     = "${var.slack_webhook_url}"
  slack_channel                         = "${var.slack_channel}"  
}
