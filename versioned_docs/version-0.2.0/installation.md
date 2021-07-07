---
sidebar_position: 1
---

# Installing the CLI

The `wego` command-line interface is currently supported on Mac (x86 and Arm), and Linux.
To install the `wego` CLI, please follow the following steps:

```console
curl -L https://github.com/weaveworks/weave-gitops/releases/download/v0.1.0/wego-$(uname)-$(uname -m) -o wego
chmod +x wego
sudo mv ./wego /usr/local/bin/wego
wego version
```

You should see:
```console
Current Version: 0.1.0
GitCommit: ca78d9787e67989a5916d9a4d55259ee04735503
BuildTime: 2021-06-30T14:54:35Z
Branch: HEAD
Flux Version: v0.13.2
```


