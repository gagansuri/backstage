/*! For license information please see f919ffb0.bd976b5e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[556075],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),f=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=f(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=f(t),d=o,y=p["".concat(u,".").concat(d)]||p[d]||s[d]||a;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=t[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},379627:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>l});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"plugin-auth-backend.authproviderconfig",title:"AuthProviderConfig",description:"API reference for AuthProviderConfig"},c=void 0,u={unversionedId:"reference/plugin-auth-backend.authproviderconfig",id:"reference/plugin-auth-backend.authproviderconfig",title:"AuthProviderConfig",description:"API reference for AuthProviderConfig",source:"@site/../docs/reference/plugin-auth-backend.authproviderconfig.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.authproviderconfig",permalink:"/docs/reference/plugin-auth-backend.authproviderconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.authproviderconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.authproviderconfig",title:"AuthProviderConfig",description:"API reference for AuthProviderConfig"}},f={},l=[],p={toc:l};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-auth-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-auth-backend"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-auth-backend.authproviderconfig"}),(0,n.kt)("inlineCode",{parentName:"a"},"AuthProviderConfig"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type AuthProviderConfig = {\n    baseUrl: string;\n    appUrl: string;\n    isOriginAllowed: (origin: string) => boolean;\n    cookieConfigurer?: CookieConfigurer;\n};\n")),(0,n.kt)("b",null,"References:")," [CookieConfigurer](/docs/reference/plugin-auth-backend.cookieconfigurer)")}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,u=o(e),f=1;f<arguments.length;f++){for(var l in i=Object(arguments[f]))t.call(i,l)&&(u[l]=i[l]);if(r){c=r(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(u[c[p]]=i[c[p]])}}return u}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var i=60109,c=60110,u=60112;var f=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),u=p("react.forward_ref"),p("react.suspense"),f=p("react.memo"),l=p("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function h(){}function v(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var m=v.prototype=new h;m.constructor=v,n(m,b.prototype),m.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var f=Array(u),l=0;l<u;l++)f[l]=arguments[l+2];a.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return i=i(u=e),e=""===n?"."+_(u,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),S(i,r,t,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),r.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var l=n+_(c=e[f],f);u+=S(c,r,t,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(c=e.next()).done;)u+=S(c=c.value,r,t,l=n+_(c,f++),i);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function A(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function N(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);