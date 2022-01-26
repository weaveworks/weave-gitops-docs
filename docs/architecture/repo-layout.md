---
title: Repository Layout
sidebar_position: 10
---


# Repository layout

In GitOps, the configuration repository is the 


## FAQ
**Why is there a single configuration repository?**
Having a single configuration repo is a simplificiationn we think makes it easier to manage a set of clusters and their workloads. It contains GitOps automation for your applications and we recommed your application configuration lives in a separate repository.

**Why is there a `system` and `user` directory under my clusters?**
We decided to mirror what linux does with `/usr/bin` and `/usr/local/bin`.  Workloads that apply to the cluster as a whole should live in the `system` directory.  Having this separation also allows you to setup a [codeowners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) solution for managing access to that directory.
