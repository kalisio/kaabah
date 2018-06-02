#!/bin/bash

# List the workspaces
terraform workspace list > workspaces_list
if [ $? -ne 0 ]; then
  exit 1
fi

# Check the workspaces
head -n -1 workspaces_list | while read workspace
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