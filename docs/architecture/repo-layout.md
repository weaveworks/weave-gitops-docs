---
title: Repository Layout
sidebar_position: 10
---


# Repository layout

GitOps is founded on the concept that your applications and infrastructure are defined as declarative artifacts, i.e., yaml files. These artifacts are stored in a versioned and immutable place, e.g., Git. And can be automatically retrieved and applied to the running system, i.e., Kubernetes. Your repository layout is critical for success with GitOps.  

Weave GitOps creates a directory structure predicated on a few high-level concepts to drive consistency while allowing flexibility. The repository structure is designed to support applications and clusters. Applications will have environments, e.g., development, staging, production. Clusters will have workloads that run system-wide or are shared between applications and workloads serving a single purpose. The flexibility comes from our use of [kustomize](https://kustomize.io/).

Weave GitOps doesn't dictate where your application manifests live. However, we recommend they live with your application. That being said, we don't prohibit using the Weave GitOps repository for your application manifests.

## What is it?
```bash
.weave-gitops/
├── apps
│   └── my-app
│       └── kustomization.yaml
└── clusters
    └── my-cluster
        └── system
            └── kustomization.yaml
        └── user
            └── kustomization.yaml
```

When you install Weave GitOps into a cluster, we create a directory for the cluster under `clusters` and set up two [Flux kustomization controllers](https://fluxcd.io/docs/components/kustomize/). One for syncing system-level workloads `cluster/<name>/system` and one for syncing user-level workloads `cluster/<name>/user`. Initially, the system-level workloads consist of the Flux manifests and the kustomization definition for syncing the user-level workloads from the user directory.

When you add an application to Weave GitOps, a directory is created for the application under `apps` containing a kustomization file referencing a definition for a [Flux Source](https://fluxcd.io/docs/components/source/) resource defining where the application manifests live, plus either a [Helm](https://fluxcd.io/docs/components/helm/) or [kustomization](https://fluxcd.io/docs/components/kustomize/) resource for applying the application manifests to the cluster. In addition, an entry is made into the cluster/&lt;name&gt;/user/kustomization.yaml file pointing to the application directory.

### Advanced topics
* Controlling the release of changes to your cluster via branching, tagging, or git SHAs.
* Environments for your applications

## FAQ
**Why is there a single configuration repository?**
Having a single configuration repo is a simplification that makes it easier to manage a set of clusters and their workloads. It contains GitOps automation for your applications, and we recommend your application configuration lives in a separate repository.

**Why is there a `system` and `user` directory under my clusters?**
We decided to mirror what Linux does with `/usr/bin` and `/usr/local/bin`. Workloads that apply to the cluster as a whole should live in the `system` directory. This separation also allows you to set up a [codeowners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) solution for managing access to that directory.

**What if my application has components living in more than one repository?**
You can use the Flux CLI to generate a git source and helm/kustomization files and add them to the apps/&lt;name&gt;/kustomization file. Once you commit and push the changes, ideally in a branch with a PR, the Weave GitOps automation will do the rest to add those components to the cluster.  

e.g., 
```bash
gitops flux create source git foo \
  --url https://github.com/myorg/foo \
  --branch dev \
  --export > my-app-foo-source.yaml
gitops flux create kustomization foo \
  --source GitRepository/foo \
  --export > my-app-foo-kustomization.yaml
vi kustomization.yaml (adding reference to the two files created)
```
## Further reading
* Flux suggestions on [ways of structuring your repositories](https://fluxcd.io/docs/guides/repository-structure/)