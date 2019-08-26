resource "scaleway_security_group" "security_group_manager" {
  count                   = "${var.provider == "SCALEWAY" ? 1 : 0}"
  name                    = "${terraform.workspace}-manager"
  description             = "Allow HTTP/S, SSH and Docker swarm traffic"
  enable_default_security = false
}

resource "scaleway_security_group_rule" "manager_internal_in_accept_TCP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_manager_tcp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "${element(local.scw_manager_tcp_ports, count.index)}"
}

resource "scaleway_security_group_rule" "manager_external_in_drop_TCP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_manager_tcp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "drop"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = "${element(local.scw_manager_tcp_ports, count.index)}"

  depends_on = [ "scaleway_security_group_rule.manager_internal_in_accept_TCP" ]
}

resource "scaleway_security_group_rule" "manager_internal_in_accept_UDP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_manager_udp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "${element(local.scw_manager_udp_ports, count.index)}"
}

resource "scaleway_security_group_rule" "manager_external_in_drop_UDP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_manager_udp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "drop"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "UDP"
  port           = "${element(local.scw_manager_udp_ports, count.index)}"

  depends_on = [ "scaleway_security_group_rule.manager_internal_in_accept_UDP" ]
}

resource "scaleway_security_group_rule" "manager_in_accept_HTTP" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 80
}

resource "scaleway_security_group_rule" "manager_in_accept_HTTPS" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 443
}

resource "scaleway_security_group" "security_group_worker" {
  count                   = "${var.provider == "SCALEWAY" ? 1 : 0}"
  name                    = "${terraform.workspace}-workers"
  description             = "Allow SSH traffic and Docker swarm traffic"
  enable_default_security = false
}

resource "scaleway_security_group_rule" "worker_internal_in_accept_TCP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_worker_tcp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "${element(local.scw_worker_tcp_ports, count.index)}"
}

resource "scaleway_security_group_rule" "worker_external_in_drop_TCP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_worker_tcp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "drop"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = "${element(local.scw_worker_tcp_ports, count.index)}"

  depends_on = [ "scaleway_security_group_rule.worker_internal_in_accept_TCP" ]
}

resource "scaleway_security_group_rule" "worker_internal_in_accept_UDP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_worker_udp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "${element(local.scw_worker_udp_ports, count.index)}"
}

resource "scaleway_security_group_rule" "worker_external_in_drop_UDP" {
  count          = "${var.provider == "SCALEWAY" ? length(local.scw_worker_udp_ports) : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "drop"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "UDP"
  port           = "${element(local.scw_worker_udp_ports, count.index)}"

  depends_on = [ "scaleway_security_group_rule.worker_internal_in_accept_UDP" ]
}