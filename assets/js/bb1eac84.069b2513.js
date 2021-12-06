(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[6056],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3527:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={},p=void 0,c={unversionedId:"gitops_get_credential",id:"version-0.3.3/gitops_get_credential",isDocsHomePage:!1,title:"gitops_get_credential",description:"gitops get credential",source:"@site/versioned_docs/version-0.3.3/gitops_get_credential.md",sourceDirName:".",slug:"/gitops_get_credential",permalink:"/docs/0.3.3/gitops_get_credential",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.3/gitops_get_credential.md",version:"0.3.3",frontMatter:{},sidebar:"version-0.3.3/tutorialSidebar",previous:{title:"gitops_get_cluster",permalink:"/docs/0.3.3/gitops_get_cluster"},next:{title:"gitops_get_template",permalink:"/docs/0.3.3/gitops_get_template"}},s=[{value:"gitops get credential",id:"gitops-get-credential",children:[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-get-credential"},"gitops get credential"),(0,i.kt)("p",null,"Get CAPI credentials"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gitops get credential [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n# Get all CAPI credentials\ngitops get credentials\n        \n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for credential\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_get"},"gitops get"),"\t - Display one or many Weave GitOps resources")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-25-oct-2021"},"Auto generated by spf13/cobra on 25-Oct-2021"))}u.isMDXComponent=!0}}]);