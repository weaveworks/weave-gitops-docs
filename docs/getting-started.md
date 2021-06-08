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

This guide is for Mac and Linux only (so far!).
At the moment, Weave GitOps supports [Github](https://github.com). 

*[Gitlab](https://gitlab.com) and other Git providers are coming soon.*

To get this working you need:
1. A Github account 
2. A Github token
3. SSH installed
4. kubectl installed 
5. A development Kubernetes cluster (this guide uses [kind](https://kind.sigs.k8s.io/docs/user/quick-start/))

### Github setup

#### Github Token
You need a Github Token with `repo` access. Please follow the [Github guide](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Make sure that the token is in your environment as `GITHUB_TOKEN`

#### Deploy Key

Weave GitOps works in a "pull" mode, which means that the GitOps runtime pulls the cluster configuration from Git. To do this, it needs an SSH "deploy key" with access to the git repository that you are working with. This key will be stored in the cluster as a secret, so it is recommended to create a new key for this.

1. First, let's create the key. Substitute your email address
```console
ssh-keygen -t ed25519 -C "your_email@example.com"
```
You should see
```console
> Generating public/private ed25519 key pair.
```
2. When prompted to enter a location to save the file **do not hit enter**:
```console
> Enter a file in which to save the key (/Users/you/.ssh/id_ed25519): [Press enter]
```
For **Mac** use: 
```
/Users/<you>/.ssh/wego-deploy
```
(replacing `<you>`)


For **Linux** use: 
```
/home/<you>/.ssh/wego-deploy
```
(replacing `<you>`)

3. This will generate two files: `~/.ssh/wego-deploy` (the private key) and `~/.ssh/wego-deploy.pub` (the public key)

#### Fork and clone the Podinfo repository

We are going to use the [podinfo](https://github.com/stefanprodan/podinfo) sample Kubernetes app as the workload to test.

1. Fork the following repository on Github:
```
https://github.com/stefanprodan/podinfo
```

2. Clone the fork using SSH (replacing `<yr-org-goes-here>`)
```
git clone git@github.com:<yr-org-goes-here>/podinfo.git
cd podinfo
```

#### Add the deploy key to the forked repository

1. Go to the forked repository on Github:
![fork](/img/podinfo-fork.png)

2. From your repository, click Settings.

3. In the sidebar, click Deploy Keys, then click Add deploy key.
![deploy-key](/img/podinfo-deploy-keys.png)

4. Provide a title (e.g. `wego-deploy`), paste in your public key.

5. Click "Allow write access"

![add-deploy-key](/img/podinfo-add-deploy-key.png)

6. Click `Add Key`


### Install the CLI

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

1. Install Weave GitOps into the currently active Kubernetes cluster:
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

The install will pause while the containers are loaded into the cluster. Once the system is verified you will see:

```
✔ notification-controller: deployment ready
✔ image-reflector-controller: deployment ready
✔ image-automation-controller: deployment ready
✔ source-controller: deployment ready
✔ kustomize-controller: deployment ready
✔ helm-controller: deployment ready
✔ install finished
```

2. You can see what has been installed:

```console
kubectl get all --namespace wego-system
```

```
NAME                                           READY   STATUS    RESTARTS   AGE
helm-controller-69667f94bc-52p8f               0/1     Running   0          110s
image-automation-controller-6cd8b8fb95-4ft79   1/1     Running   0          110s
image-reflector-controller-55fb577bf9-r2c98    1/1     Running   0          110s
kustomize-controller-6977b8cdd4-4m9wr          1/1     Running   0          110s
notification-controller-5c4d48f476-5cv64       1/1     Running   0          110s
source-controller-b4b88948f-47b5r              1/1     Running   0          110s
```

### Configure Weave GitOps to reconcile the workload automatically

1. Change directory into the path where you cloned your fork of podinfo. e.g.:
```console
cd <yrdirectory>/podinfo
```

2. Take a quick look at the podinfo repository layout. There are multiple different directories with k8s deployment YAMLs. 

3. We will to use the YAMLs in `deploy/webapp`. Notice that the podinfo branch is still called `master` not `main` (because there are many things that will break if it is changed!).

We will configure Weave GitOps to deploy the application from the path `deploy/webapp` using branch `master` of the repository at `.` using your private key

```console
wego app add . --path=deploy/webapp --branch=master  --private-key=~/.ssh/wego-deploy
```

You should see something like:
```console
Updating parameters from environment... using URL: 'ssh://git@github.com/pzfreo/podinfo.git' of origin from git config...

done

Checking cluster status... FluxInstalled

✚ deploy key: ssh-ed25519 xxxx/yyyy

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
  name: kind-kind-podinfo
  namespace: wego-system
spec:
  interval: 1m0s
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
  name: podinfo-deploy-webapp
  namespace: wego-system
spec:
  interval: 1m0s
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
  interval: 1m0s
  path: ./deploy/webapp
  prune: true
  sourceRef:
    kind: GitRepository
    name: podinfo
  validation: client

Commiting and pushing wego resources for application...
Pushing app manifests to repository
```

4. This will have created a `.wego` directory in your repository (you can configure where this goes - see [GitOps Automation configuration](/docs/gitops-automation))

This directory contains the GitOps Automation configuration. 

If you do a tree inside this directory you should see something like:
```
$ tree .wego/
.wego/
├── apps
│   └── podinfo-deploy-webapp
│       └── app.yaml
└── targets
    └── kind-kind
        └── podinfo-deploy-webapp
            └── podinfo-deploy-webapp-gitops-runtime.yaml

5 directories, 2 files
```
Notice that wego has automatically named the app `podinfo-deploy-webapp`. You can change this with the `--name` option on the `wego app add` command.

You can find out more about these YAMLs and the `.wego` directory [here](/docs/gitops-automation).

Notice that `wego` has checked in this YAML into your fork (*This may change in the future to create a PR instead*).

5. Wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace webapp
```
```
NAME                       READY   STATUS    RESTARTS   AGE
backend-5cd878f8dd-6dhsg   1/1     Running   0          2m32s
frontend-ff74574fc-4jfpt   1/1     Running   0          2m32s
```

6. You can use the `wego app status` command to see the reconciliation:
```console
wego app status podinfo-deploy-webapp
```
```
Latest successful deployment time: 2021-06-07T18:46:49Z
NAMESPACE  	NAME                               	READY	MESSAGE                                                          	REVISION                                       	SUSPENDED
wego-system	kustomization/podinfo-deploy-webapp	True 	Applied revision: master/a5023086275d2dbd79e2cbc6db1e626a1e846e59	master/a5023086275d2dbd79e2cbc6db1e626a1e846e59	False
```

This shows you when the last deployment was as well as the specific SHA from Git that has been deployed.

You have successfully deployed the app!

7. To access the `podinfo` UI you can set up a port forward into the pod.
```console
kubectl port-forward service/frontend 8000:80 --namespace webapp
```
```
Forwarding from 127.0.0.1:8000 -> 9898
Forwarding from [::1]:8000 -> 9898
```

Now you can browse [`http://localhost:8000'](http://localhost:8000)

### See GitOps reconcialiation 

1. The real aim of GitOps is not just to deploy once, but to reconcile as well. Let's test that out. 
Edit `deploy/webapp/frontend/deployment.yaml`

Change the `PODINFO_UI_COLOR` to grey:
```yaml
        env:
        - name: PODINFO_UI_COLOR
          value: "#888888"
```

2. Commit the change to your forked repository.
```
git add .
git commit -m "change color"
git push
```


3. Wait for the reconciliation to take place

```console
wego app status podinfo-deploy-webapp
```
```
Latest successful deployment time: 2021-06-07T19:05:21Z
NAMESPACE  	NAME                               	READY	MESSAGE                                                          	REVISION                                       	SUSPENDED
wego-system	kustomization/podinfo-deploy-webapp	True 	Applied revision: master/21e671e1b8794741ec3773e8a4e7ec4abb1e8ff5	master/21e671e1b8794741ec3773e8a4e7ec4abb1e8ff5	False
```

4. You should see the pods recycle 
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

Restart the `kubectl port-forward` and you will see the color has changed (*If you use a real ingress then you wouldn't need to do this*).

5. **Congratulations**

You have successfully demonstrated GitOps using Weave GitOps! Well done.

6. Next you might like to try using [GitOps with Helm](/docs/examples/helm)