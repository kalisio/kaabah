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
  default = "Ubuntu Xenial"
}

variable "docker_version" {}

variable "docker_network" {}

variable "docker_tls_ca_key" {}

variable "docker_tls_ca_cert" {}
variable "docker_tls_ca_pass" {}

variable "manager_instance_type" {}

variable "worker_instance_type" {}

variable "worker_instance_count" {}

variable "worker_additional_volume_count" {}

variable "worker_additional_volume_size" {}

variable "ssh_user" {
  default = "root"
}

variable "ssh_key" {}

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
