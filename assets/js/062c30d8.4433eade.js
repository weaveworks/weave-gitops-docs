(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[6042],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(19756),i=n(67294),a=n(73727),o=n(52263),l=n(13919),s=n(10412),u=(0,i.createContext)({collectLink:function(){}}),c=n(44996),p=n(18780);var d=function(e){var t,n,d=e.isNavLink,f=e.to,m=e.href,v=e.activeClassName,h=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,b=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=(0,o.Z)().siteConfig,C=w.trailingSlash,N=w.baseUrl,O=(0,c.C)().withBaseUrl,S=(0,i.useContext)(u),P=f||m,A=(0,l.Z)(P),I=null==P?void 0:P.replace("pathname://",""),j=void 0!==I?(n=I,y&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;j&&A&&(j=(0,p.applyTrailingSlash)(j,{trailingSlash:C,baseUrl:N}));var _,E=(0,i.useRef)(!1),T=d?a.OL:a.rU,W=s.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!W&&A&&null!=j&&window.docusaurus.prefetch(j),function(){W&&_&&_.disconnect()}}),[j,W,A]);var x=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,D=!j||!A||x;return j&&A&&!x&&!k&&S.collectLink(j),D?i.createElement("a",Object.assign({href:j},P&&!A&&{target:"_blank",rel:"noopener noreferrer"},b)):i.createElement(T,Object.assign({},b,{onMouseEnter:function(){E.current||null==j||(window.docusaurus.preload(j),E.current=!0)},innerRef:function(e){var t,n;W&&e&&A&&(t=e,n=function(){null!=j&&window.docusaurus.prefetch(j)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))}))).observe(t))},to:j||""},d&&{isActive:h,activeClassName:v}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},28084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i},useAllPluginInstancesData:function(){return a},usePluginData:function(){return o}});var r=n(52263);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){var t=i()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function o(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},29964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},54444:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),i=n(36742),a=n(28084),o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){var t,n,l,s,u=e.tiers;return r.createElement(i.Z,{to:(l=(0,a.default)()["docusaurus-plugin-content-docs"],s=null==l||null==(t=l.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==s?void 0:s.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+u,style:o},u)}},18453:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=n(54444),l={title:"CAPI Provider Identities",hide_title:!0,sidebar_position:4},s=void 0,u={unversionedId:"cluster-management/provider-identities",id:"version-0.3.1/cluster-management/provider-identities",isDocsHomePage:!1,title:"CAPI Provider Identities",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.3.1/cluster-management/provider-identities.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/provider-identities",permalink:"/docs/0.3.1/cluster-management/provider-identities",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.1/cluster-management/provider-identities.mdx",version:"0.3.1",sidebarPosition:4,frontMatter:{title:"CAPI Provider Identities",hide_title:!0,sidebar_position:4},sidebar:"version-0.3.1/tutorialSidebar",previous:{title:"CAPI Templates",permalink:"/docs/0.3.1/cluster-management/templates"},next:{title:"Deleting a Cluster",permalink:"/docs/0.3.1/cluster-management/deleting-a-cluster"}},c=[{value:"Multi-tenancy",id:"multi-tenancy",children:[{value:"Identities and templates",id:"identities-and-templates",children:[]},{value:"<code>identityRef</code>s",id:"identityrefs",children:[]}]}],p={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,l.title," ",(0,a.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("h2",{id:"multi-tenancy"},"Multi-tenancy"),(0,a.kt)("p",null,"Some Cluster API providers allow you to choose the account or identity that the new cluster will be created with. This is often referred to as ",(0,a.kt)("em",{parentName:"p"},"Multi-tenancy")," in the CAPI world. Weave GitOps currently supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cluster-api-aws.sigs.k8s.io/topics/multitenancy.html"},(0,a.kt)("strong",{parentName:"a"},"AWS")," multi-tenancy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://capz.sigs.k8s.io/topics/multitenancy.html"},(0,a.kt)("strong",{parentName:"a"},"Azure")," multi-tenancy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/blob/master/docs/identity_management.md"},(0,a.kt)("strong",{parentName:"a"},"vSphere")," multi-tenancy"))),(0,a.kt)("h3",{id:"identities-and-templates"},"Identities and templates"),(0,a.kt)("p",null,"Our ",(0,a.kt)("em",{parentName:"p"},"templates")," describe the properties of the cluster, how many nodes, what version of Kubernetes etc, while the ",(0,a.kt)("em",{parentName:"p"},"identity")," is which account will be used to create the cluster. So given in our cluster we have the template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: capi.weave.works/v1alpha1\nkind: CAPITemplate\nmetadata:\n  name: capa-cluster-template\nspec:\n  resourcetemplates:\n    - apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\n      kind: AWSCluster\n      metadata:\n        name: "${CLUSTER_NAME}"\n      spec:\n        region: "${AWS_REGION}"\n')),(0,a.kt)("p",null,"and the identity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: infrastructure.cluster.x-k8s.io/v1alpha3\nkind: AWSClusterStaticIdentity\nmetadata:\n  name: "test-account"\nspec:\n  secretRef:\n    name: test-account-creds\n    namespace: capa-system\n  allowedNamespaces:\n    selector:\n      matchLabels:\n        cluster.x-k8s.io/ns: "testlabel"\n')),(0,a.kt)("p",null,"We can select ask Weave Gitops to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"test-account")," when creating the cluster by using the ",(0,a.kt)("em",{parentName:"p"},"Infrastructure provider credentials")," dropdown on the ",(0,a.kt)("em",{parentName:"p"},"Create new cluster with template")," page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Identity Selection",src:n(97397).Z})),(0,a.kt)("p",null,"The resulting definition will have the identity injected into the appropriate place in the template, for this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: infrastructure.cluster.x-k8s.io/v1alpha4\nkind: AWSCluster\nmetadata:\n  name: example-cluster\nspec:\n  region: eu-north-1\n  identityRef:\n    kind: AWSClusterStaticIdentity\n    name: test-account\n")),(0,a.kt)("h3",{id:"identityrefs"},(0,a.kt)("inlineCode",{parentName:"h3"},"identityRef"),"s"),(0,a.kt)("p",null,"The supported providers implement multi-tenancy by setting an ",(0,a.kt)("inlineCode",{parentName:"p"},"identityRef")," on the the provider cluster object, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"AWSCluster"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureCluster")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"VSphereCluster"),"."),(0,a.kt)("p",null,"Weave GitOps will search ",(0,a.kt)("em",{parentName:"p"},"all namespaces")," in the cluster for potential identities that can be used to create a cluster. The following identity ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),"s are currently supported and their corresponding Cluster kinds:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWSClusterStaticIdentity"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"AWSCluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AWSClusterRoleIdentity"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"AWSCluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AzureClusterIdentity"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"AzureCluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VSphereClusterIdentity"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"VSphereCluster"))))}d.isMDXComponent=!0},97397:function(e,t,n){"use strict";t.Z=n.p+"assets/images/identity-selection-f7ade1f26e327412eb49a32b71403f1e.png"}}]);