(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17c0":function(t,e,n){},"1c66":function(t,e,n){"use strict";n("3f69")},2089:function(t,e,n){"use strict";n("70f3")},"253b":function(t,e,n){},"34f1":function(t,e,n){"use strict";n("3948")},3886:function(t,e,n){"use strict";n("253b")},3948:function(t,e,n){},"3f69":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(t,e,n,i,a,o){var s=Object(r["A"])("router-view");return Object(r["s"])(),Object(r["f"])(s)}var a={name:"App"};n("9cdc");a.render=i;var o=a,s=n("6c02");function c(t,e,n,i,a,o){return Object(r["s"])(),Object(r["f"])("pre",null,"     "+Object(r["D"])(JSON.stringify(a.globalState,null,4))+"\n   ",1)}n("96cf");var u=n("1da1"),d=n("5530"),l=n("bc3a"),f=n.n(l);f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var m={timeout:3e4},h=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.url,r=e.config,i=void 0===r?m:r,console.log("url",n),console.log("config",i),t.prev=3,t.next=6,f.a.get(n,i);case 6:return a=t.sent,t.abrupt("return",{data:a.data});case 10:return t.prev=10,t.t0=t["catch"](3),t.abrupt("return",{error:t.t0.response.data});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),p="/api/match",g={fetch:function(t){return h({url:"".concat(p,"/").concat(t)})}},v=(n("99af"),n("4de4"),n("7db0"),n("d81d"),n("fb6a"),n("2909")),b=n("15fd"),O=n("8dee"),j=n.n(O),y={dnd:{throttleMs:33.33},game:{enterMs:1e3,leaveMs:1e3},tile:{enterMs:800,hitMs:800,leaveMs:0,missMs:800},timer:{intervalMs:100,changeMs:250,enterMs:1e3,leaveMs:1e3}},M=void 0,w=Object(r["w"])({canDnD:!1,colorScheme:null,correct:0,definitions:[],duration:60,gameId:null,incorrect:0,itemsPerBoard:9,matches:[],score:0,stats:[],terms:[],title:null}),x=function(){return w.canDnD},D=function(){return w.colorScheme},I=function(){return y},T=function(){return w.correct},S=function(){return w.definitions},_=function(){return w.duration},P=function(){return w.gameId},B=function(){return w.incorrect},L=function(){return w.itemsPerBoard},A=function(){return w.matches},C=function(){return w.score},E=function(){return w.stats},k=function(){return w.terms},N=function(){return w.title},R=function(t){return w.canDnD=t},X=function(t){return w.colorScheme=t},Y=function(t){return w.correct=t},q=function(t){return w.definitions=t},z=function(t){return w.duration=t},G=function(t){return w.gameId=t},J=function(t){return w.incorrect=t},$=function(t){return w.itemsPerBoard=t},F=function(t){return w.matches=t},H=function(t){return w.score=t},Z=function(t){return w.stats=t},K=function(t){return w.terms=t},Q=function(t){return w.title=t},U={canDnD:x,colorScheme:D,config:I,correct:T,definitions:S,duration:_,gameId:P,incorrect:B,itemsPerBoard:L,matches:A,score:C,stats:E,terms:k,title:N},V={setCanDnD:R,setColorScheme:X,setCorrect:Y,setDefinitions:q,setDuration:z,setGameId:G,setIncorrect:J,setItemsPerBoard:$,setMatches:F,setScore:H,setStats:Z,setTerms:K,setTitle:Q},W=function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t},tt=function(t,e,n,r,i,a,o){return{"--hit-start-tx":t+"px","--hit-start-ty":e+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":i+"px","--hit-end-tz":a+"px","--hit-duration":o+"ms"}},et=function(t,e,n){return Object(d["a"])({},M.translate(t,e,n))},nt=function(t){console.log("loading data...");var e=t.matchId,n=t.matches,r=void 0===n?[]:n,i=t.options;i=void 0===i?{}:i;var a=i.duration,o=void 0===a?60:a,s=i.colorScheme,c=void 0===s?"":s,u=i.itemsPerBoard,d=void 0===u?9:u,l=t.title,f=void 0===l?"":l;w.colorScheme=c,w.duration=o,w.gameId=e,w.itemsPerBoard=d,w.matches=r,w.title=f},rt=function(){console.log("dealing...");var t=W(w.matches),e=t.slice(0,Math.min(w.itemsPerBoard,t.length)),n=e.map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{matched:!1,show:!0})})),r=W(n.map((function(t){var e=t.term,n=t.definition,r=Object(b["a"])(t,["term","definition"]);return Object(d["a"])(Object(d["a"])({},r),{},{content:e,answer:n,id:j.a.generate()})}))),i=Object(v["a"])(n);i=i.map((function(t){t.term;var e=t.definition,n=Object(b["a"])(t,["term","definition"]);return Object(d["a"])(Object(d["a"])({},n),{},{content:e,id:j.a.generate()})})),w.terms=r,w.definitions=i},it=function(){console.log("shuffling..."),w.terms=W(w.terms),w.definitions=W(w.definitions)},at=function(t,e){var n=w.terms.find((function(e){return e.id===t}))||{},r=n.answer,i=w.definitions.find((function(t){return t.id===e}))||{},a=i.content;return!!r&&!!a&&r===a},ot=function(t){var e={id:null,x:null,y:null},n=t.drag||e,r=n.id,i=n.x,a=n.y,o=t.drop||e,s=o.id,c=o.x,u=o.y,d=!!s&&at(r,s);if(w.terms=w.terms.map((function(t){return t.id===r&&(t.matched=d,t.className=d?"hit":"miss",t.style=d?tt(i,a,1,c,u,1,I.tile.hitMs):et(0,0,0)),t})),s){w.definitions=w.definitions.map((function(t){return t.id===s&&(t.matched=d,t.className=d?"hit":""),t}));var l=w.terms.find((function(t){return t.id===r}))||{},f=l.content;w.score=Math.max(d?w.score+1:w.score-1,0);var m=w.stats.filter((function(t){return t.term===f})).length;w.stats=m?w.stats.map((function(t){return t.term===f?{term:f,hit:d?t.hit+1:t.hit,miss:d?t.miss:t.miss+1}:t})):w.stats.concat({term:f,hit:d?1:0,miss:d?0:1})}},st={load:nt,deal:rt,shuffle:it,drop:ot,isMatch:at},ct={name:"Match",data:function(){return{globalState:w}},computed:Object(d["a"])(Object(d["a"])({},U),{},{matchId:function(){return this.$route.params.id}}),methods:Object(d["a"])(Object(d["a"])({},V),st),created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.matchId),e.next=3,g.fetch(t.matchId);case 3:n=e.sent,t.load(n.data),t.deal(),setTimeout((function(){t.shuffle(),t.setCanDnD(!0)}),1e3);case 7:case"end":return e.stop()}}),e)})))()}};ct.render=c;var ut=ct,dt=Object(r["J"])("data-v-55a1f694");Object(r["v"])("data-v-55a1f694");var lt={class:"full-page full-page--match"};Object(r["t"])();var ft=dt((function(t,e,n,i,a,o){var s=Object(r["A"])("MatchGame");return Object(r["s"])(),Object(r["f"])("div",lt,[a.showBoard?(Object(r["s"])(),Object(r["f"])(s,{key:0,"color-scheme":a.colorScheme,duration:a.duration,"items-per-board":a.itemsPerBoard,matches:a.matches,config:o.config,onGameOver:o.onGameOver},null,8,["color-scheme","duration","items-per-board","matches","config","onGameOver"])):Object(r["g"])("",!0)])})),mt=(n("b0c0"),Object(r["J"])("data-v-3f7deb86"));Object(r["v"])("data-v-3f7deb86");var ht={id:"match-game"},pt={id:"match-timer"};Object(r["t"])();var gt=mt((function(t,e,n,i,a,o){var s=Object(r["A"])("MatchTimer"),c=Object(r["A"])("MatchTileBoard"),u=Object(r["A"])("DnD");return Object(r["s"])(),Object(r["f"])(r["b"],{appear:"",css:!0,duration:{enter:"".concat(n.config.game.enterMs),leave:"".concat(n.config.game.leaveMs)},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onAfterEnter:o.onEntered,onAfterLeave:o.onLeft},{default:mt((function(){return[Object(r["i"])("div",ht,[Object(r["i"])("div",pt,[Object(r["i"])(s,{"change-ms":n.config.timer.changeMs,duration:n.duration,"enter-ms":n.config.timer.enterMs,"interval-ms":n.config.timer.intervalMs,"leave-ms":n.config.timer.leaveMs,playing:a.playing,score:a.score,onTimerExpired:o.onTimerExpired},null,8,["change-ms","duration","enter-ms","interval-ms","leave-ms","playing","score","onTimerExpired"])]),Object(r["i"])(u,{id:"match-dnd-board",disabled:o.inTransition,playing:a.playing,"throttle-ms":n.config.dnd.throttleMs,onDrag:o.onDrag,onOver:o.onOver,onDrop:o.onDrop},{default:mt((function(){return[Object(r["i"])(c,{componentName:"Draggable",id:"terms","tile-type":"term",disabled:o.inTransition,"enter-ms":n.config.tile.enterMs,"leave-ms":n.config.tile.leaveMs,playing:a.playing,tiles:a.terms,"tile-count":n.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"]),Object(r["i"])(c,{componentName:"Droppable",id:"definitions","tile-type":"definition",disabled:o.inTransition,"enter-ms":n.config.tile.enterMs,"leave-ms":n.config.tile.leaveMs,playing:a.playing,tiles:a.definitions,"tile-count":n.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"])]})),_:1},8,["disabled","playing","throttle-ms","onDrag","onOver","onDrop"])])]})),_:1},8,["duration","onAfterEnter","onAfterLeave"])}));n("a9e3"),n("a434");function vt(t,e){var n=["red","orange","yellow","lime","green","cyan","blue","purple","magenta","navy","gray","teal"];switch(e.toLowerCase()){case"rainbow":return t.map((function(t){var e=Math.floor(Math.random()*n.length),r=n[e];return n.splice(e,1),Object(d["a"])(Object(d["a"])({},t),{},{color:r})}));default:return t.map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{color:""})}))}}function bt(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t}function Ot(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return t.map((function(t){return t[n]!==e[n]?t:Object(d["a"])(Object(d["a"])({},t),e)}))}function jt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!Object.prototype.hasOwnProperty.call(e,n))return t;var i=t.find((function(t){return t[n]===e[n]})),a=r?r(i):e;return i?Ot(t,a,n):t.concat(a)}var yt=Object(r["J"])("data-v-ea25e368"),Mt=yt((function(t,e,n,i,a,o){return Object(r["s"])(),Object(r["f"])("div",Object(r["n"])({id:n.id,class:[o.classes]},Object(r["E"])(o.listeners)),[Object(r["z"])(t.$slots,"default")],16,["id"])})),wt=n("2ef0"),xt=n.n(wt),Dt={name:"DnD",props:{disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},playing:{type:Boolean,required:!0,default:!1},throttleMs:{type:Number,required:!0,default:33.333}},data:function(){return{dragged:{active:!1}}},computed:{canDrag:function(){return this.playing&&!this.disabled},classes:function(){return{board:!0}},dragging:function(){var t=this.dragged.active,e=void 0!==t&&t;return e},listeners:function(){var t=this;return this.playing?{mousedown:function(e){return t.dragStart(e)},touchstart:function(e){return t.dragStart(e)},mouseup:function(e){return t.dragEnd(e)},touchend:function(e){return t.dragEnd(e)},mousemove:function(e){return t.throttledDrag(e)},touchmove:function(e){return t.throttledDrag(e)}}:{}},throttledDrag:function(){return xt.a.throttle(this.drag,this.throttleMs,{trailing:!0})}},methods:{dragStart:function(t){if(t.preventDefault(),this.canDrag){var e=t.target.classList.contains("draggable")?t.target:t.target.closest(".draggable");if(e){var n="touchstart"===t.type?t.touches[0].clientX:t.clientX,r="touchstart"===t.type?t.touches[0].clientY:t.clientY,i=e.getBoundingClientRect(),a=i.top,o=i.left;this.dragged={active:!0,dragId:e.id,offsetX:n-o,offsetY:r-a,initialX:n,initialY:r}}}},drag:function(t){if(t.preventDefault(),this.canDrag&&this.dragging){var e=this.dragged,n=e.dragId,r=e.initialX,i=e.initialY,a=e.overId,o="touchmove"===t.type?t.touches[0].clientX-r:t.clientX-r,s="touchmove"===t.type?t.touches[0].clientY-i:t.clientY-i;this.$emit("drag",{dragId:n,dragX:o,dragY:s});var c=document.elementsFromPoint("touchmove"===t.type?t.touches[0].clientX:t.clientX,"touchmove"===t.type?t.touches[0].clientY:t.clientY).find((function(t){return t.classList.contains("droppable")}))||{},u=c.id,l=void 0===u?"":u;a!==l&&(this.$emit("over",{dropId:l}),this.dragged=Object(d["a"])(Object(d["a"])({},this.dragged),{},{overId:l}))}},dragEnd:function(t){if(t.preventDefault(),this.throttledDrag.cancel(),this.canDrag&&this.dragging){var e=this.dragged,n=e.dragId,r=e.initialX,i=e.initialY,a=e.offsetX,o=e.offsetY,s="touchend"===t.type?t.changedTouches[0].clientX:t.clientX,c="touchend"===t.type?t.changedTouches[0].clientY:t.clientY,u=document.elementsFromPoint(s,c).find((function(t){return t.classList.contains("droppable")})),d=u||{},l=d.id,f=u&&u.getBoundingClientRect()||{},m=f.top,h=f.left;this.$emit("drop",{drag:{id:n,x:u?s-r:s,y:u?c-i:c},drop:u?{id:l,x:Math.round(h-r+a),y:Math.round(m-i+o)}:null}),this.dragged={active:!1}}}},mounted:function(){console.log(this.$options.name,"mounted...")}};n("34f1");Dt.render=Mt,Dt.__scopeId="data-v-ea25e368";var It=Dt,Tt=Object(r["J"])("data-v-4ef3aa98"),St=Tt((function(t,e,n,i,a,o){return Object(r["s"])(),Object(r["f"])(r["c"],{appear:"",tag:"div",id:n.id,class:[o.classes],duration:{enter:"".concat(n.enterMs),leave:"".concat(n.leaveMs)},css:!0,"enter-class":"fade-in-start","enter-active-class":"fade-in-active","enter-to-class":"fade-in-end","move-class":o.transitionGroup,onAfterEnter:o.onEntered,onLeave:o.onLeft},{default:Tt((function(){return[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(o.filteredTiles,(function(t){return Object(r["s"])(),Object(r["f"])(Object(r["B"])(n.componentName),{key:t.id,content:t.content,disabled:n.disabled,id:t.id,style:[t.style],class:[o.tileClasses,n.tileType,t.className]},null,8,["content","disabled","id","style","class"])})),128))]})),_:1},8,["id","class","duration","move-class","onAfterEnter","onLeave"])})),_t=n("ade3"),Pt=Object(r["J"])("data-v-0e4639df"),Bt=Pt((function(t,e,n,i,a,o){return Object(r["s"])(),Object(r["f"])("div",{id:n.id,innerHTML:n.content},null,8,["id","innerHTML"])})),Lt={name:"Draggable",props:["content","id"]};n("f999");Lt.render=Bt,Lt.__scopeId="data-v-0e4639df";var At=Lt,Ct=Object(r["J"])("data-v-14ad459b"),Et=Ct((function(t,e,n,i,a,o){return Object(r["s"])(),Object(r["f"])("div",{id:n.id,innerHTML:n.content},null,8,["id","innerHTML"])})),kt={name:"Droppable",props:["content","disabled","id"]};n("3886");kt.render=Et,kt.__scopeId="data-v-14ad459b";var Nt=kt,Rt={name:"MatchTileBoard",components:{Draggable:At,Droppable:Nt},props:["componentName","disabled","duration","enterMs","id","leaveMs","playing","tiles","tileType","tileCount"],computed:{transitionGroup:function(){return this.disabled?"slide":"no-move-list"},classes:function(){return Object(_t["a"])({"tile-board":!0,"tile-board--match":!0,"tile-board--disabled":!this.playing},"tiles-".concat(this.tileCount),this.tileCount)},filteredTiles:function(){return this.tiles.filter((function(t){return t.show}))},tileClasses:function(){return{tile:!0,draggable:"Draggable"===this.componentName,droppable:"Droppable"===this.componentName,disabled:this.disabled}}},methods:{onEntered:function(){console.log("entered!")},onLeft:function(t){console.log("left!"),t.style.display="none"}}};n("2089");Rt.render=St,Rt.__scopeId="data-v-4ef3aa98";var Xt=Rt,Yt=Object(r["J"])("data-v-74f05a30");Object(r["v"])("data-v-74f05a30");var qt={class:"timer__wrapper"},zt={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},Gt={class:"timer__circle"};Object(r["t"])();var Jt=Yt((function(t,e,n,i,a,o){return Object(r["s"])(),Object(r["f"])(r["b"],{duration:{enter:"".concat(n.enterMs),leave:"".concat(n.leaveMs)},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",css:!0,onAfterEnter:o.onEntered,onAfterLeave:o.onLeft},{default:Yt((function(){return[Object(r["I"])(Object(r["i"])("div",{class:"timer",id:n.id},[Object(r["i"])(r["b"],{appear:"",css:!0,duration:{enter:"".concat(n.changeMs),leave:"".concat(n.changeMs)},"leave-active-class":"score-out-active","leave-class":"score-out-start","leave-to-class":"score-out-end",onAfterLeave:o.endScoreChange},{default:Yt((function(){return[Object(r["I"])(Object(r["i"])("div",qt,[(Object(r["s"])(),Object(r["f"])("svg",zt,[Object(r["i"])("g",Gt,[Object(r["i"])("circle",{class:["timer__path-elapsed",a.hitMiss],cx:"50",cy:"50",r:"45"},null,2),Object(r["i"])("path",{"stroke-dasharray":o.circleDasharray,class:["timer__path-remaining",[o.severity,a.hitMiss]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(r["i"])("span",{class:["timer__label",a.hitMiss]},Object(r["D"])(n.score||o.formattedTimeLeft),3)],512),[[r["G"],!a.scoreChanging]])]})),_:1},8,["duration","onAfterLeave"])],8,["id"]),[[r["G"],n.playing]])]})),_:1},8,["duration","onAfterEnter","onAfterLeave"])})),$t=(n("b680"),283),Ft=40,Ht=20,Zt={name:"MatchTimer",props:["active","changeMs","duration","enterMs","id","intervalMs","leaveMs","playing","score"],data:function(){return{elapsed:0,hitMiss:null,intervalId:null,scoreChanging:!1}},computed:{circleDasharray:function(){var t=this.progressPct/100-1/this.duration*(1-this.progressPct/100);return"".concat((t*$t).toFixed(0)," 283")},expired:function(){return this.remaining<=0},formattedTimeLeft:function(){var t=Math.floor(this.remaining/6e4),e=Math.floor(this.remaining%6e4/1e3);return e<10&&(e="0".concat(e)),"".concat(t,":").concat(e)},progressPct:function(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining:function(){return 1e3*this.duration-this.elapsed},severity:function(){return this.progressPct<=Ft?this.progressPct<=Ht?"alert":"warn":"success"}},methods:{onEntered:function(t){console.log("timer entered..."),this.startTimer()},onLeft:function(t){console.log("timer left..."),this.elapsed=0},startTimer:function(){var t=this;this.elapsed=0,this.intervalId=setInterval((function(){return t.elapsed+=t.intervalMs}),this.intervalMs)},endTimer:function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange:function(t){console.log("score changed ending..."),this.scoreChanging=!1,this.hitMiss=null}},watch:{score:function(t,e){console.log("score changed!"),this.scoreChanging=!0,this.hitMiss=t>e?"hit":"miss"},expired:function(t,e){!e&&t&&(this.endTimer(),this.$emit("timer-expired"))}},mounted:function(){console.log(this.$options.name,"mounted...")},unmounted:function(){this.endTimer()}};n("a9ae");Zt.render=Jt,Zt.__scopeId="data-v-74f05a30";var Kt=Zt,Qt={name:"MatchGame",components:{DnD:It,MatchTileBoard:Xt,MatchTimer:Kt},props:{colorScheme:{type:String,required:!1,default:"rainbow"},config:{type:Object,required:!0},duration:{type:Number,required:!0,default:60},itemsPerBoard:{type:Number,required:!0,default:9},matches:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{correct:0,definitions:[],incorrect:0,playing:!1,score:0,stats:[],terms:[],transitioning:!1}},computed:{inTransition:{get:function(){return this.transitioning},set:function(t){this.transitioning=t}},progress:function(){return this.correct/this.itemsPerBoard}},methods:{deal:function(){console.log("dealing...");var t=bt(this.matches),e=t.slice(0,Math.min(this.itemsPerBoard,t.length)),n=e.map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{matched:!1,show:!0})})),r=n.map((function(t){var e=t.term,n=t.definition,r=Object(b["a"])(t,["term","definition"]);return Object(d["a"])(Object(d["a"])({},r),{},{content:e,answer:n,id:j.a.generate()})}));r=vt(r,this.colorScheme),this.terms=bt(r);var i=Object(v["a"])(n);i=i.map((function(t){t.term;var e=t.definition,n=Object(b["a"])(t,["term","definition"]);return Object(d["a"])(Object(d["a"])({},n),{},{content:e,id:j.a.generate()})})),this.definitions=bt(i)},hitStyle:function(t,e,n,r,i,a,o){return{"--hit-start-tx":t+"px","--hit-start-ty":e+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":i+"px","--hit-end-tz":a+"px","--hit-duration":o+"ms"}},isMatch:function(t,e){var n=function(t){return function(e){return e.id===t}},r=this.terms.find(n(t))||{},i=r.answer,a=this.definitions.find(n(e))||{},o=a.content;return!!i&&!!o&&i===o},missStyle:function(t,e,n){return Object(d["a"])({},this.translate(t,e,n))},moveStyle:function(t,e,n){return Object(d["a"])({},this.translate(t,e,n))},onDrag:function(t){var e=this,n=t.dragId,r=t.dragX,i=t.dragY;this.terms=this.terms.map((function(t){return t.style=t.id===n?e.moveStyle(r,i,1):t.style,t.className=t.id===n?"drag":t.className,t}))},onDrop:function(t){var e=this,n={id:null,x:null,y:null},r=t.drag||n,i=r.id,a=r.x,o=r.y,s=t.drop||n,c=s.id,u=s.x,l=s.y,f=function(t,e){return function(n){return n.show=n.id===t?e:n.show,n}},m=!!c&&this.isMatch(i,c);if(this.terms=Ot(this.terms,{id:i,matched:m,className:m?"hit":"miss",style:m?this.hitStyle(a,o,1,u,l,1,this.config.tile.hitMs):this.missStyle(0,0,0)}),c){this.definitions=Ot(this.definitions,Object(d["a"])({id:c,className:m?"hit":""},m&&{matched:!0})),this.score=Math.max(m?this.score+1:this.score-1,0);var h=this.terms.find((function(t){return t.id===i}))||{},p=h.content;this.stats=jt(this.stats,{term:p},"term",(function(t){return t?{term:p,hit:m?t.hit+1:t.hit,miss:m?t.miss:t.miss+1}:{term:p,hit:m?1:0,miss:m?0:1}})),m?(this.inTransition=!0,setTimeout((function(){e.terms=e.terms.map(f(i,!1)),e.definitions=e.definitions.map(f(c,!1)),e.correct++,e.inTransition=!1}),this.config.tile.hitMs)):this.incorrect++}},onEntered:function(){console.log("game entered..."),this.deal(),this.playing=!0},onLeft:function(){console.log("game left....")},onOver:function(t){var e=t.dropId;this.definitions=this.definitions.map((function(t){return t.className=t.id!==e||t.matched?"":"over",t}))},onTimerExpired:function(){var t=this;console.log("timer expired..."),this.playing=!1,setTimeout((function(){t.$emit("game-over",{correct:t.correct,incorrect:t.incorrect,data:t.stats,score:t.score})}),2e3)},translate:function(t,e,n){return{transform:"translate3d("+t+"px, "+e+"px, "+n+"px)"}}},watch:{progress:function(t,e){var n=this;e&&Math.floor(t)!==Math.floor(e)?(console.log("new round...",e,"vs",t),this.deal(),this.playing=!0):(console.log("shuffling..."),this.inTransition=!0,this.terms=bt(this.terms),this.definitions=bt(this.definitions),setTimeout((function(){n.inTransition=!1}),this.config.tile.shuffleMs))}}};n("aef4");Qt.render=gt,Qt.__scopeId="data-v-3f7deb86";var Ut=Qt;f.a.defaults.headers.get["Content-Type"]="application/json",f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var Vt={dnd:{throttleMs:33.33},game:{enterMs:1e3,leaveMs:1e3},tile:{enterMs:800,hitMs:800,leaveMs:0,missMs:800},timer:{intervalMs:100,changeMs:250,enterMs:1e3,leaveMs:1e3}},Wt={name:"Match",components:{MatchGame:Ut},data:function(){return{colorScheme:"",correct:0,definitions:[],duration:60,gameId:null,itemsPerBoard:0,matches:[],showBoard:!1,showSplash:!0,title:""}},computed:{config:function(){return Vt},game:{get:function(){return{colorScheme:this.colorScheme,duration:this.duration,gameId:this.gameId,itemsPerBoard:this.itemsPerBoard,matches:this.matches,title:this.title}},set:function(t){var e=t.matchId,n=t.matches,r=void 0===n?[]:n,i=t.options;i=void 0===i?{}:i;var a=i.duration,o=void 0===a?60:a,s=i.colorScheme,c=void 0===s?"":s,u=i.itemsPerBoard,d=void 0===u?9:u,l=t.title,f=void 0===l?"":l;this.colorScheme=c,this.duration=o,this.gameId=e,this.itemsPerBoard=d,this.matches=r,this.title=f}},matchId:function(){return this.$route.params.id}},methods:{fetchMatch:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/match/"+t.matchId,{timeout:1e4});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},postPing:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("/api/ping",t,{timeout:1e4});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onGameOver:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("on game over..."),e.showBoard=!1,n.next=4,e.postPing({gameId:e.matchId,gameType:"M",results:t});case 4:r=n.sent,console.log(JSON.stringify(r)),setTimeout((function(){e.showBoard=!0}),5e3);case 7:case"end":return n.stop()}}),n)})))()}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMatch();case 2:n=e.sent,t.game=n,t.showBoard=!0;case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){console.log(this.$options.name,"mounted...")}};n("5e4a");Wt.render=ft,Wt.__scopeId="data-v-55a1f694";var te=Wt,ee=Object(r["J"])("data-v-b788fbbe");Object(r["v"])("data-v-b788fbbe");var ne={class:"p-4"};Object(r["t"])();var re=ee((function(t,e,n,i,a,o){var s=Object(r["A"])("router-link");return Object(r["s"])(),Object(r["f"])("div",ne,[Object(r["i"])("ul",null,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(a.games,(function(t){return Object(r["s"])(),Object(r["f"])("li",{key:t.id},[Object(r["i"])(s,{class:"game-link game-link--match",to:{name:"match",params:{id:t.id}}},{default:ee((function(){return[Object(r["h"])(Object(r["D"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])}));f.a.defaults.headers.get["Content-Type"]="application/json",f.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var ie={name:"Matches",data:function(){return{games:[]}},methods:{fetchData:function(){return Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("/api/matches/",{timeout:3e4});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:n=e.sent,r=n.map((function(t){return{id:t.matchId,title:t.title}})),t.games=r;case 5:case"end":return e.stop()}}),e)})))()}};n("1c66");ie.render=re,ie.__scopeId="data-v-b788fbbe";var ae=ie,oe=[{path:"/",name:"matches",component:ae,props:!1},{path:"/match/:id",name:"match",component:te,props:!1},{path:"/newmatch/:id",name:"newmatch",component:ut,props:!1}],se=Object(s["a"])({history:Object(s["b"])(),routes:oe}),ce=se;Object(r["e"])(o).use(ce).mount("#quizdini")},"58e1":function(t,e,n){},"5e4a":function(t,e,n){"use strict";n("58e1")},"70f3":function(t,e,n){},"9cdc":function(t,e,n){"use strict";n("c701")},a9ae:function(t,e,n){"use strict";n("e57b")},aef4:function(t,e,n){"use strict";n("b884")},b884:function(t,e,n){},c701:function(t,e,n){},e57b:function(t,e,n){},f999:function(t,e,n){"use strict";n("17c0")}});
//# sourceMappingURL=app-legacy.aa2ceb0a.js.map