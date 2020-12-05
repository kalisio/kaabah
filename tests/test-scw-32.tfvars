cloud_provider = "SCW"

region = "fr-par"

ssh_key = "../workspaces/master/test-scw.pem"

ssh_user = "kalisio"

manager_instance_count = 3

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

manager_crontabs = [
  "tests/crontab",
  "tests/crontab",
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh",
  "tests/user-scripts/manager-1.sh",
  "tests/user-scripts/manager-2.sh"
]

worker_instance_count = 2

worker_instance_type = "DEV1-M"

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

worker_additional_volume_size = 100

worker_additional_volume_mount_point = "/mnt/extra"

worker_user_scripts=[
  "tests/user-scripts/worker-0.sh", 
  "tests/user-scripts/worker-1.sh"
]
