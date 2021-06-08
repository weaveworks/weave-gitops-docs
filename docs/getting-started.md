---
sidebar_position: 2
---

# Getting Started

Let's get an app deployed with **Weave GitOps**.

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

Weave GitOps works in a "pull" mode, which means that the GitOps runtime pulls the cluster configuration from Git. To do this, it needs an SSH key with access to your Github account. This key will be stored in the cluster as a secret, so it is recommended to create a new key for this.
Please follow the [Github SSH key setup guide](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

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

You now will have the right `kubeconfig` for the kind cluster.

2. Install Weave GitOps into the currently active Kubernetes cluster:
```console
wego install 
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

5. Fork the podinfo repository:
Fork the following repository on Github:
```
https://github.com/stefanprodan/podinfo
```

6. Clone the fork using SSH:
```
git clone git@github.com:<yr-org-goes-here>/podinfo.git
cd podinfo
```
(replace the `<yr-org-goes-here>` with your own userid or organization)

Take a quick look at the podinfo layout. There are multiple different directories with k8s deployment YAMLs. 
We want to use the YAMLs in `deploy/webapp`.

7. Configure Weave GitOps to deploy the repository

We need to configure Weave GitOps to deploy the application from `deploy/webapp` on branch `master` of the repository at `.` using your private key

```console
wego add . --path=deploy/webapp --branch=master  --private-key=<created private key file>
```


You should see something like:
```console
Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/podinfo.git' of origin from git config...

done

Checking cluster status... FluxInstalled

✚ deploy key: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK9/sPRvz8t5sExOC/PAdiVKIX3g3rwh0q5f24djQ2T0

► secret 'podinfo' created in 'wego-system' namespace
---
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: GitRepository
metadata:
  name: podinfo
  namespace: wego-system
spec:
  interval: 30s
  ref:
    branch: master
  secretRef:
    name: podinfo
  url: ssh://git@github.com/pzfreo/podinfo.git

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: podinfo-dotwego-targets-kind-kind
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./wego/targets/kind-kind
  prune: true
  sourceRef:
    kind: GitRepository
    name: podinfo
  validation: client

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: podinfo-dotwego-apps-podinfo-deploy-webapp
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./wego/apps/podinfo-deploy-webapp
  prune: true
  sourceRef:
    kind: GitRepository
    name: podinfo
  validation: client

---
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: podinfo-deploy-webapp
  namespace: wego-system
spec:
  interval: 5m0s
  path: ./deploy/webapp
  prune: true
  sourceRef:
    kind: GitRepository
    name: podinfo
  validation: client

Commiting and pushing wego resources for application...
Pushing app manifests to repository
```

8. This will have created a `.wego` directory in your repository (you can configure where this goes - see [GitOps Automation configuration](/docs/gitops-automation))

This directory contains the GitOps Automation configuration. 

If you do a tree inside this directory you should see something like:
```
.
├── apps
│   └── podinfo-deploy-webapp
│       └── app.yaml
└── targets
    └── kind-kind
        └── podinfo-deploy-webapp
            └── podinfo-deploy-webapp-gitops-runtime.yaml

```
Notice that wego has automatically named the app `podinfo-deploy-webapp`. You can change this with the `--name` option.

You can find out more about these YAMLs [here](/docs/gitops-automation).

8. Wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace webapp
```
```
NAME                        READY   STATUS    RESTARTS   AGE
backend-5cd878f8dd-rl64h    1/1     Running   0          10m
frontend-86d5db4677-9twpt   1/1     Running   0          9m32s
```

9. You can use the `wego app status` command to see the reconciliation:
```console
wego app status podinfo-deploy-webapp
```
Latest successful deployment time: 2021-06-07T18:46:49Z
NAMESPACE  	NAME                               	READY	MESSAGE                                                          	REVISION                                       	SUSPENDED
wego-system	kustomization/podinfo-deploy-webapp	True 	Applied revision: master/a5023086275d2dbd79e2cbc6db1e626a1e846e59	master/a5023086275d2dbd79e2cbc6db1e626a1e846e59	False
```

This shows you when the last deployment was as well as the specific SHA from Git that has been deployed.

You have successfully deployed the app!

10. To access the `podinfo` UI you can set up a port forward into the pod.
```console
kubectl port-forward service/frontend 8000:80 --namespace webapp
```
```
Forwarding from 127.0.0.1:8000 -> 9898
Forwarding from [::1]:8000 -> 9898
```

Now you can browse [`http://localhost:8000'](http://localhost:8000)

11. The real aim of GitOps is not just to deploy once, but to reconcile as well. Let's test that out. 
Edit `deploy/webapp/frontend/deployment.yaml`

Change the `PODINFO_UI_COLOR` to grey:
```yaml
        env:
        - name: PODINFO_UI_COLOR
          value: "#888888"
```

12. Commit the change to your forked repository.
```
git add .
git commit -m "change color"
git push
```


13. Wait for the reconciliation to take place

```console
wego app status podinfo-deploy-webapp
```
```
Latest successful deployment time: 2021-06-07T19:05:21Z
NAMESPACE  	NAME                               	READY	MESSAGE                                                          	REVISION                                       	SUSPENDED
wego-system	kustomization/podinfo-deploy-webapp	True 	Applied revision: master/21e671e1b8794741ec3773e8a4e7ec4abb1e8ff5	master/21e671e1b8794741ec3773e8a4e7ec4abb1e8ff5	False
```

14. You should see the pods recycle 
```console
kubectl get pods --namespace webapp
```
```
NAME                       READY   STATUS              RESTARTS   AGE
backend-5cd878f8dd-rl64h   1/1     Running             0          33m
frontend-5c45876f-pnxrq    1/1     Running             0          6m51s
frontend-ff74574fc-7ntw4   0/1     ContainerCreating   0          1s
```
And a little later:
```
NAME                       READY   STATUS        RESTARTS   AGE
backend-5cd878f8dd-rl64h   1/1     Running       0          34m
frontend-5c45876f-pnxrq    0/1     Terminating   0          7m9s
frontend-ff74574fc-7ntw4   1/1     Running       0          19s
```
Notice that the backend has not changed and so the backend pod is not affected.

Restart the port forward and you will see the color has changed.

12. Congratulations 

You have successfully demonstrated GitOps using Weave GitOps! Well done.

13. Next you might like to try using [GitOps with Helm](/docs/examples/helm)