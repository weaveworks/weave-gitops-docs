(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[5948],{41655:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(67294),r=n(36742),i=n(28084),s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){var t,n,o,l,p=e.tiers;return a.createElement(r.Z,{to:(o=(0,i.default)()["docusaurus-plugin-content-docs"],l=null==o||null==(t=o.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==l?void 0:l.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+p,style:s},p)}},90819:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),s=n(41655),o=n(11756),l=n(34323),p={title:"CAPI Templates",sidebar_position:3,hide_title:!0},c=void 0,m={unversionedId:"cluster-management/templates",id:"cluster-management/templates",isDocsHomePage:!1,title:"CAPI Templates",description:"{frontMatter.title}",source:"@site/docs/cluster-management/templates.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/templates",permalink:"/docs/next/cluster-management/templates",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cluster-management/templates.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"CAPI Templates",sidebar_position:3,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Cluster API Providers",permalink:"/docs/next/cluster-management/cluster-api-providers"},next:{title:"CAPI Provider Identities",permalink:"/docs/next/cluster-management/provider-identities"}},d=[{value:"How to: Add a CAPI Template",id:"how-to-add-a-capi-template",children:[{value:"Resource templates - <code>spec.resourcetemplates</code>",id:"resource-templates---specresourcetemplates",children:[]},{value:"Parameter metadata - <code>spec.params</code>",id:"parameter-metadata---specparams",children:[]},{value:"Loading the template into the cluster",id:"loading-the-template-into-the-cluster",children:[]}]},{value:"Full CAPD docker template example",id:"full-capd-docker-template-example",children:[]}],u={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,p.title," ",(0,i.kt)(s.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"how-to-add-a-capi-template"},"How to: Add a CAPI Template"),(0,i.kt)("p",null,"CAPI Templates objects need to be wrapped with the ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," custom resource and then loaded into the management cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: capi.weave.works/v1alpha1\nkind: CAPITemplate\nmetadata:\n  name: cluster-template-development\nspec:\n  description: This is the std. CAPD template\n  params:\n    - name: CLUSTER_NAME\n      description: This is used for the cluster naming.\n  resourcetemplates:\n    # Template objects go here\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: Cluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n')),(0,i.kt)("h3",{id:"resource-templates---specresourcetemplates"},"Resource templates - ",(0,i.kt)("inlineCode",{parentName:"h3"},"spec.resourcetemplates")),(0,i.kt)("p",null,"Add the list of objects to be rendered out to the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," section."),(0,i.kt)("p",null,"Under each resource template, annotations can be added for easier UI navigation. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"capi.weave.works/display-name")," to describe the annotation. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: capi.weave.works/v1alpha1\nkind: Cluster\nmetadata:\n  name: "${CLUSTER_NAME}"\n  annotations:\n    capi.weave.works/display-name: ClusterName\n')),(0,i.kt)("p",null,"This will result in showing ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterName")," as the display name for the cluster name text field as opposed to the template parameter $CLUSTER_NAME, when the template is rendered in the UI."),(0,i.kt)("h3",{id:"parameter-metadata---specparams"},"Parameter metadata - ",(0,i.kt)("inlineCode",{parentName:"h3"},"spec.params")),(0,i.kt)("p",null,"You can provide additional metadata about the parameters to the templates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.params")," section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": The variable name within the resource templates"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"descripton"),": Description of the parameter. This will be rendered in the UI and CLI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": The list of possible values this parameter can be set to.")),(0,i.kt)("h3",{id:"loading-the-template-into-the-cluster"},"Loading the template into the cluster"),(0,i.kt)("p",null,"Load templates into the cluster by adding them to your flux managed git repository or by apply directly with\n",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f capi-template.yaml")),(0,i.kt)("p",null,"Weave GitOps will search for templates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace. This can be changed by configuring the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.capi.namespace")," value in the helm chart."),(0,i.kt)("h2",{id:"full-capd-docker-template-example"},"Full CAPD docker template example"),(0,i.kt)("p",null,"This example works with the CAPD provider, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/cluster-management/cluster-api-providers"},"Cluster API Providers"),"."),(0,i.kt)(o.Z,{title:".weave-gitops/apps/capi/templates/capd-template.yaml",className:"language-yaml",mdxType:"CodeBlock"},l.Z))}k.isMDXComponent=!0},34323:function(e,t){"use strict";t.Z='apiVersion: capi.weave.works/v1alpha1\nkind: CAPITemplate\nmetadata:\n  name: cluster-template-development\n  namespace: default\nspec:\n  description: This is the std. CAPD template\n  params:\n    - name: CLUSTER_NAME\n      description: This is used for the cluster naming.\n    - name: NAMESPACE\n      description: Namespace to create the cluster in.\n    - name: KUBERNETES_VERSION\n      description: The version of Kubernetes to use.\n      options: ["1.19.11", "1.20.7", "1.21.1"]\n  resourcetemplates:\n    - apiVersion: cluster.x-k8s.io/v1beta1\n      kind: Cluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n        namespace: "${NAMESPACE}"\n        labels:\n          cni: calico\n          weave.works/capi: bootstrap\n      spec:\n        clusterNetwork:\n          services:\n            cidrBlocks:\n              - 10.128.0.0/12\n          pods:\n            cidrBlocks:\n              - 192.168.0.0/16\n          serviceDomain: cluster.local\n        infrastructureRef:\n          apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n          kind: DockerCluster\n          name: "${CLUSTER_NAME}"\n          namespace: "${NAMESPACE}"\n        controlPlaneRef:\n          kind: KubeadmControlPlane\n          apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n          name: "${CLUSTER_NAME}-control-plane"\n          namespace: "${NAMESPACE}"\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n      kind: DockerCluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n        namespace: "${NAMESPACE}"\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n      kind: DockerMachineTemplate\n      metadata:\n        name: "${CLUSTER_NAME}-control-plane"\n        namespace: "${NAMESPACE}"\n      spec:\n        template:\n          spec:\n            extraMounts:\n              - containerPath: "/var/run/docker.sock"\n                hostPath: "/var/run/docker.sock"\n    - kind: KubeadmControlPlane\n      apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n      metadata:\n        name: "${CLUSTER_NAME}-control-plane"\n        namespace: "${NAMESPACE}"\n      spec:\n        replicas: 1\n        machineTemplate:\n          infrastructureRef:\n            kind: DockerMachineTemplate\n            apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n            name: "${CLUSTER_NAME}-control-plane"\n            namespace: "${NAMESPACE}"\n        kubeadmConfigSpec:\n          clusterConfiguration:\n            controllerManager:\n              extraArgs: { enable-hostpath-provisioner: "true" }\n            apiServer:\n              certSANs: [localhost, 127.0.0.1]\n          initConfiguration:\n            nodeRegistration:\n              criSocket: /var/run/containerd/containerd.sock\n              kubeletExtraArgs:\n                # We have to pin the cgroupDriver to cgroupfs as kubeadm >=1.21 defaults to systemd\n                # kind will implement systemd support in: https://github.com/kubernetes-sigs/kind/issues/1726\n                cgroup-driver: cgroupfs\n                eviction-hard: "nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%"\n          joinConfiguration:\n            nodeRegistration:\n              criSocket: /var/run/containerd/containerd.sock\n              kubeletExtraArgs:\n                # We have to pin the cgroupDriver to cgroupfs as kubeadm >=1.21 defaults to systemd\n                # kind will implement systemd support in: https://github.com/kubernetes-sigs/kind/issues/1726\n                cgroup-driver: cgroupfs\n                eviction-hard: "nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%"\n        version: "${KUBERNETES_VERSION}"\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n      kind: DockerMachineTemplate\n      metadata:\n        name: "${CLUSTER_NAME}-md-0"\n        namespace: "${NAMESPACE}"\n      spec:\n        template:\n          spec: {}\n    - apiVersion: bootstrap.cluster.x-k8s.io/v1beta1\n      kind: KubeadmConfigTemplate\n      metadata:\n        name: "${CLUSTER_NAME}-md-0"\n        namespace: "${NAMESPACE}"\n      spec:\n        template:\n          spec:\n            joinConfiguration:\n              nodeRegistration:\n                kubeletExtraArgs:\n                  # We have to pin the cgroupDriver to cgroupfs as kubeadm >=1.21 defaults to systemd\n                  # kind will implement systemd support in: https://github.com/kubernetes-sigs/kind/issues/1726\n                  cgroup-driver: cgroupfs\n                  eviction-hard: "nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%"\n    - apiVersion: cluster.x-k8s.io/v1beta1\n      kind: MachineDeployment\n      metadata:\n        name: "${CLUSTER_NAME}-md-0"\n        namespace: "${NAMESPACE}"\n      spec:\n        clusterName: "${CLUSTER_NAME}"\n        replicas: 1\n        selector:\n          matchLabels:\n        template:\n          spec:\n            clusterName: "${CLUSTER_NAME}"\n            version: "${KUBERNETES_VERSION}"\n            bootstrap:\n              configRef:\n                name: "${CLUSTER_NAME}-md-0"\n                namespace: "${NAMESPACE}"\n                apiVersion: bootstrap.cluster.x-k8s.io/v1beta1\n                kind: KubeadmConfigTemplate\n            infrastructureRef:\n              name: "${CLUSTER_NAME}-md-0"\n              namespace: "${NAMESPACE}"\n              apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n              kind: DockerMachineTemplate\n'}}]);