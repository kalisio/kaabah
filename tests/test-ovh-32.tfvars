cloud_provider = "OVH"

region = "GRA5"

ssh_key = "../workspaces/master/test-ovh.pem"

ssh_user = "kalisio"

manager_instance_count = 3

manager_additional_volume_size = 33

manager_additional_volume_mount_point = "/mnt/extra"

manager_instance_type = "s1-4"

manager_ips = [
  "51.210.84.111",
  "51.210.84.112",
  "51.210.84.113"
]

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

manager_crontabs = [
  "tests/crontab",
  "tests/crontab",
  "tests/crontab"
]

worker_instance_count = 2

worker_instance_type = "s1-4"

worker_additionnal_inbound_rules = [
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

worker_additional_volume_size = 33

worker_additional_volume_mount_point = "/mnt/extra"

user_script ="tests/user-script.sh"
