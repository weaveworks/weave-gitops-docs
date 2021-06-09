---
sidebar_position: 2
---

# Getting Started

Let's get an app deployed with **Weave GitOps**.

*This is Work In Progress*

## Overview

In this short guide, we will see how to get a simple workload running in a cluster using GitOps, and then make a change to that deployment and see it updated automatically 
via GitOps. Further guides will then show how to move that workload into staging and/or production. 

## Pre-requisites

This guide is for Mac and Linux only (so far!).
At the moment, Weave GitOps supports [Github](https://github.com). 

*[Gitlab](https://gitlab.com) and other Git providers are coming soon.*

To get this working you need:
1. A Github account 
2. A Github token
3. kubectl installed 
4. A development Kubernetes cluster (this guide uses [kind](https://kind.sigs.k8s.io/docs/user/quick-start/))
5. Kind uses Docker [Get Docker](https://docs.docker.com/get-docker/)

### Github Token

You need a Github Token with `repo` access. 

If you don't already have one, please follow the [Github guide](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Make sure that the token is in your environment as `GITHUB_TOKEN`

## Install the CLI

Please follow the instructions in the  [CLI installation page](/docs/installation) to install the command-line tool.

## Getting Started with a Kind cluster and Podinfo workload

### Create the cluster

1. Create a fresh `kind` cluster:
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

### Install Weave GitOps onto the cluster

2. Install Weave GitOps into the currently active Kubernetes cluster:
```console
wego install 
```

You should see:
```
✚ generating manifests
✔ manifests build completed
► installing components in wego-system namespace
◎ verifying installation
```

The install will pause while the containers are loaded into the cluster. (*roughly 1 to 2 minutes depending on your system*)

Once the system is verified you will see:

```
✔ notification-controller: deployment ready
✔ image-reflector-controller: deployment ready
✔ image-automation-controller: deployment ready
✔ source-controller: deployment ready
✔ kustomize-controller: deployment ready
✔ helm-controller: deployment ready
✔ install finished
```

3. You can see what has been installed:

```console
kubectl get pods --namespace wego-system
```

```
NAME                                           READY   STATUS    RESTARTS   AGE
helm-controller-69667f94bc-ptpp7               1/1     Running   0          5m
image-automation-controller-6cd8b8fb95-4wzbh   1/1     Running   0          5m
image-reflector-controller-55fb577bf9-4ccds    1/1     Running   0          5m
kustomize-controller-6977b8cdd4-rlt75          1/1     Running   0          5m
notification-controller-5c4d48f476-smb7r       1/1     Running   0          5m
source-controller-b4b88948f-jwkf4              1/1     Running   0          5m
```

### Configure Weave GitOps to reconcile the workload automatically

First we will fork a basic workload repository, then we will add the `wego` GitOps automation to deploy into the cluster

#### Fork and clone the Podinfo repository

We are going to use a deployment of the [podinfo](https://github.com/stefanprodan/podinfo) sample Kubernetes app as the workload to test.

4. Fork the following repository on Github:

[https://github.com/wego-example/podinfo-deploy](https://github.com/wego-example/podinfo-deploy)

![fork](/img/github-fork.png)

5. Clone the fork **using SSH** (replacing `<yr-org-goes-here>`)
```
git clone git@github.com:<yr-org-goes-here>/podinfo-deploy.git
```

(*Note Weave GitOps doesn't support repositories that are cloned via HTTPS*)

5. Change directory into the path where you cloned your fork of `podinfo-deploy` - for example:
```console
cd podinfo-deploy
```

This repository only contains Kubernetes YAMLs (and a README):
```
.
├── README.md
├── backend
│   ├── deployment.yaml
│   ├── hpa.yaml
│   └── service.yaml
├── frontend
│   ├── deployment.yaml
│   └── service.yaml
└── namespace.yaml

2 directories, 7 files
```

6. Let's enable GitOps for this workload
```console
wego app add . 
```

You should see something like:
```console
Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/podinfo-deploy.git' of origin from git config...

done

Checking cluster status... FluxInstalled

Uploading deploy key

...

Commiting and pushing wego resources for application...
Pushing app manifests to repository
```

(*If the final lines are different, then most likely you have a problem with the SSH key used to deploy.*)

7. Wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace test
```
```
NAME                        READY   STATUS    RESTARTS   AGE
backend-66b5655895-ms79n    1/1     Running   0          42s
frontend-7fb9f4bf99-qmkqh   1/1     Running   0          42s
```

8. You can use the `wego app status` command to see the reconciliation.


```console
wego app status podinfo-deploy
```
```
Latest successful deployment time: 2021-06-09T10:14:09Z
NAMESPACE  	NAME                        	READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
wego-system	gitrepository/podinfo-deploy	True 	Fetched revision: main/3c5c12f48f2bc1fdd09e0e199687f1d76e6a8b5f	main/3c5c12f48f2bc1fdd09e0e199687f1d76e6a8b5f	False

NAMESPACE  	NAME                        	READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
wego-system	kustomization/podinfo-deploy	True 	Applied revision: main/3c5c12f48f2bc1fdd09e0e199687f1d76e6a8b5f	main/3c5c12f48f2bc1fdd09e0e199687f1d76e6a8b5f	False
```

This shows you when the last deployment was as well as the specific SHA from Git that has been deployed.

You have successfully deployed the app!

8. `wego app add` will have created a `.wego` directory in your repository (you can configure where this goes - see [GitOps Automation configuration](/docs/gitops-automation))

This directory contains the GitOps Automation configuration. 

If you do a tree inside this directory you should see something like:
```
$ tree .wego/
.wego/
├── apps
│   └── podinfo-deploy
│       └── app.yaml
└── targets
    └── kind-kind
        └── podinfo-deploy
            └── podinfo-deploy-gitops-runtime.yaml

5 directories, 2 files
```

You can find out more about these YAMLs and the `.wego` directory [here](/docs/gitops-automation).

Notice that `wego` has checked in this YAML into your fork (*This may change in the future to create a PR instead*).

9. To access the `podinfo` UI you can set up a port forward into the pod.
```console
kubectl port-forward service/frontend 9898:9898 --namespace test
```
```
Forwarding from 127.0.0.1:9898 -> 9898
Forwarding from [::1]:9898 -> 9898
```
NB: This command does not return.

Now you can browse [http://localhost:9898](http://localhost:9898)

Use CTRL+C to cancel the `kubectl port-forward` command to continue with your command prompt.

### See GitOps reconciliation 

10. The real aim of GitOps is not just to deploy once, but to reconcile as well. Let's test that out. 
Edit `frontend/deployment.yaml`

Change the `PODINFO_UI_COLOR` to grey:
```yaml
        env:
        - name: PODINFO_UI_COLOR
          value: "#888888"
```

11. Commit the change to your forked repository.
```
git add .
git commit -m "change color"
git push
```

(*If you want an even better experience, create a PR and then merge!*)

12. Wait for the reconciliation to take place

```console
wego app status podinfo-deploy
```
```
Latest successful deployment time: 2021-06-09T10:36:26Z
NAMESPACE  	NAME                        	READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
wego-system	gitrepository/podinfo-deploy	True 	Fetched revision: main/0927f4649817186103f14612bd3a0426d21de601	main/0927f4649817186103f14612bd3a0426d21de601	False

NAMESPACE  	NAME                        	READY	MESSAGE                                                        	REVISION                                     	SUSPENDED
wego-system	kustomization/podinfo-deploy	True 	Applied revision: main/0927f4649817186103f14612bd3a0426d21de601	main/0927f4649817186103f14612bd3a0426d21de601	False
  ```

13. You should see the pods recycle 
```console
kubectl get pods --namespace test
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

Restart the `kubectl port-forward` and you will see the color has changed.

(*If you use a real ingress then you wouldn't need to do this*).

14. **Congratulations**

You have successfully demonstrated GitOps using Weave GitOps! Well done.
