import{l as h,a as v,b as C,c as f,d as g}from"./chapters-C2R_9Zwo.js";import{d as y,r as l,o as s,c as o,a as _,u as e,b as t,w as m,v as u,_ as x,F as w,e as z,f as D,g as L,h as V,t as B}from"./index-DsAZQNJM.js";import{r as I,s as c,a as d,b as N,p as R,c as S}from"./speaker-DO9a6Zd2.js";import"./format-CaJKwHKc.js";const $={class:"sequence"},b=["max","value"],F={class:"controls"},T=y({__name:"Docker",setup(i){return(p,n)=>{const a=l("SvgIcon");return s(),o("div",$,[_("input",{max:e(I),min:"0",step:"1",type:"range",value:e(c).spoken,onInput:n[0]||(n[0]=(...r)=>e(d)&&e(d)(...r))},null,40,b),_("div",F,[t(a,{name:"player-first",size:36,onClick:e(h)},null,8,["onClick"]),t(a,{name:"player-prev",size:36,onClick:e(v)},null,8,["onClick"]),m(t(a,{name:"player-play",size:36,onClick:e(N)},null,8,["onClick"]),[[u,!e(c).playing]]),m(t(a,{name:"player-pause",size:36,onClick:e(R)},null,8,["onClick"]),[[u,e(c).playing]]),t(a,{name:"player-stop",size:36,onClick:e(S)},null,8,["onClick"]),t(a,{name:"player-next",size:36,onClick:e(C)},null,8,["onClick"]),t(a,{name:"player-last",size:36,onClick:e(f)},null,8,["onClick"])])])}}}),q=x(T,[["__scopeId","data-v-adcde458"]]),E=[{name:"阅读",path:"/",tags:["nav-item"]},{name:"章节",path:"/chapters",tags:["nav-item"]},{name:"书库",path:"/catalogs",tags:["nav-item","reverse"]},{name:"设置",path:"/config",tags:["nav-item","reverse"]}],H={class:"header-nav"},P={__name:"Header",setup(i){return(p,n)=>{const a=l("RouterLink");return s(),o("header",H,[(s(!0),o(w,null,z(e(E),({name:r,path:k})=>(s(),D(a,{to:k},{default:L(()=>[V(B(r),1)]),_:2},1032,["to"]))),256))])}}},j={class:"home-page"},M={__name:"Layout",setup(i){return g(),(p,n)=>{const a=l("RouterView");return s(),o("div",j,[t(P),t(a),t(q)])}}};export{M as default};