module.exports=function(){var e={204:function(e){"use strict";e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},578:function(e){"use strict";e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},119:function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},424:function(e){"use strict";function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},747:function(e,t,n){"use strict";var r=n(970);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},884:function(e){"use strict";e.exports=function(e){return e&&e.__esModule?e:{default:e}}},836:function(e,t,n){"use strict";var r=n(241);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=u?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}},346:function(e,t,n){"use strict";var r=n(241),o=n(204);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},970:function(e){"use strict";function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},241:function(e){"use strict";function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},164:function(e,t,n){"use strict";var r=n(836),o=n(884);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(578)),i=o(n(119)),c=o(n(747)),a=o(n(346)),f=o(n(424)),s=r(n(297));n(43);var l=function(e){(0,c.default)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,f.default)(t);if(n){var o=(0,f.default)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,a.default)(this,e)});function o(){return(0,u.default)(this,o),r.apply(this,arguments)}return(0,i.default)(o,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onClick;return s.createElement("div",{className:"myBtn",onClick:n},t)}}]),o}(s.Component);t.default=l},33:function(e,t,n){"use strict";var r=n(836),o=n(884);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(578)),i=o(n(119)),c=o(n(747)),a=o(n(346)),f=o(n(424)),s=r(n(297));n(318);var l=function(e){(0,c.default)(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,f.default)(t);if(n){var o=(0,f.default)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,a.default)(this,e)});function o(){return(0,u.default)(this,o),r.apply(this,arguments)}return(0,i.default)(o,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.children;return s.createElement("span",{className:"tag ".concat(t)},n)}}]),o}(s.Component);t.default=l},44:function(e,t,n){"use strict";var r=n(884);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Tag",{enumerable:!0,get:function(){return u.default}});var o=r(n(164)),u=r(n(33))},308:function(){},314:function(){},43:function(e,t,n){"use strict";n.r(t);var r=n(379),o=n.n(r),u=n(308),i=n.n(u);o()(i(),{insert:"head",singleton:!1}),t.default=i().locals||{}},318:function(e,t,n){"use strict";n.r(t);var r=n(379),o=n.n(r),u=n(314),i=n.n(u);o()(i(),{insert:"head",singleton:!1}),t.default=i().locals||{}},379:function(e,t,n){"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),u=[];function i(e){for(var t=-1,n=0;n<u.length;n++)if(u[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],a=t.base?c[0]+t.base:c[0],f=n[a]||0,s="".concat(a," ").concat(f);n[a]=f+1;var l=i(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(u[l].references++,u[l].updater(p)):u.push({identifier:s,updater:v(p,t),references:1}),r.push(s)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var u=n.nc;u&&(r.nonce=u)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var f,s=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function l(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function p(e,t,n){var r=n.css,o=n.media,u=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),u&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,y=0;function v(e,t){var n,r,o;if(t.singleton){var u=y++;n=d||(d=a(t)),r=l.bind(null,n,u,!1),o=l.bind(null,n,u,!0)}else n=a(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);u[o].references--}for(var a=c(e,t),f=0;f<n.length;f++){var s=i(n[f]);0===u[s].references&&(u[s].updater(),u.splice(s,1))}n=a}}}},297:function(e){"use strict";e.exports=require("react")}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(44)}();