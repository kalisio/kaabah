provider "aws" {
  version = "~> 2.0"

  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "180s"
  image = "ami-090f10efc254eaf55"
  worker_instance_class = "${element(split(".", var.worker_instance_type), 0)}"
  worker_use_nvme_device = "${contains(local.nvme_list, local.worker_instance_class) ? true : false}"
  device_names = [
    "/dev/sdf", 
    "/dev/sdg", 
    "/dev/sdh", 
    "/dev/sdi", 
    "/dev/sdj", 
    "/dev/sdk", 
    "/dev/sdl", 
    "/dev/sdm", 
    "/dev/sdn", 
    "/dev/sdo"
  ]
  standard_devices = [
    "/dev/xvdf", 
    "/dev/xvdg", 
    "/dev/xvdh",
    "/dev/xvdi", 
    "/dev/xvdj",
    "/dev/xvdk", 
    "/dev/xvdl", 
    "/dev/xvdm", 
    "/dev/xvdn", 
    "/dev/xvdo" 
  ]
  nvme_devices = [
   "/dev/nvme1n1", 
   "/dev/nvme2n1", 
   "/dev/nvme3n1", 
   "/dev/nvme4n1", 
   "/dev/nvme5n1", 
   "/dev/nvme6n1", 
   "/dev/nvme7n1", 
   "/dev/nvme8n1", 
   "/dev/nvme9n1",
   "/dev/nvme10n1" 
  ] 
  nvme_list = [
    "c5", 
    "c5d", 
    "i3.metal", 
    "m5", 
    "m5d", 
    "r5", 
    "r5d", 
    "t3", 
    "z1d"
  ]
}
