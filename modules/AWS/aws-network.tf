resource "aws_default_vpc" "default_vpc" {
  count = var.AWS ? 1 : 0
}
