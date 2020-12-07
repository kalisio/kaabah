cloud_provider = "SCW"

region = "fr-par"

ssh_key = "../workspaces/master/test-scw.pem"

ssh_user = "kalisio"

manager_instance_type = "DEV1-S"

manager_additionnal_inbound_rules = [
  { protocol = "tcp", port = 111, cidr = "" },
  { protocol = "udp", port = 111, cidr = "" },
  { protocol = "tcp", port = 2049, cidr = "" },
  { protocol = "udp", port = 2049, cidr = "" },
  { protocol = "tcp", port = 32764, cidr = "" },
  { protocol = "udp", port = 32764, cidr = "" },
  { protocol = "tcp", port = 32765, cidr = "" },
  { protocol = "udp", port = 32765, cidr = "" },
  { protocol = "tcp", port = 32766, cidr = "" },
  { protocol = "udp", port = 32766, cidr = "" },
  { protocol = "tcp", port = 32767, cidr = "" },
  { protocol = "udp", port = 32767, cidr = "" },
  { protocol = "tcp", port = 32768, cidr = "" },
  { protocol = "udp", port = 32768, cidr = "" },
  { protocol = "tcp", port = 32769, cidr = "" },
  { protocol = "udp", port = 32769, cidr = "" }
]

manager_additional_volume_size = 100

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "41e8eb86-faf9-4c01-8ef9-cf4da9ea1530"
]

manager_crontabs = [
  "tests/crontab"
]

user_script ="tests/user-script.sh"
