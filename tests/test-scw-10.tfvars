provider = "SCALEWAY"

region = "par1"

ssh_key = "../workspaces/master/test-scw.pem"

manager_instance_count = 1

manager_instance_type = "DEV1-S"

manager_ips = [
  ""
]

manager_crontabs = [
  "tests/crontab"
]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]

