(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[1666],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39845:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={},p=void 0,s={unversionedId:"cli-reference/gitops_upgrade",id:"version-0.4.1/cli-reference/gitops_upgrade",isDocsHomePage:!1,title:"gitops_upgrade",description:"gitops upgrade",source:"@site/versioned_docs/version-0.4.1/cli-reference/gitops_upgrade.md",sourceDirName:"cli-reference",slug:"/cli-reference/gitops_upgrade",permalink:"/docs/0.4.1/cli-reference/gitops_upgrade",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.4.1/cli-reference/gitops_upgrade.md",version:"0.4.1",frontMatter:{},sidebar:"version-0.4.1/tutorialSidebar",previous:{title:"gitops_uninstall",permalink:"/docs/0.4.1/cli-reference/gitops_uninstall"},next:{title:"gitops_version",permalink:"/docs/0.4.1/cli-reference/gitops_version"}},c=[{value:"gitops upgrade",id:"gitops-upgrade",children:[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gitops-upgrade"},"gitops upgrade"),(0,i.kt)("p",null,"Upgrade to Weave GitOps Enterprise"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gitops upgrade [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # Install GitOps in the wego-system namespace\n  gitops upgrade\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --base string             The base branch to open the pull request against (default "main")\n      --branch string           The branch to create the pull request from (default "tier-upgrade-enterprise")\n      --commit-message string   The commit message (default "Upgrade to WGE")\n      --config-map string       The name of the ConfigMap which contains values for this profile.\n      --dry-run                 Output the generated profile without creating a pull request\n      --git-repository string   The namespace and name of the GitRepository object governing the flux repo (default: git current working directory)\n  -h, --help                    help for upgrade\n      --out string              Optional location to create the profile installation folder in. This should be relative to the current working directory. (default: current)\n      --profile-branch string   The branch to use on the repository in which the profile is. (default "main")\n      --remote string           The remote to push the branch to (default "origin")\n      --repo string             The repository to open a pull request against. E.g: acme/my-config-repo (default: git current working directory)\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint\n      --namespace string   Weave GitOps runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.4.1/cli-reference/gitops"},"gitops"),"\t - Weave GitOps")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-3-nov-2021"},"Auto generated by spf13/cobra on 3-Nov-2021"))}u.isMDXComponent=!0}}]);