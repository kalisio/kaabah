variable "SCALEWAY_ACCESS_KEY" {}
variable "SCALEWAY_TOKEN" {}
variable "SSH_USER" {}

variable "region" {
  default = "par1"
}

variable "instance_type" {
  default = "C2S"
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

variable "instance_name" {
  default = "scw-ci"
}

variable "instance_count" {
  default = 3
}

variable "instance_domains" {
  type    = "map"
  default = {
    "1" = "dev.kalisio.xyz",
    "2" = "test.kalisio.xyz",
    "3" = "test.kalisio.xyz"
  }
}
