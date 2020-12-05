// Manager
resource "aws_security_group" "manager_security_group" {
  count       = var.AWS ? 1 : 0
  name        = "${terraform.workspace}-manager"

  dynamic "ingress" {
    for_each = var.manager_inbound_rules

    content {
      from_port   = ingress.value.port
      to_port     = ingress.value.port
      protocol    = ingress.value.protocol
      cidr_blocks = [ingress.value.cidr == "" ? aws_default_vpc.default_vpc.*.cidr_block[0] : ingress.value.cidr]
    }
  }

  egress {
    from_port   = "0"
    to_port     = "0"
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${terraform.workspace}-manager"
  }
}

// Worker
resource "aws_security_group" "worker_security_group" {
  count       = var.AWS ? 1 : 0
  name        = "${terraform.workspace}-worker"

  dynamic "ingress" {
    for_each = var.worker_inbound_rules

    content {
      from_port   = ingress.value.port
      to_port     = ingress.value.port
      protocol    = ingress.value.protocol
      cidr_blocks = [ingress.value.cidr == "" ? aws_default_vpc.default_vpc.*.cidr_block[0] : ingress.value.cidr]
    }
  }

  egress {
    from_port   = "0"
    to_port     = "0"
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${terraform.workspace}-worker"
  }
}

