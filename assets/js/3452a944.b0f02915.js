/*! For license information please see 3452a944.b0f02915.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[103913],{603905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(667294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},686348:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={id:"test-utils.mockconfigapi",title:"MockConfigApi",description:"API reference for MockConfigApi"},l=void 0,c={unversionedId:"reference/test-utils.mockconfigapi",id:"reference/test-utils.mockconfigapi",title:"MockConfigApi",description:"API reference for MockConfigApi",source:"@site/../docs/reference/test-utils.mockconfigapi.md",sourceDirName:"reference",slug:"/reference/test-utils.mockconfigapi",permalink:"/docs/reference/test-utils.mockconfigapi",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/test-utils.mockconfigapi.md",tags:[],version:"current",frontMatter:{id:"test-utils.mockconfigapi",title:"MockConfigApi",description:"API reference for MockConfigApi"}},p={},u=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],s={toc:u};function f(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/test-utils"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/test-utils"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/test-utils.mockconfigapi"}),(0,n.kt)("inlineCode",{parentName:"a"},"MockConfigApi"))),(0,n.kt)("p",null,"MockConfigApi is a thin wrapper around ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/config.configreader"}),"ConfigReader")," that can be used to mock configuration using a plain object."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class MockConfigApi implements ConfigApi \n")),(0,n.kt)("b",null,"Implements:")," [ConfigApi](/docs/reference/core-plugin-api.configapi)",(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const mockConfig = new MockConfigApi({\n  app: { baseUrl: 'https://example.com' },\n});\n\nconst rendered = await renderInTestApp(\n  <TestApiProvider apis={[[configApiRef, mockConfig]]}>\n    <MyTestedComponent />\n  </TestApiProvider>,\n);\n")),(0,n.kt)("h2",a({},{id:"constructors"}),"Constructors"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Constructor"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi._constructor_"}),"(constructor)(data)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,n.kt)("code",null,"MockConfigApi")," class")))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.get"}),"get(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getboolean"}),"getBoolean(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getconfig"}),"getConfig(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getconfigarray"}),"getConfigArray(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getnumber"}),"getNumber(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptional"}),"getOptional(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptionalboolean"}),"getOptionalBoolean(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptionalconfig"}),"getOptionalConfig(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptionalconfigarray"}),"getOptionalConfigArray(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptionalnumber"}),"getOptionalNumber(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptionalstring"}),"getOptionalString(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getoptionalstringarray"}),"getOptionalStringArray(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getstring"}),"getString(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.getstringarray"}),"getStringArray(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.has"}),"has(key)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/reference/test-utils.mockconfigapi.keys"}),"keys()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(t,o){for(var i,l,c=a(t),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))r.call(i,u)&&(c[u]=i[u]);if(e){l=e(i);for(var s=0;s<l.length;s++)n.call(i,l[s])&&(c[l[s]]=i[l[s]])}}return c}},541535:(t,e,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,l=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),l=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),p=s("react.memo"),u=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function k(t,e,r){this.props=t,this.context=e,this.refs=g,this.updater=r||m}function y(){}function b(t,e,r){this.props=t,this.context=e,this.refs=g,this.updater=r||m}k.prototype.isReactComponent={},k.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(d(85));this.updater.enqueueSetState(this,t,e,"setState")},k.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},y.prototype=k.prototype;var N=b.prototype=new y;N.constructor=b,n(N,k.prototype),N.isPureReactComponent=!0;var h={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,r){var n,o={},i=null,l=null;if(null!=e)for(n in void 0!==e.ref&&(l=e.ref),void 0!==e.key&&(i=""+e.key),e)v.call(e,n)&&!O.hasOwnProperty(n)&&(o[n]=e[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];o.children=p}if(t&&t.defaultProps)for(n in c=t.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:t,key:i,ref:l,props:o,_owner:h.current}}function w(t){return"object"==typeof t&&null!==t&&t.$$typeof===a}var C=/\/+/g;function A(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function P(t,e,r,n,i){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case o:c=!0}}if(c)return i=i(c=t),t=""===n?"."+A(c,0):n,Array.isArray(i)?(r="",null!=t&&(r=t.replace(C,"$&/")+"/"),P(i,e,r,"",(function(t){return t}))):null!=i&&(w(i)&&(i=function(t,e){return{$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+t)),e.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var p=0;p<t.length;p++){var u=n+A(l=t[p],p);c+=P(l,e,r,u,i)}else if(u=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=f&&t[f]||t["@@iterator"])?t:null}(t),"function"==typeof u)for(t=u.call(t),p=0;!(l=t.next()).done;)c+=P(l=l.value,e,r,u=n+A(l,p++),i);else if("object"===l)throw e=""+t,Error(d(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function S(t,e,r){if(null==t)return t;var n=[],a=0;return P(t,n,"","",(function(t){return e.call(r,t,a++)})),n}function _(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var M={current:null};function x(){var t=M.current;if(null===t)throw Error(d(321));return t}},827378:(t,e,r)=>{r(541535)}}]);