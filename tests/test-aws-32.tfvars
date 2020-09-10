cloud_provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test-aws.pem"

key_name = "test-aws"

manager_instance_count = 3

manager_instance_type = "t2.small"

manager_additional_volume_size = 500

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "3.120.200.41", 
  "18.185.30.204", 
  "35.156.85.0"
]

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

worker_additional_volume_size = 500

worker_additional_volume_mount_point = "/mnt/extra"

worker_user_scripts=[
  "tests/user-scripts/worker-0.sh",
  "tests/user-scripts/worker-1.sh"
]

