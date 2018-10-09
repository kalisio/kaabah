provider = "SCALEWAY"

manager_ip = "51.15.193.229"

manager_instance_type = "START1-M"

manager_user_script = "tests/user-script.sh"

worker_instance_type = "C2S"

worker_instance_count = 3

worker_additional_volume_count = 1

worker_additional_volume_size = 150

worker_additional_volume_mount_point = "DATA"

worker_labels=["worker0=true apps=true", "worker1=true", "worker2=true dbs=true"]

worker_user_scripts=["tests/user-script.sh", "tests/user-script.sh", "tests/user-script.sh"]

extensions_dir = "tests/extensions"

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"
