---
sidebar_position: 1
---

# Installing the CLI

The `wego` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `wego` CLI, please follow the following steps:

```console
curl -L https://github.com/weaveworks/weave-gitops/releases/download/v0.1.0-rc.1/wego-$(uname)-$(uname -m) -o wego
chmod +x wego
sudo mv ./wego /usr/local/bin/wego
wego version
```

You should see something like:
```console
Current Version: 0.1.0-rc.1
GitCommit: 83bd9e7deffa9e45531389a5c10c8da9670512b6
BuildTime: 2021-06-29T14:09:23Z
Branch: HEAD
Flux Version: v0.13.2
```


