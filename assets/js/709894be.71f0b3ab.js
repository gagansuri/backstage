/*! For license information please see 709894be.71f0b3ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[767901],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,d=u["".concat(a,".").concat(y)]||u[y]||f[y]||i;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=y;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},320064:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"plugin-permission-node.applyconditionsresponse",title:"ApplyConditionsResponse",description:"API reference for ApplyConditionsResponse"},p=void 0,a={unversionedId:"reference/plugin-permission-node.applyconditionsresponse",id:"reference/plugin-permission-node.applyconditionsresponse",title:"ApplyConditionsResponse",description:"API reference for ApplyConditionsResponse",source:"@site/../docs/reference/plugin-permission-node.applyconditionsresponse.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.applyconditionsresponse",permalink:"/docs/reference/plugin-permission-node.applyconditionsresponse",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.applyconditionsresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.applyconditionsresponse",title:"ApplyConditionsResponse",description:"API reference for ApplyConditionsResponse"}},c={},l=[],u={toc:l};function f(e){var{components:r}=e,t=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-permission-node"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-permission-node"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-permission-node.applyconditionsresponse"}),(0,n.kt)("inlineCode",{parentName:"a"},"ApplyConditionsResponse"))),(0,n.kt)("p",null,"A batch of ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-permission-node.applyconditionsresponseentry"}),"ApplyConditionsResponseEntry")," objects."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type ApplyConditionsResponse = {\n    items: ApplyConditionsResponseEntry[];\n};\n")),(0,n.kt)("b",null,"References:")," [ApplyConditionsResponseEntry](/docs/reference/plugin-permission-node.applyconditionsresponseentry)")}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var s,p,a=o(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))t.call(s,l)&&(a[l]=s[l]);if(r){p=r(s);for(var u=0;u<p.length;u++)n.call(s,p[u])&&(a[p[u]]=s[p[u]])}}return a}},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;var s=60109,p=60110,a=60112;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),s=u("react.provider"),p=u("react.context"),a=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),l=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||d}function g(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var h=v.prototype=new g;h.constructor=v,n(h,b.prototype),h.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,i={},s=null,p=null;if(null!=r)for(n in void 0!==r.ref&&(p=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:s,ref:p,props:i,_owner:O.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,s){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var a=!1;if(null===e)a=!0;else switch(p){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return s=s(a=e),e=""===n?"."+_(a,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(C,"$&/")+"/"),S(s,r,t,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),r.push(s)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+_(p=e[c],c);a+=S(p,r,t,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(p=e.next()).done;)a+=S(p=p.value,r,t,l=n+_(p,c++),s);else if("object"===p)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function A(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function x(){var e=R.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);