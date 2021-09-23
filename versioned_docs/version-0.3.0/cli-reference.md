---
sidebar_position: 3
---

# CLI Reference

## `gitops`

`gitops` is the command-line interface for installing and controlling the Weave GitOps infrastructure

```console
Weave GitOps

Usage:
  gitops [command]

Available Commands:
  app
  flux        Use flux commands
  help        Help about any command
  install     Install or upgrade GitOps
  uninstall   Uninstall GitOps
  version     Display wego version

Flags:
  -h, --help               help for wego
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output

Use "gitops [command] --help" for more information about a command.
```

### `gitops install`

`gitops install` will install Weave GitOps into the current Kubernetes cluster. By default it will use the `wego-system` namespace, but you can change this.

```console
The install command deploys GitOps in the specified namespace.
If a previous version is installed, then an in-place upgrade will be performed.

Usage:
  gitops install [flags]

Examples:
  # Install GitOps in the wego-system namespace
  gitops install

Flags:
      --dry-run   outputs all the manifests that would be installed
  -h, --help      help for install

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `gitops uninstall`

`gitops uninstall` removes the Weave GitOps controllers from the current Kubernetes cluster.

```console
The uninstall command removes GitOps components from the cluster.

Usage:
  gitops uninstall [flags]

Examples:
  # Uninstall GitOps from the wego-system namespace
  gitops uninstall

Flags:
      --dry-run   outputs all the manifests that would be uninstalled
  -h, --help      help for uninstall

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```
## `gitops app`

Weave GitOps enables continuous deployment of workloads to Kubernetes targets. An "app" is a workload that can be deployed.

```console
Usage:
  gitops app [flags]
  gitops app [command]

Examples:

  # Get last 10 commits for an application
  gitops app <app-name> get commits

  # Add an application to gitops from local git repository
  gitops app add . --name <app-name>

  # Remove an application from gitops
  gitops app remove <app-name>

  # Status an application under gitops control
  gitops app status <app-name>

  # List applications under gitops control
  gitops app list

  # Pause gitops automation
  gitops app pause <app-name>

  # Unpause gitops automation
  gitops app unpause <app-name>

Available Commands:
  add         Add a workload repository to a gitops cluster
  list        List applications under wego control
  pause       Pause an application
  remove      Remove an app from a gitops cluster
  status      Get status of a workload under wego control
  unpause     Unpause an application

Flags:
  -h, --help   help for app

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output

Use "gitops app [command] --help" for more information about a command.
```

### `gitops app add`

`gitops app add` adds an application workload to the GitOps workflow. The simplest way to use this is to set the current directory to
point to a repository that you want GitOps'ed into the cluster and use `gitops app add .`. By default, this will create a pull request for the repository containing the requisite GitOps machinery to manage your application. Once the pull request is approved and merged, your application will be managed by GitOps. Alternatively, if --auto-merge=true is specified, the GitOps support will be directly added to the Git repository, skipping the pull request.

```console
Associates an additional application in a git repository with a cluster so that its contents may be managed via GitOps

Usage:
  gitops app add [--name <name>] [--url <url>] [--branch <branch>] [--path <path within repository>] [--private-key <keyfile>] <repository directory> [flags]

Examples:
gitops app add .

Flags:
      --app-config-url string    URL of external repository (if any) which will hold automation manifests; NONE to store only in the cluster
      --branch string            Branch to watch within git repository (default "main")
      --chart string             Specify chart for helm source
      --deployment-type string   deployment type [kustomize, helm] (default "kustomize")
      --dry-run                  If set, 'gitops app add' will not make any changes to the system; it will just display the actions that would have been taken
  -h, --help                     help for add
      --name string              Name of remote git repository
      --path string              Path of files within git repository (default "./")
      --private-key string       Private key to access git repository over ssh
      --url string               URL of remote repository
      --auto-merge               If set, 'gitops app add' will merge automatically into the specified --branch (default false)

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
  ```

### `gitops app status`

Get the status of a GitOps'ed app

```console
Usage:
  gitops app status <app-name> [flags]

Examples:
gitops app status podinfo

Flags:
  -h, --help   help for status

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `gitops app list`

List the weave-gitops apps currently deployed in the cluster

```console
Usage:
  gitops app list [flags]

Examples:
gitops app list

Flags:
  -h, --help   help for list

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `gitops app pause`

Pause an application

```console
Usage:
  gitops app pause <app-name> [flags]

Examples:
gitops app pause podinfo

Flags:
  -h, --help   help for pause

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `gitops app unpause`

Unpause an application

```console
Usage:
  gitops app unpause <app-name> [flags]

Examples:
gitops app unpause podinfo

Flags:
  -h, --help   help for unpause

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### `gitops app remove`

Remove an application from a gitops cluster so it will no longer be managed via GitOps

```console
Usage:
  gitops app remove [--private-key <keyfile>] <app name> [flags]

Examples:

  # Remove application from gitops control via immediate commit
  gitops app remove podinfo


Flags:
      --dry-run              If set, 'gitops app remove' will not make any changes to the system; it will just display the actions that would have been taken
  -h, --help                 help for remove
      --name string          Name of application
      --private-key string   Private key to access git repository over ssh

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

## `gitops flux`

This command enables access to and control of the underlying Flux runtime.

Please see [flux documentation](https://fluxcd.io/docs/cmd/flux/)

## `gitops version`

```console
Display gitops version

Usage:
  gitops version [flags]

Flags:
  -h, --help   help for version

Global Flags:
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

