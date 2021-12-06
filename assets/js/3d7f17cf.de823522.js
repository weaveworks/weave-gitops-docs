(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[3014],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41655:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(67294),i=n(36742),o=n(28084),a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function u(e){var t,n,u,l,s=e.tiers;return r.createElement(i.Z,{to:(u=(0,o.default)()["docusaurus-plugin-content-docs"],l=null==u||null==(t=u.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==l?void 0:l.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+s,style:a},s)}},36742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(19756),i=n(67294),o=n(73727),a=n(52263),u=n(13919),l=n(10412),s=(0,i.createContext)({collectLink:function(){}}),c=n(44996),d=n(18780);var f=function(e){var t,n,f=e.isNavLink,p=e.to,m=e.href,v=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,w=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,a.Z)().siteConfig,O=k.trailingSlash,P=k.baseUrl,C=(0,c.C)().withBaseUrl,E=(0,i.useContext)(s),j=p||m,N=(0,u.Z)(j),D=null==j?void 0:j.replace("pathname://",""),T=void 0!==D?(n=D,y&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;T&&N&&(T=(0,d.applyTrailingSlash)(T,{trailingSlash:O,baseUrl:P}));var _,x=(0,i.useRef)(!1),U=f?o.OL:o.rU,S=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!S&&N&&null!=T&&window.docusaurus.prefetch(T),function(){S&&_&&_.disconnect()}}),[T,S,N]);var Z=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,L=!T||!N||Z;return T&&N&&!Z&&!h&&E.collectLink(T),L?i.createElement("a",Object.assign({href:T},j&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(U,Object.assign({},w,{onMouseEnter:function(){x.current||null==T||(window.docusaurus.preload(T),x.current=!0)},innerRef:function(e){var t,n;S&&e&&N&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))}))).observe(t))},to:T||""},f&&{isActive:g,activeClassName:v}))}},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(52263),i=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+c:c}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},28084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i},useAllPluginInstancesData:function(){return o},usePluginData:function(){return a}});var r=n(52263);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function o(e){var t=i()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function a(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},18780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},21989:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=n(41655),u={title:"Deleting a Cluster",hide_title:!0,sidebar_position:5},l=void 0,s={unversionedId:"cluster-management/deleting-a-cluster",id:"cluster-management/deleting-a-cluster",isDocsHomePage:!1,title:"Deleting a Cluster",description:"{frontMatter.title}",source:"@site/docs/cluster-management/deleting-a-cluster.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/deleting-a-cluster",permalink:"/docs/next/cluster-management/deleting-a-cluster",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cluster-management/deleting-a-cluster.mdx",version:"current",sidebarPosition:5,frontMatter:{title:"Deleting a Cluster",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CAPI Provider Identities",permalink:"/docs/next/cluster-management/provider-identities"},next:{title:"Profiles",permalink:"/docs/next/cluster-management/profiles"}},c=[{value:"How to: delete a cluster using UI",id:"how-to-delete-a-cluster-using-ui",children:[]},{value:"How to: delete a cluster using CLI",id:"how-to-delete-a-cluster-using-cli",children:[]},{value:"Notes",id:"notes",children:[]}],d={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,u.title," ",(0,o.kt)(a.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,o.kt)("h3",{id:"how-to-delete-a-cluster-using-ui"},"How to: delete a cluster using UI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the cluster clusters you want to delete"),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE A PR TO DELETE CLUSTERS")," button"),(0,o.kt)("li",{parentName:"ul"},"Update the deletion PR values or leave the default values"),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Remove clusters")," button"),(0,o.kt)("li",{parentName:"ul"},"Merge the create PR for clusters deletion")),(0,o.kt)("h3",{id:"how-to-delete-a-cluster-using-cli"},"How to: delete a cluster using CLI"),(0,o.kt)("p",null,"To delete a cluster or clusters using cli run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mccp clusters delete <cluster-name>\n")),(0,o.kt)("p",null,"Merge the PR to delete the clusters."),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("p",null,"A current limitation is the inability to apply an ",(0,o.kt)("em",{parentName:"p"},"empty")," repository to a cluster. If you have capi clusters and other manifests commited to this repository, and then ",(0,o.kt)("em",{parentName:"p"},"delete all of them")," so there are 0 manifests left, then the apply will fail and the resources will not be removed from the cluster.\nA workaround is to add a dummy ",(0,o.kt)("em",{parentName:"p"},"ConfigMap")," back to the git repository after deleting everything else so that there is at least 1 manifest to apply."))}f.isMDXComponent=!0}}]);