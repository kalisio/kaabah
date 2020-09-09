resource "aws_eip_association" "manager" {
  count       = var.AWS && length(var.manager_ips) > 0 ? var.manager_instance_count : 0
  instance_id = aws_instance.manager.*.id[count.index]
  public_ip   = var.manager_ips[count.index]
}