// Manager
resource "openstack_networking_secgroup_v2" "manager_security_group" {
  count                 = "${var.provider == "OVH" ? 1 : 0}"
  region                = "${var.region}"
  name                  = "${terraform.workspace}-manager"
  description           = "${terraform.workspace}-manager"
}

resource "openstack_networking_secgroup_rule_v2" "manager_internal_accept_SSH" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    ethertype           = "IPv4"
    protocol            = "tcp"
    direction           = "ingress"
    port_range_min      = 22
    port_range_max      = 22
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_TCP_2376" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2376
    port_range_max      = 2376
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_TCP_2377" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2377
    port_range_max      = 2377
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_TCP_7946" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_UDP_7946" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_UDP_4789" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 4789
    port_range_max      = 4789
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "manager_in_accept_HTTP" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 80
    port_range_max      = 80
    remote_ip_prefix    = "0.0.0.0/0"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "manager_in_accept_HTTPS" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 443
    port_range_max      = 443
    remote_ip_prefix    = "0.0.0.0/0"
    security_group_id   = "${openstack_networking_secgroup_v2.manager_security_group.id}"
}

// Worker
resource "openstack_networking_secgroup_v2" "worker_security_group" {
  count                   = "${var.provider == "OVH" ? 1 : 0}"
  region                  = "${var.region}"
  name                    = "${terraform.workspace}-workers"
  description             = "${terraform.workspace}-worker-sg"
}

resource "openstack_networking_secgroup_rule_v2" "bastion_worker_ssh" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    ethertype           = "IPv4"
    protocol            = "tcp"
    direction           = "ingress"
    port_range_min      = 22
    port_range_max      = 22
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.worker_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_TCP_2376_worker" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2376
    port_range_max      = 2376
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.worker_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_TCP_2377_worker" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 2377
    port_range_max      = 2377
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.worker_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_TCP_7946_worker" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "tcp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.worker_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_UDP_7946_worker" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 7946
    port_range_max      = 7946
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.worker_security_group.id}"
}

resource "openstack_networking_secgroup_rule_v2" "internal_in_accept_UDP_4789_worker" {
    count               = "${var.provider == "OVH" ? 1 : 0}"
    region              = "${var.region}"
    direction           = "ingress"
    ethertype           = "IPv4"
    protocol            = "udp"
    port_range_min      = 4789
    port_range_max      = 4789
    remote_ip_prefix    = "${local.cidr}"
    security_group_id   = "${openstack_networking_secgroup_v2.worker_security_group.id}"
}
