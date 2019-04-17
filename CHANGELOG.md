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

