#!/bin/bash
if [[ $TRAVIS_COMMIT_MESSAGE == *"[skip check]"* ]]
then
	echo "Skipping check stage"
else
  # Install Terraform
  curl -fSL "https://releases.hashicorp.com/terraform/0.11.4/terraform_0.11.4_linux_amd64.zip" -o terraform.zip
  unzip terraform.zip -d /opt/terraform
  ln -s /opt/terraform/terraform /usr/bin/terraform
  rm -f terraform.zip
  # Initialize terraform 
  terraform init -backend-config="backend.config"
  # List the workspaces
  terraform workspace list > wspaces
  if [ $? -ne 0 ]; then
    exit 1
  file
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
fi