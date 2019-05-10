resource "aws_ebs_volume" "swarm_worker_volume" {
  count             = "${var.provider == "AWS" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  availability_zone = "${var.availability_zone}"
  size              = "${var.worker_additional_volume_size}"
  type              = "${var.worker_additional_volume_type}"

  tags {
    Name = "${terraform.workspace}-volume-${count.index}"
  }
}

resource "aws_volume_attachment" "swarm_worker_volume_attachement" {
  count         = "${var.provider == "AWS" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"
  device_name   = "${var.device_names[count.index % var.worker_additional_volume_count]}"
  instance_id   = "${aws_instance.swarm_worker.*.id[count.index / var.worker_additional_volume_count]}"
  volume_id     = "${aws_ebs_volume.swarm_worker_volume.*.id[count.index]}"
  force_detach  = true
}

resource "null_resource" "swarm_worker_volume_mount" {
  count = "${var.provider == "AWS" ? var.worker_additional_volume_count * var.worker_instance_count : 0}"

  connection {
    type                = "ssh"
    bastion_host        = "${var.bastion_ip}"
    bastion_user        = "${var.bastion_ssh_user}"
    bastion_private_key = "${file(var.bastion_ssh_key)}"
    host                = "${aws_instance.swarm_worker.*.private_ip[count.index / var.worker_additional_volume_count]}"
    user                = "${var.ssh_user}"
    private_key         = "${file(var.ssh_key)}"
    timeout             = "${local.timeout}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo bash ~/.kaabah/mount-volume.sh ${local.worker_use_nvme_device ? var.nvme_devices[count.index % var.worker_additional_volume_count] : var.standard_devices[count.index % var.worker_additional_volume_count]} ${format("%s%d", var.worker_additional_volume_mount_point, count.index % var.worker_additional_volume_count)} $USER",
    ]
  }

  depends_on = ["aws_volume_attachment.swarm_worker_volume_attachement"]
}