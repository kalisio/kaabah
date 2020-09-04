provider = "OVH"

region = "GRA5"

ssh_key = "../workspaces/master/test-ovh.pem"

key_name = "test-ovh"

manager_instance_count = 1

manager_instance_type = "s1-4"

manager_ips = [
  "91.134.188.154"
]

manager_crontabs = ["tests/crontab"]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]
