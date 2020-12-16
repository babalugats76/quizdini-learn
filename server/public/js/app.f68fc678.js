(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0292":function(e,t,n){},"0615":function(e,t,n){"use strict";n("d3e6")},"14ed":function(e,t,n){"use strict";n("f918")},"1f33":function(e,t,n){},"2b47":function(e,t,n){},"41c8":function(e,t,n){"use strict";n("b050")},5461:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var o=n("7a23");function r(e,t,n,r,a,i){const s=Object(o["D"])("router-view");return Object(o["v"])(),Object(o["g"])(s)}var a={name:"App"};n("9299");a.render=r;var i=a,s=n("6c02");function c(e,t,n,r,a,i){const s=Object(o["D"])("Loader"),c=Object(o["D"])("FullPage"),l=Object(o["D"])("Game");return r.showLoader?(Object(o["v"])(),Object(o["g"])(c,{key:"loader",theme:"primary"},{default:Object(o["M"])(()=>[Object(o["j"])(s)]),_:1})):(Object(o["v"])(),Object(o["g"])(l,{key:"game",match:r.match},null,8,["match"]))}var l=n("bc3a"),d=n.n(l);d.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const u={timeout:3e4},m=async({url:e,config:t=u})=>{console.log("url",e),console.log("config",t);try{const n=await d.a.get(e,t);return{data:n.data}}catch(n){return{error:n.response.data}}},h=async({url:e,data:t,config:n=u})=>{console.log("url",e),console.log(JSON.stringify(t,null,4)),console.log("config",n);try{const o=await d.a.post(e,t,n);return{data:o.data}}catch(o){return{error:o.response.data}}},g="/api/match",p=e=>()=>m({url:`${g}/${e}`});function b({callback:e,immediate:t=!0,deps:n=[]}){const r=Object(o["z"])({data:null,error:null,executions:0,inError:!1,initialized:!1,loading:!1,success:null});return Object(o["K"])(n,()=>{console.log("watch fired!"),r.loading=!0,setTimeout(async()=>{const t=await e(),{data:n=null,error:o=null}=t;return r.data=n,r.error=o,r.executions+=1,r.initialized=!!r.executions,r.loading=!1,n?r.success=!0:o?r.inError=!0:void 0},5e3)},{immediate:t}),{...Object(o["H"])(r)}}var f={board:{debug:!1,timeouts:{throttle:33}},game:{debug:!0,timeouts:{enter:1e3,leave:1e3},themes:{default:{colors:["zaffre"]},rainbow:{colors:["apple","blue","brown","cream","fuchsia","gray","green","light-blue","light-orange","lime","maroon","mauve","navy","olive","orange","pink","purple","red","teal","yellow"]}}},splash:{timeouts:{enter:800,leave:800}},tile:{text:{scaling:{growth:.25,min:1.25,max:3.25}},timeouts:{enter:800,hit:800,leave:1e3,miss:800,shuffle:500}},timer:{debug:!1,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,delay:800,enter:1e3,leave:1e3}}};const v=Object(o["P"])("data-v-db090a3e"),j=v((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("div",{class:i.classes},[Object(o["C"])(e.$slots,"default")],2)));var O={name:"FullPage",props:{theme:{type:String,required:!1,default:"primary"}},computed:{classes(){return{page:!0,["page--"+this.theme]:this.theme}}}};n("0615");O.render=j,O.__scopeId="data-v-db090a3e";var y=O;const w={class:"match__game"};function x(e,t,n,r,a,i){const s=Object(o["D"])("Splash"),c=Object(o["D"])("Tile"),l=Object(o["D"])("DndBoard"),d=Object(o["D"])("Timer"),u=Object(o["D"])("FullPage");return Object(o["v"])(),Object(o["g"])(o["c"],{name:"game",duration:500},{default:Object(o["M"])(()=>[Object(o["j"])(u,{theme:"primary"},{default:Object(o["M"])(()=>[Object(o["j"])(s,{config:e.config.splash,showModal:e.showSplash,onClose:e.toggleSplash,onExited:e.startGame},null,8,["config","showModal","onClose","onExited"]),Object(o["j"])("div",w,[Object(o["j"])(l,{class:"match__board",active:e.canDnd,config:e.config.board,onDrag:e.onDrag,onOver:e.onOver,onDrop:e.onDrop},{default:Object(o["M"])(()=>[Object(o["j"])(o["d"],{name:"terms",tag:"div",class:i.boardClasses("terms"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",style:i.boardStyles("terms"),onAfterLeave:t[1]||(t[1]=e=>i.tileAfterLeave(e,"term"))},{default:Object(o["M"])(()=>[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["B"])(e.activeTerms,e=>(Object(o["v"])(),Object(o["g"])(c,{is:"Draggable",id:e.id,key:e.id,content:e.content,style:[e.style],active:e.dragging,disabled:!1,color:e.color,dragging:e.dragging,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,type:"term","data-type":"term"},null,8,["id","content","style","active","color","dragging","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"]),Object(o["j"])(o["d"],{name:"definitions",tag:"div",class:i.boardClasses("definitions"),css:!0,duration:{enter:""+e.config.tile.timeouts.enter,leave:""+e.config.tile.timeouts.leave},"move-class":e.shuffling?"slide":"no-move-list",style:i.boardStyles("definitions"),onAfterLeave:t[2]||(t[2]=e=>i.tileAfterLeave(e,"definition"))},{default:Object(o["M"])(()=>[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["B"])(e.activeDefinitions,e=>(Object(o["v"])(),Object(o["g"])(c,{is:"Droppable",id:e.id,key:e.id,content:e.content,style:[e.style],active:!1,disabled:!1,hasHtml:e.hasHtml,hit:e.hit,length:e.length,maxWordLength:e.maxWordLength,miss:e.miss,over:e.over,type:"definition","data-type":"definition"},null,8,["id","content","style","hasHtml","hit","length","maxWordLength","miss","over"]))),128))]),_:1},8,["class","duration","move-class","style"])]),_:1},8,["active","config","onDrag","onOver","onDrop"]),Object(o["j"])(d,{class:"match__timer",active:e.playing,config:e.config.timer,duration:e.duration,score:e.score,onTimerExpired:e.gameOver},null,8,["active","config","duration","score","onTimerExpired"])])]),_:1})]),_:1})}n("13d5"),n("5319"),n("ddb0");var S=n("8dee"),I=n.n(S);function _(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function M(e,t,n="id"){return Object.prototype.hasOwnProperty.call(t,n)?e.map(e=>e[n]!==t[n]?e:{...e,...t}):e}function L(e,t,n="id",o){if(!Object.prototype.hasOwnProperty.call(t,n))return e;const r=e.find(e=>e[n]===t[n]),a=o?o(r):t;return r?e.map(e=>e[n]!==a[n]?e:{...e,...a}):e.concat(a)}function D(e,t){const n=Object(o["l"])();let r=null;function a(){i(),r=setTimeout(()=>t(),Object(o["I"])(e))}function i(){clearTimeout(r)}return n?Object(o["u"])(()=>{console.log("cleaning up!"),r&&i()}):console.log("not in current instance"),[i,a]}const C="/api/ping",B=e=>h({url:""+C,data:e});function P(e,t=!0){const[,n]=D(f.tile.timeouts.hit,()=>{a.terms=a.terms.map(e=>e.matched&&e.show?{...e,show:!1}:e),a.definitions=a.definitions.map(e=>e.matched&&e.show?{...e,show:!1}:e)}),[,r]=D(f.tile.timeouts.shuffle,()=>{a.shuffling=!1}),a=Object(o["z"])({activeDefinitions:Object(o["e"])(()=>a.definitions.filter(e=>e.show)),activeTerms:Object(o["e"])(()=>a.terms.filter(e=>e.show)),canDnd:Object(o["e"])(()=>a.playing&&!a.shuffling&&!a.termIsExiting),correct:0,colorScheme:"",definitions:[],duration:60,exited:Object(o["e"])(()=>a.terms.reduce((e,t)=>t.exited?e+=1:e,0)),incorrect:0,itemsPerBoard:9,matches:[],matchId:"",playing:!1,score:0,showBoard:!1,showSplash:!0,shuffling:!1,stats:[],termIsExiting:Object(o["e"])(()=>!!a.terms.filter(e=>e.matched&&!e.exited).length),terms:[],textScaling:{terms:1,definitions:1},title:""});function i(e){const t=(e,t)=>{const n=/<[^>]*>/gi,o=e.parseFromString("<!DOCTYPE html><body>"+t.replace(n,""),"text/html");return o.body.textContent},n=new DOMParser;return e.map(e=>{const o=t(n,e.term),r=t(n,e.definition);return{term:{answer:e.definition,content:e.term,dragging:!1,exited:!1,hasHtml:o.length!==e.term.length,hit:!1,id:I.a.generate(),length:o.length,matched:!1,matchId:"",maxWordLength:o.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0},definition:{content:e.definition,exited:!1,hasHtml:r.length!==e.definition.length,hit:!1,id:I.a.generate(),length:r.length,matched:!1,matchId:"",maxWordLength:r.split(" ").reduce((e,t)=>e>t.length?e:t.length,0),miss:!1,over:!1,show:!0}}})}function s(e=[],t=""){const{[t.toLowerCase()]:n=""}=f.game.themes;if(!n)return e.map(e=>({...e,color:f.game.themes.default.colors[0]}));let o=_(n.colors.slice());return e.map(e=>{const t=o.pop();return{...e,color:t}})}function c(e,t,n){return{transform:"translate3d("+e+"px, "+t+"px, "+n+"px)"}}function l(e,t,n,o,r,a,i){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":n+"px","--hit-end-tx":o+"px","--hit-end-ty":r+"px","--hit-end-tz":a+"px","--hit-duration":i+"ms"}}function d(e,t){const{answer:n}=a.terms.find(t=>t.id===e)||{},{content:o}=a.definitions.find(e=>e.id===t)||{};return!!n&&!!o&&n===o}function u(e){const{dragId:t,dragX:n,dragY:o}=e||{};a.terms=M(a.terms,{id:t,dragging:!0,hit:!1,miss:!1,style:c(n,o,1)})}function m(e){const{dragId:t,dropId:n,over:o}=e||{};a.terms=a.terms.map(e=>({...e,over:e.id===t&&o})),a.definitions=a.definitions.map(e=>({...e,over:e.id===n}))}function h(e){const{dragId:t,dragX:o,dragY:r,dropId:i,dropX:s,dropY:u}=e||{},m=!!i&&d(t,i);if(a.terms=M(a.terms,{id:t,dragging:!1,hit:m,miss:!m,matched:m,matchId:m?i:"",over:m,style:m?l(o,r,1,s,u,1,f.tile.timeouts.hit):c(0,0,0)}),!i)return;m?a.correct++:a.incorrect++,a.definitions=M(a.definitions,{id:i,hit:m,miss:!m,matched:m,matchId:m?t:"",over:m});const{content:h}=a.terms.find(e=>e.id===t)||{};a.score=Math.max(m?a.score+1:a.score-1,0),a.stats=L(a.stats,{term:h},"term",e=>e?{term:h,hit:m?e.hit+1:e.hit,miss:m?e.miss:e.miss+1}:{term:h,hit:m?1:0,miss:m?0:1}),m&&n()}function g(e,t){switch(t){case"term":a.terms=M(a.terms,{id:e,exited:!0});break;case"definition":a.definitions=M(a.definitions,{id:e,exited:!0});break;default:return}}function p(e){const n=e.reduce((e,t)=>[e[0]>t.term.maxWordLength?e[0]:t.term.maxWordLength,e[1]>t.term.length?e[1]:t.term.length,e[2]>t.definition.maxWordLength?e[2]:t.definition.maxWordLength,e[3]>t.definition.length?e[3]:t.definition.length],[]);t&&console.log(JSON.stringify(n,null,4));const{growth:o,min:r,max:i}=f.tile.text.scaling||{};a.textScaling={terms:(i*Math.pow(o,o*Math.max(n[0],n[1]/2.5))+r).toFixed(2),definitions:(i*Math.pow(o,o*Math.max(n[2],n[3]/2.5))+r).toFixed(2)},t&&console.log(JSON.stringify(a.textScaling,null,4))}function b(){console.log("dealing..."),a.matches=_(a.matches);const e=a.matches.slice(0,Math.min(a.itemsPerBoard,a.matches.length));p(e),a.terms=s(e.map(e=>e.term),a.colorScheme),a.definitions=_(e.map(e=>e.definition))}function v(){console.log("shuffling..."),a.shuffling=!0,a.terms=_(a.terms),a.definitions=_(a.definitions),r()}function j(){a.correct=0,a.incorrect=0,a.score=0,a.stats=[],a.playing=!1,a.showSplash=!1,b(),Object(o["p"])(()=>{v(),a.playing=!0,a.showBoard=!0})}async function O(){console.log("game over..."),a.playing=!1,a.terms=a.terms.map(e=>({...e,show:!1})),a.definitions=a.definitions.map(e=>({...e,show:!1}));const e=await B({correct:a.correct,data:a.stats,gameId:a.matchId,gameType:"M",incorrect:a.incorrect,score:a.score});t&&JSON.stringify(e.data,null,4)}function y(){console.log("splash toggle fired..."),a.showSplash=!a.showSplash}return Object(o["L"])(()=>{const{matchId:t,matches:n=[],options:{duration:r=60,colorScheme:s="",itemsPerBoard:c=9}={},title:l=""}=Object(o["I"])(e);a.colorScheme=s.toLowerCase(),a.duration=r,a.matchId=t,a.itemsPerBoard=c,a.matches=i(n),a.title=l}),Object(o["K"])(()=>a.exited,(e,n)=>{if(t&&console.log("exited:",JSON.stringify(n),"=>",JSON.stringify(e)),!(e<=n))return a.playing&&(e===a.itemsPerBoard?(b(),Object(o["p"])(()=>v())):v()),a.playing||e!==a.itemsPerBoard?void 0:a.showSplash=!0}),{config:f,...Object(o["H"])(a),deal:b,gameOver:O,onDrag:u,onDrop:h,onOver:m,onTileExited:g,shuffle:v,startGame:j,toggleSplash:y}}const A=Object(o["P"])("data-v-fb365076"),T=A((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("div",{ref:"dndRef",class:i.classes},[Object(o["C"])(e.$slots,"default")],2)));var z=n("2ef0"),$=n.n(z);function E({active:e,element:t,throttleMs:n=33,debug:r=!1,emit:a}){const i=Object(o["z"])({dragged:{},listeners:[],throttledDrag:Object(o["e"])(()=>$.a.throttle(h,n,{trailing:!0}))}),s={mousedown:m,mousemove:i.throttledDrag,mouseup:g,touchstart:m,touchmove:i.throttledDrag,touchend:g};function c(e){e.forEach(n=>{r&&console.log(`adding ${n}...`),t.value.addEventListener(n,s[n]),i.listeners=i.listeners.concat(e).filter((e,t,n)=>n.indexOf(e)===t)})}function l(e){e.forEach(n=>{r&&console.log(`removing ${n}...`),t.value.removeEventListener(n,s[n]),i.listeners=i.listeners.filter(t=>e.indexOf(t)<0)})}function d(){c(["mousedown","touchstart"])}function u(){i.dragged={},l(i.listeners)}function m(e){e.stopPropagation(),r&&console.log((i.dragged.id?`${e.type} (${i.dragged.id}) `:""+e.type)+"...");const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const n="touchstart"===e.type?e.touches[0].clientX:e.clientX,o="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:a,left:s}=t.getBoundingClientRect();i.dragged={id:t.id,offsetX:n-s,offsetY:o-a,initialX:n,initialY:o};const l="touchstart"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];c(l)}function h(e){e.stopPropagation();const{id:t,initialX:n,initialY:o,overId:s}=i.dragged;r&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const c="touchmove"===e.type?e.touches[0].clientX-n:e.clientX-n,l="touchmove"===e.type?e.touches[0].clientY-o:e.clientY-o;a("drag",{dragId:t,dragX:c,dragY:l});const{id:d=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};s!==d&&(r&&d&&console.log(`${t} is over ${d}...`),a("over",{dragId:t,dropId:d,over:!!d}),i.dragged={...i.dragged,overId:d})}function g(e){e.stopPropagation(),i.throttledDrag.cancel();const{id:t,initialX:n,initialY:o,offsetX:s,offsetY:c}=i.dragged;r&&console.log((t?`${e.type} (${t}) `:""+e.type)+"...");const d="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,u="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,m=document.elementsFromPoint(d,u).find(e=>e.classList.contains("droppable")),{top:h,left:g}=m&&m.getBoundingClientRect()||{};a("drop",{dragId:t,dragX:m?d-n:d,dragY:m?u-o:u,dropId:m?m.id:null,dropX:m?Math.round(g-n+s):null,dropY:m?Math.round(h-o+c):null}),i.dragged={};const p="touchend"===e.type?["touchmove","touchend"]:["mousemove","mouseup"];l(p)}return Object(o["t"])(()=>{r&&console.log(`dnd mounted (${Object(o["I"])(e)?"active":"inactive"})...`),Object(o["I"])(e.value)&&c(["mousedown","touchstart"])}),Object(o["K"])(e,(e,t)=>(r&&console.log("active changed: ",t,"=>",e),e&&!t?d():u())),{...Object(o["H"])(i)}}var q={name:"DndBoard",props:["active","config"],setup(e,{emit:t}){const n=Object(o["A"])(null),{active:r}=Object(o["H"])(e);return{...e.config,...E({active:r,element:n,throttleMs:e.config.timeouts.throttle,debug:e.config.debug,emit:t}),dndRef:n}},computed:{classes(){return{"dnd-board":!0,"dnd-board--active":this.active}}}};n("41c8");q.render=T,q.__scopeId="data-v-fb365076";var H=q;const k=Object(o["P"])("data-v-e1b8bb10"),W=k((e,t,n,r,a,i)=>{const s=Object(o["D"])("Modal");return Object(o["v"])(),Object(o["g"])(s,{appear:!0,show:n.showModal,onClose:t[2]||(t[2]=t=>e.$emit("close")),onExited:t[3]||(t[3]=t=>e.$emit("exited"))},{body:k(()=>[Object(o["j"])("button",{onClick:t[1]||(t[1]=Object(o["O"])(t=>e.$emit("close"),["prevent"]))},"Start Game")]),_:1},8,["show"])}),Y=Object(o["P"])("data-v-5bf3a353");Object(o["y"])("data-v-5bf3a353");const X={key:0,class:"modal-mask"},N={class:"modal-wrapper"},F={class:"modal-container"};Object(o["w"])();const V=Y((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("div",null,[(Object(o["v"])(),Object(o["g"])(o["b"],{to:"#modals"},[Object(o["j"])(o["c"],{appear:n.appear,name:"modal",duration:500,onAfterLeave:t[2]||(t[2]=t=>e.$emit("exited"))},{default:Y(()=>[n.show?(Object(o["v"])(),Object(o["g"])("div",X,[Object(o["j"])("div",N,[Object(o["j"])("div",F,[Object(o["C"])(e.$slots,"header",{},()=>[Object(o["j"])("button",{onClick:t[1]||(t[1]=t=>e.$emit("close"))},"Close")]),Object(o["C"])(e.$slots,"body"),Object(o["C"])(e.$slots,"footer")])])])):Object(o["h"])("",!0)]),_:1},8,["appear"])]))])));var G={name:"Modal",inheritAttrs:!1,props:["appear","show"],emits:["close","exited"]};n("14ed");G.render=V,G.__scopeId="data-v-5bf3a353";var J=G,R={name:"Splash",components:{Modal:J},props:["config","showModal"],emits:["close","exited"]};n("a951");R.render=W,R.__scopeId="data-v-e1b8bb10";var U=R;function K(e,t,n,r,a,i){return Object(o["v"])(),Object(o["g"])(Object(o["E"])(n.is),{id:n.id,active:n.active,class:i.tileClasses,disabled:n.disabled,style:n.style},{default:Object(o["M"])(()=>[Object(o["j"])("div",{class:i.bodyClasses,"data-has-html":n.hasHtml,"data-length":n.length,"data-max-word-length":n.maxWordLength,innerHTML:n.content},null,10,["data-has-html","data-length","data-max-word-length","innerHTML"])]),_:1},8,["id","active","class","disabled","style"])}const Z=Object(o["P"])("data-v-5becd52f"),Q=Z((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("div",{id:n.id,class:i.classes},[Object(o["C"])(e.$slots,"default")],10,["id"])));var ee={name:"Draggable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{draggable:!0,"draggable--active":this.active,"draggable--disabled":this.disabled}}}};n("7be5");ee.render=Q,ee.__scopeId="data-v-5becd52f";var te=ee;const ne=Object(o["P"])("data-v-39282804"),oe=ne((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("div",{id:n.id,class:i.classes},[Object(o["C"])(e.$slots,"default")],10,["id"])));var re={name:"Droppable",props:{active:{type:Boolean,required:!0,default:!1},disabled:{type:Boolean,required:!0,default:!1},id:{type:String,required:!1}},computed:{classes(){return{droppable:!0,"droppable--active":this.active,"droppable--disabled":this.disabled}}}};n("9db1");re.render=oe,re.__scopeId="data-v-39282804";var ae=re,ie={name:"Tile",components:{Draggable:te,Droppable:ae},props:{active:{type:Boolean,required:!0,default:!1},color:{type:String,required:!1},content:{type:String,required:!1},disabled:{type:Boolean,required:!0,default:!1},dragging:{type:Boolean,required:!1},hasHtml:{type:Boolean,required:!1},hit:{type:Boolean,required:!1},id:{required:!1},is:{type:String,required:!0},length:{type:Number,required:!1},maxWordLength:{type:Number,required:!1},miss:{type:Boolean,required:!1},over:{type:Boolean,required:!1},style:{required:!1},type:{type:String,required:!1}},computed:{bodyClasses(){return{tile__body:!0,["tile__body--has-long-word"]:this.maxWordLength>=11}},tileClasses(){return{tile:!0,["tile--"+this.type]:this.type,[this.color]:this.color,hit:this.hit,miss:this.miss,drag:this.dragging,over:this.over}}}};ie.render=K;var se=ie;const ce=Object(o["P"])("data-v-7f933afa");Object(o["y"])("data-v-7f933afa");const le={class:"timer"},de={class:"timer__wrapper"},ue={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},me={class:"timer__circle"};Object(o["w"])();const he=ce((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])(o["c"],Object(o["o"])({duration:{enter:""+e.timeouts.enter,leave:""+e.timeouts.leave},name:"timer",onBeforeEnter:i.beforeEnter,onAfterEnter:i.afterEnter,onAfterLeave:i.afterLeave,onAfterAppear:i.afterAppear},e.$attrs),{default:ce(()=>[Object(o["N"])(Object(o["j"])("div",null,[Object(o["j"])("div",le,[Object(o["j"])(o["c"],{duration:{enter:""+e.timeouts.change,leave:""+e.timeouts.change},name:"scoring",onAfterLeave:e.endScoreChange},{default:ce(()=>[Object(o["N"])(Object(o["j"])("div",de,[(Object(o["v"])(),Object(o["g"])("svg",ue,[Object(o["j"])("g",me,[Object(o["j"])("circle",{class:["timer__path-elapsed",i.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(o["j"])("path",{"stroke-dasharray":i.strokeDasharray,class:["timer__path-remaining",[e.severity,i.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(o["j"])("span",{class:["timer__label",i.scoreClass]},Object(o["G"])(n.score||e.formatted),3)],512),[[o["J"],!e.scoring]])]),_:1},8,["duration","onAfterLeave"])])],512),[[o["J"],!e.expired]])]),_:1},16,["duration","onBeforeEnter","onAfterEnter","onAfterLeave","onAfterAppear"]))),ge={ALERT:"alert",WARN:"warn",SUCCESS:"success"},pe={UP:"up",DOWN:"down"};function be({active:e=!1,alert:t,autoStart:n=!0,debug:r=!1,delay:a=5e3,duration:i,emit:s,interval:c,score:l,warn:d}){const[,u]=D(Object(o["I"])(a),(function(){r&&console.log("starting timer after Delay..."),m.intervalId=setInterval(()=>{m.elapsed+=Object(o["I"])(c)},Object(o["I"])(c))})),m=Object(o["z"])({elapsed:0,expired:Object(o["e"])(()=>m.remaining<=0),formatted:Object(o["e"])(()=>{const e=Math.floor(m.remaining/6e4),t=Math.floor(m.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`}),idle:Object(o["e"])(()=>m.elapsed),intervalId:null,progress:Object(o["e"])(()=>Math.round(m.remaining/(1e3*Object(o["I"])(i))*1e4)/100),remaining:Object(o["e"])(()=>1e3*Object(o["I"])(i)-m.elapsed),running:!1,scoring:!1,scoringStatus:"",SCORING_STATUS:pe,severity:Object(o["e"])(()=>m.progress<=d?m.progress<=t?ge.ALERT:ge.WARN:ge.SUCCESS)});function h(){b(),m.running=!0,m.scoring=!1,m.scoringStatus="",m.remaining||(m.elapsed=0),u()}function g(e){m.elapsed=e}function p(){r&&console.log("timer scoring end..."),m.scoring=!1,m.scoringStatus=""}function b(){r&&console.log("stopping timer..."),m.running=!1,m.intervalId&&(clearInterval(m.intervalId),m.intervalId=null)}return Object(o["K"])(e,(e,t)=>{!e||t||m.running||h(),!e&&m.running&&(console.log("pause timer here"),b())}),Object(o["K"])(l,(e,t)=>{r&&console.log("score changed: ",t,"=>",e),m.scoring=!0,m.scoringStatus=e>t?pe.UP:pe.DOWN}),Object(o["K"])(()=>m.expired,(e,t)=>{e&&!t&&(r&&console.log("timer expired: ",t,"=>",e),b(),s("timer-expired"))}),Object(o["t"])(()=>{r&&console.log("timer mounted..."),Object(o["I"])(n)&&Object(o["I"])(e)&&h()}),Object(o["r"])(()=>{r&&console.log("timer cleaning up..."),b()}),{...Object(o["H"])(m),startTimer:h,stopTimer:b,setElapsed:g,endScoreChange:p}}const fe=283;var ve={name:"Timer",inheritAttrs:!1,props:["active","config","duration","score"],setup(e,{emit:t}){const{active:n,duration:r,playing:a,score:i}=Object(o["H"])(e),s=be({active:n,alert:e.config.thresholds.alert,autoStart:!0,debug:e.config.debug,delay:e.config.timeouts.delay,duration:r,emit:t,interval:e.config.timeouts.interval,playing:a,score:i,warn:e.config.thresholds.warn});return{...s,...e.config}},computed:{scoreClass(){return this.scoring?this.scoringStatus===this.SCORING_STATUS.UP?"hit":"miss":""},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*fe).toFixed(0)} ${fe}`}},methods:{beforeEnter(){this.debug&&console.log("before timer entered...")},afterEnter(){console.log("after enter in Timer fired..."),this.debug&&console.log("timer entered...")},afterAppear(){console.log("after appear fired...")},afterLeave(){this.debug&&console.log("timer left...")}},onMounted(){console.log("Timer has mounted...")}};n("f5dc");ve.render=he,ve.__scopeId="data-v-7f933afa";var je=ve,Oe={name:"Game",components:{DndBoard:H,FullPage:y,Splash:U,Tile:se,Timer:je},props:["match"],setup(e){const{match:t}=Object(o["H"])(e);return console.log(typeof t),{...P(t)}},methods:{beforeEnter(){this.debug&&console.log("game transition before entered...")},boardClasses(e){return{"tile-board":!0,["tile-board--"+e]:e,["tile-board--"+this.itemsPerBoard]:this.itemsPerBoard,["tile-board--"+this.colorScheme]:this.colorScheme,"tile-board--disabled":!this.playing}},boardStyles(e){return{...this.textScaling[e]&&{"--text-scale-factor":""+this.textScaling[e]}}},tileAfterLeave(e,t){this.config.game.debug&&console.log(`${t} (${e.id}) leaving...`),this.onTileExited(e.id,t)}}};n("5f36");Oe.render=x;var ye=Oe;const we=Object(o["P"])("data-v-b9fcff2e");Object(o["y"])("data-v-b9fcff2e");const xe={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 174.257 149.814",class:"loader"},Se=Object(o["j"])("defs",null,[Object(o["j"])("filter",{id:"shadow"},[Object(o["j"])("feDropShadow",{dx:"0",dy:"0",stdDeviation:"0.5"})])],-1),Ie=Object(o["j"])("path",{d:"M125.198 56.416c1.49 0 2.697 1.209 2.697 2.7 0 1.493-1.207 2.702-2.697 2.702 -1.494 0-2.703-1.209-2.703-2.702C122.495 57.625 123.704 56.416 125.198 56.416z",class:"tassel-cap"},null,-1),_e=Object(o["j"])("path",{d:"M124.415 63.865l-3.574 6.184c-0.248 0.433-0.102 0.984 0.332 1.233 0.139 0.079 0.295 0.121 0.451 0.121h7.137c0.5 0.002 0.906-0.399 0.908-0.899 0.002-0.159-0.039-0.316-0.119-0.456l-3.57-6.184c-0.252-0.435-0.803-0.581-1.236-0.331C124.606 63.613 124.493 63.728 124.415 63.865z",class:"tassel"},null,-1),Me=Object(o["j"])("path",{d:"M107.124 49.664c-0.195 6.028-9.074 10.882-20.006 10.882 -10.93 0-19.811-4.858-20.006-10.882 0 0.067 0 0.136 0 0.204v11.523l17.752 7.981c1.432 0.646 3.076 0.646 4.506 0l17.764-7.996V49.868C107.133 49.8 107.124 49.732 107.124 49.664z",class:"brim-shade"},null,-1),Le=Object(o["j"])("path",{d:"M128.411 47.919l-25.445-11.465c0.834-2.219 1.588-4.551 2.232-6.979 3.078-11.563 3.078-22.459 0.541-29.475 -5.678 4.829-11.096 14.288-14.17 25.851 -0.447 1.67-0.828 3.323-1.145 4.96l-1.033-0.486c-1.434-0.646-3.074-0.646-4.51 0l-1.031 0.486c-0.324-1.62-0.703-3.273-1.139-4.96C79.629 14.287 74.219 4.829 68.536 0c-2.537 7.016-2.537 17.913 0.541 29.475 0.645 2.429 1.398 4.761 2.232 6.979L45.844 47.919c-1.072 0.485-1.549 1.749-1.064 2.822 0.213 0.472 0.592 0.852 1.064 1.064l21.281 9.58c0 0 0-11.658 0-11.728 0.182-6.033 9.063-10.891 19.992-10.891 10.932 0 19.811 4.857 20.006 10.877 0 0.067 0 11.727 0 11.727l21.279-9.58c1.066-0.491 1.539-1.757 1.047-2.828C129.241 48.503 128.87 48.133 128.411 47.919z",class:"brim"},null,-1),De=Object(o["j"])("ellipse",{cx:"87.118",cy:"49.663",rx:"20.006",ry:"10.877",class:"liner"},null,-1),Ce=Object(o["j"])("path",{d:"M84.864 69.372l-17.756-7.996V83.15c0-6.121 8.959-11.081 20.01-11.081 11.053 0 20.016 4.959 20.016 11.081V61.391l-17.77 7.981C87.932 70.016 86.293 70.016 84.864 69.372z",class:"crown"},null,-1),Be=Object(o["j"])("ellipse",{cx:"87.118",cy:"83.164",rx:"20.01",ry:"11.081",class:"tip"},null,-1),Pe=Object(o["j"])("path",{d:"M39.175 145.702c-1.103 1.313-2.483 2.362-4.045 3.069 -1.585 0.705-3.304 1.061-5.039 1.043 -2.286 0.023-4.541-0.53-6.554-1.613 -1.989-1.071-4.258-2.931-6.81-5.578 -3.063-0.217-6.028-1.179-8.638-2.802 -2.497-1.553-4.549-3.725-5.958-6.305 -2.946-5.604-2.833-12.321 0.299-17.821 1.601-2.709 3.917-4.925 6.694-6.404 6.017-3.078 13.146-3.078 19.162 0 2.772 1.475 5.088 3.678 6.695 6.375 1.652 2.781 2.506 5.964 2.463 9.199 0.026 2.63-0.533 5.234-1.638 7.622 -1.063 2.298-2.624 4.333-4.567 5.957 -1.985 1.656-4.305 2.866-6.799 3.548 0.805 0.903 1.762 1.658 2.826 2.231 0.926 0.462 1.946 0.7 2.98 0.693 2.281 0 4.268-0.927 5.957-2.778L39.175 145.702zM8.1 131.132c1.021 1.835 2.535 3.349 4.37 4.369 3.909 2.083 8.599 2.083 12.508 0 1.833-1.022 3.347-2.535 4.37-4.369 2.117-3.919 2.117-8.641 0-12.56 -1.025-1.832-2.538-3.343-4.37-4.367 -3.907-2.086-8.6-2.086-12.508 0 -1.834 1.022-3.347 2.534-4.37 4.367C5.983 122.492 5.983 127.213 8.1 131.132z",class:"letter letter--1 q"},null,-1),Ae=Object(o["j"])("path",{d:"M51.495 142.961c-5.908-0.009-10.695-4.796-10.705-10.702V115.75h5.681v16.509c0.069 2.774 2.376 4.968 5.151 4.897 2.677-0.066 4.832-2.222 4.898-4.897V115.75h5.68v16.509C62.194 138.166 57.405 142.954 51.495 142.961z",class:"letter letter--2 u"},null,-1),Te=Object(o["j"])("path",{d:"M66.323 115.72h6.207v26.508h-6.207V115.72z",class:"letter letter--3 i"},null,-1),ze=Object(o["j"])("rect",{x:"66.323",y:"105.397",width:"6.207",height:"6.206",class:"dot dot--1"},null,-1),$e=Object(o["j"])("path",{d:"M99.528 137.265v4.963H76.653v-3.92l14.545-17.624H76.94v-4.964h22.188v3.921l-14.596 17.624H99.528z",class:"letter letter--4 z"},null,-1),Ee=Object(o["j"])("path",{d:"M128.081 105.397v36.831h-5.957v-3.423c-1.01 1.244-2.314 2.216-3.797 2.826 -1.582 0.647-3.277 0.974-4.988 0.956 -2.398 0.037-4.766-0.545-6.875-1.688 -2.016-1.107-3.674-2.766-4.781-4.781 -2.314-4.457-2.314-9.762 0-14.219 1.113-2.007 2.771-3.659 4.781-4.766 2.109-1.144 4.477-1.726 6.875-1.688 1.648-0.02 3.285 0.285 4.816 0.896 1.438 0.583 2.715 1.502 3.723 2.682v-13.623h6.203V105.397zM118.09 136.245c1.199-0.683 2.18-1.688 2.832-2.903 1.391-2.745 1.391-5.988 0-8.733 -0.652-1.215-1.633-2.224-2.832-2.907 -2.508-1.355-5.531-1.355-8.041 0 -1.197 0.685-2.178 1.692-2.83 2.907 -1.387 2.747-1.387 5.987 0 8.733 0.65 1.215 1.633 2.222 2.83 2.903C112.557 137.605 115.583 137.605 118.09 136.245z",class:"letter letter--5 d"},null,-1),qe=Object(o["j"])("path",{d:"M132.192 115.72h6.203v26.508h-6.203V115.72z",class:"letter letter--6 i"},null,-1),He=Object(o["j"])("rect",{x:"132.192",y:"105.397",width:"6.207",height:"6.206",class:"dot dot--2"},null,-1),ke=Object(o["j"])("path",{d:"M163.928 142.228h-5.674v-16.509c-0.07-2.774-2.377-4.968-5.15-4.897 -2.68 0.066-4.832 2.222-4.9 4.897v16.509h-5.68v-16.509c0-5.91 4.793-10.703 10.703-10.703 5.912 0 10.705 4.792 10.705 10.703L163.928 142.228z",class:"letter letter--7 n"},null,-1),We=Object(o["j"])("path",{d:"M174.258 142.228h-6.207V115.72h6.207V142.228z",class:"letter letter--8 i"},null,-1),Ye=Object(o["j"])("rect",{x:"168.051",y:"105.394",width:"6.207",height:"6.206",class:"dot dot--3"},null,-1);Object(o["w"])();const Xe=we((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("svg",xe,[Se,Ie,_e,Me,Le,De,Ce,Be,Pe,Ae,Te,ze,$e,Ee,qe,He,ke,We,Ye])));var Ne={name:"Loader"};n("c125");Ne.render=Xe,Ne.__scopeId="data-v-b9fcff2e";var Fe=Ne,Ve={name:"Match",components:{FullPage:y,Game:ye,Loader:Fe},computed:{matchId(){const{matchId:e=null}=this.match||{};return e}},setup(){const e=Object(o["A"])(""),t=Object(s["c"])(),{data:n,error:r,inError:a,initialized:i,loading:c,success:l}=b({callback:p(t.params.id),immediate:!0,deps:[()=>t.params]});return{x:e,match:n,showLoader:c}}};Ve.render=c;var Ge=Ve;const Je=Object(o["P"])("data-v-77de2620");Object(o["y"])("data-v-77de2620");const Re={class:"p-4"};Object(o["w"])();const Ue=Je((e,t,n,r,a,i)=>{const s=Object(o["D"])("router-link");return Object(o["v"])(),Object(o["g"])("div",Re,[Object(o["j"])("ul",null,[(Object(o["v"])(!0),Object(o["g"])(o["a"],null,Object(o["B"])(a.games,e=>(Object(o["v"])(),Object(o["g"])("li",{key:e.id},[Object(o["j"])(s,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:Je(()=>[Object(o["i"])(Object(o["G"])(e.title),1)]),_:2},1032,["to"])]))),128))])])});d.a.defaults.headers.get["Content-Type"]="application/json",d.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var Ke={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await d.a.get("/api/matches",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};n("d04b");Ke.render=Ue,Ke.__scopeId="data-v-77de2620";var Ze=Ke;const Qe={class:"p-4"},et=Object(o["j"])("h1",null,"Icons",-1),tt={style:{maxWidth:"250px"}};function nt(e,t,n,r,a,i){const s=Object(o["D"])("BaseIcon");return Object(o["v"])(),Object(o["g"])("div",Qe,[et,Object(o["j"])("div",tt,[Object(o["j"])(s,{class:"hello",name:"watch",full:!1,style:{fill:"red"}})])])}const ot=Object(o["P"])("data-v-94662f56"),rt=ot((e,t,n,r,a,i)=>(Object(o["v"])(),Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:i.viewBox,width:n.width,height:n.height,class:i.classes,"aria-labelledby":n.name,role:"presentation",innerHTML:i.html},null,10,["viewBox","width","height","aria-labelledby","innerHTML"]))),at={watch:{viewBox:"0 0 24 24",html:'<path d="M11 9v3c0 .276.112.526.293.707l1.5 1.5a.999.999 0 101.414-1.414L13 11.586V9a1 1 0 00-2 0zm4.33 10.276l-.166 1.813a.984.984 0 01-.333.658c-.18.159-.415.253-.67.253H9.83a.994.994 0 01-.69-.269 1.008 1.008 0 01-.315-.643l-.165-1.817A7.965 7.965 0 0012 20a7.969 7.969 0 003.33-.724zM8.187 7.367A5.97 5.97 0 0112 6c1.657 0 3.156.67 4.243 1.757S18 10.343 18 12a5.979 5.979 0 01-2.187 4.633A5.97 5.97 0 0112 18c-1.657 0-3.156-.67-4.243-1.757S6 13.657 6 12a5.979 5.979 0 012.187-4.633zm9.304-1.185l-.315-3.455A3.003 3.003 0 0014.18 0H9.826a3.006 3.006 0 00-2.982 2.729L6.53 6.162A7.981 7.981 0 004 12a7.981 7.981 0 002.519 5.828l.315 3.445A3.003 3.003 0 009.83 24h4.329a3.007 3.007 0 001.997-.754 2.99 2.99 0 001-1.975l.314-3.433A7.981 7.981 0 0020 12a7.981 7.981 0 00-2.508-5.818zM8.67 4.724l.166-1.813A1.004 1.004 0 019.834 2h4.346c.27-.001.509.1.69.269.175.164.291.389.315.643l.166 1.821A7.987 7.987 0 0012 4a7.969 7.969 0 00-3.33.724z"/>'}};var it={name:"BaseIcon",props:{full:{type:Boolean,required:!1},height:{type:[Number,String],required:!1},name:{type:String,required:!0},width:{type:[Number,String],required:!1}},computed:{classes(){return{icon:!0,["icon--"+this.name]:this.name,["icon--w-base"]:!this.width&&!this.height,["icon--w-full"]:this.full}},html(){return at[this.name].html||""},viewBox(){return at[this.name].viewBox||"0 0 24 24"}}};n("f142");it.render=rt,it.__scopeId="data-v-94662f56";var st=it,ct={name:"UI",components:{BaseIcon:st}};ct.render=nt;var lt=ct;const dt=[{path:"/",name:"ui",component:lt,props:!1},{path:"/",name:"matches",component:Ze,props:!1},{path:"/match/:id",name:"match",component:Ge,props:!1},{path:"/ui",name:"ui",component:lt,props:!1}],ut=Object(s["a"])({history:Object(s["b"])(),routes:dt});var mt=ut;Object(o["f"])(i).use(mt).mount("#quizdini")},5911:function(e,t,n){},"5f36":function(e,t,n){"use strict";n("5461")},"7be5":function(e,t,n){"use strict";n("2b47")},9299:function(e,t,n){"use strict";n("cbcf")},"9db1":function(e,t,n){"use strict";n("e099")},a951:function(e,t,n){"use strict";n("eff1")},b050:function(e,t,n){},c125:function(e,t,n){"use strict";n("1f33")},cbcf:function(e,t,n){},d04b:function(e,t,n){"use strict";n("ead2")},d3e6:function(e,t,n){},e099:function(e,t,n){},ead2:function(e,t,n){},eff1:function(e,t,n){},f142:function(e,t,n){"use strict";n("0292")},f5dc:function(e,t,n){"use strict";n("5911")},f918:function(e,t,n){}});
//# sourceMappingURL=app.f68fc678.js.map