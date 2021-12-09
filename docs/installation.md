---
sidebar_position: 1
---
# Installation

## Pre-requisites

### Kubernetes Cluster
Weave GitOps is compatible with conformant Kubernetes distributions which match the minimum required version level of [Flux](https://fluxcd.io/docs/installation/#prerequisites).

### CLI
The `gitops` command-line interface is currently supported on Mac (x86 and Arm), and Linux including WSL.

Windows support is a [planned enhancement](https://github.com/weaveworks/weave-gitops/issues/663).

### Git Providers
Weave GitOps currently supports SaaS versions of GitHub and GitLab (CLI only).

## Installing the Weave GitOps CLI

To install the `Gitops` CLI, please follow the following steps:

```console
curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.5.0/gitops-$(uname)-$(uname -m)" -o gitops
chmod +x gitops
sudo mv ./gitops /usr/local/bin/gitops
gitops version
```

You should see:

```console
Current Version: 0.5.0
GitCommit: 0f31ce970e386908a50107ce00c89867e8c2e861
BuildTime: 2021-12-02T22:55:42Z
Branch: HEAD
Flux Version: v0.21.0
```
