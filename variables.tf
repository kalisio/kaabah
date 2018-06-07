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

variable "docker_version" {
  default = "18.03.1~ce-0~ubuntu"
}

variable "manager_instance_type" {
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

variable "ssh_key" {
  default = "ssh.pem"
}

variable "aws_key_name" {
  default = "kalisio"
}
