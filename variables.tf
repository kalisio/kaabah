variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}
variable "SSH_USER" {}

variable "region" {
  default = "par1"
}

variable "architectures" {
  default = {
    C1   = "arm"
    VC1S = "x86_64"
    VC1M = "x86_64"
    VC1L = "x86_64"
    C2S  = "x86_64"
    C2M  = "x86_64"
    C2L  = "x86_64"
  }
}

variable "docker_version" {
  default = "17.06.0~ce-0~ubuntu"
}

variable "manager_instance_type" {
  default = "VC1S"
}

variable "worker_instance_type" {
  default = "VC1S"
}

variable "worker_instance_count" {
  default = 2
}

variable "docker_api_ip" {
  default = "127.0.0.1"
}

