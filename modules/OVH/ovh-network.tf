resource  "openstack_networking_network_v2" "private_network" {
  count             = "${var.provider == "OVH" ? 1 : 0}"
  name              = "${local.private_network_name}"
  admin_state_up    = "true"
  region            = "${var.region}"
}

resource "openstack_networking_subnet_v2" "private_subnet" {
  
  name            = "${local.private_network_name}"
  network_id      = "${openstack_networking_network_v2.private_network.id}"
  cidr            = "${var.private_network_cidr}"
  ip_version      = 4
  # dhcp is required if you want to be able to retrieve metadata from
  # the 169.254.169.254 because the route is pushed via dhcp
  enable_dhcp     = true
  # this attribute is set for doc purpose only : GW are not used within OVH
  # network as it's a layer 3 network. Instead, you have to setup your
  # routes properly on each VM. see nat's ignition config for an example
  no_gateway      = true
  region          = "${var.region}"
}