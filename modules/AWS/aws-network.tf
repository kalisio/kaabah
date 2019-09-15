resource "aws_default_vpc" "default_vpc" {
  count = "${var.provider == "AWS" ? 1 : 0}"
}

resource "aws_eip_association" "manager" {
  count       = "${var.provider == "AWS" && var.manager_ip != "" ? 1 : 0}"
  instance_id = "${aws_instance.manager.id}"
  public_ip   = "${var.manager_ip}"
}