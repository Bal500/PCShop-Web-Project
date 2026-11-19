(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uE={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Il=Symbol.for("react.element"),t1=Symbol.for("react.portal"),n1=Symbol.for("react.fragment"),r1=Symbol.for("react.strict_mode"),i1=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),a1=Symbol.for("react.forward_ref"),l1=Symbol.for("react.suspense"),u1=Symbol.for("react.memo"),c1=Symbol.for("react.lazy"),Bg=Symbol.iterator;function d1(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var cE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dE=Object.assign,hE={};function zo(t,e,n){this.props=t,this.context=e,this.refs=hE,this.updater=n||cE}zo.prototype.isReactComponent={};zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fE(){}fE.prototype=zo.prototype;function pp(t,e,n){this.props=t,this.context=e,this.refs=hE,this.updater=n||cE}var mp=pp.prototype=new fE;mp.constructor=pp;dE(mp,zo.prototype);mp.isPureReactComponent=!0;var $g=Array.isArray,pE=Object.prototype.hasOwnProperty,gp={current:null},mE={key:!0,ref:!0,__self:!0,__source:!0};function gE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pE.call(e,r)&&!mE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Il,type:t,key:s,ref:o,props:i,_owner:gp.current}}function h1(t,e){return{$$typeof:Il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Il}function f1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jg=/\/+/g;function zd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f1(""+t.key):e.toString(36)}function Ru(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Il:case t1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zd(o,0):r,$g(i)?(n="",t!=null&&(n=t.replace(jg,"$&/")+"/"),Ru(i,e,n,"",function(c){return c})):i!=null&&(yp(i)&&(i=h1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$g(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+zd(s,l);o+=Ru(s,e,n,u,i)}else if(u=d1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+zd(s,l++),o+=Ru(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nu(t,e,n){if(t==null)return t;var r=[],i=0;return Ru(t,r,"","",function(s){return e.call(n,s,i++)}),r}function p1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Pu={transition:null},m1={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Pu,ReactCurrentOwner:gp};function yE(){throw Error("act(...) is not supported in production builds of React.")}ve.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ve.Component=zo;ve.Fragment=n1;ve.Profiler=i1;ve.PureComponent=pp;ve.StrictMode=r1;ve.Suspense=l1;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;ve.act=yE;ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=dE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)pE.call(e,u)&&!mE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Il,type:t.type,key:i,ref:s,props:r,_owner:o}};ve.createContext=function(t){return t={$$typeof:o1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s1,_context:t},t.Consumer=t};ve.createElement=gE;ve.createFactory=function(t){var e=gE.bind(null,t);return e.type=t,e};ve.createRef=function(){return{current:null}};ve.forwardRef=function(t){return{$$typeof:a1,render:t}};ve.isValidElement=yp;ve.lazy=function(t){return{$$typeof:c1,_payload:{_status:-1,_result:t},_init:p1}};ve.memo=function(t,e){return{$$typeof:u1,type:t,compare:e===void 0?null:e}};ve.startTransition=function(t){var e=Pu.transition;Pu.transition={};try{t()}finally{Pu.transition=e}};ve.unstable_act=yE;ve.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ve.useContext=function(t){return Yt.current.useContext(t)};ve.useDebugValue=function(){};ve.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ve.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ve.useId=function(){return Yt.current.useId()};ve.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ve.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ve.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ve.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ve.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ve.useRef=function(t){return Yt.current.useRef(t)};ve.useState=function(t){return Yt.current.useState(t)};ve.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ve.useTransition=function(){return Yt.current.useTransition()};ve.version="18.3.1";uE.exports=ve;var F=uE.exports;const h=e1(F);var Uh={},vE={exports:{}},wn={},_E={exports:{}},EE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,j){var K=O.length;O.push(j);e:for(;0<K;){var ne=K-1>>>1,J=O[ne];if(0<i(J,j))O[ne]=j,O[K]=J,K=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],K=O.pop();if(K!==j){O[0]=K;e:for(var ne=0,J=O.length,Y=J>>>1;ne<Y;){var ie=2*(ne+1)-1,Ke=O[ie],ke=ie+1,me=O[ke];if(0>i(Ke,K))ke<J&&0>i(me,Ke)?(O[ne]=me,O[ke]=K,ne=ke):(O[ne]=Ke,O[ie]=K,ne=ie);else if(ke<J&&0>i(me,K))O[ne]=me,O[ke]=K,ne=ke;else break e}}return j}function i(O,j){var K=O.sortIndex-j.sortIndex;return K!==0?K:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,S=!1,P=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(O){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=O)r(c),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(c)}}function M(O){if(D=!1,k(O),!P)if(n(u)!==null)P=!0,_e(q);else{var j=n(c);j!==null&&ze(M,j.startTime-O)}}function q(O,j){P=!1,D&&(D=!1,A(v),v=-1),S=!0;var K=g;try{for(k(j),m=n(u);m!==null&&(!(m.expirationTime>j)||O&&!R());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,g=m.priorityLevel;var J=ne(m.expirationTime<=j);j=t.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),k(j)}else r(u);m=n(u)}if(m!==null)var Y=!0;else{var ie=n(c);ie!==null&&ze(M,ie.startTime-j),Y=!1}return Y}finally{m=null,g=K,S=!1}}var z=!1,w=null,v=-1,E=5,T=-1;function R(){return!(t.unstable_now()-T<E)}function N(){if(w!==null){var O=t.unstable_now();T=O;var j=!0;try{j=w(!0,O)}finally{j?I():(z=!1,w=null)}}else z=!1}var I;if(typeof _=="function")I=function(){_(N)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,ue=Ne.port2;Ne.port1.onmessage=N,I=function(){ue.postMessage(null)}}else I=function(){L(N,0)};function _e(O){w=O,z||(z=!0,I())}function ze(O,j){v=L(function(){O(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){P||S||(P=!0,_e(q))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(O){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var K=g;g=j;try{return O()}finally{g=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=g;g=O;try{return j()}finally{g=K}},t.unstable_scheduleCallback=function(O,j,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,O){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=K+J,O={id:f++,callback:j,priorityLevel:O,startTime:K,expirationTime:J,sortIndex:-1},K>ne?(O.sortIndex=K,e(c,O),n(u)===null&&O===n(c)&&(D?(A(v),v=-1):D=!0,ze(M,K-ne))):(O.sortIndex=J,e(u,O),P||S||(P=!0,_e(q))),O},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(O){var j=g;return function(){var K=g;g=j;try{return O.apply(this,arguments)}finally{g=K}}}})(EE);_E.exports=EE;var g1=_E.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1=F,En=g1;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wE=new Set,Wa={};function Ps(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(Wa[t]=e,t=0;t<e.length;t++)wE.add(e[t])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,v1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hg={},qg={};function _1(t){return zh.call(qg,t)?!0:zh.call(Hg,t)?!1:v1.test(t)?qg[t]=!0:(Hg[t]=!0,!1)}function E1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w1(t,e,n,r){if(e===null||typeof e>"u"||E1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vp=/[\-:]([a-z])/g;function _p(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vp,_p);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vp,_p);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vp,_p);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ep(t,e,n,r){var i=Ot.hasOwnProperty(e)?Ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(w1(e,n,i,r)&&(n=null),r||i===null?_1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ru=Symbol.for("react.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),IE=Symbol.for("react.context"),Tp=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),jh=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),ti=Symbol.for("react.lazy"),SE=Symbol.for("react.offscreen"),Wg=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=Wg&&t[Wg]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,Bd;function _a(t){if(Bd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bd=e&&e[1]||""}return`
`+Bd+t}var $d=!1;function jd(t,e){if(!t||$d)return"";$d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{$d=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function T1(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=jd(t.type,!1),t;case 11:return t=jd(t.type.render,!1),t;case 1:return t=jd(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case to:return"Fragment";case eo:return"Portal";case Bh:return"Profiler";case wp:return"StrictMode";case $h:return"Suspense";case jh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case IE:return(t.displayName||"Context")+".Consumer";case TE:return(t._context.displayName||"Context")+".Provider";case Tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case ti:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function I1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function AE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S1(t){var e=AE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function iu(t){t._valueTracker||(t._valueTracker=S1(t))}function kE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=AE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function CE(t,e){e=e.checked,e!=null&&Ep(t,"checked",e,!1)}function Wh(t,e){CE(t,e);var n=Ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kh(t,e.type,Ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kh(t,e,n){(e!=="number"||Xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(Ea(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ri(n)}}function RE(t,e){var n=Ri(e.value),r=Ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function PE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?PE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var su,NE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(su=su||document.createElement("div"),su.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=su.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A1=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){A1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function bE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function DE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var k1=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xh(t,e){if(e){if(k1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zh=null,mo=null,go=null;function Yg(t){if(t=kl(t)){if(typeof Zh!="function")throw Error(W(280));var e=t.stateNode;e&&(e=qc(e),Zh(t.stateNode,t.type,e))}}function OE(t){mo?go?go.push(t):go=[t]:mo=t}function xE(){if(mo){var t=mo,e=go;if(go=mo=null,Yg(t),e)for(t=0;t<e.length;t++)Yg(e[t])}}function ME(t,e){return t(e)}function LE(){}var Hd=!1;function VE(t,e,n){if(Hd)return t(e,n);Hd=!0;try{return ME(t,e,n)}finally{Hd=!1,(mo!==null||go!==null)&&(LE(),xE())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var r=qc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var ef=!1;if(Or)try{var da={};Object.defineProperty(da,"passive",{get:function(){ef=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{ef=!1}function C1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Na=!1,Yu=null,Ju=!1,tf=null,R1={onError:function(t){Na=!0,Yu=t}};function P1(t,e,n,r,i,s,o,l,u){Na=!1,Yu=null,C1.apply(R1,arguments)}function N1(t,e,n,r,i,s,o,l,u){if(P1.apply(this,arguments),Na){if(Na){var c=Yu;Na=!1,Yu=null}else throw Error(W(198));Ju||(Ju=!0,tf=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function FE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jg(t){if(Ns(t)!==t)throw Error(W(188))}function b1(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jg(i),t;if(s===r)return Jg(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function UE(t){return t=b1(t),t!==null?zE(t):null}function zE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zE(t);if(e!==null)return e;t=t.sibling}return null}var BE=En.unstable_scheduleCallback,Zg=En.unstable_cancelCallback,D1=En.unstable_shouldYield,O1=En.unstable_requestPaint,ut=En.unstable_now,x1=En.unstable_getCurrentPriorityLevel,Ap=En.unstable_ImmediatePriority,$E=En.unstable_UserBlockingPriority,Zu=En.unstable_NormalPriority,M1=En.unstable_LowPriority,jE=En.unstable_IdlePriority,Bc=null,ur=null;function L1(t){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:U1,V1=Math.log,F1=Math.LN2;function U1(t){return t>>>=0,t===0?32:31-(V1(t)/F1|0)|0}var ou=64,au=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wa(l):(s&=o,s!==0&&(r=wa(s)))}else o=n&~i,o!==0?r=wa(o):s!==0&&(r=wa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xn(e),i=1<<n,r|=t[n],e&=~i;return r}function z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=z1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function HE(){var t=ou;return ou<<=1,!(ou&4194240)&&(ou=64),t}function qd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function $1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var De=0;function qE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var WE,Cp,KE,GE,QE,rf=!1,lu=[],fi=null,pi=null,mi=null,Qa=new Map,Xa=new Map,ri=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ey(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(e.pointerId)}}function ha(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=kl(e),e!==null&&Cp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function H1(t,e,n,r,i){switch(e){case"focusin":return fi=ha(fi,t,e,n,r,i),!0;case"dragenter":return pi=ha(pi,t,e,n,r,i),!0;case"mouseover":return mi=ha(mi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qa.set(s,ha(Qa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xa.set(s,ha(Xa.get(s)||null,t,e,n,r,i)),!0}return!1}function XE(t){var e=os(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=FE(n),e!==null){t.blockedOn=e,QE(t.priority,function(){KE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jh=r,n.target.dispatchEvent(r),Jh=null}else return e=kl(n),e!==null&&Cp(e),t.blockedOn=n,!1;e.shift()}return!0}function ty(t,e,n){Nu(t)&&n.delete(e)}function q1(){rf=!1,fi!==null&&Nu(fi)&&(fi=null),pi!==null&&Nu(pi)&&(pi=null),mi!==null&&Nu(mi)&&(mi=null),Qa.forEach(ty),Xa.forEach(ty)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,q1)))}function Ya(t){function e(i){return fa(i,t)}if(0<lu.length){fa(lu[0],t);for(var n=1;n<lu.length;n++){var r=lu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fi!==null&&fa(fi,t),pi!==null&&fa(pi,t),mi!==null&&fa(mi,t),Qa.forEach(e),Xa.forEach(e),n=0;n<ri.length;n++)r=ri[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ri.length&&(n=ri[0],n.blockedOn===null);)XE(n),n.blockedOn===null&&ri.shift()}var yo=Br.ReactCurrentBatchConfig,tc=!0;function W1(t,e,n,r){var i=De,s=yo.transition;yo.transition=null;try{De=1,Rp(t,e,n,r)}finally{De=i,yo.transition=s}}function K1(t,e,n,r){var i=De,s=yo.transition;yo.transition=null;try{De=4,Rp(t,e,n,r)}finally{De=i,yo.transition=s}}function Rp(t,e,n,r){if(tc){var i=sf(t,e,n,r);if(i===null)th(t,e,r,nc,n),ey(t,r);else if(H1(i,t,e,n,r))r.stopPropagation();else if(ey(t,r),e&4&&-1<j1.indexOf(t)){for(;i!==null;){var s=kl(i);if(s!==null&&WE(s),s=sf(t,e,n,r),s===null&&th(t,e,r,nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else th(t,e,r,null,n)}}var nc=null;function sf(t,e,n,r){if(nc=null,t=Sp(r),t=os(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=FE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function YE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case Ap:return 1;case $E:return 4;case Zu:case M1:return 16;case jE:return 536870912;default:return 16}default:return 16}}var ci=null,Pp=null,bu=null;function JE(){if(bu)return bu;var t,e=Pp,n=e.length,r,i="value"in ci?ci.value:ci.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bu=i.slice(t,1<r?1-r:void 0)}function Du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uu(){return!0}function ny(){return!1}function Tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:ny,this.isPropagationStopped=ny,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=Tn(Bo),Al=nt({},Bo,{view:0,detail:0}),G1=Tn(Al),Wd,Kd,pa,$c=nt({},Al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(Wd=t.screenX-pa.screenX,Kd=t.screenY-pa.screenY):Kd=Wd=0,pa=t),Wd)},movementY:function(t){return"movementY"in t?t.movementY:Kd}}),ry=Tn($c),Q1=nt({},$c,{dataTransfer:0}),X1=Tn(Q1),Y1=nt({},Al,{relatedTarget:0}),Gd=Tn(Y1),J1=nt({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Z1=Tn(J1),eA=nt({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tA=Tn(eA),nA=nt({},Bo,{data:0}),iy=Tn(nA),rA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sA[t])?!!e[t]:!1}function bp(){return oA}var aA=nt({},Al,{key:function(t){if(t.key){var e=rA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(t){return t.type==="keypress"?Du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lA=Tn(aA),uA=nt({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sy=Tn(uA),cA=nt({},Al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),dA=Tn(cA),hA=nt({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),fA=Tn(hA),pA=nt({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mA=Tn(pA),gA=[9,13,27,32],Dp=Or&&"CompositionEvent"in window,ba=null;Or&&"documentMode"in document&&(ba=document.documentMode);var yA=Or&&"TextEvent"in window&&!ba,ZE=Or&&(!Dp||ba&&8<ba&&11>=ba),oy=" ",ay=!1;function ew(t,e){switch(t){case"keyup":return gA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var no=!1;function vA(t,e){switch(t){case"compositionend":return tw(e);case"keypress":return e.which!==32?null:(ay=!0,oy);case"textInput":return t=e.data,t===oy&&ay?null:t;default:return null}}function _A(t,e){if(no)return t==="compositionend"||!Dp&&ew(t,e)?(t=JE(),bu=Pp=ci=null,no=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ZE&&e.locale!=="ko"?null:e.data;default:return null}}var EA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ly(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EA[t.type]:e==="textarea"}function nw(t,e,n,r){OE(r),e=rc(e,"onChange"),0<e.length&&(n=new Np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Da=null,Ja=null;function wA(t){fw(t,0)}function jc(t){var e=so(t);if(kE(e))return t}function TA(t,e){if(t==="change")return e}var rw=!1;if(Or){var Qd;if(Or){var Xd="oninput"in document;if(!Xd){var uy=document.createElement("div");uy.setAttribute("oninput","return;"),Xd=typeof uy.oninput=="function"}Qd=Xd}else Qd=!1;rw=Qd&&(!document.documentMode||9<document.documentMode)}function cy(){Da&&(Da.detachEvent("onpropertychange",iw),Ja=Da=null)}function iw(t){if(t.propertyName==="value"&&jc(Ja)){var e=[];nw(e,Ja,t,Sp(t)),VE(wA,e)}}function IA(t,e,n){t==="focusin"?(cy(),Da=e,Ja=n,Da.attachEvent("onpropertychange",iw)):t==="focusout"&&cy()}function SA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Ja)}function AA(t,e){if(t==="click")return jc(e)}function kA(t,e){if(t==="input"||t==="change")return jc(e)}function CA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:CA;function Za(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zh.call(e,i)||!Jn(t[i],e[i]))return!1}return!0}function dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hy(t,e){var n=dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dy(n)}}function sw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ow(){for(var t=window,e=Xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xu(t.document)}return e}function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RA(t){var e=ow(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sw(n.ownerDocument.documentElement,n)){if(r!==null&&Op(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hy(n,s);var o=hy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PA=Or&&"documentMode"in document&&11>=document.documentMode,ro=null,of=null,Oa=null,af=!1;function fy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||ro==null||ro!==Xu(r)||(r=ro,"selectionStart"in r&&Op(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oa&&Za(Oa,r)||(Oa=r,r=rc(of,"onSelect"),0<r.length&&(e=new Np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ro)))}function cu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var io={animationend:cu("Animation","AnimationEnd"),animationiteration:cu("Animation","AnimationIteration"),animationstart:cu("Animation","AnimationStart"),transitionend:cu("Transition","TransitionEnd")},Yd={},aw={};Or&&(aw=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function Hc(t){if(Yd[t])return Yd[t];if(!io[t])return t;var e=io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in aw)return Yd[t]=e[n];return t}var lw=Hc("animationend"),uw=Hc("animationiteration"),cw=Hc("animationstart"),dw=Hc("transitionend"),hw=new Map,py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){hw.set(t,e),Ps(e,[t])}for(var Jd=0;Jd<py.length;Jd++){var Zd=py[Jd],NA=Zd.toLowerCase(),bA=Zd[0].toUpperCase()+Zd.slice(1);Vi(NA,"on"+bA)}Vi(lw,"onAnimationEnd");Vi(uw,"onAnimationIteration");Vi(cw,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(dw,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function my(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,N1(r,e,void 0,t),t.currentTarget=null}function fw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;my(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;my(i,l,c),s=u}}}if(Ju)throw t=tf,Ju=!1,tf=null,t}function He(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var r=t+"__bubble";n.has(r)||(pw(e,t,2,!1),n.add(r))}function eh(t,e,n){var r=0;e&&(r|=4),pw(n,t,r,e)}var du="_reactListening"+Math.random().toString(36).slice(2);function el(t){if(!t[du]){t[du]=!0,wE.forEach(function(n){n!=="selectionchange"&&(DA.has(n)||eh(n,!1,t),eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[du]||(e[du]=!0,eh("selectionchange",!1,e))}}function pw(t,e,n,r){switch(YE(e)){case 1:var i=W1;break;case 4:i=K1;break;default:i=Rp}n=i.bind(null,e,n,t),i=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function th(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=os(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}VE(function(){var c=s,f=Sp(n),m=[];e:{var g=hw.get(t);if(g!==void 0){var S=Np,P=t;switch(t){case"keypress":if(Du(n)===0)break e;case"keydown":case"keyup":S=lA;break;case"focusin":P="focus",S=Gd;break;case"focusout":P="blur",S=Gd;break;case"beforeblur":case"afterblur":S=Gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ry;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=X1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=dA;break;case lw:case uw:case cw:S=Z1;break;case dw:S=fA;break;case"scroll":S=G1;break;case"wheel":S=mA;break;case"copy":case"cut":case"paste":S=tA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=sy}var D=(e&4)!==0,L=!D&&t==="scroll",A=D?g!==null?g+"Capture":null:g;D=[];for(var _=c,k;_!==null;){k=_;var M=k.stateNode;if(k.tag===5&&M!==null&&(k=M,A!==null&&(M=Ga(_,A),M!=null&&D.push(tl(_,M,k)))),L)break;_=_.return}0<D.length&&(g=new S(g,P,null,n,f),m.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==Jh&&(P=n.relatedTarget||n.fromElement)&&(os(P)||P[xr]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(P=n.relatedTarget||n.toElement,S=c,P=P?os(P):null,P!==null&&(L=Ns(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(S=null,P=c),S!==P)){if(D=ry,M="onMouseLeave",A="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=sy,M="onPointerLeave",A="onPointerEnter",_="pointer"),L=S==null?g:so(S),k=P==null?g:so(P),g=new D(M,_+"leave",S,n,f),g.target=L,g.relatedTarget=k,M=null,os(f)===c&&(D=new D(A,_+"enter",P,n,f),D.target=k,D.relatedTarget=L,M=D),L=M,S&&P)t:{for(D=S,A=P,_=0,k=D;k;k=Gs(k))_++;for(k=0,M=A;M;M=Gs(M))k++;for(;0<_-k;)D=Gs(D),_--;for(;0<k-_;)A=Gs(A),k--;for(;_--;){if(D===A||A!==null&&D===A.alternate)break t;D=Gs(D),A=Gs(A)}D=null}else D=null;S!==null&&gy(m,g,S,D,!1),P!==null&&L!==null&&gy(m,L,P,D,!0)}}e:{if(g=c?so(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var q=TA;else if(ly(g))if(rw)q=kA;else{q=SA;var z=IA}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(q=AA);if(q&&(q=q(t,c))){nw(m,q,n,f);break e}z&&z(t,g,c),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Kh(g,"number",g.value)}switch(z=c?so(c):window,t){case"focusin":(ly(z)||z.contentEditable==="true")&&(ro=z,of=c,Oa=null);break;case"focusout":Oa=of=ro=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,fy(m,n,f);break;case"selectionchange":if(PA)break;case"keydown":case"keyup":fy(m,n,f)}var w;if(Dp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else no?ew(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(ZE&&n.locale!=="ko"&&(no||v!=="onCompositionStart"?v==="onCompositionEnd"&&no&&(w=JE()):(ci=f,Pp="value"in ci?ci.value:ci.textContent,no=!0)),z=rc(c,v),0<z.length&&(v=new iy(v,t,null,n,f),m.push({event:v,listeners:z}),w?v.data=w:(w=tw(n),w!==null&&(v.data=w)))),(w=yA?vA(t,n):_A(t,n))&&(c=rc(c,"onBeforeInput"),0<c.length&&(f=new iy("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=w))}fw(m,e)})}function tl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ga(t,n),s!=null&&r.unshift(tl(t,s,i)),s=Ga(t,e),s!=null&&r.push(tl(t,s,i))),t=t.return}return r}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ga(n,s),u!=null&&o.unshift(tl(n,u,l))):i||(u=Ga(n,s),u!=null&&o.push(tl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OA=/\r\n?/g,xA=/\u0000|\uFFFD/g;function yy(t){return(typeof t=="string"?t:""+t).replace(OA,`
`).replace(xA,"")}function hu(t,e,n){if(e=yy(e),yy(t)!==e&&n)throw Error(W(425))}function ic(){}var lf=null,uf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,MA=typeof clearTimeout=="function"?clearTimeout:void 0,vy=typeof Promise=="function"?Promise:void 0,LA=typeof queueMicrotask=="function"?queueMicrotask:typeof vy<"u"?function(t){return vy.resolve(null).then(t).catch(VA)}:df;function VA(t){setTimeout(function(){throw t})}function nh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ya(e)}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $o=Math.random().toString(36).slice(2),ar="__reactFiber$"+$o,nl="__reactProps$"+$o,xr="__reactContainer$"+$o,hf="__reactEvents$"+$o,FA="__reactListeners$"+$o,UA="__reactHandles$"+$o;function os(t){var e=t[ar];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[ar]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_y(t);t!==null;){if(n=t[ar])return n;t=_y(t)}return e}t=n,n=t.parentNode}return null}function kl(t){return t=t[ar]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function so(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function qc(t){return t[nl]||null}var ff=[],oo=-1;function Fi(t){return{current:t}}function We(t){0>oo||(t.current=ff[oo],ff[oo]=null,oo--)}function $e(t,e){oo++,ff[oo]=t.current,t.current=e}var Pi={},Ht=Fi(Pi),on=Fi(!1),gs=Pi;function ko(t,e){var n=t.type.contextTypes;if(!n)return Pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function an(t){return t=t.childContextTypes,t!=null}function sc(){We(on),We(Ht)}function Ey(t,e,n){if(Ht.current!==Pi)throw Error(W(168));$e(Ht,e),$e(on,n)}function mw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,I1(t)||"Unknown",i));return nt({},n,r)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pi,gs=Ht.current,$e(Ht,t),$e(on,on.current),!0}function wy(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=mw(t,e,gs),r.__reactInternalMemoizedMergedChildContext=t,We(on),We(Ht),$e(Ht,t)):We(on),$e(on,n)}var Ar=null,Wc=!1,rh=!1;function gw(t){Ar===null?Ar=[t]:Ar.push(t)}function zA(t){Wc=!0,gw(t)}function Ui(){if(!rh&&Ar!==null){rh=!0;var t=0,e=De;try{var n=Ar;for(De=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ar=null,Wc=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(t+1)),BE(Ap,Ui),i}finally{De=e,rh=!1}}return null}var ao=[],lo=0,ac=null,lc=0,Pn=[],Nn=0,ys=null,Cr=1,Rr="";function rs(t,e){ao[lo++]=lc,ao[lo++]=ac,ac=t,lc=e}function yw(t,e,n){Pn[Nn++]=Cr,Pn[Nn++]=Rr,Pn[Nn++]=ys,ys=t;var r=Cr;t=Rr;var i=32-Xn(r)-1;r&=~(1<<i),n+=1;var s=32-Xn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cr=1<<32-Xn(e)+i|n<<i|r,Rr=s+t}else Cr=1<<s|n<<i|r,Rr=t}function xp(t){t.return!==null&&(rs(t,1),yw(t,1,0))}function Mp(t){for(;t===ac;)ac=ao[--lo],ao[lo]=null,lc=ao[--lo],ao[lo]=null;for(;t===ys;)ys=Pn[--Nn],Pn[Nn]=null,Rr=Pn[--Nn],Pn[Nn]=null,Cr=Pn[--Nn],Pn[Nn]=null}var _n=null,gn=null,Qe=!1,Gn=null;function vw(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ty(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ys!==null?{id:Cr,overflow:Rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(Qe){var e=gn;if(e){var n=e;if(!Ty(t,e)){if(pf(t))throw Error(W(418));e=gi(n.nextSibling);var r=_n;e&&Ty(t,e)?vw(r,n):(t.flags=t.flags&-4097|2,Qe=!1,_n=t)}}else{if(pf(t))throw Error(W(418));t.flags=t.flags&-4097|2,Qe=!1,_n=t}}}function Iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function fu(t){if(t!==_n)return!1;if(!Qe)return Iy(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=gn)){if(pf(t))throw _w(),Error(W(418));for(;e;)vw(t,e),e=gi(e.nextSibling)}if(Iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?gi(t.stateNode.nextSibling):null;return!0}function _w(){for(var t=gn;t;)t=gi(t.nextSibling)}function Co(){gn=_n=null,Qe=!1}function Lp(t){Gn===null?Gn=[t]:Gn.push(t)}var BA=Br.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function pu(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sy(t){var e=t._init;return e(t._payload)}function Ew(t){function e(A,_){if(t){var k=A.deletions;k===null?(A.deletions=[_],A.flags|=16):k.push(_)}}function n(A,_){if(!t)return null;for(;_!==null;)e(A,_),_=_.sibling;return null}function r(A,_){for(A=new Map;_!==null;)_.key!==null?A.set(_.key,_):A.set(_.index,_),_=_.sibling;return A}function i(A,_){return A=Ei(A,_),A.index=0,A.sibling=null,A}function s(A,_,k){return A.index=k,t?(k=A.alternate,k!==null?(k=k.index,k<_?(A.flags|=2,_):k):(A.flags|=2,_)):(A.flags|=1048576,_)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,_,k,M){return _===null||_.tag!==6?(_=ch(k,A.mode,M),_.return=A,_):(_=i(_,k),_.return=A,_)}function u(A,_,k,M){var q=k.type;return q===to?f(A,_,k.props.children,M,k.key):_!==null&&(_.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ti&&Sy(q)===_.type)?(M=i(_,k.props),M.ref=ma(A,_,k),M.return=A,M):(M=Uu(k.type,k.key,k.props,null,A.mode,M),M.ref=ma(A,_,k),M.return=A,M)}function c(A,_,k,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=dh(k,A.mode,M),_.return=A,_):(_=i(_,k.children||[]),_.return=A,_)}function f(A,_,k,M,q){return _===null||_.tag!==7?(_=hs(k,A.mode,M,q),_.return=A,_):(_=i(_,k),_.return=A,_)}function m(A,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ch(""+_,A.mode,k),_.return=A,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ru:return k=Uu(_.type,_.key,_.props,null,A.mode,k),k.ref=ma(A,null,_),k.return=A,k;case eo:return _=dh(_,A.mode,k),_.return=A,_;case ti:var M=_._init;return m(A,M(_._payload),k)}if(Ea(_)||ca(_))return _=hs(_,A.mode,k,null),_.return=A,_;pu(A,_)}return null}function g(A,_,k,M){var q=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return q!==null?null:l(A,_,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ru:return k.key===q?u(A,_,k,M):null;case eo:return k.key===q?c(A,_,k,M):null;case ti:return q=k._init,g(A,_,q(k._payload),M)}if(Ea(k)||ca(k))return q!==null?null:f(A,_,k,M,null);pu(A,k)}return null}function S(A,_,k,M,q){if(typeof M=="string"&&M!==""||typeof M=="number")return A=A.get(k)||null,l(_,A,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ru:return A=A.get(M.key===null?k:M.key)||null,u(_,A,M,q);case eo:return A=A.get(M.key===null?k:M.key)||null,c(_,A,M,q);case ti:var z=M._init;return S(A,_,k,z(M._payload),q)}if(Ea(M)||ca(M))return A=A.get(k)||null,f(_,A,M,q,null);pu(_,M)}return null}function P(A,_,k,M){for(var q=null,z=null,w=_,v=_=0,E=null;w!==null&&v<k.length;v++){w.index>v?(E=w,w=null):E=w.sibling;var T=g(A,w,k[v],M);if(T===null){w===null&&(w=E);break}t&&w&&T.alternate===null&&e(A,w),_=s(T,_,v),z===null?q=T:z.sibling=T,z=T,w=E}if(v===k.length)return n(A,w),Qe&&rs(A,v),q;if(w===null){for(;v<k.length;v++)w=m(A,k[v],M),w!==null&&(_=s(w,_,v),z===null?q=w:z.sibling=w,z=w);return Qe&&rs(A,v),q}for(w=r(A,w);v<k.length;v++)E=S(w,A,v,k[v],M),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),_=s(E,_,v),z===null?q=E:z.sibling=E,z=E);return t&&w.forEach(function(R){return e(A,R)}),Qe&&rs(A,v),q}function D(A,_,k,M){var q=ca(k);if(typeof q!="function")throw Error(W(150));if(k=q.call(k),k==null)throw Error(W(151));for(var z=q=null,w=_,v=_=0,E=null,T=k.next();w!==null&&!T.done;v++,T=k.next()){w.index>v?(E=w,w=null):E=w.sibling;var R=g(A,w,T.value,M);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(A,w),_=s(R,_,v),z===null?q=R:z.sibling=R,z=R,w=E}if(T.done)return n(A,w),Qe&&rs(A,v),q;if(w===null){for(;!T.done;v++,T=k.next())T=m(A,T.value,M),T!==null&&(_=s(T,_,v),z===null?q=T:z.sibling=T,z=T);return Qe&&rs(A,v),q}for(w=r(A,w);!T.done;v++,T=k.next())T=S(w,A,v,T.value,M),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?v:T.key),_=s(T,_,v),z===null?q=T:z.sibling=T,z=T);return t&&w.forEach(function(N){return e(A,N)}),Qe&&rs(A,v),q}function L(A,_,k,M){if(typeof k=="object"&&k!==null&&k.type===to&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ru:e:{for(var q=k.key,z=_;z!==null;){if(z.key===q){if(q=k.type,q===to){if(z.tag===7){n(A,z.sibling),_=i(z,k.props.children),_.return=A,A=_;break e}}else if(z.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===ti&&Sy(q)===z.type){n(A,z.sibling),_=i(z,k.props),_.ref=ma(A,z,k),_.return=A,A=_;break e}n(A,z);break}else e(A,z);z=z.sibling}k.type===to?(_=hs(k.props.children,A.mode,M,k.key),_.return=A,A=_):(M=Uu(k.type,k.key,k.props,null,A.mode,M),M.ref=ma(A,_,k),M.return=A,A=M)}return o(A);case eo:e:{for(z=k.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(A,_.sibling),_=i(_,k.children||[]),_.return=A,A=_;break e}else{n(A,_);break}else e(A,_);_=_.sibling}_=dh(k,A.mode,M),_.return=A,A=_}return o(A);case ti:return z=k._init,L(A,_,z(k._payload),M)}if(Ea(k))return P(A,_,k,M);if(ca(k))return D(A,_,k,M);pu(A,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(A,_.sibling),_=i(_,k),_.return=A,A=_):(n(A,_),_=ch(k,A.mode,M),_.return=A,A=_),o(A)):n(A,_)}return L}var Ro=Ew(!0),ww=Ew(!1),uc=Fi(null),cc=null,uo=null,Vp=null;function Fp(){Vp=uo=cc=null}function Up(t){var e=uc.current;We(uc),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){cc=t,Vp=uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},uo===null){if(cc===null)throw Error(W(308));uo=t,cc.dependencies={lanes:0,firstContext:t}}else uo=uo.next=t;return e}var as=null;function zp(t){as===null?as=[t]:as.push(t)}function Tw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mr(t,r)}function Mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ni=!1;function Bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mr(t,n)}return i=r.interleaved,i===null?(e.next=e,zp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mr(t,n)}function Ou(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kp(t,n)}}function Ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,r){var i=t.updateQueue;ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,D=l;switch(g=e,S=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){m=P.call(S,m,g);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,g=typeof P=="function"?P.call(S,m,g):P,g==null)break e;m=nt({},m,g);break e;case 2:ni=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=m):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_s|=o,t.lanes=o,t.memoizedState=m}}function ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var Cl={},cr=Fi(Cl),rl=Fi(Cl),il=Fi(Cl);function ls(t){if(t===Cl)throw Error(W(174));return t}function $p(t,e){switch($e(il,e),$e(rl,t),$e(cr,Cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qh(e,t)}We(cr),$e(cr,e)}function Po(){We(cr),We(rl),We(il)}function Sw(t){ls(il.current);var e=ls(cr.current),n=Qh(e,t.type);e!==n&&($e(rl,t),$e(cr,n))}function jp(t){rl.current===t&&(We(cr),We(rl))}var et=Fi(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ih=[];function Hp(){for(var t=0;t<ih.length;t++)ih[t]._workInProgressVersionPrimary=null;ih.length=0}var xu=Br.ReactCurrentDispatcher,sh=Br.ReactCurrentBatchConfig,vs=0,tt=null,Et=null,St=null,fc=!1,xa=!1,sl=0,$A=0;function Vt(){throw Error(W(321))}function qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function Wp(t,e,n,r,i,s){if(vs=s,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xu.current=t===null||t.memoizedState===null?WA:KA,t=n(r,i),xa){s=0;do{if(xa=!1,sl=0,25<=s)throw Error(W(301));s+=1,St=Et=null,e.updateQueue=null,xu.current=GA,t=n(r,i)}while(xa)}if(xu.current=pc,e=Et!==null&&Et.next!==null,vs=0,St=Et=tt=null,fc=!1,e)throw Error(W(300));return t}function Kp(){var t=sl!==0;return sl=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?tt.memoizedState=St=t:St=St.next=t,St}function Vn(){if(Et===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=St===null?tt.memoizedState:St.next;if(e!==null)St=e,Et=t;else{if(t===null)throw Error(W(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},St===null?tt.memoizedState=St=t:St=St.next=t}return St}function ol(t,e){return typeof e=="function"?e(t):e}function oh(t){var e=Vn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=Et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((vs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,tt.lanes|=f,_s|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Jn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,tt.lanes|=s,_s|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ah(t){var e=Vn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Aw(){}function kw(t,e){var n=tt,r=Vn(),i=e(),s=!Jn(r.memoizedState,i);if(s&&(r.memoizedState=i,rn=!0),r=r.queue,Gp(Pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,al(9,Rw.bind(null,n,r,i,e),void 0,null),At===null)throw Error(W(349));vs&30||Cw(n,e,i)}return i}function Cw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rw(t,e,n,r){e.value=n,e.getSnapshot=r,Nw(e)&&bw(t)}function Pw(t,e,n){return n(function(){Nw(e)&&bw(t)})}function Nw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function bw(t){var e=Mr(t,1);e!==null&&Yn(e,t,1,-1)}function Cy(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ol,lastRenderedState:t},e.queue=t,t=t.dispatch=qA.bind(null,tt,t),[e.memoizedState,t]}function al(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Dw(){return Vn().memoizedState}function Mu(t,e,n,r){var i=sr();tt.flags|=t,i.memoizedState=al(1|e,n,void 0,r===void 0?null:r)}function Kc(t,e,n,r){var i=Vn();r=r===void 0?null:r;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,r!==null&&qp(r,o.deps)){i.memoizedState=al(e,n,s,r);return}}tt.flags|=t,i.memoizedState=al(1|e,n,s,r)}function Ry(t,e){return Mu(8390656,8,t,e)}function Gp(t,e){return Kc(2048,8,t,e)}function Ow(t,e){return Kc(4,2,t,e)}function xw(t,e){return Kc(4,4,t,e)}function Mw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lw(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,Mw.bind(null,e,t),n)}function Qp(){}function Vw(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fw(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uw(t,e,n){return vs&21?(Jn(n,e)||(n=HE(),tt.lanes|=n,_s|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function jA(t,e){var n=De;De=n!==0&&4>n?n:4,t(!0);var r=sh.transition;sh.transition={};try{t(!1),e()}finally{De=n,sh.transition=r}}function zw(){return Vn().memoizedState}function HA(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bw(t))$w(e,n);else if(n=Tw(t,e,n,r),n!==null){var i=Gt();Yn(n,t,r,i),jw(n,e,r)}}function qA(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bw(t))$w(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Jn(l,o)){var u=e.interleaved;u===null?(i.next=i,zp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Tw(t,e,i,r),n!==null&&(i=Gt(),Yn(n,t,r,i),jw(n,e,r))}}function Bw(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function $w(t,e){xa=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kp(t,n)}}var pc={readContext:Ln,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},WA={readContext:Ln,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4194308,4,Mw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mu(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HA.bind(null,tt,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:Cy,useDebugValue:Qp,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=Cy(!1),e=t[0];return t=jA.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=tt,i=sr();if(Qe){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),At===null)throw Error(W(349));vs&30||Cw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ry(Pw.bind(null,r,s,t),[t]),r.flags|=2048,al(9,Rw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=At.identifierPrefix;if(Qe){var n=Rr,r=Cr;n=(r&~(1<<32-Xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$A++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KA={readContext:Ln,useCallback:Vw,useContext:Ln,useEffect:Gp,useImperativeHandle:Lw,useInsertionEffect:Ow,useLayoutEffect:xw,useMemo:Fw,useReducer:oh,useRef:Dw,useState:function(){return oh(ol)},useDebugValue:Qp,useDeferredValue:function(t){var e=Vn();return Uw(e,Et.memoizedState,t)},useTransition:function(){var t=oh(ol)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Aw,useSyncExternalStore:kw,useId:zw,unstable_isNewReconciler:!1},GA={readContext:Ln,useCallback:Vw,useContext:Ln,useEffect:Gp,useImperativeHandle:Lw,useInsertionEffect:Ow,useLayoutEffect:xw,useMemo:Fw,useReducer:ah,useRef:Dw,useState:function(){return ah(ol)},useDebugValue:Qp,useDeferredValue:function(t){var e=Vn();return Et===null?e.memoizedState=t:Uw(e,Et.memoizedState,t)},useTransition:function(){var t=ah(ol)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Aw,useSyncExternalStore:kw,useId:zw,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gc={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=_i(t),s=br(r,i);s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(Yn(e,t,i,r),Ou(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=_i(t),s=br(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(Yn(e,t,i,r),Ou(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=_i(t),i=br(n,r);i.tag=2,e!=null&&(i.callback=e),e=yi(t,i,r),e!==null&&(Yn(e,t,r,n),Ou(e,t,r))}};function Py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Za(n,r)||!Za(i,s):!0}function Hw(t,e,n){var r=!1,i=Pi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(i=an(e)?gs:Ht.current,r=e.contextTypes,s=(r=r!=null)?ko(t,i):Pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ln(s):(s=an(e)?gs:Ht.current,i.context=ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gc.enqueueReplaceState(i,i.state,null),dc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e){try{var n="",r=e;do n+=T1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _f(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QA=typeof WeakMap=="function"?WeakMap:Map;function qw(t,e,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gc||(gc=!0,Pf=r),_f(t,e)},n}function Ww(t,e,n){n=br(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_f(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_f(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function by(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uk.bind(null,t,e,n),e.then(t,t))}function Dy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Oy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=br(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t)}var XA=Br.ReactCurrentOwner,rn=!1;function Kt(t,e,n,r){e.child=t===null?ww(e,null,n,r):Ro(e,t.child,n,r)}function xy(t,e,n,r,i){n=n.render;var s=e.ref;return vo(e,i),r=Wp(t,e,n,r,s,i),n=Kp(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Qe&&n&&xp(e),e.flags|=1,Kt(t,e,r,i),e.child)}function My(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kw(t,e,s,r,i)):(t=Uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(o,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function Kw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Za(s,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return Ef(t,e,n,r,i)}function Gw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ho,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(ho,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$e(ho,pn),pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$e(ho,pn),pn|=r;return Kt(t,e,i,n),e.child}function Qw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,r,i){var s=an(n)?gs:Ht.current;return s=ko(e,s),vo(e,i),n=Wp(t,e,n,r,s,i),r=Kp(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Qe&&r&&xp(e),e.flags|=1,Kt(t,e,n,i),e.child)}function Ly(t,e,n,r,i){if(an(n)){var s=!0;oc(e)}else s=!1;if(vo(e,i),e.stateNode===null)Lu(t,e),Hw(e,n,r),vf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=an(n)?gs:Ht.current,c=ko(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ny(e,o,r,c),ni=!1;var g=e.memoizedState;o.state=g,dc(e,r,o,i),u=e.memoizedState,l!==r||g!==u||on.current||ni?(typeof f=="function"&&(yf(e,n,f,r),u=e.memoizedState),(l=ni||Py(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ln(u):(u=an(n)?gs:Ht.current,u=ko(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Ny(e,o,r,u),ni=!1,g=e.memoizedState,o.state=g,dc(e,r,o,i);var P=e.memoizedState;l!==m||g!==P||on.current||ni?(typeof S=="function"&&(yf(e,n,S,r),P=e.memoizedState),(c=ni||Py(e,n,c,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return wf(t,e,n,r,s,i)}function wf(t,e,n,r,i,s){Qw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wy(e,n,!1),Lr(t,e,s);r=e.stateNode,XA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ro(e,t.child,null,s),e.child=Ro(e,null,l,s)):Kt(t,e,l,s),e.memoizedState=r.state,i&&wy(e,n,!0),e.child}function Xw(t){var e=t.stateNode;e.pendingContext?Ey(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ey(t,e.context,!1),$p(t,e.containerInfo)}function Vy(t,e,n,r,i){return Co(),Lp(i),e.flags|=256,Kt(t,e,n,r),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yw(t,e,n){var r=e.pendingProps,i=et.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$e(et,i&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,r,0,null),t=hs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=If(n),e.memoizedState=Tf,t):Xp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return YA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ei(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ei(l,s):(s=hs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tf,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xp(t,e){return e=Yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mu(t,e,n,r){return r!==null&&Lp(r),Ro(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lh(Error(W(422))),mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yc({mode:"visible",children:r.children},i,0,null),s=hs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ro(e,t.child,null,o),e.child.memoizedState=If(o),e.memoizedState=Tf,s);if(!(e.mode&1))return mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(W(419)),r=lh(s,r,void 0),mu(t,e,o,r)}if(l=(o&t.childLanes)!==0,rn||l){if(r=At,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mr(t,i),Yn(r,t,i,-1))}return nm(),r=lh(Error(W(421))),mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ck.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gn=gi(i.nextSibling),_n=e,Qe=!0,Gn=null,t!==null&&(Pn[Nn++]=Cr,Pn[Nn++]=Rr,Pn[Nn++]=ys,Cr=t.id,Rr=t.overflow,ys=e),e=Xp(e,r.children),e.flags|=4096,e)}function Fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gf(t.return,e,n)}function uh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Kt(t,e,r.children,n),r=et.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,n,e);else if(t.tag===19)Fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($e(et,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uh(e,!0,n,null,s);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_s|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JA(t,e,n){switch(e.tag){case 3:Xw(e),Co();break;case 5:Sw(e);break;case 1:an(e.type)&&oc(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$e(uc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($e(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?Yw(t,e,n):($e(et,et.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);$e(et,et.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(et,et.current),r)break;return null;case 22:case 23:return e.lanes=0,Gw(t,e,n)}return Lr(t,e,n)}var Zw,Sf,e0,t0;Zw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sf=function(){};e0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ls(cr.current);var s=null;switch(n){case"input":i=qh(t,i),r=qh(t,r),s=[];break;case"select":i=nt({},i,{value:void 0}),r=nt({},r,{value:void 0}),s=[];break;case"textarea":i=Gh(t,i),r=Gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ic)}Xh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&He("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};t0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZA(t,e,n){var r=e.pendingProps;switch(Mp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return an(e.type)&&sc(),Ft(e),null;case 3:return r=e.stateNode,Po(),We(on),We(Ht),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Df(Gn),Gn=null))),Sf(t,e),Ft(e),null;case 5:jp(e);var i=ls(il.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return Ft(e),null}if(t=ls(cr.current),fu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ar]=e,r[nl]=s,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<Ta.length;i++)He(Ta[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":Kg(r,s),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},He("invalid",r);break;case"textarea":Qg(r,s),He("invalid",r)}Xh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&hu(r.textContent,l,t),i=["children",""+l]):Wa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":iu(r),Gg(r,s,!0);break;case"textarea":iu(r),Xg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ic)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=PE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ar]=e,t[nl]=r,Zw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yh(n,r),n){case"dialog":He("cancel",t),He("close",t),i=r;break;case"iframe":case"object":case"embed":He("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ta.length;i++)He(Ta[i],t);i=r;break;case"source":He("error",t),i=r;break;case"img":case"image":case"link":He("error",t),He("load",t),i=r;break;case"details":He("toggle",t),i=r;break;case"input":Kg(t,r),i=qh(t,r),He("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=nt({},r,{value:void 0}),He("invalid",t);break;case"textarea":Qg(t,r),i=Gh(t,r),He("invalid",t);break;default:i=r}Xh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?DE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&NE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ka(t,u):typeof u=="number"&&Ka(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&He("scroll",t):u!=null&&Ep(t,s,u,o))}switch(n){case"input":iu(t),Gg(t,r,!1);break;case"textarea":iu(t),Xg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ri(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?po(t,!!r.multiple,s,!1):r.defaultValue!=null&&po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ic)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=ls(il.current),ls(cr.current),fu(e)){if(r=e.stateNode,n=e.memoizedProps,r[ar]=e,(s=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:hu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ar]=e,e.stateNode=r}return Ft(e),null;case 13:if(We(et),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&gn!==null&&e.mode&1&&!(e.flags&128))_w(),Co(),e.flags|=98560,s=!1;else if(s=fu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[ar]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Gn!==null&&(Df(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?wt===0&&(wt=3):nm())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Po(),Sf(t,e),t===null&&el(e.stateNode.containerInfo),Ft(e),null;case 10:return Up(e.type._context),Ft(e),null;case 17:return an(e.type)&&sc(),Ft(e),null;case 19:if(We(et),s=e.memoizedState,s===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ga(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(et,et.current&1|2),e.child}t=t.sibling}s.tail!==null&&ut()>bo&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=hc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Ft(e),null}else 2*ut()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ut(),e.sibling=null,n=et.current,$e(et,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function ek(t,e){switch(Mp(e),e.tag){case 1:return an(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Po(),We(on),We(Ht),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jp(e),null;case 13:if(We(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return We(et),null;case 4:return Po(),null;case 10:return Up(e.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var gu=!1,$t=!1,tk=typeof WeakSet=="function"?WeakSet:Set,te=null;function co(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(t,e,r)}else n.current=null}function Af(t,e,n){try{n()}catch(r){st(t,e,r)}}var Uy=!1;function nk(t,e){if(lf=tc,t=ow(),Op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(uf={focusedElem:t,selectionRange:n},tc=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,L=P.memoizedState,A=e.stateNode,_=A.getSnapshotBeforeUpdate(e.elementType===e.type?D:Wn(e.type,D),L);A.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(M){st(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return P=Uy,Uy=!1,P}function Ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Af(e,n,s)}i=i.next}while(i!==r)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ar],delete e[nl],delete e[hf],delete e[FA],delete e[UA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r0(t){return t.tag===5||t.tag===3||t.tag===4}function zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ic));else if(r!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function Rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var Rt=null,Kn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:$t||co(n,e);case 6:var r=Rt,i=Kn;Rt=null,Qr(t,e,n),Rt=r,Kn=i,Rt!==null&&(Kn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Kn?(t=Rt,n=n.stateNode,t.nodeType===8?nh(t.parentNode,n):t.nodeType===1&&nh(t,n),Ya(t)):nh(Rt,n.stateNode));break;case 4:r=Rt,i=Kn,Rt=n.stateNode.containerInfo,Kn=!0,Qr(t,e,n),Rt=r,Kn=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Af(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!$t&&(co(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){st(n,e,l)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,Qr(t,e,n),$t=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function By(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tk),e.forEach(function(r){var i=dk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Rt=l.stateNode,Kn=!1;break e;case 3:Rt=l.stateNode.containerInfo,Kn=!0;break e;case 4:Rt=l.stateNode.containerInfo,Kn=!0;break e}l=l.return}if(Rt===null)throw Error(W(160));i0(s,o,i),Rt=null,Kn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){st(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s0(e,t),e=e.sibling}function s0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),ir(t),r&4){try{Ma(3,t,t.return),Qc(3,t)}catch(D){st(t,t.return,D)}try{Ma(5,t,t.return)}catch(D){st(t,t.return,D)}}break;case 1:qn(e,t),ir(t),r&512&&n!==null&&co(n,n.return);break;case 5:if(qn(e,t),ir(t),r&512&&n!==null&&co(n,n.return),t.flags&32){var i=t.stateNode;try{Ka(i,"")}catch(D){st(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&CE(i,s),Yh(l,o);var c=Yh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?DE(i,m):f==="dangerouslySetInnerHTML"?NE(i,m):f==="children"?Ka(i,m):Ep(i,f,m,c)}switch(l){case"input":Wh(i,s);break;case"textarea":RE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?po(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?po(i,!!s.multiple,s.defaultValue,!0):po(i,!!s.multiple,s.multiple?[]:"",!1))}i[nl]=s}catch(D){st(t,t.return,D)}}break;case 6:if(qn(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){st(t,t.return,D)}}break;case 3:if(qn(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(D){st(t,t.return,D)}break;case 4:qn(e,t),ir(t);break;case 13:qn(e,t),ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zp=ut())),r&4&&By(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||f,qn(e,t),$t=c):qn(e,t),ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(te=t,f=t.child;f!==null;){for(m=te=f;te!==null;){switch(g=te,S=g.child,g.tag){case 0:case 11:case 14:case 15:Ma(4,g,g.return);break;case 1:co(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){st(r,n,D)}}break;case 5:co(g,g.return);break;case 22:if(g.memoizedState!==null){jy(m);continue}}S!==null?(S.return=g,te=S):jy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=bE("display",o))}catch(D){st(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(D){st(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:qn(e,t),ir(t),r&4&&By(t);break;case 21:break;default:qn(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r0(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ka(i,""),r.flags&=-33);var s=zy(t);Rf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=zy(t);Cf(t,l,o);break;default:throw Error(W(161))}}catch(u){st(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rk(t,e,n){te=t,o0(t)}function o0(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var i=te,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||$t;l=gu;var c=$t;if(gu=o,($t=u)&&!c)for(te=i;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?Hy(i):u!==null?(u.return=o,te=u):Hy(i);for(;s!==null;)te=s,o0(s),s=s.sibling;te=i,gu=l,$t=c}$y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,te=s):$y(t)}}function $y(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ky(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ky(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ya(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}$t||e.flags&512&&kf(e)}catch(g){st(e,e.return,g)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function jy(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function Hy(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(u){st(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){st(e,i,u)}}var s=e.return;try{kf(e)}catch(u){st(e,s,u)}break;case 5:var o=e.return;try{kf(e)}catch(u){st(e,o,u)}}}catch(u){st(e,e.return,u)}if(e===t){te=null;break}var l=e.sibling;if(l!==null){l.return=e.return,te=l;break}te=e.return}}var ik=Math.ceil,mc=Br.ReactCurrentDispatcher,Yp=Br.ReactCurrentOwner,On=Br.ReactCurrentBatchConfig,Ae=0,At=null,mt=null,Dt=0,pn=0,ho=Fi(0),wt=0,ll=null,_s=0,Xc=0,Jp=0,La=null,tn=null,Zp=0,bo=1/0,Ir=null,gc=!1,Pf=null,vi=null,yu=!1,di=null,yc=0,Va=0,Nf=null,Vu=-1,Fu=0;function Gt(){return Ae&6?ut():Vu!==-1?Vu:Vu=ut()}function _i(t){return t.mode&1?Ae&2&&Dt!==0?Dt&-Dt:BA.transition!==null?(Fu===0&&(Fu=HE()),Fu):(t=De,t!==0||(t=window.event,t=t===void 0?16:YE(t.type)),t):1}function Yn(t,e,n,r){if(50<Va)throw Va=0,Nf=null,Error(W(185));Sl(t,n,r),(!(Ae&2)||t!==At)&&(t===At&&(!(Ae&2)&&(Xc|=n),wt===4&&ii(t,Dt)),ln(t,r),n===1&&Ae===0&&!(e.mode&1)&&(bo=ut()+500,Wc&&Ui()))}function ln(t,e){var n=t.callbackNode;B1(t,e);var r=ec(t,t===At?Dt:0);if(r===0)n!==null&&Zg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zg(n),e===1)t.tag===0?zA(qy.bind(null,t)):gw(qy.bind(null,t)),LA(function(){!(Ae&6)&&Ui()}),n=null;else{switch(qE(r)){case 1:n=Ap;break;case 4:n=$E;break;case 16:n=Zu;break;case 536870912:n=jE;break;default:n=Zu}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(Vu=-1,Fu=0,Ae&6)throw Error(W(327));var n=t.callbackNode;if(_o()&&t.callbackNode!==n)return null;var r=ec(t,t===At?Dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=vc(t,r);else{e=r;var i=Ae;Ae|=2;var s=u0();(At!==t||Dt!==e)&&(Ir=null,bo=ut()+500,ds(t,e));do try{ak();break}catch(l){l0(t,l)}while(!0);Fp(),mc.current=s,Ae=i,mt!==null?e=0:(At=null,Dt=0,e=wt)}if(e!==0){if(e===2&&(i=nf(t),i!==0&&(r=i,e=bf(t,i))),e===1)throw n=ll,ds(t,0),ii(t,r),ln(t,ut()),n;if(e===6)ii(t,r);else{if(i=t.current.alternate,!(r&30)&&!sk(i)&&(e=vc(t,r),e===2&&(s=nf(t),s!==0&&(r=s,e=bf(t,s))),e===1))throw n=ll,ds(t,0),ii(t,r),ln(t,ut()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:is(t,tn,Ir);break;case 3:if(ii(t,r),(r&130023424)===r&&(e=Zp+500-ut(),10<e)){if(ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=df(is.bind(null,t,tn,Ir),e);break}is(t,tn,Ir);break;case 4:if(ii(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ut()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ik(r/1960))-r,10<r){t.timeoutHandle=df(is.bind(null,t,tn,Ir),r);break}is(t,tn,Ir);break;case 5:is(t,tn,Ir);break;default:throw Error(W(329))}}}return ln(t,ut()),t.callbackNode===n?a0.bind(null,t):null}function bf(t,e){var n=La;return t.current.memoizedState.isDehydrated&&(ds(t,e).flags|=256),t=vc(t,e),t!==2&&(e=tn,tn=n,e!==null&&Df(e)),t}function Df(t){tn===null?tn=t:tn.push.apply(tn,t)}function sk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ii(t,e){for(e&=~Jp,e&=~Xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),r=1<<n;t[n]=-1,e&=~r}}function qy(t){if(Ae&6)throw Error(W(327));_o();var e=ec(t,0);if(!(e&1))return ln(t,ut()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var r=nf(t);r!==0&&(e=r,n=bf(t,r))}if(n===1)throw n=ll,ds(t,0),ii(t,e),ln(t,ut()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,is(t,tn,Ir),ln(t,ut()),null}function em(t,e){var n=Ae;Ae|=1;try{return t(e)}finally{Ae=n,Ae===0&&(bo=ut()+500,Wc&&Ui())}}function Es(t){di!==null&&di.tag===0&&!(Ae&6)&&_o();var e=Ae;Ae|=1;var n=On.transition,r=De;try{if(On.transition=null,De=1,t)return t()}finally{De=r,On.transition=n,Ae=e,!(Ae&6)&&Ui()}}function tm(){pn=ho.current,We(ho)}function ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MA(n)),mt!==null)for(n=mt.return;n!==null;){var r=n;switch(Mp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sc();break;case 3:Po(),We(on),We(Ht),Hp();break;case 5:jp(r);break;case 4:Po();break;case 13:We(et);break;case 19:We(et);break;case 10:Up(r.type._context);break;case 22:case 23:tm()}n=n.return}if(At=t,mt=t=Ei(t.current,null),Dt=pn=e,wt=0,ll=null,Jp=Xc=_s=0,tn=La=null,as!==null){for(e=0;e<as.length;e++)if(n=as[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}as=null}return t}function l0(t,e){do{var n=mt;try{if(Fp(),xu.current=pc,fc){for(var r=tt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fc=!1}if(vs=0,St=Et=tt=null,xa=!1,sl=0,Yp.current=null,n===null||n.return===null){wt=1,ll=e,mt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Dt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Dy(o);if(S!==null){S.flags&=-257,Oy(S,o,l,s,e),S.mode&1&&by(s,c,e),e=S,u=c;var P=e.updateQueue;if(P===null){var D=new Set;D.add(u),e.updateQueue=D}else P.add(u);break e}else{if(!(e&1)){by(s,c,e),nm();break e}u=Error(W(426))}}else if(Qe&&l.mode&1){var L=Dy(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Oy(L,o,l,s,e),Lp(No(u,l));break e}}s=u=No(u,l),wt!==4&&(wt=2),La===null?La=[s]:La.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=qw(s,u,e);Ay(s,A);break e;case 1:l=u;var _=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(vi===null||!vi.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Ww(s,l,e);Ay(s,M);break e}}s=s.return}while(s!==null)}d0(n)}catch(q){e=q,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function u0(){var t=mc.current;return mc.current=pc,t===null?pc:t}function nm(){(wt===0||wt===3||wt===2)&&(wt=4),At===null||!(_s&268435455)&&!(Xc&268435455)||ii(At,Dt)}function vc(t,e){var n=Ae;Ae|=2;var r=u0();(At!==t||Dt!==e)&&(Ir=null,ds(t,e));do try{ok();break}catch(i){l0(t,i)}while(!0);if(Fp(),Ae=n,mc.current=r,mt!==null)throw Error(W(261));return At=null,Dt=0,wt}function ok(){for(;mt!==null;)c0(mt)}function ak(){for(;mt!==null&&!D1();)c0(mt)}function c0(t){var e=f0(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?d0(t):mt=e,Yp.current=null}function d0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ek(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,mt=null;return}}else if(n=ZA(n,e,pn),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);wt===0&&(wt=5)}function is(t,e,n){var r=De,i=On.transition;try{On.transition=null,De=1,lk(t,e,n,r)}finally{On.transition=i,De=r}return null}function lk(t,e,n,r){do _o();while(di!==null);if(Ae&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($1(t,s),t===At&&(mt=At=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yu||(yu=!0,p0(Zu,function(){return _o(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=De;De=1;var l=Ae;Ae|=4,Yp.current=null,nk(t,n),s0(n,t),RA(uf),tc=!!lf,uf=lf=null,t.current=n,rk(n),O1(),Ae=l,De=o,On.transition=s}else t.current=n;if(yu&&(yu=!1,di=t,yc=i),s=t.pendingLanes,s===0&&(vi=null),L1(n.stateNode),ln(t,ut()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gc)throw gc=!1,t=Pf,Pf=null,t;return yc&1&&t.tag!==0&&_o(),s=t.pendingLanes,s&1?t===Nf?Va++:(Va=0,Nf=t):Va=0,Ui(),null}function _o(){if(di!==null){var t=qE(yc),e=On.transition,n=De;try{if(On.transition=null,De=16>t?16:t,di===null)var r=!1;else{if(t=di,di=null,yc=0,Ae&6)throw Error(W(331));var i=Ae;for(Ae|=4,te=t.current;te!==null;){var s=te,o=s.child;if(te.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(te=c;te!==null;){var f=te;switch(f.tag){case 0:case 11:case 15:Ma(8,f,s)}var m=f.child;if(m!==null)m.return=f,te=m;else for(;te!==null;){f=te;var g=f.sibling,S=f.return;if(n0(f),f===c){te=null;break}if(g!==null){g.return=S,te=g;break}te=S}}}var P=s.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,te=o;else e:for(;te!==null;){if(s=te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,te=A;break e}te=s.return}}var _=t.current;for(te=_;te!==null;){o=te;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,te=k;else e:for(o=_;te!==null;){if(l=te,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qc(9,l)}}catch(q){st(l,l.return,q)}if(l===o){te=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,te=M;break e}te=l.return}}if(Ae=i,Ui(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(Bc,t)}catch{}r=!0}return r}finally{De=n,On.transition=e}}return!1}function Wy(t,e,n){e=No(n,e),e=qw(t,e,1),t=yi(t,e,1),e=Gt(),t!==null&&(Sl(t,1,e),ln(t,e))}function st(t,e,n){if(t.tag===3)Wy(t,t,n);else for(;e!==null;){if(e.tag===3){Wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=No(n,t),t=Ww(e,t,1),e=yi(e,t,1),t=Gt(),e!==null&&(Sl(e,1,t),ln(e,t));break}}e=e.return}}function uk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Dt&n)===n&&(wt===4||wt===3&&(Dt&130023424)===Dt&&500>ut()-Zp?ds(t,0):Jp|=n),ln(t,e)}function h0(t,e){e===0&&(t.mode&1?(e=au,au<<=1,!(au&130023424)&&(au=4194304)):e=1);var n=Gt();t=Mr(t,e),t!==null&&(Sl(t,e,n),ln(t,n))}function ck(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h0(t,n)}function dk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),h0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,JA(t,e,n);rn=!!(t.flags&131072)}else rn=!1,Qe&&e.flags&1048576&&yw(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lu(t,e),t=e.pendingProps;var i=ko(e,Ht.current);vo(e,n),i=Wp(null,e,r,t,i,n);var s=Kp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(r)?(s=!0,oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bp(e),i.updater=Gc,e.stateNode=i,i._reactInternals=e,vf(e,r,t,n),e=wf(null,e,r,!0,s,n)):(e.tag=0,Qe&&s&&xp(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fk(r),t=Wn(r,t),i){case 0:e=Ef(null,e,r,t,n);break e;case 1:e=Ly(null,e,r,t,n);break e;case 11:e=xy(null,e,r,t,n);break e;case 14:e=My(null,e,r,Wn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),Ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),Ly(t,e,r,i,n);case 3:e:{if(Xw(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iw(t,e),dc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=No(Error(W(423)),e),e=Vy(t,e,r,n,i);break e}else if(r!==i){i=No(Error(W(424)),e),e=Vy(t,e,r,n,i);break e}else for(gn=gi(e.stateNode.containerInfo.firstChild),_n=e,Qe=!0,Gn=null,n=ww(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Co(),r===i){e=Lr(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return Sw(e),t===null&&mf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,cf(r,i)?o=null:s!==null&&cf(r,s)&&(e.flags|=32),Qw(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&mf(e),null;case 13:return Yw(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ro(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),xy(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$e(uc,r._currentValue),r._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===i.children&&!on.current){e=Lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=br(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),gf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vo(e,n),i=Ln(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=Wn(r,e.pendingProps),i=Wn(r.type,i),My(t,e,r,i,n);case 15:return Kw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wn(r,i),Lu(t,e),e.tag=1,an(r)?(t=!0,oc(e)):t=!1,vo(e,n),Hw(e,r,i),vf(e,r,i,n),wf(null,e,r,!0,t,n);case 19:return Jw(t,e,n);case 22:return Gw(t,e,n)}throw Error(W(156,e.tag))};function p0(t,e){return BE(t,e)}function hk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,r){return new hk(t,e,n,r)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fk(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tp)return 11;if(t===Ip)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case to:return hs(n.children,i,s,e);case wp:o=8,i|=8;break;case Bh:return t=Dn(12,n,e,i|2),t.elementType=Bh,t.lanes=s,t;case $h:return t=Dn(13,n,e,i),t.elementType=$h,t.lanes=s,t;case jh:return t=Dn(19,n,e,i),t.elementType=jh,t.lanes=s,t;case SE:return Yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case TE:o=10;break e;case IE:o=9;break e;case Tp:o=11;break e;case Ip:o=14;break e;case ti:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hs(t,e,n,r){return t=Dn(7,t,r,e),t.lanes=n,t}function Yc(t,e,n,r){return t=Dn(22,t,r,e),t.elementType=SE,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function dh(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function im(t,e,n,r,i,s,o,l,u){return t=new pk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bp(s),t}function mk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return Pi;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(an(n))return mw(t,n,e)}return e}function g0(t,e,n,r,i,s,o,l,u){return t=im(n,r,!0,t,i,s,o,l,u),t.context=m0(null),n=t.current,r=Gt(),i=_i(n),s=br(r,i),s.callback=e??null,yi(n,s,i),t.current.lanes=i,Sl(t,i,r),ln(t,r),t}function Jc(t,e,n,r){var i=e.current,s=Gt(),o=_i(i);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=br(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yi(i,e,o),t!==null&&(Yn(t,i,o,s),Ou(t,i,o)),o}function _c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ky(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){Ky(t,e),(t=t.alternate)&&Ky(t,e)}function gk(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}Zc.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Jc(t,e,null,null)};Zc.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Es(function(){Jc(null,t,null,null)}),e[xr]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=GE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ri.length&&e!==0&&e<ri[n].priority;n++);ri.splice(n,0,t),n===0&&XE(t)}};function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gy(){}function yk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=_c(o);s.call(c)}}var o=g0(e,r,t,0,null,!1,!1,"",Gy);return t._reactRootContainer=o,t[xr]=o.current,el(t.nodeType===8?t.parentNode:t),Es(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=_c(u);l.call(c)}}var u=im(t,0,!1,null,null,!1,!1,"",Gy);return t._reactRootContainer=u,t[xr]=u.current,el(t.nodeType===8?t.parentNode:t),Es(function(){Jc(e,u,n,r)}),u}function td(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_c(o);l.call(u)}}Jc(e,o,t,i)}else o=yk(n,e,t,i,r);return _c(o)}WE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(kp(e,n|1),ln(e,ut()),!(Ae&6)&&(bo=ut()+500,Ui()))}break;case 13:Es(function(){var r=Mr(t,1);if(r!==null){var i=Gt();Yn(r,t,1,i)}}),sm(t,1)}};Cp=function(t){if(t.tag===13){var e=Mr(t,134217728);if(e!==null){var n=Gt();Yn(e,t,134217728,n)}sm(t,134217728)}};KE=function(t){if(t.tag===13){var e=_i(t),n=Mr(t,e);if(n!==null){var r=Gt();Yn(n,t,e,r)}sm(t,e)}};GE=function(){return De};QE=function(t,e){var n=De;try{return De=t,e()}finally{De=n}};Zh=function(t,e,n){switch(e){case"input":if(Wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qc(r);if(!i)throw Error(W(90));kE(r),Wh(r,i)}}}break;case"textarea":RE(t,n);break;case"select":e=n.value,e!=null&&po(t,!!n.multiple,e,!1)}};ME=em;LE=Es;var vk={usingClientEntryPoint:!1,Events:[kl,so,qc,OE,xE,em]},ya={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_k={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=UE(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||gk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{Bc=vu.inject(_k),ur=vu}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(e))throw Error(W(200));return mk(t,e,null,n)};wn.createRoot=function(t,e){if(!am(t))throw Error(W(299));var n=!1,r="",i=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=im(t,1,!1,null,null,n,!1,r,i),t[xr]=e.current,el(t.nodeType===8?t.parentNode:t),new om(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=UE(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Es(t)};wn.hydrate=function(t,e,n){if(!ed(e))throw Error(W(200));return td(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!am(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g0(e,null,t,1,n??null,i,!1,s,o),t[xr]=e.current,el(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zc(e)};wn.render=function(t,e,n){if(!ed(e))throw Error(W(200));return td(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!ed(t))throw Error(W(40));return t._reactRootContainer?(Es(function(){td(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};wn.unstable_batchedUpdates=em;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ed(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return td(t,e,n,!1,r)};wn.version="18.3.1-next-f1338f8080-20240426";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),vE.exports=wn;var Ek=vE.exports,Qy=Ek;Uh.createRoot=Qy.createRoot,Uh.hydrateRoot=Qy.hydrateRoot;const wk=()=>{};var Xy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Tk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},E0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Tk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new Ik;const g=s<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),m!==64){const P=c<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ik extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sk=function(t){const e=_0(t);return E0.encodeByteArray(e,!0)},Ec=function(t){return Sk(t).replace(/\./g,"")},w0=function(t){try{return E0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=()=>Ak().__FIREBASE_DEFAULTS__,Ck=()=>{if(typeof process>"u"||typeof Xy>"u")return;const t=Xy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&w0(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return wk()||kk()||Ck()||Rk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lm=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I0=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config},S0=t=>{var e;return(e=nd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rd(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ec(JSON.stringify(n)),Ec(JSON.stringify(o)),""].join(".")}const Fa={};function Nk(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fa))Fa[e]?t.emulator.push(e):t.prod.push(e);return t}function bk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Yy=!1;function id(t,e){if(typeof window>"u"||typeof document>"u"||!$r(window.location.host)||Fa[t]===e||Fa[t]||Yy)return;Fa[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=Nk().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Yy=!0,o()},g}function f(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=bk(r),S=n("text"),P=document.getElementById(S)||document.createElement("span"),D=n("learnmore"),L=document.getElementById(D)||document.createElement("a"),A=n("preprendIcon"),_=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const k=g.element;l(k),f(L,D);const M=c();u(_,A),k.append(_,P,L,M),document.body.appendChild(k)}s?(P.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function Ok(){var t;const e=(t=nd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lk(){const t=qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vk(){return!Ok()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function um(){try{return typeof indexedDB=="object"}catch{return!1}}function cm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function C0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Fk,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Uk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new In(i,l,r)}}function Uk(t,e){return t.replace(zk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zk=/\{\$([^}]+)}/g;function Bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ws(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jy(s)&&Jy(o)){if(!ws(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ia(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $k(t,e){const n=new jk(t,e);return n.subscribe.bind(n)}class jk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Hk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hh),i.error===void 0&&(i.error=hh),i.complete===void 0&&(i.complete=hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=1e3,Wk=2,Kk=4*60*60*1e3,Gk=.5;function Zy(t,e=qk,n=Wk){const r=e*Math.pow(n,t),i=Math.round(Gk*r*(Math.random()-.5)*2);return Math.min(Kk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yk(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xk(t){return t===ss?void 0:t}function Yk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Zk={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},eC=we.INFO,tC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},nC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=eC,this._logHandler=nC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const rC=(t,e)=>e.some(n=>t instanceof n);let ev,tv;function iC(){return ev||(ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sC(){return tv||(tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,Of=new WeakMap,P0=new WeakMap,fh=new WeakMap,dm=new WeakMap;function oC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R0.set(n,t)}).catch(()=>{}),dm.set(e,t),e}function aC(t){if(Of.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Of.set(t,e)}let xf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lC(t){xf=t(xf)}function uC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ph(this),e,...n);return P0.set(r,e.sort?e.sort():[e]),Dr(r)}:sC().includes(t)?function(...e){return t.apply(ph(this),e),Dr(R0.get(this))}:function(...e){return Dr(t.apply(ph(this),e))}}function cC(t){return typeof t=="function"?uC(t):(t instanceof IDBTransaction&&aC(t),rC(t,iC())?new Proxy(t,xf):t)}function Dr(t){if(t instanceof IDBRequest)return oC(t);if(fh.has(t))return fh.get(t);const e=cC(t);return e!==t&&(fh.set(t,e),dm.set(e,t)),e}const ph=t=>dm.get(t);function od(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function mh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Dr(n).then(()=>{})}const dC=["get","getKey","getAll","getAllKeys","count"],hC=["put","add","delete","clear"],gh=new Map;function nv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gh.get(e))return gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return gh.set(e,s),s}lC(t=>({...t,get:(e,n,r)=>nv(e,n)||t.get(e,n,r),has:(e,n)=>!!nv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mf="@firebase/app",rv="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new sd("@firebase/app"),mC="@firebase/app-compat",gC="@firebase/analytics-compat",yC="@firebase/analytics",vC="@firebase/app-check-compat",_C="@firebase/app-check",EC="@firebase/auth",wC="@firebase/auth-compat",TC="@firebase/database",IC="@firebase/data-connect",SC="@firebase/database-compat",AC="@firebase/functions",kC="@firebase/functions-compat",CC="@firebase/installations",RC="@firebase/installations-compat",PC="@firebase/messaging",NC="@firebase/messaging-compat",bC="@firebase/performance",DC="@firebase/performance-compat",OC="@firebase/remote-config",xC="@firebase/remote-config-compat",MC="@firebase/storage",LC="@firebase/storage-compat",VC="@firebase/firestore",FC="@firebase/ai",UC="@firebase/firestore-compat",zC="firebase",BC="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="[DEFAULT]",$C={[Mf]:"fire-core",[mC]:"fire-core-compat",[yC]:"fire-analytics",[gC]:"fire-analytics-compat",[_C]:"fire-app-check",[vC]:"fire-app-check-compat",[EC]:"fire-auth",[wC]:"fire-auth-compat",[TC]:"fire-rtdb",[IC]:"fire-data-connect",[SC]:"fire-rtdb-compat",[AC]:"fire-fn",[kC]:"fire-fn-compat",[CC]:"fire-iid",[RC]:"fire-iid-compat",[PC]:"fire-fcm",[NC]:"fire-fcm-compat",[bC]:"fire-perf",[DC]:"fire-perf-compat",[OC]:"fire-rc",[xC]:"fire-rc-compat",[MC]:"fire-gcs",[LC]:"fire-gcs-compat",[VC]:"fire-fst",[UC]:"fire-fst-compat",[FC]:"fire-vertex","fire-js":"fire-js",[zC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Map,jC=new Map,Vf=new Map;function iv(t,e){try{t.container.addComponent(e)}catch(n){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Vf.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of wc.values())iv(n,t);for(const n of jC.values())iv(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new zi("app","Firebase",HC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=BC;function N0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lf,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw wi.create("bad-app-name",{appName:String(i)});if(n||(n=I0()),!n)throw wi.create("no-options");const s=wc.get(i);if(s){if(ws(n,s.options)&&ws(r,s.config))return s;throw wi.create("duplicate-app",{appName:i})}const o=new Jk(i);for(const u of Vf.values())o.addComponent(u);const l=new qC(n,r,o);return wc.set(i,l),l}function Pl(t=Lf){const e=wc.get(t);if(!e&&t===Lf&&I0())return N0();if(!e)throw wi.create("no-app",{appName:t});return e}function kt(t,e,n){var r;let i=(r=$C[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(l.join(" "));return}cn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="firebase-heartbeat-database",KC=1,ul="firebase-heartbeat-store";let yh=null;function b0(){return yh||(yh=od(WC,KC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ul)}catch(n){console.warn(n)}}}}).catch(t=>{throw wi.create("idb-open",{originalErrorMessage:t.message})})),yh}async function GC(t){try{const n=(await b0()).transaction(ul),r=await n.objectStore(ul).get(D0(t));return await n.done,r}catch(e){if(e instanceof In)Vr.warn(e.message);else{const n=wi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(n.message)}}}async function sv(t,e){try{const r=(await b0()).transaction(ul,"readwrite");await r.objectStore(ul).put(e,D0(t)),await r.done}catch(n){if(n instanceof In)Vr.warn(n.message);else{const r=wi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(r.message)}}}function D0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=1024,XC=30;class YC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ov();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>XC){const o=eR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ov(),{heartbeatsToSend:r,unsentEntries:i}=JC(this._heartbeatsCache.heartbeats),s=Ec(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vr.warn(n),""}}}function ov(){return new Date().toISOString().substring(0,10)}function JC(t,e=QC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),av(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),av(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return um()?cm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function av(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}function eR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t){cn(new Xt("platform-logger",e=>new fC(e),"PRIVATE")),cn(new Xt("heartbeat",e=>new YC(e),"PRIVATE")),kt(Mf,rv,t),kt(Mf,rv,"esm2017"),kt("fire-js","")}tR("");function hm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function O0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nR=O0,x0=new zi("auth","Firebase",O0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new sd("@firebase/auth");function rR(t,...e){Tc.logLevel<=we.WARN&&Tc.warn(`Auth (${bs}): ${t}`,...e)}function zu(t,...e){Tc.logLevel<=we.ERROR&&Tc.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,...e){throw fm(t,...e)}function dr(t,...e){return fm(t,...e)}function M0(t,e,n){const r=Object.assign(Object.assign({},nR()),{[e]:n});return new zi("auth","Firebase",r).create(e,{appName:t.name})}function Ti(t){return M0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x0.create(t,...e)}function ce(t,e,...n){if(!t)throw fm(e,...n)}function Pr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zu(e),new Error(e)}function Fr(t,e){t||Pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iR(){return lv()==="http:"||lv()==="https:"}function lv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||k0()||"connection"in navigator)?navigator.onLine:!0}function oR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fr(n>e,"Short delay should be less than long delay!"),this.isMobile=Dk()||Mk()}get(){return sR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){Fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uR=new Nl(3e4,6e4);function Ds(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,r,i={}){return V0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Rl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return xk()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&$r(t.emulatorConfig.host)&&(c.credentials="include"),L0.fetch()(await F0(t,t.config.apiHost,n,l),c)})}async function V0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aR),e);try{const i=new dR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _u(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _u(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _u(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _u(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw M0(t,f,c);Zn(t,f)}}catch(i){if(i instanceof In)throw i;Zn(t,"network-request-failed",{message:String(i)})}}async function ad(t,e,n,r,i={}){const s=await $i(t,e,n,r,i);return"mfaPendingCredential"in s&&Zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function F0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?pm(t.config,i):`${t.config.apiScheme}://${i}`;return lR.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function cR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),uR.get())})}}function _u(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dr(t,e,r);return i.customData._tokenResponse=n,i}function uv(t){return t!==void 0&&t.enterprise!==void 0}class hR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fR(t,e){return $i(t,"GET","/v2/recaptchaConfig",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function Ic(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mR(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=mm(r);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ua(vh(i.auth_time)),issuedAtTime:Ua(vh(i.iat)),expirationTime:Ua(vh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vh(t){return Number(t)*1e3}function mm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return zu("JWT malformed, contained fewer than 3 sections"),null;try{const i=w0(n);return i?JSON.parse(i):(zu("Failed to decode base64 JWT payload"),null)}catch(i){return zu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cv(t){const e=mm(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&gR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cl(t,Ic(n,{idToken:r}));ce(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?U0(s.providerUserInfo):[],l=_R(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Uf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function vR(t){const e=Oe(t);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _R(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U0(t){return t.map(e=>{var{providerId:n}=e,r=hm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){const n=await V0(t,{},async()=>{const r=Rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await F0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&$r(t.emulatorConfig.host)&&(u.credentials="include"),L0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wR(t,e){return $i(t,"POST","/v2/accounts:revokeToken",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=cv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ER(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Eo;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cl(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mR(this,e)}reload(){return vR(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mn(this.auth.app))return Promise.reject(Ti(this.auth));const e=await this.getIdToken();return await cl(this,pR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:M,isAnonymous:q,providerData:z,stsTokenManager:w}=n;ce(k&&w,e,"internal-error");const v=Eo.fromJSON(this.name,w);ce(typeof k=="string",e,"internal-error"),Xr(m,e.name),Xr(g,e.name),ce(typeof M=="boolean",e,"internal-error"),ce(typeof q=="boolean",e,"internal-error"),Xr(S,e.name),Xr(P,e.name),Xr(D,e.name),Xr(L,e.name),Xr(A,e.name),Xr(_,e.name);const E=new Qn({uid:k,auth:e,email:g,emailVerified:M,displayName:m,isAnonymous:q,photoURL:P,phoneNumber:S,tenantId:D,stsTokenManager:v,createdAt:A,lastLoginAt:_});return z&&Array.isArray(z)&&(E.providerData=z.map(T=>Object.assign({},T))),L&&(E._redirectEventId=L),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Eo;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?U0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Eo;l.updateFromIdToken(r);const u=new Qn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function Nr(t){Fr(t instanceof Function,"Expected a class definition");let e=dv.get(t);return e?(Fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z0.type="NONE";const hv=z0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e,n){return`firebase:${t}:${e}:${n}`}class wo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ic(this.auth,{idToken:e}).catch(()=>{});return n?Qn._fromGetAccountInfoResponse(this.auth,n,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wo(Nr(hv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nr(hv);const o=Bu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await Ic(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Qn._fromGetAccountInfoResponse(e,g,f)}else m=Qn._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new wo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(K0(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||j0(e))&&!e.includes("edge/"))return"Chrome";if(q0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B0(t=qt()){return/firefox\//i.test(t)}function $0(t=qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j0(t=qt()){return/crios\//i.test(t)}function H0(t=qt()){return/iemobile/i.test(t)}function q0(t=qt()){return/android/i.test(t)}function W0(t=qt()){return/blackberry/i.test(t)}function K0(t=qt()){return/webos/i.test(t)}function gm(t=qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TR(t=qt()){var e;return gm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IR(){return Lk()&&document.documentMode===10}function G0(t=qt()){return gm(t)||q0(t)||K0(t)||W0(t)||/windows phone/i.test(t)||H0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e=[]){let n;switch(t){case"Browser":n=fv(qt());break;case"Worker":n=`${fv(qt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e={}){return $i(t,"GET","/v2/passwordPolicy",Ds(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=6;class CR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pv(this),this.idTokenSubscription=new pv(this),this.beforeStateQueue=new SR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ic(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mn(this.app))return Promise.reject(Ti(this));const n=e?Oe(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mn(this.app)?Promise.reject(Ti(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mn(this.app)?Promise.reject(Ti(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AR(this),n=new CR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nr(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jo(t){return Oe(t)}class pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=$k(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PR(t){ld=t}function X0(t){return ld.loadJS(t)}function NR(){return ld.recaptchaEnterpriseScript}function bR(){return ld.gapiScript}function DR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class OR{constructor(){this.enterprise=new xR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class xR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const MR="recaptcha-enterprise",Y0="NO_RECAPTCHA";class LR{constructor(e){this.type=MR,this.auth=jo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{fR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new hR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;uv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Y0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&uv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=NR();u.length!==0&&(u+=l),X0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function mv(t,e,n,r=!1,i=!1){const s=new LR(t);let o;if(i)o=Y0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gv(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ws(s,e??{}))return i;Zn(i,"already-initialized")}return n.initialize({options:e})}function FR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UR(t,e,n){const r=jo(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=J0(e),{host:o,port:l}=zR(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(ws(c,r.config.emulator)&&ws(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,$r(o)?(rd(`${s}//${o}${u}`),id("Auth",!0)):BR()}function J0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zR(t){const e=J0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yv(o)}}}function yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,n){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function $R(t,e){return $i(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e){return ad(t,"POST","/v1/accounts:signInWithPassword",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){return ad(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}async function qR(t,e){return ad(t,"POST","/v1/accounts:signInWithEmailLink",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends ym{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new dl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new dl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gv(e,n,"signInWithPassword",jR);case"emailLink":return HR(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gv(e,r,"signUpPassword",$R);case"emailLink":return qR(e,{idToken:n,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t,e){return ad(t,"POST","/v1/accounts:signInWithIdp",Ds(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="http://localhost";class Ts extends ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return To(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,To(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,To(e,n)}buildRequest(){const e={requestUri:WR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GR(t){const e=Ia(Sa(t)).link,n=e?Ia(Sa(e)).deep_link_id:null,r=Ia(Sa(t)).deep_link_id;return(r?Ia(Sa(r)).link:null)||r||n||e||t}class vm{constructor(e){var n,r,i,s,o,l;const u=Ia(Sa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=KR((i=u.mode)!==null&&i!==void 0?i:null);ce(c&&f&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=GR(e);try{return new vm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,n){return dl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vm.parseLink(n);return ce(r,"argument-error"),dl._fromEmailAndCode(e,r.code,r.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends Z0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends bl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends bl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.GITHUB_SIGN_IN_METHOD="github.com";ai.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends bl{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return li.credential(n,r)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=vv(r);return new Do({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vv(r);return new Do({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends In{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ac(e,n,r,i)}}function eT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(t,s,e,r):s})}async function QR(t,e,n=!1){const r=await cl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Do._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e,n=!1){const{auth:r}=t;if(mn(r.app))return Promise.reject(Ti(r));const i="reauthenticate";try{const s=await cl(t,eT(r,i,e,t),n);ce(s.idToken,r,"internal-error");const o=mm(s.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Do._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t,e,n=!1){if(mn(t.app))return Promise.reject(Ti(t));const r="signIn",i=await eT(t,r,e),s=await Do._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YR(t,e){return tT(jo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t){const e=jo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ZR(t,e,n){return mn(t.app)?Promise.reject(Ti(t)):YR(Oe(t),Ho.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JR(t),r})}function eP(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function tP(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function nP(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function rP(t){return Oe(t).signOut()}const kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=1e3,sP=10;class rT extends nT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rT.type="LOCAL";const oP=rT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT extends nT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iT.type="SESSION";const sT=iT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ud(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await aP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ud.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=_m("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function uP(t){hr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function cP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hP(){return oT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="firebaseLocalStorageDb",fP=1,Cc="firebaseLocalStorage",lT="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cd(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function pP(){const t=indexedDB.deleteDatabase(aT);return new Dl(t).toPromise()}function zf(){const t=indexedDB.open(aT,fP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cc,{keyPath:lT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cc)?e(r):(r.close(),await pP(),e(await zf()))})})}async function _v(t,e,n){const r=cd(t,!0).put({[lT]:e,value:n});return new Dl(r).toPromise()}async function mP(t,e){const n=cd(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function Ev(t,e){const n=cd(t,!0).delete(e);return new Dl(n).toPromise()}const gP=800,yP=3;class uT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ud._getInstance(hP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cP(),!this.activeServiceWorker)return;this.sender=new lP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zf();return await _v(e,kc,"1"),await Ev(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ev(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cd(i,!1).getAll();return new Dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uT.type="LOCAL";const vP=uT;new Nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e){return e?Nr(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return To(e,this._buildIdpRequest())}_linkToIdToken(e,n){return To(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return To(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EP(t){return tT(t.auth,new Em(t),t.bypassAuthState)}function wP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),XR(n,new Em(t),t.bypassAuthState)}async function TP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),QR(n,new Em(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EP;case"linkViaPopup":case"linkViaRedirect":return TP;case"reauthViaPopup":case"reauthViaRedirect":return wP;default:Zn(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=new Nl(2e3,1e4);class fo extends cT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IP.get())};e()}}fo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="pendingRedirect",$u=new Map;class AP extends cT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$u.get(this.auth._key());if(!e){try{const r=await kP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$u.set(this.auth._key(),e)}return this.bypassAuthState||$u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kP(t,e){const n=PP(e),r=RP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CP(t,e){$u.set(t._key(),e)}function RP(t){return Nr(t._redirectPersistence)}function PP(t){return Bu(SP,t.config.apiKey,t.name)}async function NP(t,e,n=!1){if(mn(t.app))return Promise.reject(Ti(t));const r=jo(t),i=_P(r,e),o=await new AP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=10*60*1e3;class DP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bP&&this.cachedEventUids.clear(),this.cachedEventUids.has(wv(e))}saveEventToCache(e){this.cachedEventUids.add(wv(e)),this.lastProcessedEventTime=Date.now()}}function wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LP=/^https?/;async function VP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xP(t);for(const n of e)try{if(FP(n))return}catch{}Zn(t,"unauthorized-domain")}function FP(t){const e=Ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LP.test(n))return!1;if(MP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new Nl(3e4,6e4);function Tv(){const t=hr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zP(t){return new Promise((e,n)=>{var r,i,s;function o(){Tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tv(),n(dr(t,"network-request-failed"))},timeout:UP.get()})}if(!((i=(r=hr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hr().gapi)===null||s===void 0)&&s.load)o();else{const l=DR("iframefcb");return hr()[l]=()=>{gapi.load?o():n(dr(t,"network-request-failed"))},X0(`${bR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ju=null,e})}let ju=null;function BP(t){return ju=ju||zP(t),ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Nl(5e3,15e3),jP="__/auth/iframe",HP="emulator/auth/iframe",qP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KP(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pm(e,HP):`https://${t.config.authDomain}/${jP}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=WP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rl(r).slice(1)}`}async function GP(t){const e=await BP(t),n=hr().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:KP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dr(t,"network-request-failed"),l=hr().setTimeout(()=>{s(o)},$P.get());function u(){hr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XP=500,YP=600,JP="_blank",ZP="http://localhost";class Iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eN(t,e,n,r=XP,i=YP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},QP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=qt().toLowerCase();n&&(l=j0(c)?JP:n),B0(c)&&(e=e||ZP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,P])=>`${g}${S}=${P},`,"");if(TR(c)&&l!=="_self")return tN(e||"",l),new Iv(null);const m=window.open(e||"",l,f);ce(m,t,"popup-blocked");try{m.focus()}catch{}return new Iv(m)}function tN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="__/auth/handler",rN="emulator/auth/handler",iN=encodeURIComponent("fac");async function Sv(t,e,n,r,i,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof Z0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof bl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${iN}=${encodeURIComponent(u)}`:"";return`${sN(t)}?${Rl(l).slice(1)}${c}`}function sN({config:t}){return t.emulator?pm(t,rN):`https://${t.authDomain}/${nN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="webStorageSupport";class oN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sT,this._completeRedirectFn=NP,this._overrideRedirectResult=CP}async _openPopup(e,n,r,i){var s;Fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sv(e,n,r,Ff(),i);return eN(e,o,_m())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sv(e,n,r,Ff(),i);return uP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GP(e),r=new DP(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_h];o!==void 0&&n(!!o),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G0()||$0()||gm()}}const aN=oN;var Av="@firebase/auth",kv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cN(t){cn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q0(t)},c=new RR(r,i,s,u);return FR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Xt("auth-internal",e=>{const n=jo(e.getProvider("auth").getImmediate());return(r=>new lN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(Av,kv,uN(t)),kt(Av,kv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=5*60,hN=S0("authIdTokenMaxAge")||dN;let Cv=null;const fN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hN)return;const i=n==null?void 0:n.token;Cv!==i&&(Cv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pN(t=Pl()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VR(t,{popupRedirectResolver:aN,persistence:[vP,oP,sT]}),r=S0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fN(s.toString());tP(n,o,()=>o(n.currentUser)),eP(n,l=>o(l))}}const i=T0("auth");return i&&UR(n,`http://${i}`),n}function mN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cN("Browser");var Rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ii,hT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.D=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(T,R,N){for(var I=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)I[Ne-2]=arguments[Ne];return v.prototype[R].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,E){E||(E=0);var T=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)T[R]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(R=0;16>R;++R)T[R]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],R=w.g[2];var N=w.g[3],I=v+(N^E&(R^N))+T[0]+3614090360&4294967295;v=E+(I<<7&4294967295|I>>>25),I=N+(R^v&(E^R))+T[1]+3905402710&4294967295,N=v+(I<<12&4294967295|I>>>20),I=R+(E^N&(v^E))+T[2]+606105819&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(v^R&(N^v))+T[3]+3250441966&4294967295,E=R+(I<<22&4294967295|I>>>10),I=v+(N^E&(R^N))+T[4]+4118548399&4294967295,v=E+(I<<7&4294967295|I>>>25),I=N+(R^v&(E^R))+T[5]+1200080426&4294967295,N=v+(I<<12&4294967295|I>>>20),I=R+(E^N&(v^E))+T[6]+2821735955&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(v^R&(N^v))+T[7]+4249261313&4294967295,E=R+(I<<22&4294967295|I>>>10),I=v+(N^E&(R^N))+T[8]+1770035416&4294967295,v=E+(I<<7&4294967295|I>>>25),I=N+(R^v&(E^R))+T[9]+2336552879&4294967295,N=v+(I<<12&4294967295|I>>>20),I=R+(E^N&(v^E))+T[10]+4294925233&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(v^R&(N^v))+T[11]+2304563134&4294967295,E=R+(I<<22&4294967295|I>>>10),I=v+(N^E&(R^N))+T[12]+1804603682&4294967295,v=E+(I<<7&4294967295|I>>>25),I=N+(R^v&(E^R))+T[13]+4254626195&4294967295,N=v+(I<<12&4294967295|I>>>20),I=R+(E^N&(v^E))+T[14]+2792965006&4294967295,R=N+(I<<17&4294967295|I>>>15),I=E+(v^R&(N^v))+T[15]+1236535329&4294967295,E=R+(I<<22&4294967295|I>>>10),I=v+(R^N&(E^R))+T[1]+4129170786&4294967295,v=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(v^E))+T[6]+3225465664&4294967295,N=v+(I<<9&4294967295|I>>>23),I=R+(v^E&(N^v))+T[11]+643717713&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^v&(R^N))+T[0]+3921069994&4294967295,E=R+(I<<20&4294967295|I>>>12),I=v+(R^N&(E^R))+T[5]+3593408605&4294967295,v=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(v^E))+T[10]+38016083&4294967295,N=v+(I<<9&4294967295|I>>>23),I=R+(v^E&(N^v))+T[15]+3634488961&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^v&(R^N))+T[4]+3889429448&4294967295,E=R+(I<<20&4294967295|I>>>12),I=v+(R^N&(E^R))+T[9]+568446438&4294967295,v=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(v^E))+T[14]+3275163606&4294967295,N=v+(I<<9&4294967295|I>>>23),I=R+(v^E&(N^v))+T[3]+4107603335&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^v&(R^N))+T[8]+1163531501&4294967295,E=R+(I<<20&4294967295|I>>>12),I=v+(R^N&(E^R))+T[13]+2850285829&4294967295,v=E+(I<<5&4294967295|I>>>27),I=N+(E^R&(v^E))+T[2]+4243563512&4294967295,N=v+(I<<9&4294967295|I>>>23),I=R+(v^E&(N^v))+T[7]+1735328473&4294967295,R=N+(I<<14&4294967295|I>>>18),I=E+(N^v&(R^N))+T[12]+2368359562&4294967295,E=R+(I<<20&4294967295|I>>>12),I=v+(E^R^N)+T[5]+4294588738&4294967295,v=E+(I<<4&4294967295|I>>>28),I=N+(v^E^R)+T[8]+2272392833&4294967295,N=v+(I<<11&4294967295|I>>>21),I=R+(N^v^E)+T[11]+1839030562&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^v)+T[14]+4259657740&4294967295,E=R+(I<<23&4294967295|I>>>9),I=v+(E^R^N)+T[1]+2763975236&4294967295,v=E+(I<<4&4294967295|I>>>28),I=N+(v^E^R)+T[4]+1272893353&4294967295,N=v+(I<<11&4294967295|I>>>21),I=R+(N^v^E)+T[7]+4139469664&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^v)+T[10]+3200236656&4294967295,E=R+(I<<23&4294967295|I>>>9),I=v+(E^R^N)+T[13]+681279174&4294967295,v=E+(I<<4&4294967295|I>>>28),I=N+(v^E^R)+T[0]+3936430074&4294967295,N=v+(I<<11&4294967295|I>>>21),I=R+(N^v^E)+T[3]+3572445317&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^v)+T[6]+76029189&4294967295,E=R+(I<<23&4294967295|I>>>9),I=v+(E^R^N)+T[9]+3654602809&4294967295,v=E+(I<<4&4294967295|I>>>28),I=N+(v^E^R)+T[12]+3873151461&4294967295,N=v+(I<<11&4294967295|I>>>21),I=R+(N^v^E)+T[15]+530742520&4294967295,R=N+(I<<16&4294967295|I>>>16),I=E+(R^N^v)+T[2]+3299628645&4294967295,E=R+(I<<23&4294967295|I>>>9),I=v+(R^(E|~N))+T[0]+4096336452&4294967295,v=E+(I<<6&4294967295|I>>>26),I=N+(E^(v|~R))+T[7]+1126891415&4294967295,N=v+(I<<10&4294967295|I>>>22),I=R+(v^(N|~E))+T[14]+2878612391&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~v))+T[5]+4237533241&4294967295,E=R+(I<<21&4294967295|I>>>11),I=v+(R^(E|~N))+T[12]+1700485571&4294967295,v=E+(I<<6&4294967295|I>>>26),I=N+(E^(v|~R))+T[3]+2399980690&4294967295,N=v+(I<<10&4294967295|I>>>22),I=R+(v^(N|~E))+T[10]+4293915773&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~v))+T[1]+2240044497&4294967295,E=R+(I<<21&4294967295|I>>>11),I=v+(R^(E|~N))+T[8]+1873313359&4294967295,v=E+(I<<6&4294967295|I>>>26),I=N+(E^(v|~R))+T[15]+4264355552&4294967295,N=v+(I<<10&4294967295|I>>>22),I=R+(v^(N|~E))+T[6]+2734768916&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~v))+T[13]+1309151649&4294967295,E=R+(I<<21&4294967295|I>>>11),I=v+(R^(E|~N))+T[4]+4149444226&4294967295,v=E+(I<<6&4294967295|I>>>26),I=N+(E^(v|~R))+T[11]+3174756917&4294967295,N=v+(I<<10&4294967295|I>>>22),I=R+(v^(N|~E))+T[2]+718787259&4294967295,R=N+(I<<15&4294967295|I>>>17),I=E+(N^(R|~v))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var E=v-this.blockSize,T=this.B,R=this.h,N=0;N<v;){if(R==0)for(;N<=E;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<v;)if(T[R++]=w.charCodeAt(N++),R==this.blockSize){i(this,T),R=0;break}}else for(;N<v;)if(T[R++]=w[N++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var E=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=E&255,E/=256;for(this.u(w),w=Array(16),v=E=0;4>v;++v)for(var T=0;32>T;T+=8)w[E++]=this.g[v]>>>T&255;return w};function s(w,v){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function o(w,v){this.h=v;for(var E=[],T=!0,R=w.length-1;0<=R;R--){var N=w[R]|0;T&&N==v||(E[R]=N,T=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return L(c(-w));for(var v=[],E=1,T=0;w>=E;T++)v[T]=w/E|0,E*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return L(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(v,8)),T=m,R=0;R<w.length;R+=8){var N=Math.min(8,w.length-R),I=parseInt(w.substring(R,R+N),v);8>N?(N=c(Math.pow(v,N)),T=T.j(N).add(c(I))):(T=T.j(E),T=T.add(c(I)))}return T}var m=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();for(var w=0,v=1,E=0;E<this.g.length;E++){var T=this.i(E);w+=(0<=T?T:4294967296+T)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(D(this))return"-"+L(this).toString(w);for(var v=c(Math.pow(w,6)),E=this,T="";;){var R=M(E,v).g;E=A(E,R.j(v));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,P(E))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=A(this,w),D(w)?-1:P(w)?0:1};function L(w){for(var v=w.g.length,E=[],T=0;T<v;T++)E[T]=~w.g[T];return new o(E,~w.h).add(g)}t.abs=function(){return D(this)?L(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0,R=0;R<=v;R++){var N=T+(this.i(R)&65535)+(w.i(R)&65535),I=(N>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);T=I>>>16,N&=65535,I&=65535,E[R]=I<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function A(w,v){return w.add(L(v))}t.j=function(w){if(P(this)||P(w))return m;if(D(this))return D(w)?L(this).j(L(w)):L(L(this).j(w));if(D(w))return L(this.j(L(w)));if(0>this.l(S)&&0>w.l(S))return c(this.m()*w.m());for(var v=this.g.length+w.g.length,E=[],T=0;T<2*v;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<w.g.length;R++){var N=this.i(T)>>>16,I=this.i(T)&65535,Ne=w.i(R)>>>16,ue=w.i(R)&65535;E[2*T+2*R]+=I*ue,_(E,2*T+2*R),E[2*T+2*R+1]+=N*ue,_(E,2*T+2*R+1),E[2*T+2*R+1]+=I*Ne,_(E,2*T+2*R+1),E[2*T+2*R+2]+=N*Ne,_(E,2*T+2*R+2)}for(T=0;T<v;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=v;T<2*v;T++)E[T]=0;return new o(E,0)};function _(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function k(w,v){this.g=w,this.h=v}function M(w,v){if(P(v))throw Error("division by zero");if(P(w))return new k(m,m);if(D(w))return v=M(L(w),v),new k(L(v.g),L(v.h));if(D(v))return v=M(w,L(v)),new k(L(v.g),v.h);if(30<w.g.length){if(D(w)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=v;0>=T.l(w);)E=q(E),T=q(T);var R=z(E,1),N=z(T,1);for(T=z(T,2),E=z(E,2);!P(T);){var I=N.add(T);0>=I.l(w)&&(R=R.add(E),N=I),T=z(T,1),E=z(E,1)}return v=A(w,R.j(v)),new k(R,v)}for(R=m;0<=w.l(v);){for(E=Math.max(1,Math.floor(w.m()/v.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=c(E),I=N.j(v);D(I)||0<I.l(w);)E-=T,N=c(E),I=N.j(v);P(N)&&(N=g),R=R.add(N),w=A(w,I)}return new k(R,w)}t.A=function(w){return M(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)&w.i(T);return new o(E,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)|w.i(T);return new o(E,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],T=0;T<v;T++)E[T]=this.i(T)^w.i(T);return new o(E,this.h^w.h)};function q(w){for(var v=w.g.length+1,E=[],T=0;T<v;T++)E[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(E,w.h)}function z(w,v){var E=v>>5;v%=32;for(var T=w.g.length-E,R=[],N=0;N<T;N++)R[N]=0<v?w.i(N+E)>>>v|w.i(N+E+1)<<32-v:w.i(N+E);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,hT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ii=o}).apply(typeof Rv<"u"?Rv:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fT,Aa,pT,Hu,Bf,mT,gT,yT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var x=a[y];if(!(x in p))break e;p=p[x]}a=a[a.length-1],y=p[a],d=d(y),d!=y&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,y=!1,x={next:function(){if(!y&&p<a.length){var V=p++;return{value:d(V,a[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,y),a.apply(d,x)}}return function(){return a.apply(d,arguments)}}function g(a,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function S(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function P(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,x,V){for(var Q=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Q[Fe-2]=arguments[Fe];return d.prototype[x].apply(y,Q)}}function D(a){const d=a.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=a[y];return p}return[]}function L(a,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const x=a.length||0,V=y.length||0;a.length=x+V;for(let Q=0;Q<V;Q++)a[x+Q]=y[Q]}else a.push(y)}}class A{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var q=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function z(a,d,p){for(const y in a)d.call(p,a[y],y,a)}function w(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function v(a){const d={};for(const p in a)d[p]=a[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,d){let p,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(p in y)a[p]=y[p];for(let V=0;V<E.length;V++)p=E[V],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function R(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function I(){var a=j;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Ne{constructor(){this.h=this.g=null}add(d,p){const y=ue.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ue=new A(()=>new _e,a=>a.reset());class _e{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,O=!1,j=new Ne,K=()=>{const a=l.Promise.resolve(void 0);ze=()=>{a.then(ne)}};var ne=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(p){N(p)}var d=ue;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}O=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Y(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var ie=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,d),l.removeEventListener("test",p,d)}catch{}return a}();function Ke(a,d){if(Y.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(q){e:{try{M(d.nodeName);var x=!0;break e}catch{}x=!1}x||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ke[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ke.aa.h.call(this)}}P(Ke,Y);var ke={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var me="closure_listenable_"+(1e6*Math.random()|0),Zt=0;function jr(a,d,p,y,x){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=x,this.key=++Zt,this.da=this.fa=!1}function vt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function dt(a){this.src=a,this.g={},this.h=0}dt.prototype.add=function(a,d,p,y,x){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var Q=An(a,d,y,x);return-1<Q?(d=a[Q],p||(d.fa=!1)):(d=new jr(d,this.src,V,!!y,x),d.fa=p,a.push(d)),d};function Sn(a,d){var p=d.type;if(p in a.g){var y=a.g[p],x=Array.prototype.indexOf.call(y,d,void 0),V;(V=0<=x)&&Array.prototype.splice.call(y,x,1),V&&(vt(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function An(a,d,p,y){for(var x=0;x<a.length;++x){var V=a[x];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==y)return x}return-1}var dn="closure_lm_"+(1e6*Math.random()|0),Fn={};function Un(a,d,p,y,x){if(Array.isArray(d)){for(var V=0;V<d.length;V++)Un(a,d[V],p,y,x);return null}return p=xe(p),a&&a[me]?a.K(d,p,c(y)?!!y.capture:!1,x):Hr(a,d,p,!1,y,x)}function Hr(a,d,p,y,x,V){if(!d)throw Error("Invalid event type");var Q=c(x)?!!x.capture:!!x,Fe=b(a);if(Fe||(a[dn]=Fe=new dt(a)),p=Fe.add(d,p,y,Q,V),p.proxy)return p;if(y=$(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)ie||(x=Q),x===void 0&&(x=!1),a.addEventListener(d.toString(),y,x);else if(a.attachEvent)a.attachEvent(ae(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $(){function a(p){return d.call(a.src,a.listener,p)}const d=_t;return a}function ye(a,d,p,y,x){if(Array.isArray(d))for(var V=0;V<d.length;V++)ye(a,d[V],p,y,x);else y=c(y)?!!y.capture:!!y,p=xe(p),a&&a[me]?(a=a.i,d=String(d).toString(),d in a.g&&(V=a.g[d],p=An(V,p,y,x),-1<p&&(vt(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[d],a.h--)))):a&&(a=b(a))&&(d=a.g[d.toString()],a=-1,d&&(a=An(d,p,y,x)),(p=-1<a?d[a]:null)&&Re(p))}function Re(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[me])Sn(d.i,a);else{var p=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(p,y,a.capture):d.detachEvent?d.detachEvent(ae(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=b(d))?(Sn(p,a),p.h==0&&(p.src=null,d[dn]=null)):vt(a)}}}function ae(a){return a in Fn?Fn[a]:Fn[a]="on"+a}function _t(a,d){if(a.da)a=!0;else{d=new Ke(d,this);var p=a.listener,y=a.ha||a.src;a.fa&&Re(a),a=p.call(y,d)}return a}function b(a){return a=a[dn],a instanceof dt?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(a){return typeof a=="function"?a:(a[le]||(a[le]=function(d){return a.handleEvent(d)}),a[le])}function Ee(){J.call(this),this.i=new dt(this),this.M=this,this.F=null}P(Ee,J),Ee.prototype[me]=!0,Ee.prototype.removeEventListener=function(a,d,p,y){ye(this,a,d,p,y)};function Ye(a,d){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new Y(d,a);else if(d instanceof Y)d.target=d.target||a;else{var x=d;d=new Y(y,a),T(d,x)}if(x=!0,p)for(var V=p.length-1;0<=V;V--){var Q=d.g=p[V];x=hn(Q,y,!0,d)&&x}if(Q=d.g=a,x=hn(Q,y,!0,d)&&x,x=hn(Q,y,!1,d)&&x,p)for(V=0;V<p.length;V++)Q=d.g=p[V],x=hn(Q,y,!1,d)&&x}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],y=0;y<p.length;y++)vt(p[y]);delete a.g[d],a.h--}}this.F=null},Ee.prototype.K=function(a,d,p,y){return this.i.add(String(a),d,!1,p,y)},Ee.prototype.L=function(a,d,p,y){return this.i.add(String(a),d,!0,p,y)};function hn(a,d,p,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var x=!0,V=0;V<d.length;++V){var Q=d[V];if(Q&&!Q.da&&Q.capture==p){var Fe=Q.listener,Ct=Q.ha||Q.src;Q.fa&&Sn(a.i,Q),x=Fe.call(Ct,y)!==!1&&x}}return x&&!y.defaultPrevented}function qi(a,d,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:l.setTimeout(a,d||0)}function ht(a){a.g=qi(()=>{a.g=null,a.i&&(a.i=!1,ht(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class qr extends J{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ht(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(a){J.call(this),this.h=a,this.g={}}P(_r,J);var Xo=[];function Ls(a){z(a.g,function(d,p){this.g.hasOwnProperty(p)&&Re(d)},a),a.g={}}_r.prototype.N=function(){_r.aa.N.call(this),Ls(this)},_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wi=l.JSON.stringify,Yo=l.JSON.parse,Jo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Vs(){}Vs.prototype.h=null;function Ki(a){return a.h||(a.h=a.i())}function Fs(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gi(){Y.call(this,"d")}P(Gi,Y);function Us(){Y.call(this,"c")}P(Us,Y);var zn={},Zo=null;function Qi(){return Zo=Zo||new Ee}zn.La="serverreachability";function ea(a){Y.call(this,zn.La,a)}P(ea,Y);function kn(a){const d=Qi();Ye(d,new ea(d))}zn.STAT_EVENT="statevent";function Wr(a,d){Y.call(this,zn.STAT_EVENT,a),this.stat=d}P(Wr,Y);function Je(a){const d=Qi();Ye(d,new Wr(d,a))}zn.Ma="timingevent";function Xi(a,d){Y.call(this,zn.Ma,a),this.size=d}P(Xi,Y);function Yi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},d)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function zl(a,d,p,y,x,V){a.info(function(){if(a.g)if(V)for(var Q="",Fe=V.split("&"),Ct=0;Ct<Fe.length;Ct++){var Ce=Fe[Ct].split("=");if(1<Ce.length){var Mt=Ce[0];Ce=Ce[1];var Lt=Mt.split("_");Q=2<=Lt.length&&Lt[1]=="type"?Q+(Mt+"="+Ce+"&"):Q+(Mt+"=redacted&")}}else Q=null;else Q=V;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+d+`
`+p+`
`+Q})}function bd(a,d,p,y,x,V,Q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+d+`
`+p+`
`+V+" "+Q})}function Cn(a,d,p,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+es(a,p)+(y?" "+y:"")})}function Zi(a,d){a.info(function(){return"TIMEOUT: "+d})}Ji.prototype.info=function(){};function es(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var x=y[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var Q=1;Q<x.length;Q++)x[Q]=""}}}}return Wi(p)}catch{return d}}var zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ta;function ts(){}P(ts,Vs),ts.prototype.g=function(){return new XMLHttpRequest},ts.prototype.i=function(){return{}},ta=new ts;function tr(a,d,p,y){this.j=a,this.i=d,this.l=p,this.R=y||1,this.U=new _r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $l}function $l(){this.i=null,this.g="",this.h=!1}var Bs={},na={};function ra(a,d,p){a.L=1,a.v=Le($n(d)),a.m=p,a.P=!0,jl(a,null)}function jl(a,d){a.F=Date.now(),$s(a),a.A=$n(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),_g(p.i,"t",y),a.C=0,p=a.j.J,a.h=new $l,a.g=Vg(a.j,p?d:null,!a.m),0<a.O&&(a.M=new qr(g(a.Y,a,a.g),a.O)),d=a.U,p=a.g,y=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Xo[0]=x.toString()),x=Xo);for(var V=0;V<x.length;V++){var Q=Un(p,x[V],y||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),kn(),zl(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const d=this.M;d&&Tr(a)==3?d.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const Lt=Tr(this.g);var d=this.g.Ba();const Ks=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||kg(this.g)))){this.J||Lt!=4||d==7||(d==8||0>=Ks?kn(3):kn(2)),ia(this);var p=this.g.Z();this.X=p;t:if(Hl(this)){var y=kg(this.g);a="";var x=y.length,V=Tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){H(this),C(this);var Q="";break t}this.h.i=new l.TextDecoder}for(d=0;d<x;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(V&&d==x-1)});y.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=p==200,bd(this.i,this.u,this.A,this.l,this.R,Lt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Ct=this.g;if((Fe=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Fe)){var Ce=Fe;break t}}Ce=null}if(p=Ce)Cn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,X(this,p);else{this.o=!1,this.s=3,Je(12),H(this),C(this);break e}}if(this.P){p=!0;let Hn;for(;!this.J&&this.C<Q.length;)if(Hn=Dd(this,Q),Hn==na){Lt==4&&(this.s=4,Je(14),p=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(Hn==Bs){this.s=4,Je(15),Cn(this.i,this.l,Q,"[Invalid Chunk]"),p=!1;break}else Cn(this.i,this.l,Hn,null),X(this,Hn);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||Q.length!=0||this.h.h||(this.s=1,Je(16),p=!1),this.o=this.o&&p,!p)Cn(this.i,this.l,Q,"[Invalid Chunked Response]"),H(this),C(this);else if(0<Q.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Fd(Mt),Mt.M=!0,Je(11))}}else Cn(this.i,this.l,Q,null),X(this,Q);Lt==4&&H(this),this.o&&!this.J&&(Lt==4?Og(this.j,this):(this.o=!1,$s(this)))}else JS(this.g),p==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),H(this),C(this)}}}catch{}finally{}};function Hl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Dd(a,d){var p=a.C,y=d.indexOf(`
`,p);return y==-1?na:(p=Number(d.substring(p,y)),isNaN(p)?Bs:(y+=1,y+p>d.length?na:(d=d.slice(y,y+p),a.C=y+p,d)))}tr.prototype.cancel=function(){this.J=!0,H(this)};function $s(a){a.S=Date.now()+a.I,ql(a,a.I)}function ql(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Yi(g(a.ba,a),d)}function ia(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Zi(this.i,this.A),this.L!=2&&(kn(),Je(17)),H(this),this.s=2,C(this)):ql(this,this.S-a)};function C(a){a.j.G==0||a.J||Og(a.j,a)}function H(a){ia(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ls(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function X(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||Ge(p.h,a))){if(!a.K&&Ge(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Zl(p),Yl(p);else break e;Vd(p),Je(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=Yi(g(p.Za,p),6e3));if(1>=Ve(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ns(p,11)}else if((a.K||p.g==a)&&Zl(p),!_(d))for(x=p.Da.g.parse(d),d=0;d<x.length;d++){let Ce=x[d];if(p.T=Ce[0],Ce=Ce[1],p.G==2)if(Ce[0]=="c"){p.K=Ce[1],p.ia=Ce[2];const Mt=Ce[3];Mt!=null&&(p.la=Mt,p.j.info("VER="+p.la));const Lt=Ce[4];Lt!=null&&(p.Aa=Lt,p.j.info("SVER="+p.Aa));const Ks=Ce[5];Ks!=null&&typeof Ks=="number"&&0<Ks&&(y=1.5*Ks,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Hn=a.g;if(Hn){const tu=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tu){var V=y.h;V.g||tu.indexOf("spdy")==-1&&tu.indexOf("quic")==-1&&tu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(re(V,V.h),V.h=null))}if(y.D){const Ud=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ud&&(y.ya=Ud,se(y.I,y.D,Ud))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var Q=a;if(y.qa=Lg(y,y.J?y.ia:null,y.W),Q.K){ft(y.h,Q);var Fe=Q,Ct=y.L;Ct&&(Fe.I=Ct),Fe.B&&(ia(Fe),$s(Fe)),y.g=Q}else bg(y);0<p.i.length&&Jl(p)}else Ce[0]!="stop"&&Ce[0]!="close"||ns(p,7);else p.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?ns(p,7):Ld(p):Ce[0]!="noop"&&p.l&&p.l.ta(Ce),p.v=0)}}kn(4)}catch{}}var Ie=class{constructor(a,d){this.g=a,this.map=d}};function be(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function G(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ve(a){return a.h?1:a.g?a.g.size:0}function Ge(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function re(a,d){a.g?a.g.add(d):a.h=d}function ft(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}be.prototype.cancel=function(){if(this.i=Bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bn(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return D(a.i)}function wr(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,y=0;y<p;y++)d.push(a[y]);return d}d=[],p=0;for(y in a)d[p++]=a[y];return d}function nr(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const y in a)d[p++]=y;return d}}}function rr(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=nr(a),y=wr(a),x=y.length,V=0;V<x;V++)d.call(void 0,y[V],p&&p[V],a)}var Ze=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Me(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),x=null;if(0<=y){var V=a[p].substring(0,y);x=a[p].substring(y+1)}else V=a[p];d(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Rn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rn){this.h=a.h,js(this,a.j),this.o=a.o,this.g=a.g,Hs(this,a.s),this.l=a.l;var d=a.i,p=new sa;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Wl(this,p),this.m=a.m}else a&&(d=String(a).match(Ze))?(this.h=!1,js(this,d[1]||"",!0),this.o=je(d[2]||""),this.g=je(d[3]||"",!0),Hs(this,d[4]),this.l=je(d[5]||"",!0),Wl(this,d[6]||"",!0),this.m=je(d[7]||"")):(this.h=!1,this.i=new sa(null,this.h))}Rn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(jn(d,Kl,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(jn(d,Kl,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(jn(p,p.charAt(0)=="/"?$S:xd,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",jn(p,HS)),a.join("")};function $n(a){return new Rn(a)}function js(a,d,p){a.j=p?je(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Hs(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Wl(a,d,p){d instanceof sa?(a.i=d,qS(a.i,a.h)):(p||(d=jn(d,jS)),a.i=new sa(d,a.h))}function se(a,d,p){a.i.set(d,p)}function Le(a){return se(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function je(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function jn(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Od),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Od(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Kl=/[#\/\?@]/g,xd=/[#\?:]/g,$S=/[#\?]/g,jS=/[#\?@]/g,HS=/#/g;function sa(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Kr(a){a.g||(a.g=new Map,a.h=0,a.i&&Me(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=sa.prototype,t.add=function(a,d){Kr(this),this.i=null,a=qs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function yg(a,d){Kr(a),d=qs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function vg(a,d){return Kr(a),d=qs(a,d),a.g.has(d)}t.forEach=function(a,d){Kr(this),this.g.forEach(function(p,y){p.forEach(function(x){a.call(d,x,y,this)},this)},this)},t.na=function(){Kr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const x=a[y];for(let V=0;V<x.length;V++)p.push(d[y])}return p},t.V=function(a){Kr(this);let d=[];if(typeof a=="string")vg(this,a)&&(d=d.concat(this.g.get(qs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},t.set=function(a,d){return Kr(this),this.i=null,a=qs(this,a),vg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function _g(a,d,p){yg(a,d),0<p.length&&(a.i=null,a.g.set(qs(a,d),D(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const V=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var x=V;Q[y]!==""&&(x+="="+encodeURIComponent(String(Q[y]))),a.push(x)}}return this.i=a.join("&")};function qs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function qS(a,d){d&&!a.j&&(Kr(a),a.i=null,a.g.forEach(function(p,y){var x=y.toLowerCase();y!=x&&(yg(this,y),_g(this,x,p))},a)),a.j=d}function WS(a,d){const p=new Ji;if(l.Image){const y=new Image;y.onload=S(Gr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=S(Gr,p,"TestLoadImage: error",!1,d,y),y.onabort=S(Gr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=S(Gr,p,"TestLoadImage: timeout",!1,d,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function KS(a,d){const p=new Ji,y=new AbortController,x=setTimeout(()=>{y.abort(),Gr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(x),V.ok?Gr(p,"TestPingServer: ok",!0,d):Gr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),Gr(p,"TestPingServer: error",!1,d)})}function Gr(a,d,p,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(p)}catch{}}function GS(){this.g=new Jo}function QS(a,d,p){const y=p||"";try{rr(a,function(x,V){let Q=x;c(x)&&(Q=Wi(x)),d.push(y+V+"="+encodeURIComponent(Q))})}catch(x){throw d.push(y+"type="+encodeURIComponent("_badmap")),x}}function Gl(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Gl,Vs),Gl.prototype.g=function(){return new Ql(this.l,this.j)},Gl.prototype.i=function(a){return function(){return a}}({});function Ql(a,d){Ee.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ql,Ee),t=Ql.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,aa(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||l).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oa(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?oa(this):aa(this),this.readyState==3&&Eg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,oa(this))},t.Qa=function(a){this.g&&(this.response=a,oa(this))},t.ga=function(){this.g&&oa(this)};function oa(a){a.readyState=4,a.l=null,a.j=null,a.v=null,aa(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function aa(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ql.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wg(a){let d="";return z(a,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Md(a,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=wg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):se(a,d,p))}function it(a){Ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(it,Ee);var XS=/^https?$/i,YS=["POST","PUT"];t=it.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ta.g(),this.v=this.o?Ki(this.o):Ki(ta),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){Tg(this,V);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)p.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())p.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(YS,d,void 0))||y||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,Q]of p)this.g.setRequestHeader(V,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ag(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Tg(this,V)}};function Tg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Ig(a),Xl(a)}function Ig(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ye(this,"complete"),Ye(this,"abort"),Xl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xl(this,!0)),it.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sg(this):this.bb())},t.bb=function(){Sg(this)};function Sg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tr(a)!=4||a.Z()!=2)){if(a.u&&Tr(a)==4)qi(a.Ea,0,a);else if(Ye(a,"readystatechange"),Tr(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=Q===0){var x=String(a.D).match(Ze)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),y=!XS.test(x?x.toLowerCase():"")}p=y}if(p)Ye(a,"complete"),Ye(a,"success");else{a.m=6;try{var V=2<Tr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Ig(a)}}finally{Xl(a)}}}}function Xl(a,d){if(a.g){Ag(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Ye(a,"ready");try{p.onreadystatechange=y}catch{}}}function Ag(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Yo(d)}};function kg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function JS(a){const d={};a=(a.g&&2<=Tr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var p=R(a[y]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[x]||[];d[x]=V,V.push(p)}w(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function la(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Cg(a){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=la("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=la("baseRetryDelayMs",5e3,a),this.cb=la("retryDelaySeedMs",1e4,a),this.Wa=la("forwardChannelMaxRetries",2,a),this.wa=la("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new be(a&&a.concurrentRequestLimit),this.Da=new GS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cg.prototype,t.la=8,t.G=1,t.connect=function(a,d,p,y){Je(0),this.W=a,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Lg(this,null,this.W),Jl(this)};function Ld(a){if(Rg(a),a.G==3){var d=a.U++,p=$n(a.I);if(se(p,"SID",a.K),se(p,"RID",d),se(p,"TYPE","terminate"),ua(a,p),d=new tr(a,a.j,d),d.L=2,d.v=Le($n(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=d.v,p=!0),p||(d.g=Vg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),$s(d)}Mg(a)}function Yl(a){a.g&&(Fd(a),a.g.cancel(),a.g=null)}function Rg(a){Yl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Zl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Jl(a){if(!G(a.h)&&!a.s){a.s=!0;var d=a.Ga;ze||K(),O||(ze(),O=!0),j.add(d,a),a.B=0}}function ZS(a,d){return Ve(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Yi(g(a.Ga,a,d),xg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new tr(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Ng(this,x,d),p=$n(this.I),se(p,"RID",a),se(p,"CVER",22),this.D&&se(p,"X-HTTP-Session-Id",this.D),ua(this,p),V&&(this.O?d="headers="+encodeURIComponent(String(wg(V)))+"&"+d:this.m&&Md(p,this.m,V)),re(this.h,x),this.Ua&&se(p,"TYPE","init"),this.P?(se(p,"$req",d),se(p,"SID","null"),x.T=!0,ra(x,p,null)):ra(x,p,d),this.G=2}}else this.G==3&&(a?Pg(this,a):this.i.length==0||G(this.h)||Pg(this))};function Pg(a,d){var p;d?p=d.l:p=a.U++;const y=$n(a.I);se(y,"SID",a.K),se(y,"RID",p),se(y,"AID",a.T),ua(a,y),a.m&&a.o&&Md(y,a.m,a.o),p=new tr(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Ng(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),re(a.h,p),ra(p,y,d)}function ua(a,d){a.H&&z(a.H,function(p,y){se(d,y,p)}),a.l&&rr({},function(p,y){se(d,y,p)})}function Ng(a,d,p){p=Math.min(a.i.length,p);var y=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let V=-1;for(;;){const Q=["count="+p];V==-1?0<p?(V=x[0].g,Q.push("ofs="+V)):V=0:Q.push("ofs="+V);let Fe=!0;for(let Ct=0;Ct<p;Ct++){let Ce=x[Ct].g;const Mt=x[Ct].map;if(Ce-=V,0>Ce)V=Math.max(0,x[Ct].g-100),Fe=!1;else try{QS(Mt,Q,"req"+Ce+"_")}catch{y&&y(Mt)}}if(Fe){y=Q.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,y}function bg(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ze||K(),O||(ze(),O=!0),j.add(d,a),a.v=0}}function Vd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Yi(g(a.Fa,a),xg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Dg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),Yl(this),Dg(this))};function Fd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Dg(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=$n(a.qa);se(d,"RID","rpc"),se(d,"SID",a.K),se(d,"AID",a.T),se(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&se(d,"TO",a.ja),se(d,"TYPE","xmlhttp"),ua(a,d),a.m&&a.o&&Md(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Le($n(d)),p.m=null,p.P=!0,jl(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Yl(this),Vd(this),Je(19))};function Zl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Og(a,d){var p=null;if(a.g==d){Zl(a),Fd(a),a.g=null;var y=2}else if(Ge(a.h,d))p=d.D,ft(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var x=a.B;y=Qi(),Ye(y,new Xi(y,p)),Jl(a)}else bg(a);else if(x=d.s,x==3||x==0&&0<d.X||!(y==1&&ZS(a,d)||y==2&&Vd(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),x){case 1:ns(a,5);break;case 4:ns(a,10);break;case 3:ns(a,6);break;default:ns(a,2)}}}function xg(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function ns(a,d){if(a.j.info("Error code "+d),d==2){var p=g(a.fb,a),y=a.Xa;const x=!y;y=new Rn(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||js(y,"https"),Le(y),x?WS(y.toString(),p):KS(y.toString(),p)}else Je(2);a.G=0,a.l&&a.l.sa(d),Mg(a),Rg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Mg(a){if(a.G=0,a.ka=[],a.l){const d=Bn(a.h);(d.length!=0||a.i.length!=0)&&(L(a.ka,d),L(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Lg(a,d,p){var y=p instanceof Rn?$n(p):new Rn(p);if(y.g!="")d&&(y.g=d+"."+y.g),Hs(y,y.s);else{var x=l.location;y=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;var V=new Rn(null);y&&js(V,y),d&&(V.g=d),x&&Hs(V,x),p&&(V.l=p),y=V}return p=a.D,d=a.ya,p&&d&&se(y,p,d),se(y,"VER",a.la),ua(a,y),y}function Vg(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new it(new Gl({eb:p})):new it(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fg(){}t=Fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function eu(){}eu.prototype.g=function(a,d){return new fn(a,d)};function fn(a,d){Ee.call(this),this.g=new Cg(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!_(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ws(this)}P(fn,Ee),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Ld(this.g)},fn.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Wi(a),a=p);d.i.push(new Ie(d.Ya++,a)),d.G==3&&Jl(d)},fn.prototype.N=function(){this.g.l=null,delete this.j,Ld(this.g),delete this.g,fn.aa.N.call(this)};function Ug(a){Gi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}P(Ug,Gi);function zg(){Us.call(this),this.status=1}P(zg,Us);function Ws(a){this.g=a}P(Ws,Fg),Ws.prototype.ua=function(){Ye(this.g,"a")},Ws.prototype.ta=function(a){Ye(this.g,new Ug(a))},Ws.prototype.sa=function(a){Ye(this.g,new zg)},Ws.prototype.ra=function(){Ye(this.g,"b")},eu.prototype.createWebChannel=eu.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,yT=function(){return new eu},gT=function(){return Qi()},mT=zn,Bf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,Hu=zs,Bl.COMPLETE="complete",pT=Bl,Fs.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Aa=Fs,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,fT=it}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const Pv="@firebase/firestore",Nv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new sd("@firebase/firestore");function Xs(){return Is.logLevel}function ee(t,...e){if(Is.logLevel<=we.DEBUG){const n=e.map(wm);Is.debug(`Firestore (${qo}): ${t}`,...n)}}function Ur(t,...e){if(Is.logLevel<=we.ERROR){const n=e.map(wm);Is.error(`Firestore (${qo}): ${t}`,...n)}}function Ni(t,...e){if(Is.logLevel<=we.WARN){const n=e.map(wm);Is.warn(`Firestore (${qo}): ${t}`,...n)}}function wm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vT(t,r,n)}function vT(t,e,n){let r=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ur(r),new Error(r)}function Pe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||vT(e,i,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class yN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vN{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new _T(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class _N{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class EN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _N(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=TN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function $f(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return ge(r,i);{const s=ET(),o=IN(s.encode(Dv(t,n)),s.encode(Dv(e,n)));return o!==0?o:ge(r,i)}}n+=r>65535?2:1}return ge(t.length,e.length)}function Dv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function IN(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ge(t[n],e[n]);return ge(t.length,e.length)}function Oo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="__name__";class or{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=or.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ge(e.length,n.length)}static compareSegments(e,n){const r=or.isNumericId(e),i=or.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?or.extractNumericId(e).compare(or.extractNumericId(n)):$f(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ii.fromString(e.substring(4,e.length-2))}}class Be extends or{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const SN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends or{construct(e,n,r){return new Nt(e,n,r)}static isValidIdentifier(e){return SN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ov}static keyField(){return new Nt([Ov])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(n)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Be.fromString(e))}static fromName(e){return new oe(Be.fromString(e).popFirst(5))}static empty(){return new oe(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AN(t,e,n,r){if(e===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xv(t){if(!oe.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mv(t){if(oe.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function TT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function dd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function fr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dd(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ol(t,e){if(!TT(t))throw new Z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Z(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=-62135596800,Vv=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Vv);return new qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Lv)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vv}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ol(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:yt("string",qe._jsonSchemaVersion),seconds:yt("number"),nanoseconds:yt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new qe(0,0))}static max(){return new he(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=-1;function kN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new bi(i,oe.empty(),e)}function CN(t){return new bi(t.readTime,t.key,hl)}class bi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new bi(he.min(),oe.empty(),hl)}static max(){return new bi(he.max(),oe.empty(),hl)}}function RN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==PN)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ko(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}hd.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=-1;function fd(t){return t==null}function Rc(t){return t===0&&1/t==-1/0}function DN(t){return typeof t=="number"&&Number.isInteger(t)&&!Rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="";function ON(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Fv(e)),e=xN(t.get(n),e);return Fv(e)}function xN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case IT:n+="";break;default:n+=s}}return n}function Fv(t){return t+IT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ST(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||Pt.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pt.RED,this.left=i??Pt.EMPTY,this.right=s??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zv(this.data.getIterator())}getIteratorFrom(e){return new zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new yn([])}unionWith(e){let n=new Tt(Nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AT("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const MN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=MN.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="server_timestamp",CT="__type__",RT="__previous_value__",PT="__local_write_time__";function Sm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[CT])===null||n===void 0?void 0:n.stringValue)===kT}function pd(t){const e=t.mapValue.fields[RT];return Sm(e)?pd(e):e}function fl(t){const e=Di(t.mapValue.fields[PT].timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Pc="(default)";class pl{constructor(e,n){this.projectId=e,this.database=n||Pc}static empty(){return new pl("","")}get isDefaultDatabase(){return this.database===Pc}isEqual(e){return e instanceof pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="__type__",VN="__max__",Tu={mapValue:{}},bT="__vector__",Nc="value";function xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sm(t)?4:UN(t)?9007199254740991:FN(t)?10:11:de(28295,{value:t})}function vr(t,e){if(t===e)return!0;const n=xi(t);if(n!==xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fl(t).isEqual(fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Di(i.timestampValue),l=Di(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Oi(i.bytesValue).isEqual(Oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return lt(i.geoPointValue.latitude)===lt(s.geoPointValue.latitude)&&lt(i.geoPointValue.longitude)===lt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return lt(i.integerValue)===lt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=lt(i.doubleValue),l=lt(s.doubleValue);return o===l?Rc(o)===Rc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Oo(t.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Uv(o)!==Uv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vr(o[u],l[u])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function ml(t,e){return(t.values||[]).find(n=>vr(n,e))!==void 0}function xo(t,e){if(t===e)return 0;const n=xi(t),r=xi(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=lt(s.integerValue||s.doubleValue),u=lt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Bv(t.timestampValue,e.timestampValue);case 4:return Bv(fl(t),fl(e));case 5:return $f(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Oi(s),u=Oi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ge(l[c],u[c]);if(f!==0)return f}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ge(lt(s.latitude),lt(o.latitude));return l!==0?l:ge(lt(s.longitude),lt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $v(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const m=s.fields||{},g=o.fields||{},S=(l=m[Nc])===null||l===void 0?void 0:l.arrayValue,P=(u=g[Nc])===null||u===void 0?void 0:u.arrayValue,D=ge(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:$v(S,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tu.mapValue&&o===Tu.mapValue)return 0;if(s===Tu.mapValue)return 1;if(o===Tu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=$f(u[m],f[m]);if(g!==0)return g;const S=xo(l[u[m]],c[f[m]]);if(S!==0)return S}return ge(u.length,f.length)}(t.mapValue,e.mapValue);default:throw de(23264,{le:n})}}function Bv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Di(t),r=Di(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function $v(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=xo(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function Mo(t){return jf(t)}function jf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Di(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${jf(n.fields[o])}`;return i+"}"}(t.mapValue):de(61005,{value:t})}function qu(t){switch(xi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pd(t);return e?16+qu(e):16;case 5:return 2*t.stringValue.length;case 6:return Oi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+qu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ji(r.fields,(s,o)=>{i+=s.length+qu(o)}),i}(t.mapValue);default:throw de(13486,{value:t})}}function jv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hf(t){return!!t&&"integerValue"in t}function Am(t){return!!t&&"arrayValue"in t}function Hv(t){return!!t&&"nullValue"in t}function qv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wu(t){return!!t&&"mapValue"in t}function FN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[NT])===null||n===void 0?void 0:n.stringValue)===bT}function za(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=za(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===VN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.value=e}static empty(){return new nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(n)}setAll(e){let n=Nt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=za(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ji(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new nn(za(this.value))}}function DT(t){const e=[];return ji(t.fields,(n,r)=>{const i=new Nt([n]);if(Wu(r)){const s=DT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new jt(e,0,he.min(),he.min(),he.min(),nn.empty(),0)}static newFoundDocument(e,n,r,i){return new jt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new jt(e,2,n,he.min(),he.min(),nn.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,he.min(),he.min(),nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){this.position=e,this.inclusive=n}}function Wv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=xo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function zN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{}class gt extends OT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $N(e,n,r):n==="array-contains"?new qN(e,r):n==="in"?new WN(e,r):n==="not-in"?new KN(e,r):n==="array-contains-any"?new GN(e,r):new gt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jN(e,r):new HN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xo(n,this.value)):n!==null&&xi(this.value)===xi(n)&&this.matchesComparison(xo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class er extends OT{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new er(e,n)}matches(e){return xT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function xT(t){return t.op==="and"}function MT(t){return BN(t)&&xT(t)}function BN(t){for(const e of t.filters)if(e instanceof er)return!1;return!0}function qf(t){if(t instanceof gt)return t.field.canonicalString()+t.op.toString()+Mo(t.value);if(MT(t))return t.filters.map(e=>qf(e)).join(",");{const e=t.filters.map(n=>qf(n)).join(",");return`${t.op}(${e})`}}function LT(t,e){return t instanceof gt?function(r,i){return i instanceof gt&&r.op===i.op&&r.field.isEqual(i.field)&&vr(r.value,i.value)}(t,e):t instanceof er?function(r,i){return i instanceof er&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&LT(o,i.filters[l]),!0):!1}(t,e):void de(19439)}function VT(t){return t instanceof gt?function(n){return`${n.field.canonicalString()} ${n.op} ${Mo(n.value)}`}(t):t instanceof er?function(n){return n.op.toString()+" {"+n.getFilters().map(VT).join(" ,")+"}"}(t):"Filter"}class $N extends gt{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class jN extends gt{constructor(e,n){super(e,"in",n),this.keys=FT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HN extends gt{constructor(e,n){super(e,"not-in",n),this.keys=FT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class qN extends gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&ml(n.arrayValue,this.value)}}class WN extends gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ml(this.value.arrayValue,n)}}class KN extends gt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ml(this.value.arrayValue,n)}}class GN extends gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ml(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Gv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QN(t,e,n,r,i,s,o)}function km(t){const e=fe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mo(r)).join(",")),e.Pe=n}return e.Pe}function Cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kv(t.startAt,e.startAt)&&Kv(t.endAt,e.endAt)}function Wf(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function XN(t,e,n,r,i,s,o,l){return new Go(t,e,n,r,i,s,o,l)}function Rm(t){return new Go(t)}function Qv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UT(t){return t.collectionGroup!==null}function Ba(t){const e=fe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Tt(Nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new gl(s,r))}),n.has(Nt.keyField().canonicalString())||e.Te.push(new gl(Nt.keyField(),r))}return e.Te}function pr(t){const e=fe(t);return e.Ie||(e.Ie=YN(e,Ba(t))),e.Ie}function YN(t,e){if(t.limitType==="F")return Gv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gl(i.field,s)});const n=t.endAt?new bc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bc(t.startAt.position,t.startAt.inclusive):null;return Gv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kf(t,e){const n=t.filters.concat([e]);return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Gf(t,e,n){return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function md(t,e){return Cm(pr(t),pr(e))&&t.limitType===e.limitType}function zT(t){return`${km(pr(t))}|lt:${t.limitType}`}function Ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>VT(i)).join(", ")}]`),fd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Mo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Mo(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function gd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):oe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Wv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ba(r),i)||r.endAt&&!function(o,l,u){const c=Wv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ba(r),i))}(t,e)}function JN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function BT(t){return(e,n)=>{let r=!1;for(const i of Ba(t)){const s=ZN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ZN(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?xo(u,c):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ST(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new rt(oe.comparator);function zr(){return eb}const $T=new rt(oe.comparator);function ka(...t){let e=$T;for(const n of t)e=e.insert(n.key,n);return e}function jT(t){let e=$T;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function us(){return $a()}function HT(){return $a()}function $a(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const tb=new rt(oe.comparator),nb=new Tt(oe.comparator);function Te(...t){let e=nb;for(const n of t)e=e.add(n);return e}const rb=new Tt(ge);function ib(){return rb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function qT(t){return{integerValue:""+t}}function sb(t,e){return DN(e)?qT(e):Pm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this._=void 0}}function ob(t,e,n){return t instanceof yl?function(i,s){const o={fields:{[CT]:{stringValue:kT},[PT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sm(s)&&(s=pd(s)),s&&(o.fields[RT]=s),{mapValue:o}}(n,e):t instanceof vl?KT(t,e):t instanceof _l?GT(t,e):function(i,s){const o=WT(i,s),l=Xv(o)+Xv(i.Ee);return Hf(o)&&Hf(i.Ee)?qT(l):Pm(i.serializer,l)}(t,e)}function ab(t,e,n){return t instanceof vl?KT(t,e):t instanceof _l?GT(t,e):n}function WT(t,e){return t instanceof Dc?function(r){return Hf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yl extends yd{}class vl extends yd{constructor(e){super(),this.elements=e}}function KT(t,e){const n=QT(e);for(const r of t.elements)n.some(i=>vr(i,r))||n.push(r);return{arrayValue:{values:n}}}class _l extends yd{constructor(e){super(),this.elements=e}}function GT(t,e){let n=QT(e);for(const r of t.elements)n=n.filter(i=>!vr(i,r));return{arrayValue:{values:n}}}class Dc extends yd{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Xv(t){return lt(t.integerValue||t.doubleValue)}function QT(t){return Am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.field=e,this.transform=n}}function ub(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof vl&&i instanceof vl||r instanceof _l&&i instanceof _l?Oo(r.elements,i.elements,vr):r instanceof Dc&&i instanceof Dc?vr(r.Ee,i.Ee):r instanceof yl&&i instanceof yl}(t.transform,e.transform)}class cb{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ku(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vd{}function XT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Nm(t.key,xn.none()):new xl(t.key,t.data,xn.none());{const n=t.data,r=nn.empty();let i=new Tt(Nt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hi(t.key,r,new yn(i.toArray()),xn.none())}}function db(t,e,n){t instanceof xl?function(i,s,o){const l=i.value.clone(),u=Jv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Hi?function(i,s,o){if(!Ku(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Jv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(YT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof xl?function(s,o,l,u){if(!Ku(s.precondition,o))return l;const c=s.value.clone(),f=Zv(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hi?function(s,o,l,u){if(!Ku(s.precondition,o))return l;const c=Zv(s.fieldTransforms,u,o),f=o.data;return f.setAll(YT(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Ku(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function hb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=WT(r.transform,i||null);s!=null&&(n===null&&(n=nn.empty()),n.set(r.field,s))}return n||null}function Yv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Oo(r,i,(s,o)=>ub(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xl extends vd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hi extends vd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function YT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jv(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,ab(o,l,n[i]))}return r}function Zv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ob(s,o,e))}return r}class Nm extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fb extends vd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&db(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=XT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Oo(this.mutations,e.mutations,(n,r)=>Yv(n,r))&&Oo(this.baseMutations,e.baseMutations,(n,r)=>Yv(n,r))}}class bm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return tb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,Se;function yb(t){switch(t){case U.OK:return de(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function JT(t){if(t===void 0)return Ur("GRPC error has no .code"),U.UNKNOWN;switch(t){case pt.OK:return U.OK;case pt.CANCELLED:return U.CANCELLED;case pt.UNKNOWN:return U.UNKNOWN;case pt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case pt.INTERNAL:return U.INTERNAL;case pt.UNAVAILABLE:return U.UNAVAILABLE;case pt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case pt.NOT_FOUND:return U.NOT_FOUND;case pt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case pt.ABORTED:return U.ABORTED;case pt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case pt.DATA_LOSS:return U.DATA_LOSS;default:return de(39323,{code:t})}}(Se=pt||(pt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new Ii([4294967295,4294967295],0);function e_(t){const e=ET().encode(t),n=new hT;return n.update(e),new Uint8Array(n.digest())}function t_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ii([n,r],0),new Ii([i,s],0)]}class Dm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ca(`Invalid padding: ${n}`);if(r<0)throw new Ca(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ca(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ca(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Ii.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Ii.fromNumber(r)));return i.compare(vb)===1&&(i=new Ii([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=e_(e),[r,i]=t_(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=e_(e),[r,i]=t_(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _d(he.min(),i,new rt(ge),zr(),Te())}}class Ml{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ml(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class ZT{constructor(e,n){this.targetId=e,this.De=n}}class eI{constructor(e,n,r=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class n_{constructor(){this.ve=0,this.Ce=r_(),this.Fe=xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Te(),n=Te(),r=Te();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de(38017,{changeType:s})}}),new Ml(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=r_()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class _b{constructor(e){this.We=e,this.Ge=new Map,this.ze=zr(),this.je=Iu(),this.Je=Iu(),this.He=new rt(ge)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:de(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Wf(s))if(r===0){const o=new oe(s.path);this.Xe(n,o,jt.newNoDocument(o,he.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,c)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Oi(r).toUint8Array()}catch(u){if(u instanceof AT)return Ni("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Dm(o,i,s)}catch(u){return Ni(u instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Wf(l.target)){const u=new oe(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,jt.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=Te();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.st(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new _d(e,n,this.He,this.ze,r);return this.ze=zr(),this.je=Iu(),this.Je=Iu(),this.He=new rt(ge),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new n_,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Tt(ge),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Tt(ge),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new n_),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Iu(){return new rt(oe.comparator)}function r_(){return new rt(oe.comparator)}const Eb={asc:"ASCENDING",desc:"DESCENDING"},wb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tb={and:"AND",or:"OR"};class Ib{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qf(t,e){return t.useProto3Json||fd(e)?e:{value:e}}function Oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sb(t,e){return Oc(t,e.toTimestamp())}function mr(t){return Pe(!!t,49232),he.fromTimestamp(function(n){const r=Di(n);return new qe(r.seconds,r.nanos)}(t))}function Om(t,e){return Xf(t,e).canonicalString()}function Xf(t,e){const n=function(i){return new Be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nI(t){const e=Be.fromString(t);return Pe(aI(e),10190,{key:e.toString()}),e}function Yf(t,e){return Om(t.databaseId,e.path)}function Eh(t,e){const n=nI(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(iI(n))}function rI(t,e){return Om(t.databaseId,e)}function Ab(t){const e=nI(t);return e.length===4?Be.emptyPath():iI(e)}function Jf(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iI(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function i_(t,e,n){return{name:Yf(t,e),fields:n.value.mapValue.fields}}function kb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:de(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),xt.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),xt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?U.UNKNOWN:JT(c.code);return new Z(f,c.message||"")}(o);n=new eI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Eh(t,r.document.name),s=mr(r.document.updateTime),o=r.document.createTime?mr(r.document.createTime):he.min(),l=new nn({mapValue:{fields:r.document.fields}}),u=jt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Gu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Eh(t,r.document),s=r.readTime?mr(r.readTime):he.min(),o=jt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Gu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Eh(t,r.document),s=r.removedTargetIds||[];n=new Gu([],s,i,null)}else{if(!("filter"in e))return de(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gb(i,s),l=r.targetId;n=new ZT(l,o)}}return n}function Cb(t,e){let n;if(e instanceof xl)n={update:i_(t,e.key,e.value)};else if(e instanceof Nm)n={delete:Yf(t,e.key)};else if(e instanceof Hi)n={update:i_(t,e.key,e.data),updateMask:Lb(e.fieldMask)};else{if(!(e instanceof fb))return de(16599,{Rt:e.type});n={verify:Yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _l)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Dc)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw de(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Sb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de(27497)}(t,e.precondition)),n}function Rb(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?mr(i.updateTime):mr(s);return o.isEqual(he.min())&&(o=mr(s)),new cb(o,i.transformResults||[])}(n,e))):[]}function Pb(t,e){return{documents:[rI(t,e.path)]}}function Nb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rI(t,i);const s=function(c){if(c.length!==0)return oI(er.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Js(g.field),direction:Ob(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Qf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Vt:n,parent:i}}function bb(t){let e=Ab(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=sI(m);return g instanceof er&&MT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(P){return new gl(Zs(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,fd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new bc(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,S=m.values||[];return new bc(S,g)}(n.endAt)),XN(e,i,o,s,l,"F",u,c)}function Db(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zs(n.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Zs(n.unaryFilter.field);return gt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zs(n.unaryFilter.field);return gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zs(n.unaryFilter.field);return gt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return gt.create(Zs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return er.create(n.compositeFilter.filters.map(r=>sI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function Ob(t){return Eb[t]}function xb(t){return wb[t]}function Mb(t){return Tb[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return Nt.fromServerFormat(t.fieldPath)}function oI(t){return t instanceof gt?function(n){if(n.op==="=="){if(qv(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NAN"}};if(Hv(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qv(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NAN"}};if(Hv(n.value))return{unaryFilter:{field:Js(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(n.field),op:xb(n.op),value:n.value}}}(t):t instanceof er?function(n){const r=n.getFilters().map(i=>oI(i));return r.length===1?r[0]:{compositeFilter:{op:Mb(n.op),filters:r}}}(t):de(54877,{filter:t})}function Lb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r,i,s=he.min(),o=he.min(),l=xt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.gt=e}}function Fb(t){const e=bb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.Dn=new zb}addToCollectionParentIndex(e,n){return this.Dn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(bi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class zb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lI=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(lI,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Lo(0)}static ur(){return new Lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="LruGarbageCollector",Bb=1048576;function a_([t,e],[n,r]){const i=ge(t,n);return i===0?ge(e,r):i}class $b{constructor(e){this.Tr=e,this.buffer=new Tt(a_),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();a_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ee(o_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ko(n)?ee(o_,"Ignoring IndexedDB error during garbage collection: ",n):await Wo(n)}await this.Rr(3e5)})}}class Hb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(hd.ue);const r=new $b(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(s_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),s_):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),Xs()<=we.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function qb(t,e){return new Hb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ja(r.mutation,i,yn.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const i=us();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ka();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=zr();const o=$a(),l=function(){return $a()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Hi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ja(f.mutation,c,f.mutation.getFieldMask(),qe.now())):o.set(c.key,yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var m;return l.set(c,new Kb(f,(m=o.get(c))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=$a();let i=new rt((o,l)=>o-l),s=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||yn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||Te()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=HT();f.forEach(g=>{if(!s.has(g)){const S=XT(n.get(g),r.get(g));S!==null&&m.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(us());let l=hl,u=s;return o.next(c=>B.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Te())).next(f=>({batchId:l,changes:jT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let i=ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ka();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(m,g){return new Go(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,jt.newInvalidDocument(f)))});let l=ka();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ja(f.mutation,c,yn.empty(),qe.now()),gd(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return B.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mr(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:Fb(i.bundledQuery),readTime:mr(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.overlays=new rt(oe.comparator),this.kr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=us(),s=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new rt((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=us(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=us(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return B.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mb(n,r));let s=this.kr.get(n);s===void 0&&(s=Te(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.qr=new Tt(It.Qr),this.$r=new Tt(It.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new It(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new It(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new oe(new Be([])),r=new It(n,e),i=new It(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new oe(new Be([])),r=new It(n,e),i=new It(n,e+1);let s=Te();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new It(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class It{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return oe.comparator(e.key,n.key)||ge(e.Hr,n.Hr)}static Ur(e,n){return ge(e.Hr,n.Hr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Tt(It.Qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new It(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Im:this.er-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new It(n,0),i=new It(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ge);return n.forEach(i=>{const s=new It(i,0),o=new It(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),B.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;oe.isDocumentKey(s)||(s=s.child(""));const o=new It(new oe(s),0);let l=new Tt(ge);return this.Yr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Hr)),!0)},o),B.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return B.forEach(n.mutations,i=>{const s=new It(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new It(n,0),i=this.Yr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.ni=e,this.docs=function(){return new rt(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=zr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():jt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zr();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RN(CN(f),r)<=0||(i.has(f.key)||gd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de(9500)}ri(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new e2(this)}getSize(e){return B.resolve(this.size)}}class e2 extends Wb{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.persistence=e,this.ii=new Os(n=>km(n),Cm),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.si=0,this.oi=new xm,this.targetCount=0,this._i=Lo.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),B.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Lo(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.hr(n),B.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.ai={},this.overlays={},this.ui=new hd(0),this.ci=!1,this.ci=!0,this.li=new Yb,this.referenceDelegate=e(this),this.hi=new t2(this),this.indexManager=new Ub,this.remoteDocumentCache=function(i){return new Zb(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Vb(n),this.Ti=new Qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Xb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Jb(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new n2(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return B.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class n2 extends NN{constructor(e){super(),this.currentSequenceNumber=e}}class Mm{constructor(e){this.persistence=e,this.Ai=new xm,this.Ri=null}static Vi(e){return new Mm(e)}get mi(){if(this.Ri)return this.Ri;throw de(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,r=>{const i=oe.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return B.or([()=>B.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class xc{constructor(e,n){this.persistence=e,this.gi=new Os(r=>ON(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=qb(this,n)}static Vi(e,n){return new xc(e,n)}Ii(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return B.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,he.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),B.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qu(e.data.value)),n}Sr(e,n,r){return B.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=Te(),i=Te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Vk()?8:bN(qt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new r2;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Xs()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Xs()<=we.DEBUG&&ee("QueryEngine","Query:",Ys(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Xs()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(n))):B.resolve())}ps(e,n){if(Qv(n))return B.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gf(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Te(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ds(n,c,o,u.readTime)?this.ps(e,Gf(n,null,"F")):this.vs(e,c,n,u)}))})))}ys(e,n,r,i){return Qv(n)||i.isEqual(he.min())?B.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?B.resolve(null):(Xs()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ys(n)),this.vs(e,o,n,kN(i,hl)).next(l=>l))})}bs(e,n){let r=new Tt(BT(e));return n.forEach((i,s)=>{gd(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Xs()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ys(n)),this.gs.getDocumentsMatchingQuery(e,n,bi.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="LocalStore",s2=3e8;class o2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new rt(ge),this.Ms=new Os(s=>km(s),Cm),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function a2(t,e,n,r){return new o2(t,e,n,r)}async function cI(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Bs:c,removedBatchIds:o,addedBatchIds:l}))})})}function l2(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let S=B.resolve();return g.forEach(P=>{S=S.next(()=>f.getEntry(u,P)).next(D=>{const L=c.docVersions.get(P);Pe(L!==null,48541),D.version.compareTo(L)<0&&(m.applyToRemoteDocument(D,c),D.isValidDocument()&&(D.setReadTime(c.commitVersion),f.addEntry(D)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dI(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function u2(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,m)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(xt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(D,L,A){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=s2?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(g,S,f)&&l.push(n.hi.updateTargetData(s,S))});let u=zr(),c=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(c2(s,o,e.documentUpdates).next(f=>{u=f.Ls,c=f.ks})),!r.isEqual(he.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(m=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Fs=i,s))}function c2(t,e,n){let r=Te(),i=Te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee(Vm,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function d2(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Im),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h2(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new hi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Zf(t,e,n){const r=fe(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ko(o))throw o;ee(Vm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function l_(t,e,n){const r=fe(t);let i=he.min(),s=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=fe(u),g=m.Ms.get(f);return g!==void 0?B.resolve(m.Fs.get(g)):m.hi.getTargetData(c,f)}(r,o,pr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?s:Te())).next(l=>(f2(r,JN(e),l),{documents:l,qs:s})))}function f2(t,e,n){let r=t.xs.get(e)||he.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class u_{constructor(){this.activeTargetIds=ib()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p2{constructor(){this.Fo=new u_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new u_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="ConnectivityMonitor";class d_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ee(c_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ee(c_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=null;function ep(){return Su===null?Su=function(){return 268435456+Math.round(2147483648*Math.random())}():Su++,"0x"+Su.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="RestConnection",g2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Pc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=ep(),l=this.Go(e,n.toUriEncodedString());ee(wh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:c}=new URL(l),f=$r(c);return this.jo(e,l,u,r,f).then(m=>(ee(wh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ni(wh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=g2[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class _2 extends y2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=ep();return new Promise((l,u)=>{const c=new fT;c.setWithCredentials(!0),c.listenOnce(pT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hu.NO_ERROR:const m=c.getResponseJson();ee(Ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Hu.TIMEOUT:ee(Ut,`RPC '${e}' ${o} timed out`),u(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case Hu.HTTP_ERROR:const g=c.getStatus();if(ee(Ut,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const D=function(A){const _=A.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(P.status);u(new Z(D,P.message))}else u(new Z(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new Z(U.UNAVAILABLE,"Connection failed."));break;default:de(9055,{c_:e,streamId:o,l_:c.getLastErrorCode(),h_:c.getLastError()})}}finally{ee(Ut,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);ee(Ut,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}P_(e,n,r){const i=ep(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yT(),l=gT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");ee(Ut,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let g=!1,S=!1;const P=new v2({Ho:L=>{S?ee(Ut,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(ee(Ut,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),ee(Ut,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},Yo:()=>m.close()}),D=(L,A,_)=>{L.listen(A,k=>{try{_(k)}catch(M){setTimeout(()=>{throw M},0)}})};return D(m,Aa.EventType.OPEN,()=>{S||(ee(Ut,`RPC '${e}' stream ${i} transport opened.`),P.s_())}),D(m,Aa.EventType.CLOSE,()=>{S||(S=!0,ee(Ut,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(m))}),D(m,Aa.EventType.ERROR,L=>{S||(S=!0,Ni(Ut,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),P.__(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),D(m,Aa.EventType.MESSAGE,L=>{var A;if(!S){const _=L.data[0];Pe(!!_,16349);const k=_,M=(k==null?void 0:k.error)||((A=k[0])===null||A===void 0?void 0:A.error);if(M){ee(Ut,`RPC '${e}' stream ${i} received error:`,M);const q=M.status;let z=function(E){const T=pt[E];if(T!==void 0)return JT(T)}(q),w=M.message;z===void 0&&(z=U.INTERNAL,w="Unknown error status: "+q+" with message "+M.message),S=!0,P.__(new Z(z,w)),m.close()}else ee(Ut,`RPC '${e}' stream ${i} received:`,_),P.a_(_)}}),D(l,mT.STAT_EVENT,L=>{L.stat===Bf.PROXY?ee(Ut,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Bf.NOPROXY&&ee(Ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){return new Ib(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="PersistentStream";class fI{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hI(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ee(h_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ee(h_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E2 extends fI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=kb(this.serializer,e),r=function(s){if(!("targetChange"in s))return he.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?mr(o.readTime):he.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Jf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Wf(u)?{documents:Pb(s,u)}:{query:Nb(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=tI(s,o.resumeToken);const c=Qf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Oc(s,o.snapshotVersion.toTimestamp());const c=Qf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Db(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Jf(this.serializer),n.removeTarget=e,this.k_(n)}}class w2 extends fI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Rb(e.writeResults,e.commitTime),r=mr(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Jf(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Cb(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{}class I2 extends T2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Xf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(U.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Xf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class S2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ur(n),this._a=!1):ee("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="RemoteStore";class A2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{xs(this)&&(ee(Ss,"Restarting streams for network reachability change."),await async function(u){const c=fe(u);c.Ia.add(4),await Ll(c),c.Aa.set("Unknown"),c.Ia.delete(4),await wd(c)}(this))})}),this.Aa=new S2(r,i)}}async function wd(t){if(xs(t))for(const e of t.da)await e(!0)}async function Ll(t){for(const e of t.da)await e(!1)}function pI(t,e){const n=fe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Bm(n)?zm(n):Qo(n).x_()&&Um(n,e))}function Fm(t,e){const n=fe(t),r=Qo(n);n.Ta.delete(e),r.x_()&&mI(n,e),n.Ta.size===0&&(r.x_()?r.B_():xs(n)&&n.Aa.set("Unknown"))}function Um(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).H_(e)}function mI(t,e){t.Ra.$e(e),Qo(t).Y_(e)}function zm(t){t.Ra=new _b({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.Aa.aa()}function Bm(t){return xs(t)&&!Qo(t).M_()&&t.Ta.size>0}function xs(t){return fe(t).Ia.size===0}function gI(t){t.Ra=void 0}async function k2(t){t.Aa.set("Online")}async function C2(t){t.Ta.forEach((e,n)=>{Um(t,e)})}async function R2(t,e){gI(t),Bm(t)?(t.Aa.la(e),zm(t)):t.Aa.set("Unknown")}async function P2(t,e,n){if(t.Aa.set("Online"),e instanceof eI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){ee(Ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mc(t,r)}else if(e instanceof Gu?t.Ra.Ye(e):e instanceof ZT?t.Ra.it(e):t.Ra.et(e),!n.isEqual(he.min()))try{const r=await dI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(c);f&&s.Ta.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(xt.EMPTY_BYTE_STRING,f.snapshotVersion)),mI(s,u);const m=new hi(f.target,u,c,f.sequenceNumber);Um(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(Ss,"Failed to raise snapshot:",r),await Mc(t,r)}}async function Mc(t,e,n){if(!Ko(e))throw e;t.Ia.add(1),await Ll(t),t.Aa.set("Offline"),n||(n=()=>dI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Ss,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wd(t)})}function yI(t,e){return e().catch(n=>Mc(t,n,e))}async function Td(t){const e=fe(t),n=Mi(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Im;for(;N2(e);)try{const i=await d2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,b2(e,i)}catch(i){await Mc(e,i)}vI(e)&&_I(e)}function N2(t){return xs(t)&&t.Pa.length<10}function b2(t,e){t.Pa.push(e);const n=Mi(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function vI(t){return xs(t)&&!Mi(t).M_()&&t.Pa.length>0}function _I(t){Mi(t).start()}async function D2(t){Mi(t).na()}async function O2(t){const e=Mi(t);for(const n of t.Pa)e.X_(n.mutations)}async function x2(t,e,n){const r=t.Pa.shift(),i=bm.from(r,e,n);await yI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Td(t)}async function M2(t,e){e&&Mi(t).Z_&&await async function(r,i){if(function(o){return yb(o)&&o!==U.ABORTED}(i.code)){const s=r.Pa.shift();Mi(r).N_(),await yI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Td(r)}}(t,e),vI(t)&&_I(t)}async function f_(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee(Ss,"RemoteStore received new credentials");const r=xs(n);n.Ia.add(3),await Ll(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wd(n)}async function L2(t,e){const n=fe(t);e?(n.Ia.delete(2),await wd(n)):e||(n.Ia.add(2),await Ll(n),n.Aa.set("Unknown"))}function Qo(t){return t.Va||(t.Va=function(n,r,i){const s=fe(n);return s.ia(),new E2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:k2.bind(null,t),e_:C2.bind(null,t),n_:R2.bind(null,t),J_:P2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Bm(t)?zm(t):t.Aa.set("Unknown")):(await t.Va.stop(),gI(t))})),t.Va}function Mi(t){return t.ma||(t.ma=function(n,r,i){const s=fe(n);return s.ia(),new w2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:D2.bind(null,t),n_:M2.bind(null,t),ea:O2.bind(null,t),ta:x2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Td(t)):(await t.ma.stop(),t.Pa.length>0&&(ee(Ss,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new $m(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jm(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Ko(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{static emptySet(e){return new Io(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=ka(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Io)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Io;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.fa=new rt(oe.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):de(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Vo(e,n,Io.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&md(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class F2{constructor(){this.queries=m_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=fe(n),s=i.queries;i.queries=m_(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function m_(){return new Os(t=>zT(t),md)}async function U2(t,e){const n=fe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new V2,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=jm(o,`Initialization of query '${Ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Hm(n)}async function z2(t,e){const n=fe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function B2(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Hm(n)}function $2(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Hm(t){t.Da.forEach(e=>{e.next()})}var tp,g_;(g_=tp||(tp={})).Fa="default",g_.Cache="cache";class j2{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==tp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.key=e}}class wI{constructor(e){this.key=e}}class H2{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Te(),this.mutatedKeys=Te(),this.Xa=BT(e),this.eu=new Io(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new p_,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),S=gd(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;g&&S?g.data.isEqual(S.data)?P!==D&&(r.track({type:3,doc:S}),L=!0):this.iu(g,S)||(r.track({type:2,doc:S}),L=!0,(u&&this.Xa(S,u)>0||c&&this.Xa(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),L=!0):g&&!S&&(r.track({type:1,doc:g}),L=!0,(u||c)&&(l=!0)),L&&(S?(o=o.add(S),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(S,P){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{At:L})}};return D(S)-D(P)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,c=u!==this.Ya;return this.Ya=u,o.length!==0||c?{snapshot:new Vo(this.query,e.eu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new p_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Te(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new wI(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new EI(r))}),n}uu(e){this.Ha=e.qs,this.Za=Te();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Vo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const qm="SyncEngine";class q2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W2{constructor(e){this.key=e,this.lu=!1}}class K2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Os(l=>zT(l),md),this.Tu=new Map,this.Iu=new Set,this.du=new rt(oe.comparator),this.Eu=new Map,this.Au=new xm,this.Ru={},this.Vu=new Map,this.mu=Lo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function G2(t,e,n=!0){const r=CI(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await TI(r,e,n,!0),i}async function Q2(t,e){const n=CI(t);await TI(n,e,!0,!1)}async function TI(t,e,n,r){const i=await h2(t.localStore,pr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await X2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pI(t.remoteStore,i),l}async function X2(t,e,n,r,i){t.gu=(m,g,S)=>async function(D,L,A,_){let k=L.view.nu(A);k.Ds&&(k=await l_(D.localStore,L.query,!1).then(({documents:w})=>L.view.nu(w,k)));const M=_&&_.targetChanges.get(L.targetId),q=_&&_.targetMismatches.get(L.targetId)!=null,z=L.view.applyChanges(k,D.isPrimaryClient,M,q);return v_(D,L.targetId,z._u),z.snapshot}(t,m,g,S);const s=await l_(t.localStore,e,!0),o=new H2(e,s.qs),l=o.nu(s.documents),u=Ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);v_(t,n,c._u);const f=new q2(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),c.snapshot}async function Y2(t,e,n){const r=fe(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!md(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Fm(r.remoteStore,i.targetId),np(r,i.targetId)}).catch(Wo)):(np(r,i.targetId),await Zf(r.localStore,i.targetId,!0))}async function J2(t,e){const n=fe(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Fm(n.remoteStore,r.targetId))}async function Z2(t,e,n){const r=oD(t);try{const i=await function(o,l){const u=fe(o),c=qe.now(),f=l.reduce((S,P)=>S.add(P.key),Te());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=zr(),D=Te();return u.Os.getEntries(S,f).next(L=>{P=L,P.forEach((A,_)=>{_.isValidDocument()||(D=D.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,P)).next(L=>{m=L;const A=[];for(const _ of l){const k=hb(_,m.get(_.key).overlayedDocument);k!=null&&A.push(new Hi(_.key,k,DT(k.value.mapValue),xn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,A,l)}).next(L=>{g=L;const A=L.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(S,L.batchId,A)})}).then(()=>({batchId:g.batchId,changes:jT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ru[o.currentUser.toKey()];c||(c=new rt(ge)),c=c.insert(l,u),o.Ru[o.currentUser.toKey()]=c}(r,i.batchId,n),await Vl(r,i.changes),await Td(r.remoteStore)}catch(i){const s=jm(i,"Failed to persist write");n.reject(s)}}async function II(t,e){const n=fe(t);try{const r=await u2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Pe(o.lu,14607):i.removedDocuments.size>0&&(Pe(o.lu,42227),o.lu=!1))}),await Vl(n,r,e)}catch(r){await Wo(r)}}function y_(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=fe(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.wa)g.va(l)&&(c=!0)}),c&&Hm(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eD(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new rt(oe.comparator);o=o.insert(s,jt.newNoDocument(s,he.min()));const l=Te().add(s),u=new _d(he.min(),new Map,new rt(ge),o,l);await II(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Wm(r)}else await Zf(r.localStore,e,!1).then(()=>np(r,e,n)).catch(Wo)}async function tD(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await l2(n.localStore,e);AI(n,r,null),SI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vl(n,i)}catch(i){await Wo(i)}}async function nD(t,e,n){const r=fe(t);try{const i=await function(o,l){const u=fe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(Pe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);AI(r,e,n),SI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vl(r,i)}catch(i){await Wo(i)}}function SI(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function AI(t,e,n){const r=fe(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function np(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||kI(t,r)})}function kI(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Fm(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Wm(t))}function v_(t,e,n){for(const r of n)r instanceof EI?(t.Au.addReference(r.key,e),rD(t,r)):r instanceof wI?(ee(qm,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||kI(t,r.key)):de(19791,{yu:r})}function rD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ee(qm,"New document in limbo: "+n),t.Iu.add(r),Wm(t))}function Wm(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new oe(Be.fromString(e)),r=t.mu.next();t.Eu.set(r,new W2(n)),t.du=t.du.insert(n,r),pI(t.remoteStore,new hi(pr(Rm(n.path)),r,"TargetPurposeLimboResolution",hd.ue))}}async function Vl(t,e,n){const r=fe(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Lm.Es(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,c){const f=fe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(c,g=>B.forEach(g.Is,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>B.forEach(g.ds,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!Ko(m))throw m;ee(Vm,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const S=f.Fs.get(g),P=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(g,D)}}}(r.localStore,s))}async function iD(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee(qm,"User change. New user:",e.toKey());const r=await cI(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new Z(U.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vl(n,r.Bs)}}function sD(t,e){const n=fe(t),r=n.Eu.get(e);if(r&&r.lu)return Te().add(r.key);{let i=Te();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function CI(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=II.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eD.bind(null,e),e.hu.J_=B2.bind(null,e.eventManager),e.hu.pu=$2.bind(null,e.eventManager),e}function oD(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nD.bind(null,e),e}class Lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ed(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return a2(this.persistence,new i2,e.initialUser,this.serializer)}Du(e){return new uI(Mm.Vi,this.serializer)}bu(e){return new p2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lc.provider={build:()=>new Lc};class aD extends Lc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Pe(this.persistence.referenceDelegate instanceof xc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jb(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new uI(r=>xc.Vi(r,n),this.serializer)}}class rp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>y_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iD.bind(null,this.syncEngine),await L2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F2}()}createDatastore(e){const n=Ed(e.databaseInfo.databaseId),r=function(s){return new _2(s)}(e.databaseInfo);return function(s,o,l,u){return new I2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new A2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>y_(this.syncEngine,n,0),function(){return d_.C()?new d_:new m2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new K2(i,s,o,l,u,c);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=fe(i);ee(Ss,"RemoteStore shutting down."),s.Ia.add(5),await Ll(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}rp.provider={build:()=>new rp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class uD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=zt.UNAUTHENTICATED,this.clientId=Tm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ee(Li,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Li,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Li,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Ni("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ee("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Ni("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function __(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cD(t);ee(Li,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>f_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>f_(e.remoteStore,i)),t._onlineComponents=e}async function cD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Li,"Using user provided OfflineComponentProvider");try{await Ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ni("Error using user provided cache. Falling back to memory cache: "+n),await Ih(t,new Lc)}}else ee(Li,"Using default OfflineComponentProvider"),await Ih(t,new aD(void 0));return t._offlineComponents}async function RI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Li,"Using user provided OnlineComponentProvider"),await __(t,t._uninitializedComponentsProvider._online)):(ee(Li,"Using default OnlineComponentProvider"),await __(t,new rp))),t._onlineComponents}function dD(t){return RI(t).then(e=>e.syncEngine)}async function E_(t){const e=await RI(t),n=e.eventManager;return n.onListen=G2.bind(null,e.syncEngine),n.onUnlisten=Y2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Q2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=J2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="firestore.googleapis.com",T_=!0;class I_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=NI,this.ssl=T_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:T_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bb)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Id{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gN;switch(r.type){case"firstParty":return new EN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=w_.get(n);r&&(ee("ComponentProvider","Removing Datastore"),w_.delete(n),r.terminate())}(this),Promise.resolve()}}function hD(t,e,n,r={}){var i;t=fr(t,Id);const s=$r(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(rd(`https://${u}`),id("Firestore",!0)),o.host!==NI&&o.host!==u&&Ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!ws(c,l)&&(t._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=zt.MOCK_USER;else{f=A0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new zt(g)}t._authCredentials=new yN(new _T(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ol(n,ct._jsonSchema))return new ct(e,r||null,new oe(Be.fromString(n.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:yt("string",ct._jsonSchemaVersion),referencePath:yt("string")};class Si extends Ms{constructor(e,n,r){super(e,n,Rm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new oe(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function Bt(t,e,...n){if(t=Oe(t),wT("collection","path",e),t instanceof Id){const r=Be.fromString(e,...n);return Mv(r),new Si(t,null,r)}{if(!(t instanceof ct||t instanceof Si))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Mv(r),new Si(t.firestore,null,r)}}function Ue(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=Tm.newId()),wT("doc","path",e),t instanceof Id){const r=Be.fromString(e,...n);return xv(r),new ct(t,null,new oe(r))}{if(!(t instanceof ct||t instanceof Si))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return xv(r),new ct(t.firestore,t instanceof Si?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hI(this,"async_queue_retry"),this.oc=()=>{const r=Th();r&&ee(S_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new fs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ko(e))throw e;ee(S_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Ur("INTERNAL UNHANDLED ERROR: ",k_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=$m.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&de(47125,{hc:k_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function k_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class As extends Id{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new A_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function fD(t,e){const n=typeof t=="object"?t:Pl(),r=typeof t=="string"?t:Pc,i=Bi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lm("firestore");s&&hD(i,...s)}return i}function bI(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pD(t),t._firestoreClient}function pD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new LN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,PI(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new uD(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bn(xt.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bn(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ol(e,bn._jsonSchema))return bn.fromBase64String(e.bytes)}}bn._jsonSchemaVersion="firestore/bytes/1.0",bn._jsonSchema={type:yt("string",bn._jsonSchemaVersion),bytes:yt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gr._jsonSchemaVersion}}static fromJSON(e){if(Ol(e,gr._jsonSchema))return new gr(e.latitude,e.longitude)}}gr._jsonSchemaVersion="firestore/geoPoint/1.0",gr._jsonSchema={type:yt("string",gr._jsonSchemaVersion),latitude:yt("number"),longitude:yt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ol(e,yr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yr(e.vectorValues);throw new Z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yr._jsonSchemaVersion="firestore/vectorValue/1.0",yr._jsonSchema={type:yt("string",yr._jsonSchemaVersion),vectorValues:yt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=/^__.*__$/;class gD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new xl(e,this.data,n,this.fieldTransforms)}}class DI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function OI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ec:t})}}class Km{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Vc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(OI(this.Ec)&&mD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class yD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ed(e)}Dc(e,n,r,i=!1){return new Km({Ec:e,methodName:n,bc:r,path:Nt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kd(t){const e=t._freezeSettings(),n=Ed(t._databaseId);return new yD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xI(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);Qm("Data must be an object, but it was:",o,r);const l=MI(r,o);let u,c;if(s.merge)u=new yn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=ip(e,m,n);if(!o.contains(g))throw new Z(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);VI(f,g)||f.push(g)}u=new yn(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new gD(new nn(l),u,c)}class Cd extends Ad{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cd}}class Gm extends Ad{_toFieldTransform(e){return new lb(e.path,new yl)}isEqual(e){return e instanceof Gm}}function vD(t,e,n,r){const i=t.Dc(1,e,n);Qm("Data must be an object, but it was:",i,r);const s=[],o=nn.empty();ji(r,(u,c)=>{const f=Xm(e,u,n);c=Oe(c);const m=i.gc(f);if(c instanceof Cd)s.push(f);else{const g=Fl(c,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new yn(s);return new DI(o,l,i.fieldTransforms)}function _D(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[ip(e,r,n)],u=[i];if(s.length%2!=0)throw new Z(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(ip(e,s[g])),u.push(s[g+1]);const c=[],f=nn.empty();for(let g=l.length-1;g>=0;--g)if(!VI(c,l[g])){const S=l[g];let P=u[g];P=Oe(P);const D=o.gc(S);if(P instanceof Cd)c.push(S);else{const L=Fl(P,D);L!=null&&(c.push(S),f.set(S,L))}}const m=new yn(c);return new DI(f,m,o.fieldTransforms)}function ED(t,e,n,r=!1){return Fl(n,t.Dc(r?4:3,e))}function Fl(t,e){if(LI(t=Oe(t)))return Qm("Unsupported field value:",e,t),MI(t,e);if(t instanceof Ad)return function(r,i){if(!OI(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Fl(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:Oc(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oc(i.serializer,s)}}if(r instanceof gr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bn)return{bytesValue:tI(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Om(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yr)return function(o,l){return{mapValue:{fields:{[NT]:{stringValue:bT},[Nc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.wc("VectorValues must only contain numeric values.");return Pm(l.serializer,c)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${dd(r)}`)}(t,e)}function MI(t,e){const n={};return ST(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(r,i)=>{const s=Fl(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof gr||t instanceof bn||t instanceof ct||t instanceof Ad||t instanceof yr)}function Qm(t,e,n){if(!LI(n)||!TT(n)){const r=dd(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ip(t,e,n){if((e=Oe(e))instanceof Sd)return e._internalPath;if(typeof e=="string")return Xm(t,e);throw Vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const wD=new RegExp("[~\\*/\\[\\]]");function Xm(t,e,n){if(e.search(wD)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sd(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Z(U.INVALID_ARGUMENT,l+t+u)}function VI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TD extends FI{data(){return super.data()}}function Ym(t,e){return typeof e=="string"?Xm(t,e):e instanceof Sd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ID(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jm{}class UI extends Jm{}function Yr(t,e,...n){let r=[];e instanceof Jm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof eg).length,l=s.filter(u=>u instanceof Zm).length;if(o>1||o>0&&l>0)throw new Z(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zm extends UI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zm(e,n,r)}_apply(e){const n=this._parse(e);return zI(e._query,n),new Ms(e.firestore,e.converter,Kf(e._query,n))}_parse(e){const n=kd(e.firestore);return function(s,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){P_(m,f);const P=[];for(const D of m)P.push(R_(u,s,D));g={arrayValue:{values:P}}}else g=R_(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||P_(m,f),g=ED(l,o,m,f==="in"||f==="not-in");return gt.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class eg extends Jm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new eg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:er.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)zI(o,u),o=Kf(o,u)}(e._query,n),new Ms(e.firestore,e.converter,Kf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tg extends UI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Z(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Z(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gl(s,o)}(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Go(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Jr(t,e="asc"){const n=e,r=Ym("orderBy",t);return tg._create(r,n)}function R_(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new Z(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!UT(e)&&n.indexOf("/")!==-1)throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!oe.isDocumentKey(r))throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jv(t,new oe(r))}if(n instanceof ct)return jv(t,n._key);throw new Z(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dd(n)}.`)}function P_(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class SD{convertValue(e,n="none"){switch(xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ji(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Nc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>lt(o.doubleValue));return new yr(s)}convertGeoPoint(e){return new gr(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const n=Di(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Pe(aI(r),9688,{name:e});const i=new pl(r.get(1),r.get(3)),s=new oe(r.popFirst(5));return i.isEqual(n)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ps extends FI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ps._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",ps._jsonSchema={type:yt("string",ps._jsonSchemaVersion),bundleSource:yt("string","DocumentSnapshot"),bundleName:yt("string"),bundle:yt("string")};class Qu extends ps{data(e={}){return super.data(e)}}class So{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ra(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qu(this._firestore,this._userDataWriter,r.key,r,new Ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Qu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ra(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Qu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ra(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:AD(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=So._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function AD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}So._jsonSchemaVersion="firestore/querySnapshot/1.0",So._jsonSchema={type:yt("string",So._jsonSchemaVersion),bundleSource:yt("string","QuerySnapshot"),bundleName:yt("string"),bundle:yt("string")};class $I extends SD{constructor(e){super(),this.firestore=e}convertBytes(e){return new bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function sp(t,e,n){t=fr(t,ct);const r=fr(t.firestore,As),i=BI(t.converter,e,n);return Rd(r,[xI(kd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xn.none())])}function bt(t,e,n,...r){t=fr(t,ct);const i=fr(t.firestore,As),s=kd(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof Sd?_D(s,"updateDoc",t._key,e,n,r):vD(s,"updateDoc",t._key,e),Rd(i,[o.toMutation(t._key,xn.exists(!0))])}function Fo(t){return Rd(fr(t.firestore,As),[new Nm(t._key,xn.none())])}function Ai(t,e){const n=fr(t.firestore,As),r=Ue(t),i=BI(t.converter,e);return Rd(n,[xI(kd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function Zr(t,...e){var n,r,i;t=Oe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||C_(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(C_(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,c,f;if(t instanceof ct)c=fr(t.firestore,As),f=Rm(t._key.path),u={next:m=>{e[o]&&e[o](kD(c,t,m))},error:e[o+1],complete:e[o+2]};else{const m=fr(t,Ms);c=fr(m.firestore,As),f=m._query;const g=new $I(c);u={next:S=>{e[o]&&e[o](new So(c,g,m,S))},error:e[o+1],complete:e[o+2]},ID(t._query)}return function(g,S,P,D){const L=new lD(D),A=new j2(S,L,P);return g.asyncQueue.enqueueAndForget(async()=>U2(await E_(g),A)),()=>{L.Ou(),g.asyncQueue.enqueueAndForget(async()=>z2(await E_(g),A))}}(bI(c),f,l,u)}function Rd(t,e){return function(r,i){const s=new fs;return r.asyncQueue.enqueueAndForget(async()=>Z2(await dD(r),i,s)),s.promise}(bI(t),e)}function kD(t,e,n){const r=n.docs.get(e._key),i=new $I(t);return new ps(t,i,e._key,r,new Ra(n.hasPendingWrites,n.fromCache),e.converter)}function CD(){return new Gm("serverTimestamp")}(function(e,n=!0){(function(i){qo=i})(bs),cn(new Xt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new As(new vN(r.getProvider("auth-internal")),new wN(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pl(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),kt(Pv,Nv,e),kt(Pv,Nv,"esm2017")})();const jI="@firebase/installations",ng="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=1e4,qI=`w:${ng}`,WI="FIS_v2",RD="https://firebaseinstallations.googleapis.com/v1",PD=60*60*1e3,ND="installations",bD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new zi(ND,bD,DD);function KI(t){return t instanceof In&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI({projectId:t}){return`${RD}/projects/${t}/installations`}function QI(t){return{token:t.token,requestStatus:2,expiresIn:xD(t.expiresIn),creationTime:Date.now()}}async function XI(t,e){const r=(await e.json()).error;return ks.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function YI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function OD(t,{refreshToken:e}){const n=YI(t);return n.append("Authorization",MD(e)),n}async function JI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function xD(t){return Number(t.replace("s","000"))}function MD(t){return`${WI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GI(t),i=YI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:WI,appId:t.appId,sdkVersion:qI},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await JI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:QI(c.authToken)}}else throw await XI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=/^[cdef][\w-]{21}$/,op="";function UD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zD(t);return FD.test(n)?n:op}catch{return op}}function zD(t){return VD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Map;function tS(t,e){const n=Pd(t);nS(n,e),BD(n,e)}function nS(t,e){const n=eS.get(t);if(n)for(const r of n)r(e)}function BD(t,e){const n=$D();n&&n.postMessage({key:t,fid:e}),jD()}let cs=null;function $D(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=t=>{nS(t.data.key,t.data.fid)}),cs}function jD(){eS.size===0&&cs&&(cs.close(),cs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD="firebase-installations-database",qD=1,Cs="firebase-installations-store";let Sh=null;function rg(){return Sh||(Sh=od(HD,qD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cs)}}})),Sh}async function Fc(t,e){const n=Pd(t),i=(await rg()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&tS(t,e.fid),e}async function rS(t){const e=Pd(t),r=(await rg()).transaction(Cs,"readwrite");await r.objectStore(Cs).delete(e),await r.done}async function Nd(t,e){const n=Pd(t),i=(await rg()).transaction(Cs,"readwrite"),s=i.objectStore(Cs),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&tS(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t){let e;const n=await Nd(t.appConfig,r=>{const i=WD(r),s=KD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===op?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WD(t){const e=t||{fid:UD(),registrationStatus:0};return iS(e)}function KD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ks.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QD(t)}:{installationEntry:e}}async function GD(t,e){try{const n=await LD(t,e);return Fc(t.appConfig,n)}catch(n){throw KI(n)&&n.customData.serverCode===409?await rS(t.appConfig):await Fc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QD(t){let e=await N_(t.appConfig);for(;e.registrationStatus===1;)await ZI(100),e=await N_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ig(t);return r||n}return e}function N_(t){return Nd(t,e=>{if(!e)throw ks.create("installation-not-found");return iS(e)})}function iS(t){return XD(t)?{fid:t.fid,registrationStatus:0}:t}function XD(t){return t.registrationStatus===1&&t.registrationTime+HI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD({appConfig:t,heartbeatServiceProvider:e},n){const r=JD(t,n),i=OD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:qI,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await JI(()=>fetch(r,l));if(u.ok){const c=await u.json();return QI(c)}else throw await XI("Generate Auth Token",u)}function JD(t,{fid:e}){return`${GI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e=!1){let n;const r=await Nd(t.appConfig,s=>{if(!sS(s))throw ks.create("not-registered");const o=s.authToken;if(!e&&tO(o))return s;if(o.requestStatus===1)return n=ZD(t,e),s;{if(!navigator.onLine)throw ks.create("app-offline");const l=rO(s);return n=eO(t,l),l}});return n?await n:r.authToken}async function ZD(t,e){let n=await b_(t.appConfig);for(;n.authToken.requestStatus===1;)await ZI(100),n=await b_(t.appConfig);const r=n.authToken;return r.requestStatus===0?sg(t,e):r}function b_(t){return Nd(t,e=>{if(!sS(e))throw ks.create("not-registered");const n=e.authToken;return iO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eO(t,e){try{const n=await YD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Fc(t.appConfig,r),n}catch(n){if(KI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rS(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fc(t.appConfig,r)}throw n}}function sS(t){return t!==void 0&&t.registrationStatus===2}function tO(t){return t.requestStatus===2&&!nO(t)}function nO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PD}function rO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iO(t){return t.requestStatus===1&&t.requestTime+HI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(t){const e=t,{installationEntry:n,registrationPromise:r}=await ig(e);return r?r.catch(console.error):sg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(t,e=!1){const n=t;return await aO(n),(await sg(n,e)).token}async function aO(t){const{registrationPromise:e}=await ig(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){if(!t||!t.options)throw Ah("App Configuration");if(!t.name)throw Ah("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ah(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ah(t){return ks.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="installations",uO="installations-internal",cO=t=>{const e=t.getProvider("app").getImmediate(),n=lO(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dO=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,oS).getImmediate();return{getId:()=>sO(n),getToken:i=>oO(n,i)}};function hO(){cn(new Xt(oS,cO,"PUBLIC")),cn(new Xt(uO,dO,"PRIVATE"))}hO();kt(jI,ng);kt(jI,ng,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO="/firebase-messaging-sw.js",pO="/firebase-cloud-messaging-push-scope",aS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",mO="https://fcmregistrations.googleapis.com/v1",lS="google.c.a.c_id",gO="google.c.a.c_l",yO="google.c.a.ts",vO="google.c.a.e",D_=1e4;var O_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(O_||(O_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var El;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(El||(El={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function _O(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="fcm_token_details_db",EO=5,x_="fcm_token_object_Store";async function wO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(kh))return null;let e=null;return(await od(kh,EO,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(x_))return;const u=o.objectStore(x_),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const f=c;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:Sr(f.vapidKey)}}}else if(i===3){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Sr(f.auth),p256dh:Sr(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Sr(f.vapidKey)}}}else if(i===4){const f=c;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:Sr(f.auth),p256dh:Sr(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:Sr(f.vapidKey)}}}}}})).close(),await mh(kh),await mh("fcm_vapid_details_db"),await mh("undefined"),TO(e)?e:null}function TO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO="firebase-messaging-database",SO=1,wl="firebase-messaging-store";let Ch=null;function uS(){return Ch||(Ch=od(IO,SO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wl)}}})),Ch}async function AO(t){const e=cS(t),r=await(await uS()).transaction(wl).objectStore(wl).get(e);if(r)return r;{const i=await wO(t.appConfig.senderId);if(i)return await og(t,i),i}}async function og(t,e){const n=cS(t),i=(await uS()).transaction(wl,"readwrite");return await i.objectStore(wl).put(e,n),await i.done,e}function cS({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Qt=new zi("messaging","Messaging",kO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CO(t,e){const n=await lg(t),r=dS(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(ag(t.appConfig),i)).json()}catch(o){throw Qt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Qt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Qt.create("token-subscribe-no-token");return s.token}async function RO(t,e){const n=await lg(t),r=dS(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${ag(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Qt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Qt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Qt.create("token-update-no-token");return s.token}async function PO(t,e){const r={method:"DELETE",headers:await lg(t)};try{const s=await(await fetch(`${ag(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Qt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Qt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ag({projectId:t}){return`${mO}/projects/${t}/registrations`}async function lg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function dS({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==aS&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=7*24*60*60*1e3;async function bO(t){const e=await OO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Sr(e.getKey("auth")),p256dh:Sr(e.getKey("p256dh"))},r=await AO(t.firebaseDependencies);if(r){if(xO(r.subscriptionOptions,n))return Date.now()>=r.createTime+NO?DO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await PO(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return M_(t.firebaseDependencies,n)}else return M_(t.firebaseDependencies,n)}async function DO(t,e){try{const n=await RO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await og(t.firebaseDependencies,r),n}catch(n){throw n}}async function M_(t,e){const r={token:await CO(t,e),createTime:Date.now(),subscriptionOptions:e};return await og(t,r),r.token}async function OO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:_O(e)})}function xO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return MO(e,t),LO(e,t),VO(e,t),e}function MO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function LO(t,e){e.data&&(t.data=e.data)}function VO(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){return typeof t=="object"&&!!t&&lS in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t){if(!t||!t.options)throw Rh("App Configuration Object");if(!t.name)throw Rh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Rh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Rh(t){return Qt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=UO(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t){try{t.swRegistration=await navigator.serviceWorker.register(fO,{scope:pO}),t.swRegistration.update().catch(()=>{}),await $O(t.swRegistration)}catch(e){throw Qt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function $O(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${D_} ms`)),D_),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)===null||o===void 0?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(t,e){if(!e&&!t.swRegistration&&await BO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Qt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=aS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e){if(!navigator)throw Qt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Qt.create("permission-blocked");return await HO(t,e==null?void 0:e.vapidKey),await jO(t,e==null?void 0:e.serviceWorkerRegistration),bO(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qO(t,e,n){const r=WO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[lS],message_name:n[gO],message_time:n[yO],message_device_time:Math.floor(Date.now()/1e3)})}function WO(t){switch(t){case El.NOTIFICATION_CLICKED:return"notification_open";case El.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===El.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(L_(n)):t.onMessageHandler.next(L_(n)));const r=n.data;FO(r)&&r[vO]==="1"&&await qO(t,n.messageType,r)}const V_="@firebase/messaging",F_="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=t=>{const e=new zO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>KO(e,n)),e},QO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>hS(e,r)}};function XO(){cn(new Xt("messaging",GO,"PUBLIC")),cn(new Xt("messaging-internal",QO,"PRIVATE")),kt(V_,F_),kt(V_,F_,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(){try{await cm()}catch{return!1}return typeof window<"u"&&um()&&C0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t=Pl()){return fS().then(e=>{if(!e)throw Qt.create("unsupported-browser")},e=>{throw Qt.create("indexed-db-unsupported")}),Bi(Oe(t),"messaging").getImmediate()}async function JO(t,e){return t=Oe(t),hS(t,e)}XO();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pS=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ex={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>F.createElement("svg",{ref:u,...ex,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:pS("lucide",i),...l},[...o.map(([c,f])=>F.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(t,e)=>{const n=F.forwardRef(({className:r,...i},s)=>F.createElement(tx,{ref:s,iconNode:e,className:pS(`lucide-${ZO(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Xe("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=Xe("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Xe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Xe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Xe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Xe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=Xe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Xe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=Xe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Xe("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=Xe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=Xe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Xe("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=Xe("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=Xe("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=Xe("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=Xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Xe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=Xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=Xe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Xe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=Xe("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Xe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=Xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var mx="firebase",gx="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(mx,gx,"app");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="analytics",yx="firebase_id",vx="origin",_x=60*1e3,Ex="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new sd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mn=new zi("analytics","Analytics",wx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){if(!t.startsWith(cg)){const e=Mn.create("invalid-gtag-resource",{gtagURL:t});return un.warn(e.message),""}return t}function yS(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ix(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Sx(t,e){const n=Ix("firebase-js-sdk-policy",{createScriptURL:Tx}),r=document.createElement("script"),i=`${cg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ax(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function kx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await yS(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){un.error(l)}t("config",i,s)}async function Cx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await yS(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){un.error(s)}}function Rx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Cx(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await kx(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){un.error(l)}}return i}function Px(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Rx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Nx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(cg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=30,Dx=1e3;class Ox{constructor(e={},n=Dx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vS=new Ox;function xx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Mx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:xx(r)},s=Ex.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Mn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Lx(t,e=vS,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Mn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Mn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Ux;return setTimeout(async()=>{l.abort()},_x),_S({appId:r,apiKey:i,measurementId:s},o,l,e)}async function _S(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=vS){var s;const{appId:o,measurementId:l}=t;try{await Vx(r,e)}catch(u){if(l)return un.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Mx(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Fx(c)){if(i.deleteThrottleMetadata(o),l)return un.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Zy(n,i.intervalMillis,bx):Zy(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,m),un.debug(`Calling attemptFetch again in ${f} millis`),_S(t,m,r,i)}}function Vx(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Mn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Fx(t){if(!(t instanceof In)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ux{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(){if(um())try{await cm()}catch(t){return un.warn(Mn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return un.warn(Mn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $x(t,e,n,r,i,s,o){var l;const u=Lx(t);u.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&un.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>un.error(S)),e.push(u);const c=Bx().then(S=>{if(S)return r.getId()}),[f,m]=await Promise.all([u,c]);Nx(s)||Sx(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[vx]="firebase",g.update=!0,m!=null&&(g[yx]=m),i("config",f.measurementId,g),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.app=e}_delete(){return delete Ha[this.app.options.appId],Promise.resolve()}}let Ha={},j_=[];const H_={};let Ph="dataLayer",Hx="gtag",q_,ES,W_=!1;function qx(){const t=[];if(k0()&&t.push("This is a browser extension environment."),C0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Mn.create("invalid-analytics-context",{errorInfo:e});un.warn(n.message)}}function Wx(t,e,n){qx();const r=t.options.appId;if(!r)throw Mn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)un.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mn.create("no-api-key");if(Ha[r]!=null)throw Mn.create("already-exists",{id:r});if(!W_){Ax(Ph);const{wrappedGtag:s,gtagCore:o}=Px(Ha,j_,H_,Ph,Hx);ES=s,q_=o,W_=!0}return Ha[r]=$x(t,j_,H_,e,q_,Ph,n),new jx(t)}function Kx(t,e,n,r){t=Oe(t),zx(ES,Ha[t.app.options.appId],e,n,r).catch(i=>un.error(i))}const K_="@firebase/analytics",G_="0.10.17";function Gx(){cn(new Xt($_,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Wx(r,i,n)},"PUBLIC")),cn(new Xt("analytics-internal",t,"PRIVATE")),kt(K_,G_),kt(K_,G_,"esm2017");function t(e){try{const n=e.getProvider($_).getImmediate();return{logEvent:(r,i,s)=>Kx(n,r,i,s)}}catch(n){throw Mn.create("interop-component-reg-failed",{reason:n})}}}Gx();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="firebasestorage.googleapis.com",TS="storageBucket",Qx=2*60*1e3,Xx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends In{constructor(e,n,r=0){super(Nh(e),`Firebase Storage: ${n} (${Nh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function Nh(t){return"storage/"+t}function dg(){const t="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,t)}function Yx(t){return new at(ot.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Jx(t){return new at(ot.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Zx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new at(ot.UNAUTHENTICATED,t)}function eM(){return new at(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tM(t){return new at(ot.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nM(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rM(){return new at(ot.CANCELED,"User canceled the upload/download.")}function iM(t){return new at(ot.INVALID_URL,"Invalid URL '"+t+"'.")}function sM(t){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oM(){return new at(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+TS+"' property when initializing the app?")}function aM(){return new at(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lM(){return new at(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uM(t){return new at(ot.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lp(t){return new at(ot.INVALID_ARGUMENT,t)}function IS(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function cM(t){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qa(t,e){return new at(ot.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function va(t){throw new at(ot.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=vn.makeFromUrl(e,n)}catch{return new vn(e,"")}if(r.path==="")return r;throw sM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(M){M.path_=decodeURIComponent(M.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${i}/o${g}`,"i"),P={bucket:1,path:3},D=n===wS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",A=new RegExp(`^https?://${D}/${i}/${L}`,"i"),k=[{regex:l,indices:u,postModify:s},{regex:S,indices:P,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let M=0;M<k.length;M++){const q=k[M],z=q.regex.exec(e);if(z){const w=z[q.indices.bucket];let v=z[q.indices.path];v||(v=""),r=new vn(w,v),q.postModify(r);break}}if(r==null)throw iM(e);return r}}class dM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...L){c||(c=!0,e.apply(null,L))}function m(L){i=setTimeout(()=>{i=null,t(S,u())},L)}function g(){s&&clearTimeout(s)}function S(L,...A){if(c){g();return}if(L){g(),f.call(null,L,...A);return}if(u()||o){g(),f.call(null,L,...A);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let P=!1;function D(L){P||(P=!0,g(),!c&&(i!==null?(L||(l=2),clearTimeout(i),m(0)):L||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function fM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){return t!==void 0}function mM(t){return typeof t=="object"&&!Array.isArray(t)}function hg(t){return typeof t=="string"||t instanceof String}function Q_(t){return fg()&&t instanceof Blob}function fg(){return typeof Blob<"u"}function X_(t,e,n,r){if(r<e)throw lp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function SS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ms;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ms||(ms={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e,n,r,i,s,o,l,u,c,f,m,g=!0,S=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,D)=>{this.resolve_=P,this.reject_=D,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Au(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===ms.NO_ERROR,u=s.getStatus();if(!l||gM(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===ms.ABORT;r(!1,new Au(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Au(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());pM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=dg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?IS():rM();o(u)}else{const u=nM();o(u)}};this.canceled_?n(!1,new Au(!1,null,!0)):this.backoffId_=hM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Au{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _M(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function EM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TM(t,e,n,r,i,s,o=!0,l=!1){const u=SS(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return EM(f,e),vM(f,n),_M(f,s),wM(f,r),new yM(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function SM(...t){const e=IM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(fg())return new Blob(t);throw new at(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t){if(typeof atob>"u")throw uM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bh{constructor(e,n){this.data=e,this.contentType=n||null}}function CM(t,e){switch(t){case lr.RAW:return new bh(AS(e));case lr.BASE64:case lr.BASE64URL:return new bh(kS(t,e));case lr.DATA_URL:return new bh(PM(e),NM(e))}throw dg()}function AS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function RM(t){let e;try{e=decodeURIComponent(t)}catch{throw qa(lr.DATA_URL,"Malformed data URL.")}return AS(e)}function kS(t,e){switch(t){case lr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw qa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case lr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw qa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kM(e)}catch(i){throw i.message.includes("polyfill")?i:qa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class CS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qa(lr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=bM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PM(t){const e=new CS(t);return e.base64?kS(lr.BASE64,e.rest):RM(e.rest)}function NM(t){return new CS(t).contentType}function bM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){let r=0,i="";Q_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Q_(this.data_)){const r=this.data_,i=AM(r,e,n);return i===null?null:new ui(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ui(r,!0)}}static getBlob(...e){if(fg()){const n=e.map(r=>r instanceof ui?r.data_:r);return new ui(SM.apply(null,n))}else{const n=e.map(o=>hg(o)?CM(lr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new ui(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){let e;try{e=JSON.parse(t)}catch{return null}return mM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function OM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function PS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t,e){return e}class Wt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||xM}}let ku=null;function MM(t){return!hg(t)||t.length<2?t:PS(t)}function NS(){if(ku)return ku;const t=[];t.push(new Wt("bucket")),t.push(new Wt("generation")),t.push(new Wt("metageneration")),t.push(new Wt("name","fullPath",!0));function e(s,o){return MM(o)}const n=new Wt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Wt("size");return i.xform=r,t.push(i),t.push(new Wt("timeCreated")),t.push(new Wt("updated")),t.push(new Wt("md5Hash",null,!0)),t.push(new Wt("cacheControl",null,!0)),t.push(new Wt("contentDisposition",null,!0)),t.push(new Wt("contentEncoding",null,!0)),t.push(new Wt("contentLanguage",null,!0)),t.push(new Wt("contentType",null,!0)),t.push(new Wt("metadata","customMetadata",!0)),ku=t,ku}function LM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new vn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function VM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return LM(r,t),r}function bS(t,e,n){const r=RS(e);return r===null?null:VM(t,r,n)}function FM(t,e,n,r){const i=RS(e);if(i===null||!hg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),S=pg(g,n,r),P=SS({alt:"media",token:c});return S+P})[0]}function UM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class DS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){if(!t)throw dg()}function zM(t,e){function n(r,i){const s=bS(t,i,e);return OS(s!==null),s}return n}function BM(t,e){function n(r,i){const s=bS(t,i,e);return OS(s!==null),FM(s,i,t.host,t._protocol)}return n}function xS(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=eM():i=Zx():n.getStatus()===402?i=Jx(t.bucket):n.getStatus()===403?i=tM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $M(t){const e=xS(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Yx(t.path)),s.serverResponse=i.serverResponse,s}return n}function jM(t,e,n){const r=e.fullServerUrl(),i=pg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new DS(i,s,BM(t,n),o);return l.errorHandler=$M(e),l}function HM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=HM(null,e)),r}function WM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let M=0;M<2;M++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=qM(e,r,i),f=UM(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",S=ui.getBlob(m,r,g);if(S===null)throw aM();const P={name:c.fullPath},D=pg(s,t.host,t._protocol),L="POST",A=t.maxUploadRetryTime,_=new DS(D,L,zM(t,n),A);return _.urlParams=P,_.headers=o,_.body=S.uploadData(),_.errorHandler=xS(e),_}class KM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ms.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ms.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ms.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw va("cannot .send() more than once");if($r(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw va("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw va("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw va("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw va("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GM extends KM{initXhr(){this.xhr_.responseType="text"}}function MS(){return new GM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this._service=e,n instanceof vn?this._location=n:this._location=vn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Rs(e,n)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return PS(this._location.path)}get storage(){return this._service}get parent(){const e=DM(this._location.path);if(e===null)return null;const n=new vn(this._location.bucket,e);return new Rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cM(e)}}function QM(t,e,n){t._throwIfRoot("uploadBytes");const r=WM(t.storage,t._location,NS(),new ui(e,!0),n);return t.storage.makeRequestWithTokens(r,MS).then(i=>({metadata:i,ref:t}))}function XM(t){t._throwIfRoot("getDownloadURL");const e=jM(t.storage,t._location,NS());return t.storage.makeRequestWithTokens(e,MS).then(n=>{if(n===null)throw lM();return n})}function YM(t,e){const n=OM(t._location.path,e),r=new vn(t._location.bucket,n);return new Rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JM(t){return/^[A-Za-z]+:\/\//.test(t)}function ZM(t,e){return new Rs(t,e)}function LS(t,e){if(t instanceof mg){const n=t;if(n._bucket==null)throw oM();const r=new Rs(n,n._bucket);return e!=null?LS(r,e):r}else return e!==void 0?YM(t,e):t}function eL(t,e){if(e&&JM(e)){if(t instanceof mg)return ZM(t,e);throw lp("To use ref(service, url), the first argument must be a Storage instance.")}else return LS(t,e)}function Y_(t,e){const n=e==null?void 0:e[TS];return n==null?null:vn.makeFromBucketSpec(n,t)}function tL(t,e,n,r={}){t.host=`${e}:${n}`;const i=$r(e);i&&(rd(`https://${t.host}/b`),id("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:A0(s,t.app.options.projectId))}class mg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=wS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qx,this._maxUploadRetryTime=Xx,this._requests=new Set,i!=null?this._bucket=vn.makeFromBucketSpec(i,this._host):this._bucket=Y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=Y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){X_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){X_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new dM(IS());{const o=TM(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const J_="@firebase/storage",Z_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="storage";function up(t,e,n){return t=Oe(t),QM(t,e,n)}function cp(t){return t=Oe(t),XM(t)}function dp(t,e){return t=Oe(t),eL(t,e)}function nL(t=Pl(),e){t=Oe(t);const r=Bi(t,VS).getImmediate({identifier:e}),i=lm("storage");return i&&rL(r,...i),r}function rL(t,e,n,r={}){tL(t,e,n,r)}function iL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new mg(n,r,i,e,bs)}function sL(){cn(new Xt(VS,iL,"PUBLIC").setMultipleInstances(!0)),kt(J_,Z_,""),kt(J_,Z_,"esm2017")}sL();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL="type.googleapis.com/google.protobuf.Int64Value",aL="type.googleapis.com/google.protobuf.UInt64Value";function FS(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Uc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Uc(e));if(typeof t=="function"||typeof t=="object")return FS(t,e=>Uc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Uo(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case oL:case aL:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Uo(e)):typeof t=="function"||typeof t=="object"?FS(t,e=>Uo(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class sn extends In{constructor(e,n,r){super(`${gg}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,sn.prototype)}}function lL(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function zc(t,e){let n=lL(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!eE[o])return new sn("internal","internal");n=eE[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=Uo(i))}}catch{}return n==="ok"?null:new sn(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,mn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="us-central1",cL=/^data: (.*?)(?:\n|$)/;function dL(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new sn("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class hL{constructor(e,n,r,i,s=hp,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new uL(e,n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=hp}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function fL(t,e,n){const r=$r(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(rd(t.emulatorOrigin),id("Functions",!0))}function pL(t,e,n){const r=i=>gL(t,e,i,{});return r.stream=(i,s)=>vL(t,e,i,s),r}async function mL(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function US(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function gL(t,e,n,r){const i=t._url(e);return yL(t,i,n,r)}async function yL(t,e,n,r){n=Uc(n);const i={data:n},s=await US(t,r),o=r.timeout||7e4,l=dL(o),u=await Promise.race([mL(e,i,s,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new sn("cancelled","Firebase Functions instance was deleted.");const c=zc(u.status,u.json);if(c)throw c;if(!u.json)throw new sn("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new sn("internal","Response is missing data field.");return{data:Uo(f)}}function vL(t,e,n,r){const i=t._url(e);return _L(t,i,n,r||{})}async function _L(t,e,n,r){var i;n=Uc(n);const s={data:n},o=await US(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:o,signal:r==null?void 0:r.signal})}catch(S){if(S instanceof Error&&S.name==="AbortError"){const D=new sn("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const P=zc(0,null);return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}let u,c;const f=new Promise((S,P)=>{u=S,c=P});(i=r==null?void 0:r.signal)===null||i===void 0||i.addEventListener("abort",()=>{const S=new sn("cancelled","Request was cancelled.");c(S)});const m=l.body.getReader(),g=EL(m,u,c,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const S=g.getReader();return{async next(){const{value:P,done:D}=await S.read();return{value:P,done:D}},async return(){return await S.cancel(),{done:!0,value:void 0}}}}},data:f}}function EL(t,e,n,r){const i=(o,l)=>{const u=o.match(cL);if(!u)return;const c=u[1];try{const f=JSON.parse(c);if("result"in f){e(Uo(f.result));return}if("message"in f){l.enqueue(Uo(f.message));return}if("error"in f){const m=zc(0,f);l.error(m),n(m);return}}catch(f){if(f instanceof sn){l.error(f),n(f);return}}},s=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const c=new sn("cancelled","Request was cancelled");return o.error(c),n(c),Promise.resolve()}try{const{value:c,done:f}=await t.read();if(f){l.trim()&&i(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new sn("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=s.decode(c,{stream:!0});const m=l.split(`
`);l=m.pop()||"";for(const g of m)g.trim()&&i(g.trim(),o);return u()}catch(c){const f=c instanceof sn?c:zc(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const tE="@firebase/functions",nE="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL="auth-internal",TL="app-check-internal",IL="messaging-internal";function SL(t){const e=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),s=n.getProvider(wL),o=n.getProvider(IL),l=n.getProvider(TL);return new hL(i,s,o,l,r)};cn(new Xt(gg,e,"PUBLIC").setMultipleInstances(!0)),kt(tE,nE,t),kt(tE,nE,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t=Pl(),e=hp){const r=Bi(Oe(t),gg).getImmediate({identifier:e}),i=lm("functions");return i&&kL(r,...i),r}function kL(t,e,n){fL(Oe(t),e,n)}function zS(t,e,n){return pL(Oe(t),e)}SL();const CL={apiKey:"AIzaSyAto_nGW6s0pEdDZ2RmkXAjrU3x_oL3etA",authDomain:"pcshop-web-manager.firebaseapp.com",projectId:"pcshop-web-manager",storageBucket:"pcshop-web-manager.firebasestorage.app",messagingSenderId:"243721610856",appId:"1:243721610856:web:67c6a703252b6bc472bddd",measurementId:"G-ET66342BXG"},Ul=N0(CL),Dh=pN(Ul),pe=fD(Ul),fp=nL(Ul),BS=AL(Ul,"europe-west1"),RL=zS(BS,"getHardveraproPrice"),PL=zS(BS,"getVintedPrice");async function NL(){return await fS()?YO(Ul):null}const Oh=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő"];function bL({parts:t,userEmail:e}){const[n,r]=F.useState(!1),[i,s]=F.useState("Összes"),[o,l]=F.useState(""),[u,c]=F.useState(!1),[f,m]=F.useState(null),[g,S]=F.useState(!1),[P,D]=F.useState(""),[L,A]=F.useState("Memória"),[_,k]=F.useState(""),[M,q]=F.useState(""),[z,w]=F.useState(!1),[v,E]=F.useState(!1),[T,R]=F.useState(!1),[N,I]=F.useState(null),[Ne,ue]=F.useState(null),[_e,ze]=F.useState(null),[O,j]=F.useState(null),[K,ne]=F.useState(!1),[J,Y]=F.useState("");function ie(){m(null),S(!1),D(""),A(i!=="Összes"?i:"Videókártya"),k(""),q(""),w(!1),E(!1),R(!1),I(null),ue(null),ze(null),j(null),Y("")}function Ke(){ie(),c(!0)}function ke($,ye=!1){m($),S(ye),D($.name||""),A(Oh.includes($.category)?$.category:"Memória");const Re=$.serialNumber==="Úton";k(ye&&Re?"":$.serialNumber||""),q($.purchasePrice!==void 0&&$.purchasePrice!==null?String($.purchasePrice):""),w(ye?!1:$.status==="Szállítás alatt"),E(!!$.paidWithOwnCard),R(!!$.hasInvoice),I($.invoiceFileUrl||null),ue(null),ze($.imageUrl||null),j(null),Y(""),c(!0),window.scrollTo({top:0,behavior:"smooth"})}const me=Number(M),Zt=M.trim()!==""&&!Number.isNaN(me)&&me>=0,jr=!!(Ne||N),vt=[];P.trim()||vt.push("Add meg a típus nevét"),Zt||vt.push("Adj meg beszerzési árat (0 Ft is lehet)"),!z&&!_.trim()&&vt.push("Add meg a sorozatszámot (SN), vagy pipáld be a 'Szállítás alatt' opciót"),T&&!z&&!jr&&vt.push("Csatolj számlafájlt, vagy vedd ki a 'Számlás' pipát");const dt=vt.length===0;async function Sn($){var _t,b;const[ye,Re]=await Promise.allSettled([RL({query:$}),PL({query:$})]);return[...ye.status==="fulfilled"?((_t=ye.value.data)==null?void 0:_t.top3)||[]:[],...Re.status==="fulfilled"?((b=Re.value.data)==null?void 0:b.top3)||[]:[]].sort((le,xe)=>le.price-xe.price).slice(0,3)}async function An($){if($.preventDefault(),Y(""),!dt){Y(vt.join(" • "));return}ne(!0);try{let ye=N;if(T&&Ne){const b=dp(fp,`invoices/${Date.now()}_${Ne.name}`);await up(b,Ne),ye=await cp(b)}else T||(ye=null);let Re=_e;if(O){const b=dp(fp,`parts/${Date.now()}_${O.name}`);await up(b,O),Re=await cp(b)}const ae=z?"Szállítás alatt":f?f.status==="Szállítás alatt"?"Készleten":f.status||"Készleten":"Készleten",_t={name:P.trim(),category:L,serialNumber:_.trim()||(z?"Úton":"Nincs"),purchasePrice:me,status:ae,paidWithOwnCard:v,paidByEmail:v?(f==null?void 0:f.paidByEmail)||e:null,hasInvoice:T,invoiceFileUrl:ye,imageUrl:Re||null};if(f)await bt(Ue(pe,"parts",f.id),_t);else{let b=[];try{b=await Sn(P.trim())}catch{b=[]}await Ai(Bt(pe,"parts"),{..._t,topMarketOffers:b,createdAt:Date.now()})}ie(),c(!1)}catch(ye){console.error("Mentési hiba:",ye),Y(`Hiba mentés közben: ${(ye==null?void 0:ye.message)||"Ismeretlen hiba"}`)}finally{ne(!1)}}async function dn($){confirm(`Biztosan törlöd: ${$.name}?`)&&(await Fo(Ue(pe,"parts",$.id)),(f==null?void 0:f.id)===$.id&&(ie(),c(!1)))}async function Fn($){var _t,b;const ye=((b=(_t=$.topMarketOffers)==null?void 0:_t[0])==null?void 0:b.price)??$.purchasePrice??0,Re=prompt(`${$.name} eladási ára (Ft):`,String(ye));if(Re===null||Re.trim()==="")return;const ae=Number(Re);Number.isNaN(ae)||ae<0||await bt(Ue(pe,"parts",$.id),{status:"Eladva",soldPrice:ae,soldAt:Date.now()})}const Un=t.filter($=>n?$.status==="Eladva":$.status!=="Eladva"),Hr=Un.filter($=>i==="Összes"||$.category===i).filter($=>!o.trim()||($.name||"").toLowerCase().includes(o.toLowerCase())||($.serialNumber||"").toLowerCase().includes(o.toLowerCase()));return h.createElement("div",null,h.createElement("div",{className:"row",style:{marginBottom:14}},h.createElement("h2",{style:{margin:0}},"Készlet & Rendelés"),h.createElement("button",{className:"btn",onClick:()=>u?(ie(),c(!1)):Ke()},u?h.createElement(kr,{size:16}):h.createElement(ki,{size:16}),u?"Bezárás":"Új tétel / Rendelés")),u&&h.createElement("form",{className:"card",onSubmit:An},h.createElement("div",{className:"row",style:{marginBottom:10}},h.createElement("h3",{style:{margin:0}},g?`Megérkezett: ${P||(f==null?void 0:f.name)}`:f?`Szerkesztés: ${f.name}`:"Új tétel / Rendelés felvétele"),g&&h.createElement("span",{className:"badge badge-orange"},"Átvétel • Készletre vétel")),h.createElement("div",{className:"grid-2"},h.createElement("input",{placeholder:"Típus (pl. RTX 3070)",value:P,onChange:$=>D($.target.value),required:!0}),h.createElement("select",{value:L,onChange:$=>A($.target.value)},Oh.map($=>h.createElement("option",{key:$,value:$},$))),h.createElement("input",{placeholder:z?"SN szám (átvételkor is megadható)":"Sorozatszám (SN)",value:_,onChange:$=>k($.target.value)}),h.createElement("input",{type:"number",min:"0",placeholder:"Beszerzési ár (Ft) — 0 is lehet",value:M,onChange:$=>q($.target.value),required:!0})),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("label",null,h.createElement("input",{type:"checkbox",style:{width:"auto"},checked:z,onChange:$=>w($.target.checked)})," ","Szállítás alatt"),h.createElement("label",null,h.createElement("input",{type:"checkbox",style:{width:"auto"},checked:v,onChange:$=>E($.target.checked)})," ","Saját kártyával fizetve"),h.createElement("label",null,h.createElement("input",{type:"checkbox",style:{width:"auto"},checked:T,onChange:$=>R($.target.checked)})," ","Számlás")),h.createElement("div",{style:{marginTop:12}},h.createElement("div",{className:"muted",style:{marginBottom:4}},h.createElement(ax,{size:13,style:{verticalAlign:"middle",marginRight:4}}),"Termékkép csatolása (opcionális)"),_e&&!O&&h.createElement("div",{style:{marginBottom:6}},h.createElement("img",{src:_e,alt:P||"Termékkép",style:{maxHeight:110,borderRadius:8,objectFit:"cover",border:"1px solid var(--border)"}})),h.createElement("input",{type:"file",accept:"image/*",onChange:$=>{var ye;return j(((ye=$.target.files)==null?void 0:ye[0])||null)}})),T&&h.createElement("div",{style:{marginTop:12}},h.createElement("div",{className:"muted",style:{marginBottom:4}},N&&!Ne?"Jelenleg csatolt számla megmarad (új fájl kiválasztásával cserélhető):":z?"Számla (átvételkor is csatolható)":"Számla feltöltése (PDF/kép) — vagy vedd ki a 'Számlás' pipát"),N&&h.createElement("div",{style:{marginBottom:6}},h.createElement("a",{href:N,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},h.createElement(Tl,{size:14})," Meglévő számla megtekintése")),h.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:$=>{var ye;return ue(((ye=$.target.files)==null?void 0:ye[0])||null)}})),!dt&&h.createElement("div",{className:"muted",style:{marginTop:10}},"Hiányzik: ",vt.join(" • ")),J&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},J),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:!dt||K},K?"Mentés...":f?"Módosítások mentése":"Mentés"),h.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>{ie(),c(!1)}},"Mégse"))),h.createElement("div",{className:"row",style:{marginBottom:10}},h.createElement("div",{className:"row"},h.createElement("button",{className:`btn ${n?"btn-ghost":""}`,onClick:()=>r(!1)},"Aktív & Úton"),h.createElement("button",{className:`btn ${n?"":"btn-ghost"}`,onClick:()=>r(!0)},"Eladott")),h.createElement("div",{style:{flex:1,minWidth:200}},h.createElement("input",{placeholder:"Keresés név vagy SN alapján...",value:o,onChange:$=>l($.target.value)}))),h.createElement("div",{className:"row",style:{marginBottom:14}},h.createElement("button",{className:`btn ${i==="Összes"?"":"btn-ghost"}`,style:{padding:"6px 11px",fontSize:12},onClick:()=>s("Összes")},"Összes (",Un.length,")"),Oh.map($=>{const ye=Un.filter(Re=>Re.category===$).length;return h.createElement("button",{key:$,className:`btn ${i===$?"":"btn-ghost"}`,style:{padding:"6px 11px",fontSize:12},onClick:()=>s($)},$," (",ye,")")})),h.createElement("div",{className:"grid-2"},Hr.map($=>{var ye;return h.createElement("div",{className:"card",key:$.id},h.createElement("div",{className:"row"},h.createElement("strong",null,$.name),h.createElement("div",{className:"row"},h.createElement("span",{className:"badge badge-indigo"},$.category||"Egyéb"),$.paidWithOwnCard&&h.createElement("span",{className:"badge badge-purple"},"Saját kártyás"),h.createElement("span",{className:`badge ${$.status==="Szállítás alatt"?"badge-orange":$.status==="Eladva"?"badge-green":"badge-blue"}`},$.status))),$.imageUrl&&h.createElement("div",{style:{marginTop:8}},h.createElement("a",{href:$.imageUrl,target:"_blank",rel:"noreferrer"},h.createElement("img",{src:$.imageUrl,alt:$.name,style:{width:"100%",maxHeight:170,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)"}}))),h.createElement("div",{className:"muted",style:{marginTop:6}},"SN: ",$.serialNumber," • Vétel: ",($.purchasePrice??0).toLocaleString("hu-HU")," Ft",$.status==="Eladva"&&$.soldPrice!==void 0&&$.soldPrice!==null?` → Eladva: ${Number($.soldPrice).toLocaleString("hu-HU")} Ft`:""),h.createElement("div",{className:"row",style:{marginTop:10}},h.createElement("div",{className:"row"},$.status==="Szállítás alatt"&&h.createElement("button",{className:"btn btn-orange",onClick:()=>ke($,!0)},h.createElement(ix,{size:15})," Megérkezett"),$.status==="Készleten"&&h.createElement("button",{className:"btn btn-green",onClick:()=>Fn($)},h.createElement(nx,{size:15})," Eladás rögzítése")),h.createElement("div",{className:"row"},h.createElement("button",{className:"btn btn-ghost",onClick:()=>ke($,!1)},h.createElement(ug,{size:14})," Szerkesztés"),h.createElement("button",{className:"btn btn-red",onClick:()=>dn($),title:"Törlés"},h.createElement(Ci,{size:14})))),$.status!=="Eladva"&&((ye=$.topMarketOffers)==null?void 0:ye.length)>0&&h.createElement("div",{className:"offer-box"},h.createElement("div",{className:"muted"},"Top 3 legolcsóbb (5+ értékelés):"),$.topMarketOffers.map((Re,ae)=>{var _t;return h.createElement("div",{className:"row",key:Re.url+ae,style:{marginTop:4}},h.createElement("span",{className:ae===0?"green":""},"#",ae+1," ",(_t=Re.price)==null?void 0:_t.toLocaleString("hu-HU")," Ft (+",Re.sellerPositiveRating,")"),h.createElement("a",{href:Re.url,target:"_blank",rel:"noreferrer",style:{color:"#60a5fa"}},h.createElement(mS,{size:13})))})),$.invoiceFileUrl&&h.createElement("div",{style:{marginTop:8}},h.createElement("a",{href:$.invoiceFileUrl,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},h.createElement(Tl,{size:14})," Számla megnyitása / letöltése")))})))}const rE=[{key:"cpu",label:"Processzor",category:"Processzor",multi:!1},{key:"gpu",label:"Videókártya",category:"Videókártya",multi:!1},{key:"motherboard",label:"Alaplap",category:"Alaplap",multi:!1},{key:"ram",label:"Memória (RAM)",category:"Memória",multi:!0},{key:"storage",label:"Háttértár (SSD/HDD)",category:"Háttértár",multi:!0},{key:"psu",label:"Tápegység",category:"Tápegység",multi:!1},{key:"case",label:"Ház",category:"Ház",multi:!1},{key:"cooler",label:"Hűtő",category:"Hűtő",multi:!1}],xh={cpu:"",gpu:"",motherboard:"",psu:"",case:"",cooler:""},iE={ram:[""],storage:[""]};function DL({parts:t=[],builds:e=[]}){const[n,r]=F.useState(!1),[i,s]=F.useState(null),[o,l]=F.useState(""),[u,c]=F.useState(!1),[f,m]=F.useState(""),[g,S]=F.useState(!1),[P,D]=F.useState(""),[L,A]=F.useState(xh),[_,k]=F.useState(iE),M=F.useMemo(()=>{const O=new Set((i==null?void 0:i.partIds)||[]);return t.filter(j=>O.has(j.id)||j.status==="Készleten"&&!j.buildId)},[t,i]),q=F.useMemo(()=>{const O=Object.values(L).filter(Boolean);return Object.values(_).forEach(j=>{(j||[]).forEach(K=>{K&&O.push(K)})}),O},[L,_]),z=F.useMemo(()=>{const O=new Map(M.map(j=>[j.id,j]));return q.map(j=>O.get(j)).filter(Boolean)},[M,q]),w=F.useMemo(()=>z.reduce((O,j)=>O+Number(j.purchasePrice||0),0),[z]);function v(){s(null),l(""),c(!1),m(""),D(""),A(xh),k(iE)}function E(){v(),r(!0)}function T(O){const j=new Set(O.partIds||[]),K=t.filter(ke=>j.has(ke.id)),ne={...xh},J={ram:[],storage:[]},Y=new Set;rE.forEach(ke=>{const me=K.filter(Zt=>(Zt.category||"").toLowerCase()===ke.category.toLowerCase());ke.multi?(me.forEach(Zt=>{J[ke.key].push(Zt.id),Y.add(Zt.id)}),J[ke.key].length===0&&J[ke.key].push("")):me[0]&&(ne[ke.key]=me[0].id,Y.add(me[0].id))});const ie=K.filter(ke=>!Y.has(ke.id));if(ie.length>0){const ke=J.storage.filter(Boolean);J.storage=[...ke,...ie.map(me=>me.id)]}s(O),l(O.name||"");const Ke=O.status==="Eladva";c(Ke),m(Ke&&O.soldPrice!==null&&O.soldPrice!==void 0?String(O.soldPrice):""),A(ne),k(J),D(""),r(!0),window.scrollTo({top:0,behavior:"smooth"})}function R(O,j){A(K=>({...K,[O]:j}))}function N(O,j,K){k(ne=>{const J=[...ne[O]||[""]];return J[j]=K,{...ne,[O]:J}})}function I(O){k(j=>({...j,[O]:[...j[O]||[""],""]}))}function Ne(O,j){k(K=>{const ne=(K[O]||[""]).filter((J,Y)=>Y!==j);return{...K,[O]:ne.length?ne:[""]}})}function ue(O,j){return M.filter(K=>(K.category||"").toLowerCase()===O.toLowerCase()?K.id===j?!0:!q.includes(K.id):!1)}async function _e(O){if(O.preventDefault(),D(""),!o.trim()){D("Add meg a gép nevét.");return}if(z.length===0){D("Válassz ki legalább egy alkatrészt.");return}const j=u?Number(f):null;if(u&&(f.trim()===""||Number.isNaN(j)||j<0)){D("Add meg a gép eladási árát.");return}S(!0);try{const K=Date.now(),ne=u?"Eladva":"Összerakva",J=z.map(me=>me.id),Y={name:o.trim(),partIds:J,partsSummary:z.map(me=>({id:me.id,name:me.name,category:me.category||"",serialNumber:me.serialNumber||"",purchasePrice:Number(me.purchasePrice||0)})),totalCost:w,status:ne,soldPrice:u?j:null,soldAt:u?(i==null?void 0:i.soldAt)||K:null};let ie=i==null?void 0:i.id;i?await bt(Ue(pe,"builds",i.id),Y):ie=(await Ai(Bt(pe,"builds"),{...Y,createdAt:K})).id;const ke=(Array.isArray(i==null?void 0:i.partIds)?i.partIds:[]).filter(me=>!J.includes(me));await Promise.all([...ke.map(me=>bt(Ue(pe,"parts",me),{buildId:null,status:"Készleten",soldAt:null}).catch(()=>null)),...z.map(me=>bt(Ue(pe,"parts",me.id),{buildId:ie,status:u?"Eladva":"Beépítve",...u?{soldAt:(i==null?void 0:i.soldAt)||K}:{soldAt:null}}).catch(()=>null))]),v(),r(!1)}catch(K){console.error("Gép mentési hiba:",K),D(`Hiba mentés közben: ${(K==null?void 0:K.message)||"Ismeretlen hiba"}`)}finally{S(!1)}}async function ze(O){const j=prompt(`${O.name} eladási ára (Ft):`,String(O.soldPrice??O.totalCost??0));if(j===null||j.trim()==="")return;const K=Number(j);if(Number.isNaN(K)||K<0)return;const ne=O.soldAt||Date.now();await bt(Ue(pe,"builds",O.id),{status:"Eladva",soldPrice:K,soldAt:ne}),Array.isArray(O.partIds)&&O.partIds.length>0&&await Promise.all(O.partIds.map(J=>bt(Ue(pe,"parts",J),{status:"Eladva",soldAt:ne}).catch(()=>null)))}return h.createElement("div",null,h.createElement("div",{className:"row",style:{marginBottom:14}},h.createElement("h2",{style:{margin:0}},"Gépösszeállító"),h.createElement("button",{className:"btn btn-green",onClick:()=>{n?v():E()}},n?h.createElement(kr,{size:16}):h.createElement(ki,{size:16}),n?"Bezárás":"Új gép készletből")),n&&h.createElement("form",{className:"card",onSubmit:_e,style:{marginBottom:16}},h.createElement("div",{className:"row",style:{marginBottom:10}},h.createElement("h3",{style:{margin:0}},i?`Gép szerkesztése: ${i.name}`:"Új gép összeállítása alkatrészenként"),i&&h.createElement("span",{className:`badge ${i.status==="Eladva"?"badge-green":"badge-blue"}`},i.status||"Összerakva")),h.createElement("div",{style:{marginBottom:14}},h.createElement("input",{placeholder:"Gép neve (pl. Ryzen 5600 + RTX 3060)",value:o,onChange:O=>l(O.target.value),required:!0})),h.createElement("div",{className:"grid-2",style:{gap:12}},rE.map(O=>{if(!O.multi){const K=L[O.key]||"",ne=ue(O.category,K);return h.createElement("div",{key:O.key,style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},h.createElement("div",{className:"row",style:{marginBottom:6}},h.createElement("strong",null,O.label),h.createElement("span",{className:"muted",style:{fontSize:12}},ne.length," elérhető")),h.createElement("select",{value:K,onChange:J=>R(O.key,J.target.value)},h.createElement("option",{value:""},"-- Nincs kiválasztva --"),ne.map(J=>h.createElement("option",{key:J.id,value:J.id},J.name," (",Number(J.purchasePrice||0).toLocaleString("hu-HU")," Ft)"))))}const j=_[O.key]||[""];return h.createElement("div",{key:O.key,style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},h.createElement("div",{className:"row",style:{marginBottom:6}},h.createElement("strong",null,O.label),h.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"3px 8px",fontSize:12},onClick:()=>I(O.key)},h.createElement(ki,{size:12})," Modul / meghajtó")),j.map((K,ne)=>{const J=ue(O.category,K);return h.createElement("div",{className:"row",key:`${O.key}-${ne}`,style:{marginBottom:6,gap:6}},h.createElement("select",{value:K,onChange:Y=>N(O.key,ne,Y.target.value)},h.createElement("option",{value:""},"-- Válassz ",O.label.toLowerCase()," --"),J.map(Y=>h.createElement("option",{key:Y.id,value:Y.id},Y.name," (",Number(Y.purchasePrice||0).toLocaleString("hu-HU")," Ft)"))),j.length>1&&h.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"6px 8px"},onClick:()=>Ne(O.key,ne),title:"Slot törlése"},h.createElement(Ci,{size:13})))}))})),h.createElement("div",{style:{marginTop:14,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.03)"}},h.createElement("div",{className:"row"},h.createElement("strong",null,"Bekerülési ár:"),h.createElement("strong",{style:{fontSize:16,color:"#60a5fa"}},w.toLocaleString("hu-HU")," Ft")),z.length>0&&h.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"Kiválasztva: ",z.map(O=>`${O.name} (${Number(O.purchasePrice||0).toLocaleString("hu-HU")} Ft)`).join(" • ")),h.createElement("div",{className:"row",style:{marginTop:10}},h.createElement("label",null,h.createElement("input",{type:"checkbox",style:{width:"auto"},checked:u,onChange:O=>c(O.target.checked)})," ","Gép eladva egyben"),u&&h.createElement("input",{type:"number",min:"0",placeholder:"Eladási ár (Ft)",value:f,onChange:O=>m(O.target.value),style:{maxWidth:220},required:!0}))),P&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},P),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:g},g?"Mentés...":i?"Módosítások mentése":"Mentés"),h.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{v(),r(!1)}},"Mégse"))),h.createElement("div",{className:"grid-2"},e.map(O=>{const j=Array.isArray(O.partsSummary)?O.partsSummary:[],K=Number(O.totalCost||0),ne=O.soldPrice!==null&&O.soldPrice!==void 0?Number(O.soldPrice):null,J=O.status==="Eladva",Y=J&&ne!==null?ne-K:null;return h.createElement("div",{className:"card",key:O.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:12,borderRadius:12}},h.createElement("div",null,h.createElement("div",{className:"row",style:{marginBottom:10}},h.createElement("div",{className:"row",style:{gap:8}},h.createElement(ap,{size:18,color:"#60a5fa"}),h.createElement("strong",{style:{fontSize:16}},O.name)),h.createElement("span",{className:`badge ${J?"badge-green":"badge-blue"}`},O.status||"Összerakva")),h.createElement("div",{style:{display:"grid",gridTemplateColumns:J&&Y!==null?"repeat(3, 1fr)":"repeat(2, 1fr)",gap:8,padding:10,borderRadius:8,background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border)",marginBottom:12}},h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:11}},"Bekerülés"),h.createElement("strong",{style:{fontSize:13}},K.toLocaleString("hu-HU")," Ft")),J&&ne!==null?h.createElement(h.Fragment,null,h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:11}},"Eladva"),h.createElement("strong",{style:{fontSize:13,color:"#60a5fa"}},ne.toLocaleString("hu-HU")," Ft")),h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:11}},"Profit"),h.createElement("strong",{style:{fontSize:13},className:Y>=0?"green":"red"},Y>=0?"+":"",Y.toLocaleString("hu-HU")," Ft"))):h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:11}},"Állapot"),h.createElement("strong",{style:{fontSize:13}},"Eladásra vár"))),j.length>0&&h.createElement("div",{style:{display:"flex",flexDirection:"column"}},j.map((ie,Ke)=>h.createElement("div",{key:`${ie.id||Ke}-${Ke}`,className:"row",style:{padding:"6px 0",borderBottom:Ke<j.length-1?"1px solid rgba(255,255,255,0.06)":"none",gap:8}},h.createElement("div",{className:"row",style:{gap:8,minWidth:0}},ie.category&&h.createElement("span",{className:"badge badge-indigo",style:{fontSize:11,padding:"2px 7px",flexShrink:0}},ie.category),h.createElement("span",{style:{fontSize:13,overflow:"hidden",textOverflow:"ellipsis"}},ie.name)),h.createElement("span",{className:"muted",style:{fontSize:13,whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}},Number(ie.purchasePrice||0).toLocaleString("hu-HU")," Ft"))))),h.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},h.createElement("button",{className:"btn btn-ghost",onClick:()=>T(O)},h.createElement(ug,{size:14})," Szerkesztés"),!J&&h.createElement("button",{className:"btn btn-green",onClick:()=>ze(O)},"Eladás rögzítése")))})))}const OL=["fabianbal500@gmail.com","beastmaster0626@gmail.com"],sE=10,oE=10;function xL(t){if(!t)return!1;const e=new Date(t),n=new Date;return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()}function ML(t,e){const n=new Map((e||[]).map(o=>[o.id,o])),r=Array.isArray(t.partIds)?t.partIds:Array.isArray(t.parts)?t.parts.map(o=>typeof o=="string"?o:o==null?void 0:o.id).filter(Boolean):[],i=[],s=new Set;return r.forEach(o=>{const l=n.get(o);l!=null&&l.invoiceFileUrl&&!s.has(l.invoiceFileUrl)&&(s.add(l.invoiceFileUrl),i.push({id:l.id,label:l.category?`${l.name} (${l.category})`:l.name,url:l.invoiceFileUrl}))}),i}function LL({parts:t,builds:e,cardExpenses:n=[],manualSales:r=[],userEmail:i}){const s=(i||"").toLowerCase(),[o,l]=F.useState(!1),[u,c]=F.useState(""),[f,m]=F.useState(""),[g,S]=F.useState(""),[P,D]=F.useState(!1),[L,A]=F.useState(""),[_,k]=F.useState(!1),[M,q]=F.useState(""),[z,w]=F.useState(""),[v,E]=F.useState("0"),[T,R]=F.useState(""),[N,I]=F.useState(!1),[Ne,ue]=F.useState(""),[_e,ze]=F.useState(!1),[O,j]=F.useState({}),[K,ne]=F.useState(null),J=t.filter(b=>b.status!=="Eladva"),Y=J.reduce((b,le)=>b+(le.purchasePrice||0),0),ie=J.reduce((b,le)=>{var xe,Ee;return b+(((Ee=(xe=le.topMarketOffers)==null?void 0:xe[0])==null?void 0:Ee.price)||le.purchasePrice||0)},0),Ke=t.filter(b=>b.paidWithOwnCard).map(b=>({id:b.id,kind:"part",name:b.name,amount:b.purchasePrice||0,note:`Készlet • SN: ${b.serialNumber||"-"}`,ownerEmail:(b.paidByEmail||s).toLowerCase(),createdAt:b.createdAt||0})),me=[...n.filter(b=>!b.settled).map(b=>({id:b.id,kind:"manual",name:b.name,amount:b.amount||0,note:b.note||"Korábbi / külső tétel",ownerEmail:(b.createdByEmail||"").toLowerCase(),createdAt:b.createdAt||0})),...Ke].sort((b,le)=>le.createdAt-b.createdAt),Zt=Array.from(new Set([...OL.map(b=>b.toLowerCase()),...me.map(b=>b.ownerEmail).filter(Boolean)])),jr=t.filter(b=>b.status==="Eladva"&&!b.buildId),dt=[...e.filter(b=>b.status==="Eladva").map(b=>({id:`build-${b.id}`,rawId:b.id,source:"build",partIds:Array.isArray(b.partIds)?b.partIds:[],title:`[Gép] ${b.name}`,cost:b.totalCost||0,price:b.soldPrice||0,profit:(b.soldPrice||0)-(b.totalCost||0),soldAt:b.soldAt||0,note:"",invoices:ML(b,t)})),...jr.map(b=>({id:`part-${b.id}`,rawId:b.id,source:"part",title:b.name,cost:b.purchasePrice||0,price:b.soldPrice||0,profit:(b.soldPrice||0)-(b.purchasePrice||0),soldAt:b.soldAt||0,note:"",invoices:b.invoiceFileUrl?[{id:b.id,label:b.name,url:b.invoiceFileUrl}]:[]})),...r.map(b=>({id:`spontaneous-${b.id}`,rawId:b.id,source:"spontaneous",title:`[Spontán] ${b.title}`,cost:b.cost||0,price:b.price||0,profit:(b.price||0)-(b.cost||0),soldAt:b.soldAt||b.createdAt||0,note:b.note||"",invoices:[]}))].sort((b,le)=>le.soldAt-b.soldAt),Sn=dt.filter(b=>xL(b.soldAt)),An=Sn.reduce((b,le)=>b+(le.price||0),0),dn=Sn.reduce((b,le)=>b+(le.profit||0),0),Fn=dt.reduce((b,le)=>b+(le.profit||0),0),Un=dt.length>sE,Hr=_e?dt:dt.slice(0,sE);function $(b){j(le=>({...le,[b]:!le[b]}))}async function ye(b){b.preventDefault(),A("");const le=Number(f);if(!u.trim()||f.trim()===""||Number.isNaN(le)||le<0){A("Adj meg érvényes tételnevet és összeget (0 Ft is lehet).");return}D(!0);try{await Ai(Bt(pe,"card_expenses"),{name:u.trim(),amount:le,note:g.trim(),createdByEmail:s,settled:!1,createdAt:Date.now()}),c(""),m(""),S(""),l(!1)}catch(xe){A(`Hiba mentés közben: ${(xe==null?void 0:xe.message)||"Ismeretlen hiba"}`)}finally{D(!1)}}async function Re(b){b.ownerEmail===s&&(b.kind==="part"?await bt(Ue(pe,"parts",b.id),{paidWithOwnCard:!1}):await bt(Ue(pe,"card_expenses",b.id),{settled:!0,settledAt:Date.now()}))}async function ae(b){b.preventDefault(),ue("");const le=Number(z),xe=v.trim()===""?0:Number(v);if(!M.trim()||z.trim()===""||Number.isNaN(le)||le<0){ue("Adj meg megnevezést és érvényes eladási árat (0 Ft is lehet).");return}if(Number.isNaN(xe)||xe<0){ue("A költség/beszerzés nem lehet negatív.");return}I(!0);try{const Ee=Date.now();await Ai(Bt(pe,"sales_log"),{title:M.trim(),price:le,cost:xe,note:T.trim(),createdByEmail:s,soldAt:Ee,createdAt:Ee}),q(""),w(""),E("0"),R(""),k(!1)}catch(Ee){ue(`Hiba mentés közben: ${(Ee==null?void 0:Ee.message)||"Ismeretlen hiba"}`)}finally{I(!1)}}async function _t(b){const le=b.source==="spontaneous"?`Törlöd a naplóból: ${b.title}?`:`Eltávolítod az eladási naplóból: ${b.title}? (A tétel visszakerül az aktív/összerakott nézetbe.)`;if(confirm(le)){ne(b.id);try{b.source==="spontaneous"?await Fo(Ue(pe,"sales_log",b.rawId)):b.source==="part"?await bt(Ue(pe,"parts",b.rawId),{status:"Készleten",soldPrice:null,soldAt:null,buildId:null}):b.source==="build"&&(await bt(Ue(pe,"builds",b.rawId),{status:"Összerakva",soldPrice:null,soldAt:null}),Array.isArray(b.partIds)&&b.partIds.length>0&&await Promise.all(b.partIds.map(xe=>bt(Ue(pe,"parts",xe),{status:"Beépítve",soldAt:null}).catch(()=>null))))}finally{ne(null)}}}return h.createElement("div",null,h.createElement("div",{className:"row",style:{marginBottom:14}},h.createElement("h2",{style:{margin:0}},"Pénzügy & Profit"),h.createElement("div",{className:"row"},h.createElement("button",{className:"btn btn-green",onClick:()=>{ue(""),k(b=>!b)}},_?h.createElement(kr,{size:15}):h.createElement(ki,{size:15}),_?"Bezárás":"Spontán eladás"),h.createElement("button",{className:"btn btn-purple",onClick:()=>{A(""),l(b=>!b)}},o?h.createElement(kr,{size:15}):h.createElement(ki,{size:15}),o?"Bezárás":"Saját kártyás tétel"))),_&&h.createElement("form",{className:"card",onSubmit:ae,style:{marginBottom:16}},h.createElement("h3",{style:{marginTop:0}},"Új spontán eladás rögzítése"),h.createElement("div",{className:"muted",style:{marginBottom:10}},"Gyors, nem készletes vagy eseti eladások (pl. kábel, hűtő, apróság) felvétele az eladási naplóba."),h.createElement("div",{className:"grid-2"},h.createElement("input",{placeholder:"Megnevezés (pl. DisplayPort kábel / 12cm venti)",value:M,onChange:b=>q(b.target.value),required:!0}),h.createElement("input",{type:"number",min:"0",placeholder:"Eladási ár / bevétel (Ft)",value:z,onChange:b=>w(b.target.value),required:!0}),h.createElement("input",{type:"number",min:"0",placeholder:"Beszerzés / költség (Ft, alapból 0)",value:v,onChange:b=>E(b.target.value)}),h.createElement("input",{placeholder:"Megjegyzés (opcionális)",value:T,onChange:b=>R(b.target.value)})),Ne&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Ne),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:N},N?"Mentés...":"Felvétel a naplóba"),h.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>k(!1)},"Mégse"))),o&&h.createElement("form",{className:"card",onSubmit:ye,style:{marginBottom:16}},h.createElement("h3",{style:{marginTop:0}},"Új saját kártyás tétel (",s,")"),h.createElement("div",{className:"muted",style:{marginBottom:10}},"Korábbi, már nem a készletben lévő alkatrészek vagy külső kártyás kötések rögzítéséhez."),h.createElement("div",{className:"grid-2"},h.createElement("input",{placeholder:"Alkatrész / tétel neve (pl. GTX 1660 Super)",value:u,onChange:b=>c(b.target.value),required:!0}),h.createElement("input",{type:"number",min:"0",placeholder:"Összeg (Ft) — 0 is lehet",value:f,onChange:b=>m(b.target.value),required:!0})),h.createElement("div",{style:{marginTop:10}},h.createElement("input",{placeholder:"Megjegyzés (opcionális, pl. már eladott gépben volt)",value:g,onChange:b=>S(b.target.value)})),L&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},L),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:P},P?"Mentés...":"Rögzítés a saját kártyámra"),h.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>l(!1)},"Mégse"))),h.createElement("div",{className:"grid-2"},h.createElement("div",{className:"card"},h.createElement("h3",{style:{marginTop:0}},"Havi Realizált Profit"),h.createElement("div",{className:"row"},h.createElement("span",null,"E havi árbevétel:"),h.createElement("strong",null,An.toLocaleString("hu-HU")," Ft")),h.createElement("div",{className:"row",style:{marginTop:6}},h.createElement("strong",null,"E havi tiszta profit:"),h.createElement("strong",{className:dn>=0?"green":"red"},dn>=0?"+":"",dn.toLocaleString("hu-HU")," Ft")),h.createElement("div",{className:"row",style:{marginTop:6}},h.createElement("span",{className:"muted"},"Összesített profit:"),h.createElement("strong",null,Fn>=0?"+":"",Fn.toLocaleString("hu-HU")," Ft"))),h.createElement("div",{className:"card"},h.createElement("h3",{style:{marginTop:0}},"Aktív Készlet Mérlege"),h.createElement("div",{className:"row"},h.createElement("span",null,"Befektetett tőke:"),h.createElement("strong",null,Y.toLocaleString("hu-HU")," Ft")),h.createElement("div",{className:"row",style:{marginTop:6}},h.createElement("span",null,"Legolcsóbb piaci érték:"),h.createElement("strong",null,ie.toLocaleString("hu-HU")," Ft")),h.createElement("div",{className:"row",style:{marginTop:6}},h.createElement("strong",null,"Várható árrés:"),h.createElement("strong",{className:ie-Y>=0?"green":"red"},ie-Y>=0?"+":"",(ie-Y).toLocaleString("hu-HU")," Ft")))),h.createElement("div",{className:"grid-2",style:{marginTop:4}},Zt.map(b=>{const le=me.filter(ht=>ht.ownerEmail===b),xe=le.reduce((ht,qr)=>ht+(qr.amount||0),0),Ee=b===s,Ye=!!O[b],hn=le.length>oE,qi=Ye?le:le.slice(0,oE);return h.createElement("div",{className:"card",key:b},h.createElement("div",{className:"row",style:{marginBottom:8}},h.createElement("h3",{style:{margin:0}},b),h.createElement("div",{className:"row"},hn&&h.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"4px 9px",fontSize:12},onClick:()=>$(b)},Ye?h.createElement(h.Fragment,null,h.createElement(z_,{size:13})," Kevesebb"):h.createElement(h.Fragment,null,h.createElement(U_,{size:13})," Összes (",le.length,")")),h.createElement("span",{className:`badge ${Ee?"badge-purple":"badge-blue"}`},Ee?"Saját kártyád":"Másik fiók"))),le.length===0?h.createElement("div",{className:"muted"},"Nincs elszámolatlan saját kártyás tétel."):h.createElement(h.Fragment,null,qi.map(ht=>h.createElement("div",{className:"row",key:`${ht.kind}-${ht.id}`,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},h.createElement("div",null,h.createElement("strong",null,ht.name),h.createElement("div",{className:"muted"},Number(ht.amount||0).toLocaleString("hu-HU")," Ft • ",ht.note)),Ee?h.createElement("button",{className:"btn btn-purple",onClick:()=>Re(ht)},"Kivettem"):h.createElement("span",{className:"muted",style:{fontSize:12}},"Csak megtekinthető"))),h.createElement("div",{className:"row",style:{marginTop:10}},h.createElement("strong",null,"Kintlévőség összesen:"),h.createElement("strong",{style:{color:"#c084fc"}},xe.toLocaleString("hu-HU")," Ft"))))})),h.createElement("div",{className:"card"},h.createElement("div",{className:"row",style:{marginBottom:8}},h.createElement("h3",{style:{margin:0}},"Eladási Napló (",dt.length,")"),h.createElement("div",{className:"row"},h.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"5px 10px",fontSize:12},onClick:()=>{ue(""),k(b=>!b)}},h.createElement(ki,{size:14})," Spontán eladás"),Un&&h.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:12},onClick:()=>ze(b=>!b)},_e?h.createElement(h.Fragment,null,h.createElement(z_,{size:14})," Kevesebb mutatása"):h.createElement(h.Fragment,null,h.createElement(U_,{size:14})," Összes megjelenítése (",dt.length,")")))),Hr.map(b=>{var le;return h.createElement("div",{key:b.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},h.createElement("div",{className:"row"},h.createElement("div",null,h.createElement("span",null,b.title," (",b.cost.toLocaleString("hu-HU")," → ",b.price.toLocaleString("hu-HU")," Ft)"),b.note&&h.createElement("div",{className:"muted"},b.note)),h.createElement("div",{className:"row"},h.createElement("strong",{className:b.profit>=0?"green":"red"},b.profit>=0?"+":"",b.profit.toLocaleString("hu-HU")," Ft"),h.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:K===b.id,onClick:()=>_t(b),title:"Eltávolítás a naplóból"},h.createElement(Ci,{size:13})))),b.source==="build"&&((le=b.invoices)==null?void 0:le.length)>0&&h.createElement("div",{className:"row",style:{marginTop:6,flexWrap:"wrap",gap:10}},b.invoices.map(xe=>h.createElement("a",{key:`${b.id}-${xe.id}`,href:xe.url,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},h.createElement(Tl,{size:13})," Számla: ",xe.label))))})))}function VL({dealWatches:t,foundDeals:e}){const[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(2);async function u(c){c.preventDefault(),!(!n.trim()||Number(i)<=0)&&(await Ai(Bt(pe,"deal_watches"),{query:n.trim(),maxPrice:Number(i),source:o,enabled:!0,notifiedUrls:[],createdAt:Date.now()}),r(""),s(""))}return h.createElement("div",null,h.createElement("h2",{style:{marginTop:0}},"Deal Hunter (15 percenként)"),h.createElement("form",{className:"card",onSubmit:u},h.createElement("div",{className:"grid-2"},h.createElement("input",{placeholder:"Kulcsszó (pl. RTX 3070)",value:n,onChange:c=>r(c.target.value),required:!0}),h.createElement("input",{type:"number",placeholder:"Célár (Ft) — ez alatt mindenről jelez",value:i,onChange:c=>s(c.target.value),required:!0})),h.createElement("div",{className:"row",style:{marginTop:10}},h.createElement("div",{className:"row"},h.createElement("button",{type:"button",className:`btn ${o===0?"":"btn-ghost"}`,onClick:()=>l(0)},"HA"),h.createElement("button",{type:"button",className:`btn ${o===1?"":"btn-ghost"}`,onClick:()=>l(1)},"Vinted"),h.createElement("button",{type:"button",className:`btn ${o===2?"":"btn-ghost"}`,onClick:()=>l(2)},"Mindkettő")),h.createElement("button",{className:"btn btn-green",type:"submit"},h.createElement(rx,{size:15})," Figyelés indítása"))),h.createElement("div",{className:"card"},h.createElement("h3",{style:{marginTop:0}},"Talált akciók (",e.length,")"),e.length===0?h.createElement("div",{className:"muted"},"Még nincs célár alatt talált akció."):e.map(c=>{var f,m;return h.createElement("div",{className:"offer-box row",key:c.id},h.createElement("div",null,h.createElement("strong",{className:"green"},c.query," • ",(f=c.price)==null?void 0:f.toLocaleString("hu-HU")," Ft"),h.createElement("div",null,c.title),h.createElement("div",{className:"muted"},"Célár: ",(m=c.maxPrice)==null?void 0:m.toLocaleString("hu-HU")," Ft • Eladó: +",c.sellerPositiveRating)),h.createElement("div",{className:"row"},h.createElement("a",{href:c.url,target:"_blank",rel:"noreferrer",className:"btn btn-ghost"},h.createElement(mS,{size:14})," Megnyit"),h.createElement("button",{className:"btn btn-red",onClick:()=>Fo(Ue(pe,"found_deals",c.id))},h.createElement(Ci,{size:14}))))})),h.createElement("div",{className:"card"},h.createElement("h3",{style:{marginTop:0}},"Aktív figyelőszabályok"),t.map(c=>{var f;return h.createElement("div",{className:"row",key:c.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},h.createElement("div",null,h.createElement("strong",null,c.query),h.createElement("div",{className:"muted"},"Max: ",(f=c.maxPrice)==null?void 0:f.toLocaleString("hu-HU")," Ft")),h.createElement("div",{className:"row"},h.createElement("input",{type:"checkbox",style:{width:"auto"},checked:!!c.enabled,onChange:()=>bt(Ue(pe,"deal_watches",c.id),{enabled:!c.enabled})}),h.createElement("button",{className:"btn btn-red",onClick:()=>Fo(Ue(pe,"deal_watches",c.id))},h.createElement(Ci,{size:14}))))})))}const aE=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő","Gép","Egyéb"],FL=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő"],UL=["Csere másikra","Javítva","Visszatérítve / jóváírva","Folyamatban","Elutasítva"];function Cu(t){const e=new Date(Number(t||Date.now())),n=e.getMonth()+1,r=e.getFullYear()+Math.floor(n/12),i=(n%12+12)%12,s=new Date(r,i+1,0).getDate(),o=Math.min(e.getDate(),s),l=new Date(e.getTime());return l.setFullYear(r,i,o),l.getTime()}function Mh(t){return t?new Date(Number(t)).toLocaleDateString("hu-HU"):"-"}function Qs(t){const e=new Date(Number(t||Date.now())),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${i}`}function Lh(){return FL.map(t=>({name:"",category:t,serialNumber:""}))}async function Vh(t,e="warranty"){const n=Array.from(t||[]);return n.length===0?[]:await Promise.all(n.map(async(i,s)=>{const o=i.name.replace(/[^a-zA-Z0-9._-]/g,"_"),l=`warranty_invoices/${e}_${Date.now()}_${s}_${o}`,u=dp(fp,l);await up(u,i);const c=await cp(u);return{id:`${Date.now()}-${s}-${Math.random().toString(36).slice(2,7)}`,label:i.name,url:c}}))}function ei(...t){const e=[],n=new Set;return t.forEach(r=>{(Array.isArray(r)?r:[]).forEach((i,s)=>{!(i!=null&&i.url)||n.has(i.url)||(n.add(i.url),e.push({id:i.id||`inv-${s}-${n.size}`,label:i.label||i.name||"Számla",url:i.url}))})}),e}function zL({parts:t=[],builds:e=[],warrantyItems:n=[],warrantyComplaints:r=[],userEmail:i}){const[s,o]=F.useState("active"),[l,u]=F.useState(""),[c,f]=F.useState(!1),[m,g]=F.useState(null),[S,P]=F.useState(""),[D,L]=F.useState(""),[A,_]=F.useState("Videókártya"),[k,M]=F.useState(""),[q,z]=F.useState(Qs(Date.now())),[w,v]=F.useState(""),[E,T]=F.useState([]),[R,N]=F.useState([]),[I,Ne]=F.useState(!1),[ue,_e]=F.useState(""),[ze,O]=F.useState(!1),[j,K]=F.useState(null),[ne,J]=F.useState(""),[Y,ie]=F.useState(""),[Ke,ke]=F.useState(Qs(Date.now())),[me,Zt]=F.useState(""),[jr,vt]=F.useState(Lh()),[dt,Sn]=F.useState([]),[An,dn]=F.useState([]),[Fn,Un]=F.useState(!1),[Hr,$]=F.useState(""),[ye,Re]=F.useState(!1),[ae,_t]=F.useState(null),[b,le]=F.useState(""),[xe,Ee]=F.useState(""),[Ye,hn]=F.useState(""),[qi,ht]=F.useState(""),[qr,_r]=F.useState("Csere másikra"),[Xo,Ls]=F.useState(""),[Wi,Yo]=F.useState("0"),[Jo,Vs]=F.useState(!0),[Ki,Fs]=F.useState(""),[Er,Gi]=F.useState(""),[Us,zn]=F.useState(null),[Zo,Qi]=F.useState(!1),[ea,kn]=F.useState(""),Wr=Date.now(),Je=F.useMemo(()=>{const C=new Map,H=[];(n||[]).forEach(G=>{G.sourceKey?C.set(G.sourceKey,G):G.hidden||H.push(G)});const X=new Map((t||[]).map(G=>[G.id,G])),Ie=(e||[]).filter(G=>G.status==="Eladva"),be=[];return Ie.forEach(G=>{const Ve=G.soldAt||G.createdAt||Wr,Ge=`build-${G.id}`,re=C.get(Ge),ft=(re==null?void 0:re.soldAt)||Ve,Bn=Cu(ft),wr=Array.isArray(G.partIds)?G.partIds:Array.isArray(G.parts)?G.parts.map(se=>typeof se=="string"?se:se==null?void 0:se.id).filter(Boolean):[],nr=Array.isArray(G.partsSummary)?G.partsSummary:[],rr=new Map(nr.map(se=>[se.id,se])),Ze=Array.from(new Set([...wr,...nr.map(se=>se.id).filter(Boolean)]));let Me=[];Array.isArray(re==null?void 0:re.components)&&re.components.length>0?Me=re.components.map((se,Le)=>({id:se.id||`${G.id}-ov-${Le}`,name:se.name||"Alkatrész",category:se.category||"",serialNumber:se.serialNumber||"-",invoiceFileUrl:se.invoiceFileUrl||null})):Ze.forEach(se=>{const Le=X.get(se),je=rr.get(se),jn=(Le==null?void 0:Le.name)||(je==null?void 0:je.name),Od=(Le==null?void 0:Le.serialNumber)||(je==null?void 0:je.serialNumber)||"-",Kl=(Le==null?void 0:Le.category)||(je==null?void 0:je.category)||"",xd=(Le==null?void 0:Le.invoiceFileUrl)||(je==null?void 0:je.invoiceFileUrl)||null;jn&&Me.push({id:se,name:jn,category:Kl,serialNumber:Od,invoiceFileUrl:xd})});const Rn=[];Ze.forEach(se=>{const Le=X.get(se),je=rr.get(se),jn=(Le==null?void 0:Le.invoiceFileUrl)||(je==null?void 0:je.invoiceFileUrl);jn&&Rn.push({id:se,label:(Le==null?void 0:Le.name)||(je==null?void 0:je.name)||"Alkatrész számla",url:jn})});const $n=Me.filter(se=>se.invoiceFileUrl).map((se,Le)=>({id:se.id||`comp-inv-${Le}`,label:se.name||"Alkatrész számla",url:se.invoiceFileUrl})),js=Array.isArray(re==null?void 0:re.invoices)?re.invoices:[],Hs=ei(js,Rn,$n),Wl=Me.length>0?Me.map(se=>`${se.name} (${se.serialNumber})`).join(" • "):"Gép csomag";be.push({id:(re==null?void 0:re.id)||Ge,sourceKey:Ge,isAutoBuild:!0,isManualPc:!1,name:(re==null?void 0:re.name)||`[Gép] ${G.name||"Névtelen gép"}`,buyerName:(re==null?void 0:re.buyerName)||G.buyerName||"",category:(re==null?void 0:re.category)||"Gép",serialNumber:(re==null?void 0:re.serialNumber)||Wl,componentRows:Me,soldAt:ft,expiresAt:Bn,note:(re==null?void 0:re.note)||"",invoices:Hs,rawOverrideDoc:re||null})}),H.forEach(G=>{const Ve=G.soldAt||G.createdAt||Wr,Ge=G.type==="pc_build"||Array.isArray(G.components),re=Ge?(G.components||[]).map((Ze,Me)=>({id:Ze.id||`${G.id}-comp-${Me}`,name:Ze.name||"Alkatrész",category:Ze.category||"",serialNumber:Ze.serialNumber||"-",invoiceFileUrl:Ze.invoiceFileUrl||null})):[],ft=Array.isArray(G.invoices)?G.invoices:[],Bn=G.invoiceFileUrl?[{id:G.id,label:G.name,url:G.invoiceFileUrl}]:[],wr=re.filter(Ze=>Ze.invoiceFileUrl).map((Ze,Me)=>({id:Ze.id||`m-comp-${Me}`,label:Ze.name,url:Ze.invoiceFileUrl})),nr=ei(ft,Bn,wr),rr=re.length>0?re.map(Ze=>`${Ze.name} (${Ze.serialNumber})`).join(" • "):G.serialNumber||"-";be.push({id:G.id,sourceKey:null,isAutoBuild:!1,isManualPc:Ge,name:G.name||"Névtelen tétel",buyerName:G.buyerName||"",category:G.category||(Ge?"Gép":"Egyéb"),serialNumber:rr,componentRows:re,soldAt:Ve,expiresAt:Cu(Ve),note:G.note||"",invoices:nr,rawOverrideDoc:G})}),be.map(G=>{const Ve=Wr>G.expiresAt,Ge=Math.ceil((G.expiresAt-Wr)/(1e3*60*60*24));return{...G,isExpired:Ve,daysLeft:Ge}}).sort((G,Ve)=>G.expiresAt-Ve.expiresAt)},[t,e,n,Wr]),Xi=F.useMemo(()=>{const C=new Map;return Je.forEach(H=>{if((H.componentRows||[]).forEach((X,Ie)=>{const be=X.serialNumber&&X.serialNumber!=="Nincs"&&X.serialNumber!=="Úton"?X.serialNumber:"-",G=`entry:${H.id}:comp:${Ie}`;C.has(G)||C.set(G,{key:G,entry:H,compIndex:Ie,name:X.name,serialNumber:be,label:`${X.category?`[${X.category}] `:""}${X.name} — SN: ${be} (${H.name})`})}),!H.isAutoBuild&&!H.isManualPc&&H.name){const X=H.serialNumber&&H.serialNumber!=="-"?H.serialNumber:"-",Ie=`entry:${H.id}:single`;C.has(Ie)||C.set(Ie,{key:Ie,entry:H,compIndex:null,name:H.name,serialNumber:X,label:`${H.category?`[${H.category}] `:""}${H.name} — SN: ${X}`})}}),(t||[]).forEach((H,X)=>{if(!(H!=null&&H.name))return;const Ie=H.serialNumber&&H.serialNumber!=="Nincs"&&H.serialNumber!=="Úton"?H.serialNumber:"-",be=`part:${H.id||X}`;C.has(be)||C.set(be,{key:be,entry:null,compIndex:null,name:H.name,serialNumber:Ie,label:`${H.category?`[${H.category}] `:""}${H.name} — SN: ${Ie}${H.status?` (${H.status})`:""}`})}),Array.from(C.values())},[t,Je]),Yi=Je.filter(C=>!C.isExpired).length,Ji=Je.filter(C=>C.isExpired).length,zl=F.useMemo(()=>{const C=l.trim().toLowerCase();return Je.filter(H=>s==="active"?!H.isExpired:s==="expired"?H.isExpired:!0).filter(H=>C?(H.name||"").toLowerCase().includes(C)||(H.buyerName||"").toLowerCase().includes(C)||(H.serialNumber||"").toLowerCase().includes(C)||(H.category||"").toLowerCase().includes(C)||(H.note||"").toLowerCase().includes(C):!0)},[Je,s,l]),bd=F.useMemo(()=>(r||[]).reduce((C,H)=>C+Number(H.cost||0),0),[r]);function Cn(){f(!1),O(!1),Re(!1)}function Zi(){g(null),P(""),L(""),_("Videókártya"),M(""),z(Qs(Date.now())),v(""),T([]),N([]),_e("")}function es(){K(null),J(""),ie(""),ke(Qs(Date.now())),Zt(""),vt(Lh()),Sn([]),dn([]),$("")}function zs(){Zi(),Cn(),f(!0)}function Bl(){es(),Cn(),O(!0)}function ta(C){var H,X,Ie;if(Cn(),C.isManualPc&&((H=C.rawOverrideDoc)!=null&&H.id)){K(C.rawOverrideDoc.id);const be=(C.name||"").replace(/^\[Gép\]\s*/i,"");J(be),ie(C.buyerName||""),ke(Qs(C.soldAt||Date.now())),Zt(C.note||"");const G=(C.componentRows||[]).map(Ve=>({id:Ve.id,name:Ve.name||"",category:Ve.category||"",serialNumber:Ve.serialNumber==="-"?"":Ve.serialNumber||"",invoiceFileUrl:Ve.invoiceFileUrl||null}));vt(G.length>0?G:Lh()),Sn(ei((X=C.rawOverrideDoc)==null?void 0:X.invoices,C.invoices)),dn([]),$(""),O(!0),window.scrollTo({top:0,behavior:"smooth"});return}g(C),P(C.name||""),L(C.buyerName||""),_(aE.includes(C.category)?C.category:"Egyéb"),M(C.serialNumber==="-"?"":C.serialNumber||""),z(Qs(C.soldAt||Date.now())),v(C.note||""),T(ei((Ie=C.rawOverrideDoc)==null?void 0:Ie.invoices,C.invoices)),N([]),_e(""),f(!0),window.scrollTo({top:0,behavior:"smooth"})}function ts(C=null){if(kn(""),_t(C||null),Array.isArray(C==null?void 0:C.componentRows)&&C.componentRows.length>0){le(""),Ee("0");const X=C.componentRows[0];hn(X.name||""),ht(X.serialNumber||"-")}else if(C&&!C.isAutoBuild&&!C.isManualPc)le(""),Ee(""),hn(C.name||""),ht(C.serialNumber||"-");else{const X=Xi[0];le(X?X.key:""),Ee(""),hn(X?X.name:""),ht(X?X.serialNumber:"-")}_r("Csere másikra"),Ls(""),Yo("0"),Vs(!0),Fs(""),Gi(""),zn(null),Cn(),Re(!0),window.scrollTo({top:0,behavior:"smooth"})}function tr(C){var Ie;Ee(C);const H=Number(C),X=(Ie=ae==null?void 0:ae.componentRows)==null?void 0:Ie[H];X&&(hn(X.name||""),ht(X.serialNumber||"-"))}function $l(C){if(le(C),!C)return;const H=Xi.find(X=>X.key===C);H&&(H.entry&&_t(H.entry),hn(H.name),ht(H.serialNumber||"-"))}function Bs(C,H,X){vt(Ie=>Ie.map((be,G)=>G===C?{...be,[H]:X}:be))}function na(){vt(C=>[...C,{name:"",category:"",serialNumber:""}])}function ra(C){vt(H=>{const X=H.filter((Ie,be)=>be!==C);return X.length>0?X:[{name:"",category:"",serialNumber:""}]})}async function jl(C){var be;C.preventDefault(),$("");const H=jr.filter(G=>G.name.trim()!=="").map(G=>({name:G.name.trim(),category:G.category.trim(),serialNumber:G.serialNumber.trim()||"-",invoiceFileUrl:G.invoiceFileUrl||null}));if(!ne.trim()){$("Add meg a gép nevét.");return}if(H.length===0){$("Töltsd ki legalább egy alkatrész nevét a géphez.");return}const X=new Date(`${Ke}T12:00:00`).getTime(),Ie=Number.isNaN(X)?Date.now():X;Un(!0);try{const G=await Vh(An,"pc_warranty"),Ve=ei(dt,G),re={type:"pc_build",name:ne.trim().startsWith("[Gép]")?ne.trim():`[Gép] ${ne.trim()}`,buyerName:Y.trim(),category:"Gép",components:H,serialNumber:H.map(ft=>`${ft.name} (${ft.serialNumber})`).join(" • "),invoices:Ve,invoiceFileUrl:((be=Ve[0])==null?void 0:be.url)||null,soldAt:Ie,expiresAt:Cu(Ie),note:me.trim(),hidden:!1};j?await bt(Ue(pe,"warranty_items",j),{...re,updatedAt:Date.now()}):await Ai(Bt(pe,"warranty_items"),{...re,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()}),es(),O(!1)}catch(G){console.error("Teljes gép garancia mentési hiba:",G),$(`Hiba mentés közben: ${(G==null?void 0:G.message)||"Ismeretlen hiba"}`)}finally{Un(!1)}}async function Hl(C){var Ie,be,G,Ve;if(C.preventDefault(),_e(""),!S.trim()){_e("Add meg az alkatrész / tétel nevét.");return}const H=new Date(`${q}T12:00:00`).getTime(),X=Number.isNaN(H)?Date.now():H;Ne(!0);try{const Ge=await Vh(R,"item_warranty"),re=ei(E,Ge),ft={name:S.trim(),buyerName:D.trim(),category:A,serialNumber:k.trim()||"-",invoices:re,invoiceFileUrl:((Ie=re[0])==null?void 0:Ie.url)||null,soldAt:X,expiresAt:Cu(X),note:w.trim(),hidden:!1};if(m!=null&&m.isAutoBuild&&(m!=null&&m.sourceKey)){const Bn=((be=m.rawOverrideDoc)==null?void 0:be.id)||m.sourceKey;await sp(Ue(pe,"warranty_items",Bn),{...ft,sourceKey:m.sourceKey,createdByEmail:((G=m.rawOverrideDoc)==null?void 0:G.createdByEmail)||(i||"").toLowerCase(),updatedAt:Date.now()},{merge:!0})}else(Ve=m==null?void 0:m.rawOverrideDoc)!=null&&Ve.id?await bt(Ue(pe,"warranty_items",m.rawOverrideDoc.id),{...ft,updatedAt:Date.now()}):await Ai(Bt(pe,"warranty_items"),{...ft,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()});Zi(),f(!1)}catch(Ge){console.error("Garancia mentési hiba:",Ge),_e(`Hiba mentés közben: ${(Ge==null?void 0:Ge.message)||"Ismeretlen hiba"}`)}finally{Ne(!1)}}async function Dd(C){var H;C.isAutoBuild||confirm(`Törlöd a garancia listából: ${C.name}?`)&&((H=C.rawOverrideDoc)!=null&&H.id&&await Fo(Ue(pe,"warranty_items",C.rawOverrideDoc.id)),((m==null?void 0:m.id)===C.id||j===C.id)&&(Zi(),es(),Cn()))}async function $s(C){var Ie,be,G,Ve,Ge;if(C.preventDefault(),kn(""),!Ye.trim()){kn("Válaszd ki a legördülő menüből a garanciáztatott alkatrészt.");return}const H=Wi.trim()===""?0:Number(Wi);if(Number.isNaN(H)||H<0){kn("A költség nem lehet negatív.");return}const X=qr==="Csere másikra"&&Jo;if(X&&!Ki.trim()){kn("Add meg az új cserealkatrész nevét.");return}Qi(!0);try{let re=null;if(Us&&(re=((Ie=(await Vh([Us],"replacement_invoice"))[0])==null?void 0:Ie.url)||null),X&&ae){const ft=Ki.trim(),Bn=Er.trim()||"-";if(ae.componentRows&&ae.componentRows.length>0){const wr=xe!==""&&!Number.isNaN(Number(xe))?Number(xe):ae.componentRows.findIndex(Me=>(Me.name||"").toLowerCase()===Ye.trim().toLowerCase()),nr=ae.componentRows.map((Me,Rn)=>Rn===wr?{id:Me.id,name:ft,category:Me.category||"",serialNumber:Bn,invoiceFileUrl:re||Me.invoiceFileUrl||null}:{id:Me.id,name:Me.name,category:Me.category||"",serialNumber:Me.serialNumber||"-",invoiceFileUrl:Me.invoiceFileUrl||null}),rr=nr.map(Me=>`${Me.name} (${Me.serialNumber})`).join(" • "),Ze=ei(ae.invoices,re?[{id:`rep-${Date.now()}`,label:ft,url:re}]:[]);if(ae.isAutoBuild&&ae.sourceKey){const Me=((be=ae.rawOverrideDoc)==null?void 0:be.id)||ae.sourceKey;await sp(Ue(pe,"warranty_items",Me),{sourceKey:ae.sourceKey,name:ae.name,buyerName:ae.buyerName||"",category:ae.category||"Gép",components:nr,serialNumber:rr,invoices:Ze,soldAt:ae.soldAt,expiresAt:ae.expiresAt,note:ae.note||"",hidden:!1,createdByEmail:((G=ae.rawOverrideDoc)==null?void 0:G.createdByEmail)||(i||"").toLowerCase(),updatedAt:Date.now()},{merge:!0})}else(Ve=ae.rawOverrideDoc)!=null&&Ve.id&&await bt(Ue(pe,"warranty_items",ae.rawOverrideDoc.id),{components:nr,serialNumber:rr,invoices:Ze,updatedAt:Date.now()})}else if(!ae.isAutoBuild&&((Ge=ae.rawOverrideDoc)!=null&&Ge.id)){const wr=ei(ae.invoices,re?[{id:`rep-${Date.now()}`,label:ft,url:re}]:[]);await bt(Ue(pe,"warranty_items",ae.rawOverrideDoc.id),{name:ft,serialNumber:Bn,invoices:wr,...re?{invoiceFileUrl:re}:{},updatedAt:Date.now()})}}await Ai(Bt(pe,"warranty_complaints"),{partName:Ye.trim(),serialNumber:qi.trim()||"-",replacementName:X?Ki.trim():"",replacementSn:X?Er.trim()||"-":"",replacementInvoiceUrl:re,resolutionType:qr,solutionDetail:Xo.trim(),cost:H,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()}),le(""),Ee(""),_t(null),hn(""),ht(""),_r("Csere másikra"),Ls(""),Yo("0"),Fs(""),Gi(""),zn(null),Re(!1)}catch(re){console.error("Panasz mentési hiba:",re),kn(`Hiba mentés közben: ${(re==null?void 0:re.message)||"Ismeretlen hiba"}`)}finally{Qi(!1)}}async function ql(C){confirm(`Törlöd ezt a panaszt: ${C.partName}?`)&&await Fo(Ue(pe,"warranty_complaints",C.id))}const ia=Array.isArray(ae==null?void 0:ae.componentRows)&&ae.componentRows.length>0;return h.createElement("div",null,h.createElement("div",{className:"row",style:{marginBottom:14}},h.createElement("div",null,h.createElement("h2",{style:{margin:0}},"Garancia nyilvántartás (1 hónap)"),h.createElement("div",{className:"muted",style:{fontSize:12}},"Az eladás napjától számított 1 hónap garancia • Az eladott gépek automatikusan megjelennek")),h.createElement("div",{className:"row"},h.createElement("button",{className:"btn btn-orange",onClick:()=>ye?Re(!1):ts()},ye?h.createElement(kr,{size:16}):h.createElement(B_,{size:16}),ye?"Bezárás":"Panasz felvétele"),h.createElement("button",{className:"btn btn-ghost",onClick:()=>{ze?(es(),O(!1)):Bl()}},ze?h.createElement(kr,{size:16}):h.createElement(ux,{size:16}),ze?"Bezárás":"Teljes gép garanciába"),h.createElement("button",{className:"btn btn-green",onClick:()=>{c?(Zi(),f(!1)):zs()}},c?h.createElement(kr,{size:16}):h.createElement(ki,{size:16}),c?"Bezárás":"Új tétel"))),ze&&h.createElement("form",{className:"card",onSubmit:jl,style:{marginBottom:16}},h.createElement("h3",{style:{marginTop:0}},j?"Teljes gép garanciájának szerkesztése":"Teljes gép felvétele garanciába (alkatrészenként)"),h.createElement("div",{className:"muted",style:{marginBottom:10}},"Az alkatrészek alapból ki vannak generálva — töltsd ki a típusokat és SN-eket, a vevő nevét, és töltsd fel a számlákat egyben."),h.createElement("div",{className:"grid-2",style:{marginBottom:12}},h.createElement("input",{placeholder:"Gép neve (pl. Budget GAMING PC)",value:ne,onChange:C=>J(C.target.value),required:!0}),h.createElement("input",{placeholder:"Vevő neve (pl. Kovács János)",value:Y,onChange:C=>ie(C.target.value)}),h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladás dátuma (+1 hónap garancia)"),h.createElement("input",{type:"date",value:Ke,onChange:C=>ke(C.target.value),required:!0})),h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Megjegyzés a géphez (opcionális)"),h.createElement("input",{placeholder:"Megjegyzés...",value:me,onChange:C=>Zt(C.target.value)}))),h.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)",marginBottom:12}},h.createElement("div",{className:"row",style:{marginBottom:8}},h.createElement("strong",null,"Alkatrészek és sorozatszámok (SN)"),h.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"4px 9px",fontSize:12},onClick:na},h.createElement(ki,{size:13})," Új alkatrész sor")),jr.map((C,H)=>h.createElement("div",{key:`pc-comp-${H}`,style:{display:"grid",gridTemplateColumns:"0.85fr 1.25fr 1.2fr auto",gap:8,marginBottom:8,alignItems:"center"}},h.createElement("input",{placeholder:"Kategória",value:C.category,onChange:X=>Bs(H,"category",X.target.value)}),h.createElement("input",{placeholder:`${C.category||"Alkatrész"} típusa (pl. RTX 3060 8 GB)`,value:C.name,onChange:X=>Bs(H,"name",X.target.value)}),h.createElement("input",{placeholder:"Sorozatszám (SN)",value:C.serialNumber,onChange:X=>Bs(H,"serialNumber",X.target.value)}),h.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"6px 8px"},onClick:()=>ra(H),title:"Sor törlése"},h.createElement(Ci,{size:13}))))),h.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:6}},"Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)"),h.createElement("input",{type:"file",multiple:!0,accept:"application/pdf,image/*",onChange:C=>dn(Array.from(C.target.files||[]))}),An.length>0&&h.createElement("div",{className:"muted",style:{fontSize:12,marginTop:6}},"Kiválasztva (",An.length,"): ",An.map(C=>C.name).join(", ")),dt.length>0&&h.createElement("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}},dt.map(C=>h.createElement("span",{key:C.id,className:"badge badge-indigo",style:{display:"inline-flex",alignItems:"center",gap:6}},C.label,h.createElement("button",{type:"button",onClick:()=>Sn(H=>H.filter(X=>X.id!==C.id)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:0,display:"inline-flex"},title:"Számla eltávolítása"},h.createElement(kr,{size:12})))))),Hr&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Hr),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:Fn},Fn?"Mentés...":j?"Módosítások mentése":"Gép mentése garanciába"),h.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{es(),O(!1)}},"Mégse"))),ye&&h.createElement("form",{className:"card",onSubmit:$s,style:{marginBottom:16}},h.createElement("h3",{style:{marginTop:0}},"Garanciális panasz felvétele",ae?` — ${ae.name}`:""),h.createElement("div",{className:"muted",style:{marginBottom:10}},"Válaszd ki a legördülő menüből a cserélt / garanciáztatott alkatrészt — az SN automatikusan beállítódik."),ia?h.createElement("div",{style:{marginBottom:10}},h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Garanciáztatott alkatrész kiválasztása a gépből"),h.createElement("select",{value:xe,onChange:C=>tr(C.target.value),required:!0},ae.componentRows.map((C,H)=>h.createElement("option",{key:`${C.id||H}-${H}`,value:String(H)},C.category?`[${C.category}] `:"",C.name," — SN: ",C.serialNumber||"-")))):h.createElement("div",{style:{marginBottom:10}},h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Garanciáztatott alkatrész kiválasztása"),h.createElement("select",{value:b,onChange:C=>$l(C.target.value),required:!0},Xi.length===0&&h.createElement("option",{value:""},"-- Nincs elérhető alkatrész --"),Xi.map(C=>h.createElement("option",{key:C.key,value:C.key},C.label)))),h.createElement("div",{className:"row",style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.03)",marginBottom:10,fontSize:13}},h.createElement("div",null,h.createElement("span",{className:"muted"},"Kiválasztott alkatrész: "),h.createElement("strong",null,Ye||"-")),h.createElement("div",null,h.createElement("span",{className:"muted"},"Automatikus SN: "),h.createElement("strong",null,qi||"-"))),h.createElement("div",{className:"grid-2"},h.createElement("select",{value:qr,onChange:C=>_r(C.target.value)},UL.map(C=>h.createElement("option",{key:C,value:C},C))),h.createElement("input",{type:"number",min:"0",placeholder:"Költség neked (Ft, alapból 0)",value:Wi,onChange:C=>Yo(C.target.value)})),h.createElement("div",{style:{marginTop:10}},h.createElement("input",{placeholder:"Megoldás részletei (pl. cserélve másik példányra, postaköltség, stb.)",value:Xo,onChange:C=>Ls(C.target.value)})),qr==="Csere másikra"&&h.createElement("div",{style:{marginTop:12,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.025)"}},h.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:10}},h.createElement("input",{type:"checkbox",style:{width:"auto"},checked:Jo,onChange:C=>Vs(C.target.checked)}),h.createElement("span",null,"Régi alkatrész cseréje az újra a garancia táblában")),Jo&&h.createElement("div",{className:"grid-2"},h.createElement("input",{placeholder:"Új alkatrész neve (pl. Ryzen 5 5600)",value:Ki,onChange:C=>Fs(C.target.value),required:!0}),h.createElement("input",{placeholder:"Új alkatrész SN száma",value:Er,onChange:C=>Gi(C.target.value)}),h.createElement("div",{style:{gridColumn:"1 / -1"}},h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Új alkatrész számlája (opcionális — PDF vagy kép)"),h.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:C=>{var H;return zn(((H=C.target.files)==null?void 0:H[0])||null)}})))),ea&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},ea),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:Zo},Zo?"Mentés...":"Panasz mentése"),h.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>Re(!1)},"Mégse"))),c&&h.createElement("form",{className:"card",onSubmit:Hl,style:{marginBottom:16}},h.createElement("h3",{style:{marginTop:0}},m?`Garancia szerkesztése: ${m.name}`:"Új alkatrész / tétel felvétele"),h.createElement("div",{className:"grid-2"},h.createElement("input",{placeholder:"Alkatrész / tétel neve (pl. RX 6700 XT)",value:S,onChange:C=>P(C.target.value),required:!0}),h.createElement("input",{placeholder:"Vevő neve (opcionális)",value:D,onChange:C=>L(C.target.value)}),h.createElement("select",{value:A,onChange:C=>_(C.target.value)},aE.map(C=>h.createElement("option",{key:C,value:C},C))),h.createElement("input",{placeholder:"Sorozatszám (SN)",value:k,onChange:C=>M(C.target.value)}),h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladás dátuma (+1 hónap garancia)"),h.createElement("input",{type:"date",value:q,onChange:C=>z(C.target.value),required:!0})),h.createElement("div",null,h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Megjegyzés (opcionális)"),h.createElement("input",{placeholder:"Megjegyzés...",value:w,onChange:C=>v(C.target.value)}))),h.createElement("div",{style:{marginTop:12,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},h.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:6}},"Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)"),h.createElement("input",{type:"file",multiple:!0,accept:"application/pdf,image/*",onChange:C=>N(Array.from(C.target.files||[]))}),R.length>0&&h.createElement("div",{className:"muted",style:{fontSize:12,marginTop:6}},"Kiválasztva (",R.length,"): ",R.map(C=>C.name).join(", ")),E.length>0&&h.createElement("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}},E.map(C=>h.createElement("span",{key:C.id,className:"badge badge-indigo",style:{display:"inline-flex",alignItems:"center",gap:6}},C.label,h.createElement("button",{type:"button",onClick:()=>T(H=>H.filter(X=>X.id!==C.id)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:0,display:"inline-flex"},title:"Számla eltávolítása"},h.createElement(kr,{size:12})))))),ue&&h.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},ue),h.createElement("div",{className:"row",style:{marginTop:12}},h.createElement("button",{className:"btn btn-green",type:"submit",disabled:I},I?"Mentés...":m?"Módosítások mentése":"Mentés"),h.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{Zi(),f(!1)}},"Mégse"))),h.createElement("div",{className:"row",style:{marginBottom:14}},h.createElement("div",{className:"row"},h.createElement("button",{className:`btn ${s==="active"?"":"btn-ghost"}`,onClick:()=>o("active")},"Aktív (",Yi,")"),h.createElement("button",{className:`btn ${s==="expired"?"":"btn-ghost"}`,onClick:()=>o("expired")},"Lejárt (",Ji,")"),h.createElement("button",{className:`btn ${s==="all"?"":"btn-ghost"}`,onClick:()=>o("all")},"Összes (",Je.length,")")),h.createElement("div",{style:{flex:1,minWidth:200}},h.createElement("input",{placeholder:"Keresés név, vevő, SN vagy kategória alapján...",value:l,onChange:C=>u(C.target.value)}))),zl.length===0?h.createElement("div",{className:"card"},h.createElement("div",{className:"muted"},"Nincs megjeleníthető garanciális tétel ebben a nézetben.")):h.createElement("div",{className:"grid-2"},zl.map(C=>{var H;return h.createElement("div",{className:"card",key:C.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:12,borderRadius:12}},h.createElement("div",null,h.createElement("div",{className:"row",style:{marginBottom:8}},h.createElement("div",{className:"row",style:{gap:8}},h.createElement(gS,{size:18,color:C.isExpired?"#ef4444":"#22c55e"}),h.createElement("strong",{style:{fontSize:15}},C.name)),h.createElement("div",{className:"row"},C.isAutoBuild&&h.createElement("span",{className:"badge badge-blue"},"Eladott gép"),C.isManualPc&&h.createElement("span",{className:"badge badge-purple"},"Teljes gép"),C.category&&h.createElement("span",{className:"badge badge-indigo"},C.category),h.createElement("span",{className:`badge ${C.isExpired?"badge-red":"badge-green"}`},C.isExpired?"Lejárt":C.daysLeft===0?"Ma jár le":`${C.daysLeft} nap hátra`))),C.buyerName&&h.createElement("div",{className:"muted",style:{fontSize:13,marginBottom:8,display:"inline-flex",alignItems:"center",gap:6}},h.createElement(hx,{size:13})," Vevő: ",h.createElement("strong",null,C.buyerName)),h.createElement("div",{className:"row",style:{padding:"8px 10px",borderRadius:8,background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border)",marginBottom:10,fontSize:13}},h.createElement("span",{className:"muted",style:{display:"inline-flex",alignItems:"center",gap:5}},h.createElement(sx,{size:13})," Eladva: ",h.createElement("strong",null,Mh(C.soldAt))),h.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5},className:C.isExpired?"red":"green"},C.isExpired&&h.createElement(dx,{size:13}),"Lejár: ",h.createElement("strong",null,Mh(C.expiresAt)))),C.componentRows&&C.componentRows.length>0?h.createElement("div",{style:{border:"1px solid var(--border)",borderRadius:8,padding:"4px 10px",background:"rgba(255, 255, 255, 0.015)"}},C.componentRows.map((X,Ie)=>h.createElement("div",{key:`${X.id||Ie}-${Ie}`,className:"row",style:{padding:"6px 0",borderBottom:Ie<C.componentRows.length-1?"1px solid rgba(255,255,255,0.06)":"none",gap:8}},h.createElement("div",{style:{minWidth:0}},h.createElement("div",{style:{fontSize:13,fontWeight:500}},X.name),X.category&&h.createElement("div",{className:"muted",style:{fontSize:11}},X.category)),h.createElement("span",{className:"muted",style:{fontSize:12,textAlign:"right",wordBreak:"break-all"}},"SN: ",X.serialNumber||"-")))):h.createElement("div",{className:"muted",style:{fontSize:13}},"SN: ",h.createElement("strong",null,C.serialNumber)),C.note&&h.createElement("div",{className:"muted",style:{marginTop:8,fontSize:12}},C.note),((H=C.invoices)==null?void 0:H.length)>0&&h.createElement("div",{style:{marginTop:10,paddingTop:8,borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",flexDirection:"column",gap:4}},C.invoices.map(X=>h.createElement("a",{key:`${C.id}-${X.id}`,href:X.url,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:5}},h.createElement(Tl,{size:13})," Számla: ",X.label)))),h.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},h.createElement("button",{className:"btn btn-ghost",onClick:()=>ta(C)},h.createElement(ug,{size:14})," Szerkesztés"),h.createElement("button",{className:"btn btn-ghost",onClick:()=>ts(C)},h.createElement(B_,{size:14})," Panasz"),!C.isAutoBuild&&h.createElement("button",{className:"btn btn-red",onClick:()=>Dd(C),title:"Törlés"},h.createElement(Ci,{size:14}))))})),h.createElement("div",{className:"card",style:{marginTop:18,borderRadius:12}},h.createElement("div",{className:"row",style:{marginBottom:10}},h.createElement("h3",{style:{margin:0}},"Garanciális panaszok (",r.length,")"),h.createElement("span",{className:"muted",style:{fontSize:13}},"Összes költség: ",h.createElement("strong",{className:"red"},bd.toLocaleString("hu-HU")," Ft"))),r.length===0?h.createElement("div",{className:"muted"},"Még nincs rögzített garanciális panasz."):r.map(C=>h.createElement("div",{key:C.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},h.createElement("div",{className:"row"},h.createElement("div",null,h.createElement("strong",null,C.partName),C.serialNumber&&C.serialNumber!=="-"&&h.createElement("span",{className:"muted",style:{marginLeft:8,fontSize:12}},"SN: ",C.serialNumber),C.replacementName&&h.createElement("div",{className:"green",style:{fontSize:12,marginTop:2}},"→ Új csere: ",h.createElement("strong",null,C.replacementName),C.replacementSn&&C.replacementSn!=="-"?` (SN: ${C.replacementSn})`:""),h.createElement("div",{className:"muted",style:{fontSize:12,marginTop:2}},"Megoldás: ",h.createElement("strong",null,C.resolutionType||"Egyéb"),C.solutionDetail?` — ${C.solutionDetail}`:"",C.createdAt?` • ${Mh(C.createdAt)}`:""),C.replacementInvoiceUrl&&h.createElement("div",{style:{marginTop:4}},h.createElement("a",{href:C.replacementInvoiceUrl,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},h.createElement(Tl,{size:13})," Cserealkatrész számlája"))),h.createElement("div",{className:"row"},h.createElement("strong",{className:Number(C.cost||0)>0?"red":"green"},Number(C.cost||0).toLocaleString("hu-HU")," Ft"),h.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},onClick:()=>ql(C),title:"Panasz törlése"},h.createElement(Ci,{size:13}))))))))}const lE=["fabianbal500@gmail.com","beastmaster0626@gmail.com"],Fh="BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w";function BL(){const[t,e]=F.useState([]),[n,r]=F.useState(null),[i,s]=F.useState(!1),[o,l]=F.useState(""),[u,c]=F.useState(""),[f,m]=F.useState(""),[g,S]=F.useState([]),[P,D]=F.useState([]),[L,A]=F.useState([]),[_,k]=F.useState("inventory"),[M,q]=F.useState([]),[z,w]=F.useState([]),[v,E]=F.useState([]),[T,R]=F.useState([]);F.useEffect(()=>{const ue=nP(Dh,async _e=>{_e&&lE.includes((_e.email||"").toLowerCase())?(r(_e),await N(_e.email.toLowerCase())):r(null),s(!0)});return()=>ue()},[]),F.useEffect(()=>{if(!n)return;const ue=Zr(Yr(Bt(pe,"parts"),Jr("createdAt","desc")),Y=>{q(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),_e=Zr(Yr(Bt(pe,"builds"),Jr("createdAt","desc")),Y=>{w(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),ze=Zr(Yr(Bt(pe,"deal_watches"),Jr("createdAt","desc")),Y=>{E(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),O=Zr(Yr(Bt(pe,"found_deals"),Jr("foundAt","desc")),Y=>{R(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),j=Zr(Yr(Bt(pe,"card_expenses"),Jr("createdAt","desc")),Y=>{e(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),K=Zr(Yr(Bt(pe,"sales_log"),Jr("soldAt","desc")),Y=>{S(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),ne=Zr(Yr(Bt(pe,"warranty_items"),Jr("soldAt","desc")),Y=>{D(Y.docs.map(ie=>({id:ie.id,...ie.data()})))}),J=Zr(Yr(Bt(pe,"warranty_complaints"),Jr("createdAt","desc")),Y=>{A(Y.docs.map(ie=>({id:ie.id,...ie.data()})))});return()=>{ue(),_e(),ze(),O(),j(),K(),ne(),J()}},[n]);async function N(ue){try{if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return;const ze=await NL();if(!ze||!Fh||Fh==="BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w")return;const O=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),j=await JO(ze,{vapidKey:Fh,serviceWorkerRegistration:O});if(j){const K=ue.replace(/[^a-z0-9]/g,"_");await sp(Ue(pe,"device_tokens",K),{email:ue,token:j,updatedAt:CD()},{merge:!0})}}catch{}}async function I(ue){ue.preventDefault(),m("");const _e=o.trim().toLowerCase();if(!lE.includes(_e)){m("Ez az e-mail cím nincs engedélyezve.");return}try{await ZR(Dh,_e,u)}catch{m("Hibás e-mail vagy jelszó.")}}if(!i)return null;if(!n)return h.createElement("div",{style:{maxWidth:380,margin:"80px auto",padding:16}},h.createElement("form",{className:"card",onSubmit:I},h.createElement("div",{style:{textAlign:"center",marginBottom:16}},h.createElement(ap,{size:40,color:"#3b82f6"}),h.createElement("h2",{style:{margin:"8px 0 4px"}},"PC Bolt Manager"),h.createElement("div",{className:"muted"},"Zártkörű Webes Készlet & Deal Hunter")),h.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10}},h.createElement("input",{type:"email",placeholder:"E-mail cím",value:o,onChange:ue=>l(ue.target.value),required:!0}),h.createElement("input",{type:"password",placeholder:"Jelszó",value:u,onChange:ue=>c(ue.target.value),required:!0}),f&&h.createElement("div",{className:"red",style:{fontSize:13}},f),h.createElement("button",{className:"btn",type:"submit",style:{justifyContent:"center",padding:11}},"Belépés"))));const Ne=[{id:"inventory",label:"Készlet",icon:cx},{id:"builder",label:"Gépépítő",icon:px},{id:"finance",label:"Pénzügy",icon:fx},{id:"warranty",label:"Garancia",icon:gS},{id:"deals",label:"Deal Hunter",icon:ox}];return h.createElement("div",{className:"app-shell"},h.createElement("aside",{className:"desktop-sidebar"},h.createElement("div",{className:"row",style:{marginBottom:12}},h.createElement("strong",{style:{display:"flex",alignItems:"center",gap:8}},h.createElement(ap,{size:20,color:"#3b82f6"})," PC Bolt"),h.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>rP(Dh),title:"Kilépés"},h.createElement(lx,{size:16}))),Ne.map(ue=>{const _e=ue.icon;return h.createElement("button",{key:ue.id,className:_===ue.id?"active":"",onClick:()=>k(ue.id)},h.createElement(_e,{size:18})," ",ue.label)})),h.createElement("main",{className:"main-content"},_==="inventory"&&h.createElement(bL,{parts:M,userEmail:n.email}),_==="builder"&&h.createElement(DL,{parts:M,builds:z}),_==="finance"&&h.createElement(LL,{parts:M,builds:z,cardExpenses:t,manualSales:g,userEmail:n.email}),_==="warranty"&&h.createElement(zL,{parts:M,builds:z,warrantyItems:P,warrantyComplaints:L,userEmail:n.email}),_==="deals"&&h.createElement(VL,{dealWatches:v,foundDeals:T})),h.createElement("nav",{className:"mobile-bottom-nav"},Ne.map(ue=>{const _e=ue.icon;return h.createElement("button",{key:ue.id,className:_===ue.id?"active":"",onClick:()=>k(ue.id)},h.createElement(_e,{size:20}),h.createElement("span",null,ue.label))})))}Uh.createRoot(document.getElementById("root")).render(h.createElement(h.StrictMode,null,h.createElement(BL,null)));
