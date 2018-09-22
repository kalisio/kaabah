---
sidebar: auto
---

# What is it ?

<b>Kaabah</b> is a [Terraform](https://www.terraform.io/) based solution to build and operate [Docker Swarm](https://docs.docker.com/engine/swarm/) infrastructures either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com). 

In order to help you operate your cluster easily, these infrastructures are bootstrapped with the following services:
* [Registry](https://docs.docker.com/registry/): a private registry to use as part of your infrastructure
* [Traefik](https://traefik.io/): the native cloud edge router !
* [Portainer](https://portainer.io/): a simple management UI for Docker 
* [Prometheus](https://prometheus.io/): a monitoring system
* [Grafana](https://grafana.com/): the analytics platform for all your metrics


![Kaabah overview](./../assets/kaabah-overview.svg)


::: tip Sponsored by Kalisio

[![Kalisio](https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-logo-black-256x84.png)](https://kalisio.com)

*Unleashing the potential of spatial information*
:::
