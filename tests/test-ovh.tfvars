provider = "OVH"

region = "GRA5"

domain = "kalisio.xyz"

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"

#acme_file = "tests/acme.json"

auth_user = "admin"

auth_password = "$apr1$5.zwyoj.$IBdA2H8cHHQtLPzm/9veL/"

ssh_key = "../workspaces/master/test-ovh.pem"

key_name = "test-ovh"

# manager_ip = "3.120.200.41"

manager_instance_type = "s1-4"

manager_crontab = "tests/crontab"

manager_user_script = "tests/manager-ovh.sh"

worker_instance_type = "s1-2"

worker_instance_count = 1

worker_additional_volume_count = 1

worker_additional_volume_size = 500

worker_additional_volume_type = "sc1"

worker_additional_volume_mount_point = "data"

worker_labels=["worker0=true apps=true"/*, "worker1=true dbs=true"*/]

worker_user_scripts=["tests/worker.sh"/*, "tests/worker.sh"*/]

extensions_dir = "tests/extensions"
