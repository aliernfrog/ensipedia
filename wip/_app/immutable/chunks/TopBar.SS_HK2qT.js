import{h as A,a as Qe,A as Ae,P as je,m as Le,ak as $e,al as me,d as pe,s as le,e as V,aC as ee,ah as Oe,p as _e,ai as et,r as te,aD as tt,aE as at,l as rt,aF as nt,B as He,f as it,au as Se,a6 as st,I as ye,aG as lt,aH as ot,aI as ct,b as ft,aj as Pe,az as G,am as Re,W as ze,aJ as ut,aK as vt,a7 as dt,ao as ve,aL as ht,at as be,Z as we,aM as _t,an as Be,av as gt,q as ae,w as X,t as re,x as S,y as P,z as Q,v as J,N as Y,a3 as De,as as xe,K as Z}from"./runtime.hPq_haoC.js";import{x as Fe,d as C,y as qe,t as W,w as mt,q as j,v as pt}from"./disclose-version.BJhuGgM0.js";import{i as Me}from"./legacy.1U63oBV4.js";import{h as yt,s as U,a as de,r as bt}from"./attributes.B4vH-xAg.js";import{i as wt,p,s as xt}from"./props.LCNRqV9t.js";import{a as kt,s as ge}from"./render.BDzpWS9Z.js";import{a as Et,i as z,c as Tt}from"./index-client.JJU3KfRQ.js";function ra(t,e){return e}function Ct(t,e,a,r){for(var n=[],s=e.length,i=0;i<s;i++)at(e[i].e,n,!0);var g=s>0&&n.length===0&&a!==null;if(g){var o=a.parentNode;rt(o),o.append(a),r.clear(),D(t,e[0].prev,e[s-1].next)}nt(n,()=>{for(var f=0;f<s;f++){var l=e[f];g||(r.delete(l.k),D(t,l.prev,l.next)),He(l.e,!g)}})}function na(t,e,a,r,n,s=null){var i=t,g={flags:e,items:new Map,first:null};A&&Qe();var o=null,f=!1;Ae(()=>{var l=a(),_=je(l)?l:l==null?[]:Le(l),v=_.length;if(f&&v===0)return;f=v===0;let d=!1;if(A){var u=i.data===$e;u!==(v===0)&&(i=me(),pe(i),le(!1),d=!0)}if(A){for(var m=null,y,h=0;h<v;h++){if(V.nodeType===8&&V.data===it){i=V,d=!0,le(!1);break}var b=_[h],L=r(b,h);y=Ue(V,g,m,null,b,L,h,n,e),g.items.set(L,y),m=y}v>0&&pe(me())}if(!A){var E=Se;It(_,g,i,n,e,(E.f&ee)!==0,r)}s!==null&&(v===0?o?Oe(o):o=_e(()=>s(i)):o!==null&&et(o,()=>{o=null})),d&&le(!0),a()}),A&&(i=V)}function It(t,e,a,r,n,s,i){var g=t.length,o=e.items,f=e.first,l=f,_,v=null,d=[],u=[],m,y,h,b;for(b=0;b<g;b+=1){if(m=t[b],y=i(m,b),h=o.get(y),h===void 0){var L=l?l.e.nodes_start:a;v=Ue(L,e,v,v===null?e.first:v.next,m,y,b,r,n),o.set(y,v),d=[],u=[],l=v.next;continue}if(Nt(h,m,b),h.e.f&ee&&Oe(h.e),h!==l){if(_!==void 0&&_.has(h)){if(d.length<u.length){var E=u[0],k;v=E.prev;var H=d[0],T=d[d.length-1];for(k=0;k<d.length;k+=1)ke(d[k],E,a);for(k=0;k<u.length;k+=1)_.delete(u[k]);D(e,H.prev,T.next),D(e,v,H),D(e,T,E),l=E,v=T,b-=1,d=[],u=[]}else _.delete(h),ke(h,l,a),D(e,h.prev,h.next),D(e,h,v===null?e.first:v.next),D(e,v,h),v=h;continue}for(d=[],u=[];l!==null&&l.k!==y;)(s||!(l.e.f&ee))&&(_??(_=new Set)).add(l),u.push(l),l=l.next;if(l===null)continue;h=l}d.push(h),v=h,l=h.next}if(l!==null||_!==void 0){for(var B=_===void 0?[]:Le(_);l!==null;)(s||!(l.e.f&ee))&&B.push(l),l=l.next;var $=B.length;if($>0){var ne=null;Ct(e,B,ne,o)}}te.first=e.first&&e.first.e,te.last=v&&v.e}function Nt(t,e,a,r){tt(t.v,e),t.i=a}function Ue(t,e,a,r,n,s,i,g,o){var f=(o&ot)!==0,l=(o&ct)===0,_=f?l?st(n):ye(n):n,v=o&lt?ye(i):i,d={i:v,v:_,k:s,a:null,e:null,prev:a,next:r};try{return d.e=_e(()=>g(t,_,v),A),d.e.prev=a&&a.e,d.e.next=r&&r.e,a===null?e.first=d:(a.next=d,a.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function ke(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,s=t.e.nodes_start;s!==r;){var i=ft(s);n.before(s),s=i}}function D(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function At(t,e,...a){var r=t,n=G,s;Ae(()=>{n!==(n=e())&&(s&&(He(s),s=null),s=_e(()=>n(r,...a)))},Pe),A&&(r=V)}function Lt(t,e,a){Re(()=>{var r=ze(()=>e(t,a==null?void 0:a())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function Ot(t,e){var a=t.__className,r=We(e);A&&t.getAttribute("class")===r?t.__className=r:(a!==r||A&&t.getAttribute("class")!==r)&&(r===""?t.removeAttribute("class"):t.setAttribute("class",r),t.__className=r)}function he(t,e){var a=t.__className,r=We(e);A&&t.className===r?t.__className=r:(a!==r||A&&t.className!==r)&&(e==null?t.removeAttribute("class"):t.className=r,t.__className=r)}function We(t){return t??""}function oe(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function M(t,e,a,r){var n=t.__styles??(t.__styles={});n[e]!==a&&(n[e]=a,a==null?t.style.removeProperty(e):t.style.setProperty(e,a,""))}const Ht=()=>performance.now(),F={tick:t=>requestAnimationFrame(t),now:()=>Ht(),tasks:new Set};function Ke(t){F.tasks.forEach(e=>{e.c(t)||(F.tasks.delete(e),e.f())}),F.tasks.size!==0&&F.tick(Ke)}function St(t){let e;return F.tasks.size===0&&F.tick(Ke),{promise:new Promise(a=>{F.tasks.add(e={c:t,f:a})}),abort(){F.tasks.delete(e)}}}function Ee(t,e){t.dispatchEvent(new CustomEvent(e))}function Pt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Te(t){const e={},a=t.split(";");for(const r of a){const[n,s]=r.split(":");if(!n||s===void 0)break;const i=Pt(n.trim());e[i]=s.trim()}return e}const Rt=t=>t;function zt(t,e,a,r){var n=(t&ht)!==0,s="in",i,g=e.inert,o,f;function l(){var m=Se,y=te;be(null),we(null);try{return i??(i=a()(e,(r==null?void 0:r())??{},{direction:s}))}finally{be(m),we(y)}}var _={is_global:n,in(){e.inert=g,o==null||o.abort(),Ee(e,"introstart"),o=Ve(e,l(),f,1,()=>{Ee(e,"introend"),o==null||o.abort(),o=i=void 0})},out(m){{m==null||m(),i=void 0;return}},stop:()=>{o==null||o.abort()}},v=te;if((v.transitions??(v.transitions=[])).push(_),kt){var d=n;if(!d){for(var u=v.parent;u&&u.f&Pe;)for(;(u=u.parent)&&!(u.f&ut););d=!u||(u.f&vt)!==0}d&&Re(()=>{ze(()=>_.in())})}}function Ve(t,e,a,r,n){if(dt(e)){var s,i=!1;return ve(()=>{if(!i){var m=e({direction:"in"});s=Ve(t,m,a,r,n)}}),{abort:()=>{i=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(!(e!=null&&e.duration))return n(),{abort:G,deactivate:G,reset:G,t:()=>r};const{delay:g=0,css:o,tick:f,easing:l=Rt}=e;var _=[];if(f&&f(0,1),o){var v=Te(o(0,1));_.push(v,v)}var d=()=>1-r,u=t.animate(_,{duration:g});return u.onfinish=()=>{var m=1-r,y=r-m,h=e.duration*Math.abs(y),b=[];if(h>0){if(o)for(var L=Math.ceil(h/16.666666666666668),E=0;E<=L;E+=1){var k=m+y*l(E/L),H=o(k,1-k);b.push(Te(H))}d=()=>{var T=u.currentTime;return m+y*l(T/h)},f&&St(()=>{if(u.playState!=="running")return!1;var T=d();return f(T,1-T),!0})}u=t.animate(b,{duration:h,fill:"forwards"}),u.onfinish=()=>{d=()=>r,f==null||f(r,1-r),n()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=G)},deactivate:()=>{n=G},reset:()=>{},t:()=>d()}}function Bt(t,e,a=e){var r=_t();Fe(t,"input",()=>{var n=fe(t)?ue(t.value):t.value;a(n),r&&n!==(n=e())&&(t.value=n??"")}),Be(()=>{var n=e();if(A&&t.defaultValue!==t.value){a(fe(t)?ue(t.value):t.value);return}fe(t)&&n===ue(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}const ce=new Set;function ia(t,e,a,r,n=r){var s=a.getAttribute("type")==="checkbox",i=t;let g=!1;if(e!==null)for(var o of e)i=i[o]??(i[o]=[]);i.push(a),Fe(a,"change",()=>{var f=a.__value;s&&(f=Ce(i,f,a.checked)),n(f)},()=>n(s?[]:null)),Be(()=>{var f=r();if(A&&a.defaultChecked!==a.checked){g=!0;return}s?(f=f||[],a.checked=f.includes(a.__value)):a.checked=wt(a.__value,f)}),gt(()=>{var f=i.indexOf(a);f!==-1&&i.splice(f,1)}),ce.has(i)||(ce.add(i),ve(()=>{i.sort((f,l)=>f.compareDocumentPosition(l)===4?-1:1),ce.delete(i)})),ve(()=>{if(g){var f;if(s)f=Ce(i,f,a.checked);else{var l=i.find(_=>_.checked);f=l==null?void 0:l.__value}n(f)}})}function Ce(t,e,a){for(var r=new Set,n=0;n<t.length;n+=1)t[n].checked&&r.add(t[n].__value);return a||r.delete(e),Array.from(r)}function fe(t){var e=t.type;return e==="number"||e==="range"}function ue(t){return t===""?null:+t}var Dt=qe("<svg><!></svg>");function Ie(t,e){ae(e,!1);let a=p(e,"icon",8),r=p(e,"width",8,"1em"),n=p(e,"height",8,"1em"),s=p(e,"class",8,void 0);Me();var i=Dt(),g=S(i);yt(g,()=>a().body,!0,!1),P(i),X(()=>{U(i,"width",r()),U(i,"height",n()),Ot(i,s()),U(i,"viewBox",`0 0 ${a().width??""} ${a().height??""}`)}),C(t,i),re()}const Ft=t=>t;function qt(t,{delay:e=0,duration:a=400,easing:r=Ft}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:s=>`opacity: ${s*n}`}}var Mt=qe('<svg><circle cx="24" cy="24" r="20" stroke="rgb(var(--m3-scheme-primary))" stroke-width="4" stroke-dasharray="125.66 125.66" stroke-linecap="round" fill="none" class="svelte-5nogo2"></circle></svg>');function sa(t,e){let a=p(e,"display",8,"inline-flex"),r=p(e,"extraOptions",24,()=>({}));var n=Mt();let s;X(()=>s=de(n,s,{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",class:"m3-container",style:`display: ${a()??""};`,role:"progressbar",...r()},"svelte-5nogo2",!0)),C(t,n)}var Ut=W('<button class="trailing svelte-bpw5x"><!></button>'),Wt=W('<div><input> <div class="layer svelte-bpw5x"></div> <label class="m3-font-body-large svelte-bpw5x"> </label> <!> <!></div>');function la(t,e){ae(e,!1);let a=p(e,"display",8,"inline-flex"),r=p(e,"extraWrapperOptions",24,()=>({})),n=p(e,"extraOptions",24,()=>({})),s=p(e,"name",8),i=p(e,"leadingIcon",8,void 0),g=p(e,"trailingIcon",8,void 0),o=p(e,"disabled",8,!1),f=p(e,"required",8,!1),l=p(e,"error",8,!1),_=p(e,"value",12,"");const v=Et(),d=crypto.randomUUID();Me();var u=Wt();let m;var y=S(u);bt(y);let h;var b=Q(y,4);U(b,"for",d);var L=S(b,!0);P(b);var E=Q(b,2);z(E,i,H=>{Ie(H,{get icon(){return i()},class:"leading"})});var k=Q(E,2);z(k,g,H=>{var T=Ut(),B=S(T);Ie(B,{get icon(){return g()}}),P(T),mt("click",T,()=>v("trailingClick")),C(H,T)}),P(u),X(()=>{m=de(u,m,{class:"m3-container",style:`display: ${a()??""}`,...r()},"svelte-bpw5x"),oe(u,"leading-icon",i()),oe(u,"trailing-icon",g()),oe(u,"error",l()),h=de(y,h,{class:"m3-font-body-large",placeholder:" ",id:d,disabled:o(),required:f(),...n()},"svelte-bpw5x"),ge(L,s())}),Bt(y,_),C(t,u),re()}var Kt=W("<div> </div>"),Vt=W("<div><!></div>");function Ne(t,e){ae(e,!0);let a=p(e,"placeholder",3,null),r=p(e,"placeholderProps",3,null);const n="svelte-lazy-placeholder";var s=j(),i=J(s);z(i,a,g=>{var o=Vt();he(o,n);var f=S(o);z(f,()=>typeof a()=="string",l=>{var _=Kt(),v=S(_,!0);P(_),X(()=>ge(v,a())),C(l,_)},l=>{var _=j(),v=J(_);z(v,()=>["function","object"].includes(typeof a()),d=>{var u=j();const m=De(a);var y=J(u);Tt(y,()=>Y(m),(h,b)=>{b(h,xt(r))}),C(d,u)},null,!0),C(l,_)}),P(o),C(g,o)}),C(t,s),re()}var Gt=W("<div><!></div> <!>",1),Yt=W("<div><!></div>");function oa(t,e){ae(e,!0);let a=p(e,"keep",3,!1),r=p(e,"height",3,0),n=p(e,"offset",3,150),s=p(e,"fadeOption",19,()=>({delay:0,duration:400})),i=p(e,"resetHeightDelay",3,0),g=p(e,"onload",3,null),o=p(e,"placeholder",3,null),f=p(e,"placeholderProps",3,null),l=p(e,"class",3,"");const _="svelte-lazy"+(l()?" "+l():""),v="svelte-lazy-content",d=B();let u=xe(!1),m=xe(!0),y=De(()=>Y(m)?"":"display: none");function h(c){$(c);const w=b(c);H(w),setTimeout(()=>{w()});const x=L(c);return{destroy:()=>{T(w),x.unobserve(c)}}}function b(c){return Je(x=>{const I=c.getBoundingClientRect().top,R=c.getBoundingClientRect().bottom,O=Ye(x)+n();I<=O&&R>0?k(c):a()||E(c)},200)}function L(c,w){const x=new IntersectionObserver(I=>{I[0].isIntersecting&&k(c)});return x.observe(c),x}function E(c){$(c),Z(u,!1)}function k(c,w){Y(u)||(Z(u,!0),ne(c),g()&&g()(c))}function H(c){document.addEventListener("scroll",c,!0),window.addEventListener("resize",c)}function T(c){document.removeEventListener("scroll",c,!0),window.removeEventListener("resize",c)}function B(){return typeof r()=="number"?r()+"px":r()}function $(c){r()&&(c.style.height=B())}function ne(c){setTimeout(()=>{Ge(c)||(c.style.height="auto")},i())}function Ge(c){const w=c.querySelector("img");return w?w.complete?w.naturalHeight===0:(Z(m,!1),c.addEventListener("load",()=>{Z(m,!0),c.style.height="auto"},{capture:!0,once:!0}),c.addEventListener("error",()=>{Z(m,!0)},{capture:!0,once:!0}),!0):!1}function Ye(c){var w;return(w=c==null?void 0:c.target)!=null&&w.getBoundingClientRect?c.target.getBoundingClientRect().bottom:window.innerHeight}function Je(c,w,x){let I,R,O,N=null,q=0;x||(x={});const Ze=function(){q=x.leading===!1?0:new Date,N=null,O=c.apply(I,R),N||(I=R=null)};return function(Xt){const ie=new Date;!q&&x.leading===!1&&(q=ie);const se=w-(ie-q);return I=this,R=arguments,se<=0||se>w?(N&&(clearTimeout(N),N=null),q=ie,O=c.apply(I,R),N||(I=R=null)):!N&&x.trailing!==!1&&(N=setTimeout(Ze,se)),O}}var K=Yt();he(K,_),U(K,"style",`height: ${d??""}`);var Xe=S(K);z(Xe,()=>Y(u),c=>{var w=Gt(),x=J(w);he(x,v);var I=S(x);z(I,()=>e.children,O=>{var N=j(),q=J(N);At(q,()=>e.children),C(O,N)},O=>{var N=pt("Lazy load content");C(O,N)}),P(x);var R=Q(x,2);z(R,()=>!Y(m)&&o(),O=>{Ne(O,{get placeholder(){return o()},get placeholderProps(){return f()}})}),X(()=>U(x,"style",Y(y))),zt(1,x,()=>qt,()=>s()||{}),C(c,w)},c=>{var w=j(),x=J(w);z(x,o,I=>{Ne(I,{get placeholder(){return o()},get placeholderProps(){return f()}})},null,!0),C(c,w)}),P(K),Lt(K,c=>h(c)),C(t,K),re()}var Jt=W("<div><img> <p1> </p1></div>");function ca(t,e){let a=p(e,"title",8,"Ensipedia"),r=p(e,"icon",8,"favicon.png");var n=Jt();M(n,"text-align","center"),M(n,"margin-bottom","8px");var s=S(n),i=Q(s,2);M(i,"font-size","30px"),M(i,"vertical-align","middle");var g=S(i,!0);P(i),P(n),X(()=>{U(s,"src",r()),M(s,"width","64px"),M(s,"vertical-align","middle"),M(s,"margin-right","8px"),ge(g,a())}),C(t,n)}export{sa as C,oa as I,ca as T,Ie as _,la as a,Lt as b,ia as c,na as e,ra as i,M as s};
