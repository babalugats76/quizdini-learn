(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],u=0,g=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(g.length)g.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02cd":function(e,t,n){"use strict";n("a19a")},"0c7c":function(e,t,n){},"17b7":function(e,t,n){"use strict";n("f3ff")},"17d8":function(e,t,n){"use strict";n("50b5")},2949:function(e,t,n){"use strict";n("d4a5")},3843:function(e,t,n){"use strict";n("0c7c")},"50b5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var o=n("7a23");function a(e,t,n,a,r,i){const s=Object(o["D"])("router-view");return Object(o["v"])(),Object(o["g"])(s)}var r={name:"App"};n("9299");r.render=a;var i=r,s=n("6c02");const c=Object(o["P"])("data-v-682fd584"),l=c((e,t,n,a,r,i)=>{const s=Object(o["D"])("Loader"),l=Object(o["D"])("Game");return Object(o["v"])(),Object(o["g"])(o["c"],{duration:1e3,mode:"out-in",name:"mt"},{default:c(()=>[a.showLoader?(Object(o["v"])(),Object(o["g"])(s,{key:"1"})):(Object(o["v"])(),Object(o["g"])(l,{key:"2",match:a.match},null,8,["match"]))]),_:1})});var d=n("bc3a"),u=n.n(d);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const g={timeout:3e4},m=async({url:e,config:t=g})=>{console.log("url",e),console.log("config",t);try{const n=await u.a.get(e,t);return{data:n.data}}catch(n){return{error:n.response.data}}},h=async({url:e,data:t,config:n=g})=>{console.log("url",e),console.log(JSON.stringify(t,null,4)),console.log("config",n);try{const o=await u.a.post(e,t,n);return{data:o.data}}catch(o){return{error:o.response.data}}},p="/api/match",f=e=>()=>m({url:`${p}/${e}`});function b({callback:e,immediate:t=!0,deps:n=[]}){const a=Object(o["z"])({data:null,error:null,executions:0,inError:!1,initialized:!1,loading:!1,success:null});return Object(o["K"])(n,()=>{console.log("watch fired!"),a.loading=!0,setTimeout(async()=>{const t=await e(),{data:n=null,error:o=null}=t;return a.data=n,a.error=o,a.executions+=1,a.initialized=!!a.executions,a.loading=!1,n?a.success=!0:o?a.inError=!0:void 0},5e3)},{immediate:t}),{...Object(o["H"])(a)}}var v={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!1,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},splash:{timeouts:{enter:800,leave:800}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:800,miss:800,shuffle:600}},timer:{debug:!0,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,delay:1500,enter:1e3,leave:1e3}}};n("ddb0");const j={key:"2",class:"match__game"};function O(e,t,n,a,r,i){const s=Object(o["D"])("Splash"),c=Object(o["D"])("Tile"),l=Object(o["D"])("DndBoard"),d=Object(o["D"])("Timer");return Object(o["v"])(),Object(o["g"])(o["c"],{duration:1e3,mode:"out-in",name:"mt"},{default:Object(o["M"])(()=>[e.showBoard?(Object(o["v"])(),Object(o["g"])("div",j,[Object(o["j"])("button",{onClick:t[1]||(t[1]=Object(o["O"])((...t)=>e.togglePlaying(...t),["prevent"]))},"Toggle Playing"),Object(o["j"])(l,{active:e.canDnd,class:"match__board",config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(o["M"])(()=>[Object(o["j"])(o["d"],{class:i.boardClasses("terms"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"terms",tag:"div",style:i.boardStyles("terms"),onAfterLeave:t[2]||(t[2]=e=>i.tileAfterLeave(e,"term"))},{default:Object(o["M"])(()=>[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["B"])(e.activeTerms,e=>(Object(o["v"])(),Object(o["g"])(c,{key:e.id,id:e.id,content:e.content,style:[e.style],active:e.dragging,disabled:!1,color:e.color,dragging:e.dragging,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Draggable",type:"term"},null,8,["id","content","style","active","color","dragging","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"]),Object(o["j"])(o["d"],{class:i.boardClasses("definitions"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",name:"definitions",tag:"div",style:i.boardStyles("definitions"),onAfterLeave:t[3]||(t[3]=e=>i.tileAfterLeave(e,"definition"))},{default:Object(o["M"])(()=>[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["B"])(e.activeDefinitions,e=>(Object(o["v"])(),Object(o["g"])(c,{key:e.id,id:e.id,content:e.content,style:[e.style],active:!1,disabled:!1,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,is:"Droppable",type:"definition"},null,8,["id","content","style","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"])]),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(o["j"])(d,{onTimerExpired:e.gameOver,class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score},null,8,["onTimerExpired","active","config","duration","score"])])):(Object(o["v"])(),Object(o["g"])(s,{config:e.config.splash,showModal:!e.showBoard,key:"1",onStart:e.startGame},null,8,["config","showModal","onStart"]))]),_:1})}n("13d5"),n("5319");var y=n("8dee"),w=n.n(y);function x(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function _(e,t,n="id"){return Object.prototype.hasOwnProperty.call(t,n)?e.map(e=>e[n]!==t[n]?e:{...e,...t}):e}function S(e,t,n="id",o){if(!Object.prototype.hasOwnProperty.call(t,n))return e;const a=e.find(e=>e[n]===t[n]),r=o?o(a):t;return a?e.map(e=>e[n]!==r[n]?e:{...e,...r}):e.concat(r)}function I(e,t){const n=Object(o["l"])();let a=null;function r(){i(),a=setTimeout(()=>t(),Object(o["I"])(e))}function i(){clearTimeout(a)}return n?Object(o["u"])(()=>{console.log("cleaning up!"),a&&i()}):console.log("not in current instance"),[i,r]}const M="/api/ping",C=e=>h({url:""+M,data:e});function L(e,t=!0){const[,n]=I(v.tile.timeouts.hit,()=>{r.terms=r.terms.map(e=>e.matched&&e.show?{...e,show:!1}:e),r.definitions=r.definitions.map(e=>e.matched&&e.show?{...e,show:!1}:e)}),[,a]=I(v.tile.timeouts.shuffle,()=>{r.shuffling=!1}),r=Object(o["z"])({activeDefinitions:Object(o["e"])(()=>r.definitions.filter(e=>e.show)),activeTerms:Object(o["e"])(()=>r.terms.filter(e=>e.show)),canDnd:Object(o["e"])(()=>r.playing&&!r.shuffling&&!r.termIsExiting),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(o["e"])(()=>r.terms.reduce((e,t)=>t.exited?e+=1:e,0)),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!1,shuffling:!1,stats:[],termIsExiting:Object(o["e"])(()=>!!r.terms.filter(e=>e.matched&&!e.exited).length),terms:[],textScaling:{terms:1,definitions:1},title:""});function i(e){const t=(e,t)=>{const n=/<[^>]*>/gi,o=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return o.body.textContent},n=new DOMParser;return e.map(e=>{const o=t(n,e.term),a=t(n,e.definition);return{term:{answer:e.definition,content:e.term,dragging:!1,exited:!1,hasHtml:o.length!==e.term.length,hit:!1,id:w.a.generate(),length:o.length,matched:!1,matchId:"",maxWordLength:o.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0},definition:{content:e.definition,exited:!1,hasHtml:a.length!==e.definition.length,hit:!1,id:w.a.generate(),length:a.length,matched:!1,matchId:"",maxWordLength:a.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0}}})}function s(e=[],t=""){const{[t.toLowerCase()]:n=""}=v.game.themes;if(!n)return e.map(e=>({...e,color:v.game.themes.default.colors[0]}));let o=x(n.colors.slice());return e.map(e=>{const t=o.pop();return{...e,color:t}})}function c(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function l(e,t,n,o,a,r,i){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":o+"px","--hit-end-ty":a+"px","--hit-end-tz":r+"px","--hit-duration":i+"ms"}}function d(e,t){const{answer:n}=r.terms.find(t=>t.id===e)||{},{content:o}=r.definitions.find(e=>e.id===t)||{};return!!n&&!!o&&n===o}function u(e){const{dragId:t,dragX:n,dragY:o}=e||{};r.terms=_(r.terms,{id:t,dragging:!0,hit:!1,miss:!1,style:c(n,o,1)})}function g(e){const{dragId:t,dropId:n,over:o}=e||{};r.terms=r.terms.map(e=>({...e,over:e.id===t&&o})),r.definitions=r.definitions.map(e=>({...e,over:e.id===n}))}function m(e){const{dragId:t,dragX:o,dragY:a,dropId:i,dropX:s,dropY:u}=e||{},g=!!i&&d(t,i);if(r.terms=_(r.terms,{id:t,dragging:!1,hit:g,miss:!g,matched:g,matchId:g?i:"",over:g,style:g?l(o,a,1,s,u,1,v.tile.timeouts.hit):c(0,0,0)}),!i)return;g?r.correct++:r.incorrect++,r.definitions=_(r.definitions,{id:i,hit:g,miss:!g,matched:g,matchId:g?t:"",over:g});const{content:m}=r.terms.find(e=>e.id===t)||{};r.score=Math.max(g?r.score+1:r.score-1,0),r.stats=S(r.stats,{term:m},"term",e=>e?{term:m,hit:g?e.hit+1:e.hit,miss:g?e.miss:e.miss+1}:{term:m,hit:g?1:0,miss:g?0:1}),g&&n()}function h(e,t){switch(t){case"term":r.terms=_(r.terms,{id:e,exited:!0});break;case"definition":r.definitions=_(r.definitions,{id:e,exited:!0});break;default:return}}function p(e){const n=e.reduce((e,t)=>[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length],[]);t&&console.log(JSON.stringify(n,null,4));const{growth:o,min:a,max:i}=v.tile.text.scaling||{};r.textScaling={terms:(i*Math.pow(o,o*Math.max(n[0],n[1]/2.5))+a).toFixed(2),definitions:(i*Math.pow(o,o*Math.max(n[2],n[3]/2.5))+a).toFixed(2)},t&&console.log(JSON.stringify(r.textScaling,null,4))}function f(){console.log("dealing..."),r.matches=x(r.matches);const e=r.matches.slice(0,Math.min(r.itemsPerBoard,r.matches.length));p(e),r.terms=s(e.map(e=>e.term),r.colorScheme),r.definitions=x(e.map(e=>e.definition))}function b(){console.log("shuffling..."),r.shuffling=!0,r.terms=x(r.terms),r.definitions=x(r.definitions),a()}function j(){r.correct=0,r.definitions=[],r.incorrect=0,r.playing=!1,r.score=0,r.showBoard=!1,r.stats=[],r.terms=[],f(),Object(o["p"])(()=>{b(),r.playing=!0,r.showBoard=!0})}async function O(){console.log("game over..."),r.playing=!1,r.showBoard=!1,r.terms=[],r.definitions=[];const e=await C({correct:r.correct,data:r.stats,gameId:r.matchId,gameType:"M",incorrect:r.incorrect,score:r.score});t&&JSON.stringify(e.data,null,4)}function y(){console.log("toggle playing fired!"),r.playing=!r.playing}return Object(o["L"])(()=>{const{matchId:t,matches:n=[],options:{duration:a=60,colorScheme:s="",itemsPerBoard:c=9}={},title:l=""}=Object(o["I"])(e);r.colorScheme=s.toLowerCase(),r.duration=a,r.matchId=t,r.itemsPerBoard=c,r.matches=i(n),r.title=l}),Object(o["K"])(()=>r.exited,(e,n)=>{t&&console.log("exited changed: ",JSON.stringify(n),"=>",JSON.stringify(e)),e<=n||(e===r.itemsPerBoard?(f(),Object(o["p"])(()=>b())):b())}),{config:v,...Object(o["H"])(r),deal:f,gameOver:O,onDrag:u,onDrop:m,onOver:g,onTileLeft:h,shuffle:b,startGame:j,togglePlaying:y}}const D=Object(o["P"])("data-v-c03d63c2"),P=D((e,t,n,a,r,i)=>(Object(o["v"])(),Object(o["g"])("div",{class:i.classes,ref:"dndRef"},[Object(o["C"])(e.$slots,"default")],2)));var B=n("2ef0"),T=n.n(B);function k({active:e,element:t,throttleMs:n=33,debug:a=!1,emit:r}){const i=Object(o["z"])({dragged:{},listeners:[],throttledDrag:Object(o["e"])(()=>T.a.throttle(m,n,{trailing:!0}))}),s={mousedown:g,mousemove:i.throttledDrag,mouseup:h,touchstart:g,touchmove:i.throttledDrag,touchend:h};function c(e){e.forEach(n=>{a&&console.log(`adding ${n}...`),t.value.addEventListener(n,s[n]),i.listeners=i.listeners.concat(e).filter((e,t,n)=>n.indexOf(e)===t)})}function l(e){e.forEach(n=>{a&&console.log(`removing ${n}...`),t.value.removeEventListener(n,s[n]),i.listeners=i.listeners.filter(t=>e.indexOf(t)<0)})}function d(){c(["mousedown","touchstart"])}function u(){i.dragged={},l(i.listeners)}function g(e){e.stopPropagation(),a&&console.log((i.dragged.id?`${e.type} (${i.dragged.id}) `:""+e.type)+"...");const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const n="touchstart"===e.type?e.touches[0].clientX:e.clientX,o="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:r,left:s}=t.getBoundingClientRect();i.dragged={id:t.id,offsetX:n-s,offsetY:o-r,initialX:n,initialY:o};const l="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];c(l)}function m(e){e.stopPropagation();const{id:t,initialX:n,initialY:o,overId:s}=i.dragged;a&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const c="touchmove"===e.type?e.touches[0].clientX-n:e.clientX-n,l="touchmove"===e.type?e.touches[0].clientY-o:e.clientY-o;r("drag",{dragId:t,dragX:c,dragY:l});const{id:d=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};s!==d&&(a&&d&&console.log(`${t} is over ${d}...`),r("over",{dragId:t,dropId:d,over:!!d}),i.dragged={...i.dragged,overId:d})}function h(e){e.stopPropagation(),i.throttledDrag.cancel();const{id:t,initialX:n,initialY:o,offsetX:s,offsetY:c}=i.dragged;a&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const d="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,g=document.elementsFromPoint(d,u).find(e=>e.classList.contains("droppable")),{top:m,left:h}=g&&g.getBoundingClientRect()||{};r("drop",{dragId:t,dragX:g?d-n:d,dragY:g?u-o:u,dropId:g?g.id:null,dropX:g?Math.round(h-n+s):null,dropY:g?Math.round(m-o+c):null}),i.dragged={};const p="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];l(p)}return Object(o["t"])(()=>{a&&console.log(`dnd mounted (${Object(o["I"])(e)?"active":"inactive"})...`),Object(o["I"])(e.value)&&c(["mousedown","touchstart"])}),Object(o["K"])(e,(e,t)=>(a&&console.log("active changed: ",t,"=>",e),e&&!t?d():u())),{...Object(o["H"])(i)}}var $={name:"DndBoard",props:["active","config"],setup(e,{emit:t}){const n=Object(o["A"])(null),{active:a}=Object(o["H"])(e);return{...e.config,...k({active:a,element:n,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:t}),dndRef:n}},computed:{classes(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("02cd");$.render=P,$.__scopeId="data-v-c03d63c2";var z=$;const A=Object(o["P"])("data-v-dad92eee"),E=A((e,t,n,a,r,i)=>{const s=Object(o["D"])("Modal");return Object(o["v"])(),Object(o["g"])(s,{appear:!0,show:n.showModal,onClose:e.$attrs.start},{body:A(()=>[Object(o["j"])("button",{onClick:t[1]||(t[1]=Object(o["O"])((...e)=>i.onClickStart(...e),["prevent"]))},"Start Game")]),_:1},8,["show","onClose"])}),q=Object(o["P"])("data-v-1a0fb3fa");Object(o["y"])("data-v-1a0fb3fa");const H={key:0,class:"modal-mask"},Y={class:"modal-wrapper"},W={class:"modal-container"};Object(o["w"])();const X=q((e,t,n,a,r,i)=>(Object(o["v"])(),Object(o["g"])("div",null,[(Object(o["v"])(),Object(o["g"])(o["b"],{to:"#quizdini__modals"},[Object(o["j"])(o["c"],{appear:n.appear,name:"modal",duration:5e3},{default:q(()=>[n.show?(Object(o["v"])(),Object(o["g"])("div",H,[Object(o["j"])("div",Y,[Object(o["j"])("div",W,[Object(o["C"])(e.$slots,"header",{},()=>[Object(o["j"])("button",{onClick:t[1]||(t[1]=t=>e.$emit("close"))},"Close")]),Object(o["C"])(e.$slots,"body"),Object(o["C"])(e.$slots,"footer")])])])):Object(o["h"])("",!0)]),_:1},8,["appear"])]))])));var N={inheritAttrs:!1,name:"Modal",props:["appear","show"],emits:["close"]};n("2949");N.render=X,N.__scopeId="data-v-1a0fb3fa";var R=N,G={inheritAttrs:!1,name:"Splash",components:{Modal:R},emits:["start"],props:["config","showModal"],methods:{onClickStart(){this.$emit("start")}}};n("17d8");G.render=E,G.__scopeId="data-v-dad92eee";var J=G;function F(e,t,n,a,r,i){return Object(o["v"])(),Object(o["g"])(Object(o["E"])(n.is),{active:n.active,class:i.tileClasses,disabled:n.disabled,id:n.id,style:n.style},{default:Object(o["M"])(()=>[Object(o["j"])("div",{class:i.bodyClasses,"data-has-html":n.hasHtml,"data-length":n.length,"data-max-word-length":n.maxWordLength,innerHTML:n.content},null,10,["data-has-html","data-length","data-max-word-length","innerHTML"])]),_:1},8,["active","class","disabled","id","style"])}const U=Object(o["P"])("data-v-02fd6379"),K=U((e,t,n,a,r,i)=>(Object(o["v"])(),Object(o["g"])("div",{id:n.id,class:i.classes},[Object(o["C"])(e.$slots,"default")],10,["id"])));var V={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("ef2c");V.render=K,V.__scopeId="data-v-02fd6379";var Z=V;const Q=Object(o["P"])("data-v-da15d764"),ee=Q((e,t,n,a,r,i)=>(Object(o["v"])(),Object(o["g"])("div",{id:n.id,class:i.classes},[Object(o["C"])(e.$slots,"default")],10,["id"])));var te={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("d203");te.render=ee,te.__scopeId="data-v-da15d764";var ne=te,oe={name:"Tile",components:{Draggable:Z,Droppable:ne},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},dragging:{type:Boolean,required:!1},hasHtml:{type:Boolean,required:!1},hit:{type:Boolean,required:!1},id:{required:!1},is:{type:String,required:!0},length:{type:Number,required:!1},maxWordLength:{type:Number,required:!1},miss:{type:Boolean,required:!1},over:{type:Boolean,required:!1},style:{required:!1},type:{type:String,required:!1}},computed:{bodyClasses(){return{tile__body:!0,["tile__body--has-long-word"]:this.maxWordLength>=11}},tileClasses(){return{tile:!0,["tile--"+this.type]:this.type,[this.color]:this.color,hit:this.hit,miss:this.miss,drag:this.dragging,over:this.over}}}};oe.render=F;var ae=oe;const re=Object(o["P"])("data-v-30e190da");Object(o["y"])("data-v-30e190da");const ie={class:"timer"},se={class:"timer__wrapper"},ce={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},le={class:"timer__circle"};Object(o["w"])();const de=re((e,t,n,a,r,i)=>(Object(o["v"])(),Object(o["g"])(o["c"],Object(o["o"])({duration:{enter:""+e.timeouts.enter,leave:""+e.timeouts.leave},name:"timer",onBeforeEnter:i.beforeEnter,onAfterEnter:i.afterEnter,onAfterLeave:i.afterLeave,onAfterAppear:i.afterAppear},e.$attrs),{default:re(()=>[Object(o["N"])(Object(o["j"])("div",null,[Object(o["j"])("div",ie,[Object(o["j"])(o["c"],{duration:{enter:""+e.timeouts.change,leave:""+e.timeouts.change},name:"scoring",onAfterLeave:e.endScoreChange},{default:re(()=>[Object(o["N"])(Object(o["j"])("div",se,[(Object(o["v"])(),Object(o["g"])("svg",ce,[Object(o["j"])("g",le,[Object(o["j"])("circle",{class:["timer__path-elapsed",i.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(o["j"])("path",{"stroke-dasharray":i.strokeDasharray,class:["timer__path-remaining",[e.severity,i.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(o["j"])("span",{class:["timer__label",i.scoreClass]},Object(o["G"])(n.score||e.formatted),3)],512),[[o["J"],!e.scoring]])]),_:1},8,["duration","onAfterLeave"])])],512),[[o["J"],!e.expired]])]),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave","onAfterAppear"]))),ue={ALERT:"alert",WARN:"warn",SUCCESS:"success"},ge={UP:"up",DOWN:"down"};function me({active:e=!1,alert:t,autoStart:n=!0,debug:a=!1,delay:r=5e3,duration:i,emit:s,interval:c,score:l,warn:d}){const[,u]=I(Object(o["I"])(r),(function(){a&&console.log("starting timer after Delay..."),g.intervalId=setInterval(()=>{g.elapsed+=Object(o["I"])(c)},Object(o["I"])(c))})),g=Object(o["z"])({elapsed:0,expired:Object(o["e"])(()=>g.remaining<=0),formatted:Object(o["e"])(()=>{const e=Math.floor(g.remaining/6e4),t=Math.floor(g.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`}),idle:Object(o["e"])(()=>g.elapsed),intervalId:null,progress:Object(o["e"])(()=>Math.round(g.remaining/(1e3*Object(o["I"])(i))*1e4)/100),remaining:Object(o["e"])(()=>1e3*Object(o["I"])(i)-g.elapsed),running:!1,scoring:!1,scoringStatus:"",SCORING_STATUS:ge,severity:Object(o["e"])(()=>g.progress<=d?g.progress<=t?ue.ALERT:ue.WARN:ue.SUCCESS)});function m(){f(),g.running=!0,g.remaining||(g.elapsed=0),u()}function h(e){g.elapsed=e}function p(){a&&console.log("timer scoring end..."),g.scoring=!1,g.scoringStatus=""}function f(){a&&console.log("stopping timer..."),g.running=!1,g.intervalId&&(clearInterval(g.intervalId),g.intervalId=null)}return Object(o["K"])(e,(e,t)=>{!e||t||g.running||m(),!e&&g.running&&(console.log("pause timer here"),f())}),Object(o["K"])(l,(e,t)=>{a&&console.log("score changed: ",t,"=>",e),g.scoring=!0,g.scoringStatus=e>t?ge.UP:ge.DOWN}),Object(o["K"])(()=>g.expired,(e,t)=>{e&&!t&&(a&&console.log("timer expired: ",t,"=>",e),f(),s("timer-expired"))}),Object(o["t"])(()=>{a&&console.log("timer mounted..."),Object(o["I"])(n)&&Object(o["I"])(e)&&m()}),Object(o["r"])(()=>{a&&console.log("timer cleaning up..."),f()}),{...Object(o["H"])(g),startTimer:m,stopTimer:f,setElapsed:h,endScoreChange:p}}const he=283;var pe={inheritAttrs:!1,name:"Timer",props:["active","config","duration","score"],setup(e,{emit:t}){const{active:n,duration:a,playing:r,score:i}=Object(o["H"])(e),s=me({active:n,alert:e.config.thresholds.alert,autoStart:!0,debug:e.config.debug,delay:e.config.timeouts.delay,duration:a,emit:t,interval:e.config.timeouts.interval,playing:r,score:i,warn:e.config.thresholds.warn});return{...s,...e.config}},computed:{scoreClass(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*he).toFixed(0)} ${he}`}},methods:{beforeEnter(){this.debug&&console.log("before timer entered...")},afterEnter(){console.log("after enter in Timer fired..."),this.debug&&console.log("timer entered...")},afterAppear(){console.log("after appear fired...")},afterLeave(){this.debug&&console.log("timer left...")}},onMounted(){console.log("Timer has mounted...")}};n("17b7");pe.render=de,pe.__scopeId="data-v-30e190da";var fe=pe,be={name:"Game",components:{DndBoard:z,Splash:J,Tile:ae,Timer:fe},props:["match"],setup(e){const{match:t}=Object(o["H"])(e);return console.log(typeof t),{...L(t)}},methods:{beforeEnter(){this.debug&&console.log("game transition before entered...")},boardClasses(e){return{"tile-board":!0,["tile-board--"+e]:e,["tile-board--"+this.itemsPerBoard]:this.itemsPerBoard,["tile-board--"+this.colorScheme]:this.colorScheme,"tile-board--disabled":!this.playing}},boardStyles(e){return{...this.textScaling[e]&&{"--text-scale-factor":""+this.textScaling[e]}}},tileAfterLeave(e,t){this.config.game.debug&&console.log(`${t} (${e.id}) leaving...`),this.playing&&this.onTileLeft(e.id,t)}}};n("d5ee");be.render=O;var ve=be;const je=Object(o["P"])("data-v-287e2cd7");Object(o["y"])("data-v-287e2cd7");const Oe={class:"page page--loader page--full page--purple"},ye=Object(o["j"])("button",{class:"btn btn-refresh",title:"Crude page reload"},"Replay",-1),we=Object(o["j"])("section",{class:"loader"},[Object(o["j"])("svg",{class:"loader__logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 475 475"},[Object(o["j"])("circle",{class:"badge",style:{"paint-order":"stroke fill markers"},cx:"237.5",cy:"237.5",r:"237.5"}),Object(o["j"])("path",{class:"tassel-cap",d:"M405.4 286.9c0 6.1-5 11.1-11.1 11.1 -6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1C400.4 275.8 405.4 280.7 405.4 286.9"}),Object(o["j"])("path",{class:"tassel",d:"M391 306.4l-14.7 25.5c-1.4 2.5 0.4 5.6 3.2 5.6h29.4c2.9 0 4.7-3.1 3.2-5.6l-14.7-25.5C396 304 392.5 304 391 306.4"}),Object(o["j"])("path",{class:"brim",d:"M407.5 240.8l-104.8-47.2c3.4-9.1 6.5-18.7 9.2-28.7 12.7-47.6 12.7-92.5 2.2-121.3 -23.4 19.9-45.7 58.8-58.3 106.4 -1.8 6.9-3.4 13.7-4.7 20.4l-4.2-1.9c-5.9-2.7-12.7-2.7-18.6 0l-4.2 1.9c-1.3-6.7-2.9-13.5-4.7-20.4 -12.7-47.6-35-86.5-58.3-106.4 -10.4 28.9-10.4 73.7 2.2 121.3 2.7 10 5.8 19.6 9.2 28.7l-104.8 47.2c-6.9 3.1-6.9 12.9 0 16l87.6 39.4c0 0 0-48 0-48.3 0.8-24.8 37.4-44.8 82.4-44.8 45 0 81.6 20 82.4 44.8 0 0.3 0 48.3 0 48.3l87.6-39.4C414.4 253.7 414.4 243.9 407.5 240.8"}),Object(o["j"])("path",{class:"brim-shade",d:"M319.9 248c-0.8 24.8-37.3 44.8-82.3 44.8 -45 0-81.5-20-82.3-44.8 0 0.3 0 0.6 0 0.8v47.5l73.1 32.9c5.9 2.7 12.7 2.7 18.6 0l73.1-32.9V248.8C319.9 248.5 319.9 248.3 319.9 248"}),Object(o["j"])("path",{class:"liner",d:"M237.5 203.2c-45 0-81.5 20-82.3 44.8 0.8 24.8 37.4 44.8 82.4 44.8s81.6-20 82.4-44.8C319.1 223.2 282.5 203.2 237.5 203.2"}),Object(o["j"])("path",{class:"crown",d:"M228.2 329.2l-73.1-32.9v89.6c0-25.2 36.9-45.6 82.4-45.6s82.4 20.4 82.4 45.6v-89.6l-73.1 32.9C240.9 331.8 234.1 331.8 228.2 329.2"}),Object(o["j"])("path",{class:"tip",d:"M319.9 385.9c0 25.2-36.9 45.6-82.4 45.6 -45.5 0-82.4-20.4-82.4-45.6s36.9-45.6 82.4-45.6C283 340.3 319.9 360.7 319.9 385.9"})]),Object(o["j"])("svg",{class:"loader__label",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 251.924 29.28"},[Object(o["j"])("g",{class:"label"},[Object(o["j"])("path",{d:"M0 28.64h22.08v-7.32H9.44V.64H0v28z",class:"l"}),Object(o["j"])("path",{d:"M40.977 29.28c9.12 0 15.8-6.16 15.8-14.64S50.097 0 40.977 0c-9.12 0-15.8 6.16-15.8 14.64s6.68 14.64 15.8 14.64zm0-7.64c-3.48 0-6.28-2.64-6.28-7 0-4.36 2.8-7 6.28-7 3.48 0 6.28 2.64 6.28 7 0 4.36-2.8 7-6.28 7z",class:"o"}),Object(o["j"])("path",{d:"M82.772 28.64h9.76l-12.24-28h-9.28l-12.24 28h9.6l1.88-4.88h10.64l1.88 4.88zm-9.92-11.68l2.72-7.04 2.72 7.04h-5.44z",class:"a"}),Object(o["j"])("path",{d:"M96.078 28.64h13.8c9.36 0 15.8-5.32 15.8-14s-6.44-14-15.8-14h-13.8v28zm9.44-7.36V8h3.96c3.96 0 6.68 2.36 6.68 6.64 0 4.28-2.72 6.64-6.68 6.64h-3.96z",class:"d"}),Object(o["j"])("path",{d:"M131.125 28.64h9.44v-28h-9.44v28z",class:"i"}),Object(o["j"])("path",{d:"M165.51.64v12.72L154.87.64h-7.76v28h9.2V15.92l10.64 12.72h7.76v-28h-9.2z",class:"n"}),Object(o["j"])("path",{d:"M199.817 20.96c-1.16.48-2.28.68-3.44.68-4.04 0-6.68-2.8-6.68-7 0-4.32 2.64-7 6.8-7 2.48 0 4.52 1.04 6.28 3.08l6.04-5.32c-2.84-3.48-7.28-5.4-12.8-5.4-9.24 0-15.84 6.04-15.84 14.64 0 8.6 6.6 14.64 15.64 14.64 4.12 0 8.8-1.24 12.2-3.56V13.88h-8.2v7.08z",class:"g"}),Object(o["j"])("path",{d:"M218.269 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z",class:"dot"}),Object(o["j"])("path",{d:"M232.456 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z",class:"dot"}),Object(o["j"])("path",{d:"M246.644 29.04c3 0 5.28-2.16 5.28-5.2 0-3.08-2.28-5.12-5.28-5.12-3 0-5.28 2.04-5.28 5.12 0 3.04 2.28 5.2 5.28 5.2z",class:"dot"})])])],-1);Object(o["w"])();const xe=je((e,t,n,a,r,i)=>(Object(o["v"])(),Object(o["g"])("div",Oe,[ye,we])));var _e={name:"Loader"};n("c740");_e.render=xe,_e.__scopeId="data-v-287e2cd7";var Se=_e,Ie={name:"Match",components:{Game:ve,Loader:Se},computed:{matchId(){const{matchId:e=null}=this.match||{};return e}},setup(){const e=Object(o["A"])(""),t=Object(s["c"])(),{data:n,error:a,inError:r,initialized:i,loading:c,success:l}=b({callback:f(t.params.id),immediate:!0,deps:[()=>t.params]});return{x:e,match:n,showLoader:c}}};n("bf3c");Ie.render=l,Ie.__scopeId="data-v-682fd584";var Me=Ie;const Ce=Object(o["P"])("data-v-6c3a223a");Object(o["y"])("data-v-6c3a223a");const Le={class:"p-4"};Object(o["w"])();const De=Ce((e,t,n,a,r,i)=>{const s=Object(o["D"])("router-link");return Object(o["v"])(),Object(o["g"])("div",Le,[Object(o["j"])("ul",null,[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["B"])(r.games,e=>(Object(o["v"])(),Object(o["g"])("li",{key:e.id},[Object(o["j"])(s,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:Ce(()=>[Object(o["i"])(Object(o["G"])(e.title),1)]),_:2},1032,["to"])]))),128))])])});u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var Pe={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};n("3843");Pe.render=De,Pe.__scopeId="data-v-6c3a223a";var Be=Pe;const Te=[{path:"/",name:"matches",component:Be,props:!1},{path:"/match/:id",name:"match",component:Me,props:!1}],ke=Object(s["a"])({history:Object(s["b"])(),routes:Te});var $e=ke;Object(o["f"])(i).use($e).mount("#quizdini")},9299:function(e,t,n){"use strict";n("bdfb")},a19a:function(e,t,n){},bdfb:function(e,t,n){},bf3c:function(e,t,n){"use strict";n("f681")},c740:function(e,t,n){"use strict";n("f942")},cb08:function(e,t,n){},d203:function(e,t,n){"use strict";n("faed")},d4a5:function(e,t,n){},d5ee:function(e,t,n){"use strict";n("e18f")},e18f:function(e,t,n){},ef2c:function(e,t,n){"use strict";n("cb08")},f3ff:function(e,t,n){},f681:function(e,t,n){},f942:function(e,t,n){},faed:function(e,t,n){}});
//# sourceMappingURL=app.b6f0ad0e.js.map