import{S,i as A,s as C,l as v,u as x,a as y,m as u,p as g,v as k,h as p,c as b,q as m,b as j,H as f,n as q,N as D,O as N}from"../chunks/index-33f9ac08.js";import{a as O,b as P}from"../chunks/paths-b9644fda.js";import{p as M}from"../chunks/gamedev-aa2d2d41.js";function G(n,l,a){const i=n.slice();return i[0]=l[a],i}function I(n){let l,a,i,c,o,s=n[0].name+"",e,r,t,h=n[0].stack+"",E,w;return{c(){l=v("a"),a=v("img"),c=y(),o=v("h2"),e=x(s),r=y(),t=v("p"),E=x(h),w=y(),this.h()},l(d){l=u(d,"A",{class:!0,href:!0});var _=g(l);a=u(_,"IMG",{src:!0,alt:!0,class:!0}),c=b(_),o=u(_,"H2",{});var z=g(o);e=k(z,s),z.forEach(p),r=b(_),t=u(_,"P",{});var H=g(t);E=k(H,h),H.forEach(p),w=b(_),_.forEach(p),this.h()},h(){N(a.src,i=""+(O+n[0].preview))||m(a,"src",i),m(a,"alt","project preview"),m(a,"class","svelte-fzybvm"),m(l,"class","cell wrapper svelte-fzybvm"),m(l,"href",P+"/project?id="+n[0].id+"&list=gamedev")},m(d,_){j(d,l,_),f(l,a),f(l,c),f(l,o),f(o,e),f(l,r),f(l,t),f(t,E),f(l,w)},p:q,d(d){d&&p(l)}}}function V(n){let l,a,i,c,o=M,s=[];for(let e=0;e<o.length;e+=1)s[e]=I(G(n,o,e));return{c(){l=v("h1"),a=x("My projects"),i=y(),c=v("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){l=u(e,"H1",{});var r=g(l);a=k(r,"My projects"),r.forEach(p),i=b(e),c=u(e,"DIV",{class:!0});var t=g(c);for(let h=0;h<s.length;h+=1)s[h].l(t);t.forEach(p),this.h()},h(){m(c,"class","wrapper content svelte-fzybvm")},m(e,r){j(e,l,r),f(l,a),j(e,i,r),j(e,c,r);for(let t=0;t<s.length;t+=1)s[t].m(c,null)},p(e,[r]){if(r&0){o=M;let t;for(t=0;t<o.length;t+=1){const h=G(e,o,t);s[t]?s[t].p(h,r):(s[t]=I(h),s[t].c(),s[t].m(c,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=o.length}},i:q,o:q,d(e){e&&p(l),e&&p(i),e&&p(c),D(s,e)}}}class K extends S{constructor(l){super(),A(this,l,null,V,C,{})}}export{K as default};