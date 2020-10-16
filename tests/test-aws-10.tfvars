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

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

