(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[198],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||p;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32007:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),p=(n(67294),n(3905)),i={},a=void 0,c={unversionedId:"cli-reference/gitops_get_app",id:"cli-reference/gitops_get_app",isDocsHomePage:!1,title:"gitops_get_app",description:"gitops get app",source:"@site/docs/cli-reference/gitops_get_app.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_get_app",permalink:"/docs/next/cli-reference/gitops_get_app",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cli-reference/gitops_get_app.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitops_get",permalink:"/docs/next/cli-reference/gitops_get"},next:{title:"gitops_get_cluster",permalink:"/docs/next/cli-reference/gitops_get_cluster"}},s=[{value:"gitops get app",id:"gitops-get-app",children:[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"gitops-get-app"},"gitops get app"),(0,p.kt)("p",null,"Show information about one or all of the applications under gitops control"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"gitops get app [flags]\n")),(0,p.kt)("h3",{id:"examples"},"Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"\n# Get all applications under gitops control\ngitops get apps\n\n# Get status of an application under gitops control\ngitops get app <app-name>\n\n")),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"  -h, --help   help for app\n")),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   The namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/next/cli-reference/gitops_get"},"gitops get"),"\t - Display one or many Weave GitOps resources")),(0,p.kt)("h6",{id:"auto-generated-by-spf13cobra-on-2-dec-2021"},"Auto generated by spf13/cobra on 2-Dec-2021"))}u.isMDXComponent=!0}}]);