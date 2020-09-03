variable provider {}

variable "region" {}

variable "availability_zone" {}

variable "access_key" {}

variable "secret_key" {}

variable "bastion_ip" {}

variable "bastion_ssh_key" {}

variable "bastion_ssh_user" {}

variable "ssh_user" {
  default = "ubuntu"
}

variable "ssh_key" {}

variable "key_name" {}

variable "instance_volume_size" {
  default = 50
}

variable "docker_version" {}

variable "docker_tls_ca_key" {}

variable "docker_tls_ca_cert" {}

variable "docker_tls_ca_pass" {}

variable "manager_instance_count" {}

variable "manager_instance_type" {}

variable "manager_ip" {}

variable "manager_crontabs" {
  type = "list"
}

variable "manager_user_scripts" {
  type = "list"
}

variable "worker_instance_type" {}

variable "worker_instance_count" {}

variable "worker_additional_volume_count" {}

variable "worker_additional_volume_size" {}

variable "worker_additional_volume_type" {}

variable worker_additional_volume_mount_point {}

variable "worker_user_scripts" {
  type = "list"
}

variable "rclone_conf" {}

