# my global config
global:
  scrape_interval:     15s # By default, scrape targets every 15 seconds.
  evaluation_interval: 15s # By default, scrape targets every 15 seconds.
  # scrape_timeout is set to the global default (10s).

  # Attach these labels to any time series or alerts when communicating with
  # external systems (federation, remote storage, Alertmanager).
  external_labels:
      monitor: 'Prometheus'

# Load and evaluate rules in this file every 'evaluation_interval' seconds.
rule_files:
  - 'rules/*.yml'

# alert
alerting:
  alertmanagers:
  - scheme: http
    static_configs:
    - targets:
      - "alertmanager:9093"

# A scrape configuration containing exactly one endpoint to scrape:
scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'dockerd'
    static_configs:
      - targets: ['${KAABAH_MANAGER_IP}:9323']

  - job_name: 'cadvisor'
    dns_sd_configs:
    - names:
      - 'tasks.cadvisor'
      type: 'A'
      port: 8080

  - job_name: 'node-exporter'
    dns_sd_configs:
    - names:
      - 'tasks.node-exporter'
      type: 'A'
      port: 9100

  - job_name: 'traefik'
    static_configs:
    - targets: ['traefik']

