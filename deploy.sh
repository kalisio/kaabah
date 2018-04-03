#!/bin/bash
terraform init
# This ensure the deploy scripts to be executed on each apply
terraform taint null_resource.deploy.0
terraform taint null_resource.deploy.1
terraform apply -auto-approve
