---
sidebar_position: 3
---

# CLI Reference

## `wego`

`wego` is the command-line interface for installing and controlling the Weave GitOps infrastructure

```console
Weave GitOps

Usage:
  wego [command]

Available Commands:
  app
  flux        Use flux commands
  gitops      Manages your wego installation
  help        Help about any command
  version     Display wego version

Flags:
  -h, --help               help for wego
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output

Use "wego [command] --help" for more information about a command.
```

## `wego gitops`

The gitops sub-command manages the installation and uninstallation of the Weave GitOps system into clusters.

### `wego gitops install`

`wego install` will install Weave GitOps into the current Kubernetes cluster. By default it will use the `wego-system` namespace, but you can change this.

```console
The install command deploys Wego in the specified namespace.
If a previous version is installed, then an in-place upgrade will be performed.

Usage:
  wego gitops install [flags]

Examples:
  # Install wego in the wego-system namespace
  wego gitops install

Flags:
  -h, --help   help for install

Global Flags:
      --dry-run            outputs all the manifests that would be installed
  -n, --namespace string   the namespace scope for this operation (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `wego gitops uninstall`

`wego gitops uninstall` removes the Weave GitOps controllers from the current Kubernetes cluster.

```console
The uninstall command removes Wego components from the cluster.

Usage:
  wego gitops uninstall [flags]

Examples:
  # Uninstall wego in the wego-system namespace
  wego uninstall

Flags:
  -h, --help   help for uninstall

Global Flags:
      --dry-run            outputs all the manifests that would be installed
  -n, --namespace string   the namespace scope for this operation (default "wego-system")
  -v, --verbose            Enable verbose output
```
## `wego app`

Weave GitOps enables continuous deployment of workloads to Kubernetes targets. An "app" is a workload that can be deployed.

```console
Usage:
  wego app [command]

Available Commands:
  add         Add a workload repository to a wego cluster
  list        List applications
  status      Get status of an app

Flags:
  -h, --help   help for app

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output

Use "wego app [command] --help" for more information about a command.
```

### `wego app add`

`wego app add` adds an application workload to the GitOps workflow. The simplest way to use this is to set the current directory to
point to a repository that you want GitOps'ed into the cluster and use `wego app add .`. By default, this will create a pull request for the repository containing the requisite GitOps machinery to manage your application. Once the pull request is approved and merged, your application will be managed by GitOps. Alternatively, if --auto-merge=true is specified, the GitOps support will be directly added to the Git repository, skipping the pull request.

```console
Associates an additional application in a git repository with a wego cluster so that its contents may be managed via GitOps

Usage:
  wego app add [--name <name>] [--url <url>] [--branch <branch>] [--path <path within repository>] [--private-key <keyfile>] <repository directory> [flags]

Examples:
wego app add .

Flags:
      --app-config-url string    URL of external repository (if any) which will hold automation manifests; NONE to store only in the cluster
      --branch string            Branch to watch within git repository (default "main")
      --chart string             Specify chart for helm source
      --deployment-type string   deployment type [kustomize, helm] (default "kustomize")
      --dry-run                  If set, 'wego add' will not make any changes to the system; it will just display the actions that would have been taken
  -h, --help                     help for add
      --name string              Name of remote git repository
      --path string              Path of files within git repository (default "./")
      --private-key string       Private key to access git repository over ssh
      --url string               URL of remote repository
      --auto-merge               If set, 'wego add' will merge automatically into the set --branch (default false)

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
  ```

### `wego app status`

Get the status of a GitOps'ed app

```console
Usage:
  wego app status <app-name> [flags]

Examples:
wego app status podinfo

Flags:
  -h, --help   help for status

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `wego app list`

List the weave-gitops apps currently deployed in the cluster

```console
Usage:
  wego app list [flags]

Examples:
wego app list

Flags:
  -h, --help   help for list

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

## `wego flux`

This command enables access to and control of the underlying Flux runtime.

Please see [flux documentation](https://fluxcd.io/docs/cmd/flux/)

## `wego version`

```console
Display wego version

Usage:
  wego version [flags]

Flags:
  -h, --help   help for version

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

