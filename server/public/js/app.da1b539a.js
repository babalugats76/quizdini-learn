(function(e){function t(t){for(var n,a,o=t[0],c=t[1],d=t[2],h=0,m=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"016d":function(e,t,i){},"0678":function(e,t,i){"use strict";i("016d")},"17c0":function(e,t,i){},"1c66":function(e,t,i){"use strict";i("3f69")},2089:function(e,t,i){"use strict";i("70f3")},"253b":function(e,t,i){},3886:function(e,t,i){"use strict";i("253b")},"398a":function(e,t,i){},"3f69":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("a79d");var n=i("7a23");function s(e,t,i,s,r,a){const o=Object(n["A"])("router-view");return Object(n["s"])(),Object(n["f"])(o)}var r={name:"App"};i("9cdc");r.render=s;var a=r,o=i("6c02");const c=Object(n["J"])("data-v-590807fc");Object(n["v"])("data-v-590807fc");const d={class:"match-game"},l={class:"match-timer"};Object(n["t"])();const h=c((function(e,t,i,s,r,a){const o=Object(n["A"])("Timer");return Object(n["s"])(),Object(n["f"])("div",d,[Object(n["i"])("button",{onClick:t[1]||(t[1]=t=>e.setDuration(5))},"Set Duration"),Object(n["i"])("button",{onClick:t[2]||(t[2]=t=>e.setScore(1))},"1"),Object(n["i"])("button",{onClick:t[3]||(t[3]=t=>e.setScore(0))},"0"),Object(n["i"])("div",l,[Object(n["i"])(o)])])}));var m=i("bc3a"),u=i.n(m);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const g={timeout:3e4},p=async({url:e,config:t=g})=>{console.log("url",e),console.log("config",t);try{const i=await u.a.get(e,t);return{data:i.data}}catch(i){return{error:i.response.data}}},f="/api/match";var v={fetch:e=>p({url:`${f}/${e}`})},b={dnd:{timeouts:{throttle:33}},game:{timeouts:{enter:1e3,leave:1e3}},tile:{timeouts:{enter:800,hit:800,leave:0,miss:800,shuffle:500}},timer:{debug:!0,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}};const O=Object(n["w"])({canDnD:!1,colorScheme:null,correct:0,definitions:[],duration:60,gameId:null,incorrect:0,itemsPerBoard:9,matches:[],playing:!1,score:0,stats:[],terms:[],title:null}),y=b,j=()=>O.canDnD,M=()=>O.colorScheme,w=()=>O.correct,I=()=>O.definitions,D=()=>O.duration,T=()=>O.gameId,_=()=>O.incorrect,x=()=>O.itemsPerBoard,S=()=>O.matches,P=()=>O.playing,C=()=>O.score,B=()=>O.stats,L=()=>O.terms,A=()=>O.title,E=e=>O.canDnD=e,$=e=>O.colorScheme=e,N=e=>O.correct=e,X=e=>O.definitions=e,Y=e=>O.duration=e,k=e=>O.gameId=e,G=e=>O.incorrect=e,q=e=>O.itemsPerBoard=e,J=e=>O.matches=e,z=e=>O.playing=e,F=e=>O.score=e,R=e=>O.stats=e,H=e=>O.terms=e,Z=e=>O.title=e,U={canDnD:j,colorScheme:M,correct:w,definitions:I,duration:D,gameId:T,incorrect:_,itemsPerBoard:x,matches:S,playing:P,score:C,stats:B,terms:L,title:A},W={setCanDnD:E,setColorScheme:$,setCorrect:N,setDefinitions:X,setDuration:Y,setGameId:k,setIncorrect:G,setItemsPerBoard:q,setMatches:J,setPlaying:z,setScore:F,setStats:R,setTerms:H,setTitle:Z};i("ddb0");var K=i("8dee"),Q=i.n(K);function V(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function ee(e,t,i="id"){return Object.prototype.hasOwnProperty.call(t,i)?e.map(e=>e[i]!==t[i]?e:{...e,...t}):e}function te(e,t,i="id",n){if(!Object.prototype.hasOwnProperty.call(t,i))return e;const s=e.find(e=>e[i]===t[i]),r=n?n(s):t;return s?e.map(e=>e[i]!==r[i]?e:{...e,...r}):e.concat(r)}const ie=(e,t,i)=>({transform:"translate3d("+e+"px, "+t+"px, "+i+"px)"}),ne=(e,t,i,n,s,r,a)=>({"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":i+"px","--hit-end-tx":n+"px","--hit-end-ty":s+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}),se=(e,t,i)=>({...ie(e,t,i)}),re=e=>{console.log("loading data...");const{matchId:t,matches:i=[],options:{duration:n=60,colorScheme:s="",itemsPerBoard:r=9}={},title:a=""}=e;O.colorScheme=s,O.duration=n,O.gameId=t,O.itemsPerBoard=r,O.matches=i,O.title=a},ae=()=>{console.log("dealing...");const e=V(O.matches),t=e.slice(0,Math.min(O.itemsPerBoard,e.length));let i=t.map(e=>({...e,matched:!1,show:!0})),n=V(i.map(e=>{const{term:t,definition:i,...n}=e;return{...n,content:t,answer:i,id:Q.a.generate()}})),s=[...i];s=s.map(e=>{const{term:t,definition:i,...n}=e;return{...n,content:i,id:Q.a.generate()}}),O.terms=n,O.definitions=s},oe=()=>{console.log("shuffling..."),O.terms=V(O.terms),O.definitions=V(O.definitions)},ce=(e,t)=>{const{answer:i}=O.terms.find(t=>t.id===e)||{},{content:n}=O.definitions.find(e=>e.id===t)||{};return!!i&&!!n&&i===n},de=e=>{const{dropId:t}=e||{};(void 0).definitions=(void 0).definitions.map(e=>({...e,className:e.id!==t||e.matched?"":"over"}))},le=e=>{const{dragId:t,dragX:i,dragY:n,dropId:s,dropX:r,dropY:a}=e||{},o=!!s&&ce(t,s);if(O.terms=ee(O.terms,{id:t,matched:o,className:o?"hit":"miss",style:o?ne(i,n,1,r,a,1,y.tile.hitMs):se(0,0,0)}),!s)return;O.definitions=ee(O.definitions,{id:s,className:o?"hit":"",...o&&{matched:!0}});const{content:c}=O.terms.find(e=>e.id===t)||{};O.score=Math.max(o?O.score+1:O.score-1,0),O.stats=te(O.stats,{term:c},"term",e=>e?{term:c,hit:o?e.hit+1:e.hit,miss:o?e.miss:e.miss+1}:{term:c,hit:o?1:0,miss:o?0:1})},he={deal:ae,drop:le,isMatch:ce,load:re,over:de,shuffle:oe},me=Object(n["J"])("data-v-57139a46");Object(n["v"])("data-v-57139a46");const ue={class:"timer"},ge={class:"timer__wrapper"},pe={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},fe={class:"timer__circle"};Object(n["t"])();const ve=me((function(e,t,i,s,r,a){return Object(n["I"])((Object(n["s"])(),Object(n["f"])(n["b"],{duration:{enter:""+a.timeouts.enter,leave:""+a.timeouts.leave},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onAfterEnter:a.onEntered,onAfterLeave:a.onLeft},{default:me(()=>[Object(n["I"])(Object(n["i"])("div",ue,[Object(n["i"])(n["b"],{appear:"",duration:{enter:""+a.timeouts.change,leave:""+a.timeouts.change},"leave-active-class":"scoring-active","leave-to-class":"scoring-end",onAfterLeave:a.endScoreChange},{default:me(()=>[Object(n["I"])(Object(n["i"])("div",ge,[(Object(n["s"])(),Object(n["f"])("svg",pe,[Object(n["i"])("g",fe,[Object(n["i"])("circle",{class:["timer__path-elapsed",r.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(n["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[a.severity,r.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(n["i"])("span",{class:["timer__label",r.scoreClass]},Object(n["D"])(e.score||a.formatted),3)],512),[[n["G"],!r.scoring]])]),_:1},8,["duration","onAfterLeave"])],512),[[n["G"],e.playing]])]),_:1},8,["duration","onAfterEnter","onAfterLeave"])),[[n["G"],!a.expired]])})),be=283,Oe={ALERT:"alert",WARN:"warn",SUCCESS:"success"};var ye={name:"Timer",data(){return{elapsed:0,intervalId:null,scoreClass:"",scoring:!1}},computed:{debug(){return y.timer.debug},thresholds(){return y.timer.thresholds},timeouts(){return y.timer.timeouts},duration:U.duration,playing:U.playing,score:U.score,expired(){return this.remaining<=0},formatted(){const e=Math.floor(this.remaining/6e4),t=Math.floor(this.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`},progress(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining(){return 1e3*this.duration-this.elapsed},severity(){return this.progress<=this.thresholds.warn?this.progress<=this.thresholds.alert?Oe.ALERT:Oe.WARN:Oe.SUCCESS},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*be).toFixed(0)} ${be}`}},methods:{onEntered(){this.debug&&console.log("timer entered..."),this.startTimer()},onLeft(){this.debug&&console.log("timer left...")},startTimer(){this.elapsed=0,this.intervalId=setInterval(()=>this.elapsed+=this.timeouts.interval,this.timeouts.interval)},endTimer(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange(){this.debug&&console.log("timer scoring end..."),this.scoring=!1,this.scoreClass=""}},watch:{score(e,t){this.debug&&console.log("timer scoring:",t,"--\x3e",e),this.scoring=!0,this.scoreClass=e>t?"hit":"miss"},expired(e,t){!t&&e&&(this.endTimer(),this.$emit("timer-expired"))}},mounted(){this.debug&&console.log(this.$options.name,"mounted...")},unmounted(){this.debug&&console.log("clearing timer..."),this.endTimer()}};i("cfab");ye.render=ve,ye.__scopeId="data-v-57139a46";var je=ye,Me={name:"Match",components:{Timer:je},data(){return{globalState:O}},computed:{...U,matchId(){return this.$route.params.id}},methods:{...W,...he},async created(){console.log(this.matchId);const e=await v.fetch(this.matchId);this.load(e.data),this.deal(),setTimeout(()=>{this.shuffle(),this.setCanDnD(!0),this.setPlaying(!0)},1e3)}};i("0678");Me.render=h,Me.__scopeId="data-v-590807fc";var we=Me;const Ie=Object(n["J"])("data-v-55a1f694");Object(n["v"])("data-v-55a1f694");const De={class:"full-page full-page--match"};Object(n["t"])();const Te=Ie((function(e,t,i,s,r,a){const o=Object(n["A"])("MatchGame");return Object(n["s"])(),Object(n["f"])("div",De,[r.showBoard?(Object(n["s"])(),Object(n["f"])(o,{key:0,"color-scheme":r.colorScheme,duration:r.duration,"items-per-board":r.itemsPerBoard,matches:r.matches,config:a.config,onGameOver:a.onGameOver},null,8,["color-scheme","duration","items-per-board","matches","config","onGameOver"])):Object(n["g"])("",!0)])})),_e=Object(n["J"])("data-v-663068b0");Object(n["v"])("data-v-663068b0");const xe={id:"match-game"},Se={id:"match-timer"};Object(n["t"])();const Pe=_e((function(e,t,i,s,r,a){const o=Object(n["A"])("MatchTimer"),c=Object(n["A"])("MatchTileBoard"),d=Object(n["A"])("DnD");return Object(n["s"])(),Object(n["f"])(n["b"],{appear:"",css:!0,duration:{enter:""+i.config.game.enterMs,leave:""+i.config.game.leaveMs},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onAfterEnter:a.onEntered,onAfterLeave:a.onLeft},{default:_e(()=>[Object(n["i"])("div",xe,[Object(n["i"])("div",Se,[Object(n["i"])(o,{"change-ms":i.config.timer.changeMs,duration:i.duration,"enter-ms":i.config.timer.enterMs,"interval-ms":i.config.timer.intervalMs,"leave-ms":i.config.timer.leaveMs,playing:r.playing,score:r.score,onTimerExpired:a.onTimerExpired},null,8,["change-ms","duration","enter-ms","interval-ms","leave-ms","playing","score","onTimerExpired"])]),Object(n["i"])(d,{id:"match-dnd-board",disabled:a.inTransition,playing:r.playing,"throttle-ms":i.config.dnd.throttleMs,onDrag:a.onDrag,onOver:a.onOver,onDrop:a.onDrop},{default:_e(()=>[Object(n["i"])(c,{componentName:"Draggable",id:"terms","tile-type":"term",disabled:a.inTransition,"enter-ms":i.config.tile.enterMs,"leave-ms":i.config.tile.leaveMs,playing:r.playing,tiles:r.terms,"tile-count":i.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"]),Object(n["i"])(c,{componentName:"Droppable",id:"definitions","tile-type":"definition",disabled:a.inTransition,"enter-ms":i.config.tile.enterMs,"leave-ms":i.config.tile.leaveMs,playing:r.playing,tiles:r.definitions,"tile-count":i.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"])]),_:1},8,["disabled","playing","throttle-ms","onDrag","onOver","onDrop"])])]),_:1},8,["duration","onAfterEnter","onAfterLeave"])}));function Ce(e,t){let i=["red","orange","yellow","lime","green","cyan","blue","purple","magenta","navy","gray","teal"];switch(t.toLowerCase()){case"rainbow":return e.map(e=>{let t=Math.floor(Math.random()*i.length),n=i[t];return i.splice(t,1),{...e,color:n}});default:return e.map(e=>({...e,color:""}))}}function Be(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function Le(e,t,i="id"){return Object.prototype.hasOwnProperty.call(t,i)?e.map(e=>e[i]!==t[i]?e:{...e,...t}):e}function Ae(e,t,i="id",n){if(!Object.prototype.hasOwnProperty.call(t,i))return e;const s=e.find(e=>e[i]===t[i]),r=n?n(s):t;return s?e.map(e=>e[i]!==r[i]?e:{...e,...r}):e.concat(r)}const Ee=Object(n["J"])("data-v-22ef2717"),$e=Ee((function(e,t,i,s,r,a){return Object(n["s"])(),Object(n["f"])("div",Object(n["n"])({id:i.id,class:[a.classes]},Object(n["E"])(a.listeners)),[Object(n["z"])(e.$slots,"default")],16,["id"])}));var Ne=i("2ef0"),Xe=i.n(Ne),Ye={name:"DnD",props:{disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},playing:{type:Boolean,required:!0,default:!1},throttleMs:{type:Number,required:!0,default:33.333}},data(){return{dragged:{active:!1}}},computed:{canDrag(){return this.playing&&!this.disabled},classes(){return{board:!0}},dragging(){const{active:e=!1}=this.dragged;return e},listeners(){return this.playing?{mousedown:e=>this.dragStart(e),touchstart:e=>this.dragStart(e),mouseup:e=>this.dragEnd(e),touchend:e=>this.dragEnd(e),mousemove:e=>this.throttledDrag(e),touchmove:e=>this.throttledDrag(e)}:{}},throttledDrag(){return Xe.a.throttle(this.drag,this.throttleMs,{trailing:!0})}},methods:{dragStart(e){if(e.preventDefault(),!this.canDrag)return;const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const i="touchstart"===e.type?e.touches[0].clientX:e.clientX,n="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:s,left:r}=t.getBoundingClientRect();this.dragged={active:!0,dragId:t.id,offsetX:i-r,offsetY:n-s,initialX:i,initialY:n}},drag(e){if(e.preventDefault(),!this.canDrag||!this.dragging)return;const{dragId:t,initialX:i,initialY:n,overId:s}=this.dragged,r="touchmove"===e.type?e.touches[0].clientX-i:e.clientX-i,a="touchmove"===e.type?e.touches[0].clientY-n:e.clientY-n;this.$emit("drag",{dragId:t,dragX:r,dragY:a});const{id:o=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};s!==o&&(this.$emit("over",{dropId:o}),this.dragged={...this.dragged,overId:o})},dragEnd(e){if(e.preventDefault(),this.throttledDrag.cancel(),!this.canDrag||!this.dragging)return;const{dragId:t,initialX:i,initialY:n,offsetX:s,offsetY:r}=this.dragged,a="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,o="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,c=document.elementsFromPoint(a,o).find(e=>e.classList.contains("droppable")),{top:d,left:l}=c&&c.getBoundingClientRect()||{};this.$emit("drop",{dragId:t,dragX:c?a-i:a,dragY:c?o-n:o,dropId:c?c.id:null,dropX:c?Math.round(l-i+s):null,dropY:c?Math.round(d-n+r):null}),this.dragged={active:!1}}},mounted(){console.log(this.$options.name,"mounted...")}};i("5ccd");Ye.render=$e,Ye.__scopeId="data-v-22ef2717";var ke=Ye;const Ge=Object(n["J"])("data-v-4ef3aa98"),qe=Ge((function(e,t,i,s,r,a){return Object(n["s"])(),Object(n["f"])(n["c"],{appear:"",tag:"div",id:i.id,class:[a.classes],duration:{enter:""+i.enterMs,leave:""+i.leaveMs},css:!0,"enter-class":"fade-in-start","enter-active-class":"fade-in-active","enter-to-class":"fade-in-end","move-class":a.transitionGroup,onAfterEnter:a.onEntered,onLeave:a.onLeft},{default:Ge(()=>[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(a.filteredTiles,e=>(Object(n["s"])(),Object(n["f"])(Object(n["B"])(i.componentName),{key:e.id,content:e.content,disabled:i.disabled,id:e.id,style:[e.style],class:[a.tileClasses,i.tileType,e.className]},null,8,["content","disabled","id","style","class"]))),128))]),_:1},8,["id","class","duration","move-class","onAfterEnter","onLeave"])})),Je=Object(n["J"])("data-v-0e4639df"),ze=Je((function(e,t,i,s,r,a){return Object(n["s"])(),Object(n["f"])("div",{id:i.id,innerHTML:i.content},null,8,["id","innerHTML"])}));var Fe={name:"Draggable",props:["content","id"]};i("f999");Fe.render=ze,Fe.__scopeId="data-v-0e4639df";var Re=Fe;const He=Object(n["J"])("data-v-14ad459b"),Ze=He((function(e,t,i,s,r,a){return Object(n["s"])(),Object(n["f"])("div",{id:i.id,innerHTML:i.content},null,8,["id","innerHTML"])}));var Ue={name:"Droppable",props:["content","disabled","id"]};i("3886");Ue.render=Ze,Ue.__scopeId="data-v-14ad459b";var We=Ue,Ke={name:"MatchTileBoard",components:{Draggable:Re,Droppable:We},props:["componentName","disabled","duration","enterMs","id","leaveMs","playing","tiles","tileType","tileCount"],computed:{transitionGroup(){return this.disabled?"slide":"no-move-list"},classes(){return{"tile-board":!0,"tile-board--match":!0,"tile-board--disabled":!this.playing,["tiles-"+this.tileCount]:this.tileCount}},filteredTiles(){return this.tiles.filter(e=>e.show)},tileClasses(){return{tile:!0,draggable:"Draggable"===this.componentName,droppable:"Droppable"===this.componentName,disabled:this.disabled}}},methods:{onEntered(){console.log("entered!")},onLeft(e){console.log("left!"),e.style.display="none"}}};i("2089");Ke.render=qe,Ke.__scopeId="data-v-4ef3aa98";var Qe=Ke;const Ve=Object(n["J"])("data-v-74f05a30");Object(n["v"])("data-v-74f05a30");const et={class:"timer__wrapper"},tt={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},it={class:"timer__circle"};Object(n["t"])();const nt=Ve((function(e,t,i,s,r,a){return Object(n["s"])(),Object(n["f"])(n["b"],{duration:{enter:""+i.enterMs,leave:""+i.leaveMs},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",css:!0,onAfterEnter:a.onEntered,onAfterLeave:a.onLeft},{default:Ve(()=>[Object(n["I"])(Object(n["i"])("div",{class:"timer",id:i.id},[Object(n["i"])(n["b"],{appear:"",css:!0,duration:{enter:""+i.changeMs,leave:""+i.changeMs},"leave-active-class":"score-out-active","leave-class":"score-out-start","leave-to-class":"score-out-end",onAfterLeave:a.endScoreChange},{default:Ve(()=>[Object(n["I"])(Object(n["i"])("div",et,[(Object(n["s"])(),Object(n["f"])("svg",tt,[Object(n["i"])("g",it,[Object(n["i"])("circle",{class:["timer__path-elapsed",r.hitMiss],cx:"50",cy:"50",r:"45"},null,2),Object(n["i"])("path",{"stroke-dasharray":a.circleDasharray,class:["timer__path-remaining",[a.severity,r.hitMiss]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(n["i"])("span",{class:["timer__label",r.hitMiss]},Object(n["D"])(i.score||a.formattedTimeLeft),3)],512),[[n["G"],!r.scoreChanging]])]),_:1},8,["duration","onAfterLeave"])],8,["id"]),[[n["G"],i.playing]])]),_:1},8,["duration","onAfterEnter","onAfterLeave"])})),st=283,rt=40,at=20;var ot={name:"MatchTimer",props:["active","changeMs","duration","enterMs","id","intervalMs","leaveMs","playing","score"],data(){return{elapsed:0,hitMiss:null,intervalId:null,scoreChanging:!1}},computed:{circleDasharray(){const e=this.progressPct/100-1/this.duration*(1-this.progressPct/100);return(e*st).toFixed(0)+" 283"},expired(){return this.remaining<=0},formattedTimeLeft(){const e=Math.floor(this.remaining/6e4);let t=Math.floor(this.remaining%6e4/1e3);return t<10&&(t="0"+t),`${e}:${t}`},progressPct(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining(){return 1e3*this.duration-this.elapsed},severity(){return this.progressPct<=rt?this.progressPct<=at?"alert":"warn":"success"}},methods:{onEntered(e){console.log("timer entered..."),this.startTimer()},onLeft(e){console.log("timer left..."),this.elapsed=0},startTimer(){this.elapsed=0,this.intervalId=setInterval(()=>this.elapsed+=this.intervalMs,this.intervalMs)},endTimer(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange(e){console.log("score changed ending..."),this.scoreChanging=!1,this.hitMiss=null}},watch:{score(e,t){console.log("score changed!"),this.scoreChanging=!0,this.hitMiss=e>t?"hit":"miss"},expired(e,t){!t&&e&&(this.endTimer(),this.$emit("timer-expired"))}},mounted(){console.log(this.$options.name,"mounted...")},unmounted(){this.endTimer()}};i("a9ae");ot.render=nt,ot.__scopeId="data-v-74f05a30";var ct=ot,dt={name:"MatchGame",components:{DnD:ke,MatchTileBoard:Qe,MatchTimer:ct},props:{colorScheme:{type:String,required:!1,default:"rainbow"},config:{type:Object,required:!0},duration:{type:Number,required:!0,default:60},itemsPerBoard:{type:Number,required:!0,default:9},matches:{type:Array,required:!0,default:()=>[]}},data(){return{correct:0,definitions:[],incorrect:0,playing:!1,score:0,stats:[],terms:[],transitioning:!1}},computed:{inTransition:{get(){return this.transitioning},set(e){this.transitioning=e}},progress(){return this.correct/this.itemsPerBoard}},methods:{deal(){console.log("dealing...");const e=Be(this.matches),t=e.slice(0,Math.min(this.itemsPerBoard,e.length));let i=t.map(e=>({...e,matched:!1,show:!0})),n=i.map(e=>{const{term:t,definition:i,...n}=e;return{...n,content:t,answer:i,id:Q.a.generate()}});n=Ce(n,this.colorScheme),this.terms=Be(n);let s=[...i];s=s.map(e=>{const{term:t,definition:i,...n}=e;return{...n,content:i,id:Q.a.generate()}}),this.definitions=Be(s)},hitStyle(e,t,i,n,s,r,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":i+"px","--hit-end-tx":n+"px","--hit-end-ty":s+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}},isMatch:function(e,t){const i=e=>t=>t.id===e,{answer:n}=this.terms.find(i(e))||{},{content:s}=this.definitions.find(i(t))||{};return!!n&&!!s&&n===s},missStyle(e,t,i){return{...this.translate(e,t,i)}},moveStyle(e,t,i){return{...this.translate(e,t,i)}},onDrag(e){const{dragId:t,dragX:i,dragY:n}=e;this.terms=this.terms.map(e=>(e.style=e.id===t?this.moveStyle(i,n,1):e.style,e.className=e.id===t?"drag":e.className,e))},onDrop(e){const{dragId:t,dragX:i,dragY:n,dropId:s,dropX:r,dropY:a}=e||{},o=!!s&&this.isMatch(t,s);if(this.terms=Le(this.terms,{id:t,matched:o,className:o?"hit":"miss",style:o?this.hitStyle(i,n,1,r,a,1,this.config.tile.hitMs):this.missStyle(0,0,0)}),!s)return;this.definitions=Le(this.definitions,{id:s,className:o?"hit":"",...o&&{matched:!0}}),this.score=Math.max(o?this.score+1:this.score-1,0);const{content:c}=this.terms.find(e=>e.id===t)||{};this.stats=Ae(this.stats,{term:c},"term",e=>e?{term:c,hit:o?e.hit+1:e.hit,miss:o?e.miss:e.miss+1}:{term:c,hit:o?1:0,miss:o?0:1}),o?(this.inTransition=!0,setTimeout(()=>{this.terms=Le(this.terms,{id:t,show:!1}),this.definitions=Le(this.definitions,{id:s,show:!1}),this.correct++,this.inTransition=!1},this.config.tile.hitMs)):this.incorrect++},onEntered(){console.log("game entered..."),this.deal(),this.playing=!0},onLeft(){console.log("game left....")},onOver(e){const{dropId:t}=e||{};this.definitions=this.definitions.map(e=>({...e,className:e.id!==t||e.matched?"":"over"}))},onTimerExpired(){console.log("timer expired..."),this.playing=!1,setTimeout(()=>{this.$emit("game-over",{correct:this.correct,incorrect:this.incorrect,data:this.stats,score:this.score})},2e3)},translate(e,t,i){return{transform:"translate3d("+e+"px, "+t+"px, "+i+"px)"}}},watch:{progress(e,t){t&&Math.floor(e)!==Math.floor(t)?(console.log("new round...",t,"vs",e),this.deal(),this.playing=!0):(console.log("shuffling..."),this.inTransition=!0,this.terms=Be(this.terms),this.definitions=Be(this.definitions),setTimeout(()=>{this.inTransition=!1},this.config.tile.shuffleMs))}}};i("bfec");dt.render=Pe,dt.__scopeId="data-v-663068b0";var lt=dt;u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const ht={dnd:{throttleMs:33.33},game:{enterMs:1e3,leaveMs:1e3},tile:{enterMs:800,hitMs:800,leaveMs:0,missMs:800},timer:{intervalMs:100,changeMs:250,enterMs:1e3,leaveMs:1e3}};var mt={name:"Match",components:{MatchGame:lt},data(){return{colorScheme:"",correct:0,definitions:[],duration:60,gameId:null,itemsPerBoard:0,matches:[],showBoard:!1,showSplash:!0,title:""}},computed:{config(){return ht},game:{get(){return{colorScheme:this.colorScheme,duration:this.duration,gameId:this.gameId,itemsPerBoard:this.itemsPerBoard,matches:this.matches,title:this.title}},set(e){const{matchId:t,matches:i=[],options:{duration:n=60,colorScheme:s="",itemsPerBoard:r=9}={},title:a=""}=e;this.colorScheme=s,this.duration=n,this.gameId=t,this.itemsPerBoard=r,this.matches=i,this.title=a}},matchId(){return this.$route.params.id}},methods:{async fetchMatch(){try{const e=await u.a.get("/api/match/"+this.matchId,{timeout:1e4});return e.data}catch(e){console.log(e)}},async postPing(e){try{const t=await u.a.post("/api/ping",e,{timeout:1e4});return t.data}catch(t){console.log(t)}},async onGameOver(e){console.log("on game over..."),this.showBoard=!1;const t=await this.postPing({gameId:this.matchId,gameType:"M",results:e});console.log(JSON.stringify(t)),setTimeout(()=>{this.showBoard=!0},5e3)}},async created(){const e=await this.fetchMatch();this.game=e,this.showBoard=!0},mounted(){console.log(this.$options.name,"mounted...")}};i("5e4a");mt.render=Te,mt.__scopeId="data-v-55a1f694";var ut=mt;const gt=Object(n["J"])("data-v-b788fbbe");Object(n["v"])("data-v-b788fbbe");const pt={class:"p-4"};Object(n["t"])();const ft=gt((function(e,t,i,s,r,a){const o=Object(n["A"])("router-link");return Object(n["s"])(),Object(n["f"])("div",pt,[Object(n["i"])("ul",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(r.games,e=>(Object(n["s"])(),Object(n["f"])("li",{key:e.id},[Object(n["i"])(o,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:gt(()=>[Object(n["h"])(Object(n["D"])(e.title),1)]),_:2},1032,["to"])]))),128))])])}));u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var vt={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches/",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};i("1c66");vt.render=ft,vt.__scopeId="data-v-b788fbbe";var bt=vt;const Ot=[{path:"/",name:"matches",component:bt,props:!1},{path:"/match/:id",name:"match",component:ut,props:!1},{path:"/newmatch/:id",name:"newmatch",component:we,props:!1}],yt=Object(o["a"])({history:Object(o["b"])(),routes:Ot});var jt=yt;Object(n["e"])(a).use(jt).mount("#quizdini")},"58e1":function(e,t,i){},"5ccd":function(e,t,i){"use strict";i("bb1b")},"5e4a":function(e,t,i){"use strict";i("58e1")},"70f3":function(e,t,i){},"7b2b":function(e,t,i){},"9cdc":function(e,t,i){"use strict";i("c701")},a9ae:function(e,t,i){"use strict";i("e57b")},bb1b:function(e,t,i){},bfec:function(e,t,i){"use strict";i("7b2b")},c701:function(e,t,i){},cfab:function(e,t,i){"use strict";i("398a")},e57b:function(e,t,i){},f999:function(e,t,i){"use strict";i("17c0")}});
//# sourceMappingURL=app.da1b539a.js.map