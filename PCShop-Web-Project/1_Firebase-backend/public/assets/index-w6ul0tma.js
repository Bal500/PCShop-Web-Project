(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var TE={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=Symbol.for("react.element"),hS=Symbol.for("react.portal"),fS=Symbol.for("react.fragment"),mS=Symbol.for("react.strict_mode"),pS=Symbol.for("react.profiler"),gS=Symbol.for("react.provider"),yS=Symbol.for("react.context"),vS=Symbol.for("react.forward_ref"),_S=Symbol.for("react.suspense"),ES=Symbol.for("react.memo"),wS=Symbol.for("react.lazy"),qg=Symbol.iterator;function TS(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var IE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},SE=Object.assign,kE={};function sa(t,e,n){this.props=t,this.context=e,this.refs=kE,this.updater=n||IE}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function AE(){}AE.prototype=sa.prototype;function _m(t,e,n){this.props=t,this.context=e,this.refs=kE,this.updater=n||IE}var Em=_m.prototype=new AE;Em.constructor=_m;SE(Em,sa.prototype);Em.isPureReactComponent=!0;var Kg=Array.isArray,bE=Object.prototype.hasOwnProperty,wm={current:null},CE={key:!0,ref:!0,__self:!0,__source:!0};function NE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bE.call(e,r)&&!CE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ll,type:t,key:s,ref:o,props:i,_owner:wm.current}}function IS(t,e){return{$$typeof:Ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ll}function SS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gg=/\/+/g;function Gd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SS(""+t.key):e.toString(36)}function xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ll:case hS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gd(o,0):r,Kg(i)?(n="",t!=null&&(n=t.replace(Gg,"$&/")+"/"),xu(i,e,n,"",function(d){return d})):i!=null&&(Tm(i)&&(i=IS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gd(s,l);o+=xu(s,e,n,u,i)}else if(u=TS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gd(s,l++),o+=xu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},Ou={transition:null},AS={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:wm};function RE(){throw Error("act(...) is not supported in production builds of React.")}Ae.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!Tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ae.Component=sa;Ae.Fragment=fS;Ae.Profiler=pS;Ae.PureComponent=_m;Ae.StrictMode=mS;Ae.Suspense=_S;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;Ae.act=RE;Ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=SE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)bE.call(e,u)&&!CE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ll,type:t.type,key:i,ref:s,props:r,_owner:o}};Ae.createContext=function(t){return t={$$typeof:yS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gS,_context:t},t.Consumer=t};Ae.createElement=NE;Ae.createFactory=function(t){var e=NE.bind(null,t);return e.type=t,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(t){return{$$typeof:vS,render:t}};Ae.isValidElement=Tm;Ae.lazy=function(t){return{$$typeof:wS,_payload:{_status:-1,_result:t},_init:kS}};Ae.memo=function(t,e){return{$$typeof:ES,type:t,compare:e===void 0?null:e}};Ae.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};Ae.unstable_act=RE;Ae.useCallback=function(t,e){return wn.current.useCallback(t,e)};Ae.useContext=function(t){return wn.current.useContext(t)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};Ae.useEffect=function(t,e){return wn.current.useEffect(t,e)};Ae.useId=function(){return wn.current.useId()};Ae.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};Ae.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};Ae.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};Ae.useMemo=function(t,e){return wn.current.useMemo(t,e)};Ae.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};Ae.useRef=function(t){return wn.current.useRef(t)};Ae.useState=function(t){return wn.current.useState(t)};Ae.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};Ae.useTransition=function(){return wn.current.useTransition()};Ae.version="18.3.1";TE.exports=Ae;var M=TE.exports;const c=dS(M);var Kh={},PE={exports:{}},nr={},DE={exports:{}},xE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Z){var ae=q.length;q.push(Z);e:for(;0<ae;){var Te=ae-1>>>1,he=q[Te];if(0<i(he,Z))q[Te]=Z,q[ae]=he,ae=Te;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Z=q[0],ae=q.pop();if(ae!==Z){q[0]=ae;e:for(var Te=0,he=q.length,ue=he>>>1;Te<ue;){var ce=2*(Te+1)-1,Ot=q[ce],ct=ce+1,Ct=q[ct];if(0>i(Ot,ae))ct<he&&0>i(Ct,Ot)?(q[Te]=Ct,q[ct]=ae,Te=ct):(q[Te]=Ot,q[ce]=ae,Te=ce);else if(ct<he&&0>i(Ct,ae))q[Te]=Ct,q[ct]=ae,Te=ct;else break e}}return Z}function i(q,Z){var ae=q.sortIndex-Z.sortIndex;return ae!==0?ae:q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,p=null,g=3,T=!1,N=!1,D=!1,F=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(q){for(var Z=n(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=q)r(d),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(d)}}function L(q){if(D=!1,A(q),!N)if(n(u)!==null)N=!0,Ee(V);else{var Z=n(d);Z!==null&&ze(L,Z.startTime-q)}}function V(q,Z){N=!1,D&&(D=!1,k(v),v=-1),T=!0;var ae=g;try{for(A(Z),p=n(u);p!==null&&(!(p.expirationTime>Z)||q&&!C());){var Te=p.callback;if(typeof Te=="function"){p.callback=null,g=p.priorityLevel;var he=Te(p.expirationTime<=Z);Z=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),A(Z)}else r(u);p=n(u)}if(p!==null)var ue=!0;else{var ce=n(d);ce!==null&&ze(L,ce.startTime-Z),ue=!1}return ue}finally{p=null,g=ae,T=!1}}var B=!1,E=null,v=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function P(){if(E!==null){var q=t.unstable_now();S=q;var Z=!0;try{Z=E(!0,q)}finally{Z?I():(B=!1,E=null)}}else B=!1}var I;if(typeof _=="function")I=function(){_(P)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,de=Se.port2;Se.port1.onmessage=P,I=function(){de.postMessage(null)}}else I=function(){F(P,0)};function Ee(q){E=q,B||(B=!0,I())}function ze(q,Z){v=F(function(){q(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){N||T||(N=!0,Ee(V))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var ae=g;g=Z;try{return q()}finally{g=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Z){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=g;g=q;try{return Z()}finally{g=ae}},t.unstable_scheduleCallback=function(q,Z,ae){var Te=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Te+ae:Te):ae=Te,q){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ae+he,q={id:f++,callback:Z,priorityLevel:q,startTime:ae,expirationTime:he,sortIndex:-1},ae>Te?(q.sortIndex=ae,e(d,q),n(u)===null&&q===n(d)&&(D?(k(v),v=-1):D=!0,ze(L,ae-Te))):(q.sortIndex=he,e(u,q),N||T||(N=!0,Ee(V))),q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(q){var Z=g;return function(){var ae=g;g=Z;try{return q.apply(this,arguments)}finally{g=ae}}}})(xE);DE.exports=xE;var bS=DE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CS=M,tr=bS;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var OE=new Set,sl={};function no(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(sl[t]=e,t=0;t<e.length;t++)OE.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gh=Object.prototype.hasOwnProperty,NS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Xg={};function RS(t){return Gh.call(Xg,t)?!0:Gh.call(Qg,t)?!1:NS.test(t)?Xg[t]=!0:(Qg[t]=!0,!1)}function PS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DS(t,e,n,r){if(e===null||typeof e>"u"||PS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new Tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new Tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new Tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new Tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new Tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new Tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new Tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new Tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new Tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Im=/[\-:]([a-z])/g;function Sm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Im,Sm);Xt[e]=new Tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Im,Sm);Xt[e]=new Tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Im,Sm);Xt[e]=new Tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new Tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new Tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function km(t,e,n,r){var i=Xt.hasOwnProperty(e)?Xt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DS(e,n,i,r)&&(n=null),r||i===null?RS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _i=CS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),wo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),ME=Symbol.for("react.provider"),LE=Symbol.for("react.context"),bm=Symbol.for("react.forward_ref"),Xh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),Cm=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),VE=Symbol.for("react.offscreen"),Yg=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,Qd;function Da(t){if(Qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+t}var Xd=!1;function Yd(t,e){if(!t||Xd)return"";Xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function xS(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Yd(t.type,!1),t;case 11:return t=Yd(t.type.render,!1),t;case 1:return t=Yd(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case To:return"Fragment";case wo:return"Portal";case Qh:return"Profiler";case Am:return"StrictMode";case Xh:return"Suspense";case Yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case LE:return(t.displayName||"Context")+".Consumer";case ME:return(t._context.displayName||"Context")+".Provider";case bm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cm:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function OS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Am?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ns(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function FE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MS(t){var e=FE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=MS(t))}function zE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=FE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zh(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ns(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function UE(t,e){e=e.checked,e!=null&&km(t,"checked",e,!1)}function ef(t,e){UE(t,e);var n=ns(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,ns(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function Oo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ns(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(xa(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ns(n)}}function BE(t,e){var n=ns(e.value),r=ns(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,$E=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LS=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){LS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function HE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function WE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=HE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VS=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(VS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,Mo=null,Lo=null;function ny(t){if(t=zl(t)){if(typeof lf!="function")throw Error(W(280));var e=t.stateNode;e&&(e=Xc(e),lf(t.stateNode,t.type,e))}}function qE(t){Mo?Lo?Lo.push(t):Lo=[t]:Mo=t}function KE(){if(Mo){var t=Mo,e=Lo;if(Lo=Mo=null,ny(t),e)for(t=0;t<e.length;t++)ny(e[t])}}function GE(t,e){return t(e)}function QE(){}var Jd=!1;function XE(t,e,n){if(Jd)return t(e,n);Jd=!0;try{return GE(t,e,n)}finally{Jd=!1,(Mo!==null||Lo!==null)&&(QE(),KE())}}function al(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var uf=!1;if(di)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{uf=!1}function FS(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var $a=!1,nc=null,rc=!1,cf=null,zS={onError:function(t){$a=!0,nc=t}};function US(t,e,n,r,i,s,o,l,u){$a=!1,nc=null,FS.apply(zS,arguments)}function BS(t,e,n,r,i,s,o,l,u){if(US.apply(this,arguments),$a){if($a){var d=nc;$a=!1,nc=null}else throw Error(W(198));rc||(rc=!0,cf=d)}}function ro(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function YE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ry(t){if(ro(t)!==t)throw Error(W(188))}function jS(t){var e=t.alternate;if(!e){if(e=ro(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ry(i),t;if(s===r)return ry(i),e;s=s.sibling}throw Error(W(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function JE(t){return t=jS(t),t!==null?ZE(t):null}function ZE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ZE(t);if(e!==null)return e;t=t.sibling}return null}var ew=tr.unstable_scheduleCallback,iy=tr.unstable_cancelCallback,$S=tr.unstable_shouldYield,HS=tr.unstable_requestPaint,Et=tr.unstable_now,WS=tr.unstable_getCurrentPriorityLevel,Rm=tr.unstable_ImmediatePriority,tw=tr.unstable_UserBlockingPriority,ic=tr.unstable_NormalPriority,qS=tr.unstable_LowPriority,nw=tr.unstable_IdlePriority,qc=null,Fr=null;function KS(t){if(Fr&&typeof Fr.onCommitFiberRoot=="function")try{Fr.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:XS,GS=Math.log,QS=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(GS(t)/QS|0)|0}var du=64,hu=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Oa(l):(s&=o,s!==0&&(r=Oa(s)))}else o=n&~i,o!==0?r=Oa(o):s!==0&&(r=Oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kr(e),i=1<<n,r|=t[n],e&=~i;return r}function YS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kr(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=YS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rw(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function Zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kr(e),t[e]=n}function ZS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Be=0;function iw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sw,Dm,ow,aw,lw,hf=!1,fu=[],$i=null,Hi=null,Wi=null,ll=new Map,ul=new Map,xi=[],ek="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sy(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function Sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zl(e),e!==null&&Dm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tk(t,e,n,r,i){switch(e){case"focusin":return $i=Sa($i,t,e,n,r,i),!0;case"dragenter":return Hi=Sa(Hi,t,e,n,r,i),!0;case"mouseover":return Wi=Sa(Wi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ll.set(s,Sa(ll.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ul.set(s,Sa(ul.get(s)||null,t,e,n,r,i)),!0}return!1}function uw(t){var e=Ds(t.target);if(e!==null){var n=ro(e);if(n!==null){if(e=n.tag,e===13){if(e=YE(n),e!==null){t.blockedOn=e,lw(t.priority,function(){ow(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=zl(n),e!==null&&Dm(e),t.blockedOn=n,!1;e.shift()}return!0}function oy(t,e,n){Mu(t)&&n.delete(e)}function nk(){hf=!1,$i!==null&&Mu($i)&&($i=null),Hi!==null&&Mu(Hi)&&(Hi=null),Wi!==null&&Mu(Wi)&&(Wi=null),ll.forEach(oy),ul.forEach(oy)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,tr.unstable_scheduleCallback(tr.unstable_NormalPriority,nk)))}function cl(t){function e(i){return ka(i,t)}if(0<fu.length){ka(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for($i!==null&&ka($i,t),Hi!==null&&ka(Hi,t),Wi!==null&&ka(Wi,t),ll.forEach(e),ul.forEach(e),n=0;n<xi.length;n++)r=xi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)uw(n),n.blockedOn===null&&xi.shift()}var Vo=_i.ReactCurrentBatchConfig,oc=!0;function rk(t,e,n,r){var i=Be,s=Vo.transition;Vo.transition=null;try{Be=1,xm(t,e,n,r)}finally{Be=i,Vo.transition=s}}function ik(t,e,n,r){var i=Be,s=Vo.transition;Vo.transition=null;try{Be=4,xm(t,e,n,r)}finally{Be=i,Vo.transition=s}}function xm(t,e,n,r){if(oc){var i=ff(t,e,n,r);if(i===null)uh(t,e,r,ac,n),sy(t,r);else if(tk(i,t,e,n,r))r.stopPropagation();else if(sy(t,r),e&4&&-1<ek.indexOf(t)){for(;i!==null;){var s=zl(i);if(s!==null&&sw(s),s=ff(t,e,n,r),s===null&&uh(t,e,r,ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uh(t,e,r,null,n)}}var ac=null;function ff(t,e,n,r){if(ac=null,t=Nm(r),t=Ds(t),t!==null)if(e=ro(t),e===null)t=null;else if(n=e.tag,n===13){if(t=YE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WS()){case Rm:return 1;case tw:return 4;case ic:case qS:return 16;case nw:return 536870912;default:return 16}default:return 16}}var Ui=null,Om=null,Lu=null;function dw(){if(Lu)return Lu;var t,e=Om,n=e.length,r,i="value"in Ui?Ui.value:Ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lu=i.slice(t,1<r?1-r:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mu(){return!0}function ay(){return!1}function rr(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:ay,this.isPropagationStopped=ay,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mm=rr(oa),Fl=lt({},oa,{view:0,detail:0}),sk=rr(Fl),eh,th,Aa,Kc=lt({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(eh=t.screenX-Aa.screenX,th=t.screenY-Aa.screenY):th=eh=0,Aa=t),eh)},movementY:function(t){return"movementY"in t?t.movementY:th}}),ly=rr(Kc),ok=lt({},Kc,{dataTransfer:0}),ak=rr(ok),lk=lt({},Fl,{relatedTarget:0}),nh=rr(lk),uk=lt({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),ck=rr(uk),dk=lt({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hk=rr(dk),fk=lt({},oa,{data:0}),uy=rr(fk),mk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gk[t])?!!e[t]:!1}function Lm(){return yk}var vk=lt({},Fl,{key:function(t){if(t.key){var e=mk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lm,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_k=rr(vk),Ek=lt({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cy=rr(Ek),wk=lt({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lm}),Tk=rr(wk),Ik=lt({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sk=rr(Ik),kk=lt({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ak=rr(kk),bk=[9,13,27,32],Vm=di&&"CompositionEvent"in window,Ha=null;di&&"documentMode"in document&&(Ha=document.documentMode);var Ck=di&&"TextEvent"in window&&!Ha,hw=di&&(!Vm||Ha&&8<Ha&&11>=Ha),dy=" ",hy=!1;function fw(t,e){switch(t){case"keyup":return bk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Io=!1;function Nk(t,e){switch(t){case"compositionend":return mw(e);case"keypress":return e.which!==32?null:(hy=!0,dy);case"textInput":return t=e.data,t===dy&&hy?null:t;default:return null}}function Rk(t,e){if(Io)return t==="compositionend"||!Vm&&fw(t,e)?(t=dw(),Lu=Om=Ui=null,Io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hw&&e.locale!=="ko"?null:e.data;default:return null}}var Pk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Pk[t.type]:e==="textarea"}function pw(t,e,n,r){qE(r),e=lc(e,"onChange"),0<e.length&&(n=new Mm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wa=null,dl=null;function Dk(t){Aw(t,0)}function Gc(t){var e=Ao(t);if(zE(e))return t}function xk(t,e){if(t==="change")return e}var gw=!1;if(di){var rh;if(di){var ih="oninput"in document;if(!ih){var my=document.createElement("div");my.setAttribute("oninput","return;"),ih=typeof my.oninput=="function"}rh=ih}else rh=!1;gw=rh&&(!document.documentMode||9<document.documentMode)}function py(){Wa&&(Wa.detachEvent("onpropertychange",yw),dl=Wa=null)}function yw(t){if(t.propertyName==="value"&&Gc(dl)){var e=[];pw(e,dl,t,Nm(t)),XE(Dk,e)}}function Ok(t,e,n){t==="focusin"?(py(),Wa=e,dl=n,Wa.attachEvent("onpropertychange",yw)):t==="focusout"&&py()}function Mk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(dl)}function Lk(t,e){if(t==="click")return Gc(e)}function Vk(t,e){if(t==="input"||t==="change")return Gc(e)}function Fk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var br=typeof Object.is=="function"?Object.is:Fk;function hl(t,e){if(br(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gh.call(e,i)||!br(t[i],e[i]))return!1}return!0}function gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yy(t,e){var n=gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gy(n)}}function vw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _w(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zk(t){var e=_w(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vw(n.ownerDocument.documentElement,n)){if(r!==null&&Fm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=yy(n,s);var o=yy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Uk=di&&"documentMode"in document&&11>=document.documentMode,So=null,mf=null,qa=null,pf=!1;function vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||So==null||So!==tc(r)||(r=So,"selectionStart"in r&&Fm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qa&&hl(qa,r)||(qa=r,r=lc(mf,"onSelect"),0<r.length&&(e=new Mm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=So)))}function pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ko={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},sh={},Ew={};di&&(Ew=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Qc(t){if(sh[t])return sh[t];if(!ko[t])return t;var e=ko[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ew)return sh[t]=e[n];return t}var ww=Qc("animationend"),Tw=Qc("animationiteration"),Iw=Qc("animationstart"),Sw=Qc("transitionend"),kw=new Map,_y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){kw.set(t,e),no(e,[t])}for(var oh=0;oh<_y.length;oh++){var ah=_y[oh],Bk=ah.toLowerCase(),jk=ah[0].toUpperCase()+ah.slice(1);ds(Bk,"on"+jk)}ds(ww,"onAnimationEnd");ds(Tw,"onAnimationIteration");ds(Iw,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(Sw,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$k=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Ey(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BS(r,e,void 0,t),t.currentTarget=null}function Aw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ey(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ey(i,l,d),s=u}}}if(rc)throw t=cf,rc=!1,cf=null,t}function Ze(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var r=t+"__bubble";n.has(r)||(bw(e,t,2,!1),n.add(r))}function lh(t,e,n){var r=0;e&&(r|=4),bw(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[gu]){t[gu]=!0,OE.forEach(function(n){n!=="selectionchange"&&($k.has(n)||lh(n,!1,t),lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,lh("selectionchange",!1,e))}}function bw(t,e,n,r){switch(cw(e)){case 1:var i=rk;break;case 4:i=ik;break;default:i=xm}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ds(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}XE(function(){var d=s,f=Nm(n),p=[];e:{var g=kw.get(t);if(g!==void 0){var T=Mm,N=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":T=_k;break;case"focusin":N="focus",T=nh;break;case"focusout":N="blur",T=nh;break;case"beforeblur":case"afterblur":T=nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ly;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=ak;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Tk;break;case ww:case Tw:case Iw:T=ck;break;case Sw:T=Sk;break;case"scroll":T=sk;break;case"wheel":T=Ak;break;case"copy":case"cut":case"paste":T=hk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=cy}var D=(e&4)!==0,F=!D&&t==="scroll",k=D?g!==null?g+"Capture":null:g;D=[];for(var _=d,A;_!==null;){A=_;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,k!==null&&(L=al(_,k),L!=null&&D.push(ml(_,L,A)))),F)break;_=_.return}0<D.length&&(g=new T(g,N,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==af&&(N=n.relatedTarget||n.fromElement)&&(Ds(N)||N[hi]))break e;if((T||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,T?(N=n.relatedTarget||n.toElement,T=d,N=N?Ds(N):null,N!==null&&(F=ro(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(T=null,N=d),T!==N)){if(D=ly,L="onMouseLeave",k="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=cy,L="onPointerLeave",k="onPointerEnter",_="pointer"),F=T==null?g:Ao(T),A=N==null?g:Ao(N),g=new D(L,_+"leave",T,n,f),g.target=F,g.relatedTarget=A,L=null,Ds(f)===d&&(D=new D(k,_+"enter",N,n,f),D.target=A,D.relatedTarget=F,L=D),F=L,T&&N)t:{for(D=T,k=N,_=0,A=D;A;A=po(A))_++;for(A=0,L=k;L;L=po(L))A++;for(;0<_-A;)D=po(D),_--;for(;0<A-_;)k=po(k),A--;for(;_--;){if(D===k||k!==null&&D===k.alternate)break t;D=po(D),k=po(k)}D=null}else D=null;T!==null&&wy(p,g,T,D,!1),N!==null&&F!==null&&wy(p,F,N,D,!0)}}e:{if(g=d?Ao(d):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var V=xk;else if(fy(g))if(gw)V=Vk;else{V=Mk;var B=Ok}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=Lk);if(V&&(V=V(t,d))){pw(p,V,n,f);break e}B&&B(t,g,d),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&tf(g,"number",g.value)}switch(B=d?Ao(d):window,t){case"focusin":(fy(B)||B.contentEditable==="true")&&(So=B,mf=d,qa=null);break;case"focusout":qa=mf=So=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,vy(p,n,f);break;case"selectionchange":if(Uk)break;case"keydown":case"keyup":vy(p,n,f)}var E;if(Vm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Io?fw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(hw&&n.locale!=="ko"&&(Io||v!=="onCompositionStart"?v==="onCompositionEnd"&&Io&&(E=dw()):(Ui=f,Om="value"in Ui?Ui.value:Ui.textContent,Io=!0)),B=lc(d,v),0<B.length&&(v=new uy(v,t,null,n,f),p.push({event:v,listeners:B}),E?v.data=E:(E=mw(n),E!==null&&(v.data=E)))),(E=Ck?Nk(t,n):Rk(t,n))&&(d=lc(d,"onBeforeInput"),0<d.length&&(f=new uy("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=E))}Aw(p,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(ml(t,s,i)),s=al(t,e),s!=null&&r.push(ml(t,s,i))),t=t.return}return r}function po(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=al(n,s),u!=null&&o.unshift(ml(n,u,l))):i||(u=al(n,s),u!=null&&o.push(ml(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Hk=/\r\n?/g,Wk=/\u0000|\uFFFD/g;function Ty(t){return(typeof t=="string"?t:""+t).replace(Hk,`
`).replace(Wk,"")}function yu(t,e,n){if(e=Ty(e),Ty(t)!==e&&n)throw Error(W(425))}function uc(){}var gf=null,yf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,qk=typeof clearTimeout=="function"?clearTimeout:void 0,Iy=typeof Promise=="function"?Promise:void 0,Kk=typeof queueMicrotask=="function"?queueMicrotask:typeof Iy<"u"?function(t){return Iy.resolve(null).then(t).catch(Gk)}:_f;function Gk(t){setTimeout(function(){throw t})}function ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cl(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Lr="__reactFiber$"+aa,pl="__reactProps$"+aa,hi="__reactContainer$"+aa,Ef="__reactEvents$"+aa,Qk="__reactListeners$"+aa,Xk="__reactHandles$"+aa;function Ds(t){var e=t[Lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sy(t);t!==null;){if(n=t[Lr])return n;t=Sy(t)}return e}t=n,n=t.parentNode}return null}function zl(t){return t=t[Lr]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function Xc(t){return t[pl]||null}var wf=[],bo=-1;function hs(t){return{current:t}}function tt(t){0>bo||(t.current=wf[bo],wf[bo]=null,bo--)}function Ye(t,e){bo++,wf[bo]=t.current,t.current=e}var rs={},dn=hs(rs),Ln=hs(!1),js=rs;function qo(t,e){var n=t.type.contextTypes;if(!n)return rs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vn(t){return t=t.childContextTypes,t!=null}function cc(){tt(Ln),tt(dn)}function ky(t,e,n){if(dn.current!==rs)throw Error(W(168));Ye(dn,e),Ye(Ln,n)}function Cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(W(108,OS(t)||"Unknown",i));return lt({},n,r)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rs,js=dn.current,Ye(dn,t),Ye(Ln,Ln.current),!0}function Ay(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=Cw(t,e,js),r.__reactInternalMemoizedMergedChildContext=t,tt(Ln),tt(dn),Ye(dn,t)):tt(Ln),Ye(Ln,n)}var ii=null,Yc=!1,dh=!1;function Nw(t){ii===null?ii=[t]:ii.push(t)}function Yk(t){Yc=!0,Nw(t)}function fs(){if(!dh&&ii!==null){dh=!0;var t=0,e=Be;try{var n=ii;for(Be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ii=null,Yc=!1}catch(i){throw ii!==null&&(ii=ii.slice(t+1)),ew(Rm,fs),i}finally{Be=e,dh=!1}}return null}var Co=[],No=0,hc=null,fc=0,ar=[],lr=0,$s=null,si=1,oi="";function Ns(t,e){Co[No++]=fc,Co[No++]=hc,hc=t,fc=e}function Rw(t,e,n){ar[lr++]=si,ar[lr++]=oi,ar[lr++]=$s,$s=t;var r=si;t=oi;var i=32-kr(r)-1;r&=~(1<<i),n+=1;var s=32-kr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,si=1<<32-kr(e)+i|n<<i|r,oi=s+t}else si=1<<s|n<<i|r,oi=t}function zm(t){t.return!==null&&(Ns(t,1),Rw(t,1,0))}function Um(t){for(;t===hc;)hc=Co[--No],Co[No]=null,fc=Co[--No],Co[No]=null;for(;t===$s;)$s=ar[--lr],ar[lr]=null,oi=ar[--lr],ar[lr]=null,si=ar[--lr],ar[lr]=null}var er=null,Yn=null,it=!1,Ir=null;function Pw(t,e){var n=cr(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function by(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,er=t,Yn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,er=t,Yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$s!==null?{id:si,overflow:oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cr(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,er=t,Yn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(it){var e=Yn;if(e){var n=e;if(!by(t,e)){if(Tf(t))throw Error(W(418));e=qi(n.nextSibling);var r=er;e&&by(t,e)?Pw(r,n):(t.flags=t.flags&-4097|2,it=!1,er=t)}}else{if(Tf(t))throw Error(W(418));t.flags=t.flags&-4097|2,it=!1,er=t}}}function Cy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;er=t}function vu(t){if(t!==er)return!1;if(!it)return Cy(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Yn)){if(Tf(t))throw Dw(),Error(W(418));for(;e;)Pw(t,e),e=qi(e.nextSibling)}if(Cy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yn=null}}else Yn=er?qi(t.stateNode.nextSibling):null;return!0}function Dw(){for(var t=Yn;t;)t=qi(t.nextSibling)}function Ko(){Yn=er=null,it=!1}function Bm(t){Ir===null?Ir=[t]:Ir.push(t)}var Jk=_i.ReactCurrentBatchConfig;function ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ny(t){var e=t._init;return e(t._payload)}function xw(t){function e(k,_){if(t){var A=k.deletions;A===null?(k.deletions=[_],k.flags|=16):A.push(_)}}function n(k,_){if(!t)return null;for(;_!==null;)e(k,_),_=_.sibling;return null}function r(k,_){for(k=new Map;_!==null;)_.key!==null?k.set(_.key,_):k.set(_.index,_),_=_.sibling;return k}function i(k,_){return k=Xi(k,_),k.index=0,k.sibling=null,k}function s(k,_,A){return k.index=A,t?(A=k.alternate,A!==null?(A=A.index,A<_?(k.flags|=2,_):A):(k.flags|=2,_)):(k.flags|=1048576,_)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,_,A,L){return _===null||_.tag!==6?(_=vh(A,k.mode,L),_.return=k,_):(_=i(_,A),_.return=k,_)}function u(k,_,A,L){var V=A.type;return V===To?f(k,_,A.props.children,L,A.key):_!==null&&(_.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Pi&&Ny(V)===_.type)?(L=i(_,A.props),L.ref=ba(k,_,A),L.return=k,L):(L=Hu(A.type,A.key,A.props,null,k.mode,L),L.ref=ba(k,_,A),L.return=k,L)}function d(k,_,A,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=_h(A,k.mode,L),_.return=k,_):(_=i(_,A.children||[]),_.return=k,_)}function f(k,_,A,L,V){return _===null||_.tag!==7?(_=Fs(A,k.mode,L,V),_.return=k,_):(_=i(_,A),_.return=k,_)}function p(k,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=vh(""+_,k.mode,A),_.return=k,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case lu:return A=Hu(_.type,_.key,_.props,null,k.mode,A),A.ref=ba(k,null,_),A.return=k,A;case wo:return _=_h(_,k.mode,A),_.return=k,_;case Pi:var L=_._init;return p(k,L(_._payload),A)}if(xa(_)||Ta(_))return _=Fs(_,k.mode,A,null),_.return=k,_;_u(k,_)}return null}function g(k,_,A,L){var V=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return V!==null?null:l(k,_,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case lu:return A.key===V?u(k,_,A,L):null;case wo:return A.key===V?d(k,_,A,L):null;case Pi:return V=A._init,g(k,_,V(A._payload),L)}if(xa(A)||Ta(A))return V!==null?null:f(k,_,A,L,null);_u(k,A)}return null}function T(k,_,A,L,V){if(typeof L=="string"&&L!==""||typeof L=="number")return k=k.get(A)||null,l(_,k,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case lu:return k=k.get(L.key===null?A:L.key)||null,u(_,k,L,V);case wo:return k=k.get(L.key===null?A:L.key)||null,d(_,k,L,V);case Pi:var B=L._init;return T(k,_,A,B(L._payload),V)}if(xa(L)||Ta(L))return k=k.get(A)||null,f(_,k,L,V,null);_u(_,L)}return null}function N(k,_,A,L){for(var V=null,B=null,E=_,v=_=0,w=null;E!==null&&v<A.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var S=g(k,E,A[v],L);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(k,E),_=s(S,_,v),B===null?V=S:B.sibling=S,B=S,E=w}if(v===A.length)return n(k,E),it&&Ns(k,v),V;if(E===null){for(;v<A.length;v++)E=p(k,A[v],L),E!==null&&(_=s(E,_,v),B===null?V=E:B.sibling=E,B=E);return it&&Ns(k,v),V}for(E=r(k,E);v<A.length;v++)w=T(E,k,v,A[v],L),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=s(w,_,v),B===null?V=w:B.sibling=w,B=w);return t&&E.forEach(function(C){return e(k,C)}),it&&Ns(k,v),V}function D(k,_,A,L){var V=Ta(A);if(typeof V!="function")throw Error(W(150));if(A=V.call(A),A==null)throw Error(W(151));for(var B=V=null,E=_,v=_=0,w=null,S=A.next();E!==null&&!S.done;v++,S=A.next()){E.index>v?(w=E,E=null):w=E.sibling;var C=g(k,E,S.value,L);if(C===null){E===null&&(E=w);break}t&&E&&C.alternate===null&&e(k,E),_=s(C,_,v),B===null?V=C:B.sibling=C,B=C,E=w}if(S.done)return n(k,E),it&&Ns(k,v),V;if(E===null){for(;!S.done;v++,S=A.next())S=p(k,S.value,L),S!==null&&(_=s(S,_,v),B===null?V=S:B.sibling=S,B=S);return it&&Ns(k,v),V}for(E=r(k,E);!S.done;v++,S=A.next())S=T(E,k,v,S.value,L),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=s(S,_,v),B===null?V=S:B.sibling=S,B=S);return t&&E.forEach(function(P){return e(k,P)}),it&&Ns(k,v),V}function F(k,_,A,L){if(typeof A=="object"&&A!==null&&A.type===To&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case lu:e:{for(var V=A.key,B=_;B!==null;){if(B.key===V){if(V=A.type,V===To){if(B.tag===7){n(k,B.sibling),_=i(B,A.props.children),_.return=k,k=_;break e}}else if(B.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Pi&&Ny(V)===B.type){n(k,B.sibling),_=i(B,A.props),_.ref=ba(k,B,A),_.return=k,k=_;break e}n(k,B);break}else e(k,B);B=B.sibling}A.type===To?(_=Fs(A.props.children,k.mode,L,A.key),_.return=k,k=_):(L=Hu(A.type,A.key,A.props,null,k.mode,L),L.ref=ba(k,_,A),L.return=k,k=L)}return o(k);case wo:e:{for(B=A.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(k,_.sibling),_=i(_,A.children||[]),_.return=k,k=_;break e}else{n(k,_);break}else e(k,_);_=_.sibling}_=_h(A,k.mode,L),_.return=k,k=_}return o(k);case Pi:return B=A._init,F(k,_,B(A._payload),L)}if(xa(A))return N(k,_,A,L);if(Ta(A))return D(k,_,A,L);_u(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(k,_.sibling),_=i(_,A),_.return=k,k=_):(n(k,_),_=vh(A,k.mode,L),_.return=k,k=_),o(k)):n(k,_)}return F}var Go=xw(!0),Ow=xw(!1),mc=hs(null),pc=null,Ro=null,jm=null;function $m(){jm=Ro=pc=null}function Hm(t){var e=mc.current;tt(mc),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fo(t,e){pc=t,jm=Ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(On=!0),t.firstContext=null)}function pr(t){var e=t._currentValue;if(jm!==t)if(t={context:t,memoizedValue:e,next:null},Ro===null){if(pc===null)throw Error(W(308));Ro=t,pc.dependencies={lanes:0,firstContext:t}}else Ro=Ro.next=t;return e}var xs=null;function Wm(t){xs===null?xs=[t]:xs.push(t)}function Mw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wm(e)):(n.next=i.next,i.next=n),e.interleaved=n,fi(t,r)}function fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function qm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fi(t,n)}return i=r.interleaved,i===null?(e.next=e,Wm(r)):(e.next=i.next,i.next=e),r.interleaved=e,fi(t,n)}function Fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}function Ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,r){var i=t.updateQueue;Di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=d=u=null,l=s;do{var g=l.lane,T=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(g=e,T=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){p=N.call(T,p,g);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,g=typeof N=="function"?N.call(T,p,g):N,g==null)break e;p=lt({},p,g);break e;case 2:Di=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=T,u=p):f=f.next=T,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=p}}function Py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(W(191,i));i.call(r)}}}var Ul={},zr=hs(Ul),gl=hs(Ul),yl=hs(Ul);function Os(t){if(t===Ul)throw Error(W(174));return t}function Km(t,e){switch(Ye(yl,e),Ye(gl,t),Ye(zr,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}tt(zr),Ye(zr,e)}function Qo(){tt(zr),tt(gl),tt(yl)}function Vw(t){Os(yl.current);var e=Os(zr.current),n=rf(e,t.type);e!==n&&(Ye(gl,t),Ye(zr,n))}function Gm(t){gl.current===t&&(tt(zr),tt(gl))}var ot=hs(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hh=[];function Qm(){for(var t=0;t<hh.length;t++)hh[t]._workInProgressVersionPrimary=null;hh.length=0}var zu=_i.ReactCurrentDispatcher,fh=_i.ReactCurrentBatchConfig,Hs=0,at=null,Pt=null,Ft=null,vc=!1,Ka=!1,vl=0,Zk=0;function rn(){throw Error(W(321))}function Xm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!br(t[n],e[n]))return!1;return!0}function Ym(t,e,n,r,i,s){if(Hs=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zu.current=t===null||t.memoizedState===null?rA:iA,t=n(r,i),Ka){s=0;do{if(Ka=!1,vl=0,25<=s)throw Error(W(301));s+=1,Ft=Pt=null,e.updateQueue=null,zu.current=sA,t=n(r,i)}while(Ka)}if(zu.current=_c,e=Pt!==null&&Pt.next!==null,Hs=0,Ft=Pt=at=null,vc=!1,e)throw Error(W(300));return t}function Jm(){var t=vl!==0;return vl=0,t}function Or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?at.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function gr(){if(Pt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?at.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(W(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?at.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function _l(t,e){return typeof e=="function"?e(t):e}function mh(t){var e=gr(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=Pt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((Hs&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,at.lanes|=f,Ws|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,br(r,e.memoizedState)||(On=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,at.lanes|=s,Ws|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ph(t){var e=gr(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);br(s,e.memoizedState)||(On=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fw(){}function zw(t,e){var n=at,r=gr(),i=e(),s=!br(r.memoizedState,i);if(s&&(r.memoizedState=i,On=!0),r=r.queue,Zm(jw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,El(9,Bw.bind(null,n,r,i,e),void 0,null),Ut===null)throw Error(W(349));Hs&30||Uw(n,e,i)}return i}function Uw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bw(t,e,n,r){e.value=n,e.getSnapshot=r,$w(e)&&Hw(t)}function jw(t,e,n){return n(function(){$w(e)&&Hw(t)})}function $w(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!br(t,n)}catch{return!0}}function Hw(t){var e=fi(t,1);e!==null&&Ar(e,t,1,-1)}function Dy(t){var e=Or();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t},e.queue=t,t=t.dispatch=nA.bind(null,at,t),[e.memoizedState,t]}function El(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ww(){return gr().memoizedState}function Uu(t,e,n,r){var i=Or();at.flags|=t,i.memoizedState=El(1|e,n,void 0,r===void 0?null:r)}function Jc(t,e,n,r){var i=gr();r=r===void 0?null:r;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,r!==null&&Xm(r,o.deps)){i.memoizedState=El(e,n,s,r);return}}at.flags|=t,i.memoizedState=El(1|e,n,s,r)}function xy(t,e){return Uu(8390656,8,t,e)}function Zm(t,e){return Jc(2048,8,t,e)}function qw(t,e){return Jc(4,2,t,e)}function Kw(t,e){return Jc(4,4,t,e)}function Gw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qw(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,Gw.bind(null,e,t),n)}function ep(){}function Xw(t,e){var n=gr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yw(t,e){var n=gr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jw(t,e,n){return Hs&21?(br(n,e)||(n=rw(),at.lanes|=n,Ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,On=!0),t.memoizedState=n)}function eA(t,e){var n=Be;Be=n!==0&&4>n?n:4,t(!0);var r=fh.transition;fh.transition={};try{t(!1),e()}finally{Be=n,fh.transition=r}}function Zw(){return gr().memoizedState}function tA(t,e,n){var r=Qi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Mw(t,e,n,r),n!==null){var i=vn();Ar(n,t,r,i),n0(n,e,r)}}function nA(t,e,n){var r=Qi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,br(l,o)){var u=e.interleaved;u===null?(i.next=i,Wm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Mw(t,e,i,r),n!==null&&(i=vn(),Ar(n,t,r,i),n0(n,e,r))}}function e0(t){var e=t.alternate;return t===at||e!==null&&e===at}function t0(t,e){Ka=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}var _c={readContext:pr,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useInsertionEffect:rn,useLayoutEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useMutableSource:rn,useSyncExternalStore:rn,useId:rn,unstable_isNewReconciler:!1},rA={readContext:pr,useCallback:function(t,e){return Or().memoizedState=[t,e===void 0?null:e],t},useContext:pr,useEffect:xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,Gw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=Or();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Or();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tA.bind(null,at,t),[r.memoizedState,t]},useRef:function(t){var e=Or();return t={current:t},e.memoizedState=t},useState:Dy,useDebugValue:ep,useDeferredValue:function(t){return Or().memoizedState=t},useTransition:function(){var t=Dy(!1),e=t[0];return t=eA.bind(null,t[1]),Or().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=at,i=Or();if(it){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),Ut===null)throw Error(W(349));Hs&30||Uw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xy(jw.bind(null,r,s,t),[t]),r.flags|=2048,El(9,Bw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Or(),e=Ut.identifierPrefix;if(it){var n=oi,r=si;n=(r&~(1<<32-kr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Zk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iA={readContext:pr,useCallback:Xw,useContext:pr,useEffect:Zm,useImperativeHandle:Qw,useInsertionEffect:qw,useLayoutEffect:Kw,useMemo:Yw,useReducer:mh,useRef:Ww,useState:function(){return mh(_l)},useDebugValue:ep,useDeferredValue:function(t){var e=gr();return Jw(e,Pt.memoizedState,t)},useTransition:function(){var t=mh(_l)[0],e=gr().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:zw,useId:Zw,unstable_isNewReconciler:!1},sA={readContext:pr,useCallback:Xw,useContext:pr,useEffect:Zm,useImperativeHandle:Qw,useInsertionEffect:qw,useLayoutEffect:Kw,useMemo:Yw,useReducer:ph,useRef:Ww,useState:function(){return ph(_l)},useDebugValue:ep,useDeferredValue:function(t){var e=gr();return Pt===null?e.memoizedState=t:Jw(e,Pt.memoizedState,t)},useTransition:function(){var t=ph(_l)[0],e=gr().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:zw,useId:Zw,unstable_isNewReconciler:!1};function wr(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?ro(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vn(),i=Qi(t),s=ui(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,i),e!==null&&(Ar(e,t,i,r),Fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vn(),i=Qi(t),s=ui(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,i),e!==null&&(Ar(e,t,i,r),Fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),r=Qi(t),i=ui(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ki(t,i,r),e!==null&&(Ar(e,t,r,n),Fu(e,t,r))}};function Oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}function r0(t,e,n){var r=!1,i=rs,s=e.contextType;return typeof s=="object"&&s!==null?s=pr(s):(i=Vn(e)?js:dn.current,r=e.contextTypes,s=(r=r!=null)?qo(t,i):rs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function My(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pr(s):(s=Vn(e)?js:dn.current,i.context=qo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),gc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e){try{var n="",r=e;do n+=xS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oA=typeof WeakMap=="function"?WeakMap:Map;function i0(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wc||(wc=!0,Vf=r),bf(t,e)},n}function s0(t,e,n){n=ui(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EA.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var aA=_i.ReactCurrentOwner,On=!1;function yn(t,e,n,r){e.child=t===null?Ow(e,null,n,r):Go(e,t.child,n,r)}function zy(t,e,n,r,i){n=n.render;var s=e.ref;return Fo(e,i),r=Ym(t,e,n,r,s,i),n=Jm(),t!==null&&!On?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mi(t,e,i)):(it&&n&&zm(e),e.flags|=1,yn(t,e,r,i),e.child)}function Uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,r,i)):(t=Hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(o,r)&&t.ref===e.ref)return mi(t,e,i)}return e.flags|=1,t=Xi(s,r),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hl(s,r)&&t.ref===e.ref)if(On=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(On=!0);else return e.lanes=t.lanes,mi(t,e,i)}return Cf(t,e,n,r,i)}function a0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Do,Qn),Qn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye(Do,Qn),Qn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ye(Do,Qn),Qn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ye(Do,Qn),Qn|=r;return yn(t,e,i,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,r,i){var s=Vn(n)?js:dn.current;return s=qo(e,s),Fo(e,i),n=Ym(t,e,n,r,s,i),r=Jm(),t!==null&&!On?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mi(t,e,i)):(it&&r&&zm(e),e.flags|=1,yn(t,e,n,i),e.child)}function By(t,e,n,r,i){if(Vn(n)){var s=!0;dc(e)}else s=!1;if(Fo(e,i),e.stateNode===null)Bu(t,e),r0(e,n,r),Af(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=pr(d):(d=Vn(n)?js:dn.current,d=qo(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&My(e,o,r,d),Di=!1;var g=e.memoizedState;o.state=g,gc(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Ln.current||Di?(typeof f=="function"&&(kf(e,n,f,r),u=e.memoizedState),(l=Di||Oy(e,n,l,r,g,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lw(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:wr(e.type,l),o.props=d,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=pr(u):(u=Vn(n)?js:dn.current,u=qo(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&My(e,o,r,u),Di=!1,g=e.memoizedState,o.state=g,gc(e,r,o,i);var N=e.memoizedState;l!==p||g!==N||Ln.current||Di?(typeof T=="function"&&(kf(e,n,T,r),N=e.memoizedState),(d=Di||Oy(e,n,d,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Nf(t,e,n,r,s,i)}function Nf(t,e,n,r,i,s){l0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ay(e,n,!1),mi(t,e,s);r=e.stateNode,aA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Go(e,t.child,null,s),e.child=Go(e,null,l,s)):yn(t,e,l,s),e.memoizedState=r.state,i&&Ay(e,n,!0),e.child}function u0(t){var e=t.stateNode;e.pendingContext?ky(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ky(t,e.context,!1),Km(t,e.containerInfo)}function jy(t,e,n,r,i){return Ko(),Bm(i),e.flags|=256,yn(t,e,n,r),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,e,n){var r=e.pendingProps,i=ot.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ye(ot,i&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nd(o,r,0,null),t=Fs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pf(n),e.memoizedState=Rf,t):tp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Xi(l,s):(s=Fs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,r}return s=t.child,t=s.sibling,r=Xi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tp(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Eu(t,e,n,r){return r!==null&&Bm(r),Go(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gh(Error(W(422))),Eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nd({mode:"visible",children:r.children},i,0,null),s=Fs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Go(e,t.child,null,o),e.child.memoizedState=Pf(o),e.memoizedState=Rf,s);if(!(e.mode&1))return Eu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(W(419)),r=gh(s,r,void 0),Eu(t,e,o,r)}if(l=(o&t.childLanes)!==0,On||l){if(r=Ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fi(t,i),Ar(r,t,i,-1))}return ap(),r=gh(Error(W(421))),Eu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yn=qi(i.nextSibling),er=e,it=!0,Ir=null,t!==null&&(ar[lr++]=si,ar[lr++]=oi,ar[lr++]=$s,si=t.id,oi=t.overflow,$s=e),e=tp(e,r.children),e.flags|=4096,e)}function $y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sf(t.return,e,n)}function yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function d0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yn(t,e,r.children,n),r=ot.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$y(t,n,e);else if(t.tag===19)$y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ye(ot,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uA(t,e,n){switch(e.tag){case 3:u0(e),Ko();break;case 5:Vw(e);break;case 1:Vn(e.type)&&dc(e);break;case 4:Km(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ye(mc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ye(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?c0(t,e,n):(Ye(ot,ot.current&1),t=mi(t,e,n),t!==null?t.sibling:null);Ye(ot,ot.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return d0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ye(ot,ot.current),r)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n)}return mi(t,e,n)}var h0,Df,f0,m0;h0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};f0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Os(zr.current);var s=null;switch(n){case"input":i=Zh(t,i),r=Zh(t,r),s=[];break;case"select":i=lt({},i,{value:void 0}),r=lt({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}sf(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sl.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ze("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};m0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ca(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cA(t,e,n){var r=e.pendingProps;switch(Um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return Vn(e.type)&&cc(),sn(e),null;case 3:return r=e.stateNode,Qo(),tt(Ln),tt(dn),Qm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ir!==null&&(Uf(Ir),Ir=null))),Df(t,e),sn(e),null;case 5:Gm(e);var i=Os(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)f0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return sn(e),null}if(t=Os(zr.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Lr]=e,r[pl]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(i=0;i<Ma.length;i++)Ze(Ma[i],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":Jg(r,s),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",r);break;case"textarea":ey(r,s),Ze("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,l,t),i=["children",""+l]):sl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ze("scroll",r)}switch(n){case"input":uu(r),Zg(r,s,!0);break;case"textarea":uu(r),ty(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Lr]=e,t[pl]=r,h0(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":Ze("cancel",t),Ze("close",t),i=r;break;case"iframe":case"object":case"embed":Ze("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ma.length;i++)Ze(Ma[i],t);i=r;break;case"source":Ze("error",t),i=r;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),i=r;break;case"details":Ze("toggle",t),i=r;break;case"input":Jg(t,r),i=Zh(t,r),Ze("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=lt({},r,{value:void 0}),Ze("invalid",t);break;case"textarea":ey(t,r),i=nf(t,r),Ze("invalid",t);break;default:i=r}sf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?WE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$E(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ol(t,u):typeof u=="number"&&ol(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ze("scroll",t):u!=null&&km(t,s,u,o))}switch(n){case"input":uu(t),Zg(t,r,!1);break;case"textarea":uu(t),ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ns(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=Os(yl.current),Os(zr.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Lr]=e,(s=r.nodeValue!==n)&&(t=er,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lr]=e,e.stateNode=r}return sn(e),null;case 13:if(tt(ot),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&Yn!==null&&e.mode&1&&!(e.flags&128))Dw(),Ko(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(W(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Lr]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),s=!1}else Ir!==null&&(Uf(Ir),Ir=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Dt===0&&(Dt=3):ap())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return Qo(),Df(t,e),t===null&&fl(e.stateNode.containerInfo),sn(e),null;case 10:return Hm(e.type._context),sn(e),null;case 17:return Vn(e.type)&&cc(),sn(e),null;case 19:if(tt(ot),s=e.memoizedState,s===null)return sn(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ca(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yc(t),o!==null){for(e.flags|=128,Ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ye(ot,ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Yo&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!it)return sn(e),null}else 2*Et()-s.renderingStartTime>Yo&&n!==1073741824&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=ot.current,Ye(ot,r?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function dA(t,e){switch(Um(e),e.tag){case 1:return Vn(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),tt(Ln),tt(dn),Qm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gm(e),null;case 13:if(tt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(ot),null;case 4:return Qo(),null;case 10:return Hm(e.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var wu=!1,un=!1,hA=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){mt(t,e,r)}else n.current=null}function xf(t,e,n){try{n()}catch(r){mt(t,e,r)}}var Hy=!1;function fA(t,e){if(gf=oc,t=_w(),Fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,p=t,g=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)g=p,p=T;for(;;){if(p===t)break t;if(g===n&&++d===i&&(l=o),g===s&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},oc=!1,ee=e;ee!==null;)if(e=ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ee=t;else for(;ee!==null;){e=ee;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,F=N.memoizedState,k=e.stateNode,_=k.getSnapshotBeforeUpdate(e.elementType===e.type?D:wr(e.type,D),F);k.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(L){mt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,ee=t;break}ee=e.return}return N=Hy,Hy=!1,N}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xf(e,n,s)}i=i.next}while(i!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p0(t){var e=t.alternate;e!==null&&(t.alternate=null,p0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Lr],delete e[pl],delete e[Ef],delete e[Qk],delete e[Xk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function Wy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var Wt=null,Tr=!1;function ki(t,e,n){for(n=n.child;n!==null;)y0(t,e,n),n=n.sibling}function y0(t,e,n){if(Fr&&typeof Fr.onCommitFiberUnmount=="function")try{Fr.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:un||Po(n,e);case 6:var r=Wt,i=Tr;Wt=null,ki(t,e,n),Wt=r,Tr=i,Wt!==null&&(Tr?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Tr?(t=Wt,n=n.stateNode,t.nodeType===8?ch(t.parentNode,n):t.nodeType===1&&ch(t,n),cl(t)):ch(Wt,n.stateNode));break;case 4:r=Wt,i=Tr,Wt=n.stateNode.containerInfo,Tr=!0,ki(t,e,n),Wt=r,Tr=i;break;case 0:case 11:case 14:case 15:if(!un&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xf(n,e,o),i=i.next}while(i!==r)}ki(t,e,n);break;case 1:if(!un&&(Po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){mt(n,e,l)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(un=(r=un)||n.memoizedState!==null,ki(t,e,n),un=r):ki(t,e,n);break;default:ki(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hA),e.forEach(function(r){var i=TA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Er(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Wt=l.stateNode,Tr=!1;break e;case 3:Wt=l.stateNode.containerInfo,Tr=!0;break e;case 4:Wt=l.stateNode.containerInfo,Tr=!0;break e}l=l.return}if(Wt===null)throw Error(W(160));y0(s,o,i),Wt=null,Tr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){mt(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)v0(e,t),e=e.sibling}function v0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Er(e,t),xr(t),r&4){try{Ga(3,t,t.return),ed(3,t)}catch(D){mt(t,t.return,D)}try{Ga(5,t,t.return)}catch(D){mt(t,t.return,D)}}break;case 1:Er(e,t),xr(t),r&512&&n!==null&&Po(n,n.return);break;case 5:if(Er(e,t),xr(t),r&512&&n!==null&&Po(n,n.return),t.flags&32){var i=t.stateNode;try{ol(i,"")}catch(D){mt(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&UE(i,s),of(l,o);var d=of(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?WE(i,p):f==="dangerouslySetInnerHTML"?$E(i,p):f==="children"?ol(i,p):km(i,f,p,d)}switch(l){case"input":ef(i,s);break;case"textarea":BE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Oo(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?Oo(i,!!s.multiple,s.defaultValue,!0):Oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[pl]=s}catch(D){mt(t,t.return,D)}}break;case 6:if(Er(e,t),xr(t),r&4){if(t.stateNode===null)throw Error(W(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){mt(t,t.return,D)}}break;case 3:if(Er(e,t),xr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(D){mt(t,t.return,D)}break;case 4:Er(e,t),xr(t);break;case 13:Er(e,t),xr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ip=Et())),r&4&&qy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(un=(d=un)||f,Er(e,t),un=d):Er(e,t),xr(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(ee=t,f=t.child;f!==null;){for(p=ee=f;ee!==null;){switch(g=ee,T=g.child,g.tag){case 0:case 11:case 14:case 15:Ga(4,g,g.return);break;case 1:Po(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){mt(r,n,D)}}break;case 5:Po(g,g.return);break;case 22:if(g.memoizedState!==null){Gy(p);continue}}T!==null?(T.return=g,ee=T):Gy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=HE("display",o))}catch(D){mt(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(D){mt(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Er(e,t),xr(t),r&4&&qy(t);break;case 21:break;default:Er(e,t),xr(t)}}function xr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ol(i,""),r.flags&=-33);var s=Wy(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wy(t);Mf(t,l,o);break;default:throw Error(W(161))}}catch(u){mt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mA(t,e,n){ee=t,_0(t)}function _0(t,e,n){for(var r=(t.mode&1)!==0;ee!==null;){var i=ee,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||un;l=wu;var d=un;if(wu=o,(un=u)&&!d)for(ee=i;ee!==null;)o=ee,u=o.child,o.tag===22&&o.memoizedState!==null?Qy(i):u!==null?(u.return=o,ee=u):Qy(i);for(;s!==null;)ee=s,_0(s),s=s.sibling;ee=i,wu=l,un=d}Ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ee=s):Ky(t)}}function Ky(t){for(;ee!==null;){var e=ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!un)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Py(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Py(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&cl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}un||e.flags&512&&Of(e)}catch(g){mt(e,e.return,g)}}if(e===t){ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,ee=n;break}ee=e.return}}function Gy(t){for(;ee!==null;){var e=ee;if(e===t){ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ee=n;break}ee=e.return}}function Qy(t){for(;ee!==null;){var e=ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(u){mt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){mt(e,i,u)}}var s=e.return;try{Of(e)}catch(u){mt(e,s,u)}break;case 5:var o=e.return;try{Of(e)}catch(u){mt(e,o,u)}}}catch(u){mt(e,e.return,u)}if(e===t){ee=null;break}var l=e.sibling;if(l!==null){l.return=e.return,ee=l;break}ee=e.return}}var pA=Math.ceil,Ec=_i.ReactCurrentDispatcher,np=_i.ReactCurrentOwner,dr=_i.ReactCurrentBatchConfig,Oe=0,Ut=null,kt=null,Qt=0,Qn=0,Do=hs(0),Dt=0,wl=null,Ws=0,td=0,rp=0,Qa=null,Dn=null,ip=0,Yo=1/0,ni=null,wc=!1,Vf=null,Gi=null,Tu=!1,Bi=null,Tc=0,Xa=0,Ff=null,ju=-1,$u=0;function vn(){return Oe&6?Et():ju!==-1?ju:ju=Et()}function Qi(t){return t.mode&1?Oe&2&&Qt!==0?Qt&-Qt:Jk.transition!==null?($u===0&&($u=rw()),$u):(t=Be,t!==0||(t=window.event,t=t===void 0?16:cw(t.type)),t):1}function Ar(t,e,n,r){if(50<Xa)throw Xa=0,Ff=null,Error(W(185));Vl(t,n,r),(!(Oe&2)||t!==Ut)&&(t===Ut&&(!(Oe&2)&&(td|=n),Dt===4&&Oi(t,Qt)),Fn(t,r),n===1&&Oe===0&&!(e.mode&1)&&(Yo=Et()+500,Yc&&fs()))}function Fn(t,e){var n=t.callbackNode;JS(t,e);var r=sc(t,t===Ut?Qt:0);if(r===0)n!==null&&iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iy(n),e===1)t.tag===0?Yk(Xy.bind(null,t)):Nw(Xy.bind(null,t)),Kk(function(){!(Oe&6)&&fs()}),n=null;else{switch(iw(r)){case 1:n=Rm;break;case 4:n=tw;break;case 16:n=ic;break;case 536870912:n=nw;break;default:n=ic}n=b0(n,E0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E0(t,e){if(ju=-1,$u=0,Oe&6)throw Error(W(327));var n=t.callbackNode;if(zo()&&t.callbackNode!==n)return null;var r=sc(t,t===Ut?Qt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ic(t,r);else{e=r;var i=Oe;Oe|=2;var s=T0();(Ut!==t||Qt!==e)&&(ni=null,Yo=Et()+500,Vs(t,e));do try{vA();break}catch(l){w0(t,l)}while(!0);$m(),Ec.current=s,Oe=i,kt!==null?e=0:(Ut=null,Qt=0,e=Dt)}if(e!==0){if(e===2&&(i=df(t),i!==0&&(r=i,e=zf(t,i))),e===1)throw n=wl,Vs(t,0),Oi(t,r),Fn(t,Et()),n;if(e===6)Oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!gA(i)&&(e=Ic(t,r),e===2&&(s=df(t),s!==0&&(r=s,e=zf(t,s))),e===1))throw n=wl,Vs(t,0),Oi(t,r),Fn(t,Et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:Rs(t,Dn,ni);break;case 3:if(Oi(t,r),(r&130023424)===r&&(e=ip+500-Et(),10<e)){if(sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){vn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_f(Rs.bind(null,t,Dn,ni),e);break}Rs(t,Dn,ni);break;case 4:if(Oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pA(r/1960))-r,10<r){t.timeoutHandle=_f(Rs.bind(null,t,Dn,ni),r);break}Rs(t,Dn,ni);break;case 5:Rs(t,Dn,ni);break;default:throw Error(W(329))}}}return Fn(t,Et()),t.callbackNode===n?E0.bind(null,t):null}function zf(t,e){var n=Qa;return t.current.memoizedState.isDehydrated&&(Vs(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=Dn,Dn=n,e!==null&&Uf(e)),t}function Uf(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function gA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!br(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~rp,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kr(e),r=1<<n;t[n]=-1,e&=~r}}function Xy(t){if(Oe&6)throw Error(W(327));zo();var e=sc(t,0);if(!(e&1))return Fn(t,Et()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var r=df(t);r!==0&&(e=r,n=zf(t,r))}if(n===1)throw n=wl,Vs(t,0),Oi(t,e),Fn(t,Et()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,Dn,ni),Fn(t,Et()),null}function sp(t,e){var n=Oe;Oe|=1;try{return t(e)}finally{Oe=n,Oe===0&&(Yo=Et()+500,Yc&&fs())}}function qs(t){Bi!==null&&Bi.tag===0&&!(Oe&6)&&zo();var e=Oe;Oe|=1;var n=dr.transition,r=Be;try{if(dr.transition=null,Be=1,t)return t()}finally{Be=r,dr.transition=n,Oe=e,!(Oe&6)&&fs()}}function op(){Qn=Do.current,tt(Do)}function Vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qk(n)),kt!==null)for(n=kt.return;n!==null;){var r=n;switch(Um(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cc();break;case 3:Qo(),tt(Ln),tt(dn),Qm();break;case 5:Gm(r);break;case 4:Qo();break;case 13:tt(ot);break;case 19:tt(ot);break;case 10:Hm(r.type._context);break;case 22:case 23:op()}n=n.return}if(Ut=t,kt=t=Xi(t.current,null),Qt=Qn=e,Dt=0,wl=null,rp=td=Ws=0,Dn=Qa=null,xs!==null){for(e=0;e<xs.length;e++)if(n=xs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xs=null}return t}function w0(t,e){do{var n=kt;try{if($m(),zu.current=_c,vc){for(var r=at.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(Hs=0,Ft=Pt=at=null,Ka=!1,vl=0,np.current=null,n===null||n.return===null){Dt=1,wl=e,kt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Vy(o);if(T!==null){T.flags&=-257,Fy(T,o,l,s,e),T.mode&1&&Ly(s,d,e),e=T,u=d;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){Ly(s,d,e),ap();break e}u=Error(W(426))}}else if(it&&l.mode&1){var F=Vy(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Fy(F,o,l,s,e),Bm(Xo(u,l));break e}}s=u=Xo(u,l),Dt!==4&&(Dt=2),Qa===null?Qa=[s]:Qa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=i0(s,u,e);Ry(s,k);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Gi===null||!Gi.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=s0(s,l,e);Ry(s,L);break e}}s=s.return}while(s!==null)}S0(n)}catch(V){e=V,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function T0(){var t=Ec.current;return Ec.current=_c,t===null?_c:t}function ap(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ut===null||!(Ws&268435455)&&!(td&268435455)||Oi(Ut,Qt)}function Ic(t,e){var n=Oe;Oe|=2;var r=T0();(Ut!==t||Qt!==e)&&(ni=null,Vs(t,e));do try{yA();break}catch(i){w0(t,i)}while(!0);if($m(),Oe=n,Ec.current=r,kt!==null)throw Error(W(261));return Ut=null,Qt=0,Dt}function yA(){for(;kt!==null;)I0(kt)}function vA(){for(;kt!==null&&!$S();)I0(kt)}function I0(t){var e=A0(t.alternate,t,Qn);t.memoizedProps=t.pendingProps,e===null?S0(t):kt=e,np.current=null}function S0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dA(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,kt=null;return}}else if(n=cA(n,e,Qn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Rs(t,e,n){var r=Be,i=dr.transition;try{dr.transition=null,Be=1,_A(t,e,n,r)}finally{dr.transition=i,Be=r}return null}function _A(t,e,n,r){do zo();while(Bi!==null);if(Oe&6)throw Error(W(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZS(t,s),t===Ut&&(kt=Ut=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,b0(ic,function(){return zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dr.transition,dr.transition=null;var o=Be;Be=1;var l=Oe;Oe|=4,np.current=null,fA(t,n),v0(n,t),zk(yf),oc=!!gf,yf=gf=null,t.current=n,mA(n),HS(),Oe=l,Be=o,dr.transition=s}else t.current=n;if(Tu&&(Tu=!1,Bi=t,Tc=i),s=t.pendingLanes,s===0&&(Gi=null),KS(n.stateNode),Fn(t,Et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wc)throw wc=!1,t=Vf,Vf=null,t;return Tc&1&&t.tag!==0&&zo(),s=t.pendingLanes,s&1?t===Ff?Xa++:(Xa=0,Ff=t):Xa=0,fs(),null}function zo(){if(Bi!==null){var t=iw(Tc),e=dr.transition,n=Be;try{if(dr.transition=null,Be=16>t?16:t,Bi===null)var r=!1;else{if(t=Bi,Bi=null,Tc=0,Oe&6)throw Error(W(331));var i=Oe;for(Oe|=4,ee=t.current;ee!==null;){var s=ee,o=s.child;if(ee.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(ee=d;ee!==null;){var f=ee;switch(f.tag){case 0:case 11:case 15:Ga(8,f,s)}var p=f.child;if(p!==null)p.return=f,ee=p;else for(;ee!==null;){f=ee;var g=f.sibling,T=f.return;if(p0(f),f===d){ee=null;break}if(g!==null){g.return=T,ee=g;break}ee=T}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var F=D.sibling;D.sibling=null,D=F}while(D!==null)}}ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ee=o;else e:for(;ee!==null;){if(s=ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ga(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,ee=k;break e}ee=s.return}}var _=t.current;for(ee=_;ee!==null;){o=ee;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,ee=A;else e:for(o=_;ee!==null;){if(l=ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ed(9,l)}}catch(V){mt(l,l.return,V)}if(l===o){ee=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,ee=L;break e}ee=l.return}}if(Oe=i,fs(),Fr&&typeof Fr.onPostCommitFiberRoot=="function")try{Fr.onPostCommitFiberRoot(qc,t)}catch{}r=!0}return r}finally{Be=n,dr.transition=e}}return!1}function Yy(t,e,n){e=Xo(n,e),e=i0(t,e,1),t=Ki(t,e,1),e=vn(),t!==null&&(Vl(t,1,e),Fn(t,e))}function mt(t,e,n){if(t.tag===3)Yy(t,t,n);else for(;e!==null;){if(e.tag===3){Yy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gi===null||!Gi.has(r))){t=Xo(n,t),t=s0(e,t,1),e=Ki(e,t,1),t=vn(),e!==null&&(Vl(e,1,t),Fn(e,t));break}}e=e.return}}function EA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Qt&n)===n&&(Dt===4||Dt===3&&(Qt&130023424)===Qt&&500>Et()-ip?Vs(t,0):rp|=n),Fn(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=vn();t=fi(t,e),t!==null&&(Vl(t,e,n),Fn(t,n))}function wA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function TA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),k0(t,n)}var A0;A0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ln.current)On=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return On=!1,uA(t,e,n);On=!!(t.flags&131072)}else On=!1,it&&e.flags&1048576&&Rw(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bu(t,e),t=e.pendingProps;var i=qo(e,dn.current);Fo(e,n),i=Ym(null,e,r,t,i,n);var s=Jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vn(r)?(s=!0,dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qm(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,Af(e,r,t,n),e=Nf(null,e,r,!0,s,n)):(e.tag=0,it&&s&&zm(e),yn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SA(r),t=wr(r,t),i){case 0:e=Cf(null,e,r,t,n);break e;case 1:e=By(null,e,r,t,n);break e;case 11:e=zy(null,e,r,t,n);break e;case 14:e=Uy(null,e,r,wr(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wr(r,i),Cf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wr(r,i),By(t,e,r,i,n);case 3:e:{if(u0(e),t===null)throw Error(W(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lw(t,e),gc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xo(Error(W(423)),e),e=jy(t,e,r,n,i);break e}else if(r!==i){i=Xo(Error(W(424)),e),e=jy(t,e,r,n,i);break e}else for(Yn=qi(e.stateNode.containerInfo.firstChild),er=e,it=!0,Ir=null,n=Ow(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),r===i){e=mi(t,e,n);break e}yn(t,e,r,n)}e=e.child}return e;case 5:return Vw(e),t===null&&If(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(e.flags|=32),l0(t,e),yn(t,e,o,n),e.child;case 6:return t===null&&If(e),null;case 13:return c0(t,e,n);case 4:return Km(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Go(e,null,r,n):yn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wr(r,i),zy(t,e,r,i,n);case 7:return yn(t,e,e.pendingProps,n),e.child;case 8:return yn(t,e,e.pendingProps.children,n),e.child;case 12:return yn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ye(mc,r._currentValue),r._currentValue=o,s!==null)if(br(s.value,o)){if(s.children===i.children&&!Ln.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ui(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(W(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fo(e,n),i=pr(i),r=r(i),e.flags|=1,yn(t,e,r,n),e.child;case 14:return r=e.type,i=wr(r,e.pendingProps),i=wr(r.type,i),Uy(t,e,r,i,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wr(r,i),Bu(t,e),e.tag=1,Vn(r)?(t=!0,dc(e)):t=!1,Fo(e,n),r0(e,r,i),Af(e,r,i,n),Nf(null,e,r,!0,t,n);case 19:return d0(t,e,n);case 22:return a0(t,e,n)}throw Error(W(156,e.tag))};function b0(t,e){return ew(t,e)}function IA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(t,e,n,r){return new IA(t,e,n,r)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SA(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bm)return 11;if(t===Cm)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=cr(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case To:return Fs(n.children,i,s,e);case Am:o=8,i|=8;break;case Qh:return t=cr(12,n,e,i|2),t.elementType=Qh,t.lanes=s,t;case Xh:return t=cr(13,n,e,i),t.elementType=Xh,t.lanes=s,t;case Yh:return t=cr(19,n,e,i),t.elementType=Yh,t.lanes=s,t;case VE:return nd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ME:o=10;break e;case LE:o=9;break e;case bm:o=11;break e;case Cm:o=14;break e;case Pi:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=cr(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fs(t,e,n,r){return t=cr(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=cr(22,t,r,e),t.elementType=VE,t.lanes=n,t.stateNode={isHidden:!1},t}function vh(t,e,n){return t=cr(6,t,null,e),t.lanes=n,t}function _h(t,e,n){return e=cr(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,i,s,o,l,u){return t=new kA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=cr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qm(s),t}function AA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function C0(t){if(!t)return rs;t=t._reactInternals;e:{if(ro(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(Vn(n))return Cw(t,n,e)}return e}function N0(t,e,n,r,i,s,o,l,u){return t=up(n,r,!0,t,i,s,o,l,u),t.context=C0(null),n=t.current,r=vn(),i=Qi(n),s=ui(r,i),s.callback=e??null,Ki(n,s,i),t.current.lanes=i,Vl(t,i,r),Fn(t,r),t}function rd(t,e,n,r){var i=e.current,s=vn(),o=Qi(i);return n=C0(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ki(i,e,o),t!==null&&(Ar(t,i,o,s),Fu(t,i,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cp(t,e){Jy(t,e),(t=t.alternate)&&Jy(t,e)}function bA(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function dp(t){this._internalRoot=t}id.prototype.render=dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));rd(t,e,null,null)};id.prototype.unmount=dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qs(function(){rd(null,t,null,null)}),e[hi]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var e=aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xi.length&&e!==0&&e<xi[n].priority;n++);xi.splice(n,0,t),n===0&&uw(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zy(){}function CA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Sc(o);s.call(d)}}var o=N0(e,r,t,0,null,!1,!1,"",Zy);return t._reactRootContainer=o,t[hi]=o.current,fl(t.nodeType===8?t.parentNode:t),qs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Sc(u);l.call(d)}}var u=up(t,0,!1,null,null,!1,!1,"",Zy);return t._reactRootContainer=u,t[hi]=u.current,fl(t.nodeType===8?t.parentNode:t),qs(function(){rd(e,u,n,r)}),u}function od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Sc(o);l.call(u)}}rd(e,o,t,i)}else o=CA(n,e,t,i,r);return Sc(o)}sw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(Pm(e,n|1),Fn(e,Et()),!(Oe&6)&&(Yo=Et()+500,fs()))}break;case 13:qs(function(){var r=fi(t,1);if(r!==null){var i=vn();Ar(r,t,1,i)}}),cp(t,1)}};Dm=function(t){if(t.tag===13){var e=fi(t,134217728);if(e!==null){var n=vn();Ar(e,t,134217728,n)}cp(t,134217728)}};ow=function(t){if(t.tag===13){var e=Qi(t),n=fi(t,e);if(n!==null){var r=vn();Ar(n,t,e,r)}cp(t,e)}};aw=function(){return Be};lw=function(t,e){var n=Be;try{return Be=t,e()}finally{Be=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(W(90));zE(r),ef(r,i)}}}break;case"textarea":BE(t,n);break;case"select":e=n.value,e!=null&&Oo(t,!!n.multiple,e,!1)}};GE=sp;QE=qs;var NA={usingClientEntryPoint:!1,Events:[zl,Ao,Xc,qE,KE,sp]},Na={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RA={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=JE(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||bA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{qc=Iu.inject(RA),Fr=Iu}catch{}}nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NA;nr.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(W(200));return AA(t,e,null,n)};nr.createRoot=function(t,e){if(!hp(t))throw Error(W(299));var n=!1,r="",i=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,i),t[hi]=e.current,fl(t.nodeType===8?t.parentNode:t),new dp(e)};nr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=JE(e),t=t===null?null:t.stateNode,t};nr.flushSync=function(t){return qs(t)};nr.hydrate=function(t,e,n){if(!sd(e))throw Error(W(200));return od(null,t,e,!0,n)};nr.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=N0(e,null,t,1,n??null,i,!1,s,o),t[hi]=e.current,fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new id(e)};nr.render=function(t,e,n){if(!sd(e))throw Error(W(200));return od(null,t,e,!1,n)};nr.unmountComponentAtNode=function(t){if(!sd(t))throw Error(W(40));return t._reactRootContainer?(qs(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};nr.unstable_batchedUpdates=sp;nr.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return od(t,e,n,!1,r)};nr.version="18.3.1-next-f1338f8080-20240426";function P0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P0)}catch(t){console.error(t)}}P0(),PE.exports=nr;var PA=PE.exports,ev=PA;Kh.createRoot=ev.createRoot,Kh.hydrateRoot=ev.hydrateRoot;const DA=()=>{};var tv={};/**
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
 */const D0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},x0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,T=d&63;u||(T=64,o||(g=64)),r.push(n[f],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||p==null)throw new OA;const g=s<<2|l>>4;if(r.push(g),d!==64){const T=l<<4&240|d>>2;if(r.push(T),p!==64){const N=d<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MA=function(t){const e=D0(t);return x0.encodeByteArray(e,!0)},kc=function(t){return MA(t).replace(/\./g,"")},O0=function(t){try{return x0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VA=()=>LA().__FIREBASE_DEFAULTS__,FA=()=>{if(typeof process>"u"||typeof tv>"u")return;const t=tv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&O0(t[1]);return e&&JSON.parse(e)},ad=()=>{try{return DA()||VA()||FA()||zA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},M0=t=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fp=t=>{const e=M0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},L0=()=>{var t;return(t=ad())===null||t===void 0?void 0:t.config},V0=t=>{var e;return(e=ad())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class UA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ld(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function F0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kc(JSON.stringify(n)),kc(JSON.stringify(o)),""].join(".")}const Ya={};function BA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ya))Ya[e]?t.emulator.push(e):t.prod.push(e);return t}function jA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let nv=!1;function ud(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||Ya[t]===e||Ya[t]||nv)return;Ya[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=BA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{nv=!0,o()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=jA(r),T=n("text"),N=document.getElementById(T)||document.createElement("span"),D=n("learnmore"),F=document.getElementById(D)||document.createElement("a"),k=n("preprendIcon"),_=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(F,D);const L=d();u(_,k),A.append(_,N,F,L),document.body.appendChild(A)}s?(N.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function HA(){var t;const e=(t=ad())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function z0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KA(){const t=hn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GA(){return!HA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function U0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const QA="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QA,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ir(i,l,r)}}function XA(t,e){return t.replace(YA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YA=/\{\$([^}]+)}/g;function JA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rv(s)&&rv(o)){if(!Ks(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rv(t){return t!==null&&typeof t=="object"}/**
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
 */function Bl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function La(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZA(t,e){const n=new eb(t,e);return n.subscribe.bind(n)}class eb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Eh),i.error===void 0&&(i.error=Eh),i.complete===void 0&&(i.complete=Eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eh(){}/**
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
 */const nb=1e3,rb=2,ib=4*60*60*1e3,sb=.5;function iv(t,e=nb,n=rb){const r=e*Math.pow(n,t),i=Math.round(sb*r*(Math.random()-.5)*2);return Math.min(ib,r+i)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ps="[DEFAULT]";/**
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
 */class ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lb(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ab(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ab(t){return t===Ps?void 0:t}function lb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ub{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const cb={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},db=Ne.INFO,hb={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},fb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=db,this._logHandler=fb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const mb=(t,e)=>e.some(n=>t instanceof n);let sv,ov;function pb(){return sv||(sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gb(){return ov||(ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B0=new WeakMap,Bf=new WeakMap,j0=new WeakMap,wh=new WeakMap,gp=new WeakMap;function yb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&B0.set(n,t)}).catch(()=>{}),gp.set(e,t),e}function vb(t){if(Bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bf.set(t,e)}let jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||j0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _b(t){jf=t(jf)}function Eb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Th(this),e,...n);return j0.set(r,e.sort?e.sort():[e]),ci(r)}:gb().includes(t)?function(...e){return t.apply(Th(this),e),ci(B0.get(this))}:function(...e){return ci(t.apply(Th(this),e))}}function wb(t){return typeof t=="function"?Eb(t):(t instanceof IDBTransaction&&vb(t),mb(t,pb())?new Proxy(t,jf):t)}function ci(t){if(t instanceof IDBRequest)return yb(t);if(wh.has(t))return wh.get(t);const e=wb(t);return e!==t&&(wh.set(t,e),gp.set(e,t)),e}const Th=t=>gp.get(t);function dd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ci(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ci(o.result),u.oldVersion,u.newVersion,ci(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function Ih(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ci(n).then(()=>{})}const Tb=["get","getKey","getAll","getAllKeys","count"],Ib=["put","add","delete","clear"],Sh=new Map;function av(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sh.get(e))return Sh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ib.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Tb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Sh.set(e,s),s}_b(t=>({...t,get:(e,n,r)=>av(e,n)||t.get(e,n,r),has:(e,n)=>!!av(e,n)||t.has(e,n)}));/**
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
 */class Sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $f="@firebase/app",lv="0.13.2";/**
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
 */const pi=new cd("@firebase/app"),Ab="@firebase/app-compat",bb="@firebase/analytics-compat",Cb="@firebase/analytics",Nb="@firebase/app-check-compat",Rb="@firebase/app-check",Pb="@firebase/auth",Db="@firebase/auth-compat",xb="@firebase/database",Ob="@firebase/data-connect",Mb="@firebase/database-compat",Lb="@firebase/functions",Vb="@firebase/functions-compat",Fb="@firebase/installations",zb="@firebase/installations-compat",Ub="@firebase/messaging",Bb="@firebase/messaging-compat",jb="@firebase/performance",$b="@firebase/performance-compat",Hb="@firebase/remote-config",Wb="@firebase/remote-config-compat",qb="@firebase/storage",Kb="@firebase/storage-compat",Gb="@firebase/firestore",Qb="@firebase/ai",Xb="@firebase/firestore-compat",Yb="firebase",Jb="11.10.0";/**
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
 */const Hf="[DEFAULT]",Zb={[$f]:"fire-core",[Ab]:"fire-core-compat",[Cb]:"fire-analytics",[bb]:"fire-analytics-compat",[Rb]:"fire-app-check",[Nb]:"fire-app-check-compat",[Pb]:"fire-auth",[Db]:"fire-auth-compat",[xb]:"fire-rtdb",[Ob]:"fire-data-connect",[Mb]:"fire-rtdb-compat",[Lb]:"fire-fn",[Vb]:"fire-fn-compat",[Fb]:"fire-iid",[zb]:"fire-iid-compat",[Ub]:"fire-fcm",[Bb]:"fire-fcm-compat",[jb]:"fire-perf",[$b]:"fire-perf-compat",[Hb]:"fire-rc",[Wb]:"fire-rc-compat",[qb]:"fire-gcs",[Kb]:"fire-gcs-compat",[Gb]:"fire-fst",[Xb]:"fire-fst-compat",[Qb]:"fire-vertex","fire-js":"fire-js",[Yb]:"fire-js-all"};/**
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
 */const Ac=new Map,eC=new Map,Wf=new Map;function uv(t,e){try{t.container.addComponent(e)}catch(n){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Wf.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;Wf.set(e,t);for(const n of Ac.values())uv(n,t);for(const n of eC.values())uv(n,t);return!0}function ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const tC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yi=new ms("app","Firebase",tC);/**
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
 */class nC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yi.create("app-deleted",{appName:this._name})}}/**
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
 */const io=Jb;function $0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hf,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Yi.create("bad-app-name",{appName:String(i)});if(n||(n=L0()),!n)throw Yi.create("no-options");const s=Ac.get(i);if(s){if(Ks(n,s.options)&&Ks(r,s.config))return s;throw Yi.create("duplicate-app",{appName:i})}const o=new ub(i);for(const u of Wf.values())o.addComponent(u);const l=new nC(n,r,o);return Ac.set(i,l),l}function jl(t=Hf){const e=Ac.get(t);if(!e&&t===Hf&&L0())return $0();if(!e)throw Yi.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=Zb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(l.join(" "));return}Un(new En(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rC="firebase-heartbeat-database",iC=1,Tl="firebase-heartbeat-store";let kh=null;function H0(){return kh||(kh=dd(rC,iC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yi.create("idb-open",{originalErrorMessage:t.message})})),kh}async function sC(t){try{const n=(await H0()).transaction(Tl),r=await n.objectStore(Tl).get(W0(t));return await n.done,r}catch(e){if(e instanceof ir)pi.warn(e.message);else{const n=Yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(n.message)}}}async function cv(t,e){try{const r=(await H0()).transaction(Tl,"readwrite");await r.objectStore(Tl).put(e,W0(t)),await r.done}catch(n){if(n instanceof ir)pi.warn(n.message);else{const r=Yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pi.warn(r.message)}}}function W0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oC=1024,aC=30;class lC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>aC){const o=dC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dv(),{heartbeatsToSend:r,unsentEntries:i}=uC(this._heartbeatsCache.heartbeats),s=kc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pi.warn(n),""}}}function dv(){return new Date().toISOString().substring(0,10)}function uC(t,e=oC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hv(t){return kc(JSON.stringify({version:2,heartbeats:t})).length}function dC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hC(t){Un(new En("platform-logger",e=>new Sb(e),"PRIVATE")),Un(new En("heartbeat",e=>new lC(e),"PRIVATE")),Bt($f,lv,t),Bt($f,lv,"esm2017"),Bt("fire-js","")}hC("");function yp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function q0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fC=q0,K0=new ms("auth","Firebase",q0());/**
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
 */const bc=new cd("@firebase/auth");function mC(t,...e){bc.logLevel<=Ne.WARN&&bc.warn(`Auth (${io}): ${t}`,...e)}function Wu(t,...e){bc.logLevel<=Ne.ERROR&&bc.error(`Auth (${io}): ${t}`,...e)}/**
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
 */function Cr(t,...e){throw vp(t,...e)}function Ur(t,...e){return vp(t,...e)}function G0(t,e,n){const r=Object.assign(Object.assign({},fC()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function Ji(t){return G0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return K0.create(t,...e)}function fe(t,e,...n){if(!t)throw vp(e,...n)}function ai(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function gi(t,e){t||ai(e)}/**
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
 */function qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pC(){return fv()==="http:"||fv()==="https:"}function fv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pC()||z0()||"connection"in navigator)?navigator.onLine:!0}function yC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,gi(n>e,"Short delay should be less than long delay!"),this.isMobile=$A()||qA()}get(){return gC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _p(t,e){gi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Q0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _C=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EC=new $l(3e4,6e4);function so(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,i={}){return X0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Bl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return WA()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(d.credentials="include"),Q0.fetch()(await Y0(t,t.config.apiHost,n,l),d)})}async function X0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vC),e);try{const i=new TC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Su(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw G0(t,f,d);Cr(t,f)}}catch(i){if(i instanceof ir)throw i;Cr(t,"network-request-failed",{message:String(i)})}}async function hd(t,e,n,r,i={}){const s=await gs(t,e,n,r,i);return"mfaPendingCredential"in s&&Cr(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Y0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?_p(t.config,i):`${t.config.apiScheme}://${i}`;return _C.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function wC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ur(this.auth,"network-request-failed")),EC.get())})}}function Su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ur(t,e,r);return i.customData._tokenResponse=n,i}function mv(t){return t!==void 0&&t.enterprise!==void 0}class IC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SC(t,e){return gs(t,"GET","/v2/recaptchaConfig",so(t,e))}/**
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
 */async function kC(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function Cc(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AC(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Ep(r);fe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ja(Ah(i.auth_time)),issuedAtTime:Ja(Ah(i.iat)),expirationTime:Ja(Ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function Ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=O0(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pv(t){const e=Ep(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Il(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&bC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Il(t,Cc(n,{idToken:r}));fe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?J0(s.providerUserInfo):[],l=RC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Kf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function NC(t){const e=je(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function J0(t){return t.map(e=>{var{providerId:n}=e,r=yp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PC(t,e){const n=await X0(t,{},async()=>{const r=Bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Y0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(u.credentials="include"),Q0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DC(t,e){return gs(t,"POST","/v2/accounts:revokeToken",so(t,e))}/**
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
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=pv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Uo;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(fe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(fe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return ai("not implemented")}}/**
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
 */function Ai(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Il(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await Il(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:L,isAnonymous:V,providerData:B,stsTokenManager:E}=n;fe(A&&E,e,"internal-error");const v=Uo.fromJSON(this.name,E);fe(typeof A=="string",e,"internal-error"),Ai(p,e.name),Ai(g,e.name),fe(typeof L=="boolean",e,"internal-error"),fe(typeof V=="boolean",e,"internal-error"),Ai(T,e.name),Ai(N,e.name),Ai(D,e.name),Ai(F,e.name),Ai(k,e.name),Ai(_,e.name);const w=new Sr({uid:A,auth:e,email:g,emailVerified:L,displayName:p,isAnonymous:V,photoURL:N,phoneNumber:T,tenantId:D,stsTokenManager:v,createdAt:k,lastLoginAt:_});return B&&Array.isArray(B)&&(w.providerData=B.map(S=>Object.assign({},S))),F&&(w._redirectEventId=F),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Uo;i.updateFromServerResponse(n);const s=new Sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];fe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?J0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Uo;l.updateFromIdToken(r);const u=new Sr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const gv=new Map;function li(t){gi(t instanceof Function,"Expected a class definition");let e=gv.get(t);return e?(gi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gv.set(t,e),e)}/**
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
 */class Z0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z0.type="NONE";const yv=Z0;/**
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
 */function qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Bo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Cc(this.auth,{idToken:e}).catch(()=>{});return n?Sr._fromGetAccountInfoResponse(this.auth,n,e):null}return Sr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bo(li(yv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||li(yv);const o=qu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){let p;if(typeof f=="string"){const g=await Cc(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Sr._fromGetAccountInfoResponse(e,g,f)}else p=Sr._fromJSON(e,f);d!==s&&(l=p),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Bo(s,e,r))}}/**
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
 */function vv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sT(e))return"Blackberry";if(oT(e))return"Webos";if(tT(e))return"Safari";if((e.includes("chrome/")||nT(e))&&!e.includes("edge/"))return"Chrome";if(iT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eT(t=hn()){return/firefox\//i.test(t)}function tT(t=hn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nT(t=hn()){return/crios\//i.test(t)}function rT(t=hn()){return/iemobile/i.test(t)}function iT(t=hn()){return/android/i.test(t)}function sT(t=hn()){return/blackberry/i.test(t)}function oT(t=hn()){return/webos/i.test(t)}function wp(t=hn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xC(t=hn()){var e;return wp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OC(){return KA()&&document.documentMode===10}function aT(t=hn()){return wp(t)||iT(t)||oT(t)||sT(t)||/windows phone/i.test(t)||rT(t)}/**
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
 */function lT(t,e=[]){let n;switch(t){case"Browser":n=vv(hn());break;case"Worker":n=`${vv(hn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
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
 */class MC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LC(t,e={}){return gs(t,"GET","/v2/passwordPolicy",so(t,e))}/**
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
 */const VC=6;class FC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class zC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _v(this),this.idTokenSubscription=new _v(this),this.beforeStateQueue=new MC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=li(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cc(this,{idToken:e}),r=await Sr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Ji(this));const n=e?je(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(li(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LC(this),n=new FC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&li(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[li(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(t){return je(t)}class _v{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZA(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UC(t){fd=t}function uT(t){return fd.loadJS(t)}function BC(){return fd.recaptchaEnterpriseScript}function jC(){return fd.gapiScript}function $C(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class HC{constructor(){this.enterprise=new WC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class WC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const qC="recaptcha-enterprise",cT="NO_RECAPTCHA";class KC{constructor(e){this.type=qC,this.auth=la(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{SC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new IC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;mv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(cT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&mv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=BC();u.length!==0&&(u+=l),uT(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Ev(t,e,n,r=!1,i=!1){const s=new KC(t);let o;if(i)o=cT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wv(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ev(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ev(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function GC(t,e){const n=ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ks(s,e??{}))return i;Cr(i,"already-initialized")}return n.initialize({options:e})}function QC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(li);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function XC(t,e,n){const r=la(t);fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dT(e),{host:o,port:l}=YC(e),u=l===null?"":`:${l}`,d={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){fe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),fe(Ks(d,r.config.emulator)&&Ks(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(ld(`${s}//${o}${u}`),ud("Auth",!0)):JC()}function dT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YC(t){const e=dT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tv(o)}}}function Tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ai("not implemented")}_getIdTokenResponse(e){return ai("not implemented")}_linkToIdToken(e,n){return ai("not implemented")}_getReauthenticationResolver(e){return ai("not implemented")}}async function ZC(t,e){return gs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function eN(t,e){return hd(t,"POST","/v1/accounts:signInWithPassword",so(t,e))}/**
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
 */async function tN(t,e){return hd(t,"POST","/v1/accounts:signInWithEmailLink",so(t,e))}async function nN(t,e){return hd(t,"POST","/v1/accounts:signInWithEmailLink",so(t,e))}/**
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
 */class Sl extends Tp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wv(e,n,"signInWithPassword",eN);case"emailLink":return tN(e,{email:this._email,oobCode:this._password});default:Cr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wv(e,r,"signUpPassword",ZC);case"emailLink":return nN(e,{idToken:n,email:this._email,oobCode:this._password});default:Cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jo(t,e){return hd(t,"POST","/v1/accounts:signInWithIdp",so(t,e))}/**
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
 */const rN="http://localhost";class Gs extends Tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jo(e,n)}buildRequest(){const e={requestUri:rN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bl(n)}return e}}/**
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
 */function iN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sN(t){const e=La(Va(t)).link,n=e?La(Va(e)).deep_link_id:null,r=La(Va(t)).deep_link_id;return(r?La(Va(r)).link:null)||r||n||e||t}class Ip{constructor(e){var n,r,i,s,o,l;const u=La(Va(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=iN((i=u.mode)!==null&&i!==void 0?i:null);fe(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=sN(e);try{return new Ip(n)}catch{return null}}}/**
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
 */class ua{constructor(){this.providerId=ua.PROVIDER_ID}static credential(e,n){return Sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ip.parseLink(n);return fe(r,"argument-error"),Sl._fromEmailAndCode(e,r.code,r.tenantId)}}ua.PROVIDER_ID="password";ua.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ua.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hl extends hT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mi extends Hl{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mi.credential(e.oauthAccessToken)}catch{return null}}}Mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mi.PROVIDER_ID="facebook.com";/**
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
 */class Li extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Li.credential(n,r)}catch{return null}}}Li.GOOGLE_SIGN_IN_METHOD="google.com";Li.PROVIDER_ID="google.com";/**
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
 */class Vi extends Hl{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
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
 */class Fi extends Hl{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fi.credential(n,r)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com";Fi.PROVIDER_ID="twitter.com";/**
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
 */class Jo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sr._fromIdTokenResponse(e,r,i),o=Iv(r);return new Jo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iv(r);return new Jo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rc extends ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rc(e,n,r,i)}}function fT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,s,e,r):s})}async function oN(t,e,n=!1){const r=await Il(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jo._forOperation(t,"link",r)}/**
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
 */async function aN(t,e,n=!1){const{auth:r}=t;if(Xn(r.app))return Promise.reject(Ji(r));const i="reauthenticate";try{const s=await Il(t,fT(r,i,e,t),n);fe(s.idToken,r,"internal-error");const o=Ep(s.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Jo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cr(r,"user-mismatch"),s}}/**
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
 */async function mT(t,e,n=!1){if(Xn(t.app))return Promise.reject(Ji(t));const r="signIn",i=await fT(t,r,e),s=await Jo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lN(t,e){return mT(la(t),e)}/**
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
 */async function uN(t){const e=la(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function cN(t,e,n){return Xn(t.app)?Promise.reject(Ji(t)):lN(je(t),ua.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uN(t),r})}function dN(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function hN(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function fN(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function mN(t){return je(t).signOut()}const Pc="__sak";/**
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
 */class pT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pN=1e3,gN=10;class gT extends pT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gT.type="LOCAL";const yN=gT;/**
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
 */class yT extends pT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yT.type="SESSION";const vT=yT;/**
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
 */function vN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await vN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
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
 */function Sp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Sp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Br(){return window}function EN(t){Br().location.href=t}/**
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
 */function _T(){return typeof Br().WorkerGlobalScope<"u"&&typeof Br().importScripts=="function"}async function wN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IN(){return _T()?self:null}/**
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
 */const ET="firebaseLocalStorageDb",SN=1,Dc="firebaseLocalStorage",wT="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pd(t,e){return t.transaction([Dc],e?"readwrite":"readonly").objectStore(Dc)}function kN(){const t=indexedDB.deleteDatabase(ET);return new Wl(t).toPromise()}function Gf(){const t=indexedDB.open(ET,SN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dc,{keyPath:wT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dc)?e(r):(r.close(),await kN(),e(await Gf()))})})}async function Sv(t,e,n){const r=pd(t,!0).put({[wT]:e,value:n});return new Wl(r).toPromise()}async function AN(t,e){const n=pd(t,!1).get(e),r=await new Wl(n).toPromise();return r===void 0?null:r.value}function kv(t,e){const n=pd(t,!0).delete(e);return new Wl(n).toPromise()}const bN=800,CN=3;class TT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _T()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(IN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wN(),!this.activeServiceWorker)return;this.sender=new _N(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gf();return await Sv(e,Pc,"1"),await kv(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pd(i,!1).getAll();return new Wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TT.type="LOCAL";const NN=TT;new $l(3e4,6e4);/**
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
 */function RN(t,e){return e?li(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kp extends Tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PN(t){return mT(t.auth,new kp(t),t.bypassAuthState)}function DN(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),aN(n,new kp(t),t.bypassAuthState)}async function xN(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),oN(n,new kp(t),t.bypassAuthState)}/**
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
 */class IT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PN;case"linkViaPopup":case"linkViaRedirect":return xN;case"reauthViaPopup":case"reauthViaRedirect":return DN;default:Cr(this.auth,"internal-error")}}resolve(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ON=new $l(2e3,1e4);class xo extends IT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){gi(this.filter.length===1,"Popup operations only handle one event");const e=Sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ON.get())};e()}}xo.currentPopupAction=null;/**
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
 */const MN="pendingRedirect",Ku=new Map;class LN extends IT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const r=await VN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VN(t,e){const n=UN(e),r=zN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FN(t,e){Ku.set(t._key(),e)}function zN(t){return li(t._redirectPersistence)}function UN(t){return qu(MN,t.config.apiKey,t.name)}async function BN(t,e,n=!1){if(Xn(t.app))return Promise.reject(Ji(t));const r=la(t),i=RN(r,e),o=await new LN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jN=10*60*1e3;class $N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ST(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ur(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Av(e))}saveEventToCache(e){this.cachedEventUids.add(Av(e)),this.lastProcessedEventTime=Date.now()}}function Av(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ST({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ST(t);default:return!1}}/**
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
 */async function WN(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const qN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KN=/^https?/;async function GN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WN(t);for(const n of e)try{if(QN(n))return}catch{}Cr(t,"unauthorized-domain")}function QN(t){const e=qf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KN.test(n))return!1;if(qN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const XN=new $l(3e4,6e4);function bv(){const t=Br().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YN(t){return new Promise((e,n)=>{var r,i,s;function o(){bv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bv(),n(Ur(t,"network-request-failed"))},timeout:XN.get()})}if(!((i=(r=Br().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Br().gapi)===null||s===void 0)&&s.load)o();else{const l=$C("iframefcb");return Br()[l]=()=>{gapi.load?o():n(Ur(t,"network-request-failed"))},uT(`${jC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function JN(t){return Gu=Gu||YN(t),Gu}/**
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
 */const ZN=new $l(5e3,15e3),eR="__/auth/iframe",tR="emulator/auth/iframe",nR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iR(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_p(e,tR):`https://${t.config.authDomain}/${eR}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=rR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bl(r).slice(1)}`}async function sR(t){const e=await JN(t),n=Br().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:iR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ur(t,"network-request-failed"),l=Br().setTimeout(()=>{s(o)},ZN.get());function u(){Br().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const oR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aR=500,lR=600,uR="_blank",cR="http://localhost";class Cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dR(t,e,n,r=aR,i=lR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oR),{width:r.toString(),height:i.toString(),top:s,left:o}),d=hn().toLowerCase();n&&(l=nT(d)?uR:n),eT(d)&&(e=e||cR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[T,N])=>`${g}${T}=${N},`,"");if(xC(d)&&l!=="_self")return hR(e||"",l),new Cv(null);const p=window.open(e||"",l,f);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Cv(p)}function hR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fR="__/auth/handler",mR="emulator/auth/handler",pR=encodeURIComponent("fac");async function Nv(t,e,n,r,i,s){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof hT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Hl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${pR}=${encodeURIComponent(u)}`:"";return`${gR(t)}?${Bl(l).slice(1)}${d}`}function gR({config:t}){return t.emulator?_p(t,mR):`https://${t.authDomain}/${fR}`}/**
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
 */const bh="webStorageSupport";class yR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vT,this._completeRedirectFn=BN,this._overrideRedirectResult=FN}async _openPopup(e,n,r,i){var s;gi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nv(e,n,r,qf(),i);return dR(e,o,Sp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nv(e,n,r,qf(),i);return EN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sR(e),r=new $N(e);return n.register("authEvent",i=>(fe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bh,{type:bh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bh];o!==void 0&&n(!!o),Cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aT()||tT()||wp()}}const vR=yR;var Rv="@firebase/auth",Pv="1.10.8";/**
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
 */class _R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ER(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wR(t){Un(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lT(t)},d=new zC(r,i,s,u);return QC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new En("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(r=>new _R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Rv,Pv,ER(t)),Bt(Rv,Pv,"esm2017")}/**
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
 */const TR=5*60,IR=V0("authIdTokenMaxAge")||TR;let Dv=null;const SR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>IR)return;const i=n==null?void 0:n.token;Dv!==i&&(Dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kR(t=jl()){const e=ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GC(t,{popupRedirectResolver:vR,persistence:[NN,yN,vT]}),r=V0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=SR(s.toString());hN(n,o,()=>o(n.currentUser)),dN(n,l=>o(l))}}const i=M0("auth");return i&&XC(n,`http://${i}`),n}function AR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ur("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wR("Browser");var xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,kT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.D=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(S,C,P){for(var I=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)I[Se-2]=arguments[Se];return v.prototype[C].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);var S=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)S[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)S[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],C=E.g[2];var P=E.g[3],I=v+(P^w&(C^P))+S[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[1]+3905402710&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[2]+606105819&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+S[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[5]+1200080426&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[6]+2821735955&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+S[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[9]+2336552879&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[10]+4294925233&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+S[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[13]+4254626195&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[14]+2792965006&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(C^P&(w^C))+S[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[6]+3225465664&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[11]+643717713&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+S[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[10]+38016083&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[15]+3634488961&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+S[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[14]+3275163606&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[3]+4107603335&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+S[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[2]+4243563512&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[7]+1735328473&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(w^C^P)+S[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[8]+2272392833&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[11]+1839030562&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+S[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[4]+1272893353&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[7]+4139469664&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+S[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[0]+3936430074&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[3]+3572445317&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+S[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[12]+3873151461&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[15]+530742520&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(C^(w|~P))+S[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[7]+1126891415&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[14]+2878612391&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+S[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[3]+2399980690&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[10]+4293915773&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+S[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[15]+4264355552&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[6]+2734768916&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+S[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[11]+3174756917&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[2]+718787259&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var w=v-this.blockSize,S=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=w;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<v;)if(S[C++]=E.charCodeAt(P++),C==this.blockSize){i(this,S),C=0;break}}else for(;P<v;)if(S[C++]=E[P++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var w=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=w&255,w/=256;for(this.u(E),E=Array(16),v=w=0;4>v;++v)for(var S=0;32>S;S+=8)E[w++]=this.g[v]>>>S&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;for(var w=[],S=!0,C=E.length-1;0<=C;C--){var P=E[C]|0;S&&P==v||(w[C]=P,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return F(d(-E));for(var v=[],w=1,S=0;E>=w;S++)v[S]=E/w|0,w*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return F(f(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),S=p,C=0;C<E.length;C+=8){var P=Math.min(8,E.length-C),I=parseInt(E.substring(C,C+P),v);8>P?(P=d(Math.pow(v,P)),S=S.j(P).add(d(I))):(S=S.j(w),S=S.add(d(I)))}return S}var p=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-F(this).m();for(var E=0,v=1,w=0;w<this.g.length;w++){var S=this.i(w);E+=(0<=S?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(D(this))return"-"+F(this).toString(E);for(var v=d(Math.pow(E,6)),w=this,S="";;){var C=L(w,v).g;w=k(w,C.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=C,N(w))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=k(this,E),D(E)?-1:N(E)?0:1};function F(E){for(var v=E.g.length,w=[],S=0;S<v;S++)w[S]=~E.g[S];return new o(w,~E.h).add(g)}t.abs=function(){return D(this)?F(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0,C=0;C<=v;C++){var P=S+(this.i(C)&65535)+(E.i(C)&65535),I=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=I>>>16,P&=65535,I&=65535,w[C]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function k(E,v){return E.add(F(v))}t.j=function(E){if(N(this)||N(E))return p;if(D(this))return D(E)?F(this).j(F(E)):F(F(this).j(E));if(D(E))return F(this.j(F(E)));if(0>this.l(T)&&0>E.l(T))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,w=[],S=0;S<2*v;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<E.g.length;C++){var P=this.i(S)>>>16,I=this.i(S)&65535,Se=E.i(C)>>>16,de=E.i(C)&65535;w[2*S+2*C]+=I*de,_(w,2*S+2*C),w[2*S+2*C+1]+=P*de,_(w,2*S+2*C+1),w[2*S+2*C+1]+=I*Se,_(w,2*S+2*C+1),w[2*S+2*C+2]+=P*Se,_(w,2*S+2*C+2)}for(S=0;S<v;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=v;S<2*v;S++)w[S]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function L(E,v){if(N(v))throw Error("division by zero");if(N(E))return new A(p,p);if(D(E))return v=L(F(E),v),new A(F(v.g),F(v.h));if(D(v))return v=L(E,F(v)),new A(F(v.g),v.h);if(30<E.g.length){if(D(E)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=v;0>=S.l(E);)w=V(w),S=V(S);var C=B(w,1),P=B(S,1);for(S=B(S,2),w=B(w,2);!N(S);){var I=P.add(S);0>=I.l(E)&&(C=C.add(w),P=I),S=B(S,1),w=B(w,1)}return v=k(E,C.j(v)),new A(C,v)}for(C=p;0<=E.l(v);){for(w=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=d(w),I=P.j(v);D(I)||0<I.l(E);)w-=S,P=d(w),I=P.j(v);N(P)&&(P=g),C=C.add(P),E=k(E,I)}return new A(C,E)}t.A=function(E){return L(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function V(E){for(var v=E.g.length+1,w=[],S=0;S<v;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function B(E,v){var w=v>>5;v%=32;for(var S=E.g.length-w,C=[],P=0;P<S;P++)C[P]=0<v?E.i(P+w)>>>v|E.i(P+w+1)<<32-v:E.i(P+w);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Zi=o}).apply(typeof xv<"u"?xv:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AT,Fa,bT,Qu,Qf,CT,NT,RT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in m))break e;m=m[O]}a=a[a.length-1],y=m[a],h=h(y),h!=y&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,y=!1,O={next:function(){if(!y&&m<a.length){var z=m++;return{value:h(z,a[z]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,m){return a.call.apply(a.bind,arguments)}function p(a,h,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function g(a,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function T(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function N(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,O,z){for(var G=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)G[Ke-2]=arguments[Ke];return h.prototype[O].apply(y,G)}}function D(a){const h=a.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=a[y];return m}return[]}function F(a,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const O=a.length||0,z=y.length||0;a.length=O+z;for(let G=0;G<z;G++)a[O+G]=y[G]}else a.push(y)}}class k{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var V=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function B(a,h,m){for(const y in a)h.call(m,a[y],y,a)}function E(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function v(a){const h={};for(const m in a)h[m]=a[m];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let m,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(m in y)a[m]=y[m];for(let z=0;z<w.length;z++)m=w[z],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function C(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Z;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Se{constructor(){this.h=this.g=null}add(h,m){const y=de.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var de=new k(()=>new Ee,a=>a.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,q=!1,Z=new Se,ae=()=>{const a=l.Promise.resolve(void 0);ze=()=>{a.then(Te)}};var Te=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(m){P(m)}var h=de;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}q=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var ce=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function Ot(a,h){if(ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ot.aa.h.call(this)}}N(Ot,ue);var ct={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),In=0;function sr(a,h,m,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=O,this.key=++In,this.da=this.fa=!1}function Nt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Jt(a){this.src=a,this.g={},this.h=0}Jt.prototype.add=function(a,h,m,y,O){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var G=Sn(a,h,y,O);return-1<G?(h=a[G],m||(h.fa=!1)):(h=new sr(h,this.src,z,!!y,O),h.fa=m,a.push(h)),h};function Zt(a,h){var m=h.type;if(m in a.g){var y=a.g[m],O=Array.prototype.indexOf.call(y,h,void 0),z;(z=0<=O)&&Array.prototype.splice.call(y,O,1),z&&(Nt(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Sn(a,h,m,y){for(var O=0;O<a.length;++O){var z=a[O];if(!z.da&&z.listener==h&&z.capture==!!m&&z.ha==y)return O}return-1}var dt="closure_lm_"+(1e6*Math.random()|0),Mt={};function kn(a,h,m,y,O){if(Array.isArray(h)){for(var z=0;z<h.length;z++)kn(a,h[z],m,y,O);return null}return m=ye(m),a&&a[Ct]?a.K(h,m,d(y)?!!y.capture:!1,O):An(a,h,m,!1,y,O)}function An(a,h,m,y,O,z){if(!h)throw Error("Invalid event type");var G=d(O)?!!O.capture:!!O,Ke=ie(a);if(Ke||(a[dt]=Ke=new Jt(a)),m=Ke.add(h,m,y,G,z),m.proxy)return m;if(y=Lt(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)ce||(O=G),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(pe(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Lt(){function a(m){return h.call(a.src,a.listener,m)}const h=U;return a}function bn(a,h,m,y,O){if(Array.isArray(h))for(var z=0;z<h.length;z++)bn(a,h[z],m,y,O);else y=d(y)?!!y.capture:!!y,m=ye(m),a&&a[Ct]?(a=a.i,h=String(h).toString(),h in a.g&&(z=a.g[h],m=Sn(z,m,y,O),-1<m&&(Nt(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete a.g[h],a.h--)))):a&&(a=ie(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Sn(h,m,y,O)),(m=-1<a?h[a]:null)&&rt(m))}function rt(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ct])Zt(h.i,a);else{var m=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(m,y,a.capture):h.detachEvent?h.detachEvent(pe(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=ie(h))?(Zt(m,a),m.h==0&&(m.src=null,h[dt]=null)):Nt(a)}}}function pe(a){return a in Mt?Mt[a]:Mt[a]="on"+a}function U(a,h){if(a.da)a=!0;else{h=new Ot(h,this);var m=a.listener,y=a.ha||a.src;a.fa&&rt(a),a=m.call(y,h)}return a}function ie(a){return a=a[dt],a instanceof Jt?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ne(){he.call(this),this.i=new Jt(this),this.M=this,this.F=null}N(ne,he),ne.prototype[Ct]=!0,ne.prototype.removeEventListener=function(a,h,m,y){bn(this,a,h,m,y)};function re(a,h){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new ue(h,a);else if(h instanceof ue)h.target=h.target||a;else{var O=h;h=new ue(y,a),S(h,O)}if(O=!0,m)for(var z=m.length-1;0<=z;z--){var G=h.g=m[z];O=$e(G,y,!0,h)&&O}if(G=h.g=a,O=$e(G,y,!0,h)&&O,O=$e(G,y,!1,h)&&O,m)for(z=0;z<m.length;z++)G=h.g=m[z],O=$e(G,y,!1,h)&&O}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],y=0;y<m.length;y++)Nt(m[y]);delete a.g[h],a.h--}}this.F=null},ne.prototype.K=function(a,h,m,y){return this.i.add(String(a),h,!1,m,y)},ne.prototype.L=function(a,h,m,y){return this.i.add(String(a),h,!0,m,y)};function $e(a,h,m,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,z=0;z<h.length;++z){var G=h[z];if(G&&!G.da&&G.capture==m){var Ke=G.listener,Ht=G.ha||G.src;G.fa&&Zt(a.i,G),O=Ke.call(Ht,y)!==!1&&O}}return O&&!y.defaultPrevented}function He(a,h,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function R(a){a.g=He(()=>{a.g=null,a.i&&(a.i=!1,R(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class se extends he{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:R(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(a){he.call(this),this.h=a,this.g={}}N(Pe,he);var yt=[];function be(a){B(a.g,function(h,m){this.g.hasOwnProperty(m)&&rt(h)},a),a.g={}}Pe.prototype.N=function(){Pe.aa.N.call(this),be(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fn=l.JSON.stringify,Cn=l.JSON.parse,Rt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Bn(){}Bn.prototype.h=null;function jn(a){return a.h||(a.h=a.i())}function Gr(){}var or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rr(){ue.call(this,"d")}N(Rr,ue);function wi(){ue.call(this,"c")}N(wi,ue);var mn={},_s=null;function Qr(){return _s=_s||new ne}mn.La="serverreachability";function Es(a){ue.call(this,mn.La,a)}N(Es,ue);function Nn(a){const h=Qr();re(h,new Es(h))}mn.STAT_EVENT="statevent";function Pr(a,h){ue.call(this,mn.STAT_EVENT,a),this.stat=h}N(Pr,ue);function st(a){const h=Qr();re(h,new Pr(h,a))}mn.Ma="timingevent";function Xr(a,h){ue.call(this,mn.Ma,a),this.size=h}N(Xr,ue);function $n(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function yr(a,h,m,y,O,z){a.info(function(){if(a.g)if(z)for(var G="",Ke=z.split("&"),Ht=0;Ht<Ke.length;Ht++){var Me=Ke[Ht].split("=");if(1<Me.length){var tn=Me[0];Me=Me[1];var nn=tn.split("_");G=2<=nn.length&&nn[1]=="type"?G+(tn+"="+Me+"&"):G+(tn+"=redacted&")}}else G=null;else G=z;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+m+`
`+G})}function Ti(a,h,m,y,O,z,G){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+m+`
`+z+" "+G})}function Dr(a,h,m,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ws(a,m)+(y?" "+y:"")})}function pa(a,h){a.info(function(){return"TIMEOUT: "+h})}Hn.prototype.info=function(){};function ws(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var z=O[0];if(z!="noop"&&z!="stop"&&z!="close")for(var G=1;G<O.length;G++)O[G]=""}}}}return fn(m)}catch{return h}}var Yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qn;function x(){}N(x,Bn),x.prototype.g=function(){return new XMLHttpRequest},x.prototype.i=function(){return{}},qn=new x;function X(a,h,m,y){this.j=a,this.i=h,this.l=m,this.R=y||1,this.U=new Pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new we}function we(){this.i=null,this.g="",this.h=!1}var Ce={},jt={};function Rn(a,h,m){a.L=1,a.v=co($t(h)),a.m=m,a.P=!0,Kn(a,null)}function Kn(a,h){a.F=Date.now(),Jr(a),a.A=$t(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Sg(m.i,"t",y),a.C=0,m=a.j.J,a.h=new we,a.g=jg(a.j,m?h:null,!a.m),0<a.O&&(a.M=new se(g(a.Y,a,a.g),a.O)),h=a.U,m=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(yt[0]=O.toString()),O=yt);for(var z=0;z<O.length;z++){var G=kn(m,O[z],y||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Nn(),yr(a.i,a.u,a.A,a.l,a.R,a.m)}X.prototype.ca=function(a){a=a.target;const h=this.M;h&&ti(a)==3?h.j():this.Y(a)},X.prototype.Y=function(a){try{if(a==this.g)e:{const nn=ti(this.g);var h=this.g.Ba();const mo=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||Pg(this.g)))){this.J||nn!=4||h==7||(h==8||0>=mo?Nn(3):Nn(2)),ga(this);var m=this.g.Z();this.X=m;t:if(Tt(this)){var y=Pg(this.g);a="";var O=y.length,z=ti(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zr(this),Ts(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(z&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,Ti(this.i,this.u,this.A,this.l,this.R,nn,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Ht=this.g;if((Ke=Ht.g?Ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(Ke)){var Me=Ke;break t}}Me=null}if(m=Me)Dr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,m);else{this.o=!1,this.s=3,st(12),Zr(this),Ts(this);break e}}if(this.P){m=!0;let _r;for(;!this.J&&this.C<G.length;)if(_r=uo(this,G),_r==jt){nn==4&&(this.s=4,st(14),m=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(_r==Ce){this.s=4,st(15),Dr(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Dr(this.i,this.l,_r,null),ya(this,_r);if(Tt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||G.length!=0||this.h.h||(this.s=1,st(16),m=!1),this.o=this.o&&m,!m)Dr(this.i,this.l,G,"[Invalid Chunked Response]"),Zr(this),Ts(this);else if(0<G.length&&!this.W){this.W=!0;var tn=this.j;tn.g==this&&tn.ba&&!tn.M&&(tn.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),qd(tn),tn.M=!0,st(11))}}else Dr(this.i,this.l,G,null),ya(this,G);nn==4&&Zr(this),this.o&&!this.J&&(nn==4?Fg(this.j,this):(this.o=!1,Jr(this)))}else uS(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Zr(this),Ts(this)}}}catch{}finally{}};function Tt(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uo(a,h){var m=a.C,y=h.indexOf(`
`,m);return y==-1?jt:(m=Number(h.substring(m,y)),isNaN(m)?Ce:(y+=1,y+m>h.length?jt:(h=h.slice(y,y+m),a.C=y+m,h)))}X.prototype.cancel=function(){this.J=!0,Zr(this)};function Jr(a){a.S=Date.now()+a.I,pn(a,a.I)}function pn(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$n(g(a.ba,a),h)}function ga(a){a.B&&(l.clearTimeout(a.B),a.B=null)}X.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pa(this.i,this.A),this.L!=2&&(Nn(),st(17)),Zr(this),this.s=2,Ts(this)):pn(this,this.S-a)};function Ts(a){a.j.G==0||a.J||Fg(a.j,a)}function Zr(a){ga(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,be(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ya(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||ke(m.h,a))){if(!a.K&&ke(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)iu(m),nu(m);else break e;Wd(m),st(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=$n(g(m.Za,m),6e3));if(1>=Q(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Cs(m,11)}else if((a.K||m.g==a)&&iu(m),!_(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let Me=O[h];if(m.T=Me[0],Me=Me[1],m.G==2)if(Me[0]=="c"){m.K=Me[1],m.ia=Me[2];const tn=Me[3];tn!=null&&(m.la=tn,m.j.info("VER="+m.la));const nn=Me[4];nn!=null&&(m.Aa=nn,m.j.info("SVER="+m.Aa));const mo=Me[5];mo!=null&&typeof mo=="number"&&0<mo&&(y=1.5*mo,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const _r=a.g;if(_r){const ou=_r.g?_r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ou){var z=y.h;z.g||ou.indexOf("spdy")==-1&&ou.indexOf("quic")==-1&&ou.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ve(z,z.h),z.h=null))}if(y.D){const Kd=_r.g?_r.g.getResponseHeader("X-HTTP-Session-Id"):null;Kd&&(y.ya=Kd,qe(y.I,y.D,Kd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var G=a;if(y.qa=Bg(y,y.J?y.ia:null,y.W),G.K){K(y.h,G);var Ke=G,Ht=y.L;Ht&&(Ke.I=Ht),Ke.B&&(ga(Ke),Jr(Ke)),y.g=G}else Lg(y);0<m.i.length&&ru(m)}else Me[0]!="stop"&&Me[0]!="close"||Cs(m,7);else m.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Cs(m,7):Hd(m):Me[0]!="noop"&&m.l&&m.l.ta(Me),m.v=0)}}Nn(4)}catch{}}var Ud=class{constructor(a,h){this.g=a,this.map=h}};function b(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function H(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Q(a){return a.h?1:a.g?a.g.size:0}function ke(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ve(a,h){a.g?a.g.add(h):a.h=h}function K(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}b.prototype.cancel=function(){if(this.i=We(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function We(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return D(a.i)}function ht(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,y=0;y<m;y++)h.push(a[y]);return h}h=[],m=0;for(y in a)h[m++]=a[y];return h}function oe(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const y in a)h[m++]=y;return h}}}function It(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=oe(a),y=ht(a),O=y.length,z=0;z<O;z++)h.call(void 0,y[z],m&&m[z],a)}var vr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ei(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),O=null;if(0<=y){var z=a[m].substring(0,y);O=a[m].substring(y+1)}else z=a[m];h(z,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function en(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof en){this.h=a.h,Je(this,a.j),this.o=a.o,this.g=a.g,Le(this,a.s),this.l=a.l;var h=a.i,m=new bs;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Is(this,m),this.m=a.m}else a&&(h=String(a).match(vr))?(this.h=!1,Je(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),Le(this,h[4]),this.l=Ss(h[5]||"",!0),Is(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}en.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ks(h,Ge,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ks(h,Ge,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(ks(m,m.charAt(0)=="/"?As:vt,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",ks(m,jd)),a.join("")};function $t(a){return new en(a)}function Je(a,h,m){a.j=m?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Le(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Is(a,h,m){h instanceof bs?(a.i=h,nS(a.i,a.h)):(m||(h=ks(h,Bd)),a.i=new bs(h,a.h))}function qe(a,h,m){a.i.set(h,m)}function co(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,De),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function De(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ge=/[#\/\?@]/g,vt=/[#\?:]/g,As=/[#\?]/g,Bd=/[#\?@]/g,jd=/#/g;function bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ii(a){a.g||(a.g=new Map,a.h=0,a.i&&ei(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=bs.prototype,t.add=function(a,h){Ii(this),this.i=null,a=ho(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Tg(a,h){Ii(a),h=ho(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ig(a,h){return Ii(a),h=ho(a,h),a.g.has(h)}t.forEach=function(a,h){Ii(this),this.g.forEach(function(m,y){m.forEach(function(O){a.call(h,O,y,this)},this)},this)},t.na=function(){Ii(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const O=a[y];for(let z=0;z<O.length;z++)m.push(h[y])}return m},t.V=function(a){Ii(this);let h=[];if(typeof a=="string")Ig(this,a)&&(h=h.concat(this.g.get(ho(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},t.set=function(a,h){return Ii(this),this.i=null,a=ho(this,a),Ig(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Sg(a,h,m){Tg(a,h),0<m.length&&(a.i=null,a.g.set(ho(a,h),D(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const z=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var O=z;G[y]!==""&&(O+="="+encodeURIComponent(String(G[y]))),a.push(O)}}return this.i=a.join("&")};function ho(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function nS(a,h){h&&!a.j&&(Ii(a),a.i=null,a.g.forEach(function(m,y){var O=y.toLowerCase();y!=O&&(Tg(this,y),Sg(this,O,m))},a)),a.j=h}function rS(a,h){const m=new Hn;if(l.Image){const y=new Image;y.onload=T(Si,m,"TestLoadImage: loaded",!0,h,y),y.onerror=T(Si,m,"TestLoadImage: error",!1,h,y),y.onabort=T(Si,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=T(Si,m,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function iS(a,h){const m=new Hn,y=new AbortController,O=setTimeout(()=>{y.abort(),Si(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(z=>{clearTimeout(O),z.ok?Si(m,"TestPingServer: ok",!0,h):Si(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Si(m,"TestPingServer: error",!1,h)})}function Si(a,h,m,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(m)}catch{}}function sS(){this.g=new Rt}function oS(a,h,m){const y=m||"";try{It(a,function(O,z){let G=O;d(O)&&(G=fn(O)),h.push(y+z+"="+encodeURIComponent(G))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function Zl(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Zl,Bn),Zl.prototype.g=function(){return new eu(this.l,this.j)},Zl.prototype.i=function(a){return function(){return a}}({});function eu(a,h){ne.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(eu,ne),t=eu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_a(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_a(this)),this.g&&(this.readyState=3,_a(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function kg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?va(this):_a(this),this.readyState==3&&kg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,va(this))},t.Qa=function(a){this.g&&(this.response=a,va(this))},t.ga=function(){this.g&&va(this)};function va(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_a(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function _a(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ag(a){let h="";return B(a,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function $d(a,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Ag(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):qe(a,h,m))}function ft(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ft,ne);var aS=/^https?$/i,lS=["POST","PUT"];t=ft.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qn.g(),this.v=this.o?jn(this.o):jn(qn),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(z){bg(this,z);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)m.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const z of y.keys())m.set(z,y.get(z));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lS,h,void 0))||y||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,G]of m)this.g.setRequestHeader(z,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rg(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){bg(this,z)}};function bg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Cg(a),tu(a)}function Cg(a){a.A||(a.A=!0,re(a,"complete"),re(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,re(this,"complete"),re(this,"abort"),tu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tu(this,!0)),ft.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ng(this):this.bb())},t.bb=function(){Ng(this)};function Ng(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ti(a)!=4||a.Z()!=2)){if(a.u&&ti(a)==4)He(a.Ea,0,a);else if(re(a,"readystatechange"),ti(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=G===0){var O=String(a.D).match(vr)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!aS.test(O?O.toLowerCase():"")}m=y}if(m)re(a,"complete"),re(a,"success");else{a.m=6;try{var z=2<ti(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",Cg(a)}}finally{tu(a)}}}}function tu(a,h){if(a.g){Rg(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||re(a,"ready");try{m.onreadystatechange=y}catch{}}}function Rg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ti(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ti(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Cn(h)}};function Pg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uS(a){const h={};a=(a.g&&2<=ti(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var m=C(a[y]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=h[O]||[];h[O]=z,z.push(m)}E(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ea(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function Dg(a){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ea("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ea("baseRetryDelayMs",5e3,a),this.cb=Ea("retryDelaySeedMs",1e4,a),this.Wa=Ea("forwardChannelMaxRetries",2,a),this.wa=Ea("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new b(a&&a.concurrentRequestLimit),this.Da=new sS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Dg.prototype,t.la=8,t.G=1,t.connect=function(a,h,m,y){st(0),this.W=a,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Bg(this,null,this.W),ru(this)};function Hd(a){if(xg(a),a.G==3){var h=a.U++,m=$t(a.I);if(qe(m,"SID",a.K),qe(m,"RID",h),qe(m,"TYPE","terminate"),wa(a,m),h=new X(a,a.j,h),h.L=2,h.v=co($t(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=jg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Jr(h)}Ug(a)}function nu(a){a.g&&(qd(a),a.g.cancel(),a.g=null)}function xg(a){nu(a),a.u&&(l.clearTimeout(a.u),a.u=null),iu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ru(a){if(!H(a.h)&&!a.s){a.s=!0;var h=a.Ga;ze||ae(),q||(ze(),q=!0),Z.add(h,a),a.B=0}}function cS(a,h){return Q(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$n(g(a.Ga,a,h),zg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new X(this,this.j,a);let z=this.o;if(this.S&&(z?(z=v(z),S(z,this.S)):z=this.S),this.m!==null||this.O||(O.H=z,z=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Mg(this,O,h),m=$t(this.I),qe(m,"RID",a),qe(m,"CVER",22),this.D&&qe(m,"X-HTTP-Session-Id",this.D),wa(this,m),z&&(this.O?h="headers="+encodeURIComponent(String(Ag(z)))+"&"+h:this.m&&$d(m,this.m,z)),Ve(this.h,O),this.Ua&&qe(m,"TYPE","init"),this.P?(qe(m,"$req",h),qe(m,"SID","null"),O.T=!0,Rn(O,m,null)):Rn(O,m,h),this.G=2}}else this.G==3&&(a?Og(this,a):this.i.length==0||H(this.h)||Og(this))};function Og(a,h){var m;h?m=h.l:m=a.U++;const y=$t(a.I);qe(y,"SID",a.K),qe(y,"RID",m),qe(y,"AID",a.T),wa(a,y),a.m&&a.o&&$d(y,a.m,a.o),m=new X(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Mg(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ve(a.h,m),Rn(m,y,h)}function wa(a,h){a.H&&B(a.H,function(m,y){qe(h,y,m)}),a.l&&It({},function(m,y){qe(h,y,m)})}function Mg(a,h,m){m=Math.min(a.i.length,m);var y=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let z=-1;for(;;){const G=["count="+m];z==-1?0<m?(z=O[0].g,G.push("ofs="+z)):z=0:G.push("ofs="+z);let Ke=!0;for(let Ht=0;Ht<m;Ht++){let Me=O[Ht].g;const tn=O[Ht].map;if(Me-=z,0>Me)z=Math.max(0,O[Ht].g-100),Ke=!1;else try{oS(tn,G,"req"+Me+"_")}catch{y&&y(tn)}}if(Ke){y=G.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,y}function Lg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ze||ae(),q||(ze(),q=!0),Z.add(h,a),a.v=0}}function Wd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$n(g(a.Fa,a),zg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$n(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),nu(this),Vg(this))};function qd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vg(a){a.g=new X(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=$t(a.qa);qe(h,"RID","rpc"),qe(h,"SID",a.K),qe(h,"AID",a.T),qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(h,"TO",a.ja),qe(h,"TYPE","xmlhttp"),wa(a,h),a.m&&a.o&&$d(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=co($t(h)),m.m=null,m.P=!0,Kn(m,a)}t.Za=function(){this.C!=null&&(this.C=null,nu(this),Wd(this),st(19))};function iu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fg(a,h){var m=null;if(a.g==h){iu(a),qd(a),a.g=null;var y=2}else if(ke(a.h,h))m=h.D,K(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Qr(),re(y,new Xr(y,m)),ru(a)}else Lg(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&cS(a,h)||y==2&&Wd(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),O){case 1:Cs(a,5);break;case 4:Cs(a,10);break;case 3:Cs(a,6);break;default:Cs(a,2)}}}function zg(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Cs(a,h){if(a.j.info("Error code "+h),h==2){var m=g(a.fb,a),y=a.Xa;const O=!y;y=new en(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Je(y,"https"),co(y),O?rS(y.toString(),m):iS(y.toString(),m)}else st(2);a.G=0,a.l&&a.l.sa(h),Ug(a),xg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Ug(a){if(a.G=0,a.ka=[],a.l){const h=We(a.h);(h.length!=0||a.i.length!=0)&&(F(a.ka,h),F(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Bg(a,h,m){var y=m instanceof en?$t(m):new en(m);if(y.g!="")h&&(y.g=h+"."+y.g),Le(y,y.s);else{var O=l.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var z=new en(null);y&&Je(z,y),h&&(z.g=h),O&&Le(z,O),m&&(z.l=m),y=z}return m=a.D,h=a.ya,m&&h&&qe(y,m,h),qe(y,"VER",a.la),wa(a,y),y}function jg(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ft(new Zl({eb:m})):new ft(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $g(){}t=$g.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function su(){}su.prototype.g=function(a,h){return new Gn(a,h)};function Gn(a,h){ne.call(this),this.g=new Dg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fo(this)}N(Gn,ne),Gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gn.prototype.close=function(){Hd(this.g)},Gn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=fn(a),a=m);h.i.push(new Ud(h.Ya++,a)),h.G==3&&ru(h)},Gn.prototype.N=function(){this.g.l=null,delete this.j,Hd(this.g),delete this.g,Gn.aa.N.call(this)};function Hg(a){Rr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}N(Hg,Rr);function Wg(){wi.call(this),this.status=1}N(Wg,wi);function fo(a){this.g=a}N(fo,$g),fo.prototype.ua=function(){re(this.g,"a")},fo.prototype.ta=function(a){re(this.g,new Hg(a))},fo.prototype.sa=function(a){re(this.g,new Wg)},fo.prototype.ra=function(){re(this.g,"b")},su.prototype.createWebChannel=su.prototype.g,Gn.prototype.send=Gn.prototype.o,Gn.prototype.open=Gn.prototype.m,Gn.prototype.close=Gn.prototype.close,RT=function(){return new su},NT=function(){return Qr()},CT=mn,Qf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,Qu=Yr,Wn.COMPLETE="complete",bT=Wn,Gr.EventType=or,or.OPEN="a",or.CLOSE="b",or.ERROR="c",or.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Fa=Gr,ft.prototype.listenOnce=ft.prototype.L,ft.prototype.getLastError=ft.prototype.Ka,ft.prototype.getLastErrorCode=ft.prototype.Ba,ft.prototype.getStatus=ft.prototype.Z,ft.prototype.getResponseJson=ft.prototype.Oa,ft.prototype.getResponseText=ft.prototype.oa,ft.prototype.send=ft.prototype.ea,ft.prototype.setWithCredentials=ft.prototype.Ha,AT=ft}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const Ov="@firebase/firestore",Mv="4.8.0";/**
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
 */let an=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
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
 */let ca="11.10.0";/**
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
 */const Qs=new cd("@firebase/firestore");function yo(){return Qs.logLevel}function J(t,...e){if(Qs.logLevel<=Ne.DEBUG){const n=e.map(Ap);Qs.debug(`Firestore (${ca}): ${t}`,...n)}}function yi(t,...e){if(Qs.logLevel<=Ne.ERROR){const n=e.map(Ap);Qs.error(`Firestore (${ca}): ${t}`,...n)}}function is(t,...e){if(Qs.logLevel<=Ne.WARN){const n=e.map(Ap);Qs.warn(`Firestore (${ca}): ${t}`,...n)}}function Ap(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,PT(t,r,n)}function PT(t,e,n){let r=`FIRESTORE (${ca}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw yi(r),new Error(r)}function Fe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||PT(e,i,r)}function _e(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class DT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(an.UNAUTHENTICATED))}shutdown(){}}class CR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NR{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new DT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new an(e)}}class RR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class PR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new RR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function xT(){return new TextEncoder}/**
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
 */class bp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=xR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Xf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Ie(r,i);{const s=xT(),o=OR(s.encode(Vv(t,n)),s.encode(Vv(e,n)));return o!==0?o:Ie(r,i)}}n+=r>65535?2:1}return Ie(t.length,e.length)}function Vv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function OR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ie(t[n],e[n]);return Ie(t.length,e.length)}function Zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Fv="__name__";class Mr{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Mr.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ie(e.length,n.length)}static compareSegments(e,n){const r=Mr.isNumericId(e),i=Mr.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Mr.extractNumericId(e).compare(Mr.extractNumericId(n)):Xf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zi.fromString(e.substring(4,e.length-2))}}class Xe extends Mr{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const MR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Mr{construct(e,n,r){return new Kt(e,n,r)}static isValidIdentifier(e){return MR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fv}static keyField(){return new Kt([Fv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Y(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Y(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Xe.fromString(e))}static fromName(e){return new le(Xe.fromString(e).popFirst(5))}static empty(){return new le(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Xe(e.slice()))}}/**
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
 */function OT(t,e,n){if(!n)throw new Y(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LR(t,e,n,r){if(e===!0&&r===!0)throw new Y(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zv(t){if(!le.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uv(t){if(le.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function MT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gd(t);throw new Y(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function bt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ql(t,e){if(!MT(t))throw new Y(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Y(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Bv=-62135596800,jv=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jv);return new et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bv)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jv}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ql(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:bt("string",et._jsonSchemaVersion),seconds:bt("number"),nanoseconds:bt("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new et(0,0))}static max(){return new ge(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const kl=-1;function VR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new ss(i,le.empty(),e)}function FR(t){return new ss(t.readTime,t.key,kl)}class ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ss(ge.min(),le.empty(),kl)}static max(){return new ss(ge.max(),le.empty(),kl)}}function zR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const UR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function da(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==UR)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ha(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}yd.ue=-1;/**
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
 */const Cp=-1;function vd(t){return t==null}function xc(t){return t===0&&1/t==-1/0}function $R(t){return typeof t=="number"&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const LT="";function HR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$v(e)),e=WR(t.get(n),e);return $v(e)}function WR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case LT:n+="";break;default:n+=s}}return n}function $v(t){return t+LT+""}/**
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
 */function Hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ut{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new ut(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qt.RED,this.left=i??qt.EMPTY,this.right=s??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wv(this.data.getIterator())}getIteratorFrom(e){return new Wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class Wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jn{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new xt(Kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class FT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FT("Invalid base64 string: "+s):s}}(e);return new Yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const qR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=qR.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function as(t){return typeof t=="string"?Yt.fromBase64String(t):Yt.fromUint8Array(t)}/**
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
 */const zT="server_timestamp",UT="__type__",BT="__previous_value__",jT="__local_write_time__";function Np(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[UT])===null||n===void 0?void 0:n.stringValue)===zT}function _d(t){const e=t.mapValue.fields[BT];return Np(e)?_d(e):e}function Al(t){const e=os(t.mapValue.fields[jT].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class KR{constructor(e,n,r,i,s,o,l,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Oc="(default)";class bl{constructor(e,n){this.projectId=e,this.database=n||Oc}static empty(){return new bl("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(e){return e instanceof bl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $T="__type__",GR="__max__",bu={mapValue:{}},HT="__vector__",Mc="value";function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Np(t)?4:XR(t)?9007199254740991:QR(t)?10:11:me(28295,{value:t})}function Kr(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=os(i.timestampValue),l=os(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return as(i.bytesValue).isEqual(as(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _t(i.geoPointValue.latitude)===_t(s.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _t(i.integerValue)===_t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_t(i.doubleValue),l=_t(s.doubleValue);return o===l?xc(o)===xc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zo(t.arrayValue.values||[],e.arrayValue.values||[],Kr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hv(o)!==Hv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Kr(o[u],l[u])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function Cl(t,e){return(t.values||[]).find(n=>Kr(n,e))!==void 0}function ea(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=_t(s.integerValue||s.doubleValue),u=_t(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qv(t.timestampValue,e.timestampValue);case 4:return qv(Al(t),Al(e));case 5:return Xf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=as(s),u=as(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=Ie(l[d],u[d]);if(f!==0)return f}return Ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Ie(_t(s.latitude),_t(o.latitude));return l!==0?l:Ie(_t(s.longitude),_t(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const p=s.fields||{},g=o.fields||{},T=(l=p[Mc])===null||l===void 0?void 0:l.arrayValue,N=(u=g[Mc])===null||u===void 0?void 0:u.arrayValue,D=Ie(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Kv(T,N)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===bu.mapValue&&o===bu.mapValue)return 0;if(s===bu.mapValue)return 1;if(o===bu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Xf(u[p],f[p]);if(g!==0)return g;const T=ea(l[u[p]],d[f[p]]);if(T!==0)return T}return Ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw me(23264,{le:n})}}function qv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=os(t),r=os(e),i=Ie(n.seconds,r.seconds);return i!==0?i:Ie(n.nanos,r.nanos)}function Kv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ea(n[i],r[i]);if(s)return s}return Ie(n.length,r.length)}function ta(t){return Yf(t)}function Yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=os(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return as(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Yf(n.fields[o])}`;return i+"}"}(t.mapValue):me(61005,{value:t})}function Xu(t){switch(ls(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_d(t);return e?16+Xu(e):16;case 5:return 2*t.stringValue.length;case 6:return as(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Xu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ys(r.fields,(s,o)=>{i+=s.length+Xu(o)}),i}(t.mapValue);default:throw me(13486,{value:t})}}function Gv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jf(t){return!!t&&"integerValue"in t}function Rp(t){return!!t&&"arrayValue"in t}function Qv(t){return!!t&&"nullValue"in t}function Xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yu(t){return!!t&&"mapValue"in t}function QR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[$T])===null||n===void 0?void 0:n.stringValue)===HT}function Za(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Za(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===GR}/**
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
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(n)}setAll(e){let n=Kt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Za(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xn(Za(this.value))}}function WT(t){const e=[];return ys(t.fields,(n,r)=>{const i=new Kt([n]);if(Yu(r)){const s=WT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jn(e)}/**
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
 */class cn{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new cn(e,0,ge.min(),ge.min(),ge.min(),xn.empty(),0)}static newFoundDocument(e,n,r,i){return new cn(e,1,n,ge.min(),r,i,0)}static newNoDocument(e,n){return new cn(e,2,n,ge.min(),ge.min(),xn.empty(),0)}static newUnknownDocument(e,n){return new cn(e,3,n,ge.min(),ge.min(),xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lc{constructor(e,n){this.position=e,this.inclusive=n}}function Yv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=ea(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function YR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qT{}class At extends qT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZR(e,n,r):n==="array-contains"?new nP(e,r):n==="in"?new rP(e,r):n==="not-in"?new iP(e,r):n==="array-contains-any"?new sP(e,r):new At(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eP(e,r):new tP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ea(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(ea(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends qT{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Nr(e,n)}matches(e){return KT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function KT(t){return t.op==="and"}function GT(t){return JR(t)&&KT(t)}function JR(t){for(const e of t.filters)if(e instanceof Nr)return!1;return!0}function Zf(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+ta(t.value);if(GT(t))return t.filters.map(e=>Zf(e)).join(",");{const e=t.filters.map(n=>Zf(n)).join(",");return`${t.op}(${e})`}}function QT(t,e){return t instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.field.isEqual(i.field)&&Kr(r.value,i.value)}(t,e):t instanceof Nr?function(r,i){return i instanceof Nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&QT(o,i.filters[l]),!0):!1}(t,e):void me(19439)}function XT(t){return t instanceof At?function(n){return`${n.field.canonicalString()} ${n.op} ${ta(n.value)}`}(t):t instanceof Nr?function(n){return n.op.toString()+" {"+n.getFilters().map(XT).join(" ,")+"}"}(t):"Filter"}class ZR extends At{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class eP extends At{constructor(e,n){super(e,"in",n),this.keys=YT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tP extends At{constructor(e,n){super(e,"not-in",n),this.keys=YT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class nP extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rp(n)&&Cl(n.arrayValue,this.value)}}class rP extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class iP extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Cl(this.value.arrayValue,n)}}class sP extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
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
 */class oP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Zv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new oP(t,e,n,r,i,s,o)}function Pp(t){const e=_e(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ta(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ta(r)).join(",")),e.Pe=n}return e.Pe}function Dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jv(t.startAt,e.startAt)&&Jv(t.endAt,e.endAt)}function em(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function aP(t,e,n,r,i,s,o,l){return new fa(t,e,n,r,i,s,o,l)}function xp(t){return new fa(t)}function e_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JT(t){return t.collectionGroup!==null}function el(t){const e=_e(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xt(Kt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Nl(s,r))}),n.has(Kt.keyField().canonicalString())||e.Te.push(new Nl(Kt.keyField(),r))}return e.Te}function $r(t){const e=_e(t);return e.Ie||(e.Ie=lP(e,el(t))),e.Ie}function lP(t,e){if(t.limitType==="F")return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new Lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lc(t.startAt.position,t.startAt.inclusive):null;return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tm(t,e){const n=t.filters.concat([e]);return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nm(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ed(t,e){return Dp($r(t),$r(e))&&t.limitType===e.limitType}function ZT(t){return`${Pp($r(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>XT(i)).join(", ")}]`),vd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ta(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ta(i)).join(",")),`Target(${r})`}($r(t))}; limitType=${t.limitType})`}function wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of el(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Yv(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,el(r),i)||r.endAt&&!function(o,l,u){const d=Yv(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,el(r),i))}(t,e)}function uP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eI(t){return(e,n)=>{let r=!1;for(const i of el(t)){const s=cP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cP(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?ea(u,d):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VT(this.inner)}size(){return this.innerSize}}/**
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
 */const dP=new ut(le.comparator);function vi(){return dP}const tI=new ut(le.comparator);function za(...t){let e=tI;for(const n of t)e=e.insert(n.key,n);return e}function nI(t){let e=tI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ms(){return tl()}function rI(){return tl()}function tl(){return new oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const hP=new ut(le.comparator),fP=new xt(le.comparator);function Re(...t){let e=fP;for(const n of t)e=e.add(n);return e}const mP=new xt(Ie);function pP(){return mP}/**
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
 */function Op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function iI(t){return{integerValue:""+t}}function gP(t,e){return $R(e)?iI(e):Op(t,e)}/**
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
 */class Td{constructor(){this._=void 0}}function yP(t,e,n){return t instanceof Rl?function(i,s){const o={fields:{[UT]:{stringValue:zT},[jT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Np(s)&&(s=_d(s)),s&&(o.fields[BT]=s),{mapValue:o}}(n,e):t instanceof Pl?oI(t,e):t instanceof Dl?aI(t,e):function(i,s){const o=sI(i,s),l=t_(o)+t_(i.Ee);return Jf(o)&&Jf(i.Ee)?iI(l):Op(i.serializer,l)}(t,e)}function vP(t,e,n){return t instanceof Pl?oI(t,e):t instanceof Dl?aI(t,e):n}function sI(t,e){return t instanceof Vc?function(r){return Jf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Rl extends Td{}class Pl extends Td{constructor(e){super(),this.elements=e}}function oI(t,e){const n=lI(e);for(const r of t.elements)n.some(i=>Kr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Dl extends Td{constructor(e){super(),this.elements=e}}function aI(t,e){let n=lI(e);for(const r of t.elements)n=n.filter(i=>!Kr(i,r));return{arrayValue:{values:n}}}class Vc extends Td{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function t_(t){return _t(t.integerValue||t.doubleValue)}function lI(t){return Rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class _P{constructor(e,n){this.field=e,this.transform=n}}function EP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pl&&i instanceof Pl||r instanceof Dl&&i instanceof Dl?Zo(r.elements,i.elements,Kr):r instanceof Vc&&i instanceof Vc?Kr(r.Ee,i.Ee):r instanceof Rl&&i instanceof Rl}(t.transform,e.transform)}class wP{constructor(e,n){this.version=e,this.transformResults=n}}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function uI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mp(t.key,hr.none()):new Kl(t.key,t.data,hr.none());{const n=t.data,r=xn.empty();let i=new xt(Kt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vs(t.key,r,new Jn(i.toArray()),hr.none())}}function TP(t,e,n){t instanceof Kl?function(i,s,o){const l=i.value.clone(),u=r_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(i,s,o){if(!Ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=r_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(cI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function nl(t,e,n,r){return t instanceof Kl?function(s,o,l,u){if(!Ju(s.precondition,o))return l;const d=s.value.clone(),f=i_(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof vs?function(s,o,l,u){if(!Ju(s.precondition,o))return l;const d=i_(s.fieldTransforms,u,o),f=o.data;return f.setAll(cI(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function IP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sI(r.transform,i||null);s!=null&&(n===null&&(n=xn.empty()),n.set(r.field,s))}return n||null}function n_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zo(r,i,(s,o)=>EP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vs extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r_(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,vP(o,l,n[i]))}return r}function i_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yP(s,o,e))}return r}class Mp extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SP extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=uI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Re())}isEqual(e){return this.batchId===e.batchId&&Zo(this.mutations,e.mutations,(n,r)=>n_(n,r))&&Zo(this.baseMutations,e.baseMutations,(n,r)=>n_(n,r))}}class Lp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return hP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Lp(e,n,r,i)}}/**
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
 */class AP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var St,xe;function CP(t){switch(t){case j.OK:return me(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function dI(t){if(t===void 0)return yi("GRPC error has no .code"),j.UNKNOWN;switch(t){case St.OK:return j.OK;case St.CANCELLED:return j.CANCELLED;case St.UNKNOWN:return j.UNKNOWN;case St.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case St.INTERNAL:return j.INTERNAL;case St.UNAVAILABLE:return j.UNAVAILABLE;case St.UNAUTHENTICATED:return j.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case St.NOT_FOUND:return j.NOT_FOUND;case St.ALREADY_EXISTS:return j.ALREADY_EXISTS;case St.PERMISSION_DENIED:return j.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case St.ABORTED:return j.ABORTED;case St.OUT_OF_RANGE:return j.OUT_OF_RANGE;case St.UNIMPLEMENTED:return j.UNIMPLEMENTED;case St.DATA_LOSS:return j.DATA_LOSS;default:return me(39323,{code:t})}}(xe=St||(St={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const NP=new Zi([4294967295,4294967295],0);function s_(t){const e=xT().encode(t),n=new kT;return n.update(e),new Uint8Array(n.digest())}function o_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ua(`Invalid padding: ${n}`);if(r<0)throw new Ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Zi.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(NP)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sd(ge.min(),i,new ut(Ie),vi(),Re())}}class Gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gl(r,n,Re(),Re(),Re())}}/**
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
 */class Zu{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class hI{constructor(e,n){this.targetId=e,this.De=n}}class fI{constructor(e,n,r=Yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a_{constructor(){this.ve=0,this.Ce=l_(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Re(),n=Re(),r=Re();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:me(38017,{changeType:s})}}),new Gl(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=l_()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class RP{constructor(e){this.We=e,this.Ge=new Map,this.ze=vi(),this.je=Cu(),this.Je=Cu(),this.He=new ut(Ie)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(em(s))if(r===0){const o=new le(s.path);this.Xe(n,o,cn.newNoDocument(o,ge.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,d)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=as(r).toUint8Array()}catch(u){if(u instanceof FT)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vp(o,i,s)}catch(u){return is(u instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&em(l.target)){const u=new le(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,cn.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=Re();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Sd(e,n,this.He,this.ze,r);return this.ze=vi(),this.je=Cu(),this.Je=Cu(),this.He=new ut(Ie),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new a_,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new xt(Ie),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new xt(Ie),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new a_),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Cu(){return new ut(le.comparator)}function l_(){return new ut(le.comparator)}const PP={asc:"ASCENDING",desc:"DESCENDING"},DP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xP={and:"AND",or:"OR"};class OP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json||vd(e)?e:{value:e}}function Fc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MP(t,e){return Fc(t,e.toTimestamp())}function Hr(t){return Fe(!!t,49232),ge.fromTimestamp(function(n){const r=os(n);return new et(r.seconds,r.nanos)}(t))}function Fp(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(i){return new Xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pI(t){const e=Xe.fromString(t);return Fe(EI(e),10190,{key:e.toString()}),e}function sm(t,e){return Fp(t.databaseId,e.path)}function Ch(t,e){const n=pI(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(yI(n))}function gI(t,e){return Fp(t.databaseId,e)}function LP(t){const e=pI(t);return e.length===4?Xe.emptyPath():yI(e)}function om(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yI(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function u_(t,e,n){return{name:sm(t,e),fields:n.value.mapValue.fields}}function VP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:me(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),Yt.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Yt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?j.UNKNOWN:dI(d.code);return new Y(f,d.message||"")}(o);n=new fI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ch(t,r.document.name),s=Hr(r.document.updateTime),o=r.document.createTime?Hr(r.document.createTime):ge.min(),l=new xn({mapValue:{fields:r.document.fields}}),u=cn.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Zu(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ch(t,r.document),s=r.readTime?Hr(r.readTime):ge.min(),o=cn.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Zu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ch(t,r.document),s=r.removedTargetIds||[];n=new Zu([],s,i,null)}else{if(!("filter"in e))return me(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bP(i,s),l=r.targetId;n=new hI(l,o)}}return n}function FP(t,e){let n;if(e instanceof Kl)n={update:u_(t,e.key,e.value)};else if(e instanceof Mp)n={delete:sm(t,e.key)};else if(e instanceof vs)n={update:u_(t,e.key,e.data),updateMask:KP(e.fieldMask)};else{if(!(e instanceof SP))return me(16599,{Rt:e.type});n={verify:sm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vc)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:me(27497)}(t,e.precondition)),n}function zP(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Hr(i.updateTime):Hr(s);return o.isEqual(ge.min())&&(o=Hr(s)),new wP(o,i.transformResults||[])}(n,e))):[]}function UP(t,e){return{documents:[gI(t,e.path)]}}function BP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gI(t,i);const s=function(d){if(d.length!==0)return _I(Nr.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:_o(g.field),direction:HP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=rm(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:n,parent:i}}function jP(t){let e=LP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=vI(p);return g instanceof Nr&&GT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(N){return new Nl(Eo(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,vd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,T=p.values||[];return new Lc(T,g)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const g=!p.before,T=p.values||[];return new Lc(T,g)}(n.endAt)),aP(e,i,o,s,l,"F",u,d)}function $P(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Eo(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Eo(n.unaryFilter.field);return At.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Eo(n.unaryFilter.field);return At.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Eo(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return At.create(Eo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nr.create(n.compositeFilter.filters.map(r=>vI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function HP(t){return PP[t]}function WP(t){return DP[t]}function qP(t){return xP[t]}function _o(t){return{fieldPath:t.canonicalString()}}function Eo(t){return Kt.fromServerFormat(t.fieldPath)}function _I(t){return t instanceof At?function(n){if(n.op==="=="){if(Xv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NAN"}};if(Qv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NOT_NAN"}};if(Qv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(n.field),op:WP(n.op),value:n.value}}}(t):t instanceof Nr?function(n){const r=n.getFilters().map(i=>_I(i));return r.length===1?r[0]:{compositeFilter:{op:qP(n.op),filters:r}}}(t):me(54877,{filter:t})}function KP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ji{constructor(e,n,r,i,s=ge.min(),o=ge.min(),l=Yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GP{constructor(e){this.gt=e}}function QP(t){const e=jP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
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
 */class XP{constructor(){this.Dn=new YP}addToCollectionParentIndex(e,n){return this.Dn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ss.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class YP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new xt(Xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xt(Xe.comparator)).toArray()}}/**
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
 */const c_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wI=41943040;class Pn{static withCacheSize(e){return new Pn(e,Pn.DEFAULT_COLLECTION_PERCENTILE,Pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pn.DEFAULT_COLLECTION_PERCENTILE=10,Pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pn.DEFAULT=new Pn(wI,Pn.DEFAULT_COLLECTION_PERCENTILE,Pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pn.DISABLED=new Pn(-1,0,0);/**
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
 */class na{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new na(0)}static ur(){return new na(-1)}}/**
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
 */const d_="LruGarbageCollector",JP=1048576;function h_([t,e],[n,r]){const i=Ie(t,n);return i===0?Ie(e,r):i}class ZP{constructor(e){this.Tr=e,this.buffer=new xt(h_),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();h_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class e2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){J(d_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ha(n)?J(d_,"Ignoring IndexedDB error during garbage collection: ",n):await da(n)}await this.Rr(3e5)})}}class t2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(yd.ue);const r=new ZP(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(c_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),c_):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),yo()<=Ne.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function n2(t,e){return new t2(t,e)}/**
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
 */class r2{constructor(){this.changes=new oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class i2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class s2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&nl(r.mutation,i,Jn.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Re()){const i=Ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=za();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=vi();const o=tl(),l=function(){return tl()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof vs)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),nl(f.mutation,d,f.mutation.getFieldMask(),et.now())):o.set(d.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var p;return l.set(d,new i2(f,(p=o.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=tl();let i=new ut((o,l)=>o-l),s=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Jn.empty();f=l.applyToLocalView(d,f),r.set(u,f);const p=(i.get(l.batchId)||Re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,p=rI();f.forEach(g=>{if(!s.has(g)){const T=uI(n.get(g),r.get(g));T!==null&&p.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Ms());let l=kl,u=s;return o.next(d=>$.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Re())).next(f=>({batchId:l,changes:nI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=za();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const d=function(p,g){return new fa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,cn.newInvalidDocument(f)))});let l=za();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&nl(f.mutation,d,Jn.empty(),et.now()),wd(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class o2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return $.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Hr(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:QP(i.bundledQuery),readTime:Hr(i.readTime)}}(n)),$.resolve()}}/**
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
 */class a2{constructor(){this.overlays=new ut(le.comparator),this.kr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ms();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Ms(),s=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ut((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Ms(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Ms(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return $.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AP(n,r));let s=this.kr.get(n);s===void 0&&(s=Re(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
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
 */class l2{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class zp{constructor(){this.qr=new xt(Vt.Qr),this.$r=new xt(Vt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Vt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Vt(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new le(new Xe([])),r=new Vt(n,e),i=new Vt(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new le(new Xe([])),r=new Vt(n,e),i=new Vt(n,e+1);let s=Re();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Vt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Vt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return le.comparator(e.key,n.key)||Ie(e.Hr,n.Hr)}static Ur(e,n){return Ie(e.Hr,n.Hr)||le.comparator(e.key,n.key)}}/**
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
 */class u2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new xt(Vt.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Vt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Cp:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Vt(n,0),i=new Vt(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(Ie);return n.forEach(i=>{const s=new Vt(i,0),o=new Vt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),$.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const o=new Vt(new le(s),0);let l=new xt(Ie);return this.Yr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.Hr)),!0)},o),$.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return $.forEach(n.mutations,i=>{const s=new Vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Vt(n,0),i=this.Yr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class c2{constructor(e){this.ni=e,this.docs=function(){return new ut(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():cn.newInvalidDocument(n))}getEntries(e,n){let r=vi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():cn.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=vi();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||zR(FR(f),r)<=0||(i.has(f.key)||wd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){me(9500)}ri(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new d2(this)}getSize(e){return $.resolve(this.size)}}class d2 extends r2{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class h2{constructor(e){this.persistence=e,this.ii=new oo(n=>Pp(n),Dp),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.si=0,this.oi=new zp,this.targetCount=0,this._i=na.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),$.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new na(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.hr(n),$.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.oi.containsKey(n))}}/**
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
 */class TI{constructor(e,n){this.ai={},this.overlays={},this.ui=new yd(0),this.ci=!1,this.ci=!0,this.li=new l2,this.referenceDelegate=e(this),this.hi=new h2(this),this.indexManager=new XP,this.remoteDocumentCache=function(i){return new c2(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new GP(n),this.Ti=new o2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new a2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new u2(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new f2(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return $.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class f2 extends BR{constructor(e){super(),this.currentSequenceNumber=e}}class Up{constructor(e){this.persistence=e,this.Ai=new zp,this.Ri=null}static Vi(e){return new Up(e)}get mi(){if(this.Ri)return this.Ri;throw me(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,r=>{const i=le.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,ge.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return $.or([()=>$.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class zc{constructor(e,n){this.persistence=e,this.gi=new oo(r=>HR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=n2(this,n)}static Vi(e,n){return new zc(e,n)}Ii(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return $.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?$.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ge.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xu(e.data.value)),n}Sr(e,n,r){return $.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=Re(),i=Re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bp(e,n.fromCache,r,i)}}/**
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
 */class m2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class p2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return GA()?8:jR(hn())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new m2;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(yo()<=Ne.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",vo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(yo()<=Ne.DEBUG&&J("QueryEngine","Query:",vo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(yo()<=Ne.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",vo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$r(n))):$.resolve())}ps(e,n){if(e_(n))return $.resolve(null);let r=$r(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=$r(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Re(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(n,l);return this.Ds(n,d,o,u.readTime)?this.ps(e,nm(n,null,"F")):this.vs(e,d,n,u)}))})))}ys(e,n,r,i){return e_(n)||i.isEqual(ge.min())?$.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?$.resolve(null):(yo()<=Ne.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vo(n)),this.vs(e,o,n,VR(i,kl)).next(l=>l))})}bs(e,n){let r=new xt(eI(e));return n.forEach((i,s)=>{wd(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return yo()<=Ne.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",vo(n)),this.gs.getDocumentsMatchingQuery(e,n,ss.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const jp="LocalStore",g2=3e8;class y2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new ut(Ie),this.Ms=new oo(s=>Pp(s),Dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function v2(t,e,n,r){return new y2(t,e,n,r)}async function II(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Re();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Bs:d,removedBatchIds:o,addedBatchIds:l}))})})}function _2(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const p=d.batch,g=p.keys();let T=$.resolve();return g.forEach(N=>{T=T.next(()=>f.getEntry(u,N)).next(D=>{const F=d.docVersions.get(N);Fe(F!==null,48541),D.version.compareTo(F)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Re();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function SI(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function E2(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Yt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(D,F,k){return D.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=g2?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,T,f)&&l.push(n.hi.updateTargetData(s,T))});let u=vi(),d=Re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(w2(s,o,e.documentUpdates).next(f=>{u=f.Ls,d=f.ks})),!r.isEqual(ge.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.Fs=i,s))}function w2(t,e,n){let r=Re(),i=Re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=vi();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ge.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):J(jp,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function T2(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function I2(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new ji(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function am(t,e,n){const r=_e(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ha(o))throw o;J(jp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function f_(t,e,n){const r=_e(t);let i=ge.min(),s=Re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const p=_e(u),g=p.Ms.get(f);return g!==void 0?$.resolve(p.Fs.get(g)):p.hi.getTargetData(d,f)}(r,o,$r(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ge.min(),n?s:Re())).next(l=>(S2(r,uP(e),l),{documents:l,qs:s})))}function S2(t,e,n){let r=t.xs.get(e)||ge.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class m_{constructor(){this.activeTargetIds=pP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class k2{constructor(){this.Fo=new m_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new m_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A2{xo(e){}shutdown(){}}/**
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
 */const p_="ConnectivityMonitor";class g_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){J(p_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){J(p_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nu=null;function lm(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
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
 */const Nh="RestConnection",b2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class C2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Oc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=lm(),l=this.Go(e,n.toUriEncodedString());J(Nh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:d}=new URL(l),f=Ei(d);return this.jo(e,l,u,r,f).then(p=>(J(Nh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw is(Nh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ca}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=b2[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class N2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const on="WebChannelConnection";class R2 extends C2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=lm();return new Promise((l,u)=>{const d=new AT;d.setWithCredentials(!0),d.listenOnce(bT.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Qu.NO_ERROR:const p=d.getResponseJson();J(on,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Qu.TIMEOUT:J(on,`RPC '${e}' ${o} timed out`),u(new Y(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const g=d.getStatus();if(J(on,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const N=T==null?void 0:T.error;if(N&&N.status&&N.message){const D=function(k){const _=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(N.status);u(new Y(D,N.message))}else u(new Y(j.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new Y(j.UNAVAILABLE,"Connection failed."));break;default:me(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{J(on,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);J(on,`RPC '${e}' ${o} sending request:`,i),d.send(n,"POST",f,r,15)})}P_(e,n,r){const i=lm(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RT(),l=NT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");J(on,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let g=!1,T=!1;const N=new N2({Ho:F=>{T?J(on,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(g||(J(on,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),J(on,`RPC '${e}' stream ${i} sending:`,F),p.send(F))},Yo:()=>p.close()}),D=(F,k,_)=>{F.listen(k,A=>{try{_(A)}catch(L){setTimeout(()=>{throw L},0)}})};return D(p,Fa.EventType.OPEN,()=>{T||(J(on,`RPC '${e}' stream ${i} transport opened.`),N.s_())}),D(p,Fa.EventType.CLOSE,()=>{T||(T=!0,J(on,`RPC '${e}' stream ${i} transport closed`),N.__(),this.I_(p))}),D(p,Fa.EventType.ERROR,F=>{T||(T=!0,is(on,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),N.__(new Y(j.UNAVAILABLE,"The operation could not be completed")))}),D(p,Fa.EventType.MESSAGE,F=>{var k;if(!T){const _=F.data[0];Fe(!!_,16349);const A=_,L=(A==null?void 0:A.error)||((k=A[0])===null||k===void 0?void 0:k.error);if(L){J(on,`RPC '${e}' stream ${i} received error:`,L);const V=L.status;let B=function(w){const S=St[w];if(S!==void 0)return dI(S)}(V),E=L.message;B===void 0&&(B=j.INTERNAL,E="Unknown error status: "+V+" with message "+L.message),T=!0,N.__(new Y(B,E)),p.close()}else J(on,`RPC '${e}' stream ${i} received:`,_),N.a_(_)}}),D(l,CT.STAT_EVENT,F=>{F.stat===Qf.PROXY?J(on,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Qf.NOPROXY&&J(on,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.o_()},0),N}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Rh(){return typeof document<"u"?document:null}/**
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
 */function kd(t){return new OP(t,!0)}/**
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
 */class kI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const y_="PersistentStream";class AI{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new kI(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(yi(n.toString()),yi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new Y(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return J(y_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(J(y_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P2 extends AI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=VP(this.serializer,e),r=function(s){if(!("targetChange"in s))return ge.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Hr(o.readTime):ge.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=om(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=em(u)?{documents:UP(s,u)}:{query:BP(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=mI(s,o.resumeToken);const d=rm(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=Fc(s,o.snapshotVersion.toTimestamp());const d=rm(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=$P(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=om(this.serializer),n.removeTarget=e,this.k_(n)}}class D2 extends AI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=zP(e.writeResults,e.commitTime),r=Hr(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=om(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FP(this.serializer,r))};this.k_(n)}}/**
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
 */class x2{}class O2 extends x2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,im(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(j.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,im(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(j.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class M2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(yi(n),this._a=!1):J("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Xs="RemoteStore";class L2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ao(this)&&(J(Xs,"Restarting streams for network reachability change."),await async function(u){const d=_e(u);d.Ia.add(4),await Ql(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ad(d)}(this))})}),this.Aa=new M2(r,i)}}async function Ad(t){if(ao(t))for(const e of t.da)await e(!0)}async function Ql(t){for(const e of t.da)await e(!1)}function bI(t,e){const n=_e(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),qp(n)?Wp(n):ma(n).x_()&&Hp(n,e))}function $p(t,e){const n=_e(t),r=ma(n);n.Ta.delete(e),r.x_()&&CI(n,e),n.Ta.size===0&&(r.x_()?r.B_():ao(n)&&n.Aa.set("Unknown"))}function Hp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ma(t).H_(e)}function CI(t,e){t.Ra.$e(e),ma(t).Y_(e)}function Wp(t){t.Ra=new RP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ma(t).start(),t.Aa.aa()}function qp(t){return ao(t)&&!ma(t).M_()&&t.Ta.size>0}function ao(t){return _e(t).Ia.size===0}function NI(t){t.Ra=void 0}async function V2(t){t.Aa.set("Online")}async function F2(t){t.Ta.forEach((e,n)=>{Hp(t,e)})}async function z2(t,e){NI(t),qp(t)?(t.Aa.la(e),Wp(t)):t.Aa.set("Unknown")}async function U2(t,e,n){if(t.Aa.set("Online"),e instanceof fI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){J(Xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uc(t,r)}else if(e instanceof Zu?t.Ra.Ye(e):e instanceof hI?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ge.min()))try{const r=await SI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(d);f&&s.Ta.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(Yt.EMPTY_BYTE_STRING,f.snapshotVersion)),CI(s,u);const p=new ji(f.target,u,d,f.sequenceNumber);Hp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){J(Xs,"Failed to raise snapshot:",r),await Uc(t,r)}}async function Uc(t,e,n){if(!ha(e))throw e;t.Ia.add(1),await Ql(t),t.Aa.set("Offline"),n||(n=()=>SI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(Xs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ad(t)})}function RI(t,e){return e().catch(n=>Uc(t,n,e))}async function bd(t){const e=_e(t),n=us(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Cp;for(;B2(e);)try{const i=await T2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,j2(e,i)}catch(i){await Uc(e,i)}PI(e)&&DI(e)}function B2(t){return ao(t)&&t.Pa.length<10}function j2(t,e){t.Pa.push(e);const n=us(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function PI(t){return ao(t)&&!us(t).M_()&&t.Pa.length>0}function DI(t){us(t).start()}async function $2(t){us(t).na()}async function H2(t){const e=us(t);for(const n of t.Pa)e.X_(n.mutations)}async function W2(t,e,n){const r=t.Pa.shift(),i=Lp.from(r,e,n);await RI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bd(t)}async function q2(t,e){e&&us(t).Z_&&await async function(r,i){if(function(o){return CP(o)&&o!==j.ABORTED}(i.code)){const s=r.Pa.shift();us(r).N_(),await RI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bd(r)}}(t,e),PI(t)&&DI(t)}async function v_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),J(Xs,"RemoteStore received new credentials");const r=ao(n);n.Ia.add(3),await Ql(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ad(n)}async function K2(t,e){const n=_e(t);e?(n.Ia.delete(2),await Ad(n)):e||(n.Ia.add(2),await Ql(n),n.Aa.set("Unknown"))}function ma(t){return t.Va||(t.Va=function(n,r,i){const s=_e(n);return s.ia(),new P2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:V2.bind(null,t),e_:F2.bind(null,t),n_:z2.bind(null,t),J_:U2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),qp(t)?Wp(t):t.Aa.set("Unknown")):(await t.Va.stop(),NI(t))})),t.Va}function us(t){return t.ma||(t.ma=function(n,r,i){const s=_e(n);return s.ia(),new D2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:$2.bind(null,t),n_:q2.bind(null,t),ea:H2.bind(null,t),ta:W2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await bd(t)):(await t.ma.stop(),t.Pa.length>0&&(J(Xs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class Kp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Kp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(yi("AsyncQueue",`${e}: ${t}`),ha(t))return new Y(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $o{static emptySet(e){return new $o(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=za(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class __{constructor(){this.fa=new ut(le.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):me(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ra{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ra(e,n,$o.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class G2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Q2{constructor(){this.queries=E_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=_e(n),s=i.queries;i.queries=E_(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new Y(j.ABORTED,"Firestore shutting down"))}}function E_(){return new oo(t=>ZT(t),Ed)}async function X2(t,e){const n=_e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new G2,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Gp(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Qp(n)}async function Y2(t,e){const n=_e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function J2(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Qp(n)}function Z2(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Qp(t){t.Da.forEach(e=>{e.next()})}var um,w_;(w_=um||(um={})).Fa="default",w_.Cache="cache";class eD{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ra(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ra.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==um.Cache}}/**
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
 */class xI{constructor(e){this.key=e}}class OI{constructor(e){this.key=e}}class tD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Re(),this.mutatedKeys=Re(),this.Xa=eI(e),this.eu=new $o(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new __,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),T=wd(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),D=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let F=!1;g&&T?g.data.isEqual(T.data)?N!==D&&(r.track({type:3,doc:T}),F=!0):this.iu(g,T)||(r.track({type:2,doc:T}),F=!0,(u&&this.Xa(T,u)>0||d&&this.Xa(T,d)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),F=!0):g&&!T&&(r.track({type:1,doc:g}),F=!0,(u||d)&&(l=!0)),F&&(T?(o=o.add(T),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(T,N){const D=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{At:F})}};return D(T)-D(N)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,d=u!==this.Ya;return this.Ya=u,o.length!==0||d?{snapshot:new ra(this.query,e.eu,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new __,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Re(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new OI(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new xI(r))}),n}uu(e){this.Ha=e.qs,this.Za=Re();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ra.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xp="SyncEngine";class nD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rD{constructor(e){this.key=e,this.lu=!1}}class iD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new oo(l=>ZT(l),Ed),this.Tu=new Map,this.Iu=new Set,this.du=new ut(le.comparator),this.Eu=new Map,this.Au=new zp,this.Ru={},this.Vu=new Map,this.mu=na.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function sD(t,e,n=!0){const r=UI(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await MI(r,e,n,!0),i}async function oD(t,e){const n=UI(t);await MI(n,e,!0,!1)}async function MI(t,e,n,r){const i=await I2(t.localStore,$r(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await aD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&bI(t.remoteStore,i),l}async function aD(t,e,n,r,i){t.gu=(p,g,T)=>async function(D,F,k,_){let A=F.view.nu(k);A.Ds&&(A=await f_(D.localStore,F.query,!1).then(({documents:E})=>F.view.nu(E,A)));const L=_&&_.targetChanges.get(F.targetId),V=_&&_.targetMismatches.get(F.targetId)!=null,B=F.view.applyChanges(A,D.isPrimaryClient,L,V);return I_(D,F.targetId,B._u),B.snapshot}(t,p,g,T);const s=await f_(t.localStore,e,!0),o=new tD(e,s.qs),l=o.nu(s.documents),u=Gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);I_(t,n,d._u);const f=new nD(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),d.snapshot}async function lD(t,e,n){const r=_e(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Ed(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await am(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$p(r.remoteStore,i.targetId),cm(r,i.targetId)}).catch(da)):(cm(r,i.targetId),await am(r.localStore,i.targetId,!0))}async function uD(t,e){const n=_e(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$p(n.remoteStore,r.targetId))}async function cD(t,e,n){const r=yD(t);try{const i=await function(o,l){const u=_e(o),d=et.now(),f=l.reduce((T,N)=>T.add(N.key),Re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let N=vi(),D=Re();return u.Os.getEntries(T,f).next(F=>{N=F,N.forEach((k,_)=>{_.isValidDocument()||(D=D.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,N)).next(F=>{p=F;const k=[];for(const _ of l){const A=IP(_,p.get(_.key).overlayedDocument);A!=null&&k.push(new vs(_.key,A,WT(A.value.mapValue),hr.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,k,l)}).next(F=>{g=F;const k=F.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(T,F.batchId,k)})}).then(()=>({batchId:g.batchId,changes:nI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ru[o.currentUser.toKey()];d||(d=new ut(Ie)),d=d.insert(l,u),o.Ru[o.currentUser.toKey()]=d}(r,i.batchId,n),await Xl(r,i.changes),await bd(r.remoteStore)}catch(i){const s=Gp(i,"Failed to persist write");n.reject(s)}}async function LI(t,e){const n=_e(t);try{const r=await E2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Fe(o.lu,14607):i.removedDocuments.size>0&&(Fe(o.lu,42227),o.lu=!1))}),await Xl(n,r,e)}catch(r){await da(r)}}function T_(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=_e(o);u.onlineState=l;let d=!1;u.queries.forEach((f,p)=>{for(const g of p.wa)g.va(l)&&(d=!0)}),d&&Qp(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dD(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new ut(le.comparator);o=o.insert(s,cn.newNoDocument(s,ge.min()));const l=Re().add(s),u=new Sd(ge.min(),new Map,new ut(Ie),o,l);await LI(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Yp(r)}else await am(r.localStore,e,!1).then(()=>cm(r,e,n)).catch(da)}async function hD(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await _2(n.localStore,e);FI(n,r,null),VI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xl(n,i)}catch(i){await da(i)}}async function fD(t,e,n){const r=_e(t);try{const i=await function(o,l){const u=_e(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(Fe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);FI(r,e,n),VI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xl(r,i)}catch(i){await da(i)}}function VI(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function FI(t,e,n){const r=_e(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function cm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||zI(t,r)})}function zI(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&($p(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Yp(t))}function I_(t,e,n){for(const r of n)r instanceof xI?(t.Au.addReference(r.key,e),mD(t,r)):r instanceof OI?(J(Xp,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||zI(t,r.key)):me(19791,{yu:r})}function mD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(J(Xp,"New document in limbo: "+n),t.Iu.add(r),Yp(t))}function Yp(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new le(Xe.fromString(e)),r=t.mu.next();t.Eu.set(r,new rD(n)),t.du=t.du.insert(n,r),bI(t.remoteStore,new ji($r(xp(n.path)),r,"TargetPurposeLimboResolution",yd.ue))}}async function Xl(t,e,n){const r=_e(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);const p=Bp.Es(u.targetId,d);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,d){const f=_e(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(d,g=>$.forEach(g.Is,T=>f.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>$.forEach(g.ds,T=>f.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!ha(p))throw p;J(jp,"Failed to update sequence numbers: "+p)}for(const p of d){const g=p.targetId;if(!p.fromCache){const T=f.Fs.get(g),N=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(g,D)}}}(r.localStore,s))}async function pD(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){J(Xp,"User change. New user:",e.toKey());const r=await II(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new Y(j.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xl(n,r.Bs)}}function gD(t,e){const n=_e(t),r=n.Eu.get(e);if(r&&r.lu)return Re().add(r.key);{let i=Re();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function UI(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dD.bind(null,e),e.hu.J_=J2.bind(null,e.eventManager),e.hu.pu=Z2.bind(null,e.eventManager),e}function yD(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fD.bind(null,e),e}class Bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return v2(this.persistence,new p2,e.initialUser,this.serializer)}Du(e){return new TI(Up.Vi,this.serializer)}bu(e){return new k2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bc.provider={build:()=>new Bc};class vD extends Bc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Fe(this.persistence.referenceDelegate instanceof zc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new e2(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Pn.withCacheSize(this.cacheSizeBytes):Pn.DEFAULT;return new TI(r=>zc.Vi(r,n),this.serializer)}}class dm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pD.bind(null,this.syncEngine),await K2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Q2}()}createDatastore(e){const n=kd(e.databaseInfo.databaseId),r=function(s){return new R2(s)}(e.databaseInfo);return function(s,o,l,u){return new O2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new L2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>T_(this.syncEngine,n,0),function(){return g_.C()?new g_:new A2}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const p=new iD(i,s,o,l,u,d);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=_e(i);J(Xs,"RemoteStore shutting down."),s.Ia.add(5),await Ql(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dm.provider={build:()=>new dm};/**
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
 */class _D{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):yi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const cs="FirestoreClient";class ED{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=an.UNAUTHENTICATED,this.clientId=bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{J(cs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(cs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),J(cs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await II(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{is("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{J("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{is("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function S_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wD(t);J(cs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>v_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>v_(e.remoteStore,i)),t._onlineComponents=e}async function wD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(cs,"Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Bc)}}else J(cs,"Using default OfflineComponentProvider"),await Ph(t,new vD(void 0));return t._offlineComponents}async function BI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(cs,"Using user provided OnlineComponentProvider"),await S_(t,t._uninitializedComponentsProvider._online)):(J(cs,"Using default OnlineComponentProvider"),await S_(t,new dm))),t._onlineComponents}function TD(t){return BI(t).then(e=>e.syncEngine)}async function k_(t){const e=await BI(t),n=e.eventManager;return n.onListen=sD.bind(null,e.syncEngine),n.onUnlisten=lD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uD.bind(null,e.syncEngine),n}/**
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
 */function jI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const A_=new Map;/**
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
 */const $I="firestore.googleapis.com",b_=!0;class C_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$I,this.ssl=b_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:b_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<JP)throw new Y(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bR;switch(r.type){case"firstParty":return new PR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A_.get(n);r&&(J("ComponentProvider","Removing Datastore"),A_.delete(n),r.terminate())}(this),Promise.resolve()}}function ID(t,e,n,r={}){var i;t=jr(t,Cd);const s=Ei(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(ld(`https://${u}`),ud("Firestore",!0)),o.host!==$I&&o.host!==u&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Ks(d,l)&&(t._setSettings(d),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=an.MOCK_USER;else{f=F0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new an(g)}t._authCredentials=new CR(new DT(f,p))}}/**
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
 */class lo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ql(n,wt._jsonSchema))return new wt(e,r||null,new le(Xe.fromString(n.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:bt("string",wt._jsonSchemaVersion),referencePath:bt("string")};class es extends lo{constructor(e,n,r){super(e,n,xp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new le(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function ln(t,e,...n){if(t=je(t),OT("collection","path",e),t instanceof Cd){const r=Xe.fromString(e,...n);return Uv(r),new es(t,null,r)}{if(!(t instanceof wt||t instanceof es))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return Uv(r),new es(t.firestore,null,r)}}function Ue(t,e,...n){if(t=je(t),arguments.length===1&&(e=bp.newId()),OT("doc","path",e),t instanceof Cd){const r=Xe.fromString(e,...n);return zv(r),new wt(t,null,new le(r))}{if(!(t instanceof wt||t instanceof es))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return zv(r),new wt(t.firestore,t instanceof es?t.converter:null,new le(r))}}/**
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
 */const N_="AsyncQueue";class R_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new kI(this,"async_queue_retry"),this.oc=()=>{const r=Rh();r&&J(N_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new zs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ha(e))throw e;J(N_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,yi("INTERNAL UNHANDLED ERROR: ",P_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Kp.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&me(47125,{hc:P_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function P_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function D_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ys extends Cd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new R_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R_(e),this._firestoreClient=void 0,await e}}}function SD(t,e){const n=typeof t=="object"?t:jl(),r=typeof t=="string"?t:Oc,i=ps(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fp("firestore");s&&ID(i,...s)}return i}function HI(t){if(t._terminated)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kD(t),t._firestoreClient}function kD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new KR(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jI(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new ED(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(Yt.fromBase64String(e))}catch(n){throw new Y(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ur._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ql(e,ur._jsonSchema))return ur.fromBase64String(e.bytes)}}ur._jsonSchemaVersion="firestore/bytes/1.0",ur._jsonSchema={type:bt("string",ur._jsonSchemaVersion),bytes:bt("string")};/**
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
 */class Nd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Rd{constructor(e){this._methodName=e}}/**
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
 */class Wr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wr._jsonSchemaVersion}}static fromJSON(e){if(ql(e,Wr._jsonSchema))return new Wr(e.latitude,e.longitude)}}Wr._jsonSchemaVersion="firestore/geoPoint/1.0",Wr._jsonSchema={type:bt("string",Wr._jsonSchemaVersion),latitude:bt("number"),longitude:bt("number")};/**
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
 */class qr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ql(e,qr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qr(e.vectorValues);throw new Y(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qr._jsonSchemaVersion="firestore/vectorValue/1.0",qr._jsonSchema={type:bt("string",qr._jsonSchemaVersion),vectorValues:bt("object")};/**
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
 */const AD=/^__.*__$/;class bD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class WI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{Ec:t})}}class Jp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return jc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(qI(this.Ec)&&AD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class CD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kd(e)}Dc(e,n,r,i=!1){return new Jp({Ec:e,methodName:n,bc:r,path:Kt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pd(t){const e=t._freezeSettings(),n=kd(t._databaseId);return new CD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KI(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);eg("Data must be an object, but it was:",o,r);const l=GI(r,o);let u,d;if(s.merge)u=new Jn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=hm(e,p,n);if(!o.contains(g))throw new Y(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);XI(f,g)||f.push(g)}u=new Jn(f),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new bD(new xn(l),u,d)}class Dd extends Rd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}class Zp extends Rd{_toFieldTransform(e){return new _P(e.path,new Rl)}isEqual(e){return e instanceof Zp}}function ND(t,e,n,r){const i=t.Dc(1,e,n);eg("Data must be an object, but it was:",i,r);const s=[],o=xn.empty();ys(r,(u,d)=>{const f=tg(e,u,n);d=je(d);const p=i.gc(f);if(d instanceof Dd)s.push(f);else{const g=Yl(d,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Jn(s);return new WI(o,l,i.fieldTransforms)}function RD(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[hm(e,r,n)],u=[i];if(s.length%2!=0)throw new Y(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(hm(e,s[g])),u.push(s[g+1]);const d=[],f=xn.empty();for(let g=l.length-1;g>=0;--g)if(!XI(d,l[g])){const T=l[g];let N=u[g];N=je(N);const D=o.gc(T);if(N instanceof Dd)d.push(T);else{const F=Yl(N,D);F!=null&&(d.push(T),f.set(T,F))}}const p=new Jn(d);return new WI(f,p,o.fieldTransforms)}function PD(t,e,n,r=!1){return Yl(n,t.Dc(r?4:3,e))}function Yl(t,e){if(QI(t=je(t)))return eg("Unsupported field value:",e,t),GI(t,e);if(t instanceof Rd)return function(r,i){if(!qI(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Yl(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=et.fromDate(r);return{timestampValue:Fc(i.serializer,s)}}if(r instanceof et){const s=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fc(i.serializer,s)}}if(r instanceof Wr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ur)return{bytesValue:mI(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qr)return function(o,l){return{mapValue:{fields:{[$T]:{stringValue:HT},[Mc]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Op(l.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${gd(r)}`)}(t,e)}function GI(t,e){const n={};return VT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=Yl(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function QI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Wr||t instanceof ur||t instanceof wt||t instanceof Rd||t instanceof qr)}function eg(t,e,n){if(!QI(n)||!MT(n)){const r=gd(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function hm(t,e,n){if((e=je(e))instanceof Nd)return e._internalPath;if(typeof e=="string")return tg(t,e);throw jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const DD=new RegExp("[~\\*/\\[\\]]");function tg(t,e,n){if(e.search(DD)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nd(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Y(j.INVALID_ARGUMENT,l+t+u)}function XI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class YI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ng("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xD extends YI{data(){return super.data()}}function ng(t,e){return typeof e=="string"?tg(t,e):e instanceof Nd?e._internalPath:e._delegate._internalPath}/**
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
 */function OD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rg{}class JI extends rg{}function bi(t,e,...n){let r=[];e instanceof rg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof sg).length,l=s.filter(u=>u instanceof ig).length;if(o>1||o>0&&l>0)throw new Y(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ig extends JI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ig(e,n,r)}_apply(e){const n=this._parse(e);return ZI(e._query,n),new lo(e.firestore,e.converter,tm(e._query,n))}_parse(e){const n=Pd(e.firestore);return function(s,o,l,u,d,f,p){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){O_(p,f);const N=[];for(const D of p)N.push(x_(u,s,D));g={arrayValue:{values:N}}}else g=x_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||O_(p,f),g=PD(l,o,p,f==="in"||f==="not-in");return At.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class sg extends rg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)ZI(o,u),o=tm(o,u)}(e._query,n),new lo(e.firestore,e.converter,tm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class og extends JI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new og(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Y(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nl(s,o)}(e._query,this._field,this._direction);return new lo(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fa(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ci(t,e="asc"){const n=e,r=ng("orderBy",t);return og._create(r,n)}function x_(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new Y(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JT(e)&&n.indexOf("/")!==-1)throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Xe.fromString(n));if(!le.isDocumentKey(r))throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gv(t,new le(r))}if(n instanceof wt)return Gv(t,n._key);throw new Y(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(n)}.`)}function O_(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MD{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Mc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>_t(o.doubleValue));return new qr(s)}convertGeoPoint(e){return new Wr(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_d(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const n=os(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Xe.fromString(e);Fe(EI(r),9688,{name:e});const i=new bl(r.get(1),r.get(3)),s=new le(r.popFirst(5));return i.isEqual(n)||yi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function e1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Us extends YI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ng("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Us._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Us._jsonSchemaVersion="firestore/documentSnapshot/1.0",Us._jsonSchema={type:bt("string",Us._jsonSchemaVersion),bundleSource:bt("string","DocumentSnapshot"),bundleName:bt("string"),bundle:bt("string")};class ec extends Us{data(e={}){return super.data(e)}}class Ho{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ba(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ec(this._firestore,this._userDataWriter,r.key,r,new Ba(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ec(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ba(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ec(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ba(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:LD(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ho._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}Ho._jsonSchemaVersion="firestore/querySnapshot/1.0",Ho._jsonSchema={type:bt("string",Ho._jsonSchemaVersion),bundleSource:bt("string","QuerySnapshot"),bundleName:bt("string"),bundle:bt("string")};class t1 extends MD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function fm(t,e,n){t=jr(t,wt);const r=jr(t.firestore,Ys),i=e1(t.converter,e,n);return xd(r,[KI(Pd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hr.none())])}function zt(t,e,n,...r){t=jr(t,wt);const i=jr(t.firestore,Ys),s=Pd(i);let o;return o=typeof(e=je(e))=="string"||e instanceof Nd?RD(s,"updateDoc",t._key,e,n,r):ND(s,"updateDoc",t._key,e),xd(i,[o.toMutation(t._key,hr.exists(!0))])}function Js(t){return xd(jr(t.firestore,Ys),[new Mp(t._key,hr.none())])}function ts(t,e){const n=jr(t.firestore,Ys),r=Ue(t),i=e1(t.converter,e);return xd(n,[KI(Pd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hr.exists(!1))]).then(()=>r)}function Ni(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||D_(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(D_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,d,f;if(t instanceof wt)d=jr(t.firestore,Ys),f=xp(t._key.path),u={next:p=>{e[o]&&e[o](VD(d,t,p))},error:e[o+1],complete:e[o+2]};else{const p=jr(t,lo);d=jr(p.firestore,Ys),f=p._query;const g=new t1(d);u={next:T=>{e[o]&&e[o](new Ho(d,g,p,T))},error:e[o+1],complete:e[o+2]},OD(t._query)}return function(g,T,N,D){const F=new _D(D),k=new eD(T,F,N);return g.asyncQueue.enqueueAndForget(async()=>X2(await k_(g),k)),()=>{F.Ou(),g.asyncQueue.enqueueAndForget(async()=>Y2(await k_(g),k))}}(HI(d),f,l,u)}function xd(t,e){return function(r,i){const s=new zs;return r.asyncQueue.enqueueAndForget(async()=>cD(await TD(r),i,s)),s.promise}(HI(t),e)}function VD(t,e,n){const r=n.docs.get(e._key),i=new t1(t);return new Us(t,i,e._key,r,new Ba(n.hasPendingWrites,n.fromCache),e.converter)}function FD(){return new Zp("serverTimestamp")}(function(e,n=!0){(function(i){ca=i})(io),Un(new En("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ys(new NR(r.getProvider("auth-internal")),new DR(o,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Bt(Ov,Mv,e),Bt(Ov,Mv,"esm2017")})();const n1="@firebase/installations",ag="0.6.18";/**
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
 */const r1=1e4,i1=`w:${ag}`,s1="FIS_v2",zD="https://firebaseinstallations.googleapis.com/v1",UD=60*60*1e3,BD="installations",jD="Installations";/**
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
 */const $D={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zs=new ms(BD,jD,$D);function o1(t){return t instanceof ir&&t.code.includes("request-failed")}/**
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
 */function a1({projectId:t}){return`${zD}/projects/${t}/installations`}function l1(t){return{token:t.token,requestStatus:2,expiresIn:WD(t.expiresIn),creationTime:Date.now()}}async function u1(t,e){const r=(await e.json()).error;return Zs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function c1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function HD(t,{refreshToken:e}){const n=c1(t);return n.append("Authorization",qD(e)),n}async function d1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function WD(t){return Number(t.replace("s","000"))}function qD(t){return`${s1} ${t}`}/**
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
 */async function KD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=a1(t),i=c1(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:s1,appId:t.appId,sdkVersion:i1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await d1(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:l1(d.authToken)}}else throw await u1("Create Installation",u)}/**
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
 */function h1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function GD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const QD=/^[cdef][\w-]{21}$/,mm="";function XD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=YD(t);return QD.test(n)?n:mm}catch{return mm}}function YD(t){return GD(t).substr(0,22)}/**
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
 */function Od(t){return`${t.appName}!${t.appId}`}/**
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
 */const f1=new Map;function m1(t,e){const n=Od(t);p1(n,e),JD(n,e)}function p1(t,e){const n=f1.get(t);if(n)for(const r of n)r(e)}function JD(t,e){const n=ZD();n&&n.postMessage({key:t,fid:e}),ex()}let Ls=null;function ZD(){return!Ls&&"BroadcastChannel"in self&&(Ls=new BroadcastChannel("[Firebase] FID Change"),Ls.onmessage=t=>{p1(t.data.key,t.data.fid)}),Ls}function ex(){f1.size===0&&Ls&&(Ls.close(),Ls=null)}/**
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
 */const tx="firebase-installations-database",nx=1,eo="firebase-installations-store";let Dh=null;function lg(){return Dh||(Dh=dd(tx,nx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eo)}}})),Dh}async function $c(t,e){const n=Od(t),i=(await lg()).transaction(eo,"readwrite"),s=i.objectStore(eo),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&m1(t,e.fid),e}async function g1(t){const e=Od(t),r=(await lg()).transaction(eo,"readwrite");await r.objectStore(eo).delete(e),await r.done}async function Md(t,e){const n=Od(t),i=(await lg()).transaction(eo,"readwrite"),s=i.objectStore(eo),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&m1(t,l.fid),l}/**
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
 */async function ug(t){let e;const n=await Md(t.appConfig,r=>{const i=rx(r),s=ix(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===mm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rx(t){const e=t||{fid:XD(),registrationStatus:0};return y1(e)}function ix(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ox(t)}:{installationEntry:e}}async function sx(t,e){try{const n=await KD(t,e);return $c(t.appConfig,n)}catch(n){throw o1(n)&&n.customData.serverCode===409?await g1(t.appConfig):await $c(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ox(t){let e=await M_(t.appConfig);for(;e.registrationStatus===1;)await h1(100),e=await M_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ug(t);return r||n}return e}function M_(t){return Md(t,e=>{if(!e)throw Zs.create("installation-not-found");return y1(e)})}function y1(t){return ax(t)?{fid:t.fid,registrationStatus:0}:t}function ax(t){return t.registrationStatus===1&&t.registrationTime+r1<Date.now()}/**
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
 */async function lx({appConfig:t,heartbeatServiceProvider:e},n){const r=ux(t,n),i=HD(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:i1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await d1(()=>fetch(r,l));if(u.ok){const d=await u.json();return l1(d)}else throw await u1("Generate Auth Token",u)}function ux(t,{fid:e}){return`${a1(t)}/${e}/authTokens:generate`}/**
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
 */async function cg(t,e=!1){let n;const r=await Md(t.appConfig,s=>{if(!v1(s))throw Zs.create("not-registered");const o=s.authToken;if(!e&&hx(o))return s;if(o.requestStatus===1)return n=cx(t,e),s;{if(!navigator.onLine)throw Zs.create("app-offline");const l=mx(s);return n=dx(t,l),l}});return n?await n:r.authToken}async function cx(t,e){let n=await L_(t.appConfig);for(;n.authToken.requestStatus===1;)await h1(100),n=await L_(t.appConfig);const r=n.authToken;return r.requestStatus===0?cg(t,e):r}function L_(t){return Md(t,e=>{if(!v1(e))throw Zs.create("not-registered");const n=e.authToken;return px(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dx(t,e){try{const n=await lx(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $c(t.appConfig,r),n}catch(n){if(o1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await g1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $c(t.appConfig,r)}throw n}}function v1(t){return t!==void 0&&t.registrationStatus===2}function hx(t){return t.requestStatus===2&&!fx(t)}function fx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+UD}function mx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function px(t){return t.requestStatus===1&&t.requestTime+r1<Date.now()}/**
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
 */async function gx(t){const e=t,{installationEntry:n,registrationPromise:r}=await ug(e);return r?r.catch(console.error):cg(e).catch(console.error),n.fid}/**
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
 */async function yx(t,e=!1){const n=t;return await vx(n),(await cg(n,e)).token}async function vx(t){const{registrationPromise:e}=await ug(t);e&&await e}/**
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
 */function _x(t){if(!t||!t.options)throw xh("App Configuration");if(!t.name)throw xh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xh(t){return Zs.create("missing-app-config-values",{valueName:t})}/**
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
 */const _1="installations",Ex="installations-internal",wx=t=>{const e=t.getProvider("app").getImmediate(),n=_x(e),r=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Tx=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e,_1).getImmediate();return{getId:()=>gx(n),getToken:i=>yx(n,i)}};function Ix(){Un(new En(_1,wx,"PUBLIC")),Un(new En(Ex,Tx,"PRIVATE"))}Ix();Bt(n1,ag);Bt(n1,ag,"esm2017");/**
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
 */const Sx="/firebase-messaging-sw.js",kx="/firebase-cloud-messaging-push-scope",E1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ax="https://fcmregistrations.googleapis.com/v1",w1="google.c.a.c_id",bx="google.c.a.c_l",Cx="google.c.a.ts",Nx="google.c.a.e",V_=1e4;var F_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(F_||(F_={}));/**
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
 */var xl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(xl||(xl={}));/**
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
 */function ri(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Rx(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Oh="fcm_token_details_db",Px=5,z_="fcm_token_object_Store";async function Dx(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Oh))return null;let e=null;return(await dd(Oh,Px,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(z_))return;const u=o.objectStore(z_),d=await u.index("fcmSenderId").get(t);if(await u.clear(),!!d){if(i===2){const f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:ri(f.vapidKey)}}}else if(i===3){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:ri(f.auth),p256dh:ri(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:ri(f.vapidKey)}}}else if(i===4){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:ri(f.auth),p256dh:ri(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:ri(f.vapidKey)}}}}}})).close(),await Ih(Oh),await Ih("fcm_vapid_details_db"),await Ih("undefined"),xx(e)?e:null}function xx(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Ox="firebase-messaging-database",Mx=1,Ol="firebase-messaging-store";let Mh=null;function T1(){return Mh||(Mh=dd(Ox,Mx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ol)}}})),Mh}async function Lx(t){const e=I1(t),r=await(await T1()).transaction(Ol).objectStore(Ol).get(e);if(r)return r;{const i=await Dx(t.appConfig.senderId);if(i)return await dg(t,i),i}}async function dg(t,e){const n=I1(t),i=(await T1()).transaction(Ol,"readwrite");return await i.objectStore(Ol).put(e,n),await i.done,e}function I1({appConfig:t}){return t.appId}/**
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
 */const Vx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_n=new ms("messaging","Messaging",Vx);/**
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
 */async function Fx(t,e){const n=await fg(t),r=S1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(hg(t.appConfig),i)).json()}catch(o){throw _n.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _n.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw _n.create("token-subscribe-no-token");return s.token}async function zx(t,e){const n=await fg(t),r=S1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${hg(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw _n.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _n.create("token-update-failed",{errorInfo:o})}if(!s.token)throw _n.create("token-update-no-token");return s.token}async function Ux(t,e){const r={method:"DELETE",headers:await fg(t)};try{const s=await(await fetch(`${hg(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw _n.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw _n.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function hg({projectId:t}){return`${Ax}/projects/${t}/registrations`}async function fg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function S1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==E1&&(i.web.applicationPubKey=r),i}/**
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
 */const Bx=7*24*60*60*1e3;async function jx(t){const e=await Hx(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ri(e.getKey("auth")),p256dh:ri(e.getKey("p256dh"))},r=await Lx(t.firebaseDependencies);if(r){if(Wx(r.subscriptionOptions,n))return Date.now()>=r.createTime+Bx?$x(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ux(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return U_(t.firebaseDependencies,n)}else return U_(t.firebaseDependencies,n)}async function $x(t,e){try{const n=await zx(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await dg(t.firebaseDependencies,r),n}catch(n){throw n}}async function U_(t,e){const r={token:await Fx(t,e),createTime:Date.now(),subscriptionOptions:e};return await dg(t,r),r.token}async function Hx(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Rx(e)})}function Wx(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function B_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return qx(e,t),Kx(e,t),Gx(e,t),e}function qx(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function Kx(t,e){e.data&&(t.data=e.data)}function Gx(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function Qx(t){return typeof t=="object"&&!!t&&w1 in t}/**
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
 */function Xx(t){if(!t||!t.options)throw Lh("App Configuration Object");if(!t.name)throw Lh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Lh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Lh(t){return _n.create("missing-app-config-values",{valueName:t})}/**
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
 */class Yx{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Xx(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Jx(t){try{t.swRegistration=await navigator.serviceWorker.register(Sx,{scope:kx}),t.swRegistration.update().catch(()=>{}),await Zx(t.swRegistration)}catch(e){throw _n.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Zx(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${V_} ms`)),V_),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)===null||o===void 0?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function eO(t,e){if(!e&&!t.swRegistration&&await Jx(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw _n.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function tO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=E1)}/**
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
 */async function k1(t,e){if(!navigator)throw _n.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _n.create("permission-blocked");return await tO(t,e==null?void 0:e.vapidKey),await eO(t,e==null?void 0:e.serviceWorkerRegistration),jx(t)}/**
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
 */async function nO(t,e,n){const r=rO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[w1],message_name:n[bx],message_time:n[Cx],message_device_time:Math.floor(Date.now()/1e3)})}function rO(t){switch(t){case xl.NOTIFICATION_CLICKED:return"notification_open";case xl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function iO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===xl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(B_(n)):t.onMessageHandler.next(B_(n)));const r=n.data;Qx(r)&&r[Nx]==="1"&&await nO(t,n.messageType,r)}const j_="@firebase/messaging",$_="0.12.22";/**
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
 */const sO=t=>{const e=new Yx(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>iO(e,n)),e},oO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>k1(e,r)}};function aO(){Un(new En("messaging",sO,"PUBLIC")),Un(new En("messaging-internal",oO,"PRIVATE")),Bt(j_,$_),Bt(j_,$_,"esm2017")}/**
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
 */async function A1(){try{await pp()}catch{return!1}return typeof window<"u"&&mp()&&U0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function lO(t=jl()){return A1().then(e=>{if(!e)throw _n.create("unsupported-browser")},e=>{throw _n.create("indexed-db-unsupported")}),ps(je(t),"messaging").getImmediate()}async function uO(t,e){return t=je(t),k1(t,e)}aO();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b1=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=M.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>M.createElement("svg",{ref:u,...dO,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:b1("lucide",i),...l},[...o.map(([d,f])=>M.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const n=M.forwardRef(({className:r,...i},s)=>M.createElement(hO,{ref:s,iconNode:e,className:b1(`lucide-${cO(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=nt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=nt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=nt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=nt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=nt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=nt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=nt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=nt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=nt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=nt("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=nt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=nt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=nt("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=nt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=nt("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=nt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=nt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=nt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=nt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=nt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=nt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=nt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=nt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=nt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var SO="firebase",kO="11.10.0";/**
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
 */Bt(SO,kO,"app");/**
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
 */const G_="analytics",AO="firebase_id",bO="origin",CO=60*1e3,NO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pg="https://www.googletagmanager.com/gtag/js";/**
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
 */const zn=new cd("@firebase/analytics");/**
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
 */const RO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},mr=new ms("analytics","Analytics",RO);/**
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
 */function PO(t){if(!t.startsWith(pg)){const e=mr.create("invalid-gtag-resource",{gtagURL:t});return zn.warn(e.message),""}return t}function P1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function DO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function xO(t,e){const n=DO("firebase-js-sdk-policy",{createScriptURL:PO}),r=document.createElement("script"),i=`${pg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function OO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function MO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await P1(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){zn.error(l)}t("config",i,s)}async function LO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await P1(n);for(const u of o){const d=l.find(p=>p.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){zn.error(s)}}function VO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await LO(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await MO(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){zn.error(l)}}return i}function FO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=VO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function zO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pg)&&n.src.includes(t))return n;return null}/**
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
 */const UO=30,BO=1e3;class jO{constructor(e={},n=BO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const D1=new jO;function $O(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:$O(r)},s=NO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw mr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function WO(t,e=D1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw mr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw mr.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new GO;return setTimeout(async()=>{l.abort()},CO),x1({appId:r,apiKey:i,measurementId:s},o,l,e)}async function x1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=D1){var s;const{appId:o,measurementId:l}=t;try{await qO(r,e)}catch(u){if(l)return zn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await HO(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!KO(d)){if(i.deleteThrottleMetadata(o),l)return zn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?iv(n,i.intervalMillis,UO):iv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),zn.debug(`Calling attemptFetch again in ${f} millis`),x1(t,p,r,i)}}function qO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(mr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KO(t){if(!(t instanceof ir)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function XO(){if(mp())try{await pp()}catch(t){return zn.warn(mr.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zn.warn(mr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YO(t,e,n,r,i,s,o){var l;const u=WO(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&zn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>zn.error(T)),e.push(u);const d=XO().then(T=>{if(T)return r.getId()}),[f,p]=await Promise.all([u,d]);zO(s)||xO(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[bO]="firebase",g.update=!0,p!=null&&(g[AO]=p),i("config",f.measurementId,g),f.measurementId}/**
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
 */class JO{constructor(e){this.app=e}_delete(){return delete rl[this.app.options.appId],Promise.resolve()}}let rl={},Q_=[];const X_={};let Vh="dataLayer",ZO="gtag",Y_,O1,J_=!1;function eM(){const t=[];if(z0()&&t.push("This is a browser extension environment."),U0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=mr.create("invalid-analytics-context",{errorInfo:e});zn.warn(n.message)}}function tM(t,e,n){eM();const r=t.options.appId;if(!r)throw mr.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw mr.create("no-api-key");if(rl[r]!=null)throw mr.create("already-exists",{id:r});if(!J_){OO(Vh);const{wrappedGtag:s,gtagCore:o}=FO(rl,Q_,X_,Vh,ZO);O1=s,Y_=o,J_=!0}return rl[r]=YO(t,Q_,X_,e,Y_,Vh,n),new JO(t)}function nM(t,e,n,r){t=je(t),QO(O1,rl[t.app.options.appId],e,n,r).catch(i=>zn.error(i))}const Z_="@firebase/analytics",eE="0.10.17";function rM(){Un(new En(G_,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tM(r,i,n)},"PUBLIC")),Un(new En("analytics-internal",t,"PRIVATE")),Bt(Z_,eE),Bt(Z_,eE,"esm2017");function t(e){try{const n=e.getProvider(G_).getImmediate();return{logEvent:(r,i,s)=>nM(n,r,i,s)}}catch(n){throw mr.create("interop-component-reg-failed",{reason:n})}}}rM();/**
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
 */const M1="firebasestorage.googleapis.com",L1="storageBucket",iM=2*60*1e3,sM=10*60*1e3;/**
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
 */class gt extends ir{constructor(e,n,r=0){super(Fh(e),`Firebase Storage: ${n} (${Fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function Fh(t){return"storage/"+t}function gg(){const t="An unknown error occurred, please check the error payload for server response.";return new gt(pt.UNKNOWN,t)}function oM(t){return new gt(pt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function aM(t){return new gt(pt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new gt(pt.UNAUTHENTICATED,t)}function uM(){return new gt(pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cM(t){return new gt(pt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dM(){return new gt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hM(){return new gt(pt.CANCELED,"User canceled the upload/download.")}function fM(t){return new gt(pt.INVALID_URL,"Invalid URL '"+t+"'.")}function mM(t){return new gt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pM(){return new gt(pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+L1+"' property when initializing the app?")}function gM(){return new gt(pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yM(){return new gt(pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vM(t){return new gt(pt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ym(t){return new gt(pt.INVALID_ARGUMENT,t)}function V1(){return new gt(pt.APP_DELETED,"The Firebase app was deleted.")}function _M(t){return new gt(pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function il(t,e){return new gt(pt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ra(t){throw new gt(pt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Zn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Zn.makeFromUrl(e,n)}catch{return new Zn(e,"")}if(r.path==="")return r;throw mM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(L){L.path_=decodeURIComponent(L.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),N={bucket:1,path:3},D=n===M1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",k=new RegExp(`^https?://${D}/${i}/${F}`,"i"),A=[{regex:l,indices:u,postModify:s},{regex:T,indices:N,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let L=0;L<A.length;L++){const V=A[L],B=V.regex.exec(e);if(B){const E=B[V.indices.bucket];let v=B[V.indices.path];v||(v=""),r=new Zn(E,v),V.postModify(r);break}}if(r==null)throw fM(e);return r}}class EM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function f(...F){d||(d=!0,e.apply(null,F))}function p(F){i=setTimeout(()=>{i=null,t(T,u())},F)}function g(){s&&clearTimeout(s)}function T(F,...k){if(d){g();return}if(F){g(),f.call(null,F,...k);return}if(u()||o){g(),f.call(null,F,...k);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let N=!1;function D(F){N||(N=!0,g(),!d&&(i!==null?(F||(l=2),clearTimeout(i),p(0)):F||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function TM(t){t(!1)}/**
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
 */function IM(t){return t!==void 0}function SM(t){return typeof t=="object"&&!Array.isArray(t)}function yg(t){return typeof t=="string"||t instanceof String}function tE(t){return vg()&&t instanceof Blob}function vg(){return typeof Blob<"u"}function nE(t,e,n,r){if(r<e)throw ym(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ym(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function _g(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Bs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bs||(Bs={}));/**
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
 */function kM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class AM{constructor(e,n,r,i,s,o,l,u,d,f,p,g=!0,T=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,D)=>{this.resolve_=N,this.reject_=D,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ru(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Bs.NO_ERROR,u=s.getStatus();if(!l||kM(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Bs.ABORT;r(!1,new Ru(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Ru(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());IM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=gg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?V1():hM();o(u)}else{const u=dM();o(u)}};this.canceled_?n(!1,new Ru(!1,null,!0)):this.backoffId_=wM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ru{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PM(t,e,n,r,i,s,o=!0,l=!1){const u=F1(t.urlParams),d=t.url+u,f=Object.assign({},t.headers);return NM(f,e),bM(f,n),CM(f,s),RM(f,r),new AM(d,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function DM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xM(...t){const e=DM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vg())return new Blob(t);throw new gt(pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function OM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function MM(t){if(typeof atob>"u")throw vM("base-64");return atob(t)}/**
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
 */const Vr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zh{constructor(e,n){this.data=e,this.contentType=n||null}}function LM(t,e){switch(t){case Vr.RAW:return new zh(z1(e));case Vr.BASE64:case Vr.BASE64URL:return new zh(U1(t,e));case Vr.DATA_URL:return new zh(FM(e),zM(e))}throw gg()}function z1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VM(t){let e;try{e=decodeURIComponent(t)}catch{throw il(Vr.DATA_URL,"Malformed data URL.")}return z1(e)}function U1(t,e){switch(t){case Vr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw il(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Vr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw il(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=MM(e)}catch(i){throw i.message.includes("polyfill")?i:il(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class B1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw il(Vr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function FM(t){const e=new B1(t);return e.base64?U1(Vr.BASE64,e.rest):VM(e.rest)}function zM(t){return new B1(t).contentType}function UM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class zi{constructor(e,n){let r=0,i="";tE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(tE(this.data_)){const r=this.data_,i=OM(r,e,n);return i===null?null:new zi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new zi(r,!0)}}static getBlob(...e){if(vg()){const n=e.map(r=>r instanceof zi?r.data_:r);return new zi(xM.apply(null,n))}else{const n=e.map(o=>yg(o)?LM(Vr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new zi(i,!0)}}uploadData(){return this.data_}}/**
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
 */function j1(t){let e;try{e=JSON.parse(t)}catch{return null}return SM(e)?e:null}/**
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
 */function BM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function $M(t,e){return e}class gn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||$M}}let Pu=null;function HM(t){return!yg(t)||t.length<2?t:$1(t)}function H1(){if(Pu)return Pu;const t=[];t.push(new gn("bucket")),t.push(new gn("generation")),t.push(new gn("metageneration")),t.push(new gn("name","fullPath",!0));function e(s,o){return HM(o)}const n=new gn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new gn("size");return i.xform=r,t.push(i),t.push(new gn("timeCreated")),t.push(new gn("updated")),t.push(new gn("md5Hash",null,!0)),t.push(new gn("cacheControl",null,!0)),t.push(new gn("contentDisposition",null,!0)),t.push(new gn("contentEncoding",null,!0)),t.push(new gn("contentLanguage",null,!0)),t.push(new gn("contentType",null,!0)),t.push(new gn("metadata","customMetadata",!0)),Pu=t,Pu}function WM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Zn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function qM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return WM(r,t),r}function W1(t,e,n){const r=j1(e);return r===null?null:qM(t,r,n)}function KM(t,e,n,r){const i=j1(e);if(i===null||!yg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(d=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),T=_g(g,n,r),N=F1({alt:"media",token:d});return T+N})[0]}function GM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class q1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function K1(t){if(!t)throw gg()}function QM(t,e){function n(r,i){const s=W1(t,i,e);return K1(s!==null),s}return n}function XM(t,e){function n(r,i){const s=W1(t,i,e);return K1(s!==null),KM(s,i,t.host,t._protocol)}return n}function G1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=uM():i=lM():n.getStatus()===402?i=aM(t.bucket):n.getStatus()===403?i=cM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function YM(t){const e=G1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=oM(t.path)),s.serverResponse=i.serverResponse,s}return n}function JM(t,e,n){const r=e.fullServerUrl(),i=_g(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new q1(i,s,XM(t,n),o);return l.errorHandler=YM(e),l}function ZM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function eL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=ZM(null,e)),r}function tL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let L=0;L<2;L++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=eL(e,r,i),f=GM(d,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+u+"--",T=zi.getBlob(p,r,g);if(T===null)throw gM();const N={name:d.fullPath},D=_g(s,t.host,t._protocol),F="POST",k=t.maxUploadRetryTime,_=new q1(D,F,QM(t,n),k);return _.urlParams=N,_.headers=o,_.body=T.uploadData(),_.errorHandler=G1(e),_}class nL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Ra("cannot .send() more than once");if(Ei(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rL extends nL{initXhr(){this.xhr_.responseType="text"}}function Q1(){return new rL}/**
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
 */class to{constructor(e,n){this._service=e,n instanceof Zn?this._location=n:this._location=Zn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new to(e,n)}get root(){const e=new Zn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $1(this._location.path)}get storage(){return this._service}get parent(){const e=BM(this._location.path);if(e===null)return null;const n=new Zn(this._location.bucket,e);return new to(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _M(e)}}function iL(t,e,n){t._throwIfRoot("uploadBytes");const r=tL(t.storage,t._location,H1(),new zi(e,!0),n);return t.storage.makeRequestWithTokens(r,Q1).then(i=>({metadata:i,ref:t}))}function sL(t){t._throwIfRoot("getDownloadURL");const e=JM(t.storage,t._location,H1());return t.storage.makeRequestWithTokens(e,Q1).then(n=>{if(n===null)throw yM();return n})}function oL(t,e){const n=jM(t._location.path,e),r=new Zn(t._location.bucket,n);return new to(t.storage,r)}/**
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
 */function aL(t){return/^[A-Za-z]+:\/\//.test(t)}function lL(t,e){return new to(t,e)}function X1(t,e){if(t instanceof Eg){const n=t;if(n._bucket==null)throw pM();const r=new to(n,n._bucket);return e!=null?X1(r,e):r}else return e!==void 0?oL(t,e):t}function uL(t,e){if(e&&aL(e)){if(t instanceof Eg)return lL(t,e);throw ym("To use ref(service, url), the first argument must be a Storage instance.")}else return X1(t,e)}function rE(t,e){const n=e==null?void 0:e[L1];return n==null?null:Zn.makeFromBucketSpec(n,t)}function cL(t,e,n,r={}){t.host=`${e}:${n}`;const i=Ei(e);i&&(ld(`https://${t.host}/b`),ud("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:F0(s,t.app.options.projectId))}class Eg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=M1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iM,this._maxUploadRetryTime=sM,this._requests=new Set,i!=null?this._bucket=Zn.makeFromBucketSpec(i,this._host):this._bucket=rE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zn.makeFromBucketSpec(this._url,e):this._bucket=rE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new to(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new EM(V1());{const o=PM(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const iE="@firebase/storage",sE="0.13.14";/**
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
 */const Y1="storage";function Ld(t,e,n){return t=je(t),iL(t,e,n)}function Vd(t){return t=je(t),sL(t)}function Fd(t,e){return t=je(t),uL(t,e)}function dL(t=jl(),e){t=je(t);const r=ps(t,Y1).getImmediate({identifier:e}),i=fp("storage");return i&&hL(r,...i),r}function hL(t,e,n,r={}){cL(t,e,n,r)}function fL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Eg(n,r,i,e,io)}function mL(){Un(new En(Y1,fL,"PUBLIC").setMultipleInstances(!0)),Bt(iE,sE,""),Bt(iE,sE,"esm2017")}mL();/**
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
 */const pL="type.googleapis.com/google.protobuf.Int64Value",gL="type.googleapis.com/google.protobuf.UInt64Value";function J1(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Hc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Hc(e));if(typeof t=="function"||typeof t=="object")return J1(t,e=>Hc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ia(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case pL:case gL:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ia(e)):typeof t=="function"||typeof t=="object"?J1(t,e=>ia(e)):t}/**
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
 */const wg="functions";/**
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
 */const oE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Mn extends ir{constructor(e,n,r){super(`${wg}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Mn.prototype)}}function yL(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Wc(t,e){let n=yL(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!oE[o])return new Mn("internal","internal");n=oE[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=ia(i))}}catch{}return n==="ok"?null:new Mn(n,r,i)}/**
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
 */class vL{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Xn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const vm="us-central1",_L=/^data: (.*?)(?:\n|$)/;function EL(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Mn("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class wL{constructor(e,n,r,i,s=vm,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new vL(e,n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=vm}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function TL(t,e,n){const r=Ei(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(ld(t.emulatorOrigin),ud("Functions",!0))}function IL(t,e,n){const r=i=>kL(t,e,i,{});return r.stream=(i,s)=>bL(t,e,i,s),r}async function SL(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function Z1(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function kL(t,e,n,r){const i=t._url(e);return AL(t,i,n,r)}async function AL(t,e,n,r){n=Hc(n);const i={data:n},s=await Z1(t,r),o=r.timeout||7e4,l=EL(o),u=await Promise.race([SL(e,i,s,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Mn("cancelled","Firebase Functions instance was deleted.");const d=Wc(u.status,u.json);if(d)throw d;if(!u.json)throw new Mn("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new Mn("internal","Response is missing data field.");return{data:ia(f)}}function bL(t,e,n,r){const i=t._url(e);return CL(t,i,n,r||{})}async function CL(t,e,n,r){var i;n=Hc(n);const s={data:n},o=await Z1(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:o,signal:r==null?void 0:r.signal})}catch(T){if(T instanceof Error&&T.name==="AbortError"){const D=new Mn("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const N=Wc(0,null);return{data:Promise.reject(N),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(N)}}}}}}let u,d;const f=new Promise((T,N)=>{u=T,d=N});(i=r==null?void 0:r.signal)===null||i===void 0||i.addEventListener("abort",()=>{const T=new Mn("cancelled","Request was cancelled.");d(T)});const p=l.body.getReader(),g=NL(p,u,d,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const T=g.getReader();return{async next(){const{value:N,done:D}=await T.read();return{value:N,done:D}},async return(){return await T.cancel(),{done:!0,value:void 0}}}}},data:f}}function NL(t,e,n,r){const i=(o,l)=>{const u=o.match(_L);if(!u)return;const d=u[1];try{const f=JSON.parse(d);if("result"in f){e(ia(f.result));return}if("message"in f){l.enqueue(ia(f.message));return}if("error"in f){const p=Wc(0,f);l.error(p),n(p);return}}catch(f){if(f instanceof Mn){l.error(f),n(f);return}}},s=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const d=new Mn("cancelled","Request was cancelled");return o.error(d),n(d),Promise.resolve()}try{const{value:d,done:f}=await t.read();if(f){l.trim()&&i(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new Mn("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=s.decode(d,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const g of p)g.trim()&&i(g.trim(),o);return u()}catch(d){const f=d instanceof Mn?d:Wc(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const aE="@firebase/functions",lE="0.12.9";/**
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
 */const RL="auth-internal",PL="app-check-internal",DL="messaging-internal";function xL(t){const e=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),s=n.getProvider(RL),o=n.getProvider(DL),l=n.getProvider(PL);return new wL(i,s,o,l,r)};Un(new En(wg,e,"PUBLIC").setMultipleInstances(!0)),Bt(aE,lE,t),Bt(aE,lE,"esm2017")}/**
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
 */function OL(t=jl(),e=vm){const r=ps(je(t),wg).getImmediate({identifier:e}),i=fp("functions");return i&&ML(r,...i),r}function ML(t,e,n){TL(je(t),e,n)}function eS(t,e,n){return IL(je(t),e)}xL();const LL={apiKey:"AIzaSyAto_nGW6s0pEdDZ2RmkXAjrU3x_oL3etA",authDomain:"pcshop-web-manager.firebaseapp.com",projectId:"pcshop-web-manager",storageBucket:"pcshop-web-manager.firebasestorage.app",messagingSenderId:"243721610856",appId:"1:243721610856:web:67c6a703252b6bc472bddd",measurementId:"G-ET66342BXG"},Jl=$0(LL),Uh=kR(Jl),ve=SD(Jl),zd=dL(Jl),tS=OL(Jl,"europe-west1");eS(tS,"getHardveraproPrice");eS(tS,"getVintedPrice");async function VL(){return await A1()?lO(Jl):null}const FL=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő","Egyéb"],Bh=["Készleten","Beépítve","Eladva"];function Pa(){return{uid:`slot-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,file:null}}async function uE(t,e){if(!t)return{url:null,name:null};const n=t.name.replace(/[^a-zA-Z0-9._-]/g,"_"),r=Fd(zd,`${e}/${Date.now()}_${n}`);return await Ld(r,t),{url:await Vd(r),name:t.name}}async function cE(t,e="part_photos"){const n=(t||[]).filter(r=>r==null?void 0:r.file);return n.length===0?[]:Promise.all(n.map(async(r,i)=>{const s=r.file,o=s.name.replace(/[^a-zA-Z0-9._-]/g,"_"),l=`${e}/${Date.now()}_${i}_${o}`,u=Fd(zd,l);await Ld(u,s);const d=await Vd(u);return{id:`${Date.now()}-${i}-${Math.random().toString(36).slice(2,7)}`,name:s.name,url:d}}))}function dE(t){const e=[],n=new Set;return Array.isArray(t==null?void 0:t.photos)&&t.photos.forEach((r,i)=>{const s=typeof r=="string"?r:r==null?void 0:r.url;!s||n.has(s)||(n.add(s),e.push({id:typeof r=="object"&&(r==null?void 0:r.id)||`ph-${i}-${n.size}`,name:typeof r=="object"&&(r==null?void 0:r.name)||`Kép ${i+1}`,url:s}))}),Array.isArray(t==null?void 0:t.photoUrls)&&t.photoUrls.forEach((r,i)=>{!r||n.has(r)||(n.add(r),e.push({id:`purl-${i}-${n.size}`,name:`Kép ${i+1}`,url:r}))}),t!=null&&t.photoFileUrl&&!n.has(t.photoFileUrl)&&(n.add(t.photoFileUrl),e.push({id:"legacy-photo",name:t.photoFileName||"Termékkép",url:t.photoFileUrl})),e}function hE({file:t}){const e=M.useMemo(()=>t?URL.createObjectURL(t):null,[t]);return M.useEffect(()=>()=>{e&&URL.revokeObjectURL(e)},[e]),e?c.createElement("img",{src:e,alt:(t==null?void 0:t.name)||"Előnézet",style:{height:64,width:84,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)",flexShrink:0}}):null}function zL({parts:t=[],userEmail:e}){const n=(e||"").toLowerCase(),[r,i]=M.useState([]),[s,o]=M.useState(!1),[l,u]=M.useState(""),d=M.useMemo(()=>{const x=new Set(FL);return(t||[]).forEach(X=>{X!=null&&X.category&&String(X.category).trim()&&x.add(String(X.category).trim())}),r.forEach(X=>{X&&X.trim()&&x.add(X.trim())}),Array.from(x)},[t,r]),[f,p]=M.useState(!1),[g,T]=M.useState(""),[N,D]=M.useState("Videókártya"),[F,k]=M.useState(""),[_,A]=M.useState(""),[L,V]=M.useState(!1),[B,E]=M.useState(null),[v,w]=M.useState([Pa()]),[S,C]=M.useState(!1),[P,I]=M.useState(""),[Se,de]=M.useState(null),[Ee,ze]=M.useState(""),[q,Z]=M.useState("Videókártya"),[ae,Te]=M.useState(""),[he,ue]=M.useState(""),[ce,Ot]=M.useState("Készleten"),[ct,Ct]=M.useState(!1),[In,sr]=M.useState(null),[Nt,Jt]=M.useState(!1),[Zt,Sn]=M.useState([]),[dt,Mt]=M.useState([]),[kn,An]=M.useState(""),[Lt,bn]=M.useState(!1),[rt,pe]=M.useState("active"),[U,ie]=M.useState("all"),[te,ye]=M.useState(""),[ne,re]=M.useState(null),[$e,He]=M.useState(""),[R,se]=M.useState(""),[Pe,yt]=M.useState(!1),[be,fn]=M.useState(null),[Cn,Rt]=M.useState(!1),[Bn,jn]=M.useState(null),[Gr,or]=M.useState(null),Rr=M.useMemo(()=>{const x=te.trim().toLowerCase();return(t||[]).filter(X=>{const we=X.status||"Készleten";return rt==="active"?we==="Készleten":rt==="all"?!0:we===rt}).filter(X=>U==="all"?!0:(X.category||"")===U).filter(X=>x?(X.name||"").toLowerCase().includes(x)||(X.category||"").toLowerCase().includes(x)||(X.serialNumber||"").toLowerCase().includes(x):!0)},[t,rt,U,te]);function wi(x=null){const X=l.trim();X&&(i(we=>we.includes(X)?we:[...we,X]),x?x(X):D(X),u(""),o(!1))}function mn(){T(""),D(d[0]||"Videókártya"),k(""),A(""),V(!1),E(null),w([Pa()]),I("")}function _s(){w(x=>[...x,Pa()])}function Qr(x,X){w(we=>we.map(Ce=>Ce.uid===x?{...Ce,file:X||null}:Ce))}function Es(x){w(X=>{const we=X.filter(Ce=>Ce.uid!==x);return we.length>0?we:[Pa()]})}async function Nn(x){var we;x.preventDefault(),I("");const X=Number(_);if(!g.trim()||_.trim()===""||Number.isNaN(X)||X<0){I("Adj meg alkatrésznevet és érvényes beszerzési árat (0 Ft is lehet).");return}C(!0);try{let Ce=null,jt=null;if(B){const Tt=await uE(B,"invoices");Ce=Tt.url,jt=Tt.name}const Rn=await cE(v,"part_photos"),Kn=Rn.map(Tt=>Tt.url);await ts(ln(ve,"parts"),{name:g.trim(),category:N.trim()||"Egyéb",serialNumber:F.trim()||"-",purchasePrice:X,status:"Készleten",buildId:null,soldPrice:null,soldAt:null,paidWithOwnCard:!!L,paidByEmail:L?n:null,invoiceFileUrl:Ce,invoiceFileName:jt,photos:Rn,photoUrls:Kn,photoFileUrl:Kn[0]||null,photoFileName:((we=Rn[0])==null?void 0:we.name)||null,createdByEmail:n,createdAt:Date.now()}),mn(),p(!1)}catch(Ce){console.error("Alkatrész mentési hiba:",Ce),I(`Hiba mentés közben: ${(Ce==null?void 0:Ce.message)||"Ismeretlen hiba"}`)}finally{C(!1)}}function Pr(x){de(x),ze(x.name||""),Z(x.category||d[0]||"Egyéb"),Te(x.serialNumber&&x.serialNumber!=="-"?x.serialNumber:""),ue(x.purchasePrice!==void 0&&x.purchasePrice!==null?String(x.purchasePrice):"0"),Ot(x.status||"Készleten"),Ct(!!x.paidWithOwnCard),sr(null),Jt(!1),Sn(dE(x)),Mt([]),An("")}function st(){Mt(x=>[...x,Pa()])}function Xr(x,X){Mt(we=>we.map(Ce=>Ce.uid===x?{...Ce,file:X||null}:Ce))}function $n(x){Mt(X=>X.filter(we=>we.uid!==x))}async function Hn(x){var we;if(x.preventDefault(),!Se)return;An("");const X=Number(he);if(!Ee.trim()||he.trim()===""||Number.isNaN(X)||X<0){An("Adj meg érvényes nevet és beszerzési árat (0 Ft is lehet).");return}bn(!0);try{let Ce=Nt?null:Se.invoiceFileUrl||null,jt=Nt?null:Se.invoiceFileName||null;if(In){const pn=await uE(In,"invoices");Ce=pn.url,jt=pn.name}const Rn=await cE(dt,"part_photos"),Kn=new Set,Tt=[...Zt,...Rn].filter(pn=>!(pn!=null&&pn.url)||Kn.has(pn.url)?!1:(Kn.add(pn.url),!0)),uo=Tt.map(pn=>pn.url),Jr=Bh.includes(ce)?ce:"Készleten";await zt(Ue(ve,"parts",Se.id),{name:Ee.trim(),category:q.trim()||"Egyéb",serialNumber:ae.trim()||"-",purchasePrice:X,status:Jr,...Jr==="Készleten"?{buildId:null,soldAt:null,soldPrice:null}:{},paidWithOwnCard:!!ct,paidByEmail:ct?Se.paidByEmail||n:null,invoiceFileUrl:Ce,invoiceFileName:jt,photos:Tt,photoUrls:uo,photoFileUrl:uo[0]||null,photoFileName:((we=Tt[0])==null?void 0:we.name)||null,updatedAt:Date.now()}),de(null),sr(null),Mt([])}catch(Ce){console.error("Alkatrész szerkesztési hiba:",Ce),An(`Hiba mentés közben: ${(Ce==null?void 0:Ce.message)||"Ismeretlen hiba"}`)}finally{bn(!1)}}function yr(x){re(x),He(String(x.soldPrice??x.purchasePrice??0)),se("")}async function Ti(x){if(x.preventDefault(),!ne)return;se("");const X=Number($e);if($e.trim()===""||Number.isNaN(X)||X<0){se("Adj meg érvényes eladási árat (0 Ft is lehet).");return}yt(!0);try{await zt(Ue(ve,"parts",ne.id),{status:"Eladva",soldPrice:X,soldAt:Date.now()}),re(null),He("")}finally{yt(!1)}}async function Dr(){if(!be)return;const x=be;fn(null),Rt(!0);try{await zt(Ue(ve,"parts",x.id),{status:"Készleten",soldPrice:null,soldAt:null,buildId:null})}finally{Rt(!1)}}async function pa(){if(!Bn)return;const x=Bn;jn(null),or(x.id);try{await Js(Ue(ve,"parts",x.id))}finally{or(null)}}const ws=Number((ne==null?void 0:ne.purchasePrice)||0),Yr=Number($e),Wn=Number.isNaN(Yr)?null:Yr-ws,qn=In?In.name:!Nt&&(Se!=null&&Se.invoiceFileUrl)?Se.invoiceFileName||"Feltöltött számla":null;return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("h2",{style:{margin:0}},"Készletkövető"),c.createElement("button",{className:"btn btn-green",onClick:()=>{f&&mn(),p(x=>!x)}},f?c.createElement(Qe,{size:16}):c.createElement(fr,{size:16}),f?"Bezárás":"Új alkatrész")),f&&c.createElement("form",{className:"card",onSubmit:Nn,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új alkatrész felvétele a készletbe"),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész neve (pl. RTX 3060 8 GB)",value:g,onChange:x=>T(x.target.value),required:!0}),c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:4}},c.createElement("span",{className:"muted",style:{fontSize:12}},"Kategória"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"2px 7px",fontSize:11},onClick:()=>o(x=>!x)},c.createElement(pO,{size:12})," Új kategória")),c.createElement("select",{value:N,onChange:x=>D(x.target.value)},d.map(x=>c.createElement("option",{key:x,value:x},x))),s&&c.createElement("div",{className:"row",style:{marginTop:6,gap:6}},c.createElement("input",{placeholder:"Új kategória neve...",value:l,onChange:x=>u(x.target.value)}),c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"6px 10px",fontSize:12},onClick:()=>wi(D)},"Hozzáad"))),c.createElement("input",{placeholder:"Sorozatszám (SN, opcionális)",value:F,onChange:x=>k(x.target.value)}),c.createElement("input",{type:"number",min:"0",placeholder:"Beszerzési ár (Ft)",value:_,onChange:x=>A(x.target.value),required:!0})),c.createElement("div",{className:"grid-2",style:{marginTop:10,gap:10}},c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Számla csatolása (opcionális — PDF vagy kép)"),c.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:x=>{var X;return E(((X=x.target.files)==null?void 0:X[0])||null)}}),B&&c.createElement("div",{className:"muted",style:{fontSize:11,marginTop:4}},"Kiválasztva: ",B.name)),c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(C1,{size:13})," Termékképek (galériából vagy kamerával)"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"2px 8px",fontSize:11},onClick:_s},c.createElement(fr,{size:12})," További kép")),v.map((x,X)=>c.createElement("div",{key:x.uid,style:{display:"flex",alignItems:"center",gap:8,marginBottom:X<v.length-1?8:0}},c.createElement(hE,{file:x.file}),c.createElement("input",{type:"file",accept:"image/*",onChange:we=>{var Ce;return Qr(x.uid,((Ce=we.target.files)==null?void 0:Ce[0])||null)}}),v.length>1&&c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"5px 7px"},onClick:()=>Es(x.uid),title:"Mező törlése"},c.createElement(Qe,{size:12})))))),c.createElement("div",{style:{marginTop:10}},c.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6}},c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:L,onChange:x=>V(x.target.checked)}),c.createElement("span",null,"Saját kártyával fizetve (",n,")"))),P&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},P),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:S},S?"Mentés...":"Felvétel a készletbe"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{mn(),p(!1)}},"Mégse"))),c.createElement("div",{className:"row",style:{marginBottom:14,flexWrap:"wrap",gap:10}},c.createElement("div",{className:"row"},c.createElement("button",{className:`btn ${rt==="active"?"":"btn-ghost"}`,onClick:()=>pe("active")},"Aktív készlet"),Bh.map(x=>c.createElement("button",{key:x,className:`btn ${rt===x?"":"btn-ghost"}`,onClick:()=>pe(x)},x)),c.createElement("button",{className:`btn ${rt==="all"?"":"btn-ghost"}`,onClick:()=>pe("all")},"Összes")),c.createElement("select",{value:U,onChange:x=>ie(x.target.value),style:{maxWidth:210}},c.createElement("option",{value:"all"},"Minden kategória"),d.map(x=>c.createElement("option",{key:x,value:x},x))),c.createElement("div",{style:{flex:1,minWidth:200}},c.createElement("input",{placeholder:"Keresés név, kategória vagy SN alapján...",value:te,onChange:x=>ye(x.target.value)}))),Rr.length===0?c.createElement("div",{className:"card"},c.createElement("div",{className:"muted"},"Nincs a szűrésnek megfelelő alkatrész.")):c.createElement("div",{className:"grid-2"},Rr.map(x=>{var Rn,Kn;const X=x.status||"Készleten",we=X==="Eladva",Ce=(Kn=(Rn=x.topMarketOffers)==null?void 0:Rn[0])==null?void 0:Kn.price,jt=dE(x);return c.createElement("div",{className:"card",key:x.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:10,borderRadius:12}},c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("strong",{style:{fontSize:15}},x.name),c.createElement("div",{className:"row"},x.category&&c.createElement("span",{className:"badge badge-indigo"},x.category),c.createElement("span",{className:`badge ${we?"badge-green":X==="Beépítve"?"badge-purple":"badge-blue"}`},X))),jt.length>0&&c.createElement("div",{style:{marginBottom:8,display:"grid",gridTemplateColumns:jt.length===1?"1fr":"repeat(2, 1fr)",gap:6}},jt.map(Tt=>c.createElement("a",{key:Tt.id,href:Tt.url,target:"_blank",rel:"noreferrer"},c.createElement("img",{src:Tt.url,alt:Tt.name||x.name,style:{width:"100%",height:jt.length===1?150:95,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)"}})))),c.createElement("div",{className:"muted",style:{fontSize:12}},"SN: ",c.createElement("strong",null,x.serialNumber||"-"),x.paidWithOwnCard?" • Saját kártyás tétel":""),c.createElement("div",{className:"row",style:{marginTop:8,fontSize:13}},c.createElement("span",null,"Beszerzés: ",c.createElement("strong",null,Number(x.purchasePrice||0).toLocaleString("hu-HU")," Ft")),we&&x.soldPrice!==null&&x.soldPrice!==void 0?c.createElement("span",{className:"green"},"Eladva: ",c.createElement("strong",null,Number(x.soldPrice).toLocaleString("hu-HU")," Ft")):Ce?c.createElement("span",{className:"muted"},"Piaci ár: ",c.createElement("strong",null,Number(Ce).toLocaleString("hu-HU")," Ft")):null),x.invoiceFileUrl&&c.createElement("div",{style:{marginTop:8}},c.createElement("a",{href:x.invoiceFileUrl,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Számla: ",x.invoiceFileName||"Megnyitás"))),c.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>Pr(x)},c.createElement(mg,{size:14})," Szerkesztés"),!we&&X!=="Beépítve"&&c.createElement("button",{className:"btn btn-green",onClick:()=>yr(x)},"Eladás"),we&&c.createElement("button",{className:"btn btn-ghost",disabled:Cn,onClick:()=>fn(x)},c.createElement(K_,{size:14})," Eladás visszavonása"),c.createElement("button",{className:"btn btn-red",disabled:Gr===x.id,onClick:()=>jn(x),title:"Törlés"},c.createElement(Gt,{size:14})," ",Gr===x.id?"Törlés...":"Törlés")))})),Se&&c.createElement("div",{onClick:()=>!Lt&&de(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3,overflowY:"auto"}},c.createElement("form",{className:"card",onClick:x=>x.stopPropagation(),onSubmit:Hn,style:{width:"100%",maxWidth:540,margin:"auto",borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:12}},c.createElement("h3",{style:{margin:0}},"Alkatrész szerkesztése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>de(null),disabled:Lt},c.createElement(Qe,{size:16}))),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész neve",value:Ee,onChange:x=>ze(x.target.value),required:!0}),c.createElement("select",{value:q,onChange:x=>Z(x.target.value)},d.map(x=>c.createElement("option",{key:x,value:x},x))),c.createElement("input",{placeholder:"Sorozatszám (SN)",value:ae,onChange:x=>Te(x.target.value)}),c.createElement("input",{type:"number",min:"0",placeholder:"Beszerzési ár (Ft)",value:he,onChange:x=>ue(x.target.value),required:!0}),c.createElement("select",{value:ce,onChange:x=>Ot(x.target.value)},Bh.map(x=>c.createElement("option",{key:x,value:x},x))),c.createElement("div",{style:{display:"flex",alignItems:"center"}},c.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6}},c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:ct,onChange:x=>Ct(x.target.checked)}),c.createElement("span",{style:{fontSize:13}},"Saját kártyás")))),c.createElement("div",{style:{marginTop:12,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Számla (csere vagy törlés)"),qn&&c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"3px 8px",fontSize:11},onClick:()=>{sr(null),Jt(!0)}},c.createElement(Gt,{size:12})," Számla törlése")),c.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:x=>{var we;const X=((we=x.target.files)==null?void 0:we[0])||null;sr(X),X&&Jt(!1)}}),qn?c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:4}},"Aktuális számla: ",c.createElement("strong",null,qn)):c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:4}},"Nincs csatolt számla.")),c.createElement("div",{style:{marginTop:10,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(gO,{size:13})," Termékképek (galériából vagy kamerával)"),c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"4px 9px",fontSize:12},onClick:st},c.createElement(fr,{size:13})," További kép feltöltése")),Zt.length>0&&c.createElement("div",{style:{marginBottom:8,display:"flex",flexWrap:"wrap",gap:8}},Zt.map(x=>c.createElement("div",{key:x.id,style:{position:"relative"}},c.createElement("img",{src:x.url,alt:x.name,style:{height:72,width:92,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)"}}),c.createElement("button",{type:"button",onClick:()=>Sn(X=>X.filter(we=>we.id!==x.id)),style:{position:"absolute",top:3,right:3,background:"rgba(0,0,0,0.75)",color:"#fff",border:"none",borderRadius:999,width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0},title:"Kép törlése"},c.createElement(Qe,{size:11}))))),dt.map(x=>c.createElement("div",{key:x.uid,style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},c.createElement(hE,{file:x.file}),c.createElement("input",{type:"file",accept:"image/*",onChange:X=>{var we;return Xr(x.uid,((we=X.target.files)==null?void 0:we[0])||null)}}),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"5px 7px"},onClick:()=>$n(x.uid),title:"Képmező törlése"},c.createElement(Qe,{size:12})))),Zt.length===0&&dt.length===0&&c.createElement("div",{className:"muted",style:{fontSize:12}},"Kattints a „További kép feltöltése” gombra új kép hozzáadásához a galériából vagy kamerával.")),kn&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},kn),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>de(null),disabled:Lt},"Mégse"),c.createElement("button",{type:"submit",className:"btn btn-green",disabled:Lt},c.createElement(pm,{size:15})," ",Lt?"Mentés...":"Mentés")))),ne&&c.createElement("div",{onClick:()=>!Pe&&re(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("form",{className:"card",onClick:x=>x.stopPropagation(),onSubmit:Ti,style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Alkatrész eladásának rögzítése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>re(null),disabled:Pe},c.createElement(Qe,{size:16}))),c.createElement("div",{className:"muted",style:{marginBottom:12,fontSize:13}},c.createElement("strong",null,ne.name)," • Beszerzés:"," ",c.createElement("strong",null,ws.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladási ár (Ft)"),c.createElement("input",{type:"number",min:"0",value:$e,onChange:x=>He(x.target.value),autoFocus:!0,required:!0}),Wn!==null&&c.createElement("div",{className:"row",style:{marginTop:10,fontSize:13}},c.createElement("span",{className:"muted"},"Várható profit:"),c.createElement("strong",{className:Wn>=0?"green":"red"},Wn>=0?"+":"",Wn.toLocaleString("hu-HU")," Ft")),R&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},R),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>re(null),disabled:Pe},"Mégse"),c.createElement("button",{type:"submit",className:"btn btn-green",disabled:Pe},c.createElement(pm,{size:15})," ",Pe?"Mentés...":"Eladás mentése")))),be&&c.createElement("div",{onClick:()=>!Cn&&fn(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:x=>x.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Eladás visszavonása"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>fn(null),disabled:Cn},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Visszavonod az eladást: ",c.createElement("strong",null,be.name),"?",c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"Az alkatrész újra ",c.createElement("strong",null,"Készleten")," státuszba kerül, és kikerül az eladások közül.")),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>fn(null),disabled:Cn},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-green",disabled:Cn,onClick:Dr},c.createElement(K_,{size:14})," ",Cn?"Visszavonás...":"Visszavonás")))),Bn&&c.createElement("div",{onClick:()=>jn(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:x=>x.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Alkatrész törlése"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>jn(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd a készletből: ",c.createElement("strong",null,Bn.name),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>jn(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:pa},c.createElement(Gt,{size:14})," Igen, törlöm")))))}const fE=[{key:"cpu",label:"Processzor",category:"Processzor",multi:!1},{key:"gpu",label:"Videókártya",category:"Videókártya",multi:!1},{key:"motherboard",label:"Alaplap",category:"Alaplap",multi:!1},{key:"ram",label:"Memória (RAM)",category:"Memória",multi:!0},{key:"storage",label:"Háttértár (SSD/HDD)",category:"Háttértár",multi:!0},{key:"psu",label:"Tápegység",category:"Tápegység",multi:!1},{key:"case",label:"Ház",category:"Ház",multi:!1},{key:"cooler",label:"Hűtő",category:"Hűtő",multi:!1}],jh={cpu:"",gpu:"",motherboard:"",psu:"",case:"",cooler:""},mE={ram:[""],storage:[""]};function pE(){return{uid:`pc-slot-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,file:null}}async function UL(t){const e=(t||[]).filter(n=>n==null?void 0:n.file);return e.length===0?[]:Promise.all(e.map(async(n,r)=>{const i=n.file,s=i.name.replace(/[^a-zA-Z0-9._-]/g,"_"),o=Fd(zd,`build_photos/${Date.now()}_${r}_${s}`);await Ld(o,i);const l=await Vd(o);return{id:`${Date.now()}-${r}-${Math.random().toString(36).slice(2,7)}`,name:i.name,url:l}}))}function gE(t){const e=[],n=new Set;return Array.isArray(t==null?void 0:t.photos)&&t.photos.forEach((r,i)=>{const s=typeof r=="string"?r:r==null?void 0:r.url;!s||n.has(s)||(n.add(s),e.push({id:typeof r=="object"&&(r==null?void 0:r.id)||`bph-${i}-${n.size}`,name:typeof r=="object"&&(r==null?void 0:r.name)||`PC kép ${i+1}`,url:s}))}),e}function BL({file:t}){const e=M.useMemo(()=>t?URL.createObjectURL(t):null,[t]);return M.useEffect(()=>()=>{e&&URL.revokeObjectURL(e)},[e]),e?c.createElement("img",{src:e,alt:(t==null?void 0:t.name)||"PC előnézet",style:{height:68,width:92,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)",flexShrink:0}}):null}function jL({parts:t=[],builds:e=[]}){const[n,r]=M.useState(!1),[i,s]=M.useState(null),[o,l]=M.useState(""),[u,d]=M.useState(!1),[f,p]=M.useState(""),[g,T]=M.useState([]),[N,D]=M.useState([]),[F,k]=M.useState(!1),[_,A]=M.useState(null),[L,V]=M.useState(""),[B,E]=M.useState(null),[v,w]=M.useState(""),[S,C]=M.useState(""),[P,I]=M.useState(!1),[Se,de]=M.useState(null),[Ee,ze]=M.useState(jh),[q,Z]=M.useState(mE),ae=M.useMemo(()=>{const U=new Set((i==null?void 0:i.partIds)||[]);return(t||[]).filter(ie=>U.has(ie.id)||(ie.status||"Készleten")==="Készleten"&&!ie.buildId)},[t,i]),Te=M.useMemo(()=>{const U=Object.values(Ee).filter(Boolean);return Object.values(q).forEach(ie=>{(ie||[]).forEach(te=>{te&&U.push(te)})}),U},[Ee,q]),he=M.useMemo(()=>{const U=new Map(ae.map(ie=>[ie.id,ie]));return Te.map(ie=>U.get(ie)).filter(Boolean)},[ae,Te]),ue=M.useMemo(()=>he.reduce((U,ie)=>U+Number(ie.purchasePrice||0),0),[he]);function ce(){s(null),l(""),d(!1),p(""),T([]),D([]),V(""),ze(jh),Z(mE)}function Ot(){ce(),D([pE()]),r(!0)}function ct(U){const ie=new Set(U.partIds||[]),te=(t||[]).filter(R=>ie.has(R.id)),ye={...jh},ne={ram:[],storage:[]},re=new Set;fE.forEach(R=>{const se=te.filter(Pe=>(Pe.category||"").toLowerCase()===R.category.toLowerCase());R.multi?(se.forEach(Pe=>{ne[R.key].push(Pe.id),re.add(Pe.id)}),ne[R.key].length===0&&ne[R.key].push("")):se[0]&&(ye[R.key]=se[0].id,re.add(se[0].id))});const $e=te.filter(R=>!re.has(R.id));if($e.length>0){const R=ne.storage.filter(Boolean);ne.storage=[...R,...$e.map(se=>se.id)]}s(U),l(U.name||"");const He=U.status==="Eladva";d(He),p(He&&U.soldPrice!==null&&U.soldPrice!==void 0?String(U.soldPrice):""),T(gE(U)),D([]),ze(ye),Z(ne),V(""),r(!0),window.scrollTo({top:0,behavior:"smooth"})}function Ct(){D(U=>[...U,pE()])}function In(U,ie){D(te=>te.map(ye=>ye.uid===U?{...ye,file:ie||null}:ye))}function sr(U){D(ie=>ie.filter(te=>te.uid!==U))}function Nt(U,ie){ze(te=>({...te,[U]:ie}))}function Jt(U,ie,te){Z(ye=>{const ne=[...ye[U]||[""]];return ne[ie]=te,{...ye,[U]:ne}})}function Zt(U){Z(ie=>({...ie,[U]:[...ie[U]||[""],""]}))}function Sn(U,ie){Z(te=>{const ye=(te[U]||[""]).filter((ne,re)=>re!==ie);return{...te,[U]:ye.length?ye:[""]}})}function dt(U,ie){return ae.filter(te=>(te.category||"").toLowerCase()===U.toLowerCase()?te.id===ie?!0:!Te.includes(te.id):!1)}async function Mt(U){if(U.preventDefault(),V(""),!o.trim()){V("Add meg a gép nevét.");return}if(he.length===0){V("Válassz ki legalább egy alkatrészt.");return}const ie=u?Number(f):null;if(u&&(f.trim()===""||Number.isNaN(ie)||ie<0)){V("Add meg a gép eladási árát.");return}k(!0);try{const te=await UL(N),ye=new Set,ne=[...g,...te].filter(be=>!(be!=null&&be.url)||ye.has(be.url)?!1:(ye.add(be.url),!0)),re=Date.now(),$e=u?"Eladva":"Összerakva",He=he.map(be=>be.id),R={name:o.trim(),partIds:He,partsSummary:he.map(be=>({id:be.id,name:be.name,category:be.category||"",serialNumber:be.serialNumber||"",purchasePrice:Number(be.purchasePrice||0),invoiceFileUrl:be.invoiceFileUrl||null})),photos:ne,totalCost:ue,status:$e,soldPrice:u?ie:null,soldAt:u?(i==null?void 0:i.soldAt)||re:null};let se=i==null?void 0:i.id;i?await zt(Ue(ve,"builds",i.id),R):se=(await ts(ln(ve,"builds"),{...R,createdAt:re})).id;const yt=(Array.isArray(i==null?void 0:i.partIds)?i.partIds:[]).filter(be=>!He.includes(be));await Promise.all([...yt.map(be=>zt(Ue(ve,"parts",be),{buildId:null,status:"Készleten",soldAt:null,soldPrice:null})),...he.map(be=>zt(Ue(ve,"parts",be.id),{buildId:se,status:u?"Eladva":"Beépítve",...u?{soldAt:(i==null?void 0:i.soldAt)||re,soldPrice:ie}:{soldAt:null,soldPrice:null}}))]),ce(),r(!1)}catch(te){console.error("Gép mentési hiba:",te),V(`Hiba mentés közben: ${(te==null?void 0:te.message)||"Ismeretlen hiba"}`)}finally{k(!1)}}function kn(U){E(U),w(String(U.soldPrice??U.totalCost??0)),C("")}async function An(U){if(U.preventDefault(),!B)return;C("");const ie=Number(v);if(v.trim()===""||Number.isNaN(ie)||ie<0){C("Adj meg érvényes eladási árat (0 Ft is lehet).");return}I(!0);try{const te=B.soldAt||Date.now();await zt(Ue(ve,"builds",B.id),{status:"Eladva",soldPrice:ie,soldAt:te}),Array.isArray(B.partIds)&&B.partIds.length>0&&await Promise.all(B.partIds.map(ye=>zt(Ue(ve,"parts",ye),{status:"Eladva",soldAt:te}))),E(null),w("")}finally{I(!1)}}async function Lt(){if(!Se)return;const U=Se;de(null),A(U.id);try{const ie=Array.isArray(U.partIds)?U.partIds:[],te=Array.isArray(U.partsSummary)?U.partsSummary.map(re=>re==null?void 0:re.id).filter(Boolean):[],ye=Array.isArray(U.parts)?U.parts.map(re=>typeof re=="string"?re:re==null?void 0:re.id).filter(Boolean):[],ne=Array.from(new Set([...ie,...te,...ye]));await Promise.all(ne.map(re=>zt(Ue(ve,"parts",re),{status:"Készleten",buildId:null,soldAt:null,soldPrice:null}))),await Js(Ue(ve,"builds",U.id)),(i==null?void 0:i.id)===U.id&&(ce(),r(!1))}finally{A(null)}}const bn=Number((B==null?void 0:B.totalCost)||0),rt=Number(v),pe=Number.isNaN(rt)?null:rt-bn;return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("h2",{style:{margin:0}},"Gépösszeállító"),c.createElement("button",{className:"btn btn-green",onClick:()=>{n?ce():Ot()}},n?c.createElement(Qe,{size:16}):c.createElement(fr,{size:16}),n?"Bezárás":"Új gép készletből")),n&&c.createElement("form",{className:"card",onSubmit:Mt,style:{marginBottom:16}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},i?`Gép szerkesztése: ${i.name}`:"Új gép összeállítása alkatrészenként"),i&&c.createElement("span",{className:`badge ${i.status==="Eladva"?"badge-green":"badge-blue"}`},i.status||"Összerakva")),c.createElement("div",{style:{marginBottom:14}},c.createElement("input",{placeholder:"Gép neve (pl. Ryzen 5600 + RTX 3060)",value:o,onChange:U=>l(U.target.value),required:!0})),c.createElement("div",{className:"grid-2",style:{gap:12}},fE.map(U=>{if(!U.multi){const te=Ee[U.key]||"",ye=dt(U.category,te);return c.createElement("div",{key:U.key,style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("strong",null,U.label),c.createElement("span",{className:"muted",style:{fontSize:12}},ye.length," elérhető")),c.createElement("select",{value:te,onChange:ne=>Nt(U.key,ne.target.value)},c.createElement("option",{value:""},"-- Nincs kiválasztva --"),ye.map(ne=>c.createElement("option",{key:ne.id,value:ne.id},ne.name," (",Number(ne.purchasePrice||0).toLocaleString("hu-HU")," Ft)"))))}const ie=q[U.key]||[""];return c.createElement("div",{key:U.key,style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("strong",null,U.label),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"3px 8px",fontSize:12},onClick:()=>Zt(U.key)},c.createElement(fr,{size:12})," Modul / meghajtó")),ie.map((te,ye)=>{const ne=dt(U.category,te);return c.createElement("div",{className:"row",key:`${U.key}-${ye}`,style:{marginBottom:6,gap:6}},c.createElement("select",{value:te,onChange:re=>Jt(U.key,ye,re.target.value)},c.createElement("option",{value:""},"-- Válassz ",U.label.toLowerCase()," --"),ne.map(re=>c.createElement("option",{key:re.id,value:re.id},re.name," (",Number(re.purchasePrice||0).toLocaleString("hu-HU")," Ft)"))),ie.length>1&&c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"6px 8px"},onClick:()=>Sn(U.key,ye),title:"Slot törlése"},c.createElement(Gt,{size:13})))}))})),c.createElement("div",{style:{marginTop:14,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:5}},c.createElement(C1,{size:14})," Képek az elkészült PC-ről (galériából vagy kamerával)"),c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"4px 9px",fontSize:12},onClick:Ct},c.createElement(fr,{size:13})," További kép feltöltése")),g.length>0&&c.createElement("div",{style:{marginBottom:8,display:"flex",flexWrap:"wrap",gap:8}},g.map(U=>c.createElement("div",{key:U.id,style:{position:"relative"}},c.createElement("img",{src:U.url,alt:U.name,style:{height:76,width:104,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)"}}),c.createElement("button",{type:"button",onClick:()=>T(ie=>ie.filter(te=>te.id!==U.id)),style:{position:"absolute",top:3,right:3,background:"rgba(0,0,0,0.75)",color:"#fff",border:"none",borderRadius:999,width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0},title:"Kép törlése"},c.createElement(Qe,{size:11}))))),N.map(U=>c.createElement("div",{key:U.uid,style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},c.createElement(BL,{file:U.file}),c.createElement("input",{type:"file",accept:"image/*",onChange:ie=>{var te;return In(U.uid,((te=ie.target.files)==null?void 0:te[0])||null)}}),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"5px 7px"},onClick:()=>sr(U.uid),title:"Képmező törlése"},c.createElement(Qe,{size:12})))),g.length===0&&N.length===0&&c.createElement("div",{className:"muted",style:{fontSize:12}},"Kattints a „További kép feltöltése” gombra PC-fotó hozzáadásához.")),c.createElement("div",{style:{marginTop:14,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.03)"}},c.createElement("div",{className:"row"},c.createElement("strong",null,"Bekerülési ár:"),c.createElement("strong",{style:{fontSize:16,color:"#60a5fa"}},ue.toLocaleString("hu-HU")," Ft")),he.length>0&&c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"Kiválasztva:"," ",he.map(U=>`${U.name} (${Number(U.purchasePrice||0).toLocaleString("hu-HU")} Ft)`).join(" • ")),c.createElement("div",{className:"row",style:{marginTop:10}},c.createElement("label",null,c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:u,onChange:U=>d(U.target.checked)})," ","Gép eladva egyben"),u&&c.createElement("input",{type:"number",min:"0",placeholder:"Eladási ár (Ft)",value:f,onChange:U=>p(U.target.value),style:{maxWidth:220},required:!0}))),L&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},L),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:F},F?"Mentés...":i?"Módosítások mentése":"Mentés"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{ce(),r(!1)}},"Mégse"))),c.createElement("div",{className:"grid-2"},(e||[]).map(U=>{const ie=Array.isArray(U.partsSummary)?U.partsSummary:[],te=Number(U.totalCost||0),ye=U.soldPrice!==null&&U.soldPrice!==void 0?Number(U.soldPrice):null,ne=U.status==="Eladva",re=ne&&ye!==null?ye-te:null,$e=gE(U);return c.createElement("div",{className:"card",key:U.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:12,borderRadius:12}},c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("div",{className:"row",style:{gap:8}},c.createElement(gm,{size:18,color:"#60a5fa"}),c.createElement("strong",{style:{fontSize:16}},U.name)),c.createElement("span",{className:`badge ${ne?"badge-green":"badge-blue"}`},U.status||"Összerakva")),$e.length>0&&c.createElement("div",{style:{marginBottom:10,display:"grid",gridTemplateColumns:$e.length===1?"1fr":"repeat(2, 1fr)",gap:6}},$e.map(He=>c.createElement("a",{key:He.id,href:He.url,target:"_blank",rel:"noreferrer"},c.createElement("img",{src:He.url,alt:He.name||U.name,style:{width:"100%",height:$e.length===1?160:100,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)"}})))),c.createElement("div",{style:{display:"grid",gridTemplateColumns:ne&&re!==null?"repeat(3, 1fr)":"repeat(2, 1fr)",gap:8,padding:10,borderRadius:8,background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border)",marginBottom:12}},c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Bekerülés"),c.createElement("strong",{style:{fontSize:13}},te.toLocaleString("hu-HU")," Ft")),ne&&ye!==null?c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Eladva"),c.createElement("strong",{style:{fontSize:13,color:"#60a5fa"}},ye.toLocaleString("hu-HU")," Ft")),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Profit"),c.createElement("strong",{style:{fontSize:13},className:re>=0?"green":"red"},re>=0?"+":"",re.toLocaleString("hu-HU")," Ft"))):c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Állapot"),c.createElement("strong",{style:{fontSize:13}},"Eladásra vár"))),ie.length>0&&c.createElement("div",{style:{display:"flex",flexDirection:"column"}},ie.map((He,R)=>c.createElement("div",{key:`${He.id||R}-${R}`,className:"row",style:{padding:"6px 0",borderBottom:R<ie.length-1?"1px solid rgba(255,255,255,0.06)":"none",gap:8}},c.createElement("div",{className:"row",style:{gap:8,minWidth:0}},He.category&&c.createElement("span",{className:"badge badge-indigo",style:{fontSize:11,padding:"2px 7px",flexShrink:0}},He.category),c.createElement("span",{style:{fontSize:13,overflow:"hidden",textOverflow:"ellipsis"}},He.name)),c.createElement("span",{className:"muted",style:{fontSize:13,whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}},Number(He.purchasePrice||0).toLocaleString("hu-HU")," Ft"))))),c.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>ct(U)},c.createElement(mg,{size:14})," Szerkesztés"),!ne&&c.createElement("button",{className:"btn btn-green",onClick:()=>kn(U)},"Eladás rögzítése"),c.createElement("button",{className:"btn btn-red",disabled:_===U.id,onClick:()=>de(U),title:"Gép törlése"},c.createElement(Gt,{size:14})," ",_===U.id?"Törlés...":"Törlés")))})),B&&c.createElement("div",{onClick:()=>!P&&E(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("form",{className:"card",onClick:U=>U.stopPropagation(),onSubmit:An,style:{width:"100%",maxWidth:420,margin:0,borderRadius:12,boxShadow:"0 20px 50px rgba(0, 0, 0, 0.6)"}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Gép eladásának rögzítése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>E(null),disabled:P},c.createElement(Qe,{size:16}))),c.createElement("div",{className:"muted",style:{marginBottom:12,fontSize:13}},"Gép: ",c.createElement("strong",null,B.name)," • Bekerülés:"," ",c.createElement("strong",null,bn.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladási ár (Ft)"),c.createElement("input",{type:"number",min:"0",value:v,onChange:U=>w(U.target.value),autoFocus:!0,required:!0}),pe!==null&&c.createElement("div",{className:"row",style:{marginTop:10,fontSize:13}},c.createElement("span",{className:"muted"},"Várható profit:"),c.createElement("strong",{className:pe>=0?"green":"red"},pe>=0?"+":"",pe.toLocaleString("hu-HU")," Ft")),S&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},S),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>E(null),disabled:P},"Mégse"),c.createElement("button",{type:"submit",className:"btn btn-green",disabled:P},c.createElement(pm,{size:15})," ",P?"Mentés...":"Eladás rögzítése")))),Se&&c.createElement("div",{onClick:()=>de(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:U=>U.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12,boxShadow:"0 20px 50px rgba(0, 0, 0, 0.6)"}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Gép törlése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>de(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd ezt a gépet: ",c.createElement("strong",null,Se.name),"?",c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"A beépített alkatrészei automatikusan visszakerülnek a készletbe.")),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>de(null)},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-red",onClick:Lt},c.createElement(Gt,{size:14})," Igen, törlöm")))))}const $L=["fabianbal500@gmail.com","beastmaster0626@gmail.com"],yE=10,vE=10;function _E(t){if(!t)return!1;const e=new Date(Number(t)),n=new Date;return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()}function HL(t,e){const n=new Map((e||[]).map(o=>[o.id,o])),r=Array.isArray(t.partIds)?t.partIds:Array.isArray(t.parts)?t.parts.map(o=>typeof o=="string"?o:o==null?void 0:o.id).filter(Boolean):[],i=[],s=new Set;return r.forEach(o=>{const l=n.get(o);l!=null&&l.invoiceFileUrl&&!s.has(l.invoiceFileUrl)&&(s.add(l.invoiceFileUrl),i.push({id:l.id,label:l.category?`${l.name} (${l.category})`:l.name,url:l.invoiceFileUrl}))}),i}function WL({parts:t=[],builds:e=[],cardExpenses:n=[],manualSales:r=[],warrantyComplaints:i=[],userEmail:s}){const o=(s||"").toLowerCase(),[l,u]=M.useState(!1),[d,f]=M.useState(""),[p,g]=M.useState(""),[T,N]=M.useState(""),[D,F]=M.useState(!1),[k,_]=M.useState(""),[A,L]=M.useState(!1),[V,B]=M.useState(""),[E,v]=M.useState(""),[w,S]=M.useState("0"),[C,P]=M.useState(""),[I,Se]=M.useState(!1),[de,Ee]=M.useState(""),[ze,q]=M.useState(!1),[Z,ae]=M.useState({}),[Te,he]=M.useState(null),[ue,ce]=M.useState(null),ct=(t||[]).filter(R=>R.status!=="Eladva").reduce((R,se)=>R+Number(se.purchasePrice||0),0),Ct=Math.round(ct*1.225),In=(t||[]).filter(R=>R.paidWithOwnCard).map(R=>({id:R.id,kind:"part",name:R.name,amount:R.purchasePrice||0,note:`Készlet • SN: ${R.serialNumber||"-"}`,ownerEmail:(R.paidByEmail||o).toLowerCase(),createdAt:R.createdAt||0})),Nt=[...(n||[]).filter(R=>!R.settled).map(R=>({id:R.id,kind:"manual",name:R.name,amount:R.amount||0,note:R.note||"Korábbi / külső tétel",ownerEmail:(R.createdByEmail||"").toLowerCase(),createdAt:R.createdAt||0})),...In].sort((R,se)=>se.createdAt-R.createdAt),Jt=Array.from(new Set([...$L.map(R=>R.toLowerCase()),...Nt.map(R=>R.ownerEmail).filter(Boolean)])),Zt=(t||[]).filter(R=>R.status==="Eladva"&&!R.buildId),dt=[...(e||[]).filter(R=>R.status==="Eladva").map(R=>({id:`build-${R.id}`,rawId:R.id,source:"build",partIds:Array.isArray(R.partIds)?R.partIds:[],title:`[Gép] ${R.name}`,cost:Number(R.totalCost||0),price:Number(R.soldPrice||0),profit:Number(R.soldPrice||0)-Number(R.totalCost||0),soldAt:R.soldAt||0,note:"",invoices:HL(R,t)})),...Zt.map(R=>({id:`part-${R.id}`,rawId:R.id,source:"part",title:R.name,cost:Number(R.purchasePrice||0),price:Number(R.soldPrice||0),profit:Number(R.soldPrice||0)-Number(R.purchasePrice||0),soldAt:R.soldAt||0,note:"",invoices:R.invoiceFileUrl?[{id:R.id,label:R.name,url:R.invoiceFileUrl}]:[]})),...(r||[]).map(R=>({id:`spontaneous-${R.id}`,rawId:R.id,source:"spontaneous",title:`[Spontán] ${R.title}`,cost:Number(R.cost||0),price:Number(R.price||0),profit:Number(R.price||0)-Number(R.cost||0),soldAt:R.soldAt||R.createdAt||0,note:R.note||"",invoices:[]}))].sort((R,se)=>se.soldAt-R.soldAt),Mt=(i||[]).filter(R=>_E(R.createdAt)).reduce((R,se)=>R+Number(se.cost||0),0),kn=(i||[]).reduce((R,se)=>R+Number(se.cost||0),0),An=dt.filter(R=>_E(R.soldAt)),Lt=An.reduce((R,se)=>R+Number(se.price||0),0),rt=An.reduce((R,se)=>R+Number(se.profit||0),0)-Mt,U=dt.reduce((R,se)=>R+Number(se.profit||0),0)-kn,ie=dt.length>yE,te=ze?dt:dt.slice(0,yE);function ye(R){ae(se=>({...se,[R]:!se[R]}))}async function ne(R){R.preventDefault(),_("");const se=Number(p);if(!d.trim()||p.trim()===""||Number.isNaN(se)||se<0){_("Adj meg érvényes tételnevet és összeget (0 Ft is lehet).");return}F(!0);try{await ts(ln(ve,"card_expenses"),{name:d.trim(),amount:se,note:T.trim(),createdByEmail:o,settled:!1,createdAt:Date.now()}),f(""),g(""),N(""),u(!1)}catch(Pe){_(`Hiba mentés közben: ${(Pe==null?void 0:Pe.message)||"Ismeretlen hiba"}`)}finally{F(!1)}}async function re(R){R.ownerEmail===o&&(R.kind==="part"?await zt(Ue(ve,"parts",R.id),{paidWithOwnCard:!1}):await zt(Ue(ve,"card_expenses",R.id),{settled:!0,settledAt:Date.now()}))}async function $e(R){R.preventDefault(),Ee("");const se=Number(E),Pe=w.trim()===""?0:Number(w);if(!V.trim()||E.trim()===""||Number.isNaN(se)||se<0){Ee("Adj meg megnevezést és érvényes eladási árat (0 Ft is lehet).");return}if(Number.isNaN(Pe)||Pe<0){Ee("A költség/beszerzés nem lehet negatív.");return}Se(!0);try{const yt=Date.now();await ts(ln(ve,"sales_log"),{title:V.trim(),price:se,cost:Pe,note:C.trim(),createdByEmail:o,soldAt:yt,createdAt:yt}),B(""),v(""),S("0"),P(""),L(!1)}catch(yt){Ee(`Hiba mentés közben: ${(yt==null?void 0:yt.message)||"Ismeretlen hiba"}`)}finally{Se(!1)}}async function He(){if(!ue)return;const R=ue;ce(null),he(R.id);try{R.source==="spontaneous"?await Js(Ue(ve,"sales_log",R.rawId)):R.source==="part"?await zt(Ue(ve,"parts",R.rawId),{status:"Készleten",soldPrice:null,soldAt:null,buildId:null}):R.source==="build"&&(await zt(Ue(ve,"builds",R.rawId),{status:"Összerakva",soldPrice:null,soldAt:null}),Array.isArray(R.partIds)&&R.partIds.length>0&&await Promise.all(R.partIds.map(se=>zt(Ue(ve,"parts",se),{status:"Beépítve",soldAt:null}).catch(()=>null))))}finally{he(null)}}return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("h2",{style:{margin:0}},"Pénzügy & Profit"),c.createElement("div",{className:"row"},c.createElement("button",{className:"btn btn-green",onClick:()=>{Ee(""),L(R=>!R)}},A?c.createElement(Qe,{size:15}):c.createElement(fr,{size:15}),A?"Bezárás":"Spontán eladás"),c.createElement("button",{className:"btn btn-purple",onClick:()=>{_(""),u(R=>!R)}},l?c.createElement(Qe,{size:15}):c.createElement(fr,{size:15}),l?"Bezárás":"Saját kártyás tétel"))),A&&c.createElement("form",{className:"card",onSubmit:$e,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új spontán eladás rögzítése"),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Gyors, nem készletes vagy eseti eladások (pl. kábel, hűtő, apróság) felvétele az eladási naplóba."),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Megnevezés (pl. DisplayPort kábel / 12cm venti)",value:V,onChange:R=>B(R.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Eladási ár / bevétel (Ft)",value:E,onChange:R=>v(R.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Beszerzés / költség (Ft, alapból 0)",value:w,onChange:R=>S(R.target.value)}),c.createElement("input",{placeholder:"Megjegyzés (opcionális)",value:C,onChange:R=>P(R.target.value)})),de&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},de),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:I},I?"Mentés...":"Felvétel a naplóba"),c.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>L(!1)},"Mégse"))),l&&c.createElement("form",{className:"card",onSubmit:ne,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új saját kártyás tétel (",o,")"),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Korábbi, már nem a készletben lévő alkatrészek vagy külső kártyás kötések rögzítéséhez."),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész / tétel neve (pl. GTX 1660 Super)",value:d,onChange:R=>f(R.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Összeg (Ft) — 0 is lehet",value:p,onChange:R=>g(R.target.value),required:!0})),c.createElement("div",{style:{marginTop:10}},c.createElement("input",{placeholder:"Megjegyzés (opcionális, pl. már eladott gépben volt)",value:T,onChange:R=>N(R.target.value)})),k&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},k),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:D},D?"Mentés...":"Rögzítés a saját kártyámra"),c.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>u(!1)},"Mégse"))),c.createElement("div",{className:"grid-2"},c.createElement("div",{className:"card"},c.createElement("h3",{style:{marginTop:0}},"Profit"),c.createElement("div",{className:"row"},c.createElement("span",null,"E havi árbevétel:"),c.createElement("strong",null,Lt.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("span",null,"E havi garanciaköltség:"),c.createElement("strong",{className:Mt>0?"red":"muted"},"-",Mt.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("strong",null,"E havi tiszta profit (garancia után):"),c.createElement("strong",{className:rt>=0?"green":"red"},rt>=0?"+":"",rt.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("span",{className:"muted"},"Összesített garanciaköltség:"),c.createElement("strong",{className:kn>0?"red":"muted"},"-",kn.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:4}},c.createElement("span",{className:"muted"},"Összesített profit (garancia után):"),c.createElement("strong",{className:U>=0?"green":"red"},U>=0?"+":"",U.toLocaleString("hu-HU")," Ft"))),c.createElement("div",{className:"card"},c.createElement("h3",{style:{marginTop:0}},"Raktárérték"),c.createElement("div",{className:"row"},c.createElement("span",null,"Befektetett tőke:"),c.createElement("strong",null,ct.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:8}},c.createElement("strong",null,"Várható árrés (22.5%):"),c.createElement("strong",{className:"green",style:{fontSize:15}},Ct.toLocaleString("hu-HU")," Ft")))),c.createElement("div",{className:"grid-2",style:{marginTop:4}},Jt.map(R=>{const se=Nt.filter(Rt=>Rt.ownerEmail===R),Pe=se.reduce((Rt,Bn)=>Rt+Number(Bn.amount||0),0),yt=R===o,be=!!Z[R],fn=se.length>vE,Cn=be?se:se.slice(0,vE);return c.createElement("div",{className:"card",key:R},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("h3",{style:{margin:0}},R),c.createElement("div",{className:"row"},fn&&c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"4px 9px",fontSize:12},onClick:()=>ye(R)},be?c.createElement(c.Fragment,null,c.createElement(W_,{size:13})," Kevesebb"):c.createElement(c.Fragment,null,c.createElement(H_,{size:13})," Összes (",se.length,")")),c.createElement("span",{className:`badge ${yt?"badge-purple":"badge-blue"}`},yt?"Saját kártyád":"Másik fiók"))),se.length===0?c.createElement("div",{className:"muted"},"Nincs elszámolatlan saját kártyás tétel."):c.createElement(c.Fragment,null,Cn.map(Rt=>c.createElement("div",{className:"row",key:`${Rt.kind}-${Rt.id}`,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",null,c.createElement("strong",null,Rt.name),c.createElement("div",{className:"muted"},Number(Rt.amount||0).toLocaleString("hu-HU")," Ft • ",Rt.note)),yt?c.createElement("button",{className:"btn btn-purple",onClick:()=>re(Rt)},"Kivettem"):c.createElement("span",{className:"muted",style:{fontSize:12}},"Csak megtekinthető"))),c.createElement("div",{className:"row",style:{marginTop:10}},c.createElement("strong",null,"Ki nem vett pénz összesen:"),c.createElement("strong",{style:{color:"#c084fc"}},Pe.toLocaleString("hu-HU")," Ft"))))})),c.createElement("div",{className:"card"},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("h3",{style:{margin:0}},"Eladási Napló (",dt.length,")"),c.createElement("div",{className:"row"},c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"5px 10px",fontSize:12},onClick:()=>{Ee(""),L(R=>!R)}},c.createElement(fr,{size:14})," Spontán eladás"),ie&&c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:12},onClick:()=>q(R=>!R)},ze?c.createElement(c.Fragment,null,c.createElement(W_,{size:14})," Kevesebb mutatása"):c.createElement(c.Fragment,null,c.createElement(H_,{size:14})," Összes megjelenítése (",dt.length,")")))),te.map(R=>{var se;return c.createElement("div",{key:R.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",{className:"row"},c.createElement("div",null,c.createElement("span",null,R.title," (",R.cost.toLocaleString("hu-HU")," →"," ",R.price.toLocaleString("hu-HU")," Ft)"),R.note&&c.createElement("div",{className:"muted"},R.note)),c.createElement("div",{className:"row"},c.createElement("strong",{className:R.profit>=0?"green":"red"},R.profit>=0?"+":"",R.profit.toLocaleString("hu-HU")," Ft"),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:Te===R.id,onClick:()=>ce(R),title:"Eltávolítás a naplóból"},c.createElement(Gt,{size:13})))),R.source==="build"&&((se=R.invoices)==null?void 0:se.length)>0&&c.createElement("div",{className:"row",style:{marginTop:6,flexWrap:"wrap",gap:10}},R.invoices.map(Pe=>c.createElement("a",{key:`${R.id}-${Pe.id}`,href:Pe.url,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Számla: ",Pe.label))))})),ue&&c.createElement("div",{onClick:()=>ce(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:R=>R.stopPropagation(),style:{width:"100%",maxWidth:430,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Eltávolítás az eladási naplóból"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>ce(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},ue.source==="spontaneous"?c.createElement(c.Fragment,null,"Biztosan törlöd a naplóból: ",c.createElement("strong",null,ue.title),"?"):c.createElement(c.Fragment,null,"Eltávolítod az eladási naplóból: ",c.createElement("strong",null,ue.title),"?",c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"A tétel / gép visszakerül a készletbe vagy az összerakott gépek közé."))),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>ce(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:He},c.createElement(Gt,{size:14})," Megerősítés")))))}function qL({dealWatches:t=[],foundDeals:e=[]}){const[n,r]=M.useState(!1),[i,s]=M.useState(""),[o,l]=M.useState(""),[u,d]=M.useState(!1),[f,p]=M.useState(""),[g,T]=M.useState(null),[N,D]=M.useState(null),[F,k]=M.useState(null);async function _(V){V.preventDefault(),p("");const B=i.trim(),E=o.trim()===""?null:Number(o);if(!B){p("Add meg a keresett alkatrész vagy gép nevét.");return}if(E!==null&&(Number.isNaN(E)||E<0)){p("A maximum ár nem lehet negatív.");return}d(!0);try{await ts(ln(ve,"deal_watches"),{query:B,maxPrice:E,active:!0,createdAt:Date.now()}),s(""),l(""),r(!1)}catch(v){console.error("Figyelés mentési hiba:",v),p(`Hiba mentés közben: ${(v==null?void 0:v.message)||"Ismeretlen hiba"}`)}finally{d(!1)}}async function A(){if(!g)return;const V=g;T(null),k(V.id);try{await Js(Ue(ve,"deal_watches",V.id))}finally{k(null)}}async function L(){if(!N)return;const V=N;D(null),k(V.id);try{await Js(Ue(ve,"found_deals",V.id))}finally{k(null)}}return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("div",{className:"row",style:{gap:8}},c.createElement(N1,{size:20,color:"#f97316"}),c.createElement("h2",{style:{margin:0}},"Deal Hunter")),c.createElement("button",{className:"btn btn-green",onClick:()=>{p(""),r(V=>!V)}},n?c.createElement(Qe,{size:16}):c.createElement(fr,{size:16}),n?"Bezárás":"Új figyelés")),n&&c.createElement("form",{className:"card",onSubmit:_,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új keresési figyelés felvétele"),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Keresett tétel (pl. RTX 3060 Ti / Ryzen 5600)",value:i,onChange:V=>s(V.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Maximum célár (Ft, opcionális)",value:o,onChange:V=>l(V.target.value)})),f&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},f),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:u},u?"Mentés...":"Figyelés mentése"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>r(!1)},"Mégse"))),c.createElement("div",{className:"card",style:{marginBottom:16,borderRadius:12}},c.createElement("h3",{style:{marginTop:0}},"Aktív figyelések (",t.length,")"),t.length===0?c.createElement("div",{className:"muted"},"Még nincs beállított figyelés."):t.map(V=>c.createElement("div",{key:V.id,className:"row",style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",null,c.createElement("strong",null,V.query),V.maxPrice!==null&&V.maxPrice!==void 0&&c.createElement("span",{className:"muted",style:{marginLeft:8,fontSize:12}},"Max: ",c.createElement("strong",null,Number(V.maxPrice).toLocaleString("hu-HU")," Ft"))),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:F===V.id,onClick:()=>T(V),title:"Figyelés törlése"},c.createElement(Gt,{size:13})," Törlés")))),c.createElement("div",{className:"card",style:{borderRadius:12}},c.createElement("h3",{style:{marginTop:0}},"Talált ajánlatok (",e.length,")"),e.length===0?c.createElement("div",{className:"muted"},"Még nincs rögzített találat."):e.map(V=>c.createElement("div",{key:V.id,className:"row",style:{padding:"8px 0",borderBottom:"1px solid var(--border)",gap:10}},c.createElement("div",{style:{minWidth:0}},c.createElement("strong",{style:{fontSize:14}},V.title||V.query||"Ajánlat"),c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:2}},V.price!==void 0&&V.price!==null&&c.createElement("strong",{className:"green",style:{marginRight:8}},Number(V.price).toLocaleString("hu-HU")," Ft"),V.query&&c.createElement("span",null,"Keresés: ",V.query)),V.url&&c.createElement("div",{style:{marginTop:4}},c.createElement("a",{href:V.url,target:"_blank",rel:"noreferrer",style:{color:"#60a5fa",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(mO,{size:12})," Hirdetés megnyitása"))),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:F===V.id,onClick:()=>D(V),title:"Találat törlése"},c.createElement(Gt,{size:13})," Törlés")))),g&&c.createElement("div",{onClick:()=>T(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:V=>V.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Figyelés törlése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>T(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd ezt a figyelést: ",c.createElement("strong",null,g.query),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>T(null)},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-red",onClick:A},c.createElement(Gt,{size:14})," Igen, törlöm")))),N&&c.createElement("div",{onClick:()=>D(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:V=>V.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Találat törlése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>D(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd ezt a talált ajánlatot:"," ",c.createElement("strong",null,N.title||N.query||"Ajánlat"),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>D(null)},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-red",onClick:L},c.createElement(Gt,{size:14})," Igen, törlöm")))))}const EE=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő","Gép","Egyéb"],KL=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő"],GL=["Csere másikra","Javítva","Visszatérítve / jóváírva","Folyamatban","Elutasítva"];function Du(t){const e=new Date(Number(t||Date.now())),n=e.getMonth()+1,r=e.getFullYear()+Math.floor(n/12),i=(n%12+12)%12,s=new Date(r,i+1,0).getDate(),o=Math.min(e.getDate(),s),l=new Date(e.getTime());return l.setFullYear(r,i,o),l.getTime()}function $h(t){return t?new Date(Number(t)).toLocaleDateString("hu-HU"):"-"}function go(t){const e=new Date(Number(t||Date.now())),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${i}`}function Hh(){return KL.map(t=>({name:"",category:t,serialNumber:""}))}async function Wh(t,e="warranty"){const n=Array.from(t||[]);return n.length===0?[]:Promise.all(n.map(async(r,i)=>{const s=r.name.replace(/[^a-zA-Z0-9._-]/g,"_"),o=`warranty_invoices/${e}_${Date.now()}_${i}_${s}`,l=Fd(zd,o);await Ld(l,r);const u=await Vd(l);return{id:`${Date.now()}-${i}-${Math.random().toString(36).slice(2,7)}`,label:r.name,url:u}}))}function Ri(...t){const e=[],n=new Set;return t.forEach(r=>{(Array.isArray(r)?r:[]).forEach((i,s)=>{!(i!=null&&i.url)||n.has(i.url)||(n.add(i.url),e.push({id:i.id||`inv-${s}-${n.size}`,label:i.label||i.name||"Számla",url:i.url}))})}),e}function QL({parts:t=[],builds:e=[],warrantyItems:n=[],warrantyComplaints:r=[],userEmail:i}){const[s,o]=M.useState("active"),[l,u]=M.useState(""),[d,f]=M.useState(!1),[p,g]=M.useState(null),[T,N]=M.useState(""),[D,F]=M.useState(""),[k,_]=M.useState("Videókártya"),[A,L]=M.useState(""),[V,B]=M.useState(go(Date.now())),[E,v]=M.useState(""),[w,S]=M.useState([]),[C,P]=M.useState([]),[I,Se]=M.useState(!1),[de,Ee]=M.useState(""),[ze,q]=M.useState(!1),[Z,ae]=M.useState(null),[Te,he]=M.useState(""),[ue,ce]=M.useState(""),[Ot,ct]=M.useState(go(Date.now())),[Ct,In]=M.useState(""),[sr,Nt]=M.useState(Hh()),[Jt,Zt]=M.useState([]),[Sn,dt]=M.useState([]),[Mt,kn]=M.useState(!1),[An,Lt]=M.useState(""),[bn,rt]=M.useState(!1),[pe,U]=M.useState(null),[ie,te]=M.useState(""),[ye,ne]=M.useState(""),[re,$e]=M.useState(""),[He,R]=M.useState(""),[se,Pe]=M.useState("Csere másikra"),[yt,be]=M.useState(""),[fn,Cn]=M.useState("0"),[Rt,Bn]=M.useState(!0),[jn,Gr]=M.useState(""),[or,Rr]=M.useState(""),[wi,mn]=M.useState(null),[_s,Qr]=M.useState(!1),[Es,Nn]=M.useState(""),[Pr,st]=M.useState(null),[Xr,$n]=M.useState(null),Hn=Date.now(),yr=M.useMemo(()=>{const b=new Map,H=[];(n||[]).forEach(K=>{K.sourceKey?b.set(K.sourceKey,K):K.hidden||H.push(K)});const Q=new Map((t||[]).map(K=>[K.id,K])),ke=(e||[]).filter(K=>K.status==="Eladva"),Ve=[];return ke.forEach(K=>{const We=K.soldAt||K.createdAt||Hn,ht=`build-${K.id}`,oe=b.get(ht),It=(oe==null?void 0:oe.soldAt)||We,vr=Du(It),ei=Array.isArray(K.partIds)?K.partIds:Array.isArray(K.parts)?K.parts.map(De=>typeof De=="string"?De:De==null?void 0:De.id).filter(Boolean):[],en=Array.isArray(K.partsSummary)?K.partsSummary:[],$t=new Map(en.map(De=>[De.id,De])),Je=Array.from(new Set([...ei,...en.map(De=>De.id).filter(Boolean)]));let Le=[];Array.isArray(oe==null?void 0:oe.components)&&oe.components.length>0?Le=oe.components.map((De,Ge)=>({id:De.id||`${K.id}-ov-${Ge}`,name:De.name||"Alkatrész",category:De.category||"",serialNumber:De.serialNumber||"-",invoiceFileUrl:De.invoiceFileUrl||null})):Je.forEach(De=>{const Ge=Q.get(De),vt=$t.get(De),As=(Ge==null?void 0:Ge.name)||(vt==null?void 0:vt.name),Bd=(Ge==null?void 0:Ge.serialNumber)||(vt==null?void 0:vt.serialNumber)||"-",jd=(Ge==null?void 0:Ge.category)||(vt==null?void 0:vt.category)||"",bs=(Ge==null?void 0:Ge.invoiceFileUrl)||(vt==null?void 0:vt.invoiceFileUrl)||null;As&&Le.push({id:De,name:As,category:jd,serialNumber:Bd,invoiceFileUrl:bs})});const Is=[];Je.forEach(De=>{const Ge=Q.get(De),vt=$t.get(De),As=(Ge==null?void 0:Ge.invoiceFileUrl)||(vt==null?void 0:vt.invoiceFileUrl);As&&Is.push({id:De,label:(Ge==null?void 0:Ge.name)||(vt==null?void 0:vt.name)||"Alkatrész számla",url:As})});const qe=Le.filter(De=>De.invoiceFileUrl).map((De,Ge)=>({id:De.id||`comp-inv-${Ge}`,label:De.name||"Alkatrész számla",url:De.invoiceFileUrl})),co=Array.isArray(oe==null?void 0:oe.invoices)?oe.invoices:[],Ss=Ri(co,Is,qe),ks=Le.length>0?Le.map(De=>`${De.name} (${De.serialNumber})`).join(" • "):"Gép csomag";Ve.push({id:(oe==null?void 0:oe.id)||ht,sourceKey:ht,isAutoBuild:!0,isManualPc:!1,name:(oe==null?void 0:oe.name)||`[Gép] ${K.name||"Névtelen gép"}`,buyerName:(oe==null?void 0:oe.buyerName)||K.buyerName||"",category:(oe==null?void 0:oe.category)||"Gép",serialNumber:(oe==null?void 0:oe.serialNumber)||ks,componentRows:Le,soldAt:It,expiresAt:vr,note:(oe==null?void 0:oe.note)||"",invoices:Ss,rawOverrideDoc:oe||null})}),H.forEach(K=>{const We=K.soldAt||K.createdAt||Hn,ht=K.type==="pc_build"||Array.isArray(K.components),oe=ht?(K.components||[]).map((Je,Le)=>({id:Je.id||`${K.id}-comp-${Le}`,name:Je.name||"Alkatrész",category:Je.category||"",serialNumber:Je.serialNumber||"-",invoiceFileUrl:Je.invoiceFileUrl||null})):[],It=Array.isArray(K.invoices)?K.invoices:[],vr=K.invoiceFileUrl?[{id:K.id,label:K.name,url:K.invoiceFileUrl}]:[],ei=oe.filter(Je=>Je.invoiceFileUrl).map((Je,Le)=>({id:Je.id||`m-comp-${Le}`,label:Je.name,url:Je.invoiceFileUrl})),en=Ri(It,vr,ei),$t=oe.length>0?oe.map(Je=>`${Je.name} (${Je.serialNumber})`).join(" • "):K.serialNumber||"-";Ve.push({id:K.id,sourceKey:null,isAutoBuild:!1,isManualPc:ht,name:K.name||"Névtelen tétel",buyerName:K.buyerName||"",category:K.category||(ht?"Gép":"Egyéb"),serialNumber:$t,componentRows:oe,soldAt:We,expiresAt:Du(We),note:K.note||"",invoices:en,rawOverrideDoc:K})}),Ve.map(K=>{const We=Hn>K.expiresAt,ht=Math.ceil((K.expiresAt-Hn)/(1e3*60*60*24));return{...K,isExpired:We,daysLeft:ht}}).sort((K,We)=>K.expiresAt-We.expiresAt)},[t,e,n,Hn]),Ti=M.useMemo(()=>{const b=new Map;return yr.forEach(H=>{if((H.componentRows||[]).forEach((Q,ke)=>{const Ve=Q.serialNumber&&Q.serialNumber!=="Nincs"&&Q.serialNumber!=="Úton"?Q.serialNumber:"-",K=`entry:${H.id}:comp:${ke}`;b.has(K)||b.set(K,{key:K,entry:H,compIndex:ke,name:Q.name,serialNumber:Ve,label:`${Q.category?`[${Q.category}] `:""}${Q.name} — SN: ${Ve} (${H.name})`})}),!H.isAutoBuild&&!H.isManualPc&&H.name){const Q=H.serialNumber&&H.serialNumber!=="-"?H.serialNumber:"-",ke=`entry:${H.id}:single`;b.has(ke)||b.set(ke,{key:ke,entry:H,compIndex:null,name:H.name,serialNumber:Q,label:`${H.category?`[${H.category}] `:""}${H.name} — SN: ${Q}`})}}),(t||[]).forEach((H,Q)=>{if(!(H!=null&&H.name))return;const ke=H.serialNumber&&H.serialNumber!=="Nincs"&&H.serialNumber!=="Úton"?H.serialNumber:"-",Ve=`part:${H.id||Q}`;b.has(Ve)||b.set(Ve,{key:Ve,entry:null,compIndex:null,name:H.name,serialNumber:ke,label:`${H.category?`[${H.category}] `:""}${H.name} — SN: ${ke}${H.status?` (${H.status})`:""}`})}),Array.from(b.values())},[t,yr]),Dr=yr.filter(b=>!b.isExpired).length,pa=yr.filter(b=>b.isExpired).length,ws=M.useMemo(()=>{const b=l.trim().toLowerCase();return yr.filter(H=>s==="active"?!H.isExpired:s==="expired"?H.isExpired:!0).filter(H=>b?(H.name||"").toLowerCase().includes(b)||(H.buyerName||"").toLowerCase().includes(b)||(H.serialNumber||"").toLowerCase().includes(b)||(H.category||"").toLowerCase().includes(b)||(H.note||"").toLowerCase().includes(b):!0)},[yr,s,l]),Yr=M.useMemo(()=>(r||[]).reduce((b,H)=>b+Number(H.cost||0),0),[r]);function Wn(){f(!1),q(!1),rt(!1)}function qn(){g(null),N(""),F(""),_("Videókártya"),L(""),B(go(Date.now())),v(""),S([]),P([]),Ee("")}function x(){ae(null),he(""),ce(""),ct(go(Date.now())),In(""),Nt(Hh()),Zt([]),dt([]),Lt("")}function X(){qn(),Wn(),f(!0)}function we(){x(),Wn(),q(!0)}function Ce(b){var H,Q,ke;if(Wn(),b.isManualPc&&((H=b.rawOverrideDoc)!=null&&H.id)){ae(b.rawOverrideDoc.id);const Ve=(b.name||"").replace(/^\[Gép\]\s*/i,"");he(Ve),ce(b.buyerName||""),ct(go(b.soldAt||Date.now())),In(b.note||"");const K=(b.componentRows||[]).map(We=>({id:We.id,name:We.name||"",category:We.category||"",serialNumber:We.serialNumber==="-"?"":We.serialNumber||"",invoiceFileUrl:We.invoiceFileUrl||null}));Nt(K.length>0?K:Hh()),Zt(Ri((Q=b.rawOverrideDoc)==null?void 0:Q.invoices,b.invoices)),dt([]),Lt(""),q(!0),window.scrollTo({top:0,behavior:"smooth"});return}g(b),N(b.name||""),F(b.buyerName||""),_(EE.includes(b.category)?b.category:"Egyéb"),L(b.serialNumber==="-"?"":b.serialNumber||""),B(go(b.soldAt||Date.now())),v(b.note||""),S(Ri((ke=b.rawOverrideDoc)==null?void 0:ke.invoices,b.invoices)),P([]),Ee(""),f(!0),window.scrollTo({top:0,behavior:"smooth"})}function jt(b=null){if(Nn(""),U(b||null),Array.isArray(b==null?void 0:b.componentRows)&&b.componentRows.length>0){te(""),ne("0");const Q=b.componentRows[0];$e(Q.name||""),R(Q.serialNumber||"-")}else if(b&&!b.isAutoBuild&&!b.isManualPc)te(""),ne(""),$e(b.name||""),R(b.serialNumber||"-");else{const Q=Ti[0];te(Q?Q.key:""),ne(""),$e(Q?Q.name:""),R(Q?Q.serialNumber:"-")}Pe("Csere másikra"),be(""),Cn("0"),Bn(!0),Gr(""),Rr(""),mn(null),Wn(),rt(!0),window.scrollTo({top:0,behavior:"smooth"})}function Rn(b){var ke;ne(b);const H=Number(b),Q=(ke=pe==null?void 0:pe.componentRows)==null?void 0:ke[H];Q&&($e(Q.name||""),R(Q.serialNumber||"-"))}function Kn(b){if(te(b),!b)return;const H=Ti.find(Q=>Q.key===b);H&&(H.entry&&U(H.entry),$e(H.name),R(H.serialNumber||"-"))}function Tt(b,H,Q){Nt(ke=>ke.map((Ve,K)=>K===b?{...Ve,[H]:Q}:Ve))}function uo(){Nt(b=>[...b,{name:"",category:"",serialNumber:""}])}function Jr(b){Nt(H=>{const Q=H.filter((ke,Ve)=>Ve!==b);return Q.length>0?Q:[{name:"",category:"",serialNumber:""}]})}async function pn(b){var Ve;b.preventDefault(),Lt("");const H=sr.filter(K=>K.name.trim()!=="").map(K=>({name:K.name.trim(),category:K.category.trim(),serialNumber:K.serialNumber.trim()||"-",invoiceFileUrl:K.invoiceFileUrl||null}));if(!Te.trim()){Lt("Add meg a gép nevét.");return}if(H.length===0){Lt("Töltsd ki legalább egy alkatrész nevét a géphez.");return}const Q=new Date(`${Ot}T12:00:00`).getTime(),ke=Number.isNaN(Q)?Date.now():Q;kn(!0);try{const K=await Wh(Sn,"pc_warranty"),We=Ri(Jt,K),oe={type:"pc_build",name:Te.trim().startsWith("[Gép]")?Te.trim():`[Gép] ${Te.trim()}`,buyerName:ue.trim(),category:"Gép",components:H,serialNumber:H.map(It=>`${It.name} (${It.serialNumber})`).join(" • "),invoices:We,invoiceFileUrl:((Ve=We[0])==null?void 0:Ve.url)||null,soldAt:ke,expiresAt:Du(ke),note:Ct.trim(),hidden:!1};Z?await zt(Ue(ve,"warranty_items",Z),{...oe,updatedAt:Date.now()}):await ts(ln(ve,"warranty_items"),{...oe,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()}),x(),q(!1)}catch(K){console.error("Teljes gép garancia mentési hiba:",K),Lt(`Hiba mentés közben: ${(K==null?void 0:K.message)||"Ismeretlen hiba"}`)}finally{kn(!1)}}async function ga(b){var ke,Ve,K,We;if(b.preventDefault(),Ee(""),!T.trim()){Ee("Add meg az alkatrész / tétel nevét.");return}const H=new Date(`${V}T12:00:00`).getTime(),Q=Number.isNaN(H)?Date.now():H;Se(!0);try{const ht=await Wh(C,"item_warranty"),oe=Ri(w,ht),It={name:T.trim(),buyerName:D.trim(),category:k,serialNumber:A.trim()||"-",invoices:oe,invoiceFileUrl:((ke=oe[0])==null?void 0:ke.url)||null,soldAt:Q,expiresAt:Du(Q),note:E.trim(),hidden:!1};if(p!=null&&p.isAutoBuild&&(p!=null&&p.sourceKey)){const vr=((Ve=p.rawOverrideDoc)==null?void 0:Ve.id)||p.sourceKey;await fm(Ue(ve,"warranty_items",vr),{...It,sourceKey:p.sourceKey,createdByEmail:((K=p.rawOverrideDoc)==null?void 0:K.createdByEmail)||(i||"").toLowerCase(),updatedAt:Date.now()},{merge:!0})}else(We=p==null?void 0:p.rawOverrideDoc)!=null&&We.id?await zt(Ue(ve,"warranty_items",p.rawOverrideDoc.id),{...It,updatedAt:Date.now()}):await ts(ln(ve,"warranty_items"),{...It,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()});qn(),f(!1)}catch(ht){console.error("Garancia mentési hiba:",ht),Ee(`Hiba mentés közben: ${(ht==null?void 0:ht.message)||"Ismeretlen hiba"}`)}finally{Se(!1)}}async function Ts(){var H;if(!Pr||Pr.isAutoBuild)return;const b=Pr;st(null),(H=b.rawOverrideDoc)!=null&&H.id&&await Js(Ue(ve,"warranty_items",b.rawOverrideDoc.id)),((p==null?void 0:p.id)===b.id||Z===b.id)&&(qn(),x(),Wn())}async function Zr(b){var ke,Ve,K,We,ht;if(b.preventDefault(),Nn(""),!re.trim()){Nn("Válaszd ki a legördülő menüből a garanciáztatott alkatrészt.");return}const H=fn.trim()===""?0:Number(fn);if(Number.isNaN(H)||H<0){Nn("A költség nem lehet negatív.");return}const Q=se==="Csere másikra"&&Rt;if(Q&&!jn.trim()){Nn("Add meg az új cserealkatrész nevét.");return}Qr(!0);try{let oe=null;if(wi&&(oe=((ke=(await Wh([wi],"replacement_invoice"))[0])==null?void 0:ke.url)||null),Q&&pe){const It=jn.trim(),vr=or.trim()||"-";if(pe.componentRows&&pe.componentRows.length>0){const ei=ye!==""&&!Number.isNaN(Number(ye))?Number(ye):pe.componentRows.findIndex(Le=>(Le.name||"").toLowerCase()===re.trim().toLowerCase()),en=pe.componentRows.map((Le,Is)=>Is===ei?{id:Le.id,name:It,category:Le.category||"",serialNumber:vr,invoiceFileUrl:oe||Le.invoiceFileUrl||null}:{id:Le.id,name:Le.name,category:Le.category||"",serialNumber:Le.serialNumber||"-",invoiceFileUrl:Le.invoiceFileUrl||null}),$t=en.map(Le=>`${Le.name} (${Le.serialNumber})`).join(" • "),Je=Ri(pe.invoices,oe?[{id:`rep-${Date.now()}`,label:It,url:oe}]:[]);if(pe.isAutoBuild&&pe.sourceKey){const Le=((Ve=pe.rawOverrideDoc)==null?void 0:Ve.id)||pe.sourceKey;await fm(Ue(ve,"warranty_items",Le),{sourceKey:pe.sourceKey,name:pe.name,buyerName:pe.buyerName||"",category:pe.category||"Gép",components:en,serialNumber:$t,invoices:Je,soldAt:pe.soldAt,expiresAt:pe.expiresAt,note:pe.note||"",hidden:!1,createdByEmail:((K=pe.rawOverrideDoc)==null?void 0:K.createdByEmail)||(i||"").toLowerCase(),updatedAt:Date.now()},{merge:!0})}else(We=pe.rawOverrideDoc)!=null&&We.id&&await zt(Ue(ve,"warranty_items",pe.rawOverrideDoc.id),{components:en,serialNumber:$t,invoices:Je,updatedAt:Date.now()})}else if(!pe.isAutoBuild&&((ht=pe.rawOverrideDoc)!=null&&ht.id)){const ei=Ri(pe.invoices,oe?[{id:`rep-${Date.now()}`,label:It,url:oe}]:[]);await zt(Ue(ve,"warranty_items",pe.rawOverrideDoc.id),{name:It,serialNumber:vr,invoices:ei,...oe?{invoiceFileUrl:oe}:{},updatedAt:Date.now()})}}await ts(ln(ve,"warranty_complaints"),{partName:re.trim(),serialNumber:He.trim()||"-",replacementName:Q?jn.trim():"",replacementSn:Q?or.trim()||"-":"",replacementInvoiceUrl:oe,resolutionType:se,solutionDetail:yt.trim(),cost:H,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()}),te(""),ne(""),U(null),$e(""),R(""),Pe("Csere másikra"),be(""),Cn("0"),Gr(""),Rr(""),mn(null),rt(!1)}catch(oe){console.error("Panasz mentési hiba:",oe),Nn(`Hiba mentés közben: ${(oe==null?void 0:oe.message)||"Ismeretlen hiba"}`)}finally{Qr(!1)}}async function ya(){if(!Xr)return;const b=Xr;$n(null),await Js(Ue(ve,"warranty_complaints",b.id))}const Ud=Array.isArray(pe==null?void 0:pe.componentRows)&&pe.componentRows.length>0;return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("div",null,c.createElement("h2",{style:{margin:0}},"Garancia nyilvántartás (1 hónap)"),c.createElement("div",{className:"muted",style:{fontSize:12}},"Az eladás napjától számított 1 hónap garancia • Az eladott gépek automatikusan megjelennek")),c.createElement("div",{className:"row"},c.createElement("button",{className:"btn btn-orange",onClick:()=>bn?rt(!1):jt()},bn?c.createElement(Qe,{size:16}):c.createElement(q_,{size:16}),bn?"Bezárás":"Panasz felvétele"),c.createElement("button",{className:"btn btn-ghost",onClick:()=>{ze?(x(),q(!1)):we()}},ze?c.createElement(Qe,{size:16}):c.createElement(vO,{size:16}),ze?"Bezárás":"Teljes gép garanciába"),c.createElement("button",{className:"btn btn-green",onClick:()=>{d?(qn(),f(!1)):X()}},d?c.createElement(Qe,{size:16}):c.createElement(fr,{size:16}),d?"Bezárás":"Új tétel"))),ze&&c.createElement("form",{className:"card",onSubmit:pn,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},Z?"Teljes gép garanciájának szerkesztése":"Teljes gép felvétele garanciába (alkatrészenként)"),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Az alkatrészek alapból ki vannak generálva — töltsd ki a típusokat és SN-eket, a vevő nevét, és töltsd fel a számlákat egyben."),c.createElement("div",{className:"grid-2",style:{marginBottom:12}},c.createElement("input",{placeholder:"Gép neve (pl. Budget GAMING PC)",value:Te,onChange:b=>he(b.target.value),required:!0}),c.createElement("input",{placeholder:"Vevő neve (pl. Kovács János)",value:ue,onChange:b=>ce(b.target.value)}),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladás dátuma (+1 hónap garancia)"),c.createElement("input",{type:"date",value:Ot,onChange:b=>ct(b.target.value),required:!0})),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Megjegyzés a géphez (opcionális)"),c.createElement("input",{placeholder:"Megjegyzés...",value:Ct,onChange:b=>In(b.target.value)}))),c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)",marginBottom:12}},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("strong",null,"Alkatrészek és sorozatszámok (SN)"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"4px 9px",fontSize:12},onClick:uo},c.createElement(fr,{size:13})," Új alkatrész sor")),sr.map((b,H)=>c.createElement("div",{key:`pc-comp-${H}`,style:{display:"grid",gridTemplateColumns:"0.85fr 1.25fr 1.2fr auto",gap:8,marginBottom:8,alignItems:"center"}},c.createElement("input",{placeholder:"Kategória",value:b.category,onChange:Q=>Tt(H,"category",Q.target.value)}),c.createElement("input",{placeholder:`${b.category||"Alkatrész"} típusa (pl. RTX 3060 8 GB)`,value:b.name,onChange:Q=>Tt(H,"name",Q.target.value)}),c.createElement("input",{placeholder:"Sorozatszám (SN)",value:b.serialNumber,onChange:Q=>Tt(H,"serialNumber",Q.target.value)}),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"6px 8px"},onClick:()=>Jr(H),title:"Sor törlése"},c.createElement(Gt,{size:13}))))),c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:6}},"Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)"),c.createElement("input",{type:"file",multiple:!0,accept:"application/pdf,image/*",onChange:b=>dt(Array.from(b.target.files||[]))}),Sn.length>0&&c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:6}},"Kiválasztva (",Sn.length,"): ",Sn.map(b=>b.name).join(", ")),Jt.length>0&&c.createElement("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}},Jt.map(b=>c.createElement("span",{key:b.id,className:"badge badge-indigo",style:{display:"inline-flex",alignItems:"center",gap:6}},b.label,c.createElement("button",{type:"button",onClick:()=>Zt(H=>H.filter(Q=>Q.id!==b.id)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:0,display:"inline-flex"},title:"Számla eltávolítása"},c.createElement(Qe,{size:12})))))),An&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},An),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:Mt},Mt?"Mentés...":Z?"Módosítások mentése":"Gép mentése garanciába"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{x(),q(!1)}},"Mégse"))),bn&&c.createElement("form",{className:"card",onSubmit:Zr,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Garanciális panasz felvétele",pe?` — ${pe.name}`:""),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Válaszd ki a legördülő menüből a cserélt / garanciáztatott alkatrészt — az SN automatikusan beállítódik."),Ud?c.createElement("div",{style:{marginBottom:10}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Garanciáztatott alkatrész kiválasztása a gépből"),c.createElement("select",{value:ye,onChange:b=>Rn(b.target.value),required:!0},pe.componentRows.map((b,H)=>c.createElement("option",{key:`${b.id||H}-${H}`,value:String(H)},b.category?`[${b.category}] `:"",b.name," — SN: ",b.serialNumber||"-")))):c.createElement("div",{style:{marginBottom:10}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Garanciáztatott alkatrész kiválasztása"),c.createElement("select",{value:ie,onChange:b=>Kn(b.target.value),required:!0},Ti.length===0&&c.createElement("option",{value:""},"-- Nincs elérhető alkatrész --"),Ti.map(b=>c.createElement("option",{key:b.key,value:b.key},b.label)))),c.createElement("div",{className:"row",style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.03)",marginBottom:10,fontSize:13}},c.createElement("div",null,c.createElement("span",{className:"muted"},"Kiválasztott alkatrész: "),c.createElement("strong",null,re||"-")),c.createElement("div",null,c.createElement("span",{className:"muted"},"Automatikus SN: "),c.createElement("strong",null,He||"-"))),c.createElement("div",{className:"grid-2"},c.createElement("select",{value:se,onChange:b=>Pe(b.target.value)},GL.map(b=>c.createElement("option",{key:b,value:b},b))),c.createElement("input",{type:"number",min:"0",placeholder:"Költség neked (Ft, alapból 0)",value:fn,onChange:b=>Cn(b.target.value)})),c.createElement("div",{style:{marginTop:10}},c.createElement("input",{placeholder:"Megoldás részletei (pl. cserélve másik példányra, postaköltség, stb.)",value:yt,onChange:b=>be(b.target.value)})),se==="Csere másikra"&&c.createElement("div",{style:{marginTop:12,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.025)"}},c.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:10}},c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:Rt,onChange:b=>Bn(b.target.checked)}),c.createElement("span",null,"Régi alkatrész cseréje az újra a garancia táblában")),Rt&&c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Új alkatrész neve (pl. Ryzen 5 5600)",value:jn,onChange:b=>Gr(b.target.value),required:!0}),c.createElement("input",{placeholder:"Új alkatrész SN száma",value:or,onChange:b=>Rr(b.target.value)}),c.createElement("div",{style:{gridColumn:"1 / -1"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Új alkatrész számlája (opcionális — PDF vagy kép)"),c.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:b=>{var H;return mn(((H=b.target.files)==null?void 0:H[0])||null)}})))),Es&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Es),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:_s},_s?"Mentés...":"Panasz mentése"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>rt(!1)},"Mégse"))),d&&c.createElement("form",{className:"card",onSubmit:ga,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},p?`Garancia szerkesztése: ${p.name}`:"Új alkatrész / tétel felvétele"),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész / tétel neve (pl. RX 6700 XT)",value:T,onChange:b=>N(b.target.value),required:!0}),c.createElement("input",{placeholder:"Vevő neve (opcionális)",value:D,onChange:b=>F(b.target.value)}),c.createElement("select",{value:k,onChange:b=>_(b.target.value)},EE.map(b=>c.createElement("option",{key:b,value:b},b))),c.createElement("input",{placeholder:"Sorozatszám (SN)",value:A,onChange:b=>L(b.target.value)}),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladás dátuma (+1 hónap garancia)"),c.createElement("input",{type:"date",value:V,onChange:b=>B(b.target.value),required:!0})),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Megjegyzés (opcionális)"),c.createElement("input",{placeholder:"Megjegyzés...",value:E,onChange:b=>v(b.target.value)}))),c.createElement("div",{style:{marginTop:12,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:6}},"Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)"),c.createElement("input",{type:"file",multiple:!0,accept:"application/pdf,image/*",onChange:b=>P(Array.from(b.target.files||[]))}),C.length>0&&c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:6}},"Kiválasztva (",C.length,"): ",C.map(b=>b.name).join(", ")),w.length>0&&c.createElement("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}},w.map(b=>c.createElement("span",{key:b.id,className:"badge badge-indigo",style:{display:"inline-flex",alignItems:"center",gap:6}},b.label,c.createElement("button",{type:"button",onClick:()=>S(H=>H.filter(Q=>Q.id!==b.id)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:0,display:"inline-flex"},title:"Számla eltávolítása"},c.createElement(Qe,{size:12})))))),de&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},de),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:I},I?"Mentés...":p?"Módosítások mentése":"Mentés"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{qn(),f(!1)}},"Mégse"))),c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("div",{className:"row"},c.createElement("button",{className:`btn ${s==="active"?"":"btn-ghost"}`,onClick:()=>o("active")},"Aktív (",Dr,")"),c.createElement("button",{className:`btn ${s==="expired"?"":"btn-ghost"}`,onClick:()=>o("expired")},"Lejárt (",pa,")"),c.createElement("button",{className:`btn ${s==="all"?"":"btn-ghost"}`,onClick:()=>o("all")},"Összes (",yr.length,")")),c.createElement("div",{style:{flex:1,minWidth:200}},c.createElement("input",{placeholder:"Keresés név, vevő, SN vagy kategória alapján...",value:l,onChange:b=>u(b.target.value)}))),ws.length===0?c.createElement("div",{className:"card"},c.createElement("div",{className:"muted"},"Nincs megjeleníthető garanciális tétel ebben a nézetben.")):c.createElement("div",{className:"grid-2"},ws.map(b=>{var H;return c.createElement("div",{className:"card",key:b.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:12,borderRadius:12}},c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("div",{className:"row",style:{gap:8}},c.createElement(R1,{size:18,color:b.isExpired?"#ef4444":"#22c55e"}),c.createElement("strong",{style:{fontSize:15}},b.name)),c.createElement("div",{className:"row"},b.isAutoBuild&&c.createElement("span",{className:"badge badge-blue"},"Eladott gép"),b.isManualPc&&c.createElement("span",{className:"badge badge-purple"},"Teljes gép"),b.category&&c.createElement("span",{className:"badge badge-indigo"},b.category),c.createElement("span",{className:`badge ${b.isExpired?"badge-red":"badge-green"}`},b.isExpired?"Lejárt":b.daysLeft===0?"Ma jár le":`${b.daysLeft} nap hátra`))),b.buyerName&&c.createElement("div",{className:"muted",style:{fontSize:13,marginBottom:8,display:"inline-flex",alignItems:"center",gap:6}},c.createElement(wO,{size:13})," Vevő: ",c.createElement("strong",null,b.buyerName)),c.createElement("div",{className:"row",style:{padding:"8px 10px",borderRadius:8,background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border)",marginBottom:10,fontSize:13}},c.createElement("span",{className:"muted",style:{display:"inline-flex",alignItems:"center",gap:5}},c.createElement(fO,{size:13})," Eladva: ",c.createElement("strong",null,$h(b.soldAt))),c.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5},className:b.isExpired?"red":"green"},b.isExpired&&c.createElement(EO,{size:13}),"Lejár: ",c.createElement("strong",null,$h(b.expiresAt)))),b.componentRows&&b.componentRows.length>0?c.createElement("div",{style:{border:"1px solid var(--border)",borderRadius:8,padding:"4px 10px",background:"rgba(255, 255, 255, 0.015)"}},b.componentRows.map((Q,ke)=>c.createElement("div",{key:`${Q.id||ke}-${ke}`,className:"row",style:{padding:"6px 0",borderBottom:ke<b.componentRows.length-1?"1px solid rgba(255,255,255,0.06)":"none",gap:8}},c.createElement("div",{style:{minWidth:0}},c.createElement("div",{style:{fontSize:13,fontWeight:500}},Q.name),Q.category&&c.createElement("div",{className:"muted",style:{fontSize:11}},Q.category)),c.createElement("span",{className:"muted",style:{fontSize:12,textAlign:"right",wordBreak:"break-all"}},"SN: ",Q.serialNumber||"-")))):c.createElement("div",{className:"muted",style:{fontSize:13}},"SN: ",c.createElement("strong",null,b.serialNumber)),b.note&&c.createElement("div",{className:"muted",style:{marginTop:8,fontSize:12}},b.note),((H=b.invoices)==null?void 0:H.length)>0&&c.createElement("div",{style:{marginTop:10,paddingTop:8,borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",flexDirection:"column",gap:4}},b.invoices.map(Q=>c.createElement("a",{key:`${b.id}-${Q.id}`,href:Q.url,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:5}},c.createElement(Ml,{size:13})," Számla: ",Q.label)))),c.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>Ce(b)},c.createElement(mg,{size:14})," Szerkesztés"),c.createElement("button",{className:"btn btn-ghost",onClick:()=>jt(b)},c.createElement(q_,{size:14})," Panasz"),!b.isAutoBuild&&c.createElement("button",{className:"btn btn-red",onClick:()=>st(b),title:"Törlés"},c.createElement(Gt,{size:14}))))})),c.createElement("div",{className:"card",style:{marginTop:18,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Garanciális panaszok (",r.length,")"),c.createElement("span",{className:"muted",style:{fontSize:13}},"Összes költség: ",c.createElement("strong",{className:"red"},Yr.toLocaleString("hu-HU")," Ft"))),r.length===0?c.createElement("div",{className:"muted"},"Még nincs rögzített garanciális panasz."):r.map(b=>c.createElement("div",{key:b.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",{className:"row"},c.createElement("div",null,c.createElement("strong",null,b.partName),b.serialNumber&&b.serialNumber!=="-"&&c.createElement("span",{className:"muted",style:{marginLeft:8,fontSize:12}},"SN: ",b.serialNumber),b.replacementName&&c.createElement("div",{className:"green",style:{fontSize:12,marginTop:2}},"→ Új csere: ",c.createElement("strong",null,b.replacementName),b.replacementSn&&b.replacementSn!=="-"?` (SN: ${b.replacementSn})`:""),c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:2}},"Megoldás: ",c.createElement("strong",null,b.resolutionType||"Egyéb"),b.solutionDetail?` — ${b.solutionDetail}`:"",b.createdAt?` • ${$h(b.createdAt)}`:""),b.replacementInvoiceUrl&&c.createElement("div",{style:{marginTop:4}},c.createElement("a",{href:b.replacementInvoiceUrl,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Cserealkatrész számlája"))),c.createElement("div",{className:"row"},c.createElement("strong",{className:Number(b.cost||0)>0?"red":"green"},Number(b.cost||0).toLocaleString("hu-HU")," Ft"),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},onClick:()=>$n(b),title:"Panasz törlése"},c.createElement(Gt,{size:13}))))))),Pr&&c.createElement("div",{onClick:()=>st(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:b=>b.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Garancia tétel törlése"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>st(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13}},"Biztosan törlöd a garancia listából: ",c.createElement("strong",null,Pr.name),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>st(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:Ts},c.createElement(Gt,{size:14})," Törlés")))),Xr&&c.createElement("div",{onClick:()=>$n(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:b=>b.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Panasz törlése"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>$n(null)},c.createElement(Qe,{size:16}))),c.createElement("div",{style:{fontSize:13}},"Biztosan törlöd ezt a panaszt: ",c.createElement("strong",null,Xr.partName),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>$n(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:ya},c.createElement(Gt,{size:14})," Törlés")))))}const wE=["fabianbal500@gmail.com","beastmaster0626@gmail.com"],qh="BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w";function XL(){const[t,e]=M.useState([]),[n,r]=M.useState(null),[i,s]=M.useState(!1),[o,l]=M.useState(""),[u,d]=M.useState(""),[f,p]=M.useState(""),[g,T]=M.useState([]),[N,D]=M.useState([]),[F,k]=M.useState([]),[_,A]=M.useState("inventory"),[L,V]=M.useState([]),[B,E]=M.useState([]),[v,w]=M.useState([]),[S,C]=M.useState([]);M.useEffect(()=>{const de=fN(Uh,async Ee=>{Ee&&wE.includes((Ee.email||"").toLowerCase())?(r(Ee),await P(Ee.email.toLowerCase())):r(null),s(!0)});return()=>de()},[]),M.useEffect(()=>{if(!n)return;const de=Ni(bi(ln(ve,"parts"),Ci("createdAt","desc")),ue=>{V(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),Ee=Ni(bi(ln(ve,"builds"),Ci("createdAt","desc")),ue=>{E(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),ze=Ni(bi(ln(ve,"deal_watches"),Ci("createdAt","desc")),ue=>{w(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),q=Ni(bi(ln(ve,"found_deals"),Ci("foundAt","desc")),ue=>{C(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),Z=Ni(bi(ln(ve,"card_expenses"),Ci("createdAt","desc")),ue=>{e(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),ae=Ni(bi(ln(ve,"sales_log"),Ci("soldAt","desc")),ue=>{T(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),Te=Ni(bi(ln(ve,"warranty_items"),Ci("soldAt","desc")),ue=>{D(ue.docs.map(ce=>({id:ce.id,...ce.data()})))}),he=Ni(bi(ln(ve,"warranty_complaints"),Ci("createdAt","desc")),ue=>{k(ue.docs.map(ce=>({id:ce.id,...ce.data()})))});return()=>{de(),Ee(),ze(),q(),Z(),ae(),Te(),he()}},[n]);async function P(de){try{if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return;const ze=await VL();if(!ze||!qh||qh==="BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w")return;const q=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),Z=await uO(ze,{vapidKey:qh,serviceWorkerRegistration:q});if(Z){const ae=de.replace(/[^a-z0-9]/g,"_");await fm(Ue(ve,"device_tokens",ae),{email:de,token:Z,updatedAt:FD()},{merge:!0})}}catch{}}async function I(de){de.preventDefault(),p("");const Ee=o.trim().toLowerCase();if(!wE.includes(Ee)){p("Ez az e-mail cím nincs engedélyezve.");return}try{await cN(Uh,Ee,u)}catch{p("Hibás e-mail vagy jelszó.")}}if(!i)return null;if(!n)return c.createElement("div",{style:{maxWidth:380,margin:"80px auto",padding:16}},c.createElement("form",{className:"card",onSubmit:I},c.createElement("div",{style:{textAlign:"center",marginBottom:16}},c.createElement(gm,{size:40,color:"#3b82f6"}),c.createElement("h2",{style:{margin:"8px 0 4px"}},"PC Bolt Manager"),c.createElement("div",{className:"muted"},"Zártkörű Webes Készlet & Deal Hunter")),c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10}},c.createElement("input",{type:"email",placeholder:"E-mail cím",value:o,onChange:de=>l(de.target.value),required:!0}),c.createElement("input",{type:"password",placeholder:"Jelszó",value:u,onChange:de=>d(de.target.value),required:!0}),f&&c.createElement("div",{className:"red",style:{fontSize:13}},f),c.createElement("button",{className:"btn",type:"submit",style:{justifyContent:"center",padding:11}},"Belépés"))));const Se=[{id:"inventory",label:"Készlet",icon:_O},{id:"builder",label:"Gépépítő",icon:IO},{id:"finance",label:"Pénzügy",icon:TO},{id:"warranty",label:"Garancia",icon:R1},{id:"deals",label:"Deal Hunter",icon:N1}];return c.createElement("div",{className:"app-shell"},c.createElement("aside",{className:"desktop-sidebar"},c.createElement("div",{className:"row",style:{marginBottom:12}},c.createElement("strong",{style:{display:"flex",alignItems:"center",gap:8}},c.createElement(gm,{size:20,color:"#3b82f6"})," PC Bolt"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>mN(Uh),title:"Kilépés"},c.createElement(yO,{size:16}))),Se.map(de=>{const Ee=de.icon;return c.createElement("button",{key:de.id,className:_===de.id?"active":"",onClick:()=>A(de.id)},c.createElement(Ee,{size:18})," ",de.label)})),c.createElement("main",{className:"main-content"},_==="inventory"&&c.createElement(zL,{parts:L,userEmail:n.email}),_==="builder"&&c.createElement(jL,{parts:L,builds:B}),_==="finance"&&c.createElement(WL,{parts:L,builds:B,cardExpenses:t,manualSales:g,warrantyComplaints:F,userEmail:n.email}),_==="warranty"&&c.createElement(QL,{parts:L,builds:B,warrantyItems:N,warrantyComplaints:F,userEmail:n.email}),_==="deals"&&c.createElement(qL,{dealWatches:v,foundDeals:S})),c.createElement("nav",{className:"mobile-bottom-nav"},Se.map(de=>{const Ee=de.icon;return c.createElement("button",{key:de.id,className:_===de.id?"active":"",onClick:()=>A(de.id)},c.createElement(Ee,{size:20}),c.createElement("span",null,de.label))})))}Kh.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(XL,null)));
