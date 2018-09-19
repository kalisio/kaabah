---
sidebar: auto
---

# What is it ?

<b>Kaabah</b> is a [Terraform](https://www.terraform.io/) based solution to build and operate [Docker Swarm](https://docs.docker.com/engine/swarm/) infrastructures either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com). In order to help you operate your cluster easily, these infrastructures are bootstrapped with the following services:
* [registry](https://docs.docker.com/registry/): a private registry to use as part of your infrastructure
* [traefik](https://traefik.io/): the native cloud edge router !
* [portainer](https://portainer.io/): a simple management UI for Docker 
* [prometheus](https://prometheus.io/): a monitoring system
* [grafana](https://grafana.com/): the analytics platform for all your metrics

![Kaabah overview](./../assets/kaabah-overview.svg)

::: tip Sponsored by Kalisio
**Kaabah** was initiated by [Kalisio](https://kalisio.com) to provide us with the necessary tools to manage the different infrastructures we need to support our development.<br/><br/>
![kalisio](./../assets/kalisio-banner.png)<br/>
*Unleashing the potential of spatial information*
::: 