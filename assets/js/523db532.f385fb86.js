/*! For license information please see 523db532.f385fb86.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[363177],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,h=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},569176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"provider",title:"Google Authentication Provider",sidebar_label:"Google",description:"Adding Google OAuth as an authentication provider in Backstage"},l=void 0,c={unversionedId:"auth/google/provider",id:"auth/google/provider",title:"Google Authentication Provider",description:"Adding Google OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/google/provider.md",sourceDirName:"auth/google",slug:"/auth/google/provider",permalink:"/docs/auth/google/provider",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/google/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Google Authentication Provider",sidebar_label:"Google",description:"Adding Google OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"GitLab",permalink:"/docs/auth/gitlab/provider"},next:{title:"Google IAP",permalink:"/docs/auth/google/gcp-iap-auth"}},u={},p=[{value:"Create OAuth Credentials",id:"create-oauth-credentials",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}],s={toc:p};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Backstage ",(0,n.kt)("inlineCode",{parentName:"p"},"core-plugin-api")," package comes with a Google authentication\nprovider that can authenticate users using Google OAuth."),(0,n.kt)("h2",o({},{id:"create-oauth-credentials"}),"Create OAuth Credentials"),(0,n.kt)("p",null,"To support Google authentication, you must create OAuth credentials:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to the ",(0,n.kt)("a",o({parentName:"li"},{href:"https://console.cloud.google.com"}),"Google Console")),(0,n.kt)("li",{parentName:"ol"},"Select or create a new project from the dropdown menu on the top bar"),(0,n.kt)("li",{parentName:"ol"},"Navigate to\n",(0,n.kt)("a",o({parentName:"li"},{href:"https://console.cloud.google.com/apis/credentials"}),"APIs & Services > Credentials")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create Credentials")," and choose ",(0,n.kt)("inlineCode",{parentName:"li"},"OAuth client ID")),(0,n.kt)("li",{parentName:"ol"},"Configure an OAuth consent screen, if required",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For local development, you do not need to enter any Authorized domain"),(0,n.kt)("li",{parentName:"ul"},"For scopes, select ",(0,n.kt)("inlineCode",{parentName:"li"},"openid"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"auth/userinfo.email")," and\n",(0,n.kt)("inlineCode",{parentName:"li"},"auth/userinfo.profile")),(0,n.kt)("li",{parentName:"ul"},"Add yourself as a test user, if using External user type"))),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("strong",{parentName:"li"},"Application Type")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"Web Application")," with these settings:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Name"),": Backstage (or your custom app name)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorized JavaScript origins"),": http://localhost:3000"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Authorized Redirect URIs"),":\nhttp://localhost:7007/api/auth/google/handler/frame"))),(0,n.kt)("li",{parentName:"ol"},"Click Create")),(0,n.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"The provider configuration can then be added to your ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," under the\nroot ",(0,n.kt)("inlineCode",{parentName:"p"},"auth")," configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-yaml"}),"auth:\n  environment: development\n  providers:\n    google:\n      development:\n        clientId: ${AUTH_GOOGLE_CLIENT_ID}\n        clientSecret: ${AUTH_GOOGLE_CLIENT_SECRET}\n")),(0,n.kt)("p",null,"The Google provider is a structure with two configuration keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientId"),": The client ID that you generated, e.g.\n",(0,n.kt)("inlineCode",{parentName:"li"},"10023341500512-beui241gjwwkrdkr2eh7dprewj2pp1q.apps.googleusercontent.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientSecret"),": The client secret tied to the generated client ID.")),(0,n.kt)("h2",o({},{id:"adding-the-provider-to-the-backstage-frontend"}),"Adding the provider to the Backstage frontend"),(0,n.kt)("p",null,"To add the provider to the frontend, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"googleAuthApi")," reference and\n",(0,n.kt)("inlineCode",{parentName:"p"},"SignInPage")," component as shown in\n",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/auth/#adding-the-provider-to-the-sign-in-page"}),"Adding the provider to the sign-in page"),"."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))r.call(i,p)&&(c[p]=i[p]);if(t){l=t(i);for(var s=0;s<l.length;s++)n.call(i,l[s])&&(c[l[s]]=i[l[s]])}}return c}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,l=60110,c=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),l=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),p=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var k=v.prototype=new y;k.constructor=v,n(k,m.prototype),k.isPureReactComponent=!0;var b={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:b.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+A(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),_(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+A(l=e[u],u);c+=_(l,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(l=e.next()).done;)c+=_(l=l.value,t,r,p=n+A(l,u++),i);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,r)=>{r(541535)}}]);