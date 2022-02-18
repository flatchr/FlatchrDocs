"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8986],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=o(n),s=r,g=m["".concat(u,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7740:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:2,description:"Comment remplir un tag candidat gr\xe2ce \xe0 l'API Flatchr"},u="Remplir un tag candidat",o={unversionedId:"QuickStart/Tags/Ajouter_tag",id:"QuickStart/Tags/Ajouter_tag",title:"Remplir un tag candidat",description:"Comment remplir un tag candidat gr\xe2ce \xe0 l'API Flatchr",source:"@site/docs/QuickStart/Tags/Ajouter_tag.md",sourceDirName:"QuickStart/Tags",slug:"/QuickStart/Tags/Ajouter_tag",permalink:"/docs/QuickStart/Tags/Ajouter_tag",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Comment remplir un tag candidat gr\xe2ce \xe0 l'API Flatchr"},sidebar:"tutorialSidebar",previous:{title:"R\xe9cup\xe9rer les tags",permalink:"/docs/QuickStart/Tags/Recuperer_tags"},next:{title:"Afficher les tags candidat",permalink:"/docs/QuickStart/Tags/Afficher_tags_candidats"}},c=[{value:"Requ\xeate",id:"requ\xeate",children:[{value:"Param\xe8tres",id:"param\xe8tres",children:[],level:3},{value:"Exemples de requ\xeate",id:"exemples-de-requ\xeate",children:[],level:3}],level:2},{value:"R\xe9ponse",id:"r\xe9ponse",children:[{value:"Exemple de r\xe9ponse",id:"exemple-de-r\xe9ponse",children:[],level:3}],level:2}],d={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"remplir-un-tag-candidat"},"Remplir un tag candidat"),(0,l.kt)("p",null,"Vous pouvez un tag candidat gr\xe2ce \xe0 l'API."),(0,l.kt)("h2",{id:"requ\xeate"},"Requ\xeate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"POST /company/{companyID}/applicant/{applicantID}/trait\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422"},(0,l.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,l.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Obligatoire"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"companyID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/getting_started#identifiant-de-lentreprise"},"Identifiant de l'entreprise"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicantID"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du candidat")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"L'identifiant du tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("center",null,"\u2714\ufe0f")),(0,l.kt)("td",{parentName:"tr",align:null},"La valeur du tag")))),(0,l.kt)("h3",{id:"exemples-de-requ\xeate"},"Exemples de requ\xeate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Requ\xeate cURL"',title:'"Requ\xeate','cURL"':!0},'curl -X POST \'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/ADYjo9mGxZdkR0ry/trait\'\n    -H "Authorization: Bearer {token}"\n    -H \'Content-Type: application/json\'\n    -d \'{"tag":"5gQayv9L1Qp6LXE4","value":"Bac +3"}\'\n')),(0,l.kt)("h2",{id:"r\xe9ponse"},"R\xe9ponse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag_id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifiant du tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Valeur du tag")))),(0,l.kt)("h3",{id:"exemple-de-r\xe9ponse"},"Exemple de r\xe9ponse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":"w67MknKVOldJ1203",\n    "tag_id":"5gQayv9L1Qp6LXE4",\n    "value":"Bac +3"\n}\n')))}m.isMDXComponent=!0}}]);