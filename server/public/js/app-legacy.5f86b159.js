(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0244":function(e,t,n){"use strict";n("f871")},"0a75":function(e,t,n){"use strict";n("6660")},"15a6":function(e,t,n){},"1c66":function(e,t,n){"use strict";n("3f69")},"32e3":function(e,t,n){},"3f69":function(e,t,n){},"42b6":function(e,t,n){"use strict";n("15a6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,o,a){var c=Object(r["C"])("router-view");return Object(r["u"])(),Object(r["f"])(c)}var o={name:"App"};n("9cdc");o.render=i;var a=o,c=n("6c02"),s=(n("ac1f"),n("466d"),Object(r["M"])("data-v-ffe2064c")),u=s((function(e,t,n,i,o,a){var c=Object(r["C"])("Game");return Object(r["u"])(),Object(r["f"])(c,{match:o.match},null,8,["match"])})),l=(n("96cf"),n("1da1")),d=n("bc3a"),f=n.n(d);f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var m={timeout:3e4},g=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,r=t.config,i=void 0===r?m:r,console.log("url",n),console.log("config",i),e.prev=3,e.next=6,f.a.get(n,i);case 6:return o=e.sent,e.abrupt("return",{data:o.data});case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",{error:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),b="/api/match",p=function(e){return g({url:"".concat(b,"/").concat(e)})},v={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!0,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},tile:{scaling:{text:{growth:.64,min:1.2,max:3.5}},timeouts:{enter:800,hit:800,leave:500,miss:800,shuffle:500}},timer:{debug:!1,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}},h={class:"match__game"};function O(e,t,n,i,o,a){var c=Object(r["C"])("Tile"),s=Object(r["C"])("DndBoard"),u=Object(r["C"])("Timer");return Object(r["u"])(),Object(r["f"])(r["a"],null,[!e.playing&&e.matches.length?(Object(r["u"])(),Object(r["f"])("button",{key:0,onClick:t[1]||(t[1]=function(){return e.startGame.apply(e,arguments)})}," Start Game "+Object(r["F"])(e.textScaling.terms)+" "+Object(r["F"])(e.textScaling.definitions),1)):Object(r["g"])("",!0),Object(r["i"])("div",h,[Object(r["i"])(s,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(r["K"])((function(){return[Object(r["i"])(r["c"],{class:a.boardClasses("terms"),css:!0,duration:{enter:"".concat(e.config.tile.timeouts.enter),leave:"".concat(e.config.tile.timeouts.leave)},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:a.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=function(e){return a.tileAfterLeave(e,"term")})},{default:Object(r["K"])((function(){return[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(e.activeTerms,(function(e){return Object(r["u"])(),Object(r["f"])(c,{key:e.id,id:e.id,content:e.content,class:[e.className],style:[e.style],active:"drag"===e.className,disabled:!1,color:e.color,is:"Draggable",type:"term"},null,8,["id","content","class","style","active","color"])})),128))]})),_:1},8,["class","duration","move-class","style"]),Object(r["i"])(r["c"],{class:a.boardClasses("definitions"),css:!0,duration:{enter:"".concat(e.config.tile.timeouts.enter),leave:"".concat(e.config.tile.timeouts.leave)},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:a.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=function(e){return a.tileAfterLeave(e,"definition")})},{default:Object(r["K"])((function(){return[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(e.activeDefinitions,(function(e){return Object(r["u"])(),Object(r["f"])(c,{key:e.id,id:e.id,content:e.content,class:[e.className],style:[e.style],active:!1,disabled:!1,is:"Droppable",type:"definition"},null,8,["id","content","class","style"])})),128))]})),_:1},8,["class","duration","move-class","style"])]})),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(r["i"])(u,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])],64)}n("99af");var j=n("ade3"),y=n("5530"),w=(n("4de4"),n("7db0"),n("d81d"),n("13d5"),n("fb6a"),n("b680"),n("5319"),n("1276"),n("2909")),x=n("15fd"),S=n("3835"),_=n("8dee"),I=n.n(_);n("a434");function D(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return Object.prototype.hasOwnProperty.call(t,n)?e.map((function(e){return e[n]!==t[n]?e:Object(y["a"])(Object(y["a"])({},e),t)})):e}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!Object.prototype.hasOwnProperty.call(t,n))return e;var i=e.find((function(e){return e[n]===t[n]})),o=r?r(i):t;return i?e.map((function(e){return e[n]!==o[n]?e:Object(y["a"])(Object(y["a"])({},e),o)})):e.concat(o)}function C(e,t){var n=Object(r["k"])(),i=null;function o(){var n=arguments;a(),i=setTimeout((function(){(n&&t.apply(void 0,Object(w["a"])(n))||t)()}),Object(r["H"])(e))}function a(){clearTimeout(i)}return n?Object(r["t"])((function(){console.log("cleaning up!"),i&&a()})):console.log("not in current instance"),[a,o]}function B(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=C(v.tile.timeouts.hit,(function(e,t){return function(){l.terms=T(l.terms,{id:e,show:!1}),l.definitions=T(l.definitions,{id:t,show:!1})}})),i=Object(S["a"])(n,2),o=i[1],a=C(v.tile.timeouts.shuffle,(function(){l.shuffling=!1})),c=Object(S["a"])(a,2),s=c[1],u=Object(r["z"])(0),l=Object(r["y"])({activeDefinitions:Object(r["d"])((function(){return l.definitions.filter((function(e){return e.show}))})),activeTerms:Object(r["d"])((function(){return l.terms.filter((function(e){return e.show}))})),canDnd:Object(r["d"])((function(){return l.playing&&!l.shuffling&&!l.termIsExiting})),correct:0,colorScheme:"",definitions:[],duration:60,incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(r["d"])((function(){return!!l.terms.filter((function(e){return e.matched&&!e.exited})).length})),terms:[],textScaling:{terms:1,definitions:1},title:""});function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=v.game.themes[t.toLowerCase()],r=void 0===n?"":n;if(!r)return e.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{},{color:v.game.themes.default.colors[0]})}));var i=D(r.colors.slice());return e.map((function(e){var t=i.pop();return Object(y["a"])(Object(y["a"])({},e),{},{color:t})}))}function f(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function m(e,t,n,r,i,o,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":i+"px","--hit-end-tz":o+"px","--hit-duration":a+"ms"}}function g(e,t){var n=l.terms.find((function(t){return t.id===e}))||{},r=n.answer,i=l.definitions.find((function(e){return e.id===t}))||{},o=i.content;return!!r&&!!o&&r===o}function b(e){var t=e||{},n=t.dragId,r=t.dragX,i=t.dragY;l.terms=T(l.terms,{id:n,style:f(r,i,1),className:"drag"})}function p(e){var t=e||{},n=t.overId;l.definitions=l.definitions.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{},{className:e.id!==n||e.matched?"":"over"})}))}function h(e){var t=e||{},n=t.dragId,r=t.dragX,i=t.dragY,a=t.dropId,c=t.dropX,s=t.dropY,u=!!a&&g(n,a);if(l.terms=T(l.terms,Object(y["a"])(Object(y["a"])({id:n,matched:u,className:u?"hit":"miss"},u&&{matchId:a}),{},{style:u?m(r,i,1,c,s,1,v.tile.timeouts.hit):f(0,0,0)})),a){l.definitions=T(l.definitions,Object(y["a"])({id:a,className:u?"hit":""},u&&{matched:!0,matchId:n}));var d=l.terms.find((function(e){return e.id===n}))||{},b=d.content;l.score=Math.max(u?l.score+1:l.score-1,0),l.stats=M(l.stats,{term:b},"term",(function(e){return e?{term:b,hit:u?e.hit+1:e.hit,miss:u?e.miss:e.miss+1}:{term:b,hit:u?1:0,miss:u?0:1}})),u&&o(n,a)}}function O(e,t){switch(t){case"term":l.terms=T(l.terms,{id:e,exited:!0}),l.playing&&u.value++;break;case"definition":l.definitions=T(l.definitions,{id:e,exited:!0});break;default:return}}function j(e){var n=function(e,t){var n=/<[^>]*>/gi,r=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return r.body.textContent},r=new DOMParser,i=e.map((function(e){var t=n(r,e.term),i=n(r,e.definition);return console.log("term",e.term),console.log("parsed term",t),console.log("split term",JSON.stringify(t.split(" "),null,2)),console.log("definition",e.definition),console.log("parsed def",i),console.log("split def",JSON.stringify(i.split(" "),null,2)),[t.split(" ").reduce((function(e,t){return e>t.length?e:t.length}),0),t.length,i.split(" ").reduce((function(e,t){return e>t.length?e:t.length}),0),i.length]})).reduce((function(e,t){return[e[0]>t[0]?e[0]:t[0],e[1]>t[1]?e[1]:t[1],e[2]>t[2]?e[2]:t[2],e[3]>t[3]?e[3]:t[3]]}),[]);console.log(JSON.stringify(i,null,4));var o=v.tile.scaling.text||{},a=o.growth,c=o.min,s=o.max;l.textScaling={terms:(s*Math.pow(a,a*Math.max(i[0],i[1]/1.5))+c).toFixed(2),definitions:(s*Math.pow(a,a*Math.max(i[2],i[3]/1.5))+c).toFixed(2)},t&&console.log(JSON.stringify(l.textScaling,null,4))}function _(){console.log("dealing...");var e=D(l.matches),t=e.slice(0,Math.min(l.itemsPerBoard,e.length)),n=t.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{},{exited:!1,matched:!1,show:!0})})),r=D(n.map((function(e){var t=e.term,n=e.definition,r=Object(x["a"])(e,["term","definition"]);return Object(y["a"])(Object(y["a"])({},r),{},{content:t,answer:n,id:I.a.generate()})}))),i=Object(w["a"])(n);i=i.map((function(e){e.term;var t=e.definition,n=Object(x["a"])(e,["term","definition"]);return Object(y["a"])(Object(y["a"])({},n),{},{content:t,id:I.a.generate()})})),r=d(r,l.colorScheme),l.terms=r,l.definitions=i}function B(){console.log("shuffling..."),l.shuffling=!0,l.terms=D(l.terms),l.definitions=D(l.definitions),s()}function L(){l.playing=!1,l.correct=0,l.incorrect=0,l.score=0,l.stats=[],l.terms=[],l.definitions=[],u.value=0,_(),Object(r["o"])((function(){B(),l.playing=!0}))}function P(){console.log("game over..."),l.playing=!1,l.showBoard=!1,l.showSplash=!0,l.terms=[],l.definitions=[]}return Object(r["J"])(e,(function(e,n){t&&console.log("data changed: ",JSON.stringify(n),"=>",JSON.stringify(e));var r=e.matchId,i=e.matches,o=void 0===i?[]:i,a=e.options;a=void 0===a?{}:a;var c=a.duration,s=void 0===c?60:c,u=a.colorScheme,d=void 0===u?"":u,f=a.itemsPerBoard,m=void 0===f?9:f,g=e.title,b=void 0===g?"":g;j(o),l.colorScheme=d.toLowerCase(),l.duration=s,l.matchId=r,l.itemsPerBoard=m,l.matches=o,l.title=b})),Object(r["J"])(u,(function(e,n){t&&console.log("matched terms changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=0||(e===l.itemsPerBoard?(_(),u.value=0,Object(r["o"])((function(){return B()}))):B())})),Object(y["a"])(Object(y["a"])({config:v},Object(r["G"])(l)),{},{deal:_,gameOver:P,onDrag:b,onDrop:h,onOver:p,onTileLeft:O,shuffle:B,startGame:L})}var L=Object(r["M"])("data-v-23c3fe3e");Object(r["x"])("data-v-23c3fe3e");var P={class:"dnd-board",ref:"dndRef"};Object(r["v"])();var k=L((function(e,t,n,i,o,a){return Object(r["u"])(),Object(r["f"])("div",P,[Object(r["B"])(e.$slots,"default")],512)})),E=(n("4160"),n("c975"),n("159b"),n("2ef0")),A=n.n(E);function N(e){var t=e.active,n=e.element,i=e.throttleMs,o=void 0===i?33:i,a=e.debug,c=void 0!==a&&a,s=e.emit,u=Object(r["y"])({dragged:{},listeners:[],throttledDrag:Object(r["d"])((function(){return A.a.throttle(p,o,{trailing:!0})}))}),l={mousedown:b,mousemove:u.throttledDrag,mouseup:v,touchstart:b,touchmove:u.throttledDrag,touchend:v};function d(e){e.forEach((function(t){c&&console.log("adding ".concat(t,"...")),n.value.addEventListener(t,l[t]),u.listeners=u.listeners.concat(e).filter((function(e,t,n){return n.indexOf(e)===t}))}))}function f(e){e.forEach((function(t){c&&console.log("removing ".concat(t,"...")),n.value.removeEventListener(t,l[t]),u.listeners=u.listeners.filter((function(t){return e.indexOf(t)<0}))}))}function m(){d(["mousedown","touchstart"])}function g(){u.dragged={},f(u.listeners)}function b(e){e.stopPropagation(),c&&console.log("".concat(u.dragged.id?"".concat(e.type," (").concat(u.dragged.id,") "):"".concat(e.type),"..."));var t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(t){var n="touchstart"===e.type?e.touches[0].clientX:e.clientX,r="touchstart"===e.type?e.touches[0].clientY:e.clientY,i=t.getBoundingClientRect(),o=i.top,a=i.left;u.dragged={id:t.id,offsetX:n-a,offsetY:r-o,initialX:n,initialY:r};var s="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];d(s)}}function p(e){e.stopPropagation();var t=u.dragged,n=t.id,r=t.initialX,i=t.initialY,o=t.overId;c&&console.log("".concat(n?"".concat(e.type," (").concat(n,") "):"".concat(e.type),"..."));var a="touchmove"===e.type?e.touches[0].clientX-r:e.clientX-r,l="touchmove"===e.type?e.touches[0].clientY-i:e.clientY-i;s("drag",{dragId:n,dragX:a,dragY:l});var d=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find((function(e){return e.classList.contains("droppable")}))||{},f=d.id,m=void 0===f?"":f;o!==m&&(c&&m&&console.log("".concat(n," is over ").concat(m,"...")),s("over",{overId:m}),u.dragged=Object(y["a"])(Object(y["a"])({},u.dragged),{},{overId:m}))}function v(e){e.stopPropagation(),u.throttledDrag.cancel();var t=u.dragged,n=t.id,r=t.initialX,i=t.initialY,o=t.offsetX,a=t.offsetY;c&&console.log("".concat(n?"".concat(e.type," (").concat(n,") "):"".concat(e.type),"..."));var l="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,d="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,m=document.elementsFromPoint(l,d).find((function(e){return e.classList.contains("droppable")})),g=m&&m.getBoundingClientRect()||{},b=g.top,p=g.left;s("drop",{dragId:n,dragX:m?l-r:l,dragY:m?d-i:d,dropId:m?m.id:null,dropX:m?Math.round(p-r+o):null,dropY:m?Math.round(b-i+a):null}),u.dragged={};var v="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];f(v)}return Object(r["s"])((function(){c&&console.log("dnd mounted (".concat(Object(r["H"])(t)?"active":"inactive",")...")),Object(r["H"])(t.value)&&d(["mousedown","touchstart"])})),Object(r["J"])(t,(function(e,t){return c&&console.log("active changed: ",t,"=>",e),e&&!t?m():g()})),Object(y["a"])({},Object(r["G"])(u))}var Y={name:"DndBoard",props:["active","config"],setup:function(e,t){var n=t.emit,i=Object(r["z"])(null),o=Object(r["G"])(e),a=o.active;return Object(y["a"])(Object(y["a"])(Object(y["a"])({},e.config),N({active:a,element:i,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:n})),{},{dndRef:i})}};n("0a75");Y.render=k,Y.__scopeId="data-v-23c3fe3e";var X=Y;function q(e,t,n,i,o,a){return Object(r["u"])(),Object(r["f"])(Object(r["D"])(n.is),{active:n.active,class:a.classes,disabled:n.disabled,id:n.id,style:n.style},{default:Object(r["K"])((function(){return[Object(r["i"])("div",{class:"tile__body",innerHTML:n.content},null,8,["innerHTML"])]})),_:1},8,["active","class","disabled","id","style"])}var R=Object(r["M"])("data-v-02fd6379"),J=R((function(e,t,n,i,o,a){return Object(r["u"])(),Object(r["f"])("div",{id:n.id,class:a.classes},[Object(r["B"])(e.$slots,"default")],10,["id"])})),G={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes:function(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");G.render=J,G.__scopeId="data-v-02fd6379";var F=G,z=Object(r["M"])("data-v-da15d764"),H=z((function(e,t,n,i,o,a){return Object(r["u"])(),Object(r["f"])("div",{id:n.id,class:a.classes},[Object(r["B"])(e.$slots,"default")],10,["id"])})),U={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes:function(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");U.render=H,U.__scopeId="data-v-da15d764";var $=U,K={name:"Tile",components:{Draggable:F,Droppable:$},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},id:{required:!1},is:{type:String,required:!0},style:{required:!1},type:{type:String,required:!1}},computed:{classes:function(){var e;return e={tile:!0},Object(j["a"])(e,"tile--".concat(this.type),this.type),Object(j["a"])(e,this.color,this.color),e}}};K.render=q;var W=K,Z=Object(r["M"])("data-v-1b81a3ee");Object(r["x"])("data-v-1b81a3ee");var Q={class:"timer"},V={class:"timer__wrapper"},ee={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},te={class:"timer__circle"};Object(r["v"])();var ne=Z((function(e,t,n,i,o,a){return Object(r["u"])(),Object(r["f"])(r["b"],Object(r["n"])({duration:{enter:"".concat(e.timeouts.enter),leave:"".concat(e.timeouts.leave)},name:"timer",onBeforeEnter:a.beforeEnter,onAfterEnter:a.afterEnter,onAfterLeave:a.afterLeave},e.$attrs),{default:Z((function(){return[Object(r["L"])(Object(r["i"])("div",null,[Object(r["i"])("div",Q,[Object(r["i"])(r["b"],{appear:"",duration:{enter:"".concat(e.timeouts.change),leave:"".concat(e.timeouts.change)},name:"scoring",onAfterLeave:e.endScoreChange},{default:Z((function(){return[Object(r["L"])(Object(r["i"])("div",V,[(Object(r["u"])(),Object(r["f"])("svg",ee,[Object(r["i"])("g",te,[Object(r["i"])("circle",{class:["timer__path-elapsed",a.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(r["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[e.severity,a.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(r["i"])("span",{class:["timer__label",a.scoreClass]},Object(r["F"])(n.score||e.formatted),3)],512),[[r["I"],!e.scoring]])]})),_:1},8,["duration","onAfterLeave"])])],512),[[r["I"],n.active]])]})),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave"])})),re={ALERT:"alert",WARN:"warn",SUCCESS:"success"},ie={UP:"up",DOWN:"down"};function oe(e){var t=e.duration,n=e.score,i=e.interval,o=e.warn,a=e.alert,c=e.debug,s=void 0!==c&&c,u=e.emit,l=void 0===u?void 0:u,d=Object(r["y"])({elapsed:0,expired:Object(r["d"])((function(){return d.remaining<=0})),formatted:Object(r["d"])((function(){var e=Math.floor(d.remaining/6e4),t=Math.floor(d.remaining%6e4/1e3);return t<10?"".concat(e,":0").concat(t):"".concat(e,":").concat(t)})),intervalId:null,progress:Object(r["d"])((function(){return Math.round(d.remaining/(1e3*Object(r["H"])(t))*1e4)/100})),remaining:Object(r["d"])((function(){return 1e3*Object(r["H"])(t)-d.elapsed})),scoring:!1,scoringStatus:"",SCORING_STATUS:ie,severity:Object(r["d"])((function(){return d.progress<=o?d.progress<=a?re.ALERT:re.WARN:re.SUCCESS}))});function f(){s&&console.log("timer start..."),d.elapsed=0,d.intervalId=setInterval((function(){d.elapsed+=i}),i)}function m(e){d.elapsed=e}function g(){s&&console.log("timer scoring end..."),d.scoring=!1,d.scoringStatus=""}function b(){s&&console.log("timer end..."),d.intervalId&&(clearInterval(d.intervalId),d.intervalId=null)}return Object(r["J"])(n,(function(e,t){s&&console.log("score changed: ",t,"=>",e),d.scoring=!0,d.scoringStatus=e>t?ie.UP:ie.DOWN})),Object(r["J"])((function(){return d.expired}),(function(e,t){e&&!t&&(s&&console.log("timer expired: ",t,"=>",e),b(),l("timer-expired"))})),Object(r["q"])((function(){s&&console.log("timer cleaning up..."),b()})),Object(y["a"])(Object(y["a"])({},Object(r["G"])(d)),{},{startTimer:f,endTimer:b,setElapsed:m,endScoreChange:g})}var ae=283,ce={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup:function(e,t){var n=t.emit,i=Object(r["G"])(e),o=i.duration,a=i.score,c=oe({duration:o,score:a,interval:e.config.timeouts.interval,warn:e.config.thresholds.warn,alert:e.config.thresholds.alert,debug:e.config.debug,emit:n});return Object(y["a"])(Object(y["a"])({},c),e.config)},computed:{scoreClass:function(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray:function(){var e=this.progress/100-1/this.duration*(1-this.progress/100);return"".concat((e*ae).toFixed(0)," ").concat(ae)}},methods:{beforeEnter:function(){this.debug&&console.log("before entered..."),this.setElapsed(0)},afterEnter:function(){this.debug&&console.log("timer entered..."),this.startTimer()},afterLeave:function(){this.debug&&console.log("timer left...")}}};n("42b6");ce.render=ne,ce.__scopeId="data-v-1b81a3ee";var se=ce,ue={name:"Game",components:{DndBoard:X,Tile:W,Timer:se},props:["match"],setup:function(e){var t=Object(r["G"])(e),n=t.match;return Object(y["a"])({},B(n))},methods:{boardClasses:function(e){var t;return t={"tile-board":!0},Object(j["a"])(t,"tile-board--".concat(e),e),Object(j["a"])(t,"tile-board--".concat(this.itemsPerBoard),this.itemsPerBoard),Object(j["a"])(t,"tile-board--".concat(this.colorScheme),this.colorScheme),Object(j["a"])(t,"tile-board--disabled",!this.playing),t},boardStyles:function(e){return Object(y["a"])({},this.textScaling[e]&&{"--text-scale-factor":"".concat(this.textScaling[e])})},tileAfterLeave:function(e,t){this.config.game.debug&&console.log("".concat(t," (").concat(e.id,") leaving...")),this.playing&&this.onTileLeft(e.id,t)}}};n("ed88");ue.render=O;var le=ue,de={name:"Match",components:{Game:le},computed:{matchId:function(){return this.$route.params.id}},data:function(){return{match:{}}},methods:{},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p(e.matchId);case 2:n=t.sent,e.match=n.data;case 4:case"end":return t.stop()}}),t)})))()}};n("0244");de.render=u,de.__scopeId="data-v-ffe2064c";var fe=de,me=Object(r["M"])("data-v-b788fbbe");Object(r["x"])("data-v-b788fbbe");var ge={class:"p-4"};Object(r["v"])();var be=me((function(e,t,n,i,o,a){var c=Object(r["C"])("router-link");return Object(r["u"])(),Object(r["f"])("div",ge,[Object(r["i"])("ul",null,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(o.games,(function(e){return Object(r["u"])(),Object(r["f"])("li",{key:e.id},[Object(r["i"])(c,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:me((function(){return[Object(r["h"])(Object(r["F"])(e.title),1)]})),_:2},1032,["to"])])})),128))])])}));f.a.defaults.headers.get["Content-Type"]="application/json",f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var pe={name:"Matches",data:function(){return{games:[]}},methods:{fetchData:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/matches/",{timeout:3e4});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:n=t.sent,r=n.map((function(e){return{id:e.matchId,title:e.title}})),e.games=r;case 5:case"end":return t.stop()}}),t)})))()}};n("1c66");pe.render=be,pe.__scopeId="data-v-b788fbbe";var ve=pe,he=[{path:"/",name:"matches",component:ve,props:!1},{path:"/match/:id",name:"match",component:fe,props:!1}],Oe=Object(c["a"])({history:Object(c["b"])(),routes:he}),je=Oe;Object(r["e"])(a).use(je).mount("#quizdini")},6660:function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},ed88:function(e,t,n){"use strict";n("32e3")},ef2c:function(e,t,n){"use strict";n("cb08")},f871:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app-legacy.5f86b159.js.map