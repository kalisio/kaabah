provider = "AWS"

domain = "kalisio.xyz"

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"

auth_user = "admin"

auth_password = "$apr1$5.zwyoj.$IBdA2H8cHHQtLPzm/9veL/"

ssh_key = "tests/ssh.pem"

ssh_ip_whitelist = "78.159.24.129/32"

aws_key_name = "kalisio"

manager_ip = "3.120.200.41"

manager_instance_type = "t2.small"

manager_crontab = "tests/crontab"

manager_user_script = "tests/manager.sh"

worker_instance_type = "t3.large"

worker_instance_count = 2

#worker_additional_volume_count = 1

#worker_additional_volume_size = 500

#worker_additional_volume_type = "sc1"

#worker_additional_volume_mount_point = "data"

worker_labels=["worker0=true apps=true", "worker1=true dbs=true"]

worker_user_scripts=["tests/worker.sh", "tests/worker.sh"]

extensions_dir = "tests/extensions"
