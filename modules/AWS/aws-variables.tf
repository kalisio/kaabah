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

variable "manager_ip" {}

variable "manager_instance_type" {}

variable "manager_labels" {}

variable "manager_user_script" {}

variable "worker_instance_type" {}

variable "worker_instance_count" {}

variable "worker_additional_volume_count" {}

variable "worker_additional_volume_size" {}

variable "worker_additional_volume_type" {}

variable "worker_labels" {
  type = "list"
}

variable "worker_user_scripts" {
  type = "list"
}

variable "ssh_user" {
  default = "ubuntu"
}

variable "ssh_key" {}

variable "key_name" {}

variable "device_names" {
  default = [
    "/dev/sdf", 
    "/dev/sdg", 
    "/dev/sdh", 
    "/dev/sdi", 
    "/dev/sdj", 
    "/dev/sdk", 
    "/dev/sdl", 
    "/dev/sdm", 
    "/dev/sdn", 
    "/dev/sdo"]
}

variable "standard_devices" {
  default = [
    "/dev/xvdf", 
    "/dev/xvdg", 
    "/dev/xvdh",
    "/dev/xvdi", 
    "/dev/xvdj",
    "/dev/xvdk", 
    "/dev/xvdl", 
    "/dev/xvdm", 
    "/dev/xvdn", 
    "/dev/xvdo" ]
}

variable "nvme_devices" {
 default = [
   "/dev/nvme1n1", 
   "/dev/nvme2n1", 
   "/dev/nvme3n1", 
   "/dev/nvme4n1", 
   "/dev/nvme5n1", 
   "/dev/nvme6n1", 
   "/dev/nvme7n1", 
   "/dev/nvme8n1", 
   "/dev/nvme9n1",
   "/dev/nvme10n1" ]
}

variable "nvme_list" {
  default = ["c5", "c5d", "i3.metal", "m5", "m5d", "r5", "r5d", "t3", "z1d"]
}