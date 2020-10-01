cloud_provider = "SCW"

region = "fr-par"

ssh_key = "../workspaces/master/test-scw.pem"

ssh_user = "kalisio"

manager_instance_type = "DEV1-S"

manager_additional_volume_size = 100

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "26531783-5867-4478-af27-dad75b51deeb"
]

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

