# Create a null resource is a trick to ensure the commands are send on each apply
# Otherwise they are only run when provisioning new resources
resource "null_resource" "deploy" {
	count = "${var.instance_count}"

  provisioner "file" {
    source      = "docker-compose.yml"
    destination = "~/docker-compose.yml"
    connection {
	    type = "ssh"
	    user = "${var.SSH_USER}"
	    private_key = "${file("ssh.pem")}"
	    host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
	    timeout = "30s"
	  }
  }
  provisioner "file" {
    source      = "docker-compose.whoami.yml"
    destination = "~/docker-compose.whoami.yml"
    connection {
      type = "ssh"
      user = "${var.SSH_USER}"
      private_key = "${file("ssh.pem")}"
      host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
      timeout = "30s"
    }
  }
  provisioner "file" {
    source      = "traefik.toml"
    destination = "~/traefik.toml"
    connection {
	    type = "ssh"
	    user = "${var.SSH_USER}"
	    private_key = "${file("ssh.pem")}"
	    host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
	    timeout = "30s"
	  }
  }

  provisioner "remote-exec" {
    inline = [
    	"docker network create traefik",
      "echo INSTANCE_DOMAIN=${lookup(var.instance_domains, count.index + 1)} > .env",
      "docker-compose -f docker-compose.yml -f docker-compose.whoami.yml up -d"
    ]
    connection {
	    type = "ssh"
	    user = "${var.SSH_USER}"
	    private_key = "${file("ssh.pem")}"
	    host = "${element(scaleway_ip.instance_ip.*.ip, count.index)}"
	    timeout = "30s"
	  }
  }
}
