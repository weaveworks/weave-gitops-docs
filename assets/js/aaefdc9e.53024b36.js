(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[5787],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(19756),a=n(67294),i=n(73727),o=n(52263),s=n(13919),l=n(10412),c=(0,a.createContext)({collectLink:function(){}}),u=n(44996),p=n(18780);var d=function(e){var t,n,d=e.isNavLink,m=e.to,f=e.href,v=e.activeClassName,h=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,b=void 0===g||g,E=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),C=(0,o.Z)().siteConfig,A=C.trailingSlash,N=C.baseUrl,P=(0,u.C)().withBaseUrl,T=(0,a.useContext)(c),w=m||f,y=(0,s.Z)(w),S=null==w?void 0:w.replace("pathname://",""),M=void 0!==S?(n=S,b&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;M&&y&&(M=(0,p.applyTrailingSlash)(M,{trailingSlash:A,baseUrl:N}));var O,_=(0,a.useRef)(!1),x=d?i.OL:i.rU,R=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!R&&y&&null!=M&&window.docusaurus.prefetch(M),function(){R&&O&&O.disconnect()}}),[M,R,y]);var U=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,L=!M||!y||U;return M&&y&&!U&&!k&&T.collectLink(M),L?a.createElement("a",Object.assign({href:M},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},E)):a.createElement(x,Object.assign({},E,{onMouseEnter:function(){_.current||null==M||(window.docusaurus.preload(M),_.current=!0)},innerRef:function(e){var t,n;R&&e&&y&&(t=e,n=function(){null!=M&&window.docusaurus.prefetch(M)},(O=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),n())}))}))).observe(t))},to:M||""},d&&{isActive:h,activeClassName:v}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},28084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a},useAllPluginInstancesData:function(){return i},usePluginData:function(){return o}});var r=n(52263);function a(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=a()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},54444:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(36742),i=n(28084),o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){var t,n,s,l,c=e.tiers;return r.createElement(a.Z,{to:(s=(0,i.default)()["docusaurus-plugin-content-docs"],l=null==s||null==(t=s.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==l?void 0:l.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+c,style:o},c)}},44070:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(54444),s={title:"CAPI Templates",sidebar_position:3,hide_title:!0},l=void 0,c={unversionedId:"cluster-management/templates",id:"version-0.3.1/cluster-management/templates",isDocsHomePage:!1,title:"CAPI Templates",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.3.1/cluster-management/templates.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/templates",permalink:"/docs/0.3.1/cluster-management/templates",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.1/cluster-management/templates.mdx",version:"0.3.1",sidebarPosition:3,frontMatter:{title:"CAPI Templates",sidebar_position:3,hide_title:!0},sidebar:"version-0.3.1/tutorialSidebar",previous:{title:"Cluster API Providers",permalink:"/docs/0.3.1/cluster-management/cluster-api-providers"},next:{title:"CAPI Provider Identities",permalink:"/docs/0.3.1/cluster-management/provider-identities"}},u=[{value:"How to: Add a CAPI Template",id:"how-to-add-a-capi-template",children:[{value:"Resource templates - <code>spec.resourcetemplates</code>",id:"resource-templates---specresourcetemplates",children:[]},{value:"Parameter metadata - <code>spec.params</code>",id:"parameter-metadata---specparams",children:[]},{value:"Loading the template into the cluster",id:"loading-the-template-into-the-cluster",children:[]}]},{value:"Full CAPD docker template example",id:"full-capd-docker-template-example",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,s.title," ",(0,i.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"how-to-add-a-capi-template"},"How to: Add a CAPI Template"),(0,i.kt)("p",null,"CAPI Templates objects need to be wrapped with the ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," custom resource and then loaded into the management cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: capi.weave.works/v1alpha1\nkind: CAPITemplate\nmetadata:\n  name: cluster-template-development\nspec:\n  description: This is the std. CAPD template\n  params:\n    - name: CLUSTER_NAME\n      description: This is used for the cluster naming.\n  resourcetemplates:\n    # Template objects go here\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: Cluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n')),(0,i.kt)("h3",{id:"resource-templates---specresourcetemplates"},"Resource templates - ",(0,i.kt)("inlineCode",{parentName:"h3"},"spec.resourcetemplates")),(0,i.kt)("p",null,"Add the list of objects to be rendered out to the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," section."),(0,i.kt)("h3",{id:"parameter-metadata---specparams"},"Parameter metadata - ",(0,i.kt)("inlineCode",{parentName:"h3"},"spec.params")),(0,i.kt)("p",null,"You can provide additional metadata about the parameters to the templates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.params")," section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": The variable name within the resource templates"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"descripton"),": Description of the parameter. This will be rendered in the UI and CLI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": The list of possible values this parameter can be set to.")),(0,i.kt)("h3",{id:"loading-the-template-into-the-cluster"},"Loading the template into the cluster"),(0,i.kt)("p",null,"Load templates into the cluster by adding them to your flux managed git repository or by apply directly with\n",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f capi-template.yaml")),(0,i.kt)("p",null,"Weave GitOps will search for templates in the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," namespace. This can be changed by configuring the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.capi.namespace")," value in the helm chart."),(0,i.kt)("h2",{id:"full-capd-docker-template-example"},"Full CAPD docker template example"),(0,i.kt)("p",null,"This example works with the CAPD provider, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.3.1/cluster-management/cluster-api-providers"},"Cluster API Providers"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: capi.weave.works/v1alpha1\nkind: CAPITemplate\nmetadata:\n  name: cluster-template-development\nspec:\n  description: This is the std. CAPD template\n  params:\n    - name: CLUSTER_NAME\n      description: This is used for the cluster naming.\n    - name: NAMESPACE\n      description: Namespace to create the cluster in.\n    - name: KUBERNETES_VERSION\n      description: The version of Kubernetes to use.\n      options: ["1.19.7", "1.19.8"]\n  resourcetemplates:\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: Cluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n        namespace: "${NAMESPACE}"\n      spec:\n        clusterNetwork:\n          pods:\n            cidrBlocks:\n              - 192.168.0.0/16\n          serviceDomain: cluster.local\n          services:\n            cidrBlocks:\n              - 10.128.0.0/12\n        infrastructureRef:\n          apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\n          kind: DockerCluster\n          name: "${CLUSTER_NAME}"\n          namespace: "${NAMESPACE}"\n        controlPlaneRef:\n          kind: KubeadmControlPlane\n          apiVersion: controlplane.cluster.x-k8s.io/v1alpha3\n          name: "${CLUSTER_NAME}-control-plane"\n          namespace: "${NAMESPACE}"\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\n      kind: DockerCluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n        namespace: "${NAMESPACE}"\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\n      kind: DockerMachineTemplate\n      metadata:\n        name: "${CLUSTER_NAME}-control-plane"\n        namespace: "${NAMESPACE}"\n      spec:\n        template:\n          spec:\n            extraMounts:\n              - containerPath: "/var/run/docker.sock"\n                hostPath: "/var/run/docker.sock"\n    - kind: KubeadmControlPlane\n      apiVersion: controlplane.cluster.x-k8s.io/v1alpha3\n      metadata:\n        name: "${CLUSTER_NAME}-control-plane"\n        namespace: "${NAMESPACE}"\n      spec:\n        replicas: 1\n        infrastructureTemplate:\n          kind: DockerMachineTemplate\n          apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\n          name: "${CLUSTER_NAME}-control-plane"\n          namespace: "${NAMESPACE}"\n        kubeadmConfigSpec:\n          clusterConfiguration:\n            controllerManager:\n              extraArgs: { enable-hostpath-provisioner: "true" }\n            apiServer:\n              certSANs: [localhost, 127.0.0.1]\n          initConfiguration:\n            nodeRegistration:\n              criSocket: /var/run/containerd/containerd.sock\n              kubeletExtraArgs:\n                eviction-hard: "nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%"\n          joinConfiguration:\n            nodeRegistration:\n              criSocket: /var/run/containerd/containerd.sock\n              kubeletExtraArgs:\n                eviction-hard: "nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%"\n        version: "${KUBERNETES_VERSION}"\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\n      kind: DockerMachineTemplate\n      metadata:\n        name: "${CLUSTER_NAME}-md-0"\n        namespace: "${NAMESPACE}"\n      spec:\n        template:\n          spec: {}\n    - apiVersion: bootstrap.cluster.x-k8s.io/v1alpha3\n      kind: KubeadmConfigTemplate\n      metadata:\n        name: "${CLUSTER_NAME}-md-0"\n        namespace: "${NAMESPACE}"\n      spec:\n        template:\n          spec:\n            joinConfiguration:\n              nodeRegistration:\n                kubeletExtraArgs:\n                  eviction-hard: "nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%"\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: MachineDeployment\n      metadata:\n        name: "${CLUSTER_NAME}-md-0"\n        namespace: "${NAMESPACE}"\n      spec:\n        clusterName: "${CLUSTER_NAME}"\n        replicas: 1\n        selector:\n          matchLabels:\n        template:\n          spec:\n            clusterName: "${CLUSTER_NAME}"\n            version: "${KUBERNETES_VERSION}"\n            bootstrap:\n              configRef:\n                name: "${CLUSTER_NAME}-md-0"\n                namespace: "${NAMESPACE}"\n                apiVersion: bootstrap.cluster.x-k8s.io/v1alpha3\n                kind: KubeadmConfigTemplate\n            infrastructureRef:\n              name: "${CLUSTER_NAME}-md-0"\n              namespace: "${NAMESPACE}"\n              apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\n              kind: DockerMachineTemplate\n')))}d.isMDXComponent=!0}}]);