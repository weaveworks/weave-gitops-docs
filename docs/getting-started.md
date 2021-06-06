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
helm-controller-69667f94bc-w5kjv           1/1     Running   0          59s
kustomize-controller-6977b8cdd4-m5blk      1/1     Running   0          59s
notification-controller-5c4d48f476-ns4rd   1/1     Running   0          59s
source-controller-b4b88948f-hqqbm          1/1     Running   0          59s
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
Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/nginx.git' of origin from git config...

done

Checking cluster status... FluxInstalled

Verifying kind-kind-wego repository exists...
could not check repository exists: GITHUB_TOKEN not set in environment
~/repos/pzfreo/nginx$ export GITHUB_TOKEN=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
~/repos/pzfreo/nginx$ wego app add . --private-key=/Users/paul/.ssh/wego
Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/nginx.git' of origin from git config...

done

Checking cluster status... FluxInstalled

Verifying kind-kind-wego repository exists...
Creating kind-kind-wego repository...
Cloning ssh://git@github.com/pzfreo/kind-kind-wego.git...
Applying wego platform resources...
✚ deploy key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK9/sPRvz8t5sExOC/PAdiVKIX3g3rwh0q5f24djQ2T0

► secret 'wego' created in 'wego-system' namespace
---
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: GitRepository
metadata:
  name: wego
  namespace: wego-system
spec:
  interval: 30s
  ref:
    branch: main
  secretRef:
    name: wego
  url: ssh://git@github.com/pzfreo/kind-kind-wego

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: wego
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./
  prune: true
  sourceRef:
    kind: GitRepository
    name: wego
  validation: client

✚ deploy key: ssh-ed25519 

► secret 'kind-kind-wego-nginx' created in 'wego-system' namespace
---
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: GitRepository
metadata:
  name: kind-kind-wego-nginx
  namespace: wego-system
spec:
  interval: 30s
  ref:
    branch: main
  secretRef:
    name: kind-kind-wego-nginx
  url: ssh://git@github.com/pzfreo/nginx.git

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: kind-kind-wego-nginx
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./
  prune: true
  sourceRef:
    kind: GitRepository
    name: kind-kind-wego-nginx
  validation: client

Commiting and pushing wego resources for application...
Pushing app manifests to repository
Successfully added kind-kind-wego-nginx to the repository.
```

8. This will have created a new "wego repository"

By default, Weave GitOps creates a new repository in which it deploys the "GitOps Automation" configuration.
This will be created in your Github account and if you used kind will be called
`kind-kind-wego` 

Inside this repository you will find a folder called `apps`, and it will have a folder called something like `kind-kind-wego-nginx`. 

All of these are defaults that are automatically generated by `wego` and can be specified in the `wego app add` command

In that folder you will find a file `app.yaml` that defines the application:
```yaml
apiVersion: wego.weave.works/v1alpha1
kind: Application
metadata:
  name: kind-kind-wego-nginx
spec:
  path: ./
  url: ssh://git@github.com/pzfreo/nginx.git
```

8. Wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace my-nginx
```
```
NAME                     READY   STATUS    RESTARTS   AGE
nginx-646c686cd6-5qbjb   1/1     Running   0          3m
nginx-646c686cd6-lwj44   1/1     Running   0          3m
nginx-646c686cd6-q8gbs   1/1     Running   0          3m
```

9. You can use the `wego app status` command to see the reconciliation:
```
wego app status kind-kind-wego-nginx
```
Latest successful deployment time: 2021-06-06T12:00:30Z
NAMESPACE  	NAME                              	READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
wego-system	gitrepository/kind-kind-wego-nginx	True 	Fetched revision: main/895ff5532e86ec9bae4863b047fb2d0c1879709b	main/895ff5532e86ec9bae4863b047fb2d0c1879709b	False

NAMESPACE  	NAME                              	READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
wego-system	kustomization/kind-kind-wego-nginx	True 	Applied revision: main/895ff5532e86ec9bae4863b047fb2d0c1879709b	main/895ff5532e86ec9bae4863b047fb2d0c1879709b	False
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
nginx-646c686cd6-5qbjb   1/1     Running   0          6m
nginx-646c686cd6-lwj44   1/1     Running   0          6m
nginx-646c686cd6-q8gbs   1/1     Running   0          6m
nginx-646c686cd6-whcsw   1/1     Running   0          35s
```

12. Congratulations 

You have successfully deployed GitOps! Well done.