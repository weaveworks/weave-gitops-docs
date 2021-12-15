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
curl --silent --location "https://github.com/weaveworks/weave-gitops/releases/download/v0.6.0-rc1/tmp
sudo mv /tmp/gitops /usr/local/bin
gitops version
```

Alternatively, macOS users can use Homebrew:

```console
brew tap weaveworks/tap
brew install weaveworks/tap/gitops
```

You should see:

```console
Current Version: v0.6.0-rc0-2-g7e9108eb
GitCommit: 7e9108eb
BuildTime: 2021-12-15_22:43:03
Branch: HEAD
Flux Version: v0.21.0
```