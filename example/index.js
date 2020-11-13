/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 695:
/***/ ((module) => {

module.exports=(()=>{var e={930:(e,t)=>{var o=Object.prototype.hasOwnProperty;function r(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function s(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){t=t||"";var r,n,a=[];for(n in"string"!=typeof t&&(t="?"),e)if(o.call(e,n)){if((r=e[n])||null!=r&&!isNaN(r)||(r=""),n=s(n),r=s(r),null===n||null===r)continue;a.push(n+"="+r)}return a.length?t+a.join("&"):""},t.parse=function(e){for(var t,o=/([^=?#&]+)=?([^&]*)/g,s={};t=o.exec(e);){var n=r(t[1]),a=r(t[2]);null===n||null===a||n in s||(s[n]=a)}return s}},779:e=>{e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},490:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.env=t.isDev=void 0,t.isDev=Boolean(!1);const o="iframe.space",r=(s="proxy",n="localproxy",(t.isDev?n:s)+"."+o);var s,n;const a="cookies."+r;t.env={rootHost:o,proxyHost:r,cookieHost:a}},227:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.frame=t.MessageType=void 0;const s=r(o(261)),n=o(490),a=o(339);var i;!function(e){e.eval="eval",e.evalwrap="evalwrap",e.response="response",e.unload="unload"}(i=t.MessageType||(t.MessageType={}));const l=e=>{if(a.isRelativeURL(e))return{url:e};if(a.isProxiedURL(e))return{url:e};let t=new s.default(e);if(""===t.host){const o=a.retryIfMissingScheme(t,e);if(!o)return{error:"empty host, could not retry"};t=new s.default(o),t.host=t.host,t.protocol=""}var o,r;if("http:"===t.protocol)o="h",r=!1;else if("https:"===t.protocol)o="s",r=!1;else{if(""!==t.protocol)return{error:"unknown protocol"};""!==t.pathname||e.startsWith("//")?(o="o",r=!1):(o="",r=!0)}const i=t.host.split(".").join("_"),l=new s.default(t.toString());let u;return r?(l.host=i+"."+n.env.proxyHost,l.protocol="",u=a.trimPrefix(l.toString(),"//")):(l.host=o+"_"+i+"."+n.env.proxyHost,l.protocol="https",u=l.toString()),{url:u}};t.frame=(e,t)=>({load(t){const{url:o,error:r}=l(t);if(r)throw"Error converting URL:"+r;e.src=o},onUnload(e){const o=o=>{let r;try{r=JSON.parse(o.data)}catch(e){return void(t&&console.log("response didn't parse",o.data))}r.messageType===i.unload&&e()};window.addEventListener("message",o);return()=>{window.removeEventListener("message",o)}},evaluate:(o,r=1e4)=>new Promise(((s,n)=>{Date.now();const{url:u,error:c}=l(e.src);if(c)return void n("error converting iframe URL: "+c);if(!e.contentWindow)return void n("iframe has no contentwindow");const p=e.src;let f;const h=e=>{let o;try{o=JSON.parse(e.data)}catch(o){return void(t&&console.log("response didn't parse",e.data))}[[o.verify.originalTarget,p],[o.verify.target,window.location.href]].map((e=>{const o=e.map((e=>a.trimSuffix(e,"/"))),r=o[0]===o[1];return!r&&t&&console.log("response didn't validate",e,o),r}))&&o.messageType===i.response&&(f(),s(o.messageData))};window.addEventListener("message",h);const d=setTimeout((()=>{f(),n("message timed out")}),r),v={verify:{originalTarget:p,target:p},messageType:i.evalwrap,messageData:o},g=()=>{t&&console.log("sending message!",JSON.stringify(v)),e.contentWindow.postMessage(JSON.stringify(v),"*")};e.addEventListener("load",g),f=()=>{clearTimeout(d),window.removeEventListener("message",h),e.removeEventListener("load",g)},g()}))})},339:function(e,t,o){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.retryIfMissingScheme=t.trimSuffix=t.trimPrefix=t.isProxiedURL=t.isOriginalURL=t.isRelativeURL=void 0;const s=r(o(261)),n=o(490);t.isRelativeURL=e=>!e.startsWith("//")&&e.startsWith("/"),t.isOriginalURL=e=>{const t=!e.includes(n.env.proxyHost);try{const o=new s.default(e);return""===o.host?t:!o.host.includes(n.env.proxyHost)}catch(e){return t}},t.isProxiedURL=e=>!t.isOriginalURL(e),t.trimPrefix=function(e,t){return e.startsWith(t)&&-1!==e.indexOf(t)?e.substr(t.length):e},t.trimSuffix=function(e,t){const o=e.lastIndexOf(t);return e.endsWith(t)&&-1!==o?e.substring(0,o):e},t.retryIfMissingScheme=(e,t)=>{if(""==e.protocol&&e.pathname==t){return"https://"+t}}},261:(e,t,o)=>{var r=o(779),s=o(930),n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,i=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function l(e){return(e||"").toString().replace(i,"")}var u=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function p(e){var t,r=("undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{}).location||{},s={},a=typeof(e=e||r);if("blob:"===e.protocol)s=new h(unescape(e.pathname),{});else if("string"===a)for(t in s=new h(e,{}),c)delete s[t];else if("object"===a){for(t in e)t in c||(s[t]=e[t]);void 0===s.slashes&&(s.slashes=n.test(e.href))}return s}function f(e){e=l(e);var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function h(e,t,o){if(e=l(e),!(this instanceof h))return new h(e,t,o);var n,a,i,c,d,v,g=u.slice(),m=typeof t,y=this,w=0;for("object"!==m&&"string"!==m&&(o=t,t=null),o&&"function"!=typeof o&&(o=s.parse),t=p(t),n=!(a=f(e||"")).protocol&&!a.slashes,y.slashes=a.slashes||n&&t.slashes,y.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(g[3]=[/(.*)/,"pathname"]);w<g.length;w++)"function"!=typeof(c=g[w])?(i=c[0],v=c[1],i!=i?y[v]=e:"string"==typeof i?~(d=e.indexOf(i))&&("number"==typeof c[2]?(y[v]=e.slice(0,d),e=e.slice(d+c[2])):(y[v]=e.slice(d),e=e.slice(0,d))):(d=i.exec(e))&&(y[v]=d[1],e=e.slice(0,d.index)),y[v]=y[v]||n&&c[3]&&t[v]||"",c[4]&&(y[v]=y[v].toLowerCase())):e=c(e);o&&(y.query=o(y.query)),n&&t.slashes&&"/"!==y.pathname.charAt(0)&&(""!==y.pathname||""!==t.pathname)&&(y.pathname=function(e,t){if(""===e)return t;for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=o.length,s=o[r-1],n=!1,a=0;r--;)"."===o[r]?o.splice(r,1):".."===o[r]?(o.splice(r,1),a++):a&&(0===r&&(n=!0),o.splice(r,1),a--);return n&&o.unshift(""),"."!==s&&".."!==s||o.push(""),o.join("/")}(y.pathname,t.pathname)),r(y.port,y.protocol)||(y.host=y.hostname,y.port=""),y.username=y.password="",y.auth&&(c=y.auth.split(":"),y.username=c[0]||"",y.password=c[1]||""),y.origin=y.protocol&&y.host&&"file:"!==y.protocol?y.protocol+"//"+y.host:"null",y.href=y.toString()}h.prototype={set:function(e,t,o){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(o||s.parse)(t)),n[e]=t;break;case"port":n[e]=t,r(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!o;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";n[e]=t.charAt(0)!==a?a+t:t}else n[e]=t;break;default:n[e]=t}for(var i=0;i<u.length;i++){var l=u[i];l[4]&&(n[l[1]]=n[l[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){e&&"function"==typeof e||(e=s.stringify);var t,o=this,r=o.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var n=r+(o.slashes?"//":"");return o.username&&(n+=o.username,o.password&&(n+=":"+o.password),n+="@"),n+=o.host+o.pathname,(t="object"==typeof o.query?e(o.query):o.query)&&(n+="?"!==t.charAt(0)?"?"+t:t),o.hash&&(n+=o.hash),n}},h.extractProtocol=f,h.location=p,h.trimLeft=l,h.qs=s,e.exports=h}},t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}return o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o(227)})();

/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const the_proxy_client_1 = __webpack_require__(695);
const iframe = document.querySelector('iframe');
const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('#message');
input.setAttribute('placeholder', 'https://www.example.com');
input.value = 'https://www.example.com';
const go = async () => {
    // Validate user input
    try {
        const _ = new URL(input.value);
    }
    catch (e) {
        message.innerText = `Error parsing URL: ${e}`;
        return;
    }
    // Navigate to the proxied user input
    const proxiedFrame = the_proxy_client_1.frame(iframe);
    try {
        proxiedFrame.load(input.value);
    }
    catch (e) {
        message.innerText = `Error loading site: ${e}`;
        return;
    }
    message.innerText = `Navigating to: ${input.value}`;
    // This will change the color, and verify that it
    // went through, by showing the (stringified) response
    const changeColorInFrame = async () => {
        let output;
        try {
            // prettier-ignore
            const response = await proxiedFrame.evaluate(`
        (() => {
          const style = document.createElement('style')
          style.innerHTML = \`
            * { background-color: #64a9ff !important; }
          \`
          document.head.appendChild(style)
          return "Everything is blue!"
        })()
      `);
            output = 'Evaluation response (stringified): ' + response;
        }
        catch (e) {
            output = 'Evaluation response timed out';
        }
        console.log(output);
        message.innerText = output;
    };
    // Inject our color-changing script into the frame
    changeColorInFrame();
    // Changing the iframe src (which `proxiedFrame.load` does)
    // won't take affect immediately, so our previous `changeColorInFrame`
    // will be fired but on the old website.
    //
    // To fix this, we hook in to iframe unloads with `.onUnload`,
    // and when this happens, we re-inject our script and also
    // update the innerText to reflect
    proxiedFrame.onUnload(() => {
        message.innerText = `Navigating to: ${input.value}`;
        changeColorInFrame();
    });
};
input.onkeydown = (e) => {
    if (e.key === 'Enter') {
        go();
    }
};
button.onclick = go;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(178);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;