provider = "SCALEWAY"

domain = "kalisio.xyz"

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"

auth_user = "admin"

auth_password = "$apr1$5.zwyoj.$IBdA2H8cHHQtLPzm/9veL/"

ssh_key = "tests/ssh.pem"

ssh_ip_whitelist = "78.159.24.129/32 86.193.114.150/32"

manager_ip = "51.15.214.148"

manager_instance_type = "START1-M"

manager_crontab = "tests/crontab"

manager_user_script = "tests/user-script.sh"

worker_instance_type = "START1-M" #C2S

worker_instance_count = 2

#worker_additional_volume_count = 1

#worker_additional_volume_size = 50

#worker_additional_volume_mount_point = "data"

worker_labels=["worker0=true apps=true", "worker1=true dbs=true"]

worker_user_scripts=["tests/user-script.sh", "tests/user-script.sh"]

extensions_dir = "tests/extensions"

