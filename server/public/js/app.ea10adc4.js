(function(e){function t(t){for(var o,a,c=t[0],s=t[1],d=t[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0244":function(e,t,n){"use strict";n("f871")},"0a75":function(e,t,n){"use strict";n("6660")},"15a6":function(e,t,n){},"1c66":function(e,t,n){"use strict";n("3f69")},"32e3":function(e,t,n){},"3f69":function(e,t,n){},"42b6":function(e,t,n){"use strict";n("15a6")},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var o=n("7a23");function i(e,t,n,i,r,a){const c=Object(o["C"])("router-view");return Object(o["u"])(),Object(o["f"])(c)}var r={name:"App"};n("9cdc");r.render=i;var a=r,c=n("6c02");const s=Object(o["M"])("data-v-ffe2064c"),d=s((function(e,t,n,i,r,a){const c=Object(o["C"])("Game");return Object(o["u"])(),Object(o["f"])(c,{match:r.match},null,8,["match"])}));var l=n("bc3a"),u=n.n(l);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const f={timeout:3e4},m=async({url:e,config:t=f})=>{console.log("url",e),console.log("config",t);try{const n=await u.a.get(e,t);return{data:n.data}}catch(n){return{error:n.response.data}}},g="/api/match",p=e=>m({url:`${g}/${e}`});var b={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!0,timeouts:{enter:1e3,leave:1e3},themes:{rainbow:{colors:["red","green","yellow","blue","orange","purple","light-blue","fuchsia","lime","pink","teal","mauve","brown","cream","maroon","apple","olive","light-orange","navy","gray"]}}},tile:{timeouts:{enter:800,hit:800,leave:500,miss:800,shuffle:500}},timer:{debug:!1,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}};n("ddb0");const h={class:"match__game"};function v(e,t,n,i,r,a){const c=Object(o["C"])("Tile"),s=Object(o["C"])("DndBoard"),d=Object(o["C"])("Timer");return Object(o["u"])(),Object(o["f"])(o["a"],null,[!e.playing&&e.matches.length?(Object(o["u"])(),Object(o["f"])("button",{key:0,onClick:t[1]||(t[1]=(...t)=>e.startGame(...t))}," Start Game ")):Object(o["g"])("",!0),Object(o["i"])("div",h,[Object(o["i"])(s,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(o["K"])(()=>[Object(o["i"])(o["c"],{class:a.boardClasses("terms"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",onAfterLeave:t[2]||(t[2]=e=>a.tileAfterLeave(e,"term"))},{default:Object(o["K"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeTerms,e=>(Object(o["u"])(),Object(o["f"])(c,{key:e.id,id:e.id,content:e.content,class:[e.className],style:[e.style],active:"drag"===e.className,disabled:!1,color:e.color,is:"Draggable",type:"term"},null,8,["id","content","class","style","active","color"]))),128))]),_:1},8,["class","duration","move-class"]),Object(o["i"])(o["c"],{class:a.boardClasses("definitions"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",onAfterLeave:t[3]||(t[3]=e=>a.tileAfterLeave(e,"definition"))},{default:Object(o["K"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeDefinitions,e=>(Object(o["u"])(),Object(o["f"])(c,{key:e.id,id:e.id,content:e.content,class:[e.className],style:[e.style],active:!1,disabled:!1,is:"Droppable",type:"definition"},null,8,["id","content","class","style"]))),128))]),_:1},8,["class","duration","move-class"])]),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(o["i"])(d,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])],64)}var O=n("8dee"),j=n.n(O);function y(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function w(e,t,n="id"){return Object.prototype.hasOwnProperty.call(t,n)?e.map(e=>e[n]!==t[n]?e:{...e,...t}):e}function _(e,t,n="id",o){if(!Object.prototype.hasOwnProperty.call(t,n))return e;const i=e.find(e=>e[n]===t[n]),r=o?o(i):t;return i?e.map(e=>e[n]!==r[n]?e:{...e,...r}):e.concat(r)}function x(e,t){const n=Object(o["k"])();let i=null;function r(){a(),i=setTimeout(()=>{(arguments&&t(...arguments)||t)()},Object(o["H"])(e))}function a(){clearTimeout(i)}return n?Object(o["t"])(()=>{console.log("cleaning up!"),i&&a()}):console.log("not in current instance"),[a,r]}function S(e,t=!0){const[,n]=x(b.tile.timeouts.hit,(e,t)=>()=>{a.terms=w(a.terms,{id:e,show:!1}),a.definitions=w(a.definitions,{id:t,show:!1})}),[,i]=x(b.tile.timeouts.shuffle,()=>{a.shuffling=!1}),r=Object(o["z"])(0),a=Object(o["y"])({activeDefinitions:Object(o["d"])(()=>a.definitions.filter(e=>e.show)),activeTerms:Object(o["d"])(()=>a.terms.filter(e=>e.show)),canDnd:Object(o["d"])(()=>a.playing&&!a.shuffling&&!a.termIsExiting),correct:0,colorScheme:"",definitions:[],duration:60,incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(o["d"])(()=>!!a.terms.filter(e=>e.matched&&!e.exited).length),terms:[],title:""});function c(e=[],t=""){console.log("add color called...");const{[t.toLowerCase()]:n=""}=b.game.themes;if(!n)return e;let o=y(n.colors.slice());return e.map(e=>{const t=o.pop();return console.log("choose color",t),{...e,color:t}})}function s(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function d(e,t,n,o,i,r,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":o+"px","--hit-end-ty":i+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}}function l(e,t){const{answer:n}=a.terms.find(t=>t.id===e)||{},{content:o}=a.definitions.find(e=>e.id===t)||{};return!!n&&!!o&&n===o}function u(e){const{dragId:t,dragX:n,dragY:o}=e||{};a.terms=w(a.terms,{id:t,style:s(n,o,1),className:"drag"})}function f(e){const{overId:t}=e||{};a.definitions=a.definitions.map(e=>({...e,className:e.id!==t||e.matched?"":"over"}))}function m(e){const{dragId:t,dragX:o,dragY:i,dropId:r,dropX:c,dropY:u}=e||{},f=!!r&&l(t,r);if(a.terms=w(a.terms,{id:t,matched:f,className:f?"hit":"miss",...f&&{matchId:r},style:f?d(o,i,1,c,u,1,b.tile.timeouts.hit):s(0,0,0)}),!r)return;a.definitions=w(a.definitions,{id:r,className:f?"hit":"",...f&&{matched:!0,matchId:t}});const{content:m}=a.terms.find(e=>e.id===t)||{};a.score=Math.max(f?a.score+1:a.score-1,0),a.stats=_(a.stats,{term:m},"term",e=>e?{term:m,hit:f?e.hit+1:e.hit,miss:f?e.miss:e.miss+1}:{term:m,hit:f?1:0,miss:f?0:1}),f&&n(t,r)}function g(e,t){switch(t){case"term":a.terms=w(a.terms,{id:e,exited:!0}),a.playing&&r.value++;break;case"definition":a.definitions=w(a.definitions,{id:e,exited:!0});break;default:return}}function p(){console.log("dealing...");const e=y(a.matches),t=e.slice(0,Math.min(a.itemsPerBoard,e.length));let n=t.map(e=>({...e,exited:!1,matched:!1,show:!0})),o=y(n.map(e=>{const{term:t,definition:n,...o}=e;return{...o,content:t,answer:n,id:j.a.generate()}})),i=[...n];i=i.map(e=>{const{term:t,definition:n,...o}=e;return{...o,content:n,id:j.a.generate()}}),o=c(o,a.colorScheme),a.terms=o,a.definitions=i}function h(){console.log("shuffling..."),a.shuffling=!0,a.terms=y(a.terms),a.definitions=y(a.definitions),i()}function v(){a.playing=!1,a.correct=0,a.incorrect=0,a.score=0,a.stats=[],a.terms=[],a.definitions=[],r.value=0,p(),Object(o["o"])(()=>{h(),a.playing=!0})}function O(){console.log("game over..."),a.playing=!1,a.showBoard=!1,a.showSplash=!0,a.terms=[],a.definitions=[]}return Object(o["J"])(e,(e,n)=>{t&&console.log("data changed: ",JSON.stringify(n),"=>",JSON.stringify(e));const{matchId:o,matches:i=[],options:{duration:r=60,colorScheme:c="",itemsPerBoard:s=9}={},title:d=""}=e;a.colorScheme=c,a.duration=r,a.matchId=o,a.itemsPerBoard=s,a.matches=i,a.title=d}),Object(o["J"])(r,(e,n)=>{t&&console.log("matched terms changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=0||(e===a.itemsPerBoard?(p(),r.value=0,Object(o["o"])(()=>h())):h())}),{config:b,...Object(o["G"])(a),deal:p,gameOver:O,onDrag:u,onDrop:m,onOver:f,onTileLeft:g,shuffle:h,startGame:v}}const I=Object(o["M"])("data-v-23c3fe3e");Object(o["x"])("data-v-23c3fe3e");const D={class:"dnd-board",ref:"dndRef"};Object(o["v"])();const T=I((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])("div",D,[Object(o["B"])(e.$slots,"default")],512)}));var B=n("2ef0"),C=n.n(B);function M({active:e,element:t,throttleMs:n=33,debug:i=!1,emit:r}){const a=Object(o["y"])({dragged:{},listeners:[],throttledDrag:Object(o["d"])(()=>C.a.throttle(m,n,{trailing:!0}))}),c={mousedown:f,mousemove:a.throttledDrag,mouseup:g,touchstart:f,touchmove:a.throttledDrag,touchend:g};function s(e){e.forEach(n=>{i&&console.log(`adding ${n}...`),t.value.addEventListener(n,c[n]),a.listeners=a.listeners.concat(e).filter((e,t,n)=>n.indexOf(e)===t)})}function d(e){e.forEach(n=>{i&&console.log(`removing ${n}...`),t.value.removeEventListener(n,c[n]),a.listeners=a.listeners.filter(t=>e.indexOf(t)<0)})}function l(){s(["mousedown","touchstart"])}function u(){a.dragged={},d(a.listeners)}function f(e){e.stopPropagation(),i&&console.log((a.dragged.id?`${e.type} (${a.dragged.id}) `:""+e.type)+"...");const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const n="touchstart"===e.type?e.touches[0].clientX:e.clientX,o="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:r,left:c}=t.getBoundingClientRect();a.dragged={id:t.id,offsetX:n-c,offsetY:o-r,initialX:n,initialY:o};const d="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];s(d)}function m(e){e.stopPropagation();const{id:t,initialX:n,initialY:o,overId:c}=a.dragged;i&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const s="touchmove"===e.type?e.touches[0].clientX-n:e.clientX-n,d="touchmove"===e.type?e.touches[0].clientY-o:e.clientY-o;r("drag",{dragId:t,dragX:s,dragY:d});const{id:l=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};c!==l&&(i&&l&&console.log(`${t} is over ${l}...`),r("over",{overId:l}),a.dragged={...a.dragged,overId:l})}function g(e){e.stopPropagation(),a.throttledDrag.cancel();const{id:t,initialX:n,initialY:o,offsetX:c,offsetY:s}=a.dragged;i&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const l="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,f=document.elementsFromPoint(l,u).find(e=>e.classList.contains("droppable")),{top:m,left:g}=f&&f.getBoundingClientRect()||{};r("drop",{dragId:t,dragX:f?l-n:l,dragY:f?u-o:u,dropId:f?f.id:null,dropX:f?Math.round(g-n+c):null,dropY:f?Math.round(m-o+s):null}),a.dragged={};const p="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];d(p)}return Object(o["s"])(()=>{i&&console.log(`dnd mounted (${Object(o["H"])(e)?"active":"inactive"})...`),Object(o["H"])(e.value)&&s(["mousedown","touchstart"])}),Object(o["J"])(e,(e,t)=>(i&&console.log("active changed: ",t,"=>",e),e&&!t?l():u())),{...Object(o["G"])(a)}}var $={name:"DndBoard",props:["active","config"],setup(e,{emit:t}){const n=Object(o["z"])(null),{active:i}=Object(o["G"])(e);return{...e.config,...M({active:i,element:n,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:t}),dndRef:n}}};n("0a75");$.render=T,$.__scopeId="data-v-23c3fe3e";var L=$;function P(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])(Object(o["D"])(n.is),{active:n.active,class:a.classes,disabled:n.disabled,id:n.id,style:n.style},{default:Object(o["K"])(()=>[Object(o["i"])("div",{class:"tile__body",innerHTML:n.content},null,8,["innerHTML"])]),_:1},8,["active","class","disabled","id","style"])}const A=Object(o["M"])("data-v-02fd6379"),E=A((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])}));var k={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");k.render=E,k.__scopeId="data-v-02fd6379";var X=k;const Y=Object(o["M"])("data-v-da15d764"),q=Y((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])}));var N={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");N.render=q,N.__scopeId="data-v-da15d764";var G=N,J={name:"Tile",components:{Draggable:X,Droppable:G},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},id:{required:!1},is:{type:String,required:!0},style:{required:!1},type:{type:String,required:!1}},computed:{classes(){return{tile:!0,["tile--"+this.type]:this.type,[this.color]:this.color}}}};J.render=P;var R=J;const z=Object(o["M"])("data-v-1b81a3ee");Object(o["x"])("data-v-1b81a3ee");const F={class:"timer"},H={class:"timer__wrapper"},U={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},K={class:"timer__circle"};Object(o["v"])();const W=z((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])(o["b"],Object(o["n"])({duration:{enter:""+e.timeouts.enter,leave:""+e.timeouts.leave},name:"timer",onBeforeEnter:a.beforeEnter,onAfterEnter:a.afterEnter,onAfterLeave:a.afterLeave},e.$attrs),{default:z(()=>[Object(o["L"])(Object(o["i"])("div",null,[Object(o["i"])("div",F,[Object(o["i"])(o["b"],{appear:"",duration:{enter:""+e.timeouts.change,leave:""+e.timeouts.change},name:"scoring",onAfterLeave:e.endScoreChange},{default:z(()=>[Object(o["L"])(Object(o["i"])("div",H,[(Object(o["u"])(),Object(o["f"])("svg",U,[Object(o["i"])("g",K,[Object(o["i"])("circle",{class:["timer__path-elapsed",a.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(o["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[e.severity,a.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(o["i"])("span",{class:["timer__label",a.scoreClass]},Object(o["F"])(n.score||e.formatted),3)],512),[[o["I"],!e.scoring]])]),_:1},8,["duration","onAfterLeave"])])],512),[[o["I"],n.active]])]),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave"])})),Z={ALERT:"alert",WARN:"warn",SUCCESS:"success"},Q={UP:"up",DOWN:"down"};function V({duration:e,score:t,interval:n,warn:i,alert:r,debug:a=!1,emit:c}){const s=Object(o["y"])({elapsed:0,expired:Object(o["d"])(()=>s.remaining<=0),formatted:Object(o["d"])(()=>{const e=Math.floor(s.remaining/6e4),t=Math.floor(s.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`}),intervalId:null,progress:Object(o["d"])(()=>Math.round(s.remaining/(1e3*Object(o["H"])(e))*1e4)/100),remaining:Object(o["d"])(()=>1e3*Object(o["H"])(e)-s.elapsed),scoring:!1,scoringStatus:"",SCORING_STATUS:Q,severity:Object(o["d"])(()=>s.progress<=i?s.progress<=r?Z.ALERT:Z.WARN:Z.SUCCESS)});function d(){a&&console.log("timer start..."),s.elapsed=0,s.intervalId=setInterval(()=>{s.elapsed+=n},n)}function l(e){s.elapsed=e}function u(){a&&console.log("timer scoring end..."),s.scoring=!1,s.scoringStatus=""}function f(){a&&console.log("timer end..."),s.intervalId&&(clearInterval(s.intervalId),s.intervalId=null)}return Object(o["J"])(t,(e,t)=>{a&&console.log("score changed: ",t,"=>",e),s.scoring=!0,s.scoringStatus=e>t?Q.UP:Q.DOWN}),Object(o["J"])(()=>s.expired,(e,t)=>{e&&!t&&(a&&console.log("timer expired: ",t,"=>",e),f(),c("timer-expired"))}),Object(o["q"])(()=>{a&&console.log("timer cleaning up..."),f()}),{...Object(o["G"])(s),startTimer:d,endTimer:f,setElapsed:l,endScoreChange:u}}const ee=283;var te={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup(e,{emit:t}){const{duration:n,score:i}=Object(o["G"])(e),r=V({duration:n,score:i,interval:e.config.timeouts.interval,warn:e.config.thresholds.warn,alert:e.config.thresholds.alert,debug:e.config.debug,emit:t});return{...r,...e.config}},computed:{scoreClass(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*ee).toFixed(0)} ${ee}`}},methods:{beforeEnter(){this.debug&&console.log("before entered..."),this.setElapsed(0)},afterEnter(){this.debug&&console.log("timer entered..."),this.startTimer()},afterLeave(){this.debug&&console.log("timer left...")}}};n("42b6");te.render=W,te.__scopeId="data-v-1b81a3ee";var ne=te,oe={name:"Game",components:{DndBoard:L,Tile:R,Timer:ne},props:["match"],setup(e){const{match:t}=Object(o["G"])(e);return{...S(t)}},methods:{boardClasses(e){return{"tile-board":!0,["tile-board--"+e]:e,["tile-board--"+this.itemsPerBoard]:this.itemsPerBoard,"tile-board--disabled":!this.playing}},tileAfterLeave(e,t){this.config.game.debug&&console.log(`${t} (${e.id}) leaving...`),this.playing&&this.onTileLeft(e.id,t)}}};n("ed88");oe.render=v;var ie=oe,re={name:"Match",components:{Game:ie},computed:{matchId(){return this.$route.params.id}},data(){return{match:{}}},methods:{},async created(){const e=await p(this.matchId);this.match=e.data}};n("0244");re.render=d,re.__scopeId="data-v-ffe2064c";var ae=re;const ce=Object(o["M"])("data-v-b788fbbe");Object(o["x"])("data-v-b788fbbe");const se={class:"p-4"};Object(o["v"])();const de=ce((function(e,t,n,i,r,a){const c=Object(o["C"])("router-link");return Object(o["u"])(),Object(o["f"])("div",se,[Object(o["i"])("ul",null,[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(r.games,e=>(Object(o["u"])(),Object(o["f"])("li",{key:e.id},[Object(o["i"])(c,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:ce(()=>[Object(o["h"])(Object(o["F"])(e.title),1)]),_:2},1032,["to"])]))),128))])])}));u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var le={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches/",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};n("1c66");le.render=de,le.__scopeId="data-v-b788fbbe";var ue=le;const fe=[{path:"/",name:"matches",component:ue,props:!1},{path:"/match/:id",name:"match",component:ae,props:!1}],me=Object(c["a"])({history:Object(c["b"])(),routes:fe});var ge=me;Object(o["e"])(a).use(ge).mount("#quizdini")},6660:function(e,t,n){},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},ed88:function(e,t,n){"use strict";n("32e3")},ef2c:function(e,t,n){"use strict";n("cb08")},f871:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app.ea10adc4.js.map