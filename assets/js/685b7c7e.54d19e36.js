/*! For license information please see 685b7c7e.54d19e36.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[486645],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},419798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"core-plugin-api.elementcollection",title:"ElementCollection",description:"API reference for ElementCollection"},c=void 0,i={unversionedId:"reference/core-plugin-api.elementcollection",id:"reference/core-plugin-api.elementcollection",title:"ElementCollection",description:"API reference for ElementCollection",source:"@site/../docs/reference/core-plugin-api.elementcollection.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.elementcollection",permalink:"/docs/reference/core-plugin-api.elementcollection",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.elementcollection.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.elementcollection",title:"ElementCollection",description:"API reference for ElementCollection"}},u={},p=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],s={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/core-plugin-api"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/core-plugin-api.elementcollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"ElementCollection"))),(0,n.kt)("p",null,"A querying interface tailored to traversing a set of selected React elements and extracting data."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface ElementCollection \n")),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"Methods prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"selectBy")," are used to narrow the set of selected elements."),(0,n.kt)("p",null,"Methods prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"find")," return concrete data using a deep traversal of the set."),(0,n.kt)("p",null,"Methods prefixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," return concrete data using a shallow traversal of the set."),(0,n.kt)("h2",o({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/core-plugin-api.elementcollection.findcomponentdata"}),"findComponentData(query)")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Finds all elements using the same criteria as ",(0,n.kt)("code",null,"selectByComponentData"),", but returns the actual component data of each of those elements instead.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/core-plugin-api.elementcollection.getelements"}),"getElements()")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Returns all of the elements currently selected by this collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/core-plugin-api.elementcollection.selectbycomponentdata"}),"selectByComponentData(query)")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Narrows the set of selected components by doing a deep traversal and only including those that have defined component data for the given ",(0,n.kt)("code",null,"key"),".")))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var l,c,i=o(e),u=1;u<arguments.length;u++){for(var p in l=Object(arguments[u]))r.call(l,p)&&(i[p]=l[p]);if(t){c=t(l);for(var s=0;s<c.length;s++)n.call(l,c[s])&&(i[c[s]]=l[c[s]])}}return i}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var l=60109,c=60110,i=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),l=s("react.provider"),c=s("react.context"),i=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var v=b.prototype=new g;v.constructor=b,n(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},l=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),p=0;p<i;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,l){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return l=l(i=e),e=""===n?"."+P(i,0):n,Array.isArray(l)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),E(l,t,r,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+e)),t.push(l)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+P(c=e[u],u);i+=E(c,t,r,p,l)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(c=e.next()).done;)i+=E(c=c.value,t,r,p=n+P(c,u++),l);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function _(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function M(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);