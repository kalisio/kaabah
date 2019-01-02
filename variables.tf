variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}

variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}

variable "KAABAH_AUTH_USER" {}

variable "KAABAH_AUTH_PASSWORD" {}

variable "provider" {
  default = ""
}

variable "domain" {
  default = "kalisio.xyz"
}

variable "subdomain" {
  default = ""
}

variable "ca_server" {
  default = "https://acme-v02.api.letsencrypt.org/directory"
}

variable contact {
  default = "contact@kalisio.com"
}

variable auth_user {
  default = ""
}

variable auth_password {
  default = ""
}

variable "docker_version" {
  default = "18.06.1~ce~3-0~ubuntu"
}

variable "docker_network" {
  default = "kaabah"
}

variable "docker_tls_ca_key" {
  default = "ca.key"
}

variable "docker_tls_ca_cert" {
  default = "ca.cert"
}

variable "docker_tls_ca_pass" {
  default = "ca.pass"
}

variable "manager_ip" {
  default = ""
}

variable "manager_instance_type" {
  default = ""
}

variable "manager_labels" {
  default = ""
}

variable "manager_user_script" {
  default = ""
}

variable "worker_instance_type" {
  default = ""
}

variable "worker_instance_count" {
  default = 1
}

variable "worker_additional_volume_count" {
  default = 0
}

variable "worker_additional_volume_size" {
  default = 150
}

variable "worker_additional_volume_type" {
  default = ""
}

variable "worker_additional_volume_mount_point" {
  default = "data"
}

variable "worker_labels" {
  type = "list"
  default = []
}

variable "worker_user_scripts" {
  type = "list"
  default = []
}

variable extensions_dir {
  default = ""
}

variable "ssh_ip_whitelist" {
  default = "0.0.0.0/0"
}

variable "ssh_key" {
  default = "ssh.pem"
}

variable "aws_key_name" {
  default = "kalisio"
}
