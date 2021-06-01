---
sidebar_position: 2
---

# Getting Started

Let's get an app deployed with **Weave Gitops** in less than 5 minutes.

**This is Work In Progress**

## Pre-requisites

1. A running cluster (e.g. [kind](https://kind.sigs.k8s.io/docs/user/quick-start/))
2. A Github account 
3. A workload that you would like to deploy (or you can use the sample workload)

## Installation (needs work!)

1. Download the binary, untar and move to the path (TBD)
2. Create a new keypair and add the public key to the user’s GitHub repository
3. Create an application repository in GitHub under an organization account that includes the user, and populate it with a workload to deploy
4. Clone the application repository locally
5. Install Weave GitOps

    `wego install | kubectl apply -f -`

    (note: this will change shortly)

6. Wait for controllers to come online

    `kubectl get all -A`
7. Change to the directory containing the local clone of the GitHub application repository

    `wego add --private-key=<created private key file> .`
8. Wait for the workload to show up in the cluster
