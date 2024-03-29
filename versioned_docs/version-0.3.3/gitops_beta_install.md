## gitops beta install

Install or upgrade GitOps

### Synopsis

The beta install command deploys GitOps in the specified namespace, 
adds a cluster entry to the GitOps repo, and persists the GitOps runtime into the
repo.

```
gitops beta install [flags]
```

### Examples

```
  # Install GitOps in the wego-system namespace
  gitops beta install --app-config-url ssh://git@github.com/me/mygitopsrepo.git
```

### Options

```
      --app-config-url string   URL of external repository that will hold automation manifests
      --dry-run                 outputs all the manifests that would be installed
  -h, --help                    help for install
```

### Options inherited from parent commands

```
      --config string      config file (default is $HOME/.beta.yaml)
  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### SEE ALSO

* [gitops beta](gitops_beta.md)	 - Experimental commands

###### Auto generated by spf13/cobra on 25-Oct-2021
