(function(e){function t(t){for(var o,a,s=t[0],c=t[1],d=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0244":function(e,t,n){"use strict";n("f871")},"02cd":function(e,t,n){"use strict";n("a19a")},"15a6":function(e,t,n){},"1c66":function(e,t,n){"use strict";n("3f69")},"32e3":function(e,t,n){},"3f69":function(e,t,n){},"42b6":function(e,t,n){"use strict";n("15a6")},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var o=n("7a23");function i(e,t,n,i,r,a){const s=Object(o["C"])("router-view");return Object(o["u"])(),Object(o["f"])(s)}var r={name:"App"};n("9cdc");r.render=i;var a=r,s=n("6c02");const c=Object(o["N"])("data-v-ffe2064c"),d=c((function(e,t,n,i,r,a){const s=Object(o["C"])("Game");return Object(o["u"])(),Object(o["f"])(s,{match:r.match},null,8,["match"])}));var l=n("bc3a"),u=n.n(l);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const m={timeout:3e4},f=async({url:e,config:t=m})=>{console.log("url",e),console.log("config",t);try{const n=await u.a.get(e,t);return{data:n.data}}catch(n){return{error:n.response.data}}},g="/api/match",h=e=>f({url:`${g}/${e}`});var p={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!0,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:500,miss:800,shuffle:500}},timer:{debug:!1,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}};n("ddb0");const b={class:"match__game"};function v(e,t,n,i,r,a){const s=Object(o["C"])("Tile"),c=Object(o["C"])("DndBoard"),d=Object(o["C"])("Timer");return Object(o["u"])(),Object(o["f"])(o["a"],null,[!e.playing&&e.matches.length?(Object(o["u"])(),Object(o["f"])("button",{key:0,onClick:t[1]||(t[1]=(...t)=>e.startGame(...t))}," Start Game ")):Object(o["g"])("",!0),Object(o["i"])("div",b,[Object(o["i"])(c,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(o["L"])(()=>[Object(o["i"])(o["c"],{class:a.boardClasses("terms"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:a.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=e=>a.tileAfterLeave(e,"term"))},{default:Object(o["L"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeTerms,e=>(Object(o["u"])(),Object(o["f"])(s,{key:e.id,id:e.id,content:e.content,class:[e.className],style:[e.style],active:"drag"===e.className,disabled:!1,color:e.color,is:"Draggable",type:"term"},null,8,["id","content","class","style","active","color"]))),128))]),_:1},8,["class","duration","move-class","style"]),Object(o["i"])(o["c"],{class:a.boardClasses("definitions"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:a.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=e=>a.tileAfterLeave(e,"definition"))},{default:Object(o["L"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeDefinitions,e=>(Object(o["u"])(),Object(o["f"])(s,{key:e.id,id:e.id,content:e.content,class:[e.className],style:[e.style],active:!1,disabled:!1,is:"Droppable",type:"definition"},null,8,["id","content","class","style"]))),128))]),_:1},8,["class","duration","move-class","style"])]),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(o["i"])(d,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])],64)}n("5319");var O=n("8dee"),j=n.n(O);function y(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function x(e,t,n="id"){return Object.prototype.hasOwnProperty.call(t,n)?e.map(e=>e[n]!==t[n]?e:{...e,...t}):e}function w(e,t,n="id",o){if(!Object.prototype.hasOwnProperty.call(t,n))return e;const i=e.find(e=>e[n]===t[n]),r=o?o(i):t;return i?e.map(e=>e[n]!==r[n]?e:{...e,...r}):e.concat(r)}function S(e,t){const n=Object(o["k"])();let i=null;function r(){a(),i=setTimeout(()=>{(arguments&&t(...arguments)||t)()},Object(o["I"])(e))}function a(){clearTimeout(i)}return n?Object(o["t"])(()=>{console.log("cleaning up!"),i&&a()}):console.log("not in current instance"),[a,r]}function _(e,t=!0){const[,n]=S(p.tile.timeouts.hit,()=>{r.terms=r.terms.map(e=>e.matched&&e.show?{...e,show:!1}:e),r.definitions=r.definitions.map(e=>e.matched&&e.show?{...e,show:!1}:e)}),[,i]=S(p.tile.timeouts.shuffle,()=>{r.shuffling=!1}),r=Object(o["y"])({activeDefinitions:Object(o["d"])(()=>r.definitions.filter(e=>e.show)),activeTerms:Object(o["d"])(()=>r.terms.filter(e=>e.show)),canDnd:Object(o["d"])(()=>r.playing&&!r.shuffling&&!r.termIsExiting),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(o["d"])(()=>r.terms.reduce((e,t)=>t.exited?e+=1:e,0)),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(o["d"])(()=>!!r.terms.filter(e=>e.matched&&!e.exited).length),terms:[],textScaling:{terms:1,definitions:1},title:""}),a=Object(o["G"])(r,"exited");function s(e){const t=(e,t)=>{const n=/<[^>]*>/gi,o=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return o.body.textContent},n=new DOMParser;return e.map(e=>{const o=t(n,e.term),i=t(n,e.definition);return{term:{answer:e.definition,content:e.term,exited:!1,hasHtml:o.length!==e.term.length,id:j.a.generate(),length:o.length,matched:!1,maxWordLength:o.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),show:!0},definition:{content:e.definition,exited:!1,hasHtml:i.length!==e.definition.length,id:j.a.generate(),length:i.length,matched:!1,maxWordLength:i.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),show:!0}}})}function c(e=[],t=""){const{[t.toLowerCase()]:n=""}=p.game.themes;if(!n)return e.map(e=>({...e,color:p.game.themes.default.colors[0]}));let o=y(n.colors.slice());return e.map(e=>{const t=o.pop();return{...e,color:t}})}function d(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function l(e,t,n,o,i,r,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":o+"px","--hit-end-ty":i+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}}function u(e,t){const{answer:n}=r.terms.find(t=>t.id===e)||{},{content:o}=r.definitions.find(e=>e.id===t)||{};return!!n&&!!o&&n===o}function m(e){const{dragId:t,dragX:n,dragY:o}=e||{};r.terms=x(r.terms,{id:t,style:d(n,o,1),className:"drag"})}function f(e){const{overId:t}=e||{};r.definitions=r.definitions.map(e=>({...e,className:e.id!==t||e.matched?"":"over"}))}function g(e){const{dragId:t,dragX:o,dragY:i,dropId:a,dropX:s,dropY:c}=e||{},m=!!a&&u(t,a);if(r.terms=x(r.terms,{id:t,matched:m,className:m?"hit":"miss",...m&&{matchId:a},style:m?l(o,i,1,s,c,1,p.tile.timeouts.hit):d(0,0,0)}),!a)return;r.definitions=x(r.definitions,{id:a,className:m?"hit":"",...m&&{matched:!0,matchId:t}});const{content:f}=r.terms.find(e=>e.id===t)||{};r.score=Math.max(m?r.score+1:r.score-1,0),r.stats=w(r.stats,{term:f},"term",e=>e?{term:f,hit:m?e.hit+1:e.hit,miss:m?e.miss:e.miss+1}:{term:f,hit:m?1:0,miss:m?0:1}),m&&n()}function h(e,t){switch(t){case"term":r.terms=x(r.terms,{id:e,exited:!0});break;case"definition":r.definitions=x(r.definitions,{id:e,exited:!0});break;default:return}}function b(e){const n=e.reduce((e,t)=>[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length],[]);console.log(JSON.stringify(n,null,4));const{growth:o,min:i,max:a}=p.tile.text.scaling||{};r.textScaling={terms:(a*Math.pow(o,o*Math.max(n[0],n[1]/1.5))+i).toFixed(2),definitions:(a*Math.pow(o,o*Math.max(n[2],n[3]/1.5))+i).toFixed(2)},t&&console.log(JSON.stringify(r.textScaling,null,4))}function v(){console.log("dealing..."),r.matches=y(r.matches);const e=r.matches.slice(0,Math.min(r.itemsPerBoard,r.matches.length));b(e),r.terms=c(e.map(e=>e.term),r.colorScheme),r.definitions=y(e.map(e=>e.definition))}function O(){console.log("shuffling..."),r.shuffling=!0,r.terms=y(r.terms),r.definitions=y(r.definitions),i()}function _(){r.playing=!1,r.correct=0,r.incorrect=0,r.score=0,r.stats=[],r.terms=[],r.definitions=[],v(),Object(o["o"])(()=>{O(),r.playing=!0})}function I(){console.log("game over..."),r.playing=!1,r.showBoard=!1,r.showSplash=!0,r.terms=[],r.definitions=[]}return Object(o["K"])(e,(e,n)=>{t&&console.log("data changed: ",JSON.stringify(n),"=>",JSON.stringify(e));const{matchId:o,matches:i=[],options:{duration:a=60,colorScheme:c="",itemsPerBoard:d=9}={},title:l=""}=e;r.colorScheme=c.toLowerCase(),r.duration=a,r.matchId=o,r.itemsPerBoard=d,r.matches=s(i),r.title=l}),Object(o["K"])(a,(e,n)=>{t&&console.log("exited changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=n||(e===r.itemsPerBoard?(v(),Object(o["o"])(()=>O())):O())}),{config:p,...Object(o["H"])(r),deal:v,gameOver:I,onDrag:m,onDrop:g,onOver:f,onTileLeft:h,shuffle:O,startGame:_}}const I=Object(o["N"])("data-v-c03d63c2"),D=I((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])("div",{class:a.classes,ref:"dndRef"},[Object(o["B"])(e.$slots,"default")],2)}));var L=n("2ef0"),T=n.n(L);function C({active:e,element:t,throttleMs:n=33,debug:i=!1,emit:r}){const a=Object(o["y"])({dragged:{},listeners:[],throttledDrag:Object(o["d"])(()=>T.a.throttle(f,n,{trailing:!0}))}),s={mousedown:m,mousemove:a.throttledDrag,mouseup:g,touchstart:m,touchmove:a.throttledDrag,touchend:g};function c(e){e.forEach(n=>{i&&console.log(`adding ${n}...`),t.value.addEventListener(n,s[n]),a.listeners=a.listeners.concat(e).filter((e,t,n)=>n.indexOf(e)===t)})}function d(e){e.forEach(n=>{i&&console.log(`removing ${n}...`),t.value.removeEventListener(n,s[n]),a.listeners=a.listeners.filter(t=>e.indexOf(t)<0)})}function l(){c(["mousedown","touchstart"])}function u(){a.dragged={},d(a.listeners)}function m(e){e.stopPropagation(),i&&console.log((a.dragged.id?`${e.type} (${a.dragged.id}) `:""+e.type)+"...");const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const n="touchstart"===e.type?e.touches[0].clientX:e.clientX,o="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:r,left:s}=t.getBoundingClientRect();a.dragged={id:t.id,offsetX:n-s,offsetY:o-r,initialX:n,initialY:o};const d="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];c(d)}function f(e){e.stopPropagation();const{id:t,initialX:n,initialY:o,overId:s}=a.dragged;i&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const c="touchmove"===e.type?e.touches[0].clientX-n:e.clientX-n,d="touchmove"===e.type?e.touches[0].clientY-o:e.clientY-o;r("drag",{dragId:t,dragX:c,dragY:d});const{id:l=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};s!==l&&(i&&l&&console.log(`${t} is over ${l}...`),r("over",{overId:l}),a.dragged={...a.dragged,overId:l})}function g(e){e.stopPropagation(),a.throttledDrag.cancel();const{id:t,initialX:n,initialY:o,offsetX:s,offsetY:c}=a.dragged;i&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const l="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,m=document.elementsFromPoint(l,u).find(e=>e.classList.contains("droppable")),{top:f,left:g}=m&&m.getBoundingClientRect()||{};r("drop",{dragId:t,dragX:m?l-n:l,dragY:m?u-o:u,dropId:m?m.id:null,dropX:m?Math.round(g-n+s):null,dropY:m?Math.round(f-o+c):null}),a.dragged={};const h="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];d(h)}return Object(o["s"])(()=>{i&&console.log(`dnd mounted (${Object(o["I"])(e)?"active":"inactive"})...`),Object(o["I"])(e.value)&&c(["mousedown","touchstart"])}),Object(o["K"])(e,(e,t)=>(i&&console.log("active changed: ",t,"=>",e),e&&!t?l():u())),{...Object(o["H"])(a)}}var M={name:"DndBoard",props:["active","config"],setup(e,{emit:t}){const n=Object(o["z"])(null),{active:i}=Object(o["H"])(e);return{...e.config,...C({active:i,element:n,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:t}),dndRef:n}},computed:{classes(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("02cd");M.render=D,M.__scopeId="data-v-c03d63c2";var B=M;function P(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])(Object(o["D"])(n.is),{active:n.active,class:a.classes,disabled:n.disabled,id:n.id,style:n.style},{default:Object(o["L"])(()=>[Object(o["i"])("div",{class:"tile__body",innerHTML:n.content},null,8,["innerHTML"])]),_:1},8,["active","class","disabled","id","style"])}const $=Object(o["N"])("data-v-02fd6379"),N=$((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])}));var E={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");E.render=N,E.__scopeId="data-v-02fd6379";var A=E;const Y=Object(o["N"])("data-v-da15d764"),k=Y((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])}));var X={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");X.render=k,X.__scopeId="data-v-da15d764";var q=X,F={name:"Tile",components:{Draggable:A,Droppable:q},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},id:{required:!1},is:{type:String,required:!0},style:{required:!1},type:{type:String,required:!1}},computed:{classes(){return{tile:!0,["tile--"+this.type]:this.type,[this.color]:this.color}}}};F.render=P;var H=F;const J=Object(o["N"])("data-v-1b81a3ee");Object(o["x"])("data-v-1b81a3ee");const R={class:"timer"},W={class:"timer__wrapper"},z={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},G={class:"timer__circle"};Object(o["v"])();const U=J((function(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])(o["b"],Object(o["n"])({duration:{enter:""+e.timeouts.enter,leave:""+e.timeouts.leave},name:"timer",onBeforeEnter:a.beforeEnter,onAfterEnter:a.afterEnter,onAfterLeave:a.afterLeave},e.$attrs),{default:J(()=>[Object(o["M"])(Object(o["i"])("div",null,[Object(o["i"])("div",R,[Object(o["i"])(o["b"],{appear:"",duration:{enter:""+e.timeouts.change,leave:""+e.timeouts.change},name:"scoring",onAfterLeave:e.endScoreChange},{default:J(()=>[Object(o["M"])(Object(o["i"])("div",W,[(Object(o["u"])(),Object(o["f"])("svg",z,[Object(o["i"])("g",G,[Object(o["i"])("circle",{class:["timer__path-elapsed",a.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(o["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[e.severity,a.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(o["i"])("span",{class:["timer__label",a.scoreClass]},Object(o["F"])(n.score||e.formatted),3)],512),[[o["J"],!e.scoring]])]),_:1},8,["duration","onAfterLeave"])])],512),[[o["J"],n.active]])]),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave"])})),K={ALERT:"alert",WARN:"warn",SUCCESS:"success"},Z={UP:"up",DOWN:"down"};function Q({duration:e,score:t,interval:n,warn:i,alert:r,debug:a=!1,emit:s}){const c=Object(o["y"])({elapsed:0,expired:Object(o["d"])(()=>c.remaining<=0),formatted:Object(o["d"])(()=>{const e=Math.floor(c.remaining/6e4),t=Math.floor(c.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`}),intervalId:null,progress:Object(o["d"])(()=>Math.round(c.remaining/(1e3*Object(o["I"])(e))*1e4)/100),remaining:Object(o["d"])(()=>1e3*Object(o["I"])(e)-c.elapsed),scoring:!1,scoringStatus:"",SCORING_STATUS:Z,severity:Object(o["d"])(()=>c.progress<=i?c.progress<=r?K.ALERT:K.WARN:K.SUCCESS)});function d(){a&&console.log("timer start..."),c.elapsed=0,c.intervalId=setInterval(()=>{c.elapsed+=n},n)}function l(e){c.elapsed=e}function u(){a&&console.log("timer scoring end..."),c.scoring=!1,c.scoringStatus=""}function m(){a&&console.log("timer end..."),c.intervalId&&(clearInterval(c.intervalId),c.intervalId=null)}return Object(o["K"])(t,(e,t)=>{a&&console.log("score changed: ",t,"=>",e),c.scoring=!0,c.scoringStatus=e>t?Z.UP:Z.DOWN}),Object(o["K"])(()=>c.expired,(e,t)=>{e&&!t&&(a&&console.log("timer expired: ",t,"=>",e),m(),s("timer-expired"))}),Object(o["q"])(()=>{a&&console.log("timer cleaning up..."),m()}),{...Object(o["H"])(c),startTimer:d,endTimer:m,setElapsed:l,endScoreChange:u}}const V=283;var ee={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup(e,{emit:t}){const{duration:n,score:i}=Object(o["H"])(e),r=Q({duration:n,score:i,interval:e.config.timeouts.interval,warn:e.config.thresholds.warn,alert:e.config.thresholds.alert,debug:e.config.debug,emit:t});return{...r,...e.config}},computed:{scoreClass(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*V).toFixed(0)} ${V}`}},methods:{beforeEnter(){this.debug&&console.log("before entered..."),this.setElapsed(0)},afterEnter(){this.debug&&console.log("timer entered..."),this.startTimer()},afterLeave(){this.debug&&console.log("timer left...")}}};n("42b6");ee.render=U,ee.__scopeId="data-v-1b81a3ee";var te=ee,ne={name:"Game",components:{DndBoard:B,Tile:H,Timer:te},props:["match"],setup(e){const{match:t}=Object(o["H"])(e);return{..._(t)}},methods:{boardClasses(e){return{"tile-board":!0,["tile-board--"+e]:e,["tile-board--"+this.itemsPerBoard]:this.itemsPerBoard,["tile-board--"+this.colorScheme]:this.colorScheme,"tile-board--disabled":!this.playing}},boardStyles(e){return{...this.textScaling[e]&&{"--text-scale-factor":""+this.textScaling[e]}}},tileAfterLeave(e,t){this.config.game.debug&&console.log(`${t} (${e.id}) leaving...`),this.playing&&this.onTileLeft(e.id,t)}}};n("ed88");ne.render=v;var oe=ne,ie={name:"Match",components:{Game:oe},computed:{matchId(){return this.$route.params.id}},data(){return{match:{}}},methods:{},async created(){const e=await h(this.matchId);this.match=e.data}};n("0244");ie.render=d,ie.__scopeId="data-v-ffe2064c";var re=ie;const ae=Object(o["N"])("data-v-b788fbbe");Object(o["x"])("data-v-b788fbbe");const se={class:"p-4"};Object(o["v"])();const ce=ae((function(e,t,n,i,r,a){const s=Object(o["C"])("router-link");return Object(o["u"])(),Object(o["f"])("div",se,[Object(o["i"])("ul",null,[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(r.games,e=>(Object(o["u"])(),Object(o["f"])("li",{key:e.id},[Object(o["i"])(s,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:ae(()=>[Object(o["h"])(Object(o["F"])(e.title),1)]),_:2},1032,["to"])]))),128))])])}));u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var de={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches/",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};n("1c66");de.render=ce,de.__scopeId="data-v-b788fbbe";var le=de;const ue=[{path:"/",name:"matches",component:le,props:!1},{path:"/match/:id",name:"match",component:re,props:!1}],me=Object(s["a"])({history:Object(s["b"])(),routes:ue});var fe=me;Object(o["e"])(a).use(fe).mount("#quizdini")},"9cdc":function(e,t,n){"use strict";n("c701")},a19a:function(e,t,n){},c701:function(e,t,n){},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},ed88:function(e,t,n){"use strict";n("32e3")},ef2c:function(e,t,n){"use strict";n("cb08")},f871:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app.83e92461.js.map