(function(e){function t(t){for(var a,r,o=t[0],c=t[1],d=t[2],h=0,u=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},n={app:0},s=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"00b8":function(e,t,i){},"0144":function(e,t,i){},"0dd4":function(e,t,i){},"157b":function(e,t,i){"use strict";i("0dd4")},"1a54":function(e,t,i){},"2d23":function(e,t,i){"use strict";i("00b8")},"2f09":function(e,t,i){"use strict";i("a030")},3836:function(e,t,i){},"442b":function(e,t,i){"use strict";i("3836")},"56d7":function(e,t,i){"use strict";i.r(t);i("a79d");var a=i("7a23");function n(e,t,i,n,s,r){const o=Object(a["A"])("router-view");return Object(a["s"])(),Object(a["f"])(o)}var s={name:"App"};i("9cdc");s.render=n;var r=s,o=i("6c02");const c=Object(a["J"])("data-v-16631691");Object(a["v"])("data-v-16631691");const d={class:"full-page full-page--match"};Object(a["t"])();const l=c((function(e,t,i,n,s,r){const o=Object(a["A"])("MatchGame");return Object(a["s"])(),Object(a["f"])("div",d,[s.showBoard?(Object(a["s"])(),Object(a["f"])(o,{key:0,"color-scheme":s.colorScheme,duration:30,"items-per-board":s.itemsPerBoard,matches:s.matches,onGameOver:r.onGameOver},null,8,["color-scheme","items-per-board","matches","onGameOver"])):Object(a["g"])("",!0)])}));var h=i("bc3a"),u=i.n(h);const m=Object(a["J"])("data-v-29bd28a9");Object(a["v"])("data-v-29bd28a9");const p={id:"match-game"},g={id:"match-timer"};Object(a["t"])();const f=m((function(e,t,i,n,s,r){const o=Object(a["A"])("MatchTimer"),c=Object(a["A"])("MatchTileBoard"),d=Object(a["A"])("DnD");return Object(a["s"])(),Object(a["f"])(a["b"],{appear:"",duration:{enter:1e3,leave:1e3},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",css:!0,onAfterEnter:r.onGameEnter,onAfterLeave:r.onGameLeave},{default:m(()=>[Object(a["i"])("div",p,[Object(a["i"])("div",g,[Object(a["i"])(o,{playing:s.playing,duration:i.duration,"interval-ms":100,score:s.score,onTimerExpired:r.onTimerExpired},null,8,["playing","duration","score","onTimerExpired"])]),Object(a["i"])(d,{id:"match-dnd-board",disabled:r.inTransition,playing:s.playing,"throttle-ms":r.throttleMs,onDrag:r.onDrag,onOver:r.onOver,onDrop:r.onDrop},{default:m(()=>[Object(a["i"])(c,{componentName:"Draggable",id:"terms","tile-type":"term",disabled:r.inTransition,duration:{enter:800,leave:0},playing:s.playing,tiles:s.terms,"tile-count":i.itemsPerBoard},null,8,["disabled","playing","tiles","tile-count"]),Object(a["i"])(c,{componentName:"Droppable",id:"definitions","tile-type":"definition",disabled:r.inTransition,duration:{enter:800,leave:0},playing:s.playing,tiles:s.definitions,"tile-count":i.itemsPerBoard},null,8,["disabled","playing","tiles","tile-count"])]),_:1},8,["disabled","playing","throttle-ms","onDrag","onOver","onDrop"])])]),_:1},8,["onAfterEnter","onAfterLeave"])}));i("ddb0");var b=i("8dee"),v=i.n(b);function y(e,t){let i=["red","orange","yellow","lime","green","cyan","blue","purple","magenta","navy","gray","teal"];switch(t.toLowerCase()){case"rainbow":return e.map(e=>{let t=Math.floor(Math.random()*i.length),a=i[t];return i.splice(t,1),{...e,color:a}});default:return e.map(e=>({...e,color:""}))}}function O(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}const j=Object(a["J"])("data-v-7712cc90"),M=j((function(e,t,i,n,s,r){return Object(a["s"])(),Object(a["f"])("div",Object(a["n"])({id:i.id,class:[r.classes]},Object(a["E"])(r.listeners)),[Object(a["z"])(e.$slots,"default")],16,["id"])}));var w=i("2ef0"),D=i.n(w),T={name:"DnD",props:{disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},playing:{type:Boolean,required:!0,default:!1},throttleMs:{type:Number,required:!0,default:33.333}},data(){return{dragged:{active:!1}}},computed:{canDrag(){return this.playing&&!this.disabled},classes(){return{board:!0}},dragging(){const{active:e=!1}=this.dragged;return e},listeners(){return this.playing?{mousedown:e=>this.dragStart(e),touchstart:e=>this.dragStart(e),mouseup:e=>this.dragEnd(e),touchend:e=>this.dragEnd(e),mousemove:e=>this.throttledDrag(e),touchmove:e=>this.throttledDrag(e)}:{}},throttledDrag(){return D.a.throttle(this.drag,this.throttleMs,{trailing:!1})}},methods:{dragStart(e){if(e.preventDefault(),!this.canDrag)return;const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const i="touchstart"===e.type?e.touches[0].clientX:e.clientX,a="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:n,left:s}=t.getBoundingClientRect();this.dragged={active:!0,dragId:t.id,offsetX:i-s,offsetY:a-n,initialX:i,initialY:a}},drag(e){if(e.preventDefault(),!this.canDrag||!this.dragging)return;const{dragId:t,initialX:i,initialY:a,overId:n}=this.dragged,s="touchmove"===e.type?e.touches[0].clientX-i:e.clientX-i,r="touchmove"===e.type?e.touches[0].clientY-a:e.clientY-a;this.$emit("drag",{dragId:t,dragX:s,dragY:r});const{id:o=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};n!==o&&(this.$emit("over",{dropId:o}),this.dragged={...this.dragged,overId:o})},dragEnd(e){if(e.preventDefault(),this.throttledDrag.cancel(),!this.canDrag||!this.dragging)return;const{dragId:t,initialX:i,initialY:a,offsetX:n,offsetY:s}=this.dragged,r="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,o="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,c=document.elementsFromPoint(r,o).find(e=>e.classList.contains("droppable")),{id:d}=c||{},{top:l,left:h}=c&&c.getBoundingClientRect()||{};this.$emit("drop",{drag:{id:t,x:c?r-i:r,y:c?o-a:o},drop:c?{id:d,x:Math.round(h-i+n),y:Math.round(l-a+s)}:null}),this.dragged={active:!1}}},mounted(){console.log(this.$options.name,"mounted...")}};i("b04b");T.render=M,T.__scopeId="data-v-7712cc90";var _=T;const x=Object(a["J"])("data-v-a8f1e592"),I=x((function(e,t,i,n,s,r){return Object(a["s"])(),Object(a["f"])(a["c"],{appear:"",tag:"div",id:i.id,class:[r.classes],duration:i.duration,css:!0,"enter-class":"fade-in-start","enter-active-class":"fade-in-active","enter-to-class":"fade-in-end","move-class":r.transitionGroup,onLeave:r.leave},{default:x(()=>[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(r.filteredTiles,e=>(Object(a["s"])(),Object(a["f"])(Object(a["B"])(i.componentName),{key:e.id,content:e.content,disabled:i.disabled,id:e.id,style:[e.style],class:[r.tileClasses,i.tileType,e.className]},null,8,["content","disabled","id","style","class"]))),128))]),_:1},8,["id","class","duration","move-class","onLeave"])})),S=Object(a["J"])("data-v-a6e753a2"),P=S((function(e,t,i,n,s,r){return Object(a["s"])(),Object(a["f"])("div",{id:i.id,innerHTML:i.content},null,8,["id","innerHTML"])}));var B={name:"Draggable",props:["content","id"]};i("a62d");B.render=P,B.__scopeId="data-v-a6e753a2";var L=B;const N=Object(a["J"])("data-v-322e608c"),A=N((function(e,t,i,n,s,r){return Object(a["s"])(),Object(a["f"])("div",{id:i.id,innerHTML:i.content},null,8,["id","innerHTML"])}));var C={name:"Droppable",props:["content","disabled","id"]};i("2f09");C.render=A,C.__scopeId="data-v-322e608c";var E=C,G={name:"MatchTileBoard",components:{Draggable:L,Droppable:E},props:["componentName","disabled","duration","id","playing","tiles","tileType","tileCount"],computed:{transitionGroup(){return this.disabled?"slide":"no-move-list"},classes(){return{"tile-board":!0,"tile-board--match":!0,"tile-board--disabled":!this.playing,["tiles-"+this.tileCount]:this.tileCount}},filteredTiles(){return this.tiles.filter(e=>e.show)},tileClasses(){return{tile:!0,draggable:"Draggable"===this.componentName,droppable:"Droppable"===this.componentName,disabled:this.disabled}}},methods:{leave(e,t){console.log("leave!"),e.style.display="none",t()}}};i("157b");G.render=I,G.__scopeId="data-v-a8f1e592";var X=G;const Y=Object(a["J"])("data-v-8fd929be");Object(a["v"])("data-v-8fd929be");const q={class:"timer__wrapper"},$={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},k={class:"timer__circle"};Object(a["t"])();const J=Y((function(e,t,i,n,s,r){return Object(a["s"])(),Object(a["f"])(a["b"],{duration:{enter:1e3,leave:1e3},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",css:!0,onAfterEnter:r.afterEnter,onAfterLeave:r.afterLeave},{default:Y(()=>[Object(a["I"])(Object(a["i"])("div",{class:"timer",id:i.id},[Object(a["i"])(a["b"],{appear:"",css:!0,duration:{enter:250,leave:250},"leave-active-class":"score-out-active","leave-class":"score-out-start","leave-to-class":"score-out-end",onAfterLeave:r.endScoreChange},{default:Y(()=>[Object(a["I"])(Object(a["i"])("div",q,[(Object(a["s"])(),Object(a["f"])("svg",$,[Object(a["i"])("g",k,[Object(a["i"])("circle",{class:["timer__path-elapsed",s.hitMiss],cx:"50",cy:"50",r:"45"},null,2),Object(a["i"])("path",{"stroke-dasharray":r.circleDasharray,class:["timer__path-remaining",[r.severity,s.hitMiss]],d:"M 50, 50\r\n            m -45, 0\r\n            a 45,45 0 1,0 90,0\r\n            a 45,45 0 1,0 -90,0\r\n          "},null,10,["stroke-dasharray"])])])),Object(a["i"])("span",{class:["timer__label",s.hitMiss]},Object(a["D"])(i.score||r.formattedTimeLeft),3)],512),[[a["G"],!s.scoreChanging]])]),_:1},8,["onAfterLeave"])],8,["id"]),[[a["G"],i.playing]])]),_:1},8,["onAfterEnter","onAfterLeave"])})),z=283,F=40,H=20;var R={name:"MatchTimer",props:["active","duration","id","intervalMs","playing","score"],data(){return{elapsed:0,hitMiss:null,intervalId:null,scoreChanging:!1}},computed:{circleDasharray(){const e=this.progressPct/100-1/this.duration*(1-this.progressPct/100);return(e*z).toFixed(0)+" 283"},expired(){return this.remaining<=0},formattedTimeLeft(){const e=Math.floor(this.remaining/6e4);let t=Math.floor(this.remaining%6e4/1e3);return t<10&&(t="0"+t),`${e}:${t}`},progressPct(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining(){return 1e3*this.duration-this.elapsed},severity(){return this.progressPct<=F?this.progressPct<=H?"alert":"warn":"success"}},methods:{afterEnter(e){console.log("timer entered..."),this.startTimer()},afterLeave(e){console.log("timer left..."),this.elapsed=0},startTimer(){this.elapsed=0,this.intervalId=setInterval(()=>this.elapsed+=this.intervalMs,this.intervalMs)},endTimer(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange(e){console.log("score changed ending..."),this.scoreChanging=!1,this.hitMiss=null}},watch:{score(e,t){console.log("score changed!"),this.scoreChanging=!0,this.hitMiss=e>t?"hit":"miss"},expired(e,t){!t&&e&&(this.endTimer(),this.$emit("timer-expired"))}},mounted(){console.log(this.$options.name,"mounted...")},unmounted(){this.endTimer()}};i("442b");R.render=J,R.__scopeId="data-v-8fd929be";var Z=R,K={name:"MatchGame",components:{DnD:_,MatchTileBoard:X,MatchTimer:Z},props:{colorScheme:{type:String,required:!1,default:"rainbow"},duration:{type:Number,required:!0,default:60},hitDurationMs:{type:Number,required:!1,default:800},itemsPerBoard:{type:Number,required:!0,default:9},matches:{type:Array,required:!0,default:()=>[]},maxFps:{type:Number,required:!1,default:30}},data(){return{correct:0,definitions:[],incorrect:0,playing:!1,score:0,stats:[],terms:[],transitioning:!1}},computed:{inTransition:{get(){return this.transitioning},set(e){this.transitioning=e}},rounds(){return Math.floor(this.correct/this.itemsPerBoard)},throttleMs(){return Math.round(1e3/this.maxFps)}},methods:{deal(){console.log("dealing...");const e=O(this.matches),t=e.slice(0,Math.min(this.itemsPerBoard,e.length));let i=t.map(e=>({...e,matched:!1,show:!0})),a=i.map(e=>{const{term:t,definition:i,...a}=e;return{...a,content:t,answer:i,id:v.a.generate()}});a=y(a,this.colorScheme),this.terms=O(a);let n=[...i];n=n.map(e=>{const{term:t,definition:i,...a}=e;return{...a,content:i,id:v.a.generate()}}),this.definitions=O(n),this.playing=!0},hitStyle(e,t,i,a,n,s,r){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":i+"px","--hit-end-tx":a+"px","--hit-end-ty":n+"px","--hit-end-tz":s+"px","--hit-duration":r+"ms"}},isMatch:function(e,t){const{answer:i}=this.terms.find(t=>t.id===e)||{},{content:a}=this.definitions.find(e=>e.id===t)||{};return!!i&&!!a&&i===a},missStyle(e,t,i){return{...this.translate(e,t,i)}},moveStyle(e,t,i){return{...this.translate(e,t,i)}},onDrag(e){const{dragId:t,dragX:i,dragY:a}=e;this.terms=this.terms.map(e=>(e.style=e.id===t?this.moveStyle(i,a,1):e.style,e.className=e.id===t?"drag":e.className,e))},onDrop(e){const t={id:null,x:null,y:null},{id:i,x:a,y:n}=e.drag||t,{id:s,x:r,y:o}=e.drop||t,c=!!s,d=!!s&&this.isMatch(i,s);d?(this.inTransition=!0,this.terms=this.terms.map(e=>(e.matched=e.id===i||e.matched,e.className=e.id===i?"hit":e.className,e.style=e.id===i?this.hitStyle(a,n,1,r,o,1,this.hitDurationMs):e.style,e)),this.definitions=this.definitions.map(e=>(e.matched=e.id===s||e.matched,e.className=e.id===s?"hit":e.className,e)),setTimeout(()=>{this.terms=this.terms.map(e=>(e.show=e.id!==i&&e.show,e)),this.definitions=this.definitions.map(e=>(e.show=e.id!==s&&e.show,e)),this.correct++,this.score=Math.max(this.score+1,0),this.terms=O(this.terms),this.definitions=O(this.definitions),setTimeout(()=>{this.inTransition=!1},800)},this.hitDurationMs)):(this.terms=this.terms.map(e=>(e.style=e.id===i?this.missStyle(0,0,0):e.style,e.className=e.id===i?"miss":e.className,e)),this.definitions=this.definitions.map(e=>(e.className="",e)),c&&(this.incorrect++,this.score=Math.max(this.score-1,0)))},onGameEnter(){console.log("game entered..."),this.deal(),this.playing=!0},onGameLeave(){console.log("game left....")},onOver(e){const{dropId:t}=e;this.definitions=this.definitions.map(e=>(e.className=e.id!==t||e.matched?"":"over",e))},onTimerExpired(){console.log("timer expired..."),this.playing=!1,setTimeout(()=>{console.log("game over logic goes here..."),this.$emit("game-over")},2e3)},togglePlaying(){this.playing=!this.playing},translate(e,t,i){return{transform:"translate3d("+e+"px, "+t+"px, "+i+"px)"}}},watch:{rounds(){console.log("dealing new round..."),this.deal()}}};i("b043");K.render=f,K.__scopeId="data-v-29bd28a9";var Q=K;u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var U={name:"Match",components:{MatchGame:Q},data(){return{colorScheme:"",correct:0,definitions:[],duration:60,gameId:null,itemsPerBoard:0,matches:[],showBoard:!1,showSplash:!0,title:""}},computed:{game:{get(){return{colorScheme:this.colorScheme,duration:this.duration,gameId:this.gameId,itemsPerBoard:this.itemsPerBoard,matches:this.matches,title:this.title}},set(e){const{matchId:t,matches:i=[],options:{duration:a=60,colorScheme:n="",itemsPerBoard:s=9}={},title:r=""}=e;this.colorScheme=n,this.duration=a,this.gameId=t,this.itemsPerBoard=s,this.matches=i,this.title=r}},matchId(){return this.$route.params.id}},methods:{async fetchData(){try{const e=await u.a.get("/api/match/"+this.matchId,{timeout:3e4});return e.data}catch(e){console.log(e)}},onGameOver(){console.log("on game over..."),this.showBoard=!1,setTimeout(()=>{this.showBoard=!0},2e3)}},async created(){const e=await this.fetchData();this.game=e,this.showBoard=!0},mounted(){console.log(this.$options.name,"mounted...")}};i("cf66");U.render=l,U.__scopeId="data-v-16631691";var V=U;const W=Object(a["J"])("data-v-7a06439f");Object(a["v"])("data-v-7a06439f");const ee={class:"p-4"};Object(a["t"])();const te=W((function(e,t,i,n,s,r){const o=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["f"])("div",ee,[Object(a["i"])("ul",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(s.games,e=>(Object(a["s"])(),Object(a["f"])("li",{key:e.id},[Object(a["i"])(o,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:W(()=>[Object(a["h"])(Object(a["D"])(e.title),1)]),_:2},1032,["to"])]))),128))])])}));u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var ie={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches/",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};i("2d23");ie.render=te,ie.__scopeId="data-v-7a06439f";var ae=ie;const ne=[{path:"/",name:"matches",component:ae,props:!1},{path:"/match/:id",name:"match",component:V,props:!1}],se=Object(o["a"])({history:Object(o["b"])(),routes:ne});var re=se;Object(a["e"])(r).use(re).mount("#quizdini")},"5f17":function(e,t,i){},6048:function(e,t,i){},"9cdc":function(e,t,i){"use strict";i("c701")},a030:function(e,t,i){},a62d:function(e,t,i){"use strict";i("5f17")},b043:function(e,t,i){"use strict";i("0144")},b04b:function(e,t,i){"use strict";i("1a54")},c701:function(e,t,i){},cf66:function(e,t,i){"use strict";i("6048")}});
//# sourceMappingURL=app.18717d13.js.map