---
sidebar_position: 1
---

# Installing the CLI

The `gitops` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `gitops` CLI, please follow the following steps:

```console
curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.3.0/gitops-$(uname)-$(uname -m)" -o gitops
chmod +x gitops
sudo mv ./gitops /usr/local/bin/gitops
gitops version
```

You should see:

```console
Current Version: 0.3.0
GitCommit: 00a5e5bb3307a1e8f01cc66b6c514850f2a10e9a
BuildTime: 2021-09-08T23:56:57Z
Branch: HEAD
Flux Version: v0.16.0
```
