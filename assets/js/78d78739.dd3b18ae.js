(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[4054],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,v=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36742:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(19756),i=r(67294),a=r(73727),o=r(52263),s=r(13919),u=r(10412),l=(0,i.createContext)({collectLink:function(){}}),c=r(44996),p=r(18780);var d=function(e){var t,r,d=e.isNavLink,f=e.to,v=e.href,m=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,k=void 0===b||b,y=(0,n.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=(0,o.Z)().siteConfig,C=w.trailingSlash,P=w.baseUrl,O=(0,c.C)().withBaseUrl,A=(0,i.useContext)(l),I=f||v,j=(0,s.Z)(I),D=null==I?void 0:I.replace("pathname://",""),N=void 0!==D?(r=D,k&&function(e){return e.startsWith("/")}(r)?O(r):r):void 0;N&&j&&(N=(0,p.applyTrailingSlash)(N,{trailingSlash:C,baseUrl:P}));var E,T=(0,i.useRef)(!1),x=d?a.OL:a.rU,_=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!_&&j&&null!=N&&window.docusaurus.prefetch(N),function(){_&&E&&E.disconnect()}}),[N,_,j]);var S=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,Z=!N||!j||S;return N&&j&&!S&&!h&&A.collectLink(N),Z?i.createElement("a",Object.assign({href:N},I&&!j&&{target:"_blank",rel:"noopener noreferrer"},y)):i.createElement(x,Object.assign({},y,{onMouseEnter:function(){T.current||null==N||(window.docusaurus.preload(N),T.current=!0)},innerRef:function(e){var t,r;_&&e&&j&&(t=e,r=function(){null!=N&&window.docusaurus.prefetch(N)},(E=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),r())}))}))).observe(t))},to:N||""},d&&{isActive:g,activeClassName:m}))}},13919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},44996:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(52263),i=r(13919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,s=void 0!==o&&o,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(s)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+c:c}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},28084:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i},useAllPluginInstancesData:function(){return a},usePluginData:function(){return o}});var n=r(52263);function i(){var e=(0,n.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){var t=i()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function o(e,t){void 0===t&&(t="default");var r=a(e)[t];if(!r)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return r}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},29964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},54444:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(67294),i=r(36742),a=r(28084),o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){var t,r,s,u,l=e.tiers;return n.createElement(i.Z,{to:(s=(0,a.default)()["docusaurus-plugin-content-docs"],u=null==s||null==(t=s.default)||null==(r=t.versions)?void 0:r.find((function(e){return"current"===e.name})),((null==u?void 0:u.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+l,style:o},l)}},32595:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o=r(54444),s={title:"Cluster API Providers",sidebar_position:2},u=void 0,l={unversionedId:"cluster-management/cluster-api-providers",id:"version-0.3.1/cluster-management/cluster-api-providers",isDocsHomePage:!1,title:"Cluster API Providers",description:"Creating leaf clusters",source:"@site/versioned_docs/version-0.3.1/cluster-management/cluster-api-providers.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/cluster-api-providers",permalink:"/docs/0.3.1/cluster-management/cluster-api-providers",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.1/cluster-management/cluster-api-providers.mdx",version:"0.3.1",sidebarPosition:2,frontMatter:{title:"Cluster API Providers",sidebar_position:2},sidebar:"version-0.3.1/tutorialSidebar",previous:{title:"Managing existing clusters",permalink:"/docs/0.3.1/cluster-management/managing-existing-clusters"},next:{title:"CAPI Templates",permalink:"/docs/0.3.1/cluster-management/templates"}},c=[{value:'Creating leaf clusters <TierLabel tiers="enterprise" />',id:"creating-leaf-clusters",children:[]},{value:"Configure and deploy the CAPI providers",id:"configure-and-deploy-the-capi-providers",children:[]},{value:"AWS provider (CAPA)",id:"aws-provider-capa",children:[]},{value:"Docker provider (CAPD)",id:"docker-provider-capd",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-leaf-clusters"},"Creating leaf clusters ",(0,a.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"To enable leaf cluster creation, Weave Gitops leverages the Cluster-API (CAPI) providers for ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html"},"AWS")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html"},"Docker"),".\nIn this section we cover the steps to deploy the providers on a Kubernetes cluster that is running the Weave GitOps."),(0,a.kt)("p",null,"CAPI provides declarative APIs, controllers, and tooling to manage the lifecycle of Kubernetes clusters, across\na large number of ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/reference/providers.html#infrastructure"},"infrastructure providers"),".\nThe CAPI custom resource definitions are platform independent as each provider implementation handles the creation of VMs,\nVPCs, networks and other required infrastructure parts, enabling consistent and repeatable cluster deployments.\nFor more information on the CAPI project, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/introduction.html"},"CAPI book"),"."),(0,a.kt)("h2",{id:"configure-and-deploy-the-capi-providers"},"Configure and deploy the CAPI providers"),(0,a.kt)("p",null,"In all cases, CAPI requires kubectl access to an existing Kubernetes cluster, so in our case we configure ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to use the management cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/path/to/kubeconfig\n")),(0,a.kt)("h2",{id:"aws-provider-capa"},"AWS provider (CAPA)"),(0,a.kt)("p",null,"After having configured ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", to deploy the CAPA components, follow the steps at ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"},"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl")),(0,a.kt)("h2",{id:"docker-provider-capd"},"Docker provider (CAPD)"),(0,a.kt)("p",null,"The Docker infrastructure provider is a reference implementation and is a practical way of testing the Weave Gitops cluster creation feature. It is not intended for production clusters. As CAPD will start docker containers in the host nodes of the management cluster, note that if you are using it with a ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," cluster you'll need to mount the docker socket as described in the ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-andor-configure-a-kubernetes-cluster"},"Install and/or configure a kubernetes cluster")," kind section."),(0,a.kt)("p",null,"Similar to the AWS provider case, configure ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to use the management cluster, and to deploy the CAPD components follow the steps at ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"},"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"),"."))}d.isMDXComponent=!0}}]);