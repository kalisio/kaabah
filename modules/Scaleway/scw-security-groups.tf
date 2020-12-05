resource "scaleway_instance_security_group" "manager_security_group" {
  count                   = var.SCW ? 1 : 0
  name                    = "${terraform.workspace}-manager"
  inbound_default_policy = "drop" 

  dynamic "inbound_rule" {
    for_each = var.manager_inbound_rules

    content {
      action    = "accept"
      port      = inbound_rule.value.port
      protocol  = upper(inbound_rule.value.protocol)
      ip_range   = inbound_rule.value.cidr == "" ? local.private_network_cidr : inbound_rule.value.cidr
    }
  }
}

resource "scaleway_instance_security_group" "worker_security_group" {
  count                   = var.SCW && var.worker_instance_count > 0 ? 1 : 0
  name                    = "${terraform.workspace}-worker"
  inbound_default_policy = "drop" 

  dynamic "inbound_rule" {
    for_each = var.worker_inbound_rules

    content {
      action    = "accept"
      port      = inbound_rule.value.port
      protocol  = upper(inbound_rule.value.protocol)
      ip_range  = inbound_rule.value.cidr == "" ? local.private_network_cidr : inbound_rule.value.cidr 
    }
  }
}