variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}
variable "SSH_USER" {}

variable "region" {
  default = "par1"
}

variable "architectures" {
  default = {
    START-XS = "x86_64"
    START1_S = "x86_64"
    START1-M = "x86_64"
    START1-L = "x86_64"
    C1       = "arm"
    C2S      = "x86_64"
    C2M      = "x86_64"
    C2L      = "x86_64"
  }
}

variable "docker_version" {
  default = "18.03.1~ce-0~ubuntu"
}

variable "manager_instance_type" {
  default = "C2S"
}

variable "worker_instance_type" {
  default = "C2S"
}

variable "worker_instance_count" {
  default = 2
}
