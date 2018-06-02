#!/bin/bash

# List the workspaces
terraform workspace list > wspaces
if [ $? -ne 0 ]; then
  exit 1
fi

# Check the workspaces
head -n -1 wspaces | while read wspace
do
  if [[ $wspace != *"default"* ]]
  then
    terraform workspace select $wspace
    if [ $? -ne 0 ]; then
      exit 1
    fi
    terraform apply -var-file "workspaces/$wspace.tfvars"
    if [ $? -ne 0 ]; then
      exit 1
    fi
  fi
done