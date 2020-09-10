terraform {
  required_version = ">= 0.12"

  backend "s3" {
  }
}

provider "null" {
  version = "~> 2.1.2"
}

module "Scaleway" {
  source = "./modules/Scaleway"

  SCW                                   = var.cloud_provider == "SCW" ? "true" : "false"
  organization_id                       = var.SCW_ORGANIZATION_ID
  access_key                            = var.SCW_ACCESS_KEY
  secret_key                            = var.SCW_SECRET_KEY
  region                                = var.cloud_provider == "SCW" && var.region != "" ? var.region : "fr-par" # Must provide a valid Scaleway region
  availability_zone                     = var.cloud_provider == "SCW" && var.availability_zone != "" ? var.availability_zone : var.cloud_provider == "SCW" && var.region != "" ? format("%s-1", var.region) : "fr-par-1"
  bastion_ip                            = var.bastion_ips["SCW"]
  bastion_ssh_key                       = var.bastion_ssh_keys["SCW"]
  bastion_ssh_user                      = var.bastion_ssh_users["SCW"]
  ssh_key                               = var.ssh_key
  ssh_user                              = var.ssh_user != "" ? var.ssh_user : "root"
  docker_version                        = var.docker_version
  docker_tls_ca_key                     = var.docker_tls_ca_key
  docker_tls_ca_cert                    = var.docker_tls_ca_cert
  docker_tls_ca_pass                    = var.docker_tls_ca_pass
  manager_instance_count                = var.manager_instance_count
  manager_instance_type                 = var.manager_instance_type != "" ? var.manager_instance_type : "DEV1-S"
  manager_ips                           = var.manager_ips
  manager_additional_volume_size        = var.manager_additional_volume_size
  manager_additional_volume_mount_point = var.manager_additional_volume_mount_point
  manager_crontabs                      = var.manager_crontabs
  manager_user_scripts                  = var.manager_user_scripts
  worker_instance_count                 = var.worker_instance_count
  worker_instance_type                  = var.worker_instance_type != "" ? var.worker_instance_type : "DEV1-S"
  worker_additional_volume_size         = var.worker_additional_volume_size
  worker_additional_volume_mount_point  = var.worker_additional_volume_mount_point
  worker_user_scripts                   = var.worker_user_scripts
  gluster_share_volume_mount_point      = var.gluster_share_volume_mount_point
  rclone_conf                           = var.rclone_conf
}

module "AWS" {
  source = "./modules/AWS"

  AWS                                   = var.cloud_provider == "AWS" ? "true" : "false"
  access_key                            = var.AWS_ACCESS_KEY
  secret_key                            = var.AWS_SECRET_KEY
  region                                = var.cloud_provider == "AWS" && var.region != "" ? var.region : "eu-central-1" # Must provide a valid AWS region
  availability_zone                     = var.cloud_provider == "AWS" && var.availability_zone != "" ? var.availability_zone : var.cloud_provider == "AWS" && var.region != "" ? format("%sa", var.region) : "eu-central-1a"
  bastion_ip                            = var.bastion_ips["AWS"]
  bastion_ssh_key                       = var.bastion_ssh_keys["AWS"]
  bastion_ssh_user                      = var.bastion_ssh_users["AWS"]
  ssh_key                               = var.ssh_key
  ssh_user                              = var.ssh_user != "" ? var.ssh_user : "ubuntu"
  key_name                              = var.key_name
  docker_version                        = var.docker_version
  docker_tls_ca_key                     = var.docker_tls_ca_key
  docker_tls_ca_cert                    = var.docker_tls_ca_cert
  docker_tls_ca_pass                    = var.docker_tls_ca_pass
  manager_instance_count                = var.manager_instance_count
  manager_instance_type                 = var.manager_instance_type != "" ? var.manager_instance_type : "t2.small"
  manager_ips                           = var.manager_ips
  manager_additional_volume_size        = var.manager_additional_volume_size
  manager_additional_volume_type        = var.manager_additional_volume_type != "" ? var.worker_additional_volume_type : "sc1"
  manager_additional_volume_mount_point = var.manager_additional_volume_mount_point
  manager_crontabs                      = var.manager_crontabs
  manager_user_scripts                  = var.manager_user_scripts
  worker_instance_count                 = var.worker_instance_count
  worker_instance_type                  = var.worker_instance_type != "" ? var.worker_instance_type : "t2.small"
  worker_additional_volume_size         = var.worker_additional_volume_size
  worker_additional_volume_type         = var.worker_additional_volume_type != "" ? var.worker_additional_volume_type : "sc1"
  worker_additional_volume_mount_point  = var.worker_additional_volume_mount_point
  worker_user_scripts                   = var.worker_user_scripts
  gluster_share_volume_mount_point      = var.gluster_share_volume_mount_point
  rclone_conf                           = var.rclone_conf
}

module "OVH" {
  source = "./modules/OVH"

  OVH                                   = var.cloud_provider == "OVH" ? "true" : "false"
  region                                = var.cloud_provider == "OVH" && var.region != "" ? var.region : "GRA5" # Must provide a valid OVH region
  bastion_ip                            = var.bastion_ips["OVH"]
  bastion_ssh_key                       = var.bastion_ssh_keys["OVH"]
  bastion_ssh_user                      = var.bastion_ssh_users["OVH"]
  ssh_key                               = var.ssh_key
  ssh_user                              = var.ssh_user != "" ? var.ssh_user : "ubuntu"
  key_name                              = var.key_name
  docker_version                        = var.docker_version
  docker_tls_ca_key                     = var.docker_tls_ca_key
  docker_tls_ca_cert                    = var.docker_tls_ca_cert
  docker_tls_ca_pass                    = var.docker_tls_ca_pass
  manager_instance_count                = var.manager_instance_count
  manager_instance_type                 = var.manager_instance_type != "" ? var.manager_instance_type : "s1-2"
  manager_ips                           = var.manager_ips
  manager_additional_volume_size        = var.manager_additional_volume_size
  manager_additional_volume_type        = var.manager_additional_volume_type != "" ? var.worker_additional_volume_type : "classic"
  manager_additional_volume_mount_point = var.manager_additional_volume_mount_point
  manager_crontabs                      = var.manager_crontabs
  manager_user_scripts                  = var.manager_user_scripts
  worker_instance_count                 = var.worker_instance_count
  worker_instance_type                  = var.worker_instance_type != "" ? var.worker_instance_type : "s1-2"
  worker_additional_volume_size         = var.worker_additional_volume_size
  worker_additional_volume_type         = var.worker_additional_volume_type != "" ? var.worker_additional_volume_type : "classic"
  worker_additional_volume_mount_point  = var.worker_additional_volume_mount_point
  worker_user_scripts                   = var.worker_user_scripts
  gluster_share_volume_mount_point      = var.gluster_share_volume_mount_point
  rclone_conf                           = var.rclone_conf
}

