variable provider {
  default = ""
}

variable domain {}

variable subdomain {}

variable ca_server {}

variable contact {}

variable auth_user {}

variable auth_password {}

variable "access_key" {}

variable "token" {}

variable "region" {
  default = "par1"
}

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

variable "architectures" {
  default = {
    START-XS = "x86_64"
    START1-S = "x86_64"
    START1-M = "x86_64"
    START1-L = "x86_64"
    C2S      = "x86_64"
    C2M      = "x86_64"
    C2L      = "x86_64"
  }
}

variable "additional_volume_size" {
  default = {
    START-XS = 0
    START1-S = 0
    START1-M = 50
    START1-L = 150
    C2S      = 0
    C2M      = 0
    C2L      = 0
  }
}

variable "device_names" {
  default = [
    "/dev/nbd2",
    "/dev/nbd3",
    "/dev/nbd4",
    "/dev/nbd5",
    "/dev/nbd6",
    "/dev/nbd7",
    "/dev/nbd8",
    "/dev/nbd9",
    "/dev/nbd10",
    "/dev/nbd11"
  ]
}
