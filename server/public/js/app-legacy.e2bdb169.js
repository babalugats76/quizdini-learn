(function(e){function t(t){for(var r,i,c=t[0],s=t[1],d=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02cd":function(e,t,n){"use strict";n("a19a")},"0c7c":function(e,t,n){},"17b7":function(e,t,n){"use strict";n("f3ff")},3843:function(e,t,n){"use strict";n("0c7c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,i){var c=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["f"])(c)}var o={name:"App"};n("9299");o.render=a;var i=o,c=n("6c02"),s=(n("ac1f"),n("466d"),Object(r["O"])("data-v-682fd584")),d=s((function(e,t,n,a,o,i){var c=Object(r["C"])("Loader"),d=Object(r["C"])("Game");return Object(r["u"])(),Object(r["f"])(r["b"],{duration:1e3,mode:"out-in",name:"mt"},{default:s((function(){return[a.showLoader?(Object(r["u"])(),Object(r["f"])(c,{key:"1"})):(Object(r["u"])(),Object(r["f"])(d,{key:"2",match:a.match},null,8,["match"]))]})),_:1})})),u=(n("96cf"),n("1da1")),l=n("bc3a"),f=n.n(l);f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var m={timeout:3e4},g=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,r=t.config,a=void 0===r?m:r,console.log("url",n),console.log("config",a),e.prev=3,e.next=6,f.a.get(n,a);case 6:return o=e.sent,e.abrupt("return",{data:o.data});case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",{error:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,r=t.data,a=t.config,o=void 0===a?m:a,console.log("url",n),console.log(JSON.stringify(r,null,4)),console.log("config",o),e.prev=4,e.next=7,f.a.post(n,r,o);case 7:return i=e.sent,e.abrupt("return",{data:i.data});case 11:return e.prev=11,e.t0=e["catch"](4),e.abrupt("return",{error:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),h="/api/match",p=function(e){return function(){return g({url:"".concat(h,"/").concat(e)})}},v=n("5530");function O(e){var t=e.callback,n=e.immediate,a=void 0===n||n,o=e.deps,i=void 0===o?[]:o,c=Object(r["y"])({data:null,error:null,executions:0,inError:!1,initialized:!1,loading:!1,success:null});return Object(r["J"])(i,(function(){console.log("watch fired!"),c.loading=!0,setTimeout(Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(n=e.sent,r=n.data,a=void 0===r?null:r,o=n.error,i=void 0===o?null:o,c.data=a,c.error=i,c.executions+=1,c.initialized=!!c.executions,c.loading=!1,!a){e.next=11;break}return e.abrupt("return",c.success=!0);case 11:if(!i){e.next=13;break}return e.abrupt("return",c.inError=!0);case 13:case"end":return e.stop()}}),e)}))),5e3)}),{immediate:a}),Object(v["a"])({},Object(r["G"])(c))}var j={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!1,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},splash:{timeouts:{enter:800,leave:800}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:800,miss:800,shuffle:600}},timer:{debug:!0,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,delay:1500,enter:1e3,leave:1e3}}},y={key:"2",class:"match__game"};function x(e,t,n,a,o,i){var c=Object(r["C"])("Splash"),s=Object(r["C"])("Tile"),d=Object(r["C"])("DndBoard"),u=Object(r["C"])("Timer");return Object(r["u"])(),Object(r["f"])(r["b"],{duration:1e3,mode:"out-in",name:"mt"},{default:Object(r["L"])((function(){return[e.showBoard?(Object(r["u"])(),Object(r["f"])("div",y,[Object(r["i"])("button",{onClick:t[1]||(t[1]=Object(r["N"])((function(){return e.togglePlaying.apply(e,arguments)}),["prevent"]))},"Toggle Playing"),Object(r["i"])(d,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(r["L"])((function(){return[Object(r["i"])(r["c"],{class:i.boardClasses("terms"),css:!0,duration:{enter:"".concat(e.config.tile.timeouts.enter),leave:"".concat(e.config.tile.timeouts.leave)},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:i.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=function(e){return i.tileAfterLeave(e,"term")})},{default:Object(r["L"])((function(){return[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(e.activeTerms,(function(e){return Object(r["u"])(),Object(r["f"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:e.dragging,disabled:!1,color:e.color,dragging:e.dragging,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Draggable",type:"term"},null,8,["id","content","style","active","color","dragging","hasHtml","hit","length","maxWordLength","miss","over"])})),128))]})),_:1},8,["class","duration","move-class","style"]),Object(r["i"])(r["c"],{class:i.boardClasses("definitions"),css:!0,duration:{enter:"".concat(e.config.tile.timeouts.enter),leave:"".concat(e.config.tile.timeouts.leave)},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:i.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=function(e){return i.tileAfterLeave(e,"definition")})},{default:Object(r["L"])((function(){return[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(e.activeDefinitions,(function(e){return Object(r["u"])(),Object(r["f"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:!1,disabled:!1,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Droppable",type:"definition"},null,8,["id","content","style","hasHtml","hit","length","maxWordLength","miss","over"])})),128))]})),_:1},8,["class","duration","move-class","style"])]})),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(r["i"])(u,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])):(Object(r["u"])(),Object(r["f"])(c,{config:e.config.splash,showModal:!e.showBoard,key:"1",onStart:e.startGame},null,8,["config","showModal","onStart"]))]})),_:1})}n("99af");var w=n("ade3"),_=n("53ca"),S=(n("4de4"),n("7db0"),n("d81d"),n("13d5"),n("fb6a"),n("b680"),n("5319"),n("1276"),n("3835")),L=n("8dee"),I=n.n(L);n("a434");function C(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return Object.prototype.hasOwnProperty.call(t,n)?e.map((function(e){return e[n]!==t[n]?e:Object(v["a"])(Object(v["a"])({},e),t)})):e}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!Object.prototype.hasOwnProperty.call(t,n))return e;var a=e.find((function(e){return e[n]===t[n]})),o=r?r(a):t;return a?e.map((function(e){return e[n]!==o[n]?e:Object(v["a"])(Object(v["a"])({},e),o)})):e.concat(o)}function D(e,t){var n=Object(r["k"])(),a=null;function o(){i(),a=setTimeout((function(){return t()}),Object(r["H"])(e))}function i(){clearTimeout(a)}return n?Object(r["t"])((function(){console.log("cleaning up!"),a&&i()})):console.log("not in current instance"),[i,o]}var B="/api/ping",T=function(e){return b({url:"".concat(B),data:e})};function A(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=D(j.tile.timeouts.hit,(function(){d.terms=d.terms.map((function(e){return e.matched&&e.show?Object(v["a"])(Object(v["a"])({},e),{},{show:!1}):e})),d.definitions=d.definitions.map((function(e){return e.matched&&e.show?Object(v["a"])(Object(v["a"])({},e),{},{show:!1}):e}))})),a=Object(S["a"])(n,2),o=a[1],i=D(j.tile.timeouts.shuffle,(function(){d.shuffling=!1})),c=Object(S["a"])(i,2),s=c[1],d=Object(r["y"])({activeDefinitions:Object(r["d"])((function(){return d.definitions.filter((function(e){return e.show}))})),activeTerms:Object(r["d"])((function(){return d.terms.filter((function(e){return e.show}))})),canDnd:Object(r["d"])((function(){return d.playing&&!d.shuffling&&!d.termIsExiting})),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(r["d"])((function(){return d.terms.reduce((function(e,t){return t.exited?e+=1:e}),0)})),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(r["d"])((function(){return!!d.terms.filter((function(e){return e.matched&&!e.exited})).length})),terms:[],textScaling:{terms:1,definitions:1},title:""});function l(e){var t=function(e,t){var n=/<[^>]*>/gi,r=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return r.body.textContent},n=new DOMParser;return e.map((function(e){var r=t(n,e.term),a=t(n,e.definition);return{term:{answer:e.definition,content:e.term,dragging:!1,exited:!1,hasHtml:r.length!==e.term.length,hit:!1,id:I.a.generate(),length:r.length,matched:!1,matchId:"",maxWordLength:r.split(" ").reduce((function(e,t){return e>t.length?e:t.length}),0),miss:!1,over:!1,show:!0},definition:{content:e.definition,exited:!1,hasHtml:a.length!==e.definition.length,hit:!1,id:I.a.generate(),length:a.length,matched:!1,matchId:"",maxWordLength:a.split(" ").reduce((function(e,t){return e>t.length?e:t.length}),0),miss:!1,over:!1,show:!0}}}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=j.game.themes[t.toLowerCase()],r=void 0===n?"":n;if(!r)return e.map((function(e){return Object(v["a"])(Object(v["a"])({},e),{},{color:j.game.themes.default.colors[0]})}));var a=C(r.colors.slice());return e.map((function(e){var t=a.pop();return Object(v["a"])(Object(v["a"])({},e),{},{color:t})}))}function m(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function g(e,t,n,r,a,o,i){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":a+"px","--hit-end-tz":o+"px","--hit-duration":i+"ms"}}function b(e,t){var n=d.terms.find((function(t){return t.id===e}))||{},r=n.answer,a=d.definitions.find((function(e){return e.id===t}))||{},o=a.content;return!!r&&!!o&&r===o}function h(e){var t=e||{},n=t.dragId,r=t.dragX,a=t.dragY;d.terms=M(d.terms,{id:n,dragging:!0,hit:!1,miss:!1,style:m(r,a,1)})}function p(e){var t=e||{},n=t.dragId,r=t.dropId,a=t.over;d.terms=d.terms.map((function(e){return Object(v["a"])(Object(v["a"])({},e),{},{over:e.id===n&&a})})),d.definitions=d.definitions.map((function(e){return Object(v["a"])(Object(v["a"])({},e),{},{over:e.id===r})}))}function O(e){var t=e||{},n=t.dragId,r=t.dragX,a=t.dragY,i=t.dropId,c=t.dropX,s=t.dropY,u=!!i&&b(n,i);if(d.terms=M(d.terms,{id:n,dragging:!1,hit:u,miss:!u,matched:u,matchId:u?i:"",over:u,style:u?g(r,a,1,c,s,1,j.tile.timeouts.hit):m(0,0,0)}),i){u?d.correct++:d.incorrect++,d.definitions=M(d.definitions,{id:i,hit:u,miss:!u,matched:u,matchId:u?n:"",over:u});var l=d.terms.find((function(e){return e.id===n}))||{},f=l.content;d.score=Math.max(u?d.score+1:d.score-1,0),d.stats=k(d.stats,{term:f},"term",(function(e){return e?{term:f,hit:u?e.hit+1:e.hit,miss:u?e.miss:e.miss+1}:{term:f,hit:u?1:0,miss:u?0:1}})),u&&o()}}function y(e,t){switch(t){case"term":d.terms=M(d.terms,{id:e,exited:!0});break;case"definition":d.definitions=M(d.definitions,{id:e,exited:!0});break;default:return}}function x(e){var n=e.reduce((function(e,t){return[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length]}),[]);t&&console.log(JSON.stringify(n,null,4));var r=j.tile.text.scaling||{},a=r.growth,o=r.min,i=r.max;d.textScaling={terms:(i*Math.pow(a,a*Math.max(n[0],n[1]/2.5))+o).toFixed(2),definitions:(i*Math.pow(a,a*Math.max(n[2],n[3]/2.5))+o).toFixed(2)},t&&console.log(JSON.stringify(d.textScaling,null,4))}function w(){console.log("dealing..."),d.matches=C(d.matches);var e=d.matches.slice(0,Math.min(d.itemsPerBoard,d.matches.length));x(e),d.terms=f(e.map((function(e){return e.term})),d.colorScheme),d.definitions=C(e.map((function(e){return e.definition})))}function _(){console.log("shuffling..."),d.shuffling=!0,d.terms=C(d.terms),d.definitions=C(d.definitions),s()}function L(){d.correct=0,d.definitions=[],d.incorrect=0,d.playing=!1,d.score=0,d.showBoard=!1,d.stats=[],d.terms=[],w(),Object(r["o"])((function(){_(),d.playing=!0,d.showBoard=!0}))}function B(){return A.apply(this,arguments)}function A(){return A=Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("game over..."),d.playing=!1,d.showBoard=!1,d.terms=[],d.definitions=[],e.next=7,T({correct:d.correct,data:d.stats,gameId:d.matchId,gameType:"M",incorrect:d.incorrect,score:d.score});case 7:n=e.sent,t&&JSON.stringify(n.data,null,4);case 9:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function P(){console.log("toggle playing fired!"),d.playing=!d.playing}return Object(r["K"])((function(){var t=Object(r["H"])(e),n=t.matchId,a=t.matches,o=void 0===a?[]:a,i=t.options;i=void 0===i?{}:i;var c=i.duration,s=void 0===c?60:c,u=i.colorScheme,f=void 0===u?"":u,m=i.itemsPerBoard,g=void 0===m?9:m,b=t.title,h=void 0===b?"":b;d.colorScheme=f.toLowerCase(),d.duration=s,d.matchId=n,d.itemsPerBoard=g,d.matches=l(o),d.title=h})),Object(r["J"])((function(){return d.exited}),(function(e,n){t&&console.log("exited changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=n||(e===d.itemsPerBoard?(w(),Object(r["o"])((function(){return _()}))):_())})),Object(v["a"])(Object(v["a"])({config:j},Object(r["G"])(d)),{},{deal:w,gameOver:B,onDrag:h,onDrop:O,onOver:p,onTileLeft:y,shuffle:_,startGame:L,togglePlaying:P})}var P=Object(r["O"])("data-v-c03d63c2"),q=P((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])("div",{class:i.classes,ref:"dndRef"},[Object(r["B"])(e.$slots,"default")],2)})),E=(n("4160"),n("c975"),n("159b"),n("2ef0")),H=n.n(E);function R(e){var t=e.active,n=e.element,a=e.throttleMs,o=void 0===a?33:a,i=e.debug,c=void 0!==i&&i,s=e.emit,d=Object(r["y"])({dragged:{},listeners:[],throttledDrag:Object(r["d"])((function(){return H.a.throttle(h,o,{trailing:!0})}))}),u={mousedown:b,mousemove:d.throttledDrag,mouseup:p,touchstart:b,touchmove:d.throttledDrag,touchend:p};function l(e){e.forEach((function(t){c&&console.log("adding ".concat(t,"...")),n.value.addEventListener(t,u[t]),d.listeners=d.listeners.concat(e).filter((function(e,t,n){return n.indexOf(e)===t}))}))}function f(e){e.forEach((function(t){c&&console.log("removing ".concat(t,"...")),n.value.removeEventListener(t,u[t]),d.listeners=d.listeners.filter((function(t){return e.indexOf(t)<0}))}))}function m(){l(["mousedown","touchstart"])}function g(){d.dragged={},f(d.listeners)}function b(e){e.stopPropagation(),c&&console.log("".concat(d.dragged.id?"".concat(e.type," (").concat(d.dragged.id,") "):"".concat(e.type),"..."));var t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(t){var n="touchstart"===e.type?e.touches[0].clientX:e.clientX,r="touchstart"===e.type?e.touches[0].clientY:e.clientY,a=t.getBoundingClientRect(),o=a.top,i=a.left;d.dragged={id:t.id,offsetX:n-i,offsetY:r-o,initialX:n,initialY:r};var s="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];l(s)}}function h(e){e.stopPropagation();var t=d.dragged,n=t.id,r=t.initialX,a=t.initialY,o=t.overId;c&&console.log("".concat(n?"".concat(e.type," (").concat(n,") "):"".concat(e.type),"..."));var i="touchmove"===e.type?e.touches[0].clientX-r:e.clientX-r,u="touchmove"===e.type?e.touches[0].clientY-a:e.clientY-a;s("drag",{dragId:n,dragX:i,dragY:u});var l=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find((function(e){return e.classList.contains("droppable")}))||{},f=l.id,m=void 0===f?"":f;o!==m&&(c&&m&&console.log("".concat(n," is over ").concat(m,"...")),s("over",{dragId:n,dropId:m,over:!!m}),d.dragged=Object(v["a"])(Object(v["a"])({},d.dragged),{},{overId:m}))}function p(e){e.stopPropagation(),d.throttledDrag.cancel();var t=d.dragged,n=t.id,r=t.initialX,a=t.initialY,o=t.offsetX,i=t.offsetY;c&&console.log("".concat(n?"".concat(e.type," (").concat(n,") "):"".concat(e.type),"..."));var u="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,l="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,m=document.elementsFromPoint(u,l).find((function(e){return e.classList.contains("droppable")})),g=m&&m.getBoundingClientRect()||{},b=g.top,h=g.left;s("drop",{dragId:n,dragX:m?u-r:u,dragY:m?l-a:l,dropId:m?m.id:null,dropX:m?Math.round(h-r+o):null,dropY:m?Math.round(b-a+i):null}),d.dragged={};var p="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];f(p)}return Object(r["s"])((function(){c&&console.log("dnd mounted (".concat(Object(r["H"])(t)?"active":"inactive",")...")),Object(r["H"])(t.value)&&l(["mousedown","touchstart"])})),Object(r["J"])(t,(function(e,t){return c&&console.log("active changed: ",t,"=>",e),e&&!t?m():g()})),Object(v["a"])({},Object(r["G"])(d))}var Y={name:"DndBoard",props:["active","config"],setup:function(e,t){var n=t.emit,a=Object(r["z"])(null),o=Object(r["G"])(e),i=o.active;return Object(v["a"])(Object(v["a"])(Object(v["a"])({},e.config),R({active:i,element:a,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:n})),{},{dndRef:a})},computed:{classes:function(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("02cd");Y.render=q,Y.__scopeId="data-v-c03d63c2";var W=Y,X=Object(r["O"])("data-v-3602fb20"),N=X((function(e,t,n,a,o,i){var c=Object(r["C"])("Modal");return Object(r["u"])(),Object(r["f"])(Object(r["D"])("teleport"),{to:"#quizdini__modals"},{default:X((function(){return[Object(r["i"])(c,Object(r["n"])({appear:!0,show:n.showModal},e.$attrs),{default:X((function(){return[Object(r["i"])("button",{onClick:t[1]||(t[1]=Object(r["N"])((function(){return i.onClickStart.apply(i,arguments)}),["prevent"]))},"Start Game")]})),_:1},16,["show"])]})),_:1})})),G=Object(r["O"])("data-v-177a3978");Object(r["x"])("data-v-177a3978");var z={key:0,class:"modal-mask"},J={class:"modal-wrapper"},F={class:"modal-container"};Object(r["v"])();var U=G((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])(r["b"],{appear:n.appear,name:"modal",duration:5e3},{default:G((function(){return[n.show?(Object(r["u"])(),Object(r["f"])("div",z,[Object(r["i"])("div",J,[Object(r["i"])("div",F,[Object(r["B"])(e.$slots,"default")])])])):Object(r["g"])("",!0)]})),_:1},8,["appear"])})),$={name:"Modal",props:["appear","show"]};n("d951");$.render=U,$.__scopeId="data-v-177a3978";var Z=$,K={inheritAttrs:!1,name:"Splash",components:{Modal:Z},props:["config","showModal"],methods:{onClickStart:function(){this.$emit("start")}}};n("76e9");K.render=N,K.__scopeId="data-v-3602fb20";var V=K;function Q(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])(Object(r["D"])(n.is),{active:n.active,class:i.tileClasses,disabled:n.disabled,id:n.id,style:n.style},{default:Object(r["L"])((function(){return[Object(r["i"])("div",{class:i.bodyClasses,"data-has-html":n.hasHtml,"data-length":n.length,"data-max-word-length":n.maxWordLength,innerHTML:n.content},null,10,["data-has-html","data-length","data-max-word-length","innerHTML"])]})),_:1},8,["active","class","disabled","id","style"])}n("a9e3");var ee=Object(r["O"])("data-v-02fd6379"),te=ee((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])("div",{id:n.id,class:i.classes},[Object(r["B"])(e.$slots,"default")],10,["id"])})),ne={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes:function(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");ne.render=te,ne.__scopeId="data-v-02fd6379";var re=ne,ae=Object(r["O"])("data-v-da15d764"),oe=ae((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])("div",{id:n.id,class:i.classes},[Object(r["B"])(e.$slots,"default")],10,["id"])})),ie={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes:function(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");ie.render=oe,ie.__scopeId="data-v-da15d764";var ce=ie,se={name:"Tile",components:{Draggable:re,Droppable:ce},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},dragging:{type:Boolean,required:!1},hasHtml:{type:Boolean,required:!1},hit:{type:Boolean,required:!1},id:{required:!1},is:{type:String,required:!0},length:{type:Number,required:!1},maxWordLength:{type:Number,required:!1},miss:{type:Boolean,required:!1},over:{type:Boolean,required:!1},style:{required:!1},type:{type:String,required:!1}},computed:{bodyClasses:function(){return Object(w["a"])({tile__body:!0},"tile__body--has-long-word",this.maxWordLength>=11)},tileClasses:function(){var e;return e={tile:!0},Object(w["a"])(e,"tile--".concat(this.type),this.type),Object(w["a"])(e,this.color,this.color),Object(w["a"])(e,"hit",this.hit),Object(w["a"])(e,"miss",this.miss),Object(w["a"])(e,"drag",this.dragging),Object(w["a"])(e,"over",this.over),e}}};se.render=Q;var de=se,ue=Object(r["O"])("data-v-30e190da");Object(r["x"])("data-v-30e190da");var le={class:"timer"},fe={class:"timer__wrapper"},me={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},ge={class:"timer__circle"};Object(r["v"])();var be=ue((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])(r["b"],Object(r["n"])({duration:{enter:"".concat(e.timeouts.enter),leave:"".concat(e.timeouts.leave)},name:"timer",onBeforeEnter:i.beforeEnter,onAfterEnter:i.afterEnter,onAfterLeave:i.afterLeave,onAfterAppear:i.afterAppear},e.$attrs),{default:ue((function(){return[Object(r["M"])(Object(r["i"])("div",null,[Object(r["i"])("div",le,[Object(r["i"])(r["b"],{duration:{enter:"".concat(e.timeouts.change),leave:"".concat(e.timeouts.change)},name:"scoring",onAfterLeave:e.endScoreChange},{default:ue((function(){return[Object(r["M"])(Object(r["i"])("div",fe,[(Object(r["u"])(),Object(r["f"])("svg",me,[Object(r["i"])("g",ge,[Object(r["i"])("circle",{class:["timer__path-elapsed",i.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(r["i"])("path",{"stroke-dasharray":i.strokeDasharray,class:["timer__path-remaining",[e.severity,i.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(r["i"])("span",{class:["timer__label",i.scoreClass]},Object(r["F"])(n.score||e.formatted),3)],512),[[r["I"],!e.scoring]])]})),_:1},8,["duration","onAfterLeave"])])],512),[[r["I"],!e.expired]])]})),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave","onAfterAppear"])})),he={ALERT:"alert",WARN:"warn",SUCCESS:"success"},pe={UP:"up",DOWN:"down"};function ve(e){var t=e.active,n=void 0!==t&&t,a=e.alert,o=e.autoStart,i=void 0===o||o,c=e.debug,s=void 0!==c&&c,d=e.delay,u=void 0===d?5e3:d,l=e.duration,f=e.emit,m=void 0===f?void 0:f,g=e.interval,b=e.score,h=e.warn,p=D(Object(r["H"])(u),(function(){s&&console.log("starting timer after Delay..."),y.intervalId=setInterval((function(){y.elapsed+=Object(r["H"])(g)}),Object(r["H"])(g))})),O=Object(S["a"])(p,2),j=O[1],y=Object(r["y"])({elapsed:0,expired:Object(r["d"])((function(){return y.remaining<=0})),formatted:Object(r["d"])((function(){var e=Math.floor(y.remaining/6e4),t=Math.floor(y.remaining%6e4/1e3);return t<10?"".concat(e,":0").concat(t):"".concat(e,":").concat(t)})),idle:Object(r["d"])((function(){return y.elapsed})),intervalId:null,progress:Object(r["d"])((function(){return Math.round(y.remaining/(1e3*Object(r["H"])(l))*1e4)/100})),remaining:Object(r["d"])((function(){return 1e3*Object(r["H"])(l)-y.elapsed})),running:!1,scoring:!1,scoringStatus:"",SCORING_STATUS:pe,severity:Object(r["d"])((function(){return y.progress<=h?y.progress<=a?he.ALERT:he.WARN:he.SUCCESS}))});function x(){L(),y.running=!0,y.remaining||(y.elapsed=0),j()}function w(e){y.elapsed=e}function _(){s&&console.log("timer scoring end..."),y.scoring=!1,y.scoringStatus=""}function L(){s&&console.log("stopping timer..."),y.running=!1,y.intervalId&&(clearInterval(y.intervalId),y.intervalId=null)}return Object(r["J"])(n,(function(e,t){!e||t||y.running||x(),!e&&y.running&&(console.log("pause timer here"),L())})),Object(r["J"])(b,(function(e,t){s&&console.log("score changed: ",t,"=>",e),y.scoring=!0,y.scoringStatus=e>t?pe.UP:pe.DOWN})),Object(r["J"])((function(){return y.expired}),(function(e,t){e&&!t&&(s&&console.log("timer expired: ",t,"=>",e),L(),m("timer-expired"))})),Object(r["s"])((function(){s&&console.log("timer mounted..."),Object(r["H"])(i)&&Object(r["H"])(n)&&x()})),Object(r["q"])((function(){s&&console.log("timer cleaning up..."),L()})),Object(v["a"])(Object(v["a"])({},Object(r["G"])(y)),{},{startTimer:x,stopTimer:L,setElapsed:w,endScoreChange:_})}var Oe=283,je={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup:function(e,t){var n=t.emit,a=Object(r["G"])(e),o=a.active,i=a.duration,c=a.playing,s=a.score,d=ve({active:o,alert:e.config.thresholds.alert,autoStart:!0,debug:e.config.debug,delay:e.config.timeouts.delay,duration:i,emit:n,interval:e.config.timeouts.interval,playing:c,score:s,warn:e.config.thresholds.warn});return Object(v["a"])(Object(v["a"])({},d),e.config)},computed:{scoreClass:function(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray:function(){var e=this.progress/100-1/this.duration*(1-this.progress/100);return"".concat((e*Oe).toFixed(0)," ").concat(Oe)}},methods:{beforeEnter:function(){this.debug&&console.log("before timer entered...")},afterEnter:function(){console.log("after enter in Timer fired..."),this.debug&&console.log("timer entered...")},afterAppear:function(){console.log("after appear fired...")},afterLeave:function(){this.debug&&console.log("timer left...")}},onMounted:function(){console.log("Timer has mounted...")}};n("17b7");je.render=be,je.__scopeId="data-v-30e190da";var ye=je,xe={name:"Game",components:{DndBoard:W,Splash:V,Tile:de,Timer:ye},props:["match"],setup:function(e){var t=Object(r["G"])(e),n=t.match;return console.log(Object(_["a"])(n)),Object(v["a"])({},A(n))},methods:{beforeEnter:function(){this.debug&&console.log("game transition before entered...")},boardClasses:function(e){var t;return t={"tile-board":!0},Object(w["a"])(t,"tile-board--".concat(e),e),Object(w["a"])(t,"tile-board--".concat(this.itemsPerBoard),this.itemsPerBoard),Object(w["a"])(t,"tile-board--".concat(this.colorScheme),this.colorScheme),Object(w["a"])(t,"tile-board--disabled",!this.playing),t},boardStyles:function(e){return Object(v["a"])({},this.textScaling[e]&&{"--text-scale-factor":"".concat(this.textScaling[e])})},tileAfterLeave:function(e,t){this.config.game.debug&&console.log("".concat(t," (").concat(e.id,") leaving...")),this.playing&&this.onTileLeft(e.id,t)}}};n("655a");xe.render=x;var we=xe,_e=Object(r["O"])("data-v-4e0eb0b4");Object(r["x"])("data-v-4e0eb0b4");var Se={class:"page page--loader page--full"},Le=Object(r["i"])("button",{class:"btn btn-refresh",title:"Crude page reload"},"Replay",-1),Ie=Object(r["i"])("section",{class:"loader"},[Object(r["i"])("svg",{class:"loader__logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475 475"},[Object(r["i"])("circle",{class:"badge",style:{"paint-order":"stroke fill markers"},cx:"237.5",cy:"237.5",r:"237.5"}),Object(r["i"])("path",{class:"tassel-cap",d:"M405.4 286.9c0 6.1-5 11.1-11.1 11.1 -6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1C400.4 275.8 405.4 280.7 405.4 286.9"}),Object(r["i"])("path",{class:"tassel",d:"M391 306.4l-14.7 25.5c-1.4 2.5 0.4 5.6 3.2 5.6h29.4c2.9 0 4.7-3.1 3.2-5.6l-14.7-25.5C396 304 392.5 304 391 306.4"}),Object(r["i"])("path",{class:"brim",d:"M407.5 240.8l-104.8-47.2c3.4-9.1 6.5-18.7 9.2-28.7 12.7-47.6 12.7-92.5 2.2-121.3 -23.4 19.9-45.7 58.8-58.3 106.4 -1.8 6.9-3.4 13.7-4.7 20.4l-4.2-1.9c-5.9-2.7-12.7-2.7-18.6 0l-4.2 1.9c-1.3-6.7-2.9-13.5-4.7-20.4 -12.7-47.6-35-86.5-58.3-106.4 -10.4 28.9-10.4 73.7 2.2 121.3 2.7 10 5.8 19.6 9.2 28.7l-104.8 47.2c-6.9 3.1-6.9 12.9 0 16l87.6 39.4c0 0 0-48 0-48.3 0.8-24.8 37.4-44.8 82.4-44.8 45 0 81.6 20 82.4 44.8 0 0.3 0 48.3 0 48.3l87.6-39.4C414.4 253.7 414.4 243.9 407.5 240.8"}),Object(r["i"])("path",{class:"brim-shade",d:"M319.9 248c-0.8 24.8-37.3 44.8-82.3 44.8 -45 0-81.5-20-82.3-44.8 0 0.3 0 0.6 0 0.8v47.5l73.1 32.9c5.9 2.7 12.7 2.7 18.6 0l73.1-32.9V248.8C319.9 248.5 319.9 248.3 319.9 248"}),Object(r["i"])("path",{class:"liner",d:"M237.5 203.2c-45 0-81.5 20-82.3 44.8 0.8 24.8 37.4 44.8 82.4 44.8s81.6-20 82.4-44.8C319.1 223.2 282.5 203.2 237.5 203.2"}),Object(r["i"])("path",{class:"crown",d:"M228.2 329.2l-73.1-32.9v89.6c0-25.2 36.9-45.6 82.4-45.6s82.4 20.4 82.4 45.6v-89.6l-73.1 32.9C240.9 331.8 234.1 331.8 228.2 329.2"}),Object(r["i"])("path",{class:"tip",d:"M319.9 385.9c0 25.2-36.9 45.6-82.4 45.6 -45.5 0-82.4-20.4-82.4-45.6s36.9-45.6 82.4-45.6C283 340.3 319.9 360.7 319.9 385.9"})]),Object(r["i"])("div",{class:"loader__label"},"Loading...")],-1);Object(r["v"])();var Ce=_e((function(e,t,n,a,o,i){return Object(r["u"])(),Object(r["f"])("div",Se,[Le,Ie])})),Me={name:"Loader"};n("b221");Me.render=Ce,Me.__scopeId="data-v-4e0eb0b4";var ke=Me,De={name:"Match",components:{Game:we,Loader:ke},computed:{matchId:function(){var e=this.match||{},t=e.matchId,n=void 0===t?null:t;return n}},setup:function(){var e=Object(r["z"])(""),t=Object(c["c"])(),n=O({callback:p(t.params.id),immediate:!0,deps:[function(){return t.params}]}),a=n.data,o=(n.error,n.inError,n.initialized,n.loading);n.success;return{x:e,match:a,showLoader:o}}};n("bf3c");De.render=d,De.__scopeId="data-v-682fd584";var Be=De,Te=Object(r["O"])("data-v-6c3a223a");Object(r["x"])("data-v-6c3a223a");var Ae={class:"p-4"};Object(r["v"])();var Pe=Te((function(e,t,n,a,o,i){var c=Object(r["C"])("router-link");return Object(r["u"])(),Object(r["f"])("div",Ae,[Object(r["i"])("ul",null,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(o.games,(function(e){return Object(r["u"])(),Object(r["f"])("li",{key:e.id},[Object(r["i"])(c,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:Te((function(){return[Object(r["h"])(Object(r["F"])(e.title),1)]})),_:2},1032,["to"])])})),128))])])}));f.a.defaults.headers.get["Content-Type"]="application/json",f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var qe={name:"Matches",data:function(){return{games:[]}},methods:{fetchData:function(){return Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/matches",{timeout:3e4});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:n=t.sent,r=n.map((function(e){return{id:e.matchId,title:e.title}})),e.games=r;case 5:case"end":return t.stop()}}),t)})))()}};n("3843");qe.render=Pe,qe.__scopeId="data-v-6c3a223a";var Ee=qe,He=[{path:"/",name:"matches",component:Ee,props:!1},{path:"/match/:id",name:"match",component:Be,props:!1}],Re=Object(c["a"])({history:Object(c["b"])(),routes:He}),Ye=Re;Object(r["e"])(i).use(Ye).mount("#quizdini")},"5f5f":function(e,t,n){},"655a":function(e,t,n){"use strict";n("ee64")},"76e9":function(e,t,n){"use strict";n("8daf")},"8daf":function(e,t,n){},9299:function(e,t,n){"use strict";n("bdfb")},a19a:function(e,t,n){},a7a8:function(e,t,n){},b221:function(e,t,n){"use strict";n("a7a8")},bdfb:function(e,t,n){},bf3c:function(e,t,n){"use strict";n("f681")},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},d951:function(e,t,n){"use strict";n("5f5f")},ee64:function(e,t,n){},ef2c:function(e,t,n){"use strict";n("cb08")},f3ff:function(e,t,n){},f681:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app-legacy.e2bdb169.js.map