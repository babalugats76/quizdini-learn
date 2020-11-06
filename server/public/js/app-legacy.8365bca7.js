(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"015f":function(e,t,n){},1795:function(e,t,n){"use strict";n("4be5")},"17c0":function(e,t,n){},"1c66":function(e,t,n){"use strict";n("3f69")},2089:function(e,t,n){"use strict";n("70f3")},"253b":function(e,t,n){},3886:function(e,t,n){"use strict";n("253b")},"3f69":function(e,t,n){},"4be5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,a,o){var c=Object(r["G"])("router-view");return Object(r["y"])(),Object(r["f"])(c)}var a={name:"App"};n("9cdc");a.render=i;var o=a,c=n("6c02"),s=Object(r["P"])("data-v-41558846");Object(r["B"])("data-v-41558846");var u={class:"match-game"};Object(r["z"])();var d=s((function(e,t,n,i,a,o){var c=Object(r["G"])("Timer");return Object(r["y"])(),Object(r["f"])("div",u,[Object(r["i"])("button",{onClick:t[1]||(t[1]=function(t){return e.setDuration(5)})},"Set Duration"),Object(r["i"])("button",{onClick:t[2]||(t[2]=function(t){return e.setScore(1)})},"1"),Object(r["i"])("button",{onClick:t[3]||(t[3]=function(t){return e.setScore(0)})},"0"),Object(r["i"])("button",{onClick:t[4]||(t[4]=function(t){return e.setPlaying(!0)})},"Set to Play"),Object(r["i"])(c)])})),l=(n("96cf"),n("1da1")),f=n("5530"),h=n("bc3a"),m=n.n(h);m.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var g={timeout:3e4},p=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.url,r=t.config,i=void 0===r?g:r,console.log("url",n),console.log("config",i),e.prev=3,e.next=6,m.a.get(n,i);case 6:return a=e.sent,e.abrupt("return",{data:a.data});case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",{error:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),v="/api/match",b={fetch:function(e){return p({url:"".concat(v,"/").concat(e)})}},O={dnd:{timeouts:{throttle:33}},game:{timeouts:{enter:1e3,leave:1e3}},tile:{timeouts:{enter:800,hit:800,leave:0,miss:800,shuffle:500}},timer:{debug:!0,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}},j=Object(r["C"])({canDnD:!1,colorScheme:null,correct:0,definitions:[],duration:60,gameId:null,incorrect:0,itemsPerBoard:9,matches:[],playing:!1,score:0,showBoard:!1,stats:[],terms:[],title:null}),y=O,M={canDnD:function(){return j.canDnD},colorScheme:function(){return j.colorScheme},correct:function(){return j.correct},definitions:function(){return j.definitions},duration:function(){return j.duration},gameId:function(){return j.gameId},incorrect:function(){return j.incorrect},itemsPerBoard:function(){return j.itemsPerBoard},matches:function(){return j.matches},playing:function(){return j.playing},score:function(){return j.score},showBoard:function(){return j.showBoard},stats:function(){return j.stats},terms:function(){return j.terms},title:function(){return j.title}},w={setCanDnD:function(e){return j.canDnD=e},setColorScheme:function(e){return j.colorScheme=e},setCorrect:function(e){return j.correct=e},setDefinitions:function(e){return j.definitions=e},setDuration:function(e){return j.duration=e},setGameId:function(e){return j.gameId=e},setIncorrect:function(e){return j.incorrect=e},setItemsPerBoard:function(e){return j.itemsPerBoard=e},setMatches:function(e){return j.matches=e},setPlaying:function(e){return j.playing=e},setScore:function(e){return j.score=e},setShowBoard:function(e){return j.showBoard=e},setStats:function(e){return j.stats=e},setTerms:function(e){return j.terms=e},setTitle:function(e){return j.title=e}},x=(n("7db0"),n("d81d"),n("fb6a"),n("2909")),I=n("15fd"),T=n("8dee"),D=n.n(T);n("99af"),n("a434");function _(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}function P(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return Object.prototype.hasOwnProperty.call(t,n)?e.map((function(e){return e[n]!==t[n]?e:Object(f["a"])(Object(f["a"])({},e),t)})):e}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!Object.prototype.hasOwnProperty.call(t,n))return e;var i=e.find((function(e){return e[n]===t[n]})),a=r?r(i):t;return i?e.map((function(e){return e[n]!==a[n]?e:Object(f["a"])(Object(f["a"])({},e),a)})):e.concat(a)}var B=function(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}},C=function(e,t,n,r,i,a,o){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":i+"px","--hit-end-tz":a+"px","--hit-duration":o+"ms"}},E=function(e,t,n){return Object(f["a"])({},B(e,t,n))},L=function(e){console.log("loading data...");var t=e.matchId,n=e.matches,r=void 0===n?[]:n,i=e.options;i=void 0===i?{}:i;var a=i.duration,o=void 0===a?60:a,c=i.colorScheme,s=void 0===c?"":c,u=i.itemsPerBoard,d=void 0===u?9:u,l=e.title,f=void 0===l?"":l;j.colorScheme=s,j.duration=o,j.gameId=t,j.itemsPerBoard=d,j.matches=r,j.title=f},k=function(){console.log("dealing...");var e=_(j.matches),t=e.slice(0,Math.min(j.itemsPerBoard,e.length)),n=t.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{matched:!1,show:!0})})),r=_(n.map((function(e){var t=e.term,n=e.definition,r=Object(I["a"])(e,["term","definition"]);return Object(f["a"])(Object(f["a"])({},r),{},{content:t,answer:n,id:D.a.generate()})}))),i=Object(x["a"])(n);i=i.map((function(e){e.term;var t=e.definition,n=Object(I["a"])(e,["term","definition"]);return Object(f["a"])(Object(f["a"])({},n),{},{content:t,id:D.a.generate()})})),j.terms=r,j.definitions=i},A=function(){console.log("shuffling..."),j.terms=_(j.terms),j.definitions=_(j.definitions)},R=function(e,t){var n=j.terms.find((function(t){return t.id===e}))||{},r=n.answer,i=j.definitions.find((function(e){return e.id===t}))||{},a=i.content;return!!r&&!!a&&r===a},X=function(e){var t=e||{},n=t.dragId,r=t.dragX,i=t.dragY;j.terms=P(j.terms,{id:n,style:j.moveStyle(r,i,1),className:"drag"})},Y=function(e){var t=e||{},n=t.dropId;j.definitions=j.definitions.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{className:e.id!==n||e.matched?"":"over"})}))},N=function(e){var t=e||{},n=t.dragId,r=t.dragX,i=t.dragY,a=t.dropId,o=t.dropX,c=t.dropY,s=!!a&&R(n,a);if(j.terms=P(j.terms,{id:n,matched:s,className:s?"hit":"miss",style:s?C(r,i,1,o,c,1,y.tile.hitMs):E(0,0,0)}),a){j.definitions=P(j.definitions,Object(f["a"])({id:a,className:s?"hit":""},s&&{matched:!0}));var u=j.terms.find((function(e){return e.id===n}))||{},d=u.content;j.score=Math.max(s?j.score+1:j.score-1,0),j.stats=S(j.stats,{term:d},"term",(function(e){return e?{term:d,hit:s?e.hit+1:e.hit,miss:s?e.miss:e.miss+1}:{term:d,hit:s?1:0,miss:s?0:1}}))}},z=function(){console.log("game over..."),j.playing=!1,j.showBoard=!1},G={deal:k,drag:X,drop:N,gameOver:z,isMatch:R,load:L,over:Y,shuffle:A},q=Object(r["P"])("data-v-60cbdd53");Object(r["B"])("data-v-60cbdd53");var $={class:"match-timer"},F={class:"timer"},U={class:"timer__wrapper"},J={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},H={class:"timer__circle"};Object(r["z"])();var Z=q((function(e,t,n,i,a,o){return Object(r["y"])(),Object(r["f"])(r["b"],{duration:{enter:"".concat(o.timeouts.enter),leave:"".concat(o.timeouts.leave)},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onBeforeEnter:o.beforeEnter,onAfterEnter:o.afterEnter,onAfterLeave:o.afterLeave},{default:q((function(){return[Object(r["O"])(Object(r["i"])("div",$,[Object(r["i"])("div",F,[Object(r["i"])(r["b"],{appear:"",duration:{enter:"".concat(o.timeouts.change),leave:"".concat(o.timeouts.change)},"leave-active-class":"scoring-active","leave-to-class":"scoring-end",onAfterLeave:o.endScoreChange},{default:q((function(){return[Object(r["O"])(Object(r["i"])("div",U,[(Object(r["y"])(),Object(r["f"])("svg",J,[Object(r["i"])("g",H,[Object(r["i"])("circle",{class:["timer__path-elapsed",a.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(r["i"])("path",{"stroke-dasharray":o.strokeDasharray,class:["timer__path-remaining",[o.severity,a.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(r["i"])("span",{class:["timer__label",a.scoreClass]},Object(r["J"])(e.score||o.formatted),3)],512),[[r["M"],!a.scoring]])]})),_:1},8,["duration","onAfterLeave"])])],512),[[r["M"],e.playing]])]})),_:1},8,["duration","onBeforeEnter","onAfterEnter","onAfterLeave"])})),W=(n("b0c0"),n("b680"),283),K={ALERT:"alert",WARN:"warn",SUCCESS:"success"},Q={setup:function(){Object(r["q"])((function(){console.log("Before Mount!")})),Object(r["v"])((function(){console.log("Mounted!")})),Object(r["s"])((function(){console.log("Before Update!")})),Object(r["x"])((function(){console.log("Updated!")})),Object(r["r"])((function(){console.log("Before Unmount!")})),Object(r["w"])((function(){console.log("Unmounted!")})),Object(r["p"])((function(){console.log("Activated!")})),Object(r["t"])((function(){console.log("Deactivated!")})),Object(r["u"])((function(){console.log("Error Captured!")}))},name:"Timer",data:function(){return{elapsed:0,intervalId:null,scoreClass:"",scoring:!1}},computed:Object(f["a"])(Object(f["a"])({debug:function(){return y.timer.debug},thresholds:function(){return y.timer.thresholds},timeouts:function(){return y.timer.timeouts}},{duration:M.duration,playing:M.playing,score:M.score}),{},{expired:function(){return this.remaining<=0},formatted:function(){var e=Math.floor(this.remaining/6e4),t=Math.floor(this.remaining%6e4/1e3);return t<10?"".concat(e,":0").concat(t):"".concat(e,":").concat(t)},progress:function(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining:function(){return 1e3*this.duration-this.elapsed},severity:function(){return this.progress<=this.thresholds.warn?this.progress<=this.thresholds.alert?K.ALERT:K.WARN:K.SUCCESS},strokeDasharray:function(){var e=this.progress/100-1/this.duration*(1-this.progress/100);return"".concat((e*W).toFixed(0)," ").concat(W)}}),methods:Object(f["a"])(Object(f["a"])(Object(f["a"])({},{gameOver:G.gameOver}),w),{},{beforeEnter:function(){this.debug&&console.log("before entered..."),this.elapsed=0},afterEnter:function(){this.debug&&console.log("timer entered..."),this.startTimer()},afterLeave:function(){this.debug&&console.log("timer left...")},startTimer:function(){var e=this;this.elapsed=0,this.intervalId=setInterval((function(){return e.elapsed+=e.timeouts.interval}),this.timeouts.interval)},endTimer:function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange:function(){this.debug&&console.log("timer scoring end..."),this.scoring=!1,this.scoreClass=""}}),watch:{score:function(e,t){this.debug&&console.log("timer scoring:",t,"--\x3e",e),this.scoring=!0,this.scoreClass=e>t?"hit":"miss"},expired:function(e,t){!t&&e&&(this.endTimer(),this.gameOver())}},mounted:function(){this.debug&&console.log(this.$options.name,"mounted...")},beforeUnmount:function(){this.debug&&console.log(this.$options.name,"before destroy..."),this.debug&&console.log("clearing timer..."),this.endTimer()}};n("1795");Q.render=Z,Q.__scopeId="data-v-60cbdd53";var V=Q,ee={name:"Match",components:{Timer:V},data:function(){return{globalState:j}},computed:Object(f["a"])(Object(f["a"])({},M),{},{matchId:function(){return this.$route.params.id}}),methods:Object(f["a"])(Object(f["a"])({},w),G),created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.fetch(e.matchId);case 2:n=t.sent,e.load(n.data),e.deal(),setTimeout((function(){e.shuffle(),e.setCanDnD(!0),e.setPlaying(!0)}),1e3);case 6:case"end":return t.stop()}}),t)})))()}};n("90a6");ee.render=d,ee.__scopeId="data-v-41558846";var te=ee,ne=Object(r["P"])("data-v-55a1f694");Object(r["B"])("data-v-55a1f694");var re={class:"full-page full-page--match"};Object(r["z"])();var ie=ne((function(e,t,n,i,a,o){var c=Object(r["G"])("MatchGame");return Object(r["y"])(),Object(r["f"])("div",re,[a.showBoard?(Object(r["y"])(),Object(r["f"])(c,{key:0,"color-scheme":a.colorScheme,duration:a.duration,"items-per-board":a.itemsPerBoard,matches:a.matches,config:o.config,onGameOver:o.onGameOver},null,8,["color-scheme","duration","items-per-board","matches","config","onGameOver"])):Object(r["g"])("",!0)])})),ae=Object(r["P"])("data-v-9f56f7fa");Object(r["B"])("data-v-9f56f7fa");var oe={id:"match-game"},ce={id:"match-timer"};Object(r["z"])();var se=ae((function(e,t,n,i,a,o){var c=Object(r["G"])("MatchTimer"),s=Object(r["G"])("MatchTileBoard"),u=Object(r["G"])("DnD");return Object(r["y"])(),Object(r["f"])(r["b"],{appear:"",css:!0,duration:{enter:"".concat(n.config.game.enterMs),leave:"".concat(n.config.game.leaveMs)},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onAfterEnter:o.onEntered,onAfterLeave:o.onLeft},{default:ae((function(){return[Object(r["i"])("div",oe,[Object(r["i"])("div",ce,[Object(r["i"])(c,{"change-ms":n.config.timer.changeMs,duration:n.duration,"enter-ms":n.config.timer.enterMs,"interval-ms":n.config.timer.intervalMs,"leave-ms":n.config.timer.leaveMs,playing:a.playing,score:a.score,onTimerExpired:o.onTimerExpired},null,8,["change-ms","duration","enter-ms","interval-ms","leave-ms","playing","score","onTimerExpired"])]),Object(r["i"])(u,{id:"match-dnd-board",disabled:o.inTransition,playing:a.playing,"throttle-ms":n.config.dnd.throttleMs,onDrag:o.onDrag,onOver:o.onOver,onDrop:o.onDrop},{default:ae((function(){return[Object(r["i"])(s,{componentName:"Draggable",id:"terms","tile-type":"term",disabled:o.inTransition,"enter-ms":n.config.tile.enterMs,"leave-ms":n.config.tile.leaveMs,playing:a.playing,tiles:a.terms,"tile-count":n.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"]),Object(r["i"])(s,{componentName:"Droppable",id:"definitions","tile-type":"definition",disabled:o.inTransition,"enter-ms":n.config.tile.enterMs,"leave-ms":n.config.tile.leaveMs,playing:a.playing,tiles:a.definitions,"tile-count":n.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"])]})),_:1},8,["disabled","playing","throttle-ms","onDrag","onOver","onDrop"])])]})),_:1},8,["duration","onAfterEnter","onAfterLeave"])}));n("a9e3");function ue(e,t){var n=["red","orange","yellow","lime","green","cyan","blue","purple","magenta","navy","gray","teal"];switch(t.toLowerCase()){case"rainbow":return e.map((function(e){var t=Math.floor(Math.random()*n.length),r=n[t];return n.splice(t,1),Object(f["a"])(Object(f["a"])({},e),{},{color:r})}));default:return e.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{color:""})}))}}function de(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}function le(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return Object.prototype.hasOwnProperty.call(t,n)?e.map((function(e){return e[n]!==t[n]?e:Object(f["a"])(Object(f["a"])({},e),t)})):e}function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(!Object.prototype.hasOwnProperty.call(t,n))return e;var i=e.find((function(e){return e[n]===t[n]})),a=r?r(i):t;return i?e.map((function(e){return e[n]!==a[n]?e:Object(f["a"])(Object(f["a"])({},e),a)})):e.concat(a)}var he=Object(r["P"])("data-v-22ef2717"),me=he((function(e,t,n,i,a,o){return Object(r["y"])(),Object(r["f"])("div",Object(r["n"])({id:n.id,class:[o.classes]},Object(r["K"])(o.listeners)),[Object(r["F"])(e.$slots,"default")],16,["id"])})),ge=n("2ef0"),pe=n.n(ge),ve={name:"DnD",props:{disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},playing:{type:Boolean,required:!0,default:!1},throttleMs:{type:Number,required:!0,default:33.333}},data:function(){return{dragged:{active:!1}}},computed:{canDrag:function(){return this.playing&&!this.disabled},classes:function(){return{board:!0}},dragging:function(){var e=this.dragged.active,t=void 0!==e&&e;return t},listeners:function(){var e=this;return this.playing?{mousedown:function(t){return e.dragStart(t)},touchstart:function(t){return e.dragStart(t)},mouseup:function(t){return e.dragEnd(t)},touchend:function(t){return e.dragEnd(t)},mousemove:function(t){return e.throttledDrag(t)},touchmove:function(t){return e.throttledDrag(t)}}:{}},throttledDrag:function(){return pe.a.throttle(this.drag,this.throttleMs,{trailing:!0})}},methods:{dragStart:function(e){if(e.preventDefault(),this.canDrag){var t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(t){var n="touchstart"===e.type?e.touches[0].clientX:e.clientX,r="touchstart"===e.type?e.touches[0].clientY:e.clientY,i=t.getBoundingClientRect(),a=i.top,o=i.left;this.dragged={active:!0,dragId:t.id,offsetX:n-o,offsetY:r-a,initialX:n,initialY:r}}}},drag:function(e){if(e.preventDefault(),this.canDrag&&this.dragging){var t=this.dragged,n=t.dragId,r=t.initialX,i=t.initialY,a=t.overId,o="touchmove"===e.type?e.touches[0].clientX-r:e.clientX-r,c="touchmove"===e.type?e.touches[0].clientY-i:e.clientY-i;this.$emit("drag",{dragId:n,dragX:o,dragY:c});var s=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find((function(e){return e.classList.contains("droppable")}))||{},u=s.id,d=void 0===u?"":u;a!==d&&(this.$emit("over",{dropId:d}),this.dragged=Object(f["a"])(Object(f["a"])({},this.dragged),{},{overId:d}))}},dragEnd:function(e){if(e.preventDefault(),this.throttledDrag.cancel(),this.canDrag&&this.dragging){var t=this.dragged,n=t.dragId,r=t.initialX,i=t.initialY,a=t.offsetX,o=t.offsetY,c="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,s="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,u=document.elementsFromPoint(c,s).find((function(e){return e.classList.contains("droppable")})),d=u&&u.getBoundingClientRect()||{},l=d.top,f=d.left;this.$emit("drop",{dragId:n,dragX:u?c-r:c,dragY:u?s-i:s,dropId:u?u.id:null,dropX:u?Math.round(f-r+a):null,dropY:u?Math.round(l-i+o):null}),this.dragged={active:!1}}}},mounted:function(){console.log(this.$options.name,"mounted...")}};n("5ccd");ve.render=me,ve.__scopeId="data-v-22ef2717";var be=ve,Oe=Object(r["P"])("data-v-4ef3aa98"),je=Oe((function(e,t,n,i,a,o){return Object(r["y"])(),Object(r["f"])(r["c"],{appear:"",tag:"div",id:n.id,class:[o.classes],duration:{enter:"".concat(n.enterMs),leave:"".concat(n.leaveMs)},css:!0,"enter-class":"fade-in-start","enter-active-class":"fade-in-active","enter-to-class":"fade-in-end","move-class":o.transitionGroup,onAfterEnter:o.onEntered,onLeave:o.onLeft},{default:Oe((function(){return[(Object(r["y"])(!0),Object(r["f"])(r["a"],null,Object(r["E"])(o.filteredTiles,(function(e){return Object(r["y"])(),Object(r["f"])(Object(r["H"])(n.componentName),{key:e.id,content:e.content,disabled:n.disabled,id:e.id,style:[e.style],class:[o.tileClasses,n.tileType,e.className]},null,8,["content","disabled","id","style","class"])})),128))]})),_:1},8,["id","class","duration","move-class","onAfterEnter","onLeave"])})),ye=(n("4de4"),n("ade3")),Me=Object(r["P"])("data-v-0e4639df"),we=Me((function(e,t,n,i,a,o){return Object(r["y"])(),Object(r["f"])("div",{id:n.id,innerHTML:n.content},null,8,["id","innerHTML"])})),xe={name:"Draggable",props:["content","id"]};n("f999");xe.render=we,xe.__scopeId="data-v-0e4639df";var Ie=xe,Te=Object(r["P"])("data-v-14ad459b"),De=Te((function(e,t,n,i,a,o){return Object(r["y"])(),Object(r["f"])("div",{id:n.id,innerHTML:n.content},null,8,["id","innerHTML"])})),_e={name:"Droppable",props:["content","disabled","id"]};n("3886");_e.render=De,_e.__scopeId="data-v-14ad459b";var Pe=_e,Se={name:"MatchTileBoard",components:{Draggable:Ie,Droppable:Pe},props:["componentName","disabled","duration","enterMs","id","leaveMs","playing","tiles","tileType","tileCount"],computed:{transitionGroup:function(){return this.disabled?"slide":"no-move-list"},classes:function(){return Object(ye["a"])({"tile-board":!0,"tile-board--match":!0,"tile-board--disabled":!this.playing},"tiles-".concat(this.tileCount),this.tileCount)},filteredTiles:function(){return this.tiles.filter((function(e){return e.show}))},tileClasses:function(){return{tile:!0,draggable:"Draggable"===this.componentName,droppable:"Droppable"===this.componentName,disabled:this.disabled}}},methods:{onEntered:function(){console.log("entered!")},onLeft:function(e){console.log("left!"),e.style.display="none"}}};n("2089");Se.render=je,Se.__scopeId="data-v-4ef3aa98";var Be=Se,Ce=Object(r["P"])("data-v-74f05a30");Object(r["B"])("data-v-74f05a30");var Ee={class:"timer__wrapper"},Le={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},ke={class:"timer__circle"};Object(r["z"])();var Ae=Ce((function(e,t,n,i,a,o){return Object(r["y"])(),Object(r["f"])(r["b"],{duration:{enter:"".concat(n.enterMs),leave:"".concat(n.leaveMs)},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",css:!0,onAfterEnter:o.onEntered,onAfterLeave:o.onLeft},{default:Ce((function(){return[Object(r["O"])(Object(r["i"])("div",{class:"timer",id:n.id},[Object(r["i"])(r["b"],{appear:"",css:!0,duration:{enter:"".concat(n.changeMs),leave:"".concat(n.changeMs)},"leave-active-class":"score-out-active","leave-class":"score-out-start","leave-to-class":"score-out-end",onAfterLeave:o.endScoreChange},{default:Ce((function(){return[Object(r["O"])(Object(r["i"])("div",Ee,[(Object(r["y"])(),Object(r["f"])("svg",Le,[Object(r["i"])("g",ke,[Object(r["i"])("circle",{class:["timer__path-elapsed",a.hitMiss],cx:"50",cy:"50",r:"45"},null,2),Object(r["i"])("path",{"stroke-dasharray":o.circleDasharray,class:["timer__path-remaining",[o.severity,a.hitMiss]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(r["i"])("span",{class:["timer__label",a.hitMiss]},Object(r["J"])(n.score||o.formattedTimeLeft),3)],512),[[r["M"],!a.scoreChanging]])]})),_:1},8,["duration","onAfterLeave"])],8,["id"]),[[r["M"],n.playing]])]})),_:1},8,["duration","onAfterEnter","onAfterLeave"])})),Re=283,Xe=40,Ye=20,Ne={name:"MatchTimer",props:["active","changeMs","duration","enterMs","id","intervalMs","leaveMs","playing","score"],data:function(){return{elapsed:0,hitMiss:null,intervalId:null,scoreChanging:!1}},computed:{circleDasharray:function(){var e=this.progressPct/100-1/this.duration*(1-this.progressPct/100);return"".concat((e*Re).toFixed(0)," 283")},expired:function(){return this.remaining<=0},formattedTimeLeft:function(){var e=Math.floor(this.remaining/6e4),t=Math.floor(this.remaining%6e4/1e3);return t<10&&(t="0".concat(t)),"".concat(e,":").concat(t)},progressPct:function(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining:function(){return 1e3*this.duration-this.elapsed},severity:function(){return this.progressPct<=Xe?this.progressPct<=Ye?"alert":"warn":"success"}},methods:{onEntered:function(e){console.log("timer entered..."),this.startTimer()},onLeft:function(e){console.log("timer left..."),this.elapsed=0},startTimer:function(){var e=this;this.elapsed=0,this.intervalId=setInterval((function(){return e.elapsed+=e.intervalMs}),this.intervalMs)},endTimer:function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange:function(e){console.log("score changed ending..."),this.scoreChanging=!1,this.hitMiss=null}},watch:{score:function(e,t){console.log("score changed!"),this.scoreChanging=!0,this.hitMiss=e>t?"hit":"miss"},expired:function(e,t){!t&&e&&(this.endTimer(),this.$emit("timer-expired"))}},mounted:function(){console.log(this.$options.name,"mounted...")},unmounted:function(){this.endTimer()}};n("a9ae");Ne.render=Ae,Ne.__scopeId="data-v-74f05a30";var ze=Ne,Ge={name:"MatchGame",components:{DnD:be,MatchTileBoard:Be,MatchTimer:ze},props:{colorScheme:{type:String,required:!1,default:"rainbow"},config:{type:Object,required:!0},duration:{type:Number,required:!0,default:60},itemsPerBoard:{type:Number,required:!0,default:9},matches:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{correct:0,definitions:[],incorrect:0,playing:!1,score:0,stats:[],terms:[],transitioning:!1}},computed:{inTransition:{get:function(){return this.transitioning},set:function(e){this.transitioning=e}},progress:function(){return this.correct/this.itemsPerBoard}},methods:{deal:function(){console.log("dealing...");var e=de(this.matches),t=e.slice(0,Math.min(this.itemsPerBoard,e.length)),n=t.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{matched:!1,show:!0})})),r=n.map((function(e){var t=e.term,n=e.definition,r=Object(I["a"])(e,["term","definition"]);return Object(f["a"])(Object(f["a"])({},r),{},{content:t,answer:n,id:D.a.generate()})}));r=ue(r,this.colorScheme),this.terms=de(r);var i=Object(x["a"])(n);i=i.map((function(e){e.term;var t=e.definition,n=Object(I["a"])(e,["term","definition"]);return Object(f["a"])(Object(f["a"])({},n),{},{content:t,id:D.a.generate()})})),this.definitions=de(i)},hitStyle:function(e,t,n,r,i,a,o){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":r+"px","--hit-end-ty":i+"px","--hit-end-tz":a+"px","--hit-duration":o+"ms"}},isMatch:function(e,t){var n=function(e){return function(t){return t.id===e}},r=this.terms.find(n(e))||{},i=r.answer,a=this.definitions.find(n(t))||{},o=a.content;return!!i&&!!o&&i===o},missStyle:function(e,t,n){return Object(f["a"])({},this.translate(e,t,n))},moveStyle:function(e,t,n){return Object(f["a"])({},this.translate(e,t,n))},onDrag:function(e){var t=e||{},n=t.dragId,r=t.dragX,i=t.dragY;this.terms=le(this.terms,{id:n,style:this.moveStyle(r,i,1),className:"drag"})},onDrop:function(e){var t=this,n=e||{},r=n.dragId,i=n.dragX,a=n.dragY,o=n.dropId,c=n.dropX,s=n.dropY,u=!!o&&this.isMatch(r,o);if(this.terms=le(this.terms,{id:r,matched:u,className:u?"hit":"miss",style:u?this.hitStyle(i,a,1,c,s,1,this.config.tile.hitMs):this.missStyle(0,0,0)}),o){this.definitions=le(this.definitions,Object(f["a"])({id:o,className:u?"hit":""},u&&{matched:!0})),this.score=Math.max(u?this.score+1:this.score-1,0);var d=this.terms.find((function(e){return e.id===r}))||{},l=d.content;this.stats=fe(this.stats,{term:l},"term",(function(e){return e?{term:l,hit:u?e.hit+1:e.hit,miss:u?e.miss:e.miss+1}:{term:l,hit:u?1:0,miss:u?0:1}})),u?(this.inTransition=!0,setTimeout((function(){t.terms=le(t.terms,{id:r,show:!1}),t.definitions=le(t.definitions,{id:o,show:!1}),t.correct++,t.inTransition=!1}),this.config.tile.hitMs)):this.incorrect++}},onEntered:function(){console.log("game entered..."),this.deal(),this.playing=!0},onLeft:function(){console.log("game left....")},onOver:function(e){var t=e||{},n=t.dropId;this.definitions=this.definitions.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{className:e.id!==n||e.matched?"":"over"})}))},onTimerExpired:function(){var e=this;console.log("timer expired..."),this.playing=!1,setTimeout((function(){e.$emit("game-over",{correct:e.correct,incorrect:e.incorrect,data:e.stats,score:e.score})}),2e3)},translate:function(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}},watch:{progress:function(e,t){var n=this;t&&Math.floor(e)!==Math.floor(t)?(console.log("new round...",t,"vs",e),this.deal(),this.playing=!0):(console.log("shuffling..."),this.inTransition=!0,this.terms=de(this.terms),this.definitions=de(this.definitions),setTimeout((function(){n.inTransition=!1}),this.config.tile.shuffleMs))}}};n("6411");Ge.render=se,Ge.__scopeId="data-v-9f56f7fa";var qe=Ge;m.a.defaults.headers.get["Content-Type"]="application/json",m.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var $e={dnd:{throttleMs:33.33},game:{enterMs:1e3,leaveMs:1e3},tile:{enterMs:800,hitMs:800,leaveMs:0,missMs:800},timer:{intervalMs:100,changeMs:250,enterMs:1e3,leaveMs:1e3}},Fe={name:"Match",components:{MatchGame:qe},data:function(){return{colorScheme:"",correct:0,definitions:[],duration:60,gameId:null,itemsPerBoard:0,matches:[],showBoard:!1,showSplash:!0,title:""}},computed:{config:function(){return $e},game:{get:function(){return{colorScheme:this.colorScheme,duration:this.duration,gameId:this.gameId,itemsPerBoard:this.itemsPerBoard,matches:this.matches,title:this.title}},set:function(e){var t=e.matchId,n=e.matches,r=void 0===n?[]:n,i=e.options;i=void 0===i?{}:i;var a=i.duration,o=void 0===a?60:a,c=i.colorScheme,s=void 0===c?"":c,u=i.itemsPerBoard,d=void 0===u?9:u,l=e.title,f=void 0===l?"":l;this.colorScheme=s,this.duration=o,this.gameId=t,this.itemsPerBoard=d,this.matches=r,this.title=f}},matchId:function(){return this.$route.params.id}},methods:{fetchMatch:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.get("/api/match/"+e.matchId,{timeout:1e4});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},postPing:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.post("/api/ping",e,{timeout:1e4});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onGameOver:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("on game over..."),t.showBoard=!1,n.next=4,t.postPing({gameId:t.matchId,gameType:"M",results:e});case 4:r=n.sent,console.log(JSON.stringify(r)),setTimeout((function(){t.showBoard=!0}),5e3);case 7:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchMatch();case 2:n=t.sent,e.game=n,e.showBoard=!0;case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){console.log(this.$options.name,"mounted...")}};n("5e4a");Fe.render=ie,Fe.__scopeId="data-v-55a1f694";var Ue=Fe,Je=Object(r["P"])("data-v-b788fbbe");Object(r["B"])("data-v-b788fbbe");var He={class:"p-4"};Object(r["z"])();var Ze=Je((function(e,t,n,i,a,o){var c=Object(r["G"])("router-link");return Object(r["y"])(),Object(r["f"])("div",He,[Object(r["i"])("ul",null,[(Object(r["y"])(!0),Object(r["f"])(r["a"],null,Object(r["E"])(a.games,(function(e){return Object(r["y"])(),Object(r["f"])("li",{key:e.id},[Object(r["i"])(c,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:Je((function(){return[Object(r["h"])(Object(r["J"])(e.title),1)]})),_:2},1032,["to"])])})),128))])])}));m.a.defaults.headers.get["Content-Type"]="application/json",m.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var We={name:"Matches",data:function(){return{games:[]}},methods:{fetchData:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/matches/",{timeout:3e4});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:n=t.sent,r=n.map((function(e){return{id:e.matchId,title:e.title}})),e.games=r;case 5:case"end":return t.stop()}}),t)})))()}};n("1c66");We.render=Ze,We.__scopeId="data-v-b788fbbe";var Ke=We,Qe=[{path:"/",name:"matches",component:Ke,props:!1},{path:"/match/:id",name:"match",component:Ue,props:!1},{path:"/newmatch/:id",name:"newmatch",component:te,props:!1}],Ve=Object(c["a"])({history:Object(c["b"])(),routes:Qe}),et=Ve;Object(r["e"])(o).use(et).mount("#quizdini")},"58e1":function(e,t,n){},"5ba9":function(e,t,n){},"5ccd":function(e,t,n){"use strict";n("bb1b")},"5e4a":function(e,t,n){"use strict";n("58e1")},6411:function(e,t,n){"use strict";n("015f")},"70f3":function(e,t,n){},"90a6":function(e,t,n){"use strict";n("5ba9")},"9cdc":function(e,t,n){"use strict";n("c701")},a9ae:function(e,t,n){"use strict";n("e57b")},bb1b:function(e,t,n){},c701:function(e,t,n){},e57b:function(e,t,n){},f999:function(e,t,n){"use strict";n("17c0")}});
//# sourceMappingURL=app-legacy.8365bca7.js.map