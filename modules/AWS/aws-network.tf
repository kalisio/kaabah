resource "aws_default_vpc" "default_vpc" {
  count = "${var.provider == "AWS" ? 1 : 0}"
}

resource "aws_eip_association" "manager" {
  count       = "${var.provider == "AWS" && length(var.manager_ips) > 0 ? var.manager_instance_count : 0}"
  instance_id = "${element(aws_instance.manager.*.id, count.index)}"
  public_ip   = "${var.manager_ips[count.index]}"
}