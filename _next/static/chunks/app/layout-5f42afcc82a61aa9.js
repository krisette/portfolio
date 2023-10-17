(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6219:function(e,t,r){Promise.resolve().then(r.bind(r,150)),Promise.resolve().then(r.t.bind(r,3054,23))},150:function(e,t,r){"use strict";r.r(t),r.d(t,{NavBar:function(){return l}});var n=r(7437),o=r(2265),s=r(7431);function l(){let[e,t]=(0,o.useState)(!1);return(0,n.jsx)("nav",{className:"w-full uppercase",children:(0,n.jsxs)("div",{className:"justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex items-center justify-between py-3 md:py-5 md:block text-white",children:[(0,n.jsx)("a",{href:"/",children:(0,n.jsx)(s.dvR,{size:40,className:"text-tertiary"})}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{type:"button",className:"p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",onClick:()=>t(!e),children:e?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(e?"block":"hidden"),children:(0,n.jsxs)("ul",{className:"items-center justify-center space-y-2 md:flex md:space-x-8 md:space-y-0",children:[(0,n.jsx)("li",{className:"hover-underline-animation cursor-pointer",children:(0,n.jsx)("a",{href:"/about",children:"About Me"})}),(0,n.jsx)("li",{className:"hover-underline-animation cursor-pointer",children:(0,n.jsx)("a",{href:"/projects",children:"Projects"})}),(0,n.jsx)("li",{className:"hover-underline-animation cursor-pointer",children:(0,n.jsx)("a",{href:"/contact",children:"Contact"})}),(0,n.jsx)("li",{className:"text-white hover:text-pink-200",children:(0,n.jsx)("a",{href:"/documents/Resume.pdf",className:"inline-block w-full px-4 py-2 text-center text-white border-solid border-2 border-white rounded-md hover:bg-white hover:text-black",children:"Download Resume"})})]})})})]})})}},3054:function(){},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:d,props:c,_owner:l.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function c(e){return function(t){return n.createElement(a,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function a(e){var t=function(t){var r,o=e.attr,s=e.size,c=e.title,a=i(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,a,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[982,971,864,744],function(){return e(e.s=6219)}),_N_E=e.O()}]);