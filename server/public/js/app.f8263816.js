(function(e){function t(t){for(var o,a,s=t[0],c=t[1],d=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0244":function(e,t,n){"use strict";n("f871")},"02cd":function(e,t,n){"use strict";n("a19a")},"0c7c":function(e,t,n){},"15a6":function(e,t,n){},"32e3":function(e,t,n){},3843:function(e,t,n){"use strict";n("0c7c")},"42b6":function(e,t,n){"use strict";n("15a6")},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var o=n("7a23");function r(e,t,n,r,i,a){const s=Object(o["C"])("router-view");return Object(o["u"])(),Object(o["f"])(s)}var i={name:"App"};n("9cdc");i.render=r;var a=i,s=n("6c02");const c=Object(o["N"])("data-v-ffe2064c"),d=c((function(e,t,n,r,i,a){const s=Object(o["C"])("Game");return Object(o["u"])(),Object(o["f"])(s,{match:i.match},null,8,["match"])}));var l=n("bc3a"),u=n.n(l);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const m={timeout:3e4},g=async({url:e,config:t=m})=>{console.log("url",e),console.log("config",t);try{const n=await u.a.get(e,t);return{data:n.data}}catch(n){return{error:n.response.data}}},h=async({url:e,data:t,config:n=m})=>{console.log("url",e),console.log(JSON.stringify(t,null,4)),console.log("config",n);try{const o=await u.a.post(e,t,n);return{data:o.data}}catch(o){return{error:o.response.data}}},f="/api/match",p=e=>g({url:`${f}/${e}`});var b={board:{debug:!0,timeouts:{throttle:33}},game:{debug:!0,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:500,miss:800,shuffle:500}},timer:{debug:!1,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}};n("ddb0");const v={class:"match__game"};function O(e,t,n,r,i,a){const s=Object(o["C"])("Tile"),c=Object(o["C"])("DndBoard"),d=Object(o["C"])("Timer");return Object(o["u"])(),Object(o["f"])(o["a"],null,[!e.playing&&e.matches.length?(Object(o["u"])(),Object(o["f"])("button",{key:0,onClick:t[1]||(t[1]=(...t)=>e.startGame(...t))}," Start Game ")):Object(o["g"])("",!0),Object(o["i"])("div",v,[Object(o["i"])(c,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(o["L"])(()=>[Object(o["i"])(o["c"],{class:a.boardClasses("terms"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:a.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=e=>a.tileAfterLeave(e,"term"))},{default:Object(o["L"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeTerms,e=>(Object(o["u"])(),Object(o["f"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:e.dragging,disabled:!1,color:e.color,dragging:e.dragging,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Draggable",type:"term"},null,8,["id","content","style","active","color","dragging","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"]),Object(o["i"])(o["c"],{class:a.boardClasses("definitions"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:a.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=e=>a.tileAfterLeave(e,"definition"))},{default:Object(o["L"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeDefinitions,e=>(Object(o["u"])(),Object(o["f"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:!1,disabled:!1,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Droppable",type:"definition"},null,8,["id","content","style","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"])]),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(o["i"])(d,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])],64)}n("5319");var j=n("8dee"),y=n.n(j);function x(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function w(e,t,n="id"){return Object.prototype.hasOwnProperty.call(t,n)?e.map(e=>e[n]!==t[n]?e:{...e,...t}):e}function S(e,t,n="id",o){if(!Object.prototype.hasOwnProperty.call(t,n))return e;const r=e.find(e=>e[n]===t[n]),i=o?o(r):t;return r?e.map(e=>e[n]!==i[n]?e:{...e,...i}):e.concat(i)}function _(e,t){const n=Object(o["k"])();let r=null;function i(){a(),r=setTimeout(()=>{(arguments&&t(...arguments)||t)()},Object(o["I"])(e))}function a(){clearTimeout(r)}return n?Object(o["t"])(()=>{console.log("cleaning up!"),r&&a()}):console.log("not in current instance"),[a,i]}const I="/api/ping",L=e=>h({url:""+I,data:e});function D(e,t=!0){const[,n]=_(b.tile.timeouts.hit,()=>{i.terms=i.terms.map(e=>e.matched&&e.show?{...e,show:!1}:e),i.definitions=i.definitions.map(e=>e.matched&&e.show?{...e,show:!1}:e)}),[,r]=_(b.tile.timeouts.shuffle,()=>{i.shuffling=!1}),i=Object(o["y"])({activeDefinitions:Object(o["d"])(()=>i.definitions.filter(e=>e.show)),activeTerms:Object(o["d"])(()=>i.terms.filter(e=>e.show)),canDnd:Object(o["d"])(()=>i.playing&&!i.shuffling&&!i.termIsExiting),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(o["d"])(()=>i.terms.reduce((e,t)=>t.exited?e+=1:e,0)),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(o["d"])(()=>!!i.terms.filter(e=>e.matched&&!e.exited).length),terms:[],textScaling:{terms:1,definitions:1},title:""}),a=Object(o["G"])(i,"exited");function s(e){const t=(e,t)=>{const n=/<[^>]*>/gi,o=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return o.body.textContent},n=new DOMParser;return e.map(e=>{const o=t(n,e.term),r=t(n,e.definition);return{term:{answer:e.definition,content:e.term,dragging:!1,exited:!1,hasHtml:o.length!==e.term.length,hit:!1,id:y.a.generate(),length:o.length,matched:!1,matchId:"",maxWordLength:o.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0},definition:{content:e.definition,exited:!1,hasHtml:r.length!==e.definition.length,hit:!1,id:y.a.generate(),length:r.length,matched:!1,matchId:"",maxWordLength:r.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0}}})}function c(e=[],t=""){const{[t.toLowerCase()]:n=""}=b.game.themes;if(!n)return e.map(e=>({...e,color:b.game.themes.default.colors[0]}));let o=x(n.colors.slice());return e.map(e=>{const t=o.pop();return{...e,color:t}})}function d(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function l(e,t,n,o,r,i,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":o+"px","--hit-end-ty":r+"px","--hit-end-tz":i+"px","--hit-duration":a+"ms"}}function u(e,t){const{answer:n}=i.terms.find(t=>t.id===e)||{},{content:o}=i.definitions.find(e=>e.id===t)||{};return!!n&&!!o&&n===o}function m(e){const{dragId:t,dragX:n,dragY:o}=e||{};i.terms=w(i.terms,{id:t,dragging:!0,hit:!1,miss:!1,style:d(n,o,1)})}function g(e){const{dragId:t,dropId:n,over:o}=e||{};i.terms=i.terms.map(e=>({...e,over:e.id===t&&o})),i.definitions=i.definitions.map(e=>({...e,over:e.id===n}))}function h(e){const{dragId:t,dragX:o,dragY:r,dropId:a,dropX:s,dropY:c}=e||{},m=!!a&&u(t,a);if(i.terms=w(i.terms,{id:t,dragging:!1,hit:m,miss:!m,matched:m,matchId:m?a:"",over:m,style:m?l(o,r,1,s,c,1,b.tile.timeouts.hit):d(0,0,0)}),!a)return;m?i.correct++:i.incorrect++,i.definitions=w(i.definitions,{id:a,hit:m,miss:!m,matched:m,matchId:m?t:"",over:m});const{content:g}=i.terms.find(e=>e.id===t)||{};i.score=Math.max(m?i.score+1:i.score-1,0),i.stats=S(i.stats,{term:g},"term",e=>e?{term:g,hit:m?e.hit+1:e.hit,miss:m?e.miss:e.miss+1}:{term:g,hit:m?1:0,miss:m?0:1}),m&&n()}function f(e,t){switch(t){case"term":i.terms=w(i.terms,{id:e,exited:!0});break;case"definition":i.definitions=w(i.definitions,{id:e,exited:!0});break;default:return}}function p(e){const n=e.reduce((e,t)=>[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length],[]);console.log(JSON.stringify(n,null,4));const{growth:o,min:r,max:a}=b.tile.text.scaling||{};i.textScaling={terms:(a*Math.pow(o,o*Math.max(n[0],n[1]/1.5))+r).toFixed(2),definitions:(a*Math.pow(o,o*Math.max(n[2],n[3]/1.5))+r).toFixed(2)},t&&console.log(JSON.stringify(i.textScaling,null,4))}function v(){console.log("dealing..."),i.matches=x(i.matches);const e=i.matches.slice(0,Math.min(i.itemsPerBoard,i.matches.length));p(e),i.terms=c(e.map(e=>e.term),i.colorScheme),i.definitions=x(e.map(e=>e.definition))}function O(){console.log("shuffling..."),i.shuffling=!0,i.terms=x(i.terms),i.definitions=x(i.definitions),r()}function j(){i.playing=!1,i.correct=0,i.incorrect=0,i.score=0,i.stats=[],i.terms=[],i.definitions=[],v(),Object(o["o"])(()=>{O(),i.playing=!0})}async function I(){console.log("game over..."),i.playing=!1,i.showBoard=!1,i.showSplash=!0,i.terms=[],i.definitions=[];const e=await L({correct:i.correct,data:i.stats,gameId:i.matchId,gameType:"M",incorrect:i.incorrect,score:i.score});t&&JSON.stringify(e.data,null,4)}return Object(o["K"])(e,(e,n)=>{t&&console.log("data changed: ",JSON.stringify(n),"=>",JSON.stringify(e));const{matchId:o,matches:r=[],options:{duration:a=60,colorScheme:c="",itemsPerBoard:d=9}={},title:l=""}=e;i.colorScheme=c.toLowerCase(),i.duration=a,i.matchId=o,i.itemsPerBoard=d,i.matches=s(r),i.title=l}),Object(o["K"])(a,(e,n)=>{t&&console.log("exited changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=n||(e===i.itemsPerBoard?(v(),Object(o["o"])(()=>O())):O())}),{config:b,...Object(o["H"])(i),deal:v,gameOver:I,onDrag:m,onDrop:h,onOver:g,onTileLeft:f,shuffle:O,startGame:j}}const T=Object(o["N"])("data-v-c03d63c2"),C=T((function(e,t,n,r,i,a){return Object(o["u"])(),Object(o["f"])("div",{class:a.classes,ref:"dndRef"},[Object(o["B"])(e.$slots,"default")],2)}));var B=n("2ef0"),M=n.n(B);function P({active:e,element:t,throttleMs:n=33,debug:r=!1,emit:i}){const a=Object(o["y"])({dragged:{},listeners:[],throttledDrag:Object(o["d"])(()=>M.a.throttle(g,n,{trailing:!0}))}),s={mousedown:m,mousemove:a.throttledDrag,mouseup:h,touchstart:m,touchmove:a.throttledDrag,touchend:h};function c(e){e.forEach(n=>{r&&console.log(`adding ${n}...`),t.value.addEventListener(n,s[n]),a.listeners=a.listeners.concat(e).filter((e,t,n)=>n.indexOf(e)===t)})}function d(e){e.forEach(n=>{r&&console.log(`removing ${n}...`),t.value.removeEventListener(n,s[n]),a.listeners=a.listeners.filter(t=>e.indexOf(t)<0)})}function l(){c(["mousedown","touchstart"])}function u(){a.dragged={},d(a.listeners)}function m(e){e.stopPropagation(),r&&console.log((a.dragged.id?`${e.type} (${a.dragged.id}) `:""+e.type)+"...");const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const n="touchstart"===e.type?e.touches[0].clientX:e.clientX,o="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:i,left:s}=t.getBoundingClientRect();a.dragged={id:t.id,offsetX:n-s,offsetY:o-i,initialX:n,initialY:o};const d="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];c(d)}function g(e){e.stopPropagation();const{id:t,initialX:n,initialY:o,overId:s}=a.dragged;r&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const c="touchmove"===e.type?e.touches[0].clientX-n:e.clientX-n,d="touchmove"===e.type?e.touches[0].clientY-o:e.clientY-o;i("drag",{dragId:t,dragX:c,dragY:d});const{id:l=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};s!==l&&(r&&l&&console.log(`${t} is over ${l}...`),i("over",{dragId:t,dropId:l,over:!!l}),a.dragged={...a.dragged,overId:l})}function h(e){e.stopPropagation(),a.throttledDrag.cancel();const{id:t,initialX:n,initialY:o,offsetX:s,offsetY:c}=a.dragged;r&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const l="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,m=document.elementsFromPoint(l,u).find(e=>e.classList.contains("droppable")),{top:g,left:h}=m&&m.getBoundingClientRect()||{};i("drop",{dragId:t,dragX:m?l-n:l,dragY:m?u-o:u,dropId:m?m.id:null,dropX:m?Math.round(h-n+s):null,dropY:m?Math.round(g-o+c):null}),a.dragged={};const f="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];d(f)}return Object(o["s"])(()=>{r&&console.log(`dnd mounted (${Object(o["I"])(e)?"active":"inactive"})...`),Object(o["I"])(e.value)&&c(["mousedown","touchstart"])}),Object(o["K"])(e,(e,t)=>(r&&console.log("active changed: ",t,"=>",e),e&&!t?l():u())),{...Object(o["H"])(a)}}var $={name:"DndBoard",props:["active","config"],setup(e,{emit:t}){const n=Object(o["z"])(null),{active:r}=Object(o["H"])(e);return{...e.config,...P({active:r,element:n,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:t}),dndRef:n}},computed:{classes(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("02cd");$.render=C,$.__scopeId="data-v-c03d63c2";var q=$;function E(e,t,n,r,i,a){return Object(o["u"])(),Object(o["f"])(Object(o["D"])(n.is),{active:n.active,class:a.tileClasses,disabled:n.disabled,id:n.id,style:n.style},{default:Object(o["L"])(()=>[Object(o["i"])("div",{class:a.bodyClasses,"data-has-html":n.hasHtml,"data-length":n.length,"data-max-word-length":n.maxWordLength,innerHTML:n.content},null,10,["data-has-html","data-length","data-max-word-length","innerHTML"])]),_:1},8,["active","class","disabled","id","style"])}const A=Object(o["N"])("data-v-02fd6379"),N=A((function(e,t,n,r,i,a){return Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])}));var Y={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");Y.render=N,Y.__scopeId="data-v-02fd6379";var k=Y;const W=Object(o["N"])("data-v-da15d764"),X=W((function(e,t,n,r,i,a){return Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])}));var H={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");H.render=X,H.__scopeId="data-v-da15d764";var J=H,F={name:"Tile",components:{Draggable:k,Droppable:J},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},dragging:{type:Boolean,required:!1},hasHtml:{type:Boolean,required:!1},hit:{type:Boolean,required:!1},id:{required:!1},is:{type:String,required:!0},length:{type:Number,required:!1},maxWordLength:{type:Number,required:!1},miss:{type:Boolean,required:!1},over:{type:Boolean,required:!1},style:{required:!1},type:{type:String,required:!1}},computed:{bodyClasses(){return{tile__body:!0,["tile__body--has-long-word"]:this.maxWordLength>=11}},tileClasses(){return{tile:!0,["tile--"+this.type]:this.type,[this.color]:this.color,drag:this.dragging,over:this.over,hit:this.hit,miss:this.miss}}}};F.render=E;var R=F;const z=Object(o["N"])("data-v-1b81a3ee");Object(o["x"])("data-v-1b81a3ee");const G={class:"timer"},U={class:"timer__wrapper"},K={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},Z={class:"timer__circle"};Object(o["v"])();const Q=z((function(e,t,n,r,i,a){return Object(o["u"])(),Object(o["f"])(o["b"],Object(o["n"])({duration:{enter:""+e.timeouts.enter,leave:""+e.timeouts.leave},name:"timer",onBeforeEnter:a.beforeEnter,onAfterEnter:a.afterEnter,onAfterLeave:a.afterLeave},e.$attrs),{default:z(()=>[Object(o["M"])(Object(o["i"])("div",null,[Object(o["i"])("div",G,[Object(o["i"])(o["b"],{appear:"",duration:{enter:""+e.timeouts.change,leave:""+e.timeouts.change},name:"scoring",onAfterLeave:e.endScoreChange},{default:z(()=>[Object(o["M"])(Object(o["i"])("div",U,[(Object(o["u"])(),Object(o["f"])("svg",K,[Object(o["i"])("g",Z,[Object(o["i"])("circle",{class:["timer__path-elapsed",a.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(o["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[e.severity,a.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(o["i"])("span",{class:["timer__label",a.scoreClass]},Object(o["F"])(n.score||e.formatted),3)],512),[[o["J"],!e.scoring]])]),_:1},8,["duration","onAfterLeave"])])],512),[[o["J"],n.active]])]),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave"])})),V={ALERT:"alert",WARN:"warn",SUCCESS:"success"},ee={UP:"up",DOWN:"down"};function te({duration:e,score:t,interval:n,warn:r,alert:i,debug:a=!1,emit:s}){const c=Object(o["y"])({elapsed:0,expired:Object(o["d"])(()=>c.remaining<=0),formatted:Object(o["d"])(()=>{const e=Math.floor(c.remaining/6e4),t=Math.floor(c.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`}),intervalId:null,progress:Object(o["d"])(()=>Math.round(c.remaining/(1e3*Object(o["I"])(e))*1e4)/100),remaining:Object(o["d"])(()=>1e3*Object(o["I"])(e)-c.elapsed),scoring:!1,scoringStatus:"",SCORING_STATUS:ee,severity:Object(o["d"])(()=>c.progress<=r?c.progress<=i?V.ALERT:V.WARN:V.SUCCESS)});function d(){a&&console.log("timer start..."),c.elapsed=0,c.intervalId=setInterval(()=>{c.elapsed+=n},n)}function l(e){c.elapsed=e}function u(){a&&console.log("timer scoring end..."),c.scoring=!1,c.scoringStatus=""}function m(){a&&console.log("timer end..."),c.intervalId&&(clearInterval(c.intervalId),c.intervalId=null)}return Object(o["K"])(t,(e,t)=>{a&&console.log("score changed: ",t,"=>",e),c.scoring=!0,c.scoringStatus=e>t?ee.UP:ee.DOWN}),Object(o["K"])(()=>c.expired,(e,t)=>{e&&!t&&(a&&console.log("timer expired: ",t,"=>",e),m(),s("timer-expired"))}),Object(o["q"])(()=>{a&&console.log("timer cleaning up..."),m()}),{...Object(o["H"])(c),startTimer:d,endTimer:m,setElapsed:l,endScoreChange:u}}const ne=283;var oe={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup(e,{emit:t}){const{duration:n,score:r}=Object(o["H"])(e),i=te({duration:n,score:r,interval:e.config.timeouts.interval,warn:e.config.thresholds.warn,alert:e.config.thresholds.alert,debug:e.config.debug,emit:t});return{...i,...e.config}},computed:{scoreClass(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*ne).toFixed(0)} ${ne}`}},methods:{beforeEnter(){this.debug&&console.log("before entered..."),this.setElapsed(0)},afterEnter(){this.debug&&console.log("timer entered..."),this.startTimer()},afterLeave(){this.debug&&console.log("timer left...")}}};n("42b6");oe.render=Q,oe.__scopeId="data-v-1b81a3ee";var re=oe,ie={name:"Game",components:{DndBoard:q,Tile:R,Timer:re},props:["match"],setup(e){const{match:t}=Object(o["H"])(e);return{...D(t)}},methods:{boardClasses(e){return{"tile-board":!0,["tile-board--"+e]:e,["tile-board--"+this.itemsPerBoard]:this.itemsPerBoard,["tile-board--"+this.colorScheme]:this.colorScheme,"tile-board--disabled":!this.playing}},boardStyles(e){return{...this.textScaling[e]&&{"--text-scale-factor":""+this.textScaling[e]}}},tileAfterLeave(e,t){this.config.game.debug&&console.log(`${t} (${e.id}) leaving...`),this.playing&&this.onTileLeft(e.id,t)}}};n("ed88");ie.render=O;var ae=ie,se={name:"Match",components:{Game:ae},computed:{matchId(){return this.$route.params.id}},data(){return{match:{}}},methods:{},async created(){const e=await p(this.matchId);this.match=e.data}};n("0244");se.render=d,se.__scopeId="data-v-ffe2064c";var ce=se;const de=Object(o["N"])("data-v-6c3a223a");Object(o["x"])("data-v-6c3a223a");const le={class:"p-4"};Object(o["v"])();const ue=de((function(e,t,n,r,i,a){const s=Object(o["C"])("router-link");return Object(o["u"])(),Object(o["f"])("div",le,[Object(o["i"])("ul",null,[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(i.games,e=>(Object(o["u"])(),Object(o["f"])("li",{key:e.id},[Object(o["i"])(s,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:de(()=>[Object(o["h"])(Object(o["F"])(e.title),1)]),_:2},1032,["to"])]))),128))])])}));u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var me={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};n("3843");me.render=ue,me.__scopeId="data-v-6c3a223a";var ge=me;const he=[{path:"/",name:"matches",component:ge,props:!1},{path:"/match/:id",name:"match",component:ce,props:!1}],fe=Object(s["a"])({history:Object(s["b"])(),routes:he});var pe=fe;Object(o["e"])(a).use(pe).mount("#quizdini")},"9cdc":function(e,t,n){"use strict";n("c701")},a19a:function(e,t,n){},c701:function(e,t,n){},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},ed88:function(e,t,n){"use strict";n("32e3")},ef2c:function(e,t,n){"use strict";n("cb08")},f871:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app.f8263816.js.map