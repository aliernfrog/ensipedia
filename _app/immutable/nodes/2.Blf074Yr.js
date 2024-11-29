import{d as n,t as y,g as T,j as X}from"../chunks/disclose-version.C49nFl_M.js";import{i as Y}from"../chunks/legacy.CQ_JzsX6.js";import{w as j,x,y as g,z as s,p as Z,a9 as ee,aa as te,t as ae,E as O,G as r,v as N,ab as A,ac as D}from"../chunks/runtime.CW9RGt1d.js";import{s as V}from"../chunks/render.BeOlmP8p.js";import{i as F,o as re}from"../chunks/index-client.CoAuX3An.js";import{L as oe,_ as W,I as ie,s as c,T as se,B as ne,a as de,b as H,e as le,C as ve,i as pe}from"../chunks/TopBar.eQ5x55oO.js";import{a as P,b as R,r as J}from"../chunks/attributes.Bsf9xu-k.js";import{p as h}from"../chunks/props.CJh1vgSC.js";var ue=y("<div><!></div>");function ce(C,o){let w=h(o,"display",8,"inline-flex"),l=h(o,"extraOptions",24,()=>({}));var a=ue();let t;var i=x(a);P(i,o,"default",{}),g(a),j(()=>t=R(a,t,{class:"m3-container",style:`display: ${w()??""};`,...l()},"svelte-1xnzut7")),n(C,a)}const _e={width:24,height:24,body:'<path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>'};var fe=y('<div class="custom icon svelte-1hzdwrv"><!></div>'),xe=y('<div class="end-pad pad svelte-1hzdwrv"></div>'),ge=y('<label><!> <!> <div class="check icon svelte-1hzdwrv"><!></div> <div class="start-pad pad svelte-1hzdwrv"></div> <!> <!></label>');function K(C,o){let w=h(o,"display",8,"flex"),l=h(o,"extraOptions",24,()=>({})),a=h(o,"input",8),t=h(o,"icon",8,void 0);var i=ge();let e;var _=x(i);oe(_,{});var d=s(_,2);F(d,t,S=>{var z=fe(),q=x(z);W(q,{get icon(){return t()}}),g(z),n(S,z)});var v=s(d,2),B=x(v);W(B,{icon:_e}),g(v);var k=s(v,4);P(k,o,"default",{});var $=s(k,2);F($,()=>!t(),S=>{var z=xe();n(S,z)}),g(i),j(()=>e=R(i,e,{for:a(),class:"m3-font-label-large",style:`display: ${w()??""}; overflow: hidden;`,...l()},"svelte-1hzdwrv")),n(C,i)}var me=y("<div><!></div>");function be(C,o){let w=h(o,"display",8,"flex"),l=h(o,"extraOptions",24,()=>({})),a=h(o,"type",8);var t=me();let i;var e=x(t);P(e,o,"default",{}),g(t),j(()=>i=R(t,i,{class:`m3-container type-${a()??""}`,style:`display: ${w()??""};`,...l()},"svelte-aqp8n4")),n(C,t)}var he=y('<input type="radio" id="words"> <!> <input type="radio" id="verbs"> <!>',1),ye=y("<br><p1> </p1>",1),we=y("<div><!></div>"),$e=y('<div><!> <a href="starboard"><!></a> <div><p>• <a href="https://aliernfrog.github.io/ensibot">Add Ensi</a><br> • <a href="https://aliernfrog.github.io/discord">Discord server</a><br> • <a href="https://github.com/ensipedia/ensipedia.github.io">Ensipedia source code</a></p></div> <!> <!> <!> <div><!></div></div>');function ke(C,o){Z(o,!1);const w=[];let l=A(),a=A("words"),t=A(""),i=A();re(async()=>{var d,v;const e=new URLSearchParams(window.location.search);O(a,((d=e==null?void 0:e.get)==null?void 0:d.call(e,"category"))||r(a)),O(t,((v=e==null?void 0:e.get)==null?void 0:v.call(e,"q"))||r(t));const _=await fetch("data.json");O(l,await _.json())}),ee(()=>(r(l),r(a),r(t)),()=>{var e,_,d;O(i,((d=(_=(e=r(l))==null?void 0:e[r(a)])==null?void 0:_.filter)==null?void 0:d.call(_,v=>v.toLowerCase().includes(r(t).toLowerCase())))??[])}),te(),Y(),ie(C,{children:(e,_)=>{var d=$e();c(d,"text-align","center");var v=x(d);se(v,{});var B=s(v,2);c(B,"text-decoration","none");var k=x(B);ne(k,{type:"elevated",children:(p,L)=>{D();var f=T("⭐ Starboard");n(p,f)},$$slots:{default:!0}}),g(B);var $=s(B,2);c($,"text-align","left"),c($,"margin","24px 0px 24px 0px"),c($,"border-radius","28px"),c($,"padding","1px 24px 1px 24px"),c($,"background","rgb(var(--m3-scheme-surface-container-low))");var S=s($,2);de(S,{get value(){return r(t)},set value(p){O(t,p)},name:"Search",$$legacy:!0});var z=s(S,2);ce(z,{children:(p,L)=>{var f=he(),m=N(f);J(m),m.value=(m.__value="words")==null?"":"words";var E=s(m,2);K(E,{input:"words",children:(b,U)=>{D();var I=T("Words");n(b,I)},$$slots:{default:!0}});var u=s(E,2);J(u),u.value=(u.__value="verbs")==null?"":"verbs";var M=s(u,2);K(M,{input:"verbs",children:(b,U)=>{D();var I=T("Verbs");n(b,I)},$$slots:{default:!0}}),H(w,[],m,()=>r(a),b=>O(a,b)),H(w,[],u,()=>r(a),b=>O(a,b)),n(p,f)},$$slots:{default:!0}});var q=s(z,2);F(q,()=>r(l)!=null,p=>{var L=ye(),f=s(N(L));c(f,"text-align","left");var m=x(f,!0);g(f),j(()=>V(m,r(i).length?`${r(i).length} items shown`:"No matches")),n(p,L)});var G=s(q,2);c(G,"margin","8px 0px 8px 0px");var Q=x(G);F(Q,()=>r(l)==null,p=>{ve(p,{})},p=>{var L=X(),f=N(L);le(f,1,()=>r(i),pe,(m,E)=>{var u=we();c(u,"text-align","left"),c(u,"margin","8px 0px 8px 0px");var M=x(u);be(M,{type:"outlined",children:(b,U)=>{D();var I=T();j(()=>V(I,r(E))),n(b,I)},$$slots:{default:!0}}),g(u),n(m,u)}),n(p,L)}),g(G),g(d),n(e,d)},$$slots:{default:!0}}),ae()}export{ke as component};
