import{t as c,v as p}from"./runtime.dIlVsl3g.js";const e=[];function h(n,b=c){let i=null;const o=new Set;function r(s){if(p(n,s)&&(n=s,i)){const u=!e.length;for(const t of o)t[1](),e.push(t,n);if(u){for(let t=0;t<e.length;t+=2)e[t][0](e[t+1]);e.length=0}}}function f(s){r(s(n))}function l(s,u=c){const t=[s,u];return o.add(t),o.size===1&&(i=b(r,f)||c),s(n),()=>{o.delete(t),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:l}}export{h as w};
