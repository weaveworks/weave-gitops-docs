---
sidebar_position: 1
---
# Installation

## Pre-requisites

### Kubernetes Cluster
Weave GitOps is compatable with conformant Kubernetes distributions which match the minimum required version level of [Flux](https://fluxcd.io/docs/installation/#prerequisites).

### CLI
The `gitops` command-line interface is currently supported on Mac (x86 and Arm), and Linux including WSL.

Windows support is a [planned enhancement](https://github.com/weaveworks/weave-gitops/issues/663).

### Git Providers
Weave GitOps currently supports SaaS versions of GitHub and GitLab (CLI only).

## Installing the Weave GitOps CLI

To install the `Gitops` CLI, please follow the following steps:

```console
curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.4.1/gitops-$(uname)-$(uname -m)" -o gitops
chmod +x gitops
sudo mv ./gitops /usr/local/bin/gitops
gitops version
```

you should see:

```console
Current Version: v0.0.0
GitCommit: c0d130b

##BuildTime: 2021-11-03_20:00:24
Branch: HEAD
### Kubernetes Cluster
Weave GitOps is compatable with conformant Kubernetes distributions which match the minimum required version level of Flux x Version: v0.21.0
```
