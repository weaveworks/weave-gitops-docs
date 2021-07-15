---
sidebar_position: 1
---

# Installing the CLI

The `wego` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `wego` CLI, please follow the following steps:

```console
curl -L https://github.com/weaveworks/weave-gitops/releases/download/v0.2.0/wego-$(uname)-$(uname -m) -o wego
chmod +x wego
sudo mv ./wego /usr/local/bin/wego
wego version
```

You should see:
```console
Current Version: 0.2.0
GitCommit: e15d0baef4ffa4798935e0c278becc0f1b275942
BuildTime: 2021-07-07T16:31:47Z
Branch: HEAD
Flux Version: v0.16.0
```


