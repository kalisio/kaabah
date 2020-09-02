provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test-aws.pem"

key_name = "test-aws"

manager_ip = "3.120.200.41"

manager_instance_type = "t2.small"

manager_crontab = "tests/crontab"

manager_user_script = "tests/manager.sh"

worker_instance_type = "t3.large"

worker_instance_count = 2

worker_additional_volume_count = 1

worker_additional_volume_size = 500

worker_additional_volume_type = "sc1"

worker_additional_volume_mount_point = "data"

worker_user_scripts=["tests/worker.sh", "tests/worker.sh"]

