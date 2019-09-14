#!/bin/bash

source ../workspaces/master/env.sh

# Initialize terraform
terraform init -backend-config="backend.config"

# Run terraform over the test workspaces
WORKSPACES="test-aws test-ovh test-scw"
for WORKSPACE in $WORKSPACES; do
  terraform workspace select $WORKSPACE
  terraform apply -auto-approve -var-file="tests/$WORKSPACE.tfvars"
  TEST_CODE=$?
	# Destroy the cluster whatever the result
	terraform destroy -auto-approve -var-file="tests/$WORKSPACE.tfvars"
	# Exit if an error has occured
	if [ $TEST_CODE -ne 0 ]; then
		echo "^$WORKSPACE failed [error: $TEST_CODE]"
		exit 1
	fi
done

terraform workspace select default