variable aws_provider {
  default = ""
}

variable aws_domain {}

variable aws_subdomain {}

variable aws_ca_server {}

variable aws_contact {}

variable aws_auth_user {}

variable aws_auth_password {}

variable "aws_access_key" {}
variable "aws_secret_key" {}

variable "aws_region" {
  default = "eu-central-1"
}

variable "aws_image" {
  default = "ami-7c412f13"
}

variable "aws_docker_version" {}

variable "aws_manager_instance_type" {}

variable "aws_worker_instance_type" {}

variable "aws_worker_instance_count" {}

variable "aws_ssh_user" {
  default = "ubuntu"
}

variable "aws_ssh_key" {}

variable "aws_key_name" {}
