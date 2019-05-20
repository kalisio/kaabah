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

##### Other Changes

*  Add capabilities to monitor the health of the services ([#78](https://github.com/kalisio/kaabah/pull/78)) ([806d5bd9](https://github.com/kalisio/kaabah/commit/806d5bd904f91116abe834d832857bcc0961d1a7))
*  Add health check to services [#75](https://github.com/kalisio/kaabah/pull/75) ([73a25aad](https://github.com/kalisio/kaabah/commit/73a25aadfa4f34808e9eb445cabb387261b8e859))
*  updated var file ([86ddc44d](https://github.com/kalisio/kaabah/commit/86ddc44da280521380506a7173945fafc5f70bf7))

### 0.6.0 (2019-04-17)

##### New Features

*  Force to define some variables in the var file (close [#79](https://github.com/kalisio/kaabah/pull/79)) ([5f89ba6b](https://github.com/kalisio/kaabah/commit/5f89ba6b0198e0e3238ae97454a97285b3e61c28))
*  Add the capability to define a crontab for the manager (close [#77](https://github.com/kalisio/kaabah/pull/77)) ([bf1240f6](https://github.com/kalisio/kaabah/commit/bf1240f646592b8fc02ee3b5e729f3810d881e41))

##### Bug Fixes

*  ssh.pem file seems to be always required even if using another ssh_key file (close [#73](https://github.com/kalisio/kaabah/pull/73)) ([6d72956c](https://github.com/kalisio/kaabah/commit/6d72956cda335354a9d71663d748bc6d9a5ffccf))
*  Services are not removed when tainting the resource (close [#76](https://github.com/kalisio/kaabah/pull/76)) ([cc9faf94](https://github.com/kalisio/kaabah/commit/cc9faf94141e3782c2127475dfcc5acf651a5894))

##### Other Changes

*  remove ip whilte list from the tests ([260fcf32](https://github.com/kalisio/kaabah/commit/260fcf32f84826be8442a418269ee3e5539bef3d))

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

