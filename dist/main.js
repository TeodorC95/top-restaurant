(()=>{"use strict";var n={316:(n,e,r)=>{n.exports=r.p+"6752a0fd1116e8f35160.jpg"},811:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(645),a=r.n(t),i=r(667),o=r.n(i),l=r(316),c=a()((function(n){return n[1]})),s=o()(l);c.push([n.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbody {\r\n  text-align: center;\r\n  font-family: "Sigmar One", cursive;\r\n}\r\nh1 {\r\n  color: #231e23;\r\n  font-size: 3rem;\r\n  margin-top: 5rem;\r\n}\r\np {\r\n  color: #bf1363;\r\n}\r\nnav {\r\n  background-color: rgba(57, 166, 163, 0.5);\r\n}\r\nnav li {\r\n  display: inline-block;\r\n}\r\nnav li.active {\r\n  border-bottom: 2px solid #231e23;\r\n}\r\nnav a {\r\n  display: block;\r\n  padding: 1rem;\r\n  text-decoration: none;\r\n  color: #bf1363;\r\n}\r\nnav a:hover {\r\n  color: #231e23;\r\n}\r\n.content {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: url('+s+");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n.menu {\r\n  width: 33%;\r\n  margin: 0 auto;\r\n  background-color: rgba(35, 30, 35, 0.7);\r\n  margin-top: 2rem;\r\n  color: #deeeea;\r\n  border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n}\r\n.menu ul {\r\n  list-style: none;\r\n}\r\n.menu li {\r\n  padding: 1.5rem;\r\n}\r\n",""]);const u=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);t&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,r)=>{var t,a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function o(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function l(n,e){for(var r={},t=[],a=0;a<n.length;a++){var l=n[a],c=e.base?l[0]+e.base:l[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var d=o(u),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,e),references:1}),t.push(u)}return t}function c(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function d(n,e,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,a);else{var i=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,a=r.media,i=r.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var v=null,p=0;function h(n,e){var r,t,a;if(e.singleton){var i=p++;r=v||(v=c(e)),t=d.bind(null,r,i,!1),a=d.bind(null,r,i,!0)}else r=c(e),t=f.bind(null,r,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var a=o(r[t]);i[a].references--}for(var c=l(n,e),s=0;s<r.length;s++){var u=o(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=c}}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n=r(379),e=r.n(n),t=r(811);e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,r(316);const a=document.querySelector(".content");function i(n){a.innerHTML=n}i('\n  <nav>\n    <div class="nav-container">\n      <ul>\n        <li class="active"><a class="nav-link" href="#">Home</a></li>\n        <li><a class="nav-link" href="">Menu</a></li>\n        <li><a class="nav-link" href="">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n  <h1>Spicy Potato</h1>\n  <p>\n    The place where you can have your favorite meal on many different ways\n  </p>\n  '),a.addEventListener("click",(function(n){if(n.preventDefault(),!n.target.classList.contains("nav-link"))return;const e=n.target.innerHTML;"Menu"===e&&i('\n  <nav>\n    <div class="nav-container">\n      <ul>\n        <li><a class="nav-link" href="#">Home</a></li>\n        <li class="active"><a class="nav-link" href="">Menu</a></li>\n        <li><a class="nav-link" href="">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n  <h1>Menu</h1>\n  <p>Have a look</p>\n  <div class="menu">\n    <ul class="menu-list">\n      <li class="menu-item">Air Fryer Crispy Potatoes</li>\n      <li class="menu-item">Loaded Slow-Cooker Potatoes</li>\n      <li class="menu-item">Perfect Mashed Potatoes</li>\n      <li class="menu-item">Fried Mashed Potato Balls</li>\n      <li class="menu-item">Garlic Smashed Potatoes</li>\n    </ul>\n  </div>\n  '),"Home"===e&&i('\n  <nav>\n    <div class="nav-container">\n      <ul>\n        <li class="active"><a class="nav-link" href="#">Home</a></li>\n        <li><a class="nav-link" href="">Menu</a></li>\n        <li><a class="nav-link" href="">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n  <h1>Spicy Potato</h1>\n  <p>\n    The place where you can have your favorite meal on many different ways\n  </p>\n  '),"Contact"===e&&i('\n  <nav>\n    <div class="nav-container">\n      <ul>\n        <li><a class="nav-link" href="#">Home</a></li>\n        <li><a class="nav-link" href="">Menu</a></li>\n        <li class="active"><a class="nav-link" href="">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n  <h1>Contact</h1>\n  <p>Contact us any time</p>\n  ')}))})()})();