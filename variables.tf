variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}

variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}

variable "provider" {
  default = "SCALEWAY"
}

variable "domain" {
  default = "kalisio.xyz"
}

variable "subdomain" {
  default = ""
}

variable "docker_version" {
  default = "18.03.1~ce-0~ubuntu"
}

variable "manager_instance_type" {
  default = "START1-S"
}

variable "worker_instance_type" {
  default = "START1-S"
}

variable "worker_instance_count" {
  default = 1
}

variable "ssh_user" {
  default = {
    SCALEWAY = "root"
    AWS      = "ubuntu"
  }
}

variable "ssh_key" {
  default = "secrets/kalisio.pem"
}

variable "aws_key_name" {
  default = "kalisio"
}
