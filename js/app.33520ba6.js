!function(e){function r(r){for(var t,i,a=r[0],l=r[1],f=r[2],c=0,s=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,r=0;r<u.length;r++){for(var n=u[r],t=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(t=!1)}t&&(u.splice(r--,1),e=i(i.s=n[0]))}return e}var t={},o={0:0},u=[];function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,r,n){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)i.d(n,t,function(r){return e[r]}.bind(null,t));return n},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=r,a=a.slice();for(var f=0;f<a.length;f++)r(a[f]);var p=l;u.push([3,1]),n()}({3:function(e,r,n){"use strict";n.r(r);var t=n(2),o=n(0),u=n.n(o),i=n(1),a=n.n(i);window.onload=function(){u.a.setup();window.requestAnimationFrame((function e(){u.a.update(window.scrollY),window.requestAnimationFrame(e)}))},a()(),t.a.timeline({defaults:{duration:2,ease:"power4.out"}}).from(".word",{stagger:.3,y:-200},0).from(".linep1",{x:500},0).from(".linep2",{x:-1400},0)}});
//# sourceMappingURL=app.33520ba6.js.map