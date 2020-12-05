cloud_provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test-aws.pem"

ssh_user = "kalisio"

manager_instance_type = "t2.small"

manager_additional_volume_size = 500

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "3.120.200.41"
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
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

