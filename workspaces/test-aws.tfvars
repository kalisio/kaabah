provider = "AWS"

manager_ip = "3.120.200.41"

manager_instance_type = "t2.small"

manager_user_script = "workspaces/test-script.sh"

worker_instance_type = "t3.large"

worker_instance_count = 2

worker_additional_volume_count = 1

worker_additional_volume_size = 2000

worker_additional_volume_type = "sc1"

worker_additional_volume_mount_point = "DATA"

worker_labels=["worker0=true apps=true", "worker2=true dbs=true"]

worker_user_scripts=["workspaces/test-script.sh", "workspaces/test-script.sh"]

extensions_dir = "workspaces/extensions"

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"