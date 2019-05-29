resource "scaleway_security_group" "security_group_manager" {
  count                   = "${var.provider == "SCALEWAY" ? 1 : 0}"
  name                    = "${terraform.workspace}-manager"
  description             = "Allow HTTP/S, SSH and Docker swarm traffic"
  enable_default_security = false
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_2376" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "2376"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_2377" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "2377"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_7946" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_7946" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "UDP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_4789" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "UDP"
  port           = "4789"
}

resource "scaleway_security_group_rule" "internal_in_accept_SSH" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = 22
}

resource "scaleway_security_group_rule" "external_in_accept_SSH" {
  count          = "${var.provider == "SCALEWAY" && ! local.use_bastion ? length(split(" ",var.ssh_ip_whitelist)) : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${element(split(" ", var.ssh_ip_whitelist),count.index)}"
  protocol       = "TCP"
  port           = 22
}

resource "scaleway_security_group_rule" "http_accept" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_manager.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 80
}

resource "scaleway_security_group_rule" "https_accept" {
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

resource "scaleway_security_group_rule" "internal_in_accept_TCP_2377_worker" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "2377"
}

resource "scaleway_security_group_rule" "internal_in_accept_TCP_7946_worker" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_7946_worker" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "UDP"
  port           = "7946"
}

resource "scaleway_security_group_rule" "internal_in_accept_UDP_4789_worker" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "UDP"
  port           = "4789"
}

resource "scaleway_security_group_rule" "internal_in_accept_SSH_worker" {
  count          = "${var.provider == "SCALEWAY" ? 1 : 0}"
  security_group = "${scaleway_security_group.security_group_worker.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "${local.scw_cidr}"
  protocol       = "TCP"
  port           = 22
}

