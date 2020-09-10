cloud_provider = "OVH"

region = "GRA5"

ssh_key = "../workspaces/master/test-ovh.pem"

key_name = "test-ovh"

manager_instance_count = 1

manager_instance_type = "s1-4"

manager_additional_volume_size = 250

manager_additional_volume_mount_point = "/mnt/extra"

manager_ips = [
  "51.210.84.111"
]

manager_crontabs = ["tests/crontab"]

manager_user_scripts = [
  "tests/user-scripts/manager-0.sh"
]
