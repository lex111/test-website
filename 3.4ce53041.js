/*! For license information please see 3.4ce53041.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(e,t,n){"use strict";var r=n(2),o=n(0),i=n.n(o),a=n(166),c=(n(217),n(218),n(70),n(219),n(220),n(187),n(168)),l=n.n(c),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(53).a,theme:s};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function v(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),f(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),f(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,i=p({},v(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?p({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),f(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[a].concat(c))}})),f(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,i=e.token,a=p({},v(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,i=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],i=0,a=0,c=[],l=[c];a>-1;){for(;(i=r[a]++)<o[a];){var s=void 0,u=t[a],f=n[a][i];if("string"==typeof f?(u=a>0?u:["plain"],s=f):(u=y(u,f.type),f.alias&&(u=y(u,f.alias)),s=f.content),"string"==typeof s){var p=s.split(h),g=p.length;c.push({types:u,content:p[0]});for(var v=1;v<g;v++)d(c),l.push(c=[]),c.push({types:u,content:p[v]})}else a++,t.push(u),n.push(s),r.push(0),o.push(s.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return d(c),l}(void 0!==a?t.tokenize(r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),b=n(221),k=n.n(b),E=n(222),x=n.n(E),j=n(165),S={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},T=n(179),w=function(){var e=Object(j.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(T.a)().isDarkTheme,r=t.theme||S,o=t.darkTheme||r;return n?o:r},O=n(136),A=n.n(O),C=/{([\d,-]+)}/,L=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},N=/title=".*"/,P=function(e){var t=e.children,n=e.className,a=e.metastring,c=Object(j.a)().siteConfig.themeConfig.prism,s=void 0===c?{}:c,f=Object(o.useState)(!1),p=f[0],h=f[1],d=Object(o.useState)(!1),y=d[0],g=d[1];Object(o.useEffect)((function(){g(!0)}),[]);var v=Object(o.useRef)(null),b=Object(o.useRef)(null),E=[],S="",T=w();if(a&&C.test(a)){var O=a.match(C)[1];E=x.a.parse(O).filter((function(e){return e>0}))}a&&N.test(a)&&(S=a.match(N)[0].split("title=")[1].replace(/"+/g,"")),Object(o.useEffect)((function(){var e;return b.current&&(e=new k.a(b.current,{target:function(){return v.current}})),function(){e&&e.destroy()}}),[b.current,v.current]);var P=n&&n.replace(/language-/,"");!P&&s.defaultLanguage&&(P=s.defaultLanguage);var _=t.replace(/\n$/,"");if(0===E.length&&void 0!==P){for(var I,M="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}}(P),B=t.replace(/\n$/,"").split("\n"),R=0;R<B.length;){var $=R+1,D=B[R].match(F);if(null!==D){switch(D.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":M+=$+",";break;case"highlight-start":I=$;break;case"highlight-end":M+=I+"-"+($-1)+","}B.splice(R,1)}else R+=1}E=x.a.parse(M),_=B.join("\n")}var H=function(){window.getSelection().empty(),h(!0),setTimeout((function(){return h(!1)}),2e3)};return i.a.createElement(m,Object(r.a)({},u,{key:y,theme:T,code:_,language:P}),(function(e){var t,n,o=e.className,a=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return i.a.createElement(i.a.Fragment,null,S&&i.a.createElement("div",{style:a,className:A.a.codeBlockTitle},S),i.a.createElement("div",{className:A.a.codeBlockContent},i.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:l()(A.a.copyButton,(t={},t[A.a.copyButtonWithTitle]=S,t)),onClick:H},p?"Copied":"Copy"),i.a.createElement("div",{tabIndex:"0",className:l()(o,A.a.codeBlock,(n={},n[A.a.codeBlockWithTitle]=S,n))},i.a.createElement("div",{ref:v,className:A.a.codeBlockLines,style:a},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return E.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),i.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return i.a.createElement("span",Object(r.a)({key:t},u({token:e,key:t})))})))}))))))}))},_=n(9),I=(n(137),n(138)),M=n.n(I),F=function(e){return function(t){var n,r=t.id,o=Object(_.a)(t,["id"]),a=Object(j.a)().siteConfig,c=(a=void 0===a?{}:a).themeConfig,s=(c=void 0===c?{}:c).navbar,u=(s=void 0===s?{}:s).hideOnScroll,f=void 0!==u&&u;return r?i.a.createElement(e,o,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:l()("anchor",(n={},n[M.a.enhancedAnchor]=!f,n)),id:r}),o.children,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):i.a.createElement(e,o)}},B=n(139),R=n.n(B);t.a={code:function(e){var t=e.children;return"string"==typeof t?i.a.createElement(P,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?i.a.createElement("a",e):i.a.createElement(a.a,e)},pre:function(e){return i.a.createElement("div",Object(r.a)({className:R.a.mdxCodeBlock},e))},h1:F("h1"),h2:F("h2"),h3:F("h3"),h4:F("h4"),h5:F("h5"),h6:F("h6")}},217:function(e,t,n){"use strict";var r=n(17),o=n(83)(!0);r(r.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},218:function(e,t,n){"use strict";var r=n(17),o=n(182);r(r.P+r.F*n(183)("includes"),"String",{includes:function(e){return!!~o(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},219:function(e,t,n){"use strict";var r=n(8),o=n(50),i=n(35),a=n(40),c=n(73),l=n(74),s=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;n(75)("replace",2,(function(e,t,n,d){return[function(r,o){var i=e(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(e,t){var o=d(n,e,this,t);if(o.done)return o.value;var f=r(e),p=String(this),h="function"==typeof t;h||(t=String(t));var g=f.global;if(g){var v=f.unicode;f.lastIndex=0}for(var m=[];;){var b=l(f,p);if(null===b)break;if(m.push(b),!g)break;""===String(b[0])&&(f.lastIndex=c(p,i(f.lastIndex),v))}for(var k,E="",x=0,j=0;j<m.length;j++){b=m[j];for(var S=String(b[0]),T=s(u(a(b.index),p.length),0),w=[],O=1;O<b.length;O++)w.push(void 0===(k=b[O])?k:String(k));var A=b.groups;if(h){var C=[S].concat(w,T,p);void 0!==A&&C.push(A);var L=String(t.apply(void 0,C))}else L=y(S,p,T,w,A,t);T>=x&&(E+=p.slice(x,T)+L,x=T+S.length)}return E+p.slice(x)}];function y(e,t,r,i,a,c){var l=r+e.length,s=i.length,u=h;return void 0!==a&&(a=o(a),u=p),n.call(c,u,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return n;if(u>s){var p=f(u/10);return 0===p?n:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):n}c=i[u-1]}return void 0===c?"":c}))}}))},220:function(e,t,n){"use strict";var r=n(8),o=n(35),i=n(73),a=n(74);n(75)("match",1,(function(e,t,n,c){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=c(n,e,this);if(t.done)return t.value;var l=r(e),s=String(this);if(!l.global)return a(l,s);var u=l.unicode;l.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(l,s));){var d=String(f[0]);p[h]=d,""===d&&(l.lastIndex=i(s,o(l.lastIndex),u)),h++}return 0===h?null:p}]}))},221:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var i=0,a=r.length;i<a;i++)r[i].fn!==t&&r[i].fn._!==t&&o.push(r[i]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var a=i.apply(this,arguments);return e.addEventListener(n,a,o),{destroy:function(){e.removeEventListener(n,a,o)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),s=n.n(l),u=n(2),f=n.n(u),p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function y(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=d}]).default},e.exports=r()},222:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],o=t[3];if(n&&o){var i=[],a=(n=parseInt(n))<(o=parseInt(o))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(o+=a);for(var c=n;c!=o;c+=a)i.push(c);return i}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);