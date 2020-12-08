(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(e,t,a){"use strict";a.r(t);var o=a(27),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-variables"}},[e._v("#")]),e._v(" Configuration variables")]),e._v(" "),a("h2",{attrs:{id:"providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providers"}},[e._v("#")]),e._v(" Providers")]),e._v(" "),a("h3",{attrs:{id:"scaleway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaleway"}},[e._v("#")]),e._v(" Scaleway")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("SCW_ORGNIZATION_ID")])]),e._v(" "),a("td",[e._v("Your "),a("strong",[e._v("Scaleway")]),e._v(" organization id")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("SCW_ACCESS_KEY")])]),e._v(" "),a("td",[e._v("Your "),a("strong",[e._v("Scaleway")]),e._v(" access key")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("SCW_SECRET_KEY")])]),e._v(" "),a("td",[e._v("Your "),a("strong",[e._v("Scaleway")]),e._v(" secret key")])])])]),e._v(" "),a("h3",{attrs:{id:"aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[e._v("#")]),e._v(" AWS")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("AWS_ACCESS_KEY")])]),e._v(" "),a("td",[e._v("Your "),a("strong",[e._v("AWS")]),e._v(" access key. This is important to note that your credential must allows access to "),a("strong",[e._v("AWS EC2")]),e._v(" and "),a("strong",[e._v("S3")]),e._v(" services")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("AWS_SECRET_KEY")])]),e._v(" "),a("td",[e._v("Your "),a("strong",[e._v("AWS")]),e._v(" secret key")])])])]),e._v(" "),a("h3",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[e._v("#")]),e._v(" Provider")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("cloud_provider")])]),e._v(" "),a("td",[e._v("The provider to host the infrastructure. It must be "),a("code",[e._v("AWS")]),e._v(", "),a("code",[e._v("OVH")]),e._v(" or "),a("code",[e._v("SCW")]),e._v(". There is no default value.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("region")])]),e._v(" "),a("td",[e._v("The region to host the infrastructure. There is no default value. The default value for "),a("strong",[e._v("AWS")]),e._v(" is "),a("code",[e._v("eu-central-1")]),e._v(", for "),a("strong",[e._v("OVH")]),e._v(" is "),a("code",[e._v("GRA5")]),e._v(" and for "),a("strong",[e._v("Scaleway")]),e._v(" is "),a("code",[e._v("fr-par")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("availability_zone")])]),e._v(" "),a("td",[e._v("The availability zone to host the infrastructure. On "),a("strong",[e._v("AWS")]),e._v(" and "),a("strong",[e._v("Scaleway")]),e._v(", the default value is set to the first availability zone of the specified region. For instance, if you provide the "),a("code",[e._v("eu-central-1")]),e._v(" region on "),a("strong",[e._v("AWS")]),e._v(", the default value will be "),a("code",[e._v("eu-central-1a")]),e._v(", and if you provide the region "),a("code",[e._v("fr-par")]),e._v(" on "),a("strong",[e._v("Scaleway")]),e._v(" the default value will be "),a("code",[e._v("fr-par-1")])])])])]),e._v(" "),a("h2",{attrs:{id:"network"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[e._v("#")]),e._v(" Network")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("ssh_user")])]),e._v(" "),a("td",[e._v("The user to get connected to the instances. On "),a("strong",[e._v("Scaleway")]),e._v(" the default value is "),a("code",[e._v("root")]),e._v(" and on "),a("strong",[e._v("AWS")]),e._v(" and "),a("strong",[e._v("OVH")]),e._v(" the default value is "),a("code",[e._v("ubuntu")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("ssh_key")])]),e._v(" "),a("td",[e._v("The path to the the ssh key required to get connected to the instances. There is no default value.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bastion_ip")])]),e._v(" "),a("td",[e._v("The IP address of the bastion to be used. The default value is the value of the "),a("code",[e._v("manager_ip")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bastion_ssh_user")])]),e._v(" "),a("td",[e._v("The user to be used to get connected to the bastion. The default value is the value of the "),a("code",[e._v("ssh_user")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("bastion_ssh_key")])]),e._v(" "),a("td",[e._v("The private key to be used to get connected to the bastion. The default value is the value of the "),a("code",[e._v("ssh_key")]),e._v(" variable.")])])])]),e._v(" "),a("h2",{attrs:{id:"instances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instances"}},[e._v("#")]),e._v(" Instances")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("gluster_share_volume_mount_point")])]),e._v(" "),a("td",[e._v("The mount point used to mount the volume "),a("strong",[e._v("share")]),e._v(" created by "),a("strong",[e._v("Gluster")]),e._v(". The default value is "),a("code",[e._v("/mnt/share")]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("rclone_conf")])]),e._v(" "),a("td",[e._v("The path to the "),a("strong",[e._v("rclone")]),e._v(" configuration you want to provision on the nodes. The default values is "),a("code",[e._v('""')]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("user_script")])]),e._v(" "),a("td",[e._v("The user scripts to be executed when the instances are created. It must be the file path to the script. Refer to the section "),a("RouterLink",{attrs:{to:"/docs/guides/advanced-usage.html#using-user-script"}},[e._v("Using user script")]),e._v(" to learn more. The default value is ``.")],1)])])]),e._v(" "),a("h3",{attrs:{id:"manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manager"}},[e._v("#")]),e._v(" Manager")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("manager_instance_type")])]),e._v(" "),a("td",[e._v("The instance type of the manager instances. It must be a X86 64bits architecture and it depends on the provider. There is no default value.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("manager_instance_count")])]),e._v(" "),a("td",[e._v("The number of manager instances. The default value is "),a("code",[e._v("1")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("manager_additional_volume_size")])]),e._v(" "),a("td",[e._v("The size in giga bytes of the additional volume. You must provide a size larger than "),a("code",[e._v("0")]),e._v(" to setup an additional volume. The default value is "),a("code",[e._v("0")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("manager_additional_volume_type")])]),e._v(" "),a("td",[e._v("The type of additional volumes to add. This option only works on AWS. The different "),a("a",{attrs:{href:"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("types"),a("OutboundLink")],1),e._v(" are "),a("code",[e._v("gp2")]),e._v(", "),a("code",[e._v("io1")]),e._v(", "),a("code",[e._v("st1")]),e._v(" and "),a("code",[e._v("sc1")]),e._v(". The default value is "),a("code",[e._v("sc1")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("manager_additional_volume_mount_point")])]),e._v(" "),a("td",[e._v("The mount point used to mount the devices. The default value is "),a("code",[e._v("/mnt/data")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("manager_ips")])]),e._v(" "),a("td",[e._v("If defined, it represents the IP addressed to be retrieved and attached to each managers. On "),a("strong",[e._v("Scaleway")]),e._v(" it must be the IDs of a "),a("a",{attrs:{href:"https://www.scaleway.com/en/faq/servers/network/#-What-is-a-flexible-IP-address",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexible IP"),a("OutboundLink")],1),e._v(", on "),a("strong",[e._v("AWS")]),e._v(" the address of an "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elastic IP"),a("OutboundLink")],1),e._v(" and on "),a("strong",[e._v("OVH")]),e._v(" the address of a "),a("a",{attrs:{href:"https://www.ovhcloud.com/en/bare-metal/ip/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Floating IP"),a("OutboundLink")],1),e._v(". If undefined, the managers are assigned a public IP defined by the provider.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("manager_crontabs")])]),e._v(" "),a("td",[e._v("The crontabs file to be provisioned on the managers. The default value is "),a("code",[e._v("[]")]),e._v(".")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("On "),a("strong",[e._v("Scaleway")]),e._v(" the ID of a flexible IP can be retrieved using the "),a("code",[e._v("More info")]),e._v(" entry of the overflow menu assigned to this flexible IP.")])]),e._v(" "),a("h3",{attrs:{id:"workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workers"}},[e._v("#")]),e._v(" Workers")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("worker_instance_type")])]),e._v(" "),a("td",[e._v("The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("worker_instance_count")])]),e._v(" "),a("td",[e._v("The number of worker instances. The default value is "),a("code",[e._v("0")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("worker_additional_volume_size")])]),e._v(" "),a("td",[e._v("The size in giga bytes of the additional volume. You must provide a size larger than "),a("code",[e._v("0")]),e._v(" to setup an additional volume. The default value is "),a("code",[e._v("0")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("worker_additional_volume_type")])]),e._v(" "),a("td",[e._v("The type of additional volumes to add. This option only works on AWS. The different "),a("a",{attrs:{href:"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("types"),a("OutboundLink")],1),e._v(" are "),a("code",[e._v("gp2")]),e._v(", "),a("code",[e._v("io1")]),e._v(", "),a("code",[e._v("st1")]),e._v(" and "),a("code",[e._v("sc1")]),e._v(". The default value is "),a("code",[e._v("sc1")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("worker_additional_volume_mount_point")])]),e._v(" "),a("td",[e._v("The mount point used to mount the devices. The default value is "),a("code",[e._v("/mnt/data")])])])])]),e._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Variables")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("docker_version")])]),e._v(" "),a("td",[e._v("The version of the Docker engine to be installed. The available versions can be obtained using the command "),a("code",[e._v("apt-cache madison docker-ce")]),e._v(" . The default value is "),a("code",[e._v("5:19.03.2~3-0~ubuntu-bionic")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("docker_tls_ca_key")])]),e._v(" "),a("td",[e._v("The path to the CA private key. The default value is "),a("code",[e._v("ca.key")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("docker_tls_ca_cert")])]),e._v(" "),a("td",[e._v("The path to the CA public key. The default value is "),a("code",[e._v("ca.cert")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("docker_tls_ca_pass")])]),e._v(" "),a("td",[e._v("The path to the CA passphrase file. The default value is "),a("code",[e._v("ca.pass")])])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);