# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy" {
	count = "${var.instance_count}"

  provisioner "file" {
    source      = "docker-compose.yml"
    destination = "/root/docker-compose.yml"
    connection {
	    type = "ssh"
	    user = "root"
	    private_key = "${file("ssh.pem")}"
	    host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
	    timeout = "30s"
	  }
  }
  provisioner "file" {
    source      = "docker-compose.whoami.yml"
    destination = "/root/docker-compose.whoami.yml"
    connection {
      type = "ssh"
      user = "root"
      private_key = "${file("ssh.pem")}"
      host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
      timeout = "30s"
    }
  }
  provisioner "file" {
    source      = "traefik.toml"
    destination = "/root/traefik.toml"
    connection {
	    type = "ssh"
	    user = "root"
	    private_key = "${file("ssh.pem")}"
	    host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
	    timeout = "30s"
	  }
  }

  provisioner "remote-exec" {
    inline = [
    	"docker network create traefik",
      "docker-compose -f docker-compose.yml -f docker-compose.whoami.yml up -d"
    ]
    connection {
	    type = "ssh"
	    user = "root"
	    private_key = "${file("ssh.pem")}"
	    host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
	    timeout = "30s"
	  }
  }
}
