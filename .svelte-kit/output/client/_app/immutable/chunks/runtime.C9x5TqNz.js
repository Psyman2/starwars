var Ot=Array.isArray,Ct=Array.from,Nt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyDescriptors,bt=Object.prototype,qt=Array.prototype,Wn=Object.getPrototypeOf;const Pt=()=>{};function Ft(n){return n()}function dn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,j=8,en=16,g=32,z=64,I=128,V=256,p=512,k=1024,b=2048,N=4096,H=8192,Xn=16384,yn=32768,Lt=65536,Jn=1<<18,wn=1<<19,cn=Symbol("$state"),Mt=Symbol("legacy props"),Yt=Symbol("");function Tn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Qn(n,this.v)}function nt(n){throw new Error("effect_in_teardown")}function tt(){throw new Error("effect_in_unowned_derived")}function rt(n){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function Ht(n){throw new Error("props_invalid_value")}function Bt(){throw new Error("state_descriptors_fixed")}function Ut(){throw new Error("state_prototype_fixed")}function st(){throw new Error("state_unsafe_local_read")}function lt(){throw new Error("state_unsafe_mutation")}let W=!1;function Vt(){W=!0}function sn(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Gt(n){return gn(sn(n))}function at(n,t=!1){var e;const r=sn(n);return t||(r.equals=mn),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Kt(n,t=!1){return gn(at(n,t))}function gn(n){return o!==null&&o.f&y&&(m===null?mt([n]):m.push(n)),n}function ut(n,t){return o!==null&&on()&&o.f&(y|en)&&(m===null||!m.includes(n))&&lt(),ot(n,t)}function ot(n,t){return n.equals(t)||(n.v=t,n.version=Un(),An(n,k),on()&&u!==null&&u.f&p&&!(u.f&g)&&(c!==null&&c.includes(n)?(T(u,k),X(u)):A===null?gt([n]):A.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&k||!e&&a===u||(T(a,t),i&(p|I)&&(i&y?An(a,b):X(a)))}}const $t=1,Zt=2,zt=16,Wt=1,Xt=2,Jt=4,Qt=8,nr=16,tr=1,rr=2,it="[",ft="[!",_t="]",kn={},er=Symbol();function Rn(n){console.warn("hydration_mismatch")}let S=!1;function sr(n){S=n}let w;function L(n){if(n===null)throw Rn(),kn;return w=n}function lr(){return L(x(w))}function ar(n){if(S){if(x(w)!==null)throw Rn(),kn;w=n}}function ur(n=1){if(S){for(var t=n,r=w;t--;)r=x(r);w=r}}function or(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===_t){if(n===0)return t;n-=1}else(r===it||r===ft)&&(n+=1)}var e=x(t);t.remove(),t=e}}var vn,Sn,In;function ir(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;Sn=_n(t,"firstChild").get,In=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function J(n=""){return document.createTextNode(n)}function Q(n){return Sn.call(n)}function x(n){return In.call(n)}function fr(n,t){if(!S)return Q(n);var r=Q(w);if(r===null)r=w.appendChild(J());else if(t&&r.nodeType!==3){var e=J();return r==null||r.before(e),L(e),e}return L(r),r}function _r(n,t){if(!S){var r=Q(n);return r instanceof Comment&&r.data===""?x(r):r}return w}function cr(n,t=1,r=!1){let e=S?w:n;for(var s;t--;)s=e,e=x(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=J();return e===null?s==null||s.after(a):e.before(a),L(a),a}return L(e),e}function vr(n){n.textContent=""}function ct(n){var t=y|k;u===null?t|=I:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function pr(n){const t=ct(n);return t.equals=mn,t}function xn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?ln(e):P(e)}}}function vt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Dn(n){var t,r=u;Z(vt(n));try{xn(n),t=Vn(n)}finally{Z(r)}return t}function On(n){var t=Dn(n),r=(D||n.f&I)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Un())}function ln(n){xn(n),Y(n,0),T(n,H),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){u===null&&o===null&&rt(),o!==null&&o.f&I&&tt(),un&&nt()}function pt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function q(n,t,r,e=!0){var s=(n&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|k,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{pn(!0),B(a),a.f|=Xn}catch(_){throw P(a),_}finally{pn(i)}}else t!==null&&X(a);var E=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&wn)===0;if(!E&&!s&&e&&(l!==null&&pt(a,l),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(a)}return a}function hr(n){const t=q(j,null,!1);return T(t,p),t.teardown=n,t}function dr(n){Cn();var t=u!==null&&(u.f&g)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Nn(n);return e}}function Er(n){return Cn(),an(n)}function yr(n){const t=q(z,n,!0);return()=>{P(t)}}function Nn(n){return q(En,n,!1)}function wr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=an(()=>{n(),!e.ran&&(e.ran=!0,ut(r.l.r2,!0),xt(t))})}function Tr(){var n=f;an(()=>{if(It(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),F(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function an(n){return q(j,n,!0)}function mr(n){return ht(n)}function ht(n,t=0){return q(j|en|t,n,!0)}function gr(n,t=!0){return q(j|g,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=un,e=o;hn(!0),$(null);try{t.call(null)}finally{hn(r),$(e)}}}function qn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)ln(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&Jn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:x(e);e.remove(),e=l}r=!0}Pn(n,t&&!r),qn(n),Y(n,0),T(n,H);var a=n.transitions;if(a!==null)for(const E of a)E.stop();bn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Ar(n,t){var r=[];Ln(n,r,!0),Et(r,()=>{P(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Ln(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&yn)!==0||(e.f&g)!==0;Ln(e,t,l?r:!1),e=s}}}function kr(n){Mn(n,!0)}function Mn(n,t){if(n.f&N){F(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&g)!==0;Mn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}const yt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let G=!1,K=!1,nn=[],tn=[];function Yn(){G=!1;const n=nn.slice();nn=[],dn(n)}function jn(){K=!1;const n=tn.slice();tn=[],dn(n)}function Rr(n){G||(G=!0,queueMicrotask(Yn)),nn.push(n)}function Sr(n){K||(K=!0,yt(jn)),tn.push(n)}function wt(){G&&Yn(),K&&jn()}const Hn=0,Tt=1;let U=Hn,M=!1,O=!1,un=!1;function pn(n){O=n}function hn(n){un=n}let R=[],C=0;let o=null;function $(n){o=n}let u=null;function Z(n){u=n}let m=null;function mt(n){m=n}let c=null,d=0,A=null;function gt(n){A=n}let Bn=0,D=!1,f=null;function Un(){return++Bn}function on(){return!W||f!==null&&f.l===null}function F(n){var a,i;var t=n.f;if(t&k)return!0;if(t&b){var r=n.deps,e=(t&I)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var l=r[s];if(F(l)&&On(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||T(n,p)}return!1}function At(n,t,r){throw n}function Vn(n){var fn;var t=c,r=d,e=A,s=o,l=D,a=m,i=f,E=n.f;c=null,d=0,A=null,o=E&(g|z)?null:n,D=!O&&(E&I)!==0,m=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(Y(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!D)for(v=d;v<_.length;v++)((fn=_[v]).reactions??(fn.reactions=[])).push(n)}else _!==null&&d<_.length&&(Y(n,d),_.length=d);return h}finally{c=t,d=r,A=e,o=s,D=l,m=a,f=i}}function kt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(I|V)||(t.f^=V),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)kt(n,r[e])}function B(n){var t=n.f;if(!(t&H)){T(n,p);var r=u;u=n;try{t&en?dt(n):Pn(n),qn(n),bn(n);var e=Vn(n);n.teardown=typeof e=="function"?e:null,n.version=Bn}catch(s){At(s)}finally{u=r}}}function Gn(){C>1e3&&(C=0,et()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=O;O=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var l=[];$n(s,l),Rt(l)}}finally{O=r}}}function Rt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(H|N))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}}function St(){if(M=!1,C>1001)return;const n=R;R=[],Kn(n),M||(C=0)}function X(n){U===Hn&&(M||(M=!0,queueMicrotask(St)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|g)){if(!(r&p))return;t.f^=p}}R.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&p)!==0;if(!a&&!(s&N))if(s&j){l?r.f^=p:F(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&En&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),$n(i,t)}function Zn(n){var t=U,r=R;try{Gn();const s=[];U=Tt,R=s,M=!1,Kn(r);var e=n==null?void 0:n();return wt(),(R.length>0||s.length>0)&&Zn(),C=0,e}finally{U=t,R=r}}async function Ir(){await Promise.resolve(),Zn()}function It(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&H){var e=Dn(n);return ln(n),e}if(o!==null){m!==null&&m.includes(n)&&st();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),A!==null&&u!==null&&u.f&p&&!(u.f&g)&&A.includes(n)&&(T(u,k),X(u))}else if(r&&n.deps===null)for(var l=n,a=l.parent,i=l;a!==null;)if(a.f&y){var E=a;i=E,a=E.parent}else{var h=a;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(l=n,F(l)&&On(l)),n.v}function xt(n){const t=o;try{return o=null,n()}finally{o=t}}const Dt=~(k|b|p);function T(n,t){n.f=n.f&Dt|t}function xr(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},W&&!t&&(f.l={s:null,u:null,r1:[],r2:sn(!1)})}function Dr(n){const t=f;if(t!==null){const a=t.e;if(a!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),$(l.reaction),Nn(l.fn)}}finally{Z(r),$(e)}}f=t.p,t.m=!0}return{}}function Or(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Wn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{Kt as $,mr as A,fr as B,ar as C,cr as D,yn as E,W as F,Ot as G,ft as H,J as I,Ct as J,N as K,u as L,ot as M,Ln as N,vr as O,Et as P,Q,_t as R,o as S,at as T,sn as U,Zt as V,$t as W,zt as X,x as Y,wr as Z,Tr as _,dr as a,ut as a0,tr as a1,rr as a2,Sr as a3,Yt as a4,on as a5,an as a6,ur as a7,$ as a8,Z as a9,Qt as aA,Mt as aB,pr as aC,nr as aD,Zn as aE,Ir as aF,Gt as aG,hr as aa,Rr as ab,Nt as ac,ir as ad,it as ae,kn as af,Rn as ag,jt as ah,yr as ai,cn as aj,bt as ak,qt as al,Bt as am,er as an,_n as ao,Ut as ap,Wn as aq,Nn as ar,Ht as as,Lt as at,Jt as au,mn as av,g as aw,z as ax,Wt as ay,Xt as az,xt as b,f as c,Ft as d,Or as e,ct as f,It as g,ht as h,kr as i,gr as j,S as k,lr as l,or as m,sr as n,w as o,Ar as p,Vt as q,dn as r,L as s,Pt as t,Er as u,Qn as v,P as w,xr as x,_r as y,Dr as z};
