(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[4882],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3353:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={},c=void 0,p={unversionedId:"cli-reference/gitops_beta_add",id:"cli-reference/gitops_beta_add",isDocsHomePage:!1,title:"gitops_beta_add",description:"gitops beta add",source:"@site/docs/cli-reference/gitops_beta_add.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_beta_add",permalink:"/docs/next/cli-reference/gitops_beta_add",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cli-reference/gitops_beta_add.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitops_beta",permalink:"/docs/next/cli-reference/gitops_beta"},next:{title:"gitops_beta_add_app",permalink:"/docs/next/cli-reference/gitops_beta_add_app"}},s=[{value:"gitops beta add",id:"gitops-beta-add",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gitops-beta-add"},"gitops beta add"),(0,a.kt)("p",null,"Add content to the GitOps repo"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for add\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --config string      config file (default is $HOME/.beta.yaml)\n  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   The namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/cli-reference/gitops_beta"},"gitops beta"),"\t - Experimental commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/cli-reference/gitops_beta_add_app"},"gitops beta add app"),"\t - Adds an application workload to the GitOps repository")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-dec-2021"},"Auto generated by spf13/cobra on 2-Dec-2021"))}l.isMDXComponent=!0}}]);