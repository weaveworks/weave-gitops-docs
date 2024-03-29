---
sidebar_position: 1
---

# Installing the CLI

The `wego` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `wego` CLI, please follow the following steps:

```console
curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.2.2/wego-$(uname)-$(uname -m)" -o wego
chmod +x wego
sudo mv ./wego /usr/local/bin/wego
wego version
```

You should see:

```console
Current Version: 0.2.2
GitCommit: 466001a7fec68e05c7d4474536aadc91af0dee20
BuildTime: 2021-07-28T21:31:11Z
Branch: HEAD
Flux Version: v0.16.0
```
