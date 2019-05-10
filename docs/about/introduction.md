---
sidebarDepth: 3
---

# Introduction

**Kaabah** is a [Terraform](https://www.terraform.io/) based solution to design, build and operate [Docker Swarm](https://docs.docker.com/engine/swarm/) cluster either on [Scaleway](https://www.scaleway.com/) or on [AWS](https://aws.amazon.com). 

But even more, **Kaabah** bootstraps your cluster with well know Open Source solutions to let you operate it with ease. More precisely, **Kaabah** allows you to:
* Deploy and manage the services on your infrastructure using [Registry](https://docs.docker.com/registry/) and [Portainer](https://portainer.io/)
* Route the traffic to your services ensuring SSL termination using [Traefik](https://traefik.io) and [Let's Encrypt](https://letsencrypt.org/)
* Monitor the states of your infrastructure as well as the health check of your services using [Prometheus](https://prometheus.io/)
* Collect metrics and analyze them using [Grafana](https://grafana.com/)
  
![Kaabah overview](./../assets/kaabah-overview.svg)

