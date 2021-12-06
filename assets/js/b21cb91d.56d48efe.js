(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[9893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96975:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={},p=void 0,s={unversionedId:"gitops_beta_add_app",id:"version-0.4.0/gitops_beta_add_app",isDocsHomePage:!1,title:"gitops_beta_add_app",description:"gitops beta add app",source:"@site/versioned_docs/version-0.4.0/gitops_beta_add_app.md",sourceDirName:".",slug:"/gitops_beta_add_app",permalink:"/docs/0.4.0/gitops_beta_add_app",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.0/gitops_beta_add_app.md",version:"0.4.0",frontMatter:{},sidebar:"version-0.4.0/tutorialSidebar",previous:{title:"gitops_beta_add",permalink:"/docs/0.4.0/gitops_beta_add"},next:{title:"gitops_beta_init",permalink:"/docs/0.4.0/gitops_beta_init"}},d=[{value:"gitops beta add app",id:"gitops-beta-add-app",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:d};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-beta-add-app"},"gitops beta add app"),(0,i.kt)("p",null,"Adds an application workload to the GitOps repository"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This command mirrors the original app add command in\nthat it adds the definition for the application to the repository\nand sets up syncing into a cluster. It uses the new directory\nstructure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gitops beta add app [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --app-config-url string   Url of external repository (if any) which will hold automation manifests; NONE to store only in the cluster\n      --dry-run                 If set, 'gitops add app' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help                    help for app\n      --url string              Url of remote repository\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --config string      config file (default is $HOME/.beta.yaml)\n  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.4.0/gitops_beta_add"},"gitops beta add"),"\t - Add content to the GitOps repo")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-27-oct-2021"},"Auto generated by spf13/cobra on 27-Oct-2021"))}l.isMDXComponent=!0}}]);