/*! For license information please see 9a15fbf0.7af548a7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[672024],{603905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,k=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},174102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});t(827378);var r=t(603905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={id:"plugin-jenkins-backend.jenkinsinstanceconfig",title:"JenkinsInstanceConfig",description:"API reference for JenkinsInstanceConfig"},c=void 0,l={unversionedId:"reference/plugin-jenkins-backend.jenkinsinstanceconfig",id:"reference/plugin-jenkins-backend.jenkinsinstanceconfig",title:"JenkinsInstanceConfig",description:"API reference for JenkinsInstanceConfig",source:"@site/../docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.jenkinsinstanceconfig",permalink:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.jenkinsinstanceconfig",title:"JenkinsInstanceConfig",description:"API reference for JenkinsInstanceConfig"}},s={},u=[{value:"Properties",id:"properties",level:2}],p={toc:u};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-jenkins-backend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-jenkins-backend"))," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig"}),(0,r.kt)("inlineCode",{parentName:"a"},"JenkinsInstanceConfig"))),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export interface JenkinsInstanceConfig \n")),(0,r.kt)("h2",a({},{id:"properties"}),"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.apikey"}),"apiKey")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.baseurl"}),"baseUrl")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.crumbissuer"}),"crumbIssuer?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.extrarequestheaders"}),"extraRequestHeaders?")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Record","<","string, string",">"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("i",null,"(Optional)")," Extra headers to send to Jenkins instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.name"}),"name")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-jenkins-backend.jenkinsinstanceconfig.username"}),"username")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,c,l=a(e),s=1;s<arguments.length;s++){for(var u in o=Object(arguments[s]))t.call(o,u)&&(l[u]=o[u]);if(n){c=n(o);for(var p=0;p<c.length;p++)r.call(o,c[p])&&(l[c[p]]=o[c[p]])}}return l}},541535:(e,n,t)=>{var r=t(862525),a=60103,i=60106;var o=60109,c=60110,l=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),s=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||k}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||k}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var j=b.prototype=new y;j.constructor=b,r(j,m.prototype),j.isPureReactComponent=!0;var h={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function N(e,n,t){var r,i={},o=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(o=""+n.key),n)v.call(n,r)&&!O.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:o,ref:c,props:i,_owner:h.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function _(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return o=o(l=e),e=""===r?"."+_(l,0):r,Array.isArray(o)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),S(o,n,t,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,t+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),n.push(o)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+_(c=e[s],s);l+=S(c,n,t,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)l+=S(c=c.value,n,t,u=r+_(c,s++),o);else if("object"===c)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return l}function C(e,n,t){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function x(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function I(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,n,t)=>{t(541535)}}]);