(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2218],{22887:(r,e,o)=>{"use strict";o.d(e,{Z:()=>t});var n=o(23645),c=o.n(n)()((function(r){return r[1]}));c.push([r.id,"/* Port of TextMate's Blackboard theme */\n\n.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }\n.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }\n.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }\n.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }\n.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }\n.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }\n.cm-s-blackboard .CodeMirror-linenumber { color: #888; }\n.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }\n\n.cm-s-blackboard .cm-keyword { color: #FBDE2D; }\n.cm-s-blackboard .cm-atom { color: #D8FA3C; }\n.cm-s-blackboard .cm-number { color: #D8FA3C; }\n.cm-s-blackboard .cm-def { color: #8DA6CE; }\n.cm-s-blackboard .cm-variable { color: #FF6400; }\n.cm-s-blackboard .cm-operator { color: #FBDE2D; }\n.cm-s-blackboard .cm-comment { color: #AEAEAE; }\n.cm-s-blackboard .cm-string { color: #61CE3C; }\n.cm-s-blackboard .cm-string-2 { color: #61CE3C; }\n.cm-s-blackboard .cm-meta { color: #D8FA3C; }\n.cm-s-blackboard .cm-builtin { color: #8DA6CE; }\n.cm-s-blackboard .cm-tag { color: #8DA6CE; }\n.cm-s-blackboard .cm-attribute { color: #8DA6CE; }\n.cm-s-blackboard .cm-header { color: #FF6400; }\n.cm-s-blackboard .cm-hr { color: #AEAEAE; }\n.cm-s-blackboard .cm-link { color: #8DA6CE; }\n.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }\n\n.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }\n.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }\n",""]);const t=c},23645:r=>{"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var o=r(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(r,o,n){"string"===typeof r&&(r=[[null,r,""]]);var c={};if(n)for(var t=0;t<this.length;t++){var a=this[t][0];null!=a&&(c[a]=!0)}for(var i=0;i<r.length;i++){var l=[].concat(r[i]);n&&c[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),e.push(l))}},e}},69039:(r,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i});var n=o(93379),c=o.n(n),t=o(22887),a={insert:"head",singleton:!1};c()(t.Z,a);const i=t.Z.locals||{}},93379:(r,e,o)=>{"use strict";var n=function(){var r;return function(){return"undefined"===typeof r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r}}(),c=function(){var r={};return function(e){if("undefined"===typeof r[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[e]=o}return r[e]}}(),t=[];function a(r){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===r){e=o;break}return e}function i(r,e){for(var o={},n=[],c=0;c<r.length;c++){var i=r[c],l=e.base?i[0]+e.base:i[0],s=o[l]||0,d="".concat(l," ").concat(s);o[l]=s+1;var b=a(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==b?(t[b].references++,t[b].updater(u)):t.push({identifier:d,updater:f(u,e),references:1}),n.push(d)}return n}function l(r){var e=document.createElement("style"),n=r.attributes||{};if("undefined"===typeof n.nonce){var t=o.nc;t&&(n.nonce=t)}if(Object.keys(n).forEach((function(r){e.setAttribute(r,n[r])})),"function"===typeof r.insert)r.insert(e);else{var a=c(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s=function(){var r=[];return function(e,o){return r[e]=o,r.filter(Boolean).join("\n")}}();function d(r,e,o,n){var c=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(r.styleSheet)r.styleSheet.cssText=s(e,c);else{var t=document.createTextNode(c),a=r.childNodes;a[e]&&r.removeChild(a[e]),a.length?r.insertBefore(t,a[e]):r.appendChild(t)}}function b(r,e,o){var n=o.css,c=o.media,t=o.sourceMap;if(c?r.setAttribute("media",c):r.removeAttribute("media"),t&&"undefined"!==typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var u=null,m=0;function f(r,e){var o,n,c;if(e.singleton){var t=m++;o=u||(u=l(e)),n=d.bind(null,o,t,!1),c=d.bind(null,o,t,!0)}else o=l(e),n=b.bind(null,o,e),c=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(o)};return n(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap)return;n(r=e)}else c()}}r.exports=function(r,e){(e=e||{}).singleton||"boolean"===typeof e.singleton||(e.singleton=n());var o=i(r=r||[],e);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var n=0;n<o.length;n++){var c=a(o[n]);t[c].references--}for(var l=i(r,e),s=0;s<o.length;s++){var d=a(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}}}}]);