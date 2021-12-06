(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2808],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1359:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={},c=void 0,p={unversionedId:"cli-reference/gitops_beta",id:"version-0.5.0/cli-reference/gitops_beta",isDocsHomePage:!1,title:"gitops_beta",description:"gitops beta",source:"@site/versioned_docs/version-0.5.0/cli-reference/gitops_beta.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_beta",permalink:"/docs/cli-reference/gitops_beta",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.5.0/cli-reference/gitops_beta.md",version:"0.5.0",frontMatter:{},sidebar:"version-0.5.0/tutorialSidebar",previous:{title:"gitops_add_cluster",permalink:"/docs/cli-reference/gitops_add_cluster"},next:{title:"gitops_beta_add",permalink:"/docs/cli-reference/gitops_beta_add"}},s=[{value:"gitops beta",id:"gitops-beta",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-beta"},"gitops beta"),(0,i.kt)("p",null,"Experimental commands"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --config string   config file (default is $HOME/.beta.yaml)\n  -h, --help            help for beta\n  -t, --toggle          Help message for toggle\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   The namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli-reference/gitops"},"gitops"),"\t - Weave GitOps"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli-reference/gitops_beta_add"},"gitops beta add"),"\t - Add content to the GitOps repo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli-reference/gitops_beta_init"},"gitops beta init"),"\t - Initialize a git repo into a GitOps repo"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli-reference/gitops_beta_install"},"gitops beta install"),"\t - Install or upgrade GitOps")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-dec-2021"},"Auto generated by spf13/cobra on 2-Dec-2021"))}u.isMDXComponent=!0}}]);