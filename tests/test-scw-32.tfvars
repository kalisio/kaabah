cloud_provider = "SCW"

region = "fr-par"

ssh_key = "../workspaces/master/test-scw.pem"

ssh_user = "kalisio"

manager_instance_count = 3

manager_instance_type = "DEV1-S"

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

worker_additional_volume_size = 100

worker_additional_volume_mount_point = "/mnt/extra"

worker_user_scripts=[
  "tests/user-scripts/worker-0.sh", 
  "tests/user-scripts/worker-1.sh"
]
