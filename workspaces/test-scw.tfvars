provider = "SCALEWAY"

manager_ip = "51.15.193.229"

manager_instance_type = "START1-M"

worker_instance_type = "C2S"

worker_instance_count = 3

worker_additional_volume_count = 1

worker_additional_volume_size = 150

worker_labels=["worker0=true apps=true", "worker1=true", "worker2=true dbs=true"]

ca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"
