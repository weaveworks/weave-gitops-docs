---
sidebar_position: 2
---

# Getting Started

Let's get an app deployed with **Weave GitOps**.

*This is Work In Progress*

Follow our workshops where we go through these steps!
- [Upcoming LIVE Workshop: 20 Sep 2021](https://www.meetup.com/Weave-User-Group/events/280492194/)
- [Last Recorded Workshop: 20 Aug 2021](https://youtu.be/euggUTPJzro)

## Overview

In this short guide, we will see how to get a simple workload running in a cluster using GitOps, and then make a change to that deployment and see it updated automatically
via GitOps. Further guides will then show how to move that workload into staging and/or production.

## Pre-requisites

This guide is for Mac and Linux only (so far!).
At the moment, Weave GitOps supports [GitHub](https://github.com) and [Gitlab](https://gitlab.com).

*Other Git providers are coming soon.*

To follow along with this guide you will need:
1. A GitHub account
2. kubectl installed [instructions](https://kubernetes.io/docs/tasks/tools/#kubectl)
3. A development Kubernetes cluster (this guide uses [kind](https://kind.sigs.k8s.io/docs/user/quick-start/))
4. Kind requires [Docker](https://docs.docker.com/get-docker/)

## Install the Weave GitOps CLI

Please follow the instructions in the  [CLI installation page](installation.md  ) to install the command-line tool.

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

Run `kubectl cluster-info --context kind-kind`

### Install Weave GitOps onto the cluster

2. Install Weave GitOps into the currently active Kubernetes cluster:
```console
gitops install
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
✔ image-reflector-controller: deployment ready
✔ image-automation-controller: deployment ready
✔ source-controller: deployment ready
✔ kustomize-controller: deployment ready
✔ helm-controller: deployment ready
✔ notification-controller: deployment ready
✔ install finished
```

3. You can see what has been installed:

```console
kubectl get pods --namespace wego-system
```

```
NAME                                           READY   STATUS    RESTARTS   AGE
helm-controller-69667f94bc-ngpwv               1/1     Running   0          113s
image-automation-controller-6cd8b8fb95-ktgz7   1/1     Running   0          113s
image-reflector-controller-55fb577bf9-bhs2b    1/1     Running   0          113s
kustomize-controller-6977b8cdd4-6p762          1/1     Running   0          113s
notification-controller-5c4d48f476-nwrkx       1/1     Running   0          112s
source-controller-b4b88948f-kz2lr              1/1     Running   0          112s
```

### Configure Weave GitOps to reconcile the workload automatically

First we will fork a basic workload repository, then we will add the GitOps automation to deploy into the cluster

#### Fork and clone the Podinfo repository

We are going to use a deployment of the [podinfo](https://github.com/stefanprodan/podinfo) sample Kubernetes app as the workload to test.

*Please note that these instructions do not use the base podinfo repository, but a specific repository containing only the deployment YAML*

4. Fork the following repository on GitHub:

[https://github.com/wego-example/podinfo-deploy](https://github.com/wego-example/podinfo-deploy)

![fork](/img/github-fork.png)

5. Clone the fork **using SSH** (replacing `<yr-org-goes-here>`)
```
git clone git@github.com:<yr-org-goes-here>/podinfo-deploy.git
```

(*Note Weave GitOps doesn't support repositories that are cloned via HTTPS*)

6. Change directory into the path where you cloned your fork of `podinfo-deploy` - for example:
```console
cd podinfo-deploy
```

This repository only contains Kubernetes YAMLs (and a README):
```
.
├── README.md
├── backend
│   ├── deployment.yaml
│   ├── hpa.yaml
│   └── service.yaml
├── frontend
│   ├── deployment.yaml
│   └── service.yaml
└── namespace.yaml
2 directories, 7 files
```

7. Let's enable GitOps for this workload
```console
gitops app add .
```

You should see something like:
```console
◎ Checking cluster status
✔ GitOps installed

Visit this URL to authenticate with Github:

https://github.com/login/device

Type the following code into the page at the URL above: ABCD-1234

Waiting for authentication flow completion...

```

Copy the code and visit the URL shown to grant temporary `repo` access for Weave GitOps.

![device flow activation](/img/github-device-flow-start.png)

You should then see this confirmation:

![device flow complete](/img/github-device-flow-complete.png)

Once complete, the process will continue and you will see something like:

```console
Authentication successful!

uploading deploy key
Deploy key generated and uploaded to git provider
Adding application:

Name: nginx
URL: ssh://git@github.com/pzfreo/podinfo-deploy.git
Path: ./
Branch: main
Type: kustomize

✚ Generating Source manifest
✚ Generating GitOps automation manifests
✚ Generating Application spec manifest
► Cloning ssh://git@github.com/pzfreo/podinfo-deploy.git
Pull Request created: <link to PR>

► Applying manifests to the cluster
► Committing and pushing gitops updates for application
✔ App is up to date
```

8. A Pull Request has been created against the git branch.

![PR](/img/podinfo-pr.png)

Go to your GitHub fork and merge the Pull Request.

![Merge](/img/podinfo-pr-merge.png)

Once you have merged the PR it should look like this:
![Merge Complete](/img/podinfo-pr-merge-complete.png)

9. Once the PR is merged wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace test
```
```
NAME                        READY   STATUS    RESTARTS   AGE
backend-66b5655895-ms79n    1/1     Running   0          42s
frontend-7fb9f4bf99-qmkqh   1/1     Running   0          42s
```

10. You can use the `gitops app status` command to see the reconciliation.


```console
gitops app status podinfo-deploy
```
```
Latest successful deployment time: 2021-06-29T14:41:14Z
NAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED
wego-system gitrepository/podinfo-deploy    True    Fetched revision: main/cb6fc97b304740347e1d98195bc3d972ee07d733 main/cb6fc97b304740347e1d98195bc3d972ee07d733   False

NAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED
wego-system kustomization/podinfo-deploy    True    Applied revision: main/cb6fc97b304740347e1d98195bc3d972ee07d733 main/cb6fc97b304740347e1d98195bc3d972ee07d733   False
```

This shows you when the last deployment was as well as the specific SHA from Git that has been deployed.

You have successfully deployed the app!

11. `gitops app add` will have created a `.wego` directory in your repository (you can configure where this goes - see [GitOps Automation configuration](gitops-automation.md))

This directory contains the GitOps Automation configuration.

If you do a tree inside this directory you should see something like:
```
$ tree .wego/
.wego/
├── apps
│   └── podinfo-deploy
│       └── app.yaml
└── targets
    └── kind-kind
        └── podinfo-deploy
            └── podinfo-deploy-gitops-runtime.yaml

5 directories, 2 files
```

You can find out more about these YAMLs and the `.wego` directory [here](gitops-automation.md).

Notice that `gitops` has checked in this YAML into your fork (*This will change in a future release to create a PR against your repository instead*).

12. To access the `podinfo` UI you can set up a port forward into the pod.
```console
kubectl port-forward service/frontend 9898:9898 --namespace test
```
```
Forwarding from 127.0.0.1:9898 -> 9898
Forwarding from [::1]:9898 -> 9898
```
NB: This command does not return

Now you can browse [http://localhost:9898](http://localhost:9898)

You should see something like:

![Podinfo](/img/podinfo-web.png)

Use CTRL+C to cancel the `kubectl port-forward` command to continue with your command prompt.

### See GitOps reconciliation

13. The real aim of GitOps is not just to deploy once, but to reconcile as well. Let's test that out.
Edit `frontend/deployment.yaml`

Change the `PODINFO_UI_COLOR` to grey:
```yaml
        env:
        - name: PODINFO_UI_COLOR
          value: "#888888"
```

14. Commit the change to your forked repository.
```
git add .
git commit -m "change color"
git push
```

(*If you want an even better experience, create a PR and then merge!*)

15. Wait for the reconciliation to take place

```console
gitops app status podinfo-deploy
```
```
Latest successful deployment time: 2021-06-09T10:36:26Z
NAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED
wego-system gitrepository/podinfo-deploy    True    Fetched revision: main/0927f4649817186103f14612bd3a0426d21de601 main/0927f4649817186103f14612bd3a0426d21de601   False

NAMESPACE   NAME                            READY   MESSAGE                                                         REVISION                                        SUSPENDED
wego-system kustomization/podinfo-deploy    True    Applied revision: main/0927f4649817186103f14612bd3a0426d21de601 main/0927f4649817186103f14612bd3a0426d21de601   False
  ```

16. You should see the pods recycle
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

17. **Congratulations**

You have successfully demonstrated GitOps using Weave GitOps! Well done.