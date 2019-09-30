(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{179:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("Kaabah")]),t._v(" relies on various technologies such as "),a("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terraform"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://docs.docker.com/engine/swarm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Swarm"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://traefik.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traefik"),a("OutboundLink")],1),t._v("... and we assume that you are enough familiar with them. If not, please take a while to discover them.")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("You must have "),a("strong",[t._v("Terraform")]),t._v(" installed on your computer. For now "),a("strong",[t._v("Kaabah")]),t._v(" requires the "),a("code",[t._v("0.11.12")]),t._v(" version of Terraform. Please refer to the "),a("a",{attrs:{href:"https://learn.hashicorp.com/terraform/getting-started/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official guide"),a("OutboundLink")],1),t._v(" to install "),a("strong",[t._v("Terraform")]),t._v(".")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("In addition, "),a("strong",[t._v("Kaabah")]),t._v(" makes the assumption you already have a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bastion_host",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Bastion")]),a("OutboundLink")],1),t._v(" installed for each providers. You must provide the information to access the bastions:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("You can use the following "),a("a",{attrs:{href:"https://gist.github.com/cnouguier/c5cb4ba99ad45bced4476e2d175342a1",target:"_blank",rel:"noopener noreferrer"}},[t._v("script"),a("OutboundLink")],1),t._v(" to create these files.")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("You must have the credentials set to access the desired bucket on AWS S3 otherwise "),a("strong",[t._v("Terraform")]),t._v(" won't initialize.\nIf needed, follow this "),a("a",{attrs:{href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("guide"),a("OutboundLink")],1),t._v(" to set up your credentials.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("OVH")]),t._v(" module relies on the "),a("a",{attrs:{href:"https://www.terraform.io/docs/providers/openstack/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenStack provider"),a("OutboundLink")],1),t._v(", thus you need to provide the\n"),a("strong",[t._v("OpenStack")]),t._v(" credentials only:")]),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Define the "),a("a",{attrs:{href:"https://www.terraform.io/docs/backends/types/s3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3 backend"),a("OutboundLink")],1),t._v(" properties")])]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("ACME certificates")]),t._v(" "),a("p",[t._v("To ensure ACME certificates generation, "),a("strong",[t._v("traefik")]),t._v(" has to be reachable by "),a("strong",[t._v("Let's Encrypt")]),t._v(" through port 80. You can refer to "),a("a",{attrs:{href:"https://docs.traefik.io/configuration/acme/#httpchallenge",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACME configuration (httpChallenge)"),a("OutboundLink")],1),t._v(" for further information.")]),t._v(" "),t._m(33)]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),a("p",[t._v("Within your workspace, apply Terraform with your specific configuration:")]),t._v(" "),t._m(41),a("p",[t._v("After a while, your cluster should be created and the corresponding Terraform states stored in your S3 backend.")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),a("p",[t._v("To destroy the created infrastructure, you can simply type the following command:")]),t._v(" "),t._m(46)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"terraform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terraform","aria-hidden":"true"}},[this._v("#")]),this._v(" Terraform")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#providers","aria-hidden":"true"}},[this._v("#")]),this._v(" Providers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"account-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#account-authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" Account authentication")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enable "),e("strong",[this._v("Terraform")]),this._v(" to exploit the providers APIs, you must have created an account on the various providers and be aware of your credentials to access the APIs.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"instances-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instances-authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" Instances authentication")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When running "),e("strong",[this._v("Kaabah")]),this._v(" and to get connected to your instances, you must be aware of the private SSH keys to access the instances. These keys are generally created using the providers functionalities.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("the public IP")]),this._v(" "),e("li",[this._v("the SSH private key")]),this._v(" "),e("li",[this._v("the SSH user")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network","aria-hidden":"true"}},[this._v("#")]),this._v(" Network")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Because each of the cloud providers do not offer the same solutions regarding the network, there are some specificities to take into account. Mainly, to use the "),a("strong",[t._v("OVH")]),t._v(" module, it is necessary beforehand to create a private network named "),a("strong",[t._v("Private-Net")]),t._v(" and a subnet named "),a("strong",[t._v("Private-Subnet")]),t._v(". In the other hand, you can assign to the subnet the "),a("strong",[t._v("CIDR")]),t._v(" of your choice, "),a("strong",[t._v("Kaabah")]),t._v(" will retrieve it.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"docker-tls-certificate-authority"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-tls-certificate-authority","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker TLS Certificate Authority")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Kaabah")]),this._v(" ensures TLS authentication for Docker daemon and requires a Certificate Authority (CA). The following files are required to run "),e("strong",[this._v("Kaabah")]),this._v(":")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("the CA private key: "),a("code",[t._v("ca.key")])]),t._v(" "),a("li",[t._v("the CA public key: "),a("code",[t._v("ca.cert")])]),t._v(" "),a("li",[t._v("the CA passphrase file: "),a("code",[t._v("ca.pass")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"terraform-backend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#terraform-backend","aria-hidden":"true"}},[this._v("#")]),this._v(" Terraform backend")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"clone-the-github-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-github-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Clone the Github repository")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/kalisio/kaabah.git\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" kaabah\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setup-your-terraform-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-your-terraform-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup your Terraform environment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Security")]),this._v(" "),e("p",[this._v("Hard-coding credentials into any "),e("strong",[this._v("Terraform")]),this._v(" configuration is not recommended, and risks secret leakage should this file ever be committed to a public version control system.\nWe strongly recommend to store the credentials using environment variables.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Define your "),e("strong",[this._v("Scaleway")]),this._v(" credentials")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$export")]),t._v(" TF_VAR_SCALEWAY_ORGANIZATION"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<ORGANIZATION-ID>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$export")]),t._v(" TF_VAR_SCALEWAY_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<ACCESS-TOKEN>"')]),t._v(" \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Define your "),e("strong",[this._v("AWS")]),this._v(" credentials")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$export")]),t._v(" TF_VAR_AWS_ACCESS_KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<ACCESS-KEY>"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$export")]),t._v(" TF_VAR_AWS_SECRET_KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<SECRET-KEY>"')]),t._v(" \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Define your "),e("strong",[this._v("OVH")]),this._v(" credentials")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" OS_AUTH_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://auth.cloud.ovh.net/v3"')]),t._v(" // authentication URL\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" OS_TENANT_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<TENANT-ID>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Horizon project ID")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" OS_TENANT_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<TENANT-NAME>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Horizon project name")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" OS_USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<USERNAME>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Horizon username")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" OS_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<PASSWORD>"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Horizon password")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Define your bastions configuration")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TF_VAR_bastion_ips")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ AWS = "X.X.X.X", SCW = "Y.Y.Y.Y", OVH = "Z.Z.Z.Z" }\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TF_VAR_bastion_ssh_keys")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ AWS = "aws.pem", SCW = "scw.pem", OVH = "ovh.pem" }\'')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$TF_VAR_bastion_ssh_users")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ AWS = "user", SCW = "user", OVH = "user" }\'')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a file "),e("code",[this._v("backend.config")]),this._v(" with the following properties:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('bucket = "the name of the bucket"\nregion = "the region of the bucket"\nkey    = "the key to the states"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("Initialize Terraform")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" init -backend-config"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"path/to/your/backend.config"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please take care your DNS is correctly configured. A "),e("strong",[this._v("A Record")]),this._v(" should map your domain to the Swarm manager IP address.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"create-a-workspace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-workspace","aria-hidden":"true"}},[this._v("#")]),this._v(" Create a workspace")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" workspace new demo\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Terraform will automatically switch to the created workspace "),e("code",[this._v("demo")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configure-the-workspace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-workspace","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure the workspace")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We recommend to create a "),e("code",[this._v("tfvars")]),this._v(" file to override the default variables for your workspace. For instance, the "),e("code",[this._v("demo.tfvars")]),this._v(" file may look like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('provider = "AWS"\n\nregion = "eu-central-1"\n\ndomain = "kalisio.xyz"\n\nca_server = "https://acme-staging-v02.api.letsencrypt.org/directory"\n\n#acme_file = "tests/acme.json"\n\nauth_user = "admin"\n\nauth_password = "$apr1$5.zwyoj.$IBdA2H8cHHQtLPzm/9veL/"\n\nssh_key = "../workspaces/master/test-aws.pem"\n\nkey_name = "test-aws"\n\nmanager_instance_type = "t2.small"\n\nmanager_crontab = "tests/crontab"\n\nmanager_user_script = "tests/manager.sh"\n\nworker_instance_type = "t3.large"\n\nworker_instance_count = 2\n\nworker_additional_volume_count = 1\n\nworker_additional_volume_size = 500\n\nworker_additional_volume_type = "sc1"\n\nworker_additional_volume_mount_point = "data"\n\nworker_labels=["worker0=true apps=true", "worker1=true dbs=true"]\n\nworker_user_scripts=["tests/worker.sh", "tests/worker.sh"]\n\nextensions_dir = "tests/extensions"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"apply-the-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apply-the-changes","aria-hidden":"true"}},[this._v("#")]),this._v(" Apply the changes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" apply -var-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"path/to/your/config.tfvars"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"check-the-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-the-infrastructure","aria-hidden":"true"}},[this._v("#")]),this._v(" Check the infrastructure")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get connected to the manager of your infrastructure using "),e("code",[this._v("ssh")]),this._v(" and type the following commands:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ubuntu@test-aws-manager:~$ k-swarm-info\n\nNodes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-----\n\nID                              HOSTNAME                STATUS          ADDRESS         LABELS\n4ylkfx3vis3zlxqwvs7rcms0p       test-aws-manager        Ready/Active    172.31.25.252\nsvpnq8a71v90hu7ir6ng7335d       test-aws-worker-0       Ready/Active    172.31.21.238   apps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true worker0"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\njwgud49dpjvxfdkgnfa1we9la       test-aws-worker-1       Ready/Active    172.31.19.239   dbs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true worker1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\nStacks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("------\n\nNAME            SERVICES\nkaabah          8\n\nServices "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("------\n\nID                  NAME                   MODE                REPLICAS            IMAGE                        PORTS\nimt4640a55sa        kaabah_alertmanager    replicated          1/1                 prom/alertmanager:v0.17.0\n2dk1t5jaeleq        kaabah_cadvisor        global              3/3                 google/cadvisor:v0.33.0\n3moom2hbx8o7        kaabah_grafana         replicated          1/1                 grafana/grafana:6.1.6\ns1m29d7c51zw        kaabah_node-exporter   global              3/3                 prom/node-exporter:v0.17.0\ny1zm0h699q60        kaabah_prometheus      replicated          1/1                 prom/prometheus:v2.9.2\n1fwm7sexsz4k        kaabah_pushgateway     replicated          1/1                 prom/pushgateway:v0.8.0\nwa262dqh51qt        kaabah_registry        replicated          1/1                 registry:2                   *:5000-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("5000/tcp\na8xhmu9k7jbq        kaabah_traefik         replicated          1/1                 traefik:1.7-alpine\n\nContainers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-----\n\n\ntest-aws-manager\nID              NAMES   STATUS\n0eb9d385fc74    kaabah_grafana.1.u42yijzrl7vhubfb4ufup4hgq      Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n7c8ad92974d4    kaabah_cadvisor.4ylkfx3vis3zlxqwvs7rcms0p.0bcnfte5qsr4zxvim4dvapywg     Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ne26ab0a9a84a    kaabah_traefik.1.kn2pnp5wm9s2kqsm7x7ukl0gt      Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na401aba300b1    kaabah_alertmanager.1.n424mme5cpqh1gbyqtwvn1cfi Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbf10a39ce027    kaabah_prometheus.1.tzoe5g0rfnodzq84h73elavoa   Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n3b5aeb22291a    kaabah_registry.1.41f8l2p5fh2kam5qx2mj8a2rk     Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb97a12b43694    kaabah_pushgateway.1.rbrtvtz3xcjy6uda7w6d3wdbz  Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n7cb96b612380    kaabah_node-exporter.4ylkfx3vis3zlxqwvs7rcms0p.ftmk23sinf18w5zhzp5fhg5yj        Up About an hour\n\ntest-aws-worker-0\nID              NAMES   STATUS\n0c483b70fedd    kaabah_cadvisor.svpnq8a71v90hu7ir6ng7335d.kfloir1m5cv012ogb5ck7wnhh     Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb3e1a4117807    kaabah_node-exporter.svpnq8a71v90hu7ir6ng7335d.4n71fp7vpvi7z0avzpkriuypv        Up About an hour\n\ntest-aws-worker-1\nID              NAMES   STATUS\n0168740c5c45    kaabah_cadvisor.jwgud49dpjvxfdkgnfa1we9la.qj55xvd5ugood47e7wz35mbgn     Up About an hour "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("healthy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n420e5b27bccb    kaabah_node-exporter.jwgud49dpjvxfdkgnfa1we9la.ihi62eehuwna6a1qxzjt9lx2g        Up About an hour\nubuntu@test-aws-manager:~$\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"destroy-the-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#destroy-the-infrastructure","aria-hidden":"true"}},[this._v("#")]),this._v(" Destroy the infrastructure")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$terraform")]),this._v(" apply -var-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"path/to/your/config.tfvars"')]),this._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);