resource "aws_instance" "swarm_manager" {
  count                       = "${var.aws_provider == "AWS" ? 1 : 0}"
  key_name                    = "AWS"
  ami                         = "${var.aws_ami}"
  instance_type               = "${var.aws_manager_instance_type}"
  security_groups             = ["${aws_security_group.swarm_manager.name}"]
  associate_public_ip_address = true

  connection {
    type        = "ssh"
    user        = "${var.aws_ssh_user}"
    private_key = "${file("secrets/aws.pem")}"
    timeout     = "30s"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo mkdir -p /etc/systemd/system/docker.service.d",
    ]
  }

  provisioner "file" {
    source      = "configs/manager.tpl"
    destination = "/tmp/manager.tpl"
  }

  provisioner "file" {
    source      = "scripts/"
    destination = "/tmp"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash -c \"sed -e 's/SWARM_MANAGER_PRIVATE_IP/${self.private_ip}/g' /tmp/manager.tpl > /etc/systemd/system/docker.service.d/docker.conf\"",
      "sudo chmod +x /tmp/install-docker.sh",
      "sudo /tmp/install-docker.sh ${var.aws_docker_version}",
      "sudo chmod +x /tmp/install-docker-compose.sh",
      "sudo /tmp/install-docker-compose.sh ${var.aws_docker_compose_version}",
      "sudo docker swarm init --advertise-addr ${self.private_ip} --listen-addr ${self.private_ip}:2377",
    ]
  }

  tags {
    Name = "${terraform.workspace}-manager"
  }
}
