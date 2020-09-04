provider = "AWS"

region = "eu-central-1"

ssh_key = "../workspaces/master/test-aws.pem"

key_name = "test-aws"

manager_instance_type = "t2.small"

manager_ips = [
  "3.120.200.41"
]

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]



