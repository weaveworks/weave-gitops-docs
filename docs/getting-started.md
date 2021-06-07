---
sidebar_position: 2
---

# Getting Started

Let's get an app deployed with **Weave Gitops**.

**This is Work In Progress**

### Overview

In this short guide, we will see how to get a simple workload running in a cluster using GitOps, and then make a change to that deployment and see it updated automatically 
via GitOps. Further guides will then show how to move that workload into staging and/or production. 

## Pre-requisites

At the moment, Weave GitOps supports [Github](https://github.com). [Gitlab](https://gitlab.com) and other Git providers are coming soon.

To get this working you need:
1. A Github account 
2. A Github token and SSH key
3. kubectl installed 
4. A development Kubernetes cluster (e.g. kind)

### Github setup

Please follow the [Github SSH key setup guide](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) if you don't already have an SSH key for Github.

You also need a Github Token with `repo` access. Please follow the [Github guide](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Make sure that the token is in your environment as `GITHUB_TOKEN`

### Install the CLI

Please follow the instructions in the  [CLI installation page](/docs/installation) to install the command-line tool.

## Getting Started Steps

1. If necessary create a kind cluster:
```console
kind create cluster
```
```
Creating cluster "kind" ...
 ✓ Ensuring node image (kindest/node:v1.20.2) 🖼
 ✓ Preparing nodes 📦
 ✓ Writing configuration 📜
 ✓ Starting control-plane 🕹️
 ✓ Installing CNI 🔌
 ✓ Installing StorageClass 💾
Set kubectl context to "kind-kind"
You can now use your cluster with:

kubectl cluster-info --context kind-kind

Have a nice day! 👋
```

2. Install Weave GitOps into the cluster
```console
wego install | kubectl apply -f -
```

You should see:
```
namespace/flux-system created
namespace/wego-system created
customresourcedefinition.apiextensions.k8s.io/alerts.notification.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/buckets.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/gitrepositories.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/helmcharts.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/helmreleases.helm.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/helmrepositories.source.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/kustomizations.kustomize.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/providers.notification.toolkit.fluxcd.io created
customresourcedefinition.apiextensions.k8s.io/receivers.notification.toolkit.fluxcd.io created
serviceaccount/helm-controller created
serviceaccount/kustomize-controller created
serviceaccount/notification-controller created
serviceaccount/source-controller created
clusterrole.rbac.authorization.k8s.io/crd-controller-wego-system created
clusterrolebinding.rbac.authorization.k8s.io/cluster-reconciler-wego-system created
clusterrolebinding.rbac.authorization.k8s.io/crd-controller-wego-system created
service/notification-controller created
service/source-controller created
service/webhook-receiver created
deployment.apps/helm-controller created
deployment.apps/kustomize-controller created
deployment.apps/notification-controller created
deployment.apps/source-controller created
networkpolicy.networking.k8s.io/allow-egress created
networkpolicy.networking.k8s.io/allow-scraping created
networkpolicy.networking.k8s.io/allow-webhooks created
customresourcedefinition.apiextensions.k8s.io/apps.wego.weave.works created
```

4. Wait for Weave GitOps controllers to come online:

```console
kubectl get all --namespace wego-system
```
You need to wait until all the controllers are running, e.g.:
```
NAME                                       READY   STATUS    RESTARTS   AGE
helm-controller-69667f94bc-dhhtg           1/1     Running   0          52s
kustomize-controller-6977b8cdd4-874n9      1/1     Running   0          52s
notification-controller-5c4d48f476-zf7kj   1/1     Running   0          52s
source-controller-b4b88948f-lk8rd          1/1     Running   0          52s
```

5. Fork the nginx repo:
Fork the following repository on Github:
```
https://github.com/pzfreo/nginx
```

6. Clone the fork using SSH:
```
git clone git@github.com:<yr-org-goes-here>/nginx.git
```
(replace the `<yr-org-goes-here>` with your own information)

7. Configure Weave GitOps to deploy the repository

```console
cd nginx
wego add . --private-key=<created private key file>
```

You should see something like:
```console
Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/nginx-fork.git' of origin from git config...

done

Checking cluster status... FluxInstalled

✚ deploy key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK9/sPRvz8t5sExOC/PAdiVKIX3g3rwh0q5f24djQ2T0

► secret 'nginx-fork' created in 'wego-system' namespace
---
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: GitRepository
metadata:
  name: nginx-fork
  namespace: wego-system
spec:
  interval: 30s
  ref:
    branch: main
  secretRef:
    name: nginx-fork
  url: ssh://git@github.com/pzfreo/nginx-fork.git

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: nginx-fork-dotwego-targets-kind-kind
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./wego/targets/kind-kind
  prune: true
  sourceRef:
    kind: GitRepository
    name: nginx-fork
  validation: client

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: nginx-fork-dotwego-apps-nginx-fork
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./wego/apps/nginx-fork
  prune: true
  sourceRef:
    kind: GitRepository
    name: nginx-fork
  validation: client

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: nginx-fork-dot
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./
  prune: true
  sourceRef:
    kind: GitRepository
    name: nginx-fork
  validation: client

Commiting and pushing wego resources for application...
Pushing app manifests to repository
```

8. This will have created a `.wego` directory in your repository (you can configure where this goes - see [GitOps Automation configuration](/docs/goat))

This directory contains the GitOps Automation configuration. 

If you do a tree inside this directory you should see something like:
```
.
├── apps
│   └── nginx
│       └── app.yaml
└── targets
    └── kind-kind
        └── nginx
            └── nginx-gitops-runtime.yaml

5 directories, 2 files
```

You can find out more about these YAMLs [here](/docs/goat).

8. Wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace my-nginx
```
```
NAME                     READY   STATUS    RESTARTS   AGE
nginx-646c686cd6-brvsm   1/1     Running   0          1m38s
nginx-646c686cd6-hsn6v   1/1     Running   0          1m38s
nginx-646c686cd6-qgzf7   1/1     Running   0          1m38s
```

9. You can use the `wego app status` command to see the reconciliation:

```
NAME                READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
gitrepository/nginx	True 	Fetched revision: main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	False

NAME                                            READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
kustomization/nginx-dot                      	True 	Applied revision: main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	False
kustomization/nginx-dotwego-apps-nginx-fork  	True 	Applied revision: main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	False
kustomization/nginx-dotwego-targets-kind-kind	True 	Applied revision: main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	main/65ab909cee2a4f2c9727dd0eb9044dfee0aad7be	False
```

10. Try committing an update to the number of replicas to your forked repository:
```yaml
spec:
  replicas: 4
```

11. Wait approximately 30s for the reconciliation to take place

You should now see a 4th replica appear:
```console
kubectl get pods --namespace my-nginx
```
```
NAME                     READY   STATUS    RESTARTS   AGE
nginx-646c686cd6-brvsm   1/1     Running   0          13m
nginx-646c686cd6-gmxlz   1/1     Running   0          6s
nginx-646c686cd6-hsn6v   1/1     Running   0          13m
nginx-646c686cd6-qgzf7   1/1     Running   0          13m
```

12. Congratulations 

You have successfully deployed GitOps! Well done.