(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02cd":function(e,t,n){"use strict";n("a19a")},"0c7c":function(e,t,n){},"15a6":function(e,t,n){},3843:function(e,t,n){"use strict";n("0c7c")},"42b6":function(e,t,n){"use strict";n("15a6")},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var o=n("7a23");function i(e,t,n,i,r,a){const s=Object(o["C"])("router-view");return Object(o["u"])(),Object(o["f"])(s)}var r={name:"App"};n("9299");r.render=i;var a=r,s=n("6c02");const c=Object(o["N"])("data-v-50b87ca3"),l=c((e,t,n,i,r,a)=>{const s=Object(o["C"])("Loader"),l=Object(o["C"])("Game");return Object(o["u"])(),Object(o["f"])(o["b"],{mode:"out-in",name:"match-transition"},{default:c(()=>[i.showLoader?(Object(o["u"])(),Object(o["f"])(s,{key:"1"})):(Object(o["u"])(),Object(o["f"])(l,{key:"2",match:i.match},null,8,["match"]))]),_:1})});var d=n("bc3a"),u=n.n(d);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const m={timeout:3e4},g=async({url:e,config:t=m})=>{console.log("url",e),console.log("config",t);try{const n=await u.a.get(e,t);return{data:n.data}}catch(n){return{error:n.response.data}}},h=async({url:e,data:t,config:n=m})=>{console.log("url",e),console.log(JSON.stringify(t,null,4)),console.log("config",n);try{const o=await u.a.post(e,t,n);return{data:o.data}}catch(o){return{error:o.response.data}}},f="/api/match",b=e=>()=>g({url:`${f}/${e}`});function p({callback:e,immediate:t=!0,deps:n=[]}){const i=Object(o["y"])({data:null,error:null,executions:0,inError:!1,initialized:!1,loading:!1,success:null});return Object(o["J"])(n,()=>{console.log("watch fired!"),i.loading=!0,setTimeout(async()=>{const t=await e(),{data:n=null,error:o=null}=t;return i.data=n,i.error=o,i.executions+=1,i.initialized=!!i.executions,i.loading=!1,n?i.success=!0:o?i.inError=!0:void 0},5e3)},{immediate:t}),{...Object(o["G"])(i)}}var v={board:{debug:!0,timeouts:{throttle:33}},game:{debug:!0,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:800,miss:800,shuffle:600}},timer:{debug:!1,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}};n("ddb0");const O={class:"match__game"};function j(e,t,n,i,r,a){const s=Object(o["C"])("Tile"),c=Object(o["C"])("DndBoard"),l=Object(o["C"])("Timer");return Object(o["u"])(),Object(o["f"])(o["a"],null,[!e.playing&&e.matches.length?(Object(o["u"])(),Object(o["f"])("button",{key:0,onClick:t[1]||(t[1]=(...t)=>e.startGame(...t))}," Start Game ")):Object(o["g"])("",!0),Object(o["i"])("div",O,[Object(o["i"])(c,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(o["L"])(()=>[Object(o["i"])(o["c"],{class:a.boardClasses("terms"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:a.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=e=>a.tileAfterLeave(e,"term"))},{default:Object(o["L"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeTerms,e=>(Object(o["u"])(),Object(o["f"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:e.dragging,disabled:!1,color:e.color,dragging:e.dragging,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Draggable",type:"term"},null,8,["id","content","style","active","color","dragging","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"]),Object(o["i"])(o["c"],{class:a.boardClasses("definitions"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:a.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=e=>a.tileAfterLeave(e,"definition"))},{default:Object(o["L"])(()=>[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(e.activeDefinitions,e=>(Object(o["u"])(),Object(o["f"])(s,{key:e.id,id:e.id,content:e.content,style:[e.style],active:!1,disabled:!1,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Droppable",type:"definition"},null,8,["id","content","style","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"])]),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(o["i"])(l,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])],64)}n("13d5"),n("5319");var y=n("8dee"),x=n.n(y);function w(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function _(e,t,n="id"){return Object.prototype.hasOwnProperty.call(t,n)?e.map(e=>e[n]!==t[n]?e:{...e,...t}):e}function S(e,t,n="id",o){if(!Object.prototype.hasOwnProperty.call(t,n))return e;const i=e.find(e=>e[n]===t[n]),r=o?o(i):t;return i?e.map(e=>e[n]!==r[n]?e:{...e,...r}):e.concat(r)}function L(e,t){const n=Object(o["k"])();let i=null;function r(){a(),i=setTimeout(()=>{(arguments&&t(...arguments)||t)()},Object(o["H"])(e))}function a(){clearTimeout(i)}return n?Object(o["t"])(()=>{console.log("cleaning up!"),i&&a()}):console.log("not in current instance"),[a,r]}const I="/api/ping",C=e=>h({url:""+I,data:e});function D(e,t=!0){const[,n]=L(v.tile.timeouts.hit,()=>{r.terms=r.terms.map(e=>e.matched&&e.show?{...e,show:!1}:e),r.definitions=r.definitions.map(e=>e.matched&&e.show?{...e,show:!1}:e)}),[,i]=L(v.tile.timeouts.shuffle,()=>{r.shuffling=!1}),r=Object(o["y"])({activeDefinitions:Object(o["d"])(()=>r.definitions.filter(e=>e.show)),activeTerms:Object(o["d"])(()=>r.terms.filter(e=>e.show)),canDnd:Object(o["d"])(()=>r.playing&&!r.shuffling&&!r.termIsExiting),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(o["d"])(()=>r.terms.reduce((e,t)=>t.exited?e+=1:e,0)),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(o["d"])(()=>!!r.terms.filter(e=>e.matched&&!e.exited).length),terms:[],textScaling:{terms:1,definitions:1},title:""});function a(e){const t=(e,t)=>{const n=/<[^>]*>/gi,o=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return o.body.textContent},n=new DOMParser;return e.map(e=>{const o=t(n,e.term),i=t(n,e.definition);return{term:{answer:e.definition,content:e.term,dragging:!1,exited:!1,hasHtml:o.length!==e.term.length,hit:!1,id:x.a.generate(),length:o.length,matched:!1,matchId:"",maxWordLength:o.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0},definition:{content:e.definition,exited:!1,hasHtml:i.length!==e.definition.length,hit:!1,id:x.a.generate(),length:i.length,matched:!1,matchId:"",maxWordLength:i.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0}}})}function s(e=[],t=""){const{[t.toLowerCase()]:n=""}=v.game.themes;if(!n)return e.map(e=>({...e,color:v.game.themes.default.colors[0]}));let o=w(n.colors.slice());return e.map(e=>{const t=o.pop();return{...e,color:t}})}function c(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function l(e,t,n,o,i,r,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":o+"px","--hit-end-ty":i+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}}function d(e,t){const{answer:n}=r.terms.find(t=>t.id===e)||{},{content:o}=r.definitions.find(e=>e.id===t)||{};return!!n&&!!o&&n===o}function u(e){const{dragId:t,dragX:n,dragY:o}=e||{};r.terms=_(r.terms,{id:t,dragging:!0,hit:!1,miss:!1,style:c(n,o,1)})}function m(e){const{dragId:t,dropId:n,over:o}=e||{};r.terms=r.terms.map(e=>({...e,over:e.id===t&&o})),r.definitions=r.definitions.map(e=>({...e,over:e.id===n}))}function g(e){const{dragId:t,dragX:o,dragY:i,dropId:a,dropX:s,dropY:u}=e||{},m=!!a&&d(t,a);if(r.terms=_(r.terms,{id:t,dragging:!1,hit:m,miss:!m,matched:m,matchId:m?a:"",over:m,style:m?l(o,i,1,s,u,1,v.tile.timeouts.hit):c(0,0,0)}),!a)return;m?r.correct++:r.incorrect++,r.definitions=_(r.definitions,{id:a,hit:m,miss:!m,matched:m,matchId:m?t:"",over:m});const{content:g}=r.terms.find(e=>e.id===t)||{};r.score=Math.max(m?r.score+1:r.score-1,0),r.stats=S(r.stats,{term:g},"term",e=>e?{term:g,hit:m?e.hit+1:e.hit,miss:m?e.miss:e.miss+1}:{term:g,hit:m?1:0,miss:m?0:1}),m&&n()}function h(e,t){switch(t){case"term":r.terms=_(r.terms,{id:e,exited:!0});break;case"definition":r.definitions=_(r.definitions,{id:e,exited:!0});break;default:return}}function f(e){const n=e.reduce((e,t)=>[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length],[]);t&&console.log(JSON.stringify(n,null,4));const{growth:o,min:i,max:a}=v.tile.text.scaling||{};r.textScaling={terms:(a*Math.pow(o,o*Math.max(n[0],n[1]/2.5))+i).toFixed(2),definitions:(a*Math.pow(o,o*Math.max(n[2],n[3]/2.5))+i).toFixed(2)},t&&console.log(JSON.stringify(r.textScaling,null,4))}function b(){console.log("dealing..."),r.matches=w(r.matches);const e=r.matches.slice(0,Math.min(r.itemsPerBoard,r.matches.length));f(e),r.terms=s(e.map(e=>e.term),r.colorScheme),r.definitions=w(e.map(e=>e.definition))}function p(){console.log("shuffling..."),r.shuffling=!0,r.terms=w(r.terms),r.definitions=w(r.definitions),i()}function O(){r.playing=!1,r.correct=0,r.incorrect=0,r.score=0,r.stats=[],r.terms=[],r.definitions=[],b(),Object(o["o"])(()=>{p(),r.playing=!0})}async function j(){console.log("game over..."),r.playing=!1,r.showBoard=!1,r.showSplash=!0,r.terms=[],r.definitions=[];const e=await C({correct:r.correct,data:r.stats,gameId:r.matchId,gameType:"M",incorrect:r.incorrect,score:r.score});t&&JSON.stringify(e.data,null,4)}return Object(o["K"])(()=>{const{matchId:t,matches:n=[],options:{duration:i=60,colorScheme:s="",itemsPerBoard:c=9}={},title:l=""}=Object(o["H"])(e);r.colorScheme=s.toLowerCase(),r.duration=i,r.matchId=t,r.itemsPerBoard=c,r.matches=a(n),r.title=l}),Object(o["J"])(()=>r.exited,(e,n)=>{t&&console.log("exited changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=n||(e===r.itemsPerBoard?(b(),Object(o["o"])(()=>p())):p())}),{config:v,...Object(o["G"])(r),deal:b,gameOver:j,onDrag:u,onDrop:g,onOver:m,onTileLeft:h,shuffle:p,startGame:O}}const M=Object(o["N"])("data-v-c03d63c2"),T=M((e,t,n,i,r,a)=>(Object(o["u"])(),Object(o["f"])("div",{class:a.classes,ref:"dndRef"},[Object(o["B"])(e.$slots,"default")],2)));var B=n("2ef0"),E=n.n(B);function P({active:e,element:t,throttleMs:n=33,debug:i=!1,emit:r}){const a=Object(o["y"])({dragged:{},listeners:[],throttledDrag:Object(o["d"])(()=>E.a.throttle(g,n,{trailing:!0}))}),s={mousedown:m,mousemove:a.throttledDrag,mouseup:h,touchstart:m,touchmove:a.throttledDrag,touchend:h};function c(e){e.forEach(n=>{i&&console.log(`adding ${n}...`),t.value.addEventListener(n,s[n]),a.listeners=a.listeners.concat(e).filter((e,t,n)=>n.indexOf(e)===t)})}function l(e){e.forEach(n=>{i&&console.log(`removing ${n}...`),t.value.removeEventListener(n,s[n]),a.listeners=a.listeners.filter(t=>e.indexOf(t)<0)})}function d(){c(["mousedown","touchstart"])}function u(){a.dragged={},l(a.listeners)}function m(e){e.stopPropagation(),i&&console.log((a.dragged.id?`${e.type} (${a.dragged.id}) `:""+e.type)+"...");const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const n="touchstart"===e.type?e.touches[0].clientX:e.clientX,o="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:r,left:s}=t.getBoundingClientRect();a.dragged={id:t.id,offsetX:n-s,offsetY:o-r,initialX:n,initialY:o};const l="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];c(l)}function g(e){e.stopPropagation();const{id:t,initialX:n,initialY:o,overId:s}=a.dragged;i&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const c="touchmove"===e.type?e.touches[0].clientX-n:e.clientX-n,l="touchmove"===e.type?e.touches[0].clientY-o:e.clientY-o;r("drag",{dragId:t,dragX:c,dragY:l});const{id:d=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};s!==d&&(i&&d&&console.log(`${t} is over ${d}...`),r("over",{dragId:t,dropId:d,over:!!d}),a.dragged={...a.dragged,overId:d})}function h(e){e.stopPropagation(),a.throttledDrag.cancel();const{id:t,initialX:n,initialY:o,offsetX:s,offsetY:c}=a.dragged;i&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const d="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,m=document.elementsFromPoint(d,u).find(e=>e.classList.contains("droppable")),{top:g,left:h}=m&&m.getBoundingClientRect()||{};r("drop",{dragId:t,dragX:m?d-n:d,dragY:m?u-o:u,dropId:m?m.id:null,dropX:m?Math.round(h-n+s):null,dropY:m?Math.round(g-o+c):null}),a.dragged={};const f="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];l(f)}return Object(o["s"])(()=>{i&&console.log(`dnd mounted (${Object(o["H"])(e)?"active":"inactive"})...`),Object(o["H"])(e.value)&&c(["mousedown","touchstart"])}),Object(o["J"])(e,(e,t)=>(i&&console.log("active changed: ",t,"=>",e),e&&!t?d():u())),{...Object(o["G"])(a)}}var k={name:"DndBoard",props:["active","config"],setup(e,{emit:t}){const n=Object(o["z"])(null),{active:i}=Object(o["G"])(e);return{...e.config,...P({active:i,element:n,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:t}),dndRef:n}},computed:{classes(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("02cd");k.render=T,k.__scopeId="data-v-c03d63c2";var q=k;function $(e,t,n,i,r,a){return Object(o["u"])(),Object(o["f"])(Object(o["D"])(n.is),{active:n.active,class:a.tileClasses,disabled:n.disabled,id:n.id,style:n.style},{default:Object(o["L"])(()=>[Object(o["i"])("div",{class:a.bodyClasses,"data-has-html":n.hasHtml,"data-length":n.length,"data-max-word-length":n.maxWordLength,innerHTML:n.content},null,10,["data-has-html","data-length","data-max-word-length","innerHTML"])]),_:1},8,["active","class","disabled","id","style"])}const A=Object(o["N"])("data-v-02fd6379"),N=A((e,t,n,i,r,a)=>(Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])));var Y={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");Y.render=N,Y.__scopeId="data-v-02fd6379";var W=Y;const X=Object(o["N"])("data-v-da15d764"),H=X((e,t,n,i,r,a)=>(Object(o["u"])(),Object(o["f"])("div",{id:n.id,class:a.classes},[Object(o["B"])(e.$slots,"default")],10,["id"])));var G={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");G.render=H,G.__scopeId="data-v-da15d764";var z=G,J={name:"Tile",components:{Draggable:W,Droppable:z},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},dragging:{type:Boolean,required:!1},hasHtml:{type:Boolean,required:!1},hit:{type:Boolean,required:!1},id:{required:!1},is:{type:String,required:!0},length:{type:Number,required:!1},maxWordLength:{type:Number,required:!1},miss:{type:Boolean,required:!1},over:{type:Boolean,required:!1},style:{required:!1},type:{type:String,required:!1}},computed:{bodyClasses(){return{tile__body:!0,["tile__body--has-long-word"]:this.maxWordLength>=11}},tileClasses(){return{tile:!0,["tile--"+this.type]:this.type,[this.color]:this.color,hit:this.hit,miss:this.miss,drag:this.dragging,over:this.over}}}};J.render=$;var R=J;const F=Object(o["N"])("data-v-1b81a3ee");Object(o["x"])("data-v-1b81a3ee");const U={class:"timer"},Z={class:"timer__wrapper"},K={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},V={class:"timer__circle"};Object(o["v"])();const Q=F((e,t,n,i,r,a)=>(Object(o["u"])(),Object(o["f"])(o["b"],Object(o["n"])({duration:{enter:""+e.timeouts.enter,leave:""+e.timeouts.leave},name:"timer",onBeforeEnter:a.beforeEnter,onAfterEnter:a.afterEnter,onAfterLeave:a.afterLeave},e.$attrs),{default:F(()=>[Object(o["M"])(Object(o["i"])("div",null,[Object(o["i"])("div",U,[Object(o["i"])(o["b"],{appear:"",duration:{enter:""+e.timeouts.change,leave:""+e.timeouts.change},name:"scoring",onAfterLeave:e.endScoreChange},{default:F(()=>[Object(o["M"])(Object(o["i"])("div",Z,[(Object(o["u"])(),Object(o["f"])("svg",K,[Object(o["i"])("g",V,[Object(o["i"])("circle",{class:["timer__path-elapsed",a.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(o["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[e.severity,a.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(o["i"])("span",{class:["timer__label",a.scoreClass]},Object(o["F"])(n.score||e.formatted),3)],512),[[o["I"],!e.scoring]])]),_:1},8,["duration","onAfterLeave"])])],512),[[o["I"],n.active]])]),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave"]))),ee={ALERT:"alert",WARN:"warn",SUCCESS:"success"},te={UP:"up",DOWN:"down"};function ne({duration:e,score:t,interval:n,warn:i,alert:r,debug:a=!1,emit:s}){const c=Object(o["y"])({elapsed:0,expired:Object(o["d"])(()=>c.remaining<=0),formatted:Object(o["d"])(()=>{const e=Math.floor(c.remaining/6e4),t=Math.floor(c.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`}),intervalId:null,progress:Object(o["d"])(()=>Math.round(c.remaining/(1e3*Object(o["H"])(e))*1e4)/100),remaining:Object(o["d"])(()=>1e3*Object(o["H"])(e)-c.elapsed),scoring:!1,scoringStatus:"",SCORING_STATUS:te,severity:Object(o["d"])(()=>c.progress<=i?c.progress<=r?ee.ALERT:ee.WARN:ee.SUCCESS)});function l(){a&&console.log("timer start..."),c.elapsed=0,c.intervalId=setInterval(()=>{c.elapsed+=n},n)}function d(e){c.elapsed=e}function u(){a&&console.log("timer scoring end..."),c.scoring=!1,c.scoringStatus=""}function m(){a&&console.log("timer end..."),c.intervalId&&(clearInterval(c.intervalId),c.intervalId=null)}return Object(o["J"])(t,(e,t)=>{a&&console.log("score changed: ",t,"=>",e),c.scoring=!0,c.scoringStatus=e>t?te.UP:te.DOWN}),Object(o["J"])(()=>c.expired,(e,t)=>{e&&!t&&(a&&console.log("timer expired: ",t,"=>",e),m(),s("timer-expired"))}),Object(o["q"])(()=>{a&&console.log("timer cleaning up..."),m()}),{...Object(o["G"])(c),startTimer:l,endTimer:m,setElapsed:d,endScoreChange:u}}const oe=283;var ie={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup(e,{emit:t}){const{duration:n,score:i}=Object(o["G"])(e),r=ne({duration:n,score:i,interval:e.config.timeouts.interval,warn:e.config.thresholds.warn,alert:e.config.thresholds.alert,debug:e.config.debug,emit:t});return{...r,...e.config}},computed:{scoreClass(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*oe).toFixed(0)} ${oe}`}},methods:{beforeEnter(){this.debug&&console.log("before entered..."),this.setElapsed(0)},afterEnter(){this.debug&&console.log("timer entered..."),this.startTimer()},afterLeave(){this.debug&&console.log("timer left...")}}};n("42b6");ie.render=Q,ie.__scopeId="data-v-1b81a3ee";var re=ie,ae={name:"Game",components:{DndBoard:q,Tile:R,Timer:re},props:["match"],setup(e){const{match:t}=Object(o["G"])(e);return console.log(typeof t),{...D(t)}},methods:{boardClasses(e){return{"tile-board":!0,["tile-board--"+e]:e,["tile-board--"+this.itemsPerBoard]:this.itemsPerBoard,["tile-board--"+this.colorScheme]:this.colorScheme,"tile-board--disabled":!this.playing}},boardStyles(e){return{...this.textScaling[e]&&{"--text-scale-factor":""+this.textScaling[e]}}},tileAfterLeave(e,t){this.config.game.debug&&console.log(`${t} (${e.id}) leaving...`),this.playing&&this.onTileLeft(e.id,t)}}};n("dbe5");ae.render=j;var se=ae;const ce=Object(o["N"])("data-v-4e0eb0b4");Object(o["x"])("data-v-4e0eb0b4");const le={class:"page page--loader page--full"},de=Object(o["i"])("button",{class:"btn btn-refresh",title:"Crude page reload"},"Replay",-1),ue=Object(o["i"])("section",{class:"loader"},[Object(o["i"])("svg",{class:"loader__logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475 475"},[Object(o["i"])("circle",{class:"badge",style:{"paint-order":"stroke fill markers"},cx:"237.5",cy:"237.5",r:"237.5"}),Object(o["i"])("path",{class:"tassel-cap",d:"M405.4 286.9c0 6.1-5 11.1-11.1 11.1 -6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1C400.4 275.8 405.4 280.7 405.4 286.9"}),Object(o["i"])("path",{class:"tassel",d:"M391 306.4l-14.7 25.5c-1.4 2.5 0.4 5.6 3.2 5.6h29.4c2.9 0 4.7-3.1 3.2-5.6l-14.7-25.5C396 304 392.5 304 391 306.4"}),Object(o["i"])("path",{class:"brim",d:"M407.5 240.8l-104.8-47.2c3.4-9.1 6.5-18.7 9.2-28.7 12.7-47.6 12.7-92.5 2.2-121.3 -23.4 19.9-45.7 58.8-58.3 106.4 -1.8 6.9-3.4 13.7-4.7 20.4l-4.2-1.9c-5.9-2.7-12.7-2.7-18.6 0l-4.2 1.9c-1.3-6.7-2.9-13.5-4.7-20.4 -12.7-47.6-35-86.5-58.3-106.4 -10.4 28.9-10.4 73.7 2.2 121.3 2.7 10 5.8 19.6 9.2 28.7l-104.8 47.2c-6.9 3.1-6.9 12.9 0 16l87.6 39.4c0 0 0-48 0-48.3 0.8-24.8 37.4-44.8 82.4-44.8 45 0 81.6 20 82.4 44.8 0 0.3 0 48.3 0 48.3l87.6-39.4C414.4 253.7 414.4 243.9 407.5 240.8"}),Object(o["i"])("path",{class:"brim-shade",d:"M319.9 248c-0.8 24.8-37.3 44.8-82.3 44.8 -45 0-81.5-20-82.3-44.8 0 0.3 0 0.6 0 0.8v47.5l73.1 32.9c5.9 2.7 12.7 2.7 18.6 0l73.1-32.9V248.8C319.9 248.5 319.9 248.3 319.9 248"}),Object(o["i"])("path",{class:"liner",d:"M237.5 203.2c-45 0-81.5 20-82.3 44.8 0.8 24.8 37.4 44.8 82.4 44.8s81.6-20 82.4-44.8C319.1 223.2 282.5 203.2 237.5 203.2"}),Object(o["i"])("path",{class:"crown",d:"M228.2 329.2l-73.1-32.9v89.6c0-25.2 36.9-45.6 82.4-45.6s82.4 20.4 82.4 45.6v-89.6l-73.1 32.9C240.9 331.8 234.1 331.8 228.2 329.2"}),Object(o["i"])("path",{class:"tip",d:"M319.9 385.9c0 25.2-36.9 45.6-82.4 45.6 -45.5 0-82.4-20.4-82.4-45.6s36.9-45.6 82.4-45.6C283 340.3 319.9 360.7 319.9 385.9"})]),Object(o["i"])("div",{class:"loader__label"},"Loading...")],-1);Object(o["v"])();const me=ce((e,t,n,i,r,a)=>(Object(o["u"])(),Object(o["f"])("div",le,[de,ue])));var ge={name:"Loader"};n("b221");ge.render=me,ge.__scopeId="data-v-4e0eb0b4";var he=ge,fe={name:"Match",components:{Game:se,Loader:he},computed:{matchId(){const{matchId:e=null}=this.match||{};return e}},setup(){const e=Object(o["z"])(""),t=Object(s["c"])(),{data:n,error:i,inError:r,initialized:a,loading:c,success:l}=p({callback:b(t.params.id),immediate:!0,deps:[()=>t.params]});return{x:e,match:n,showLoader:c}}};n("6b87");fe.render=l,fe.__scopeId="data-v-50b87ca3";var be=fe;const pe=Object(o["N"])("data-v-6c3a223a");Object(o["x"])("data-v-6c3a223a");const ve={class:"p-4"};Object(o["v"])();const Oe=pe((e,t,n,i,r,a)=>{const s=Object(o["C"])("router-link");return Object(o["u"])(),Object(o["f"])("div",ve,[Object(o["i"])("ul",null,[(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(r.games,e=>(Object(o["u"])(),Object(o["f"])("li",{key:e.id},[Object(o["i"])(s,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:pe(()=>[Object(o["h"])(Object(o["F"])(e.title),1)]),_:2},1032,["to"])]))),128))])])});u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var je={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};n("3843");je.render=Oe,je.__scopeId="data-v-6c3a223a";var ye=je;const xe=[{path:"/",name:"matches",component:ye,props:!1},{path:"/match/:id",name:"match",component:be,props:!1}],we=Object(s["a"])({history:Object(s["b"])(),routes:xe});var _e=we;Object(o["e"])(a).use(_e).mount("#quizdini")},"6b87":function(e,t,n){"use strict";n("732a")},"732a":function(e,t,n){},"798c":function(e,t,n){},9299:function(e,t,n){"use strict";n("bdfb")},a19a:function(e,t,n){},a7a8:function(e,t,n){},b221:function(e,t,n){"use strict";n("a7a8")},bdfb:function(e,t,n){},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},dbe5:function(e,t,n){"use strict";n("798c")},ef2c:function(e,t,n){"use strict";n("cb08")},faed:function(e,t,n){}});
//# sourceMappingURL=app.24ee87ab.js.map