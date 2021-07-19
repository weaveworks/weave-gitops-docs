---
sidebar_position: 1
---

# Installing the CLI

The `wego` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `wego` CLI, please follow the following steps:

```console
curl -L https://github.com/weaveworks/weave-gitops/releases/download/v0.2.1/wego-$(uname)-$(uname -m) -o wego
chmod +x wego
sudo mv ./wego /usr/local/bin/wego
wego version
```

You should see:
```console
Current Version: 0.2.1
GitCommit: a5df41ff5e6edaeae60476ca6ea2750211a4b98b
BuildTime: 2021-07-19T16:56:32Z
Branch: HEAD
Flux Version: v0.16.0
```


