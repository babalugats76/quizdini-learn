(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02cd":function(e,t,n){"use strict";n("a19a")},"0c7c":function(e,t,n){},"17b7":function(e,t,n){"use strict";n("f3ff")},"17d8":function(e,t,n){"use strict";n("50b5")},1992:function(e,t,n){},"355f":function(e,t,n){},3843:function(e,t,n){"use strict";n("0c7c")},4626:function(e,t,n){"use strict";n("355f")},"50b5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["D"])("router-view");return Object(r["v"])(),Object(r["g"])(i)}var o={name:"App"};n("9299");o.render=a;var c=o,i=n("6c02"),s=(n("ac1f"),n("466d"),Object(r["P"])("data-v-9b989ff0"));Object(r["y"])("data-v-9b989ff0");var l={class:"page page--full page--purple"};Object(r["w"])();var d=s((function(e,t,n,a,o,c){var i=Object(r["D"])("Loader"),s=Object(r["D"])("Game");return Object(r["v"])(),Object(r["g"])("div",l,[a.showLoader?(Object(r["v"])(),Object(r["g"])(i,{key:"1"})):(Object(r["v"])(),Object(r["g"])(s,{key:"2",match:a.match},null,8,["match"]))])})),u=(n("96cf"),n("1da1")),f=n("bc3a"),g=n.n(f);g.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var m={timeout:3e4},h=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,r=t.config,a=void 0===r?m:r,console.log("url",n),console.log("config",a),e.prev=3,e.next=6,g.a.get(n,a);case 6:return o=e.sent,e.abrupt("return",{data:o.data});case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",{error:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,r=t.data,a=t.config,o=void 0===a?m:a,console.log("url",n),console.log(JSON.stringify(r,null,4)),console.log("config",o),e.prev=4,e.next=7,g.a.post(n,r,o);case 7:return c=e.sent,e.abrupt("return",{data:c.data});case 11:return e.prev=11,e.t0=e["catch"](4),e.abrupt("return",{error:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),p="/api/match",v=function(e){return function(){return h({url:"".concat(p,"/").concat(e)})}},j=n("5530");function O(e){var t=e.callback,n=e.immediate,a=void 0===n||n,o=e.deps,c=void 0===o?[]:o,i=Object(r["z"])({data:null,error:null,executions:0,inError:!1,initialized:!1,loading:!1,success:null});return Object(r["K"])(c,(function(){console.log("watch fired!"),i.loading=!0,setTimeout(Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(n=e.sent,r=n.data,a=void 0===r?null:r,o=n.error,c=void 0===o?null:o,i.data=a,i.error=c,i.executions+=1,i.initialized=!!i.executions,i.loading=!1,!a){e.next=11;break}return e.abrupt("return",i.success=!0);case 11:if(!c){e.next=13;break}return e.abrupt("return",i.inError=!0);case 13:case"end":return e.stop()}}),e)}))),5e3)}),{immediate:a}),Object(j["a"])({},Object(r["H"])(i))}var y={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!1,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},splash:{timeouts:{enter:800,leave:800}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:800,miss:800,shuffle:600}},timer:{debug:!0,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,delay:1500,enter:1e3,leave:1e3}}},w={key:"2",class:"match__game"};function x(e,t,n,a,o,c){var i=Object(r["D"])("Splash"),s=Object(r["D"])("Tile"),l=Object(r["D"])("DndBoard"),d=Object(r["D"])("Timer");return Object(r["v"])(),Object(r["g"])(r["c"],{duration:500,mode:"in-out",name:"game"},{default:Object(r["M"])((function(){return[e.showBoard?(Object(r["v"])(),Object(r["g"])("div",w,[Object(r["j"])("button",{onClick:t[1]||(t[1]=Object(r["O"])((function(){return e.togglePlaying.apply(e,arguments)}),["prevent"]))},"Toggle Playing"),Object(r["j"])(l,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(r["M"])((function(){return[Object(r["j"])(r["d"],{class:c.boardClasses("terms"),css:!0,duration:{enter:"".concat(e.config.tile.timeouts.enter),leave:"".concat(e.config.tile.timeouts.leave)},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:c.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=function(e){return c.tileAfterLeave(e,"term")})},{default:Object(r["M"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(e.activeTerms,(function(e){return Object(r["v"])(),Object(r["g"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:e.dragging,disabled:!1,color:e.color,dragging:e.dragging,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Draggable",type:"term"},null,8,["id","content","style","active","color","dragging","hasHtml","hit","length","maxWordLength","miss","over"])})),128))]})),_:1},8,["class","duration","move-class","style"]),Object(r["j"])(r["d"],{class:c.boardClasses("definitions"),css:!0,duration:{enter:"".concat(e.config.tile.timeouts.enter),leave:"".concat(e.config.tile.timeouts.leave)},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:c.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=function(e){return c.tileAfterLeave(e,"definition")})},{default:Object(r["M"])((function(){return[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(e.activeDefinitions,(function(e){return Object(r["v"])(),Object(r["g"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:!1,disabled:!1,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Droppable",type:"definition"},null,8,["id","content","style","hasHtml","hit","length","maxWordLength","miss","over"])})),128))]})),_:1},8,["class","duration","move-class","style"])]})),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(r["j"])(d,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])):(Object(r["v"])(),Object(r["g"])(i,{config:e.config.splash,showModal:!e.showBoard,key:"1",onStart:e.toggleSplash},null,8,["config","showModal","onStart"]))]})),_:1})}n("99af");var S=n("ade3"),_=n("53ca"),I=(n("4de4"),n("7db0"),n("d81d"),n("13d5"),n("fb6a"),n("b680"),n("5319"),n("1276"),n("3835")),M=n("8dee"),C=n.n(M);n("a434");function L(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return Object.prototype.hasOwnProperty.call(t,n)?e.map((function(e){return e[n]!==t[n]?e:Object(j["a"])(Object(j["a"])({},e),t)})):e}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!Object.prototype.hasOwnProperty.call(t,n))return e;var a=e.find((function(e){return e[n]===t[n]})),o=r?r(a):t;return a?e.map((function(e){return e[n]!==o[n]?e:Object(j["a"])(Object(j["a"])({},e),o)})):e.concat(o)}function B(e,t){var n=Object(r["l"])(),a=null;function o(){c(),a=setTimeout((function(){return t()}),Object(r["I"])(e))}function c(){clearTimeout(a)}return n?Object(r["u"])((function(){console.log("cleaning up!"),a&&c()})):console.log("not in current instance"),[c,o]}var P="/api/ping",T=function(e){return b({url:"".concat(P),data:e})};function z(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=B(y.tile.timeouts.hit,(function(){l.terms=l.terms.map((function(e){return e.matched&&e.show?Object(j["a"])(Object(j["a"])({},e),{},{show:!1}):e})),l.definitions=l.definitions.map((function(e){return e.matched&&e.show?Object(j["a"])(Object(j["a"])({},e),{},{show:!1}):e}))})),a=Object(I["a"])(n,2),o=a[1],c=B(y.tile.timeouts.shuffle,(function(){l.shuffling=!1})),i=Object(I["a"])(c,2),s=i[1],l=Object(r["z"])({activeDefinitions:Object(r["e"])((function(){return l.definitions.filter((function(e){return e.show}))})),activeTerms:Object(r["e"])((function(){return l.terms.filter((function(e){return e.show}))})),canDnd:Object(r["e"])((function(){return l.playing&&!l.shuffling&&!l.termIsExiting})),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(r["e"])((function(){return l.terms.reduce((function(e,t){return t.exited?e+=1:e}),0)})),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!0,shuffling:!1,stats:[],termIsExiting:Object(r["e"])((function(){return!!l.terms.filter((function(e){return e.matched&&!e.exited})).length})),terms:[],textScaling:{terms:1,definitions:1},title:""});function d(e){var t=function(e,t){var n=/<[^>]*>/gi,r=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return r.body.textContent},n=new DOMParser;return e.map((function(e){var r=t(n,e.term),a=t(n,e.definition);return{term:{answer:e.definition,content:e.term,dragging:!1,exited:!1,hasHtml:r.length!==e.term.length,hit:!1,id:C.a.generate(),length:r.length,matched:!1,matchId:"",maxWordLength:r.split(" ").reduce((function(e,t){return e>t.length?e:t.length}),0),miss:!1,over:!1,show:!0},definition:{content:e.definition,exited:!1,hasHtml:a.length!==e.definition.length,hit:!1,id:C.a.generate(),length:a.length,matched:!1,matchId:"",maxWordLength:a.split(" ").reduce((function(e,t){return e>t.length?e:t.length}),0),miss:!1,over:!1,show:!0}}}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=y.game.themes[t.toLowerCase()],r=void 0===n?"":n;if(!r)return e.map((function(e){return Object(j["a"])(Object(j["a"])({},e),{},{color:y.game.themes.default.colors[0]})}));var a=L(r.colors.slice());return e.map((function(e){var t=a.pop();return Object(j["a"])(Object(j["a"])({},e),{},{color:t})}))}function g(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function m(e,t,n,r,a,o,c){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":a+"px","--hit-end-tz":o+"px","--hit-duration":c+"ms"}}function h(e,t){var n=l.terms.find((function(t){return t.id===e}))||{},r=n.answer,a=l.definitions.find((function(e){return e.id===t}))||{},o=a.content;return!!r&&!!o&&r===o}function b(e){var t=e||{},n=t.dragId,r=t.dragX,a=t.dragY;l.terms=D(l.terms,{id:n,dragging:!0,hit:!1,miss:!1,style:g(r,a,1)})}function p(e){var t=e||{},n=t.dragId,r=t.dropId,a=t.over;l.terms=l.terms.map((function(e){return Object(j["a"])(Object(j["a"])({},e),{},{over:e.id===n&&a})})),l.definitions=l.definitions.map((function(e){return Object(j["a"])(Object(j["a"])({},e),{},{over:e.id===r})}))}function v(e){var t=e||{},n=t.dragId,r=t.dragX,a=t.dragY,c=t.dropId,i=t.dropX,s=t.dropY,d=!!c&&h(n,c);if(l.terms=D(l.terms,{id:n,dragging:!1,hit:d,miss:!d,matched:d,matchId:d?c:"",over:d,style:d?m(r,a,1,i,s,1,y.tile.timeouts.hit):g(0,0,0)}),c){d?l.correct++:l.incorrect++,l.definitions=D(l.definitions,{id:c,hit:d,miss:!d,matched:d,matchId:d?n:"",over:d});var u=l.terms.find((function(e){return e.id===n}))||{},f=u.content;l.score=Math.max(d?l.score+1:l.score-1,0),l.stats=k(l.stats,{term:f},"term",(function(e){return e?{term:f,hit:d?e.hit+1:e.hit,miss:d?e.miss:e.miss+1}:{term:f,hit:d?1:0,miss:d?0:1}})),d&&o()}}function O(e,t){switch(t){case"term":l.terms=D(l.terms,{id:e,exited:!0});break;case"definition":l.definitions=D(l.definitions,{id:e,exited:!0});break;default:return}}function w(e){var n=e.reduce((function(e,t){return[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length]}),[]);t&&console.log(JSON.stringify(n,null,4));var r=y.tile.text.scaling||{},a=r.growth,o=r.min,c=r.max;l.textScaling={terms:(c*Math.pow(a,a*Math.max(n[0],n[1]/2.5))+o).toFixed(2),definitions:(c*Math.pow(a,a*Math.max(n[2],n[3]/2.5))+o).toFixed(2)},t&&console.log(JSON.stringify(l.textScaling,null,4))}function x(){console.log("dealing..."),l.matches=L(l.matches);var e=l.matches.slice(0,Math.min(l.itemsPerBoard,l.matches.length));w(e),l.terms=f(e.map((function(e){return e.term})),l.colorScheme),l.definitions=L(e.map((function(e){return e.definition})))}function S(){console.log("shuffling..."),l.shuffling=!0,l.terms=L(l.terms),l.definitions=L(l.definitions),s()}function _(){l.correct=0,l.definitions=[],l.incorrect=0,l.playing=!1,l.score=0,l.showSplash=!1,l.showBoard=!1,l.stats=[],l.terms=[],x(),Object(r["p"])((function(){S(),l.playing=!0,l.showBoard=!0}))}function M(){return P.apply(this,arguments)}function P(){return P=Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("game over..."),l.playing=!1,l.showBoard=!1,l.showSplash=!0,l.terms=[],l.definitions=[],e.next=8,T({correct:l.correct,data:l.stats,gameId:l.matchId,gameType:"M",incorrect:l.incorrect,score:l.score});case 8:n=e.sent,t&&JSON.stringify(n.data,null,4);case 10:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function z(){console.log("toggle playing fired!"),l.playing=!l.playing}function A(){console.log("splash toggle fired..."),l.showBoard=!l.showBoard}return Object(r["L"])((function(){var t=Object(r["I"])(e),n=t.matchId,a=t.matches,o=void 0===a?[]:a,c=t.options;c=void 0===c?{}:c;var i=c.duration,s=void 0===i?60:i,u=c.colorScheme,f=void 0===u?"":u,g=c.itemsPerBoard,m=void 0===g?9:g,h=t.title,b=void 0===h?"":h;l.colorScheme=f.toLowerCase(),l.duration=s,l.matchId=n,l.itemsPerBoard=m,l.matches=d(o),l.title=b})),Object(r["K"])((function(){return l.exited}),(function(e,n){t&&console.log("exited changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=n||(e===l.itemsPerBoard?(x(),Object(r["p"])((function(){return S()}))):S())})),Object(j["a"])(Object(j["a"])({config:y},Object(r["H"])(l)),{},{deal:x,gameOver:M,onDrag:b,onDrop:v,onOver:p,onTileLeft:O,shuffle:S,startGame:_,togglePlaying:z,toggleSplash:A})}var A=Object(r["P"])("data-v-c03d63c2"),E=A((function(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])("div",{class:c.classes,ref:"dndRef"},[Object(r["C"])(e.$slots,"default")],2)})),q=(n("4160"),n("c975"),n("159b"),n("2ef0")),R=n.n(q);function H(e){var t=e.active,n=e.element,a=e.throttleMs,o=void 0===a?33:a,c=e.debug,i=void 0!==c&&c,s=e.emit,l=Object(r["z"])({dragged:{},listeners:[],throttledDrag:Object(r["e"])((function(){return R.a.throttle(b,o,{trailing:!0})}))}),d={mousedown:h,mousemove:l.throttledDrag,mouseup:p,touchstart:h,touchmove:l.throttledDrag,touchend:p};function u(e){e.forEach((function(t){i&&console.log("adding ".concat(t,"...")),n.value.addEventListener(t,d[t]),l.listeners=l.listeners.concat(e).filter((function(e,t,n){return n.indexOf(e)===t}))}))}function f(e){e.forEach((function(t){i&&console.log("removing ".concat(t,"...")),n.value.removeEventListener(t,d[t]),l.listeners=l.listeners.filter((function(t){return e.indexOf(t)<0}))}))}function g(){u(["mousedown","touchstart"])}function m(){l.dragged={},f(l.listeners)}function h(e){e.stopPropagation(),i&&console.log("".concat(l.dragged.id?"".concat(e.type," (").concat(l.dragged.id,") "):"".concat(e.type),"..."));var t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(t){var n="touchstart"===e.type?e.touches[0].clientX:e.clientX,r="touchstart"===e.type?e.touches[0].clientY:e.clientY,a=t.getBoundingClientRect(),o=a.top,c=a.left;l.dragged={id:t.id,offsetX:n-c,offsetY:r-o,initialX:n,initialY:r};var s="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];u(s)}}function b(e){e.stopPropagation();var t=l.dragged,n=t.id,r=t.initialX,a=t.initialY,o=t.overId;i&&console.log("".concat(n?"".concat(e.type," (").concat(n,") "):"".concat(e.type),"..."));var c="touchmove"===e.type?e.touches[0].clientX-r:e.clientX-r,d="touchmove"===e.type?e.touches[0].clientY-a:e.clientY-a;s("drag",{dragId:n,dragX:c,dragY:d});var u=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find((function(e){return e.classList.contains("droppable")}))||{},f=u.id,g=void 0===f?"":f;o!==g&&(i&&g&&console.log("".concat(n," is over ").concat(g,"...")),s("over",{dragId:n,dropId:g,over:!!g}),l.dragged=Object(j["a"])(Object(j["a"])({},l.dragged),{},{overId:g}))}function p(e){e.stopPropagation(),l.throttledDrag.cancel();var t=l.dragged,n=t.id,r=t.initialX,a=t.initialY,o=t.offsetX,c=t.offsetY;i&&console.log("".concat(n?"".concat(e.type," (").concat(n,") "):"".concat(e.type),"..."));var d="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,g=document.elementsFromPoint(d,u).find((function(e){return e.classList.contains("droppable")})),m=g&&g.getBoundingClientRect()||{},h=m.top,b=m.left;s("drop",{dragId:n,dragX:g?d-r:d,dragY:g?u-a:u,dropId:g?g.id:null,dropX:g?Math.round(b-r+o):null,dropY:g?Math.round(h-a+c):null}),l.dragged={};var p="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];f(p)}return Object(r["t"])((function(){i&&console.log("dnd mounted (".concat(Object(r["I"])(t)?"active":"inactive",")...")),Object(r["I"])(t.value)&&u(["mousedown","touchstart"])})),Object(r["K"])(t,(function(e,t){return i&&console.log("active changed: ",t,"=>",e),e&&!t?g():m()})),Object(j["a"])({},Object(r["H"])(l))}var Y={name:"DndBoard",props:["active","config"],setup:function(e,t){var n=t.emit,a=Object(r["A"])(null),o=Object(r["H"])(e),c=o.active;return Object(j["a"])(Object(j["a"])(Object(j["a"])({},e.config),H({active:c,element:a,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:n})),{},{dndRef:a})},computed:{classes:function(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("02cd");Y.render=E,Y.__scopeId="data-v-c03d63c2";var W=Y,X=Object(r["P"])("data-v-dad92eee"),N=X((function(e,t,n,a,o,c){var i=Object(r["D"])("Modal");return Object(r["v"])(),Object(r["g"])(i,{appear:!0,show:n.showModal,onClose:e.$attrs.start},{body:X((function(){return[Object(r["j"])("button",{onClick:t[1]||(t[1]=Object(r["O"])((function(){return c.onClickStart.apply(c,arguments)}),["prevent"]))},"Start Game")]})),_:1},8,["show","onClose"])})),J=Object(r["P"])("data-v-5f7ee01e");Object(r["y"])("data-v-5f7ee01e");var $={key:0,class:"modal-mask"},G={class:"modal-wrapper"},F={class:"modal-container"};Object(r["w"])();var U=J((function(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])("div",null,[(Object(r["v"])(),Object(r["g"])(r["b"],{to:"#quizdini__modals"},[Object(r["j"])(r["c"],{appear:n.appear,name:"modal",duration:500},{default:J((function(){return[n.show?(Object(r["v"])(),Object(r["g"])("div",$,[Object(r["j"])("div",G,[Object(r["j"])("div",F,[Object(r["C"])(e.$slots,"header",{},(function(){return[Object(r["j"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("close")})},"Close")]})),Object(r["C"])(e.$slots,"body"),Object(r["C"])(e.$slots,"footer")])])])):Object(r["h"])("",!0)]})),_:1},8,["appear"])]))])})),K={inheritAttrs:!1,name:"Modal",props:["appear","show"],emits:["close"]};n("4626");K.render=U,K.__scopeId="data-v-5f7ee01e";var V=K,Z={inheritAttrs:!1,name:"Splash",components:{Modal:V},emits:["start"],props:["config","showModal"],methods:{onClickStart:function(){this.$emit("start")}}};n("17d8");Z.render=N,Z.__scopeId="data-v-dad92eee";var Q=Z;function ee(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])(Object(r["E"])(n.is),{active:n.active,class:c.tileClasses,disabled:n.disabled,id:n.id,style:n.style},{default:Object(r["M"])((function(){return[Object(r["j"])("div",{class:c.bodyClasses,"data-has-html":n.hasHtml,"data-length":n.length,"data-max-word-length":n.maxWordLength,innerHTML:n.content},null,10,["data-has-html","data-length","data-max-word-length","innerHTML"])]})),_:1},8,["active","class","disabled","id","style"])}n("a9e3");var te=Object(r["P"])("data-v-02fd6379"),ne=te((function(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])("div",{id:n.id,class:c.classes},[Object(r["C"])(e.$slots,"default")],10,["id"])})),re={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes:function(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");re.render=ne,re.__scopeId="data-v-02fd6379";var ae=re,oe=Object(r["P"])("data-v-da15d764"),ce=oe((function(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])("div",{id:n.id,class:c.classes},[Object(r["C"])(e.$slots,"default")],10,["id"])})),ie={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes:function(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");ie.render=ce,ie.__scopeId="data-v-da15d764";var se=ie,le={name:"Tile",components:{Draggable:ae,Droppable:se},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},dragging:{type:Boolean,required:!1},hasHtml:{type:Boolean,required:!1},hit:{type:Boolean,required:!1},id:{required:!1},is:{type:String,required:!0},length:{type:Number,required:!1},maxWordLength:{type:Number,required:!1},miss:{type:Boolean,required:!1},over:{type:Boolean,required:!1},style:{required:!1},type:{type:String,required:!1}},computed:{bodyClasses:function(){return Object(S["a"])({tile__body:!0},"tile__body--has-long-word",this.maxWordLength>=11)},tileClasses:function(){var e;return e={tile:!0},Object(S["a"])(e,"tile--".concat(this.type),this.type),Object(S["a"])(e,this.color,this.color),Object(S["a"])(e,"hit",this.hit),Object(S["a"])(e,"miss",this.miss),Object(S["a"])(e,"drag",this.dragging),Object(S["a"])(e,"over",this.over),e}}};le.render=ee;var de=le,ue=Object(r["P"])("data-v-30e190da");Object(r["y"])("data-v-30e190da");var fe={class:"timer"},ge={class:"timer__wrapper"},me={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},he={class:"timer__circle"};Object(r["w"])();var be=ue((function(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])(r["c"],Object(r["o"])({duration:{enter:"".concat(e.timeouts.enter),leave:"".concat(e.timeouts.leave)},name:"timer",onBeforeEnter:c.beforeEnter,onAfterEnter:c.afterEnter,onAfterLeave:c.afterLeave,onAfterAppear:c.afterAppear},e.$attrs),{default:ue((function(){return[Object(r["N"])(Object(r["j"])("div",null,[Object(r["j"])("div",fe,[Object(r["j"])(r["c"],{duration:{enter:"".concat(e.timeouts.change),leave:"".concat(e.timeouts.change)},name:"scoring",onAfterLeave:e.endScoreChange},{default:ue((function(){return[Object(r["N"])(Object(r["j"])("div",ge,[(Object(r["v"])(),Object(r["g"])("svg",me,[Object(r["j"])("g",he,[Object(r["j"])("circle",{class:["timer__path-elapsed",c.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(r["j"])("path",{"stroke-dasharray":c.strokeDasharray,class:["timer__path-remaining",[e.severity,c.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(r["j"])("span",{class:["timer__label",c.scoreClass]},Object(r["G"])(n.score||e.formatted),3)],512),[[r["J"],!e.scoring]])]})),_:1},8,["duration","onAfterLeave"])])],512),[[r["J"],!e.expired]])]})),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave","onAfterAppear"])})),pe={ALERT:"alert",WARN:"warn",SUCCESS:"success"},ve={UP:"up",DOWN:"down"};function je(e){var t=e.active,n=void 0!==t&&t,a=e.alert,o=e.autoStart,c=void 0===o||o,i=e.debug,s=void 0!==i&&i,l=e.delay,d=void 0===l?5e3:l,u=e.duration,f=e.emit,g=void 0===f?void 0:f,m=e.interval,h=e.score,b=e.warn,p=B(Object(r["I"])(d),(function(){s&&console.log("starting timer after Delay..."),y.intervalId=setInterval((function(){y.elapsed+=Object(r["I"])(m)}),Object(r["I"])(m))})),v=Object(I["a"])(p,2),O=v[1],y=Object(r["z"])({elapsed:0,expired:Object(r["e"])((function(){return y.remaining<=0})),formatted:Object(r["e"])((function(){var e=Math.floor(y.remaining/6e4),t=Math.floor(y.remaining%6e4/1e3);return t<10?"".concat(e,":0").concat(t):"".concat(e,":").concat(t)})),idle:Object(r["e"])((function(){return y.elapsed})),intervalId:null,progress:Object(r["e"])((function(){return Math.round(y.remaining/(1e3*Object(r["I"])(u))*1e4)/100})),remaining:Object(r["e"])((function(){return 1e3*Object(r["I"])(u)-y.elapsed})),running:!1,scoring:!1,scoringStatus:"",SCORING_STATUS:ve,severity:Object(r["e"])((function(){return y.progress<=b?y.progress<=a?pe.ALERT:pe.WARN:pe.SUCCESS}))});function w(){_(),y.running=!0,y.remaining||(y.elapsed=0),O()}function x(e){y.elapsed=e}function S(){s&&console.log("timer scoring end..."),y.scoring=!1,y.scoringStatus=""}function _(){s&&console.log("stopping timer..."),y.running=!1,y.intervalId&&(clearInterval(y.intervalId),y.intervalId=null)}return Object(r["K"])(n,(function(e,t){!e||t||y.running||w(),!e&&y.running&&(console.log("pause timer here"),_())})),Object(r["K"])(h,(function(e,t){s&&console.log("score changed: ",t,"=>",e),y.scoring=!0,y.scoringStatus=e>t?ve.UP:ve.DOWN})),Object(r["K"])((function(){return y.expired}),(function(e,t){e&&!t&&(s&&console.log("timer expired: ",t,"=>",e),_(),g("timer-expired"))})),Object(r["t"])((function(){s&&console.log("timer mounted..."),Object(r["I"])(c)&&Object(r["I"])(n)&&w()})),Object(r["r"])((function(){s&&console.log("timer cleaning up..."),_()})),Object(j["a"])(Object(j["a"])({},Object(r["H"])(y)),{},{startTimer:w,stopTimer:_,setElapsed:x,endScoreChange:S})}var Oe=283,ye={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup:function(e,t){var n=t.emit,a=Object(r["H"])(e),o=a.active,c=a.duration,i=a.playing,s=a.score,l=je({active:o,alert:e.config.thresholds.alert,autoStart:!0,debug:e.config.debug,delay:e.config.timeouts.delay,duration:c,emit:n,interval:e.config.timeouts.interval,playing:i,score:s,warn:e.config.thresholds.warn});return Object(j["a"])(Object(j["a"])({},l),e.config)},computed:{scoreClass:function(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray:function(){var e=this.progress/100-1/this.duration*(1-this.progress/100);return"".concat((e*Oe).toFixed(0)," ").concat(Oe)}},methods:{beforeEnter:function(){this.debug&&console.log("before timer entered...")},afterEnter:function(){console.log("after enter in Timer fired..."),this.debug&&console.log("timer entered...")},afterAppear:function(){console.log("after appear fired...")},afterLeave:function(){this.debug&&console.log("timer left...")}},onMounted:function(){console.log("Timer has mounted...")}};n("17b7");ye.render=be,ye.__scopeId="data-v-30e190da";var we=ye,xe={name:"Game",components:{DndBoard:W,Splash:Q,Tile:de,Timer:we},props:["match"],setup:function(e){var t=Object(r["H"])(e),n=t.match;return console.log(Object(_["a"])(n)),Object(j["a"])({},z(n))},methods:{beforeEnter:function(){this.debug&&console.log("game transition before entered...")},boardClasses:function(e){var t;return t={"tile-board":!0},Object(S["a"])(t,"tile-board--".concat(e),e),Object(S["a"])(t,"tile-board--".concat(this.itemsPerBoard),this.itemsPerBoard),Object(S["a"])(t,"tile-board--".concat(this.colorScheme),this.colorScheme),Object(S["a"])(t,"tile-board--disabled",!this.playing),t},boardStyles:function(e){return Object(j["a"])({},this.textScaling[e]&&{"--text-scale-factor":"".concat(this.textScaling[e])})},tileAfterLeave:function(e,t){this.config.game.debug&&console.log("".concat(t," (").concat(e.id,") leaving...")),this.playing&&this.onTileLeft(e.id,t)}}};n("8b75");xe.render=x;var Se=xe,_e=Object(r["P"])("data-v-53fa1558");Object(r["y"])("data-v-53fa1558");var Ie={class:"loader"},Me=Object(r["j"])("svg",{class:"loader__logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475 475"},[Object(r["j"])("circle",{class:"badge",style:{"paint-order":"stroke fill markers"},cx:"237.5",cy:"237.5",r:"237.5"}),Object(r["j"])("path",{class:"tassel-cap",d:"M405.4 286.9c0 6.1-5 11.1-11.1 11.1 -6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1C400.4 275.8 405.4 280.7 405.4 286.9"}),Object(r["j"])("path",{class:"tassel",d:"M391 306.4l-14.7 25.5c-1.4 2.5 0.4 5.6 3.2 5.6h29.4c2.9 0 4.7-3.1 3.2-5.6l-14.7-25.5C396 304 392.5 304 391 306.4"}),Object(r["j"])("path",{class:"brim",d:"M407.5 240.8l-104.8-47.2c3.4-9.1 6.5-18.7 9.2-28.7 12.7-47.6 12.7-92.5 2.2-121.3 -23.4 19.9-45.7 58.8-58.3 106.4 -1.8 6.9-3.4 13.7-4.7 20.4l-4.2-1.9c-5.9-2.7-12.7-2.7-18.6 0l-4.2 1.9c-1.3-6.7-2.9-13.5-4.7-20.4 -12.7-47.6-35-86.5-58.3-106.4 -10.4 28.9-10.4 73.7 2.2 121.3 2.7 10 5.8 19.6 9.2 28.7l-104.8 47.2c-6.9 3.1-6.9 12.9 0 16l87.6 39.4c0 0 0-48 0-48.3 0.8-24.8 37.4-44.8 82.4-44.8 45 0 81.6 20 82.4 44.8 0 0.3 0 48.3 0 48.3l87.6-39.4C414.4 253.7 414.4 243.9 407.5 240.8"}),Object(r["j"])("path",{class:"brim-shade",d:"M319.9 248c-0.8 24.8-37.3 44.8-82.3 44.8 -45 0-81.5-20-82.3-44.8 0 0.3 0 0.6 0 0.8v47.5l73.1 32.9c5.9 2.7 12.7 2.7 18.6 0l73.1-32.9V248.8C319.9 248.5 319.9 248.3 319.9 248"}),Object(r["j"])("path",{class:"liner",d:"M237.5 203.2c-45 0-81.5 20-82.3 44.8 0.8 24.8 37.4 44.8 82.4 44.8s81.6-20 82.4-44.8C319.1 223.2 282.5 203.2 237.5 203.2"}),Object(r["j"])("path",{class:"crown",d:"M228.2 329.2l-73.1-32.9v89.6c0-25.2 36.9-45.6 82.4-45.6s82.4 20.4 82.4 45.6v-89.6l-73.1 32.9C240.9 331.8 234.1 331.8 228.2 329.2"}),Object(r["j"])("path",{class:"tip",d:"M319.9 385.9c0 25.2-36.9 45.6-82.4 45.6 -45.5 0-82.4-20.4-82.4-45.6s36.9-45.6 82.4-45.6C283 340.3 319.9 360.7 319.9 385.9"})],-1),Ce=Object(r["j"])("svg",{class:"loader__label",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 251.924 29.28"},[Object(r["j"])("g",{class:"label"},[Object(r["j"])("path",{d:"M0 28.64h22.08v-7.32H9.44V.64H0v28z",class:"l"}),Object(r["j"])("path",{d:"M40.977 29.28c9.12 0 15.8-6.16 15.8-14.64S50.097 0 40.977 0c-9.12 0-15.8 6.16-15.8 14.64s6.68 14.64 15.8 14.64zm0-7.64c-3.48 0-6.28-2.64-6.28-7 0-4.36 2.8-7 6.28-7 3.48 0 6.28 2.64 6.28 7 0 4.36-2.8 7-6.28 7z",class:"o"}),Object(r["j"])("path",{d:"M82.772 28.64h9.76l-12.24-28h-9.28l-12.24 28h9.6l1.88-4.88h10.64l1.88 4.88zm-9.92-11.68l2.72-7.04 2.72 7.04h-5.44z",class:"a"}),Object(r["j"])("path",{d:"M96.078 28.64h13.8c9.36 0 15.8-5.32 15.8-14s-6.44-14-15.8-14h-13.8v28zm9.44-7.36V8h3.96c3.96 0 6.68 2.36 6.68 6.64 0 4.28-2.72 6.64-6.68 6.64h-3.96z",class:"d"}),Object(r["j"])("path",{d:"M131.125 28.64h9.44v-28h-9.44v28z",class:"i"}),Object(r["j"])("path",{d:"M165.51.64v12.72L154.87.64h-7.76v28h9.2V15.92l10.64 12.72h7.76v-28h-9.2z",class:"n"}),Object(r["j"])("path",{d:"M199.817 20.96c-1.16.48-2.28.68-3.44.68-4.04 0-6.68-2.8-6.68-7 0-4.32 2.64-7 6.8-7 2.48 0 4.52 1.04 6.28 3.08l6.04-5.32c-2.84-3.48-7.28-5.4-12.8-5.4-9.24 0-15.84 6.04-15.84 14.64 0 8.6 6.6 14.64 15.64 14.64 4.12 0 8.8-1.24 12.2-3.56V13.88h-8.2v7.08z",class:"g"}),Object(r["j"])("path",{d:"M218.269 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z",class:"dot"}),Object(r["j"])("path",{d:"M232.456 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z",class:"dot"}),Object(r["j"])("path",{d:"M246.644 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z",class:"dot"})])],-1);Object(r["w"])();var Le=_e((function(e,t,n,a,o,c){return Object(r["v"])(),Object(r["g"])("section",Ie,[Me,Ce])})),De={name:"Loader"};n("8e7c");De.render=Le,De.__scopeId="data-v-53fa1558";var ke=De,Be={name:"Match",components:{Game:Se,Loader:ke},computed:{matchId:function(){var e=this.match||{},t=e.matchId,n=void 0===t?null:t;return n}},setup:function(){var e=Object(r["A"])(""),t=Object(i["c"])(),n=O({callback:v(t.params.id),immediate:!0,deps:[function(){return t.params}]}),a=n.data,o=(n.error,n.inError,n.initialized,n.loading);n.success;return{x:e,match:a,showLoader:o}}};n("8809");Be.render=d,Be.__scopeId="data-v-9b989ff0";var Pe=Be,Te=Object(r["P"])("data-v-6c3a223a");Object(r["y"])("data-v-6c3a223a");var ze={class:"p-4"};Object(r["w"])();var Ae=Te((function(e,t,n,a,o,c){var i=Object(r["D"])("router-link");return Object(r["v"])(),Object(r["g"])("div",ze,[Object(r["j"])("ul",null,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(o.games,(function(e){return Object(r["v"])(),Object(r["g"])("li",{key:e.id},[Object(r["j"])(i,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:Te((function(){return[Object(r["i"])(Object(r["G"])(e.title),1)]})),_:2},1032,["to"])])})),128))])])}));g.a.defaults.headers.get["Content-Type"]="application/json",g.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var Ee={name:"Matches",data:function(){return{games:[]}},methods:{fetchData:function(){return Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("/api/matches",{timeout:3e4});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:n=t.sent,r=n.map((function(e){return{id:e.matchId,title:e.title}})),e.games=r;case 5:case"end":return t.stop()}}),t)})))()}};n("3843");Ee.render=Ae,Ee.__scopeId="data-v-6c3a223a";var qe=Ee,Re=[{path:"/",name:"matches",component:qe,props:!1},{path:"/match/:id",name:"match",component:Pe,props:!1}],He=Object(i["a"])({history:Object(i["b"])(),routes:Re}),Ye=He;Object(r["f"])(c).use(Ye).mount("#quizdini")},8809:function(e,t,n){"use strict";n("bb38")},"8b75":function(e,t,n){"use strict";n("1992")},"8e7c":function(e,t,n){"use strict";n("df3a")},9299:function(e,t,n){"use strict";n("bdfb")},a19a:function(e,t,n){},bb38:function(e,t,n){},bdfb:function(e,t,n){},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},df3a:function(e,t,n){},ef2c:function(e,t,n){"use strict";n("cb08")},f3ff:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app-legacy.f4bb87b2.js.map