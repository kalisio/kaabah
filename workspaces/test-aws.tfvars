provider = "AWS"

manager_ip = "3.120.200.41"

manager_instance_type = "t2.small"

manager_labels = ""

worker_instance_type = "t3.small"

worker_instance_count = 3

worker_additional_volume_count = 1

worker_additional_volume_size = 500

worker_labels=["worker0=true apps=true", "worker1=true", "worker2=true dbs=true"]

worker_scripts=["worker0.sh", "worker1.sh", "worker2.sh"]

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"