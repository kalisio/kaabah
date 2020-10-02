provider "aws" {
  version = "~> 2.70"

  access_key = var.access_key
  secret_key = var.secret_key
  region     = var.region
}

data "template_cloudinit_config" "prerequisites_config" {
  gzip          = true
  base64_encode = true

  part {
       content_type = "text/cloud-config"
       content = templatefile("${path.cwd}/cloudinit/prerequisites.yml.tpl", {
               user = var.ssh_user,
               ssh_pubkey = file(var.ssh_pubkey),
               docker_version = var.docker_version })
  }
}

locals {
  tmp_dir = "/tmp/kaabah"
  timeout = "180s"
  image="ami-0c2b1c303a2e4cb49"
  manager_instance_class = element(split(".", var.manager_instance_type), 0)
  worker_instance_class = element(split(".", var.worker_instance_type), 0)
  manager_use_nvme_device = contains(local.nvme_list, local.manager_instance_class) ? true : false
  worker_use_nvme_device = contains(local.nvme_list, local.worker_instance_class) ? true : false
  additional_device_name = "/dev/sdf"
  additional_standard_device = "/dev/xvdf"
  additional_nvme_device = "/dev/nvme1n1"
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
