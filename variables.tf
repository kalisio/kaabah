variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}

variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}

variable "provider" {
  default = "AWS"
}

variable "domain" {
  default = "kalisio.xyz"
}

variable "docker_version" {
  default = "18.03.1~ce-0~ubuntu"
}

variable "docker_compose_version" {
  default = "1.21.2"
}

variable "manager_instance_type" {
  type = "map"

  default = {
    SCALEWAY = "C2M"
    AWS      = "t2.micro"
  }
}

variable "worker_instance_type" {
  type = "map"

  default = {
    SCALEWAY = "C2S"
    AWS      = "t2.micro"
  }
}

variable "worker_instance_count" {
  default = 2
}
