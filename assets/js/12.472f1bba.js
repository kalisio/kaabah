(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{185:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("table",[e._m(10),e._v(" "),r("tbody",[e._m(11),e._v(" "),e._m(12),e._v(" "),r("tr",[e._m(13),e._v(" "),r("td",[e._v("The "),r("strong",[e._v("Let's Encrypt")]),e._v(" server to generate certificates. The default value is empty to let traefik manage for you. However and because "),r("strong",[e._v("Let's Encrypt")]),e._v(" provides "),r("a",{attrs:{href:"https://letsencrypt.org/docs/rate-limits/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rate limits"),r("OutboundLink")],1),e._v(" it is recommended to set this value to "),r("code",[e._v("https://acme-staging-v02.api.letsencrypt.org/directory")]),e._v(" when testing your infrastructure.")])]),e._v(" "),r("tr",[e._m(14),e._v(" "),r("td",[e._v("A certificates file if you want to reuse generated certificates. It may be useful to avoid reaching "),r("strong",[e._v("Let's Encrypt")]),e._v(" "),r("a",{attrs:{href:"https://letsencrypt.org/docs/rate-limits/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rate limits"),r("OutboundLink")],1),e._v(" when regenerating an infrastructure. You are responsible of retrieving the "),r("code",[e._v("acme.json")]),e._v(" file from the previous infrastructure before deleting it.")])]),e._v(" "),e._m(15)])]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),r("table",[e._m(22),e._v(" "),r("tbody",[e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),r("tr",[e._m(27),e._v(" "),r("td",[e._v("The type of additional volumes to add. This option only works on AWS. The different "),r("a",{attrs:{href:"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/EBSVolumeTypes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("types"),r("OutboundLink")],1),e._v(" are "),r("code",[e._v("gp2")]),e._v(", "),r("code",[e._v("io1")]),e._v(", "),r("code",[e._v("st1")]),e._v(" and "),r("code",[e._v("sc1")]),e._v(". The default value is "),r("code",[e._v("sc1")])])]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30)])]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),r("table",[e._m(34),e._v(" "),r("tbody",[e._m(35),e._v(" "),r("tr",[e._m(36),e._v(" "),r("td",[e._v("Your authentication password to access the services. It can be encoded in "),r("strong",[e._v("MD5")]),e._v(", "),r("strong",[e._v("SHA1")]),e._v(" and "),r("strong",[e._v("BCrypt")]),e._v(": you can use "),r("a",{attrs:{href:"http://www.htaccesstools.com/htpasswd-generator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("htpasswd"),r("OutboundLink")],1),e._v(" to generate it. There is no default value.")])]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"configuration-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"providers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#providers","aria-hidden":"true"}},[this._v("#")]),this._v(" Providers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"scaleway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scaleway","aria-hidden":"true"}},[this._v("#")]),this._v(" Scaleway")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variables")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("SCALEWAY_ACCESS_KEY")])]),e._v(" "),r("td",[e._v("Your "),r("strong",[e._v("Scaleway")]),e._v(" access key")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("SCALEWAY_TOKEN")])]),e._v(" "),r("td",[e._v("Your "),r("strong",[e._v("Scaleway")]),e._v(" token")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"aws"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws","aria-hidden":"true"}},[this._v("#")]),this._v(" AWS")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variables")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("AWS_ACCESS_KEY")])]),e._v(" "),r("td",[e._v("Your "),r("strong",[e._v("AWS")]),e._v(" access key. This is important to note that your credential must allows access to "),r("strong",[e._v("AWS EC2")]),e._v(" and "),r("strong",[e._v("S3")]),e._v(" services")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("AWS_SECRET_KEY")])]),e._v(" "),r("td",[e._v("Your "),r("strong",[e._v("AWS")]),e._v(" secret key")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provider","aria-hidden":"true"}},[this._v("#")]),this._v(" Provider")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variables")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("provider")])]),e._v(" "),r("td",[e._v("The provider to host the infrastructure. It must be "),r("code",[e._v("AWS")]),e._v(" or "),r("code",[e._v("Scaleway")]),e._v(". There is no default value.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("region")])]),e._v(" "),r("td",[e._v("The region to host the infrastructure. There is no default value.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("availability_zone")])]),e._v(" "),r("td",[e._v("The availability zone to host the infrastructure. This variable is ignored in the case of "),r("strong",[e._v("Scaleway")]),e._v(". On "),r("strong",[e._v("AWS")]),e._v(", the default value is set to the first AZ of the specified region. For instance, if you provide the "),r("code",[e._v("eu-central-1")]),e._v(" region, the default value will be "),r("code",[e._v("eu-central-1a")]),e._v(".")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster","aria-hidden":"true"}},[this._v("#")]),this._v(" Cluster")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing","aria-hidden":"true"}},[this._v("#")]),this._v(" Routing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Variables")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("domain")])]),this._v(" "),t("td",[this._v("The domain to be added to the traefik rules. There is no default value.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[r("code",[e._v("subdomain")])]),e._v(" "),r("td",[e._v("The subdomain to be added to the traefik rules. By default, the value will be computed from the Terraform workspace name by replacing each "),r("code",[e._v("-")]),e._v(" by "),r("code",[e._v(".")]),e._v(". For instance, the subdomain for the workspace "),r("code",[e._v("app-dev")]),e._v(" will be "),r("code",[e._v("app.dev.domain")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("ca_server")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("acme_file")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("contact")])]),this._v(" "),t("td",[this._v("The email contact provided to Let's Encrypt when generating certificates. The default value is "),t("code",[this._v("contact@kalisio.com")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variables")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("ssh_user")])]),e._v(" "),r("td",[e._v("The user to get connected to the instances. on "),r("strong",[e._v("Scaleway")]),e._v(" the default value is "),r("code",[e._v("root")]),e._v(" and on "),r("strong",[e._v("AWS")]),e._v(" the default value is "),r("code",[e._v("ubuntu")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("ssh_key")])]),e._v(" "),r("td",[e._v("The path to the the ssh key required to get connected to the instances. There is no default value.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("key_name")])]),e._v(" "),r("td",[e._v("The name of the ssh key to be used when creating the instance. The default value is "),r("code",[e._v('""')]),e._v(". This variable is ignored for "),r("strong",[e._v("Scaleway")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("bastion_ip")])]),e._v(" "),r("td",[e._v("The IP address of the bastion to be used. The default value is the value of the "),r("code",[e._v("manager_ip")]),e._v(" variable.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("bastion_ssh_user")])]),e._v(" "),r("td",[e._v("The user to be used to get connected to the bastion. The default value is the value of the "),r("code",[e._v("ssh_user")]),e._v(" variable.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("bastion_ssh_key")])]),e._v(" "),r("td",[e._v("The private key to be used to get connected to the bastion. The default value is the value of the "),r("code",[e._v("ssh_key")]),e._v(" variable.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Swarm")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Manager")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variables")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("manager_instance_type")])]),e._v(" "),r("td",[e._v("The instance type of the Docker Swarm manager. It must be a X86 64bits architecture and it depends on the provider. There is no default value.")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("manager_labels")])]),e._v(" "),r("td",[e._v("The labels to add to the manager node. Labels are defined using a set of "),r("em",[e._v("key=value")]),e._v(" pairs separated with spaces. The default value is "),r("code",[e._v('""')]),e._v(".")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("manager_crontab")])]),e._v(" "),r("td",[e._v("The crontab file to be provisioned on the manger. The default value is "),r("code",[e._v('""')]),e._v(".")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("manager_user_script")])]),e._v(" "),r("td",[e._v("The user script to be executed when when the manager is ready. It must be the file path to the script. The default value is "),r("code",[e._v('""')]),e._v(".")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workers","aria-hidden":"true"}},[this._v("#")]),this._v(" Workers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Variables")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_instance_type")])]),this._v(" "),t("td",[this._v("The instance type of the Docker Swarm workers. It must be a X86 64bits architecture and it depends on the provider. There is no default value")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_instance_count")])]),this._v(" "),t("td",[this._v("The number of worker instances. The default value is "),t("code",[this._v("1")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_additional_volume_count")])]),this._v(" "),t("td",[this._v("The number of volumes attached to each worker. The default value is "),t("code",[this._v("0")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_additional_volume_size")])]),this._v(" "),t("td",[this._v("The size in giga bytes of the additional volumes. Note that on Scaleway you are limited to 150GB and the minimum size is 50GB. Moreover, you can add volumes to bare-metal instances only. The default value is "),t("code",[this._v("150")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("worker_additional_volume_type")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_additional_volume_mount_point")])]),this._v(" "),t("td",[this._v("The mount point used to mount the devices. The prefix "),t("code",[this._v("/dev/")]),this._v(" is automatically added and the default value is "),t("code",[this._v("data")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[r("code",[e._v("worker_labels")])]),e._v(" "),r("td",[e._v("The labels to add to the different worker nodes. Labels are defined using a set of "),r("em",[e._v("key=value")]),e._v(" pairs separated with spaces. Labels for each workers are declared using a list, e.g. "),r("code",[e._v('["worker0:true", "worker1:true", ...]')]),e._v(". The default value is "),r("code",[e._v("[]")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("worker_user_scripts")])]),this._v(" "),t("td",[this._v("The scripts to be executed once the workers are ready. It must be a list of file paths. The default value is "),t("code",[this._v("[]")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Variables")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("docker_version")])]),e._v(" "),r("td",[e._v("The version of the Docker engine to be installed. The default value is "),r("code",[e._v("18.06.1ce3-0~ubuntu")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("docker_network")])]),e._v(" "),r("td",[e._v("The name of the Docker network to be created. The default value is "),r("code",[e._v("kaabah")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("docker_tls_ca_key")])]),e._v(" "),r("td",[e._v("The path to the CA private key. The default value is "),r("code",[e._v("ca.key")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("docker_tls_ca_cert")])]),e._v(" "),r("td",[e._v("The path to the CA public key. The default value is "),r("code",[e._v("ca.cert")])])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("docker_tls_ca_pass")])]),e._v(" "),r("td",[e._v("The path to the CA passphrase file. The default value is "),r("code",[e._v("ca.pass")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services","aria-hidden":"true"}},[this._v("#")]),this._v(" Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Variables")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("auth_user")])]),this._v(" "),t("td",[this._v("Your authentication identity to access the services. There is no default value.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("td",[t("code",[this._v("auth_password")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("slack_webhook_url")])]),this._v(" "),t("td",[this._v("The URL to the slack webhook. The Default value is "),t("code",[this._v('""')]),this._v(". If you do not provide any value you must override the "),t("strong",[this._v("AlertManager")]),this._v(" configuration through the extensions.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[r("code",[e._v("slack_channel")])]),e._v(" "),r("td",[e._v("The channel or user to send notifications to. Note that you must escape the "),r("code",[e._v("#")]),e._v(" character by adding "),r("code",[e._v("\\\\")]),e._v(" before it. The Default value is "),r("code",[e._v('"\\\\#alerts"')]),e._v(". If you do not provide any value you must override the "),r("strong",[e._v("AlertManager")]),e._v(" configuration through the extensions.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[t("code",[this._v("extensions_dir")])]),this._v(" "),t("td",[this._v("The directory to provision to extend the services. The default value is "),t("code",[this._v('""')]),this._v(".")])])}],!1,null,null,null);t.default=s.exports}}]);