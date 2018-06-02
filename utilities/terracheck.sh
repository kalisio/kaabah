#!/bin/bash

# Initilalize terraform
terraform init -backend-config="backend.config"
if [ $? -ne 0 ]; then
  exit 1
fi

# List the workspaces
terraform workspace list > workspaces
if [ $? -ne 0 ]; then
  exit 1
fi

# Check the workspaces
head -n -1 workspaces | while read workspace
do
  if [[ $workspace != *"default"* ]]
  then
    terraform workspace select $workspace
    if [ $? -ne 0 ]; then
      exit 1
    fi
    terraform apply -var-file "workspaces/$workspace.tfvars"
    if [ $? -ne 0 ]; then
      exit 1
    fi
  fi
done