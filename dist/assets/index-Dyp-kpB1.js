var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,L,R,te,z,ne,B,re,ie,ae,V,oe,H,U,W,se,G,ce,le,ue,de,fe,pe,K,me,q,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,J,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{i={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},a={duration:.5,overwrite:!1,delay:0},l=1e8,u=1/l,d=Math.PI*2,f=d/4,p=0,m=Math.sqrt,h=Math.cos,g=Math.sin,_=function(e){return typeof e==`string`},v=function(e){return typeof e==`function`},y=function(e){return typeof e==`number`},b=function(e){return e===void 0},x=function(e){return typeof e==`object`},S=function(e){return e!==!1},C=function(){return typeof window<`u`},w=function(e){return v(e)||_(e)},T=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},E=Array.isArray,D=/(?:-?\.?\d|\.)+/gi,O=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,k=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,A=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j=/[+-]=-?[.\d]+/,M=/[^,'"\[\]\s]+/gi,N=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,L={},R={},z=function(e){return(R=we(e,L))&&Wn},ne=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},B=function(e,t){return!t&&console.warn(e)},re=function(e,t){return e&&(L[e]=t)&&R&&(R[e]=t)||L},ie=function(){return 0},ae={suppressEvents:!0,isStart:!0,kill:!1},V={suppressEvents:!0,kill:!1},oe={suppressEvents:!0},H={},U=[],W={},G={},ce={},le=30,ue=[],de=``,fe=function(e){var t=e[0],n,r;if(x(t)||v(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ue.length;r--&&!ue[r].targetTest(t););n=ue[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new $t(e[r],n)))||e.splice(r,1);return e},pe=function(e){return e._gsap||fe(st(e))[0]._gsap},K=function(e,t,n){return(n=e[t])&&v(n)?e[t]():b(n)&&e.getAttribute&&e.getAttribute(t)||n},me=function(e,t){return(e=e.split(`,`)).forEach(t)||e},q=function(e){return Math.round(e*1e5)/1e5||0},he=function(e){return Math.round(e*1e7)/1e7||0},ge=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},_e=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ve=function(){var e=U.length,t=U.slice(0),n,r;for(W={},U.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ye=function(e,t,n,r){U.length&&!s&&ve(),e.render(t,n,r||s&&t<0&&(e._initted||e._startAt)),U.length&&!s&&ve()},be=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(M).length<2?t:_(e)?e.trim():e},xe=function(e){return e},Se=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ce=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},we=function(e,t){for(var n in t)e[n]=t[n];return e},Te=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=x(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Ee=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},De=function(e){var t=e.parent||P,n=e.keyframes?Ce(E(e.keyframes)):Se;if(S(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Oe=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ke=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ae=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},je=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Me=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ne=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pe=function(e,t,n,r){return e._startAt&&(s?e._startAt.revert(V):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Fe=function e(t){return!t||t._ts&&e(t.parent)},Ie=function(e){return e._repeat?Le(e._tTime,e=e.duration()+e._rDelay)*e:0},Le=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Re=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ze=function(e){return e._end=he(e._start+(e._tDur/Math.abs(e._ts||e._rts||u)||0))},Be=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=he(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ze(e),n._dirty||Me(n,e)),e},Ve=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Re(e.rawTime(),t),(!t._dur||tt(0,t.totalDuration(),n)-t._tTime>u)&&t.render(n,!0)),Me(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-u}},He=function(e,t,n,r){return t.parent&&je(t),t._start=he((y(n)?n:n||e!==P?Qe(e,n,t):e._time)+t._delay),t._end=he(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ke(e,t,`_first`,`_last`,e._sort?`_start`:0),Ke(t)||(e._recent=t),r||Ve(e,t),e._ts<0&&Be(e,e._tTime),e},Ue=function(e,t){return(L.ScrollTrigger||ne(`scrollTrigger`,t))&&L.ScrollTrigger.create(t,e)},We=function(e,t,n,r,i){if(ln(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!s&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&se!==Rt.frame)return U.push(e),e._lazy=[i,r],1},Ge=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Ke=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},qe=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Ge(e)&&(e._initted||!Ke(e))||(e._ts<0||e._dp._ts<0)&&!Ke(e))?0:1,o=e._rDelay,c=0,l,d,f;if(o&&e._repeat&&(c=tt(0,e._tDur,t),d=Le(c,o),e._yoyo&&d&1&&(a=1-a),d!==Le(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||s||r||e._zTime===u||!t&&e._zTime){if(!e._initted&&We(e,t,r,n,c))return;for(f=e._zTime,e._zTime=t||(n?u:0),n||=t&&!f,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Pe(e,t,n,!0),e._onUpdate&&!n&&wt(e,`onUpdate`),c&&e._repeat&&!n&&e.parent&&wt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&je(e,1),!n&&!s&&(wt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Je=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Ye=function(e,t,n,r){var i=e._repeat,a=he(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:he(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Be(e,e._tTime=e._tDur*o),e.parent&&ze(e),n||Me(e.parent,e),e},Xe=function(e){return e instanceof tn?Me(e):Ye(e,e._dur)},Ze={_start:0,endTime:ie,totalDuration:ie},Qe=function e(t,n,r){var i=t.labels,a=t._recent||Ze,o=t.duration()>=l?a.endTime(!1):t._dur,s,c,u;return _(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),u=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),u&&r&&(c=c/100*(E(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},$e=function(e,t,n){var r=y(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=S(s.vars.inherit)&&s.parent;a.immediateRender=S(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new gn(t[0],a,t[i+1])},et=function(e,t){return e||e===0?t(e):t},tt=function(e,t,n){return n<e?e:n>t?t:n},nt=function(e,t){return!_(e)||!(t=N.exec(e))?``:t[1]},rt=function(e,t,n){return et(n,function(n){return tt(e,t,n)})},it=[].slice,at=function(e,t){return e&&x(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&x(e[0]))&&!e.nodeType&&e!==F},ot=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return _(e)&&!t||at(e,1)?(r=n).push.apply(r,st(e)):n.push(e)})||n},st=function(e,t,n){return c&&!t&&c.selector?c.selector(e):_(e)&&!n&&(I||!zt())?it.call((t||ee).querySelectorAll(e),0):E(e)?ot(e,n):at(e)?it.call(e,0):e?[e]:[]},ct=function(e){return e=st(e)[0]||B(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return st(t,n.querySelectorAll?n:n===e?B(`Invalid scope`)||ee.createElement(`div`):e)}},lt=function(e){return e.sort(function(){return .5-Math.random()})},ut=function(e){if(v(e))return e;var t=x(e)?e:{each:e},n=Jt(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,u=r,d=r;return _(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(u=r[0],d=r[1]),function(e,o,f){var p=(f||t).length,h=a[p],g,_,v,y,b,x,S,C,w;if(!h){if(w=t.grid===`auto`?0:(t.grid||[1,l])[1],!w){for(S=-l;S<(S=f[w++].getBoundingClientRect().left)&&w<p;);w<p&&w--}for(h=a[p]=[],g=s?Math.min(w,p)*u-.5:r%w,_=w===l?0:s?p*d/w-.5:r/w|0,S=0,C=l,x=0;x<p;x++)v=x%w-g,y=_-(x/w|0),h[x]=b=c?Math.abs(c===`y`?y:v):m(v*v+y*y),b>S&&(S=b),b<C&&(C=b);r===`random`&&lt(h),h.max=S-C,h.min=C,h.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c===`y`?p/w:w:Math.max(w,p/w))||0)*(r===`edges`?-1:1),h.b=p<0?i-p:i,h.u=nt(t.amount||t.each)||0,n=n&&p<0?Kt(n):n}return p=(h[e]-h.min)/h.max||0,he(h.b+(n?n(p):p)*h.v)+h.u}},dt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=he(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(y(n)?0:nt(n))}},ft=function(e,t){var n=E(e),r,i;return!n&&x(e)&&(r=n=e.radius||l,e.values?(e=st(e.values),(i=!y(e[0]))&&(r*=r)):e=dt(e.increment)),et(t,n?v(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=l,s=0,c=e.length,u,d;c--;)i?(u=e[c].x-n,d=e[c].y-a,u=u*u+d*d):u=Math.abs(e[c]-n),u<o&&(o=u,s=c);return s=!r||o<=r?e[s]:t,i||s===t||y(t)?s:s+nt(t)}:dt(e))},pt=function(e,t,n,r){return et(E(e)?!t:n===!0?!!(n=0):!r,function(){return E(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},mt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},ht=function(e,t){return function(n){return e(parseFloat(n))+(t||nt(n))}},gt=function(e,t,n){return xt(e,t,0,1,n)},_t=function(e,t,n){return et(n,function(n){return e[~~t(n)]})},vt=function e(t,n,r){var i=n-t;return E(t)?_t(t,e(0,t.length),n):et(r,function(e){return(i+(e-t)%i)%i+t})},yt=function e(t,n,r){var i=n-t,a=i*2;return E(t)?_t(t,e(0,t.length-1),n):et(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},bt=function(e){for(var t=0,n=``,r,i,a,o;~(r=e.indexOf(`random(`,t));)a=e.indexOf(`)`,r),o=e.charAt(r+7)===`[`,i=e.substr(r+7,a-r-7).match(o?M:D),n+=e.substr(t,r-t)+pt(o?i:+i[0],o?0:+i[1],+i[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},xt=function(e,t,n,r,i){var a=t-e,o=r-n;return et(i,function(t){return n+((t-e)/a*o||0)})},St=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=_(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(E(t)&&!E(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=we(E(t)?[]:{},t));if(!u){for(c in n)rn.call(s,t,c,`get`,n[c]);a=function(e){return Tn(e,s)||(o?t.p:t)}}}return et(r,a)},Ct=function(e,t,n){var r=e.labels,i=l,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},wt=function(e,t,n){var r=e.vars,i=r[t],a=c,o=e._ctx,s,l,u;if(i)return s=r[t+`Params`],l=r.callbackScope||e,n&&U.length&&ve(),o&&(c=o),u=s?i.apply(l,s):i.call(l),c=a,u},Tt=function(e){return je(e),e.scrollTrigger&&e.scrollTrigger.kill(!!s),e.progress()<1&&wt(e,`onInterrupt`),e},Dt=[],Ot=function(e){if(e){if(e=!e.name&&e.default||e,C()||e.headless){var t=e.name,n=v(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:ie,render:Tn,add:rn,kill:Dn,modifier:En,rawVars:0},a={targetTest:0,get:0,getSetter:xn,aliases:{},register:0};if(zt(),e!==r){if(G[t])return;Se(r,Se(Ee(e,i),a)),we(r.prototype,we(i,Ee(e,a))),G[r.prop=t]=r,e.targetTest&&(ue.push(r),H[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}re(t,r),e.register&&e.register(Wn,r,An)}else Dt.push(e)}},kt=255,At={aqua:[0,kt,kt],lime:[0,kt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,kt],navy:[0,0,128],white:[kt,kt,kt],olive:[128,128,0],yellow:[kt,kt,0],orange:[kt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[kt,0,0],pink:[kt,192,203],cyan:[0,kt,kt],transparent:[kt,kt,kt,0]},jt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*kt+.5|0},J=function(e,t,n){var r=e?y(e)?[e>>16,e>>8&kt,e&kt]:0:At.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),At[e])r=At[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&kt,r&kt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&kt,e&kt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(D),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=jt(s+1/3,i,a),r[1]=jt(s,i,a),r[2]=jt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(O),n&&r.length<4&&(r[3]=1),r}else r=e.match(D)||At.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/kt,a=r[1]/kt,o=r[2]/kt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Mt=function(e){var t=[],n=[],r=-1;return e.split(Pt).forEach(function(e){var i=e.match(k)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Nt=function(e,t,n){var r=``,i=(e+r).match(Pt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=J(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Mt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Pt,`1`).split(k),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Pt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Pt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in At)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Ft=/hsl[a]?\(/,It=function(e){var t=e.join(` `),n;if(Pt.lastIndex=0,Pt.test(t))return n=Ft.test(t),e[1]=Nt(e[1],n),e[0]=Nt(e[0],n,Mt(e[1])),!0},Rt=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){te&&(!I&&C()&&(F=I=window,ee=F.document||{},L.gsap=Wn,(F.gsapVersions||(F.gsapVersions=[])).push(Wn.version),z(R||F.GreenSockGlobals||!F.gsap&&F||{}),Dt.forEach(Ot)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Lt=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Lt=0,l=ie},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),zt(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),zt=function(){return!Lt&&Rt.wake()},Bt={},Vt=/^[\d.\-M][\d.\-,\s]/,Ht=/["']/g,Ut=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Ht,``).trim():+c,r=s.substr(o+1).trim();return t},Wt=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Gt=function(e){var t=(e+``).split(`(`),n=Bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Ut(t[1])]:Wt(e).split(`,`).map(be)):Bt._CE&&Vt.test(e)?Bt._CE(``,e):n},Kt=function(e){return function(t){return 1-e(1-t)}},qt=function e(t,n){for(var r=t._first,i;r;)r instanceof tn?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},Jt=function(e,t){return e&&(v(e)?e:Bt[e]||Gt(e))||t},Yt=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return me(e,function(e){for(var t in Bt[e]=L[e]=i,Bt[a=e.toLowerCase()]=n,i)Bt[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Bt[e+`.`+t]=i[t]}),i},Xt=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zt=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/d*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*g((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Xt(s);return a=d/a,c.config=function(n,r){return e(t,n,r)},c},Qt=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Xt(r);return i.config=function(n){return e(t,n)},i},me(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Yt(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn,Yt(`Elastic`,Zt(`in`),Zt(`out`),Zt()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Yt(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Yt(`Expo`,function(e){return e?2**(10*(e-1)):0}),Yt(`Circ`,function(e){return-(m(1-e*e)-1)}),Yt(`Sine`,function(e){return e===1?1:-h(e*f)+1}),Yt(`Back`,Qt(`in`),Qt(`out`),Qt()),Bt.SteppedEase=Bt.steps=L.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-u;return function(e){return((r*tt(0,a,e)|0)+i)*n}}},a.ease=Bt[`quad.out`],me(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return de+=e+`,`+e+`Params,`}),$t=function(e,t){this.id=p++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:K,this.set=t?t.getSetter:xn},en=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ye(this,+e.duration,1,1),this.data=e.data,c&&(this._ctx=c,c.data.push(this)),Lt||Rt.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Ye(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(zt(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Be(this,e),!n._dp||n.parent||Ve(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&He(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===u||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),ye(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Ie(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):+(this.rawTime()>0)},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Ie(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Le(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-u?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Re(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-u?0:this._rts,this.totalTime(tt(-Math.abs(this._delay),this._tDur,n),t!==!1),ze(this),Ne(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==u&&(this._tTime-=u)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&He(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(S(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Re(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=oe);var t=s;return s=e,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),s=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Xe(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Xe(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Qe(this,e),S(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,S(t))},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-u:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-u,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-u)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this;return new Promise(function(n){var r=v(e)?e:xe,i=function(){var e=t.then;t.then=null,v(r)&&(r=r(t))&&(r.then||r===t)&&(t.then=e),n(r),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?i():t._prom=i})},t.kill=function(){Tt(this)},e}(),Se(en.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-u,_prom:0,_ps:!1,_rts:1}),tn=function(e){r(t,e);function t(t,r){var i;return t===void 0&&(t={}),i=e.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=S(t.sortChildren),P&&He(t.parent||P,n(i),r),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&Ue(n(i),t.scrollTrigger),i}var a=t.prototype;return a.to=function(e,t,n){return $e(0,arguments,this),this},a.from=function(e,t,n){return $e(1,arguments,this),this},a.fromTo=function(e,t,n,r){return $e(2,arguments,this),this},a.set=function(e,t,n){return t.duration=0,t.parent=this,De(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new gn(e,t,Qe(this,n),1),this},a.call=function(e,t,n){return He(this,gn.delayedCall(0,e,t),n)},a.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new gn(e,n,Qe(this,i)),this},a.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,De(n).immediateRender=S(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},a.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,De(r).immediateRender=S(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},a.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:he(e),c=this._zTime<0!=e<0&&(this._initted||!a),l,d,f,p,m,h,g,_,v,y,b,x;if(this!==P&&o>i&&e>=0&&(o=i),o!==this._tTime||n||c){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),l=o,v=this._start,_=this._ts,h=!_,c&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,m=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,t,n);if(l=he(o%m),o===i?(p=this._repeat,l=a):(p=~~(o/m),p&&p===o/m&&(l=a,p--),l>a&&(l=a)),y=Le(this._tTime,m),!r&&this._tTime&&y!==p&&this._tTime-y*m-this._dur<=0&&(y=p),b&&p&1&&(l=a-l,x=1),p!==y&&!this._lock){var S=b&&y&1,C=S===(b&&p&1);if(p<y&&(S=!S),r=S?0:o%a?a:o,this._lock=1,this.render(r||(x?0:he(p*m)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&wt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1),r&&r!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,C&&(this._lock=2,r=S?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!h))return this;qt(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Je(this,he(r),he(l)),g&&(o-=l-(l=g._start))),this._tTime=o,this._time=l,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&l&&!t&&!p&&(wt(this,`onStart`),this._tTime!==o))return this;if(l>=r&&e>=0)for(d=this._first;d;){if(f=d._next,(d._act||l>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(l-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(l-d._start)*d._ts,t,n),l!==this._time||!this._ts&&!h){g=0,f&&(o+=this._zTime=-u);break}}d=f}else{d=this._last;for(var w=e<0?e:l;d;){if(f=d._prev,(d._act||w<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,t,n||s&&(d._initted||d._startAt)),l!==this._time||!this._ts&&!h){g=0,f&&(o+=this._zTime=w?-u:u);break}}d=f}}if(g&&!t&&(this.pause(),g.render(l>=r?0:-u)._zTime=l>=r?1:-1,this._ts))return this._start=v,ze(this),this.render(e,t,n);this._onUpdate&&!t&&wt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&je(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(wt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},a.add=function(e,t){var n=this;if(y(t)||(t=Qe(this,t,e)),!(e instanceof en)){if(E(e))return e.forEach(function(e){return n.add(e,t)}),this;if(_(e))return this.addLabel(e,t);if(v(e))e=gn.delayedCall(0,e);else return this}return this===e?this:He(this,e,t)},a.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-l);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof gn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},a.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},a.remove=function(e){return _(e)?this.removeLabel(e):v(e)?this.killTweensOf(e):(Ae(this,e),e===this._recent&&(this._recent=this._last),Me(this))},a.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=he(Rt.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},a.addLabel=function(e,t){return this.labels[e]=Qe(this,t),this},a.removeLabel=function(e){return delete this.labels[e],this},a.addPause=function(e,t,n){var r=gn.delayedCall(0,t||ie,n);return r.data=`isPause`,this._hasPause=1,He(this,r,Qe(this,e))},a.removePause=function(e){var t=this._first;for(e=Qe(this,e);t;)t._start===e&&t.data===`isPause`&&je(t),t=t._next},a.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)sn!==r[i]&&r[i].kill(e,t);return this},a.getTweensOf=function(e,t){for(var n=[],r=st(e),i=this._first,a=y(t),o;i;)i instanceof gn?_e(i._targets,r)&&(a?(!sn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},a.tweenTo=function(e,t){t||={};var n=this,r=Qe(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,d=gn.to(n,Se({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||u,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());d._dur!==e&&Ye(d,e,0,1).render(d._time,!0,!0),l=1}o&&o.apply(d,s||[])}},t));return c?d.render(0):d},a.tweenFromTo=function(e,t,n){return this.tweenTo(t,Se({startAt:{time:Qe(this,e)}},n))},a.recent=function(){return this._recent},a.nextLabel=function(e){return e===void 0&&(e=this._time),Ct(this,Qe(this,e))},a.previousLabel=function(e){return e===void 0&&(e=this._time),Ct(this,Qe(this,e),1)},a.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+u)},a.shiftChildren=function(e,t,n){n===void 0&&(n=0);for(var r=this._first,i=this.labels,a;r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Me(this)},a.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},a.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Me(this)},a.totalDuration=function(e){var t=0,n=this,r=n._last,i=l,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,He(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=o/n._ts,n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Ye(n,n===P&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(P._ts&&(ye(P,Re(e,P)),se=Rt.frame),Rt.frame>=le){le+=i.autoSleep||120;var t=P._first;if((!t||!t._ts)&&i.autoSleep&&Rt._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Rt.sleep()}}},t}(en),Se(tn.prototype,{_lock:0,_hasPause:0,_forcing:0}),nn=function(e,t,n,r,i,a,o){var s=new An(this._pt,e,t,0,1,wn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=bt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(A)||[];u=A.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?ge(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=A.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(j.test(r)||g)&&(s.e=0),this._pt=s,s},rn=function(e,t,n,r,a,o,s,c,l,u){v(r)&&(r=r(a||0,e,o));var d=e[t],f=n===`get`?v(d)?l?e[t.indexOf(`set`)||!v(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](l):e[t]():d:n,p=v(d)?l?yn:vn:_n,m;if(_(r)&&(~r.indexOf(`random(`)&&(r=bt(r)),r.charAt(1)===`=`&&(m=ge(f,r)+(nt(f)||0),(m||m===0)&&(r=m))),!u||f!==r||cn)return!isNaN(f*r)&&r!==``?(m=new An(this._pt,e,t,+f||0,r-(f||0),typeof d==`boolean`?Cn:Sn,0,p),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m):(!d&&!(t in e)&&ne(t,r),nn.call(this,e,t,f,r,p,c||i.stringFilter,l))},an=function(e,t,n,r,i){if(v(e)&&(e=pn(e,i,t,n,r)),!x(e)||e.style&&e.nodeType||E(e)||T(e))return _(e)?pn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=pn(e[o],i,t,n,r);return a},on=function(e,t,n,r,i,a){var o,s,c,l;if(G[e]&&(o=new G[e]).init(i,o.rawVars?t[e]:an(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new An(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Et))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},ln=function e(t,n,r){var i=t.vars,c=i.ease,d=i.startAt,f=i.immediateRender,p=i.lazy,m=i.onUpdate,h=i.runBackwards,g=i.yoyoEase,_=i.keyframes,v=i.autoRevert,y=t._dur,b=t._startAt,x=t._targets,C=t.parent,w=C&&C.data===`nested`?C.vars.targets:x,T=t._overwrite===`auto`&&!o,E=t.timeline,D,O,k,A,j,M,N,F,I,ee,L,R,te;if(E&&(!_||!c)&&(c=`none`),t._ease=Jt(c,a.ease),t._yEase=g?Kt(Jt(g===!0?c:g,a.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(F=x[0]?pe(x[0]).harness:0,R=F&&i[F.prop],D=Ee(i,H),b&&(b._zTime<0&&b.progress(1),n<0&&h&&f&&!v?b.render(-1,!0):b.revert(h&&y?V:ae),b._lazy=0),d){if(je(t._startAt=gn.set(x,Se({data:`isStart`,overwrite:!1,parent:C,immediateRender:!0,lazy:!b&&S(p),startAt:null,delay:0,onUpdate:m&&function(){return wt(t,`onUpdate`)},stagger:0},d))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(s||!f&&!v)&&t._startAt.revert(V),f&&y&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(h&&y&&!b){if(n&&(f=!1),k=Se({overwrite:!1,data:`isFromStart`,lazy:f&&!b&&S(p),immediateRender:f,stagger:0,parent:C},D),R&&(k[F.prop]=R),je(t._startAt=gn.set(x,k)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(s?t._startAt.revert(V):t._startAt.render(-1,!0)),t._zTime=n,!f)e(t._startAt,u,u);else if(!n)return}for(t._pt=t._ptCache=0,p=y&&S(p)||p&&!y,O=0;O<x.length;O++){if(j=x[O],N=j._gsap||fe(x)[O]._gsap,t._ptLookup[O]=ee={},W[N.id]&&U.length&&ve(),L=w===x?O:w.indexOf(j),F&&(I=new F).init(j,R||D,t,L,w)!==!1&&(t._pt=A=new An(t._pt,j,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(e){ee[e]=A}),I.priority&&(M=1)),!F||R)for(k in D)G[k]&&(I=on(k,D,t,L,j,w))?I.priority&&(M=1):ee[k]=A=rn.call(t,j,k,`get`,D[k],L,w,0,i.stringFilter);t._op&&t._op[O]&&t.kill(j,t._op[O]),T&&t._pt&&(sn=t,P.killTweensOf(j,ee,t.globalTime(n)),te=!t.parent,sn=0),t._pt&&p&&(W[N.id]=1)}M&&kn(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!te,_&&n<=0&&E.render(l,!0,!0)},un=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return cn=1,e.vars[t]=`+=0`,ln(e,o),cn=0,s?B(t+` not eligible for reset`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=q(n)+nt(u.e)),u.b&&(u.b=l.s+nt(u.b))},dn=function(e,t){var n=e[0]?pe(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=we({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},fn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(E(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},pn=function(e,t,n,r,i){return v(e)?e.call(t,n,r,i):_(e)&&~e.indexOf(`random(`)?bt(e):e},mn=de+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`,hn={},me(mn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return hn[e]=1}),gn=function(e){r(t,e);function t(t,r,a,s){var c;typeof r==`number`&&(a.duration=r,r=a,a=null),c=e.call(this,s?r:De(r))||this;var l=c.vars,d=l.duration,f=l.delay,p=l.immediateRender,m=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,v=l.scrollTrigger,b=l.yoyoEase,C=r.parent||P,D=(E(t)||T(t)?y(t[0]):`length`in r)?[t]:st(t),O,k,A,j,M,N,F,I;if(c._targets=D.length?fe(D):B(`GSAP target `+t+` not found. https://gsap.com`,!i.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=h,g||m||w(d)||w(f)){if(r=c.vars,O=c.timeline=new tn({data:`nested`,defaults:_||{},targets:C&&C.data===`nested`?C.vars.targets:D}),O.kill(),O.parent=O._dp=n(c),O._start=0,m||w(d)||w(f)){if(j=D.length,F=m&&ut(m),x(m))for(M in m)~mn.indexOf(M)&&(I||={},I[M]=m[M]);for(k=0;k<j;k++)A=Ee(r,hn),A.stagger=0,b&&(A.yoyoEase=b),I&&we(A,I),N=D[k],A.duration=+pn(d,n(c),k,N,D),A.delay=(+pn(f,n(c),k,N,D)||0)-c._delay,!m&&j===1&&A.delay&&(c._delay=f=A.delay,c._start+=f,A.delay=0),O.to(N,A,F?F(k,N,D):0),O._ease=Bt.none;O.duration()?d=f=0:c.timeline=0}else if(g){De(Se(O.vars.defaults,{ease:`none`})),O._ease=Jt(g.ease||r.ease||`none`);var ee=0,L,R,te;if(E(g))g.forEach(function(e){return O.to(D,e,`>`)}),O.duration();else{for(M in A={},g)M===`ease`||M===`easeEach`||fn(M,g[M],A,g.easeEach);for(M in A)for(L=A[M].sort(function(e,t){return e.t-t.t}),ee=0,k=0;k<L.length;k++)R=L[k],te={ease:R.e,duration:(R.t-(k?L[k-1].t:0))/100*d},te[M]=R.v,O.to(D,te,ee),ee+=te.duration;O.duration()<d&&O.to({},{duration:d-O.duration()})}}d||c.duration(d=O.duration())}else c.timeline=0;return h===!0&&!o&&(sn=n(c),P.killTweensOf(D),sn=0),He(C,n(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(p||!d&&!g&&c._start===he(C._time)&&S(p)&&Fe(n(c))&&C.data!==`nested`)&&(c._tTime=-u,c.render(Math.max(0,-f)||0)),v&&Ue(n(c),v),c}var a=t.prototype;return a.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-u&&!o?i:e<u?0:e,c,l,d,f,p,m,h,g,_;if(!a)qe(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o){if(c=s,g=this.timeline,this._repeat){if(f=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(f*100+e,t,n);if(c=he(s%f),s===i?(d=this._repeat,c=a):(d=~~(s/f),d&&d===he(s/f)&&(c=a,d--),c>a&&(c=a)),m=this._yoyo&&d&1,m&&(_=this._yEase,c=a-c),p=Le(this._tTime,f),c===r&&!n&&this._initted&&d===p)return this._tTime=s,this;d!==p&&(g&&this._yEase&&qt(g,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==f&&this._initted&&(this._lock=n=1,this.render(he(f*d),!0).invalidate()._lock=0))}if(!this._initted){if(We(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&d!==p))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(_||this._ease)(c/a),this._from&&(this.ratio=h=1-h),c&&!r&&!t&&!d&&(wt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(h,l.d),l=l._next;g&&g.render(e<0?e:g._dur*g._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Pe(this,e,t,n),wt(this,`onUpdate`)),this._repeat&&d!==p&&this.vars.onRepeat&&!t&&this.parent&&wt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Pe(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&je(this,1),!t&&(!o||r)&&(s||r||m)&&(wt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},a.targets=function(){return this._targets},a.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},a.resetTo=function(e,t,n,r,i){Lt||Rt.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||ln(this,a),o=this._ease(a/this._dur),un(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Be(this,0),this.parent||ke(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},a.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Tt(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,sn&&sn.vars.overwrite!==!0)._first||Tt(this),this.parent&&n!==this.timeline.totalDuration()&&Ye(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?st(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Oe(r,i))return t===`all`&&(this._pt=0),Tt(this);for(s=this._op=this._op||[],t!==`all`&&(_(t)&&(d={},me(t,function(e){return d[e]=1}),t=d),t=dn(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Ae(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Tt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return $e(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return $e(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return P.killTweensOf(e,t,n)},t}(en),Se(gn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),me(`staggerTo,staggerFrom,staggerFromTo`,function(e){gn[e]=function(){var t=new tn,n=it.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}}),_n=function(e,t,n){return e[t]=n},vn=function(e,t,n){return e[t](n)},yn=function(e,t,n,r){return e[t](r.fp,n)},bn=function(e,t,n){return e.setAttribute(t,n)},xn=function(e,t){return v(e[t])?vn:b(e[t])&&e.setAttribute?bn:_n},Sn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Cn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Tn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},En=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Dn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ae(this,t,`_pt`):t.dep||(n=1),t=r;return!n},On=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},kn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},An=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Sn,this.d=o||this,this.set=s||_n,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=On,this.m=e,this.mt=n,this.tween=t},e}(),me(de+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,function(e){return H[e]=1}),L.TweenMax=L.TweenLite=gn,L.TimelineLite=L.TimelineMax=tn,P=new tn({sortChildren:!1,defaults:a,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),i.stringFilter=It,jn=[],Mn={},Nn=[],Pn=0,Fn=0,In=function(e){return(Mn[e]||Nn).map(function(e){return e()})},Ln=function(){var e=Date.now(),t=[];e-Pn>2&&(In(`matchMediaInit`),jn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=F.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),In(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Pn=e,In(`matchMedia`))},Rn=function(){function e(e,t){this.selector=t&&ct(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Fn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){v(e)&&(n=t,t=e,e=v);var r=this,i=function(){var e=c,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=ct(n)),c=r,a=t.apply(r,arguments),v(a)&&r._r.push(a),c=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===v?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=c;c=null,e(this),c=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof gn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof tn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof gn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=jn.length;r--;)jn[r].id===this.id&&jn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),zn=function(){function e(e){this.contexts=[],this.scope=e,c&&c.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){x(e)||(e={matches:e});var r=new Rn(0,n||this.scope),i=r.conditions={},a,o,s;for(o in c&&!r.selector&&(r.selector=c.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=F.matchMedia(e[o]),a&&(jn.indexOf(r)<0&&jn.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Ln):a.addEventListener(`change`,Ln)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Bn={registerPlugin:function(){[...arguments].forEach(function(e){return Ot(e)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return P.getTweensOf(e,t)},getProperty:function(e,t,n,r){_(e)&&(e=st(e)[0]);var i=pe(e||{}).get,a=n?xe:be;return n===`native`&&(n=``),e&&(t?a((G[t]&&G[t].get||i)(e,t,n,r)):function(t,n,r){return a((G[t]&&G[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=st(e),e.length>1){var r=e.map(function(e){return Wn.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=G[t],o=pe(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Et._pt=0,r.init(e,n?t+n:t,Et,0,[e]),r.render(1,r),Et._pt&&Tn(1,Et)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Wn.to(e,we((r={},r[t]=`+=0.1`,r.paused=!0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return P.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jt(e.ease,a.ease)),Te(a,e||{})},config:function(e){return Te(i,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!G[e]&&!L[e]&&B(t+` effect requires `+e+` plugin.`)}),ce[t]=function(e,t,r){return n(st(e),Se(t||{},i),r)},a&&(tn.prototype[t]=function(e,n,r){return this.add(ce[t](e,x(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Bt[e]=Jt(t)},parseEase:function(e,t){return arguments.length?Jt(e,t):Bt},getById:function(e){return P.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new tn(e),r,i;for(n.smoothChildTiming=S(e.smoothChildTiming),P.remove(n),n._dp=0,n._time=n._tTime=P._time,r=P._first;r;)i=r._next,(t||!(!r._dur&&r instanceof gn&&r.vars.onComplete===r._targets[0]))&&He(n,r,r._start-r._delay),r=i;return He(P,n,0),n},context:function(e,t){return e?new Rn(e,t):c},matchMedia:function(e){return new zn(e)},matchMediaRefresh:function(){return jn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ln()},addEventListener:function(e,t){var n=Mn[e]||(Mn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Mn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:vt,wrapYoyo:yt,distribute:ut,random:pt,snap:ft,normalize:gt,getUnit:nt,clamp:rt,splitColor:J,toArray:st,selector:ct,mapRange:xt,pipe:mt,unitize:ht,interpolate:St,shuffle:lt},install:z,effects:ce,ticker:Rt,updateRoot:tn.updateRoot,plugins:G,globalTimeline:P,core:{PropTween:An,globals:re,Tween:gn,Timeline:tn,Animation:en,getCache:pe,_removeLinkedListItem:Ae,reverting:function(){return s},context:function(e){return e&&c&&(c.data.push(e),e._ctx=c),c},suppressOverwrites:function(e){return o=e}}},me(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Bn[e]=gn[e]}),Rt.add(tn.updateRoot),Et=Bn.to({},{duration:0}),Vn=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Hn=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Vn(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Un=function(e,t){return{name:e,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(_(n)&&(r={},me(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Hn(e,n)}}}},Wn=Bn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)s?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Un(`roundProps`,dt),Un(`modifiers`),Un(`snap`,ft))||Bn,gn.version=tn.version=Wn.version=`3.12.5`,te=1,C()&&zt(),Bt.Power0,Bt.Power1,Bt.Power2,Bt.Power3,Bt.Power4,Bt.Linear,Bt.Quad,Bt.Cubic,Bt.Quart,Bt.Quint,Bt.Strong,Bt.Elastic,Bt.Back,Bt.SteppedEase,Bt.Bounce,Bt.Sine,Bt.Expo,Bt.Circ})),Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi=e((()=>{Gn(),$n=function(){return typeof window<`u`},er={},tr=180/Math.PI,nr=Math.PI/180,rr=Math.atan2,ir=1e8,ar=/([A-Z])/g,or=/(left|right|width|margin|padding|x)/i,sr=/[\s,\(]\S/,cr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},lr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ur=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},hr=function(e,t,n){return e.style[t]=n},gr=function(e,t,n){return e.style.setProperty(t,n)},_r=function(e,t,n){return e._gsap[t]=n},vr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},br=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},xr=`transform`,Sr=xr+`Origin`,Cr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in er&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=cr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Hr(i,e)}):this.tfm[t]=o.x?o[t]:Hr(i,t),t===Sr&&(this.tfm.zOrigin=o.zOrigin);else return cr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(xr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Sr,n,``)),t=xr}(a||n)&&this.props.push(t,n,a[t])},wr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Tr=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(ar,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Qn(),(!i||!i.isStart)&&!n[xr]&&(wr(n),r.zOrigin&&n[Sr]&&(n[Sr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Er=function(e,t){var n={target:e,props:[],revert:Tr,save:Cr};return e._gsap||Wn.core.getCache(e),t&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Or=function(e,t){var n=qn.createElementNS?qn.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):qn.createElement(e);return n&&n.style?n:qn.createElement(e)},kr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(ar,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,jr(n)||n,1)||``},Ar=`O,Moz,ms,Ms,Webkit`.split(`,`),jr=function(e,t,n){var r=(t||Xn).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Ar[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Ar[i]:``)+e},Mr=function(){$n()&&window.document&&(Kn=window,qn=Kn.document,Jn=qn.documentElement,Xn=Or(`div`)||{style:{}},Or(`div`),xr=jr(xr),Sr=xr+`Origin`,Xn.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Dr=!!jr(`perspective`),Qn=Wn.core.reverting,Yn=1)},Nr=function e(t){var n=Or(`svg`,this.ownerSVGElement&&this.ownerSVGElement.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=this.parentNode,i=this.nextSibling,a=this.style.cssText,o;if(Jn.appendChild(n),n.appendChild(this),this.style.display=`block`,t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),Jn.removeChild(n),this.style.cssText=a,o},Pr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Fr=function(e){var t;try{t=e.getBBox()}catch{t=Nr.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Nr||(t=Nr.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pr(e,[`x`,`cx`,`x1`])||0,y:+Pr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Ir=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Fr(e))},Lr=function(e,t){if(t){var n=e.style,r;t in er&&t!==Sr&&(t=xr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(ar,`-$1`).toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,r,i,a){var o=new An(e._pt,t,n,0,1,a?mr:pr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},zr={deg:1,rad:1,turn:1},Br={grid:1,flex:1},Vr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Xn.style,c=or.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||zr[i]||zr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Ir(t),(p||o===`%`)&&(er[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],q(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===qn||!h.appendChild)&&(h=qn.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Rt.time&&!g.uncache)return q(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Lr(t,n)}else(p||o===`%`)&&!Br[kr(h,`display`)]&&(s.position=kr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Xn),m=Xn[u],h.removeChild(Xn),s.position=`absolute`;return c&&p&&(g=pe(h),g.time=Rt.time,g.width=h[u]),q(f?m*a/d:m&&a?d/m*a:0)},Hr=function(e,t,n,r){var i;return Yn||Mr(),t in cr&&t!==`transform`&&(t=cr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),er[t]&&t!==`transform`?(i=ei(e,r),i=t===`transformOrigin`?i.svg?i.origin:ti(kr(e,Sr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=qr[t]&&qr[t](e,t,n)||kr(e,t)||K(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Vr(e,t,i,n)+n:i},Ur=function(e,t,n,r){if(!n||n===`none`){var a=jr(t,e,1),o=a&&kr(e,a,1);o&&o!==n?(t=a,n=o):t===`borderColor`&&(n=kr(e,`borderTopColor`))}var s=new An(this._pt,e.style,t,0,1,wn),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b,x;if(s.b=n,s.e=r,n+=``,r+=``,r===`auto`&&(h=e.style[t],e.style[t]=r,r=kr(e,t)||r,h?e.style[t]=h:Lr(e,t)),u=[n,r],It(u),n=u[0],r=u[1],f=n.match(k)||[],x=r.match(k)||[],x.length){for(;d=k.exec(r);)g=d[0],v=r.substring(c,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[l++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=ge(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),c=k.lastIndex-y.length,y||(y=y||i.units[t]||b,c===r.length&&(r+=y,s.e+=y)),b!==y&&(p=Vr(e,t,h,y)||0),s._pt={_next:s._pt,p:v||l===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});s.c=c<r.length?r.substring(c,r.length):``}else s.r=t===`display`&&r===`none`?mr:pr;return j.test(r)&&(s.e=0),this._pt=s,s},Wr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Gr=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Wr[n]||n,t[1]=Wr[r]||r,t.join(` `)},Kr=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],er[o]&&(s=1,o=o===`transformOrigin`?Sr:xr),Lr(n,o);s&&(Lr(n,xr),a&&(a.svg&&n.removeAttribute(`transform`),ei(n,1),a.uncache=1,wr(r)))}},qr={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new An(e._pt,t,n,0,0,Kr);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Jr=[1,0,0,1,0,0],Yr={},Xr=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Zr=function(e){var t=kr(e,xr);return Xr(t)?Jr:t.substr(7).match(O).map(q)},Qr=function(e,t){var n=e._gsap||pe(e),r=e.style,i=Zr(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Jr:i):(i===Jr&&!e.offsetParent&&e!==Jn&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Jn.appendChild(e)),i=Zr(e),s?r.display=s:Lr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Jn.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},$r=function(e,t,n,r,i,a){var o=e._gsap,s=i||Qr(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Jr&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Fr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Sr]=`0px 0px`,a&&(Rr(a,o,`xOrigin`,c,y),Rr(a,o,`yOrigin`,l,b),Rr(a,o,`xOffset`,u,o.xOffset),Rr(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ei=function(e,t){var n=e._gsap||new $t(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,o=`px`,s=`deg`,c=getComputedStyle(e),l=kr(e,Sr)||`0`,u=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,L,R,te,z;return n.svg=!!(e.getCTM&&Ir(e)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(r[xr]=(c.translate===`none`?``:`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(c.rotate===`none`?``:`rotate(`+c.rotate+`) `)+(c.scale===`none`?``:`scale(`+c.scale.split(` `).join(`,`)+`) `)+(c[xr]===`none`?``:c[xr])),r.scale=r.rotate=r.translate=`none`),C=Qr(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),l=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),$r(e,N||l,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==Jr&&(D=C[0],O=C[1],k=C[2],A=C[3],u=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?rr(O,D)*tr:0,v=k||A?rr(k,A)*tr+h:0,v&&(m*=Math.abs(Math.cos(v*nr))),n.svg&&(u-=x-(x*D+S*k),d-=S-(x*O+S*A))):(z=C[6],R=C[7],I=C[8],ee=C[9],L=C[10],te=C[11],u=C[12],d=C[13],f=C[14],w=rr(z,L),g=w*tr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+ee*E,F=z*T+L*E,I=j*-E+I*T,ee=M*-E+ee*T,L=z*-E+L*T,te=R*-E+te*T,j=N,M=P,z=F),w=rr(-k,L),_=w*tr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-ee*E,F=k*T-L*E,te=A*E+te*T,D=N,O=P,k=F),w=rr(O,D),h=w*tr,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=q(Math.sqrt(D*D+O*O+k*k)),m=q(Math.sqrt(M*M+z*z)),w=rr(j,M),v=Math.abs(w)>2e-4?w*tr:0,b=te?1/(te<0?-te:te):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Xr(kr(e,xr)),N&&e.setAttribute(`transform`,N))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=q(p),n.scaleY=q(m),n.rotation=q(h)+s,n.rotationX=q(g)+s,n.rotationY=q(_)+s,n.skewX=v+s,n.skewY=y+s,n.transformPerspective=b+o,(n.zOrigin=parseFloat(l.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Sr]=ti(l)),n.xOffset=n.yOffset=0,n.force3D=i.force3D,n.renderTransform=n.svg?ci:Dr?si:ri,n.uncache=0,n},ti=function(e){return(e=e.split(` `))[0]+` `+e[1]},ni=function(e,t,n){var r=nt(t);return q(parseFloat(t)+parseFloat(Vr(e,`x`,n+`px`,r)))+r},ri=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,si(e,t)},ii=`0deg`,ai=`0px`,oi=`) `,si=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==ii||l!==ii)){var x=parseFloat(l)*nr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*nr,w=Math.cos(x),a=ni(_,a,S*w*-v),o=ni(_,o,-Math.sin(x)*-v),s=ni(_,s,C*w*-v+v)}h!==ai&&(y+=`perspective(`+h+oi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ai||o!==ai||s!==ai)&&(y+=s!==ai||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+oi),c!==ii&&(y+=`rotate(`+c+oi),l!==ii&&(y+=`rotateY(`+l+oi),u!==ii&&(y+=`rotateX(`+u+oi),(d!==ii||f!==ii)&&(y+=`skew(`+d+`, `+f+oi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+oi),_.style[xr]=y||`translate(0, 0)`},ci=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=nr,c*=nr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=nr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=q(b),x=q(x),S=q(S),C=q(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Vr(f,`x`,a,`px`),y=Vr(f,`y`,o,`px`)),(p||m||h||g)&&(v=q(v+p-(p*b+m*S)+h),y=q(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=q(v+r/100*w.width),y=q(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[xr]=w)},li=function(e,t,n,r,i){var a=360,o=_(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?tr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*ir)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*ir)%a-~~(s/a)*a)),e._pt=u=new An(e._pt,t,n,r,s,ur),u.e=c,u.u=`deg`,e._props.push(n),u},ui=function(e,t){for(var n in t)e[n]=t[n];return e},di=function(e,t,n){var r=ui({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[xr]=t,o=ei(n,1),Lr(n,xr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[xr],a[xr]=t,o=ei(n,1),a[xr]=c),er)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=nt(c),p=nt(l),u=f===p?parseFloat(c):Vr(n,s,c,p),d=parseFloat(l),e._pt=new An(e._pt,o,s,u,d-u,lr),e._pt.u=p||0,e._props.push(s));ui(o,r)},me(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});qr[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Hr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}}),fi={name:`css`,register:Mr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var o=this._props,s=e.style,c=n.vars.startAt,l,u,d,f,p,m,h,g,v,y,b,x,S,C,w,T;for(h in Yn||Mr(),this.styles=this.styles||Er(e),T=this.styles.props,this.tween=n,t)if(h!==`autoRound`&&(u=t[h],!(G[h]&&on(h,t,n,r,e,a)))){if(p=typeof u,m=qr[h],p===`function`&&(u=u.call(n,r,e,a),p=typeof u),p===`string`&&~u.indexOf(`random(`)&&(u=bt(u)),m)m(this,e,h,u,n)&&(w=1);else if(h.substr(0,2)===`--`)l=(getComputedStyle(e).getPropertyValue(h)+``).trim(),u+=``,Pt.lastIndex=0,Pt.test(l)||(g=nt(l),v=nt(u)),v?g!==v&&(l=Vr(e,h,l,v)+v):g&&(u+=g),this.add(s,`setProperty`,l,u,r,a,0,0,h),o.push(h),T.push(h,0,s[h]);else if(p!==`undefined`){if(c&&h in c?(l=typeof c[h]==`function`?c[h].call(n,r,e,a):c[h],_(l)&&~l.indexOf(`random(`)&&(l=bt(l)),nt(l+``)||l===`auto`||(l+=i.units[h]||nt(Hr(e,h))||``),(l+``).charAt(1)===`=`&&(l=Hr(e,h))):l=Hr(e,h),f=parseFloat(l),y=p===`string`&&u.charAt(1)===`=`&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),h in cr&&(h===`autoAlpha`&&(f===1&&Hr(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,s.visibility),Rr(this,s,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),h!==`scale`&&h!==`transform`&&(h=cr[h],~h.indexOf(`,`)&&(h=h.split(`,`)[0]))),b=h in er,b){if(this.styles.save(h),x||(S=e._gsap,S.renderTransform&&!t.parseTransform||ei(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new An(this._pt,s,xr,0,1,S.renderTransform,S,0,-1),x.dep=1),h===`scale`)this._pt=new An(this._pt,S,`scaleY`,S.scaleY,(y?ge(S.scaleY,y+d):d)-S.scaleY||0,lr),this._pt.u=0,o.push(`scaleY`,h),h+=`X`;else if(h===`transformOrigin`){T.push(Sr,0,s[Sr]),u=Gr(u),S.svg?$r(e,u,0,C,0,this):(v=parseFloat(u.split(` `)[2])||0,v!==S.zOrigin&&Rr(this,S,`zOrigin`,S.zOrigin,v),Rr(this,s,h,ti(l),ti(u)));continue}else if(h===`svgOrigin`){$r(e,u,1,C,0,this);continue}else if(h in Yr){li(this,S,h,f,y?ge(f,y+u):u);continue}else if(h===`smoothOrigin`){Rr(this,S,`smooth`,S.smooth,u);continue}else if(h===`force3D`){S[h]=u;continue}else if(h===`transform`){di(this,u,e);continue}}else h in s||(h=jr(h)||h);if(b||(d||d===0)&&(f||f===0)&&!sr.test(u)&&h in s)g=(l+``).substr((f+``).length),d||=0,v=nt(u)||(h in i.units?i.units[h]:g),g!==v&&(f=Vr(e,h,l,v)),this._pt=new An(this._pt,b?S:s,h,f,(y?ge(f,y+d):d)-f,!b&&(v===`px`||h===`zIndex`)&&t.autoRound!==!1?fr:lr),this._pt.u=v||0,g!==v&&v!==`%`&&(this._pt.b=l,this._pt.r=dr);else if(h in s)Ur.call(this,e,h,l,y?y+u:u);else if(h in e)this.add(e,h,l||e[h],y?y+u:u,r,a);else if(h!==`parseTransform`){ne(h,u);continue}b||(h in s?T.push(h,0,s[h]):T.push(h,1,l||e[h])),o.push(h)}}w&&kn(this)},render:function(e,t){if(t.tween._time||!Qn())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hr,aliases:cr,getSetter:function(e,t,n){var r=cr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in er&&t!==Sr&&(e._gsap.x||Hr(e,`x`))?n&&Zn===n?t===`scale`?vr:_r:(Zn=n||{})&&(t===`scale`?yr:br):e.style&&!b(e.style[t])?hr:~t.indexOf(`-`)?gr:xn(e,t)},core:{_removeProperty:Lr,_getMatrix:Qr}},Wn.utils.checkPrefix=jr,Wn.core.getStyleSaver=Er,(function(e,t,n,r){var a=me(e+`,`+t+`,`+n,function(e){er[e]=1});me(t,function(e){i.units[e]=`deg`,Yr[e]=1}),cr[a[13]]=e+`,`+t,me(r,function(e){var t=e.split(`:`);cr[t[1]]=a[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),me(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){i.units[e]=`px`}),Wn.registerPlugin(fi)})),mi,hi=e((()=>{Gn(),pi(),mi=Wn.registerPlugin(fi)||Wn,mi.core.Tween}));function gi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _i(e,t,n){return t&&gi(e.prototype,t),n&&gi(e,n),e}var vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra=e((()=>{ji=function(){return vi||typeof window<`u`&&(vi=window.gsap)&&vi.registerPlugin&&vi},Mi=1,Ni=[],Pi=[],Fi=[],Ii=Date.now,Li=function(e,t){return t},Ri=function(){var e=Ei.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Pi),r.push.apply(r,Fi),Pi=n,Fi=r,Li=function(e,n){return t[e](n)}},zi=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},Bi=function(e){return!!~Di.indexOf(e)},Vi=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Hi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ui=`scrollLeft`,Wi=`scrollTop`,Gi=function(){return Oi&&Oi.isPressed||Pi.cache++},Ki=function(e,t){var n=function n(r){if(r||r===0){Mi&&(bi.history.scrollRestoration=`manual`);var i=Oi&&Oi.isPressed;r=n.v=Math.round(r)||(Oi&&Oi.iOS?1:0),e(r),n.cacheID=Pi.cache,i&&Li(`ss`,r)}else(t||Pi.cache!==n.cacheID||Li(`ref`))&&(n.cacheID=Pi.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},qi={s:Ui,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Ki(function(e){return arguments.length?bi.scrollTo(e,Ji.sc()):bi.pageXOffset||xi[Ui]||Si[Ui]||Ci[Ui]||0})},Ji={s:Wi,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:qi,sc:Ki(function(e){return arguments.length?bi.scrollTo(qi.sc(),e):bi.pageYOffset||xi[Wi]||Si[Wi]||Ci[Wi]||0})},Yi=function(e,t){return(t&&t._ctx&&t._ctx.selector||vi.utils.toArray)(e)[0]||(typeof e==`string`&&vi.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Xi=function(e,t){var n=t.s,r=t.sc;Bi(e)&&(e=xi.scrollingElement||Si);var i=Pi.indexOf(e),a=r===Ji.sc?1:2;!~i&&(i=Pi.push(e)-1),Pi[i+a]||Vi(e,`scroll`,Gi);var o=Pi[i+a],s=o||(Pi[i+a]=Ki(zi(e,n),!0)||(Bi(e)?r:Ki(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=vi.getProperty(e,`scrollBehavior`)===`smooth`),s},Zi=function(e,t,n){var r=e,i=e,a=Ii(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Ii();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Ii();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},Qi=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},$i=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ea=function(){Ei=vi.core.globals().ScrollTrigger,Ei&&Ei.core&&Ri()},ta=function(e){return vi=e||ji(),!yi&&vi&&typeof document<`u`&&document.body&&(bi=window,xi=document,Si=xi.documentElement,Ci=xi.body,Di=[bi,xi,Si,Ci],vi.utils.clamp,Ai=vi.core.context||function(){},Ti=`onpointerenter`in Ci?`pointer`:`mouse`,wi=na.isTouch=bi.matchMedia&&bi.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=na.eventTypes=(`ontouchstart`in Si?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Si?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Mi=0},500),ea(),yi=1),yi},qi.op=Ji,Pi.cache=0,na=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){yi||ta(vi)||console.warn(`Please gsap.registerPlugin(Observer)`),Ei||ea();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,I=e.onDisable,ee=e.onClick,L=e.scrollSpeed,R=e.capture,te=e.allowClicks,z=e.lockAxis,ne=e.onLockAxis;this.target=i=Yi(i)||Si,this.vars=e,u&&=vi.utils.toArray(u),t||=1e-9,n||=0,d||=1,L||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(bi.getComputedStyle(Ci).lineHeight)||22;var B,re,ie,ae,V,oe,H,U=this,W=0,se=0,G=e.passive||!s,ce=Xi(i,qi),le=Xi(i,Ji),ue=ce(),de=le(),fe=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&ki[0]===`pointerdown`,pe=Bi(i),K=i.ownerDocument||xi,me=[0,0,0],q=[0,0,0],he=0,ge=function(){return he=Ii()},_e=function(e,t){return(U.event=e)&&u&&~u.indexOf(e.target)||t&&fe&&e.pointerType!==`touch`||A&&A(e,t)},ve=function(){U._vx.reset(),U._vy.reset(),re.pause(),c&&c(U)},ye=function(){var e=U.deltaX=$i(me),n=U.deltaY=$i(q),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(U,e,n,me,q),r&&(v&&U.deltaX>0&&v(U),y&&U.deltaX<0&&y(U),S&&S(U),T&&U.deltaX<0!=W<0&&T(U),W=U.deltaX,me[0]=me[1]=me[2]=0),i&&(x&&U.deltaY>0&&x(U),b&&U.deltaY<0&&b(U),C&&C(U),E&&U.deltaY<0!=se<0&&E(U),se=U.deltaY,q[0]=q[1]=q[2]=0),(ae||ie)&&(k&&k(U),ie&&=(h(U),!1),ae=!1),oe&&!(oe=!1)&&ne&&ne(U),V&&=(P(U),!1),B=0},be=function(e,t,n){me[n]+=e,q[n]+=t,U._vx.update(e),U._vy.update(t),o?B||=requestAnimationFrame(ye):ye()},xe=function(e,t){z&&!H&&(U.axis=H=Math.abs(e)>Math.abs(t)?`x`:`y`,oe=!0),H!==`y`&&(me[2]+=e,U._vx.update(e,!0)),H!==`x`&&(q[2]+=t,U._vy.update(t,!0)),o?B||=requestAnimationFrame(ye):ye()},Se=function(e){if(!_e(e,1)){e=Qi(e,s);var t=e.clientX,r=e.clientY,i=t-U.x,a=r-U.y,o=U.isDragging;U.x=t,U.y=r,(o||Math.abs(U.startX-t)>=n||Math.abs(U.startY-r)>=n)&&(h&&(ie=!0),o||(U.isDragging=!0),xe(i,a),o||p&&p(U))}},Ce=U.onPress=function(e){_e(e,1)||e&&e.button||(U.axis=H=null,re.pause(),U.isPressed=!0,e=Qi(e),W=se=0,U.startX=U.x=e.clientX,U.startY=U.y=e.clientY,U._vx.reset(),U._vy.reset(),Vi(j?i:K,ki[1],Se,G,!0),U.deltaX=U.deltaY=0,g&&g(U))},we=U.onRelease=function(e){if(!_e(e,1)){Hi(j?i:K,ki[1],Se,!0);var t=!isNaN(U.y-U.startY),n=U.isDragging,r=n&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),a=Qi(e);!r&&t&&(U._vx.reset(),U._vy.reset(),s&&te&&vi.delayedCall(.08,function(){if(Ii()-he>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(K.createEvent){var t=K.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,bi,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,c&&n&&!j&&re.restart(!0),m&&n&&m(U),_&&_(U,r)}},Te=function(e){return e.touches&&e.touches.length>1&&(U.isGesturing=!0)&&M(e,U.isDragging)},Ee=function(){return(U.isGesturing=!1)||N(U)},De=function(e){if(!_e(e)){var t=ce(),n=le();be((t-ue)*L,(n-de)*L,1),ue=t,de=n,c&&re.restart(!0)}},Oe=function(e){if(!_e(e)){e=Qi(e,s),P&&(V=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?bi.innerHeight:1)*d;be(e.deltaX*t,e.deltaY*t,0),c&&!j&&re.restart(!0)}},ke=function(e){if(!_e(e)){var t=e.clientX,n=e.clientY,r=t-U.x,i=n-U.y;U.x=t,U.y=n,ae=!0,c&&re.restart(!0),(r||i)&&xe(r,i)}},Ae=function(e){U.event=e,D(U)},je=function(e){U.event=e,O(U)},Me=function(e){return _e(e)||Qi(e,s)&&ee(U)};re=U._dc=vi.delayedCall(l||.25,ve).pause(),U.deltaX=U.deltaY=0,U._vx=Zi(0,50,!0),U._vy=Zi(0,50,!0),U.scrollX=ce,U.scrollY=le,U.isDragging=U.isGesturing=U.isPressed=!1,Ai(this),U.enable=function(e){return U.isEnabled||(Vi(pe?K:i,`scroll`,Gi),r.indexOf(`scroll`)>=0&&Vi(pe?K:i,`scroll`,De,G,R),r.indexOf(`wheel`)>=0&&Vi(i,`wheel`,Oe,G,R),(r.indexOf(`touch`)>=0&&wi||r.indexOf(`pointer`)>=0)&&(Vi(i,ki[0],Ce,G,R),Vi(K,ki[2],we),Vi(K,ki[3],we),te&&Vi(i,`click`,ge,!0,!0),ee&&Vi(i,`click`,Me),M&&Vi(K,`gesturestart`,Te),N&&Vi(K,`gestureend`,Ee),D&&Vi(i,Ti+`enter`,Ae),O&&Vi(i,Ti+`leave`,je),k&&Vi(i,Ti+`move`,ke)),U.isEnabled=!0,e&&e.type&&Ce(e),F&&F(U)),U},U.disable=function(){U.isEnabled&&(Ni.filter(function(e){return e!==U&&Bi(e.target)}).length||Hi(pe?K:i,`scroll`,Gi),U.isPressed&&(U._vx.reset(),U._vy.reset(),Hi(j?i:K,ki[1],Se,!0)),Hi(pe?K:i,`scroll`,De,R),Hi(i,`wheel`,Oe,R),Hi(i,ki[0],Ce,R),Hi(K,ki[2],we),Hi(K,ki[3],we),Hi(i,`click`,ge,!0),Hi(i,`click`,Me),Hi(K,`gesturestart`,Te),Hi(K,`gestureend`,Ee),Hi(i,Ti+`enter`,Ae),Hi(i,Ti+`leave`,je),Hi(i,Ti+`move`,ke),U.isEnabled=U.isPressed=U.isDragging=!1,I&&I(U))},U.kill=U.revert=function(){U.disable();var e=Ni.indexOf(U);e>=0&&Ni.splice(e,1),Oi===U&&(Oi=0)},Ni.push(U),j&&Bi(i)&&(Oi=U),U.enable(f)},_i(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}(),na.version=`3.12.5`,na.create=function(e){return new na(e)},na.register=ta,na.getAll=function(){return Ni.slice()},na.getById=function(e){return Ni.filter(function(t){return t.vars.id===e})[0]},ji()&&vi.registerPlugin(na)})),Y,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us=e((()=>{ra(),La=1,Ra=Date.now,za=Ra(),Ba=0,Va=0,Ha=function(e,t,n){var r=io(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},Ua=function(e,t){return t&&(!io(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Wa=function e(){return Va&&requestAnimationFrame(e)},Ga=function(){return ga=1},Ka=function(){return ga=0},qa=function(e){return e},Ja=function(e){return Math.round(e*1e5)/1e5||0},Ya=function(){return typeof window<`u`},Xa=function(){return Y||Ya()&&(Y=window.gsap)&&Y.registerPlugin&&Y},Za=function(e){return!!~la.indexOf(e)},Qa=function(e){return(e===`Height`?Na:aa[`inner`+e])||sa[`client`+e]||ca[`client`+e]},$a=function(e){return zi(e,`getBoundingClientRect`)||(Za(e)?function(){return Es.width=aa.innerWidth,Es.height=Na,Es}:function(){return Ao(e)})},eo=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=zi(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?Qa(i):e[`client`+i])||0}},to=function(e,t){return!t||~Fi.indexOf(e)?$a(e):function(){return Es}},no=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=zi(e,n))?a()-$a(e)()[i]:Za(e)?(sa[n]||ca[n])-Qa(r):e[n]-e[`offset`+r])},ro=function(e,t){for(var n=0;n<xa.length;n+=3)(!t||~t.indexOf(xa[n+1]))&&e(xa[n],xa[n+1],xa[n+2])},io=function(e){return typeof e==`string`},ao=function(e){return typeof e==`function`},oo=function(e){return typeof e==`number`},so=function(e){return typeof e==`object`},co=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},lo=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},uo=Math.abs,fo=`left`,po=`top`,mo=`right`,ho=`bottom`,go=`width`,_o=`height`,vo=`Right`,yo=`Left`,bo=`Top`,xo=`Bottom`,So=`padding`,Co=`margin`,wo=`Width`,To=`Height`,Eo=`px`,Do=function(e){return aa.getComputedStyle(e)},Oo=function(e){var t=Do(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},ko=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ao=function(e,t){var n=t&&Do(e)[_a]!==`matrix(1, 0, 0, 1, 0, 0)`&&Y.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},jo=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Mo=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},No=function(e){return function(t){return Y.utils.snap(Mo(e),t)}},Po=function(e){var t=Y.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Fo=function(e){return function(t,n){return Po(Mo(e))(t,n.direction)}},Io=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},Lo=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Ro=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},zo=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Bo={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Vo={toggleActions:`play`,anticipatePin:0},Ho={top:0,left:0,center:.5,bottom:1,right:1},Uo=function(e,t){if(io(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Ho?Ho[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Wo=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=oa.createElement(`div`),m=Za(n)||zi(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?ca:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Ji?mo:ho)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],Go(p,0,r,_),p},Go=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+wo]=1,i[`border`+o+wo]=0,i[n.p]=t+`px`,Y.set(e,i)},Ko=[],qo={},Yo=function(){return Ra()-Ba>34&&(Jo||=requestAnimationFrame(_s))},Xo=function(){(!Ta||!Ta.isPressed||Ta.startX>ca.clientWidth)&&(Pi.cache++,Ta?Jo||=requestAnimationFrame(_s):_s(),Ba||ns(`scrollStart`),Ba=Ra())},Zo=function(){Oa=aa.innerWidth,Da=aa.innerHeight},Qo=function(){Pi.cache++,!ha&&!wa&&!oa.fullscreenElement&&!oa.webkitFullscreenElement&&(!Ea||Oa!==aa.innerWidth||Math.abs(aa.innerHeight-Da)>aa.innerHeight*.25)&&ua.restart(!0)},$o={},es=[],ts=function e(){return Ro(Ns,`scrollEnd`,e)||ps(!0)},ns=function(e){return $o[e]&&$o[e].map(function(e){return e()})||es},rs=[],is=function(e){for(var t=0;t<rs.length;t+=5)(!e||rs[t+4]&&rs[t+4].query===e)&&(rs[t].style.cssText=rs[t+1],rs[t].getBBox&&rs[t].setAttribute(`transform`,rs[t+2]||``),rs[t+3].uncache=1)},as=function(e,t){var n;for(va=0;va<Ko.length;va++)n=Ko[va],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Pa=!0,t&&is(t),t||ns(`revert`)},os=function(e,t){Pi.cache++,(t||!ss)&&Pi.forEach(function(e){return ao(e)&&e.cacheID++&&(e.rec=0)}),io(e)&&(aa.history.scrollRestoration=ja=e)},cs=0,us=function(){if(ls!==cs){var e=ls=cs;requestAnimationFrame(function(){return e===cs&&ps(!0)})}},ds=function(){ca.appendChild(Ma),Na=!Ta&&Ma.offsetHeight||aa.innerHeight,ca.removeChild(Ma)},fs=function(e){return da(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},ps=function(e,t){if(Ba&&!e&&!Pa){Lo(Ns,`scrollEnd`,ts);return}ds(),ss=Ns.isRefreshing=!0,Pi.forEach(function(e){return ao(e)&&++e.cacheID&&(e.rec=e())});var n=ns(`refreshInit`);Sa&&Ns.sort(),t||as(),Pi.forEach(function(e){ao(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Ko.slice(0).forEach(function(e){return e.refresh()}),Pa=!1,Ko.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),Fa=1,fs(!0),Ko.forEach(function(e){var t=no(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),fs(!1),Fa=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),Pi.forEach(function(e){ao(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),os(ja,1),ua.pause(),cs++,ss=2,_s(2),Ko.forEach(function(e){return ao(e.vars.onRefresh)&&e.vars.onRefresh(e)}),ss=Ns.isRefreshing=!1,ns(`refresh`)},ms=0,hs=1,_s=function(e){if(e===2||!ss&&!Pa){Ns.isUpdating=!0,gs&&gs.update(0);var t=Ko.length,n=Ra(),r=n-za>=50,i=t&&Ko[0].scroll();if(hs=ms>i?-1:1,ss||(ms=i),r&&(Ba&&!ga&&n-Ba>200&&(Ba=0,ns(`scrollEnd`)),pa=za,za=n),hs<0){for(va=t;va-->0;)Ko[va]&&Ko[va].update(0,r);hs=1}else for(va=0;va<t;va++)Ko[va]&&Ko[va].update(0,r);Ns.isUpdating=!1}Jo=0},vs=[fo,po,ho,mo,Co+xo,Co+vo,Co+bo,Co+yo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],ys=vs.concat([go,_o,`boxSizing`,`max`+wo,`max`+To,`position`,Co,So,So+bo,So+vo,So+xo,So+yo]),bs=function(e,t,n){Cs(n);var r=e._gsap;if(r.spacerIsNative)Cs(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},xs=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=vs.length,a=t.style,o=e.style,s;i--;)s=vs[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[ho]=o[mo]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[go]=jo(e,qi)+Eo,a[_o]=jo(e,Ji)+Eo,a[So]=o[Co]=o[po]=o[fo]=`0`,Cs(r),o[go]=o[`max`+wo]=n[go],o[_o]=o[`max`+To]=n[_o],o[So]=n[So],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ss=/([A-Z])/g,Cs=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||Y.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(Ss,`-$1`).toLowerCase())}},ws=function(e){for(var t=ys.length,n=e.style,r=[],i=0;i<t;i++)r.push(ys[i],n[ys[i]]);return r.t=e,r},Ts=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Es={left:0,top:0},Ds=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){ao(e)&&(e=e(s)),io(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?Uo(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),oo(e))f&&(e=Y.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&Go(o,n,r,!0);else{ao(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Yi(t,s)||ca,y=Ao(_)||{},(!y||!y.left&&!y.top)&&Do(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Ao(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=Uo(v[0],y[r.d]),x=Uo(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&Go(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,Go(a,C,r,w&&C>20||!w&&(u?Math.max(ca[h],sa[h]):a.parentNode[h])<=C+1),u&&(c=Ao(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Eo))}return f&&_&&(h=Ao(_),f.seek(d),g=Ao(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},Os=/(webkit|moz|length|cssText|inset)/i,ks=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===ca){for(a in e._stOrig=i.cssText,o=Do(e),o)!+a&&!Os.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;Y.core.getCache(e).uncache=1,t.appendChild(e)}},As=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=t,t}},js=function(e,t,n){var r={};r[t.p]=`+=`+n,Y.set(e,r)},Ms=function(e,t){var n=Xi(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=As(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){Pi.cache++,t.tween&&_s()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=Y.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},Lo(e,`wheel`,n.wheelHandler),Ns.isTouch&&Lo(e,`touchmove`,n.wheelHandler),i},Ns=function(){function e(t,n){ia||e.register(Y)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Aa(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Va){this.update=this.refresh=this.kill=qa;return}t=ko(io(t)||oo(t)||t.nodeType?{trigger:t}:t,Vo);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?qi:Ji,T=!l&&l!==0,E=Yi(t.scroller||aa),D=Y.core.getCache(E),O=Za(E),k=(`pinType`in t?t.pinType:zi(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Vo.markers,N=O?0:parseFloat(Do(E)[`border`+w.p2+wo])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},I=eo(E,O,w),ee=to(E,O),L=0,R=0,te=0,z=Xi(E,w),ne,B,re,ie,ae,V,oe,H,U,W,se,G,ce,le,ue,de,fe,pe,K,me,q,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):z,ie=z(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(Sa=1,t.refreshPriority===-9999&&(gs=P)),D.tweenScroll=D.tweenScroll||{top:Ms(E,Ji),left:Ms(E,qi)},P.tweenTo=ne=D.tweenScroll[w.p],P.scrubDuration=function(e){Ee=oo(e)&&e,Ee?Te?Te.duration(e):Te=Y.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ee,paused:!0,onComplete:function(){return h&&h(P)}}):(Te&&Te.progress(1).kill(),Te=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),Ce=0,o||=n.vars.id),v&&((!so(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in ca.style&&Y.set(O?[ca,sa]:E,{scrollBehavior:`auto`}),Pi.forEach(function(e){return ao(e)&&e.target===(O?oa.scrollingElement||sa:E)&&(e.smooth=!1)}),re=ao(v.snapTo)?v.snapTo:v.snapTo===`labels`?No(n):v.snapTo===`labelsDirectional`?Fo(n):v.directional===!1?Y.utils.snap(v.snapTo):function(e,t){return Po(v.snapTo)(e,Ra()-R<500?0:t.direction)},De=v.duration||{min:.1,max:2},De=so(De)?fa(De.min,De.max):fa(De,De),Oe=Y.delayedCall(v.delay||Ee/2||.1,function(){var e=z(),t=Ra()-R<500,r=ne.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!ga&&L!==e){var i=(e-V)/le,a=n&&!T?n.totalProgress():i,o=t?0:(a-we)/(Ra()-pa)*1e3||0,s=Y.utils.clamp(-i,1-i,uo(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=re(c,P),oo(l)||(l=c),u=Math.round(V+l*le),e<=oe&&e>=V&&u!==e){if(r&&!r._initted&&r.data<=uo(u-e))return;v.inertia===!1&&(s=l-i),ne(u,{duration:De(uo(Math.max(uo(c-a),uo(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:uo(u-e),onInterrupt:function(){return Oe.restart(!0)&&p&&p(P)},onComplete:function(){P.update(),L=z(),n&&(Te?Te.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Ce=we=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&m(P)}},e,s*le,u-e-s*le),f&&f(P,ne.tween)}}else P.isActive&&L!==e&&Oe.restart(!0)}).pause()),o&&(qo[o]=P),u=P.trigger=Yi(u||d!==!0&&d),Me=u&&u._gsap&&u._gsap.stRevert,Me&&=Me(P),d=d===!0?u:Yi(d),io(a)&&(a={targets:u,className:a}),d&&(f===!1||f===Co||(f=!f&&d.parentNode&&d.parentNode.style&&Do(d.parentNode).display===`flex`?!1:So),P.pin=d,B=Y.core.getCache(d),B.spacer?ue=B.pinState:(b&&(b=Yi(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),B.spacerIsNative=!!b,b&&(B.spacerState=ws(b))),B.spacer=pe=b||oa.createElement(`div`),pe.classList.add(`pin-spacer`),o&&pe.classList.add(`pin-spacer-`+o),B.pinState=ue=ws(d)),t.force3D!==!1&&Y.set(d,{force3D:!0}),P.spacer=pe=B.spacer,Se=Do(d),_e=Se[f+w.os2],me=Y.getProperty(d),q=Y.quickSetter(d,w.a,Eo),xs(d,pe,Se),fe=ws(d)),M){G=so(M)?ko(M,Bo):Bo,W=Wo(`scroller-start`,o,E,w,G,0),se=Wo(`scroller-end`,o,E,w,G,0,W),K=W[`offset`+w.op.d2];var Ne=Yi(zi(E,`content`)||E);H=this.markerStart=Wo(`start`,o,Ne,w,G,K,0,x),U=this.markerEnd=Wo(`end`,o,Ne,w,G,K,0,x),x&&(je=Y.quickSetter([H,U],w.a,Eo)),!k&&!(Fi.length&&zi(E,`fixedMarkers`)===!0)&&(Oo(O?ca:E),Y.set([W,se],{force3D:!0}),ye=Y.quickSetter(W,w.a,Eo),xe=Y.quickSetter(se,w.a,Eo))}if(x){var Pe=x.vars.onUpdate,Fe=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Pe&&Pe.apply(x,Fe||[])})}if(P.previous=function(){return Ko[Ko.indexOf(P)-1]},P.next=function(){return Ko[Ko.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=ha;r!==P.isReverted&&(r&&(ke=Math.max(z(),P.scroll.rec||0),te=P.progress,Ae=n&&n.progress()),H&&[H,U,W,se].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(ha=P,P.update(r)),d&&(!y||!P.isActive)&&(r?bs(d,pe,ue):xs(d,pe,Do(d),ve)),r||P.update(r),ha=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!ha&&P.enabled||i){if(d&&r&&Ba){Lo(e,`scrollEnd`,ts);return}!ss&&F&&F(P),ha=P,ne.tween&&!a&&(ne.tween.kill(),ne.tween=0),Te&&Te.pause(),p&&n&&n.revert({kill:!1}).invalidate(),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=I(),l=ee(),m=x?x.duration():no(E,w),h=le<=.01,g=0,_=o||0,v=so(a)?a.end:t.end,b=t.endTrigger||u,S=so(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&Yi(t.pinnedContainer,P),D=u&&Math.max(0,Ko.indexOf(P))||0,A=D,j,B,re,G,K,q,_e,ye,xe,Se,Ce,we,Ee;for(M&&so(a)&&(we=Y.getProperty(W,w.p),Ee=Y.getProperty(se,w.p));A--;)q=Ko[A],q.end||q.refresh(0,1)||(ha=P),_e=q.pin,_e&&(_e===u||_e===d||_e===C)&&!q.isReverted&&(Se||=[],Se.unshift(q),q.revert(!0,!0)),q!==Ko[A]&&(D--,A--);for(ao(S)&&(S=S(P)),S=Ha(S,`start`,P),V=Ds(S,u,s,w,z(),H,W,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),ao(v)&&(v=v(P)),io(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(io(S)?S.split(` `)[0]:``)+v:(g=Uo(v.substr(2),s),v=io(S)?S:(x?Y.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,V):V)+g,b=u)),v=Ha(v,`end`,P),oe=Math.max(V,Ds(v||(b?`100% 0`:m),b,s,w,z()+g,U,se,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)q=Ko[A],_e=q.pin,_e&&q.start-q._pinPush<=V&&!x&&q.end>0&&(j=q.end-(P._startClamp?Math.max(0,q.start):q.start),(_e===u&&q.start-q._pinPush<V||_e===C)&&isNaN(S)&&(g+=j*(1-q.progress)),_e===d&&(_+=j));if(V+=g,oe+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!ss&&(P._endClamp=oe||-.001,oe=Math.min(oe,no(E,w))),le=oe-V||(V-=.01)&&.001,h&&(te=Y.utils.clamp(0,1,Y.utils.normalize(V,oe,ke))),P._pinPush=_,H&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+z()),Y.set([H,U],j)),d&&!(Fa&&P.end>=no(E,w)))j=Do(d),G=w===Ji,re=z(),he=parseFloat(me(w.a))+_,!m&&oe>1&&(Ce=(O?oa.scrollingElement||sa:E).style,Ce={style:Ce,value:Ce[`overflow`+w.a.toUpperCase()]},O&&Do(ca)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Ce.style[`overflow`+w.a.toUpperCase()]=`scroll`)),xs(d,pe,j),fe=ws(d),B=Ao(d,!0),ye=k&&Xi(E,G?qi:Ji)(),f?(ve=[f+w.os2,le+_+Eo],ve.t=pe,A=f===So?jo(d,w)+le+_:0,A&&(ve.push(w.d,A+Eo),pe.style.flexBasis!==`auto`&&(pe.style.flexBasis=A+Eo)),Cs(ve),C&&Ko.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&z(ke)):(A=jo(d,w),A&&pe.style.flexBasis!==`auto`&&(pe.style.flexBasis=A+Eo)),k&&(K={top:B.top+(G?re-V:ye)+Eo,left:B.left+(G?ye:re-V)+Eo,boxSizing:`border-box`,position:`fixed`},K[go]=K[`max`+wo]=Math.ceil(B.width)+Eo,K[_o]=K[`max`+To]=Math.ceil(B.height)+Eo,K[Co]=K[Co+bo]=K[Co+vo]=K[Co+xo]=K[Co+yo]=`0`,K[So]=j[So],K[So+bo]=j[So+bo],K[So+vo]=j[So+vo],K[So+xo]=j[So+xo],K[So+yo]=j[So+yo],de=Ts(ue,K,y),ss&&z(0)),n?(xe=n._initted,Ca(1),n.render(n.duration(),!0,!0),ge=me(w.a)-he+le+_,be=Math.abs(le-ge)>1,k&&be&&de.splice(de.length-2,2),n.render(0,!0,!0),xe||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ca(0)):ge=le,Ce&&(Ce.value?Ce.style[`overflow`+w.a.toUpperCase()]=Ce.value:Ce.style.removeProperty(`overflow-`+w.a));else if(u&&z()&&!x)for(B=u.parentNode;B&&B!==ca;)B._pinOffset&&(V-=B._pinOffset,oe-=B._pinOffset),B=B.parentNode;Se&&Se.forEach(function(e){return e.revert(!1,!0)}),P.start=V,P.end=oe,ie=ae=ss?ke:z(),!x&&!ss&&(ie<ke&&z(ke),P.scroll.rec=0),P.revert(!1,!0),R=Ra(),Oe&&(L=-1,Oe.restart(!0)),ha=0,n&&T&&(n._initted||Ae)&&n.progress()!==Ae&&n.progress(Ae||0,!0).render(n.time(),!0,!0),(h||te!==P.progress||x||p)&&(n&&!T&&n.totalProgress(x&&V<-.001&&!te?Y.utils.normalize(V,oe,0):te,!0),P.progress=h||(ie-V)/le===te?0:te),d&&f&&(pe._pinOffset=Math.round(P.progress*ge)),Te&&Te.invalidate(),isNaN(we)||(we-=Y.getProperty(W,w.p),Ee-=Y.getProperty(se,w.p),js(W,w,we),js(H,w,we-(o||0)),js(se,w,Ee),js(U,w,Ee-(o||0))),h&&!ss&&P.update(),c&&!ss&&!ce&&(ce=!0,c(P),ce=!1)}},P.getVelocity=function(){return(z()-ae)/(Ra()-pa)*1e3||0},P.endAnimation=function(){co(P.callbackAnimation),n&&(Te?Te.progress(1):n.paused()?T||co(n,P.direction<0,1):co(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(V||P.refresh()||V)+n.labels[e]/n.duration()*le||0},P.getTrailing=function(e){var t=Ko.indexOf(P),n=P.direction>0?Ko.slice(0,t).reverse():Ko.slice(t+1);return(io(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=V:e.start>=oe})},P.update=function(e,t,r){if(!x||r||e){var o=ss===!0?ke:P.scroll(),c=e?0:(o-V)/le,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(ae=ie,ie=x?z():o,v&&(we=Ce,Ce=n&&!T?n.totalProgress():u)),m&&d&&!ha&&!La&&Ba&&(!u&&V<o+(o-ae)/(Ra()-pa)*m?u=1e-4:u===1&&oe>o+(o-ae)/(Ra()-pa)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!ha&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(ao(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(Te&&!ha&&!La?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo(`totalProgress`,u,n._tTime/n._tDur):(Te.vars.totalProgress=u,Te.invalidate().restart())):n&&n.totalProgress(u,!!(ha&&(R||e)))),d){if(e&&f&&(pe.style[f+w.os2]=_e),!k)q(Ja(he+ge*u));else if(O){if(N=!e&&u>p&&oe+1>o&&o+1>=no(E,w),y){if(!e&&(h||N)){var I=Ao(d,!0),ee=o-V;ks(d,ca,I.top+(w===Ji?ee:0)+Eo,I.left+(w===Ji?0:ee)+Eo)}else ks(d,pe)}Cs(h||N?de:fe),be&&u<1&&h||q(he+(u===1&&!N?ge:0))}}v&&!ne.tween&&!ha&&!La&&Oe.restart(!0),a&&(M||_&&u&&(u<1||!Ia))&&da(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!ha?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!Ia)&&(s&&M&&lo(P,s),A[b]&&lo(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&lo(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(oo(S)?S:2500)&&(co(P.callbackAnimation),Te?Te.progress(1):co(n,D===`reverse`?1:!u,1))):T&&i&&!ha&&i(P)}if(xe){var L=x?o/x.duration()*(x._caScrollDist||0):o;ye(L+ +!!W._isFlipped),xe(L)}je&&je(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,Lo(E,`resize`,Qo),O||Lo(E,`scroll`,Xo),F&&Lo(e,`refreshInit`,F),t!==!1&&(P.progress=te=0,ie=ae=L=z()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&ne?ne.tween:Te},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:Ua(e,n&&!!P._startClamp),end:Ua(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(ve&&e){var t=ve.indexOf(w.d)+1;ve[t]=parseFloat(ve[t])+e+Eo,ve[1]=parseFloat(ve[1])+e+Eo,Cs(ve)}},P.disable=function(t,n){if(P.enabled&&(t!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,n||Te&&Te.pause(),ke=0,B&&(B.uncache=1),F&&Ro(e,`refreshInit`,F),Oe&&(Oe.pause(),ne.tween&&ne.tween.kill()&&(ne.tween=0)),!O)){for(var r=Ko.length;r--;)if(Ko[r].scroller===E&&Ko[r]!==P)return;Ro(E,`resize`,Qo),O||Ro(E,`scroll`,Xo)}},P.kill=function(e,r){P.disable(e,r),Te&&!r&&Te.kill(),o&&delete qo[o];var i=Ko.indexOf(P);i>=0&&Ko.splice(i,1),i===va&&hs>0&&va--,i=0,Ko.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||ss||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),H&&[H,U,W,se].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),gs===P&&(gs=0),d&&(B&&(B.uncache=1),i=0,Ko.forEach(function(e){return e.pin===d&&i++}),i||(B.spacer=0)),t.onKill&&t.onKill(P)},Ko.push(P),P.enable(!1,!1),Me&&Me(P),n&&n.add&&!le){var Ie=P.update;P.update=function(){P.update=Ie,V||oe||P.refresh()},Y.delayedCall(.01,P.update),le=.01,V=oe=0}else P.refresh();d&&us()},e.register=function(t){return ia||=(Y=t||Xa(),Ya()&&window.document&&e.enable(),Va),ia},e.defaults=function(e){if(e)for(var t in e)Vo[t]=e[t];return Vo},e.disable=function(e,t){Va=0,Ko.forEach(function(n){return n[t?`kill`:`disable`](e)}),Ro(aa,`wheel`,Xo),Ro(oa,`scroll`,Xo),clearInterval(ma),Ro(oa,`touchcancel`,qa),Ro(ca,`touchstart`,qa),Io(Ro,oa,`pointerdown,touchstart,mousedown`,Ga),Io(Ro,oa,`pointerup,touchend,mouseup`,Ka),ua.kill(),ro(Ro);for(var n=0;n<Pi.length;n+=3)zo(Ro,Pi[n],Pi[n+1]),zo(Ro,Pi[n],Pi[n+2])},e.enable=function(){if(aa=window,oa=document,sa=oa.documentElement,ca=oa.body,Y&&(da=Y.utils.toArray,fa=Y.utils.clamp,Aa=Y.core.context||qa,Ca=Y.core.suppressOverwrites||qa,ja=aa.history.scrollRestoration||`auto`,ms=aa.pageYOffset,Y.core.globals(`ScrollTrigger`,e),ca)){Va=1,Ma=document.createElement(`div`),Ma.style.height=`100vh`,Ma.style.position=`absolute`,ds(),Wa(),na.register(Y),e.isTouch=na.isTouch,ka=na.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ea=na.isTouch===1,Lo(aa,`wheel`,Xo),la=[aa,oa,sa,ca],Y.matchMedia?(e.matchMedia=function(e){var t=Y.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},Y.addEventListener(`matchMediaInit`,function(){return as()}),Y.addEventListener(`matchMediaRevert`,function(){return is()}),Y.addEventListener(`matchMedia`,function(){ps(0,1),ns(`matchMedia`)}),Y.matchMedia(`(orientation: portrait)`,function(){return Zo(),Zo})):console.warn(`Requires GSAP 3.11.0 or later`),Zo(),Lo(oa,`scroll`,Xo);var t=ca.style,n=t.borderTopStyle,r=Y.core.Animation.prototype,i,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),t.borderTopStyle=`solid`,i=Ao(ca),Ji.m=Math.round(i.top+Ji.sc())||0,qi.m=Math.round(i.left+qi.sc())||0,n?t.borderTopStyle=n:t.removeProperty(`border-top-style`),ma=setInterval(Yo,250),Y.delayedCall(.5,function(){return La=0}),Lo(oa,`touchcancel`,qa),Lo(ca,`touchstart`,qa),Io(Lo,oa,`pointerdown,touchstart,mousedown`,Ga),Io(Lo,oa,`pointerup,touchend,mouseup`,Ka),_a=Y.utils.checkPrefix(`transform`),ys.push(_a),ia=Ra(),ua=Y.delayedCall(.2,ps).pause(),xa=[oa,`visibilitychange`,function(){var e=aa.innerWidth,t=aa.innerHeight;oa.hidden?(ya=e,ba=t):(ya!==e||ba!==t)&&Qo()},oa,`DOMContentLoaded`,ps,aa,`load`,ps,aa,`resize`,Qo],ro(Lo),Ko.forEach(function(e){return e.enable(0,1)}),a=0;a<Pi.length;a+=3)zo(Ro,Pi[a],Pi[a+1]),zo(Ro,Pi[a],Pi[a+2])}},e.config=function(t){`limitCallbacks`in t&&(Ia=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(ma)||(ma=n)&&setInterval(Yo,n),`ignoreMobileResize`in t&&(Ea=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(ro(Ro)||ro(Lo,t.autoRefreshEvents||`none`),wa=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Yi(e),r=Pi.indexOf(n),i=Za(n);~r&&Pi.splice(r,i?6:2),t&&(i?Fi.unshift(aa,t,ca,t,sa,t):Fi.unshift(n,t))},e.clearMatchMedia=function(e){Ko.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(io(e)?Yi(e):e).getBoundingClientRect(),i=r[n?go:_o]*t||0;return n?r.right-i>0&&r.left+i<aa.innerWidth:r.bottom-i>0&&r.top+i<aa.innerHeight},e.positionInViewport=function(e,t,n){io(e)&&(e=Yi(e));var r=e.getBoundingClientRect(),i=r[n?go:_o],a=t==null?i/2:t in Ho?Ho[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/aa.innerWidth:(r.top+a)/aa.innerHeight},e.killAll=function(e){if(Ko.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=$o.killAll||[];$o={},t.forEach(function(e){return e()})}},e}(),Ns.version=`3.12.5`,Ns.saveStyles=function(e){return e?da(e).forEach(function(e){if(e&&e.style){var t=rs.indexOf(e);t>=0&&rs.splice(t,5),rs.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),Y.core.getCache(e),Aa())}}):rs},Ns.revert=function(e,t){return as(!e,t)},Ns.create=function(e,t){return new Ns(e,t)},Ns.refresh=function(e){return e?Qo():(ia||Ns.register())&&ps(!0)},Ns.update=function(e){return++Pi.cache&&_s(e===!0?2:0)},Ns.clearScrollMemory=os,Ns.maxScroll=function(e,t){return no(e,t?qi:Ji)},Ns.getScrollFunc=function(e,t){return Xi(Yi(e),t?qi:Ji)},Ns.getById=function(e){return qo[e]},Ns.getAll=function(){return Ko.filter(function(e){return e.vars.id!==`ScrollSmoother`})},Ns.isScrolling=function(){return!!Ba},Ns.snapDirectional=Po,Ns.addEventListener=function(e,t){var n=$o[e]||($o[e]=[]);~n.indexOf(t)||n.push(t)},Ns.removeEventListener=function(e,t){var n=$o[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},Ns.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=Y.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&ao(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return ao(a)&&(a=a(),Lo(Ns,`refresh`,function(){return a=t.batchMax()})),da(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(Ns.create(t))}),n},Ps=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Fs=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(na.isTouch?` pinch-zoom`:``):`none`,t===sa&&e(ca,n)},Is={auto:1,scroll:1},Ls=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||Y.core.getCache(i),o=Ra(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==ca&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Is[(s=Do(i)).overflowY]||Is[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!Za(i)&&(Is[(s=Do(i)).overflowY]||Is[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Rs=function(e,t,n,r){return na.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Ls,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Lo(oa,na.eventTypes[0],Vs,!1,!0)},onDisable:function(){return Ro(oa,na.eventTypes[0],Vs,!0)}})},zs=/(input|label|select|textarea)/i,Vs=function(e){var t=zs.test(e.target.tagName);(t||Bs)&&(e._gsapAllow=!0,Bs=t)},Hs=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Yi(e.target)||sa,l=Y.core.globals().ScrollSmoother,u=l&&l.get(),d=ka&&(e.content&&Yi(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=Xi(c,Ji),p=Xi(c,qi),m=1,h=(na.isTouch&&aa.visualViewport?aa.visualViewport.scale*aa.visualViewport.width:aa.outerWidth)/aa.innerWidth,g=0,_=ao(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Rs(c,e.type,!0,i),x=function(){return y=!1},S=qa,C=qa,w=function(){s=no(c,Ji),C=fa(+!!ka,s),n&&(S=fa(0,no(c,qi))),v=cs},T=function(){d._gsap.y=Ja(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Ja(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Ja((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=Pi.cache,_s()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&Y.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return ka&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Ja((aa.visualViewport&&aa.visualViewport.scale||1)/h),D.pause(),e!==m&&Fs(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=cs},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{Pi.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Ps(p,i,o,no(c,qi)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Ps(f,i,o,no(c,Ji)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(ka&&D.vars.scrollY>=s||i>=s-1)&&Y.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Ra()-g>1e3&&(v=0,g=Ra())},e.onChange=function(e,t,r,i,a){if(cs!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&_s()},e.onEnable=function(){Fs(c,!n&&`x`),Ns.addEventListener(`refresh`,j),Lo(aa,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Fs(c,!0),Ro(aa,`resize`,j),Ns.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new na(e),o.iOS=ka,ka&&!f()&&f(1),ka&&Y.ticker.add(qa),A=o._dc,D=Y.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:As(f,f(),function(){return D.pause()})},onUpdate:_s,onComplete:A.vars.onComplete}),o},Ns.sort=function(e){return Ko.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})},Ns.observe=function(e){return new na(e)},Ns.normalizeScroll=function(e){if(e===void 0)return Ta;if(e===!0&&Ta)return Ta.enable();if(e===!1){Ta&&Ta.kill(),Ta=e;return}var t=e instanceof na?e:Hs(e);return Ta&&Ta.target===t.target&&Ta.kill(),Za(t.target)&&(Ta=t),t},Ns.core={_getVelocityProp:Zi,_inputObserver:Rs,_scrollers:Pi,_proxies:Fi,bridge:{ss:function(){Ba||ns(`scrollStart`),Ba=Ra()},ref:function(){return ha}}},Xa()&&Y.registerPlugin(Ns)}));function Ws(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yf[e&255]+yf[e>>8&255]+yf[e>>16&255]+yf[e>>24&255]+`-`+yf[t&255]+yf[t>>8&255]+`-`+yf[t>>16&15|64]+yf[t>>24&255]+`-`+yf[n&63|128]+yf[n>>8&255]+`-`+yf[n>>16&255]+yf[n>>24&255]+yf[r&255]+yf[r>>8&255]+yf[r>>16&255]+yf[r>>24&255]).toLowerCase()}function Gs(e,t,n){return Math.max(t,Math.min(n,e))}function Ks(e,t){return(e%t+t)%t}function qs(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Js(e,t,n){return e===t?0:(n-e)/(t-e)}function Ys(e,t,n){return(1-n)*e+n*t}function Xs(e,t,n,r){return Ys(e,t,1-Math.exp(-n*r))}function Zs(e,t=1){return t-Math.abs(Ks(e,t*2)-t)}function Qs(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function $s(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ec(e,t){return e+Math.floor(Math.random()*(t-e+1))}function tc(e,t){return e+Math.random()*(t-e)}function nc(e){return e*(.5-Math.random())}function rc(e){e!==void 0&&(bf=e);let t=bf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ic(e){return e*xf}function ac(e){return e*Sf}function oc(e){return!(e&e-1)&&e!==0}function sc(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function cc(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function lc(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function uc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function dc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}function fc(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pc(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function mc(){let e=pc(`canvas`);return e.style.display=`block`,e}function hc(e){e in Ef||(Ef[e]=!0,console.warn(e))}function gc(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function _c(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function vc(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Nf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}function yc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ap.fromArray(e,a);let o=i.x*Math.abs(ap.x)+i.y*Math.abs(ap.y)+i.z*Math.abs(ap.z),s=t.dot(ap),c=n.dot(ap),l=r.dot(ap);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function bc(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function xc(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;zm.copy(s),zm.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(zm);return l<n.near||l>n.far?null:{distance:l,point:zm.clone(),object:e}}function Sc(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Dm),e.getVertexPosition(c,Om),e.getVertexPosition(l,km);let u=xc(e,t,n,r,Dm,Om,km,Rm);if(u){i&&(Mm.fromBufferAttribute(i,s),Nm.fromBufferAttribute(i,c),Pm.fromBufferAttribute(i,l),u.uv=tm.getInterpolation(Rm,Dm,Om,km,Mm,Nm,Pm,new X)),a&&(Mm.fromBufferAttribute(a,s),Nm.fromBufferAttribute(a,c),Pm.fromBufferAttribute(a,l),u.uv1=tm.getInterpolation(Rm,Dm,Om,km,Mm,Nm,Pm,new X),u.uv2=u.uv1),o&&(Fm.fromBufferAttribute(o,s),Im.fromBufferAttribute(o,c),Lm.fromBufferAttribute(o,l),u.normal=tm.getInterpolation(Rm,Dm,Om,km,Fm,Im,Lm,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new Z,materialIndex:0};tm.getNormal(Dm,Om,km,e.normal),u.face=e}return u}function Cc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function wc(e){let t={};for(let n=0;n<e.length;n++){let r=Cc(e[n]);for(let e in r)t[e]=r[e]}return t}function Tc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ec(e){return e.getRenderTarget()===null?e.outputColorSpace:jf.workingColorSpace}function Dc(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Oc(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}function kc(e,t,n,r,i,a,o){let s=new Q(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new Bm(new Vm(1,1,1),new Gm({name:`BackgroundCubeMaterial`,uniforms:Cc(ch.backgroundCube.uniforms),vertexShader:ch.backgroundCube.vertexShader,fragmentShader:ch.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=jf.getTransfer(_.colorSpace)!==ff,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Bm(new oh(2,2),new Gm({name:`BackgroundMaterial`,uniforms:Cc(ch.background.uniforms),vertexShader:ch.background.vertexShader,fragmentShader:ch.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=jf.getTransfer(_.colorSpace)!==ff,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(lh,Ec(e)),r.buffers.color.setClear(lh.r,lh.g,lh.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Ac(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){O();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function E(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function D(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function O(){k(),u=!0,l!==c&&(l=c,p(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function jc(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Mc(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Nc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new nh,s=new wf,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Pc(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new Qm(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}function Fc(e){let t=[],n=[],r=[],i=e,a=e-dh+1+fh.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-dh?s=fh[o-e+dh-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Sm;h.setAttribute(`position`,new dm(f,3)),h.setAttribute(`uv`,new dm(p,2)),h.setAttribute(`faceIndex`,new dm(m,1)),t.push(h),i>dh&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ic(e,t,n){let r=new Bf(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Lc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Rc(e,t,n){let r=new Float32Array(ph),i=new Z(0,1,0);return new Gm({name:`SphericalGaussianBlur`,defines:{n:ph,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zc(){return new Gm({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bc(){return new Gm({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hc(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new Sh(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new Sh(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Uc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Wc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(fc(n)?pm:fm)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Gc(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Kc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qc(e,t){return e[0]-t[0]}function Jc(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Yc(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new Rf,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],d=l.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),r===!0&&(f=3);let p=l.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*i),g=new Vf(h,p,m,i);g.type=Ud,g.needsUpdate=!0;let _=f*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=d[t],l=p*m*4*t;for(let t=0;t<i.count;t++){let c=t*_;e===!0&&(o.fromBufferAttribute(i,t),h[l+c+0]=o.x,h[l+c+1]=o.y,h[l+c+2]=o.z,h[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),h[l+c+4]=o.x,h[l+c+5]=o.y,h[l+c+6]=o.z,h[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),h[l+c+8]=o.x,h[l+c+9]=o.y,h[l+c+10]=o.z,h[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:g,size:new X(p,m)},a.set(l,s);function v(){g.dispose(),a.delete(l),l.removeEventListener(`dispose`,v)}l.addEventListener(`dispose`,v)}let c=0;for(let e=0;e<d.length;e++)c+=d[e];let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,d),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=d===void 0?0:d.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=d[e]}n.sort(Jc);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(qc);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let f=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,f),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function Xc(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}function Zc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=kh[i];if(a===void 0&&(a=new Float32Array(i),kh[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $c(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function el(e,t){let n=Ah[t];n===void 0&&(n=new Int32Array(t),Ah[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2fv(this.addr,t),$c(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qc(n,t))return;e.uniform3fv(this.addr,t),$c(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4fv(this.addr,t),$c(n,t)}}function al(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Nh.set(r),e.uniformMatrix2fv(this.addr,!1,Nh),$c(n,r)}}function ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Mh.set(r),e.uniformMatrix3fv(this.addr,!1,Mh),$c(n,r)}}function sl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;jh.set(r),e.uniformMatrix4fv(this.addr,!1,jh),$c(n,r)}}function cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2iv(this.addr,t),$c(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3iv(this.addr,t),$c(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4iv(this.addr,t),$c(n,t)}}function fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2uiv(this.addr,t),$c(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3uiv(this.addr,t),$c(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4uiv(this.addr,t),$c(n,t)}}function gl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?Th:wh;n.setTexture2D(t||a,i)}function _l(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Dh,i)}function vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Oh,i)}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Eh,i)}function bl(e){switch(e){case 5126:return tl;case 35664:return nl;case 35665:return rl;case 35666:return il;case 35674:return al;case 35675:return ol;case 35676:return sl;case 5124:case 35670:return cl;case 35667:case 35671:return ll;case 35668:case 35672:return ul;case 35669:case 35673:return dl;case 5125:return fl;case 36294:return pl;case 36295:return ml;case 36296:return hl;case 35678:case 36198:case 36298:case 36306:case 35682:return gl;case 35679:case 36299:case 36307:return _l;case 35680:case 36300:case 36308:case 36293:return vl;case 36289:case 36303:case 36311:case 36292:return yl}}function xl(e,t){e.uniform1fv(this.addr,t)}function Sl(e,t){let n=Zc(t,this.size,2);e.uniform2fv(this.addr,n)}function Cl(e,t){let n=Zc(t,this.size,3);e.uniform3fv(this.addr,n)}function wl(e,t){let n=Zc(t,this.size,4);e.uniform4fv(this.addr,n)}function Tl(e,t){let n=Zc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function El(e,t){let n=Zc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Dl(e,t){let n=Zc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ol(e,t){e.uniform1iv(this.addr,t)}function kl(e,t){e.uniform2iv(this.addr,t)}function Al(e,t){e.uniform3iv(this.addr,t)}function jl(e,t){e.uniform4iv(this.addr,t)}function Ml(e,t){e.uniform1uiv(this.addr,t)}function Nl(e,t){e.uniform2uiv(this.addr,t)}function Pl(e,t){e.uniform3uiv(this.addr,t)}function Fl(e,t){e.uniform4uiv(this.addr,t)}function Il(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||wh,a[e])}function Ll(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Dh,a[e])}function Rl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Oh,a[e])}function zl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Eh,a[e])}function Bl(e){switch(e){case 5126:return xl;case 35664:return Sl;case 35665:return Cl;case 35666:return wl;case 35674:return Tl;case 35675:return El;case 35676:return Dl;case 5124:case 35670:return Ol;case 35667:case 35671:return kl;case 35668:case 35672:return Al;case 35669:case 35673:return jl;case 5125:return Ml;case 36294:return Nl;case 36295:return Pl;case 36296:return Fl;case 35678:case 36198:case 36298:case 36306:case 35682:return Il;case 35679:case 36299:case 36307:return Ll;case 35680:case 36300:case 36308:case 36293:return Rl;case 36289:case 36303:case 36311:case 36292:return zl}}function Vl(e,t){e.seq.push(t),e.map[t.id]=t}function Hl(e,t,n){let r=e.name,i=r.length;for(Lh.lastIndex=0;;){let a=Lh.exec(r),o=Lh.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Vl(n,l===void 0?new Ph(s,e,t):new Fh(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ih(s),Vl(n,e)),n=e}}}function Ul(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function Wl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Gl(e){let t=jf.getPrimaries(jf.workingColorSpace),n=jf.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case cf:case uf:return[r,`LinearTransferOETF`];case sf:case lf:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Kl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Wl(e.getShaderSource(t),r)}return i}function ql(e,t){let n=Gl(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Jl(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Yl(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter($l).join(`
`)}function Xl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter($l).join(`
`)}function Zl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ql(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function $l(e){return e!==``}function eu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function nu(e){return e.replace(Vh,ru)}function ru(e,t){let n=sh[t];if(n===void 0){let e=Hh.get(t);if(e!==void 0)n=sh[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return nu(n)}function iu(e){return e.replace(Uh,au)}function au(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ou(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function su(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function cu(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function lu(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function uu(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function du(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function fu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=su(n),l=cu(n),u=lu(n),d=uu(n),f=du(n),p=n.isWebGL2?``:Yl(n),m=Xl(n),h=Zl(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter($l).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter($l).join(`
`),v.length>0&&(v+=`
`)):(_=[ou(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter($l).join(`
`),v=[p,ou(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:sh.tonemapping_pars_fragment,n.toneMapping===0?``:Jl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,sh.colorspace_pars_fragment,ql(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter($l).join(`
`)),o=nu(o),o=eu(o,n),o=tu(o,n),s=nu(s),s=eu(s,n),s=tu(s,n),o=iu(o),s=iu(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=Ul(i,i.VERTEX_SHADER,b),C=Ul(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=Kl(i,S,`vertex`),t=Kl(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new Rh(i,g),E=Ql(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,zh)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bh++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}function pu(e,t,n,r,i,a,o){let s=new kp,c=new Gh,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ch[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=_.isInstancedMesh===!0,N=_.isBatchedMesh===!0,P=!!a.map,F=!!a.matcap,I=!!x,ee=!!a.aoMap,L=!!a.lightMap,R=!!a.bumpMap,te=!!a.normalMap,z=!!a.displacementMap,ne=!!a.emissiveMap,B=!!a.metalnessMap,re=!!a.roughnessMap,ie=a.anisotropy>0,ae=a.clearcoat>0,V=a.iridescence>0,oe=a.sheen>0,H=a.transmission>0,U=ie&&!!a.anisotropyMap,W=ae&&!!a.clearcoatMap,se=ae&&!!a.clearcoatNormalMap,G=ae&&!!a.clearcoatRoughnessMap,ce=V&&!!a.iridescenceMap,le=V&&!!a.iridescenceThicknessMap,ue=oe&&!!a.sheenColorMap,de=oe&&!!a.sheenRoughnessMap,fe=!!a.specularMap,pe=!!a.specularColorMap,K=!!a.specularIntensityMap,me=H&&!!a.transmissionMap,q=H&&!!a.thicknessMap,he=!!a.gradientMap,ge=!!a.alphaMap,_e=a.alphaTest>0,ve=!!a.alphaHash,ye=!!a.extensions,be=!!y.attributes.uv1,xe=!!y.attributes.uv2,Se=!!y.attributes.uv3,Ce=0;return a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ce=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:N,instancing:M,instancingColor:M&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:cf,map:P,matcap:F,envMap:I,envMapMode:I&&x.mapping,envMapCubeUVHeight:S,aoMap:ee,lightMap:L,bumpMap:R,normalMap:te,displacementMap:f&&z,emissiveMap:ne,normalMapObjectSpace:te&&a.normalMapType===1,normalMapTangentSpace:te&&a.normalMapType===0,metalnessMap:B,roughnessMap:re,anisotropy:ie,anisotropyMap:U,clearcoat:ae,clearcoatMap:W,clearcoatNormalMap:se,clearcoatRoughnessMap:G,iridescence:V,iridescenceMap:ce,iridescenceThicknessMap:le,sheen:oe,sheenColorMap:ue,sheenRoughnessMap:de,specularMap:fe,specularColorMap:pe,specularIntensityMap:K,transmission:H,transmissionMap:me,thicknessMap:q,gradientMap:he,opaque:a.transparent===!1&&a.blending===1,alphaMap:ge,alphaTest:_e,alphaHash:ve,combine:a.combine,mapUv:P&&h(a.map.channel),aoMapUv:ee&&h(a.aoMap.channel),lightMapUv:L&&h(a.lightMap.channel),bumpMapUv:R&&h(a.bumpMap.channel),normalMapUv:te&&h(a.normalMap.channel),displacementMapUv:z&&h(a.displacementMap.channel),emissiveMapUv:ne&&h(a.emissiveMap.channel),metalnessMapUv:B&&h(a.metalnessMap.channel),roughnessMapUv:re&&h(a.roughnessMap.channel),anisotropyMapUv:U&&h(a.anisotropyMap.channel),clearcoatMapUv:W&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:se&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:le&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:de&&h(a.sheenRoughnessMap.channel),specularMapUv:fe&&h(a.specularMap.channel),specularColorMapUv:pe&&h(a.specularColorMap.channel),specularIntensityMapUv:K&&h(a.specularIntensityMap.channel),transmissionMapUv:me&&h(a.transmissionMap.channel),thicknessMapUv:q&&h(a.thicknessMap.channel),alphaMapUv:ge&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(te||ie),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:xe,vertexUv3s:Se,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(P||ge),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ce,useLegacyLights:e._useLegacyLights,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&jf.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:ye&&a.extensions.derivatives===!0,extensionFragDepth:ye&&a.extensions.fragDepth===!0,extensionDrawBuffers:ye&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=ch[t];n=Hm.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new fu(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function mu(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function hu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _u(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||hu),r.length>1&&r.sort(t||gu),i.length>1&&i.sort(t||gu)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function vu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _u,e.set(t,[i])):n>=r.length?(i=new _u,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Z,color:new Q};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new Q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new Q,groundColor:new Q};break;case`RectAreaLight`:n={color:new Q,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function bu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}function xu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Su(e,t){let n=new yu,r=bu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new Z);let a=new Z,o=new vp,s=new vp;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(xu);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=$.LTC_FLOAT_1,i.rectAreaLTC2=$.LTC_FLOAT_2):(i.rectAreaLTC1=$.LTC_HALF_1,i.rectAreaLTC2=$.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=$.LTC_FLOAT_1,i.rectAreaLTC2=$.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=$.LTC_HALF_1,i.rectAreaLTC2=$.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=qh++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function Cu(e,t){let n=new Su(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function wu(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new Cu(e,t),n.set(r,[o])):i>=a.length?(o=new Cu(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}function Tu(e,t,n){let r=new ah,i=new X,a=new X,o=new Rf,s=new Jh({depthPacking:of}),c=new Yh,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Gm({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:Xh,fragmentShader:Zh}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Sm;m.setAttribute(`position`,new dm(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Bm(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Fd,magFilter:Fd};d.map!==null&&d.map.dispose(),d.map=new Bf(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Bf(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Eu(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new Rf,r=null,i=new Rf(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?ie(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new Q(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,F=0,I=e.getParameter(e.VERSION);I.indexOf(`WebGL`)===-1?I.indexOf(`OpenGL ES`)!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),P=F>=2):(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),P=F>=1);let ee=null,L={},R=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),z=new Rf().fromArray(R),ne=new Rf().fromArray(te);function B(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let re={};re[e.TEXTURE_2D]=B(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=B(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(re[e.TEXTURE_2D_ARRAY]=B(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=B(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ie(e.DEPTH_TEST),c.setFunc(3),ce(!1),le(1),ie(e.CULL_FACE),se(0);function ie(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function ae(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function V(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function oe(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function H(t){return g!==t&&(e.useProgram(t),g=t,!0)}let U={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)U[103]=e.MIN,U[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(U[103]=e.MIN_EXT,U[104]=e.MAX_EXT)}let W={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function se(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(ae(e.BLEND),_=!1);return}if(_===!1&&(ie(e.BLEND),_=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(U[n],U[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(W[r],W[i],W[o],W[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function G(t,n){t.side===2?ae(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ce(r),t.blending===1&&t.transparent===!1?se(0):se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),de(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function le(t){t===0?ae(e.CULL_FACE):(ie(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function ue(t){t!==A&&(P&&e.lineWidth(t),A=t)}function de(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(e.polygonOffset(n,r),j=n,M=r)):ae(e.POLYGON_OFFSET_FILL)}function fe(t){t?ie(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function pe(t){t===void 0&&(t=e.TEXTURE0+N-1),ee!==t&&(e.activeTexture(t),ee=t)}function K(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+N-1:ee);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||re[t]),i.type=t,i.texture=n)}function me(){let t=L[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function he(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function Te(t){ne.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ne.copy(t))}function Ee(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function De(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ee=null,L={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new Q(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,z.set(0,0,e.canvas.width,e.canvas.height),ne.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ie,disable:ae,bindFramebuffer:V,drawBuffers:oe,useProgram:H,setBlending:se,setMaterial:G,setFlipSided:ce,setCullFace:le,setLineWidth:ue,setPolygonOffset:de,setScissorTest:fe,activeTexture:pe,bindTexture:K,unbindTexture:me,compressedTexImage2D:q,compressedTexImage3D:he,texImage2D:Se,texImage3D:Ce,updateUBOMapping:Ee,uniformBlockBinding:De,texStorage2D:be,texStorage3D:xe,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:ve,compressedTexSubImage3D:ye,scissor:we,viewport:Te,reset:Oe}}function Du(e,t,n,r,i,a,o){let s=i.isWebGL2,c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):pc(`canvas`)}function h(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?cc:Math.floor,a=r(i*e.width),o=r(i*e.height);d===void 0&&(d=m(a,o));let s=n?m(a,o):d;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function g(e){return oc(e.width)&&oc(e.height)}function _(e){return s?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function v(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function y(t){e.generateMipmap(t)}function b(n,r,i,a,o=!1){if(s===!1)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c=r;if(r===e.RED&&(i===e.FLOAT&&(c=e.R32F),i===e.HALF_FLOAT&&(c=e.R16F),i===e.UNSIGNED_BYTE&&(c=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.R8UI),i===e.UNSIGNED_SHORT&&(c=e.R16UI),i===e.UNSIGNED_INT&&(c=e.R32UI),i===e.BYTE&&(c=e.R8I),i===e.SHORT&&(c=e.R16I),i===e.INT&&(c=e.R32I)),r===e.RG&&(i===e.FLOAT&&(c=e.RG32F),i===e.HALF_FLOAT&&(c=e.RG16F),i===e.UNSIGNED_BYTE&&(c=e.RG8)),r===e.RGBA){let t=o?df:jf.getTransfer(a);i===e.FLOAT&&(c=e.RGBA32F),i===e.HALF_FLOAT&&(c=e.RGBA16F),i===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),c}function x(e,t,n){return v(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(t){return t===1003||t===1004||t===1005?e.NEAREST:e.LINEAR}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=t.texture,i=r.get(t),a=r.get(n);if(a.__webglTexture!==void 0&&(e.deleteTexture(a.__webglTexture),o.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(i.__webglFramebuffer[t]))for(let n=0;n<i.__webglFramebuffer[t].length;n++)e.deleteFramebuffer(i.__webglFramebuffer[t][n]);else e.deleteFramebuffer(i.__webglFramebuffer[t]);i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t])}else{if(Array.isArray(i.__webglFramebuffer))for(let t=0;t<i.__webglFramebuffer.length;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer);if(i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer)for(let t=0;t<i.__webglColorRenderbuffer.length;t++)i.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture&&(e.deleteTexture(i.__webglTexture),o.memory.textures--),r.remove(n[t])}r.remove(n),r.remove(t)}let O=0;function k(){O=0}function A(){let e=O;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function j(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&G(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{z(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){z(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){z(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){ne(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let I={[Md]:e.REPEAT,[Nd]:e.CLAMP_TO_EDGE,[Pd]:e.MIRRORED_REPEAT},ee={[Fd]:e.NEAREST,[Id]:e.NEAREST_MIPMAP_NEAREST,[Ld]:e.NEAREST_MIPMAP_LINEAR,[Rd]:e.LINEAR,[zd]:e.LINEAR_MIPMAP_NEAREST,[Bd]:e.LINEAR_MIPMAP_LINEAR},L={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function R(n,a,o){if(o?(e.texParameteri(n,e.TEXTURE_WRAP_S,I[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,I[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,I[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee[a.minFilter])):(e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(a.wrapS!==1001||a.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,e.TEXTURE_MAG_FILTER,S(a.magFilter)),e.texParameteri(n,e.TEXTURE_MIN_FILTER,S(a.minFilter)),a.minFilter!==1003&&a.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,L[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){let o=t.get(`EXT_texture_filter_anisotropic`);if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1||s===!1&&a.type===1016&&t.has(`OES_texture_half_float_linear`)===!1)return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=j(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function z(t,o,c){let l=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(l=e.TEXTURE_3D);let u=te(t,o),d=o.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+c);let f=r.get(d);if(d.version!==f.__version||u===!0){n.activeTexture(e.TEXTURE0+c);let t=jf.getPrimaries(jf.workingColorSpace),r=o.colorSpace===``?null:jf.getPrimaries(o.colorSpace),p=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=_(o)&&g(o.image)===!1,S=h(o.image,m,!1,i.maxTextureSize);S=ce(o,S);let C=g(S)||s,w=a.convert(o.format,o.colorSpace),T=a.convert(o.type),E=b(o.internalFormat,w,T,o.colorSpace,o.isVideoTexture);R(l,o,C);let D,O=o.mipmaps,k=s&&o.isVideoTexture!==!0&&E!==36196,A=f.__version===void 0||u===!0,j=x(o,S,C);if(o.isDepthTexture)E=e.DEPTH_COMPONENT,s?E=o.type===1015?e.DEPTH_COMPONENT32F:o.type===1014?e.DEPTH_COMPONENT24:o.type===1020?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:o.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),o.format===1026&&E===e.DEPTH_COMPONENT&&o.type!==1012&&o.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),o.type=Hd,T=a.convert(o.type)),o.format===1027&&E===e.DEPTH_COMPONENT&&(E=e.DEPTH_STENCIL,o.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),o.type=Gd,T=a.convert(o.type))),A&&(k?n.texStorage2D(e.TEXTURE_2D,1,E,S.width,S.height):n.texImage2D(e.TEXTURE_2D,0,E,S.width,S.height,0,w,T,null));else if(o.isDataTexture){if(O.length>0&&C){k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,T,D.data):n.texImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,w,T,D.data);o.generateMipmaps=!1}else k?(A&&n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,w,T,S.data)):n.texImage2D(e.TEXTURE_2D,0,E,S.width,S.height,0,w,T,S.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){k&&A&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,E,O[0].width,O[0].height,S.depth);for(let t=0,r=O.length;t<r;t++)D=O[t],o.format===1023?k?n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,D.width,D.height,S.depth,w,T,D.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,E,D.width,D.height,S.depth,0,w,T,D.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):k?n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,D.width,D.height,S.depth,w,D.data,0,0):n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,E,D.width,D.height,S.depth,0,D.data,0,0)}else{k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],o.format===1023?k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,T,D.data):n.texImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,w,T,D.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):k?n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,D.width,D.height,w,D.data):n.compressedTexImage2D(e.TEXTURE_2D,t,E,D.width,D.height,0,D.data)}}else if(o.isDataArrayTexture)k?(A&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,E,S.width,S.height,S.depth),n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,w,T,S.data)):n.texImage3D(e.TEXTURE_2D_ARRAY,0,E,S.width,S.height,S.depth,0,w,T,S.data);else if(o.isData3DTexture)k?(A&&n.texStorage3D(e.TEXTURE_3D,j,E,S.width,S.height,S.depth),n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,w,T,S.data)):n.texImage3D(e.TEXTURE_3D,0,E,S.width,S.height,S.depth,0,w,T,S.data);else if(o.isFramebufferTexture){if(A){if(k)n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height);else{let t=S.width,r=S.height;for(let i=0;i<j;i++)n.texImage2D(e.TEXTURE_2D,i,E,t,r,0,w,T,null),t>>=1,r>>=1}}}else if(O.length>0&&C){k&&A&&n.texStorage2D(e.TEXTURE_2D,j,E,O[0].width,O[0].height);for(let t=0,r=O.length;t<r;t++)D=O[t],k?n.texSubImage2D(e.TEXTURE_2D,t,0,0,w,T,D):n.texImage2D(e.TEXTURE_2D,t,E,w,T,D);o.generateMipmaps=!1}else k?(A&&n.texStorage2D(e.TEXTURE_2D,j,E,S.width,S.height),n.texSubImage2D(e.TEXTURE_2D,0,0,0,w,T,S)):n.texImage2D(e.TEXTURE_2D,0,E,w,T,S);v(o,C)&&y(l),f.__version=d.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ne(t,o,c){if(o.image.length!==6)return;let l=te(t,o),u=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+c);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+c);let t=jf.getPrimaries(jf.workingColorSpace),r=o.colorSpace===``?null:jf.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=o.isCompressedTexture||o.image[0].isCompressedTexture,m=o.image[0]&&o.image[0].isDataTexture,_=[];for(let e=0;e<6;e++)!p&&!m?_[e]=h(o.image[e],!1,!0,i.maxCubemapSize):_[e]=m?o.image[e].image:o.image[e],_[e]=ce(o,_[e]);let S=_[0],C=g(S)||s,w=a.convert(o.format,o.colorSpace),T=a.convert(o.type),E=b(o.internalFormat,w,T,o.colorSpace),D=s&&o.isVideoTexture!==!0,O=d.__version===void 0||l===!0,k=x(o,S,C);R(e.TEXTURE_CUBE_MAP,o,C);let A;if(p){D&&O&&n.texStorage2D(e.TEXTURE_CUBE_MAP,k,E,S.width,S.height);for(let t=0;t<6;t++){A=_[t].mipmaps;for(let r=0;r<A.length;r++){let i=A[r];o.format===1023?D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,w,T,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,E,i.width,i.height,0,w,T,i.data):w===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):D?n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,w,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,E,i.width,i.height,0,i.data)}}}else{A=o.mipmaps,D&&O&&(A.length>0&&k++,n.texStorage2D(e.TEXTURE_CUBE_MAP,k,E,_[0].width,_[0].height));for(let t=0;t<6;t++)if(m){D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_[t].width,_[t].height,w,T,_[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,E,_[t].width,_[t].height,0,w,T,_[t].data);for(let r=0;r<A.length;r++){let i=A[r].image[t].image;D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,w,T,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,E,i.width,i.height,0,w,T,i.data)}}else{D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,w,T,_[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,E,w,T,_[t]);for(let r=0;r<A.length;r++){let i=A[r];D?n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,w,T,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,E,w,T,i.image[t])}}}v(o,C)&&y(e.TEXTURE_CUBE_MAP),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function B(t,i,o,s,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),se(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,r.get(o).__webglTexture,0,W(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,r.get(o).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function re(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer&&!n.stencilBuffer){let i=s===!0?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||se(n)){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===1015?i=e.DEPTH_COMPONENT32F:t.type===1014&&(i=e.DEPTH_COMPONENT24));let r=W(n);se(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,i,n.width,n.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,i,n.width,n.height)}else e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=W(n);r&&se(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):se(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,i,e.DEPTH24_STENCIL8,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=n.isWebGLMultipleRenderTargets===!0?n.texture:[n.texture];for(let i=0;i<t.length;i++){let o=t[i],s=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,s,l,o.colorSpace),d=W(n);r&&se(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):se(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ie(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),M(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=W(i);if(i.depthTexture.format===1026)se(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)se(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function ae(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);ie(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),re(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),re(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function V(t,n,i){let a=r.get(t);n!==void 0&&B(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ae(t)}function oe(t){let c=t.texture,l=r.get(t),u=r.get(c);t.addEventListener(`dispose`,w),t.isWebGLMultipleRenderTargets!==!0&&(u.__webglTexture===void 0&&(u.__webglTexture=e.createTexture()),u.__version=c.version,o.memory.textures++);let d=t.isWebGLCubeRenderTarget===!0,f=t.isWebGLMultipleRenderTargets===!0,p=g(t)||s;if(d){l.__webglFramebuffer=[];for(let t=0;t<6;t++)if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer[t]=[];for(let n=0;n<c.mipmaps.length;n++)l.__webglFramebuffer[t][n]=e.createFramebuffer()}else l.__webglFramebuffer[t]=e.createFramebuffer()}else{if(s&&c.mipmaps&&c.mipmaps.length>0){l.__webglFramebuffer=[];for(let t=0;t<c.mipmaps.length;t++)l.__webglFramebuffer[t]=e.createFramebuffer()}else l.__webglFramebuffer=e.createFramebuffer();if(f){if(i.drawBuffers){let n=t.texture;for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(s&&t.samples>0&&se(t)===!1){let r=f?c:[c];l.__webglMultisampledFramebuffer=e.createFramebuffer(),l.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer);for(let n=0;n<r.length;n++){let i=r[n];l.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let o=a.convert(i.format,i.colorSpace),s=a.convert(i.type),c=b(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),u=W(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,l.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(l.__webglDepthRenderbuffer=e.createRenderbuffer(),re(l.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(d){n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),R(e.TEXTURE_CUBE_MAP,c,p);for(let n=0;n<6;n++)if(s&&c.mipmaps&&c.mipmaps.length>0)for(let r=0;r<c.mipmaps.length;r++)B(l.__webglFramebuffer[n][r],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else B(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(c,p)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){let i=t.texture;for(let a=0,o=i.length;a<o;a++){let o=i[a],s=r.get(o);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),R(e.TEXTURE_2D,o,p),B(l.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+a,e.TEXTURE_2D,0),v(o,p)&&y(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s?r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),n.bindTexture(r,u.__webglTexture),R(r,c,p),s&&c.mipmaps&&c.mipmaps.length>0)for(let n=0;n<c.mipmaps.length;n++)B(l.__webglFramebuffer[n],t,c,e.COLOR_ATTACHMENT0,r,n);else B(l.__webglFramebuffer,t,c,e.COLOR_ATTACHMENT0,r,0);v(c,p)&&y(r),n.unbindTexture()}t.depthBuffer&&ae(t)}function H(t){let i=g(t)||s,a=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let o=0,s=a.length;o<s;o++){let s=a[o];if(v(s,i)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(s).__webglTexture;n.bindTexture(i,a),y(i),n.unbindTexture()}}}function U(t){if(s&&t.samples>0&&se(t)===!1){let i=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=[],u=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,d=r.get(t),f=t.isWebGLMultipleRenderTargets===!0;if(f)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let n=0;n<i.length;n++){c.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&c.push(u);let p=d.__ignoreDepthValues!==void 0&&d.__ignoreDepthValues;if(p===!1&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),f&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,d.__webglColorRenderbuffer[n]),p===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[u]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])),f){let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,c)}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),f)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,d.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,d.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,d.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}}function W(e){return Math.min(i.maxSamples,e.samples)}function se(e){let n=r.get(e);return s&&e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function G(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ce(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||r!==`srgb-linear`&&r!==``&&(jf.getTransfer(r)===`srgb`?s===!1?t.has(`EXT_sRGB`)===!0&&i===1023?(e.format=gf,e.minFilter=Rd,e.generateMipmaps=!1):n=Nf.sRGBToLinear(n):(i!==1023||a!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,r)),n}this.allocateTextureUnit=A,this.resetTextureUnits=k,this.setTexture2D=M,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=V,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=B,this.useMultisampledRTT=se}function Ou(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=jf.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}function ku(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ec(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Au(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}function ju(e,t,n,r,i,a,o){let s=Kg.distanceSqToPoint(e);if(s<n){let n=new Z;Kg.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}function Mu(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function Nu(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Pu(e,t){let n=1-e;return n*n*t}function Fu(e,t){return 2*(1-e)*e*t}function Iu(e,t){return e*e*t}function Lu(e,t,n,r){return Pu(e,t)+Fu(e,n)+Iu(e,r)}function Ru(e,t){let n=1-e;return n*n*n*t}function zu(e,t){let n=1-e;return 3*n*n*e*t}function Bu(e,t){return 3*(1-e)*e*e*t}function Vu(e,t){return e*e*e*t}function Hu(e,t,n,r,i){return Ru(e,t)+zu(e,n)+Bu(e,r)+Vu(e,i)}function Uu(e,t,n,r,i){let a,o;if(i===yd(e,t,n,r)>0)for(a=t;a<n;a+=r)o=gd(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=gd(a,e[a],e[a+1],o);return o&&cd(o,o.next)&&(_d(o),o=o.next),o}function Wu(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(cd(n,n.next)||sd(n.prev,n,n.next)===0)){if(_d(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Gu(e,t,n,r,i,a,o){if(!e)return;!o&&a&&td(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?qu(e,r,i,a):Ku(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),_d(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Ju(Wu(e),t,n),Gu(e,t,n,r,i,a,2)):o===2&&Yu(e,t,n,r,i,a):Gu(Wu(e),t,n,r,i,a,1);break}}}function Ku(e){let t=e.prev,n=e,r=e.next;if(sd(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ad(i,s,a,c,o,l,m.x,m.y)&&sd(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qu(e,t,n,r){let i=e.prev,a=e,o=e.next;if(sd(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=rd(p,m,t,n,r),v=rd(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ad(s,u,c,d,l,f,y.x,y.y)&&sd(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ad(s,u,c,d,l,f,b.x,b.y)&&sd(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ad(s,u,c,d,l,f,y.x,y.y)&&sd(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ad(s,u,c,d,l,f,b.x,b.y)&&sd(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ju(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!cd(i,a)&&ld(i,r,r.next,a)&&pd(i,a)&&pd(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),_d(r),_d(r.next),r=e=a),r=r.next}while(r!==e);return Wu(r)}function Yu(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&od(o,e)){let s=hd(o,e);o=Wu(o,o.next),s=Wu(s,s.next),Gu(o,t,n,r,i,a,0),Gu(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Xu(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Uu(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(id(l));for(i.sort(Zu),a=0;a<i.length;a++)n=Qu(i[a],n);return n}function Zu(e,t){return e.x-t.x}function Qu(e,t){let n=$u(e,t);if(!n)return t;let r=hd(n,e);return Wu(r,r.next),Wu(n,n.next)}function $u(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&ad(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),pd(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&ed(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function ed(e,t){return sd(e.prev,e,t.prev)<0&&sd(t.next,e,e.next)<0}function td(e,t,n,r){let i=e;do i.z===0&&(i.z=rd(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,nd(i)}function nd(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function rd(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function id(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ad(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function od(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fd(e,t)&&(pd(e,t)&&pd(t,e)&&md(e,t)&&(sd(e.prev,e,t.prev)||sd(e,t.prev,t))||cd(e,t)&&sd(e.prev,e,e.next)>0&&sd(t.prev,t,t.next)>0)}function sd(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function cd(e,t){return e.x===t.x&&e.y===t.y}function ld(e,t,n,r){let i=dd(sd(e,t,n)),a=dd(sd(e,t,r)),o=dd(sd(n,r,e)),s=dd(sd(n,r,t));return!!(i!==a&&o!==s||i===0&&ud(e,n,t)||a===0&&ud(e,r,t)||o===0&&ud(n,e,r)||s===0&&ud(n,t,r))}function ud(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function dd(e){return e>0?1:e<0?-1:0}function fd(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ld(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function pd(e,t){return sd(e.prev,e,e.next)<0?sd(e,t,e.next)>=0&&sd(e,e.prev,t)>=0:sd(e,t,e.prev)<0||sd(e,e.next,t)<0}function md(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function hd(e,t){let n=new vd(e.i,e.x,e.y),r=new vd(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function gd(e,t,n,r){let i=new vd(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function _d(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function vd(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yd(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function bd(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function xd(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function Sd(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Cd(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function wd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Td(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ed(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Dd(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}function Od(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return I_;case`vector`:case`vector2`:case`vector3`:case`vector4`:return B_;case`color`:return F_;case`quaternion`:return R_;case`bool`:case`boolean`:return P_;case`string`:return z_}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function kd(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Od(e.type);if(e.times===void 0){let t=[],n=[];Dd(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}function Ad(){return(typeof performance>`u`?Date:performance).now()}var jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,X,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Z,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,Q,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,$,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv,Ov,kv=e((()=>{jd=`attached`,Md=1e3,Nd=1001,Pd=1002,Fd=1003,Id=1004,Ld=1005,Rd=1006,zd=1007,Bd=1008,Vd=1009,Hd=1014,Ud=1015,Wd=1016,Gd=1020,Kd=1023,qd=1026,Jd=1027,Yd=2300,Xd=2301,Zd=2302,Qd=2400,$d=2401,ef=2402,tf=2500,nf=3e3,rf=3001,af=3200,of=3201,sf=`srgb`,cf=`srgb-linear`,lf=`display-p3`,uf=`display-p3-linear`,df=`linear`,ff=`srgb`,pf=`rec709`,mf=7680,hf=35044,gf=1035,_f=2e3,vf=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},yf=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),bf=1234567,xf=Math.PI/180,Sf=180/Math.PI,Cf={DEG2RAD:xf,RAD2DEG:Sf,generateUUID:Ws,clamp:Gs,euclideanModulo:Ks,mapLinear:qs,inverseLerp:Js,lerp:Ys,damp:Xs,pingpong:Zs,smoothstep:Qs,smootherstep:$s,randInt:ec,randFloat:tc,randFloatSpread:nc,seededRandom:rc,degToRad:ic,radToDeg:ac,isPowerOfTwo:oc,ceilPowerOfTwo:sc,floorPowerOfTwo:cc,setQuaternionFromProperEuler:lc,normalize:dc,denormalize:uc},X=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gs(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wf=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tf.makeScale(e,t)),this}rotate(e){return this.premultiply(Tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tf=new wf,Ef={},Df=new wf().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Of=new wf().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kf={[cf]:{transfer:df,primaries:pf,toReference:e=>e,fromReference:e=>e},[sf]:{transfer:ff,primaries:pf,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[uf]:{transfer:df,primaries:`p3`,toReference:e=>e.applyMatrix3(Of),fromReference:e=>e.applyMatrix3(Df)},[lf]:{transfer:ff,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Of),fromReference:e=>e.applyMatrix3(Df).convertLinearToSRGB()}},Af=new Set([cf,uf]),jf={enabled:!0,_workingColorSpace:cf,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Af.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=kf[t].toReference,i=kf[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return kf[e].primaries},getTransfer:function(e){return e===``?df:kf[e].transfer}},Nf=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mf===void 0&&(Mf=pc(`canvas`)),Mf.width=e.width,Mf.height=e.height;let n=Mf.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mf}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=pc(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=gc(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(gc(t[e]/255)*255):t[e]=gc(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pf=0,Ff=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ws(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(vc(r[t].image)):e.push(vc(r[t]))}else e=vc(r);n.url=e}return t||(e.images[this.uuid]=n),n}},If=0,Lf=class e extends vf{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Nd,i=Nd,a=Rd,o=Bd,s=Kd,c=Vd,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Ws(),this.name=``,this.source=new Ff(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wf,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u==`string`?this.colorSpace=u:(hc(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=u===3001?sf:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x-=Math.floor(e.x);break;case Nd:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y-=Math.floor(e.y);break;case Nd:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hc(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?rf:nf}set encoding(e){hc(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?sf:``}},Lf.DEFAULT_IMAGE=null,Lf.DEFAULT_MAPPING=300,Lf.DEFAULT_ANISOTROPY=1,Rf=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zf=class extends vf{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rf(0,0,e,t),this.scissorTest=!1,this.viewport=new Rf(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(hc(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?sf:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rd,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lf(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ff(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Bf=class extends zf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vf=class extends Lf{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fd,this.minFilter=Fd,this.wrapR=Nd,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hf=class extends Lf{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fd,this.minFilter=Fd,this.wrapR=Nd,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uf=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gs(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gs(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wf=new Z,Gf=new Uf,Kf=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jf.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jf.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Jf):Jf.fromBufferAttribute(r,t),Jf.applyMatrix4(e.matrixWorld),this.expandByPoint(Jf);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Yf.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Yf.copy(e.boundingBox)),Yf.applyMatrix4(e.matrixWorld),this.union(Yf)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jf),Jf.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(np),rp.subVectors(this.max,np),Xf.subVectors(e.a,np),Zf.subVectors(e.b,np),Qf.subVectors(e.c,np),$f.subVectors(Zf,Xf),ep.subVectors(Qf,Zf),tp.subVectors(Xf,Qf);let t=[0,-$f.z,$f.y,0,-ep.z,ep.y,0,-tp.z,tp.y,$f.z,0,-$f.x,ep.z,0,-ep.x,tp.z,0,-tp.x,-$f.y,$f.x,0,-ep.y,ep.x,0,-tp.y,tp.x,0];return!yc(t,Xf,Zf,Qf,rp)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Xf,Zf,Qf,rp))?!1:(ip.crossVectors($f,ep),t=[ip.x,ip.y,ip.z],yc(t,Xf,Zf,Qf,rp))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jf).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jf).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qf[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qf[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qf[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qf[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qf[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qf[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qf[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qf[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qf),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qf=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Jf=new Z,Yf=new Kf,Xf=new Z,Zf=new Z,Qf=new Z,$f=new Z,ep=new Z,tp=new Z,np=new Z,rp=new Z,ip=new Z,ap=new Z,op=new Kf,sp=new Z,cp=new Z,lp=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?op.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sp.subVectors(e,this.center);let t=sp.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(sp,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sp.copy(e.center).add(cp)),this.expandByPoint(sp.copy(e.center).sub(cp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},up=new Z,dp=new Z,fp=new Z,pp=new Z,mp=new Z,hp=new Z,gp=new Z,_p=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,up)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=up.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(up.copy(this.origin).addScaledVector(this.direction,t),up.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){dp.copy(e).add(t).multiplyScalar(.5),fp.copy(t).sub(e).normalize(),pp.copy(this.origin).sub(dp);let i=e.distanceTo(t)*.5,a=-this.direction.dot(fp),o=pp.dot(this.direction),s=-pp.dot(fp),c=pp.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(dp).addScaledVector(fp,d),f}intersectSphere(e,t){up.subVectors(e.center,this.origin);let n=up.dot(this.direction),r=up.dot(up)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,up)!==null}intersectTriangle(e,t,n,r,i){mp.subVectors(t,e),hp.subVectors(n,e),gp.crossVectors(mp,hp);let a=this.direction.dot(gp),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pp.subVectors(this.origin,e);let s=o*this.direction.dot(hp.crossVectors(pp,hp));if(s<0)return null;let c=o*this.direction.dot(mp.cross(pp));if(c<0||s+c>a)return null;let l=-o*pp.dot(gp);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vp=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/yp.setFromMatrixColumn(e,0).length(),i=1/yp.setFromMatrixColumn(e,1).length(),a=1/yp.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,Sp)}lookAt(e,t,n){let r=this.elements;return Tp.subVectors(e,t),Tp.lengthSq()===0&&(Tp.z=1),Tp.normalize(),Cp.crossVectors(n,Tp),Cp.lengthSq()===0&&(Math.abs(n.z)===1?Tp.x+=1e-4:Tp.z+=1e-4,Tp.normalize(),Cp.crossVectors(n,Tp)),Cp.normalize(),wp.crossVectors(Tp,Cp),r[0]=Cp.x,r[4]=wp.x,r[8]=Tp.x,r[1]=Cp.y,r[5]=wp.y,r[9]=Tp.y,r[2]=Cp.z,r[6]=wp.z,r[10]=Tp.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=yp.set(r[0],r[1],r[2]).length(),a=yp.set(r[4],r[5],r[6]).length(),o=yp.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],bp.copy(this);let s=1/i,c=1/a,l=1/o;return bp.elements[0]*=s,bp.elements[1]*=s,bp.elements[2]*=s,bp.elements[4]*=c,bp.elements[5]*=c,bp.elements[6]*=c,bp.elements[8]*=l,bp.elements[9]*=l,bp.elements[10]*=l,t.setFromRotationMatrix(bp),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=_f){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=_f){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yp=new Z,bp=new vp,xp=new Z(0,0,0),Sp=new Z(1,1,1),Cp=new Z,wp=new Z,Tp=new Z,Ep=new vp,Dp=new Uf,Op=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Gs(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Gs(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Gs(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Gs(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Gs(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Gs(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Op.DEFAULT_ORDER=`XYZ`,kp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Ap=0,jp=new Z,Mp=new Uf,Np=new vp,Pp=new Z,Fp=new Z,Ip=new Z,Lp=new Uf,Rp=new Z(1,0,0),zp=new Z(0,1,0),Bp=new Z(0,0,1),Vp={type:`added`},Hp={type:`removed`},Up=class e extends vf{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ws(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new Op,r=new Uf,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vp},normalMatrix:{value:new wf}}),this.matrix=new vp,this.matrixWorld=new vp,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mp.setFromAxisAngle(e,t),this.quaternion.multiply(Mp),this}rotateOnWorldAxis(e,t){return Mp.setFromAxisAngle(e,t),this.quaternion.premultiply(Mp),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,t){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Np.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pp.copy(e):Pp.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Fp.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Np.lookAt(Fp,Pp,this.up):Np.lookAt(Pp,Fp,this.up),this.quaternion.setFromRotationMatrix(Np),r&&(Np.extractRotation(r.matrixWorld),Mp.setFromRotationMatrix(Np),this.quaternion.premultiply(Mp.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vp)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Np.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Np.multiply(e.parent.matrixWorld)),e.applyMatrix4(Np),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fp,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fp,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},Up.DEFAULT_UP=new Z(0,1,0),Up.DEFAULT_MATRIX_AUTO_UPDATE=!0,Up.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,Wp=new Z,Gp=new Z,Kp=new Z,qp=new Z,Jp=new Z,Yp=new Z,Xp=new Z,Zp=new Z,Qp=new Z,$p=new Z,em=!1,tm=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wp.subVectors(e,t),r.cross(Wp);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wp.subVectors(r,t),Gp.subVectors(n,t),Kp.subVectors(e,t);let a=Wp.dot(Wp),o=Wp.dot(Gp),s=Wp.dot(Kp),c=Gp.dot(Gp),l=Gp.dot(Kp),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qp)!==null&&qp.x>=0&&qp.y>=0&&qp.x+qp.y<=1}static getUV(e,t,n,r,i,a,o,s){return em===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),em=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qp)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qp.x),s.addScaledVector(a,qp.y),s.addScaledVector(o,qp.z),s)}static isFrontFacing(e,t,n,r){return Wp.subVectors(n,t),Gp.subVectors(e,t),Wp.cross(Gp).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wp.subVectors(this.c,this.b),Gp.subVectors(this.a,this.b),Wp.cross(Gp).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return em===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),em=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jp.subVectors(r,n),Yp.subVectors(i,n),Zp.subVectors(e,n);let s=Jp.dot(Zp),c=Yp.dot(Zp);if(s<=0&&c<=0)return t.copy(n);Qp.subVectors(e,r);let l=Jp.dot(Qp),u=Yp.dot(Qp);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Jp,a);$p.subVectors(e,i);let f=Jp.dot($p),p=Yp.dot($p);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yp,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xp.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xp,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jp,a).addScaledVector(Yp,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rm={h:0,s:0,l:0},im={h:0,s:0,l:0},Q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sf){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jf.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=jf.workingColorSpace){return this.r=e,this.g=t,this.b=n,jf.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=jf.workingColorSpace){if(e=Ks(e,1),t=Gs(t,0,1),n=Gs(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=bc(i,r,e+1/3),this.g=bc(i,r,e),this.b=bc(i,r,e-1/3)}return jf.toWorkingColorSpace(this,r),this}setStyle(e,t=sf){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sf){let n=nm[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}copyLinearToSRGB(e){return this.r=_c(e.r),this.g=_c(e.g),this.b=_c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sf){return jf.fromWorkingColorSpace(am.copy(this),e),Math.round(Gs(am.r*255,0,255))*65536+Math.round(Gs(am.g*255,0,255))*256+Math.round(Gs(am.b*255,0,255))}getHexString(e=sf){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jf.workingColorSpace){jf.fromWorkingColorSpace(am.copy(this),t);let n=am.r,r=am.g,i=am.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=jf.workingColorSpace){return jf.fromWorkingColorSpace(am.copy(this),t),e.r=am.r,e.g=am.g,e.b=am.b,e}getStyle(e=sf){jf.fromWorkingColorSpace(am.copy(this),e);let t=am.r,n=am.g,r=am.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(rm),this.setHSL(rm.h+e,rm.s+t,rm.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rm),e.getHSL(im);let n=Ys(rm.h,im.h,t),r=Ys(rm.s,im.s,t),i=Ys(rm.l,im.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},am=new Q,Q.NAMES=nm,om=0,sm=class extends vf{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Ws(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mf,this.stencilZFail=mf,this.stencilZPass=mf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},cm=class extends sm{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lm=new Z,um=new X,dm=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=hf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ud,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)um.fromBufferAttribute(this,t),um.applyMatrix3(e),this.setXY(t,um.x,um.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lm.fromBufferAttribute(this,t),lm.applyMatrix3(e),this.setXYZ(t,lm.x,lm.y,lm.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lm.fromBufferAttribute(this,t),lm.applyMatrix4(e),this.setXYZ(t,lm.x,lm.y,lm.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lm.fromBufferAttribute(this,t),lm.applyNormalMatrix(e),this.setXYZ(t,lm.x,lm.y,lm.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lm.fromBufferAttribute(this,t),lm.transformDirection(e),this.setXYZ(t,lm.x,lm.y,lm.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=uc(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dc(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=uc(t,this.array)),t}setX(e,t){return this.normalized&&(t=dc(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=uc(t,this.array)),t}setY(e,t){return this.normalized&&(t=dc(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=uc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dc(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=uc(t,this.array)),t}setW(e,t){return this.normalized&&(t=dc(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dc(t,this.array),n=dc(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dc(t,this.array),n=dc(n,this.array),r=dc(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=dc(t,this.array),n=dc(n,this.array),r=dc(r,this.array),i=dc(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},fm=class extends dm{constructor(e,t,n){super(new Uint16Array(e),t,n)}},pm=class extends dm{constructor(e,t,n){super(new Uint32Array(e),t,n)}},mm=class extends dm{constructor(e,t,n){super(new Float32Array(e),t,n)}},hm=0,gm=new vp,_m=new Up,vm=new Z,ym=new Kf,bm=new Kf,xm=new Z,Sm=class e extends vf{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ws(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(fc(e)?pm:fm)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new wf().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gm.makeRotationFromQuaternion(e),this.applyMatrix4(gm),this}rotateX(e){return gm.makeRotationX(e),this.applyMatrix4(gm),this}rotateY(e){return gm.makeRotationY(e),this.applyMatrix4(gm),this}rotateZ(e){return gm.makeRotationZ(e),this.applyMatrix4(gm),this}translate(e,t,n){return gm.makeTranslation(e,t,n),this.applyMatrix4(gm),this}scale(e,t,n){return gm.makeScale(e,t,n),this.applyMatrix4(gm),this}lookAt(e){return _m.lookAt(e),_m.updateMatrix(),this.applyMatrix4(_m.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vm).negate(),this.translate(vm.x,vm.y,vm.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new mm(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kf);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ym.setFromBufferAttribute(n),this.morphTargetsRelative?(xm.addVectors(this.boundingBox.min,ym.min),this.boundingBox.expandByPoint(xm),xm.addVectors(this.boundingBox.max,ym.max),this.boundingBox.expandByPoint(xm)):(this.boundingBox.expandByPoint(ym.min),this.boundingBox.expandByPoint(ym.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lp);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(ym.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];bm.setFromBufferAttribute(n),this.morphTargetsRelative?(xm.addVectors(ym.min,bm.min),ym.expandByPoint(xm),xm.addVectors(ym.max,bm.max),ym.expandByPoint(xm)):(ym.expandByPoint(bm.min),ym.expandByPoint(bm.max))}ym.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)xm.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(xm));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)xm.fromBufferAttribute(a,t),o&&(vm.fromBufferAttribute(e,t),xm.add(vm)),r=Math.max(r,n.distanceToSquared(xm))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new dm(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new Z,l[e]=new Z;let u=new Z,d=new Z,f=new Z,p=new X,m=new X,h=new X,g=new Z,_=new Z;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new Z,x=new Z,S=new Z,C=new Z;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new dm(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xm.fromBufferAttribute(e,t),xm.normalize(),e.setXYZ(t,xm.x,xm.y,xm.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new dm(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Cm=new vp,wm=new _p,Tm=new lp,Em=new Z,Dm=new Z,Om=new Z,km=new Z,Am=new Z,jm=new Z,Mm=new X,Nm=new X,Pm=new X,Fm=new Z,Im=new Z,Lm=new Z,Rm=new Z,zm=new Z,Bm=class extends Up{constructor(e=new Sm,t=new cm){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){jm.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Am.fromBufferAttribute(s,e),a?jm.addScaledVector(Am,r):jm.addScaledVector(Am.sub(t),r))}t.add(jm)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tm.copy(n.boundingSphere),Tm.applyMatrix4(i),wm.copy(e.ray).recast(e.near),!(Tm.containsPoint(wm.origin)===!1&&(wm.intersectSphere(Tm,Em)===null||wm.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Cm.copy(i).invert(),wm.copy(e.ray).applyMatrix4(Cm),(n.boundingBox===null||wm.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,wm)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Sc(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Sc(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Sc(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Sc(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}},Vm=class e extends Sm{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new mm(c,3)),this.setAttribute(`normal`,new mm(l,3)),this.setAttribute(`uv`,new mm(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hm={clone:Cc,merge:wc},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gm=class extends sm{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cc(e.uniforms),this.uniformsGroups=Tc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Km=class extends Up{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new vp,this.projectionMatrix=new vp,this.projectionMatrixInverse=new vp,this.coordinateSystem=_f}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qm=class extends Km{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sf*2*Math.atan(Math.tan(xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xf*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jm=-90,Ym=1,Xm=class extends Up{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qm(Jm,Ym,e,t);r.layers=this.layers,this.add(r);let i=new qm(Jm,Ym,e,t);i.layers=this.layers,this.add(i);let a=new qm(Jm,Ym,e,t);a.layers=this.layers,this.add(a);let o=new qm(Jm,Ym,e,t);o.layers=this.layers,this.add(o);let s=new qm(Jm,Ym,e,t);s.layers=this.layers,this.add(s);let c=new qm(Jm,Ym,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zm=class extends Lf{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qm=class extends Bf{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(hc(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?sf:``),this.texture=new Zm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?Rd:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vm(5,5,5),i=new Gm({name:`CubemapFromEquirect`,uniforms:Cc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Bm(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Rd),new Xm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},$m=new Z,eh=new Z,th=new wf,nh=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$m.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($m),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||th.getNormalMatrix(e),r=this.coplanarPoint($m).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rh=new lp,ih=new Z,ah=class{constructor(e=new nh,t=new nh,n=new nh,r=new nh,i=new nh,a=new nh){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_f){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rh.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rh.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rh)}intersectsSprite(e){return rh.center.set(0,0,0),rh.radius=.7071067811865476,rh.applyMatrix4(e.matrixWorld),this.intersectsSphere(rh)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ih.x=r.normal.x>0?e.max.x:e.min.x,ih.y=r.normal.y>0?e.max.y:e.min.y,ih.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ih)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oh=class e extends Sm{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new mm(p,3)),this.setAttribute(`normal`,new mm(m,3)),this.setAttribute(`uv`,new mm(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},sh={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wf},alphaMap:{value:null},alphaMapTransform:{value:new wf},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wf}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wf}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wf}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wf},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wf},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wf},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wf}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wf}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wf}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wf},alphaTest:{value:0},uvTransform:{value:new wf}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wf},alphaMap:{value:null},alphaMapTransform:{value:new wf},alphaTest:{value:0}}},ch={basic:{uniforms:wc([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:sh.meshbasic_vert,fragmentShader:sh.meshbasic_frag},lambert:{uniforms:wc([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Q(0)}}]),vertexShader:sh.meshlambert_vert,fragmentShader:sh.meshlambert_frag},phong:{uniforms:wc([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30}}]),vertexShader:sh.meshphong_vert,fragmentShader:sh.meshphong_frag},standard:{uniforms:wc([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:sh.meshphysical_vert,fragmentShader:sh.meshphysical_frag},toon:{uniforms:wc([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Q(0)}}]),vertexShader:sh.meshtoon_vert,fragmentShader:sh.meshtoon_frag},matcap:{uniforms:wc([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:sh.meshmatcap_vert,fragmentShader:sh.meshmatcap_frag},points:{uniforms:wc([$.points,$.fog]),vertexShader:sh.points_vert,fragmentShader:sh.points_frag},dashed:{uniforms:wc([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:sh.linedashed_vert,fragmentShader:sh.linedashed_frag},depth:{uniforms:wc([$.common,$.displacementmap]),vertexShader:sh.depth_vert,fragmentShader:sh.depth_frag},normal:{uniforms:wc([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:sh.meshnormal_vert,fragmentShader:sh.meshnormal_frag},sprite:{uniforms:wc([$.sprite,$.fog]),vertexShader:sh.sprite_vert,fragmentShader:sh.sprite_frag},background:{uniforms:{uvTransform:{value:new wf},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:sh.background_vert,fragmentShader:sh.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:sh.backgroundCube_vert,fragmentShader:sh.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:sh.cube_vert,fragmentShader:sh.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:sh.equirect_vert,fragmentShader:sh.equirect_frag},distanceRGBA:{uniforms:wc([$.common,$.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:sh.distanceRGBA_vert,fragmentShader:sh.distanceRGBA_frag},shadow:{uniforms:wc([$.lights,$.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:sh.shadow_vert,fragmentShader:sh.shadow_frag}},ch.physical={uniforms:wc([ch.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wf},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wf},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wf},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wf},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wf},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wf},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wf},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wf},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wf},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wf},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wf},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wf}}]),vertexShader:sh.meshphysical_vert,fragmentShader:sh.meshphysical_frag},lh={r:0,b:0,g:0},uh=class extends Km{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=4,fh=[.125,.215,.35,.446,.526,.582],ph=20,mh=new uh,hh=new Q,gh=null,_h=0,vh=0,yh=(1+Math.sqrt(5))/2,bh=1/yh,xh=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,yh,bh),new Z(0,yh,-bh),new Z(bh,0,yh),new Z(-bh,0,yh),new Z(yh,bh,0),new Z(-yh,bh,0)],Sh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rd,minFilter:Rd,generateMipmaps:!1,type:Wd,format:Kd,colorSpace:cf,depthBuffer:!1},r=Ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fc(r)),this._blurMaterial=Rc(r,e,t)}return r}_compileMaterial(e){let t=new Bm(this._lodPlanes[0],e);this._renderer.compile(t,mh)}_sceneToCubeUV(e,t,n,r){let i=new qm(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(hh),s.toneMapping=0,s.autoClear=!1;let u=new cm({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Bm(new Vm,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(hh),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Lc(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Bm(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Lc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,mh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=xh[(t-1)%xh.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Bm(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ph;m>ph&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ph}`);let h=[],g=0;for(let e=0;e<ph;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Lc(t,3*v*(r>_-dh?r-_+dh:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,mh)}},Ch=class extends Lf{constructor(e,t,n,r,i,a,o,s,c,l){if(l=l===void 0?qd:l,l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=Hd),n===void 0&&l===1027&&(n=Gd),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?Fd:o,this.minFilter=s===void 0?Fd:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wh=new Lf,Th=new Ch(1,1),Th.compareFunction=515,Eh=new Vf,Dh=new Hf,Oh=new Zm,kh=[],Ah=[],jh=new Float32Array(16),Mh=new Float32Array(9),Nh=new Float32Array(4),Ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bl(t.type)}},Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bl(t.type)}},Ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g,Rh=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Hl(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},zh=37297,Bh=0,Vh=/^[ \t]*#include +<([\w\d./]+)>/gm,Hh=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]),Uh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Wh=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kh(e),t.set(e,n)),n}},Kh=class{constructor(e){this.id=Wh++,this.code=e,this.usedTimes=0}},qh=0,Jh=class extends sm{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yh=class extends sm{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Qh=class extends qm{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$h=class extends Up{constructor(){super(),this.isGroup=!0,this.type=`Group`}},eg={type:`move`},tg=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $h,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $h,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $h,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $h;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ng=class extends vf{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=t.getContextAttributes(),h=null,g=null,_=[],v=[],y=new X,b=null,x=new qm;x.layers.enable(1),x.viewport=new Rf;let S=new qm;S.layers.enable(2),S.viewport=new Rf;let C=[x,S],w=new Qh;w.layers.enable(1),w.layers.enable(2);let T=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=_[e];return t===void 0&&(t=new tg,_[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=_[e];return t===void 0&&(t=new tg,_[e]=t),t.getGripSpace()},this.getHand=function(e){let t=_[e];return t===void 0&&(t=new tg,_[e]=t),t.getHandSpace()};function D(e){let t=v.indexOf(e.inputSource);if(t===-1)return;let n=_[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function O(){r.removeEventListener(`select`,D),r.removeEventListener(`selectstart`,D),r.removeEventListener(`selectend`,D),r.removeEventListener(`squeeze`,D),r.removeEventListener(`squeezestart`,D),r.removeEventListener(`squeezeend`,D),r.removeEventListener(`end`,O),r.removeEventListener(`inputsourceschange`,k);for(let e=0;e<_.length;e++){let t=v[e];t!==null&&(v[e]=null,_[e].disconnect(t))}T=null,E=null,e.setRenderTarget(h),f=null,d=null,u=null,r=null,g=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(h=e.getRenderTarget(),r.addEventListener(`select`,D),r.addEventListener(`selectstart`,D),r.addEventListener(`selectend`,D),r.addEventListener(`squeeze`,D),r.addEventListener(`squeezestart`,D),r.addEventListener(`squeezeend`,D),r.addEventListener(`end`,O),r.addEventListener(`inputsourceschange`,k),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new Bf(f.framebufferWidth,f.framebufferHeight,{format:Kd,type:Vd,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let n=null,a=null,o=null;m.depth&&(o=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=m.stencil?Jd:qd,a=m.stencil?Gd:Hd);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Bf(d.textureWidth,d.textureHeight,{format:Kd,type:Vd,depthTexture:new Ch(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let c=e.properties.get(g);c.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=v.indexOf(n);r>=0&&(v[r]=null,_[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=v.indexOf(n);if(r===-1){for(let e=0;e<_.length;e++)if(e>=v.length){v.push(n),r=e;break}else if(v[e]===null){v[e]=n,r=e;break}if(r===-1)break}let i=_[r];i&&i.connect(n)}}let A=new Z,j=new Z;function M(e,t,n){A.setFromMatrixPosition(t.matrixWorld),j.setFromMatrixPosition(n.matrixWorld);let r=A.distanceTo(j),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;w.near=S.near=x.near=e.near,w.far=S.far=x.far=e.far,(T!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,E=w.far);let t=e.parent,n=w.cameras;N(w,t);for(let e=0;e<n.length;e++)N(n[e],t);n.length===2?M(w,x,S):w.projectionMatrix.copy(x.projectionMatrix),P(e,w,t)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Sf*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)};let F=null;function I(t,r){if(l=r.getViewerPose(c||a),p=r,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(g,f.framebuffer),e.setRenderTarget(g));let n=!1;t.length!==w.cameras.length&&(w.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(g,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(g))}let o=C[r];o===void 0&&(o=new qm,o.layers.enable(r),o.viewport=new Rf,C[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(w.matrix.copy(o.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),n===!0&&w.cameras.push(o)}}for(let e=0;e<_.length;e++){let t=v[e],n=_[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}F&&F(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),p=null}let ee=new Dc;ee.setAnimationLoop(I),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},rg=class{constructor(e={}){let{canvas:t=mc(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;d=n===null?a:n.getContextAttributes().alpha;let f=new Uint32Array(4),p=new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sf,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new Rf,E=new Rf,D=null,O=new Q(0),k=0,A=t.width,j=t.height,M=1,N=null,P=null,F=new Rf(0,0,A,j),I=new Rf(0,0,A,j),ee=!1,L=new ah,R=!1,te=!1,z=null,ne=new vp,B=new X,re=new Z,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return S===null?M:1}let V=n;function oe(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,De,!1),t.addEventListener(`webglcontextrestored`,Oe,!1),t.addEventListener(`webglcontextcreationerror`,ke,!1),V===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(v.isWebGL1Renderer===!0&&t.shift(),V=oe(t,e),V===null)throw oe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&V instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let H,U,W,se,G,ce,le,ue,de,fe,pe,K,me,q,he,ge,_e,ve,ye,be,xe,Se,Ce,we;function Te(){H=new Uc(V),U=new Mc(V,H,e),H.init(U),Se=new Ou(V,H,U),W=new Eu(V,H,U),se=new Kc(V),G=new mu,ce=new Du(V,H,W,G,U,Se,se),le=new Pc(v),ue=new Hc(v),de=new Oc(V,U),Ce=new Ac(V,H,de,U),fe=new Wc(V,de,se,Ce),pe=new Xc(V,fe,de,se),ye=new Yc(V,U,ce),ge=new Nc(G),K=new pu(v,le,ue,H,U,Ce,ge),me=new ku(v,G),q=new vu,he=new wu(H,U),ve=new kc(v,le,ue,W,pe,d,s),_e=new Tu(v,pe,U),we=new Au(V,se,U,W),be=new jc(V,H,se,U),xe=new Gc(V,H,se,U),se.programs=K.programs,v.capabilities=U,v.extensions=H,v.properties=G,v.renderLists=q,v.shadowMap=_e,v.state=W,v.info=se}Te();let Ee=new ng(v,V);this.xr=Ee,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=H.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=H.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){if(Ee.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}A=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(A*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(F)},this.setViewport=function(e,t,n,r){e.isVector4?F.set(e.x,e.y,e.z,e.w):F.set(e,t,n,r),W.viewport(T.copy(F).multiplyScalar(M).floor())},this.getScissor=function(e){return e.copy(I)},this.setScissor=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),W.scissor(E.copy(I).multiplyScalar(M).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(e){W.setScissorTest(ee=e)},this.setOpaqueSort=function(e){N=e},this.setTransparentSort=function(e){P=e},this.getClearColor=function(e){return e.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=ve.getClearColor(),r=ve.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,V.clearBufferuiv(V.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,V.clearBufferiv(V.COLOR,0,p))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,De,!1),t.removeEventListener(`webglcontextrestored`,Oe,!1),t.removeEventListener(`webglcontextcreationerror`,ke,!1),q.dispose(),he.dispose(),G.dispose(),le.dispose(),ue.dispose(),pe.dispose(),Ce.dispose(),we.dispose(),K.dispose(),Ee.dispose(),Ee.removeEventListener(`sessionstart`,Ie),Ee.removeEventListener(`sessionend`,Le),z&&=(z.dispose(),null),Re.stop()};function De(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Oe(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=se.autoReset,t=_e.enabled,n=_e.autoUpdate,r=_e.needsUpdate,i=_e.type;Te(),se.autoReset=e,_e.enabled=t,_e.autoUpdate=n,_e.needsUpdate=r,_e.type=i}function ke(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ae(e){let t=e.target;t.removeEventListener(`dispose`,Ae),je(t)}function je(e){Me(e),G.remove(e)}function Me(e){let t=G.get(e).programs;t!==void 0&&(t.forEach(function(e){K.releaseProgram(e)}),e.isShaderMaterial&&K.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ie);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=qe(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=fe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ce.setup(i,r,s,n,c);let h,g=be;if(c!==null&&(h=de.get(c),g=xe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*ae()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*ae()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ne(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,We(e,t,n),e.side=0,e.needsUpdate=!0,We(e,t,n),e.side=2):We(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=he.get(n),h.init(),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights(v._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ne(a,n,e),r.add(a)}else Ne(t,n,e),r.add(t)}}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){G.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}H.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Pe=null;function Fe(e){Pe&&Pe(e)}function Ie(){Re.stop()}function Le(){Re.start()}let Re=new Dc;Re.setAnimationLoop(Fe),typeof self<`u`&&Re.setContext(self),this.setAnimationLoop=function(e){Pe=e,Ee.setAnimationLoop(e),e===null?Re.stop():Re.start()},Ee.addEventListener(`sessionstart`,Ie),Ee.addEventListener(`sessionend`,Le),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(t),t=Ee.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=he.get(e,_.length),h.init(),_.push(h),ne.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),L.setFromProjectionMatrix(ne),te=this.localClippingEnabled,R=ge.init(this.clippingPlanes,te),m=q.get(e,g.length),m.init(),g.push(m),ze(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(N,P),this.info.render.frame++,R===!0&&ge.beginShadows();let n=h.state.shadowsArray;if(_e.render(n,e,t),R===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(m,e),h.setupLights(v._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];Be(m,e,r,r.viewport)}}else Be(m,e,t);S!==null&&(ce.updateMultisampleRenderTarget(S),ce.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),Ce.resetDefaultState(),C=-1,w=null,_.pop(),h=_.length>0?_[_.length-1]:null,g.pop(),m=g.length>0?g[g.length-1]:null};function ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||L.intersectsSprite(e)){r&&re.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ne);let t=pe.update(e),i=e.material;i.visible&&m.push(e,t,i,n,re.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||L.intersectsObject(e))){let t=pe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),re.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),re.copy(e.boundingSphere.center)),re.applyMatrix4(e.matrixWorld).applyMatrix4(ne)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,re.z,o)}}else i.visible&&m.push(e,t,i,n,re.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ze(i[e],t,n,r)}function Be(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),R===!0&&ge.setGlobalState(v.clippingPlanes,n),a.length>0&&Ve(i,a,t,n),r&&W.viewport(T.copy(r)),i.length>0&&He(i,t,n),a.length>0&&He(a,t,n),o.length>0&&He(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Ve(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=U.isWebGL2;z===null&&(z=new Bf(1,1,{generateMipmaps:!0,type:H.has(`EXT_color_buffer_half_float`)?Wd:Vd,minFilter:Bd,samples:i?4:0})),v.getDrawingBufferSize(B),i?z.setSize(B.x,B.y):z.setSize(cc(B.x),cc(B.y));let a=v.getRenderTarget();v.setRenderTarget(z),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();let o=v.toneMapping;v.toneMapping=0,He(e,n,r),ce.updateMultisampleRenderTarget(z),ce.updateRenderTargetMipmap(z);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,Ue(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(ce.updateMultisampleRenderTarget(z),ce.updateRenderTargetMipmap(z)),v.setRenderTarget(a),v.setClearColor(O,k),v.toneMapping=o}function He(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Ue(o,t,n,s,c,l)}}function Ue(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function We(e,t,n){t.isScene!==!0&&(t=ie);let r=G.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=K.getParameters(e,i.state,a,t,n),c=K.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ue:le).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,Ae),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ke(e,s),u}else s.uniforms=K.getUniforms(e),e.onBuild(n,s,v),e.onBeforeCompile(s,v),u=K.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=ge.uniform),Ke(e,s),r.needsLights=Ye(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Ge(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rh.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ke(e,t){let n=G.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function qe(e,t,n,r,i){t.isScene!==!0&&(t=ie),ce.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:cf,c=(r.isMeshStandardMaterial?ue:le).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=G.get(r),b=h.state.lights;if(R===!0&&(te===!0||e!==w)){let t=e===w&&r.id===C;ge.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null?x=!0:y.envMap===c?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==ge.numPlanes||y.numIntersection!==ge.numIntersection)?x=!0:y.vertexAlphas===l&&y.vertexTangents===u&&y.morphTargets===d&&y.morphNormals===f&&y.morphColors===p&&y.toneMapping===m?U.isWebGL2===!0&&y.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=We(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(W.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){k.setValue(V,`projectionMatrix`,e.projectionMatrix),k.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(V,re.setFromMatrixPosition(e.matrixWorld)),U.logarithmicDepthBuffer&&k.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(V,i,`bindMatrix`),k.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(U.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(V,`boneTexture`,e.boneTexture,ce)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(k.setOptional(V,i,`batchingTexture`),k.setValue(V,`batchingTexture`,i._matricesTexture,ce));let N=n.morphAttributes;if((N.position!==void 0||N.normal!==void 0||N.color!==void 0&&U.isWebGL2===!0)&&ye.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(V,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),D&&(k.setValue(V,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&Je(A,O),a&&r.fog===!0&&me.refreshFogUniforms(A,a),me.refreshMaterialUniforms(A,r,M,j,z),Rh.upload(V,Ge(y),A,ce)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rh.upload(V,Ge(y),A,ce),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(V,`center`,i.center),k.setValue(V,`modelViewMatrix`,i.modelViewMatrix),k.setValue(V,`normalMatrix`,i.normalMatrix),k.setValue(V,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(U.isWebGL2){let n=e[t];we.update(n,T),we.bind(n,T)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return T}function Je(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ye(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){G.get(e.texture).__webglTexture=t,G.get(e.depthTexture).__webglTexture=n;let r=G.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||H.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=G.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=G.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?ce.setupRenderTarget(e):s.__hasExternalTextures&&ce.rebindTextures(e,G.get(e.texture).__webglTexture,G.get(e.depthTexture).__webglTexture):(W.bindFramebuffer(V.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=G.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=U.isWebGL2&&e.samples>0&&ce.useMultisampledRTT(e)===!1?G.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(F).multiplyScalar(M).floor(),E.copy(I).multiplyScalar(M).floor(),D=ee;if(W.bindFramebuffer(V.FRAMEBUFFER,i)&&U.drawBuffers&&r&&W.drawBuffers(e,i),W.viewport(T),W.scissor(E),W.setScissorTest(D),a){let r=G.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=G.get(e.texture),i=t||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=G.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){W.bindFramebuffer(V.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&Se.convert(s)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(H.has(`EXT_color_buffer_half_float`)||U.isWebGL2&&H.has(`EXT_color_buffer_float`));if(c!==1009&&Se.convert(c)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(U.isWebGL2||H.has(`OES_texture_float`)||H.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Se.convert(s),Se.convert(c),a)}finally{let e=S===null?null:G.get(S).__webglFramebuffer;W.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);ce.setTexture2D(t,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,e.x,e.y,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=Se.convert(n.format),s=Se.convert(n.type);ce.setTexture2D(n,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,n.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(v.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=Se.convert(r.format),l=Se.convert(r.type),u;if(r.isData3DTexture)ce.setTexture3D(r,0),u=V.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)ce.setTexture2DArray(r,0),u=V.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,r.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,r.unpackAlignment);let d=V.getParameter(V.UNPACK_ROW_LENGTH),f=V.getParameter(V.UNPACK_IMAGE_HEIGHT),p=V.getParameter(V.UNPACK_SKIP_PIXELS),m=V.getParameter(V.UNPACK_SKIP_ROWS),h=V.getParameter(V.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,g.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,g.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,e.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,e.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?V.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),V.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):V.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),V.pixelStorei(V.UNPACK_ROW_LENGTH,d),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,f),V.pixelStorei(V.UNPACK_SKIP_PIXELS,p),V.pixelStorei(V.UNPACK_SKIP_ROWS,m),V.pixelStorei(V.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&V.generateMipmap(u),W.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?ce.setTextureCube(e,0):e.isData3DTexture?ce.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ce.setTexture2DArray(e,0):ce.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,W.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return _f}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=jf.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?rf:nf}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?sf:cf}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},ig=class extends rg{},ig.prototype.isWebGL1Renderer=!0,ag=class extends Up{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},og=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=hf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ws()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ws()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ws()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sg=new Z,cg=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sg.fromBufferAttribute(this,t),sg.applyMatrix4(e),this.setXYZ(t,sg.x,sg.y,sg.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sg.fromBufferAttribute(this,t),sg.applyNormalMatrix(e),this.setXYZ(t,sg.x,sg.y,sg.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sg.fromBufferAttribute(this,t),sg.transformDirection(e),this.setXYZ(t,sg.x,sg.y,sg.z);return this}setX(e,t){return this.normalized&&(t=dc(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dc(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dc(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dc(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=uc(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=uc(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=uc(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=uc(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dc(t,this.array),n=dc(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dc(t,this.array),n=dc(n,this.array),r=dc(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dc(t,this.array),n=dc(n,this.array),r=dc(r,this.array),i=dc(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new dm(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},lg=new Z,ug=new Rf,dg=new Rf,fg=new Z,pg=new vp,mg=new Z,hg=new lp,gg=new vp,_g=new _p,vg=class extends Bm{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=jd,this.bindMatrix=new vp,this.bindMatrixInverse=new vp,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kf),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,mg),this.boundingBox.expandByPoint(mg)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new lp),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,mg),this.boundingSphere.expandByPoint(mg)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hg.copy(this.boundingSphere),hg.applyMatrix4(r),e.ray.intersectsSphere(hg)!==!1&&(gg.copy(r).invert(),_g.copy(e.ray).applyMatrix4(gg),(this.boundingBox===null||_g.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,_g)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rf,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;ug.fromBufferAttribute(r.attributes.skinIndex,e),dg.fromBufferAttribute(r.attributes.skinWeight,e),lg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=dg.getComponent(e);if(r!==0){let i=ug.getComponent(e);pg.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(fg.copy(lg).applyMatrix4(pg),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn(`THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151.`),this.applyBoneTransform(e,t)}},yg=class extends Up{constructor(){super(),this.isBone=!0,this.type=`Bone`}},bg=class extends Lf{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Fd,l=Fd,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xg=new vp,Sg=new vp,Cg=class e{constructor(e=[],t=[]){this.uuid=Ws(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new vp)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new vp;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Sg;xg.multiplyMatrices(i,t[r]),xg.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new bg(t,e,e,Kd,Ud);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new yg),this.bones.push(i),this.boneInverses.push(new vp().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},wg=class extends dm{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Tg=new vp,Eg=new vp,Dg=[],Og=new Kf,kg=new vp,Ag=new Bm,jg=new lp,Mg=class extends Bm{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wg(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,kg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kf),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tg),Og.copy(e.boundingBox).applyMatrix4(Tg),this.boundingBox.union(Og)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new lp),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tg),jg.copy(e.boundingSphere).applyMatrix4(Tg),this.boundingSphere.union(jg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ag.geometry=this.geometry,Ag.material=this.material,Ag.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jg.copy(this.boundingSphere),jg.applyMatrix4(n),e.ray.intersectsSphere(jg)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Tg),Eg.multiplyMatrices(n,Tg),Ag.matrixWorld=Eg,Ag.raycast(e,Dg);for(let e=0,n=Dg.length;e<n;e++){let n=Dg[e];n.instanceId=i,n.object=this,t.push(n)}Dg.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},Ng=class extends sm{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pg=new Z,Fg=new Z,Ig=new vp,Lg=new _p,Rg=new lp,zg=class extends Up{constructor(e=new Sm,t=new Ng){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Pg.fromBufferAttribute(t,e-1),Fg.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Pg.distanceTo(Fg);e.setAttribute(`lineDistance`,new mm(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rg.copy(n.boundingSphere),Rg.applyMatrix4(r),Rg.radius+=i,e.ray.intersectsSphere(Rg)===!1)return;Ig.copy(r).invert(),Lg.copy(e.ray).applyMatrix4(Ig);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new Z,l=new Z,u=new Z,d=new Z,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),Lg.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),Lg.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},Bg=new Z,Vg=new Z,Hg=class extends zg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Bg.fromBufferAttribute(t,e),Vg.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Bg.distanceTo(Vg);e.setAttribute(`lineDistance`,new mm(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ug=class extends zg{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Wg=class extends sm{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gg=new vp,Kg=new _p,qg=new lp,Jg=new Z,Yg=class extends Up{constructor(e=new Sm,t=new Wg){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qg.copy(n.boundingSphere),qg.applyMatrix4(r),qg.radius+=i,e.ray.intersectsSphere(qg)===!1)return;Gg.copy(r).invert(),Kg.copy(e.ray).applyMatrix4(Gg);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Jg.fromBufferAttribute(l,n),ju(Jg,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Jg.fromBufferAttribute(l,a),ju(Jg,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},Xg=class extends Lf{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zg=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new X:new Z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new Z,r=[],i=[],a=[],o=new Z,s=new vp;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Z)}i[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Gs(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Gs(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qg=class extends Zg{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let n=t||new X,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$g=class extends Qg{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}},e_=new Z,t_=new Mu,n_=new Mu,r_=new Mu,i_=class extends Zg{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(e_.subVectors(r[0],r[1]).add(r[0]),c=e_);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(e_.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=e_),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),t_.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),n_.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),r_.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(t_.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),n_.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),r_.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(t_.calc(s),n_.calc(s),r_.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},a_=class extends Zg{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Hu(e,r.x,i.x,a.x,o.x),Hu(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},o_=class extends Zg{constructor(e=new Z,t=new Z,n=new Z,r=new Z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Hu(e,r.x,i.x,a.x,o.x),Hu(e,r.y,i.y,a.y,o.y),Hu(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},s_=class extends Zg{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},c_=class extends Zg{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},l_=class extends Zg{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Lu(e,r.x,i.x,a.x),Lu(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},u_=class extends Zg{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Lu(e,r.x,i.x,a.x),Lu(e,r.y,i.y,a.y),Lu(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},d_=class extends Zg{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new X){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Nu(o,s.x,c.x,l.x,u.x),Nu(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new X().fromArray(n))}return this}},f_=Object.freeze({__proto__:null,ArcCurve:$g,CatmullRomCurve3:i_,CubicBezierCurve:a_,CubicBezierCurve3:o_,EllipseCurve:Qg,LineCurve:s_,LineCurve3:c_,QuadraticBezierCurve:l_,QuadraticBezierCurve3:u_,SplineCurve:d_}),p_=class extends Zg{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new f_[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new f_[n.type]().fromJSON(n))}return this}},m_=class extends p_{constructor(e){super(),this.type=`Path`,this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new s_(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new l_(this.currentPoint.clone(),new X(e,t),new X(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new a_(this.currentPoint.clone(),new X(e,t),new X(n,r),new X(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new d_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Qg(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},h_=new Z,g_=new Z,__=new Z,v_=new tm,y_=class extends Sm{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(xf*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=v_;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),v_.getNormal(__),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=v_[c[e]],o=v_[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(__.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:__.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];h_.fromBufferAttribute(a,t),g_.fromBufferAttribute(a,n),d.push(h_.x,h_.y,h_.z),d.push(g_.x,g_.y,g_.z)}this.setAttribute(`position`,new mm(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},b_=class extends m_{constructor(e){super(e),this.uuid=Ws(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new m_().fromJSON(n))}return this}},x_={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Uu(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Xu(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Gu(a,o,n,s,c,p,0),o}},S_=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];bd(e),xd(n,e);let a=e.length;t.forEach(bd);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,xd(n,t[e]);let o=x_.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}},C_=class e extends Sm{constructor(e=new b_([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new mm(r,3)),this.setAttribute(`uv`,new mm(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?w_:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new Z,b=new Z,x=new Z),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!S_.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];S_.isClockWise(t)&&(w[e]=t.reverse())}}let T=S_.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new X(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new X(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],N,P=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);R(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);R(i.x,i.y,-n)}}}let F=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],P[e],F):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),R(x.x,x.y,x.z)):R(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],P[t],F):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),R(x.x,x.y,x.z)):R(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);R(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);_?R(i.x,i.y+g[s-1].y,g[s-1].x+n):R(i.x,i.y,c+n)}}}I(),ee();function I(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];te(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];te(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];te(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];te(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function ee(){let e=r.length/3,t=0;L(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];L(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function L(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);z(t+r+n,t+i+n,t+i+a,t+r+a)}}}function R(e,t,n){a.push(e),a.push(t),a.push(n)}function te(e,t,i){ne(e),ne(t),ne(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);B(o[0]),B(o[1]),B(o[2])}function z(e,t,i,a){ne(e),ne(t),ne(a),ne(t),ne(i),ne(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);B(s[0]),B(s[1]),B(s[3]),B(s[1]),B(s[2]),B(s[3])}function ne(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function B(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sd(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new f_[i.type]().fromJSON(i)),new e(r,t.options)}},w_={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new X(a,o),new X(s,c),new X(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new X(o,1-c),new X(l,1-d),new X(f,1-m),new X(h,1-_)]:[new X(s,1-c),new X(u,1-d),new X(p,1-m),new X(g,1-_)]}},T_=class extends sm{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},E_=class extends T_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gs(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},D_=class extends sm{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new Q(16777215),this.specular=new Q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},O_=class extends sm{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},k_=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},A_=class extends k_{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qd,endingEnd:Qd}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case $d:i=e,o=2*t-n;break;case ef:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case $d:a=e,s=2*n-t;break;case ef:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},j_=class extends k_{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},M_=class extends k_{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},N_=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Cd(t,this.TimeBufferType),this.values=Cd(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cd(e.times,Array),values:Cd(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new M_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new j_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new A_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Yd:t=this.InterpolantFactoryMethodDiscrete;break;case Xd:t=this.InterpolantFactoryMethodLinear;break;case Zd:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yd;case this.InterpolantFactoryMethodLinear:return Xd;case this.InterpolantFactoryMethodSmooth:return Zd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&wd(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Zd,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},N_.prototype.TimeBufferType=Float32Array,N_.prototype.ValueBufferType=Float32Array,N_.prototype.DefaultInterpolation=Xd,P_=class extends N_{},P_.prototype.ValueTypeName=`bool`,P_.prototype.ValueBufferType=Array,P_.prototype.DefaultInterpolation=Yd,P_.prototype.InterpolantFactoryMethodLinear=void 0,P_.prototype.InterpolantFactoryMethodSmooth=void 0,F_=class extends N_{},F_.prototype.ValueTypeName=`color`,I_=class extends N_{},I_.prototype.ValueTypeName=`number`,L_=class extends k_{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Uf.slerpFlat(i,0,a,c-o,a,c,s);return i}},R_=class extends N_{InterpolantFactoryMethodLinear(e){return new L_(this.times,this.values,this.getValueSize(),e)}},R_.prototype.ValueTypeName=`quaternion`,R_.prototype.DefaultInterpolation=Xd,R_.prototype.InterpolantFactoryMethodSmooth=void 0,z_=class extends N_{},z_.prototype.ValueTypeName=`string`,z_.prototype.ValueBufferType=Array,z_.prototype.DefaultInterpolation=Yd,z_.prototype.InterpolantFactoryMethodLinear=void 0,z_.prototype.InterpolantFactoryMethodSmooth=void 0,B_=class extends N_{},B_.prototype.ValueTypeName=`vector`,V_=class{constructor(e,t=-1,n,r=tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ws(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(kd(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(N_.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Td(o);o=Ed(o,1,c),s=Ed(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new I_(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Dd(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new I_(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(B_,a+`.position`,i,`pos`,r),n(R_,a+`.quaternion`,i,`rot`,r),n(B_,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}},H_={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},U_=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},W_=new U_,G_=class{constructor(e){this.manager=e===void 0?W_:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},G_.DEFAULT_MATERIAL_NAME=`__DEFAULT`,K_={},q_=class extends Error{constructor(e,t){super(e),this.response=t}},J_=class extends G_{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=H_.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(K_[e]!==void 0){K_[e].push({onLoad:t,onProgress:n,onError:r});return}K_[e]=[],K_[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=K_[e],r=t.body.getReader(),i=t.headers.get(`Content-Length`)||t.headers.get(`X-File-Size`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}})}}});return new Response(c)}throw new q_(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{H_.add(e,t);let n=K_[e];delete K_[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=K_[e];if(n===void 0)throw this.manager.itemError(e),t;delete K_[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Y_=class extends G_{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=H_.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=pc(`img`);function s(){l(),H_.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},X_=class extends G_{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new bg,o=new J_(this.manager);return o.setResponseType(`arraybuffer`),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(e){let n;try{n=i.parse(e)}catch(e){if(r!==void 0)r(e);else{console.error(e);return}}n.image===void 0?n.data!==void 0&&(a.image.width=n.width,a.image.height=n.height,a.image.data=n.data):a.image=n.image,a.wrapS=n.wrapS===void 0?Nd:n.wrapS,a.wrapT=n.wrapT===void 0?Nd:n.wrapT,a.magFilter=n.magFilter===void 0?Rd:n.magFilter,a.minFilter=n.minFilter===void 0?Rd:n.minFilter,a.anisotropy=n.anisotropy===void 0?1:n.anisotropy,n.colorSpace===void 0?n.encoding!==void 0&&(a.encoding=n.encoding):a.colorSpace=n.colorSpace,n.flipY!==void 0&&(a.flipY=n.flipY),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.mipmaps!==void 0&&(a.mipmaps=n.mipmaps,a.minFilter=Bd),n.mipmapCount===1&&(a.minFilter=Rd),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),a.needsUpdate=!0,t&&t(a,n)},n,r),a}},Z_=class extends G_{constructor(e){super(e)}load(e,t,n,r){let i=new Lf,a=new Y_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Q_=class extends Up{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Q(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$_=class extends Q_{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Up.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ev=new vp,tv=new Z,nv=new Z,rv=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new vp,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Rf(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tv.setFromMatrixPosition(e.matrixWorld),t.position.copy(tv),nv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nv),t.updateMatrixWorld(),ev.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ev),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ev)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},iv=class extends rv{constructor(){super(new qm(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Sf*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},av=class extends Q_{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Up.DEFAULT_UP),this.updateMatrix(),this.target=new Up,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new iv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ov=new vp,sv=new Z,cv=new Z,lv=class extends rv{constructor(){super(new qm(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new Rf(2,1,1,1),new Rf(0,1,1,1),new Rf(3,1,1,1),new Rf(1,1,1,1),new Rf(3,0,1,1),new Rf(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),sv.setFromMatrixPosition(e.matrixWorld),n.position.copy(sv),cv.copy(n.position),cv.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cv),n.updateMatrixWorld(),r.makeTranslation(-sv.x,-sv.y,-sv.z),ov.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ov)}},uv=class extends Q_{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new lv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dv=class extends rv{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fv=class extends Q_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Up.DEFAULT_UP),this.updateMatrix(),this.target=new Up,this.shadow=new dv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pv=class extends Q_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},mv=class{static decodeText(e){if(typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},hv=class extends G_{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=H_.get(e);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{t&&t(n),i.manager.itemEnd(e)}).catch(e=>{r&&r(e)});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){return H_.add(e,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),H_.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});H_.add(e,s),i.manager.itemStart(e)}},gv=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},_v=`\\[\\]\\.:\\/`,vv=RegExp(`[\\[\\]\\.:\\/]`,`g`),yv=`[^\\[\\]\\.:\\/]`,bv=`[^`+_v.replace(`\\.`,``)+`]`,xv=`((?:WC+[\\/:])*)`.replace(`WC`,yv),Sv=`(WCOD+)?`.replace(`WCOD`,bv),Cv=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,yv),wv=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,yv),Tv=RegExp(`^`+xv+Sv+Cv+wv+`$`),Ev=[`material`,`materials`,`bones`,`map`],Dv=class{constructor(e,t,n){let r=n||Ov.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ov=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(vv,``)}static parseTrackName(e){let t=Tv.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ev.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},Ov.Composite=Dv,Ov.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ov.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ov.prototype.GetterByBindingType=[Ov.prototype._getValue_direct,Ov.prototype._getValue_array,Ov.prototype._getValue_arrayElement,Ov.prototype._getValue_toArray],Ov.prototype.SetterByBindingTypeAndVersioning=[[Ov.prototype._setValue_direct,Ov.prototype._setValue_direct_setNeedsUpdate,Ov.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ov.prototype._setValue_array,Ov.prototype._setValue_array_setNeedsUpdate,Ov.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ov.prototype._setValue_arrayElement,Ov.prototype._setValue_arrayElement_setNeedsUpdate,Ov.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ov.prototype._setValue_fromArray,Ov.prototype._setValue_fromArray_setNeedsUpdate,Ov.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`)})),Av,jv=e((()=>{kv(),Av=class{constructor(e){this.canvas=e,this.scene=new ag,this.camera=new qm(60,window.innerWidth/window.innerHeight,.1,3e3),this.camera.position.z=250,this.scene.add(this.camera),this.renderer=new rg({canvas:this.canvas,alpha:!0,antialias:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.2,this.clock=new gv,this.onResize=this.onResize.bind(this),window.addEventListener(`resize`,this.onResize)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}dispose(){window.removeEventListener(`resize`,this.onResize),this.renderer.dispose()}}})),Mv,Nv=e((()=>{kv(),Mv=class{constructor(e){this.scene=e,this.ambientLight=new pv(16777215,.4),this.scene.add(this.ambientLight),this.hemiLight=new $_(657935,0,1),this.scene.add(this.hemiLight),this.keyLight=new fv(16777215,.5),this.keyLight.position.set(50,100,50),this.scene.add(this.keyLight),this.rimLight1=new fv(3718648,.5),this.rimLight1.position.set(-100,-50,-100),this.scene.add(this.rimLight1),this.rimLight2=new fv(13172480,.2),this.rimLight2.position.set(100,-50,-50),this.scene.add(this.rimLight2),this.centerLight=new uv(3718648,.5,300),this.centerLight.position.set(0,0,0),this.scene.add(this.centerLight),this.palettes=[{rim1:3718648,rim2:13172480,center:3718648},{rim1:13172480,rim2:7256319,center:16777215},{rim1:3718648,rim2:3718648,center:13172480}],this.currentPalette=0}update(e){this.rimLight1.position.x=-100+Math.sin(e*.5)*20,this.rimLight2.position.x=100+Math.cos(e*.3)*20;let t=e%5,n=0;if(t<3){let e=t/3;n=e*e*(3-2*e)}else{let e=(t-3)/2;n=1-e*e*(3-2*e)}this.keyLight.intensity=.3+n*1.2,this.rimLight2.intensity=.1+n*1,this.centerLight.intensity=.2+n*.9}}})),Pv,Fv=e((()=>{Pv={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}})),Iv,Lv,Rv,zv,Bv,Vv=e((()=>{kv(),Iv=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Lv=new uh(-1,1,1,-1,0,1),Rv=class extends Sm{constructor(){super(),this.setAttribute(`position`,new mm([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new mm([0,2,0,0,2,0],2))}},zv=new Rv,Bv=class{constructor(e){this._mesh=new Bm(zv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}})),Hv,Uv=e((()=>{kv(),Vv(),Hv=class extends Iv{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof Gm?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hm.clone(e.uniforms),this.material=new Gm({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bv(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}})),Wv,Gv,Kv=e((()=>{Vv(),Wv=class extends Iv{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Gv=class extends Iv{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}})),qv,Jv=e((()=>{kv(),Fv(),Uv(),Kv(),qv=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new X);this._width=n.width,this._height=n.height,t=new Bf(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wd}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hv(Pv),this.copyPass.material.blending=0,this.clock=new gv}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Wv!==void 0&&(r instanceof Wv?n=!0:r instanceof Gv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new X);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}})),Yv,Xv=e((()=>{kv(),Vv(),Yv=class extends Iv{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Q}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}})),Zv,Qv=e((()=>{kv(),Zv={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}})),$v,ey=e((()=>{kv(),Vv(),Fv(),Qv(),$v=class e extends Iv{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new X(256,256):new X(e.x,e.y),this.clearColor=new Q(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Bf(i,a,{type:Wd}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Bf(i,a,{type:Wd});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Bf(i,a,{type:Wd});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Zv;this.highPassUniforms=Hm.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gm({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new X(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=Pv;this.copyUniforms=Hm.clone(l.uniforms),this.blendMaterial=new Gm({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Q,this.oldClearAlpha=1,this.basic=new cm,this.fsQuad=new Bv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new X(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Gm({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new X(.5,.5)},direction:{value:new X(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Gm({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}},$v.BlurDirectionX=new X(1,0),$v.BlurDirectionY=new X(0,1)})),ty,ny=e((()=>{kv(),ty={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new X(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`}})),ry,iy=e((()=>{kv(),Jv(),Xv(),ey(),Uv(),ny(),ry=class{constructor(e,t,n){this.composer=new qv(e);let r=new Yv(t,n);this.composer.addPass(r),this.fxaaPass=new Hv(ty);let i=e.getPixelRatio();this.fxaaPass.material.uniforms.resolution.value.x=1/(window.innerWidth*i),this.fxaaPass.material.uniforms.resolution.value.y=1/(window.innerHeight*i),this.composer.addPass(this.fxaaPass),this.bloomPass=new $v(new X(window.innerWidth,window.innerHeight),.5,.4,.35),this.composer.addPass(this.bloomPass)}resize(e,t,n){this.composer.setSize(e,t),this.fxaaPass.material.uniforms.resolution.value.x=1/(e*n),this.fxaaPass.material.uniforms.resolution.value.y=1/(t*n)}render(){this.composer.render()}}})),ay,oy=e((()=>{kv(),ay=class{constructor(e){this.scene=e,this.particleCount=15e3,this.geometry=new Sm,this.patterns=[],this.range=1200;let t=new Float32Array(this.particleCount*3),n=new Q(16777215),r=new Q(3718648),i=new Q(13172480);for(let e=0;e<this.particleCount;e++){let a=Math.random(),o;o=a<.7?n:a<.9?r:i,t[e*3]=o.r,t[e*3+1]=o.g,t[e*3+2]=o.b}this.geometry.setAttribute(`color`,new dm(t,3));let a=new Float32Array(this.particleCount*3);for(let e=0;e<this.particleCount;e++)a[e*3]=(Math.random()-.5)*this.range,a[e*3+1]=(Math.random()-.5)*this.range,a[e*3+2]=(Math.random()-.5)*this.range-100;this.patterns.push(a);let o=new Float32Array(this.particleCount*3),s=Math.ceil(this.particleCount**(1/3)),c=800/s,l=0;for(let e=0;e<s;e++)for(let t=0;t<s;t++)for(let n=0;n<s;n++)l<this.particleCount&&(o[l*3]=(e-s/2)*c,o[l*3+1]=(t-s/2)*c,o[l*3+2]=(n-s/2)*c-100,l++);this.patterns.push(o);let u=new Float32Array(this.particleCount*3);for(let e=0;e<this.particleCount;e++){let t=e/this.particleCount,n=t*Math.PI*40,r=(t-.5)*1e3,i=e%2==0?0:Math.PI;u[e*3]=Math.cos(n+i)*200,u[e*3+1]=r,u[e*3+2]=Math.sin(n+i)*200-100}this.patterns.push(u);let d=new Float32Array(this.particleCount*3);for(let e=0;e<this.particleCount;e++){let t=Math.acos(-1+2*e/this.particleCount),n=Math.sqrt(this.particleCount*Math.PI)*t;d[e*3]=400*Math.cos(n)*Math.sin(t),d[e*3+1]=400*Math.sin(n)*Math.sin(t),d[e*3+2]=400*Math.cos(t)-100}this.patterns.push(d);let f=new Float32Array(this.particleCount*3),p=Math.ceil(Math.sqrt(this.particleCount)),m=1e3/p;for(let e=0;e<this.particleCount;e++){let t=e%p,n=Math.floor(e/p),r=(t-p/2)*m,i=(n-p/2)*m,a=Math.sin(r*.01)*Math.cos(i*.01)*200;f[e*3]=r,f[e*3+1]=a,f[e*3+2]=i-100}this.patterns.push(f);let h=new Float32Array(this.particleCount*3);for(let e=0;e<this.particleCount;e++){let t=Math.random()*Math.PI*2,n=(Math.random()-.5)*1200;h[e*3]=Math.cos(t)*300,h[e*3+1]=n,h[e*3+2]=Math.sin(t)*300-100}this.patterns.push(h);let g=new Float32Array(this.patterns[0]);this.geometry.setAttribute(`position`,new dm(g,3)),this.material=new Wg({size:1.4,vertexColors:!0,transparent:!0,opacity:.35,blending:2,depthWrite:!1,sizeAttenuation:!1}),this.points=new Yg(this.geometry,this.material),this.scene.add(this.points),this.innerCount=500,this.innerGeom=new Sm;let _=new Float32Array(this.innerCount*3);for(let e=0;e<this.innerCount;e++){let t=Math.random()*Math.PI*2,n=Math.acos(Math.random()*2-1),r=40+Math.random()*40;_[e*3]=r*Math.sin(n)*Math.cos(t),_[e*3+1]=r*Math.sin(n)*Math.sin(t),_[e*3+2]=r*Math.cos(n)}this.innerGeom.setAttribute(`position`,new dm(_,3)),this.innerMat=new Wg({size:1.4,transparent:!0,opacity:.35,blending:2,depthWrite:!1,sizeAttenuation:!1}),this.innerPoints=new Yg(this.innerGeom,this.innerMat),this.scene.add(this.innerPoints),this.gridGeom=new Sm;let v=[],y=[];this.gridStep=2e3;let b=new Q(3718648),x=new Q(13172480),S=new Q(16777215);for(let e=0;e<2500;e++){let e=(Math.random()-.5)*4e3,t=(Math.random()-.5)*3e3,n=Math.random()*-this.gridStep,r=40+Math.random()*150,i,a=Math.random();i=a>.8?S:a>.4?b:x,v.push(e,t,n),v.push(e,t,n+r),y.push(i.r,i.g,i.b),y.push(i.r,i.g,i.b),v.push(e,t,n-this.gridStep),v.push(e,t,n-this.gridStep+r),y.push(i.r,i.g,i.b),y.push(i.r,i.g,i.b)}this.gridGeom.setAttribute(`position`,new dm(new Float32Array(v),3)),this.gridGeom.setAttribute(`color`,new dm(new Float32Array(y),3)),this.gridMat=new Ng({vertexColors:!0,transparent:!0,opacity:0,blending:2,depthWrite:!1}),this.gridLines=new Hg(this.gridGeom,this.gridMat),this.scene.add(this.gridLines)}update(e,t,n,r=0,i=null){i&&(this.material.color.copy(i),this.innerMat.color.copy(i),this.gridMat.color.copy(i));let a=Math.round(n||0),o=this.patterns[a]||this.patterns[0],s=this.geometry.attributes.position.array,c=!1;for(let e=0;e<this.particleCount*3;e++){let t=o[e]-s[e],n=Math.abs(t);if(n>.1){let r=Math.min(n/300,1),i=.015+r*r*r*.06;s[e]+=t*i,c=!0}}c&&(this.geometry.attributes.position.needsUpdate=!0),a===6?(this.material.opacity=Cf.lerp(this.material.opacity,.35,.02),this.gridMat.opacity=Cf.lerp(this.gridMat.opacity,1,.025),this.gridLines.position.z+=6,this.gridLines.position.z>this.gridStep&&(this.gridLines.position.z-=this.gridStep)):(this.material.opacity=Cf.lerp(this.material.opacity,.35,.02),this.gridMat.opacity=Cf.lerp(this.gridMat.opacity,0,.025));let l=e*.004,u=e*.001,d=e*.03,f=Math.sin(e*.08)*.05;r===0?(l=e*.02,u=e*.01):r===1?(l=e*.05,u=Math.sin(e*.5)*.02):r===2?(l=e*.08,u=e*.03,f=Math.cos(e*.2)*.1):r===3&&(l=-e*.015,u=Math.sin(e*.1)*.005),this.points.rotation.y=l,this.points.rotation.x=u,this.innerPoints.rotation.y=d,this.innerPoints.rotation.z=f;let p=e%5,m=0;if(p<3){let e=p/3;m=e*e*(3-2*e)}else{let e=(p-3)/2;m=1-e*e*(3-2*e)}let h=.02+m*.18;this.innerMat.opacity=Cf.lerp(this.innerMat.opacity,h,.1)}}})),sy,cy=e((()=>{kv(),sy=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.geometry=new oh(5e3,5e3),this.material=new Gm({uniforms:{uTime:{value:0},uOpacity:{value:1},uResolution:{value:new X(window.innerWidth,window.innerHeight)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        uniform vec2 uResolution;
        varying vec2 vUv;

        // Ashima's 2D Simplex Noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        // Smooth maximum function for blending strands like liquid
        float smax(float a, float b, float k) {
            float h = clamp(0.5 + 0.5 * (a - b) / k, 0.0, 1.0);
            return mix(b, a, h) + k * h * (1.0 - h);
        }

        // Helper to generate a smooth, rounded ridge
        float getStrand(float d, float r) {
            float sqDist = (d * d) / (r * r);
            float h = clamp(1.0 - sqDist, 0.0, 1.0);
            return h * h * (3.0 - 2.0 * h); // smoothstep curve
        }

        // Fakes a 3D heightmap using 2D math
        float map(vec2 p, float time) {
            float h = 0.0;
            
            // Strand 1 (Main flowing curve)
            float wave1 = sin(p.x * 0.8 + time * 0.4) * 0.25 + sin(p.x * 0.3 - time * 0.2) * 0.15;
            float r1 = 0.25 + sin(p.x * 1.5 + time) * 0.05;
            h = smax(h, getStrand(p.y - wave1, r1) * 0.9, 0.15);
            
            // Strand 2 (Twisting counterpart)
            float wave2 = cos(p.x * 1.1 - time * 0.3) * 0.2 - sin(p.x * 0.6 + time * 0.5) * 0.1 - 0.05;
            float r2 = 0.18 + cos(p.x * 1.2 - time * 1.2) * 0.05;
            h = smax(h, getStrand(p.y - wave2, r2) * 0.8, 0.15);
            
            // Strand 3 (Thick background base)
            float wave3 = sin(p.x * 0.5 + time * 0.6) * 0.2 + 0.1;
            float r3 = 0.35;
            h = smax(h, getStrand(p.y - wave3, r3) * 0.7, 0.2);
            
            return h;
        }

        // Calculates a 3D normal from the 2D heightmap for glossy lighting
        vec3 calcNormal(vec2 p, float time) {
            float eps = 0.005;
            float hx = (map(p + vec2(eps, 0.0), time) - map(p - vec2(eps, 0.0), time)) / (2.0 * eps);
            float hy = (map(p + vec2(0.0, eps), time) - map(p - vec2(0.0, eps), time)) / (2.0 * eps);
            
            float heightScale = 0.5;
            vec3 n = vec3(-hx * heightScale, -hy * heightScale, 1.0);
            return normalize(n);
        }

        void main() {
          vec2 uv = vUv;
          vec2 p = uv * 2.0 - 1.0;
          
          p.x *= uResolution.x / uResolution.y;
          
          float time = uTime * 0.8; // Moderate speed for elegant flow
          
          // Deep premium dark forest green background (#07120a)
          vec3 bg = vec3(0.027, 0.071, 0.039); 
          vec3 col = bg;
          
          // Domain warping on position to make it look liquid and organic
          vec2 wp = p;
          wp.x += snoise(vec2(p.x * 0.8, time * 0.2)) * 0.2;
          wp.y += snoise(vec2(p.y * 0.8, time * 0.2)) * 0.1;
          
          float h = map(wp, time);
          
          if (h > 0.01) {
              vec3 n = calcNormal(wp, time);
              
              // Key Light (Top Right)
              vec3 lightDir = normalize(vec3(0.8, 0.8, 1.0)); 
              vec3 viewDir = vec3(0.0, 0.0, 1.0); 
              
              float diff = max(dot(n, lightDir), 0.0);
              
              // Glossy Specular Highlight
              vec3 halfVector = normalize(lightDir + viewDir);
              float spec = pow(max(dot(n, halfVector), 0.0), 80.0); 
              
              // Rim Light / Ambient Light (Bottom Left)
              vec3 lightDir2 = normalize(vec3(-0.8, -0.5, 0.5)); 
              float diff2 = max(dot(n, lightDir2), 0.0);
              
              // Forest Green & Neon Lime Palette
              vec3 colorDeep = vec3(0.027, 0.071, 0.039) * 0.5; // Dark forest core
              vec3 colorMid = vec3(0.1, 0.25, 0.15) * 0.6;      // Mid-tone green
              vec3 colorHigh = vec3(0.78, 1.0, 0.0) * 0.8;      // Electric neon lime
              vec3 colorVar = vec3(0.2, 0.4, 0.2) * 0.5;        // Sage variation
              
              // Color mapping based on height
              vec3 albedo = mix(colorDeep, colorMid, smoothstep(0.2, 0.7, h));
              albedo = mix(albedo, colorHigh, smoothstep(0.85, 1.0, h)); // Only highest peaks get neon
              
              albedo = mix(albedo, colorVar, sin(wp.x * 2.0 + time) * 0.15 + 0.15);
              
              vec3 litColor = albedo * (diff * 0.9 + 0.1); 
              litColor += mix(colorVar, colorHigh, 0.3) * spec * 0.6; 
              litColor += colorMid * diff2 * 0.5;
              
              float alpha = smoothstep(0.0, 0.1, h);
              col = mix(bg, litColor, alpha);
          }
          
          // Softly darken edges so the UI text pops
          col *= 1.0 - smoothstep(1.0, 3.0, length(p));
          
          // Dim the entire silk fluid slightly to preserve hero readability
          col *= 0.75;
          
          gl_FragColor = vec4(col, uOpacity);
        }
      `,transparent:!0,depthWrite:!1}),this.mesh=new Bm(this.geometry,this.material),this.mesh.position.set(0,0,-200),this.group.add(this.mesh),window.addEventListener(`resize`,()=>{this.material.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight)})}update(e){this.material.uniforms.uTime.value=e;let t=1-(window.scrollY||window.pageYOffset)/800;t=Math.max(0,Math.min(1,t)),this.material.uniforms.uOpacity.value=t,this.group.visible=t>0}}})),ly,uy=e((()=>{kv(),ly=class extends X_{constructor(e){super(e)}parse(e){function t(e){switch(e.image_type){case d:case m:if(e.colormap_length>256||e.colormap_size!==24||e.colormap_type!==1)throw Error(`THREE.TGALoader: Invalid type colormap data for indexed type.`);break;case f:case p:case h:case g:if(e.colormap_type)throw Error(`THREE.TGALoader: Invalid type colormap data for colormap type.`);break;case u:throw Error(`THREE.TGALoader: No data.`);default:throw Error(`THREE.TGALoader: Invalid type `+e.image_type)}if(e.width<=0||e.height<=0)throw Error(`THREE.TGALoader: Invalid image size.`);if(e.pixel_size!==8&&e.pixel_size!==16&&e.pixel_size!==24&&e.pixel_size!==32)throw Error(`THREE.TGALoader: Invalid pixel size `+e.pixel_size)}function n(e,t,n,r,i){let a,o,s=n.pixel_size>>3,c=n.width*n.height*s;if(t&&(o=i.subarray(r,r+=n.colormap_length*(n.colormap_size>>3))),e){a=new Uint8Array(c);let e,t,n,o=0,l=new Uint8Array(s);for(;o<c;)if(e=i[r++],t=(e&127)+1,e&128){for(n=0;n<s;++n)l[n]=i[r++];for(n=0;n<t;++n)a.set(l,o+n*s);o+=s*t}else{for(t*=s,n=0;n<t;++n)a[o+n]=i[r++];o+=t}}else a=i.subarray(r,r+=t?n.width*n.height:c);return{pixel_data:a,palettes:o}}function r(e,t,n,r,i,a,o,s,c){let l=c,u,d=0,f,p,m=T.width;for(p=t;p!==r;p+=n)for(f=i;f!==o;f+=a,d++)u=s[d],e[(f+m*p)*4+3]=255,e[(f+m*p)*4+2]=l[u*3+0],e[(f+m*p)*4+1]=l[u*3+1],e[(f+m*p)*4+0]=l[u*3+2];return e}function i(e,t,n,r,i,a,o,s){let c,l=0,u,d,f=T.width;for(d=t;d!==r;d+=n)for(u=i;u!==o;u+=a,l+=2)c=s[l+0]+(s[l+1]<<8),e[(u+f*d)*4+0]=(c&31744)>>7,e[(u+f*d)*4+1]=(c&992)>>2,e[(u+f*d)*4+2]=(c&31)<<3,e[(u+f*d)*4+3]=c&32768?0:255;return e}function a(e,t,n,r,i,a,o,s){let c=0,l,u,d=T.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=3)e[(l+d*u)*4+3]=255,e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+1]=s[c+1],e[(l+d*u)*4+0]=s[c+2];return e}function o(e,t,n,r,i,a,o,s){let c=0,l,u,d=T.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=4)e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+1]=s[c+1],e[(l+d*u)*4+0]=s[c+2],e[(l+d*u)*4+3]=s[c+3];return e}function s(e,t,n,r,i,a,o,s){let c,l=0,u,d,f=T.width;for(d=t;d!==r;d+=n)for(u=i;u!==o;u+=a,l++)c=s[l],e[(u+f*d)*4+0]=c,e[(u+f*d)*4+1]=c,e[(u+f*d)*4+2]=c,e[(u+f*d)*4+3]=255;return e}function c(e,t,n,r,i,a,o,s){let c=0,l,u,d=T.width;for(u=t;u!==r;u+=n)for(l=i;l!==o;l+=a,c+=2)e[(l+d*u)*4+0]=s[c+0],e[(l+d*u)*4+1]=s[c+0],e[(l+d*u)*4+2]=s[c+0],e[(l+d*u)*4+3]=s[c+1];return e}function l(e,t,n,l,u){let d,f,p,m,h,g;switch((T.flags&_)>>v){default:case x:d=0,p=1,h=t,f=0,m=1,g=n;break;case y:d=0,p=1,h=t,f=n-1,m=-1,g=-1;break;case S:d=t-1,p=-1,h=-1,f=0,m=1,g=n;break;case b:d=t-1,p=-1,h=-1,f=n-1,m=-1,g=-1}if(O)switch(T.pixel_size){case 8:s(e,f,m,g,d,p,h,l);break;case 16:c(e,f,m,g,d,p,h,l);break;default:throw Error(`THREE.TGALoader: Format not supported.`)}else switch(T.pixel_size){case 8:r(e,f,m,g,d,p,h,l,u);break;case 16:i(e,f,m,g,d,p,h,l);break;case 24:a(e,f,m,g,d,p,h,l);break;case 32:o(e,f,m,g,d,p,h,l);break;default:throw Error(`THREE.TGALoader: Format not supported.`)}return e}let u=0,d=1,f=2,p=3,m=9,h=10,g=11,_=48,v=4,y=0,b=1,x=2,S=3;if(e.length<19)throw Error(`THREE.TGALoader: Not enough data to contain header.`);let C=0,w=new Uint8Array(e),T={id_length:w[C++],colormap_type:w[C++],image_type:w[C++],colormap_index:w[C++]|w[C++]<<8,colormap_length:w[C++]|w[C++]<<8,colormap_size:w[C++],origin:[w[C++]|w[C++]<<8,w[C++]|w[C++]<<8],width:w[C++]|w[C++]<<8,height:w[C++]|w[C++]<<8,pixel_size:w[C++],flags:w[C++]};if(t(T),T.id_length+C>e.length)throw Error(`THREE.TGALoader: No data.`);C+=T.id_length;let E=!1,D=!1,O=!1;switch(T.image_type){case 9:E=!0,D=!0;break;case 1:D=!0;break;case 10:E=!0;break;case 2:break;case 11:E=!0,O=!0;break;case 3:O=!0}let k=new Uint8Array(T.width*T.height*4),A=n(E,D,T,C,w);return l(k,T.width,T.height,A.pixel_data,A.palettes),{data:k,width:T.width,height:T.height,flipY:!0,generateMipmaps:!0,minFilter:Bd}}}})),dy,fy=e((()=>{kv(),uy(),dy=class extends G_{load(e,t,n,r){let i=this,a=i.path===``?mv.extractUrlBase(e):i.path,o=new J_(i.manager);o.setPath(i.path),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials),o.load(e,function(n){try{t(i.parse(n,a))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e,t){function n(e,t){let n=[],r=e.childNodes;for(let e=0,i=r.length;e<i;e++){let i=r[e];i.nodeName===t&&n.push(i)}return n}function r(e){if(e.length===0)return[];let t=e.trim().split(/\s+/),n=Array(t.length);for(let e=0,r=t.length;e<r;e++)n[e]=t[e];return n}function i(e){if(e.length===0)return[];let t=e.trim().split(/\s+/),n=Array(t.length);for(let e=0,r=t.length;e<r;e++)n[e]=parseFloat(t[e]);return n}function a(e){if(e.length===0)return[];let t=e.trim().split(/\s+/),n=Array(t.length);for(let e=0,r=t.length;e<r;e++)n[e]=parseInt(t[e]);return n}function o(e){return e.substring(1)}function s(){return`three_default_`+jt++}function c(e){return Object.keys(e).length===0}function l(e){return{unit:u(n(e,`unit`)[0]),upAxis:d(n(e,`up_axis`)[0])}}function u(e){return e!==void 0&&e.hasAttribute(`meter`)===!0?parseFloat(e.getAttribute(`meter`)):1}function d(e){return e===void 0?`Y_UP`:e.textContent}function f(e,t,r,i){let a=n(e,t)[0];if(a!==void 0){let e=n(a,r);for(let t=0;t<e.length;t++)i(e[t])}}function p(e,t){for(let n in e){let r=e[n];r.build=t(e[n])}}function m(e,t){return e.build===void 0&&(e.build=t(e)),e.build}function h(e){let t={sources:{},samplers:{},channels:{}},n=!1;for(let r=0,i=e.childNodes.length;r<i;r++){let i=e.childNodes[r];if(i.nodeType!==1)continue;let a;switch(i.nodeName){case`source`:a=i.getAttribute(`id`),t.sources[a]=Oe(i);break;case`sampler`:a=i.getAttribute(`id`),t.samplers[a]=g(i);break;case`channel`:a=i.getAttribute(`target`),t.channels[a]=_(i);break;case`animation`:h(i),n=!0;break;default:console.log(i)}}n===!1&&(J.animations[e.getAttribute(`id`)||Cf.generateUUID()]=t)}function g(e){let t={inputs:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1&&r.nodeName===`input`){let e=o(r.getAttribute(`source`)),n=r.getAttribute(`semantic`);t.inputs[n]=e}}return t}function _(e){let t={},n=e.getAttribute(`target`).split(`/`),r=n.shift(),i=n.shift(),a=i.indexOf(`(`)!==-1,s=i.indexOf(`.`)!==-1;if(s)n=i.split(`.`),i=n.shift(),t.member=n.shift();else if(a){let e=i.split(`(`);i=e.shift();for(let t=0;t<e.length;t++)e[t]=parseInt(e[t].replace(/\)/,``));t.indices=e}return t.id=r,t.sid=i,t.arraySyntax=a,t.memberSyntax=s,t.sampler=o(e.getAttribute(`source`)),t}function v(e){let t=[],n=e.channels,r=e.samplers,i=e.sources;for(let e in n)if(n.hasOwnProperty(e)){let a=n[e],o=r[a.sampler],s=o.inputs.INPUT,c=o.inputs.OUTPUT,l=i[s],u=i[c];T(b(a,l,u),t)}return t}function y(e){return m(J.animations[e],v)}function b(e,t,n){let r=J.nodes[e.id],i=pt(r.id),a=r.transforms[e.sid],o=r.matrix.clone().transpose(),s,c,l,u,d,f,p={};switch(a){case`matrix`:for(l=0,u=t.array.length;l<u;l++)if(s=t.array[l],c=l*n.stride,p[s]===void 0&&(p[s]={}),e.arraySyntax===!0){let t=n.array[c],r=e.indices[0]+4*e.indices[1];p[s][r]=t}else for(d=0,f=n.stride;d<f;d++)p[s][d]=n.array[c+d];break;case`translate`:console.warn(`THREE.ColladaLoader: Animation transform type "%s" not yet implemented.`,a);break;case`rotate`:console.warn(`THREE.ColladaLoader: Animation transform type "%s" not yet implemented.`,a);break;case`scale`:console.warn(`THREE.ColladaLoader: Animation transform type "%s" not yet implemented.`,a)}let m=x(p,o);return{name:i.uuid,keyframes:m}}function x(e,t){let n=[];for(let t in e)n.push({time:parseFloat(t),value:e[t]});n.sort(r);for(let e=0;e<16;e++)E(n,e,t.elements[e]);return n;function r(e,t){return e.time-t.time}}let S=new Z,C=new Z,w=new Uf;function T(e,t){let n=e.keyframes,r=e.name,i=[],a=[],o=[],s=[];for(let e=0,t=n.length;e<t;e++){let t=n[e],r=t.time,c=t.value;nt.fromArray(c).transpose(),nt.decompose(S,w,C),i.push(r),a.push(S.x,S.y,S.z),o.push(w.x,w.y,w.z,w.w),s.push(C.x,C.y,C.z)}return a.length>0&&t.push(new B_(r+`.position`,i,a)),o.length>0&&t.push(new R_(r+`.quaternion`,i,o)),s.length>0&&t.push(new B_(r+`.scale`,i,s)),t}function E(e,t,n){let r,i=!0,a,o;for(a=0,o=e.length;a<o;a++)r=e[a],r.value[t]===void 0?r.value[t]=null:i=!1;if(i===!0)for(a=0,o=e.length;a<o;a++)r=e[a],r.value[t]=n;else D(e,t)}function D(e,t){let n,r;for(let i=0,a=e.length;i<a;i++){let a=e[i];if(a.value[t]===null){if(n=O(e,i,t),r=k(e,i,t),n===null){a.value[t]=r.value[t];continue}if(r===null){a.value[t]=n.value[t];continue}A(a,n,r,t)}}}function O(e,t,n){for(;t>=0;){let r=e[t];if(r.value[n]!==null)return r;t--}return null}function k(e,t,n){for(;t<e.length;){let r=e[t];if(r.value[n]!==null)return r;t++}return null}function A(e,t,n,r){if(n.time-t.time===0){e.value[r]=t.value[r];return}e.value[r]=(e.time-t.time)*(n.value[r]-t.value[r])/(n.time-t.time)+t.value[r]}function j(e){let t={name:e.getAttribute(`id`)||`default`,start:parseFloat(e.getAttribute(`start`)||0),end:parseFloat(e.getAttribute(`end`)||0),animations:[]};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`instance_animation`&&t.animations.push(o(r.getAttribute(`url`)))}J.clips[e.getAttribute(`id`)]=t}function M(e){let t=[],n=e.name,r=e.end-e.start||-1,i=e.animations;for(let e=0,n=i.length;e<n;e++){let n=y(i[e]);for(let e=0,r=n.length;e<r;e++)t.push(n[e])}return new V_(n,r,t)}function N(e){return m(J.clips[e],M)}function P(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`skin`:t.id=o(r.getAttribute(`source`)),t.skin=F(r);break;case`morph`:t.id=o(r.getAttribute(`source`)),console.warn(`THREE.ColladaLoader: Morph target animation not supported yet.`)}}J.controllers[e.getAttribute(`id`)]=t}function F(e){let t={sources:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`bind_shape_matrix`:t.bindShapeMatrix=i(r.textContent);break;case`source`:let e=r.getAttribute(`id`);t.sources[e]=Oe(r);break;case`joints`:t.joints=I(r);break;case`vertex_weights`:t.vertexWeights=ee(r)}}return t}function I(e){let t={inputs:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1&&r.nodeName===`input`){let e=r.getAttribute(`semantic`),n=o(r.getAttribute(`source`));t.inputs[e]=n}}return t}function ee(e){let t={inputs:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`input`:let e=r.getAttribute(`semantic`),n=o(r.getAttribute(`source`)),i=parseInt(r.getAttribute(`offset`));t.inputs[e]={id:n,offset:i};break;case`vcount`:t.vcount=a(r.textContent);break;case`v`:t.v=a(r.textContent)}}return t}function L(e){let t={id:e.id},n=J.geometries[t.id];return e.skin!==void 0&&(t.skin=R(e.skin),n.sources.skinIndices=t.skin.indices,n.sources.skinWeights=t.skin.weights),t}function R(e){let t={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},n=e.sources,r=e.vertexWeights,i=r.vcount,a=r.v,o=r.inputs.JOINT.offset,s=r.inputs.WEIGHT.offset,c=e.sources[e.joints.inputs.JOINT],l=e.sources[e.joints.inputs.INV_BIND_MATRIX],u=n[r.inputs.WEIGHT.id].array,d=0,f,p,m;for(f=0,m=i.length;f<m;f++){let e=i[f],n=[];for(p=0;p<e;p++){let e=a[d+o],t=u[a[d+s]];n.push({index:e,weight:t}),d+=2}for(n.sort(h),p=0;p<4;p++){let e=n[p];e===void 0?(t.indices.array.push(0),t.weights.array.push(0)):(t.indices.array.push(e.index),t.weights.array.push(e.weight))}}for(t.bindMatrix=e.bindShapeMatrix?new vp().fromArray(e.bindShapeMatrix).transpose():new vp().identity(),f=0,m=c.array.length;f<m;f++){let e=c.array[f],n=new vp().fromArray(l.array,f*l.stride).transpose();t.joints.push({name:e,boneInverse:n})}return t;function h(e,t){return t.weight-e.weight}}function te(e){return m(J.controllers[e],L)}function z(e){let t={init_from:n(e,`init_from`)[0].textContent};J.images[e.getAttribute(`id`)]=t}function ne(e){return e.build===void 0?e.init_from:e.build}function B(e){let t=J.images[e];return t===void 0?(console.warn(`THREE.ColladaLoader: Couldn't find image with ID:`,e),null):m(t,ne)}function re(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`profile_COMMON`&&(t.profile=ie(r))}J.effects[e.getAttribute(`id`)]=t}function ie(e){let t={surfaces:{},samplers:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`newparam`:ae(r,t);break;case`technique`:t.technique=H(r);break;case`extra`:t.extra=le(r)}}return t}function ae(e,t){let n=e.getAttribute(`sid`);for(let r=0,i=e.childNodes.length;r<i;r++){let i=e.childNodes[r];if(i.nodeType===1)switch(i.nodeName){case`surface`:t.surfaces[n]=V(i);break;case`sampler2D`:t.samplers[n]=oe(i)}}}function V(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`init_from`&&(t.init_from=r.textContent)}return t}function oe(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`source`&&(t.source=r.textContent)}return t}function H(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`constant`:case`lambert`:case`blinn`:case`phong`:t.type=r.nodeName,t.parameters=U(r);break;case`extra`:t.extra=le(r)}}return t}function U(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`emission`:case`diffuse`:case`specular`:case`bump`:case`ambient`:case`shininess`:case`transparency`:t[r.nodeName]=W(r);break;case`transparent`:t[r.nodeName]={opaque:r.hasAttribute(`opaque`)?r.getAttribute(`opaque`):`A_ONE`,data:W(r)}}}return t}function W(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`color`:t[r.nodeName]=i(r.textContent);break;case`float`:t[r.nodeName]=parseFloat(r.textContent);break;case`texture`:t[r.nodeName]={id:r.getAttribute(`texture`),extra:se(r)}}}return t}function se(e){let t={technique:{}};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`extra`&&G(r,t)}return t}function G(e,t){for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`technique`&&ce(r,t)}}function ce(e,t){for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`repeatU`:case`repeatV`:case`offsetU`:case`offsetV`:t.technique[r.nodeName]=parseFloat(r.textContent);break;case`wrapU`:case`wrapV`:r.textContent.toUpperCase()===`TRUE`?t.technique[r.nodeName]=1:r.textContent.toUpperCase()===`FALSE`?t.technique[r.nodeName]=0:t.technique[r.nodeName]=parseInt(r.textContent);break;case`bump`:t[r.nodeName]=de(r)}}}function le(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`technique`&&(t.technique=ue(r))}return t}function ue(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`double_sided`:t[r.nodeName]=parseInt(r.textContent);break;case`bump`:t[r.nodeName]=de(r)}}return t}function de(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`texture`&&(t[r.nodeName]={id:r.getAttribute(`texture`),texcoord:r.getAttribute(`texcoord`),extra:se(r)})}return t}function fe(e){return e}function pe(e){return m(J.effects[e],fe)}function K(e){let t={name:e.getAttribute(`name`)};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`instance_effect`&&(t.url=o(r.getAttribute(`url`)))}J.materials[e.getAttribute(`id`)]=t}function me(e){let t,n=e.slice((e.lastIndexOf(`.`)-1>>>0)+2);switch(n=n.toLowerCase(),n){case`tga`:t=Dt;break;default:t=Et}return t}function q(e){let t=pe(e.url),n=t.profile.technique,r;switch(n.type){case`phong`:case`blinn`:r=new D_;break;case`lambert`:r=new O_;break;default:r=new cm}r.name=e.name||``;function i(e,n=null){let r=t.profile.samplers[e.id],i=null;if(r!==void 0){let e=t.profile.surfaces[r.source];i=B(e.init_from)}else console.warn(`THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530).`),i=B(e.id);if(i!==null){let t=me(i);if(t!==void 0){let r=t.load(i),a=e.extra;if(a!==void 0&&a.technique!==void 0&&c(a.technique)===!1){let e=a.technique;r.wrapS=e.wrapU?Md:Nd,r.wrapT=e.wrapV?Md:Nd,r.offset.set(e.offsetU||0,e.offsetV||0),r.repeat.set(e.repeatU||1,e.repeatV||1)}else r.wrapS=Md,r.wrapT=Md;return n!==null&&(r.colorSpace=n),r}return console.warn(`THREE.ColladaLoader: Loader for texture %s not found.`,i),null}return console.warn(`THREE.ColladaLoader: Couldn't create texture with ID:`,e.id),null}let a=n.parameters;for(let e in a){let t=a[e];switch(e){case`diffuse`:t.color&&r.color.fromArray(t.color),t.texture&&(r.map=i(t.texture,sf));break;case`specular`:t.color&&r.specular&&r.specular.fromArray(t.color),t.texture&&(r.specularMap=i(t.texture));break;case`bump`:t.texture&&(r.normalMap=i(t.texture));break;case`ambient`:t.texture&&(r.lightMap=i(t.texture,sf));break;case`shininess`:t.float&&r.shininess&&(r.shininess=t.float);break;case`emission`:t.color&&r.emissive&&r.emissive.fromArray(t.color),t.texture&&(r.emissiveMap=i(t.texture,sf))}}r.color.convertSRGBToLinear(),r.specular&&r.specular.convertSRGBToLinear(),r.emissive&&r.emissive.convertSRGBToLinear();let o=a.transparent,s=a.transparency;if(s===void 0&&o&&(s={float:1}),o===void 0&&s&&(o={opaque:`A_ONE`,data:{color:[1,1,1,1]}}),o&&s){if(o.data.texture)r.transparent=!0;else{let e=o.data.color;switch(o.opaque){case`A_ONE`:r.opacity=e[3]*s.float;break;case`RGB_ZERO`:r.opacity=1-e[0]*s.float;break;case`A_ZERO`:r.opacity=1-e[3]*s.float;break;case`RGB_ONE`:r.opacity=e[0]*s.float;break;default:console.warn(`THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.`,o.opaque)}r.opacity<1&&(r.transparent=!0)}}if(n.extra!==void 0&&n.extra.technique!==void 0){let e=n.extra.technique;for(let t in e){let n=e[t];switch(t){case`double_sided`:r.side=n===1?2:0;break;case`bump`:r.normalMap=i(n.texture),r.normalScale=new X(1,1)}}}return r}function he(e){return m(J.materials[e],q)}function ge(e){let t={name:e.getAttribute(`name`)};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`optics`&&(t.optics=_e(r))}J.cameras[e.getAttribute(`id`)]=t}function _e(e){for(let t=0;t<e.childNodes.length;t++){let n=e.childNodes[t];if(n.nodeName===`technique_common`)return ve(n)}return{}}function ve(e){let t={};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];switch(r.nodeName){case`perspective`:case`orthographic`:t.technique=r.nodeName,t.parameters=ye(r)}}return t}function ye(e){let t={};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];switch(r.nodeName){case`xfov`:case`yfov`:case`xmag`:case`ymag`:case`znear`:case`zfar`:case`aspect_ratio`:t[r.nodeName]=parseFloat(r.textContent)}}return t}function be(e){let t;switch(e.optics.technique){case`perspective`:t=new qm(e.optics.parameters.yfov,e.optics.parameters.aspect_ratio,e.optics.parameters.znear,e.optics.parameters.zfar);break;case`orthographic`:let n=e.optics.parameters.ymag,r=e.optics.parameters.xmag,i=e.optics.parameters.aspect_ratio;r=r===void 0?n*i:r,n=n===void 0?r/i:n,r*=.5,n*=.5,t=new uh(-r,r,n,-n,e.optics.parameters.znear,e.optics.parameters.zfar);break;default:t=new qm}return t.name=e.name||``,t}function xe(e){let t=J.cameras[e];return t===void 0?(console.warn(`THREE.ColladaLoader: Couldn't find camera with ID:`,e),null):m(t,be)}function Se(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`technique_common`&&(t=Ce(r))}J.lights[e.getAttribute(`id`)]=t}function Ce(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`directional`:case`point`:case`spot`:case`ambient`:t.technique=r.nodeName,t.parameters=we(r)}}return t}function we(e){let t={};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`color`:let e=i(r.textContent);t.color=new Q().fromArray(e).convertSRGBToLinear();break;case`falloff_angle`:t.falloffAngle=parseFloat(r.textContent);break;case`quadratic_attenuation`:let n=parseFloat(r.textContent);t.distance=n?Math.sqrt(1/n):0}}return t}function Te(e){let t;switch(e.technique){case`directional`:t=new fv;break;case`point`:t=new uv;break;case`spot`:t=new av;break;case`ambient`:t=new pv}return e.parameters.color&&t.color.copy(e.parameters.color),e.parameters.distance&&(t.distance=e.parameters.distance),t}function Ee(e){let t=J.lights[e];return t===void 0?(console.warn(`THREE.ColladaLoader: Couldn't find light with ID:`,e),null):m(t,Te)}function De(e){let t={name:e.getAttribute(`name`),sources:{},vertices:{},primitives:[]},r=n(e,`mesh`)[0];if(r!==void 0){for(let e=0;e<r.childNodes.length;e++){let n=r.childNodes[e];if(n.nodeType!==1)continue;let i=n.getAttribute(`id`);switch(n.nodeName){case`source`:t.sources[i]=Oe(n);break;case`vertices`:t.vertices=ke(n);break;case`polygons`:console.warn(`THREE.ColladaLoader: Unsupported primitive type: `,n.nodeName);break;case`lines`:case`linestrips`:case`polylist`:case`triangles`:t.primitives.push(Ae(n));break;default:console.log(n)}}J.geometries[e.getAttribute(`id`)]=t}}function Oe(e){let t={array:[],stride:3};for(let a=0;a<e.childNodes.length;a++){let o=e.childNodes[a];if(o.nodeType===1)switch(o.nodeName){case`float_array`:t.array=i(o.textContent);break;case`Name_array`:t.array=r(o.textContent);break;case`technique_common`:let e=n(o,`accessor`)[0];e!==void 0&&(t.stride=parseInt(e.getAttribute(`stride`)))}}return t}function ke(e){let t={};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];r.nodeType===1&&(t[r.getAttribute(`semantic`)]=o(r.getAttribute(`source`)))}return t}function Ae(e){let t={type:e.nodeName,material:e.getAttribute(`material`),count:parseInt(e.getAttribute(`count`)),inputs:{},stride:0,hasUV:!1};for(let n=0,r=e.childNodes.length;n<r;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`input`:let e=o(r.getAttribute(`source`)),n=r.getAttribute(`semantic`),i=parseInt(r.getAttribute(`offset`)),s=parseInt(r.getAttribute(`set`)),c=s>0?n+s:n;t.inputs[c]={id:e,offset:i},t.stride=Math.max(t.stride,i+1),n===`TEXCOORD`&&(t.hasUV=!0);break;case`vcount`:t.vcount=a(r.textContent);break;case`p`:t.p=a(r.textContent)}}return t}function je(e){let t={};for(let n=0;n<e.length;n++){let r=e[n];t[r.type]===void 0&&(t[r.type]=[]),t[r.type].push(r)}return t}function Me(e){let t=0;for(let n=0,r=e.length;n<r;n++)e[n].hasUV===!0&&t++;t>0&&t<e.length&&(e.uvsNeedsFix=!0)}function Ne(e){let t={},n=e.sources,r=e.vertices,i=e.primitives;if(i.length===0)return{};let a=je(i);for(let e in a){let i=a[e];Me(i),t[e]=Pe(i,n,r)}return t}function Pe(e,t,n){let r={},i={array:[],stride:0},a={array:[],stride:0},o={array:[],stride:0},s={array:[],stride:0},c={array:[],stride:0},l={array:[],stride:4},u={array:[],stride:4},d=new Sm,f=[],p=0;for(let r=0;r<e.length;r++){let m=e[r],h=m.inputs,g=0;switch(m.type){case`lines`:case`linestrips`:g=m.count*2;break;case`triangles`:g=m.count*3;break;case`polylist`:for(let e=0;e<m.count;e++){let t=m.vcount[e];switch(t){case 3:g+=3;break;case 4:g+=6;break;default:g+=(t-2)*3}}break;default:console.warn(`THREE.ColladaLoader: Unknow primitive type:`,m.type)}d.addGroup(p,g,r),p+=g,m.material&&f.push(m.material);for(let r in h){let d=h[r];switch(r){case`VERTEX`:for(let r in n){let f=n[r];switch(r){case`POSITION`:let n=i.array.length;if(Fe(m,t[f],d.offset,i.array),i.stride=t[f].stride,t.skinWeights&&t.skinIndices&&(Fe(m,t.skinIndices,d.offset,l.array),Fe(m,t.skinWeights,d.offset,u.array)),m.hasUV===!1&&e.uvsNeedsFix===!0){let e=(i.array.length-n)/i.stride;for(let t=0;t<e;t++)o.array.push(0,0)}break;case`NORMAL`:Fe(m,t[f],d.offset,a.array),a.stride=t[f].stride;break;case`COLOR`:Fe(m,t[f],d.offset,c.array),c.stride=t[f].stride;break;case`TEXCOORD`:Fe(m,t[f],d.offset,o.array),o.stride=t[f].stride;break;case`TEXCOORD1`:Fe(m,t[f],d.offset,s.array),o.stride=t[f].stride;break;default:console.warn(`THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.`,r)}}break;case`NORMAL`:Fe(m,t[d.id],d.offset,a.array),a.stride=t[d.id].stride;break;case`COLOR`:Fe(m,t[d.id],d.offset,c.array,!0),c.stride=t[d.id].stride;break;case`TEXCOORD`:Fe(m,t[d.id],d.offset,o.array),o.stride=t[d.id].stride;break;case`TEXCOORD1`:Fe(m,t[d.id],d.offset,s.array),s.stride=t[d.id].stride}}}return i.array.length>0&&d.setAttribute(`position`,new mm(i.array,i.stride)),a.array.length>0&&d.setAttribute(`normal`,new mm(a.array,a.stride)),c.array.length>0&&d.setAttribute(`color`,new mm(c.array,c.stride)),o.array.length>0&&d.setAttribute(`uv`,new mm(o.array,o.stride)),s.array.length>0&&d.setAttribute(`uv1`,new mm(s.array,s.stride)),l.array.length>0&&d.setAttribute(`skinIndex`,new mm(l.array,l.stride)),u.array.length>0&&d.setAttribute(`skinWeight`,new mm(u.array,u.stride)),r.data=d,r.type=e[0].type,r.materialKeys=f,r}function Fe(e,t,n,r,i=!1){let a=e.p,o=e.stride,s=e.vcount;function c(e){let t=a[e+n]*u,o=t+u;for(;t<o;t++)r.push(l[t]);if(i){let e=r.length-u-1;Ot.setRGB(r[e+0],r[e+1],r[e+2]).convertSRGBToLinear(),r[e+0]=Ot.r,r[e+1]=Ot.g,r[e+2]=Ot.b}}let l=t.array,u=t.stride;if(e.vcount!==void 0){let e=0;for(let t=0,n=s.length;t<n;t++){let n=s[t];if(n===4){let t=e+o*0,n=e+o*1,r=e+o*2,i=e+o*3;c(t),c(n),c(i),c(n),c(r),c(i)}else if(n===3){let t=e+o*0,n=e+o*1,r=e+o*2;c(t),c(n),c(r)}else if(n>4)for(let t=1,r=n-2;t<=r;t++){let n=e+o*0,r=e+o*t,i=e+o*(t+1);c(n),c(r),c(i)}e+=o*n}}else for(let e=0,t=a.length;e<t;e+=o)c(e)}function Ie(e){return m(J.geometries[e],Ne)}function Le(e){let t={name:e.getAttribute(`name`)||``,joints:{},links:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`technique_common`&&Be(r,t)}J.kinematicsModels[e.getAttribute(`id`)]=t}function Re(e){return e.build===void 0?e:e.build}function ze(e){return m(J.kinematicsModels[e],Re)}function Be(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`joint`:t.joints[r.getAttribute(`sid`)]=Ve(r);break;case`link`:t.links.push(Ue(r))}}}function Ve(e){let t;for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`prismatic`:case`revolute`:t=He(r)}}return t}function He(e){let t={sid:e.getAttribute(`sid`),name:e.getAttribute(`name`)||``,axis:new Z,limits:{min:0,max:0},type:e.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`axis`:let e=i(r.textContent);t.axis.fromArray(e);break;case`limits`:let n=r.getElementsByTagName(`max`)[0],a=r.getElementsByTagName(`min`)[0];t.limits.max=parseFloat(n.textContent),t.limits.min=parseFloat(a.textContent)}}return t.limits.min>=t.limits.max&&(t.static=!0),t.middlePosition=(t.limits.min+t.limits.max)/2,t}function Ue(e){let t={sid:e.getAttribute(`sid`),name:e.getAttribute(`name`)||``,attachments:[],transforms:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`attachment_full`:t.attachments.push(We(r));break;case`matrix`:case`translate`:case`rotate`:t.transforms.push(Ge(r))}}return t}function We(e){let t={joint:e.getAttribute(`joint`).split(`/`).pop(),transforms:[],links:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`link`:t.links.push(Ue(r));break;case`matrix`:case`translate`:case`rotate`:t.transforms.push(Ge(r))}}return t}function Ge(e){let t={type:e.nodeName},n=i(e.textContent);switch(t.type){case`matrix`:t.obj=new vp,t.obj.fromArray(n).transpose();break;case`translate`:t.obj=new Z,t.obj.fromArray(n);break;case`rotate`:t.obj=new Z,t.obj.fromArray(n),t.angle=Cf.degToRad(n[3])}return t}function Ke(e){let t={name:e.getAttribute(`name`)||``,rigidBodies:{}};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`rigid_body`&&(t.rigidBodies[r.getAttribute(`name`)]={},qe(r,t.rigidBodies[r.getAttribute(`name`)]))}J.physicsModels[e.getAttribute(`id`)]=t}function qe(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`technique_common`&&Je(r,t)}}function Je(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1)switch(r.nodeName){case`inertia`:t.inertia=i(r.textContent);break;case`mass`:t.mass=i(r.textContent)[0]}}}function Ye(e){let t={bindJointAxis:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];r.nodeType===1&&r.nodeName===`bind_joint_axis`&&t.bindJointAxis.push(Xe(r))}J.kinematicsScenes[o(e.getAttribute(`url`))]=t}function Xe(e){let t={target:e.getAttribute(`target`).split(`/`).pop()};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType===1&&r.nodeName===`axis`){t.axis=r.getElementsByTagName(`param`)[0].textContent;let e=t.axis.split(`inst_`).pop().split(`axis`)[0];t.jointIndex=e.substring(0,e.length-1)}}return t}function Ze(e){return e.build===void 0?e:e.build}function Qe(e){return m(J.kinematicsScenes[e],Ze)}function $e(){let e=Object.keys(J.kinematicsModels)[0],t=Object.keys(J.kinematicsScenes)[0],n=Object.keys(J.visualScenes)[0];if(e===void 0||t===void 0)return;let r=ze(e),i=Qe(t),a=_t(n),o=i.bindJointAxis,s={};for(let e=0,t=o.length;e<t;e++){let t=o[e],n=St.querySelector(`[sid="`+t.target+`"]`);if(n){let e=n.parentElement;c(t.jointIndex,e)}}function c(e,t){let n=t.getAttribute(`name`),i=r.joints[e];a.traverse(function(r){r.name===n&&(s[e]={object:r,transforms:et(t),joint:i,position:i.zeroPosition})})}let l=new vp;At={joints:r&&r.joints,getJointValue:function(e){let t=s[e];if(t)return t.position;console.warn(`THREE.ColladaLoader: Joint `+e+` doesn't exist.`)},setJointValue:function(e,t){let n=s[e];if(n){let r=n.joint;if(t>r.limits.max||t<r.limits.min)console.warn(`THREE.ColladaLoader: Joint `+e+` value `+t+` outside of limits (min: `+r.limits.min+`, max: `+r.limits.max+`).`);else if(r.static)console.warn(`THREE.ColladaLoader: Joint `+e+` is static.`);else{let i=n.object,a=r.axis,o=n.transforms;nt.identity();for(let n=0;n<o.length;n++){let i=o[n];if(i.sid&&i.sid.indexOf(e)!==-1)switch(r.type){case`revolute`:nt.multiply(l.makeRotationAxis(a,Cf.degToRad(t)));break;case`prismatic`:nt.multiply(l.makeTranslation(a.x*t,a.y*t,a.z*t));break;default:console.warn(`THREE.ColladaLoader: Unknown joint type: `+r.type)}else switch(i.type){case`matrix`:nt.multiply(i.obj);break;case`translate`:nt.multiply(l.makeTranslation(i.obj.x,i.obj.y,i.obj.z));break;case`scale`:nt.scale(i.obj);break;case`rotate`:nt.multiply(l.makeRotationAxis(i.obj,i.angle))}}i.matrix.copy(nt),i.matrix.decompose(i.position,i.quaternion,i.scale),s[e].position=t}}else console.log(`THREE.ColladaLoader: `+e+` does not exist.`)}}}function et(e){let t=[],n=St.querySelector(`[id="`+e.id+`"]`);for(let e=0;e<n.childNodes.length;e++){let r=n.childNodes[e];if(r.nodeType!==1)continue;let a,o;switch(r.nodeName){case`matrix`:a=i(r.textContent);let e=new vp().fromArray(a).transpose();t.push({sid:r.getAttribute(`sid`),type:r.nodeName,obj:e});break;case`translate`:case`scale`:a=i(r.textContent),o=new Z().fromArray(a),t.push({sid:r.getAttribute(`sid`),type:r.nodeName,obj:o});break;case`rotate`:a=i(r.textContent),o=new Z().fromArray(a);let n=Cf.degToRad(a[3]);t.push({sid:r.getAttribute(`sid`),type:r.nodeName,obj:o,angle:n})}}return t}function tt(e){let t=e.getElementsByTagName(`node`);for(let e=0;e<t.length;e++){let n=t[e];n.hasAttribute(`id`)===!1&&n.setAttribute(`id`,s())}}let nt=new vp,rt=new Z;function it(e){let t={name:e.getAttribute(`name`)||``,type:e.getAttribute(`type`),id:e.getAttribute(`id`),sid:e.getAttribute(`sid`),matrix:new vp,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];if(r.nodeType!==1)continue;let a;switch(r.nodeName){case`node`:t.nodes.push(r.getAttribute(`id`)),it(r);break;case`instance_camera`:t.instanceCameras.push(o(r.getAttribute(`url`)));break;case`instance_controller`:t.instanceControllers.push(at(r));break;case`instance_light`:t.instanceLights.push(o(r.getAttribute(`url`)));break;case`instance_geometry`:t.instanceGeometries.push(at(r));break;case`instance_node`:t.instanceNodes.push(o(r.getAttribute(`url`)));break;case`matrix`:a=i(r.textContent),t.matrix.multiply(nt.fromArray(a).transpose()),t.transforms[r.getAttribute(`sid`)]=r.nodeName;break;case`translate`:a=i(r.textContent),rt.fromArray(a),t.matrix.multiply(nt.makeTranslation(rt.x,rt.y,rt.z)),t.transforms[r.getAttribute(`sid`)]=r.nodeName;break;case`rotate`:a=i(r.textContent);let e=Cf.degToRad(a[3]);t.matrix.multiply(nt.makeRotationAxis(rt.fromArray(a),e)),t.transforms[r.getAttribute(`sid`)]=r.nodeName;break;case`scale`:a=i(r.textContent),t.matrix.scale(rt.fromArray(a)),t.transforms[r.getAttribute(`sid`)]=r.nodeName;break;case`extra`:break;default:console.log(r)}}return ft(t.id)?console.warn(`THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.`,t.id):J.nodes[t.id]=t,t}function at(e){let t={id:o(e.getAttribute(`url`)),materials:{},skeletons:[]};for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n];switch(r.nodeName){case`bind_material`:let e=r.getElementsByTagName(`instance_material`);for(let n=0;n<e.length;n++){let r=e[n],i=r.getAttribute(`symbol`),a=r.getAttribute(`target`);t.materials[i]=o(a)}break;case`skeleton`:t.skeletons.push(o(r.textContent))}}return t}function ot(e,t){let n=[],r=[],i,a,o;for(i=0;i<e.length;i++){let r=e[i],a;if(ft(r))a=pt(r),st(a,t,n);else if(gt(r)){let e=J.visualScenes[r].children;for(let r=0;r<e.length;r++){let i=e[r];i.type===`JOINT`&&st(pt(i.id),t,n)}}else console.error(`THREE.ColladaLoader: Unable to find root bone of skeleton with ID:`,r)}for(i=0;i<t.length;i++)for(a=0;a<n.length;a++)if(o=n[a],o.bone.name===t[i].name){r[i]=o,o.processed=!0;break}for(i=0;i<n.length;i++)o=n[i],o.processed===!1&&(r.push(o),o.processed=!0);let s=[],c=[];for(i=0;i<r.length;i++)o=r[i],s.push(o.bone),c.push(o.boneInverse);return new Cg(s,c)}function st(e,t,n){e.traverse(function(e){if(e.isBone===!0){let r;for(let n=0;n<t.length;n++){let i=t[n];if(i.name===e.name){r=i.boneInverse;break}}r===void 0&&(r=new vp),n.push({bone:e,boneInverse:r,processed:!1})}})}function ct(e){let t=[],n=e.matrix,r=e.nodes,i=e.type,a=e.instanceCameras,o=e.instanceControllers,s=e.instanceLights,c=e.instanceGeometries,l=e.instanceNodes;for(let e=0,n=r.length;e<n;e++)t.push(pt(r[e]));for(let e=0,n=a.length;e<n;e++){let n=xe(a[e]);n!==null&&t.push(n.clone())}for(let e=0,n=o.length;e<n;e++){let n=o[e],r=te(n.id),i=dt(Ie(r.id),n.materials),a=n.skeletons,s=r.skin.joints,c=ot(a,s);for(let e=0,n=i.length;e<n;e++){let n=i[e];n.isSkinnedMesh&&(n.bind(c,r.skin.bindMatrix),n.normalizeSkinWeights()),t.push(n)}}for(let e=0,n=s.length;e<n;e++){let n=Ee(s[e]);n!==null&&t.push(n.clone())}for(let e=0,n=c.length;e<n;e++){let n=c[e],r=dt(Ie(n.id),n.materials);for(let e=0,n=r.length;e<n;e++)t.push(r[e])}for(let e=0,n=l.length;e<n;e++)t.push(pt(l[e]).clone());let u;if(r.length===0&&t.length===1)u=t[0];else{u=i===`JOINT`?new yg:new $h;for(let e=0;e<t.length;e++)u.add(t[e])}return u.name=i===`JOINT`?e.sid:e.name,u.matrix.copy(n),u.matrix.decompose(u.position,u.quaternion,u.scale),u}let lt=new cm({name:G_.DEFAULT_MATERIAL_NAME,color:16711935});function ut(e,t){let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];i===void 0?(console.warn(`THREE.ColladaLoader: Material with key %s not found. Apply fallback material.`,e[r]),n.push(lt)):n.push(he(i))}return n}function dt(e,t){let n=[];for(let r in e){let i=e[r],a=ut(i.materialKeys,t);if(a.length===0&&(r===`lines`||r===`linestrips`?a.push(new Ng):a.push(new D_)),r===`lines`||r===`linestrips`)for(let e=0,t=a.length;e<t;e++){let t=a[e];if(t.isMeshPhongMaterial===!0||t.isMeshLambertMaterial===!0){let n=new Ng;n.color.copy(t.color),n.opacity=t.opacity,n.transparent=t.transparent,a[e]=n}}let o=i.data.attributes.skinIndex!==void 0,s=a.length===1?a[0]:a,c;switch(r){case`lines`:c=new Hg(i.data,s);break;case`linestrips`:c=new zg(i.data,s);break;case`triangles`:case`polylist`:c=o?new vg(i.data,s):new Bm(i.data,s)}n.push(c)}return n}function ft(e){return J.nodes[e]!==void 0}function pt(e){return m(J.nodes[e],ct)}function mt(e){let t={name:e.getAttribute(`name`),children:[]};tt(e);let r=n(e,`node`);for(let e=0;e<r.length;e++)t.children.push(it(r[e]));J.visualScenes[e.getAttribute(`id`)]=t}function ht(e){let t=new $h;t.name=e.name;let n=e.children;for(let e=0;e<n.length;e++){let r=n[e];t.add(pt(r.id))}return t}function gt(e){return J.visualScenes[e]!==void 0}function _t(e){return m(J.visualScenes[e],ht)}function vt(e){let t=n(e,`instance_visual_scene`)[0];return _t(o(t.getAttribute(`url`)))}function yt(){let e=J.clips;if(c(e)===!0){if(c(J.animations)===!1){let e=[];for(let t in J.animations){let n=y(t);for(let t=0,r=n.length;t<r;t++)e.push(n[t])}kt.push(new V_(`default`,-1,e))}}else for(let t in e)kt.push(N(t))}function bt(e){let t=``,n=[e];for(;n.length;){let e=n.shift();e.nodeType===Node.TEXT_NODE?t+=e.textContent:(t+=`
`,n.push.apply(n,e.childNodes))}return t.trim()}if(e.length===0)return{scene:new ag};let xt=new DOMParser().parseFromString(e,`application/xml`),St=n(xt,`COLLADA`)[0],Ct=xt.getElementsByTagName(`parsererror`)[0];if(Ct!==void 0){let e=n(Ct,`div`)[0],t;return t=e?e.textContent:bt(Ct),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,t),null}let wt=St.getAttribute(`version`);console.debug(`THREE.ColladaLoader: File version`,wt);let Tt=l(n(St,`asset`)[0]),Et=new Z_(this.manager);Et.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Dt;ly&&(Dt=new ly(this.manager),Dt.setPath(this.resourcePath||t));let Ot=new Q,kt=[],At={},jt=0,J={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(St,`library_animations`,`animation`,h),f(St,`library_animation_clips`,`animation_clip`,j),f(St,`library_controllers`,`controller`,P),f(St,`library_images`,`image`,z),f(St,`library_effects`,`effect`,re),f(St,`library_materials`,`material`,K),f(St,`library_cameras`,`camera`,ge),f(St,`library_lights`,`light`,Se),f(St,`library_geometries`,`geometry`,De),f(St,`library_nodes`,`node`,it),f(St,`library_visual_scenes`,`visual_scene`,mt),f(St,`library_kinematics_models`,`kinematics_model`,Le),f(St,`library_physics_models`,`physics_model`,Ke),f(St,`scene`,`instance_kinematics_scene`,Ye),p(J.animations,v),p(J.clips,M),p(J.controllers,L),p(J.images,ne),p(J.effects,fe),p(J.materials,q),p(J.cameras,be),p(J.lights,Te),p(J.geometries,Ne),p(J.visualScenes,ht),yt(),$e();let Mt=vt(n(St,`scene`)[0]);return Mt.animations=kt,Tt.upAxis===`Z_UP`&&(console.warn(`THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289.`),Mt.rotation.set(-Math.PI/2,0,0)),Mt.scale.multiplyScalar(Tt.unit),{get animations(){return console.warn(`THREE.ColladaLoader: Please access animations over scene.animations now.`),kt},kinematics:At,library:J,scene:Mt}}}})),py,my=e((()=>{kv(),fy(),py=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.loaded=!1,this.model=null,new dy().load(`./futured-jet-plane/source/model/model.dae`,e=>{this.model=e.scene;let t=new Kf().setFromObject(this.model).getSize(new Z),n=3/(Math.max(t.x,t.y,t.z)||1);this.model.scale.setScalar(n);let r=new Kf().setFromObject(this.model).getCenter(new Z);this.model.position.sub(r);let i=[1381660,1843241,2434352,857376,1841696,2895930];this.model.traverse(e=>{if(e.isMesh){let t=(e.name.length+e.id)%i.length;e.material=new E_({color:i[t],metalness:.85,roughness:.25,clearcoat:.4,clearcoatRoughness:.2,side:2}),e.castShadow=!1,e.receiveShadow=!1}}),this.group.rotation.y=Math.PI/6,this.group.add(this.model),this.loaded=!0,console.log(`Jet plane loaded. Size:`,t,`ScaleFactor:`,n)},void 0,e=>{console.error(`Error loading jet plane:`,e)})}update(e,t){this.loaded&&(this.group.rotation.y=Math.PI/6+Math.sin(e*.4)*.15,this.group.rotation.z=Math.sin(e*.7)*.04,this.group.position.y=Math.sin(e*1.2)*4)}}})),hy,gy=e((()=>{kv(),hy=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.loaded=!0;let t=this.createCircuitTexture(),n=new b_;n.moveTo(-35,-50),n.lineTo(35,-50),n.quadraticCurveTo(50,-50,50,-35),n.lineTo(50,35),n.quadraticCurveTo(50,50,35,50),n.lineTo(-35,50),n.quadraticCurveTo(-50,50,-50,35),n.lineTo(-50,-35),n.quadraticCurveTo(-50,-50,-35,-50);let r=new C_(n,{steps:1,depth:8,bevelEnabled:!0,bevelThickness:3,bevelSize:3,bevelOffset:0,bevelSegments:16});r.center();let i=new E_({color:333104,metalness:.1,roughness:.05,transparent:!0,transmission:.95,opacity:1,ior:1.5,thickness:15,clearcoat:1,clearcoatRoughness:.1,side:2});this.glassMesh=new Bm(r,i),this.group.add(this.glassMesh);let a=new y_(r);this.edgeMat=new Ng({color:61695,transparent:!0,opacity:.8});let o=new Hg(a,this.edgeMat);this.group.add(o);let s=new E_({map:t,emissive:61695,emissiveMap:t,emissiveIntensity:1.5,roughness:.2,metalness:.8,side:2}),c=new Vm(90,90,2),l=new T_({color:330261,roughness:.9}),u=[l,l,l,l,s,s];this.innerMesh=new Bm(c,u),this.group.add(this.innerMesh),this.group.rotation.x=Math.PI/8,this.group.rotation.y=-Math.PI/6,console.log(`Procedural Chipset Model loaded.`)}createCircuitTexture(){let e=document.createElement(`canvas`);e.width=1024,e.height=1024;let t=e.getContext(`2d`);t.fillStyle=`#050a15`,t.fillRect(0,0,1024,1024),t.strokeStyle=`#00f0ff`,t.lineWidth=6,t.lineCap=`round`,t.lineJoin=`round`,t.shadowBlur=15,t.shadowColor=`#00f0ff`;let n=t.createRadialGradient(512,512,0,512,512,300);n.addColorStop(0,`rgba(255, 255, 255, 1)`),n.addColorStop(.3,`rgba(0, 240, 255, 0.8)`),n.addColorStop(1,`rgba(0, 240, 255, 0)`),t.fillStyle=n,t.beginPath(),t.arc(512,512,300,0,Math.PI*2),t.fill(),t.fillStyle=`#ffffff`,t.shadowColor=`#ffffff`,t.shadowBlur=40,t.beginPath(),t.roundRect(372,372,280,280,20),t.fill(),t.stroke(),t.shadowColor=`#00f0ff`,t.shadowBlur=15,t.lineWidth=8,t.beginPath(),t.moveTo(402,422),t.lineTo(402,402),t.lineTo(422,402),t.stroke(),t.beginPath(),t.moveTo(602,402),t.lineTo(622,402),t.lineTo(622,422),t.stroke(),t.beginPath(),t.moveTo(402,602),t.lineTo(402,622),t.lineTo(422,622),t.stroke(),t.beginPath(),t.moveTo(602,622),t.lineTo(622,622),t.lineTo(622,602),t.stroke(),t.lineWidth=8;function r(e,n,r){t.beginPath(),t.moveTo(e,n);for(let e=0;e<r.length;e++)t.lineTo(r[e][0],r[e][1]);t.stroke();let i=r[r.length-1];t.beginPath(),t.arc(i[0],i[1],10,0,Math.PI*2),t.fillStyle=`#00f0ff`,t.fill()}for(let e of[[1,1],[-1,1],[-1,-1],[1,-1]]){let n=e[0],i=e[1];r(512+160*n,512+20*i,[[512+250*n,512+20*i],[512+280*n,512+50*i],[512+420*n,512+50*i]]),r(512+160*n,512+60*i,[[512+220*n,512+60*i],[512+280*n,512+120*i],[512+400*n,512+120*i]]),r(512+160*n,512+100*i,[[512+200*n,512+100*i],[512+250*n,512+150*i],[512+300*n,512+150*i],[512+330*n,512+180*i],[512+420*n,512+180*i]]),r(512+160*n,512+140*i,[[512+180*n,512+140*i],[512+220*n,512+180*i],[512+220*n,512+300*i],[512+270*n,512+350*i],[512+400*n,512+350*i]]),r(512+20*n,512+160*i,[[512+20*n,512+250*i],[512+50*n,512+280*i],[512+50*n,512+420*i]]),r(512+60*n,512+160*i,[[512+60*n,512+220*i],[512+120*n,512+280*i],[512+120*n,512+400*i]]),r(512+100*n,512+160*i,[[512+100*n,512+200*i],[512+150*n,512+250*i],[512+150*n,512+300*i],[512+180*n,512+330*i],[512+180*n,512+420*i]]),t.beginPath(),t.roundRect(512+350*n-20,512+350*i-20,40,40,5),t.stroke()}let i=new Xg(e);return i.anisotropy=16,i}update(e,t){if(!this.loaded)return;this.group.rotation.y=-Math.PI/6+Math.sin(e*.3)*.2,this.group.rotation.x=Math.PI/8+Math.sin(e*.5)*.1,this.group.position.y=Math.sin(e*1.2)*3;let n=e%4,r=0;if(n<2){let e=n/2;r=e*e*(3-2*e)}else{let e=(n-2)/2;r=1-e*e*(3-2*e)}let i=1+r*2;if(this.innerMesh.material[4]&&(this.innerMesh.material[4].emissiveIntensity=i*4,this.innerMesh.material[5].emissiveIntensity=i*4),this.edgeMat){let e=new Q(61695);e.multiplyScalar(.2+r*.3),this.edgeMat.color.copy(e),this.edgeMat.opacity=.2}}}}));function _y(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var vy=e((()=>{kv()}));function yy(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function by(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new T_({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function xy(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Sy(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Cy(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function wy(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Ty(e){let t,n=e.extensions&&e.extensions[My.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Ey(n.attributes):e.indices+`:`+Ey(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Ey(e.targets[n]);return t}function Ey(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Dy(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Oy(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:`image/png`}function ky(e,t,n){let r=t.attributes,i=new Kf;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new Z(t[0],t[1],t[2]),new Z(a[0],a[1],a[2])),e.normalized){let t=Dy(sb[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new Z,t=new Z;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Dy(sb[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new lp;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Ay(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=db[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return jf.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${jf.workingColorSpace}" not supported.`),Sy(e,t),ky(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Cy(e,t.targets,n)})}var jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb,pb,mb,hb,gb,_b=e((()=>{kv(),vy(),jy=class extends G_{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Iy(e)}),this.register(function(e){return new Gy(e)}),this.register(function(e){return new Ky(e)}),this.register(function(e){return new qy(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new zy(e)}),this.register(function(e){return new By(e)}),this.register(function(e){return new Vy(e)}),this.register(function(e){return new Fy(e)}),this.register(function(e){return new Hy(e)}),this.register(function(e){return new Ly(e)}),this.register(function(e){return new Wy(e)}),this.register(function(e){return new Uy(e)}),this.register(function(e){return new Ny(e)}),this.register(function(e){return new Jy(e)}),this.register(function(e){return new Yy(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=mv.extractUrlBase(e);a=mv.resolveURL(t,this.path)}else a=mv.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new J_(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error(`THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".`)}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===Xy){try{a[My.KHR_BINARY_GLTF]=new $y(e)}catch(e){r&&r(e);return}i=JSON.parse(a[My.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new gb(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case My.KHR_MATERIALS_UNLIT:a[t]=new Py;break;case My.KHR_DRACO_MESH_COMPRESSION:a[t]=new eb(i,this.dracoLoader);break;case My.KHR_TEXTURE_TRANSFORM:a[t]=new tb;break;case My.KHR_MESH_QUANTIZATION:a[t]=new nb;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}},My={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Ny=class{constructor(e){this.parser=e,this.name=My.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new Q(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],cf);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new fv(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new uv(s),o.distance=c;break;case`spot`:o=new av(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),o.decay=2,Sy(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Py=class{constructor(){this.name=My.KHR_MATERIALS_UNLIT}getMaterialType(){return cm}extendParams(e,t,n){let r=[];e.color=new Q(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],cf),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,sf))}return Promise.all(r)}},Fy=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Iy=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatMap`,a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatRoughnessMap`,a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,`clearcoatNormalMap`,a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new X(e,e)}return Promise.all(i)}},Ly=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceMap`,a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceThicknessMap`,a.iridescenceThicknessTexture)),Promise.all(i)}},Ry=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new Q(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let e=a.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],cf)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,`sheenColorMap`,a.sheenColorTexture,sf)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`sheenRoughnessMap`,a.sheenRoughnessTexture)),Promise.all(i)}},zy=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,`transmissionMap`,a.transmissionTexture)),Promise.all(i)}},By=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor===void 0?0:a.thicknessFactor,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,`thicknessMap`,a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Q().setRGB(o[0],o[1],o[2],cf),Promise.all(i)}},Vy=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},Hy=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor===void 0?1:a.specularFactor,a.specularTexture!==void 0&&i.push(n.assignTexture(t,`specularIntensityMap`,a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Q().setRGB(o[0],o[1],o[2],cf),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,`specularColorMap`,a.specularColorTexture,sf)),Promise.all(i)}},Uy=class{constructor(e){this.parser=e,this.name=My.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor===void 0?1:a.bumpFactor,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,`bumpMap`,a.bumpTexture)),Promise.all(i)}},Wy=class{constructor(e){this.parser=e,this.name=My.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:E_}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,`anisotropyMap`,a.anisotropyTexture)),Promise.all(i)}},Gy=class{constructor(e){this.parser=e,this.name=My.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Ky=class{constructor(e){this.parser=e,this.name=My.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},qy=class{constructor(e){this.parser=e,this.name=My.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Jy=class{constructor(e){this.name=My.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Yy=class{constructor(e){this.name=My.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==ob.TRIANGLES&&e.mode!==ob.TRIANGLE_STRIP&&e.mode!==ob.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new vp,n=new Z,a=new Uf,s=new Z(1,1,1),c=new Mg(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new wg(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Up.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Xy=`glTF`,Zy=12,Qy={JSON:1313821514,BIN:5130562},$y=class{constructor(e){this.name=My.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zy),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xy)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Zy,i=new DataView(e,Zy),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Qy.JSON){let r=new Uint8Array(e,Zy+a,t);this.content=n.decode(r)}else if(r===Qy.BIN){let n=Zy+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},eb=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=My.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=db[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=db[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=sb[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,cf,n)})})}},tb=class{constructor(){this.name=My.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},nb=class{constructor(){this.name=My.KHR_MESH_QUANTIZATION}},rb=class extends k_{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},ib=new Uf,ab=class extends rb{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return ib.fromArray(i).normalize().toArray(i),i}},ob={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sb={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cb={9728:Fd,9729:Rd,9984:Id,9985:zd,9986:Ld,9987:Bd},lb={33071:Nd,33648:Pd,10497:Md},ub={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},db={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},fb={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},pb={CUBICSPLINE:void 0,LINEAR:Xd,STEP:Yd},mb={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`},hb=new vp,gb=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<`u`&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf(`Firefox`)>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),this.textureLoader=typeof createImageBitmap>`u`||n||r&&i<98?new Z_(this.options.manager):new hv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new J_(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return xy(i,a,r),Sy(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[My.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(mv.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=ub[r.type],t=sb[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new dm(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=ub[r.type],o=sb[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new og(f,u/s),t.cache.add(n,c)),p=new cg(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new dm(f,a,d);if(r.sparse!==void 0){let t=ub.SCALAR,n=sb[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new dm(p.array.slice(),p.itemSize,p.normalized));for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=cb[n.magFilter]||1006,t.minFilter=cb[n.minFilter]||1008,t.wrapS=lb[n.wrapS]||1e3,t.wrapT=lb[n.wrapT]||1e3,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Lf(e);t.needsUpdate=!0,n(t)}),t.load(mv.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),e.userData.mimeType=a.mimeType||Oy(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[My.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[My.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[My.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Wg,sm.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Ng,sm.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return T_}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[My.KHR_MATERIALS_UNLIT]){let e=r[My.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new Q(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],cf),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,sf)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||mb.OPAQUE;if(l===mb.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===mb.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==cm&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new X(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==cm&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==cm){let e=i.emissiveFactor;o.emissive=new Q().setRGB(e[0],e[1],e[2],cf)}return i.emissiveTexture!==void 0&&a!==cm&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,sf)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Sy(n,i),t.associations.set(n,{materials:e}),i.extensions&&xy(r,n,i),n})}createUniqueName(e){let t=Ov.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[My.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Ay(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Ty(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[My.KHR_DRACO_MESH_COMPRESSION]?i(o):Ay(new Sm,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?by(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===ob.TRIANGLES||u.mode===ob.TRIANGLE_STRIP||u.mode===ob.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new vg(l,f):new Bm(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===ob.TRIANGLE_STRIP?d.geometry=_y(d.geometry,1):u.mode===ob.TRIANGLE_FAN&&(d.geometry=_y(d.geometry,2));else if(u.mode===ob.LINES)d=new Hg(l,f);else if(u.mode===ob.LINE_STRIP)d=new zg(l,f);else if(u.mode===ob.LINE_LOOP)d=new Ug(l,f);else if(u.mode===ob.POINTS)d=new Yg(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&wy(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Sy(d,i),u.extensions&&xy(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&xy(r,c[0],i),c[0];let l=new $h;i.extensions&&xy(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new qm(Cf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new uh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sy(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new vp;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Cg(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],r=e[1],a=e[2],o=e[3],s=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],l=r[e],u=a[e],d=o[e],f=s[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let p=n._createAnimationTracks(i,l,u,d,f);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}return new V_(i,void 0,c)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,hb)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new yg:t.length>1?new $h:t.length===1?t[0]:new Up,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Sy(o,i),i.extensions&&xy(n,o,i),i.matrix!==void 0){let e=new vp;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new $h;n.name&&(i.name=r.createUniqueName(n.name)),Sy(i,n),n.extensions&&xy(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++)i.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof sm||e instanceof Lf)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];fb[i.path]===fb.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(fb[i.path]){case fb.weights:c=I_;break;case fb.rotation:c=R_;break;case fb.position:case fb.scale:c=B_;break;default:switch(n.itemSize){case 1:c=I_;break;default:c=B_}}let l=r.interpolation===void 0?Xd:pb[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+fb[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Dy(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof R_?ab:rb)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}})),vb,yb=e((()=>{kv(),_b(),vb=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.loaded=!1,this.model=null,new jy().load(`./robotic_eye.glb`,e=>{this.model=e.scene;let t=new Kf().setFromObject(this.model).getSize(new Z),n=150/(Math.max(t.x,t.y,t.z)||1);this.model.scale.setScalar(n);let r=new Kf().setFromObject(this.model).getCenter(new Z);this.model.position.sub(r),this.model.traverse(e=>{if(e.isMesh){let t=e.material.name,n=new E_;t===`Glass`?(n.color=new Q(1118481),n.metalness=.1,n.roughness=.1,n.transparent=!0,n.transmission=.9,n.opacity=1,n.ior=1.5,n.thickness=.5,n.clearcoat=1,n.clearcoatRoughness=.1):t===`Camera_Lens`?(n.color=new Q(328965),n.metalness=1,n.roughness=.05,n.clearcoat=1,n.clearcoatRoughness=0,n.emissive=new Q(17578),n.emissiveIntensity=1.5):t===`Light`?(n.color=new Q(16716049),n.emissive=new Q(16711680),n.emissiveIntensity=5,e.userData.isLight=!0):t===`Copper`?(n.color=new Q(12088115),n.metalness=1,n.roughness=.2,n.clearcoat=.5):t===`White_Plastic`||t===`Camera_Plastic`||t===`Black_Plastic`?(n.color=new Q(1710618),n.metalness=.5,n.roughness=.5,n.clearcoat=.2):t.includes(`Metal`)||t.includes(`BezierCurve`)?(n.color=new Q(3355443),n.metalness=.9,n.roughness=.4):(n.color=new Q(1710628),n.metalness=.9,n.roughness=.3,n.clearcoat=.5),e.material=n}}),this.group.add(this.model),this.loaded=!0,console.log(`Robotic eye loaded. Scale factor:`,n)},e=>{},e=>{console.error(`Error loading the robotic eye model:`,e)})}update(e,t){if(!this.loaded)return;this.group.rotation.y=Math.PI+e*.2+Math.sin(e*.5)*.2,this.group.rotation.z=Math.sin(e*.7)*.1,this.group.position.y=Math.sin(e*1.5)*4;let n=e%4,r=0;r=n<2?n/2:1-(n-2)/2;let i=2+r*8;this.model.traverse(e=>{e.isMesh&&e.material&&e.userData.isLight&&(e.material.emissiveIntensity=i)})}}})),bb,xb=e((()=>{kv(),_b(),bb=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.loaded=!1,this.model=null,new jy().load(`./artificial_neural_network_ann.glb`,e=>{this.model=e.scene;let t=new Kf().setFromObject(this.model).getSize(new Z),n=150/(Math.max(t.x,t.y,t.z)||1)*8;this.model.scale.setScalar(n);let r=new Kf().setFromObject(this.model).getCenter(new Z);this.model.position.sub(r),this.model.traverse(e=>{e.isMesh&&e.material&&(e.material.roughness=.2,e.material.metalness=.8,e.material.emissive&&(e.userData.isEmissive=!0))}),this.group.add(this.model),this.loaded=!0,console.log(`ANN model loaded. Scale factor:`,n)},void 0,e=>{console.error(`Error loading the ANN model:`,e)})}update(e,t){if(!this.loaded)return;this.group.rotation.y=e*.15+Math.sin(e*.3)*.1,this.group.rotation.z=Math.sin(e*.5)*.05,this.group.position.y=Math.sin(e*1.2)*3;let n=e%4,r=0;r=n<2?n/2:1-(n-2)/2;let i=window.sceneState.seasonColor||new Q(13172480),a=.2+r*.8;this.model.traverse(e=>{e.isMesh&&e.material&&e.userData.isEmissive&&(e.material.emissive=i,e.material.emissiveIntensity=a)})}}})),Sb,Cb=e((()=>{kv(),_b(),Sb=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.loaded=!1,this.model=null,new jy().load(`./warped_spacetime.glb`,e=>{this.model=e.scene;let t=new Kf().setFromObject(this.model).getSize(new Z),n=150/(Math.max(t.x,t.y,t.z)||1)*12;this.model.scale.setScalar(n);let r=new Kf().setFromObject(this.model).getCenter(new Z);this.model.position.sub(r),this.model.traverse(e=>{e.isMesh&&(e.material=new E_({color:new Q(1710628),metalness:.9,roughness:.3,clearcoat:.5,clearcoatRoughness:.2,wireframe:e.material.wireframe||!1}))}),this.group.add(this.model),this.loaded=!0,console.log(`Spacetime model loaded. Scale factor:`,n)},void 0,e=>{console.error(`Error loading the Spacetime model:`,e)})}update(e,t){if(!this.loaded)return;this.group.rotation.y=e*.2+Math.sin(e*.5)*.2,this.group.rotation.x=e*.1,this.group.position.y=Math.sin(e*1.5)*4;let n=e%5,r=0;r=n<2.5?n/2.5:1-(n-2.5)/2.5;let i=window.sceneState.seasonColor||new Q(13172480),a=.1+r*.5;this.model.traverse(e=>{e.isMesh&&e.material&&(e.material.emissive=i,e.material.emissiveIntensity=a)})}}})),wb,Tb=e((()=>{kv(),_b(),wb=class{constructor(e){this.scene=e,this.group=new $h,this.scene.add(this.group),this.loaded=!1,this.model=null,new jy().load(`./a_super_computer.glb`,e=>{this.model=e.scene;let t=new Kf().setFromObject(this.model).getSize(new Z),n=150/(Math.max(t.x,t.y,t.z)||1)*8;this.model.scale.setScalar(n);let r=new Kf().setFromObject(this.model).getCenter(new Z);this.model.position.sub(r),this.group.add(this.model),this.loaded=!0,console.log(`Super Computer model loaded. Scale factor:`,n)},void 0,e=>{console.error(`Error loading the Super Computer model:`,e)})}update(e,t){if(!this.loaded)return;this.group.rotation.y=e*.15,this.group.rotation.x=Math.sin(e*.5)*.05,this.group.position.y=Math.sin(e*1)*3;let n=e%3,r=0;r=n<1.5?n/1.5:1-(n-1.5)/1.5;let i=window.sceneState.seasonColor||new Q(13172480),a=.05+r*.3;this.model.traverse(e=>{e.isMesh&&e.material&&e.material.name.toLowerCase().includes(`light`)&&(e.material.emissive=i,e.material.emissiveIntensity=a*5)})}}})),Eb=t((()=>{kv(),jv(),Nv(),iy(),oy(),cy(),my(),gy(),yb(),xb(),Cb(),Tb();var e=document.getElementById(`bg-canvas`),t=new Av(e),n=new Mv(t.scene),r=new ry(t.renderer,t.scene,t.camera),i=new ay(t.scene),a=new sy(t.scene),o=new py(t.scene),s=new hy(t.scene),c=new vb(t.scene),l=new bb(t.scene),u=new Sb(t.scene),d=new wb(t.scene);i.points.position.x=100,i.innerPoints.position.x=100,i.gridLines.position.x=100,o.group.position.x=0,s.group.position.x=100,c.group.position.x=100,l.group.position.x=100,u.group.position.x=100,d.group.position.x=100;var f=[new Q(11075448),new Q(16765332),new Q(16743168),new Q(3718648)];window.sceneState={cameraZ:250,cameraRotationZ:0,bloomStrength:1.2,scrollSpeedMultiplier:1,mouseParallaxX:0,mouseParallaxY:0,particlePattern:0,robotScale:1,jetScale:0,gpuScale:0,eyeScale:0,annScale:0,spacetimeScale:0,computerScale:0,seasonIndex:0,seasonColor:f[0].clone()};var p={x:window.innerWidth/2,y:window.innerHeight/2};window.addEventListener(`mousemove`,e=>{p.x=e.clientX,p.y=e.clientY,window.sceneState.mouseParallaxX=(p.x-window.innerWidth/2)*.05,window.sceneState.mouseParallaxY=(p.y-window.innerHeight/2)*.05});var m=t.onResize;t.onResize=()=>{m(),r.resize(window.innerWidth,window.innerHeight,t.renderer.getPixelRatio())};function h(){requestAnimationFrame(h);let e=t.clock.getElapsedTime();n.update(e);let p=new Q(13172480),m=new Q(16777215),g,_,v=!1;window.sceneState.activeSection===`#services`?(g=f[window.sceneState.seasonIndex||0],_=g,v=!0):(g=p,_=m),window.sceneState.particleTintColor||(window.sceneState.particleTintColor=new Q(16777215)),window.sceneState.seasonColor.lerp(g,.05),window.sceneState.particleTintColor.lerp(_,.05);let y=Math.round(window.sceneState.seasonColor.r*255),b=Math.round(window.sceneState.seasonColor.g*255),x=Math.round(window.sceneState.seasonColor.b*255);document.documentElement.style.setProperty(`--accent`,`rgb(${y}, ${b}, ${x})`),a.update(e);let S=v?window.sceneState.seasonIndex:null;i.update(e,window.sceneState.scrollSpeedMultiplier,window.sceneState.particlePattern,S,window.sceneState.particleTintColor),o.update(e,window.sceneState.scrollSpeedMultiplier),s.update(e,window.sceneState.scrollSpeedMultiplier),c.update(e,window.sceneState.scrollSpeedMultiplier),l.update(e,window.sceneState.scrollSpeedMultiplier),u.update(e,window.sceneState.scrollSpeedMultiplier),d.update(e,window.sceneState.scrollSpeedMultiplier),o.group.scale.lerp(new Z(window.sceneState.jetScale,window.sceneState.jetScale,window.sceneState.jetScale),.1),s.group.scale.lerp(new Z(window.sceneState.gpuScale,window.sceneState.gpuScale,window.sceneState.gpuScale),.1),c.group.scale.lerp(new Z(window.sceneState.eyeScale,window.sceneState.eyeScale,window.sceneState.eyeScale),.1),l.group.scale.lerp(new Z(window.sceneState.annScale,window.sceneState.annScale,window.sceneState.annScale),.1),u.group.scale.lerp(new Z(window.sceneState.spacetimeScale,window.sceneState.spacetimeScale,window.sceneState.spacetimeScale),.1),d.group.scale.lerp(new Z(window.sceneState.computerScale,window.sceneState.computerScale,window.sceneState.computerScale),.1);let C=window.scrollY*.1;t.camera.position.x+=(window.sceneState.mouseParallaxX-t.camera.position.x)*.05,t.camera.position.y+=(-window.sceneState.mouseParallaxY-C-t.camera.position.y)*.05,t.camera.position.z+=(window.sceneState.cameraZ-t.camera.position.z)*.05,t.camera.lookAt(0,-C*.5,0),t.camera.rotation.z+=(window.sceneState.cameraRotationZ-t.camera.rotation.z)*.05,r.bloomPass.strength=window.sceneState.bloomStrength,r.render()}h()}));function Db(){document.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab,n=e.closest(`section`)||e.closest(`.section`)||e.parentElement.parentElement;n.querySelectorAll(`.tab-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),n.querySelectorAll(`.tab-panel`).forEach(e=>e.classList.remove(`active`));let r=document.getElementById(t);r&&(r.classList.add(`active`),mi.fromTo(r.querySelectorAll(`.reveal`),{opacity:0,y:20},{opacity:1,y:0,duration:.5,stagger:.1,ease:`power2.out`}))})})}function Ob(){document.querySelectorAll(`.faq-q`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.parentElement,n=t.classList.contains(`open`);document.querySelectorAll(`.faq-item`).forEach(e=>e.classList.remove(`open`)),n||t.classList.add(`open`)})})}function kb(){let e=document.querySelector(`form`);e&&e.addEventListener(`submit`,e=>{e.preventDefault();let t=e.target.querySelector(`button[type=submit]`);t.textContent=`Message sent ✓`,t.style.background=`rgba(56,189,248,.15)`,t.style.borderColor=`var(--accent)`,t.style.color=`var(--accent)`,setTimeout(()=>{t.textContent=`Send message →`,t.style.background=`var(--accent)`,t.style.borderColor=`var(--accent)`,t.style.color=`var(--ink)`},3e3)})}function Ab(){let e=document.getElementById(`cursor`),t=document.getElementById(`cursorRing`);e&&t&&(window.addEventListener(`mousemove`,n=>{mi.to(e,{x:n.clientX,y:n.clientY,duration:.1,ease:`power2.out`}),mi.to(t,{x:n.clientX,y:n.clientY,duration:.5,ease:`power2.out`})}),document.querySelectorAll(`a, button, .case-card, .tech-pill`).forEach(n=>{n.addEventListener(`mouseenter`,()=>{mi.to(e,{scale:.5,duration:.2}),mi.to(t,{scale:1.5,opacity:.8,duration:.2,borderColor:`rgba(56,189,248,0.8)`})}),n.addEventListener(`mouseleave`,()=>{mi.to(e,{scale:1,duration:.2}),mi.to(t,{scale:1,opacity:.5,duration:.2,borderColor:`var(--accent)`}),mi.to(n,{x:0,y:0,duration:.5,ease:`elastic.out(1, 0.3)`})}),(n.classList.contains(`tech-pill`)||n.classList.contains(`nav-cta`)||n.classList.contains(`btn-primary`))&&n.addEventListener(`mousemove`,e=>{let t=n.getBoundingClientRect(),r=e.clientX-t.left-t.width/2,i=e.clientY-t.top-t.height/2;mi.to(n,{x:r*.3,y:i*.3,duration:.3,ease:`power2.out`})})}))}function jb(){document.querySelectorAll(`.case-card, .pricing-card`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientY-n.top-n.height/2)/(n.height/2)*-10,i=(t.clientX-n.left-n.width/2)/(n.width/2)*10;mi.to(e,{rotateX:r,rotateY:i,transformPerspective:1e3,duration:.4,ease:`power2.out`})}),e.addEventListener(`mouseleave`,()=>{mi.to(e,{rotateX:0,rotateY:0,duration:.7,ease:`elastic.out(1, 0.3)`})})})}function Mb(e){if(e.nodeType===3){let t=e.nodeValue;if(!t.trim())return;e.originalText||=t;let n=e.originalText,r=0,i=setInterval(()=>{e.nodeValue=n.split(``).map((e,t)=>e===` `||e===`
`?e:t<r?n[t]:Rb[Math.floor(Math.random()*54)]).join(``),r>=n.length&&(e.nodeValue=n,clearInterval(i)),r+=.5},30)}else e.nodeType===1&&Array.from(e.childNodes).forEach(Mb)}function Nb(){document.querySelectorAll(`.section-title, .hero-headline`).forEach(e=>{Ns.create({trigger:e,start:`top 90%`,onEnter:()=>Mb(e)})})}function Pb(){document.querySelectorAll(`.process-dot`).forEach(e=>{mi.to(e,{boxShadow:`0 0 15px 3px var(--accent)`,scale:1.2,duration:1.5,ease:`power1.inOut`,yoyo:!0,repeat:-1})})}function Fb(){let e=document.querySelector(`.process-scroll-container`),t=document.querySelector(`.process-grid`);if(!e||!t)return;let n=Array.from(t.querySelectorAll(`.process-step`)),r=n.length;if(r===0)return;let i=Math.ceil(12/r);if(i>1)for(let e=1;e<i;e++)n.forEach(e=>{let n=e.cloneNode(!0);t.appendChild(n)});let a=t.querySelectorAll(`.process-step`),o=a.length,s=360/o,c=0;function l(){c=((a[0].offsetWidth||450)+100)/2/Math.tan(Math.PI/o),a.forEach((e,t)=>{let n=t*s;e.style.transform=`rotateY(${n}deg) translateZ(${c}px)`})}l(),window.addEventListener(`resize`,l),a.forEach(e=>{let t=e.querySelector(`.process-dot`);t&&(mi.killTweensOf(t),mi.to(t,{boxShadow:`0 0 15px 3px var(--accent)`,scale:1.2,duration:1.5,ease:`power1.inOut`,yoyo:!0,repeat:-1}))});let u=0,d=0;e.addEventListener(`wheel`,e=>{Math.abs(e.deltaY)>Math.abs(e.deltaX)||(e.preventDefault(),d-=e.deltaX*.1)},{passive:!1});let f=!1,p=0,m=0,h=t=>{f=!0,p=t.clientX||t.touches&&t.touches[0].clientX,m=d,e.style.cursor=`grabbing`},g=e=>{if(!f)return;let t=(e.clientX||e.touches&&e.touches[0].clientX)-p;d=m+t*.25},_=()=>{f=!1,e.style.cursor=`grab`};e.addEventListener(`pointerdown`,h),window.addEventListener(`pointermove`,g),window.addEventListener(`pointerup`,_),window.addEventListener(`pointercancel`,_);function v(){f||(d-=.3),u+=(d-u)*.05,t.style.transform=`translateZ(-${c}px) rotateY(${u}deg)`,requestAnimationFrame(v)}v()}function Ib(){let e=document.querySelector(`.services-scroll-container`),t=document.querySelector(`.services-grid`);if(!e||!t)return;let n=t.querySelectorAll(`.service-card`),r=n.length;if(r===0)return;let i=360/r,a=0;function o(){a=((n[0].offsetWidth||450)+100)/2/Math.tan(Math.PI/r),n.forEach((e,t)=>{let n=t*i;e.style.transform=`rotateY(${n}deg) translateZ(${a}px)`})}o(),window.addEventListener(`resize`,o);let s=0,c=0;e.addEventListener(`wheel`,e=>{Math.abs(e.deltaY)>Math.abs(e.deltaX)||(e.preventDefault(),c-=e.deltaX*.1)},{passive:!1});let l=!1,u=0,d=0,f=t=>{l=!0,u=t.clientX||t.touches&&t.touches[0].clientX,d=c,e.style.cursor=`grabbing`},p=e=>{if(!l)return;let t=(e.clientX||e.touches&&e.touches[0].clientX)-u;c=d+t*.25},m=()=>{l=!1,e.style.cursor=`grab`};e.addEventListener(`pointerdown`,f),window.addEventListener(`pointermove`,p),window.addEventListener(`pointerup`,m),window.addEventListener(`pointercancel`,m);function h(){if(l||(c-=.3),s+=(c-s)*.05,t.style.transform=`translateZ(-${a}px) rotateY(${s}deg)`,window.sceneState){let e=-s%360;e<0&&(e+=360);let t=Math.round(e/i)%r;window.sceneState.seasonIndex=Math.floor(t/3)}requestAnimationFrame(h)}h()}function Lb(){Db(),Ob(),kb(),Ab(),jb(),Nb(),Pb(),Ib(),Fb()}var Rb,zb=e((()=>{hi(),Us(),Rb=`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>-_\\/[]{}—=+*^?#_`}));function Bb(){document.querySelectorAll(`.services-grid, .process-grid, .industries-list, .cases-grid, .team-grid, .pricing-grid, .faq-list, .testimonial-grid, .contact-grid`).forEach(e=>{e.classList.remove(`reveal`),e.style.opacity=1,mi.fromTo(Array.from(e.children),{opacity:0,y:40},{opacity:1,y:0,duration:.8,stagger:.1,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 85%`,toggleActions:`play none none none`}})}),document.querySelectorAll(`.section-title, .hero-headline, .hero-sub`).forEach(e=>{mi.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:`power3.out`,scrollTrigger:{trigger:e,start:`top 90%`}})})}var Vb=e((()=>{hi()}));function Hb(e){mi.timeline({scrollTrigger:{trigger:`#services`,start:`top bottom`,end:`bottom top`,scrub:1}}).to(window.sceneState,{scrollSpeedMultiplier:2,ease:`power1.inOut`}),mi.timeline({scrollTrigger:{trigger:`#process`,start:`top bottom`,end:`bottom top`,scrub:1}}).to(window.sceneState,{cameraRotationZ:.35,bloomStrength:1.8,ease:`power1.inOut`}),mi.timeline({scrollTrigger:{trigger:`#industries`,start:`top bottom`,end:`bottom top`,scrub:1}}).to(window.sceneState,{cameraRotationZ:-.15,scrollSpeedMultiplier:-1,bloomStrength:2.2,ease:`power1.inOut`}),mi.timeline({scrollTrigger:{trigger:`#work`,start:`top bottom`,end:`bottom top`,scrub:1}}).to(window.sceneState,{cameraRotationZ:0,scrollSpeedMultiplier:1,bloomStrength:1,ease:`power1.inOut`}),Ns.create({trigger:`.hero`,start:`top center`,onEnter:()=>{window.sceneState.particlePattern=0,window.sceneState.activeSection=`.hero`,e(0),mi.to(window.sceneState,{robotScale:1,jetScale:0,gpuScale:0,eyeScale:0,annScale:0,spacetimeScale:0,computerScale:0,duration:1,ease:`power2.out`})},onEnterBack:()=>{window.sceneState.particlePattern=0,window.sceneState.activeSection=`.hero`,e(0),mi.to(window.sceneState,{robotScale:1,jetScale:0,gpuScale:0,eyeScale:0,annScale:0,spacetimeScale:0,computerScale:0,duration:1,ease:`power2.out`})}}),Ub.forEach(({id:t,pattern:n,model:r},i)=>{let a=document.querySelector(t);a&&Ns.create({trigger:a,start:`top center`,onEnter:()=>{window.sceneState.particlePattern=n,window.sceneState.activeSection=t,e(n),mi.to(window.sceneState,{robotScale:+(r===`robot`),jetScale:+(r===`jet`),gpuScale:+(r===`gpu`),eyeScale:+(r===`eye`),annScale:+(r===`ann`),spacetimeScale:+(r===`spacetime`),computerScale:+(r===`computer`),duration:1,ease:`power2.out`})},onEnterBack:()=>{window.sceneState.particlePattern=n,window.sceneState.activeSection=t,e(n),mi.to(window.sceneState,{robotScale:+(r===`robot`),jetScale:+(r===`jet`),gpuScale:+(r===`gpu`),eyeScale:+(r===`eye`),annScale:+(r===`ann`),spacetimeScale:+(r===`spacetime`),computerScale:+(r===`computer`),duration:1,ease:`power2.out`})}})}),document.querySelectorAll(`.section-slice`).forEach(e=>{Ns.create({trigger:e,start:`top 85%`,onEnter:()=>e.classList.add(`is-visible`),onEnterBack:()=>e.classList.add(`is-visible`),onLeave:()=>e.classList.remove(`is-visible`),onLeaveBack:()=>e.classList.remove(`is-visible`)})})}var Ub,Wb=e((()=>{hi(),Us(),Ub=[{id:`#services`,pattern:1,model:`gpu`},{id:`#process`,pattern:2,model:`jet`},{id:`#industries`,pattern:3,model:`eye`},{id:`#work`,pattern:4,model:`robot`},{id:`#technology`,pattern:6,model:`ann`},{id:`#team`,pattern:5,model:`computer`},{id:`#pricing`,pattern:1,model:`spacetime`},{id:`#contact`,pattern:0,model:`robot`}]}));function Gb(e){Jb&&(Yb.forEach(e=>{e.pause(),e.currentTime=0}),Yb[e%Yb.length].play().catch(()=>{console.warn(`Audio autoplay prevented. User must enable sound first.`)}))}function Kb(){Yb=qb.map(e=>{let t=new Audio(e);return t.volume=.4,t});let e=document.createElement(`button`);e.id=`sound-toggle`,e.innerHTML=`Sound: OFF`,Object.assign(e.style,{position:`fixed`,bottom:`2rem`,right:`2rem`,zIndex:`9999`,fontFamily:`'Space Mono', monospace`,fontSize:`0.7rem`,padding:`0.6rem 1.2rem`,background:`var(--ink-dim)`,color:`var(--text-muted)`,border:`1px solid var(--border)`,cursor:`pointer`,borderRadius:`20px`,backdropFilter:`blur(10px)`,transition:`color 0.3s, border-color 0.3s`}),e.addEventListener(`click`,()=>{if(Jb=!Jb,Jb){e.innerHTML=`Sound: ON`,e.style.color=`var(--accent)`,e.style.borderColor=`var(--accent)`;let t=Yb[0];t.volume=0,t.play().then(()=>{t.pause(),t.currentTime=0,t.volume=.4}).catch(e=>console.error(`Audio unlock failed:`,e))}else e.innerHTML=`Sound: OFF`,e.style.color=`var(--text-muted)`,e.style.borderColor=`var(--border)`,Yb.forEach(e=>e.pause())}),document.body.appendChild(e)}var qb,Jb,Yb,Xb=e((()=>{qb=[`./alexzavesa-calm-inspiring-technology-logo-short-version-518993.mp3`,`./soundreality-fluorescent-forest-ambient-536763.mp3`,`./u_7hpxkdroz2-space-461600.mp3`],Jb=!1,Yb=[]}));t((()=>{hi(),Us(),Eb(),zb(),Vb(),Wb(),Xb(),mi.registerPlugin(Ns),Lb(),Bb(),Kb(),Hb(Gb)}))();