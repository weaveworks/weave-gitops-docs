(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[9076],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var p=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,p,a=function(e,t){if(null==e)return{};var n,p,a={},o=Object.keys(e);for(p=0;p<o.length;p++)n=o[p],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)n=o[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=p.createContext({}),l=function(e){var t=p.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return p.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?p.createElement(g,r(r({ref:t},c),{},{components:n})):p.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return p.createElement.apply(null,r)}return p.createElement.apply(null,n)}d.displayName="MDXCreateElement"},746:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var p=n(22122),a=n(19756),o=(n(67294),n(3905)),r={},i=void 0,s={unversionedId:"gitops_app",id:"version-0.3.3/gitops_app",isDocsHomePage:!1,title:"gitops_app",description:"gitops app",source:"@site/versioned_docs/version-0.3.3/gitops_app.md",sourceDirName:".",slug:"/gitops_app",permalink:"/docs/0.3.3/gitops_app",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.3/gitops_app.md",version:"0.3.3",frontMatter:{},sidebar:"version-0.3.3/tutorialSidebar",previous:{title:"gitops_add_cluster",permalink:"/docs/0.3.3/gitops_add_cluster"},next:{title:"gitops_app_add",permalink:"/docs/0.3.3/gitops_app_add"}},l=[{value:"gitops app",id:"gitops-app",children:[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,p.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitops-app"},"gitops app"),(0,o.kt)("p",null,"Manages your applications"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gitops app [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n  # Get last 10 commits for an application\n  gitops app <app-name> get commits\n\n  # Add an application to gitops from local git repository\n  gitops app add . --name <app-name>\n\n  # Remove an application from gitops\n  gitops app remove <app-name>\n\n  # Status an application under gitops control\n  gitops app status <app-name>\n\n  # List applications under gitops control\n  gitops app list\n\n  # Pause gitops automation\n  gitops app pause <app-name>\n\n  # Unpause gitops automation\n  gitops app unpause <app-name>\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for app\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops"},"gitops"),"\t - Weave GitOps"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_app_add"},"gitops app add"),"\t - Add a workload repository to a gitops cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_app_list"},"gitops app list"),"\t - List applications under gitops control"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_app_pause"},"gitops app pause"),"\t - Pause an application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_app_remove"},"gitops app remove"),"\t - Remove an app from a gitops cluster"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_app_status"},"gitops app status"),"\t - Get status of a workload under gitops control"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.3.3/gitops_app_unpause"},"gitops app unpause"),"\t - Unpause an application")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-25-oct-2021"},"Auto generated by spf13/cobra on 25-Oct-2021"))}u.isMDXComponent=!0}}]);