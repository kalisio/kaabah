resource "aws_security_group" "swarm_manager" {
  count       = "${var.aws_provider == "AWS" ? 1 : 0}"
  name        = "swarm"
  description = "Allow all traffic"

  ingress {
    from_port   = 5
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags {
    Name = "Swarm"
  }
}
