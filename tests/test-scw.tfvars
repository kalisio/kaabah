provider = "SCALEWAY"

region = "par1"

ssh_key = "../workspaces/master/test-scw.pem"

manager_instance_count = 1

manager_instance_type = "DEV1-S"

manager_ip = "51.15.239.41"

manager_crontabs = ["tests/crontab"]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

worker_instance_type = "DEV1-M"

worker_instance_count = 2

#worker_additional_volume_count = 1

#worker_additional_volume_size = 50

#worker_additional_volume_mount_point = "data"

worker_user_scripts=[
  "tests/user-scripts/worker.sh", 
  "tests/user-scripts/worker.sh"
]
