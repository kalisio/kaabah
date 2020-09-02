terraform {
  backend "s3" {}
}

provider "null" {
  version = "~> 1.0.0"
}

module "Scaleway" {
  source = "./modules/Scaleway"

  provider                              = "${var.provider}"
  organization                          = "${var.SCALEWAY_ORGANIZATION}"
  token                                 = "${var.SCALEWAY_TOKEN}"  
  region                                = "${var.provider == "SCALEWAY" ? var.region : "par1"}"  # Must provide a valid Scaleway region
  bastion_ip                            = "${var.bastion_ips["SCW"]}"
  bastion_ssh_key                       = "${var.bastion_ssh_keys["SCW"]}"
  bastion_ssh_user                      = "${var.bastion_ssh_users["SCW"]}"
  ssh_key                               = "${var.ssh_key}"
  ssh_user                              = "${var.ssh_user != "" ? var.ssh_user : "root"}"   
  docker_version                        = "${var.docker_version}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_instance_count                = "${var.manager_instance_count}"
  manager_instance_type                 = "${var.manager_instance_type}"
  manager_ip                            = "${var.manager_ip}"
  manager_crontab                       = "${var.manager_crontab}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.worker_instance_type}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  rclone_conf                           = "${var.rclone_conf}"  
}

module "AWS" {
  source = "./modules/AWS"

  provider                              = "${var.provider}"
  access_key                            = "${var.AWS_ACCESS_KEY}"
  secret_key                            = "${var.AWS_SECRET_KEY}"  
  region                                = "${var.provider == "AWS" ? var.region : "eu-central-1"}"  # Must provide a valid AWS region
  availability_zone                     = "${var.availability_zone != "" ? var.availability_zone : format("%sa", var.region)}"
  bastion_ip                            = "${var.bastion_ips["AWS"]}"
  bastion_ssh_key                       = "${var.bastion_ssh_keys["AWS"]}"
  bastion_ssh_user                      = "${var.bastion_ssh_users["AWS"]}"
  ssh_key                               = "${var.ssh_key}"
  ssh_user                              = "${var.ssh_user != "" ? var.ssh_user : "ubuntu"}"
  key_name                              = "${var.key_name}" 
  docker_version                        = "${var.docker_version}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_instance_count                = "${var.manager_instance_count}"
  manager_instance_type                 = "${var.manager_instance_type}"  
  manager_ip                            = "${var.manager_ip}"
  manager_crontab                       = "${var.manager_crontab}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.worker_instance_type}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_type         = "${var.worker_additional_volume_type != "" ? var.worker_additional_volume_type : "sc1"}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  rclone_conf                           = "${var.rclone_conf}"  
}

module "OVH" {
  source = "./modules/OVH"

  provider                              = "${var.provider}"
  region                                = "${var.provider == "OVH" ? var.region : "GRA5"}"  # Must provide a valid OVH region
  bastion_ip                            = "${var.bastion_ips["OVH"]}"
  bastion_ssh_key                       = "${var.bastion_ssh_keys["OVH"]}"
  bastion_ssh_user                      = "${var.bastion_ssh_users["OVH"]}"
  ssh_key                               = "${var.ssh_key}"
  ssh_user                              = "${var.ssh_user != "" ? var.ssh_user : "ubuntu"}"
  key_name                              = "${var.key_name}"  
  docker_version                        = "${var.docker_version}"
  docker_tls_ca_key                     = "${var.docker_tls_ca_key}"
  docker_tls_ca_cert                    = "${var.docker_tls_ca_cert}"
  docker_tls_ca_pass                    = "${var.docker_tls_ca_pass}"
  manager_instance_count                = "${var.manager_instance_count}"
  manager_instance_type                 = "${var.manager_instance_type}"
  manager_ip                            = "${var.manager_ip}"
  manager_crontab                       = "${var.manager_crontab}"
  manager_user_script                   = "${var.manager_user_script}"
  worker_instance_type                  = "${var.worker_instance_type}"
  worker_instance_count                 = "${var.worker_instance_count}"
  worker_additional_volume_count        = "${var.worker_additional_volume_count}"
  worker_additional_volume_size         = "${var.worker_additional_volume_size}"
  worker_additional_volume_type         = "${var.worker_additional_volume_type != "" ? var.worker_additional_volume_type : "classic"}"
  worker_additional_volume_mount_point  = "${var.worker_additional_volume_mount_point}"
  worker_user_scripts                   = "${var.worker_user_scripts}"
  rclone_conf                           = "${var.rclone_conf}"
}
