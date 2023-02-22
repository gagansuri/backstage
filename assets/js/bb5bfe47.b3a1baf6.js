/*! For license information please see bb5bfe47.b3a1baf6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[251051],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},392157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"testing",title:"Testing Backend Plugins and Modules",sidebar_label:"Testing",description:"Learn how to test your backend plugins and modules"},i=void 0,c={unversionedId:"backend-system/building-plugins-and-modules/testing",id:"backend-system/building-plugins-and-modules/testing",title:"Testing Backend Plugins and Modules",description:"Learn how to test your backend plugins and modules",source:"@site/../docs/backend-system/building-plugins-and-modules/02-testing.md",sourceDirName:"backend-system/building-plugins-and-modules",slug:"/backend-system/building-plugins-and-modules/testing",permalink:"/docs/backend-system/building-plugins-and-modules/testing",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/building-plugins-and-modules/02-testing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"testing",title:"Testing Backend Plugins and Modules",sidebar_label:"Testing",description:"Learn how to test your backend plugins and modules"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/building-plugins-and-modules/index"},next:{title:"Migration Guide",permalink:"/docs/backend-system/building-plugins-and-modules/migrating"}},l={},u=[{value:"Testing Backend Plugins and Modules",id:"testing-backend-plugins-and-modules",level:2},{value:"Testing Remote Service Interactions",id:"testing-remote-service-interactions",level:2},{value:"Testing Database Interactions",id:"testing-database-interactions",level:2}],p={toc:u};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."))),(0,r.kt)("p",null,"Utilities for testing backend plugins and modules are available in\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-test-utils"),". This section describes those facilities."),(0,r.kt)("h2",a({},{id:"testing-backend-plugins-and-modules"}),"Testing Backend Plugins and Modules"),(0,r.kt)("p",null,"To facilitate testing of backend plugins and modules, the\n",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-test-utils")," package provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"startTestBackend")," function\nwhich starts up an entire backend harness, complete with a number of mock\nservices. You can then provide overrides for services whose behavior you need to\nadjust for the test run. The function also accepts a number of ",(0,r.kt)("em",{parentName:"p"},"features")," (a\ncollective term for backend ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/backend-system/architecture/plugins"}),"plugins")," and\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/backend-system/architecture/modules"}),"modules"),"), that are the subjects of the test."),(0,r.kt)("p",null,"The function returns an HTTP server instance which can be used together with\ne.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"supertest")," to easily test the actual REST service surfaces of plugins who\nregister routes with ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/backend-system/core-services/index"}),"the HTTP router service\nAPI"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import { mockServices, startTestBackend } from '@backstage/backend-test-utils';\nimport request from 'supertest';\nimport { myPlugin } from './plugin.ts';\n\ndescribe('myPlugin', () => {\n  it('can serve values from config', async () => {\n    const fakeConfig = { myPlugin: { value: 7 } };\n\n    const { server } = await startTestBackend({\n      features: [myPlugin()],\n      services: [mockServices.config.factory({ data: fakeConfig })],\n    });\n\n    const response = await request(server).get('/api/example/get-value');\n    expect(response.status).toBe(200);\n    expect(response.body).toEqual({ value: 7 });\n  });\n});\n")),(0,r.kt)("p",null,"This example shows how to access the mock service factories and\npass options to them, which will override the default mock services."),(0,r.kt)("p",null,"The returned server also has a ",(0,r.kt)("inlineCode",{parentName:"p"},"port()")," method which returns the dynamically\nbound listening port. You can use this to perform lower level network\ninteractions with the running test service."),(0,r.kt)("h2",a({},{id:"testing-remote-service-interactions"}),"Testing Remote Service Interactions"),(0,r.kt)("p",null,"If your backend plugin or service interacts with external services using HTTP\ncalls, we recommend leveraging the ",(0,r.kt)("inlineCode",{parentName:"p"},"msw")," package to intercept actual outgoing\nrequests and return mock responses. This lets you stub out remote services\nrather than the local clients, leading to more thorough and robust tests. You\ncan read more about how it works ",(0,r.kt)("a",a({parentName:"p"},{href:"https://mswjs.io/"}),"in their documentation"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-test-utils")," package exports a ",(0,r.kt)("inlineCode",{parentName:"p"},"setupRequestMockHandlers"),"\nfunction which ensures that the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," lifecycle hooks are invoked to\nset up and tear down your ",(0,r.kt)("inlineCode",{parentName:"p"},"msw")," instance, and enables the option that completely\nrejects requests that don't match one of your mock rules. This ensures that your\ntests cannot accidentally leak traffic into production from tests."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import { setupRequestMockHandlers } from '@backstage/backend-test-utils';\nimport { rest } from 'msw';\nimport { setupServer } from 'msw/node';\n\ndescribe('read from remote', () => {\n  const worker = setupServer();\n  setupRequestMockHandlers(worker);\n\n  it('should auth and read successfully', async () => {\n    expect.assertions(1);\n\n    worker.use(\n      rest.get('https://remote-server.com/api/v3/foo', (req, res, ctx) => {\n        expect(req.headers.get('authorization')).toBe('Bearer fake');\n        return res(\n          ctx.status(200),\n          ctx.set('Content-Type', 'application/json'),\n          ctx.body(JSON.stringify({ value: 7 })),\n        );\n      }),\n    );\n\n    // exercise your plugin or service as usual, with real clients\n  });\n});\n")),(0,r.kt)("h2",a({},{id:"testing-database-interactions"}),"Testing Database Interactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/backend-test-utils")," package includes facilities for testing your\nplugins' interactions with databases, including spinning up ",(0,r.kt)("inlineCode",{parentName:"p"},"testcontainers"),"\npowered Docker images with real database engines to connect to."),(0,r.kt)("p",null,"The base setup for such a test could look as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// MyDatabaseClass.test.ts\nimport { TestDatabaseId, TestDatabases } from '@backstage/backend-test-utils';\nimport { MyDatabaseClass, type FooTableRow } from './MyDatabaseClass';\n\ndescribe('MyDatabaseClass', () => {\n  // Change this to the set of constants that you actually actively intend to\n  // support. This create call must be made inside a describe block. Make sure\n  // to create only one TestDatabases instance per file, since spinning up\n  // \"physical\" databases to test against is much costlier than creating the\n  // \"logical\" databases within them that the individual tests use.\n  const databases = TestDatabases.create({\n    ids: ['POSTGRES_13', 'POSTGRES_9', 'SQLITE_3'],\n  });\n\n  // Just an example of how to conveniently bundle up the setup code\n  async function createSubject(databaseId: TestDatabaseId) {\n    const knex = await databases.init(databaseId);\n    const subject = new MyDatabaseClass({ database: knex });\n    await subject.runMigrations();\n    return { knex, subject };\n  }\n\n  describe('foo', () => {\n    // Easily run the exact same test onto all supported databases\n    it.each(databases.eachSupportedId())(\n      'should run foo on %p',\n      async databaseId => {\n        const { knex, subject } = await createSubject(databaseId);\n        // raw knex is available for underlying manipulation\n        await knex<FooTableRow>('foo').insert({ value: 2 });\n        // drive your system under test as usual\n        await expect(subject.foos()).resolves.toEqual([{ value: 2 }]);\n      });\n  });\n")),(0,r.kt)("p",null,"If you want to pass the test database instance into backend plugins or services,\nyou can supply it in the form of a mock instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"coreServices.database")," to\nyour test database."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const { knex, subject } = await createSubject(databaseId);\nconst { server } = await startTestBackend({\n  features: [myPlugin()],\n  services: [[coreServices.database, { getClient: async () => knex }]],\n});\n")),(0,r.kt)("p",null,"When running locally, the tests only run against SQLite for the sake of speed.\nWhen the ",(0,r.kt)("inlineCode",{parentName:"p"},"CI")," environment variable is set, all given database engines are used."),(0,r.kt)("p",null,"If you do not want or are unable to use docker based database engines, e.g. if\nyour CI environment is able to supply databases natively, the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestDatabases"),"\nsupport custom connection strings through the use of environment variables that\nit'll take into account when present."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BACKSTAGE_TEST_DATABASE_POSTGRES13_CONNECTION_STRING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BACKSTAGE_TEST_DATABASE_POSTGRES9_CONNECTION_STRING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BACKSTAGE_TEST_DATABASE_MYSQL8_CONNECTION_STRING"))))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,s){for(var o,i,c=a(e),l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]))n.call(o,u)&&(c[u]=o[u]);if(t){i=t(o);for(var p=0;p<i.length;p++)r.call(o,i[p])&&(c[i[p]]=o[i[p]])}}return c}},541535:(e,t,n)=>{var r=n(862525),a=60103,s=60106;var o=60109,i=60110,c=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),s=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),o=p("react.provider"),i=p("react.context"),c=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function h(){}function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var k=y.prototype=new h;k.constructor=y,r(k,g.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,T={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,s={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,r)&&!T.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:a,type:e,key:o,ref:i,props:s,_owner:v.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return o=o(c=e),e=""===r?"."+N(c,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),C(o,t,n,"",(function(e){return e}))):null!=o&&(j(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+N(i=e[l],l);c+=C(i,t,n,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,n,u=r+N(i,l++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function _(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function E(){var e=P.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);