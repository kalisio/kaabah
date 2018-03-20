resource "scaleway_security_group" "instance_sg" {
  name                    = "${var.instance_name}-sg"
  description             = "Allow SSH, HTTP, HTTPS traffic"
  enable_default_security = false
}

resource "scaleway_security_group_rule" "ssh_accept" {
  security_group = "${scaleway_security_group.instance_sg.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 22
}

resource "scaleway_security_group_rule" "http_accept" {
  security_group = "${scaleway_security_group.instance_sg.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 80
}

resource "scaleway_security_group_rule" "https_accept" {
  security_group = "${scaleway_security_group.instance_sg.id}"
  action         = "accept"
  direction      = "inbound"
  ip_range       = "0.0.0.0/0"
  protocol       = "TCP"
  port           = 443
}
