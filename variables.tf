variable "SCW_ORGANIZATION_ID" {
}

variable "SCW_ACCESS_KEY" {
}

variable "SCW_SECRET_KEY" {
}

variable "AWS_ACCESS_KEY" {
}

variable "AWS_SECRET_KEY" {
}

variable "cloud_provider" {
}

variable "region" {
}

variable "availability_zone" {
  default = ""
}

variable "bastion_ips" {
  type = map(string)
}

variable "bastion_ssh_keys" {
  type = map(string)
}

variable "bastion_ssh_users" {
  type = map(string)
}

variable "ssh_key" {
}

variable "ssh_user" {
  default = ""
}

variable "docker_version" {
  default = "5:19.03.13~3-0~debian-buster"
}

variable "docker_tls_ca_key" {
}

variable "docker_tls_ca_cert" {
}

variable "docker_tls_ca_pass" {
}

variable "manager_instance_count" {
  default = 1
}

variable "manager_ips" {
  type    = list(string)
  default = []
}

variable "manager_instance_type" {
  default = ""
}

variable "manager_additional_volume_size" {
  default = 0
}

variable "manager_additional_volume_type" {
  default = ""
}

variable "manager_additional_volume_mount_point" {
  default = "/mnt/data"
}

variable "manager_crontabs" {
  type    = list(string)
  default = []
}

variable "manager_user_scripts" {
  type    = list(string)
  default = []
}

variable "worker_instance_count" {
  default = 0
}

variable "worker_instance_type" {
  default = ""
}

variable "worker_additional_volume_size" {
  default = 0
}

variable "worker_additional_volume_type" {
  default = ""
}

variable "worker_additional_volume_mount_point" {
  default = "/mnt/data"
}

variable "worker_user_scripts" {
  type    = list(string)
  default = []
}

variable "gluster_share_volume_mount_point" {
  default = "/mnt/share"
}

variable "rclone_conf" {
  default = ""
}

