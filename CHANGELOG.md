#### 2.1.1 (2020-10-19)

##### Other Changes

* Failover ip must be set on eth0:0 (public interface), fixes [#166](https://github.com/kalisio/kaabah/pull/166) ([ed909447](https://github.com/kalisio/kaabah/commit/ed909447d9a635dcf7218e33e705c6f88d6915d7))

### 2.1.0 (2020-10-16)

##### New Features

*  Allow to configure the backend type (close [#164](https://github.com/kalisio/kaabah/pull/164)) [skip ci] ([61675175](https://github.com/kalisio/kaabah/commit/616751757d65120f5bfe2418ccf6c402b06febbc))
*  Remove unused key_name variable (close [#165](https://github.com/kalisio/kaabah/pull/165)) ([e798b12f](https://github.com/kalisio/kaabah/commit/e798b12f08ae5757d16235646083043614c290ad))
*  Use private ip to connect ovh instances (like with other providers). ([91c60cf6](https://github.com/kalisio/kaabah/commit/91c60cf6b8ed5ad461c38d585bf7a7def4875766))
  
##### Bug Fixes

*  Put kaabah tools in /usr/local/bin instead. ([8e03c525](https://github.com/kalisio/kaabah/commit/8e03c52582e7cabe709561dbccd9ea6c05ab8162))
*  Use Debian buster as base image, fixes [#162](https://github.com/kalisio/kaabah/pull/162) ([0473f148](https://github.com/kalisio/kaabah/commit/0473f148ec0a8477f94e367ed695a05387e75ca0))
*  Default additional volume size is wrong (close [#161](https://github.com/kalisio/kaabah/pull/161)) [skip test] ([1043276d](https://github.com/kalisio/kaabah/commit/1043276d240d08289c573eaa413aee1cc91ea22e))

## 2.0.0 (2020-09-14)

##### New Features

*  Upgrade to terraform 0.12 (close [#143](https://github.com/kalisio/kaabah/pull/143)) ([f6349785](https://github.com/kalisio/kaabah/commit/f63497857f724ce429ef2085ee1c9472e8b3bcc0))
*  Allow to attach additional volumes to the manager instances (close [#152](https://github.com/kalisio/kaabah/pull/152)) ([966b7bed](https://github.com/kalisio/kaabah/commit/966b7bed7217c255f766501cff9c8c129e2b47ca))
*  Bump Docker version to 19.03.12 (close [#157](https://github.com/kalisio/kaabah/pull/157)) feat: Bump Ubuntu version to 20.04 (close [#156](https://github.com/kalisio/kaabah/pull/156)) feat: Bump to AWS provider 2.70.0 (close [#155](https://github.com/kalisio/kaabah/pull/155)) ([69bff5f0](https://github.com/kalisio/kaabah/commit/69bff5f09bd9b20aef0b294c2fff1c05368c91e6))
*  Bump tp OpenStack provider 1.31.0 (close [#154](https://github.com/kalisio/kaabah/pull/154)) feat: Bump to AWS provider 2.70.0 (cloe [#155](https://github.com/kalisio/kaabah/pull/155)) ([15ebd5d3](https://github.com/kalisio/kaabah/commit/15ebd5d3b992a45c8701d6042a15f77905856f98))
*  Upgrade Scaleway module to support the 1.16.0 of the Scaleway provider (close [#153](https://github.com/kalisio/kaabah/pull/153)) ([7a557f58](https://github.com/kalisio/kaabah/commit/7a557f58c4ba5479a9688a590d087eb19815f2da))
*  Allow to create a cluster with multiple managers (close [#147](https://github.com/kalisio/kaabah/pull/147)) feat: Enhance tests with multiple cluster topologies (close [#151](https://github.com/kalisio/kaabah/pull/151)) ([35e989b0](https://github.com/kalisio/kaabah/commit/35e989b045b13cc1b9d089967ce0e1ad18ab5a43))
*  Use GlusterFS instead of SSHFS (close [#148](https://github.com/kalisio/kaabah/pull/148)) ([e1675322](https://github.com/kalisio/kaabah/commit/e1675322b8821eabbade83e35d0dd7404bdf6e19))
*  Enhance tests [#151](https://github.com/kalisio/kaabah/pull/151) ([e12a491a](https://github.com/kalisio/kaabah/commit/e12a491a05835f5dbe4bfb1cd447bc47d768b371))
*  Provide a helper command that limit the execution of a command on the leader only (close [#150](https://github.com/kalisio/kaabah/pull/150)) ([385f60ff](https://github.com/kalisio/kaabah/commit/385f60ffe3d94c6979f3806f0007cedcb23f73ac))

##### Bug Fixes

*  k-leader-exec issue ([0ce295eb](https://github.com/kalisio/kaabah/commit/0ce295eb2dbf6cdb4e09e0c89386955e402c17d5))
*  Remove unused variable docker_network (close [#146](https://github.com/kalisio/kaabah/pull/146)) ([8ece6249](https://github.com/kalisio/kaabah/commit/8ece624933018392d4660e7a26d4489dd11f655e))
*  k-swarm-prune does not prune volumes on workers (close [#140](https://github.com/kalisio/kaabah/pull/140)) [skip ci] ([dcb31958](https://github.com/kalisio/kaabah/commit/dcb31958a4fd8625dd75ab139e0b3d3c2f053d91))

### 1.1.0 (2020-02-18)

##### New Features

*  Stop using a default slack notification template (close [#138](https://github.com/kalisio/kaabah/pull/138)) [skip test] ([69a580f8](https://github.com/kalisio/kaabah/commit/69a580f8cb79515aa5f9a2a70bdde4948ca1b5b2))
*  Stop deploying the services when creating the cluster (close [#137](https://github.com/kalisio/kaabah/pull/137)) ([2b9e1fa5](https://github.com/kalisio/kaabah/commit/2b9e1fa5b053be4f45f437d0ff6f00b9c0032d60))

## 1.0.0 (2020-01-17)

##### New Features

*  Add a script to restart the services (close [#136](https://github.com/kalisio/kaabah/pull/136)) ([91be8016](https://github.com/kalisio/kaabah/commit/91be801610f4e60bdb5d22c65d658cd167a3a05c))

### 0.11.0 (2019-12-24)

##### New Features

*  Grafana swarm dashboard cpu panel must show data per tasks (close [#130](https://github.com/kalisio/kaabah/pull/130)) [skip ci] ([4e2df52f](https://github.com/kalisio/kaabah/commit/4e2df52f693a49a7c65578c78c20779a205d3f89))
*  Enhance Grafana cluster dashboard CPU/Load panels (close [#132](https://github.com/kalisio/kaabah/pull/132)) ([1f30e752](https://github.com/kalisio/kaabah/commit/1f30e752b353ad2a38c4766548bdf284ec40b613))
*  Enhance swarm check strategy (close [#133](https://github.com/kalisio/kaabah/pull/133)) ([0efae4f4](https://github.com/kalisio/kaabah/commit/0efae4f4369be1f57cab9a11d1ec3569bb7c0d81))
*  Enhance swarm check strategy (close [#133](https://github.com/kalisio/kaabah/pull/133)) [skip ci] ([abfd19b4](https://github.com/kalisio/kaabah/commit/abfd19b4692732facb373e3c4e6d8d04ae104ed4))
*  Enhance swarm check strategy (close [#133](https://github.com/kalisio/kaabah/pull/133)) [skip ci] ([563928af](https://github.com/kalisio/kaabah/commit/563928af56c1991622f780864dce4c8ad1c123dd))
*  Enhance swarm check strategy (close [#133](https://github.com/kalisio/kaabah/pull/133)) ([36562f28](https://github.com/kalisio/kaabah/commit/36562f2825bc02c2c7fb79bd99dc3fb3fc898d6c))
*  Enhance swarm check strategy (close [#133](https://github.com/kalisio/kaabah/pull/133)) [skip ci] ([89539126](https://github.com/kalisio/kaabah/commit/895391260490f843b04904e2a0ea05dbb9a8997c))
*  Rename k-service-check in k-service-status (close [#131](https://github.com/kalisio/kaabah/pull/131)) [skip ci] ([c0a3b6e3](https://github.com/kalisio/kaabah/commit/c0a3b6e32280373d593fbc6ca63d57a877ba3d63))

##### Bug Fixes

*  Cannot install libssl anymore (close [#134](https://github.com/kalisio/kaabah/pull/134)) ([2fc70604](https://github.com/kalisio/kaabah/commit/2fc706042c61c9503107a92fb809f43191929713))
*  Cannot setup netplan anymore on OVH (close [#135](https://github.com/kalisio/kaabah/pull/135)) ([fee0f13a](https://github.com/kalisio/kaabah/commit/fee0f13a158ba30aa5a98886a2a15bf9504bc18c))
*  Grafana swarm dashboard network panels appear to show incorrect values (close [#129](https://github.com/kalisio/kaabah/pull/129)) ([4d08357d](https://github.com/kalisio/kaabah/commit/4d08357d611a300dc88bff228a0bdde0341775c8))

##### Other Changes

*  Cannot setup netplan anymore on OVH [#135](https://github.com/kalisio/kaabah/pull/135) ([b39c3610](https://github.com/kalisio/kaabah/commit/b39c3610326fb9b8ea7488dbf9df76e63bf18278))
*  Cannot setup netplan anymore on OVH [#135](https://github.com/kalisio/kaabah/pull/135) ([5f4b2140](https://github.com/kalisio/kaabah/commit/5f4b2140123af39230922a953f2fd8a15ca89481))
*  Cannot setup netplan anymore on OVH [#135](https://github.com/kalisio/kaabah/pull/135) ([9d2ef537](https://github.com/kalisio/kaabah/commit/9d2ef5371eb60c213ce478598d2ce2237c067cf7))
*  Cannot install libssl anymore [#134](https://github.com/kalisio/kaabah/pull/134) ([49952ef8](https://github.com/kalisio/kaabah/commit/49952ef842c4be2df977003508d96ad8a237d9f5))
*  Cannot install libssl anymore [#134](https://github.com/kalisio/kaabah/pull/134) ([80176be0](https://github.com/kalisio/kaabah/commit/80176be07c013e7ecc49f33fb9fbc49f2146a578))
*  Enhance swarm check strategy [#133](https://github.com/kalisio/kaabah/pull/133) [skip ci] ([c38e53fd](https://github.com/kalisio/kaabah/commit/c38e53fd7087488773d2e43ca98c917022429379))

### 0.10.0 (2019-09-30)

##### New Features

*  Add support for OVH (closed [#74](https://github.com/kalisio/kaabah/pull/74)) ([7eab79b3](https://github.com/kalisio/kaabah/commit/7eab79b36647684236b4410e633adca4d9a4bc42))
*  Enhance container security (closed [#66](https://github.com/kalisio/kaabah/pull/66)) ([505e0703](https://github.com/kalisio/kaabah/commit/505e07032aa88cfb5b2b02a9a831a4b98b06c776))
*  Enhance container security (closed [#67](https://github.com/kalisio/kaabah/pull/67)) ([be3fbbcf](https://github.com/kalisio/kaabah/commit/be3fbbcf0551c368edc0e9d8124596f234c8b9a5))
*  Install rclone on the different nodes (closed [#127](https://github.com/kalisio/kaabah/pull/127)) ([3bce60f7](https://github.com/kalisio/kaabah/commit/3bce60f75dea8bf356146ffcf2696bec004b9b13))
*  Traefik must use the protected tcp docker endpoint  (closed [#126](https://github.com/kalisio/kaabah/pull/126)) ([5b73620b](https://github.com/kalisio/kaabah/commit/5b73620b2a89ec539ec2c981f63672e33549e06e))
*  Remove Portainer from the stack of services (fixed [#123](https://github.com/kalisio/kaabah/pull/123)) ([c4a8e6f9](https://github.com/kalisio/kaabah/commit/c4a8e6f993d924a0043ef9407792550c99803301))
*  Use Kaabah naming convention to name the hosts on AWS (closed [#29](https://github.com/kalisio/kaabah/pull/29)) ([67b72924](https://github.com/kalisio/kaabah/commit/67b72924b8d07bda12c1e8d020c9ba33d7bab463))
*  k-swarm-info should display the containers running on each nodes (closed [#121](https://github.com/kalisio/kaabah/pull/121)) ([64e747e7](https://github.com/kalisio/kaabah/commit/64e747e7d74d30e45475445b2350d71cf8bc220c))
*  Support new Scaleway instances (closed [#114](https://github.com/kalisio/kaabah/pull/114)) chore: create a crontab tf file ([890e03a5](https://github.com/kalisio/kaabah/commit/890e03a51be2b5988ea5276f71834f370d0fc1d5))
*  Let Kaabah generate a public IP for the manager if needed (closed [#120](https://github.com/kalisio/kaabah/pull/120)) feat: Force the use of a bastion (closed [#119](https://github.com/kalisio/kaabah/pull/119)) ([5ece8b87](https://github.com/kalisio/kaabah/commit/5ece8b878e7aef3d3c9a51e409fd0116474ccb27))
*  Provision certificates (closed [#118](https://github.com/kalisio/kaabah/pull/118)) ([0d1a3fcc](https://github.com/kalisio/kaabah/commit/0d1a3fcc69542f3a0a41a20927dced790af62972))
*  Enhance Docker permissions (closed [#116](https://github.com/kalisio/kaabah/pull/116)) ([3fa88b4d](https://github.com/kalisio/kaabah/commit/3fa88b4d527dc6a3a23949afcc2f2d0116ae2eed))
*  Worker user scripts should be executed after manager user script (closed [#115](https://github.com/kalisio/kaabah/pull/115)) ([ec6083d3](https://github.com/kalisio/kaabah/commit/ec6083d365b6585d3f057b951c26cd762c931e7a))
*  Add pushgateway to Prometheus stack (closed [#113](https://github.com/kalisio/kaabah/pull/113)) ([1d982ccd](https://github.com/kalisio/kaabah/commit/1d982ccd54ee5805ab83187fc451045721581ae9))
*  Rename aws_key_name in key_name (closed [#111](https://github.com/kalisio/kaabah/pull/111)) ([457ddaee](https://github.com/kalisio/kaabah/commit/457ddaee3610028dcbeb93fdeea45b7862752162))
*  Add capabilities to monitor the health of the services (closed [#78](https://github.com/kalisio/kaabah/pull/78)) ([5b19e83b](https://github.com/kalisio/kaabah/commit/5b19e83b2552d06ff4438f6065205724752bc80a))
*  Provide a slack notification template by default (closed [#110](https://github.com/kalisio/kaabah/pull/110)) ([4861b9a9](https://github.com/kalisio/kaabah/commit/4861b9a94a19ad9a6d6db044443a170108dae79d))
*  Provide a command to update a stack  (closed [#107](https://github.com/kalisio/kaabah/pull/107)) ([c616bf19](https://github.com/kalisio/kaabah/commit/c616bf1912b2cd7121169c938b9d063276f86dfa))
*  The k-swarm-info command should list the stacks (closed [#108](https://github.com/kalisio/kaabah/pull/108)) ([1f1d1ecd](https://github.com/kalisio/kaabah/commit/1f1d1ecd83be11046c6289b19dacb5fa0a857262))
*  Enhance reference documentation (closed [#80](https://github.com/kalisio/kaabah/pull/80)) ([a1a0e866](https://github.com/kalisio/kaabah/commit/a1a0e86652327c25a82c1da22f710d55f88b920d))
*  Slack channel should be configurable (closed [#100](https://github.com/kalisio/kaabah/pull/100)) ([6d2d47c3](https://github.com/kalisio/kaabah/commit/6d2d47c39358b0be46e3b7ab9635a1069406905d))
*  Enhance k-node-exec to be able to run a script (closed [#101](https://github.com/kalisio/kaabah/pull/101)) ([a614c95a](https://github.com/kalisio/kaabah/commit/a614c95a75a237c02da145b6bd3af818fb9134c2))
*  Install jq by default (closed [#99](https://github.com/kalisio/kaabah/pull/99)) ([ee447f50](https://github.com/kalisio/kaabah/commit/ee447f50a795dfb230c3013f2aec88c0f99b2851))
*  Disable Grafana dashboards edition (closed [#98](https://github.com/kalisio/kaabah/pull/98)) ([76ca43be](https://github.com/kalisio/kaabah/commit/76ca43bebb8a6bc61eee71f8e9d2406a5467f9a4))
*  Scrape docker engine metrics in Prometheus (closed [#96](https://github.com/kalisio/kaabah/pull/96)) ([2b3d1dc2](https://github.com/kalisio/kaabah/commit/2b3d1dc22bb50c797c2f6e1de3a2fc5c5af36285))
*  Add a fail2ban section in the documentation (closed [#90](https://github.com/kalisio/kaabah/pull/90)) ([f091a0b7](https://github.com/kalisio/kaabah/commit/f091a0b7bdf2db5d4555501520d9cdbb298e7f46))
*  Upgrade instance image to Ubuntu Bionic (closed [#89](https://github.com/kalisio/kaabah/pull/89)) ([4a7b746b](https://github.com/kalisio/kaabah/commit/4a7b746b7c52ab3f160e49250678aa7f1c7ae5d3))
*  Upgrade AWS provider (closed [#88](https://github.com/kalisio/kaabah/pull/88)) ([c2b7e8e2](https://github.com/kalisio/kaabah/commit/c2b7e8e2cc7b9feeea153a883e4ce2236ffb57be))
*  Update Scaleway provider version (close [#87](https://github.com/kalisio/kaabah/pull/87)) ([d72c32e8](https://github.com/kalisio/kaabah/commit/d72c32e8f0f5fb69b15bf0ccdcd357b460233af6))
*  Provide the capabilities to use a bastion (closed [#84](https://github.com/kalisio/kaabah/pull/84)) feat: Integrate fail2ban (closed [#85](https://github.com/kalisio/kaabah/pull/85)) ([772afb03](https://github.com/kalisio/kaabah/commit/772afb03207c97bc36db16bdb5d0ae8b518ce015))
*  Fix the versions of the services (closed [#81](https://github.com/kalisio/kaabah/pull/81)) ([eff4b990](https://github.com/kalisio/kaabah/commit/eff4b990d75c6dd8cc411423a0629dbd48bc70fe))
*  Remove SSH rules on workers (closed [#82](https://github.com/kalisio/kaabah/pull/82)) ([c1038bad](https://github.com/kalisio/kaabah/commit/c1038bad5ef1b94f008b46e08408d17fd089ad00))
*  Force to define some variables in the var file (close [#79](https://github.com/kalisio/kaabah/pull/79)) ([cda4f696](https://github.com/kalisio/kaabah/commit/cda4f69619252b02c878d43869d920605877ad1d))
*  Add the capability to define a crontab for the manager (close [#77](https://github.com/kalisio/kaabah/pull/77)) ([3dc8d25f](https://github.com/kalisio/kaabah/commit/3dc8d25fc39297b7362372b44d626df6d5612dee))
*  k-swarm-prune should prune the containers too [close [#70](https://github.com/kalisio/kaabah/pull/70)] ([3262ed2d](https://github.com/kalisio/kaabah/commit/3262ed2d03346e189525f2469fcf1a0c509dfae6))

##### Bug Fixes

*  double acme json file provisionning ([08673a87](https://github.com/kalisio/kaabah/commit/08673a8718b8d3807ef3b1c32d96d76003256b6f))
*  Upgrade Docker (closed [#128](https://github.com/kalisio/kaabah/pull/128)) ([e7f5b238](https://github.com/kalisio/kaabah/commit/e7f5b23831f157250b95a726a53ffe8f77186e38))
*  install-docker.sh script is not working anymore (closed [#125](https://github.com/kalisio/kaabah/pull/125)) ([fff23dea](https://github.com/kalisio/kaabah/commit/fff23deae3a790718cc26ceb934c7e45b8f4cb2e))
*  k-worker-foreach should take into account active workers only (closed [#117](https://github.com/kalisio/kaabah/pull/117)) ([045c9f18](https://github.com/kalisio/kaabah/commit/045c9f18e2b9ed08ea074bda80b5561f21f643aa))
*  k-swarm-check should monitor the services only ([#109](https://github.com/kalisio/kaabah/pull/109)) ([66169ac9](https://github.com/kalisio/kaabah/commit/66169ac9bffe9d8e71d23d99ad177f8fbc673c4b))
*  It is not possible to define the region within the tfvars file (closed [#106](https://github.com/kalisio/kaabah/pull/106)) ([efe3059a](https://github.com/kalisio/kaabah/commit/efe3059a9d6ef2ea55f4725727c1021133f13cf7))
*  k-service-check is no more working (closed [#105](https://github.com/kalisio/kaabah/pull/105)) chore: cleaned helper commands ([18eb1f9d](https://github.com/kalisio/kaabah/commit/18eb1f9da5a7f1fa5ebdd8a09738fb3655bec48c))
*  k-node-exec should run the command or script as the use without sudo privilege (closed [#103](https://github.com/kalisio/kaabah/pull/103)) ([ac80fc98](https://github.com/kalisio/kaabah/commit/ac80fc9806080ffb8258e9a49a8be793e4799f32))
*  User script on the manager is processed before the workers are instantiated (closed [#102](https://github.com/kalisio/kaabah/pull/102)) ([41bd87d4](https://github.com/kalisio/kaabah/commit/41bd87d43fb90ea0188657fa06bb559b135cc108))
*  On Scaleway the crontab ressource cannot be created (closed [#97](https://github.com/kalisio/kaabah/pull/97)) ([057f9eee](https://github.com/kalisio/kaabah/commit/057f9eee1cde43d8b31dc8f6aa86a852f28f573d))
*  On Scaleway, an error appears when mounting the volumes (closed [#95](https://github.com/kalisio/kaabah/pull/95)) ([4a8b0a27](https://github.com/kalisio/kaabah/commit/4a8b0a27e2d0113d6fc7173cb06a2afc1e5fff23))
*  SSH connection is still failing (closed [#94](https://github.com/kalisio/kaabah/pull/94)) ([d535c948](https://github.com/kalisio/kaabah/commit/d535c948016ce666c48b93494de46ffb97686ad5))
*  Cannot access the manager when destroying (closed [#93](https://github.com/kalisio/kaabah/pull/93)) ([57f3fc41](https://github.com/kalisio/kaabah/commit/57f3fc416e9dfcfc6df0ed8b3707d69dd6f41568))
*  On AWS associate_public_ip_address is not taken into account (closed [#91](https://github.com/kalisio/kaabah/pull/91)) ([711f6b85](https://github.com/kalisio/kaabah/commit/711f6b855a62d0f33c82f9a2d80e35992d49655e))
*  Wrong number of rules ssh_accept_manager on Scaleway (closed [#83](https://github.com/kalisio/kaabah/pull/83)) ([39d80bb4](https://github.com/kalisio/kaabah/commit/39d80bb4da137c3444bddb520a5b364fd4a1a189))
*  ssh.pem file seems to be always required even if using another ssh_key file (close [#73](https://github.com/kalisio/kaabah/pull/73)) ([ecf4fb92](https://github.com/kalisio/kaabah/commit/ecf4fb9205d29cda21fc6ad2c6eb190201325b8d))
*  Services are not removed when tainting the resource (close [#76](https://github.com/kalisio/kaabah/pull/76)) ([95a98e91](https://github.com/kalisio/kaabah/commit/95a98e91325ff70a8675c64f623c13c388b19f14))
*  Most of the Prometheus rules cannot be interpreted in the query editor [close [#71](https://github.com/kalisio/kaabah/pull/71)] ([28dc6299](https://github.com/kalisio/kaabah/commit/28dc62991376e76c0771ac515ddfe3f1421a86f4))
*  root_free_files alarm seems to be not working properly [close [#69](https://github.com/kalisio/kaabah/pull/69)] ([b71af6f9](https://github.com/kalisio/kaabah/commit/b71af6f95ca6b0a40f1d34dfceb12a495dde93c0))
*  [#65](https://github.com/kalisio/kaabah/pull/65) ([38c10a18](https://github.com/kalisio/kaabah/commit/38c10a18965b6d68e70f3adee5f715a32d9070d9))

##### Other Changes

*  Add support for OVH [#74](https://github.com/kalisio/kaabah/pull/74) [skip test] ([4026cdf9](https://github.com/kalisio/kaabah/commit/4026cdf9d3af9efaba8bd4c617ff3587ec3dd87b))
*  Add support for OVH [#74](https://github.com/kalisio/kaabah/pull/74) ([0ef0fbdd](https://github.com/kalisio/kaabah/commit/0ef0fbdd069fd740aaf901f349c7e90ad8bc0f16))
*  Add support for OVH [#74](https://github.com/kalisio/kaabah/pull/74) ([1b9f2980](https://github.com/kalisio/kaabah/commit/1b9f2980960fb2b8c8977bca7b4642d35fd6f466))
*  Add support for OVH / Failover IP ([#74](https://github.com/kalisio/kaabah/pull/74)) ([f0c77f43](https://github.com/kalisio/kaabah/commit/f0c77f430066fb48014c2d4f6f2d2cf53730567a))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([c0cefc3a](https://github.com/kalisio/kaabah/commit/c0cefc3a62fecd8a4b3ff27862c76a2a0ed6fbfd))
*  Upgrade Docker ([#128](https://github.com/kalisio/kaabah/pull/128)) ([853f7002](https://github.com/kalisio/kaabah/commit/853f700206d121fb6263306faa4df14826fd6cbb))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([63c0a189](https://github.com/kalisio/kaabah/commit/63c0a1894cc4f53e3b4c6e615a039ae4679a90e4))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([1180370a](https://github.com/kalisio/kaabah/commit/1180370a0b84e74ef7ec46f1c7bfa04912c69f32))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([2531aac5](https://github.com/kalisio/kaabah/commit/2531aac54c2d7900655b4b7fcfa6f2753a1098b3))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([914fdc6b](https://github.com/kalisio/kaabah/commit/914fdc6bd5e516bf78f7c0b4286e15716df95ef5))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [test] ([b4fbd259](https://github.com/kalisio/kaabah/commit/b4fbd259b68cf7ef53204289e60f8322e8cf1678))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [test] ([72f96f3f](https://github.com/kalisio/kaabah/commit/72f96f3f163305e435ea056727deae2333a8b348))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [test] ([8b7f7504](https://github.com/kalisio/kaabah/commit/8b7f75046e1f0c2174dde010278a44b2ee68dbe4))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [doc] [test] ([6a5ac3cd](https://github.com/kalisio/kaabah/commit/6a5ac3cd96a9588213a4bd1f04443b9fcfcfcfb4))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [doc] [test] ([f1b0af1a](https://github.com/kalisio/kaabah/commit/f1b0af1a4f6410061b22a556e71d34050d10ad14))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [doc] [test] ([52227507](https://github.com/kalisio/kaabah/commit/522275072baaefa0422aa7cfc8a6d9d0cb72173d))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [doc] [test] ([d9a4e9ae](https://github.com/kalisio/kaabah/commit/d9a4e9ae0413ca073f9d802a490c18098856bd43))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) [doc] [test] ([db510ada](https://github.com/kalisio/kaabah/commit/db510adac0e750901716a3949ecd3e83ff4073c8))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([a5f2ab30](https://github.com/kalisio/kaabah/commit/a5f2ab30ed5fe9008aa762988ad88dc56f2361d8))
*  Add a test stage in travis [#124](https://github.com/kalisio/kaabah/pull/124) [test] ([e05e936a](https://github.com/kalisio/kaabah/commit/e05e936a99be43fd1966b43f255ae794b911b71a))
*  Add a test stage in travis [#124](https://github.com/kalisio/kaabah/pull/124) [test] ([168f4a64](https://github.com/kalisio/kaabah/commit/168f4a6404ad86a320c16a6d179de4cf53f218d6))
*  Add a test stage in travis [#124](https://github.com/kalisio/kaabah/pull/124) [test] ([c04c8ceb](https://github.com/kalisio/kaabah/commit/c04c8cebc9f5dc0b0c8d98073a1306125f562b45))
*  Add a test stage in travis [#124](https://github.com/kalisio/kaabah/pull/124) [test] ([badd0f27](https://github.com/kalisio/kaabah/commit/badd0f2717e4abb04d34ee28d25c295f43af9aee))
*  Add a test stage in travis [#124](https://github.com/kalisio/kaabah/pull/124) [test] ([09a78790](https://github.com/kalisio/kaabah/commit/09a7879031f5c9a586ae9c1efc352807150e437c))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) ([d603be88](https://github.com/kalisio/kaabah/commit/d603be88179be8f7ac756b88c8451ed512bb3d77))
*  Add a test stage in travis ([#124](https://github.com/kalisio/kaabah/pull/124)) ([0db87610](https://github.com/kalisio/kaabah/commit/0db876101b48937960b3299204aa782113d73b6a))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([02a89089](https://github.com/kalisio/kaabah/commit/02a8908914701a18726a3ea7337f409f05fdf214))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([fc0ba371](https://github.com/kalisio/kaabah/commit/fc0ba371fa8b6f30537ad183188fb0d8294f5420))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([babd89a1](https://github.com/kalisio/kaabah/commit/babd89a1d0d4135aae465ceae171de066397b1e1))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([b4677f9c](https://github.com/kalisio/kaabah/commit/b4677f9c7d43f724d317087bb335369c72f418be))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([69666a14](https://github.com/kalisio/kaabah/commit/69666a148c5141741da34cef50ab99d841138b74))
*  Add support for OVH ([#74](https://github.com/kalisio/kaabah/pull/74)) ([ab24999f](https://github.com/kalisio/kaabah/commit/ab24999fadeecf2a2d460243a01a39baec17da79))
*  Force the use of a bastion ([#119](https://github.com/kalisio/kaabah/pull/119)) ([c12c1c05](https://github.com/kalisio/kaabah/commit/c12c1c05f2438fe17e82c5281fa8e4533b928f0f))
*  Support new Scaleway instances [#114](https://github.com/kalisio/kaabah/pull/114) ([5961987a](https://github.com/kalisio/kaabah/commit/5961987a57e6bbcc82341515c1fbe97860a897c8))
*  Support new Scaleway instances ([#114](https://github.com/kalisio/kaabah/pull/114)) ([867b4c36](https://github.com/kalisio/kaabah/commit/867b4c367b3a2ecbde2f10bb6daea48e6cd0adf4))
*  Provide a slack notification template by default ([#110](https://github.com/kalisio/kaabah/pull/110)) ([18fb1ab6](https://github.com/kalisio/kaabah/commit/18fb1ab64783bd771f8eefc7d8f6c02c02736412))
*  updated configuration-variables.md ([f555e14c](https://github.com/kalisio/kaabah/commit/f555e14cbaca3a67d73f6748fb2dc6ac3da39546))
*  Add capabilities to monitor the health of the services ([#78](https://github.com/kalisio/kaabah/pull/78)) ([d2cb7639](https://github.com/kalisio/kaabah/commit/d2cb7639eeb8ab9d56450fed64016d29cdf31de6))
*  Add capabilities to monitor the health of the services ([#78](https://github.com/kalisio/kaabah/pull/78)) ([911bb57e](https://github.com/kalisio/kaabah/commit/911bb57eb3b7611b9181ea829cb105f25bd9159b))
*  Add capabilities to monitor the health of the services ([#78](https://github.com/kalisio/kaabah/pull/78)) ([154003b1](https://github.com/kalisio/kaabah/commit/154003b1cc682f6900c1e3611f94b0c17d211071))
*  Add health check to services [#75](https://github.com/kalisio/kaabah/pull/75) ([b1abbae3](https://github.com/kalisio/kaabah/commit/b1abbae37b747e2fc85eb159fd176dd06ef792a3))
*  updated var file ([03b35e43](https://github.com/kalisio/kaabah/commit/03b35e43bc47484de4e37e1e688015d8a7d2bcf7))
*  remove ip whilte list from the tests ([e52210e4](https://github.com/kalisio/kaabah/commit/e52210e4cfe55ead9c4487e4190966e587389c92))

### 0.9.0 (2019-07-05)

##### New Features

*  Enhance Docker permissions (closed [#116](https://github.com/kalisio/kaabah/pull/116)) ([a9483ce0](https://github.com/kalisio/kaabah/commit/a9483ce044b9f9e32aad79f7bcfe6a562451ec8b))
*  Worker user scripts should be executed after manager user script (closed [#115](https://github.com/kalisio/kaabah/pull/115)) ([0087cbc1](https://github.com/kalisio/kaabah/commit/0087cbc16267c6a99e4207ec68518f9492100626))
*  Add pushgateway to Prometheus stack (closed [#113](https://github.com/kalisio/kaabah/pull/113)) ([f187ea4f](https://github.com/kalisio/kaabah/commit/f187ea4f7838169d0c1ec0cdd0b12eebdb76734d))
*  Rename aws_key_name in key_name (closed [#111](https://github.com/kalisio/kaabah/pull/111)) ([4cd5b0a6](https://github.com/kalisio/kaabah/commit/4cd5b0a634008e98cb6cfdb1f4cd316abcc0abd5))


### 0.8.0 (2019-06-13)

##### New Features

*  Add capabilities to monitor the health of the services (closed [#78](https://github.com/kalisio/kaabah/pull/78)) ([bbfc172b](https://github.com/kalisio/kaabah/commit/bbfc172b01e1f01405b4718424e5d8e86274e2a1))
*  Provide a slack notification template by default (closed [#110](https://github.com/kalisio/kaabah/pull/110)) ([25c72e11](https://github.com/kalisio/kaabah/commit/25c72e110a10b3aba97fdbb956fbf6d889963477))
*  Provide a command to update a stack  (closed [#107](https://github.com/kalisio/kaabah/pull/107)) ([8f8bdb58](https://github.com/kalisio/kaabah/commit/8f8bdb58c1bd85dad041e591fe85691c30e034e8))
*  The k-swarm-info command should list the stacks (closed [#108](https://github.com/kalisio/kaabah/pull/108)) ([5644764d](https://github.com/kalisio/kaabah/commit/5644764d9c9f0baba5ff25653d462c5b1a250d2c))

##### Bug Fixes

*  k-swarm-check should monitor the services only ([#109](https://github.com/kalisio/kaabah/pull/109)) ([b5585f1b](https://github.com/kalisio/kaabah/commit/b5585f1b4adea322a1a4fe1ea93d477a4dbb146b))
*  It is not possible to define the region within the tfvars file (closed [#106](https://github.com/kalisio/kaabah/pull/106)) ([3bab0f51](https://github.com/kalisio/kaabah/commit/3bab0f51222e54b5e15a62c425ef881baea77334))

### 0.7.0 (2019-05-20)

##### New Features

*  Enhance reference documentation (closed [#80](https://github.com/kalisio/kaabah/pull/80)) ([6b6cff5a](https://github.com/kalisio/kaabah/commit/6b6cff5acdbafa4654325f1b17093536e1790034))
*  Slack channel should be configurable (closed [#100](https://github.com/kalisio/kaabah/pull/100)) ([06895c04](https://github.com/kalisio/kaabah/commit/06895c048ee0564e674d38887975250f3e016f39))
*  Enhance k-node-exec to be able to run a script (closed [#101](https://github.com/kalisio/kaabah/pull/101)) ([54e4ce19](https://github.com/kalisio/kaabah/commit/54e4ce19d2bd24d6e80d928edc13b08acb75a6ca))
*  Install jq by default (closed [#99](https://github.com/kalisio/kaabah/pull/99)) ([37777246](https://github.com/kalisio/kaabah/commit/37777246336c77e6a85f9dd972bb3548865974ae))
*  Disable Grafana dashboards edition (closed [#98](https://github.com/kalisio/kaabah/pull/98)) ([32a02f4c](https://github.com/kalisio/kaabah/commit/32a02f4c939f7dea86b40d69b94be0f6fcf56897))
*  Scrape docker engine metrics in Prometheus (closed [#96](https://github.com/kalisio/kaabah/pull/96)) ([8c91d4f3](https://github.com/kalisio/kaabah/commit/8c91d4f3741aac15e69addd493f7f1507056c988))
*  Add a fail2ban section in the documentation (closed [#90](https://github.com/kalisio/kaabah/pull/90)) ([69f0a479](https://github.com/kalisio/kaabah/commit/69f0a479d14ff738f1b36600a48781c810903b1c))
*  Upgrade instance image to Ubuntu Bionic (closed [#89](https://github.com/kalisio/kaabah/pull/89)) ([a7c6810e](https://github.com/kalisio/kaabah/commit/a7c6810e8fbf91de074fee6341b81820157541ef))
*  Upgrade AWS provider (closed [#88](https://github.com/kalisio/kaabah/pull/88)) ([36ac0ece](https://github.com/kalisio/kaabah/commit/36ac0ece03f9f119efef76ea9638341c3b51842c))
*  Update Scaleway provider version (close [#87](https://github.com/kalisio/kaabah/pull/87)) ([3bdc381a](https://github.com/kalisio/kaabah/commit/3bdc381a8f985aead13b2c6d8ffef33496a4948c))
*  Provide the capabilities to use a bastion (closed [#84](https://github.com/kalisio/kaabah/pull/84)) 
*  Integrate fail2ban (closed [#85](https://github.com/kalisio/kaabah/pull/85)) ([16f237f4](https://github.com/kalisio/kaabah/commit/16f237f40946f0de8ac2bec4957a411deb9303a2))
*  Fix the versions of the services (closed [#81](https://github.com/kalisio/kaabah/pull/81)) ([16926355](https://github.com/kalisio/kaabah/commit/169263551d78218e76f1fbcfe46ca39b05ca2695))
*  Remove SSH rules on workers (closed [#82](https://github.com/kalisio/kaabah/pull/82)) ([791852c2](https://github.com/kalisio/kaabah/commit/791852c25624c5de19ef6e81ef14e4599f4035d8))

##### Bug Fixes

*  k-service-check is no more working (closed [#105](https://github.com/kalisio/kaabah/pull/105)) chore: cleaned helper commands ([c1bbb996](https://github.com/kalisio/kaabah/commit/c1bbb99661900c0e904d3eb0713a735a73d7ee05))
*  k-node-exec should run the command or script as the use without sudo privilege (closed [#103](https://github.com/kalisio/kaabah/pull/103)) ([d6288b89](https://github.com/kalisio/kaabah/commit/d6288b89ef51f74edf63664e2e0cb7e0d6f319a2))
*  User script on the manager is processed before the workers are instantiated (closed [#102](https://github.com/kalisio/kaabah/pull/102)) ([b3eddcfe](https://github.com/kalisio/kaabah/commit/b3eddcfe42878af651a36ae6d7a2b727c4d805c1))
*  On Scaleway the crontab ressource cannot be created (closed [#97](https://github.com/kalisio/kaabah/pull/97)) ([545bc3ef](https://github.com/kalisio/kaabah/commit/545bc3efe4eef01fb2db0ec35e0c2784d51abfea))
*  On Scaleway, an error appears when mounting the volumes (closed [#95](https://github.com/kalisio/kaabah/pull/95)) ([103a16fa](https://github.com/kalisio/kaabah/commit/103a16fab34107161332590170ad70aac60677a9))
*  SSH connection is still failing (closed [#94](https://github.com/kalisio/kaabah/pull/94)) ([7474a98b](https://github.com/kalisio/kaabah/commit/7474a98bd523cc5c92678f8d6d01287755372abf))
*  Cannot access the manager when destroying (closed [#93](https://github.com/kalisio/kaabah/pull/93)) ([e89e4fb2](https://github.com/kalisio/kaabah/commit/e89e4fb2ea10c7be36414e3150c43138b0a19bb7))
*  On AWS associate_public_ip_address is not taken into account (closed [#91](https://github.com/kalisio/kaabah/pull/91)) ([fbf3b429](https://github.com/kalisio/kaabah/commit/fbf3b429c0e4e0136d4d112641a93472b3f85349))
*  Wrong number of rules ssh_accept_manager on Scaleway (closed [#83](https://github.com/kalisio/kaabah/pull/83)) ([99c48699](https://github.com/kalisio/kaabah/commit/99c4869911b054853c131619d8691a534036cb54))

### 0.6.0 (2019-04-17)

##### New Features

*  Force to define some variables in the var file (close [#79](https://github.com/kalisio/kaabah/pull/79)) ([5f89ba6b](https://github.com/kalisio/kaabah/commit/5f89ba6b0198e0e3238ae97454a97285b3e61c28))
*  Add the capability to define a crontab for the manager (close [#77](https://github.com/kalisio/kaabah/pull/77)) ([bf1240f6](https://github.com/kalisio/kaabah/commit/bf1240f646592b8fc02ee3b5e729f3810d881e41))

##### Bug Fixes

*  ssh.pem file seems to be always required even if using another ssh_key file (close [#73](https://github.com/kalisio/kaabah/pull/73)) ([6d72956c](https://github.com/kalisio/kaabah/commit/6d72956cda335354a9d71663d748bc6d9a5ffccf))
*  Services are not removed when tainting the resource (close [#76](https://github.com/kalisio/kaabah/pull/76)) ([cc9faf94](https://github.com/kalisio/kaabah/commit/cc9faf94141e3782c2127475dfcc5acf651a5894))

#### [v0.5.0](https://github.com/kalisio/kaabah/compare/v0.4.0...v0.5.0)

> 7 February 2019

- fix: Most of the Prometheus rules cannot be interpreted in the query editor [close #71] [`#71`](https://github.com/kalisio/kaabah/issues/71)
- fix: root_free_files alarm seems to be not working properly [close #69] [`#69`](https://github.com/kalisio/kaabah/issues/69)
- feat: k-swarm-prune should prune the containers too [close #70] [`#70`](https://github.com/kalisio/kaabah/issues/70)

#### [v0.4.0](https://github.com/kalisio/kaabah/compare/v0.3.0...v0.4.0)

> 4 February 2019

- chore: added changelog generator (close #68) [`#68`](https://github.com/kalisio/kaabah/issues/68)
- chore: added changelog generator (close #68) [`#68`](https://github.com/kalisio/kaabah/issues/68)

#### [v0.3.0](https://github.com/kalisio/kaabah/compare/v0.2.0...v0.3.0)

> 2 January 2019

- Fixed #64 [`#64`](https://github.com/kalisio/kaabah/issues/64)
- Fixed #55 [`#55`](https://github.com/kalisio/kaabah/issues/55)
- Fixed #57 [`#57`](https://github.com/kalisio/kaabah/issues/57)
- Fixed #63 [`#63`](https://github.com/kalisio/kaabah/issues/63)
- Fixed #56 [`#56`](https://github.com/kalisio/kaabah/issues/56)
- Fixed #62 [`#62`](https://github.com/kalisio/kaabah/issues/62) [`#58`](https://github.com/kalisio/kaabah/issues/58)
- Fixed #61 [`#61`](https://github.com/kalisio/kaabah/issues/61)
- Fixed #59 [`#59`](https://github.com/kalisio/kaabah/issues/59)
- Fixed #60 [`#60`](https://github.com/kalisio/kaabah/issues/60)

#### [v0.2.0](https://github.com/kalisio/kaabah/compare/v0.1.0...v0.2.0)

> 16 October 2018

- Fixed #54 [`#54`](https://github.com/kalisio/kaabah/issues/54)
- Fixed #53 [`#53`](https://github.com/kalisio/kaabah/issues/53)
- Fixed #37 [`#37`](https://github.com/kalisio/kaabah/issues/37)
- WIP #23 [`#52`](https://github.com/kalisio/kaabah/issues/52)
- Fixed #50 [`#50`](https://github.com/kalisio/kaabah/issues/50)
- Fixed #51 [`#51`](https://github.com/kalisio/kaabah/issues/51)
- Fixed #49 [`#49`](https://github.com/kalisio/kaabah/issues/49)
- Fixed #22 [`#22`](https://github.com/kalisio/kaabah/issues/22)
- Fixed #48 [`#48`](https://github.com/kalisio/kaabah/issues/48)
- Fixed #17 [`#17`](https://github.com/kalisio/kaabah/issues/17)
- Fixed #47 [`#47`](https://github.com/kalisio/kaabah/issues/47)
- Fixed #31 [`#31`](https://github.com/kalisio/kaabah/issues/31)
- Fixed #44 [`#44`](https://github.com/kalisio/kaabah/issues/44) [`#45`](https://github.com/kalisio/kaabah/issues/45)
- Fixed #46 [`#46`](https://github.com/kalisio/kaabah/issues/46)
- Fixed #43 [`#43`](https://github.com/kalisio/kaabah/issues/43)
- Fixed #41 [`#41`](https://github.com/kalisio/kaabah/issues/41) [`#42`](https://github.com/kalisio/kaabah/issues/42)
- Fixed #41 #42 [`#41`](https://github.com/kalisio/kaabah/issues/41)
- Fixed #32 [`#32`](https://github.com/kalisio/kaabah/issues/32)
- Fixed #34 [`#34`](https://github.com/kalisio/kaabah/issues/34)
- Fixed #40 [`#40`](https://github.com/kalisio/kaabah/issues/40)
- Fixed #28 [`#28`](https://github.com/kalisio/kaabah/issues/28)
- Fixed #35 [`#35`](https://github.com/kalisio/kaabah/issues/35)
- Fixed #39 [`#39`](https://github.com/kalisio/kaabah/issues/39)
- Fixed #38 [`#38`](https://github.com/kalisio/kaabah/issues/38)
- Fixed #31 [`#31`](https://github.com/kalisio/kaabah/issues/31)
- Fixed #33 [`#33`](https://github.com/kalisio/kaabah/issues/33)
- Fixed #25 [`#25`](https://github.com/kalisio/kaabah/issues/25)
- Fixed #30 [`#30`](https://github.com/kalisio/kaabah/issues/30)
- Fixed #28 [`#28`](https://github.com/kalisio/kaabah/issues/28)
- Fixed #27 [`#27`](https://github.com/kalisio/kaabah/issues/27)

#### v0.1.0

> 31 August 2018

- Removed blackbox exporter (Fixed #26) [`#26`](https://github.com/kalisio/kaabah/issues/26)
- Added docker_network variable (Fixed #24) [`#24`](https://github.com/kalisio/kaabah/issues/24)
- Added TLS support (fixed #20) [`#20`](https://github.com/kalisio/kaabah/issues/20)
- Fixed #4 [`#4`](https://github.com/kalisio/kaabah/issues/4)
- Updated modules (Fixed #14 / fixed #8) [`#14`](https://github.com/kalisio/kaabah/issues/14) [`#8`](https://github.com/kalisio/kaabah/issues/8)
- Updated modules (Fixed #11 / fixed #8) [`#11`](https://github.com/kalisio/kaabah/issues/11) [`#8`](https://github.com/kalisio/kaabah/issues/8)
- Fixed #12 [`#12`](https://github.com/kalisio/kaabah/issues/12)
- Fixed #11 [`#11`](https://github.com/kalisio/kaabah/issues/11)
- Fixed #11 [`#11`](https://github.com/kalisio/kaabah/issues/11)
- Fixed #6 and #7 [`#6`](https://github.com/kalisio/kaabah/issues/6)

