(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[9491],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68653:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={sidebar_position:0},s="Introduction",u={unversionedId:"intro",id:"version-0.2.5/intro",isDocsHomePage:!1,title:"Introduction",description:"Weave GitOps is a continuous delivery runtime that enables GitOps. Based on the popular CNCF Flux project, Weave GitOps is",source:"@site/versioned_docs/version-0.2.5/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/0.2.5/intro",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.2.5/intro.md",version:"0.2.5",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"version-0.2.5/tutorialSidebar",next:{title:"Installing the CLI",permalink:"/docs/0.2.5/installation"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Features",id:"features",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Weave GitOps is a continuous delivery runtime that enables GitOps. Based on the popular ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io"},"CNCF Flux")," project, Weave GitOps is\na highly effective way to enable GitOps automation for continuous delivery of Kubernetes and Cloud Native applications."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation"},"Installation")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Getting Started")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Continuous Delivery based on Git - every change in your cluster is based on a PR and Commit. The result is auditable, effective delivery with instant rollbacks"),(0,o.kt)("li",{parentName:"ul"},"Designed for Kubernetes - Weave GitOps works seamlessly with Kubernetes clusters"),(0,o.kt)("li",{parentName:"ul"},"Declarative automation - by using declarative automation, Weave GitOps can ensure that your cluster state is continuously reconciled to the required configuration"),(0,o.kt)("li",{parentName:"ul"},"Works with your existing tools - effective built in integrations with Helm, Kustomize, Github and Github Actions, Gitlab, and others")))}p.isMDXComponent=!0}}]);