resource "aws_default_vpc" "default_vpc" {
  count = "${var.provider == "AWS" ? 1 : 0}"
}