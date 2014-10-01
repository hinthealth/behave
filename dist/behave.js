/**
 * @license
 * Lo-Dash 2.2.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:_+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=!0;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:_+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=!0
}}function r(n){return n.charCodeAt(0)}function u(n,t){var e=n.m,r=t.m;if(e!==r){if(e>r||typeof e=="undefined")return 1;if(e<r||typeof r=="undefined")return-1}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[0|r/2],a=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&a&&typeof a=="object")return!1;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=!1,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function a(n){return"\\"+G[n]}function i(){return g.pop()||[]}function f(){return y.pop()||{k:null,l:null,m:null,"false":!1,n:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,o:null}
}function l(){}function c(n){n.length=0,g.length<d&&g.push(n)}function p(n){var t=n.l;t&&p(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,y.length<d&&y.push(n)}function s(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function v(e){function g(n){if(!n||je.call(n)!=z)return!1;var t=n.valueOf,e=typeof t=="function"&&(e=ge(t))&&ge(e);return e?n==e||ge(n)==e:st(n)}function y(n,t,e){if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:et(t,e,3);
for(var r=-1,u=V[typeof n]&&Ke(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function d(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:et(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function G(n,t,e){var r,u=n,o=u;if(!u)return o;for(var a=arguments,i=0,f=typeof e=="number"?2:a.length;++i<f;)if((u=a[i])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Ke(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);return o}function J(n,t,e){var r,u=n,o=u;
if(!u)return o;var a=arguments,i=0,f=typeof e=="number"?2:a.length;if(3<f&&"function"==typeof a[f-2])var l=et(a[--f-1],a[f--],2);else 2<f&&"function"==typeof a[f-1]&&(l=a[--f]);for(;++i<f;)if((u=a[i])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Ke(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function Q(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)ye.call(n,t)&&e.push(t);return e}function Y(n){return n&&typeof n=="object"&&!Pe(n)&&ye.call(n,"__wrapped__")?n:new nt(n)}function nt(n,t){this.__chain__=!!t,this.__wrapped__=n
}function tt(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!bt(n))return n;var a=je.call(n);if(!L[a])return n;var f=We[a];switch(a){case F:case T:return new f(+n);case q:case K:return new f(n);case P:return o=f(n.source,O.exec(n)),o.lastIndex=n.lastIndex,o}if(a=Pe(n),t){var l=!r;r||(r=i()),u||(u=i());for(var p=r.length;p--;)if(r[p]==n)return u[p];o=a?f(n.length):{}}else o=a?s(n):J({},n);return a&&(ye.call(n,"index")&&(o.index=n.index),ye.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(a?It:y)(n,function(n,a){o[a]=tt(n,t,e,r,u)
}),l&&(c(r),c(u)),o):o}function et(n,t,e){if(typeof n!="function")return Gt;if(typeof t=="undefined")return n;var r=n.__bindData__||qe.funcNames&&!n.name;if(typeof r=="undefined"){var u=R&&he.call(n);qe.funcNames||!u||I.test(u)||(r=!0),(qe.funcNames||!r)&&(r=!qe.funcDecomp||R.test(u),ze(n,r))}if(true!==r&&r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)
}}return Mt(n,t)}function rt(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var a=n[r];if(a&&typeof a=="object"&&typeof a.length=="number"&&(Pe(a)||ht(a))){t||(a=rt(a,t,e));var i=-1,f=a.length,l=o.length;for(o.length+=f;++i<f;)o[l++]=a[i]}else e||o.push(a)}return o}function ut(n,t,e,r,u,o){if(e){var a=e(n,t);if(typeof a!="undefined")return!!a}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return!1;if(null==n||null==t)return n===t;var f=je.call(n),l=je.call(t);
if(f==B&&(f=z),l==B&&(l=z),f!=l)return!1;switch(f){case F:case T:return+n==+t;case q:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case P:case K:return n==oe(t)}if(l=f==$,!l){if(ye.call(n,"__wrapped__")||ye.call(t,"__wrapped__"))return ut(n.__wrapped__||n,t.__wrapped__||t,e,r,u,o);if(f!=z)return!1;var f=n.constructor,p=t.constructor;if(f!=p&&!(_t(f)&&f instanceof f&&_t(p)&&p instanceof p))return!1}for(p=!u,u||(u=i()),o||(o=i()),f=u.length;f--;)if(u[f]==n)return o[f]==t;var s=0,a=!0;if(u.push(n),o.push(t),l){if(f=n.length,s=t.length,a=s==n.length,!a&&!r)return a;
for(;s--;)if(l=f,p=t[s],r)for(;l--&&!(a=ut(n[l],p,e,r,u,o)););else if(!(a=ut(n[s],p,e,r,u,o)))break;return a}return d(t,function(t,i,f){return ye.call(f,i)?(s++,a=ye.call(n,i)&&ut(n[i],t,e,r,u,o)):void 0}),a&&!r&&d(n,function(n,t,e){return ye.call(e,t)?a=-1<--s:void 0}),p&&(c(u),c(o)),a}function ot(n,t,e,r,u){(Pe(t)?It:y)(t,function(t,o){var a,i,f=t,l=n[o];if(t&&((i=Pe(t))||g(t))){for(f=r.length;f--;)if(a=r[f]==t){l=u[f];break}if(!a){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=i?Pe(l)?l:[]:g(l)?l:{}),r.push(t),u.push(l),c||ot(l,t,e,r,u)
}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(e,r,u){var a=-1,f=pt(),l=e?e.length:0,s=[],v=!r&&l>=b&&f===n,h=u||v?i():s;if(v){var g=o(h);g?(f=t,h=g):(v=!1,h=u?h:(c(h),s))}for(;++a<l;){var g=e[a],y=u?u(g,a,e):g;(r?!a||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(c(h.k),p(h)):u&&c(h),s}function it(n){return function(t,e,r){var u={};e=Y.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var a=t[r];
n(u,a,e(a,r,t),t)}else y(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ft(n,t,e,r,u,o){var a=1&t,i=2&t,f=4&t,l=8&t,c=16&t,p=32&t,s=n;if(!i&&!_t(n))throw new ae;c&&!e.length&&(t&=-17,c=e=!1),p&&!r.length&&(t&=-33,p=r=!1);var v=n&&n.__bindData__;if(v)return!a||1&v[1]||(v[4]=u),!a&&1&v[1]&&(t|=8),!f||4&v[1]||(v[5]=o),c&&_e.apply(v[2]||(v[2]=[]),e),p&&_e.apply(v[3]||(v[3]=[]),r),v[1]|=t,ft.apply(null,v);if(!a||i||f||p||!(qe.fastBind||Ce&&c))g=function(){var v=arguments,h=a?u:this;return(f||c||p)&&(v=$e.call(v),c&&ke.apply(v,e),p&&_e.apply(v,r),f&&v.length<o)?(t|=16,ft(n,l?t:-4&t,v,null,u,o)):(i&&(n=h[s]),this instanceof g?(h=lt(n.prototype),v=n.apply(h,v),bt(v)?v:h):n.apply(h,v))
};else{if(c){var h=[u];_e.apply(h,e)}var g=c?Ce.apply(n,h):Ce.call(n,u)}return ze(g,$e.call(arguments)),g}function lt(n){return bt(n)?Oe(n):{}}function ct(n){return Le[n]}function pt(){var t=(t=Y.indexOf)===Wt?n:t;return t}function st(n){var t,e;return n&&je.call(n)==z&&(t=n.constructor,!_t(t)||t instanceof t)?(d(n,function(n,t){e=t}),typeof e=="undefined"||ye.call(n,e)):!1}function vt(n){return Me[n]}function ht(n){return n&&typeof n=="object"&&typeof n.length=="number"&&je.call(n)==B||!1}function gt(n,t,e){var r=Ke(n),u=r.length;
for(t=et(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function yt(n){var t=[];return d(n,function(n,e){_t(n)&&t.push(e)}),t.sort()}function mt(n){for(var t=-1,e=Ke(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function _t(n){return typeof n=="function"}function bt(n){return!(!n||!V[typeof n])}function dt(n){return typeof n=="number"||je.call(n)==q}function wt(n){return typeof n=="string"||je.call(n)==K}function jt(n){for(var t=-1,e=Ke(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u
}function kt(n,t,e){var r=-1,u=pt(),o=n?n.length:0,a=!1;return e=(0>e?Re(0,o+e):e)||0,Pe(n)?a=-1<u(n,t,e):typeof o=="number"?a=-1<(wt(n)?n.indexOf(t,e):u(n,t,e)):y(n,function(n){return++r<e?void 0:!(a=n===t)}),a}function xt(n,t,e){var r=!0;t=Y.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else y(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Ct(n,t,e){var r=[];t=Y.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];
t(o,e,n)&&r.push(o)}else y(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function Ot(n,t,e){t=Y.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return y(n,function(n,e,r){return t(n,e,r)?(u=n,!1):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function It(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:et(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else y(n,t);return n}function Nt(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:et(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Ke(n),r=u.length;
y(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Et(n,t,e){var r=-1,u=n?n.length:0;if(t=Y.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);else o=[],y(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function St(n,t,e){var u=-1/0,o=u;if(!t&&Pe(n)){e=-1;for(var a=n.length;++e<a;){var i=n[e];i>o&&(o=i)}}else t=!t&&wt(n)?r:Y.createCallback(t,e,3),It(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Rt(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=Xt(r);++e<r;)u[e]=n[e][t];
return u||Et(n,t)}function At(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=et(t,r,4);var o=-1,a=n.length;if(typeof a=="number")for(u&&(e=n[++o]);++o<a;)e=t(e,n[o],o,n);else y(n,function(n,r,o){e=u?(u=!1,n):t(e,n,r,o)});return e}function Dt(n,t,e,r){var u=3>arguments.length;return t=et(t,r,4),Nt(n,function(n,r,o){e=u?(u=!1,n):t(e,n,r,o)}),e}function Bt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return It(n,function(n){var e=Jt(++t);r[t]=r[e],r[e]=n}),r}function $t(n,t,e){var r;t=Y.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else y(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Ft(e){var r=-1,u=pt(),a=e?e.length:0,i=rt(arguments,!0,!0,1),f=[],l=a>=b&&u===n;if(l){var c=o(i);c?(u=t,i=c):l=!1}for(;++r<a;)c=e[r],0>u(i,c)&&f.push(c);return l&&p(i),f}function Tt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;for(t=Y.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:h;return s(n,0,Ae(Re(0,r),u))
}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Re(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=Y.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Re(0,t);return s(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?Y.createCallback(e,r,1):Gt,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(e=(r=e)&&r[t]===n?null:t,t=!1),null!=e&&(e=Y.createCallback(e,r,3)),at(n,t,e)
}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?St(Rt(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Rt(n,t);return r}function Lt(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ft(n,17,$e.call(arguments,2),null,t):ft(n,1,null,null,t)}function Ut(n,t,e){function r(){c&&se(c),a=c=p=h,(g||v!==t)&&(s=me(),i=n.apply(l,o))}function u(){var e=t-(me()-f);0<e?c=de(u,e):(a&&se(a),e=p,a=c=p=h,e&&(s=me(),i=n.apply(l,o)))
}var o,a,i,f,l,c,p,s=0,v=!1,g=!0;if(!_t(n))throw new ae;if(t=Re(0,t)||0,true===e)var y=!0,g=!1;else bt(e)&&(y=e.leading,v="maxWait"in e&&(Re(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=me(),l=this,p=g&&(c||!y),false===v)var e=y&&!c;else{a||y||(s=f);var h=v-(f-s);0<h?a||(a=de(r,h)):(a&&(a=se(a)),s=f,i=n.apply(l,o))}return c||t===v||(c=de(u,t)),e&&(i=n.apply(l,o)),i}}function Vt(n){if(!_t(n))throw new ae;var t=$e.call(arguments,1);return de(function(){n.apply(h,t)},1)
}function Gt(n){return n}function Ht(n,t){var e=n,r=!t||_t(e);t||(e=nt,t=n,n=Y),It(yt(t),function(u){var o=n[u]=t[u];r&&(e.prototype[u]=function(){var t=this.__wrapped__,r=[t];return _e.apply(r,arguments),r=o.apply(n,r),t&&typeof t=="object"&&t===r?this:(r=new e(r),r.__chain__=this.__chain__,r)})})}function Jt(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=!0)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,r=Be(),e||n%1||t%1?Ae(n+r*(t-n+parseFloat("1e-"+((r+"").length-1))),t):n+ve(r*(t-n+1))
}function Qt(){return this.__wrapped__}e=e?Z.defaults(H.Object(),e,Z.pick(H,D)):H;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ae=e.TypeError,ie=[],fe=re.prototype,le=e._,ce=ue("^"+oe(fe.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),pe=te.ceil,se=e.clearTimeout,ve=te.floor,he=ne.prototype.toString,ge=ce.test(ge=re.getPrototypeOf)&&ge,ye=fe.hasOwnProperty,me=ce.test(me=Zt.now)&&me||function(){return+new Zt
},_e=ie.push,be=e.setImmediate,de=e.setTimeout,we=ie.splice,je=fe.toString,ke=ie.unshift,xe=function(){try{var n={},t=ce.test(t=re.defineProperty)&&t,e=t(n,n,n)&&t}catch(r){}return e}(),Ce=ce.test(Ce=je.bind)&&Ce,Oe=ce.test(Oe=re.create)&&Oe,Ie=ce.test(Ie=Xt.isArray)&&Ie,Ne=e.isFinite,Ee=e.isNaN,Se=ce.test(Se=re.keys)&&Se,Re=te.max,Ae=te.min,De=e.parseInt,Be=te.random,$e=ie.slice,Fe=ce.test(e.attachEvent),Te=Ce&&!/\n|true/.test(Ce+Fe),We={};We[$]=Xt,We[F]=Yt,We[T]=Zt,We[W]=ne,We[z]=re,We[q]=ee,We[P]=ue,We[K]=oe,nt.prototype=Y.prototype;
var qe=Y.support={};qe.fastBind=Ce&&!Te,qe.funcDecomp=!ce.test(e.a)&&R.test(v),qe.funcNames=typeof ne.name=="string",Y.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:Y}},Oe||(lt=function(n){if(bt(n)){l.prototype=n;var t=new l;l.prototype=null}return t||{}});var ze=xe?function(n,t){U.value=t,xe(n,"__bindData__",U)}:l,Pe=Ie||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&je.call(n)==$||!1},Ke=Se?function(n){return bt(n)?Se(n):[]
}:Q,Le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Me=mt(Le),Ue=ue("("+Ke(Me).join("|")+")","g"),Ve=ue("["+Ke(Le).join("")+"]","g"),Ge=it(function(n,t,e){ye.call(n,e)?n[e]++:n[e]=1}),He=it(function(n,t,e){(ye.call(n,e)?n[e]:n[e]=[]).push(t)}),Je=it(function(n,t,e){n[e]=t});Te&&X&&typeof be=="function"&&(Vt=function(n){if(!_t(n))throw new ae;return be.apply(e,arguments)});var Qe=8==De(w+"08")?De:function(n,t){return De(wt(n)?n.replace(E,""):n,t||0)};return Y.after=function(n,t){if(!_t(t))throw new ae;
return function(){return 1>--n?t.apply(this,arguments):void 0}},Y.assign=J,Y.at=function(n){for(var t=arguments,e=-1,r=rt(t,!0,!1,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];return u},Y.bind=Mt,Y.bindAll=function(n){for(var t=1<arguments.length?rt(arguments,!0,!1,1):yt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ft(n[u],1,null,null,n)}return n},Y.bindKey=function(n,t){return 2<arguments.length?ft(t,19,$e.call(arguments,2),null,n):ft(t,3,null,null,n)},Y.chain=function(n){return n=new nt(n),n.__chain__=!0,n
},Y.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},Y.compose=function(){for(var n=arguments,t=n.length;t--;)if(!_t(n[t]))throw new ae;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},Y.countBy=Ge,Y.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return et(n,t,e);if("object"!=r)return function(t){return t[n]};var u=Ke(n),o=u[0],a=n[o];return 1!=u.length||a!==a||bt(a)?function(t){for(var e=u.length,r=!1;e--&&(r=ut(t[u[e]],n[u[e]],null,!0)););return r
}:function(n){return n=n[o],a===n&&(0!==a||1/a==1/n)}},Y.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ft(n,4,null,null,null,t)},Y.debounce=Ut,Y.defaults=G,Y.defer=Vt,Y.delay=function(n,t){if(!_t(n))throw new ae;var e=$e.call(arguments,2);return de(function(){n.apply(h,e)},t)},Y.difference=Ft,Y.filter=Ct,Y.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(e=(r=e)&&r[t]===n?null:t,t=!1),null!=e&&(n=Et(n,e,r)),rt(n,t)},Y.forEach=It,Y.forEachRight=Nt,Y.forIn=d,Y.forInRight=function(n,t,e){var r=[];
d(n,function(n,t){r.push(t,n)});var u=r.length;for(t=et(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},Y.forOwn=y,Y.forOwnRight=gt,Y.functions=yt,Y.groupBy=He,Y.indexBy=Je,Y.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=Y.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return s(n,0,Ae(Re(0,u-r),u))},Y.intersection=function(e){for(var r=arguments,u=r.length,a=-1,f=i(),l=-1,s=pt(),v=e?e.length:0,h=[],g=i();++a<u;){var y=r[a];f[a]=s===n&&(y?y.length:0)>=b&&o(a?r[a]:g)
}n:for(;++l<v;){var m=f[0],y=e[l];if(0>(m?t(m,y):s(g,y))){for(a=u,(m||g).push(y);--a;)if(m=f[a],0>(m?t(m,y):s(r[a],y)))continue n;h.push(y)}}for(;u--;)(m=f[u])&&p(m);return c(f),c(g),h},Y.invert=mt,Y.invoke=function(n,t){var e=$e.call(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,a=Xt(typeof o=="number"?o:0);return It(n,function(n){a[++r]=(u?t:n[t]).apply(n,e)}),a},Y.keys=Ke,Y.map=Et,Y.max=St,Y.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):_+arguments[0];return ye.call(r,u)?r[u]:r[u]=n.apply(this,arguments)
}if(!_t(n))throw new ae;return e.cache={},e},Y.merge=function(n){var t=arguments,e=2;if(!bt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=et(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=$e.call(arguments,1,e),u=-1,o=i(),a=i();++u<e;)ot(n,t[u],r,o,a);return c(o),c(a),n},Y.min=function(n,t,e){var u=1/0,o=u;if(!t&&Pe(n)){e=-1;for(var a=n.length;++e<a;){var i=n[e];i<o&&(o=i)}}else t=!t&&wt(n)?r:Y.createCallback(t,e,3),It(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)
});return o},Y.omit=function(n,t,e){var r=pt(),u=typeof t=="function",o={};if(u)t=Y.createCallback(t,e,3);else var a=rt(arguments,!0,!1,1);return d(n,function(n,e,i){(u?!t(n,e,i):0>r(a,e))&&(o[e]=n)}),o},Y.once=function(n){var t,e;if(!_t(n))throw new ae;return function(){return t?e:(t=!0,e=n.apply(this,arguments),n=null,e)}},Y.pairs=function(n){for(var t=-1,e=Ke(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},Y.partial=function(n){return ft(n,16,$e.call(arguments,1))},Y.partialRight=function(n){return ft(n,32,null,$e.call(arguments,1))
},Y.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=rt(arguments,!0,!1,1),a=bt(n)?o.length:0;++u<a;){var i=o[u];i in n&&(r[i]=n[i])}else t=Y.createCallback(t,e,3),d(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},Y.pluck=Rt,Y.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,a=t[e];++o<u;)n[o]===a&&(we.call(n,o--,1),u--);return n},Y.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Re(0,pe((t-n)/(e||1)));
for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},Y.reject=function(n,t,e){return t=Y.createCallback(t,e,3),Ct(n,function(n,e,r){return!t(n,e,r)})},Y.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=Y.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),we.call(n,r--,1),u--);return o},Y.rest=qt,Y.shuffle=Bt,Y.sortBy=function(n,t,e){var r=-1,o=n?n.length:0,a=Xt(typeof o=="number"?o:0);for(t=Y.createCallback(t,e,3),It(n,function(n,e,u){var o=a[++r]=f();o.m=t(n,e,u),o.n=r,o.o=n}),o=a.length,a.sort(u);o--;)n=a[o],a[o]=n.o,p(n);
return a},Y.tap=function(n,t){return t(n),n},Y.throttle=function(n,t,e){var r=!0,u=!0;if(!_t(n))throw new ae;return false===e?r=!1:bt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),M.leading=r,M.maxWait=t,M.trailing=u,Ut(n,t,M)},Y.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=et(t,e,1);++r<n;)u[r]=t(r);return u},Y.toArray=function(n){return n&&typeof n.length=="number"?s(n):jt(n)},Y.transform=function(n,t,e,r){var u=Pe(n);return t=et(t,r,4),null==e&&(u?e=[]:(r=n&&n.constructor,e=lt(r&&r.prototype))),(u?It:y)(n,function(n,r,u){return t(e,n,r,u)
}),e},Y.union=function(){return at(rt(arguments,!0,!0))},Y.uniq=Pt,Y.values=jt,Y.where=Ct,Y.without=function(n){return Ft(n,$e.call(arguments,1))},Y.wrap=function(n,t){if(!_t(t))throw new ae;return function(){var e=[n];return _e.apply(e,arguments),t.apply(this,e)}},Y.zip=Kt,Y.zipObject=Lt,Y.collect=Et,Y.drop=qt,Y.each=It,Y.b=Nt,Y.extend=J,Y.methods=yt,Y.object=Lt,Y.select=Ct,Y.tail=qt,Y.unique=Pt,Y.unzip=Kt,Ht(Y),Y.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=!1),tt(n,t,typeof e=="function"&&et(e,r,1))
},Y.cloneDeep=function(n,t,e){return tt(n,!0,typeof t=="function"&&et(t,e,1))},Y.contains=kt,Y.escape=function(n){return null==n?"":oe(n).replace(Ve,ct)},Y.every=xt,Y.find=Ot,Y.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=Y.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},Y.findKey=function(n,t,e){var r;return t=Y.createCallback(t,e,3),y(n,function(n,e,u){return t(n,e,u)?(r=e,!1):void 0}),r},Y.findLast=function(n,t,e){var r;return t=Y.createCallback(t,e,3),Nt(n,function(n,e,u){return t(n,e,u)?(r=n,!1):void 0
}),r},Y.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=Y.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},Y.findLastKey=function(n,t,e){var r;return t=Y.createCallback(t,e,3),gt(n,function(n,e,u){return t(n,e,u)?(r=e,!1):void 0}),r},Y.has=function(n,t){return n?ye.call(n,t):!1},Y.identity=Gt,Y.indexOf=Wt,Y.isArguments=ht,Y.isArray=Pe,Y.isBoolean=function(n){return true===n||false===n||je.call(n)==F},Y.isDate=function(n){return n?typeof n=="object"&&je.call(n)==T:!1},Y.isElement=function(n){return n?1===n.nodeType:!1
},Y.isEmpty=function(n){var t=!0;if(!n)return t;var e=je.call(n),r=n.length;return e==$||e==K||e==B||e==z&&typeof r=="number"&&_t(n.splice)?!r:(y(n,function(){return t=!1}),t)},Y.isEqual=function(n,t,e,r){return ut(n,t,typeof e=="function"&&et(e,r,2))},Y.isFinite=function(n){return Ne(n)&&!Ee(parseFloat(n))},Y.isFunction=_t,Y.isNaN=function(n){return dt(n)&&n!=+n},Y.isNull=function(n){return null===n},Y.isNumber=dt,Y.isObject=bt,Y.isPlainObject=g,Y.isRegExp=function(n){return n?typeof n=="object"&&je.call(n)==P:!1
},Y.isString=wt,Y.isUndefined=function(n){return typeof n=="undefined"},Y.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Re(0,r+e):Ae(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},Y.mixin=Ht,Y.noConflict=function(){return e._=le,this},Y.parseInt=Qe,Y.random=Jt,Y.reduce=At,Y.reduceRight=Dt,Y.result=function(n,t){if(n){var e=n[t];return _t(e)?n[t]():e}},Y.runInContext=v,Y.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Ke(n).length},Y.some=$t,Y.sortedIndex=zt,Y.template=function(n,t,e){var r=Y.templateSettings;
n||(n=""),e=G({},e,r);var u,o=G({},e.imports,r.imports),r=Ke(o),o=jt(o),i=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?C:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(i,c).replace(A,a),e&&(l+="'+__e("+e+")+'"),f&&(u=!0,l+="';"+f+";__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),i=c+t.length,t}),l+="';\n",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(j,""):l).replace(k,"$1").replace(x,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";
try{var c=ne(r,"return "+l).apply(h,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},Y.unescape=function(n){return null==n?"":oe(n).replace(Ue,vt)},Y.uniqueId=function(n){var t=++m;return oe(null==n?"":n)+t},Y.all=xt,Y.any=$t,Y.detect=Ot,Y.findWhere=Ot,Y.foldl=At,Y.foldr=Dt,Y.include=kt,Y.inject=At,y(Y,function(n,t){Y.prototype[t]||(Y.prototype[t]=function(){var t=[this.__wrapped__],e=this.__chain__;return _e.apply(t,arguments),t=n.apply(Y,t),e?new nt(t,e):t})}),Y.first=Tt,Y.last=function(n,t,e){var r=0,u=n?n.length:0;
if(typeof t!="number"&&null!=t){var o=u;for(t=Y.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:h;return s(n,Re(0,u-r))},Y.sample=function(n,t,e){var r=n?n.length:0;return typeof r!="number"&&(n=jt(n)),null==t||e?n?n[Jt(r-1)]:h:(n=Bt(n),n.length=Ae(Re(0,t),n.length),n)},Y.take=Tt,Y.head=Tt,y(Y,function(n,t){var e="sample"!==t;Y.prototype[t]||(Y.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new nt(o,u):o
})}),Y.VERSION="2.2.1",Y.prototype.chain=function(){return this.__chain__=!0,this},Y.prototype.toString=function(){return oe(this.__wrapped__)},Y.prototype.value=Qt,Y.prototype.valueOf=Qt,It(["join","pop","shift"],function(n){var t=ie[n];Y.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);return n?new nt(e,n):e}}),It(["push","reverse","sort","unshift"],function(n){var t=ie[n];Y.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),It(["concat","slice","splice"],function(n){var t=ie[n];
Y.prototype[n]=function(){return new nt(t.apply(this.__wrapped__,arguments),this.__chain__)}}),Y}var h,g=[],y=[],m=0,_=+new Date+"",b=75,d=40,w=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",j=/\b__p\+='';/g,k=/\b(__p\+=)''\+/g,x=/(__e\(.*?\)|\b__t\))\+'';/g,C=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,O=/\w*$/,I=/^function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,E=RegExp("^["+w+"]*0+(?=.$)"),S=/($^)/,R=/\bthis\b/,A=/['\n\r\t\u2028\u2029\\]/g,D="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),B="[object Arguments]",$="[object Array]",F="[object Boolean]",T="[object Date]",W="[object Function]",q="[object Number]",z="[object Object]",P="[object RegExp]",K="[object String]",L={};
L[W]=!1,L[B]=L[$]=L[F]=L[T]=L[q]=L[z]=L[P]=L[K]=!0;var M={leading:!1,maxWait:0,trailing:!1},U={configurable:!1,enumerable:!1,value:null,writable:!1},V={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},H=V[typeof window]&&window||this,J=V[typeof exports]&&exports&&!exports.nodeType&&exports,Q=V[typeof module]&&module&&!module.nodeType&&module,X=Q&&Q.exports===J&&J,Y=V[typeof global]&&global;!Y||Y.global!==Y&&Y.window!==Y||(H=Y);
var Z=v();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(H._=Z, define(function(){return Z})):J&&Q?X?(Q.exports=Z)._=Z:J._=Z:H._=Z}).call(this);
// Little jQuery extension to have exact equals;
$.expr[':'].textEquals = function(a, i, m) {
    var match = $(a).text().match("^" + m[3] + "$")
    return match && match.length > 0;
}

window.Behave = {};
Behave.view = $(document.body);
Behave.domTypes = {
  field: {
    elementTypes: ['input', 'select', 'option', 'label', 'textarea', 'form'],
    attrOptions: ['name', 'for', 'placeholder', 'contains', 'type', 'test-me']
  },
  clickable: {
    elementTypes: ['button', 'a'],
    attrOptions: ['contains', 'href', 'test-me']
  },
  icon: {
    elementTypes: ['icon', 'div', 'span'],
    attrOptions: ['type', 'class', 'test-me']
  },
  display: {
    elementTypes: [''], // This is actually all elements, since there's no leading el type
    attrOptions: ['test-me', 'contains']
  }
}

Behave.getAllElsAttrOptions = ['name', 'for', 'placeholder', 'type', 'test-me']

Behave.find = function(identifier, type) {
  var element = '';
  var searchOptions = type ? {specificOption: Behave.domTypes[type]} : Behave.domTypes;
  _.each(searchOptions, function(searchParams) {
    _.each(searchParams.elementTypes, function(elType) {
      if (element.length) {
        // Explicitly returning false kills iteration early in lodash.
        return false;
      }
      _.each(searchParams.attrOptions, function(attrOption) {
        switch (attrOption) {
          case 'contains':
            var filter = ":textEquals("+ identifier + ")"
            element = Behave.view.find(elType + filter);
            break;
          case 'class':
            element = findByClass(identifier, elType, 'glyphicon-');
            break;
          default:
            var filter = "[" + attrOption + "='" + identifier + "']";
            element = Behave.view.find(elType + filter);
        }
        // Explicitly returning false kills iteration early in lodash.
        if (element.length) {
          return false;
        }
      });
    });
  })

  if (element && element.is('label')) {
    element = getClosestInput(element);
  }
  // Fall back to jQuery if we can't find anything
  if (!element.length) {
    element = Behave.view.find(identifier);
  }
  return element;
};


Behave.fill = function(identifier) {
  // If id is already jQuery, just go with it. Useful if you've set a variable using Behave.find, and then want to
  // reuse that variable in a fill later on.
  var $el = identifier instanceof jQuery ? identifier : Behave.find(identifier, 'field');
  var fillWith = function(data) {
    if ($el.is('form') || $el.attr('type') === 'form') {
      if (!_.isObject(data)) {
        throw new Error("Must pass in a hash with signature of {element: value} when filling a whole form")
      }
      _.each(data, function(value, el) {
        Behave.fill(el).with(value);
      })
      return;
    }
    if ($el.attr('type') === 'checkbox') {
      return $el.prop('checked', data);
    }

    $el.val(data).trigger('input');
  }

  var fillObject = {
    with: fillWith
  }

  return fillObject;
};

Behave.getAllEls = function(element, $els) {
  element = element || Behave.view;
  $els = $els || {};
  var kids = element.children;
  if (kids.length) {
    element.children().each(function() {
      $els = Behave.getAllEls($(this), $els);
    });
  }
  _.each(Behave.getAllElsAttrOptions, function(attrOption) {
    var attrVal = cleanVal(element.attr(attrOption));
    if (attrVal) {
      element.reload = function() {
        return Behave.find(attrVal);
      }
    }
    attrVal && ($els[attrVal] = element)
  });
  var elText = element.text();
  if(elText) {$els[cleanVal(elText)] = element;}
  return $els;
};


// PRIVATE FUNCTIONS
var getClosestInput = function($el) {
  var sibling = $el.next();
  if (sibling.is('input')) {return sibling}
  var relatedInput = sibling.find('input');
  return relatedInput.length ? relatedInput : $el;
};

var findByClass = function(identifier, elType, prefix) {
  prefix = prefix || '';
  elType = elType || '';
  return Behave.view.find(elType + '.' + prefix + identifier).first();
}

var cleanVal = function(val) {
  if (!val) {return;}

  // Remove any spaces.
  val = val.replace(' ', '');

  if (val.indexOf('-') !== -1) {
    // camelCasing attrs with dashes in them.
    var words = val.split('-');
    words[1] = words[1][0].toUpperCase() + words[1].substring(1);
    words[2] && (words[2] = words[2][0].toUpperCase() + words[2].substring(1))
    val =  words.join('');
  }
  return val;
};

// Set functions to the window for convenience
window.find = Behave.find;
window.fill = Behave.fill

