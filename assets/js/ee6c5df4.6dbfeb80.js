(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[1236],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41902:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={sidebar_position:6},l="AWS Marketplace",s={unversionedId:"aws-marketplace",id:"version-0.5.0/aws-marketplace",isDocsHomePage:!1,title:"AWS Marketplace",description:"Weave GitOps is also available via the AWS Marketplace.",source:"@site/versioned_docs/version-0.5.0/aws-marketplace.md",sourceDirName:".",slug:"/aws-marketplace",permalink:"/docs/aws-marketplace",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.5.0/aws-marketplace.md",version:"0.5.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.5.0/tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Deploying the Sock Shop Application",permalink:"/docs/examples/sock-shop"}},c=[{value:"Step 1: Subscribe to Weave GitOps on the AWS Marketplace",id:"step-1-subscribe-to-weave-gitops-on-the-aws-marketplace",children:[]},{value:"Optional Step 2: Create an EKS cluster",id:"optional-step-2-create-an-eks-cluster",children:[]},{value:"Optional Step 3: Update your EKS cluster",id:"optional-step-3-update-your-eks-cluster",children:[]},{value:"Step 4: Fetch the Service Account Role ARN",id:"step-4-fetch-the-service-account-role-arn",children:[]},{value:"Step 5: Install Weave GitOps",id:"step-5-install-weave-gitops",children:[]},{value:"Step 6: Check your installation",id:"step-6-check-your-installation",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-marketplace"},"AWS Marketplace"),(0,o.kt)("p",null,"Weave GitOps is also available via the AWS Marketplace. "),(0,o.kt)("h1",{id:"deploy-weave-gitops-on-an-eks-cluster-via-helm"},"Deploy Weave GitOps on an EKS Cluster via Helm"),(0,o.kt)("p",null,"The following steps will allow you to deploy the Weave GitOps product to an EKS cluster via a Helm Chart."),(0,o.kt)("p",null,"These instructions presume you already have installed ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},(0,o.kt)("inlineCode",{parentName:"a"},"kubectl")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/eksctl"},(0,o.kt)("inlineCode",{parentName:"a"},"eksctl")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},(0,o.kt)("inlineCode",{parentName:"a"},"helm"))," and\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hypnoglow/helm-s3"},"Helm S3 Plugin"),"."),(0,o.kt)("h2",{id:"step-1-subscribe-to-weave-gitops-on-the-aws-marketplace"},"Step 1: Subscribe to Weave GitOps on the AWS Marketplace"),(0,o.kt)("p",null,"To deploy the managed Weave GitOps solution, first subscribe to the product on ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-vkn2wejad2ix4"},"AWS Marketplace"),".\n",(0,o.kt)("strong",{parentName:"p"},"This subscription is only available for deployment on EKS versions 1.17-1.21.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: it may take ~20 minutes for your Subscription to become live and deployable.")),(0,o.kt)("h2",{id:"optional-step-2-create-an-eks-cluster"},"[Optional]"," Step 2: Create an EKS cluster"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you already have an EKS cluster, you can skip ahead to Step 3.")),(0,o.kt)("p",null,"If you do not have a cluster on EKS, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/eksctl"},(0,o.kt)("inlineCode",{parentName:"a"},"eksctl"))," to create one."),(0,o.kt)("p",null,"Copy the contents of the sample file below into ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-config.yaml")," and replace the placeholder values with your settings.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://eksctl.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"eksctl")," documentation")," for more configuration options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: CLUSTER_NAME # Change this\n  region: REGION # Change this\n\n# This section is required\niam:\n  withOIDC: true\n  serviceAccounts:\n  - metadata:\n      name: wego-service-account # Altering this will require a corresponding change in a later command\n      namespace: wego-system\n    roleOnly: true\n    attachPolicy:\n      Version: "2012-10-17"\n      Statement:\n      - Effect: Allow\n        Action:\n        - "aws-marketplace:RegisterUsage"\n        Resource: \'*\'\n\n# This section will create a single Managed nodegroup with one node.\n# Edit or remove as desired.\nmanagedNodeGroups:\n- name: ng1\n  instanceType: m5.large\n  desiredCapacity: 1\n')),(0,o.kt)("p",null,"Create the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl create cluster -f cluster-config.yaml\n")),(0,o.kt)("h2",{id:"optional-step-3-update-your-eks-cluster"},"[Optional]"," Step 3: Update your EKS cluster"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you created your cluster using the configuration file in Step 2, your cluster is\nalready configured correctly and you can skip ahead to Step 4.")),(0,o.kt)("p",null,"In order to use the Weave GitOps container product,\nyour cluster must be configured to run containers with the correct IAM Policies."),(0,o.kt)("p",null,"The recommended way to do this is via ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/"},"IRSA"),"."),(0,o.kt)("p",null,"Use this ",(0,o.kt)("inlineCode",{parentName:"p"},"eksctl")," configuration below (replacing the placeholder values) to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Associate an OIDC provider"),(0,o.kt)("li",{parentName:"ul"},"Create the required service account ARN")),(0,o.kt)("p",null,"Save the example below as ",(0,o.kt)("inlineCode",{parentName:"p"},"oidc-config.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: CLUSTER_NAME # Change this\n  region: REGION # Change this\n\n# This section is required\niam:\n  withOIDC: true\n  serviceAccounts:\n  - metadata:\n      name: wego-service-account # Altering this will require a corresponding change in a later command\n      namespace: wego-system\n    roleOnly: true\n    attachPolicy:\n      Version: "2012-10-17"\n      Statement:\n      - Effect: Allow\n        Action:\n        - "aws-marketplace:RegisterUsage"\n        Resource: \'*\'\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl utils associate-iam-oidc-provider -f oidc-config.yaml --approve\neksctl create iamserviceaccount -f oidc-config.yaml --approve\n")),(0,o.kt)("h2",{id:"step-4-fetch-the-service-account-role-arn"},"Step 4: Fetch the Service Account Role ARN"),(0,o.kt)("p",null,"First retrieve the ARN of the IAM role which you created for the ",(0,o.kt)("inlineCode",{parentName:"p"},"wego-service-account"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# replace the placeholder values with your configuration\n# if you changed the service account name from wego-service-account, update that in the command\nexport SA_ARN=$(eksctl get iamserviceaccount --cluster <cluster-name> --region <region> | awk '/wego-service-account/ {print $3}')\n\necho $SA_ARN\n# should return\n# arn:aws:iam::<account-id>:role/eksctl-<cluster-name>-addon-iamserviceaccount-xxx-Role1-1N41MLVQEWUOF\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This value will also be discoverable in your IAM console, and in the Outputs of the Cloud Formation\ntemplate which created it.")),(0,o.kt)("h2",{id:"step-5-install-weave-gitops"},"Step 5: Install Weave GitOps"),(0,o.kt)("p",null,"Copy the Chart URL from Usage Instructions, or download the file from the Deployment template to your workstation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'helm install wego <URL/PATH> \\\n  --set serviceAccountRole="$SA_ARN"\n\n# if you changed the name of the service account\nhelm install wego <URL/PATH> \\\n  --set serviceAccountName=\'<name>\' \\\n  --set serviceAccountRole="$SA_ARN"\n')),(0,o.kt)("h2",{id:"step-6-check-your-installation"},"Step 6: Check your installation"),(0,o.kt)("p",null,"Run the following from your workstation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n wego-system\n# you should see something like the following returned\nwego-system          helm-controller-5b96d94c7f-tds9n                    1/1     Running   0          53s\nwego-system          image-automation-controller-5cf75fd555-zqm89        1/1     Running   0          53s\nwego-system          image-reflector-controller-6787985855-l4q4g         1/1     Running   0          53s\nwego-system          kustomize-controller-8467b8b884-x2cpd               1/1     Running   0          53s\nwego-system          notification-controller-55f94bc746-ggmwc            1/1     Running   0          53s\nwego-system          source-controller-78bfb8576-stnr5                   1/1     Running   0          53s\nwego-system          wego-metering-f7jqp                                 1/1     Running   0          53s\n")),(0,o.kt)("p",null,"Your Weave GitOps installation is now ready!"))}u.isMDXComponent=!0}}]);