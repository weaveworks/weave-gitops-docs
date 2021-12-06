(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[6702],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40290:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),s={},a=void 0,l={unversionedId:"cli-reference/gitops_uninstall",id:"cli-reference/gitops_uninstall",isDocsHomePage:!1,title:"gitops_uninstall",description:"gitops uninstall",source:"@site/docs/cli-reference/gitops_uninstall.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_uninstall",permalink:"/docs/next/cli-reference/gitops_uninstall",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cli-reference/gitops_uninstall.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitops_ui_run",permalink:"/docs/next/cli-reference/gitops_ui_run"},next:{title:"gitops_upgrade",permalink:"/docs/next/cli-reference/gitops_upgrade"}},p=[{value:"gitops uninstall",id:"gitops-uninstall",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-uninstall"},"gitops uninstall"),(0,o.kt)("p",null,"Uninstall GitOps"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"The uninstall command removes GitOps components from the cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops uninstall [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Uninstall GitOps from the wego-system namespace\n  gitops uninstall\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --dry-run   Outputs all the manifests that would be uninstalled\n      --force     If set, 'gitops uninstall' will not ask for confirmation\n  -h, --help      help for uninstall\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   The namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/cli-reference/gitops"},"gitops"),"\t - Weave GitOps")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-dec-2021"},"Auto generated by spf13/cobra on 2-Dec-2021"))}u.isMDXComponent=!0}}]);