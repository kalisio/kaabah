variable provider {
  default = ""
}

variable domain {}

variable subdomain {}

variable ca_server {}

variable acme_file {}
variable contact {}

variable auth_user {}

variable auth_password {}

variable "access_key" {}

variable "token" {}

variable "region" {}

variable "image" {
  default = "Ubuntu Bionic"
}

variable "docker_version" {}

variable "docker_network" {}

variable "docker_tls_ca_key" {}

variable "docker_tls_ca_cert" {}

variable "docker_tls_ca_pass" {}

variable "manager_ip" {}

variable "manager_instance_type" {}

variable "manager_labels" {}

variable "manager_crontab" {}

variable "manager_user_script" {}

variable "worker_instance_type" {}

variable "worker_instance_count" {}

variable "worker_additional_volume_count" {}

variable "worker_additional_volume_size" {}

variable worker_additional_volume_mount_point {}

variable "worker_labels" {
  type = "list"
}

variable "worker_user_scripts" {
  type = "list"
}

variable "extensions_dir" {}

variable "ssh_user" {
  default = "root"
}

variable "ssh_ip_whitelist" {}

variable "ssh_key" {}

variable "bastion_ip" {}

variable "bastion_ssh_key" {}

variable "bastion_ssh_user" {}

variable "slack_webhook_url" {}

variable "slack_channel" {}

