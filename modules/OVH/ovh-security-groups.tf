// Manager
resource "openstack_networking_secgroup_v2" "manager_security_group" {
  count                 = var.OVH ? 1 : 0
  region                = var.region
  name                  = "${terraform.workspace}-manager"
  description           = "${terraform.workspace}-manager"
}

resource "openstack_networking_secgroup_rule_v2" "manager_bastion_accept_SSH" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    ethertype           = "IPv4"
    protocol            = "tcp"
    direction           = "ingress"
    port_range_min      = 22
    port_range_max      = 22
    remote_ip_prefix    = var.bastion_ip
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_SSH" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    ethertype           = "IPv4"
    protocol            = "tcp"
    direction           = "ingress"
    port_range_min      = 22
    port_range_max      = 22
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_TCP_2376" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2376
    port_range_max      = 2376
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_TCP_2377" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2377
    port_range_max      = 2377
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_TCP_7946" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_UDP_7946" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_UDP_4789" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 4789
    port_range_max      = 4789
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_TCP_24007" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 24007
    port_range_max      = 24007
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_UDP_24007" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 24007
    port_range_max      = 24007
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_TCP_24008" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 24008
    port_range_max      = 24008
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_UDP_24008" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 24008
    port_range_max      = 24008
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_TCP_49152" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 49152
    port_range_max      = 49152
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_private_in_accept_UDP_49152" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 49152
    port_range_max      = 49152
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_in_accept_HTTP" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 80
    port_range_max      = 80
    remote_ip_prefix    = "0.0.0.0/0"
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "manager_in_accept_HTTPS" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 443
    port_range_max      = 443
    remote_ip_prefix    = "0.0.0.0/0"
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

// Worker
resource "openstack_networking_secgroup_v2" "worker_security_group" {
  count                   = var.OVH ? 1 : 0
  region                  = var.region
  name                    = "${terraform.workspace}-worker"
  description             = "${terraform.workspace}-worker"
}

resource "openstack_networking_secgroup_rule_v2" "worker_bastion_in_accept_ssh" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    ethertype           = "IPv4"
    protocol            = "tcp"
    direction           = "ingress"
    port_range_min      = 22
    port_range_max      = 22
    remote_ip_prefix    = var.bastion_ip
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_ssh" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    ethertype           = "IPv4"
    protocol            = "tcp"
    direction           = "ingress"
    port_range_min      = 22
    port_range_max      = 22
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_TCP_2376" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2376
    port_range_max      = 2376
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_TCP_2377" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2377
    port_range_max      = 2377
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_TCP_7946" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_UDP_7946" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_UDP_4789" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 4789
    port_range_max      = 4789
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_TCP_24007" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 24007
    port_range_max      = 24007
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_UDP_24007" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 24007
    port_range_max      = 24007
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_TCP_24008" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 24008
    port_range_max      = 24008
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_UDP_24008" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 24008
    port_range_max      = 24008
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_TCP_49152" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 49152
    port_range_max      = 49152
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}

resource "openstack_networking_secgroup_rule_v2" "worker_private_in_accept_UDP_49152" {
    count               = var.OVH ? 1 : 0
    region              = var.region
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 49152
    port_range_max      = 49152
    remote_ip_prefix    = data.openstack_networking_subnet_v2.private_subnet.*.cidr[0]
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}