provider = "OVH"

region = "GRA5"

domain = "kalisio.xyz"

ssh_key = "../workspaces/master/test-ovh.pem"

key_name = "test-ovh"

# manager_ip = "3.120.200.41"

manager_instance_type = "s1-4"

manager_crontab = "tests/crontab"

manager_user_script = "tests/manager.sh"

worker_instance_type = "s1-2"

worker_instance_count = 1

worker_additional_volume_count = 1

worker_additional_volume_size = 500

worker_additional_volume_type = "classic" 

worker_additional_volume_mount_point = "data"

worker_labels=["worker0=true apps=true"/*, "worker1=true dbs=true"*/]

worker_user_scripts=["tests/worker.sh"/*, "tests/worker.sh"*/]

