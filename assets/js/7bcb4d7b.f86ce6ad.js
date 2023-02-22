/*! For license information please see 7bcb4d7b.f86ce6ad.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[977930],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(667294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=l,b=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:l,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},742737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});r(827378);var n=r(603905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const a={id:"plugin-cloudbuild.cloudbuildclient",title:"CloudbuildClient",description:"API reference for CloudbuildClient"},u=void 0,i={unversionedId:"reference/plugin-cloudbuild.cloudbuildclient",id:"reference/plugin-cloudbuild.cloudbuildclient",title:"CloudbuildClient",description:"API reference for CloudbuildClient",source:"@site/../docs/reference/plugin-cloudbuild.cloudbuildclient.md",sourceDirName:"reference",slug:"/reference/plugin-cloudbuild.cloudbuildclient",permalink:"/docs/reference/plugin-cloudbuild.cloudbuildclient",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cloudbuild.cloudbuildclient.md",tags:[],version:"current",frontMatter:{id:"plugin-cloudbuild.cloudbuildclient",title:"CloudbuildClient",description:"API reference for CloudbuildClient"}},c={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],d={toc:p};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/reference/plugin-cloudbuild"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-cloudbuild"))," ",">"," ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient"}),(0,n.kt)("inlineCode",{parentName:"a"},"CloudbuildClient"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-typescript"}),"class CloudbuildClient implements CloudbuildApi \n")),(0,n.kt)("b",null,"Implements:")," [CloudbuildApi](/docs/reference/plugin-cloudbuild.cloudbuildapi)",(0,n.kt)("h2",l({},{id:"constructors"}),"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Constructor"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient._constructor_"}),"(constructor)(googleAuthApi)")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,n.kt)("code",null,"CloudbuildClient")," class")))),(0,n.kt)("h2",l({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient.gettoken"}),"getToken()")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient.getworkflow"}),"getWorkflow(options)")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient.getworkflowrun"}),"getWorkflowRun(options)")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient.listworkflowruns"}),"listWorkflowRuns(options)")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/reference/plugin-cloudbuild.cloudbuildclient.rerunworkflow"}),"reRunWorkflow(options)")),(0,n.kt)("td",l({parentName:"tr"},{align:null})),(0,n.kt)("td",l({parentName:"tr"},{align:null}))))))}s.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(l){return!1}}()?Object.assign:function(e,o){for(var a,u,i=l(e),c=1;c<arguments.length;c++){for(var p in a=Object(arguments[c]))r.call(a,p)&&(i[p]=a[p]);if(t){u=t(a);for(var d=0;d<u.length;d++)n.call(a,u[d])&&(i[u[d]]=a[u[d]])}}return i}},541535:(e,t,r)=>{var n=r(862525),l=60103,o=60106;var a=60109,u=60110,i=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;l=d("react.element"),o=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),a=d("react.provider"),u=d("react.context"),i=d("react.forward_ref"),d("react.suspense"),c=d("react.memo"),p=d("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}function g(){}function k(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var h=k.prototype=new g;h.constructor=k,n(h,y.prototype),h.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)O.call(t,n)&&!w.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var c=Array(i),p=0;p<i;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:l,type:e,key:a,ref:u,props:o,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case o:i=!0}}if(i)return a=a(i=e),e=""===n?"."+P(i,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),_(a,t,r,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+P(u=e[c],c);i+=_(u,t,r,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(u=e.next()).done;)i+=_(u=u.value,t,r,p=n+P(u,c++),a);else if("object"===u)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function S(e,t,r){if(null==e)return e;var n=[],l=0;return _(e,n,"","",(function(e){return t.call(r,e,l++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function A(){var e=x.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,r)=>{r(541535)}}]);