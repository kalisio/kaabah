provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test-aws.pem"

key_name = "test-aws"

manager_instance_count = 3

manager_ip = "3.120.200.41"

manager_instance_type = "t2.small"

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

worker_instance_type = "t3.large"

worker_instance_count = 2

worker_additional_volume_count = 1

worker_additional_volume_size = 500

worker_additional_volume_type = "sc1"

worker_additional_volume_mount_point = "data"

worker_user_scripts=[
  "tests/user-scripts/worker.sh", 
  "tests/user-scripts/worker.sh"
]

