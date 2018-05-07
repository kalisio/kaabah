variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}
variable "SSH_USER" {}

variable "region" {
  default = "par1"
}

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

variable "docker_version" {
  default = "18.03.1~ce-0~ubuntu"
}

variable "docker_compose_version" {
  default = "1.21.2"
}

variable "manager_instance_type" {
  default = "START1-M"
}

variable "worker_instance_type" {
  default = "START1-S"
}

variable "worker_instance_count" {
  default = 2
}
