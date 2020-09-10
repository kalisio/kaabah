resource "scaleway_instance_security_group" "manager_security_group" {
  count                   = var.SCW ? 1 : 0
  name                    = "${terraform.workspace}-manager"
  inbound_default_policy = "drop" 

  inbound_rule {
    action    = "accept"
    port      = 80
    protocol  = "TCP"
    ip_range  = "0.0.0.0/0"
  }

  inbound_rule {
    action    = "accept"
    port      = 443
    protocol  = "TCP"
    ip_range  = "0.0.0.0/0"
  }

  dynamic "inbound_rule" {
    for_each = local.manager_tcp_ports

    content {
      action    = "accept"
      port      = inbound_rule.value
      protocol  = "TCP"
      ip_range   = local.private_network_cidr
    }
  }

  dynamic "inbound_rule" {
    for_each = local.manager_udp_ports

    content {
      action    = "accept"
      port      = inbound_rule.value
      protocol  = "UDP"
      ip_range   = local.private_network_cidr
    }
  }
}

  
resource "scaleway_instance_security_group" "worker_security_group" {
  count                   = var.SCW ? 1 : 0
  name                    = "${terraform.workspace}-worker"
  inbound_default_policy = "drop" 

  dynamic "inbound_rule" {
    for_each = local.worker_tcp_ports

    content {
      action    = "accept"
      port      = inbound_rule.value
      protocol  = "TCP"
      ip_range   = local.private_network_cidr
    }
  }

  dynamic "inbound_rule" {
    for_each = local.worker_udp_ports

    content {
      action    = "accept"
      port      = inbound_rule.value
      protocol  = "UDP"
      ip_range   = local.private_network_cidr
    }
  }
}