(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[7179],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=i(),g=h.tabGroupChoices,v=h.setTabGroupChoices,k=(0,r.useState)(a),f=k[0],w=k[1],N=r.Children.toArray(e.children),y=[];if(null!=u){var b=g[u];null!=b&&b!==f&&d.some((function(e){return e.value===b}))&&w(b)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),r=d[n].value;w(r),null!=u&&(v(u,r),setTimeout((function(){var e,n,r,a,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case p:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case c:var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:E,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},794:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(55064),s=n(58215),l={title:"Upgrading",sidebar_position:0},c=void 0,p={unversionedId:"enterprise/upgrading",id:"version-0.3.3/enterprise/upgrading",isDocsHomePage:!1,title:"Upgrading",description:"How to: Upgrade to Weave Gitops Enterprise",source:"@site/versioned_docs/version-0.3.3/enterprise/upgrading.mdx",sourceDirName:"enterprise",slug:"/enterprise/upgrading",permalink:"/docs/0.3.3/enterprise/upgrading",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.3/enterprise/upgrading.mdx",version:"0.3.3",sidebarPosition:0,frontMatter:{title:"Upgrading",sidebar_position:0},sidebar:"version-0.3.3/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/0.3.3/enterprise/intro"},next:{title:"Configuration",permalink:"/docs/0.3.3/enterprise/configuration"}},d=[{value:"How to: Upgrade to Weave Gitops Enterprise",id:"how-to-upgrade-to-weave-gitops-enterprise",children:[{value:"2. Install profiles",id:"2-install-profiles",children:[]},{value:"3. Install the MCCP CLI",id:"3-install-the-mccp-cli",children:[]},{value:"4. Apply the entitlements secret",id:"4-apply-the-entitlements-secret",children:[]},{value:"5. Creating a secret for docker repository",id:"5-creating-a-secret-for-docker-repository",children:[]},{value:"6. Create a secret for creating pull requests on your git provider",id:"6-create-a-secret-for-creating-pull-requests-on-your-git-provider",children:[]},{value:"7. Upgrade",id:"7-upgrade",children:[]},{value:"8. Configure Weave Gitops Enterprise",id:"8-configure-weave-gitops-enterprise",children:[]},{value:"9. Checking that WGE is installed",id:"9-checking-that-wge-is-installed",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-upgrade-to-weave-gitops-enterprise"},"How to: Upgrade to Weave Gitops Enterprise"),(0,i.kt)("p",null,"Upgrading requires we:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Already have Weave GitOps ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.3.3/getting-started"},"installed on the cluster")),(0,i.kt)("li",{parentName:"ol"},"Install Profiles onto the cluster"),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("inlineCode",{parentName:"li"},"mccp")," cli tool"),(0,i.kt)("li",{parentName:"ol"},"Apply the entitlements secret"),(0,i.kt)("li",{parentName:"ol"},"Create a secret for docker repository"),(0,i.kt)("li",{parentName:"ol"},"Create a secret for creating pull requests on your git provider"),(0,i.kt)("li",{parentName:"ol"},"Upgrade"),(0,i.kt)("li",{parentName:"ol"},"Configure"),(0,i.kt)("li",{parentName:"ol"},"Check that Weave Gitops Enterprise has been installed")),(0,i.kt)("h3",{id:"2-install-profiles"},"2. Install profiles"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"This step will be removed")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This step will be removed when Profiles are included in Weave Gitops"))),(0,i.kt)("p",null,"Download the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"pctl")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/pctl/releases"},"release")," and install the Profile custom resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pctl install --flux-namespace wego-system\n")),(0,i.kt)("h3",{id:"3-install-the-mccp-cli"},"3. Install the MCCP CLI"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"This step will be removed")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This step will be removed when the ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," command moves into the ",(0,i.kt)("inlineCode",{parentName:"p"},"gitops")," binary"))),(0,i.kt)("p",null,"The MCCP CLI allows you to ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," to Weave Gitops Enterprise. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"mccp")," to manage the lifecycle of your infrastructure declaratively using GitOps. The latest version of the MCCP CLI is available in the following links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://s3.amazonaws.com/weaveworks-wkp/releases/mccp-v0.0.10-linux-amd64"},"Linux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://s3.amazonaws.com/weaveworks-wkp/releases/mccp-v0.0.10-linux-amd64"},"macOS"))),(0,i.kt)("h3",{id:"4-apply-the-entitlements-secret"},"4. Apply the entitlements secret"),(0,i.kt)("p",null,"Contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works")," for a valid entitlements secret. Then apply it to the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f entitlements.yaml\n")),(0,i.kt)("h3",{id:"5-creating-a-secret-for-docker-repository"},"5. Creating a secret for docker repository"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"This step will be removed")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This step will be removed when the Docker Image repositories become public"))),(0,i.kt)("p",null,"Create a secret that contains your docker repository credentials. This secret will be used by Kubernetes during deployment in order to pull down the WGE images. You can find instructions on how to generate this secret ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret docker-registry \\\n  --namespace wego-system docker-io-pull-secret \\\n  --docker-username=<your-docker-username> \\\n  --docker-password=<your-docker-password>\n")),(0,i.kt)("p",null,"If you use a secrets management solution such as Sealed Secrets follow their instructions on how to create a new secret."),(0,i.kt)("h3",{id:"6-create-a-secret-for-creating-pull-requests-on-your-git-provider"},"6. Create a secret for creating pull requests on your git provider"),(0,i.kt)("p",null,"A Personal Access Token is required for the WGE to create pull requests for new clusters. These tokens need certain permissions (scopes) set. For"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub: ",(0,i.kt)("inlineCode",{parentName:"li"},"repo")),(0,i.kt)("li",{parentName:"ul"},"GitLab: ",(0,i.kt)("inlineCode",{parentName:"li"},"api"))),(0,i.kt)("p",null,"Save the token in secret called ",(0,i.kt)("inlineCode",{parentName:"p"},"git-provider-credentials"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic git-provider-credentials \\\n  --namespace=wego-system\n  --from-literal="GIT_PROVIDER_TOKEN=$GITHUB_TOKEN"\n')),(0,i.kt)("h3",{id:"7-upgrade"},"7. Upgrade"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"This step will change")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This will change when the ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," command moves into the ",(0,i.kt)("inlineCode",{parentName:"p"},"gitops")," binary"))),(0,i.kt)("p",null,"Run the upgrade command from a local copy of git repo that is sync'd to the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-cluster-repo\nmccp upgrade\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Pull Request")," will be created against your cluster repository. ",(0,i.kt)("strong",{parentName:"p"},"Review and merge")," this pull request to upgrade to Weave Gitops Enterprise."),(0,i.kt)("h3",{id:"8-configure-weave-gitops-enterprise"},"8. Configure Weave Gitops Enterprise"),(0,i.kt)("p",null,"Weave Gitops Enterprise has a number of configration options but two importants aspect to configure are:"),(0,i.kt)("h4",{id:"81-ingress"},"8.1. Ingress"),(0,i.kt)("p",null,"An Ingress address is necessary in order to establish connectivity between agents and your WGE instance. The way to determine this depends on your cluster type and provisioning method."),(0,i.kt)(o.Z,{groupId:"agent-ingress",values:[{label:"kind clusters",value:"kind-clusters"},{label:"Other cloud providers",value:"other-clusters"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"kind-clusters",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"To determine the public IP address of the worker nodes of your cluster get the local IP for kind:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export INGRESS_ADDRESS=$(ipconfig getifaddr en0)\n"))),(0,i.kt)(s.Z,{value:"other-clusters",mdxType:"TabItem"},(0,i.kt)("p",null,"For other cluster providers you'll have to configure the ingress around what they provide."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export INGRESS_ADDRESS=wge.example.com\n")))),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"agentTemplate.natsURL")," value in the Weave Gitops Enterprise ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigMap")," in your config repo."),(0,i.kt)("h4",{id:"82-git-repository-configuration"},"8.2. Git repository configuration"),(0,i.kt)("p",null,"WGE will make pull requests against your git config repo when creating new CAPI clusters etc. The ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_PROVIDER_TOKEN")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"git-provider-credentials")," secret specified above will be used to authenticate."),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"capi.config.repositoryURL")," with the correct url to your git config repository in the Weave Gitops Enterprise ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigMap")," in git config repository itself."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Restart capi-service")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After configuring values in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigMap")," you may have to delete the cluster-service pod for the changes to take effect."))),(0,i.kt)("h3",{id:"9-checking-that-wge-is-installed"},"9. Checking that WGE is installed"),(0,i.kt)("p",null,"You should now be able to load the WGE UI by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl port-forward --namespace wego-system deployments.apps/mccp-nginx-ingress-controller 8000:80\n")),(0,i.kt)("p",null,"The WGE UI should now be accessible at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);