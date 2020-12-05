// Manager
resource "openstack_networking_secgroup_v2" "manager_security_group" {
  count                 = var.OVH ? 1 : 0
  region                = var.region
  name                  = "${terraform.workspace}-manager"
  description           = "${terraform.workspace}-manager"
}

resource "openstack_networking_secgroup_rule_v2" "manager_security_group_rules" {
    count               = var.OVH ? length(var.manager_inbound_rules) : 0
    region              = var.region
    ethertype           = "IPv4"
    protocol            = var.manager_inbound_rules[count.index].protocol
    direction           = "ingress"
    port_range_min      = var.manager_inbound_rules[count.index].port
    port_range_max      = var.manager_inbound_rules[count.index].port
    remote_ip_prefix    = var.manager_inbound_rules[count.index].cidr == "" ? data.openstack_networking_subnet_v2.private_subnet.*.cidr[0] : var.manager_inbound_rules[count.index].cidr
    security_group_id   = openstack_networking_secgroup_v2.manager_security_group.*.id[0]
}

// Worker
resource "openstack_networking_secgroup_v2" "worker_security_group" {
  count                   = var.OVH ? 1 : 0
  region                  = var.region
  name                    = "${terraform.workspace}-worker"
  description             = "${terraform.workspace}-worker"
}

resource "openstack_networking_secgroup_rule_v2" "worker_security_group_rules" {
    count               = var.OVH ? length(var.worker_inbound_rules) : 0
    region              = var.region
    ethertype           = "IPv4"
    protocol            = var.worker_inbound_rules[count.index].protocol
    direction           = "ingress"
    port_range_min      = var.worker_inbound_rules[count.index].port
    port_range_max      = var.worker_inbound_rules[count.index].port
    remote_ip_prefix    = var.worker_inbound_rules[count.index].cidr == "" ? data.openstack_networking_subnet_v2.private_subnet.*.cidr[0] : var.worker_inbound_rules[count.index].cidr
    security_group_id   = openstack_networking_secgroup_v2.worker_security_group.*.id[0]
}
