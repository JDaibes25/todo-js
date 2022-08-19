(()=>{"use strict";var n={d:(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}};n.d({},{L:()=>Yr});var t={};function r(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var o=0,u=function(){};return{s:u,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function o(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}n.r(t),n.d(t,{VERSION:()=>l,after:()=>qt,all:()=>ir,allKeys:()=>Sn,any:()=>ar,assign:()=>qn,before:()=>Ft,bind:()=>Mt,bindAll:()=>It,chain:()=>At,chunk:()=>Wr,clone:()=>zn,collect:()=>nr,compact:()=>Lr,compose:()=>Vt,constant:()=>en,contains:()=>cr,countBy:()=>Sr,create:()=>Wn,debounce:()=>Pt,default:()=>Jr,defaults:()=>Fn,defer:()=>Bt,delay:()=>Nt,detect:()=>Xt,difference:()=>Br,drop:()=>Tr,each:()=>Zt,escape:()=>pt,every:()=>ir,extend:()=>Vn,extendOwn:()=>qn,filter:()=>or,find:()=>Xt,findIndex:()=>$t,findKey:()=>Wt,findLastIndex:()=>Jt,findWhere:()=>Yt,first:()=>kr,flatten:()=>Nr,foldl:()=>rr,foldr:()=>er,forEach:()=>Zt,functions:()=>Dn,get:()=>Gn,groupBy:()=>wr,has:()=>Qn,head:()=>kr,identity:()=>Xn,include:()=>cr,includes:()=>cr,indexBy:()=>jr,indexOf:()=>Gt,initial:()=>Mr,inject:()=>rr,intersection:()=>Rr,invert:()=>Pn,invoke:()=>lr,isArguments:()=>nn,isArray:()=>X,isArrayBuffer:()=>U,isBoolean:()=>N,isDataView:()=>Q,isDate:()=>R,isElement:()=>B,isEmpty:()=>hn,isEqual:()=>jn,isError:()=>q,isFinite:()=>tn,isFunction:()=>$,isMap:()=>Tn,isMatch:()=>dn,isNaN:()=>rn,isNull:()=>I,isNumber:()=>D,isObject:()=>T,isRegExp:()=>V,isSet:()=>Ln,isString:()=>P,isSymbol:()=>F,isTypedArray:()=>fn,isUndefined:()=>L,isWeakMap:()=>In,isWeakSet:()=>Nn,iteratee:()=>rt,keys:()=>vn,last:()=>Ir,lastIndexOf:()=>Qt,map:()=>nr,mapObject:()=>ot,matcher:()=>Yn,matches:()=>Yn,max:()=>pr,memoize:()=>Lt,methods:()=>Dn,min:()=>vr,mixin:()=>$r,negate:()=>Rt,noop:()=>ut,now:()=>lt,object:()=>Fr,omit:()=>xr,once:()=>Ut,pairs:()=>Cn,partial:()=>xt,partition:()=>Or,pick:()=>Er,pluck:()=>fr,property:()=>Zn,propertyOf:()=>it,random:()=>ct,range:()=>Ur,reduce:()=>rr,reduceRight:()=>er,reject:()=>ur,rest:()=>Tr,restArguments:()=>k,result:()=>jt,sample:()=>yr,select:()=>or,shuffle:()=>gr,size:()=>Ar,some:()=>ar,sortBy:()=>mr,sortedIndex:()=>Kt,tail:()=>Tr,take:()=>kr,tap:()=>$n,template:()=>wt,templateSettings:()=>ht,throttle:()=>Ct,times:()=>at,toArray:()=>dr,toPath:()=>Jn,transpose:()=>Vr,unescape:()=>vt,union:()=>Dr,uniq:()=>Pr,unique:()=>Pr,uniqueId:()=>Ot,unzip:()=>Vr,values:()=>Bn,where:()=>sr,without:()=>Cr,wrap:()=>Dt,zip:()=>qr});var u=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.cargarLocalStorage()}var t,e,u;return t=n,(e=[{key:"nuevoTodo",value:function(n){this.todos.push(n),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(n){this.todos=this.todos.filter((function(t){return t.id!=n})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(n){var t,e=r(this.todos);try{for(e.s();!(t=e.n()).done;){var o=t.value;if(o.id==n){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(n){e.e(n)}finally{e.f()}}},{key:"elimiarCompletados",value:function(){this.todos=this.todos.filter((function(n){return!n.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]}}])&&o(t.prototype,e),u&&o(t,u),Object.defineProperty(t,"prototype",{writable:!1}),n}();function i(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function a(n,t,r){return t&&i(n.prototype,t),r&&i(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}var c=a((function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date})),l="1.13.4",f="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},s=Array.prototype,p=Object.prototype,v="undefined"!=typeof Symbol?Symbol.prototype:null,h=s.push,d=s.slice,y=p.toString,g=p.hasOwnProperty,m="undefined"!=typeof ArrayBuffer,b="undefined"!=typeof DataView,w=Array.isArray,j=Object.keys,S=Object.create,O=m&&ArrayBuffer.isView,A=isNaN,_=isFinite,E=!{toString:null}.propertyIsEnumerable("toString"),x=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],M=Math.pow(2,53)-1;function k(n,t){return t=null==t?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),o=0;o<r;o++)e[o]=arguments[o+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var u=Array(t+1);for(o=0;o<t;o++)u[o]=arguments[o];return u[t]=e,n.apply(this,u)}}function T(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function I(n){return null===n}function L(n){return void 0===n}function N(n){return!0===n||!1===n||"[object Boolean]"===y.call(n)}function B(n){return!(!n||1!==n.nodeType)}function C(n){var t="[object "+n+"]";return function(n){return y.call(n)===t}}const P=C("String"),D=C("Number"),R=C("Date"),V=C("RegExp"),q=C("Error"),F=C("Symbol"),U=C("ArrayBuffer");var W=C("Function"),z=f.document&&f.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof z&&(W=function(n){return"function"==typeof n||!1});const $=W,J=C("Object");var K=b&&J(new DataView(new ArrayBuffer(8))),H="undefined"!=typeof Map&&J(new Map),G=C("DataView");const Q=K?function(n){return null!=n&&$(n.getInt8)&&U(n.buffer)}:G,X=w||C("Array");function Y(n,t){return null!=n&&g.call(n,t)}var Z=C("Arguments");!function(){Z(arguments)||(Z=function(n){return Y(n,"callee")})}();const nn=Z;function tn(n){return!F(n)&&_(n)&&!isNaN(parseFloat(n))}function rn(n){return D(n)&&A(n)}function en(n){return function(){return n}}function on(n){return function(t){var r=n(t);return"number"==typeof r&&r>=0&&r<=M}}function un(n){return function(t){return null==t?void 0:t[n]}}const an=un("byteLength"),cn=on(an);var ln=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;const fn=m?function(n){return O?O(n)&&!Q(n):cn(n)&&ln.test(y.call(n))}:en(!1),sn=un("length");function pn(n,t){t=function(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(n){return!0===t[n]},push:function(r){return t[r]=!0,n.push(r)}}}(t);var r=x.length,e=n.constructor,o=$(e)&&e.prototype||p,u="constructor";for(Y(n,u)&&!t.contains(u)&&t.push(u);r--;)(u=x[r])in n&&n[u]!==o[u]&&!t.contains(u)&&t.push(u)}function vn(n){if(!T(n))return[];if(j)return j(n);var t=[];for(var r in n)Y(n,r)&&t.push(r);return E&&pn(n,t),t}function hn(n){if(null==n)return!0;var t=sn(n);return"number"==typeof t&&(X(n)||P(n)||nn(n))?0===t:0===sn(vn(n))}function dn(n,t){var r=vn(t),e=r.length;if(null==n)return!e;for(var o=Object(n),u=0;u<e;u++){var i=r[u];if(t[i]!==o[i]||!(i in o))return!1}return!0}function yn(n){return n instanceof yn?n:this instanceof yn?void(this._wrapped=n):new yn(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,an(n))}yn.VERSION=l,yn.prototype.value=function(){return this._wrapped},yn.prototype.valueOf=yn.prototype.toJSON=yn.prototype.value,yn.prototype.toString=function(){return String(this._wrapped)};var mn="[object DataView]";function bn(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return!1;if(n!=n)return t!=t;var o=typeof n;return("function"===o||"object"===o||"object"==typeof t)&&wn(n,t,r,e)}function wn(n,t,r,e){n instanceof yn&&(n=n._wrapped),t instanceof yn&&(t=t._wrapped);var o=y.call(n);if(o!==y.call(t))return!1;if(K&&"[object Object]"==o&&Q(n)){if(!Q(t))return!1;o=mn}switch(o){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object Symbol]":return v.valueOf.call(n)===v.valueOf.call(t);case"[object ArrayBuffer]":case mn:return wn(gn(n),gn(t),r,e)}var u="[object Array]"===o;if(!u&&fn(n)){if(an(n)!==an(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)return!0;u=!0}if(!u){if("object"!=typeof n||"object"!=typeof t)return!1;var i=n.constructor,a=t.constructor;if(i!==a&&!($(i)&&i instanceof i&&$(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}e=e||[];for(var c=(r=r||[]).length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),u){if((c=n.length)!==t.length)return!1;for(;c--;)if(!bn(n[c],t[c],r,e))return!1}else{var l,f=vn(n);if(c=f.length,vn(t).length!==c)return!1;for(;c--;)if(!Y(t,l=f[c])||!bn(n[l],t[l],r,e))return!1}return r.pop(),e.pop(),!0}function jn(n,t){return bn(n,t)}function Sn(n){if(!T(n))return[];var t=[];for(var r in n)t.push(r);return E&&pn(n,t),t}function On(n){var t=sn(n);return function(r){if(null==r)return!1;var e=Sn(r);if(sn(e))return!1;for(var o=0;o<t;o++)if(!$(r[n[o]]))return!1;return n!==Mn||!$(r[An])}}var An="forEach",_n=["clear","delete"],En=["get","has","set"],xn=_n.concat(An,En),Mn=_n.concat(En),kn=["add"].concat(_n,An,"has");const Tn=H?On(xn):C("Map"),In=H?On(Mn):C("WeakMap"),Ln=H?On(kn):C("Set"),Nn=C("WeakSet");function Bn(n){for(var t=vn(n),r=t.length,e=Array(r),o=0;o<r;o++)e[o]=n[t[o]];return e}function Cn(n){for(var t=vn(n),r=t.length,e=Array(r),o=0;o<r;o++)e[o]=[t[o],n[t[o]]];return e}function Pn(n){for(var t={},r=vn(n),e=0,o=r.length;e<o;e++)t[n[r[e]]]=r[e];return t}function Dn(n){var t=[];for(var r in n)$(n[r])&&t.push(r);return t.sort()}function Rn(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var o=1;o<e;o++)for(var u=arguments[o],i=n(u),a=i.length,c=0;c<a;c++){var l=i[c];t&&void 0!==r[l]||(r[l]=u[l])}return r}}const Vn=Rn(Sn),qn=Rn(vn),Fn=Rn(Sn,!0);function Un(n){if(!T(n))return{};if(S)return S(n);var t=function(){};t.prototype=n;var r=new t;return t.prototype=null,r}function Wn(n,t){var r=Un(n);return t&&qn(r,t),r}function zn(n){return T(n)?X(n)?n.slice():Vn({},n):n}function $n(n,t){return t(n),n}function Jn(n){return X(n)?n:[n]}function Kn(n){return yn.toPath(n)}function Hn(n,t){for(var r=t.length,e=0;e<r;e++){if(null==n)return;n=n[t[e]]}return r?n:void 0}function Gn(n,t,r){var e=Hn(n,Kn(t));return L(e)?r:e}function Qn(n,t){for(var r=(t=Kn(t)).length,e=0;e<r;e++){var o=t[e];if(!Y(n,o))return!1;n=n[o]}return!!r}function Xn(n){return n}function Yn(n){return n=qn({},n),function(t){return dn(t,n)}}function Zn(n){return n=Kn(n),function(t){return Hn(t,n)}}function nt(n,t,r){if(void 0===t)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,o){return n.call(t,r,e,o)};case 4:return function(r,e,o,u){return n.call(t,r,e,o,u)}}return function(){return n.apply(t,arguments)}}function tt(n,t,r){return null==n?Xn:$(n)?nt(n,t,r):T(n)&&!X(n)?Yn(n):Zn(n)}function rt(n,t){return tt(n,t,1/0)}function et(n,t,r){return yn.iteratee!==rt?yn.iteratee(n,t):tt(n,t,r)}function ot(n,t,r){t=et(t,r);for(var e=vn(n),o=e.length,u={},i=0;i<o;i++){var a=e[i];u[a]=t(n[a],a,n)}return u}function ut(){}function it(n){return null==n?ut:function(t){return Gn(n,t)}}function at(n,t,r){var e=Array(Math.max(0,n));t=nt(t,r,1);for(var o=0;o<n;o++)e[o]=t(o);return e}function ct(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}yn.toPath=Jn,yn.iteratee=rt;const lt=Date.now||function(){return(new Date).getTime()};function ft(n){var t=function(t){return n[t]},r="(?:"+vn(n).join("|")+")",e=RegExp(r),o=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(o,t):n}}const st={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},pt=ft(st),vt=ft(Pn(st)),ht=yn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var dt=/(.)^/,yt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},gt=/\\|'|\r|\n|\u2028|\u2029/g;function mt(n){return"\\"+yt[n]}var bt=/^\s*(\w|\$)+\s*$/;function wt(n,t,r){!t&&r&&(t=r),t=Fn({},t,yn.templateSettings);var e=RegExp([(t.escape||dt).source,(t.interpolate||dt).source,(t.evaluate||dt).source].join("|")+"|$","g"),o=0,u="__p+='";n.replace(e,(function(t,r,e,i,a){return u+=n.slice(o,a).replace(gt,mt),o=a+t.length,r?u+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?u+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(u+="';\n"+i+"\n__p+='"),t})),u+="';\n";var i,a=t.variable;if(a){if(!bt.test(a))throw new Error("variable is not a bare identifier: "+a)}else u="with(obj||{}){\n"+u+"}\n",a="obj";u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{i=new Function(a,"_",u)}catch(n){throw n.source=u,n}var c=function(n){return i.call(this,n,yn)};return c.source="function("+a+"){\n"+u+"}",c}function jt(n,t,r){var e=(t=Kn(t)).length;if(!e)return $(r)?r.call(n):r;for(var o=0;o<e;o++){var u=null==n?void 0:n[t[o]];void 0===u&&(u=r,o=e),n=$(u)?u.call(n):u}return n}var St=0;function Ot(n){var t=++St+"";return n?n+t:t}function At(n){var t=yn(n);return t._chain=!0,t}function _t(n,t,r,e,o){if(!(e instanceof t))return n.apply(r,o);var u=Un(n.prototype),i=n.apply(u,o);return T(i)?i:u}var Et=k((function(n,t){var r=Et.placeholder,e=function(){for(var o=0,u=t.length,i=Array(u),a=0;a<u;a++)i[a]=t[a]===r?arguments[o++]:t[a];for(;o<arguments.length;)i.push(arguments[o++]);return _t(n,e,this,this,i)};return e}));Et.placeholder=yn;const xt=Et,Mt=k((function(n,t,r){if(!$(n))throw new TypeError("Bind must be called on a function");var e=k((function(o){return _t(n,e,t,this,r.concat(o))}));return e})),kt=on(sn);function Tt(n,t,r,e){if(e=e||[],t||0===t){if(t<=0)return e.concat(n)}else t=1/0;for(var o=e.length,u=0,i=sn(n);u<i;u++){var a=n[u];if(kt(a)&&(X(a)||nn(a)))if(t>1)Tt(a,t-1,r,e),o=e.length;else for(var c=0,l=a.length;c<l;)e[o++]=a[c++];else r||(e[o++]=a)}return e}const It=k((function(n,t){var r=(t=Tt(t,!1,!1)).length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=Mt(n[e],n)}return n}));function Lt(n,t){var r=function(e){var o=r.cache,u=""+(t?t.apply(this,arguments):e);return Y(o,u)||(o[u]=n.apply(this,arguments)),o[u]};return r.cache={},r}const Nt=k((function(n,t,r){return setTimeout((function(){return n.apply(null,r)}),t)})),Bt=xt(Nt,yn,1);function Ct(n,t,r){var e,o,u,i,a=0;r||(r={});var c=function(){a=!1===r.leading?0:lt(),e=null,i=n.apply(o,u),e||(o=u=null)},l=function(){var l=lt();a||!1!==r.leading||(a=l);var f=t-(l-a);return o=this,u=arguments,f<=0||f>t?(e&&(clearTimeout(e),e=null),a=l,i=n.apply(o,u),e||(o=u=null)):e||!1===r.trailing||(e=setTimeout(c,f)),i};return l.cancel=function(){clearTimeout(e),a=0,e=o=u=null},l}function Pt(n,t,r){var e,o,u,i,a,c=function(){var l=lt()-o;t>l?e=setTimeout(c,t-l):(e=null,r||(i=n.apply(a,u)),e||(u=a=null))},l=k((function(l){return a=this,u=l,o=lt(),e||(e=setTimeout(c,t),r&&(i=n.apply(a,u))),i}));return l.cancel=function(){clearTimeout(e),e=u=a=null},l}function Dt(n,t){return xt(t,n)}function Rt(n){return function(){return!n.apply(this,arguments)}}function Vt(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}}function qt(n,t){return function(){if(--n<1)return t.apply(this,arguments)}}function Ft(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}const Ut=xt(Ft,2);function Wt(n,t,r){t=et(t,r);for(var e,o=vn(n),u=0,i=o.length;u<i;u++)if(t(n[e=o[u]],e,n))return e}function zt(n){return function(t,r,e){r=et(r,e);for(var o=sn(t),u=n>0?0:o-1;u>=0&&u<o;u+=n)if(r(t[u],u,t))return u;return-1}}const $t=zt(1),Jt=zt(-1);function Kt(n,t,r,e){for(var o=(r=et(r,e,1))(t),u=0,i=sn(n);u<i;){var a=Math.floor((u+i)/2);r(n[a])<o?u=a+1:i=a}return u}function Ht(n,t,r){return function(e,o,u){var i=0,a=sn(e);if("number"==typeof u)n>0?i=u>=0?u:Math.max(u+a,i):a=u>=0?Math.min(u+1,a):u+a+1;else if(r&&u&&a)return e[u=r(e,o)]===o?u:-1;if(o!=o)return(u=t(d.call(e,i,a),rn))>=0?u+i:-1;for(u=n>0?i:a-1;u>=0&&u<a;u+=n)if(e[u]===o)return u;return-1}}const Gt=Ht(1,$t,Kt),Qt=Ht(-1,Jt);function Xt(n,t,r){var e=(kt(n)?$t:Wt)(n,t,r);if(void 0!==e&&-1!==e)return n[e]}function Yt(n,t){return Xt(n,Yn(t))}function Zt(n,t,r){var e,o;if(t=nt(t,r),kt(n))for(e=0,o=n.length;e<o;e++)t(n[e],e,n);else{var u=vn(n);for(e=0,o=u.length;e<o;e++)t(n[u[e]],u[e],n)}return n}function nr(n,t,r){t=et(t,r);for(var e=!kt(n)&&vn(n),o=(e||n).length,u=Array(o),i=0;i<o;i++){var a=e?e[i]:i;u[i]=t(n[a],a,n)}return u}function tr(n){var t=function(t,r,e,o){var u=!kt(t)&&vn(t),i=(u||t).length,a=n>0?0:i-1;for(o||(e=t[u?u[a]:a],a+=n);a>=0&&a<i;a+=n){var c=u?u[a]:a;e=r(e,t[c],c,t)}return e};return function(n,r,e,o){var u=arguments.length>=3;return t(n,nt(r,o,4),e,u)}}const rr=tr(1),er=tr(-1);function or(n,t,r){var e=[];return t=et(t,r),Zt(n,(function(n,r,o){t(n,r,o)&&e.push(n)})),e}function ur(n,t,r){return or(n,Rt(et(t)),r)}function ir(n,t,r){t=et(t,r);for(var e=!kt(n)&&vn(n),o=(e||n).length,u=0;u<o;u++){var i=e?e[u]:u;if(!t(n[i],i,n))return!1}return!0}function ar(n,t,r){t=et(t,r);for(var e=!kt(n)&&vn(n),o=(e||n).length,u=0;u<o;u++){var i=e?e[u]:u;if(t(n[i],i,n))return!0}return!1}function cr(n,t,r,e){return kt(n)||(n=Bn(n)),("number"!=typeof r||e)&&(r=0),Gt(n,t,r)>=0}const lr=k((function(n,t,r){var e,o;return $(t)?o=t:(t=Kn(t),e=t.slice(0,-1),t=t[t.length-1]),nr(n,(function(n){var u=o;if(!u){if(e&&e.length&&(n=Hn(n,e)),null==n)return;u=n[t]}return null==u?u:u.apply(n,r)}))}));function fr(n,t){return nr(n,Zn(t))}function sr(n,t){return or(n,Yn(t))}function pr(n,t,r){var e,o,u=-1/0,i=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=kt(n)?n:Bn(n)).length;a<c;a++)null!=(e=n[a])&&e>u&&(u=e);else t=et(t,r),Zt(n,(function(n,r,e){((o=t(n,r,e))>i||o===-1/0&&u===-1/0)&&(u=n,i=o)}));return u}function vr(n,t,r){var e,o,u=1/0,i=1/0;if(null==t||"number"==typeof t&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=kt(n)?n:Bn(n)).length;a<c;a++)null!=(e=n[a])&&e<u&&(u=e);else t=et(t,r),Zt(n,(function(n,r,e){((o=t(n,r,e))<i||o===1/0&&u===1/0)&&(u=n,i=o)}));return u}var hr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function dr(n){return n?X(n)?d.call(n):P(n)?n.match(hr):kt(n)?nr(n,Xn):Bn(n):[]}function yr(n,t,r){if(null==t||r)return kt(n)||(n=Bn(n)),n[ct(n.length-1)];var e=dr(n),o=sn(e);t=Math.max(Math.min(t,o),0);for(var u=o-1,i=0;i<t;i++){var a=ct(i,u),c=e[i];e[i]=e[a],e[a]=c}return e.slice(0,t)}function gr(n){return yr(n,1/0)}function mr(n,t,r){var e=0;return t=et(t,r),fr(nr(n,(function(n,r,o){return{value:n,index:e++,criteria:t(n,r,o)}})).sort((function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index})),"value")}function br(n,t){return function(r,e,o){var u=t?[[],[]]:{};return e=et(e,o),Zt(r,(function(t,o){var i=e(t,o,r);n(u,t,i)})),u}}const wr=br((function(n,t,r){Y(n,r)?n[r].push(t):n[r]=[t]})),jr=br((function(n,t,r){n[r]=t})),Sr=br((function(n,t,r){Y(n,r)?n[r]++:n[r]=1})),Or=br((function(n,t,r){n[r?0:1].push(t)}),!0);function Ar(n){return null==n?0:kt(n)?n.length:vn(n).length}function _r(n,t,r){return t in r}const Er=k((function(n,t){var r={},e=t[0];if(null==n)return r;$(e)?(t.length>1&&(e=nt(e,t[1])),t=Sn(n)):(e=_r,t=Tt(t,!1,!1),n=Object(n));for(var o=0,u=t.length;o<u;o++){var i=t[o],a=n[i];e(a,i,n)&&(r[i]=a)}return r})),xr=k((function(n,t){var r,e=t[0];return $(e)?(e=Rt(e),t.length>1&&(r=t[1])):(t=nr(Tt(t,!1,!1),String),e=function(n,r){return!cr(t,r)}),Er(n,e,r)}));function Mr(n,t,r){return d.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))}function kr(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[0]:Mr(n,n.length-t)}function Tr(n,t,r){return d.call(n,null==t||r?1:t)}function Ir(n,t,r){return null==n||n.length<1?null==t||r?void 0:[]:null==t||r?n[n.length-1]:Tr(n,Math.max(0,n.length-t))}function Lr(n){return or(n,Boolean)}function Nr(n,t){return Tt(n,t,!1)}const Br=k((function(n,t){return t=Tt(t,!0,!0),or(n,(function(n){return!cr(t,n)}))})),Cr=k((function(n,t){return Br(n,t)}));function Pr(n,t,r,e){N(t)||(e=r,r=t,t=!1),null!=r&&(r=et(r,e));for(var o=[],u=[],i=0,a=sn(n);i<a;i++){var c=n[i],l=r?r(c,i,n):c;t&&!r?(i&&u===l||o.push(c),u=l):r?cr(u,l)||(u.push(l),o.push(c)):cr(o,c)||o.push(c)}return o}const Dr=k((function(n){return Pr(Tt(n,!0,!0))}));function Rr(n){for(var t=[],r=arguments.length,e=0,o=sn(n);e<o;e++){var u=n[e];if(!cr(t,u)){var i;for(i=1;i<r&&cr(arguments[i],u);i++);i===r&&t.push(u)}}return t}function Vr(n){for(var t=n&&pr(n,sn).length||0,r=Array(t),e=0;e<t;e++)r[e]=fr(n,e);return r}const qr=k(Vr);function Fr(n,t){for(var r={},e=0,o=sn(n);e<o;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r}function Ur(n,t,r){null==t&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),o=Array(e),u=0;u<e;u++,n+=r)o[u]=n;return o}function Wr(n,t){if(null==t||t<1)return[];for(var r=[],e=0,o=n.length;e<o;)r.push(d.call(n,e,e+=t));return r}function zr(n,t){return n._chain?yn(t).chain():t}function $r(n){return Zt(Dn(n),(function(t){var r=yn[t]=n[t];yn.prototype[t]=function(){var n=[this._wrapped];return h.apply(n,arguments),zr(this,r.apply(yn,n))}})),yn}Zt(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var t=s[n];yn.prototype[n]=function(){var r=this._wrapped;return null!=r&&(t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0]),zr(this,r)}})),Zt(["concat","join","slice"],(function(n){var t=s[n];yn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=t.apply(n,arguments)),zr(this,n)}}));const Jr=yn;var Kr=$r(t);Kr._=Kr;var Hr=document.querySelector(".todo-list"),Gr=document.querySelector(".new-todo"),Qr=document.querySelector(".clear-completed"),Xr=function(n){var t='\n    <li class="'.concat(n.completado?"completed":"",'" data-id="').concat(n.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" >\n\t    \t<label>').concat(n.tarea,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li> \n    '),r=document.createElement("div");return r.innerHTML=t,Hr.append(r.firstElementChild),r.firstElementChild};Gr.addEventListener("keyup",(function(n){if(13===n.keyCode&&Gr.value.length>0){var t=new c(Gr.value);console.log(Gr.value),Yr.nuevoTodo(t),Xr(t),Gr.value=""}})),Hr.addEventListener("click",(function(n){var t=n.target.localName,r=n.target.parentElement.parentElement,e=r.getAttribute("data-id");t.includes("input")?(Yr.marcarCompletado(e),r.classList.toggle("completed")):t.includes("button")&&(Yr.eliminarTodo(e),Hr.removeChild(r))})),Qr.addEventListener("click",(function(){Yr.elimiarCompletados();for(var n=Hr.children.length-1;n>=0;n--){var t=Hr.children[n];console.log(t),t.classList.contains("completed")&&Hr.removeChild(t)}}));var Yr=new u;Yr.todos.forEach((function(n){return Xr(n)}))})();