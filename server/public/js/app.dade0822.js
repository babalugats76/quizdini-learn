(function(e){function t(t){for(var i,a,o=t[0],c=t[1],d=t[2],h=0,m=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},n={app:0},r=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0ec2":function(e,t,s){},"17c0":function(e,t,s){},"1c66":function(e,t,s){"use strict";s("3f69")},2089:function(e,t,s){"use strict";s("70f3")},"253b":function(e,t,s){},3717:function(e,t,s){"use strict";s("c72e")},3886:function(e,t,s){"use strict";s("253b")},"3f69":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("a79d");var i=s("7a23");function n(e,t,s,n,r,a){const o=Object(i["A"])("router-view");return Object(i["s"])(),Object(i["f"])(o)}var r={name:"App"};s("9cdc");r.render=n;var a=r,o=s("6c02");const c=Object(i["J"])("data-v-ba7ad148");Object(i["v"])("data-v-ba7ad148");const d={class:"match-game"},l={class:"match-timer"};Object(i["t"])();const h=c((function(e,t,s,n,r,a){const o=Object(i["A"])("Timer");return Object(i["s"])(),Object(i["f"])("div",d,[Object(i["i"])("button",{onClick:t[1]||(t[1]=t=>e.setScore(1))},"1"),Object(i["i"])("button",{onClick:t[2]||(t[2]=t=>e.setScore(0))},"0"),Object(i["i"])("div",l,[Object(i["i"])(o)])])}));var m=s("bc3a"),u=s.n(m);u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const g={timeout:3e4},p=async({url:e,config:t=g})=>{console.log("url",e),console.log("config",t);try{const s=await u.a.get(e,t);return{data:s.data}}catch(s){return{error:s.response.data}}},f="/api/match";var v={fetch:e=>p({url:`${f}/${e}`})},b={dnd:{timeouts:{throttle:33}},game:{timeouts:{enter:1e3,leave:1e3}},tile:{timeouts:{enter:800,hit:800,leave:0,miss:800,shuffle:500}},timer:{debug:!0,thresholds:{warn:40,alert:20},timeouts:{interval:100,change:250,enter:1e3,leave:1e3}}};const O=Object(i["w"])({canDnD:!1,colorScheme:null,correct:0,definitions:[],duration:60,gameId:null,incorrect:0,itemsPerBoard:9,matches:[],playing:!1,score:0,stats:[],terms:[],title:null}),y=b,j=()=>O.canDnD,M=()=>O.colorScheme,w=()=>O.correct,I=()=>O.definitions,T=()=>O.duration,D=()=>O.gameId,_=()=>O.incorrect,x=()=>O.itemsPerBoard,S=()=>O.matches,P=()=>O.playing,B=()=>O.score,C=()=>O.stats,L=()=>O.terms,A=()=>O.title,E=e=>O.canDnD=e,$=e=>O.colorScheme=e,X=e=>O.correct=e,Y=e=>O.definitions=e,N=e=>O.duration=e,k=e=>O.gameId=e,G=e=>O.incorrect=e,q=e=>O.itemsPerBoard=e,J=e=>O.matches=e,z=e=>O.playing=e,F=e=>O.score=e,R=e=>O.stats=e,H=e=>O.terms=e,Z=e=>O.title=e,U={canDnD:j,colorScheme:M,correct:w,definitions:I,duration:T,gameId:D,incorrect:_,itemsPerBoard:x,matches:S,playing:P,score:B,stats:C,terms:L,title:A},W={setCanDnD:E,setColorScheme:$,setCorrect:X,setDefinitions:Y,setDuration:N,setGameId:k,setIncorrect:G,setItemsPerBoard:q,setMatches:J,setPlaying:z,setScore:F,setStats:R,setTerms:H,setTitle:Z};s("ddb0");var K=s("8dee"),Q=s.n(K);function V(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function ee(e,t,s="id"){return Object.prototype.hasOwnProperty.call(t,s)?e.map(e=>e[s]!==t[s]?e:{...e,...t}):e}function te(e,t,s="id",i){if(!Object.prototype.hasOwnProperty.call(t,s))return e;const n=e.find(e=>e[s]===t[s]),r=i?i(n):t;return n?e.map(e=>e[s]!==r[s]?e:{...e,...r}):e.concat(r)}const se=(e,t,s)=>({transform:"translate3d("+e+"px, "+t+"px, "+s+"px)"}),ie=(e,t,s,i,n,r,a)=>({"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":s+"px","--hit-end-tx":i+"px","--hit-end-ty":n+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}),ne=(e,t,s)=>({...se(e,t,s)}),re=e=>{console.log("loading data...");const{matchId:t,matches:s=[],options:{duration:i=60,colorScheme:n="",itemsPerBoard:r=9}={},title:a=""}=e;O.colorScheme=n,O.duration=i,O.gameId=t,O.itemsPerBoard=r,O.matches=s,O.title=a},ae=()=>{console.log("dealing...");const e=V(O.matches),t=e.slice(0,Math.min(O.itemsPerBoard,e.length));let s=t.map(e=>({...e,matched:!1,show:!0})),i=V(s.map(e=>{const{term:t,definition:s,...i}=e;return{...i,content:t,answer:s,id:Q.a.generate()}})),n=[...s];n=n.map(e=>{const{term:t,definition:s,...i}=e;return{...i,content:s,id:Q.a.generate()}}),O.terms=i,O.definitions=n},oe=()=>{console.log("shuffling..."),O.terms=V(O.terms),O.definitions=V(O.definitions)},ce=(e,t)=>{const{answer:s}=O.terms.find(t=>t.id===e)||{},{content:i}=O.definitions.find(e=>e.id===t)||{};return!!s&&!!i&&s===i},de=e=>{const{dragId:t,dragX:s,dragY:i,dropId:n,dropX:r,dropY:a}=e||{},o=!!n&&ce(t,n);if(O.terms=ee(O.terms,{id:t,matched:o,className:o?"hit":"miss",style:o?ie(s,i,1,r,a,1,y.tile.hitMs):ne(0,0,0)}),!n)return;O.definitions=ee(O.definitions,{id:n,className:o?"hit":"",...o&&{matched:!0}});const{content:c}=O.terms.find(e=>e.id===t)||{};O.score=Math.max(o?O.score+1:O.score-1,0),O.stats=te(O.stats,{term:c},"term",e=>e?{term:c,hit:o?e.hit+1:e.hit,miss:o?e.miss:e.miss+1}:{term:c,hit:o?1:0,miss:o?0:1})},le={deal:ae,drop:de,isMatch:ce,shuffle:oe,load:re},he=Object(i["J"])("data-v-13e431ea");Object(i["v"])("data-v-13e431ea");const me={class:"timer"},ue={class:"timer__wrapper"},ge={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},pe={class:"timer__circle"};Object(i["t"])();const fe=he((function(e,t,s,n,r,a){return Object(i["s"])(),Object(i["f"])(i["b"],{duration:{enter:""+a.timeouts.enter,leave:""+a.timeouts.leave},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onAfterEnter:a.onEntered,onAfterLeave:a.onLeft},{default:he(()=>[Object(i["I"])(Object(i["i"])("div",me,[Object(i["i"])(i["b"],{appear:"",duration:{enter:""+a.timeouts.change,leave:""+a.timeouts.change},"leave-active-class":"scoring-active","leave-to-class":"scoring-end",onAfterLeave:a.endScoreChange},{default:he(()=>[Object(i["I"])(Object(i["i"])("div",ue,[(Object(i["s"])(),Object(i["f"])("svg",ge,[Object(i["i"])("g",pe,[Object(i["i"])("circle",{class:["timer__path-elapsed",r.scoreClass],cx:"50",cy:"50",r:"45"},null,2),Object(i["i"])("path",{"stroke-dasharray":a.strokeDasharray,class:["timer__path-remaining",[a.severity,r.scoreClass]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(i["i"])("span",{class:["timer__label",r.scoreClass]},Object(i["D"])(e.score||a.formatted),3)],512),[[i["G"],!r.scoring]])]),_:1},8,["duration","onAfterLeave"])],512),[[i["G"],e.playing]])]),_:1},8,["duration","onAfterEnter","onAfterLeave"])})),ve=283,be={ALERT:"alert",WARN:"warn",SUCCESS:"success"};var Oe={name:"Timer",data(){return{elapsed:0,scoreClass:"",intervalId:null,scoring:!1}},computed:{debug(){return y.timer.debug},thresholds(){return y.timer.thresholds},timeouts(){return y.timer.timeouts},duration:U.duration,playing:U.playing,score:U.score,expired(){return this.remaining<=0},formatted(){const e=Math.floor(this.remaining/6e4),t=Math.floor(this.remaining%6e4/1e3);return t<10?`${e}:0${t}`:`${e}:${t}`},progress(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining(){return 1e3*this.duration-this.elapsed},severity(){return this.progress<=this.thresholds.warn?this.progress<=this.thresholds.alert?be.ALERT:be.WARN:be.SUCCESS},strokeDasharray(){const e=this.progress/100-1/this.duration*(1-this.progress/100);return`${(e*ve).toFixed(0)} ${ve}`}},methods:{onEntered(){this.debug&&console.log("timer entered..."),this.startTimer()},onLeft(){this.debug&&console.log("timer left..."),this.elapsed=0},startTimer(){this.elapsed=0,this.intervalId=setInterval(()=>this.elapsed+=this.timeouts.interval,this.timeouts.interval)},endTimer(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange(){this.debug&&console.log("timer scoring end..."),this.scoring=!1,this.scoreClass=""}},watch:{score(e,t){this.debug&&console.log("timer scoring:",t,"--\x3e",e),this.scoring=!0,this.scoreClass=e>t?"hit":"miss"},expired(e,t){!t&&e&&(this.endTimer(),this.$emit("timer-expired"))}},mounted(){this.debug&&console.log(this.$options.name,"mounted...")},unmounted(){this.debug&&console.log("clearing timer..."),this.endTimer()}};s("ecaa");Oe.render=fe,Oe.__scopeId="data-v-13e431ea";var ye=Oe,je={name:"Match",components:{Timer:ye},data(){return{globalState:O}},computed:{...U,matchId(){return this.$route.params.id}},methods:{...W,...le},async created(){console.log(this.matchId);const e=await v.fetch(this.matchId);this.load(e.data),this.deal(),setTimeout(()=>{this.shuffle(),this.setCanDnD(!0),this.setPlaying(!0)},1e3)}};s("3717");je.render=h,je.__scopeId="data-v-ba7ad148";var Me=je;const we=Object(i["J"])("data-v-55a1f694");Object(i["v"])("data-v-55a1f694");const Ie={class:"full-page full-page--match"};Object(i["t"])();const Te=we((function(e,t,s,n,r,a){const o=Object(i["A"])("MatchGame");return Object(i["s"])(),Object(i["f"])("div",Ie,[r.showBoard?(Object(i["s"])(),Object(i["f"])(o,{key:0,"color-scheme":r.colorScheme,duration:r.duration,"items-per-board":r.itemsPerBoard,matches:r.matches,config:a.config,onGameOver:a.onGameOver},null,8,["color-scheme","duration","items-per-board","matches","config","onGameOver"])):Object(i["g"])("",!0)])})),De=Object(i["J"])("data-v-6777675e");Object(i["v"])("data-v-6777675e");const _e={id:"match-game"},xe={id:"match-timer"};Object(i["t"])();const Se=De((function(e,t,s,n,r,a){const o=Object(i["A"])("MatchTimer"),c=Object(i["A"])("MatchTileBoard"),d=Object(i["A"])("DnD");return Object(i["s"])(),Object(i["f"])(i["b"],{appear:"",css:!0,duration:{enter:""+s.config.game.enterMs,leave:""+s.config.game.leaveMs},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",onAfterEnter:a.onEntered,onAfterLeave:a.onLeft},{default:De(()=>[Object(i["i"])("div",_e,[Object(i["i"])("div",xe,[Object(i["i"])(o,{"change-ms":s.config.timer.changeMs,duration:s.duration,"enter-ms":s.config.timer.enterMs,"interval-ms":s.config.timer.intervalMs,"leave-ms":s.config.timer.leaveMs,playing:r.playing,score:r.score,onTimerExpired:a.onTimerExpired},null,8,["change-ms","duration","enter-ms","interval-ms","leave-ms","playing","score","onTimerExpired"])]),Object(i["i"])(d,{id:"match-dnd-board",disabled:a.inTransition,playing:r.playing,"throttle-ms":s.config.dnd.throttleMs,onDrag:a.onDrag,onOver:a.onOver,onDrop:a.onDrop},{default:De(()=>[Object(i["i"])(c,{componentName:"Draggable",id:"terms","tile-type":"term",disabled:a.inTransition,"enter-ms":s.config.tile.enterMs,"leave-ms":s.config.tile.leaveMs,playing:r.playing,tiles:r.terms,"tile-count":s.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"]),Object(i["i"])(c,{componentName:"Droppable",id:"definitions","tile-type":"definition",disabled:a.inTransition,"enter-ms":s.config.tile.enterMs,"leave-ms":s.config.tile.leaveMs,playing:r.playing,tiles:r.definitions,"tile-count":s.itemsPerBoard},null,8,["disabled","enter-ms","leave-ms","playing","tiles","tile-count"])]),_:1},8,["disabled","playing","throttle-ms","onDrag","onOver","onDrop"])])]),_:1},8,["duration","onAfterEnter","onAfterLeave"])}));function Pe(e,t){let s=["red","orange","yellow","lime","green","cyan","blue","purple","magenta","navy","gray","teal"];switch(t.toLowerCase()){case"rainbow":return e.map(e=>{let t=Math.floor(Math.random()*s.length),i=s[t];return s.splice(t,1),{...e,color:i}});default:return e.map(e=>({...e,color:""}))}}function Be(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function Ce(e,t,s="id"){return Object.prototype.hasOwnProperty.call(t,s)?e.map(e=>e[s]!==t[s]?e:{...e,...t}):e}function Le(e,t,s="id",i){if(!Object.prototype.hasOwnProperty.call(t,s))return e;const n=e.find(e=>e[s]===t[s]),r=i?i(n):t;return n?e.map(e=>e[s]!==r[s]?e:{...e,...r}):e.concat(r)}const Ae=Object(i["J"])("data-v-22ef2717"),Ee=Ae((function(e,t,s,n,r,a){return Object(i["s"])(),Object(i["f"])("div",Object(i["n"])({id:s.id,class:[a.classes]},Object(i["E"])(a.listeners)),[Object(i["z"])(e.$slots,"default")],16,["id"])}));var $e=s("2ef0"),Xe=s.n($e),Ye={name:"DnD",props:{disabled:{type:Boolean,required:!1,default:!1},id:{type:String,required:!1},playing:{type:Boolean,required:!0,default:!1},throttleMs:{type:Number,required:!0,default:33.333}},data(){return{dragged:{active:!1}}},computed:{canDrag(){return this.playing&&!this.disabled},classes(){return{board:!0}},dragging(){const{active:e=!1}=this.dragged;return e},listeners(){return this.playing?{mousedown:e=>this.dragStart(e),touchstart:e=>this.dragStart(e),mouseup:e=>this.dragEnd(e),touchend:e=>this.dragEnd(e),mousemove:e=>this.throttledDrag(e),touchmove:e=>this.throttledDrag(e)}:{}},throttledDrag(){return Xe.a.throttle(this.drag,this.throttleMs,{trailing:!0})}},methods:{dragStart(e){if(e.preventDefault(),!this.canDrag)return;const t=e.target.classList.contains("draggable")?e.target:e.target.closest(".draggable");if(!t)return;const s="touchstart"===e.type?e.touches[0].clientX:e.clientX,i="touchstart"===e.type?e.touches[0].clientY:e.clientY,{top:n,left:r}=t.getBoundingClientRect();this.dragged={active:!0,dragId:t.id,offsetX:s-r,offsetY:i-n,initialX:s,initialY:i}},drag(e){if(e.preventDefault(),!this.canDrag||!this.dragging)return;const{dragId:t,initialX:s,initialY:i,overId:n}=this.dragged,r="touchmove"===e.type?e.touches[0].clientX-s:e.clientX-s,a="touchmove"===e.type?e.touches[0].clientY-i:e.clientY-i;this.$emit("drag",{dragId:t,dragX:r,dragY:a});const{id:o=""}=document.elementsFromPoint("touchmove"===e.type?e.touches[0].clientX:e.clientX,"touchmove"===e.type?e.touches[0].clientY:e.clientY).find(e=>e.classList.contains("droppable"))||{};n!==o&&(this.$emit("over",{dropId:o}),this.dragged={...this.dragged,overId:o})},dragEnd(e){if(e.preventDefault(),this.throttledDrag.cancel(),!this.canDrag||!this.dragging)return;const{dragId:t,initialX:s,initialY:i,offsetX:n,offsetY:r}=this.dragged,a="touchend"===e.type?e.changedTouches[0].clientX:e.clientX,o="touchend"===e.type?e.changedTouches[0].clientY:e.clientY,c=document.elementsFromPoint(a,o).find(e=>e.classList.contains("droppable")),{top:d,left:l}=c&&c.getBoundingClientRect()||{};this.$emit("drop",{dragId:t,dragX:c?a-s:a,dragY:c?o-i:o,dropId:c?c.id:null,dropX:c?Math.round(l-s+n):null,dropY:c?Math.round(d-i+r):null}),this.dragged={active:!1}}},mounted(){console.log(this.$options.name,"mounted...")}};s("5ccd");Ye.render=Ee,Ye.__scopeId="data-v-22ef2717";var Ne=Ye;const ke=Object(i["J"])("data-v-4ef3aa98"),Ge=ke((function(e,t,s,n,r,a){return Object(i["s"])(),Object(i["f"])(i["c"],{appear:"",tag:"div",id:s.id,class:[a.classes],duration:{enter:""+s.enterMs,leave:""+s.leaveMs},css:!0,"enter-class":"fade-in-start","enter-active-class":"fade-in-active","enter-to-class":"fade-in-end","move-class":a.transitionGroup,onAfterEnter:a.onEntered,onLeave:a.onLeft},{default:ke(()=>[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(a.filteredTiles,e=>(Object(i["s"])(),Object(i["f"])(Object(i["B"])(s.componentName),{key:e.id,content:e.content,disabled:s.disabled,id:e.id,style:[e.style],class:[a.tileClasses,s.tileType,e.className]},null,8,["content","disabled","id","style","class"]))),128))]),_:1},8,["id","class","duration","move-class","onAfterEnter","onLeave"])})),qe=Object(i["J"])("data-v-0e4639df"),Je=qe((function(e,t,s,n,r,a){return Object(i["s"])(),Object(i["f"])("div",{id:s.id,innerHTML:s.content},null,8,["id","innerHTML"])}));var ze={name:"Draggable",props:["content","id"]};s("f999");ze.render=Je,ze.__scopeId="data-v-0e4639df";var Fe=ze;const Re=Object(i["J"])("data-v-14ad459b"),He=Re((function(e,t,s,n,r,a){return Object(i["s"])(),Object(i["f"])("div",{id:s.id,innerHTML:s.content},null,8,["id","innerHTML"])}));var Ze={name:"Droppable",props:["content","disabled","id"]};s("3886");Ze.render=He,Ze.__scopeId="data-v-14ad459b";var Ue=Ze,We={name:"MatchTileBoard",components:{Draggable:Fe,Droppable:Ue},props:["componentName","disabled","duration","enterMs","id","leaveMs","playing","tiles","tileType","tileCount"],computed:{transitionGroup(){return this.disabled?"slide":"no-move-list"},classes(){return{"tile-board":!0,"tile-board--match":!0,"tile-board--disabled":!this.playing,["tiles-"+this.tileCount]:this.tileCount}},filteredTiles(){return this.tiles.filter(e=>e.show)},tileClasses(){return{tile:!0,draggable:"Draggable"===this.componentName,droppable:"Droppable"===this.componentName,disabled:this.disabled}}},methods:{onEntered(){console.log("entered!")},onLeft(e){console.log("left!"),e.style.display="none"}}};s("2089");We.render=Ge,We.__scopeId="data-v-4ef3aa98";var Ke=We;const Qe=Object(i["J"])("data-v-74f05a30");Object(i["v"])("data-v-74f05a30");const Ve={class:"timer__wrapper"},et={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},tt={class:"timer__circle"};Object(i["t"])();const st=Qe((function(e,t,s,n,r,a){return Object(i["s"])(),Object(i["f"])(i["b"],{duration:{enter:""+s.enterMs,leave:""+s.leaveMs},"enter-active-class":"fade-in-active","enter-class":"fade-in-start","enter-to-class":"fade-in-end","leave-active-class":"fade-out-active","leave-class":"fade-out-start","leave-to-class":"fade-out-end",css:!0,onAfterEnter:a.onEntered,onAfterLeave:a.onLeft},{default:Qe(()=>[Object(i["I"])(Object(i["i"])("div",{class:"timer",id:s.id},[Object(i["i"])(i["b"],{appear:"",css:!0,duration:{enter:""+s.changeMs,leave:""+s.changeMs},"leave-active-class":"score-out-active","leave-class":"score-out-start","leave-to-class":"score-out-end",onAfterLeave:a.endScoreChange},{default:Qe(()=>[Object(i["I"])(Object(i["i"])("div",Ve,[(Object(i["s"])(),Object(i["f"])("svg",et,[Object(i["i"])("g",tt,[Object(i["i"])("circle",{class:["timer__path-elapsed",r.hitMiss],cx:"50",cy:"50",r:"45"},null,2),Object(i["i"])("path",{"stroke-dasharray":a.circleDasharray,class:["timer__path-remaining",[a.severity,r.hitMiss]],d:"M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "},null,10,["stroke-dasharray"])])])),Object(i["i"])("span",{class:["timer__label",r.hitMiss]},Object(i["D"])(s.score||a.formattedTimeLeft),3)],512),[[i["G"],!r.scoreChanging]])]),_:1},8,["duration","onAfterLeave"])],8,["id"]),[[i["G"],s.playing]])]),_:1},8,["duration","onAfterEnter","onAfterLeave"])})),it=283,nt=40,rt=20;var at={name:"MatchTimer",props:["active","changeMs","duration","enterMs","id","intervalMs","leaveMs","playing","score"],data(){return{elapsed:0,hitMiss:null,intervalId:null,scoreChanging:!1}},computed:{circleDasharray(){const e=this.progressPct/100-1/this.duration*(1-this.progressPct/100);return(e*it).toFixed(0)+" 283"},expired(){return this.remaining<=0},formattedTimeLeft(){const e=Math.floor(this.remaining/6e4);let t=Math.floor(this.remaining%6e4/1e3);return t<10&&(t="0"+t),`${e}:${t}`},progressPct(){return Math.round(this.remaining/(1e3*this.duration)*1e4)/100},remaining(){return 1e3*this.duration-this.elapsed},severity(){return this.progressPct<=nt?this.progressPct<=rt?"alert":"warn":"success"}},methods:{onEntered(e){console.log("timer entered..."),this.startTimer()},onLeft(e){console.log("timer left..."),this.elapsed=0},startTimer(){this.elapsed=0,this.intervalId=setInterval(()=>this.elapsed+=this.intervalMs,this.intervalMs)},endTimer(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},endScoreChange(e){console.log("score changed ending..."),this.scoreChanging=!1,this.hitMiss=null}},watch:{score(e,t){console.log("score changed!"),this.scoreChanging=!0,this.hitMiss=e>t?"hit":"miss"},expired(e,t){!t&&e&&(this.endTimer(),this.$emit("timer-expired"))}},mounted(){console.log(this.$options.name,"mounted...")},unmounted(){this.endTimer()}};s("a9ae");at.render=st,at.__scopeId="data-v-74f05a30";var ot=at,ct={name:"MatchGame",components:{DnD:Ne,MatchTileBoard:Ke,MatchTimer:ot},props:{colorScheme:{type:String,required:!1,default:"rainbow"},config:{type:Object,required:!0},duration:{type:Number,required:!0,default:60},itemsPerBoard:{type:Number,required:!0,default:9},matches:{type:Array,required:!0,default:()=>[]}},data(){return{correct:0,definitions:[],incorrect:0,playing:!1,score:0,stats:[],terms:[],transitioning:!1}},computed:{inTransition:{get(){return this.transitioning},set(e){this.transitioning=e}},progress(){return this.correct/this.itemsPerBoard}},methods:{deal(){console.log("dealing...");const e=Be(this.matches),t=e.slice(0,Math.min(this.itemsPerBoard,e.length));let s=t.map(e=>({...e,matched:!1,show:!0})),i=s.map(e=>{const{term:t,definition:s,...i}=e;return{...i,content:t,answer:s,id:Q.a.generate()}});i=Pe(i,this.colorScheme),this.terms=Be(i);let n=[...s];n=n.map(e=>{const{term:t,definition:s,...i}=e;return{...i,content:s,id:Q.a.generate()}}),this.definitions=Be(n)},hitStyle(e,t,s,i,n,r,a){return{"--hit-start-tx":e+"px","--hit-start-ty":t+"px","--hit-start-tz":s+"px","--hit-end-tx":i+"px","--hit-end-ty":n+"px","--hit-end-tz":r+"px","--hit-duration":a+"ms"}},isMatch:function(e,t){const s=e=>t=>t.id===e,{answer:i}=this.terms.find(s(e))||{},{content:n}=this.definitions.find(s(t))||{};return!!i&&!!n&&i===n},missStyle(e,t,s){return{...this.translate(e,t,s)}},moveStyle(e,t,s){return{...this.translate(e,t,s)}},onDrag(e){const{dragId:t,dragX:s,dragY:i}=e;this.terms=this.terms.map(e=>(e.style=e.id===t?this.moveStyle(s,i,1):e.style,e.className=e.id===t?"drag":e.className,e))},onDrop(e){const{dragId:t,dragX:s,dragY:i,dropId:n,dropX:r,dropY:a}=e||{},o=!!n&&this.isMatch(t,n);if(this.terms=Ce(this.terms,{id:t,matched:o,className:o?"hit":"miss",style:o?this.hitStyle(s,i,1,r,a,1,this.config.tile.hitMs):this.missStyle(0,0,0)}),!n)return;this.definitions=Ce(this.definitions,{id:n,className:o?"hit":"",...o&&{matched:!0}}),this.score=Math.max(o?this.score+1:this.score-1,0);const{content:c}=this.terms.find(e=>e.id===t)||{};this.stats=Le(this.stats,{term:c},"term",e=>e?{term:c,hit:o?e.hit+1:e.hit,miss:o?e.miss:e.miss+1}:{term:c,hit:o?1:0,miss:o?0:1}),o?(this.inTransition=!0,setTimeout(()=>{this.terms=Ce(this.terms,{id:t,show:!1}),this.definitions=Ce(this.definitions,{id:n,show:!1}),this.correct++,this.inTransition=!1},this.config.tile.hitMs)):this.incorrect++},onEntered(){console.log("game entered..."),this.deal(),this.playing=!0},onLeft(){console.log("game left....")},onOver(e){const{dropId:t}=e;this.definitions=this.definitions.map(e=>(e.className=e.id!==t||e.matched?"":"over",e))},onTimerExpired(){console.log("timer expired..."),this.playing=!1,setTimeout(()=>{this.$emit("game-over",{correct:this.correct,incorrect:this.incorrect,data:this.stats,score:this.score})},2e3)},translate(e,t,s){return{transform:"translate3d("+e+"px, "+t+"px, "+s+"px)"}}},watch:{progress(e,t){t&&Math.floor(e)!==Math.floor(t)?(console.log("new round...",t,"vs",e),this.deal(),this.playing=!0):(console.log("shuffling..."),this.inTransition=!0,this.terms=Be(this.terms),this.definitions=Be(this.definitions),setTimeout(()=>{this.inTransition=!1},this.config.tile.shuffleMs))}}};s("d3a0");ct.render=Se,ct.__scopeId="data-v-6777675e";var dt=ct;u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;const lt={dnd:{throttleMs:33.33},game:{enterMs:1e3,leaveMs:1e3},tile:{enterMs:800,hitMs:800,leaveMs:0,missMs:800},timer:{intervalMs:100,changeMs:250,enterMs:1e3,leaveMs:1e3}};var ht={name:"Match",components:{MatchGame:dt},data(){return{colorScheme:"",correct:0,definitions:[],duration:60,gameId:null,itemsPerBoard:0,matches:[],showBoard:!1,showSplash:!0,title:""}},computed:{config(){return lt},game:{get(){return{colorScheme:this.colorScheme,duration:this.duration,gameId:this.gameId,itemsPerBoard:this.itemsPerBoard,matches:this.matches,title:this.title}},set(e){const{matchId:t,matches:s=[],options:{duration:i=60,colorScheme:n="",itemsPerBoard:r=9}={},title:a=""}=e;this.colorScheme=n,this.duration=i,this.gameId=t,this.itemsPerBoard=r,this.matches=s,this.title=a}},matchId(){return this.$route.params.id}},methods:{async fetchMatch(){try{const e=await u.a.get("/api/match/"+this.matchId,{timeout:1e4});return e.data}catch(e){console.log(e)}},async postPing(e){try{const t=await u.a.post("/api/ping",e,{timeout:1e4});return t.data}catch(t){console.log(t)}},async onGameOver(e){console.log("on game over..."),this.showBoard=!1;const t=await this.postPing({gameId:this.matchId,gameType:"M",results:e});console.log(JSON.stringify(t)),setTimeout(()=>{this.showBoard=!0},5e3)}},async created(){const e=await this.fetchMatch();this.game=e,this.showBoard=!0},mounted(){console.log(this.$options.name,"mounted...")}};s("5e4a");ht.render=Te,ht.__scopeId="data-v-55a1f694";var mt=ht;const ut=Object(i["J"])("data-v-b788fbbe");Object(i["v"])("data-v-b788fbbe");const gt={class:"p-4"};Object(i["t"])();const pt=ut((function(e,t,s,n,r,a){const o=Object(i["A"])("router-link");return Object(i["s"])(),Object(i["f"])("div",gt,[Object(i["i"])("ul",null,[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["y"])(r.games,e=>(Object(i["s"])(),Object(i["f"])("li",{key:e.id},[Object(i["i"])(o,{class:"game-link game-link--match",to:{name:"match",params:{id:e.id}}},{default:ut(()=>[Object(i["h"])(Object(i["D"])(e.title),1)]),_:2},1032,["to"])]))),128))])])}));u.a.defaults.headers.get["Content-Type"]="application/json",u.a.defaults.headers.common["quizdini-timezone"]=Intl.DateTimeFormat().resolvedOptions().timeZone;var ft={name:"Matches",data(){return{games:[]}},methods:{async fetchData(){try{const e=await u.a.get("/api/matches/",{timeout:3e4});return e.data}catch(e){console.log(e)}}},async created(){const e=await this.fetchData(),t=e.map(e=>({id:e.matchId,title:e.title}));this.games=t}};s("1c66");ft.render=pt,ft.__scopeId="data-v-b788fbbe";var vt=ft;const bt=[{path:"/",name:"matches",component:vt,props:!1},{path:"/match/:id",name:"match",component:mt,props:!1},{path:"/newmatch/:id",name:"newmatch",component:Me,props:!1}],Ot=Object(o["a"])({history:Object(o["b"])(),routes:bt});var yt=Ot;Object(i["e"])(a).use(yt).mount("#quizdini")},"58e1":function(e,t,s){},"5ccd":function(e,t,s){"use strict";s("bb1b")},"5e4a":function(e,t,s){"use strict";s("58e1")},"70f3":function(e,t,s){},"8d33":function(e,t,s){},"9cdc":function(e,t,s){"use strict";s("c701")},a9ae:function(e,t,s){"use strict";s("e57b")},bb1b:function(e,t,s){},c701:function(e,t,s){},c72e:function(e,t,s){},d3a0:function(e,t,s){"use strict";s("0ec2")},e57b:function(e,t,s){},ecaa:function(e,t,s){"use strict";s("8d33")},f999:function(e,t,s){"use strict";s("17c0")}});
//# sourceMappingURL=app.dade0822.js.map