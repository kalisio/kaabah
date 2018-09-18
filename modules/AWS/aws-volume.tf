resource "aws_ebs_volume" "swarm_volume" {
  count             = "${var.provider == "AWS" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  availability_zone = "${var.availability_zone}"
  size              = "${var.worker_additional_volume_size}"
  type              = "${var.worker_additional_volume_type}"

  tags {
    Name = "${terraform.workspace}-volume-${count.index}"
  }
}

resource "aws_volume_attachment" "swarm_volume_attachement" {
  count       = "${var.provider == "AWS" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  device_name = "${var.device_names[count.index % var.worker_additional_volume_count]}"
  instance_id = "${aws_instance.swarm_worker.*.id[count.index / var.worker_additional_volume_count]}"
  volume_id   = "${aws_ebs_volume.swarm_volume.*.id[count.index]}"
  force_detach = true

  provisioner "remote-exec" {
    inline = [
      "sudo sh /tmp/mount-volume.sh ${replace(self.device_name, "s", "xv")} DATA${count.index % var.worker_additional_volume_count}",
    ]

    connection {
      type = "ssh"
      user = "${var.ssh_user}"
      private_key = "${file(var.ssh_key)}"
      host = "${aws_instance.swarm_worker.*.public_ip[count.index / var.worker_additional_volume_count]}"
    }
  }
}

