#!/bin/bash
terraform init
# This ensure the deploy scripts to be executed on each apply
terraform taint null_resource.deploy
terraform apply -auto-approve
