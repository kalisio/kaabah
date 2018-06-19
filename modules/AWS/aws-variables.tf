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
variable "secret_key" {}

variable "region" {
  default = "eu-central-1"
}

variable "availability_zone" {
  default = "eu-central-1b"
}

variable "image" {
  default = "ami-7c412f13"
}

variable "instance_volume_size" {
  default = 50
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
  default = "ubuntu"
}

variable "ssh_key" {}

variable "key_name" {}

variable "device_names" {
  default = ["/dev/sdf", "/dev/sdg", "/dev/sdh", "/dev/sdi", "/dev/sdj", "/dev/sdk", "/dev/sdl", "/dev/sdm", "/dev/sdn", "/dev/sdo"]
}
