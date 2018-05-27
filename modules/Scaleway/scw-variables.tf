variable scw_provider {
  default = ""
}

variable scw_domain {}

variable scw_subdomain {}

variable scw_ca_server {}

variable scw_contact {}

variable scw_auth_user {}

variable scw_auth_password {}

variable "scw_access_key" {}

variable "scw_token" {}

variable "scw_region" {
  default = "par1"
}

variable "scw_image" {
  default = "Ubuntu Xenial"
}

variable "scw_docker_version" {}

variable "scw_manager_instance_type" {}

variable "scw_worker_instance_type" {}

variable "scw_worker_instance_count" {}

variable "scw_ssh_user" {
  default = "root"
}

variable "scw_ssh_key" {}

variable "scw_architectures" {
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
