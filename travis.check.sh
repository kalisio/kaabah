#!/bin/bash
if [[ $TRAVIS_COMMIT_MESSAGE == *"[skip check]"* ]]
then
	echo "Skipping check stage"
  exit 0
fi

# Install Terraform
curl -fSL "https://releases.hashicorp.com/terraform/0.11.7/terraform_0.11.7_linux_amd64.zip" -o terraform.zip
sudo unzip terraform.zip -d /opt/terraform
sudo ln -s /opt/terraform/terraform /usr/bin/terraform
rm -f terraform.zip

# Initialize terraform 
terraform init -backend-config="backend.config"

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
    terraform plan -var-file "workspaces/$wspace.tfvars"
  fi
done