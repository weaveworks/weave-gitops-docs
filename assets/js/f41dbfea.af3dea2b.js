(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[7516],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),g=o,d=f["".concat(a,".").concat(g)]||f[g]||u[g]||i;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11945:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),c={},s=void 0,a={unversionedId:"cli-reference/gitops_get_cluster",id:"version-0.4.1/cli-reference/gitops_get_cluster",isDocsHomePage:!1,title:"gitops_get_cluster",description:"gitops get cluster",source:"@site/versioned_docs/version-0.4.1/cli-reference/gitops_get_cluster.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_get_cluster",permalink:"/docs/0.4.1/cli-reference/gitops_get_cluster",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.1/cli-reference/gitops_get_cluster.md",version:"0.4.1",frontMatter:{},sidebar:"version-0.4.1/tutorialSidebar",previous:{title:"gitops_get_app",permalink:"/docs/0.4.1/cli-reference/gitops_get_app"},next:{title:"gitops_get_commits",permalink:"/docs/0.4.1/cli-reference/gitops_get_commits"}},l=[{value:"gitops get cluster",id:"gitops-get-cluster",children:[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-get-cluster"},"gitops get cluster"),(0,i.kt)("p",null,"Display one or many CAPI clusters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gitops get cluster [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n# Get all CAPI clusters\ngitops get clusters\n\n# Get a single CAPI cluster\ngitops get cluster <cluster-name>\n\n# Get the Kubeconfig of a cluster\ngitops get cluster <cluster-name> --kubeconfig\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help         help for cluster\n      --kubeconfig   Returns the Kubeconfig of the workload cluster\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   Weave GitOps runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.4.1/cli-reference/gitops_get"},"gitops get"),"\t - Display one or many Weave GitOps resources")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-3-nov-2021"},"Auto generated by spf13/cobra on 3-Nov-2021"))}u.isMDXComponent=!0}}]);