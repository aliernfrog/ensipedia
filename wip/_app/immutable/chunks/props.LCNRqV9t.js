import{S as I,F as G,G as Z,I as P,J as $,K as b,U as o,M as E,N as y,r as L,O as V,C as z,P as H,Q as J,R as Q,T as W,V as X,W as B,X as k,Y as ee,Z as F,_ as re,$ as te,a0 as ne,a1 as ie,a2 as K,a3 as M,a4 as ae,a5 as fe,a6 as se,a7 as D}from"./runtime.hPq_haoC.js";import{p as ue}from"./disclose-version.BJhuGgM0.js";function S(e,n=null,u){if(typeof e!="object"||e===null||I in e)return e;const s=z(e);if(s!==G&&s!==Z)return e;var i=new Map,v=H(e),h=P(0);v&&i.set("length",P(e.length));var w;return new Proxy(e,{defineProperty(l,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&$();var f=i.get(r);return f===void 0?(f=P(t.value),i.set(r,f)):b(f,S(t.value,w)),!0},deleteProperty(l,r){var t=i.get(r);if(t===void 0)r in l&&i.set(r,P(o));else{if(v&&typeof r=="string"){var f=i.get("length"),a=Number(r);Number.isInteger(a)&&a<f.v&&b(f,a)}b(t,o),U(h)}return!0},get(l,r,t){var c;if(r===I)return e;var f=i.get(r),a=r in l;if(f===void 0&&(!a||(c=E(l,r))!=null&&c.writable)&&(f=P(S(a?l[r]:o,w)),i.set(r,f)),f!==void 0){var _=y(f);return _===o?void 0:_}return Reflect.get(l,r,t)},getOwnPropertyDescriptor(l,r){var t=Reflect.getOwnPropertyDescriptor(l,r);if(t&&"value"in t){var f=i.get(r);f&&(t.value=y(f))}else if(t===void 0){var a=i.get(r),_=a==null?void 0:a.v;if(a!==void 0&&_!==o)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return t},has(l,r){var _;if(r===I)return!0;var t=i.get(r),f=t!==void 0&&t.v!==o||Reflect.has(l,r);if(t!==void 0||L!==null&&(!f||(_=E(l,r))!=null&&_.writable)){t===void 0&&(t=P(f?S(l[r],w):o),i.set(r,t));var a=y(t);if(a===o)return!1}return f},set(l,r,t,f){var O;var a=i.get(r),_=r in l;if(v&&r==="length")for(var c=t;c<a.v;c+=1){var m=i.get(c+"");m!==void 0?b(m,o):c in l&&(m=P(o),i.set(c+"",m))}a===void 0?(!_||(O=E(l,r))!=null&&O.writable)&&(a=P(void 0),b(a,S(t,w)),i.set(r,a)):(_=a.v!==o,b(a,S(t,w)));var g=Reflect.getOwnPropertyDescriptor(l,r);if(g!=null&&g.set&&g.set.call(f,t),!_){if(v&&typeof r=="string"){var p=i.get("length"),N=Number(r);Number.isInteger(N)&&N>=p.v&&b(p,N+1)}U(h)}return!0},ownKeys(l){y(h);var r=Reflect.ownKeys(l).filter(a=>{var _=i.get(a);return _===void 0||_.v!==o});for(var[t,f]of i)f.v!==o&&!(t in l)&&r.push(t);return r},setPrototypeOf(){V()}})}function U(e,n=1){b(e,e.v+n)}function Y(e){return e!==null&&typeof e=="object"&&I in e?e[I]:e}function ve(e,n){return Object.is(Y(e),Y(n))}const le={get(e,n){let u=e.props.length;for(;u--;){let s=e.props[u];if(D(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},set(e,n,u){let s=e.props.length;for(;s--;){let i=e.props[s];D(i)&&(i=i());const v=E(i,n);if(v&&v.set)return v.set(u),!0}return!1},getOwnPropertyDescriptor(e,n){let u=e.props.length;for(;u--;){let s=e.props[u];if(D(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s){const i=E(s,n);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,n){if(n===I||n===K)return!1;for(let u of e.props)if(D(u)&&(u=u()),u!=null&&n in u)return!0;return!1},ownKeys(e){const n=[];for(let u of e.props){D(u)&&(u=u());for(const s in u)n.includes(s)||n.push(s)}return n}};function oe(...e){return new Proxy({props:e},le)}function q(e){for(var n=L,u=L;n!==null&&!(n.f&(k|ee));)n=n.parent;try{return F(n),e()}finally{F(u)}}function ce(e,n,u,s){var C;var i=(u&re)!==0,v=!te||(u&ne)!==0,h=(u&ie)!==0,w=(u&fe)!==0,l=!1,r;h?[r,l]=ue(()=>e[n]):r=e[n];var t=I in e||K in e,f=((C=E(e,n))==null?void 0:C.set)??(t&&h&&n in e?d=>e[n]=d:void 0),a=s,_=!0,c=!1,m=()=>(c=!0,_&&(_=!1,w?a=B(s):a=s),a);r===void 0&&s!==void 0&&(f&&v&&J(),r=m(),f&&f(r));var g;if(v)g=()=>{var d=e[n];return d===void 0?m():(_=!0,c=!1,d)};else{var p=q(()=>(i?M:ae)(()=>e[n]));p.f|=Q,g=()=>{var d=y(p);return d!==void 0&&(a=void 0),d===void 0?a:d}}if(!(u&W))return g;if(f){var N=e.$$legacy;return function(d,R){return arguments.length>0?((!v||!R||N||l)&&f(R?g():d),d):g()}}var O=!1,j=!1,T=se(r),A=q(()=>M(()=>{var d=g(),R=y(T);return O?(O=!1,j=!0,R):(j=!1,T.v=d)}));return i||(A.equals=X),function(d,R){if(arguments.length>0){const x=R?y(A):v&&h?S(d):d;return A.equals(x)||(O=!0,b(T,x),c&&a!==void 0&&(a=x),B(()=>y(A))),d}return y(A)}}export{S as a,ve as i,ce as p,oe as s};
