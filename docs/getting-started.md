---
sidebar_position: 2
---

# Getting Started

Let's get an app deployed with **Weave GitOps**! We'll show you how to get a simple application running in a KinD cluster, then make a change to the application in Git, and see it automatically update on the cluster.

You can also join our regular workshops where we go through these steps and help you along the way:
- Next workshop: 18 Nov 2021 - [Intro to Kubernetes & GitOps + Free GitOps Workshop](https://www.meetup.com/Weave-User-Group/
---

## Pre-requisites

To follow along with this guide you will need:
1. A GitHub account
2. kubectl installed - [instructions](https://kubernetes.io/docs/tasks/tools/#kubectl)
3. For our Kubernetes cluster we use [kind](https://kind.sigs.k8s.io/docs/user/quick-start/) which requires [Docker](https://docs.docker.com/get-docker/).
---

## Install the Weave GitOps CLI

```console
curl -L "https://github.com/weaveworks/weave-gitops/releases/download/v0.4.1/gitops-$(uname)-$(uname -m)" -o gitops
chmod +x gitops
sudo mv ./gitops /usr/local/bin/gitops
gitops version
```

For complete instructions see the  [CLI installation page](installation.md).

---

## Prepare your cluster

### 1) Create the cluster

Open a terminal and enter the following:

```console
kind create cluster
```
You should see output similar to:
```
Creating cluster "kind" ...
 ✓ Ensuring node image (kindest/node:v1.21.1) 🖼
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

### 2 - Install Weave GitOps onto the cluster

```console
gitops install
```

The install will take roughly 1-2 minutes depending on your system. 

Once complete, you will see:

```
✔ image-reflector-controller: deployment ready
✔ image-automation-controller: deployment ready
✔ source-controller: deployment ready
✔ kustomize-controller: deployment ready
✔ helm-controller: deployment ready
✔ notification-controller: deployment ready
✔ install finished
```
---
## Configure Weave GitOps to deploy your application

### 3 - Fork the Podinfo repository

For Weave GitOps to set up automation to reconicile the workload, we will need write access to the repository, so we will first fork the podinfo sample repository.

Go to [https://github.com/wego-example/podinfo-deploy](https://github.com/wego-example/podinfo-deploy).

![fork](/img/github-fork.png)

### 4 - Start the GitOps Dashboard web UI

```
gitops ui run
```

This will open the dashboard in your browser at [http://0.0.0.0:9001/](http://0.0.0.0:9001/).

You will see an empty Applications view as shown in the image below.

![GitOps Dashboard web UI - empty applications view](/img/dashboard-applications-empty.png)

### 5 - Add the podinfo application

Click **add application** in the top right of the screen to bring up the following form:

![GitOps Dashboard web UI - add applications form](/img/dashboard-add-application.png)

Next fill out the form with the required values:

- Name: **podinfo-deploy**
- Kubernetes Namespace: **wego-system**  
  -  **Leave as default**, this is where the automation objects for the application will be created.
- Source Repo URL: **\<your-forked-podinfo-repo\>**  
  - For example: `https://github.com/sympatheticmoose/podinfo-deploy` or `git@github.com:sympatheticmoose/podinfo-deploy`
- Config Repo URL: (**leave blank**)  
  - It is **recommended** to use a separate repository as your config repo when deploying multiple applications, potentially to multiple clusters, however, for simplicity - you can also use the same repo as the `Source Repo URL` )
- Path: **./**  
  - This allows you to specify a particular folder with a repository, should the repo contain more than a single applications deployment manifests.
- Branch: (**should not require changing**)

Click **Submit** in the bottom right of the form. This will result in an error as we have not recently authenicated with GitHub, and we are not yet authorized to raise a pull request against your repository.

Click **Authenticate with GitHub** within the error message as shown below:

![Not authenticated error](/img/dashboard-add-application-auth-error.png)

You will be prompted with a screen to copy a code from, before visiting GitHub to authorize Weave GitOps to write to your repositories. Copy the code to your clipboard and click **AUTHORIZE GITHUB ACCESS**.

Paste the code into the screen as shown below:
![device flow activation](/img/github-device-flow-start.png)

You should then see this confirmation:

![device flow complete](/img/github-device-flow-complete.png)

Once authorization has completed, navigate back to the GitOps Dashboard.

The screen should update with a message that the Pull Request has been created, click **Open Pull Requests** to review the PR in GitHub.

![Pull request raised](/img/dashboard-add-application-PR-raised.png)

The Pull Request adds three files. An **Application custom resource** with details about the deployment, a **GitRepository** and a **Kustomization** Merge the Pull Request.

![Merge](/img/podinfo-pr-merge.png)

Once you have merged the PR it should look like this:
![Merge Complete](/img/podinfo-pr-merge-complete.png)

### 6 - View the running application

Once the PR is merged wait for the workload to show up in the cluster:
```console
kubectl get pods --namespace test
```
```
NAME                        READY   STATUS    RESTARTS   AGE
backend-66b5655895-ms79n    1/1     Running   0          42s
frontend-7fb9f4bf99-qmkqh   1/1     Running   0          42s
```

You can use the `gitops get app` command to see the reconciliation.


```console
gitops get app podinfo-deploy
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
gitops get app podinfo-deploy
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
