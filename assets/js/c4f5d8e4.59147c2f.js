(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[4195],{82924:function(e,t,n){"use strict";var a=n(67294).createContext(void 0);t.Z=a},85350:function(e,t,n){"use strict";var a=n(67294),i=n(82924);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},43667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(67294),i=n(86010),r=n(25420),o=(n(36742),n(52263)),s="heroBanner_1ZBZ",c=n(22122),l="features_pzNA",u=[{title:"Easy to Use",description:a.createElement(a.Fragment,null,"Weave GitOps is designed to be effective and easy to get started with, without compromising on power and capabilities.")},{title:"Focus on What Matters",description:a.createElement(a.Fragment,null,"Weave GitOps takes care of continuous deployment, Helm, Kustomization, integration with GitHub and Gitlab, so you can focus on coding.")},{title:"Powered by Flux",description:a.createElement(a.Fragment,null,a.createElement("a",{href:"https://fluxcd.io"},"Flux")," is a leading CNCF project around GitOps automation. Weave GitOps builds on this foundation to create a highly effective GitOps runtime.")}];function m(e){var t=e.title,n=e.description;return a.createElement("div",{className:(0,i.Z)("col col--4")},a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,t),a.createElement("p",null,n)))}function d(){return a.createElement("section",{className:l},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},u.map((function(e,t){return a.createElement(m,(0,c.Z)({key:t},e))})))))}function p(){var e=(0,o.Z)().siteConfig;return a.createElement("header",{className:(0,i.Z)("hero hero--primary",s)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline)))}function f(){var e=(0,o.Z)().siteConfig;return a.createElement(r.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},a.createElement(p,null),a.createElement("main",null,a.createElement(d,null)))}}}]);