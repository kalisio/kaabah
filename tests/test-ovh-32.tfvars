provider = "OVH"

region = "GRA5"

ssh_key = "../workspaces/master/test-ovh.pem"

key_name = "test-ovh"

manager_instance_count = 3

manager_instance_type = "s1-4"

manager_ips = [
  "51.210.84.111",
  "51.210.84.112",
  "51.210.84.113"
]

manager_crontabs = ["tests/crontab"]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh",
  "tests/user-scripts/manager-1.sh",
  "tests/user-scripts/manager-2.sh"
]

worker_instance_count = 2

worker_instance_type = "s1-4"

worker_additional_volume_count = 0

worker_additional_volume_size = 500

worker_additional_volume_type = "classic" 

worker_additional_volume_mount_point = "data"

worker_user_scripts=[
  "tests/user-scripts/worker-0.sh",
  "tests/user-scripts/worker-0.sh"
]

