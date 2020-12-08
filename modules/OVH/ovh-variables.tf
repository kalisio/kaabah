variable "OVH" {}

variable "region" {}

variable "bastion_ip" {}

variable "bastion_ssh_key" {}

variable "bastion_ssh_user" {}

variable "ssh_user" {}

variable "ssh_key" {}

variable "ssh_pubkey" {}

variable "docker_version" {}

variable "docker_tls_ca_key" {}

variable "docker_tls_ca_cert" {}

variable "docker_tls_ca_pass" {}

variable "manager_instance_count" {}

variable "manager_instance_type" {}

variable "manager_ips" {
  type = list
}

variable "manager_inbound_rules" {
  type = list(object({ protocol = string, port = number, cidr = string }))
}

variable "manager_additional_volume_size" {}

variable "manager_additional_volume_type" {}

variable "manager_additional_volume_mount_point" {}

variable "manager_crontabs" {
  type = list
}

variable "worker_instance_type" {}

variable "worker_instance_count" {}

variable "worker_inbound_rules" {
  type = list(object({ protocol = string, port = number, cidr = string }))
}

variable "worker_additional_volume_size" {}

variable "worker_additional_volume_type" {}

variable "worker_additional_volume_mount_point" {}

variable "user_script" {}

variable "gluster_share_volume_mount_point" {}

variable "rclone_conf" {}

variable "nvm_version" {}

variable "yq_version" {}
