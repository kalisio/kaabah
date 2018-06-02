#!/bin/bash

# Initilalize terraform
terraform init -backend-config="backend.config"

# List the workspaces
terraform workspace list > workspaces

# Check the workspaces
head -n -1 workspaces | while read line
do
  if [[ $line != *"default"* ]]
  then
    echo "Processing $line workspace"
    terraform workspace select $line
    terraform apply -var-file "workspaces/$line.tfvars"
  fi
done