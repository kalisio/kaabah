---
sidebar: auto
---

# Advanced usage

## Docker swarm

### Managing labels

If you desire to update the labels on your cluster and keep track of the changes, you need to:
1. taint the resources attached to the labels you want to change
2. update your variables file
3. apply the changes
   
```bash
# Taint the labels attached to the worker 1
$terraform taint -module=AWS null_resource.worker_labels.1
# Taint the labels attached to the manager
$terraform taint -module=AWS null_resource.manager_labels
# Edit the current tfvars file and apply the changes
 $terraform apply -var-file="workspaces/<file>.tfvars"
```
