cloud_provider = "SCW"

region = "fr-par"

ssh_key = "../workspaces/master/test-scw.pem"

manager_instance_count = 1

manager_instance_type = "DEV1-S"

manager_additional_volume_size = 100

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  ""
]

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

