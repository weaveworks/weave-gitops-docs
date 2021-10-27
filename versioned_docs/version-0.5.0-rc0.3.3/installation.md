---
sidebar_position: 1
---

# Installing the CLI

The `gitops` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `gitops` CLI, please follow the following steps:

```console
curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.5.0-rc0.3.3/gitops-$(uname)-$(uname -m)" -o gitops
chmod +x gitops
sudo mv ./gitops /usr/local/bin/gitops
gitops version
```

You should see:

```console
Current Version: v0.0.0
GitCommit: c21522b
BuildTime: 2021-10-27_14:27:20
Branch: HEAD
Flux Version: v0.19.1
```
