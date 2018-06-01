#!/bin/bash
terraform workspace list > workspaces

head -n -1 workspaces | while read line
do
  if [[ $line != *"default"* ]]
  then
    terraform workspace select $line
    terraform apply -var-file "workspaces/$line.tfvars"
  fi
done