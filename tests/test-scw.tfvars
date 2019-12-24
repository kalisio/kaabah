provider = "SCALEWAY"

region = "par1"

domain = "kalisio.xyz"

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"

#acme_file = "tests/acme.json"

auth_user = "admin"

auth_password = "$apr1$5.zwyoj.$IBdA2H8cHHQtLPzm/9veL/"

ssh_key = "../workspaces/master/test-scw.pem"

manager_ip = "51.158.71.174"

manager_instance_type = "DEV1-S"

manager_crontab = "tests/crontab"

manager_user_script = "tests/manager.sh"

worker_instance_type = "C2S"

worker_instance_count = 2

#worker_additional_volume_count = 1

#worker_additional_volume_size = 50

#worker_additional_volume_mount_point = "data"

worker_labels=["worker0=true apps=true", "worker1=true dbs=true"]

worker_user_scripts=["tests/worker.sh", "tests/worker.sh"]

extensions_dir = "tests/extensions"

