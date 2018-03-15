resource "scaleway_ip" "instance_ip" {
  count = "${var.instance_count}"
}

resource "scaleway_server" "instance" {
  count          = "${var.instance_count}"
  name           = "${var.instance_name}-${count.index + 1}"
  image          = "${data.scaleway_image.instance_image.id}"
  type           = "${var.instance_type}"
  security_group = "${scaleway_security_group.instance_sg.id}"
  public_ip      = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"

  volume {
    size_in_gb = 50
    type       = "l_ssd"
  }
}
