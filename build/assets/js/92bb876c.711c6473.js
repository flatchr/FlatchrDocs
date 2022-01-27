"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6347],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8230:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,description:"Comment se connecter \xe0 l'API Flatchr ?"},l="Getting Started",d={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Comment se connecter \xe0 l'API Flatchr ?",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/docs/getting_started",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Comment se connecter \xe0 l'API Flatchr ?"},sidebar:"tutorialSidebar",next:{title:"Rechercher un candidat",permalink:"/docs/QuickStart/Candidats/Recuperer_un_candidat"}},c=[{value:"Introduction",id:"introduction",children:[{value:"URL",id:"url",children:[],level:4},{value:"Format",id:"format",children:[],level:4},{value:"S\xe9curit\xe9",id:"s\xe9curit\xe9",children:[],level:4}],level:2},{value:"Identification",id:"identification",children:[{value:"Token",id:"token",children:[],level:3},{value:"Slug",id:"slug",children:[],level:3},{value:"Identifiant de l&#39;entreprise",id:"identifiant-de-lentreprise",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("h4",{id:"url"},"URL"),(0,i.kt)("p",null,"L'URL racine de l'API Flatchr est : ",(0,i.kt)("a",{parentName:"p",href:"https://api.flatchr.io"},"https://api.flatchr.io"),"."),(0,i.kt)("h4",{id:"format"},"Format"),(0,i.kt)("p",null,"L'API est au format REST et toutes les donn\xe9es entrantes ou sortantes sont au format JSON encod\xe9 en UTF-8."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Il est de la responsabilit\xe9 du client du web service de s\u2019assurer que les caract\xe8res transmis ne contiennent pas de symboles \xab exotiques \xbb (par exemple, un texte copi\xe9/coll\xe9 \xe0 partir de Word contient des caract\xe8res comme les \xab \u2018 \xbb ou des puces non support\xe9s par le web service)."))),(0,i.kt)("p",null,"Les reponses retourn\xe9es par l'API sont accompagn\xe9es des statuts du protocole HTTP refl\xe9tant l\u2019\xe9tat de l\u2019ex\xe9cution de la requ\xeate sur la plateforme flatchr.io."),(0,i.kt)("h4",{id:"s\xe9curit\xe9"},"S\xe9curit\xe9"),(0,i.kt)("p",null,"Il est important de noter que les appels \xe0 l'API ne peuvent \xeatre effectu\xe9s qu'en HTTPS et que chaque connexion est logg\xe9e avec l'adresse IP de l'appelant."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Avant de commencer")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Avant toute mise en place, veuillez valider l\u2019ad\xe9quation entre ce service et votre mode de fonctionnement avec votre interlocuteur Flatchr."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://flatchr.io/cgu"},"Conditions g\xe9n\xe9rales d'utilisation")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"mailto:support@flatchr.io"},"Support Flatchr")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"identification"},"Identification"),(0,i.kt)("h3",{id:"token"},"Token"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Votre ",(0,i.kt)("inlineCode",{parentName:"p"},"API_KEY")," doit \xeatre g\xe9n\xe9r\xe9e dans votre espace Flatchr ",(0,i.kt)("a",{parentName:"p",href:"http://app.flatchr.io/#/board/settings/keys"},(0,i.kt)("strong",{parentName:"a"},"Configuration > Cl\xe9s")),"."))),(0,i.kt)("p",null,"Flatchr utilise le syst\xe8me d'authentification par token OAuth pour autoriser l'acc\xe8s \xe0 son API. "),(0,i.kt)("p",null,"Le token OAuth doit \xeatre inclus dans toutes les requ\xeates :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dans le header de la requ\xeate\n",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer API_KEY")),(0,i.kt)("li",{parentName:"ol"},"Ou \xe0 travers un argument dans la requ\xeate ",(0,i.kt)("inlineCode",{parentName:"li"},"?token=API_KEY"))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"slug"},"Slug"),(0,i.kt)("p",null,"Pour certaines requ\xeates vous aurez besoin de votre ",(0,i.kt)("inlineCode",{parentName:"p"},"slug"),", c\u2019est la r\xe9f\xe9rence unique de votre entreprise qui se trouve dans l\u2019URL de votre site carri\xe8re.\nIl est aussi disponible dans ",(0,i.kt)("a",{parentName:"p",href:"http://app.flatchr.io/#/board/settings/advanced"},(0,i.kt)("strong",{parentName:"a"},"Administration > Avanc\xe9e")," ")," > ",(0,i.kt)("strong",{parentName:"p"},"Configuration sous-domaine")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Exemple")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Exemple:")," dans ",(0,i.kt)("a",{parentName:"p",href:"https://avivacuisines.flatchr.io"},"https://avivacuisines.flatchr.io"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"avivacuisines"),' est la r\xe9f\xe9rence unique ou "slug")'))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"identifiant-de-lentreprise"},"Identifiant de l'entreprise"),(0,i.kt)("p",null,"Pour certaines requ\xeates vous aurez besoin de votre ",(0,i.kt)("inlineCode",{parentName:"p"},"cl\xe9 entreprise"),", c\u2019est la cl\xe9 unique qui d\xe9finit votre entreprise dans nos donn\xe9es.",(0,i.kt)("br",{parentName:"p"}),"\n","Elle se trouve dans l'onglet ",(0,i.kt)("a",{parentName:"p",href:"http://app.flatchr.io/#/board/settings/keys"},(0,i.kt)("strong",{parentName:"a"},"Configuration > Cl\xe9s"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Exemple")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"exemple cl\xe9 d&#39;entrpris",src:n(2623).Z})),(0,i.kt)("p",{parentName:"div"},"Ici la cl\xe9 entreprise est donc ",(0,i.kt)("inlineCode",{parentName:"p"},"G6KzqPnNLyp31m0l")))))}u.isMDXComponent=!0},2623:function(e,t,n){t.Z=n.p+"assets/images/screenshot_cle_entreprise-5ca86d7b2124b46371f99de103503aa7.png"}}]);