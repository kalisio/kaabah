resource "aws_security_group" "security_group_manager" {
  count       = var.AWS ? 1 : 0
  name        = "${terraform.workspace}-manager"

  ingress {
    from_port   = 2376
    to_port     = 2376
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 2377
    to_port     = 2377
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 7946
    to_port     = 7946
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 7946
    to_port     = 7946
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 4789
    to_port     = 4789
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24007 
    to_port     = 24007 
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24007
    to_port     = 24007
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24008 
    to_port     = 24008 
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24008
    to_port     = 24008
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 49152 
    to_port     = 49152 
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 49152
    to_port     = 49152
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = "80"
    to_port     = "80"
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = "443"
    to_port     = "443"
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]] 
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

resource "aws_security_group" "security_group_worker" {
  count       = var.AWS ? 1 : 0
  name        = "${terraform.workspace}-worker"

  ingress {
    from_port   = 2377
    to_port     = 2377
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 7946
    to_port     = 7946
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 7946
    to_port     = 7946
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 4789
    to_port     = 4789
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24007 
    to_port     = 24007 
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }
  
  ingress {
    from_port   = 24007
    to_port     = 24007
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24008 
    to_port     = 24008 
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 24008
    to_port     = 24008
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 49152 
    to_port     = 49152 
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 49152
    to_port     = 49152
    protocol    = "udp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [aws_default_vpc.default_vpc.*.cidr_block[0]]
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

