(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wE={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=Symbol.for("react.element"),dS=Symbol.for("react.portal"),hS=Symbol.for("react.fragment"),fS=Symbol.for("react.strict_mode"),mS=Symbol.for("react.profiler"),pS=Symbol.for("react.provider"),gS=Symbol.for("react.context"),yS=Symbol.for("react.forward_ref"),vS=Symbol.for("react.suspense"),_S=Symbol.for("react.memo"),ES=Symbol.for("react.lazy"),qg=Symbol.iterator;function wS(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var TE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IE=Object.assign,SE={};function sa(t,e,n){this.props=t,this.context=e,this.refs=SE,this.updater=n||TE}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kE(){}kE.prototype=sa.prototype;function _m(t,e,n){this.props=t,this.context=e,this.refs=SE,this.updater=n||TE}var Em=_m.prototype=new kE;Em.constructor=_m;IE(Em,sa.prototype);Em.isPureReactComponent=!0;var Kg=Array.isArray,AE=Object.prototype.hasOwnProperty,wm={current:null},bE={key:!0,ref:!0,__self:!0,__source:!0};function CE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)AE.call(e,r)&&!bE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ll,type:t,key:s,ref:o,props:i,_owner:wm.current}}function TS(t,e){return{$$typeof:Ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ll}function IS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gg=/\/+/g;function Gd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IS(""+t.key):e.toString(36)}function xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ll:case dS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gd(o,0):r,Kg(i)?(n="",t!=null&&(n=t.replace(Gg,"$&/")+"/"),xu(i,e,n,"",function(d){return d})):i!=null&&(Tm(i)&&(i=TS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gd(s,l);o+=xu(s,e,n,u,i)}else if(u=wS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gd(s,l++),o+=xu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var En={current:null},Ou={transition:null},kS={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:wm};function NE(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!Tm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=sa;ke.Fragment=hS;ke.Profiler=mS;ke.PureComponent=_m;ke.StrictMode=fS;ke.Suspense=vS;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;ke.act=NE;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=IE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)AE.call(e,u)&&!bE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ll,type:t.type,key:i,ref:s,props:r,_owner:o}};ke.createContext=function(t){return t={$$typeof:gS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pS,_context:t},t.Consumer=t};ke.createElement=CE;ke.createFactory=function(t){var e=CE.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:yS,render:t}};ke.isValidElement=Tm;ke.lazy=function(t){return{$$typeof:ES,_payload:{_status:-1,_result:t},_init:SS}};ke.memo=function(t,e){return{$$typeof:_S,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};ke.unstable_act=NE;ke.useCallback=function(t,e){return En.current.useCallback(t,e)};ke.useContext=function(t){return En.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return En.current.useDeferredValue(t)};ke.useEffect=function(t,e){return En.current.useEffect(t,e)};ke.useId=function(){return En.current.useId()};ke.useImperativeHandle=function(t,e,n){return En.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return En.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return En.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return En.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return En.current.useReducer(t,e,n)};ke.useRef=function(t){return En.current.useRef(t)};ke.useState=function(t){return En.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return En.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return En.current.useTransition()};ke.version="18.3.1";wE.exports=ke;var M=wE.exports;const c=cS(M);var Kh={},RE={exports:{}},Zn={},PE={exports:{}},DE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,te){var oe=K.length;K.push(te);e:for(;0<oe;){var ve=oe-1>>>1,ue=K[ve];if(0<i(ue,te))K[ve]=te,K[oe]=ue,oe=ve;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var te=K[0],oe=K.pop();if(oe!==te){K[0]=oe;e:for(var ve=0,ue=K.length,ce=ue>>>1;ve<ce;){var de=2*(ve+1)-1,ut=K[de],nt=de+1,Ct=K[nt];if(0>i(ut,oe))nt<ue&&0>i(Ct,ut)?(K[ve]=Ct,K[nt]=oe,ve=nt):(K[ve]=ut,K[de]=oe,ve=de);else if(nt<ue&&0>i(Ct,oe))K[ve]=Ct,K[nt]=oe,ve=nt;else break e}}return te}function i(K,te){var oe=K.sortIndex-te.sortIndex;return oe!==0?oe:K.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,p=null,g=3,T=!1,N=!1,D=!1,F=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var te=n(d);te!==null;){if(te.callback===null)r(d);else if(te.startTime<=K)r(d),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(d)}}function L(K){if(D=!1,A(K),!N)if(n(u)!==null)N=!0,Te(V);else{var te=n(d);te!==null&&$e(L,te.startTime-K)}}function V(K,te){N=!1,D&&(D=!1,k(v),v=-1),T=!0;var oe=g;try{for(A(te),p=n(u);p!==null&&(!(p.expirationTime>te)||K&&!C());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,g=p.priorityLevel;var ue=ve(p.expirationTime<=te);te=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),A(te)}else r(u);p=n(u)}if(p!==null)var ce=!0;else{var de=n(d);de!==null&&$e(L,de.startTime-te),ce=!1}return ce}finally{p=null,g=oe,T=!1}}var B=!1,E=null,v=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function P(){if(E!==null){var K=t.unstable_now();S=K;var te=!0;try{te=E(!0,K)}finally{te?I():(B=!1,E=null)}}else B=!1}var I;if(typeof _=="function")I=function(){_(P)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,le=Ie.port2;Ie.port1.onmessage=P,I=function(){le.postMessage(null)}}else I=function(){F(P,0)};function Te(K){E=K,B||(B=!0,I())}function $e(K,te){v=F(function(){K(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){N||T||(N=!0,Te(V))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var oe=g;g=te;try{return K()}finally{g=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,te){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var oe=g;g=K;try{return te()}finally{g=oe}},t.unstable_scheduleCallback=function(K,te,oe){var ve=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ve+oe:ve):oe=ve,K){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=oe+ue,K={id:f++,callback:te,priorityLevel:K,startTime:oe,expirationTime:ue,sortIndex:-1},oe>ve?(K.sortIndex=oe,e(d,K),n(u)===null&&K===n(d)&&(D?(k(v),v=-1):D=!0,$e(L,oe-ve))):(K.sortIndex=ue,e(u,K),N||T||(N=!0,Te(V))),K},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(K){var te=g;return function(){var oe=g;g=te;try{return K.apply(this,arguments)}finally{g=oe}}}})(DE);PE.exports=DE;var AS=PE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=M,Jn=AS;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xE=new Set,sl={};function no(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(sl[t]=e,t=0;t<e.length;t++)xE.add(e[t])}var ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gh=Object.prototype.hasOwnProperty,CS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Xg={};function NS(t){return Gh.call(Xg,t)?!0:Gh.call(Qg,t)?!1:CS.test(t)?Xg[t]=!0:(Qg[t]=!0,!1)}function RS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PS(t,e,n,r){if(e===null||typeof e>"u"||RS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new wn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new wn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new wn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new wn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new wn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new wn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new wn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new wn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new wn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Im=/[\-:]([a-z])/g;function Sm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Im,Sm);Gt[e]=new wn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Im,Sm);Gt[e]=new wn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Im,Sm);Gt[e]=new wn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new wn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new wn(t,1,!1,t.toLowerCase(),null,!0,!0)});function km(t,e,n,r){var i=Gt.hasOwnProperty(e)?Gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PS(e,n,i,r)&&(n=null),r||i===null?NS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vi=bS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),wo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),OE=Symbol.for("react.provider"),ME=Symbol.for("react.context"),bm=Symbol.for("react.forward_ref"),Xh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),Cm=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),LE=Symbol.for("react.offscreen"),Yg=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,Qd;function Da(t){if(Qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+t}var Xd=!1;function Yd(t,e){if(!t||Xd)return"";Xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function DS(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=Yd(t.type,!1),t;case 11:return t=Yd(t.type.render,!1),t;case 1:return t=Yd(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case To:return"Fragment";case wo:return"Portal";case Qh:return"Profiler";case Am:return"StrictMode";case Xh:return"Suspense";case Yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ME:return(t.displayName||"Context")+".Consumer";case OE:return(t._context.displayName||"Context")+".Provider";case bm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cm:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function xS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Am?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ns(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function VE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OS(t){var e=VE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=OS(t))}function FE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=VE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zh(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ns(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zE(t,e){e=e.checked,e!=null&&km(t,"checked",e,!1)}function ef(t,e){zE(t,e);var n=ns(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,ns(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function Oo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ns(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(xa(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ns(n)}}function UE(t,e){var n=ns(e.value),r=ns(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function BE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?BE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,jE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MS=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){MS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function $E(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function HE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$E(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LS=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(LS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Nm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,Mo=null,Lo=null;function ny(t){if(t=zl(t)){if(typeof lf!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Xc(e),lf(t.stateNode,t.type,e))}}function WE(t){Mo?Lo?Lo.push(t):Lo=[t]:Mo=t}function qE(){if(Mo){var t=Mo,e=Lo;if(Lo=Mo=null,ny(t),e)for(t=0;t<e.length;t++)ny(e[t])}}function KE(t,e){return t(e)}function GE(){}var Jd=!1;function QE(t,e,n){if(Jd)return t(e,n);Jd=!0;try{return KE(t,e,n)}finally{Jd=!1,(Mo!==null||Lo!==null)&&(GE(),qE())}}function al(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var uf=!1;if(ci)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{uf=!1}function VS(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var $a=!1,nc=null,rc=!1,cf=null,FS={onError:function(t){$a=!0,nc=t}};function zS(t,e,n,r,i,s,o,l,u){$a=!1,nc=null,VS.apply(FS,arguments)}function US(t,e,n,r,i,s,o,l,u){if(zS.apply(this,arguments),$a){if($a){var d=nc;$a=!1,nc=null}else throw Error(q(198));rc||(rc=!0,cf=d)}}function ro(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function XE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ry(t){if(ro(t)!==t)throw Error(q(188))}function BS(t){var e=t.alternate;if(!e){if(e=ro(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ry(i),t;if(s===r)return ry(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function YE(t){return t=BS(t),t!==null?JE(t):null}function JE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=JE(t);if(e!==null)return e;t=t.sibling}return null}var ZE=Jn.unstable_scheduleCallback,iy=Jn.unstable_cancelCallback,jS=Jn.unstable_shouldYield,$S=Jn.unstable_requestPaint,Et=Jn.unstable_now,HS=Jn.unstable_getCurrentPriorityLevel,Rm=Jn.unstable_ImmediatePriority,ew=Jn.unstable_UserBlockingPriority,ic=Jn.unstable_NormalPriority,WS=Jn.unstable_LowPriority,tw=Jn.unstable_IdlePriority,qc=null,Vr=null;function qS(t){if(Vr&&typeof Vr.onCommitFiberRoot=="function")try{Vr.onCommitFiberRoot(qc,t,void 0,(t.current.flags&128)===128)}catch{}}var Sr=Math.clz32?Math.clz32:QS,KS=Math.log,GS=Math.LN2;function QS(t){return t>>>=0,t===0?32:31-(KS(t)/GS|0)|0}var du=64,hu=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Oa(l):(s&=o,s!==0&&(r=Oa(s)))}else o=n&~i,o!==0?r=Oa(o):s!==0&&(r=Oa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sr(e),i=1<<n,r|=t[n],e&=~i;return r}function XS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Sr(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=XS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nw(){var t=du;return du<<=1,!(du&4194240)&&(du=64),t}function Zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sr(e),t[e]=n}function JS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Be=0;function rw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iw,Dm,sw,ow,aw,hf=!1,fu=[],$i=null,Hi=null,Wi=null,ll=new Map,ul=new Map,xi=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sy(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function Sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zl(e),e!==null&&Dm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ek(t,e,n,r,i){switch(e){case"focusin":return $i=Sa($i,t,e,n,r,i),!0;case"dragenter":return Hi=Sa(Hi,t,e,n,r,i),!0;case"mouseover":return Wi=Sa(Wi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ll.set(s,Sa(ll.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ul.set(s,Sa(ul.get(s)||null,t,e,n,r,i)),!0}return!1}function lw(t){var e=Ds(t.target);if(e!==null){var n=ro(e);if(n!==null){if(e=n.tag,e===13){if(e=XE(n),e!==null){t.blockedOn=e,aw(t.priority,function(){sw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=zl(n),e!==null&&Dm(e),t.blockedOn=n,!1;e.shift()}return!0}function oy(t,e,n){Mu(t)&&n.delete(e)}function tk(){hf=!1,$i!==null&&Mu($i)&&($i=null),Hi!==null&&Mu(Hi)&&(Hi=null),Wi!==null&&Mu(Wi)&&(Wi=null),ll.forEach(oy),ul.forEach(oy)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,tk)))}function cl(t){function e(i){return ka(i,t)}if(0<fu.length){ka(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for($i!==null&&ka($i,t),Hi!==null&&ka(Hi,t),Wi!==null&&ka(Wi,t),ll.forEach(e),ul.forEach(e),n=0;n<xi.length;n++)r=xi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)lw(n),n.blockedOn===null&&xi.shift()}var Vo=vi.ReactCurrentBatchConfig,oc=!0;function nk(t,e,n,r){var i=Be,s=Vo.transition;Vo.transition=null;try{Be=1,xm(t,e,n,r)}finally{Be=i,Vo.transition=s}}function rk(t,e,n,r){var i=Be,s=Vo.transition;Vo.transition=null;try{Be=4,xm(t,e,n,r)}finally{Be=i,Vo.transition=s}}function xm(t,e,n,r){if(oc){var i=ff(t,e,n,r);if(i===null)uh(t,e,r,ac,n),sy(t,r);else if(ek(i,t,e,n,r))r.stopPropagation();else if(sy(t,r),e&4&&-1<ZS.indexOf(t)){for(;i!==null;){var s=zl(i);if(s!==null&&iw(s),s=ff(t,e,n,r),s===null&&uh(t,e,r,ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uh(t,e,r,null,n)}}var ac=null;function ff(t,e,n,r){if(ac=null,t=Nm(r),t=Ds(t),t!==null)if(e=ro(t),e===null)t=null;else if(n=e.tag,n===13){if(t=XE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function uw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HS()){case Rm:return 1;case ew:return 4;case ic:case WS:return 16;case tw:return 536870912;default:return 16}default:return 16}}var Ui=null,Om=null,Lu=null;function cw(){if(Lu)return Lu;var t,e=Om,n=e.length,r,i="value"in Ui?Ui.value:Ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lu=i.slice(t,1<r?1-r:void 0)}function Vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mu(){return!0}function ay(){return!1}function er(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?mu:ay,this.isPropagationStopped=ay,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mm=er(oa),Fl=at({},oa,{view:0,detail:0}),ik=er(Fl),eh,th,Aa,Kc=at({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(eh=t.screenX-Aa.screenX,th=t.screenY-Aa.screenY):th=eh=0,Aa=t),eh)},movementY:function(t){return"movementY"in t?t.movementY:th}}),ly=er(Kc),sk=at({},Kc,{dataTransfer:0}),ok=er(sk),ak=at({},Fl,{relatedTarget:0}),nh=er(ak),lk=at({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),uk=er(lk),ck=at({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dk=er(ck),hk=at({},oa,{data:0}),uy=er(hk),fk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pk[t])?!!e[t]:!1}function Lm(){return gk}var yk=at({},Fl,{key:function(t){if(t.key){var e=fk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lm,charCode:function(t){return t.type==="keypress"?Vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vk=er(yk),_k=at({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cy=er(_k),Ek=at({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lm}),wk=er(Ek),Tk=at({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ik=er(Tk),Sk=at({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kk=er(Sk),Ak=[9,13,27,32],Vm=ci&&"CompositionEvent"in window,Ha=null;ci&&"documentMode"in document&&(Ha=document.documentMode);var bk=ci&&"TextEvent"in window&&!Ha,dw=ci&&(!Vm||Ha&&8<Ha&&11>=Ha),dy=" ",hy=!1;function hw(t,e){switch(t){case"keyup":return Ak.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Io=!1;function Ck(t,e){switch(t){case"compositionend":return fw(e);case"keypress":return e.which!==32?null:(hy=!0,dy);case"textInput":return t=e.data,t===dy&&hy?null:t;default:return null}}function Nk(t,e){if(Io)return t==="compositionend"||!Vm&&hw(t,e)?(t=cw(),Lu=Om=Ui=null,Io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dw&&e.locale!=="ko"?null:e.data;default:return null}}var Rk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rk[t.type]:e==="textarea"}function mw(t,e,n,r){WE(r),e=lc(e,"onChange"),0<e.length&&(n=new Mm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wa=null,dl=null;function Pk(t){kw(t,0)}function Gc(t){var e=Ao(t);if(FE(e))return t}function Dk(t,e){if(t==="change")return e}var pw=!1;if(ci){var rh;if(ci){var ih="oninput"in document;if(!ih){var my=document.createElement("div");my.setAttribute("oninput","return;"),ih=typeof my.oninput=="function"}rh=ih}else rh=!1;pw=rh&&(!document.documentMode||9<document.documentMode)}function py(){Wa&&(Wa.detachEvent("onpropertychange",gw),dl=Wa=null)}function gw(t){if(t.propertyName==="value"&&Gc(dl)){var e=[];mw(e,dl,t,Nm(t)),QE(Pk,e)}}function xk(t,e,n){t==="focusin"?(py(),Wa=e,dl=n,Wa.attachEvent("onpropertychange",gw)):t==="focusout"&&py()}function Ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(dl)}function Mk(t,e){if(t==="click")return Gc(e)}function Lk(t,e){if(t==="input"||t==="change")return Gc(e)}function Vk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ar=typeof Object.is=="function"?Object.is:Vk;function hl(t,e){if(Ar(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gh.call(e,i)||!Ar(t[i],e[i]))return!1}return!0}function gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yy(t,e){var n=gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gy(n)}}function yw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vw(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fk(t){var e=vw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yw(n.ownerDocument.documentElement,n)){if(r!==null&&Fm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=yy(n,s);var o=yy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zk=ci&&"documentMode"in document&&11>=document.documentMode,So=null,mf=null,qa=null,pf=!1;function vy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||So==null||So!==tc(r)||(r=So,"selectionStart"in r&&Fm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qa&&hl(qa,r)||(qa=r,r=lc(mf,"onSelect"),0<r.length&&(e=new Mm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=So)))}function pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ko={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},sh={},_w={};ci&&(_w=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Qc(t){if(sh[t])return sh[t];if(!ko[t])return t;var e=ko[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _w)return sh[t]=e[n];return t}var Ew=Qc("animationend"),ww=Qc("animationiteration"),Tw=Qc("animationstart"),Iw=Qc("transitionend"),Sw=new Map,_y="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ds(t,e){Sw.set(t,e),no(e,[t])}for(var oh=0;oh<_y.length;oh++){var ah=_y[oh],Uk=ah.toLowerCase(),Bk=ah[0].toUpperCase()+ah.slice(1);ds(Uk,"on"+Bk)}ds(Ew,"onAnimationEnd");ds(ww,"onAnimationIteration");ds(Tw,"onAnimationStart");ds("dblclick","onDoubleClick");ds("focusin","onFocus");ds("focusout","onBlur");ds(Iw,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Ey(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,US(r,e,void 0,t),t.currentTarget=null}function kw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ey(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ey(i,l,d),s=u}}}if(rc)throw t=cf,rc=!1,cf=null,t}function Je(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var r=t+"__bubble";n.has(r)||(Aw(e,t,2,!1),n.add(r))}function lh(t,e,n){var r=0;e&&(r|=4),Aw(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[gu]){t[gu]=!0,xE.forEach(function(n){n!=="selectionchange"&&(jk.has(n)||lh(n,!1,t),lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,lh("selectionchange",!1,e))}}function Aw(t,e,n,r){switch(uw(e)){case 1:var i=nk;break;case 4:i=rk;break;default:i=xm}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ds(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}QE(function(){var d=s,f=Nm(n),p=[];e:{var g=Sw.get(t);if(g!==void 0){var T=Mm,N=t;switch(t){case"keypress":if(Vu(n)===0)break e;case"keydown":case"keyup":T=vk;break;case"focusin":N="focus",T=nh;break;case"focusout":N="blur",T=nh;break;case"beforeblur":case"afterblur":T=nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ly;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=ok;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=wk;break;case Ew:case ww:case Tw:T=uk;break;case Iw:T=Ik;break;case"scroll":T=ik;break;case"wheel":T=kk;break;case"copy":case"cut":case"paste":T=dk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=cy}var D=(e&4)!==0,F=!D&&t==="scroll",k=D?g!==null?g+"Capture":null:g;D=[];for(var _=d,A;_!==null;){A=_;var L=A.stateNode;if(A.tag===5&&L!==null&&(A=L,k!==null&&(L=al(_,k),L!=null&&D.push(ml(_,L,A)))),F)break;_=_.return}0<D.length&&(g=new T(g,N,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==af&&(N=n.relatedTarget||n.fromElement)&&(Ds(N)||N[di]))break e;if((T||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,T?(N=n.relatedTarget||n.toElement,T=d,N=N?Ds(N):null,N!==null&&(F=ro(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(T=null,N=d),T!==N)){if(D=ly,L="onMouseLeave",k="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=cy,L="onPointerLeave",k="onPointerEnter",_="pointer"),F=T==null?g:Ao(T),A=N==null?g:Ao(N),g=new D(L,_+"leave",T,n,f),g.target=F,g.relatedTarget=A,L=null,Ds(f)===d&&(D=new D(k,_+"enter",N,n,f),D.target=A,D.relatedTarget=F,L=D),F=L,T&&N)t:{for(D=T,k=N,_=0,A=D;A;A=po(A))_++;for(A=0,L=k;L;L=po(L))A++;for(;0<_-A;)D=po(D),_--;for(;0<A-_;)k=po(k),A--;for(;_--;){if(D===k||k!==null&&D===k.alternate)break t;D=po(D),k=po(k)}D=null}else D=null;T!==null&&wy(p,g,T,D,!1),N!==null&&F!==null&&wy(p,F,N,D,!0)}}e:{if(g=d?Ao(d):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var V=Dk;else if(fy(g))if(pw)V=Lk;else{V=Ok;var B=xk}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=Mk);if(V&&(V=V(t,d))){mw(p,V,n,f);break e}B&&B(t,g,d),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&tf(g,"number",g.value)}switch(B=d?Ao(d):window,t){case"focusin":(fy(B)||B.contentEditable==="true")&&(So=B,mf=d,qa=null);break;case"focusout":qa=mf=So=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,vy(p,n,f);break;case"selectionchange":if(zk)break;case"keydown":case"keyup":vy(p,n,f)}var E;if(Vm)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Io?hw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(dw&&n.locale!=="ko"&&(Io||v!=="onCompositionStart"?v==="onCompositionEnd"&&Io&&(E=cw()):(Ui=f,Om="value"in Ui?Ui.value:Ui.textContent,Io=!0)),B=lc(d,v),0<B.length&&(v=new uy(v,t,null,n,f),p.push({event:v,listeners:B}),E?v.data=E:(E=fw(n),E!==null&&(v.data=E)))),(E=bk?Ck(t,n):Nk(t,n))&&(d=lc(d,"onBeforeInput"),0<d.length&&(f=new uy("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=E))}kw(p,e)})}function ml(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(ml(t,s,i)),s=al(t,e),s!=null&&r.push(ml(t,s,i))),t=t.return}return r}function po(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=al(n,s),u!=null&&o.unshift(ml(n,u,l))):i||(u=al(n,s),u!=null&&o.push(ml(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $k=/\r\n?/g,Hk=/\u0000|\uFFFD/g;function Ty(t){return(typeof t=="string"?t:""+t).replace($k,`
`).replace(Hk,"")}function yu(t,e,n){if(e=Ty(e),Ty(t)!==e&&n)throw Error(q(425))}function uc(){}var gf=null,yf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,Wk=typeof clearTimeout=="function"?clearTimeout:void 0,Iy=typeof Promise=="function"?Promise:void 0,qk=typeof queueMicrotask=="function"?queueMicrotask:typeof Iy<"u"?function(t){return Iy.resolve(null).then(t).catch(Kk)}:_f;function Kk(t){setTimeout(function(){throw t})}function ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cl(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var aa=Math.random().toString(36).slice(2),Mr="__reactFiber$"+aa,pl="__reactProps$"+aa,di="__reactContainer$"+aa,Ef="__reactEvents$"+aa,Gk="__reactListeners$"+aa,Qk="__reactHandles$"+aa;function Ds(t){var e=t[Mr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[di]||n[Mr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sy(t);t!==null;){if(n=t[Mr])return n;t=Sy(t)}return e}t=n,n=t.parentNode}return null}function zl(t){return t=t[Mr]||t[di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Xc(t){return t[pl]||null}var wf=[],bo=-1;function hs(t){return{current:t}}function et(t){0>bo||(t.current=wf[bo],wf[bo]=null,bo--)}function Xe(t,e){bo++,wf[bo]=t.current,t.current=e}var rs={},un=hs(rs),Dn=hs(!1),js=rs;function qo(t,e){var n=t.type.contextTypes;if(!n)return rs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xn(t){return t=t.childContextTypes,t!=null}function cc(){et(Dn),et(un)}function ky(t,e,n){if(un.current!==rs)throw Error(q(168));Xe(un,e),Xe(Dn,n)}function bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,xS(t)||"Unknown",i));return at({},n,r)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rs,js=un.current,Xe(un,t),Xe(Dn,Dn.current),!0}function Ay(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=bw(t,e,js),r.__reactInternalMemoizedMergedChildContext=t,et(Dn),et(un),Xe(un,t)):et(Dn),Xe(Dn,n)}var ri=null,Yc=!1,dh=!1;function Cw(t){ri===null?ri=[t]:ri.push(t)}function Xk(t){Yc=!0,Cw(t)}function fs(){if(!dh&&ri!==null){dh=!0;var t=0,e=Be;try{var n=ri;for(Be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ri=null,Yc=!1}catch(i){throw ri!==null&&(ri=ri.slice(t+1)),ZE(Rm,fs),i}finally{Be=e,dh=!1}}return null}var Co=[],No=0,hc=null,fc=0,sr=[],or=0,$s=null,ii=1,si="";function Ns(t,e){Co[No++]=fc,Co[No++]=hc,hc=t,fc=e}function Nw(t,e,n){sr[or++]=ii,sr[or++]=si,sr[or++]=$s,$s=t;var r=ii;t=si;var i=32-Sr(r)-1;r&=~(1<<i),n+=1;var s=32-Sr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ii=1<<32-Sr(e)+i|n<<i|r,si=s+t}else ii=1<<s|n<<i|r,si=t}function zm(t){t.return!==null&&(Ns(t,1),Nw(t,1,0))}function Um(t){for(;t===hc;)hc=Co[--No],Co[No]=null,fc=Co[--No],Co[No]=null;for(;t===$s;)$s=sr[--or],sr[or]=null,si=sr[--or],sr[or]=null,ii=sr[--or],sr[or]=null}var Yn=null,Gn=null,rt=!1,Tr=null;function Rw(t,e){var n=lr(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function by(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Yn=t,Gn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Yn=t,Gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$s!==null?{id:ii,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lr(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Yn=t,Gn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(rt){var e=Gn;if(e){var n=e;if(!by(t,e)){if(Tf(t))throw Error(q(418));e=qi(n.nextSibling);var r=Yn;e&&by(t,e)?Rw(r,n):(t.flags=t.flags&-4097|2,rt=!1,Yn=t)}}else{if(Tf(t))throw Error(q(418));t.flags=t.flags&-4097|2,rt=!1,Yn=t}}}function Cy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yn=t}function vu(t){if(t!==Yn)return!1;if(!rt)return Cy(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Gn)){if(Tf(t))throw Pw(),Error(q(418));for(;e;)Rw(t,e),e=qi(e.nextSibling)}if(Cy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Gn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Gn=null}}else Gn=Yn?qi(t.stateNode.nextSibling):null;return!0}function Pw(){for(var t=Gn;t;)t=qi(t.nextSibling)}function Ko(){Gn=Yn=null,rt=!1}function Bm(t){Tr===null?Tr=[t]:Tr.push(t)}var Yk=vi.ReactCurrentBatchConfig;function ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ny(t){var e=t._init;return e(t._payload)}function Dw(t){function e(k,_){if(t){var A=k.deletions;A===null?(k.deletions=[_],k.flags|=16):A.push(_)}}function n(k,_){if(!t)return null;for(;_!==null;)e(k,_),_=_.sibling;return null}function r(k,_){for(k=new Map;_!==null;)_.key!==null?k.set(_.key,_):k.set(_.index,_),_=_.sibling;return k}function i(k,_){return k=Xi(k,_),k.index=0,k.sibling=null,k}function s(k,_,A){return k.index=A,t?(A=k.alternate,A!==null?(A=A.index,A<_?(k.flags|=2,_):A):(k.flags|=2,_)):(k.flags|=1048576,_)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,_,A,L){return _===null||_.tag!==6?(_=vh(A,k.mode,L),_.return=k,_):(_=i(_,A),_.return=k,_)}function u(k,_,A,L){var V=A.type;return V===To?f(k,_,A.props.children,L,A.key):_!==null&&(_.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Pi&&Ny(V)===_.type)?(L=i(_,A.props),L.ref=ba(k,_,A),L.return=k,L):(L=Hu(A.type,A.key,A.props,null,k.mode,L),L.ref=ba(k,_,A),L.return=k,L)}function d(k,_,A,L){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=_h(A,k.mode,L),_.return=k,_):(_=i(_,A.children||[]),_.return=k,_)}function f(k,_,A,L,V){return _===null||_.tag!==7?(_=Fs(A,k.mode,L,V),_.return=k,_):(_=i(_,A),_.return=k,_)}function p(k,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=vh(""+_,k.mode,A),_.return=k,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case lu:return A=Hu(_.type,_.key,_.props,null,k.mode,A),A.ref=ba(k,null,_),A.return=k,A;case wo:return _=_h(_,k.mode,A),_.return=k,_;case Pi:var L=_._init;return p(k,L(_._payload),A)}if(xa(_)||Ta(_))return _=Fs(_,k.mode,A,null),_.return=k,_;_u(k,_)}return null}function g(k,_,A,L){var V=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return V!==null?null:l(k,_,""+A,L);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case lu:return A.key===V?u(k,_,A,L):null;case wo:return A.key===V?d(k,_,A,L):null;case Pi:return V=A._init,g(k,_,V(A._payload),L)}if(xa(A)||Ta(A))return V!==null?null:f(k,_,A,L,null);_u(k,A)}return null}function T(k,_,A,L,V){if(typeof L=="string"&&L!==""||typeof L=="number")return k=k.get(A)||null,l(_,k,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case lu:return k=k.get(L.key===null?A:L.key)||null,u(_,k,L,V);case wo:return k=k.get(L.key===null?A:L.key)||null,d(_,k,L,V);case Pi:var B=L._init;return T(k,_,A,B(L._payload),V)}if(xa(L)||Ta(L))return k=k.get(A)||null,f(_,k,L,V,null);_u(_,L)}return null}function N(k,_,A,L){for(var V=null,B=null,E=_,v=_=0,w=null;E!==null&&v<A.length;v++){E.index>v?(w=E,E=null):w=E.sibling;var S=g(k,E,A[v],L);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(k,E),_=s(S,_,v),B===null?V=S:B.sibling=S,B=S,E=w}if(v===A.length)return n(k,E),rt&&Ns(k,v),V;if(E===null){for(;v<A.length;v++)E=p(k,A[v],L),E!==null&&(_=s(E,_,v),B===null?V=E:B.sibling=E,B=E);return rt&&Ns(k,v),V}for(E=r(k,E);v<A.length;v++)w=T(E,k,v,A[v],L),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?v:w.key),_=s(w,_,v),B===null?V=w:B.sibling=w,B=w);return t&&E.forEach(function(C){return e(k,C)}),rt&&Ns(k,v),V}function D(k,_,A,L){var V=Ta(A);if(typeof V!="function")throw Error(q(150));if(A=V.call(A),A==null)throw Error(q(151));for(var B=V=null,E=_,v=_=0,w=null,S=A.next();E!==null&&!S.done;v++,S=A.next()){E.index>v?(w=E,E=null):w=E.sibling;var C=g(k,E,S.value,L);if(C===null){E===null&&(E=w);break}t&&E&&C.alternate===null&&e(k,E),_=s(C,_,v),B===null?V=C:B.sibling=C,B=C,E=w}if(S.done)return n(k,E),rt&&Ns(k,v),V;if(E===null){for(;!S.done;v++,S=A.next())S=p(k,S.value,L),S!==null&&(_=s(S,_,v),B===null?V=S:B.sibling=S,B=S);return rt&&Ns(k,v),V}for(E=r(k,E);!S.done;v++,S=A.next())S=T(E,k,v,S.value,L),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?v:S.key),_=s(S,_,v),B===null?V=S:B.sibling=S,B=S);return t&&E.forEach(function(P){return e(k,P)}),rt&&Ns(k,v),V}function F(k,_,A,L){if(typeof A=="object"&&A!==null&&A.type===To&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case lu:e:{for(var V=A.key,B=_;B!==null;){if(B.key===V){if(V=A.type,V===To){if(B.tag===7){n(k,B.sibling),_=i(B,A.props.children),_.return=k,k=_;break e}}else if(B.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Pi&&Ny(V)===B.type){n(k,B.sibling),_=i(B,A.props),_.ref=ba(k,B,A),_.return=k,k=_;break e}n(k,B);break}else e(k,B);B=B.sibling}A.type===To?(_=Fs(A.props.children,k.mode,L,A.key),_.return=k,k=_):(L=Hu(A.type,A.key,A.props,null,k.mode,L),L.ref=ba(k,_,A),L.return=k,k=L)}return o(k);case wo:e:{for(B=A.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(k,_.sibling),_=i(_,A.children||[]),_.return=k,k=_;break e}else{n(k,_);break}else e(k,_);_=_.sibling}_=_h(A,k.mode,L),_.return=k,k=_}return o(k);case Pi:return B=A._init,F(k,_,B(A._payload),L)}if(xa(A))return N(k,_,A,L);if(Ta(A))return D(k,_,A,L);_u(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(k,_.sibling),_=i(_,A),_.return=k,k=_):(n(k,_),_=vh(A,k.mode,L),_.return=k,k=_),o(k)):n(k,_)}return F}var Go=Dw(!0),xw=Dw(!1),mc=hs(null),pc=null,Ro=null,jm=null;function $m(){jm=Ro=pc=null}function Hm(t){var e=mc.current;et(mc),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fo(t,e){pc=t,jm=Ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rn=!0),t.firstContext=null)}function fr(t){var e=t._currentValue;if(jm!==t)if(t={context:t,memoizedValue:e,next:null},Ro===null){if(pc===null)throw Error(q(308));Ro=t,pc.dependencies={lanes:0,firstContext:t}}else Ro=Ro.next=t;return e}var xs=null;function Wm(t){xs===null?xs=[t]:xs.push(t)}function Ow(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wm(e)):(n.next=i.next,i.next=n),e.interleaved=n,hi(t,r)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function qm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hi(t,n)}return i=r.interleaved,i===null?(e.next=e,Wm(r)):(e.next=i.next,i.next=e),r.interleaved=e,hi(t,n)}function Fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}function Ry(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,r){var i=t.updateQueue;Di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=d=u=null,l=s;do{var g=l.lane,T=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(g=e,T=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){p=N.call(T,p,g);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,g=typeof N=="function"?N.call(T,p,g):N,g==null)break e;p=at({},p,g);break e;case 2:Di=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=T,u=p):f=f.next=T,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=p}}function Py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Ul={},Fr=hs(Ul),gl=hs(Ul),yl=hs(Ul);function Os(t){if(t===Ul)throw Error(q(174));return t}function Km(t,e){switch(Xe(yl,e),Xe(gl,t),Xe(Fr,Ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}et(Fr),Xe(Fr,e)}function Qo(){et(Fr),et(gl),et(yl)}function Lw(t){Os(yl.current);var e=Os(Fr.current),n=rf(e,t.type);e!==n&&(Xe(gl,t),Xe(Fr,n))}function Gm(t){gl.current===t&&(et(Fr),et(gl))}var st=hs(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hh=[];function Qm(){for(var t=0;t<hh.length;t++)hh[t]._workInProgressVersionPrimary=null;hh.length=0}var zu=vi.ReactCurrentDispatcher,fh=vi.ReactCurrentBatchConfig,Hs=0,ot=null,Nt=null,Mt=null,vc=!1,Ka=!1,vl=0,Jk=0;function tn(){throw Error(q(321))}function Xm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ar(t[n],e[n]))return!1;return!0}function Ym(t,e,n,r,i,s){if(Hs=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zu.current=t===null||t.memoizedState===null?nA:rA,t=n(r,i),Ka){s=0;do{if(Ka=!1,vl=0,25<=s)throw Error(q(301));s+=1,Mt=Nt=null,e.updateQueue=null,zu.current=iA,t=n(r,i)}while(Ka)}if(zu.current=_c,e=Nt!==null&&Nt.next!==null,Hs=0,Mt=Nt=ot=null,vc=!1,e)throw Error(q(300));return t}function Jm(){var t=vl!==0;return vl=0,t}function xr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?ot.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function mr(){if(Nt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Mt===null?ot.memoizedState:Mt.next;if(e!==null)Mt=e,Nt=t;else{if(t===null)throw Error(q(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Mt===null?ot.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function _l(t,e){return typeof e=="function"?e(t):e}function mh(t){var e=mr(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var f=d.lane;if((Hs&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ot.lanes|=f,Ws|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,Ar(r,e.memoizedState)||(Rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ot.lanes|=s,Ws|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ph(t){var e=mr(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ar(s,e.memoizedState)||(Rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vw(){}function Fw(t,e){var n=ot,r=mr(),i=e(),s=!Ar(r.memoizedState,i);if(s&&(r.memoizedState=i,Rn=!0),r=r.queue,Zm(Bw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,El(9,Uw.bind(null,n,r,i,e),void 0,null),Vt===null)throw Error(q(349));Hs&30||zw(n,e,i)}return i}function zw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Uw(t,e,n,r){e.value=n,e.getSnapshot=r,jw(e)&&$w(t)}function Bw(t,e,n){return n(function(){jw(e)&&$w(t)})}function jw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ar(t,n)}catch{return!0}}function $w(t){var e=hi(t,1);e!==null&&kr(e,t,1,-1)}function Dy(t){var e=xr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_l,lastRenderedState:t},e.queue=t,t=t.dispatch=tA.bind(null,ot,t),[e.memoizedState,t]}function El(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hw(){return mr().memoizedState}function Uu(t,e,n,r){var i=xr();ot.flags|=t,i.memoizedState=El(1|e,n,void 0,r===void 0?null:r)}function Jc(t,e,n,r){var i=mr();r=r===void 0?null:r;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,r!==null&&Xm(r,o.deps)){i.memoizedState=El(e,n,s,r);return}}ot.flags|=t,i.memoizedState=El(1|e,n,s,r)}function xy(t,e){return Uu(8390656,8,t,e)}function Zm(t,e){return Jc(2048,8,t,e)}function Ww(t,e){return Jc(4,2,t,e)}function qw(t,e){return Jc(4,4,t,e)}function Kw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gw(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4,4,Kw.bind(null,e,t),n)}function ep(){}function Qw(t,e){var n=mr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xw(t,e){var n=mr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yw(t,e,n){return Hs&21?(Ar(n,e)||(n=nw(),ot.lanes|=n,Ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=n)}function Zk(t,e){var n=Be;Be=n!==0&&4>n?n:4,t(!0);var r=fh.transition;fh.transition={};try{t(!1),e()}finally{Be=n,fh.transition=r}}function Jw(){return mr().memoizedState}function eA(t,e,n){var r=Qi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zw(t))e0(e,n);else if(n=Ow(t,e,n,r),n!==null){var i=yn();kr(n,t,r,i),t0(n,e,r)}}function tA(t,e,n){var r=Qi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zw(t))e0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ar(l,o)){var u=e.interleaved;u===null?(i.next=i,Wm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Ow(t,e,i,r),n!==null&&(i=yn(),kr(n,t,r,i),t0(n,e,r))}}function Zw(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function e0(t,e){Ka=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}var _c={readContext:fr,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},nA={readContext:fr,useCallback:function(t,e){return xr().memoizedState=[t,e===void 0?null:e],t},useContext:fr,useEffect:xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,Kw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=xr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eA.bind(null,ot,t),[r.memoizedState,t]},useRef:function(t){var e=xr();return t={current:t},e.memoizedState=t},useState:Dy,useDebugValue:ep,useDeferredValue:function(t){return xr().memoizedState=t},useTransition:function(){var t=Dy(!1),e=t[0];return t=Zk.bind(null,t[1]),xr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ot,i=xr();if(rt){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),Vt===null)throw Error(q(349));Hs&30||zw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xy(Bw.bind(null,r,s,t),[t]),r.flags|=2048,El(9,Uw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xr(),e=Vt.identifierPrefix;if(rt){var n=si,r=ii;n=(r&~(1<<32-Sr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rA={readContext:fr,useCallback:Qw,useContext:fr,useEffect:Zm,useImperativeHandle:Gw,useInsertionEffect:Ww,useLayoutEffect:qw,useMemo:Xw,useReducer:mh,useRef:Hw,useState:function(){return mh(_l)},useDebugValue:ep,useDeferredValue:function(t){var e=mr();return Yw(e,Nt.memoizedState,t)},useTransition:function(){var t=mh(_l)[0],e=mr().memoizedState;return[t,e]},useMutableSource:Vw,useSyncExternalStore:Fw,useId:Jw,unstable_isNewReconciler:!1},iA={readContext:fr,useCallback:Qw,useContext:fr,useEffect:Zm,useImperativeHandle:Gw,useInsertionEffect:Ww,useLayoutEffect:qw,useMemo:Xw,useReducer:ph,useRef:Hw,useState:function(){return ph(_l)},useDebugValue:ep,useDeferredValue:function(t){var e=mr();return Nt===null?e.memoizedState=t:Yw(e,Nt.memoizedState,t)},useTransition:function(){var t=ph(_l)[0],e=mr().memoizedState;return[t,e]},useMutableSource:Vw,useSyncExternalStore:Fw,useId:Jw,unstable_isNewReconciler:!1};function Er(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?ro(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yn(),i=Qi(t),s=li(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,i),e!==null&&(kr(e,t,i,r),Fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yn(),i=Qi(t),s=li(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,i),e!==null&&(kr(e,t,i,r),Fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),r=Qi(t),i=li(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ki(t,i,r),e!==null&&(kr(e,t,r,n),Fu(e,t,r))}};function Oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}function n0(t,e,n){var r=!1,i=rs,s=e.contextType;return typeof s=="object"&&s!==null?s=fr(s):(i=xn(e)?js:un.current,r=e.contextTypes,s=(r=r!=null)?qo(t,i):rs),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function My(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function Af(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},qm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fr(s):(s=xn(e)?js:un.current,i.context=qo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),gc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xo(t,e){try{var n="",r=e;do n+=DS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sA=typeof WeakMap=="function"?WeakMap:Map;function r0(t,e,n){n=li(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wc||(wc=!0,Vf=r),bf(t,e)},n}function i0(t,e,n){n=li(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bf(t,e),typeof r!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_A.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=li(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var oA=vi.ReactCurrentOwner,Rn=!1;function gn(t,e,n,r){e.child=t===null?xw(e,null,n,r):Go(e,t.child,n,r)}function zy(t,e,n,r,i){n=n.render;var s=e.ref;return Fo(e,i),r=Ym(t,e,n,r,s,i),n=Jm(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fi(t,e,i)):(rt&&n&&zm(e),e.flags|=1,gn(t,e,r,i),e.child)}function Uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s0(t,e,s,r,i)):(t=Hu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(o,r)&&t.ref===e.ref)return fi(t,e,i)}return e.flags|=1,t=Xi(s,r),t.ref=e.ref,t.return=e,e.child=t}function s0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hl(s,r)&&t.ref===e.ref)if(Rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rn=!0);else return e.lanes=t.lanes,fi(t,e,i)}return Cf(t,e,n,r,i)}function o0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Do,qn),qn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xe(Do,qn),qn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Xe(Do,qn),qn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Xe(Do,qn),qn|=r;return gn(t,e,i,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,r,i){var s=xn(n)?js:un.current;return s=qo(e,s),Fo(e,i),n=Ym(t,e,n,r,s,i),r=Jm(),t!==null&&!Rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fi(t,e,i)):(rt&&r&&zm(e),e.flags|=1,gn(t,e,n,i),e.child)}function By(t,e,n,r,i){if(xn(n)){var s=!0;dc(e)}else s=!1;if(Fo(e,i),e.stateNode===null)Bu(t,e),n0(e,n,r),Af(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=fr(d):(d=xn(n)?js:un.current,d=qo(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&My(e,o,r,d),Di=!1;var g=e.memoizedState;o.state=g,gc(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Dn.current||Di?(typeof f=="function"&&(kf(e,n,f,r),u=e.memoizedState),(l=Di||Oy(e,n,l,r,g,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mw(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Er(e.type,l),o.props=d,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=fr(u):(u=xn(n)?js:un.current,u=qo(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&My(e,o,r,u),Di=!1,g=e.memoizedState,o.state=g,gc(e,r,o,i);var N=e.memoizedState;l!==p||g!==N||Dn.current||Di?(typeof T=="function"&&(kf(e,n,T,r),N=e.memoizedState),(d=Di||Oy(e,n,d,r,g,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Nf(t,e,n,r,s,i)}function Nf(t,e,n,r,i,s){a0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ay(e,n,!1),fi(t,e,s);r=e.stateNode,oA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Go(e,t.child,null,s),e.child=Go(e,null,l,s)):gn(t,e,l,s),e.memoizedState=r.state,i&&Ay(e,n,!0),e.child}function l0(t){var e=t.stateNode;e.pendingContext?ky(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ky(t,e.context,!1),Km(t,e.containerInfo)}function jy(t,e,n,r,i){return Ko(),Bm(i),e.flags|=256,gn(t,e,n,r),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function u0(t,e,n){var r=e.pendingProps,i=st.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Xe(st,i&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nd(o,r,0,null),t=Fs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pf(n),e.memoizedState=Rf,t):tp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return aA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Xi(l,s):(s=Fs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,r}return s=t.child,t=s.sibling,r=Xi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tp(t,e){return e=nd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Eu(t,e,n,r){return r!==null&&Bm(r),Go(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gh(Error(q(422))),Eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nd({mode:"visible",children:r.children},i,0,null),s=Fs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Go(e,t.child,null,o),e.child.memoizedState=Pf(o),e.memoizedState=Rf,s);if(!(e.mode&1))return Eu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=gh(s,r,void 0),Eu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rn||l){if(r=Vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hi(t,i),kr(r,t,i,-1))}return ap(),r=gh(Error(q(421))),Eu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Gn=qi(i.nextSibling),Yn=e,rt=!0,Tr=null,t!==null&&(sr[or++]=ii,sr[or++]=si,sr[or++]=$s,ii=t.id,si=t.overflow,$s=e),e=tp(e,r.children),e.flags|=4096,e)}function $y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sf(t.return,e,n)}function yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gn(t,e,r.children,n),r=st.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$y(t,n,e);else if(t.tag===19)$y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Xe(st,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lA(t,e,n){switch(e.tag){case 3:l0(e),Ko();break;case 5:Lw(e);break;case 1:xn(e.type)&&dc(e);break;case 4:Km(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Xe(mc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Xe(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?u0(t,e,n):(Xe(st,st.current&1),t=fi(t,e,n),t!==null?t.sibling:null);Xe(st,st.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return c0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Xe(st,st.current),r)break;return null;case 22:case 23:return e.lanes=0,o0(t,e,n)}return fi(t,e,n)}var d0,Df,h0,f0;d0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};h0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Os(Fr.current);var s=null;switch(n){case"input":i=Zh(t,i),r=Zh(t,r),s=[];break;case"select":i=at({},i,{value:void 0}),r=at({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}sf(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sl.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Je("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};f0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ca(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uA(t,e,n){var r=e.pendingProps;switch(Um(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return xn(e.type)&&cc(),nn(e),null;case 3:return r=e.stateNode,Qo(),et(Dn),et(un),Qm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tr!==null&&(Uf(Tr),Tr=null))),Df(t,e),nn(e),null;case 5:Gm(e);var i=Os(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return nn(e),null}if(t=Os(Fr.current),vu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mr]=e,r[pl]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<Ma.length;i++)Je(Ma[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":Jg(r,s),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Je("invalid",r);break;case"textarea":ey(r,s),Je("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&yu(r.textContent,l,t),i=["children",""+l]):sl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":uu(r),Zg(r,s,!0);break;case"textarea":uu(r),ty(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=BE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mr]=e,t[pl]=r,d0(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ma.length;i++)Je(Ma[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":Jg(t,r),i=Zh(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=at({},r,{value:void 0}),Je("invalid",t);break;case"textarea":ey(t,r),i=nf(t,r),Je("invalid",t);break;default:i=r}sf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?HE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ol(t,u):typeof u=="number"&&ol(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Je("scroll",t):u!=null&&km(t,s,u,o))}switch(n){case"input":uu(t),Zg(t,r,!1);break;case"textarea":uu(t),ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ns(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)f0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Os(yl.current),Os(Fr.current),vu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mr]=e,(s=r.nodeValue!==n)&&(t=Yn,t!==null))switch(t.tag){case 3:yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mr]=e,e.stateNode=r}return nn(e),null;case 13:if(et(st),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&Gn!==null&&e.mode&1&&!(e.flags&128))Pw(),Ko(),e.flags|=98560,s=!1;else if(s=vu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Mr]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else Tr!==null&&(Uf(Tr),Tr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?Rt===0&&(Rt=3):ap())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return Qo(),Df(t,e),t===null&&fl(e.stateNode.containerInfo),nn(e),null;case 10:return Hm(e.type._context),nn(e),null;case 17:return xn(e.type)&&cc(),nn(e),null;case 19:if(et(st),s=e.memoizedState,s===null)return nn(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ca(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yc(t),o!==null){for(e.flags|=128,Ca(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xe(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Yo&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304)}else{if(!r)if(t=yc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return nn(e),null}else 2*Et()-s.renderingStartTime>Yo&&n!==1073741824&&(e.flags|=128,r=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=st.current,Xe(st,r?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function cA(t,e){switch(Um(e),e.tag){case 1:return xn(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),et(Dn),et(un),Qm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gm(e),null;case 13:if(et(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(st),null;case 4:return Qo(),null;case 10:return Hm(e.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var wu=!1,an=!1,dA=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){mt(t,e,r)}else n.current=null}function xf(t,e,n){try{n()}catch(r){mt(t,e,r)}}var Hy=!1;function hA(t,e){if(gf=oc,t=vw(),Fm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,p=t,g=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)g=p,p=T;for(;;){if(p===t)break t;if(g===n&&++d===i&&(l=o),g===s&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},oc=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){e=ne;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,F=N.memoizedState,k=e.stateNode,_=k.getSnapshotBeforeUpdate(e.elementType===e.type?D:Er(e.type,D),F);k.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(L){mt(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}return N=Hy,Hy=!1,N}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xf(e,n,s)}i=i.next}while(i!==r)}}function ed(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mr],delete e[pl],delete e[Ef],delete e[Gk],delete e[Qk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function Wy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var $t=null,wr=!1;function ki(t,e,n){for(n=n.child;n!==null;)g0(t,e,n),n=n.sibling}function g0(t,e,n){if(Vr&&typeof Vr.onCommitFiberUnmount=="function")try{Vr.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:an||Po(n,e);case 6:var r=$t,i=wr;$t=null,ki(t,e,n),$t=r,wr=i,$t!==null&&(wr?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(wr?(t=$t,n=n.stateNode,t.nodeType===8?ch(t.parentNode,n):t.nodeType===1&&ch(t,n),cl(t)):ch($t,n.stateNode));break;case 4:r=$t,i=wr,$t=n.stateNode.containerInfo,wr=!0,ki(t,e,n),$t=r,wr=i;break;case 0:case 11:case 14:case 15:if(!an&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&xf(n,e,o),i=i.next}while(i!==r)}ki(t,e,n);break;case 1:if(!an&&(Po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){mt(n,e,l)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(an=(r=an)||n.memoizedState!==null,ki(t,e,n),an=r):ki(t,e,n);break;default:ki(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dA),e.forEach(function(r){var i=wA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _r(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$t=l.stateNode,wr=!1;break e;case 3:$t=l.stateNode.containerInfo,wr=!0;break e;case 4:$t=l.stateNode.containerInfo,wr=!0;break e}l=l.return}if($t===null)throw Error(q(160));g0(s,o,i),$t=null,wr=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){mt(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y0(e,t),e=e.sibling}function y0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_r(e,t),Dr(t),r&4){try{Ga(3,t,t.return),ed(3,t)}catch(D){mt(t,t.return,D)}try{Ga(5,t,t.return)}catch(D){mt(t,t.return,D)}}break;case 1:_r(e,t),Dr(t),r&512&&n!==null&&Po(n,n.return);break;case 5:if(_r(e,t),Dr(t),r&512&&n!==null&&Po(n,n.return),t.flags&32){var i=t.stateNode;try{ol(i,"")}catch(D){mt(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&zE(i,s),of(l,o);var d=of(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?HE(i,p):f==="dangerouslySetInnerHTML"?jE(i,p):f==="children"?ol(i,p):km(i,f,p,d)}switch(l){case"input":ef(i,s);break;case"textarea":UE(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Oo(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?Oo(i,!!s.multiple,s.defaultValue,!0):Oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[pl]=s}catch(D){mt(t,t.return,D)}}break;case 6:if(_r(e,t),Dr(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){mt(t,t.return,D)}}break;case 3:if(_r(e,t),Dr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(D){mt(t,t.return,D)}break;case 4:_r(e,t),Dr(t);break;case 13:_r(e,t),Dr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ip=Et())),r&4&&qy(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(an=(d=an)||f,_r(e,t),an=d):_r(e,t),Dr(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(ne=t,f=t.child;f!==null;){for(p=ne=f;ne!==null;){switch(g=ne,T=g.child,g.tag){case 0:case 11:case 14:case 15:Ga(4,g,g.return);break;case 1:Po(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){mt(r,n,D)}}break;case 5:Po(g,g.return);break;case 22:if(g.memoizedState!==null){Gy(p);continue}}T!==null?(T.return=g,ne=T):Gy(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=$E("display",o))}catch(D){mt(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(D){mt(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:_r(e,t),Dr(t),r&4&&qy(t);break;case 21:break;default:_r(e,t),Dr(t)}}function Dr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ol(i,""),r.flags&=-33);var s=Wy(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wy(t);Mf(t,l,o);break;default:throw Error(q(161))}}catch(u){mt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fA(t,e,n){ne=t,v0(t)}function v0(t,e,n){for(var r=(t.mode&1)!==0;ne!==null;){var i=ne,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||an;l=wu;var d=an;if(wu=o,(an=u)&&!d)for(ne=i;ne!==null;)o=ne,u=o.child,o.tag===22&&o.memoizedState!==null?Qy(i):u!==null?(u.return=o,ne=u):Qy(i);for(;s!==null;)ne=s,v0(s),s=s.sibling;ne=i,wu=l,an=d}Ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ne=s):Ky(t)}}function Ky(t){for(;ne!==null;){var e=ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||ed(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!an)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Er(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Py(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Py(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&cl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}an||e.flags&512&&Of(e)}catch(g){mt(e,e.return,g)}}if(e===t){ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,ne=n;break}ne=e.return}}function Gy(t){for(;ne!==null;){var e=ne;if(e===t){ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ne=n;break}ne=e.return}}function Qy(t){for(;ne!==null;){var e=ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ed(4,e)}catch(u){mt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){mt(e,i,u)}}var s=e.return;try{Of(e)}catch(u){mt(e,s,u)}break;case 5:var o=e.return;try{Of(e)}catch(u){mt(e,o,u)}}}catch(u){mt(e,e.return,u)}if(e===t){ne=null;break}var l=e.sibling;if(l!==null){l.return=e.return,ne=l;break}ne=e.return}}var mA=Math.ceil,Ec=vi.ReactCurrentDispatcher,np=vi.ReactCurrentOwner,ur=vi.ReactCurrentBatchConfig,xe=0,Vt=null,kt=null,Kt=0,qn=0,Do=hs(0),Rt=0,wl=null,Ws=0,td=0,rp=0,Qa=null,Cn=null,ip=0,Yo=1/0,ti=null,wc=!1,Vf=null,Gi=null,Tu=!1,Bi=null,Tc=0,Xa=0,Ff=null,ju=-1,$u=0;function yn(){return xe&6?Et():ju!==-1?ju:ju=Et()}function Qi(t){return t.mode&1?xe&2&&Kt!==0?Kt&-Kt:Yk.transition!==null?($u===0&&($u=nw()),$u):(t=Be,t!==0||(t=window.event,t=t===void 0?16:uw(t.type)),t):1}function kr(t,e,n,r){if(50<Xa)throw Xa=0,Ff=null,Error(q(185));Vl(t,n,r),(!(xe&2)||t!==Vt)&&(t===Vt&&(!(xe&2)&&(td|=n),Rt===4&&Oi(t,Kt)),On(t,r),n===1&&xe===0&&!(e.mode&1)&&(Yo=Et()+500,Yc&&fs()))}function On(t,e){var n=t.callbackNode;YS(t,e);var r=sc(t,t===Vt?Kt:0);if(r===0)n!==null&&iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iy(n),e===1)t.tag===0?Xk(Xy.bind(null,t)):Cw(Xy.bind(null,t)),qk(function(){!(xe&6)&&fs()}),n=null;else{switch(rw(r)){case 1:n=Rm;break;case 4:n=ew;break;case 16:n=ic;break;case 536870912:n=tw;break;default:n=ic}n=A0(n,_0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _0(t,e){if(ju=-1,$u=0,xe&6)throw Error(q(327));var n=t.callbackNode;if(zo()&&t.callbackNode!==n)return null;var r=sc(t,t===Vt?Kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ic(t,r);else{e=r;var i=xe;xe|=2;var s=w0();(Vt!==t||Kt!==e)&&(ti=null,Yo=Et()+500,Vs(t,e));do try{yA();break}catch(l){E0(t,l)}while(!0);$m(),Ec.current=s,xe=i,kt!==null?e=0:(Vt=null,Kt=0,e=Rt)}if(e!==0){if(e===2&&(i=df(t),i!==0&&(r=i,e=zf(t,i))),e===1)throw n=wl,Vs(t,0),Oi(t,r),On(t,Et()),n;if(e===6)Oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!pA(i)&&(e=Ic(t,r),e===2&&(s=df(t),s!==0&&(r=s,e=zf(t,s))),e===1))throw n=wl,Vs(t,0),Oi(t,r),On(t,Et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:Rs(t,Cn,ti);break;case 3:if(Oi(t,r),(r&130023424)===r&&(e=ip+500-Et(),10<e)){if(sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_f(Rs.bind(null,t,Cn,ti),e);break}Rs(t,Cn,ti);break;case 4:if(Oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Sr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mA(r/1960))-r,10<r){t.timeoutHandle=_f(Rs.bind(null,t,Cn,ti),r);break}Rs(t,Cn,ti);break;case 5:Rs(t,Cn,ti);break;default:throw Error(q(329))}}}return On(t,Et()),t.callbackNode===n?_0.bind(null,t):null}function zf(t,e){var n=Qa;return t.current.memoizedState.isDehydrated&&(Vs(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=Cn,Cn=n,e!==null&&Uf(e)),t}function Uf(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function pA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ar(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~rp,e&=~td,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sr(e),r=1<<n;t[n]=-1,e&=~r}}function Xy(t){if(xe&6)throw Error(q(327));zo();var e=sc(t,0);if(!(e&1))return On(t,Et()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var r=df(t);r!==0&&(e=r,n=zf(t,r))}if(n===1)throw n=wl,Vs(t,0),Oi(t,e),On(t,Et()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rs(t,Cn,ti),On(t,Et()),null}function sp(t,e){var n=xe;xe|=1;try{return t(e)}finally{xe=n,xe===0&&(Yo=Et()+500,Yc&&fs())}}function qs(t){Bi!==null&&Bi.tag===0&&!(xe&6)&&zo();var e=xe;xe|=1;var n=ur.transition,r=Be;try{if(ur.transition=null,Be=1,t)return t()}finally{Be=r,ur.transition=n,xe=e,!(xe&6)&&fs()}}function op(){qn=Do.current,et(Do)}function Vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wk(n)),kt!==null)for(n=kt.return;n!==null;){var r=n;switch(Um(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cc();break;case 3:Qo(),et(Dn),et(un),Qm();break;case 5:Gm(r);break;case 4:Qo();break;case 13:et(st);break;case 19:et(st);break;case 10:Hm(r.type._context);break;case 22:case 23:op()}n=n.return}if(Vt=t,kt=t=Xi(t.current,null),Kt=qn=e,Rt=0,wl=null,rp=td=Ws=0,Cn=Qa=null,xs!==null){for(e=0;e<xs.length;e++)if(n=xs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xs=null}return t}function E0(t,e){do{var n=kt;try{if($m(),zu.current=_c,vc){for(var r=ot.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vc=!1}if(Hs=0,Mt=Nt=ot=null,Ka=!1,vl=0,np.current=null,n===null||n.return===null){Rt=1,wl=e,kt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Kt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Vy(o);if(T!==null){T.flags&=-257,Fy(T,o,l,s,e),T.mode&1&&Ly(s,d,e),e=T,u=d;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){Ly(s,d,e),ap();break e}u=Error(q(426))}}else if(rt&&l.mode&1){var F=Vy(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Fy(F,o,l,s,e),Bm(Xo(u,l));break e}}s=u=Xo(u,l),Rt!==4&&(Rt=2),Qa===null?Qa=[s]:Qa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=r0(s,u,e);Ry(s,k);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Gi===null||!Gi.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=i0(s,l,e);Ry(s,L);break e}}s=s.return}while(s!==null)}I0(n)}catch(V){e=V,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function w0(){var t=Ec.current;return Ec.current=_c,t===null?_c:t}function ap(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Vt===null||!(Ws&268435455)&&!(td&268435455)||Oi(Vt,Kt)}function Ic(t,e){var n=xe;xe|=2;var r=w0();(Vt!==t||Kt!==e)&&(ti=null,Vs(t,e));do try{gA();break}catch(i){E0(t,i)}while(!0);if($m(),xe=n,Ec.current=r,kt!==null)throw Error(q(261));return Vt=null,Kt=0,Rt}function gA(){for(;kt!==null;)T0(kt)}function yA(){for(;kt!==null&&!jS();)T0(kt)}function T0(t){var e=k0(t.alternate,t,qn);t.memoizedProps=t.pendingProps,e===null?I0(t):kt=e,np.current=null}function I0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cA(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,kt=null;return}}else if(n=uA(n,e,qn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Rs(t,e,n){var r=Be,i=ur.transition;try{ur.transition=null,Be=1,vA(t,e,n,r)}finally{ur.transition=i,Be=r}return null}function vA(t,e,n,r){do zo();while(Bi!==null);if(xe&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JS(t,s),t===Vt&&(kt=Vt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,A0(ic,function(){return zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ur.transition,ur.transition=null;var o=Be;Be=1;var l=xe;xe|=4,np.current=null,hA(t,n),y0(n,t),Fk(yf),oc=!!gf,yf=gf=null,t.current=n,fA(n),$S(),xe=l,Be=o,ur.transition=s}else t.current=n;if(Tu&&(Tu=!1,Bi=t,Tc=i),s=t.pendingLanes,s===0&&(Gi=null),qS(n.stateNode),On(t,Et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wc)throw wc=!1,t=Vf,Vf=null,t;return Tc&1&&t.tag!==0&&zo(),s=t.pendingLanes,s&1?t===Ff?Xa++:(Xa=0,Ff=t):Xa=0,fs(),null}function zo(){if(Bi!==null){var t=rw(Tc),e=ur.transition,n=Be;try{if(ur.transition=null,Be=16>t?16:t,Bi===null)var r=!1;else{if(t=Bi,Bi=null,Tc=0,xe&6)throw Error(q(331));var i=xe;for(xe|=4,ne=t.current;ne!==null;){var s=ne,o=s.child;if(ne.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(ne=d;ne!==null;){var f=ne;switch(f.tag){case 0:case 11:case 15:Ga(8,f,s)}var p=f.child;if(p!==null)p.return=f,ne=p;else for(;ne!==null;){f=ne;var g=f.sibling,T=f.return;if(m0(f),f===d){ne=null;break}if(g!==null){g.return=T,ne=g;break}ne=T}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var F=D.sibling;D.sibling=null,D=F}while(D!==null)}}ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ne=o;else e:for(;ne!==null;){if(s=ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ga(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,ne=k;break e}ne=s.return}}var _=t.current;for(ne=_;ne!==null;){o=ne;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,ne=A;else e:for(o=_;ne!==null;){if(l=ne,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ed(9,l)}}catch(V){mt(l,l.return,V)}if(l===o){ne=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,ne=L;break e}ne=l.return}}if(xe=i,fs(),Vr&&typeof Vr.onPostCommitFiberRoot=="function")try{Vr.onPostCommitFiberRoot(qc,t)}catch{}r=!0}return r}finally{Be=n,ur.transition=e}}return!1}function Yy(t,e,n){e=Xo(n,e),e=r0(t,e,1),t=Ki(t,e,1),e=yn(),t!==null&&(Vl(t,1,e),On(t,e))}function mt(t,e,n){if(t.tag===3)Yy(t,t,n);else for(;e!==null;){if(e.tag===3){Yy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gi===null||!Gi.has(r))){t=Xo(n,t),t=i0(e,t,1),e=Ki(e,t,1),t=yn(),e!==null&&(Vl(e,1,t),On(e,t));break}}e=e.return}}function _A(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Kt&n)===n&&(Rt===4||Rt===3&&(Kt&130023424)===Kt&&500>Et()-ip?Vs(t,0):rp|=n),On(t,e)}function S0(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=yn();t=hi(t,e),t!==null&&(Vl(t,e,n),On(t,n))}function EA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),S0(t,n)}function wA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),S0(t,n)}var k0;k0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dn.current)Rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rn=!1,lA(t,e,n);Rn=!!(t.flags&131072)}else Rn=!1,rt&&e.flags&1048576&&Nw(e,fc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bu(t,e),t=e.pendingProps;var i=qo(e,un.current);Fo(e,n),i=Ym(null,e,r,t,i,n);var s=Jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(r)?(s=!0,dc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qm(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,Af(e,r,t,n),e=Nf(null,e,r,!0,s,n)):(e.tag=0,rt&&s&&zm(e),gn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IA(r),t=Er(r,t),i){case 0:e=Cf(null,e,r,t,n);break e;case 1:e=By(null,e,r,t,n);break e;case 11:e=zy(null,e,r,t,n);break e;case 14:e=Uy(null,e,r,Er(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Er(r,i),Cf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Er(r,i),By(t,e,r,i,n);case 3:e:{if(l0(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mw(t,e),gc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xo(Error(q(423)),e),e=jy(t,e,r,n,i);break e}else if(r!==i){i=Xo(Error(q(424)),e),e=jy(t,e,r,n,i);break e}else for(Gn=qi(e.stateNode.containerInfo.firstChild),Yn=e,rt=!0,Tr=null,n=xw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),r===i){e=fi(t,e,n);break e}gn(t,e,r,n)}e=e.child}return e;case 5:return Lw(e),t===null&&If(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(e.flags|=32),a0(t,e),gn(t,e,o,n),e.child;case 6:return t===null&&If(e),null;case 13:return u0(t,e,n);case 4:return Km(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Go(e,null,r,n):gn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Er(r,i),zy(t,e,r,i,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Xe(mc,r._currentValue),r._currentValue=o,s!==null)if(Ar(s.value,o)){if(s.children===i.children&&!Dn.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=li(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fo(e,n),i=fr(i),r=r(i),e.flags|=1,gn(t,e,r,n),e.child;case 14:return r=e.type,i=Er(r,e.pendingProps),i=Er(r.type,i),Uy(t,e,r,i,n);case 15:return s0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Er(r,i),Bu(t,e),e.tag=1,xn(r)?(t=!0,dc(e)):t=!1,Fo(e,n),n0(e,r,i),Af(e,r,i,n),Nf(null,e,r,!0,t,n);case 19:return c0(t,e,n);case 22:return o0(t,e,n)}throw Error(q(156,e.tag))};function A0(t,e){return ZE(t,e)}function TA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(t,e,n,r){return new TA(t,e,n,r)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IA(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bm)return 11;if(t===Cm)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=lr(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case To:return Fs(n.children,i,s,e);case Am:o=8,i|=8;break;case Qh:return t=lr(12,n,e,i|2),t.elementType=Qh,t.lanes=s,t;case Xh:return t=lr(13,n,e,i),t.elementType=Xh,t.lanes=s,t;case Yh:return t=lr(19,n,e,i),t.elementType=Yh,t.lanes=s,t;case LE:return nd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case OE:o=10;break e;case ME:o=9;break e;case bm:o=11;break e;case Cm:o=14;break e;case Pi:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=lr(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fs(t,e,n,r){return t=lr(7,t,r,e),t.lanes=n,t}function nd(t,e,n,r){return t=lr(22,t,r,e),t.elementType=LE,t.lanes=n,t.stateNode={isHidden:!1},t}function vh(t,e,n){return t=lr(6,t,null,e),t.lanes=n,t}function _h(t,e,n){return e=lr(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,i,s,o,l,u){return t=new SA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qm(s),t}function kA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return rs;t=t._reactInternals;e:{if(ro(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(xn(n))return bw(t,n,e)}return e}function C0(t,e,n,r,i,s,o,l,u){return t=up(n,r,!0,t,i,s,o,l,u),t.context=b0(null),n=t.current,r=yn(),i=Qi(n),s=li(r,i),s.callback=e??null,Ki(n,s,i),t.current.lanes=i,Vl(t,i,r),On(t,r),t}function rd(t,e,n,r){var i=e.current,s=yn(),o=Qi(i);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=li(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ki(i,e,o),t!==null&&(kr(t,i,o,s),Fu(t,i,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cp(t,e){Jy(t,e),(t=t.alternate)&&Jy(t,e)}function AA(){return null}var N0=typeof reportError=="function"?reportError:function(t){console.error(t)};function dp(t){this._internalRoot=t}id.prototype.render=dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));rd(t,e,null,null)};id.prototype.unmount=dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qs(function(){rd(null,t,null,null)}),e[di]=null}};function id(t){this._internalRoot=t}id.prototype.unstable_scheduleHydration=function(t){if(t){var e=ow();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xi.length&&e!==0&&e<xi[n].priority;n++);xi.splice(n,0,t),n===0&&lw(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zy(){}function bA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Sc(o);s.call(d)}}var o=C0(e,r,t,0,null,!1,!1,"",Zy);return t._reactRootContainer=o,t[di]=o.current,fl(t.nodeType===8?t.parentNode:t),qs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Sc(u);l.call(d)}}var u=up(t,0,!1,null,null,!1,!1,"",Zy);return t._reactRootContainer=u,t[di]=u.current,fl(t.nodeType===8?t.parentNode:t),qs(function(){rd(e,u,n,r)}),u}function od(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Sc(o);l.call(u)}}rd(e,o,t,i)}else o=bA(n,e,t,i,r);return Sc(o)}iw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(Pm(e,n|1),On(e,Et()),!(xe&6)&&(Yo=Et()+500,fs()))}break;case 13:qs(function(){var r=hi(t,1);if(r!==null){var i=yn();kr(r,t,1,i)}}),cp(t,1)}};Dm=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=yn();kr(e,t,134217728,n)}cp(t,134217728)}};sw=function(t){if(t.tag===13){var e=Qi(t),n=hi(t,e);if(n!==null){var r=yn();kr(n,t,e,r)}cp(t,e)}};ow=function(){return Be};aw=function(t,e){var n=Be;try{return Be=t,e()}finally{Be=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(q(90));FE(r),ef(r,i)}}}break;case"textarea":UE(t,n);break;case"select":e=n.value,e!=null&&Oo(t,!!n.multiple,e,!1)}};KE=sp;GE=qs;var CA={usingClientEntryPoint:!1,Events:[zl,Ao,Xc,WE,qE,sp]},Na={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NA={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=YE(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||AA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{qc=Iu.inject(NA),Vr=Iu}catch{}}Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CA;Zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(q(200));return kA(t,e,null,n)};Zn.createRoot=function(t,e){if(!hp(t))throw Error(q(299));var n=!1,r="",i=N0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,i),t[di]=e.current,fl(t.nodeType===8?t.parentNode:t),new dp(e)};Zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=YE(e),t=t===null?null:t.stateNode,t};Zn.flushSync=function(t){return qs(t)};Zn.hydrate=function(t,e,n){if(!sd(e))throw Error(q(200));return od(null,t,e,!0,n)};Zn.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=N0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C0(e,null,t,1,n??null,i,!1,s,o),t[di]=e.current,fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new id(e)};Zn.render=function(t,e,n){if(!sd(e))throw Error(q(200));return od(null,t,e,!1,n)};Zn.unmountComponentAtNode=function(t){if(!sd(t))throw Error(q(40));return t._reactRootContainer?(qs(function(){od(null,null,t,!1,function(){t._reactRootContainer=null,t[di]=null})}),!0):!1};Zn.unstable_batchedUpdates=sp;Zn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sd(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return od(t,e,n,!1,r)};Zn.version="18.3.1-next-f1338f8080-20240426";function R0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R0)}catch(t){console.error(t)}}R0(),RE.exports=Zn;var RA=RE.exports,ev=RA;Kh.createRoot=ev.createRoot,Kh.hydrateRoot=ev.hydrateRoot;const PA=()=>{};var tv={};/**
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
 */const P0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},D0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,T=d&63;u||(T=64,o||(g=64)),r.push(n[f],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(P0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||p==null)throw new xA;const g=s<<2|l>>4;if(r.push(g),d!==64){const T=l<<4&240|d>>2;if(r.push(T),p!==64){const N=d<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OA=function(t){const e=P0(t);return D0.encodeByteArray(e,!0)},kc=function(t){return OA(t).replace(/\./g,"")},x0=function(t){try{return D0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LA=()=>MA().__FIREBASE_DEFAULTS__,VA=()=>{if(typeof process>"u"||typeof tv>"u")return;const t=tv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&x0(t[1]);return e&&JSON.parse(e)},ad=()=>{try{return PA()||LA()||VA()||FA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O0=t=>{var e,n;return(n=(e=ad())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fp=t=>{const e=O0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},M0=()=>{var t;return(t=ad())===null||t===void 0?void 0:t.config},L0=t=>{var e;return(e=ad())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _i(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ld(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function V0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kc(JSON.stringify(n)),kc(JSON.stringify(o)),""].join(".")}const Ya={};function UA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ya))Ya[e]?t.emulator.push(e):t.prod.push(e);return t}function BA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let nv=!1;function ud(t,e){if(typeof window>"u"||typeof document>"u"||!_i(window.location.host)||Ya[t]===e||Ya[t]||nv)return;Ya[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=UA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{nv=!0,o()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=BA(r),T=n("text"),N=document.getElementById(T)||document.createElement("span"),D=n("learnmore"),F=document.getElementById(D)||document.createElement("a"),k=n("preprendIcon"),_=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(F,D);const L=d();u(_,k),A.append(_,N,F,L),document.body.appendChild(A)}s?(N.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function $A(){var t;const e=(t=ad())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qA(){const t=cn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KA(){return!$A()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function z0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const GA="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GA,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new tr(i,l,r)}}function QA(t,e){return t.replace(XA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XA=/\{\$([^}]+)}/g;function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rv(s)&&rv(o)){if(!Ks(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rv(t){return t!==null&&typeof t=="object"}/**
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
 */function Bl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function La(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JA(t,e){const n=new ZA(t,e);return n.subscribe.bind(n)}class ZA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Eh),i.error===void 0&&(i.error=Eh),i.complete===void 0&&(i.complete=Eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eh(){}/**
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
 */const tb=1e3,nb=2,rb=4*60*60*1e3,ib=.5;function iv(t,e=tb,n=nb){const r=e*Math.pow(n,t),i=Math.round(ib*r*(Math.random()-.5)*2);return Math.min(rb,r+i)}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class sb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ab(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ob(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ob(t){return t===Ps?void 0:t}function ab(t){return t.instantiationMode==="EAGER"}/**
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
 */class lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const ub={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},cb=be.INFO,db={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},hb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=db[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=cb,this._logHandler=hb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const fb=(t,e)=>e.some(n=>t instanceof n);let sv,ov;function mb(){return sv||(sv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pb(){return ov||(ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U0=new WeakMap,Bf=new WeakMap,B0=new WeakMap,wh=new WeakMap,gp=new WeakMap;function gb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&U0.set(n,t)}).catch(()=>{}),gp.set(e,t),e}function yb(t){if(Bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bf.set(t,e)}let jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vb(t){jf=t(jf)}function _b(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Th(this),e,...n);return B0.set(r,e.sort?e.sort():[e]),ui(r)}:pb().includes(t)?function(...e){return t.apply(Th(this),e),ui(U0.get(this))}:function(...e){return ui(t.apply(Th(this),e))}}function Eb(t){return typeof t=="function"?_b(t):(t instanceof IDBTransaction&&yb(t),fb(t,mb())?new Proxy(t,jf):t)}function ui(t){if(t instanceof IDBRequest)return gb(t);if(wh.has(t))return wh.get(t);const e=Eb(t);return e!==t&&(wh.set(t,e),gp.set(e,t)),e}const Th=t=>gp.get(t);function dd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ui(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ui(o.result),u.oldVersion,u.newVersion,ui(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function Ih(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ui(n).then(()=>{})}const wb=["get","getKey","getAll","getAllKeys","count"],Tb=["put","add","delete","clear"],Sh=new Map;function av(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sh.get(e))return Sh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Tb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Sh.set(e,s),s}vb(t=>({...t,get:(e,n,r)=>av(e,n)||t.get(e,n,r),has:(e,n)=>!!av(e,n)||t.has(e,n)}));/**
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
 */class Ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $f="@firebase/app",lv="0.13.2";/**
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
 */const mi=new cd("@firebase/app"),kb="@firebase/app-compat",Ab="@firebase/analytics-compat",bb="@firebase/analytics",Cb="@firebase/app-check-compat",Nb="@firebase/app-check",Rb="@firebase/auth",Pb="@firebase/auth-compat",Db="@firebase/database",xb="@firebase/data-connect",Ob="@firebase/database-compat",Mb="@firebase/functions",Lb="@firebase/functions-compat",Vb="@firebase/installations",Fb="@firebase/installations-compat",zb="@firebase/messaging",Ub="@firebase/messaging-compat",Bb="@firebase/performance",jb="@firebase/performance-compat",$b="@firebase/remote-config",Hb="@firebase/remote-config-compat",Wb="@firebase/storage",qb="@firebase/storage-compat",Kb="@firebase/firestore",Gb="@firebase/ai",Qb="@firebase/firestore-compat",Xb="firebase",Yb="11.10.0";/**
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
 */const Hf="[DEFAULT]",Jb={[$f]:"fire-core",[kb]:"fire-core-compat",[bb]:"fire-analytics",[Ab]:"fire-analytics-compat",[Nb]:"fire-app-check",[Cb]:"fire-app-check-compat",[Rb]:"fire-auth",[Pb]:"fire-auth-compat",[Db]:"fire-rtdb",[xb]:"fire-data-connect",[Ob]:"fire-rtdb-compat",[Mb]:"fire-fn",[Lb]:"fire-fn-compat",[Vb]:"fire-iid",[Fb]:"fire-iid-compat",[zb]:"fire-fcm",[Ub]:"fire-fcm-compat",[Bb]:"fire-perf",[jb]:"fire-perf-compat",[$b]:"fire-rc",[Hb]:"fire-rc-compat",[Wb]:"fire-gcs",[qb]:"fire-gcs-compat",[Kb]:"fire-fst",[Qb]:"fire-fst-compat",[Gb]:"fire-vertex","fire-js":"fire-js",[Xb]:"fire-js-all"};/**
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
 */const Ac=new Map,Zb=new Map,Wf=new Map;function uv(t,e){try{t.container.addComponent(e)}catch(n){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Wf.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;Wf.set(e,t);for(const n of Ac.values())uv(n,t);for(const n of Zb.values())uv(n,t);return!0}function ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const eC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yi=new ms("app","Firebase",eC);/**
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
 */class tC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yi.create("app-deleted",{appName:this._name})}}/**
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
 */const io=Yb;function j0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hf,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Yi.create("bad-app-name",{appName:String(i)});if(n||(n=M0()),!n)throw Yi.create("no-options");const s=Ac.get(i);if(s){if(Ks(n,s.options)&&Ks(r,s.config))return s;throw Yi.create("duplicate-app",{appName:i})}const o=new lb(i);for(const u of Wf.values())o.addComponent(u);const l=new tC(n,r,o);return Ac.set(i,l),l}function jl(t=Hf){const e=Ac.get(t);if(!e&&t===Hf&&M0())return j0();if(!e)throw Yi.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let i=(r=Jb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(l.join(" "));return}Ln(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nC="firebase-heartbeat-database",rC=1,Tl="firebase-heartbeat-store";let kh=null;function $0(){return kh||(kh=dd(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yi.create("idb-open",{originalErrorMessage:t.message})})),kh}async function iC(t){try{const n=(await $0()).transaction(Tl),r=await n.objectStore(Tl).get(H0(t));return await n.done,r}catch(e){if(e instanceof tr)mi.warn(e.message);else{const n=Yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}async function cv(t,e){try{const r=(await $0()).transaction(Tl,"readwrite");await r.objectStore(Tl).put(e,H0(t)),await r.done}catch(n){if(n instanceof tr)mi.warn(n.message);else{const r=Yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mi.warn(r.message)}}}function H0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sC=1024,oC=30;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>oC){const o=cC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dv(),{heartbeatsToSend:r,unsentEntries:i}=lC(this._heartbeatsCache.heartbeats),s=kc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return mi.warn(n),""}}}function dv(){return new Date().toISOString().substring(0,10)}function lC(t,e=sC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hv(t){return kc(JSON.stringify({version:2,heartbeats:t})).length}function cC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function dC(t){Ln(new _n("platform-logger",e=>new Ib(e),"PRIVATE")),Ln(new _n("heartbeat",e=>new aC(e),"PRIVATE")),Ft($f,lv,t),Ft($f,lv,"esm2017"),Ft("fire-js","")}dC("");function yp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function W0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=W0,q0=new ms("auth","Firebase",W0());/**
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
 */const bc=new cd("@firebase/auth");function fC(t,...e){bc.logLevel<=be.WARN&&bc.warn(`Auth (${io}): ${t}`,...e)}function Wu(t,...e){bc.logLevel<=be.ERROR&&bc.error(`Auth (${io}): ${t}`,...e)}/**
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
 */function br(t,...e){throw vp(t,...e)}function zr(t,...e){return vp(t,...e)}function K0(t,e,n){const r=Object.assign(Object.assign({},hC()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function Ji(t){return K0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q0.create(t,...e)}function he(t,e,...n){if(!t)throw vp(e,...n)}function oi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function pi(t,e){t||oi(e)}/**
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
 */function qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mC(){return fv()==="http:"||fv()==="https:"}function fv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mC()||F0()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,pi(n>e,"Short delay should be less than long delay!"),this.isMobile=jA()||WA()}get(){return pC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _p(t,e){pi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class G0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_C=new $l(3e4,6e4);function so(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,i={}){return Q0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Bl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return HA()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&_i(t.emulatorConfig.host)&&(d.credentials="include"),G0.fetch()(await X0(t,t.config.apiHost,n,l),d)})}async function Q0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yC),e);try{const i=new wC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Su(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw K0(t,f,d);br(t,f)}}catch(i){if(i instanceof tr)throw i;br(t,"network-request-failed",{message:String(i)})}}async function hd(t,e,n,r,i={}){const s=await gs(t,e,n,r,i);return"mfaPendingCredential"in s&&br(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function X0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?_p(t.config,i):`${t.config.apiScheme}://${i}`;return vC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function EC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zr(this.auth,"network-request-failed")),_C.get())})}}function Su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zr(t,e,r);return i.customData._tokenResponse=n,i}function mv(t){return t!==void 0&&t.enterprise!==void 0}class TC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return EC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IC(t,e){return gs(t,"GET","/v2/recaptchaConfig",so(t,e))}/**
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
 */async function SC(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function Cc(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kC(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Ep(r);he(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ja(Ah(i.auth_time)),issuedAtTime:Ja(Ah(i.iat)),expirationTime:Ja(Ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function Ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=x0(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pv(t){const e=Ep(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Il(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&AC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Il(t,Cc(n,{idToken:r}));he(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Y0(s.providerUserInfo):[],l=NC(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Kf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function CC(t){const e=je(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Y0(t){return t.map(e=>{var{providerId:n}=e,r=yp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RC(t,e){const n=await Q0(t,{},async()=>{const r=Bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await X0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&_i(t.emulatorConfig.host)&&(u.credentials="include"),G0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PC(t,e){return gs(t,"POST","/v2/accounts:revokeToken",so(t,e))}/**
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
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=pv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Uo;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(he(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return oi("not implemented")}}/**
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
 */function Ai(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Il(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kC(this,e)}reload(){return CC(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await Il(this,SC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:L,isAnonymous:V,providerData:B,stsTokenManager:E}=n;he(A&&E,e,"internal-error");const v=Uo.fromJSON(this.name,E);he(typeof A=="string",e,"internal-error"),Ai(p,e.name),Ai(g,e.name),he(typeof L=="boolean",e,"internal-error"),he(typeof V=="boolean",e,"internal-error"),Ai(T,e.name),Ai(N,e.name),Ai(D,e.name),Ai(F,e.name),Ai(k,e.name),Ai(_,e.name);const w=new Ir({uid:A,auth:e,email:g,emailVerified:L,displayName:p,isAnonymous:V,photoURL:N,phoneNumber:T,tenantId:D,stsTokenManager:v,createdAt:k,lastLoginAt:_});return B&&Array.isArray(B)&&(w.providerData=B.map(S=>Object.assign({},S))),F&&(w._redirectEventId=F),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Uo;i.updateFromServerResponse(n);const s=new Ir({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];he(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Y0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Uo;l.updateFromIdToken(r);const u=new Ir({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const gv=new Map;function ai(t){pi(t instanceof Function,"Expected a class definition");let e=gv.get(t);return e?(pi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gv.set(t,e),e)}/**
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
 */class J0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J0.type="NONE";const yv=J0;/**
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
 */function qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Bo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qu(this.userKey,i.apiKey,s),this.fullPersistenceKey=qu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Cc(this.auth,{idToken:e}).catch(()=>{});return n?Ir._fromGetAccountInfoResponse(this.auth,n,e):null}return Ir._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bo(ai(yv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ai(yv);const o=qu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){let p;if(typeof f=="string"){const g=await Cc(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ir._fromGetAccountInfoResponse(e,g,f)}else p=Ir._fromJSON(e,f);d!==s&&(l=p),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Bo(s,e,r))}}/**
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
 */function vv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iT(e))return"Blackberry";if(sT(e))return"Webos";if(eT(e))return"Safari";if((e.includes("chrome/")||tT(e))&&!e.includes("edge/"))return"Chrome";if(rT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z0(t=cn()){return/firefox\//i.test(t)}function eT(t=cn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tT(t=cn()){return/crios\//i.test(t)}function nT(t=cn()){return/iemobile/i.test(t)}function rT(t=cn()){return/android/i.test(t)}function iT(t=cn()){return/blackberry/i.test(t)}function sT(t=cn()){return/webos/i.test(t)}function wp(t=cn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DC(t=cn()){var e;return wp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xC(){return qA()&&document.documentMode===10}function oT(t=cn()){return wp(t)||rT(t)||sT(t)||iT(t)||/windows phone/i.test(t)||nT(t)}/**
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
 */function aT(t,e=[]){let n;switch(t){case"Browser":n=vv(cn());break;case"Worker":n=`${vv(cn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${io}/${r}`}/**
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
 */class OC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MC(t,e={}){return gs(t,"GET","/v2/passwordPolicy",so(t,e))}/**
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
 */const LC=6;class VC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _v(this),this.idTokenSubscription=new _v(this),this.beforeStateQueue=new OC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ai(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cc(this,{idToken:e}),r=await Ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Ji(this));const n=e?je(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MC(this),n=new VC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ai(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[ai(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(t){return je(t)}class _v{constructor(e){this.auth=e,this.observer=null,this.addObserver=JA(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zC(t){fd=t}function lT(t){return fd.loadJS(t)}function UC(){return fd.recaptchaEnterpriseScript}function BC(){return fd.gapiScript}function jC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $C{constructor(){this.enterprise=new HC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WC="recaptcha-enterprise",uT="NO_RECAPTCHA";class qC{constructor(e){this.type=WC,this.auth=la(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{IC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new TC(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;mv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(uT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $C().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&mv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=UC();u.length!==0&&(u+=l),lT(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Ev(t,e,n,r=!1,i=!1){const s=new qC(t);let o;if(i)o=uT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wv(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ev(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Ev(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function KC(t,e){const n=ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ks(s,e??{}))return i;br(i,"already-initialized")}return n.initialize({options:e})}function GC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ai);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QC(t,e,n){const r=la(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cT(e),{host:o,port:l}=XC(e),u=l===null?"":`:${l}`,d={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(Ks(d,r.config.emulator)&&Ks(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,_i(o)?(ld(`${s}//${o}${u}`),ud("Auth",!0)):YC()}function cT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XC(t){const e=cT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tv(o)}}}function Tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return oi("not implemented")}_getIdTokenResponse(e){return oi("not implemented")}_linkToIdToken(e,n){return oi("not implemented")}_getReauthenticationResolver(e){return oi("not implemented")}}async function JC(t,e){return gs(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ZC(t,e){return hd(t,"POST","/v1/accounts:signInWithPassword",so(t,e))}/**
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
 */async function eN(t,e){return hd(t,"POST","/v1/accounts:signInWithEmailLink",so(t,e))}async function tN(t,e){return hd(t,"POST","/v1/accounts:signInWithEmailLink",so(t,e))}/**
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
 */class Sl extends Tp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wv(e,n,"signInWithPassword",ZC);case"emailLink":return eN(e,{email:this._email,oobCode:this._password});default:br(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wv(e,r,"signUpPassword",JC);case"emailLink":return tN(e,{idToken:n,email:this._email,oobCode:this._password});default:br(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const nN="http://localhost";class Gs extends Tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):br("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jo(e,n)}buildRequest(){const e={requestUri:nN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bl(n)}return e}}/**
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
 */function rN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iN(t){const e=La(Va(t)).link,n=e?La(Va(e)).deep_link_id:null,r=La(Va(t)).deep_link_id;return(r?La(Va(r)).link:null)||r||n||e||t}class Ip{constructor(e){var n,r,i,s,o,l;const u=La(Va(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=rN((i=u.mode)!==null&&i!==void 0?i:null);he(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=iN(e);try{return new Ip(n)}catch{return null}}}/**
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
 */class ua{constructor(){this.providerId=ua.PROVIDER_ID}static credential(e,n){return Sl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ip.parseLink(n);return he(r,"argument-error"),Sl._fromEmailAndCode(e,r.code,r.tenantId)}}ua.PROVIDER_ID="password";ua.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ua.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hl extends dT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ir._fromIdTokenResponse(e,r,i),o=Iv(r);return new Jo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Iv(r);return new Jo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Iv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rc extends tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rc(e,n,r,i)}}function hT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,s,e,r):s})}async function sN(t,e,n=!1){const r=await Il(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jo._forOperation(t,"link",r)}/**
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
 */async function oN(t,e,n=!1){const{auth:r}=t;if(Kn(r.app))return Promise.reject(Ji(r));const i="reauthenticate";try{const s=await Il(t,hT(r,i,e,t),n);he(s.idToken,r,"internal-error");const o=Ep(s.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),Jo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&br(r,"user-mismatch"),s}}/**
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
 */async function fT(t,e,n=!1){if(Kn(t.app))return Promise.reject(Ji(t));const r="signIn",i=await hT(t,r,e),s=await Jo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aN(t,e){return fT(la(t),e)}/**
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
 */async function lN(t){const e=la(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uN(t,e,n){return Kn(t.app)?Promise.reject(Ji(t)):aN(je(t),ua.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lN(t),r})}function cN(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function dN(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function hN(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function fN(t){return je(t).signOut()}const Pc="__sak";/**
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
 */class mT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pc,"1"),this.storage.removeItem(Pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mN=1e3,pN=10;class pT extends mT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pT.type="LOCAL";const gN=pT;/**
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
 */class gT extends mT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gT.type="SESSION";const yT=gT;/**
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
 */function yN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await yN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
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
 */class vN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Sp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ur(){return window}function _N(t){Ur().location.href=t}/**
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
 */function vT(){return typeof Ur().WorkerGlobalScope<"u"&&typeof Ur().importScripts=="function"}async function EN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TN(){return vT()?self:null}/**
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
 */const _T="firebaseLocalStorageDb",IN=1,Dc="firebaseLocalStorage",ET="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pd(t,e){return t.transaction([Dc],e?"readwrite":"readonly").objectStore(Dc)}function SN(){const t=indexedDB.deleteDatabase(_T);return new Wl(t).toPromise()}function Gf(){const t=indexedDB.open(_T,IN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dc,{keyPath:ET})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dc)?e(r):(r.close(),await SN(),e(await Gf()))})})}async function Sv(t,e,n){const r=pd(t,!0).put({[ET]:e,value:n});return new Wl(r).toPromise()}async function kN(t,e){const n=pd(t,!1).get(e),r=await new Wl(n).toPromise();return r===void 0?null:r.value}function kv(t,e){const n=pd(t,!0).delete(e);return new Wl(n).toPromise()}const AN=800,bN=3;class wT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(TN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EN(),!this.activeServiceWorker)return;this.sender=new vN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gf();return await Sv(e,Pc,"1"),await kv(e,Pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pd(i,!1).getAll();return new Wl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wT.type="LOCAL";const CN=wT;new $l(3e4,6e4);/**
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
 */function NN(t,e){return e?ai(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kp extends Tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RN(t){return fT(t.auth,new kp(t),t.bypassAuthState)}function PN(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),oN(n,new kp(t),t.bypassAuthState)}async function DN(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),sN(n,new kp(t),t.bypassAuthState)}/**
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
 */class TT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RN;case"linkViaPopup":case"linkViaRedirect":return DN;case"reauthViaPopup":case"reauthViaRedirect":return PN;default:br(this.auth,"internal-error")}}resolve(e){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xN=new $l(2e3,1e4);class xo extends TT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xo.currentPopupAction&&xo.currentPopupAction.cancel(),xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){pi(this.filter.length===1,"Popup operations only handle one event");const e=Sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xN.get())};e()}}xo.currentPopupAction=null;/**
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
 */const ON="pendingRedirect",Ku=new Map;class MN extends TT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const r=await LN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LN(t,e){const n=zN(e),r=FN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function VN(t,e){Ku.set(t._key(),e)}function FN(t){return ai(t._redirectPersistence)}function zN(t){return qu(ON,t.config.apiKey,t.name)}async function UN(t,e,n=!1){if(Kn(t.app))return Promise.reject(Ji(t));const r=la(t),i=NN(r,e),o=await new MN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BN=10*60*1e3;class jN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$N(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!IT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Av(e))}saveEventToCache(e){this.cachedEventUids.add(Av(e)),this.lastProcessedEventTime=Date.now()}}function Av(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function IT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $N(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IT(t);default:return!1}}/**
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
 */async function HN(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const WN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qN=/^https?/;async function KN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HN(t);for(const n of e)try{if(GN(n))return}catch{}br(t,"unauthorized-domain")}function GN(t){const e=qf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qN.test(n))return!1;if(WN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QN=new $l(3e4,6e4);function bv(){const t=Ur().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XN(t){return new Promise((e,n)=>{var r,i,s;function o(){bv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bv(),n(zr(t,"network-request-failed"))},timeout:QN.get()})}if(!((i=(r=Ur().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ur().gapi)===null||s===void 0)&&s.load)o();else{const l=jC("iframefcb");return Ur()[l]=()=>{gapi.load?o():n(zr(t,"network-request-failed"))},lT(`${BC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function YN(t){return Gu=Gu||XN(t),Gu}/**
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
 */const JN=new $l(5e3,15e3),ZN="__/auth/iframe",eR="emulator/auth/iframe",tR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rR(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_p(e,eR):`https://${t.config.authDomain}/${ZN}`,r={apiKey:e.apiKey,appName:t.name,v:io},i=nR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bl(r).slice(1)}`}async function iR(t){const e=await YN(t),n=Ur().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:rR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zr(t,"network-request-failed"),l=Ur().setTimeout(()=>{s(o)},JN.get());function u(){Ur().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const sR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oR=500,aR=600,lR="_blank",uR="http://localhost";class Cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cR(t,e,n,r=oR,i=aR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},sR),{width:r.toString(),height:i.toString(),top:s,left:o}),d=cn().toLowerCase();n&&(l=tT(d)?lR:n),Z0(d)&&(e=e||uR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[T,N])=>`${g}${T}=${N},`,"");if(DC(d)&&l!=="_self")return dR(e||"",l),new Cv(null);const p=window.open(e||"",l,f);he(p,t,"popup-blocked");try{p.focus()}catch{}return new Cv(p)}function dR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hR="__/auth/handler",fR="emulator/auth/handler",mR=encodeURIComponent("fac");async function Nv(t,e,n,r,i,s){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:io,eventId:i};if(e instanceof dT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Hl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${mR}=${encodeURIComponent(u)}`:"";return`${pR(t)}?${Bl(l).slice(1)}${d}`}function pR({config:t}){return t.emulator?_p(t,fR):`https://${t.authDomain}/${hR}`}/**
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
 */const bh="webStorageSupport";class gR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yT,this._completeRedirectFn=UN,this._overrideRedirectResult=VN}async _openPopup(e,n,r,i){var s;pi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nv(e,n,r,qf(),i);return cR(e,o,Sp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nv(e,n,r,qf(),i);return _N(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pi(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iR(e),r=new jN(e);return n.register("authEvent",i=>(he(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bh,{type:bh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bh];o!==void 0&&n(!!o),br(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return oT()||eT()||wp()}}const yR=gR;var Rv="@firebase/auth",Pv="1.10.8";/**
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
 */class vR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _R(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ER(t){Ln(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aT(t)},d=new FC(r,i,s,u);return GC(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new _n("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(r=>new vR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(Rv,Pv,_R(t)),Ft(Rv,Pv,"esm2017")}/**
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
 */const wR=5*60,TR=L0("authIdTokenMaxAge")||wR;let Dv=null;const IR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TR)return;const i=n==null?void 0:n.token;Dv!==i&&(Dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SR(t=jl()){const e=ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KC(t,{popupRedirectResolver:yR,persistence:[CN,gN,yT]}),r=L0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=IR(s.toString());dN(n,o,()=>o(n.currentUser)),cN(n,l=>o(l))}}const i=O0("auth");return i&&QC(n,`http://${i}`),n}function kR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ER("Browser");var xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,ST;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function w(){}w.prototype=v.prototype,E.D=v.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(S,C,P){for(var I=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)I[Ie-2]=arguments[Ie];return v.prototype[C].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,w){w||(w=0);var S=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)S[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)S[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=E.g[0],w=E.g[1],C=E.g[2];var P=E.g[3],I=v+(P^w&(C^P))+S[0]+3614090360&4294967295;v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[1]+3905402710&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[2]+606105819&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[3]+3250441966&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+S[4]+4118548399&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[5]+1200080426&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[6]+2821735955&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[7]+4249261313&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+S[8]+1770035416&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[9]+2336552879&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[10]+4294925233&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[11]+2304563134&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(P^w&(C^P))+S[12]+1804603682&4294967295,v=w+(I<<7&4294967295|I>>>25),I=P+(C^v&(w^C))+S[13]+4254626195&4294967295,P=v+(I<<12&4294967295|I>>>20),I=C+(w^P&(v^w))+S[14]+2792965006&4294967295,C=P+(I<<17&4294967295|I>>>15),I=w+(v^C&(P^v))+S[15]+1236535329&4294967295,w=C+(I<<22&4294967295|I>>>10),I=v+(C^P&(w^C))+S[1]+4129170786&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[6]+3225465664&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[11]+643717713&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[0]+3921069994&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+S[5]+3593408605&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[10]+38016083&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[15]+3634488961&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[4]+3889429448&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+S[9]+568446438&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[14]+3275163606&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[3]+4107603335&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[8]+1163531501&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(C^P&(w^C))+S[13]+2850285829&4294967295,v=w+(I<<5&4294967295|I>>>27),I=P+(w^C&(v^w))+S[2]+4243563512&4294967295,P=v+(I<<9&4294967295|I>>>23),I=C+(v^w&(P^v))+S[7]+1735328473&4294967295,C=P+(I<<14&4294967295|I>>>18),I=w+(P^v&(C^P))+S[12]+2368359562&4294967295,w=C+(I<<20&4294967295|I>>>12),I=v+(w^C^P)+S[5]+4294588738&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[8]+2272392833&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[11]+1839030562&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[14]+4259657740&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+S[1]+2763975236&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[4]+1272893353&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[7]+4139469664&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[10]+3200236656&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+S[13]+681279174&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[0]+3936430074&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[3]+3572445317&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[6]+76029189&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(w^C^P)+S[9]+3654602809&4294967295,v=w+(I<<4&4294967295|I>>>28),I=P+(v^w^C)+S[12]+3873151461&4294967295,P=v+(I<<11&4294967295|I>>>21),I=C+(P^v^w)+S[15]+530742520&4294967295,C=P+(I<<16&4294967295|I>>>16),I=w+(C^P^v)+S[2]+3299628645&4294967295,w=C+(I<<23&4294967295|I>>>9),I=v+(C^(w|~P))+S[0]+4096336452&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[7]+1126891415&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[14]+2878612391&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[5]+4237533241&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+S[12]+1700485571&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[3]+2399980690&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[10]+4293915773&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[1]+2240044497&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+S[8]+1873313359&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[15]+4264355552&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[6]+2734768916&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[13]+1309151649&4294967295,w=C+(I<<21&4294967295|I>>>11),I=v+(C^(w|~P))+S[4]+4149444226&4294967295,v=w+(I<<6&4294967295|I>>>26),I=P+(w^(v|~C))+S[11]+3174756917&4294967295,P=v+(I<<10&4294967295|I>>>22),I=C+(v^(P|~w))+S[2]+718787259&4294967295,C=P+(I<<15&4294967295|I>>>17),I=w+(P^(C|~v))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var w=v-this.blockSize,S=this.B,C=this.h,P=0;P<v;){if(C==0)for(;P<=w;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<v;)if(S[C++]=E.charCodeAt(P++),C==this.blockSize){i(this,S),C=0;break}}else for(;P<v;)if(S[C++]=E[P++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var w=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=w&255,w/=256;for(this.u(E),E=Array(16),v=w=0;4>v;++v)for(var S=0;32>S;S+=8)E[w++]=this.g[v]>>>S&255;return E};function s(E,v){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=v(E)}function o(E,v){this.h=v;for(var w=[],S=!0,C=E.length-1;0<=C;C--){var P=E[C]|0;S&&P==v||(w[C]=P,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return F(d(-E));for(var v=[],w=1,S=0;E>=w;S++)v[S]=E/w|0,w*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return F(f(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),S=p,C=0;C<E.length;C+=8){var P=Math.min(8,E.length-C),I=parseInt(E.substring(C,C+P),v);8>P?(P=d(Math.pow(v,P)),S=S.j(P).add(d(I))):(S=S.j(w),S=S.add(d(I)))}return S}var p=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-F(this).m();for(var E=0,v=1,w=0;w<this.g.length;w++){var S=this.i(w);E+=(0<=S?S:4294967296+S)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(D(this))return"-"+F(this).toString(E);for(var v=d(Math.pow(E,6)),w=this,S="";;){var C=L(w,v).g;w=k(w,C.j(v));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=C,N(w))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=k(this,E),D(E)?-1:N(E)?0:1};function F(E){for(var v=E.g.length,w=[],S=0;S<v;S++)w[S]=~E.g[S];return new o(w,~E.h).add(g)}t.abs=function(){return D(this)?F(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0,C=0;C<=v;C++){var P=S+(this.i(C)&65535)+(E.i(C)&65535),I=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);S=I>>>16,P&=65535,I&=65535,w[C]=I<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function k(E,v){return E.add(F(v))}t.j=function(E){if(N(this)||N(E))return p;if(D(this))return D(E)?F(this).j(F(E)):F(F(this).j(E));if(D(E))return F(this.j(F(E)));if(0>this.l(T)&&0>E.l(T))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,w=[],S=0;S<2*v;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<E.g.length;C++){var P=this.i(S)>>>16,I=this.i(S)&65535,Ie=E.i(C)>>>16,le=E.i(C)&65535;w[2*S+2*C]+=I*le,_(w,2*S+2*C),w[2*S+2*C+1]+=P*le,_(w,2*S+2*C+1),w[2*S+2*C+1]+=I*Ie,_(w,2*S+2*C+1),w[2*S+2*C+2]+=P*Ie,_(w,2*S+2*C+2)}for(S=0;S<v;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=v;S<2*v;S++)w[S]=0;return new o(w,0)};function _(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function L(E,v){if(N(v))throw Error("division by zero");if(N(E))return new A(p,p);if(D(E))return v=L(F(E),v),new A(F(v.g),F(v.h));if(D(v))return v=L(E,F(v)),new A(F(v.g),v.h);if(30<E.g.length){if(D(E)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=v;0>=S.l(E);)w=V(w),S=V(S);var C=B(w,1),P=B(S,1);for(S=B(S,2),w=B(w,2);!N(S);){var I=P.add(S);0>=I.l(E)&&(C=C.add(w),P=I),S=B(S,1),w=B(w,1)}return v=k(E,C.j(v)),new A(C,v)}for(C=p;0<=E.l(v);){for(w=Math.max(1,Math.floor(E.m()/v.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=d(w),I=P.j(v);D(I)||0<I.l(E);)w-=S,P=d(w),I=P.j(v);N(P)&&(P=g),C=C.add(P),E=k(E,I)}return new A(C,E)}t.A=function(E){return L(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function V(E){for(var v=E.g.length+1,w=[],S=0;S<v;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function B(E,v){var w=v>>5;v%=32;for(var S=E.g.length-w,C=[],P=0;P<S;P++)C[P]=0<v?E.i(P+w)>>>v|E.i(P+w+1)<<32-v:E.i(P+w);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ST=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Zi=o}).apply(typeof xv<"u"?xv:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kT,Fa,AT,Qu,Qf,bT,CT,NT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,m){return a==Array.prototype||a==Object.prototype||(a[h]=m.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in m))break e;m=m[O]}a=a[a.length-1],y=m[a],h=h(y),h!=y&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var m=0,y=!1,O={next:function(){if(!y&&m<a.length){var z=m++;return{value:h(z,a[z]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,m){return a.call.apply(a.bind,arguments)}function p(a,h,m){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function g(a,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function T(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function N(a,h){function m(){}m.prototype=h.prototype,a.aa=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Qb=function(y,O,z){for(var Q=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)Q[qe-2]=arguments[qe];return h.prototype[O].apply(y,Q)}}function D(a){const h=a.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=a[y];return m}return[]}function F(a,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const O=a.length||0,z=y.length||0;a.length=O+z;for(let Q=0;Q<z;Q++)a[O+Q]=y[Q]}else a.push(y)}}class k{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var V=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function B(a,h,m){for(const y in a)h.call(m,a[y],y,a)}function E(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function v(a){const h={};for(const m in a)h[m]=a[m];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let m,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(m in y)a[m]=y[m];for(let z=0;z<w.length;z++)m=w[z],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function C(a){var h=1;a=a.split(":");const m=[];for(;0<h&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function P(a){l.setTimeout(()=>{throw a},0)}function I(){var a=te;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ie{constructor(){this.h=this.g=null}add(h,m){const y=le.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var le=new k(()=>new Te,a=>a.reset());class Te{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,K=!1,te=new Ie,oe=()=>{const a=l.Promise.resolve(void 0);$e=()=>{a.then(ve)}};var ve=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(m){P(m)}var h=le;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}K=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};l.addEventListener("test",m,h),l.removeEventListener("test",m,h)}catch{}return a}();function ut(a,h){if(ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ut.aa.h.call(this)}}N(ut,ce);var nt={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),Vn=0;function Tn(a,h,m,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=O,this.key=++Vn,this.da=this.fa=!1}function Dt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Xt(a){this.src=a,this.g={},this.h=0}Xt.prototype.add=function(a,h,m,y,O){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var Q=yt(a,h,y,O);return-1<Q?(h=a[Q],m||(h.fa=!1)):(h=new Tn(h,this.src,z,!!y,O),h.fa=m,a.push(h)),h};function dn(a,h){var m=h.type;if(m in a.g){var y=a.g[m],O=Array.prototype.indexOf.call(y,h,void 0),z;(z=0<=O)&&Array.prototype.splice.call(y,O,1),z&&(Dt(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function yt(a,h,m,y){for(var O=0;O<a.length;++O){var z=a[O];if(!z.da&&z.listener==h&&z.capture==!!m&&z.ha==y)return O}return-1}var zt="closure_lm_"+(1e6*Math.random()|0),Yt={};function In(a,h,m,y,O){if(Array.isArray(h)){for(var z=0;z<h.length;z++)In(a,h[z],m,y,O);return null}return m=R(m),a&&a[Ct]?a.K(h,m,d(y)?!!y.capture:!1,O):Sn(a,h,m,!1,y,O)}function Sn(a,h,m,y,O,z){if(!h)throw Error("Invalid event type");var Q=d(O)?!!O.capture:!!O,qe=ie(a);if(qe||(a[zt]=qe=new Xt(a)),m=qe.add(h,m,y,Q,z),m.proxy)return m;if(y=xt(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)de||(O=Q),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(me(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function xt(){function a(m){return h.call(a.src,a.listener,m)}const h=U;return a}function hn(a,h,m,y,O){if(Array.isArray(h))for(var z=0;z<h.length;z++)hn(a,h[z],m,y,O);else y=d(y)?!!y.capture:!!y,m=R(m),a&&a[Ct]?(a=a.i,h=String(h).toString(),h in a.g&&(z=a.g[h],m=yt(z,m,y,O),-1<m&&(Dt(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete a.g[h],a.h--)))):a&&(a=ie(a))&&(h=a.g[h.toString()],a=-1,h&&(a=yt(h,m,y,O)),(m=-1<a?h[a]:null)&&ct(m))}function ct(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ct])dn(h.i,a);else{var m=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(m,y,a.capture):h.detachEvent?h.detachEvent(me(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=ie(h))?(dn(m,a),m.h==0&&(m.src=null,h[zt]=null)):Dt(a)}}}function me(a){return a in Yt?Yt[a]:Yt[a]="on"+a}function U(a,h){if(a.da)a=!0;else{h=new ut(h,this);var m=a.listener,y=a.ha||a.src;a.fa&&ct(a),a=m.call(y,h)}return a}function ie(a){return a=a[zt],a instanceof Xt?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function R(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function H(){ue.call(this),this.i=new Xt(this),this.M=this,this.F=null}N(H,ue),H.prototype[Ct]=!0,H.prototype.removeEventListener=function(a,h,m,y){hn(this,a,h,m,y)};function X(a,h){var m,y=a.F;if(y)for(m=[];y;y=y.F)m.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new ce(h,a);else if(h instanceof ce)h.target=h.target||a;else{var O=h;h=new ce(y,a),S(h,O)}if(O=!0,m)for(var z=m.length-1;0<=z;z--){var Q=h.g=m[z];O=Ee(Q,y,!0,h)&&O}if(Q=h.g=a,O=Ee(Q,y,!0,h)&&O,O=Ee(Q,y,!1,h)&&O,m)for(z=0;z<m.length;z++)Q=h.g=m[z],O=Ee(Q,y,!1,h)&&O}H.prototype.N=function(){if(H.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var m=a.g[h],y=0;y<m.length;y++)Dt(m[y]);delete a.g[h],a.h--}}this.F=null},H.prototype.K=function(a,h,m,y){return this.i.add(String(a),h,!1,m,y)},H.prototype.L=function(a,h,m,y){return this.i.add(String(a),h,!0,m,y)};function Ee(a,h,m,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,z=0;z<h.length;++z){var Q=h[z];if(Q&&!Q.da&&Q.capture==m){var qe=Q.listener,jt=Q.ha||Q.src;Q.fa&&dn(a.i,Q),O=qe.call(jt,y)!==!1&&O}}return O&&!y.defaultPrevented}function ze(a,h,m){if(typeof a=="function")m&&(a=g(a,m));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Re(a){a.g=ze(()=>{a.g=null,a.i&&(a.i=!1,Re(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class dt extends ue{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Re(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oe(a){ue.call(this),this.h=a,this.g={}}N(Oe,ue);var nr=[];function De(a){B(a.g,function(h,m){this.g.hasOwnProperty(m)&&ct(h)},a),a.g={}}Oe.prototype.N=function(){Oe.aa.N.call(this),De(this)},Oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fn=l.JSON.stringify,rr=l.JSON.parse,Ei=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function pr(){}pr.prototype.h=null;function zn(a){return a.h||(a.h=a.i())}function Kr(){}var ir={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nr(){ce.call(this,"d")}N(Nr,ce);function wi(){ce.call(this,"c")}N(wi,ce);var fn={},_s=null;function Gr(){return _s=_s||new H}fn.La="serverreachability";function Es(a){ce.call(this,fn.La,a)}N(Es,ce);function kn(a){const h=Gr();X(h,new Es(h))}fn.STAT_EVENT="statevent";function Rr(a,h){ce.call(this,fn.STAT_EVENT,a),this.stat=h}N(Rr,ce);function it(a){const h=Gr();X(h,new Rr(h,a))}fn.Ma="timingevent";function Qr(a,h){ce.call(this,fn.Ma,a),this.size=h}N(Qr,ce);function Un(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function gr(a,h,m,y,O,z){a.info(function(){if(a.g)if(z)for(var Q="",qe=z.split("&"),jt=0;jt<qe.length;jt++){var Me=qe[jt].split("=");if(1<Me.length){var Zt=Me[0];Me=Me[1];var en=Zt.split("_");Q=2<=en.length&&en[1]=="type"?Q+(Zt+"="+Me+"&"):Q+(Zt+"=redacted&")}}else Q=null;else Q=z;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+m+`
`+Q})}function Ti(a,h,m,y,O,z,Q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+m+`
`+z+" "+Q})}function Pr(a,h,m,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ws(a,m)+(y?" "+y:"")})}function pa(a,h){a.info(function(){return"TIMEOUT: "+h})}Bn.prototype.info=function(){};function ws(a,h){if(!a.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(a=0;a<m.length;a++)if(Array.isArray(m[a])){var y=m[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var z=O[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Q=1;Q<O.length;Q++)O[Q]=""}}}}return Fn(m)}catch{return h}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jn={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$n;function x(){}N(x,pr),x.prototype.g=function(){return new XMLHttpRequest},x.prototype.i=function(){return{}},$n=new x;function J(a,h,m,y){this.j=a,this.i=h,this.l=m,this.R=y||1,this.U=new Oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}var Ae={},Ut={};function An(a,h,m){a.L=1,a.v=co(Bt(h)),a.m=m,a.P=!0,Hn(a,null)}function Hn(a,h){a.F=Date.now(),Yr(a),a.A=Bt(a.v);var m=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Sg(m.i,"t",y),a.C=0,m=a.j.J,a.h=new _e,a.g=jg(a.j,m?h:null,!a.m),0<a.O&&(a.M=new dt(g(a.Y,a,a.g),a.O)),h=a.U,m=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(nr[0]=O.toString()),O=nr);for(var z=0;z<O.length;z++){var Q=In(m,O[z],y||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),kn(),gr(a.i,a.u,a.A,a.l,a.R,a.m)}J.prototype.ca=function(a){a=a.target;const h=this.M;h&&ei(a)==3?h.j():this.Y(a)},J.prototype.Y=function(a){try{if(a==this.g)e:{const en=ei(this.g);var h=this.g.Ba();const mo=this.g.Z();if(!(3>en)&&(en!=3||this.g&&(this.h.h||this.g.oa()||Pg(this.g)))){this.J||en!=4||h==7||(h==8||0>=mo?kn(3):kn(2)),ga(this);var m=this.g.Z();this.X=m;t:if(Tt(this)){var y=Pg(this.g);a="";var O=y.length,z=ei(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),Ts(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(z&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=m==200,Ti(this.i,this.u,this.A,this.l,this.R,en,m),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,jt=this.g;if((qe=jt.g?jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(qe)){var Me=qe;break t}}Me=null}if(m=Me)Pr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,m);else{this.o=!1,this.s=3,it(12),Jr(this),Ts(this);break e}}if(this.P){m=!0;let vr;for(;!this.J&&this.C<Q.length;)if(vr=uo(this,Q),vr==Ut){en==4&&(this.s=4,it(14),m=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(vr==Ae){this.s=4,it(15),Pr(this.i,this.l,Q,"[Invalid Chunk]"),m=!1;break}else Pr(this.i,this.l,vr,null),ya(this,vr);if(Tt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),en!=4||Q.length!=0||this.h.h||(this.s=1,it(16),m=!1),this.o=this.o&&m,!m)Pr(this.i,this.l,Q,"[Invalid Chunked Response]"),Jr(this),Ts(this);else if(0<Q.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),qd(Zt),Zt.M=!0,it(11))}}else Pr(this.i,this.l,Q,null),ya(this,Q);en==4&&Jr(this),this.o&&!this.J&&(en==4?Fg(this.j,this):(this.o=!1,Yr(this)))}else lS(this.g),m==400&&0<Q.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Jr(this),Ts(this)}}}catch{}finally{}};function Tt(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uo(a,h){var m=a.C,y=h.indexOf(`
`,m);return y==-1?Ut:(m=Number(h.substring(m,y)),isNaN(m)?Ae:(y+=1,y+m>h.length?Ut:(h=h.slice(y,y+m),a.C=y+m,h)))}J.prototype.cancel=function(){this.J=!0,Jr(this)};function Yr(a){a.S=Date.now()+a.I,mn(a,a.I)}function mn(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Un(g(a.ba,a),h)}function ga(a){a.B&&(l.clearTimeout(a.B),a.B=null)}J.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(pa(this.i,this.A),this.L!=2&&(kn(),it(17)),Jr(this),this.s=2,Ts(this)):mn(this,this.S-a)};function Ts(a){a.j.G==0||a.J||Fg(a.j,a)}function Jr(a){ga(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,De(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ya(a,h){try{var m=a.j;if(m.G!=0&&(m.g==a||Se(m.h,a))){if(!a.K&&Se(m.h,a)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<a.F)iu(m),nu(m);else break e;Wd(m),it(18)}}else m.za=O[1],0<m.za-m.T&&37500>O[2]&&m.F&&m.v==0&&!m.C&&(m.C=Un(g(m.Za,m),6e3));if(1>=Y(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Cs(m,11)}else if((a.K||m.g==a)&&iu(m),!_(h))for(O=m.Da.g.parse(h),h=0;h<O.length;h++){let Me=O[h];if(m.T=Me[0],Me=Me[1],m.G==2)if(Me[0]=="c"){m.K=Me[1],m.ia=Me[2];const Zt=Me[3];Zt!=null&&(m.la=Zt,m.j.info("VER="+m.la));const en=Me[4];en!=null&&(m.Aa=en,m.j.info("SVER="+m.Aa));const mo=Me[5];mo!=null&&typeof mo=="number"&&0<mo&&(y=1.5*mo,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const vr=a.g;if(vr){const ou=vr.g?vr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ou){var z=y.h;z.g||ou.indexOf("spdy")==-1&&ou.indexOf("quic")==-1&&ou.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Ve(z,z.h),z.h=null))}if(y.D){const Kd=vr.g?vr.g.getResponseHeader("X-HTTP-Session-Id"):null;Kd&&(y.ya=Kd,We(y.I,y.D,Kd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-a.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var Q=a;if(y.qa=Bg(y,y.J?y.ia:null,y.W),Q.K){G(y.h,Q);var qe=Q,jt=y.L;jt&&(qe.I=jt),qe.B&&(ga(qe),Yr(qe)),y.g=Q}else Lg(y);0<m.i.length&&ru(m)}else Me[0]!="stop"&&Me[0]!="close"||Cs(m,7);else m.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Cs(m,7):Hd(m):Me[0]!="noop"&&m.l&&m.l.ta(Me),m.v=0)}}kn(4)}catch{}}var Ud=class{constructor(a,h){this.g=a,this.map=h}};function b(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function W(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Y(a){return a.h?1:a.g?a.g.size:0}function Se(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ve(a,h){a.g?a.g.add(h):a.h=h}function G(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}b.prototype.cancel=function(){if(this.i=He(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function He(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.D);return h}return D(a.i)}function ht(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],m=a.length,y=0;y<m;y++)h.push(a[y]);return h}h=[],m=0;for(y in a)h[m++]=a[y];return h}function se(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var m=0;m<a;m++)h.push(m);return h}h=[],m=0;for(const y in a)h[m++]=y;return h}}}function It(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var m=se(a),y=ht(a),O=y.length,z=0;z<O;z++)h.call(void 0,y[z],m&&m[z],a)}var yr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zr(a,h){if(a){a=a.split("&");for(var m=0;m<a.length;m++){var y=a[m].indexOf("="),O=null;if(0<=y){var z=a[m].substring(0,y);O=a[m].substring(y+1)}else z=a[m];h(z,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Jt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jt){this.h=a.h,Ye(this,a.j),this.o=a.o,this.g=a.g,Le(this,a.s),this.l=a.l;var h=a.i,m=new bs;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),Is(this,m),this.m=a.m}else a&&(h=String(a).match(yr))?(this.h=!1,Ye(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),Le(this,h[4]),this.l=Ss(h[5]||"",!0),Is(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}Jt.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ks(h,Ke,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ks(h,Ke,!0),"@"),a.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&a.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(ks(m,m.charAt(0)=="/"?As:vt,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",ks(m,jd)),a.join("")};function Bt(a){return new Jt(a)}function Ye(a,h,m){a.j=m?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Le(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Is(a,h,m){h instanceof bs?(a.i=h,tS(a.i,a.h)):(m||(h=ks(h,Bd)),a.i=new bs(h,a.h))}function We(a,h,m){a.i.set(h,m)}function co(a){return We(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,Ne),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ne(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ke=/[#\/\?@]/g,vt=/[#\?:]/g,As=/[#\?]/g,Bd=/[#\?@]/g,jd=/#/g;function bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ii(a){a.g||(a.g=new Map,a.h=0,a.i&&Zr(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=bs.prototype,t.add=function(a,h){Ii(this),this.i=null,a=ho(this,a);var m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Tg(a,h){Ii(a),h=ho(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ig(a,h){return Ii(a),h=ho(a,h),a.g.has(h)}t.forEach=function(a,h){Ii(this),this.g.forEach(function(m,y){m.forEach(function(O){a.call(h,O,y,this)},this)},this)},t.na=function(){Ii(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const O=a[y];for(let z=0;z<O.length;z++)m.push(h[y])}return m},t.V=function(a){Ii(this);let h=[];if(typeof a=="string")Ig(this,a)&&(h=h.concat(this.g.get(ho(this,a))));else{a=Array.from(this.g.values());for(let m=0;m<a.length;m++)h=h.concat(a[m])}return h},t.set=function(a,h){return Ii(this),this.i=null,a=ho(this,a),Ig(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Sg(a,h,m){Tg(a,h),0<m.length&&(a.i=null,a.g.set(ho(a,h),D(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const z=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var O=z;Q[y]!==""&&(O+="="+encodeURIComponent(String(Q[y]))),a.push(O)}}return this.i=a.join("&")};function ho(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function tS(a,h){h&&!a.j&&(Ii(a),a.i=null,a.g.forEach(function(m,y){var O=y.toLowerCase();y!=O&&(Tg(this,y),Sg(this,O,m))},a)),a.j=h}function nS(a,h){const m=new Bn;if(l.Image){const y=new Image;y.onload=T(Si,m,"TestLoadImage: loaded",!0,h,y),y.onerror=T(Si,m,"TestLoadImage: error",!1,h,y),y.onabort=T(Si,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=T(Si,m,"TestLoadImage: timeout",!1,h,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function rS(a,h){const m=new Bn,y=new AbortController,O=setTimeout(()=>{y.abort(),Si(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(z=>{clearTimeout(O),z.ok?Si(m,"TestPingServer: ok",!0,h):Si(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Si(m,"TestPingServer: error",!1,h)})}function Si(a,h,m,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(m)}catch{}}function iS(){this.g=new Ei}function sS(a,h,m){const y=m||"";try{It(a,function(O,z){let Q=O;d(O)&&(Q=Fn(O)),h.push(y+z+"="+encodeURIComponent(Q))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function Zl(a){this.l=a.Ub||null,this.j=a.eb||!1}N(Zl,pr),Zl.prototype.g=function(){return new eu(this.l,this.j)},Zl.prototype.i=function(a){return function(){return a}}({});function eu(a,h){H.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(eu,H),t=eu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_a(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,va(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_a(this)),this.g&&(this.readyState=3,_a(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function kg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?va(this):_a(this),this.readyState==3&&kg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,va(this))},t.Qa=function(a){this.g&&(this.response=a,va(this))},t.ga=function(){this.g&&va(this)};function va(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_a(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function _a(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ag(a){let h="";return B(a,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function $d(a,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Ag(m),typeof a=="string"?m!=null&&encodeURIComponent(String(m)):We(a,h,m))}function ft(a){H.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ft,H);var oS=/^https?$/i,aS=["POST","PUT"];t=ft.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$n.g(),this.v=this.o?zn(this.o):zn($n),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(z){bg(this,z);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)m.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const z of y.keys())m.set(z,y.get(z));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(aS,h,void 0))||y||O||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Q]of m)this.g.setRequestHeader(z,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rg(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){bg(this,z)}};function bg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Cg(a),tu(a)}function Cg(a){a.A||(a.A=!0,X(a,"complete"),X(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,X(this,"complete"),X(this,"abort"),tu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tu(this,!0)),ft.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ng(this):this.bb())},t.bb=function(){Ng(this)};function Ng(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ei(a)!=4||a.Z()!=2)){if(a.u&&ei(a)==4)ze(a.Ea,0,a);else if(X(a,"readystatechange"),ei(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=Q===0){var O=String(a.D).match(yr)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),y=!oS.test(O?O.toLowerCase():"")}m=y}if(m)X(a,"complete"),X(a,"success");else{a.m=6;try{var z=2<ei(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",Cg(a)}}finally{tu(a)}}}}function tu(a,h){if(a.g){Rg(a);const m=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||X(a,"ready");try{m.onreadystatechange=y}catch{}}}function Rg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ei(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ei(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),rr(h)}};function Pg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function lS(a){const h={};a=(a.g&&2<=ei(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var m=C(a[y]);const O=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=h[O]||[];h[O]=z,z.push(m)}E(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ea(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function Dg(a){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ea("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ea("baseRetryDelayMs",5e3,a),this.cb=Ea("retryDelaySeedMs",1e4,a),this.Wa=Ea("forwardChannelMaxRetries",2,a),this.wa=Ea("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new b(a&&a.concurrentRequestLimit),this.Da=new iS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Dg.prototype,t.la=8,t.G=1,t.connect=function(a,h,m,y){it(0),this.W=a,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Bg(this,null,this.W),ru(this)};function Hd(a){if(xg(a),a.G==3){var h=a.U++,m=Bt(a.I);if(We(m,"SID",a.K),We(m,"RID",h),We(m,"TYPE","terminate"),wa(a,m),h=new J(a,a.j,h),h.L=2,h.v=co(Bt(m)),m=!1,l.navigator&&l.navigator.sendBeacon)try{m=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&l.Image&&(new Image().src=h.v,m=!0),m||(h.g=jg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Yr(h)}Ug(a)}function nu(a){a.g&&(qd(a),a.g.cancel(),a.g=null)}function xg(a){nu(a),a.u&&(l.clearTimeout(a.u),a.u=null),iu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ru(a){if(!W(a.h)&&!a.s){a.s=!0;var h=a.Ga;$e||oe(),K||($e(),K=!0),te.add(h,a),a.B=0}}function uS(a,h){return Y(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Un(g(a.Ga,a,h),zg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new J(this,this.j,a);let z=this.o;if(this.S&&(z?(z=v(z),S(z,this.S)):z=this.S),this.m!==null||this.O||(O.H=z,z=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Mg(this,O,h),m=Bt(this.I),We(m,"RID",a),We(m,"CVER",22),this.D&&We(m,"X-HTTP-Session-Id",this.D),wa(this,m),z&&(this.O?h="headers="+encodeURIComponent(String(Ag(z)))+"&"+h:this.m&&$d(m,this.m,z)),Ve(this.h,O),this.Ua&&We(m,"TYPE","init"),this.P?(We(m,"$req",h),We(m,"SID","null"),O.T=!0,An(O,m,null)):An(O,m,h),this.G=2}}else this.G==3&&(a?Og(this,a):this.i.length==0||W(this.h)||Og(this))};function Og(a,h){var m;h?m=h.l:m=a.U++;const y=Bt(a.I);We(y,"SID",a.K),We(y,"RID",m),We(y,"AID",a.T),wa(a,y),a.m&&a.o&&$d(y,a.m,a.o),m=new J(a,a.j,m,a.B+1),a.m===null&&(m.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Mg(a,m,1e3),m.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ve(a.h,m),An(m,y,h)}function wa(a,h){a.H&&B(a.H,function(m,y){We(h,y,m)}),a.l&&It({},function(m,y){We(h,y,m)})}function Mg(a,h,m){m=Math.min(a.i.length,m);var y=a.l?g(a.l.Na,a.l,a):null;e:{var O=a.i;let z=-1;for(;;){const Q=["count="+m];z==-1?0<m?(z=O[0].g,Q.push("ofs="+z)):z=0:Q.push("ofs="+z);let qe=!0;for(let jt=0;jt<m;jt++){let Me=O[jt].g;const Zt=O[jt].map;if(Me-=z,0>Me)z=Math.max(0,O[jt].g-100),qe=!1;else try{sS(Zt,Q,"req"+Me+"_")}catch{y&&y(Zt)}}if(qe){y=Q.join("&");break e}}}return a=a.i.splice(0,m),h.D=a,y}function Lg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;$e||oe(),K||($e(),K=!0),te.add(h,a),a.v=0}}function Wd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Un(g(a.Fa,a),zg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Un(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),nu(this),Vg(this))};function qd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vg(a){a.g=new J(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Bt(a.qa);We(h,"RID","rpc"),We(h,"SID",a.K),We(h,"AID",a.T),We(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&We(h,"TO",a.ja),We(h,"TYPE","xmlhttp"),wa(a,h),a.m&&a.o&&$d(h,a.m,a.o),a.L&&(a.g.I=a.L);var m=a.g;a=a.ia,m.L=1,m.v=co(Bt(h)),m.m=null,m.P=!0,Hn(m,a)}t.Za=function(){this.C!=null&&(this.C=null,nu(this),Wd(this),it(19))};function iu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fg(a,h){var m=null;if(a.g==h){iu(a),qd(a),a.g=null;var y=2}else if(Se(a.h,h))m=h.D,G(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Gr(),X(y,new Qr(y,m)),ru(a)}else Lg(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&uS(a,h)||y==2&&Wd(a)))switch(m&&0<m.length&&(h=a.h,h.i=h.i.concat(m)),O){case 1:Cs(a,5);break;case 4:Cs(a,10);break;case 3:Cs(a,6);break;default:Cs(a,2)}}}function zg(a,h){let m=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(m*=2),m*h}function Cs(a,h){if(a.j.info("Error code "+h),h==2){var m=g(a.fb,a),y=a.Xa;const O=!y;y=new Jt(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ye(y,"https"),co(y),O?nS(y.toString(),m):rS(y.toString(),m)}else it(2);a.G=0,a.l&&a.l.sa(h),Ug(a),xg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Ug(a){if(a.G=0,a.ka=[],a.l){const h=He(a.h);(h.length!=0||a.i.length!=0)&&(F(a.ka,h),F(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Bg(a,h,m){var y=m instanceof Jt?Bt(m):new Jt(m);if(y.g!="")h&&(y.g=h+"."+y.g),Le(y,y.s);else{var O=l.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var z=new Jt(null);y&&Ye(z,y),h&&(z.g=h),O&&Le(z,O),m&&(z.l=m),y=z}return m=a.D,h=a.ya,m&&h&&We(y,m,h),We(y,"VER",a.la),wa(a,y),y}function jg(a,h,m){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ft(new Zl({eb:m})):new ft(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $g(){}t=$g.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function su(){}su.prototype.g=function(a,h){return new Wn(a,h)};function Wn(a,h){H.call(this),this.g=new Dg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fo(this)}N(Wn,H),Wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wn.prototype.close=function(){Hd(this.g)},Wn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.u&&(m={},m.__data__=Fn(a),a=m);h.i.push(new Ud(h.Ya++,a)),h.G==3&&ru(h)},Wn.prototype.N=function(){this.g.l=null,delete this.j,Hd(this.g),delete this.g,Wn.aa.N.call(this)};function Hg(a){Nr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}N(Hg,Nr);function Wg(){wi.call(this),this.status=1}N(Wg,wi);function fo(a){this.g=a}N(fo,$g),fo.prototype.ua=function(){X(this.g,"a")},fo.prototype.ta=function(a){X(this.g,new Hg(a))},fo.prototype.sa=function(a){X(this.g,new Wg)},fo.prototype.ra=function(){X(this.g,"b")},su.prototype.createWebChannel=su.prototype.g,Wn.prototype.send=Wn.prototype.o,Wn.prototype.open=Wn.prototype.m,Wn.prototype.close=Wn.prototype.close,NT=function(){return new su},CT=function(){return Gr()},bT=fn,Qf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Qu=Xr,jn.COMPLETE="complete",AT=jn,Kr.EventType=ir,ir.OPEN="a",ir.CLOSE="b",ir.ERROR="c",ir.MESSAGE="d",H.prototype.listen=H.prototype.K,Fa=Kr,ft.prototype.listenOnce=ft.prototype.L,ft.prototype.getLastError=ft.prototype.Ka,ft.prototype.getLastErrorCode=ft.prototype.Ba,ft.prototype.getStatus=ft.prototype.Z,ft.prototype.getResponseJson=ft.prototype.Oa,ft.prototype.getResponseText=ft.prototype.oa,ft.prototype.send=ft.prototype.ea,ft.prototype.setWithCredentials=ft.prototype.Ha,kT=ft}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const Ov="@firebase/firestore",Mv="4.8.0";/**
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
 */let sn=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
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
 */const Qs=new cd("@firebase/firestore");function yo(){return Qs.logLevel}function ee(t,...e){if(Qs.logLevel<=be.DEBUG){const n=e.map(Ap);Qs.debug(`Firestore (${ca}): ${t}`,...n)}}function gi(t,...e){if(Qs.logLevel<=be.ERROR){const n=e.map(Ap);Qs.error(`Firestore (${ca}): ${t}`,...n)}}function is(t,...e){if(Qs.logLevel<=be.WARN){const n=e.map(Ap);Qs.warn(`Firestore (${ca}): ${t}`,...n)}}function Ap(t){if(typeof t=="string")return t;try{/**
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
 */function fe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,RT(t,r,n)}function RT(t,e,n){let r=`FIRESTORE (${ca}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw gi(r),new Error(r)}function Fe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||RT(e,i,r)}function ye(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class PT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class AR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(sn.UNAUTHENTICATED))}shutdown(){}}class bR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CR{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zs;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new PT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new sn(e)}}class NR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new NR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function DR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function DT(){return new TextEncoder}/**
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
 */class bp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=DR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Xf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return we(r,i);{const s=DT(),o=xR(s.encode(Vv(t,n)),s.encode(Vv(e,n)));return o!==0?o:we(r,i)}}n+=r>65535?2:1}return we(t.length,e.length)}function Vv(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function xR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return we(t[n],e[n]);return we(t.length,e.length)}function Zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Fv="__name__";class Or{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&fe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Or.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Or?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Or.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return we(e.length,n.length)}static compareSegments(e,n){const r=Or.isNumericId(e),i=Or.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Or.extractNumericId(e).compare(Or.extractNumericId(n)):Xf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zi.fromString(e.substring(4,e.length-2))}}class Qe extends Or{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const OR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends Or{construct(e,n,r){return new Wt(e,n,r)}static isValidIdentifier(e){return OR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fv}static keyField(){return new Wt([Fv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Qe.fromString(e))}static fromName(e){return new ae(Qe.fromString(e).popFirst(5))}static empty(){return new ae(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Qe(e.slice()))}}/**
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
 */function xT(t,e,n){if(!n)throw new Z(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MR(t,e,n,r){if(e===!0&&r===!0)throw new Z(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zv(t){if(!ae.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uv(t){if(ae.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function OT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe(12329,{type:typeof t})}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gd(t);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function bt(t,e){const n={typeString:t};return e&&(n.value=e),n}function ql(t,e){if(!OT(t))throw new Z(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Z(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Bv=-62135596800,jv=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jv);return new Ze(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bv)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jv}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ql(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:bt("string",Ze._jsonSchemaVersion),seconds:bt("number"),nanoseconds:bt("number")};/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ze(0,0))}static max(){return new pe(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const kl=-1;function LR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new ss(i,ae.empty(),e)}function VR(t){return new ss(t.readTime,t.key,kl)}class ss{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ss(pe.min(),ae.empty(),kl)}static max(){return new ss(pe.max(),ae.empty(),kl)}}function FR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const zR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function da(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==zR)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function BR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ha(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Cp=-1;function vd(t){return t==null}function xc(t){return t===0&&1/t==-1/0}function jR(t){return typeof t=="number"&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const MT="";function $R(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$v(e)),e=HR(t.get(n),e);return $v(e)}function HR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case MT:n+="";break;default:n+=s}}return n}function $v(t){return t+MT+""}/**
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
 */function Hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ht.RED,this.left=i??Ht.EMPTY,this.right=s??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wv(this.data.getIterator())}getIteratorFrom(e){return new Wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class Wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qn{constructor(e){this.fields=e,e.sort(Wt.comparator)}static empty(){return new Qn([])}unionWith(e){let n=new Pt(Wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VT("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const WR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=WR.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function as(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
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
 */const FT="server_timestamp",zT="__type__",UT="__previous_value__",BT="__local_write_time__";function Np(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[zT])===null||n===void 0?void 0:n.stringValue)===FT}function _d(t){const e=t.mapValue.fields[UT];return Np(e)?_d(e):e}function Al(t){const e=os(t.mapValue.fields[BT].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class qR{constructor(e,n,r,i,s,o,l,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Oc="(default)";class bl{constructor(e,n){this.projectId=e,this.database=n||Oc}static empty(){return new bl("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(e){return e instanceof bl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const jT="__type__",KR="__max__",bu={mapValue:{}},$T="__vector__",Mc="value";function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Np(t)?4:QR(t)?9007199254740991:GR(t)?10:11:fe(28295,{value:t})}function qr(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=os(i.timestampValue),l=os(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return as(i.bytesValue).isEqual(as(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _t(i.geoPointValue.latitude)===_t(s.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _t(i.integerValue)===_t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_t(i.doubleValue),l=_t(s.doubleValue);return o===l?xc(o)===xc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zo(t.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hv(o)!==Hv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!qr(o[u],l[u])))return!1;return!0}(t,e);default:return fe(52216,{left:t})}}function Cl(t,e){return(t.values||[]).find(n=>qr(n,e))!==void 0}function ea(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=_t(s.integerValue||s.doubleValue),u=_t(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return qv(t.timestampValue,e.timestampValue);case 4:return qv(Al(t),Al(e));case 5:return Xf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=as(s),u=as(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=we(l[d],u[d]);if(f!==0)return f}return we(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=we(_t(s.latitude),_t(o.latitude));return l!==0?l:we(_t(s.longitude),_t(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,f;const p=s.fields||{},g=o.fields||{},T=(l=p[Mc])===null||l===void 0?void 0:l.arrayValue,N=(u=g[Mc])===null||u===void 0?void 0:u.arrayValue,D=we(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((f=N==null?void 0:N.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Kv(T,N)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===bu.mapValue&&o===bu.mapValue)return 0;if(s===bu.mapValue)return 1;if(o===bu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Xf(u[p],f[p]);if(g!==0)return g;const T=ea(l[u[p]],d[f[p]]);if(T!==0)return T}return we(u.length,f.length)}(t.mapValue,e.mapValue);default:throw fe(23264,{le:n})}}function qv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=os(t),r=os(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Kv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ea(n[i],r[i]);if(s)return s}return we(n.length,r.length)}function ta(t){return Yf(t)}function Yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=os(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return as(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Yf(n.fields[o])}`;return i+"}"}(t.mapValue):fe(61005,{value:t})}function Xu(t){switch(ls(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_d(t);return e?16+Xu(e):16;case 5:return 2*t.stringValue.length;case 6:return as(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Xu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ys(r.fields,(s,o)=>{i+=s.length+Xu(o)}),i}(t.mapValue);default:throw fe(13486,{value:t})}}function Gv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jf(t){return!!t&&"integerValue"in t}function Rp(t){return!!t&&"arrayValue"in t}function Qv(t){return!!t&&"nullValue"in t}function Xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yu(t){return!!t&&"mapValue"in t}function GR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[jT])===null||n===void 0?void 0:n.stringValue)===$T}function Za(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Za(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===KR}/**
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
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(n)}setAll(e){let n=Wt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Za(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nn(Za(this.value))}}function HT(t){const e=[];return ys(t.fields,(n,r)=>{const i=new Wt([n]);if(Yu(r)){const s=HT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qn(e)}/**
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
 */class ln{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ln(e,0,pe.min(),pe.min(),pe.min(),Nn.empty(),0)}static newFoundDocument(e,n,r,i){return new ln(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new ln(e,2,n,pe.min(),pe.min(),Nn.empty(),0)}static newUnknownDocument(e,n){return new ln(e,3,n,pe.min(),pe.min(),Nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ln&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lc{constructor(e,n){this.position=e,this.inclusive=n}}function Yv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=ea(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nl{constructor(e,n="asc"){this.field=e,this.dir=n}}function XR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class WT{}class At extends WT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new JR(e,n,r):n==="array-contains"?new tP(e,r):n==="in"?new nP(e,r):n==="not-in"?new rP(e,r):n==="array-contains-any"?new iP(e,r):new At(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ZR(e,r):new eP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ea(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(ea(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cr extends WT{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Cr(e,n)}matches(e){return qT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function qT(t){return t.op==="and"}function KT(t){return YR(t)&&qT(t)}function YR(t){for(const e of t.filters)if(e instanceof Cr)return!1;return!0}function Zf(t){if(t instanceof At)return t.field.canonicalString()+t.op.toString()+ta(t.value);if(KT(t))return t.filters.map(e=>Zf(e)).join(",");{const e=t.filters.map(n=>Zf(n)).join(",");return`${t.op}(${e})`}}function GT(t,e){return t instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.field.isEqual(i.field)&&qr(r.value,i.value)}(t,e):t instanceof Cr?function(r,i){return i instanceof Cr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&GT(o,i.filters[l]),!0):!1}(t,e):void fe(19439)}function QT(t){return t instanceof At?function(n){return`${n.field.canonicalString()} ${n.op} ${ta(n.value)}`}(t):t instanceof Cr?function(n){return n.op.toString()+" {"+n.getFilters().map(QT).join(" ,")+"}"}(t):"Filter"}class JR extends At{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class ZR extends At{constructor(e,n){super(e,"in",n),this.keys=XT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eP extends At{constructor(e,n){super(e,"not-in",n),this.keys=XT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class tP extends At{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rp(n)&&Cl(n.arrayValue,this.value)}}class nP extends At{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class rP extends At{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Cl(this.value.arrayValue,n)}}class iP extends At{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
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
 */class sP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Zv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sP(t,e,n,r,i,s,o)}function Pp(t){const e=ye(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ta(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ta(r)).join(",")),e.Pe=n}return e.Pe}function Dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!XR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!GT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jv(t.startAt,e.startAt)&&Jv(t.endAt,e.endAt)}function em(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function oP(t,e,n,r,i,s,o,l){return new fa(t,e,n,r,i,s,o,l)}function xp(t){return new fa(t)}function e_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YT(t){return t.collectionGroup!==null}function el(t){const e=ye(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Pt(Wt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Nl(s,r))}),n.has(Wt.keyField().canonicalString())||e.Te.push(new Nl(Wt.keyField(),r))}return e.Te}function jr(t){const e=ye(t);return e.Ie||(e.Ie=aP(e,el(t))),e.Ie}function aP(t,e){if(t.limitType==="F")return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Nl(i.field,s)});const n=t.endAt?new Lc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Lc(t.startAt.position,t.startAt.inclusive):null;return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tm(t,e){const n=t.filters.concat([e]);return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nm(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ed(t,e){return Dp(jr(t),jr(e))&&t.limitType===e.limitType}function JT(t){return`${Pp(jr(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>QT(i)).join(", ")}]`),vd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ta(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ta(i)).join(",")),`Target(${r})`}(jr(t))}; limitType=${t.limitType})`}function wd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of el(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=Yv(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,el(r),i)||r.endAt&&!function(o,l,u){const d=Yv(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,el(r),i))}(t,e)}function lP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ZT(t){return(e,n)=>{let r=!1;for(const i of el(t)){const s=uP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uP(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?ea(u,d):fe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe(19790,{direction:t.dir})}}/**
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
 */class oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LT(this.inner)}size(){return this.innerSize}}/**
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
 */const cP=new lt(ae.comparator);function yi(){return cP}const eI=new lt(ae.comparator);function za(...t){let e=eI;for(const n of t)e=e.insert(n.key,n);return e}function tI(t){let e=eI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ms(){return tl()}function nI(){return tl()}function tl(){return new oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const dP=new lt(ae.comparator),hP=new Pt(ae.comparator);function Ce(...t){let e=hP;for(const n of t)e=e.add(n);return e}const fP=new Pt(we);function mP(){return fP}/**
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
 */function Op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function rI(t){return{integerValue:""+t}}function pP(t,e){return jR(e)?rI(e):Op(t,e)}/**
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
 */class Td{constructor(){this._=void 0}}function gP(t,e,n){return t instanceof Rl?function(i,s){const o={fields:{[zT]:{stringValue:FT},[BT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Np(s)&&(s=_d(s)),s&&(o.fields[UT]=s),{mapValue:o}}(n,e):t instanceof Pl?sI(t,e):t instanceof Dl?oI(t,e):function(i,s){const o=iI(i,s),l=t_(o)+t_(i.Ee);return Jf(o)&&Jf(i.Ee)?rI(l):Op(i.serializer,l)}(t,e)}function yP(t,e,n){return t instanceof Pl?sI(t,e):t instanceof Dl?oI(t,e):n}function iI(t,e){return t instanceof Vc?function(r){return Jf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Rl extends Td{}class Pl extends Td{constructor(e){super(),this.elements=e}}function sI(t,e){const n=aI(e);for(const r of t.elements)n.some(i=>qr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Dl extends Td{constructor(e){super(),this.elements=e}}function oI(t,e){let n=aI(e);for(const r of t.elements)n=n.filter(i=>!qr(i,r));return{arrayValue:{values:n}}}class Vc extends Td{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function t_(t){return _t(t.integerValue||t.doubleValue)}function aI(t){return Rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class vP{constructor(e,n){this.field=e,this.transform=n}}function _P(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pl&&i instanceof Pl||r instanceof Dl&&i instanceof Dl?Zo(r.elements,i.elements,qr):r instanceof Vc&&i instanceof Vc?qr(r.Ee,i.Ee):r instanceof Rl&&i instanceof Rl}(t.transform,e.transform)}class EP{constructor(e,n){this.version=e,this.transformResults=n}}class cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cr}static exists(e){return new cr(void 0,e)}static updateTime(e){return new cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Id{}function lI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mp(t.key,cr.none()):new Kl(t.key,t.data,cr.none());{const n=t.data,r=Nn.empty();let i=new Pt(Wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vs(t.key,r,new Qn(i.toArray()),cr.none())}}function wP(t,e,n){t instanceof Kl?function(i,s,o){const l=i.value.clone(),u=r_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(i,s,o){if(!Ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=r_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(uI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function nl(t,e,n,r){return t instanceof Kl?function(s,o,l,u){if(!Ju(s.precondition,o))return l;const d=s.value.clone(),f=i_(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof vs?function(s,o,l,u){if(!Ju(s.precondition,o))return l;const d=i_(s.fieldTransforms,u,o),f=o.data;return f.setAll(uI(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function TP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=iI(r.transform,i||null);s!=null&&(n===null&&(n=Nn.empty()),n.set(r.field,s))}return n||null}function n_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zo(r,i,(s,o)=>_P(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends Id{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vs extends Id{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function uI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r_(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,yP(o,l,n[i]))}return r}function i_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gP(s,o,e))}return r}class Mp extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IP extends Id{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=lI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&Zo(this.mutations,e.mutations,(n,r)=>n_(n,r))&&Zo(this.baseMutations,e.baseMutations,(n,r)=>n_(n,r))}}class Lp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return dP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Lp(e,n,r,i)}}/**
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
 */class kP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var St,Pe;function bP(t){switch(t){case j.OK:return fe(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return fe(15467,{code:t})}}function cI(t){if(t===void 0)return gi("GRPC error has no .code"),j.UNKNOWN;switch(t){case St.OK:return j.OK;case St.CANCELLED:return j.CANCELLED;case St.UNKNOWN:return j.UNKNOWN;case St.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case St.INTERNAL:return j.INTERNAL;case St.UNAVAILABLE:return j.UNAVAILABLE;case St.UNAUTHENTICATED:return j.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case St.NOT_FOUND:return j.NOT_FOUND;case St.ALREADY_EXISTS:return j.ALREADY_EXISTS;case St.PERMISSION_DENIED:return j.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case St.ABORTED:return j.ABORTED;case St.OUT_OF_RANGE:return j.OUT_OF_RANGE;case St.UNIMPLEMENTED:return j.UNIMPLEMENTED;case St.DATA_LOSS:return j.DATA_LOSS;default:return fe(39323,{code:t})}}(Pe=St||(St={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const CP=new Zi([4294967295,4294967295],0);function s_(t){const e=DT().encode(t),n=new ST;return n.update(e),new Uint8Array(n.digest())}function o_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ua(`Invalid padding: ${n}`);if(r<0)throw new Ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ua(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Zi.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(CP)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sd(pe.min(),i,new lt(we),yi(),Ce())}}class Gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Gl(r,n,Ce(),Ce(),Ce())}}/**
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
 */class Zu{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class dI{constructor(e,n){this.targetId=e,this.De=n}}class hI{constructor(e,n,r=Qt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a_{constructor(){this.ve=0,this.Ce=l_(),this.Fe=Qt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ce(),n=Ce(),r=Ce();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:fe(38017,{changeType:s})}}),new Gl(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=l_()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class NP{constructor(e){this.We=e,this.Ge=new Map,this.ze=yi(),this.je=Cu(),this.Je=Cu(),this.He=new lt(we)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:fe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(em(s))if(r===0){const o=new ae(s.path);this.Xe(n,o,ln.newNoDocument(o,pe.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,d)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=as(r).toUint8Array()}catch(u){if(u instanceof VT)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vp(o,i,s)}catch(u){return is(u instanceof Ua?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&em(l.target)){const u=new ae(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,ln.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=Ce();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new Sd(e,n,this.He,this.ze,r);return this.ze=yi(),this.je=Cu(),this.Je=Cu(),this.He=new lt(we),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new a_,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Pt(we),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Pt(we),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new a_),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Cu(){return new lt(ae.comparator)}function l_(){return new lt(ae.comparator)}const RP={asc:"ASCENDING",desc:"DESCENDING"},PP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DP={and:"AND",or:"OR"};class xP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rm(t,e){return t.useProto3Json||vd(e)?e:{value:e}}function Fc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OP(t,e){return Fc(t,e.toTimestamp())}function $r(t){return Fe(!!t,49232),pe.fromTimestamp(function(n){const r=os(n);return new Ze(r.seconds,r.nanos)}(t))}function Fp(t,e){return im(t,e).canonicalString()}function im(t,e){const n=function(i){return new Qe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mI(t){const e=Qe.fromString(t);return Fe(_I(e),10190,{key:e.toString()}),e}function sm(t,e){return Fp(t.databaseId,e.path)}function Ch(t,e){const n=mI(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(gI(n))}function pI(t,e){return Fp(t.databaseId,e)}function MP(t){const e=mI(t);return e.length===4?Qe.emptyPath():gI(e)}function om(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gI(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function u_(t,e,n){return{name:sm(t,e),fields:n.value.mapValue.fields}}function LP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:fe(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),Qt.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?j.UNKNOWN:cI(d.code);return new Z(f,d.message||"")}(o);n=new hI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ch(t,r.document.name),s=$r(r.document.updateTime),o=r.document.createTime?$r(r.document.createTime):pe.min(),l=new Nn({mapValue:{fields:r.document.fields}}),u=ln.newFoundDocument(i,s,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Zu(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ch(t,r.document),s=r.readTime?$r(r.readTime):pe.min(),o=ln.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Zu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ch(t,r.document),s=r.removedTargetIds||[];n=new Zu([],s,i,null)}else{if(!("filter"in e))return fe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AP(i,s),l=r.targetId;n=new dI(l,o)}}return n}function VP(t,e){let n;if(e instanceof Kl)n={update:u_(t,e.key,e.value)};else if(e instanceof Mp)n={delete:sm(t,e.key)};else if(e instanceof vs)n={update:u_(t,e.key,e.data),updateMask:qP(e.fieldMask)};else{if(!(e instanceof IP))return fe(16599,{Rt:e.type});n={verify:sm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Dl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Vc)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw fe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:fe(27497)}(t,e.precondition)),n}function FP(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?$r(i.updateTime):$r(s);return o.isEqual(pe.min())&&(o=$r(s)),new EP(o,i.transformResults||[])}(n,e))):[]}function zP(t,e){return{documents:[pI(t,e.path)]}}function UP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pI(t,i);const s=function(d){if(d.length!==0)return vI(Cr.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:_o(g.field),direction:$P(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=rm(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:n,parent:i}}function BP(t){let e=MP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=yI(p);return g instanceof Cr&&KT(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(N){return new Nl(Eo(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,vd(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,T=p.values||[];return new Lc(T,g)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const g=!p.before,T=p.values||[];return new Lc(T,g)}(n.endAt)),oP(e,i,o,s,l,"F",u,d)}function jP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Eo(n.unaryFilter.field);return At.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Eo(n.unaryFilter.field);return At.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Eo(n.unaryFilter.field);return At.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Eo(n.unaryFilter.field);return At.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}}(t):t.fieldFilter!==void 0?function(n){return At.create(Eo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Cr.create(n.compositeFilter.filters.map(r=>yI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe(1026)}}(n.compositeFilter.op))}(t):fe(30097,{filter:t})}function $P(t){return RP[t]}function HP(t){return PP[t]}function WP(t){return DP[t]}function _o(t){return{fieldPath:t.canonicalString()}}function Eo(t){return Wt.fromServerFormat(t.fieldPath)}function vI(t){return t instanceof At?function(n){if(n.op==="=="){if(Xv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NAN"}};if(Qv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NOT_NAN"}};if(Qv(n.value))return{unaryFilter:{field:_o(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(n.field),op:HP(n.op),value:n.value}}}(t):t instanceof Cr?function(n){const r=n.getFilters().map(i=>vI(i));return r.length===1?r[0]:{compositeFilter:{op:WP(n.op),filters:r}}}(t):fe(54877,{filter:t})}function qP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _I(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ji{constructor(e,n,r,i,s=pe.min(),o=pe.min(),l=Qt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ji(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ji(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class KP{constructor(e){this.gt=e}}function GP(t){const e=BP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
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
 */class QP{constructor(){this.Dn=new XP}addToCollectionParentIndex(e,n){return this.Dn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ss.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ss.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class XP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pt(Qe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pt(Qe.comparator)).toArray()}}/**
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
 */const c_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},EI=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(EI,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
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
 */const d_="LruGarbageCollector",YP=1048576;function h_([t,e],[n,r]){const i=we(t,n);return i===0?we(e,r):i}class JP{constructor(e){this.Tr=e,this.buffer=new Pt(h_),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();h_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ee(d_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ha(n)?ee(d_,"Ignoring IndexedDB error during garbage collection: ",n):await da(n)}await this.Rr(3e5)})}}class e2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(yd.ue);const r=new JP(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(c_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),c_):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),yo()<=be.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function t2(t,e){return new e2(t,e)}/**
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
 */class n2{constructor(){this.changes=new oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ln.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class r2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class i2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&nl(r.mutation,i,Qn.empty(),Ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const i=Ms();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=za();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ms();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=yi();const o=tl(),l=function(){return tl()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof vs)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),nl(f.mutation,d,f.mutation.getFieldMask(),Ze.now())):o.set(d.key,Qn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var p;return l.set(d,new r2(f,(p=o.get(d))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=tl();let i=new lt((o,l)=>o-l),s=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Qn.empty();f=l.applyToLocalView(d,f),r.set(u,f);const p=(i.get(l.batchId)||Ce()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,p=nI();f.forEach(g=>{if(!s.has(g)){const T=lI(n.get(g),r.get(g));T!==null&&p.set(g,T),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Ms());let l=kl,u=s;return o.next(d=>$.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Ce())).next(f=>({batchId:l,changes:tI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=za();return this.indexManager.getCollectionParents(e,s).next(l=>$.forEach(l,u=>{const d=function(p,g){return new fa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,ln.newInvalidDocument(f)))});let l=za();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&nl(f.mutation,d,Qn.empty(),Ze.now()),wd(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class s2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return $.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$r(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:GP(i.bundledQuery),readTime:$r(i.readTime)}}(n)),$.resolve()}}/**
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
 */class o2{constructor(){this.overlays=new lt(ae.comparator),this.kr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ms();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Ms(),s=n.length+1,o=new ae(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new lt((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Ms(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Ms(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return $.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kP(n,r));let s=this.kr.get(n);s===void 0&&(s=Ce(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
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
 */class a2{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class zp{constructor(){this.qr=new Pt(Ot.Qr),this.$r=new Pt(Ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ot(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ot(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new ae(new Qe([])),r=new Ot(n,e),i=new Ot(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new ae(new Qe([])),r=new Ot(n,e),i=new Ot(n,e+1);let s=Ce();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ot(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return ae.comparator(e.key,n.key)||we(e.Hr,n.Hr)}static Ur(e,n){return we(e.Hr,n.Hr)||ae.comparator(e.key,n.key)}}/**
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
 */class l2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Pt(Ot.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Ot(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Cp:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(we);return n.forEach(i=>{const s=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),$.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new Ot(new ae(s),0);let l=new Pt(we);return this.Yr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.Hr)),!0)},o),$.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return $.forEach(n.mutations,i=>{const s=new Ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ot(n,0),i=this.Yr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class u2{constructor(e){this.ni=e,this.docs=function(){return new lt(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():ln.newInvalidDocument(n))}getEntries(e,n){let r=yi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ln.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=yi();const o=n.path,l=new ae(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||FR(VR(f),r)<=0||(i.has(f.key)||wd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){fe(9500)}ri(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new c2(this)}getSize(e){return $.resolve(this.size)}}class c2 extends n2{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class d2{constructor(e){this.persistence=e,this.ii=new oo(n=>Pp(n),Dp),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.si=0,this.oi=new zp,this.targetCount=0,this._i=na.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),$.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new na(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.hr(n),$.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.oi.containsKey(n))}}/**
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
 */class wI{constructor(e,n){this.ai={},this.overlays={},this.ui=new yd(0),this.ci=!1,this.ci=!0,this.li=new a2,this.referenceDelegate=e(this),this.hi=new d2(this),this.indexManager=new QP,this.remoteDocumentCache=function(i){return new u2(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new KP(n),this.Ti=new s2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new l2(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new h2(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return $.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class h2 extends UR{constructor(e){super(),this.currentSequenceNumber=e}}class Up{constructor(e){this.persistence=e,this.Ai=new zp,this.Ri=null}static Vi(e){return new Up(e)}get mi(){if(this.Ri)return this.Ri;throw fe(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,r=>{const i=ae.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return $.or([()=>$.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class zc{constructor(e,n){this.persistence=e,this.gi=new oo(r=>$R(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=t2(this,n)}static Vi(e,n){return new zc(e,n)}Ii(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return $.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?$.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,pe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),$.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xu(e.data.value)),n}Sr(e,n,r){return $.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=Ce(),i=Ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bp(e,n.fromCache,r,i)}}/**
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
 */class f2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class m2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return KA()?8:BR(cn())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new f2;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(yo()<=be.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",vo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(yo()<=be.DEBUG&&ee("QueryEngine","Query:",vo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(yo()<=be.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",vo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jr(n))):$.resolve())}ps(e,n){if(e_(n))return $.resolve(null);let r=jr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=jr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ce(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(n,l);return this.Ds(n,d,o,u.readTime)?this.ps(e,nm(n,null,"F")):this.vs(e,d,n,u)}))})))}ys(e,n,r,i){return e_(n)||i.isEqual(pe.min())?$.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?$.resolve(null):(yo()<=be.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vo(n)),this.vs(e,o,n,LR(i,kl)).next(l=>l))})}bs(e,n){let r=new Pt(ZT(e));return n.forEach((i,s)=>{wd(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return yo()<=be.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",vo(n)),this.gs.getDocumentsMatchingQuery(e,n,ss.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const jp="LocalStore",p2=3e8;class g2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new lt(we),this.Ms=new oo(s=>Pp(s),Dp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function y2(t,e,n,r){return new g2(t,e,n,r)}async function TI(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Ce();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Bs:d,removedBatchIds:o,addedBatchIds:l}))})})}function v2(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const p=d.batch,g=p.keys();let T=$.resolve();return g.forEach(N=>{T=T.next(()=>f.getEntry(u,N)).next(D=>{const F=d.docVersions.get(N);Fe(F!==null,48541),D.version.compareTo(F)<0&&(p.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ce();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function II(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function _2(t,e){const n=ye(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let T=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Qt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(D,F,k){return D.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=p2?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(g,T,f)&&l.push(n.hi.updateTargetData(s,T))});let u=yi(),d=Ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(E2(s,o,e.documentUpdates).next(f=>{u=f.Ls,d=f.ks})),!r.isEqual(pe.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return $.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.Fs=i,s))}function E2(t,e,n){let r=Ce(),i=Ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=yi();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(pe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee(jp,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function w2(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function T2(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new ji(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function am(t,e,n){const r=ye(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ha(o))throw o;ee(jp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function f_(t,e,n){const r=ye(t);let i=pe.min(),s=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const p=ye(u),g=p.Ms.get(f);return g!==void 0?$.resolve(p.Fs.get(g)):p.hi.getTargetData(d,f)}(r,o,jr(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:pe.min(),n?s:Ce())).next(l=>(I2(r,lP(e),l),{documents:l,qs:s})))}function I2(t,e,n){let r=t.xs.get(e)||pe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class m_{constructor(){this.activeTargetIds=mP()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class S2{constructor(){this.Fo=new m_,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new m_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class k2{xo(e){}shutdown(){}}/**
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
 */const p_="ConnectivityMonitor";class g_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ee(p_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ee(p_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Nh="RestConnection",A2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b2{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Oc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=lm(),l=this.Go(e,n.toUriEncodedString());ee(Nh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:d}=new URL(l),f=_i(d);return this.jo(e,l,u,r,f).then(p=>(ee(Nh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw is(Nh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ca}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=A2[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class C2{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const rn="WebChannelConnection";class N2 extends b2{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=lm();return new Promise((l,u)=>{const d=new kT;d.setWithCredentials(!0),d.listenOnce(AT.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Qu.NO_ERROR:const p=d.getResponseJson();ee(rn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Qu.TIMEOUT:ee(rn,`RPC '${e}' ${o} timed out`),u(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qu.HTTP_ERROR:const g=d.getStatus();if(ee(rn,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let T=d.getResponseJson();Array.isArray(T)&&(T=T[0]);const N=T==null?void 0:T.error;if(N&&N.status&&N.message){const D=function(k){const _=k.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(_)>=0?_:j.UNKNOWN}(N.status);u(new Z(D,N.message))}else u(new Z(j.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new Z(j.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{c_:e,streamId:o,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{ee(rn,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);ee(rn,`RPC '${e}' ${o} sending request:`,i),d.send(n,"POST",f,r,15)})}P_(e,n,r){const i=lm(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NT(),l=CT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");ee(rn,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let g=!1,T=!1;const N=new C2({Ho:F=>{T?ee(rn,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(g||(ee(rn,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),ee(rn,`RPC '${e}' stream ${i} sending:`,F),p.send(F))},Yo:()=>p.close()}),D=(F,k,_)=>{F.listen(k,A=>{try{_(A)}catch(L){setTimeout(()=>{throw L},0)}})};return D(p,Fa.EventType.OPEN,()=>{T||(ee(rn,`RPC '${e}' stream ${i} transport opened.`),N.s_())}),D(p,Fa.EventType.CLOSE,()=>{T||(T=!0,ee(rn,`RPC '${e}' stream ${i} transport closed`),N.__(),this.I_(p))}),D(p,Fa.EventType.ERROR,F=>{T||(T=!0,is(rn,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),N.__(new Z(j.UNAVAILABLE,"The operation could not be completed")))}),D(p,Fa.EventType.MESSAGE,F=>{var k;if(!T){const _=F.data[0];Fe(!!_,16349);const A=_,L=(A==null?void 0:A.error)||((k=A[0])===null||k===void 0?void 0:k.error);if(L){ee(rn,`RPC '${e}' stream ${i} received error:`,L);const V=L.status;let B=function(w){const S=St[w];if(S!==void 0)return cI(S)}(V),E=L.message;B===void 0&&(B=j.INTERNAL,E="Unknown error status: "+V+" with message "+L.message),T=!0,N.__(new Z(B,E)),p.close()}else ee(rn,`RPC '${e}' stream ${i} received:`,_),N.a_(_)}}),D(l,bT.STAT_EVENT,F=>{F.stat===Qf.PROXY?ee(rn,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Qf.NOPROXY&&ee(rn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.o_()},0),N}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Rh(){return typeof document<"u"?document:null}/**
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
 */function kd(t){return new xP(t,!0)}/**
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
 */class SI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const y_="PersistentStream";class kI{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new SI(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(gi(n.toString()),gi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new Z(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ee(y_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(ee(y_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends kI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=LP(this.serializer,e),r=function(s){if(!("targetChange"in s))return pe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?$r(o.readTime):pe.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=om(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=em(u)?{documents:zP(s,u)}:{query:UP(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=fI(s,o.resumeToken);const d=rm(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Fc(s,o.snapshotVersion.toTimestamp());const d=rm(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=jP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=om(this.serializer),n.removeTarget=e,this.k_(n)}}class P2 extends kI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=FP(e.writeResults,e.commitTime),r=$r(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=om(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VP(this.serializer,r))};this.k_(n)}}/**
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
 */class D2{}class x2 extends D2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,im(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(j.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,im(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(j.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class O2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gi(n),this._a=!1):ee("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Xs="RemoteStore";class M2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ao(this)&&(ee(Xs,"Restarting streams for network reachability change."),await async function(u){const d=ye(u);d.Ia.add(4),await Ql(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ad(d)}(this))})}),this.Aa=new O2(r,i)}}async function Ad(t){if(ao(t))for(const e of t.da)await e(!0)}async function Ql(t){for(const e of t.da)await e(!1)}function AI(t,e){const n=ye(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),qp(n)?Wp(n):ma(n).x_()&&Hp(n,e))}function $p(t,e){const n=ye(t),r=ma(n);n.Ta.delete(e),r.x_()&&bI(n,e),n.Ta.size===0&&(r.x_()?r.B_():ao(n)&&n.Aa.set("Unknown"))}function Hp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ma(t).H_(e)}function bI(t,e){t.Ra.$e(e),ma(t).Y_(e)}function Wp(t){t.Ra=new NP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ma(t).start(),t.Aa.aa()}function qp(t){return ao(t)&&!ma(t).M_()&&t.Ta.size>0}function ao(t){return ye(t).Ia.size===0}function CI(t){t.Ra=void 0}async function L2(t){t.Aa.set("Online")}async function V2(t){t.Ta.forEach((e,n)=>{Hp(t,e)})}async function F2(t,e){CI(t),qp(t)?(t.Aa.la(e),Wp(t)):t.Aa.set("Unknown")}async function z2(t,e,n){if(t.Aa.set("Online"),e instanceof hI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){ee(Xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uc(t,r)}else if(e instanceof Zu?t.Ra.Ye(e):e instanceof dI?t.Ra.it(e):t.Ra.et(e),!n.isEqual(pe.min()))try{const r=await II(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(d);f&&s.Ta.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(Qt.EMPTY_BYTE_STRING,f.snapshotVersion)),bI(s,u);const p=new ji(f.target,u,d,f.sequenceNumber);Hp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(Xs,"Failed to raise snapshot:",r),await Uc(t,r)}}async function Uc(t,e,n){if(!ha(e))throw e;t.Ia.add(1),await Ql(t),t.Aa.set("Offline"),n||(n=()=>II(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Xs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ad(t)})}function NI(t,e){return e().catch(n=>Uc(t,n,e))}async function bd(t){const e=ye(t),n=us(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Cp;for(;U2(e);)try{const i=await w2(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,B2(e,i)}catch(i){await Uc(e,i)}RI(e)&&PI(e)}function U2(t){return ao(t)&&t.Pa.length<10}function B2(t,e){t.Pa.push(e);const n=us(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function RI(t){return ao(t)&&!us(t).M_()&&t.Pa.length>0}function PI(t){us(t).start()}async function j2(t){us(t).na()}async function $2(t){const e=us(t);for(const n of t.Pa)e.X_(n.mutations)}async function H2(t,e,n){const r=t.Pa.shift(),i=Lp.from(r,e,n);await NI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bd(t)}async function W2(t,e){e&&us(t).Z_&&await async function(r,i){if(function(o){return bP(o)&&o!==j.ABORTED}(i.code)){const s=r.Pa.shift();us(r).N_(),await NI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bd(r)}}(t,e),RI(t)&&PI(t)}async function v_(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ee(Xs,"RemoteStore received new credentials");const r=ao(n);n.Ia.add(3),await Ql(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ad(n)}async function q2(t,e){const n=ye(t);e?(n.Ia.delete(2),await Ad(n)):e||(n.Ia.add(2),await Ql(n),n.Aa.set("Unknown"))}function ma(t){return t.Va||(t.Va=function(n,r,i){const s=ye(n);return s.ia(),new R2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:L2.bind(null,t),e_:V2.bind(null,t),n_:F2.bind(null,t),J_:z2.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),qp(t)?Wp(t):t.Aa.set("Unknown")):(await t.Va.stop(),CI(t))})),t.Va}function us(t){return t.ma||(t.ma=function(n,r,i){const s=ye(n);return s.ia(),new P2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:j2.bind(null,t),n_:W2.bind(null,t),ea:$2.bind(null,t),ta:H2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await bd(t)):(await t.ma.stop(),t.Pa.length>0&&(ee(Xs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class Kp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Kp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gp(t,e){if(gi("AsyncQueue",`${e}: ${t}`),ha(t))return new Z(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $o{static emptySet(e){return new $o(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=za(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class __{constructor(){this.fa=new lt(ae.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):fe(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class ra{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ra(e,n,$o.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class K2{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class G2{constructor(){this.queries=E_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=ye(n),s=i.queries;i.queries=E_(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function E_(){return new oo(t=>JT(t),Ed)}async function Q2(t,e){const n=ye(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new K2,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Gp(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Qp(n)}async function X2(t,e){const n=ye(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Y2(t,e){const n=ye(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Qp(n)}function J2(t,e,n){const r=ye(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Qp(t){t.Da.forEach(e=>{e.next()})}var um,w_;(w_=um||(um={})).Fa="default",w_.Cache="cache";class Z2{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ra(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ra.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==um.Cache}}/**
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
 */class DI{constructor(e){this.key=e}}class xI{constructor(e){this.key=e}}class eD{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ce(),this.mutatedKeys=Ce(),this.Xa=ZT(e),this.eu=new $o(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new __,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),T=wd(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),D=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let F=!1;g&&T?g.data.isEqual(T.data)?N!==D&&(r.track({type:3,doc:T}),F=!0):this.iu(g,T)||(r.track({type:2,doc:T}),F=!0,(u&&this.Xa(T,u)>0||d&&this.Xa(T,d)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),F=!0):g&&!T&&(r.track({type:1,doc:g}),F=!0,(u||d)&&(l=!0)),F&&(T?(o=o.add(T),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(T,N){const D=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{At:F})}};return D(T)-D(N)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,d=u!==this.Ya;return this.Ya=u,o.length!==0||d?{snapshot:new ra(this.query,e.eu,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new __,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ce(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new xI(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new DI(r))}),n}uu(e){this.Ha=e.qs,this.Za=Ce();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ra.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xp="SyncEngine";class tD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nD{constructor(e){this.key=e,this.lu=!1}}class rD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new oo(l=>JT(l),Ed),this.Tu=new Map,this.Iu=new Set,this.du=new lt(ae.comparator),this.Eu=new Map,this.Au=new zp,this.Ru={},this.Vu=new Map,this.mu=na.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function iD(t,e,n=!0){const r=zI(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await OI(r,e,n,!0),i}async function sD(t,e){const n=zI(t);await OI(n,e,!0,!1)}async function OI(t,e,n,r){const i=await T2(t.localStore,jr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await oD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&AI(t.remoteStore,i),l}async function oD(t,e,n,r,i){t.gu=(p,g,T)=>async function(D,F,k,_){let A=F.view.nu(k);A.Ds&&(A=await f_(D.localStore,F.query,!1).then(({documents:E})=>F.view.nu(E,A)));const L=_&&_.targetChanges.get(F.targetId),V=_&&_.targetMismatches.get(F.targetId)!=null,B=F.view.applyChanges(A,D.isPrimaryClient,L,V);return I_(D,F.targetId,B._u),B.snapshot}(t,p,g,T);const s=await f_(t.localStore,e,!0),o=new eD(e,s.qs),l=o.nu(s.documents),u=Gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);I_(t,n,d._u);const f=new tD(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),d.snapshot}async function aD(t,e,n){const r=ye(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Ed(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await am(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$p(r.remoteStore,i.targetId),cm(r,i.targetId)}).catch(da)):(cm(r,i.targetId),await am(r.localStore,i.targetId,!0))}async function lD(t,e){const n=ye(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$p(n.remoteStore,r.targetId))}async function uD(t,e,n){const r=gD(t);try{const i=await function(o,l){const u=ye(o),d=Ze.now(),f=l.reduce((T,N)=>T.add(N.key),Ce());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let N=yi(),D=Ce();return u.Os.getEntries(T,f).next(F=>{N=F,N.forEach((k,_)=>{_.isValidDocument()||(D=D.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,N)).next(F=>{p=F;const k=[];for(const _ of l){const A=TP(_,p.get(_.key).overlayedDocument);A!=null&&k.push(new vs(_.key,A,HT(A.value.mapValue),cr.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,k,l)}).next(F=>{g=F;const k=F.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(T,F.batchId,k)})}).then(()=>({batchId:g.batchId,changes:tI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ru[o.currentUser.toKey()];d||(d=new lt(we)),d=d.insert(l,u),o.Ru[o.currentUser.toKey()]=d}(r,i.batchId,n),await Xl(r,i.changes),await bd(r.remoteStore)}catch(i){const s=Gp(i,"Failed to persist write");n.reject(s)}}async function MI(t,e){const n=ye(t);try{const r=await _2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Fe(o.lu,14607):i.removedDocuments.size>0&&(Fe(o.lu,42227),o.lu=!1))}),await Xl(n,r,e)}catch(r){await da(r)}}function T_(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ye(o);u.onlineState=l;let d=!1;u.queries.forEach((f,p)=>{for(const g of p.wa)g.va(l)&&(d=!0)}),d&&Qp(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cD(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new lt(ae.comparator);o=o.insert(s,ln.newNoDocument(s,pe.min()));const l=Ce().add(s),u=new Sd(pe.min(),new Map,new lt(we),o,l);await MI(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Yp(r)}else await am(r.localStore,e,!1).then(()=>cm(r,e,n)).catch(da)}async function dD(t,e){const n=ye(t),r=e.batch.batchId;try{const i=await v2(n.localStore,e);VI(n,r,null),LI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xl(n,i)}catch(i){await da(i)}}async function hD(t,e,n){const r=ye(t);try{const i=await function(o,l){const u=ye(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(Fe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);VI(r,e,n),LI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xl(r,i)}catch(i){await da(i)}}function LI(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function VI(t,e,n){const r=ye(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function cm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||FI(t,r)})}function FI(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&($p(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Yp(t))}function I_(t,e,n){for(const r of n)r instanceof DI?(t.Au.addReference(r.key,e),fD(t,r)):r instanceof xI?(ee(Xp,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||FI(t,r.key)):fe(19791,{yu:r})}function fD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(ee(Xp,"New document in limbo: "+n),t.Iu.add(r),Yp(t))}function Yp(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new ae(Qe.fromString(e)),r=t.mu.next();t.Eu.set(r,new nD(n)),t.du=t.du.insert(n,r),AI(t.remoteStore,new ji(jr(xp(n.path)),r,"TargetPurposeLimboResolution",yd.ue))}}async function Xl(t,e,n){const r=ye(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);const p=Bp.Es(u.targetId,d);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,d){const f=ye(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(d,g=>$.forEach(g.Is,T=>f.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>$.forEach(g.ds,T=>f.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!ha(p))throw p;ee(jp,"Failed to update sequence numbers: "+p)}for(const p of d){const g=p.targetId;if(!p.fromCache){const T=f.Fs.get(g),N=T.snapshotVersion,D=T.withLastLimboFreeSnapshotVersion(N);f.Fs=f.Fs.insert(g,D)}}}(r.localStore,s))}async function mD(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ee(Xp,"User change. New user:",e.toKey());const r=await TI(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new Z(j.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xl(n,r.Bs)}}function pD(t,e){const n=ye(t),r=n.Eu.get(e);if(r&&r.lu)return Ce().add(r.key);{let i=Ce();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function zI(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=MI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cD.bind(null,e),e.hu.J_=Y2.bind(null,e.eventManager),e.hu.pu=J2.bind(null,e.eventManager),e}function gD(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hD.bind(null,e),e}class Bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return y2(this.persistence,new m2,e.initialUser,this.serializer)}Du(e){return new wI(Up.Vi,this.serializer)}bu(e){return new S2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bc.provider={build:()=>new Bc};class yD extends Bc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Fe(this.persistence.referenceDelegate instanceof zc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new wI(r=>zc.Vi(r,n),this.serializer)}}class dm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mD.bind(null,this.syncEngine),await q2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new G2}()}createDatastore(e){const n=kd(e.databaseInfo.databaseId),r=function(s){return new N2(s)}(e.databaseInfo);return function(s,o,l,u){return new x2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new M2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>T_(this.syncEngine,n,0),function(){return g_.C()?new g_:new k2}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,f){const p=new rD(i,s,o,l,u,d);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ye(i);ee(Xs,"RemoteStore shutting down."),s.Ia.add(5),await Ql(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dm.provider={build:()=>new dm};/**
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
 */class vD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):gi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const cs="FirestoreClient";class _D{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=sn.UNAUTHENTICATED,this.clientId=bp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ee(cs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(cs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress(),ee(cs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await TI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{is("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{ee("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{is("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function S_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ED(t);ee(cs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>v_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>v_(e.remoteStore,i)),t._onlineComponents=e}async function ED(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(cs,"Using user provided OfflineComponentProvider");try{await Ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Ph(t,new Bc)}}else ee(cs,"Using default OfflineComponentProvider"),await Ph(t,new yD(void 0));return t._offlineComponents}async function UI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(cs,"Using user provided OnlineComponentProvider"),await S_(t,t._uninitializedComponentsProvider._online)):(ee(cs,"Using default OnlineComponentProvider"),await S_(t,new dm))),t._onlineComponents}function wD(t){return UI(t).then(e=>e.syncEngine)}async function k_(t){const e=await UI(t),n=e.eventManager;return n.onListen=iD.bind(null,e.syncEngine),n.onUnlisten=aD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lD.bind(null,e.syncEngine),n}/**
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
 */function BI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jI="firestore.googleapis.com",b_=!0;class C_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jI,this.ssl=b_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:b_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=EI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YP)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new AR;switch(r.type){case"firstParty":return new RR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=A_.get(n);r&&(ee("ComponentProvider","Removing Datastore"),A_.delete(n),r.terminate())}(this),Promise.resolve()}}function TD(t,e,n,r={}){var i;t=Br(t,Cd);const s=_i(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(ld(`https://${u}`),ud("Firestore",!0)),o.host!==jI&&o.host!==u&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Ks(d,l)&&(t._setSettings(d),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=sn.MOCK_USER;else{f=V0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new sn(g)}t._authCredentials=new bR(new PT(f,p))}}/**
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
 */class lo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lo(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}toJSON(){return{type:wt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ql(n,wt._jsonSchema))return new wt(e,r||null,new ae(Qe.fromString(n.referencePath)))}}wt._jsonSchemaVersion="firestore/documentReference/1.0",wt._jsonSchema={type:bt("string",wt._jsonSchemaVersion),referencePath:bt("string")};class es extends lo{constructor(e,n,r){super(e,n,xp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new ae(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function on(t,e,...n){if(t=je(t),xT("collection","path",e),t instanceof Cd){const r=Qe.fromString(e,...n);return Uv(r),new es(t,null,r)}{if(!(t instanceof wt||t instanceof es))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return Uv(r),new es(t.firestore,null,r)}}function Ue(t,e,...n){if(t=je(t),arguments.length===1&&(e=bp.newId()),xT("doc","path",e),t instanceof Cd){const r=Qe.fromString(e,...n);return zv(r),new wt(t,null,new ae(r))}{if(!(t instanceof wt||t instanceof es))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return zv(r),new wt(t.firestore,t instanceof es?t.converter:null,new ae(r))}}/**
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
 */const N_="AsyncQueue";class R_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new SI(this,"async_queue_retry"),this.oc=()=>{const r=Rh();r&&ee(N_,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Rh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Rh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new zs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ha(e))throw e;ee(N_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,gi("INTERNAL UNHANDLED ERROR: ",P_(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Kp.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&fe(47125,{hc:P_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function P_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function D_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ys extends Cd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new R_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new R_(e),this._firestoreClient=void 0,await e}}}function ID(t,e){const n=typeof t=="object"?t:jl(),r=typeof t=="string"?t:Oc,i=ps(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=fp("firestore");s&&TD(i,...s)}return i}function $I(t){if(t._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SD(t),t._firestoreClient}function SD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new qR(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,BI(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _D(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(Qt.fromBase64String(e))}catch(n){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ar(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ar._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ql(e,ar._jsonSchema))return ar.fromBase64String(e.bytes)}}ar._jsonSchemaVersion="firestore/bytes/1.0",ar._jsonSchema={type:bt("string",ar._jsonSchemaVersion),bytes:bt("string")};/**
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
 */class Nd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Hr._jsonSchemaVersion}}static fromJSON(e){if(ql(e,Hr._jsonSchema))return new Hr(e.latitude,e.longitude)}}Hr._jsonSchemaVersion="firestore/geoPoint/1.0",Hr._jsonSchema={type:bt("string",Hr._jsonSchemaVersion),latitude:bt("number"),longitude:bt("number")};/**
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
 */class Wr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ql(e,Wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wr(e.vectorValues);throw new Z(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wr._jsonSchemaVersion="firestore/vectorValue/1.0",Wr._jsonSchema={type:bt("string",Wr._jsonSchemaVersion),vectorValues:bt("object")};/**
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
 */const kD=/^__.*__$/;class AD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class HI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{Ec:t})}}class Jp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Jp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return jc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(WI(this.Ec)&&kD.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class bD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kd(e)}Dc(e,n,r,i=!1){return new Jp({Ec:e,methodName:n,bc:r,path:Wt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pd(t){const e=t._freezeSettings(),n=kd(t._databaseId);return new bD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qI(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);eg("Data must be an object, but it was:",o,r);const l=KI(r,o);let u,d;if(s.merge)u=new Qn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=hm(e,p,n);if(!o.contains(g))throw new Z(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QI(f,g)||f.push(g)}u=new Qn(f),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new AD(new Nn(l),u,d)}class Dd extends Rd{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}class Zp extends Rd{_toFieldTransform(e){return new vP(e.path,new Rl)}isEqual(e){return e instanceof Zp}}function CD(t,e,n,r){const i=t.Dc(1,e,n);eg("Data must be an object, but it was:",i,r);const s=[],o=Nn.empty();ys(r,(u,d)=>{const f=tg(e,u,n);d=je(d);const p=i.gc(f);if(d instanceof Dd)s.push(f);else{const g=Yl(d,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Qn(s);return new HI(o,l,i.fieldTransforms)}function ND(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[hm(e,r,n)],u=[i];if(s.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(hm(e,s[g])),u.push(s[g+1]);const d=[],f=Nn.empty();for(let g=l.length-1;g>=0;--g)if(!QI(d,l[g])){const T=l[g];let N=u[g];N=je(N);const D=o.gc(T);if(N instanceof Dd)d.push(T);else{const F=Yl(N,D);F!=null&&(d.push(T),f.set(T,F))}}const p=new Qn(d);return new HI(f,p,o.fieldTransforms)}function RD(t,e,n,r=!1){return Yl(n,t.Dc(r?4:3,e))}function Yl(t,e){if(GI(t=je(t)))return eg("Unsupported field value:",e,t),KI(t,e);if(t instanceof Rd)return function(r,i){if(!WI(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Yl(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ze.fromDate(r);return{timestampValue:Fc(i.serializer,s)}}if(r instanceof Ze){const s=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fc(i.serializer,s)}}if(r instanceof Hr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ar)return{bytesValue:fI(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Wr)return function(o,l){return{mapValue:{fields:{[jT]:{stringValue:$T},[Mc]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Op(l.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${gd(r)}`)}(t,e)}function KI(t,e){const n={};return LT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,i)=>{const s=Yl(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function GI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Hr||t instanceof ar||t instanceof wt||t instanceof Rd||t instanceof Wr)}function eg(t,e,n){if(!GI(n)||!OT(n)){const r=gd(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function hm(t,e,n){if((e=je(e))instanceof Nd)return e._internalPath;if(typeof e=="string")return tg(t,e);throw jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const PD=new RegExp("[~\\*/\\[\\]]");function tg(t,e,n){if(e.search(PD)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nd(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Z(j.INVALID_ARGUMENT,l+t+u)}function QI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class XI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ng("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DD extends XI{data(){return super.data()}}function ng(t,e){return typeof e=="string"?tg(t,e):e instanceof Nd?e._internalPath:e._delegate._internalPath}/**
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
 */function xD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rg{}class YI extends rg{}function bi(t,e,...n){let r=[];e instanceof rg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof sg).length,l=s.filter(u=>u instanceof ig).length;if(o>1||o>0&&l>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ig extends YI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ig(e,n,r)}_apply(e){const n=this._parse(e);return JI(e._query,n),new lo(e.firestore,e.converter,tm(e._query,n))}_parse(e){const n=Pd(e.firestore);return function(s,o,l,u,d,f,p){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){O_(p,f);const N=[];for(const D of p)N.push(x_(u,s,D));g={arrayValue:{values:N}}}else g=x_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||O_(p,f),g=RD(l,o,p,f==="in"||f==="not-in");return At.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class sg extends rg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)JI(o,u),o=tm(o,u)}(e._query,n),new lo(e.firestore,e.converter,tm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class og extends YI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new og(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nl(s,o)}(e._query,this._field,this._direction);return new lo(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fa(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Ci(t,e="asc"){const n=e,r=ng("orderBy",t);return og._create(r,n)}function x_(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!YT(e)&&n.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Qe.fromString(n));if(!ae.isDocumentKey(r))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gv(t,new ae(r))}if(n instanceof wt)return Gv(t,n._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(n)}.`)}function O_(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OD{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(as(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Mc].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>_t(o.doubleValue));return new Wr(s)}convertGeoPoint(e){return new Hr(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_d(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const n=os(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Qe.fromString(e);Fe(_I(r),9688,{name:e});const i=new bl(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||gi(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ZI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Us extends XI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ng("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Us._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Us._jsonSchemaVersion="firestore/documentSnapshot/1.0",Us._jsonSchema={type:bt("string",Us._jsonSchemaVersion),bundleSource:bt("string","DocumentSnapshot"),bundleName:bt("string"),bundle:bt("string")};class ec extends Us{data(e={}){return super.data(e)}}class Ho{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ba(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ec(this._firestore,this._userDataWriter,r.key,r,new Ba(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ec(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ba(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ec(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ba(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:MD(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ho._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:t})}}Ho._jsonSchemaVersion="firestore/querySnapshot/1.0",Ho._jsonSchema={type:bt("string",Ho._jsonSchemaVersion),bundleSource:bt("string","QuerySnapshot"),bundleName:bt("string"),bundle:bt("string")};class e1 extends OD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function fm(t,e,n){t=Br(t,wt);const r=Br(t.firestore,Ys),i=ZI(t.converter,e,n);return xd(r,[qI(Pd(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cr.none())])}function Lt(t,e,n,...r){t=Br(t,wt);const i=Br(t.firestore,Ys),s=Pd(i);let o;return o=typeof(e=je(e))=="string"||e instanceof Nd?ND(s,"updateDoc",t._key,e,n,r):CD(s,"updateDoc",t._key,e),xd(i,[o.toMutation(t._key,cr.exists(!0))])}function Js(t){return xd(Br(t.firestore,Ys),[new Mp(t._key,cr.none())])}function ts(t,e){const n=Br(t.firestore,Ys),r=Ue(t),i=ZI(t.converter,e);return xd(n,[qI(Pd(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,cr.exists(!1))]).then(()=>r)}function Ni(t,...e){var n,r,i;t=je(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||D_(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(D_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,d,f;if(t instanceof wt)d=Br(t.firestore,Ys),f=xp(t._key.path),u={next:p=>{e[o]&&e[o](LD(d,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Br(t,lo);d=Br(p.firestore,Ys),f=p._query;const g=new e1(d);u={next:T=>{e[o]&&e[o](new Ho(d,g,p,T))},error:e[o+1],complete:e[o+2]},xD(t._query)}return function(g,T,N,D){const F=new vD(D),k=new Z2(T,F,N);return g.asyncQueue.enqueueAndForget(async()=>Q2(await k_(g),k)),()=>{F.Ou(),g.asyncQueue.enqueueAndForget(async()=>X2(await k_(g),k))}}($I(d),f,l,u)}function xd(t,e){return function(r,i){const s=new zs;return r.asyncQueue.enqueueAndForget(async()=>uD(await wD(r),i,s)),s.promise}($I(t),e)}function LD(t,e,n){const r=n.docs.get(e._key),i=new e1(t);return new Us(t,i,e._key,r,new Ba(n.hasPendingWrites,n.fromCache),e.converter)}function VD(){return new Zp("serverTimestamp")}(function(e,n=!0){(function(i){ca=i})(io),Ln(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ys(new CR(r.getProvider("auth-internal")),new PR(o,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bl(d.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ft(Ov,Mv,e),Ft(Ov,Mv,"esm2017")})();const t1="@firebase/installations",ag="0.6.18";/**
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
 */const n1=1e4,r1=`w:${ag}`,i1="FIS_v2",FD="https://firebaseinstallations.googleapis.com/v1",zD=60*60*1e3,UD="installations",BD="Installations";/**
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
 */const jD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zs=new ms(UD,BD,jD);function s1(t){return t instanceof tr&&t.code.includes("request-failed")}/**
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
 */function o1({projectId:t}){return`${FD}/projects/${t}/installations`}function a1(t){return{token:t.token,requestStatus:2,expiresIn:HD(t.expiresIn),creationTime:Date.now()}}async function l1(t,e){const r=(await e.json()).error;return Zs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function u1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $D(t,{refreshToken:e}){const n=u1(t);return n.append("Authorization",WD(e)),n}async function c1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HD(t){return Number(t.replace("s","000"))}function WD(t){return`${i1} ${t}`}/**
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
 */async function qD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=o1(t),i=u1(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:i1,appId:t.appId,sdkVersion:r1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await c1(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:a1(d.authToken)}}else throw await l1("Create Installation",u)}/**
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
 */function d1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function KD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const GD=/^[cdef][\w-]{21}$/,mm="";function QD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=XD(t);return GD.test(n)?n:mm}catch{return mm}}function XD(t){return KD(t).substr(0,22)}/**
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
 */const h1=new Map;function f1(t,e){const n=Od(t);m1(n,e),YD(n,e)}function m1(t,e){const n=h1.get(t);if(n)for(const r of n)r(e)}function YD(t,e){const n=JD();n&&n.postMessage({key:t,fid:e}),ZD()}let Ls=null;function JD(){return!Ls&&"BroadcastChannel"in self&&(Ls=new BroadcastChannel("[Firebase] FID Change"),Ls.onmessage=t=>{m1(t.data.key,t.data.fid)}),Ls}function ZD(){h1.size===0&&Ls&&(Ls.close(),Ls=null)}/**
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
 */const ex="firebase-installations-database",tx=1,eo="firebase-installations-store";let Dh=null;function lg(){return Dh||(Dh=dd(ex,tx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eo)}}})),Dh}async function $c(t,e){const n=Od(t),i=(await lg()).transaction(eo,"readwrite"),s=i.objectStore(eo),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&f1(t,e.fid),e}async function p1(t){const e=Od(t),r=(await lg()).transaction(eo,"readwrite");await r.objectStore(eo).delete(e),await r.done}async function Md(t,e){const n=Od(t),i=(await lg()).transaction(eo,"readwrite"),s=i.objectStore(eo),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&f1(t,l.fid),l}/**
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
 */async function ug(t){let e;const n=await Md(t.appConfig,r=>{const i=nx(r),s=rx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===mm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function nx(t){const e=t||{fid:QD(),registrationStatus:0};return g1(e)}function rx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ix(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sx(t)}:{installationEntry:e}}async function ix(t,e){try{const n=await qD(t,e);return $c(t.appConfig,n)}catch(n){throw s1(n)&&n.customData.serverCode===409?await p1(t.appConfig):await $c(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sx(t){let e=await M_(t.appConfig);for(;e.registrationStatus===1;)await d1(100),e=await M_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ug(t);return r||n}return e}function M_(t){return Md(t,e=>{if(!e)throw Zs.create("installation-not-found");return g1(e)})}function g1(t){return ox(t)?{fid:t.fid,registrationStatus:0}:t}function ox(t){return t.registrationStatus===1&&t.registrationTime+n1<Date.now()}/**
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
 */async function ax({appConfig:t,heartbeatServiceProvider:e},n){const r=lx(t,n),i=$D(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:r1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await c1(()=>fetch(r,l));if(u.ok){const d=await u.json();return a1(d)}else throw await l1("Generate Auth Token",u)}function lx(t,{fid:e}){return`${o1(t)}/${e}/authTokens:generate`}/**
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
 */async function cg(t,e=!1){let n;const r=await Md(t.appConfig,s=>{if(!y1(s))throw Zs.create("not-registered");const o=s.authToken;if(!e&&dx(o))return s;if(o.requestStatus===1)return n=ux(t,e),s;{if(!navigator.onLine)throw Zs.create("app-offline");const l=fx(s);return n=cx(t,l),l}});return n?await n:r.authToken}async function ux(t,e){let n=await L_(t.appConfig);for(;n.authToken.requestStatus===1;)await d1(100),n=await L_(t.appConfig);const r=n.authToken;return r.requestStatus===0?cg(t,e):r}function L_(t){return Md(t,e=>{if(!y1(e))throw Zs.create("not-registered");const n=e.authToken;return mx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function cx(t,e){try{const n=await ax(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $c(t.appConfig,r),n}catch(n){if(s1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await p1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $c(t.appConfig,r)}throw n}}function y1(t){return t!==void 0&&t.registrationStatus===2}function dx(t){return t.requestStatus===2&&!hx(t)}function hx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zD}function fx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mx(t){return t.requestStatus===1&&t.requestTime+n1<Date.now()}/**
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
 */async function px(t){const e=t,{installationEntry:n,registrationPromise:r}=await ug(e);return r?r.catch(console.error):cg(e).catch(console.error),n.fid}/**
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
 */async function gx(t,e=!1){const n=t;return await yx(n),(await cg(n,e)).token}async function yx(t){const{registrationPromise:e}=await ug(t);e&&await e}/**
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
 */function vx(t){if(!t||!t.options)throw xh("App Configuration");if(!t.name)throw xh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xh(t){return Zs.create("missing-app-config-values",{valueName:t})}/**
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
 */const v1="installations",_x="installations-internal",Ex=t=>{const e=t.getProvider("app").getImmediate(),n=vx(e),r=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wx=t=>{const e=t.getProvider("app").getImmediate(),n=ps(e,v1).getImmediate();return{getId:()=>px(n),getToken:i=>gx(n,i)}};function Tx(){Ln(new _n(v1,Ex,"PUBLIC")),Ln(new _n(_x,wx,"PRIVATE"))}Tx();Ft(t1,ag);Ft(t1,ag,"esm2017");/**
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
 */const Ix="/firebase-messaging-sw.js",Sx="/firebase-cloud-messaging-push-scope",_1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",kx="https://fcmregistrations.googleapis.com/v1",E1="google.c.a.c_id",Ax="google.c.a.c_l",bx="google.c.a.ts",Cx="google.c.a.e",V_=1e4;var F_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(F_||(F_={}));/**
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
 */function ni(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Nx(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Oh="fcm_token_details_db",Rx=5,z_="fcm_token_object_Store";async function Px(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Oh))return null;let e=null;return(await dd(Oh,Rx,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(z_))return;const u=o.objectStore(z_),d=await u.index("fcmSenderId").get(t);if(await u.clear(),!!d){if(i===2){const f=d;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:ni(f.vapidKey)}}}else if(i===3){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:ni(f.auth),p256dh:ni(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:ni(f.vapidKey)}}}else if(i===4){const f=d;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:ni(f.auth),p256dh:ni(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:ni(f.vapidKey)}}}}}})).close(),await Ih(Oh),await Ih("fcm_vapid_details_db"),await Ih("undefined"),Dx(e)?e:null}function Dx(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const xx="firebase-messaging-database",Ox=1,Ol="firebase-messaging-store";let Mh=null;function w1(){return Mh||(Mh=dd(xx,Ox,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ol)}}})),Mh}async function Mx(t){const e=T1(t),r=await(await w1()).transaction(Ol).objectStore(Ol).get(e);if(r)return r;{const i=await Px(t.appConfig.senderId);if(i)return await dg(t,i),i}}async function dg(t,e){const n=T1(t),i=(await w1()).transaction(Ol,"readwrite");return await i.objectStore(Ol).put(e,n),await i.done,e}function T1({appConfig:t}){return t.appId}/**
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
 */const Lx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},vn=new ms("messaging","Messaging",Lx);/**
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
 */async function Vx(t,e){const n=await fg(t),r=I1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(hg(t.appConfig),i)).json()}catch(o){throw vn.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw vn.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw vn.create("token-subscribe-no-token");return s.token}async function Fx(t,e){const n=await fg(t),r=I1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${hg(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw vn.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw vn.create("token-update-failed",{errorInfo:o})}if(!s.token)throw vn.create("token-update-no-token");return s.token}async function zx(t,e){const r={method:"DELETE",headers:await fg(t)};try{const s=await(await fetch(`${hg(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw vn.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw vn.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function hg({projectId:t}){return`${kx}/projects/${t}/registrations`}async function fg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function I1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==_1&&(i.web.applicationPubKey=r),i}/**
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
 */const Ux=7*24*60*60*1e3;async function Bx(t){const e=await $x(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ni(e.getKey("auth")),p256dh:ni(e.getKey("p256dh"))},r=await Mx(t.firebaseDependencies);if(r){if(Hx(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ux?jx(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await zx(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return U_(t.firebaseDependencies,n)}else return U_(t.firebaseDependencies,n)}async function jx(t,e){try{const n=await Fx(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await dg(t.firebaseDependencies,r),n}catch(n){throw n}}async function U_(t,e){const r={token:await Vx(t,e),createTime:Date.now(),subscriptionOptions:e};return await dg(t,r),r.token}async function $x(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Nx(e)})}function Hx(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function B_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Wx(e,t),qx(e,t),Kx(e,t),e}function Wx(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function qx(t,e){e.data&&(t.data=e.data)}function Kx(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function Gx(t){return typeof t=="object"&&!!t&&E1 in t}/**
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
 */function Qx(t){if(!t||!t.options)throw Lh("App Configuration Object");if(!t.name)throw Lh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Lh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Lh(t){return vn.create("missing-app-config-values",{valueName:t})}/**
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
 */class Xx{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Qx(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Yx(t){try{t.swRegistration=await navigator.serviceWorker.register(Ix,{scope:Sx}),t.swRegistration.update().catch(()=>{}),await Jx(t.swRegistration)}catch(e){throw vn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function Jx(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${V_} ms`)),V_),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)===null||o===void 0?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function Zx(t,e){if(!e&&!t.swRegistration&&await Yx(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw vn.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function eO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=_1)}/**
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
 */async function S1(t,e){if(!navigator)throw vn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw vn.create("permission-blocked");return await eO(t,e==null?void 0:e.vapidKey),await Zx(t,e==null?void 0:e.serviceWorkerRegistration),Bx(t)}/**
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
 */async function tO(t,e,n){const r=nO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[E1],message_name:n[Ax],message_time:n[bx],message_device_time:Math.floor(Date.now()/1e3)})}function nO(t){switch(t){case xl.NOTIFICATION_CLICKED:return"notification_open";case xl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function rO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===xl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(B_(n)):t.onMessageHandler.next(B_(n)));const r=n.data;Gx(r)&&r[Cx]==="1"&&await tO(t,n.messageType,r)}const j_="@firebase/messaging",$_="0.12.22";/**
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
 */const iO=t=>{const e=new Xx(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>rO(e,n)),e},sO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>S1(e,r)}};function oO(){Ln(new _n("messaging",iO,"PUBLIC")),Ln(new _n("messaging-internal",sO,"PRIVATE")),Ft(j_,$_),Ft(j_,$_,"esm2017")}/**
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
 */async function k1(){try{await pp()}catch{return!1}return typeof window<"u"&&mp()&&z0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function aO(t=jl()){return k1().then(e=>{if(!e)throw vn.create("unsupported-browser")},e=>{throw vn.create("indexed-db-unsupported")}),ps(je(t),"messaging").getImmediate()}async function lO(t,e){return t=je(t),S1(t,e)}oO();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A1=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=M.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>M.createElement("svg",{ref:u,...cO,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:A1("lucide",i),...l},[...o.map(([d,f])=>M.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const n=M.forwardRef(({className:r,...i},s)=>M.createElement(dO,{ref:s,iconNode:e,className:A1(`lucide-${uO(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=tt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=tt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=tt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=tt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=tt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=tt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=tt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=tt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=tt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=tt("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=tt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=tt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=tt("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=tt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=tt("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=tt("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=tt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=tt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=tt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=tt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=tt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=tt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=tt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=tt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var IO="firebase",SO="11.10.0";/**
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
 */Ft(IO,SO,"app");/**
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
 */const G_="analytics",kO="firebase_id",AO="origin",bO=60*1e3,CO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pg="https://www.googletagmanager.com/gtag/js";/**
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
 */const Mn=new cd("@firebase/analytics");/**
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
 */const NO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hr=new ms("analytics","Analytics",NO);/**
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
 */function RO(t){if(!t.startsWith(pg)){const e=hr.create("invalid-gtag-resource",{gtagURL:t});return Mn.warn(e.message),""}return t}function R1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function PO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function DO(t,e){const n=PO("firebase-js-sdk-policy",{createScriptURL:RO}),r=document.createElement("script"),i=`${pg}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function xO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function OO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await R1(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(l){Mn.error(l)}t("config",i,s)}async function MO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await R1(n);for(const u of o){const d=l.find(p=>p.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Mn.error(s)}}function LO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await MO(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await OO(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,d]=o;t("get",l,u,d)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Mn.error(l)}}return i}function VO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=LO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function FO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pg)&&n.src.includes(t))return n;return null}/**
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
 */const zO=30,UO=1e3;class BO{constructor(e={},n=UO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const P1=new BO;function jO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $O(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:jO(r)},s=CO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw hr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function HO(t,e=P1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw hr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw hr.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new KO;return setTimeout(async()=>{l.abort()},bO),D1({appId:r,apiKey:i,measurementId:s},o,l,e)}async function D1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=P1){var s;const{appId:o,measurementId:l}=t;try{await WO(r,e)}catch(u){if(l)return Mn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await $O(t);return i.deleteThrottleMetadata(o),u}catch(u){const d=u;if(!qO(d)){if(i.deleteThrottleMetadata(o),l)return Mn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?iv(n,i.intervalMillis,zO):iv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Mn.debug(`Calling attemptFetch again in ${f} millis`),D1(t,p,r,i)}}function WO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(hr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qO(t){if(!(t instanceof tr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class KO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function GO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function QO(){if(mp())try{await pp()}catch(t){return Mn.warn(hr.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Mn.warn(hr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XO(t,e,n,r,i,s,o){var l;const u=HO(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&Mn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Mn.error(T)),e.push(u);const d=QO().then(T=>{if(T)return r.getId()}),[f,p]=await Promise.all([u,d]);FO(s)||DO(s,f.measurementId),i("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[AO]="firebase",g.update=!0,p!=null&&(g[kO]=p),i("config",f.measurementId,g),f.measurementId}/**
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
 */class YO{constructor(e){this.app=e}_delete(){return delete rl[this.app.options.appId],Promise.resolve()}}let rl={},Q_=[];const X_={};let Vh="dataLayer",JO="gtag",Y_,x1,J_=!1;function ZO(){const t=[];if(F0()&&t.push("This is a browser extension environment."),z0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=hr.create("invalid-analytics-context",{errorInfo:e});Mn.warn(n.message)}}function eM(t,e,n){ZO();const r=t.options.appId;if(!r)throw hr.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hr.create("no-api-key");if(rl[r]!=null)throw hr.create("already-exists",{id:r});if(!J_){xO(Vh);const{wrappedGtag:s,gtagCore:o}=VO(rl,Q_,X_,Vh,JO);x1=s,Y_=o,J_=!0}return rl[r]=XO(t,Q_,X_,e,Y_,Vh,n),new YO(t)}function tM(t,e,n,r){t=je(t),GO(x1,rl[t.app.options.appId],e,n,r).catch(i=>Mn.error(i))}const Z_="@firebase/analytics",eE="0.10.17";function nM(){Ln(new _n(G_,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return eM(r,i,n)},"PUBLIC")),Ln(new _n("analytics-internal",t,"PRIVATE")),Ft(Z_,eE),Ft(Z_,eE,"esm2017");function t(e){try{const n=e.getProvider(G_).getImmediate();return{logEvent:(r,i,s)=>tM(n,r,i,s)}}catch(n){throw hr.create("interop-component-reg-failed",{reason:n})}}}nM();/**
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
 */const O1="firebasestorage.googleapis.com",M1="storageBucket",rM=2*60*1e3,iM=10*60*1e3;/**
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
 */class gt extends tr{constructor(e,n,r=0){super(Fh(e),`Firebase Storage: ${n} (${Fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,gt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function Fh(t){return"storage/"+t}function gg(){const t="An unknown error occurred, please check the error payload for server response.";return new gt(pt.UNKNOWN,t)}function sM(t){return new gt(pt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function oM(t){return new gt(pt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new gt(pt.UNAUTHENTICATED,t)}function lM(){return new gt(pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uM(t){return new gt(pt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function cM(){return new gt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dM(){return new gt(pt.CANCELED,"User canceled the upload/download.")}function hM(t){return new gt(pt.INVALID_URL,"Invalid URL '"+t+"'.")}function fM(t){return new gt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function mM(){return new gt(pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+M1+"' property when initializing the app?")}function pM(){return new gt(pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gM(){return new gt(pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yM(t){return new gt(pt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ym(t){return new gt(pt.INVALID_ARGUMENT,t)}function L1(){return new gt(pt.APP_DELETED,"The Firebase app was deleted.")}function vM(t){return new gt(pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function il(t,e){return new gt(pt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ra(t){throw new gt(pt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(r.path==="")return r;throw fM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(L){L.path_=decodeURIComponent(L.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),N={bucket:1,path:3},D=n===O1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",k=new RegExp(`^https?://${D}/${i}/${F}`,"i"),A=[{regex:l,indices:u,postModify:s},{regex:T,indices:N,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let L=0;L<A.length;L++){const V=A[L],B=V.regex.exec(e);if(B){const E=B[V.indices.bucket];let v=B[V.indices.path];v||(v=""),r=new Xn(E,v),V.postModify(r);break}}if(r==null)throw hM(e);return r}}class _M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function EM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function f(...F){d||(d=!0,e.apply(null,F))}function p(F){i=setTimeout(()=>{i=null,t(T,u())},F)}function g(){s&&clearTimeout(s)}function T(F,...k){if(d){g();return}if(F){g(),f.call(null,F,...k);return}if(u()||o){g(),f.call(null,F,...k);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let N=!1;function D(F){N||(N=!0,g(),!d&&(i!==null?(F||(l=2),clearTimeout(i),p(0)):F||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function wM(t){t(!1)}/**
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
 */function TM(t){return t!==void 0}function IM(t){return typeof t=="object"&&!Array.isArray(t)}function yg(t){return typeof t=="string"||t instanceof String}function tE(t){return vg()&&t instanceof Blob}function vg(){return typeof Blob<"u"}function nE(t,e,n,r){if(r<e)throw ym(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ym(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function _g(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function V1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Bs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bs||(Bs={}));/**
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
 */function SM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class kM{constructor(e,n,r,i,s,o,l,u,d,f,p,g=!0,T=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,D)=>{this.resolve_=N,this.reject_=D,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ru(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Bs.NO_ERROR,u=s.getStatus();if(!l||SM(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Bs.ABORT;r(!1,new Ru(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Ru(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());TM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=gg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?L1():dM();o(u)}else{const u=cM();o(u)}};this.canceled_?n(!1,new Ru(!1,null,!0)):this.backoffId_=EM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ru{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function RM(t,e,n,r,i,s,o=!0,l=!1){const u=V1(t.urlParams),d=t.url+u,f=Object.assign({},t.headers);return CM(f,e),AM(f,n),bM(f,s),NM(f,r),new kM(d,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function PM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DM(...t){const e=PM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(vg())return new Blob(t);throw new gt(pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function xM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function OM(t){if(typeof atob>"u")throw yM("base-64");return atob(t)}/**
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
 */const Lr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zh{constructor(e,n){this.data=e,this.contentType=n||null}}function MM(t,e){switch(t){case Lr.RAW:return new zh(F1(e));case Lr.BASE64:case Lr.BASE64URL:return new zh(z1(t,e));case Lr.DATA_URL:return new zh(VM(e),FM(e))}throw gg()}function F1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LM(t){let e;try{e=decodeURIComponent(t)}catch{throw il(Lr.DATA_URL,"Malformed data URL.")}return F1(e)}function z1(t,e){switch(t){case Lr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw il(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Lr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw il(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OM(e)}catch(i){throw i.message.includes("polyfill")?i:il(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class U1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw il(Lr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function VM(t){const e=new U1(t);return e.base64?z1(Lr.BASE64,e.rest):LM(e.rest)}function FM(t){return new U1(t).contentType}function zM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class zi{constructor(e,n){let r=0,i="";tE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(tE(this.data_)){const r=this.data_,i=xM(r,e,n);return i===null?null:new zi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new zi(r,!0)}}static getBlob(...e){if(vg()){const n=e.map(r=>r instanceof zi?r.data_:r);return new zi(DM.apply(null,n))}else{const n=e.map(o=>yg(o)?MM(Lr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new zi(i,!0)}}uploadData(){return this.data_}}/**
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
 */function B1(t){let e;try{e=JSON.parse(t)}catch{return null}return IM(e)?e:null}/**
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
 */function UM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function j1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function jM(t,e){return e}class pn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jM}}let Pu=null;function $M(t){return!yg(t)||t.length<2?t:j1(t)}function $1(){if(Pu)return Pu;const t=[];t.push(new pn("bucket")),t.push(new pn("generation")),t.push(new pn("metageneration")),t.push(new pn("name","fullPath",!0));function e(s,o){return $M(o)}const n=new pn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new pn("size");return i.xform=r,t.push(i),t.push(new pn("timeCreated")),t.push(new pn("updated")),t.push(new pn("md5Hash",null,!0)),t.push(new pn("cacheControl",null,!0)),t.push(new pn("contentDisposition",null,!0)),t.push(new pn("contentEncoding",null,!0)),t.push(new pn("contentLanguage",null,!0)),t.push(new pn("contentType",null,!0)),t.push(new pn("metadata","customMetadata",!0)),Pu=t,Pu}function HM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Xn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function WM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return HM(r,t),r}function H1(t,e,n){const r=B1(e);return r===null?null:WM(t,r,n)}function qM(t,e,n,r){const i=B1(e);if(i===null||!yg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(d=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),T=_g(g,n,r),N=V1({alt:"media",token:d});return T+N})[0]}function KM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class W1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function q1(t){if(!t)throw gg()}function GM(t,e){function n(r,i){const s=H1(t,i,e);return q1(s!==null),s}return n}function QM(t,e){function n(r,i){const s=H1(t,i,e);return q1(s!==null),qM(s,i,t.host,t._protocol)}return n}function K1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=lM():i=aM():n.getStatus()===402?i=oM(t.bucket):n.getStatus()===403?i=uM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function XM(t){const e=K1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sM(t.path)),s.serverResponse=i.serverResponse,s}return n}function YM(t,e,n){const r=e.fullServerUrl(),i=_g(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new W1(i,s,QM(t,n),o);return l.errorHandler=XM(e),l}function JM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ZM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=JM(null,e)),r}function eL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let L=0;L<2;L++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=ZM(e,r,i),f=KM(d,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,g=`\r
--`+u+"--",T=zi.getBlob(p,r,g);if(T===null)throw pM();const N={name:d.fullPath},D=_g(s,t.host,t._protocol),F="POST",k=t.maxUploadRetryTime,_=new W1(D,F,GM(t,n),k);return _.urlParams=N,_.headers=o,_.body=T.uploadData(),_.errorHandler=K1(e),_}class tL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Ra("cannot .send() more than once");if(_i(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nL extends tL{initXhr(){this.xhr_.responseType="text"}}function G1(){return new nL}/**
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
 */class to{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new to(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j1(this._location.path)}get storage(){return this._service}get parent(){const e=UM(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new to(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vM(e)}}function rL(t,e,n){t._throwIfRoot("uploadBytes");const r=eL(t.storage,t._location,$1(),new zi(e,!0),n);return t.storage.makeRequestWithTokens(r,G1).then(i=>({metadata:i,ref:t}))}function iL(t){t._throwIfRoot("getDownloadURL");const e=YM(t.storage,t._location,$1());return t.storage.makeRequestWithTokens(e,G1).then(n=>{if(n===null)throw gM();return n})}function sL(t,e){const n=BM(t._location.path,e),r=new Xn(t._location.bucket,n);return new to(t.storage,r)}/**
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
 */function oL(t){return/^[A-Za-z]+:\/\//.test(t)}function aL(t,e){return new to(t,e)}function Q1(t,e){if(t instanceof Eg){const n=t;if(n._bucket==null)throw mM();const r=new to(n,n._bucket);return e!=null?Q1(r,e):r}else return e!==void 0?sL(t,e):t}function lL(t,e){if(e&&oL(e)){if(t instanceof Eg)return aL(t,e);throw ym("To use ref(service, url), the first argument must be a Storage instance.")}else return Q1(t,e)}function rE(t,e){const n=e==null?void 0:e[M1];return n==null?null:Xn.makeFromBucketSpec(n,t)}function uL(t,e,n,r={}){t.host=`${e}:${n}`;const i=_i(e);i&&(ld(`https://${t.host}/b`),ud("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:V0(s,t.app.options.projectId))}class Eg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=O1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rM,this._maxUploadRetryTime=iM,this._requests=new Set,i!=null?this._bucket=Xn.makeFromBucketSpec(i,this._host):this._bucket=rE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=rE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new to(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _M(L1());{const o=RM(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const iE="@firebase/storage",sE="0.13.14";/**
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
 */const X1="storage";function Ld(t,e,n){return t=je(t),rL(t,e,n)}function Vd(t){return t=je(t),iL(t)}function Fd(t,e){return t=je(t),lL(t,e)}function cL(t=jl(),e){t=je(t);const r=ps(t,X1).getImmediate({identifier:e}),i=fp("storage");return i&&dL(r,...i),r}function dL(t,e,n,r={}){uL(t,e,n,r)}function hL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Eg(n,r,i,e,io)}function fL(){Ln(new _n(X1,hL,"PUBLIC").setMultipleInstances(!0)),Ft(iE,sE,""),Ft(iE,sE,"esm2017")}fL();/**
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
 */const mL="type.googleapis.com/google.protobuf.Int64Value",pL="type.googleapis.com/google.protobuf.UInt64Value";function Y1(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Hc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Hc(e));if(typeof t=="function"||typeof t=="object")return Y1(t,e=>Hc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ia(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case mL:case pL:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ia(e)):typeof t=="function"||typeof t=="object"?Y1(t,e=>ia(e)):t}/**
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
 */const oE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pn extends tr{constructor(e,n,r){super(`${wg}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Pn.prototype)}}function gL(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Wc(t,e){let n=gL(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!oE[o])return new Pn("internal","internal");n=oE[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=ia(i))}}catch{}return n==="ok"?null:new Pn(n,r,i)}/**
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
 */class yL{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Kn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i==null||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const vm="us-central1",vL=/^data: (.*?)(?:\n|$)/;function _L(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Pn("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class EL{constructor(e,n,r,i,s=vm,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new yL(e,n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=vm}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function wL(t,e,n){const r=_i(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(ld(t.emulatorOrigin),ud("Functions",!0))}function TL(t,e,n){const r=i=>SL(t,e,i,{});return r.stream=(i,s)=>AL(t,e,i,s),r}async function IL(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}async function J1(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function SL(t,e,n,r){const i=t._url(e);return kL(t,i,n,r)}async function kL(t,e,n,r){n=Hc(n);const i={data:n},s=await J1(t,r),o=r.timeout||7e4,l=_L(o),u=await Promise.race([IL(e,i,s,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Pn("cancelled","Firebase Functions instance was deleted.");const d=Wc(u.status,u.json);if(d)throw d;if(!u.json)throw new Pn("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new Pn("internal","Response is missing data field.");return{data:ia(f)}}function AL(t,e,n,r){const i=t._url(e);return bL(t,i,n,r||{})}async function bL(t,e,n,r){var i;n=Hc(n);const s={data:n},o=await J1(t,r);o["Content-Type"]="application/json",o.Accept="text/event-stream";let l;try{l=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:o,signal:r==null?void 0:r.signal})}catch(T){if(T instanceof Error&&T.name==="AbortError"){const D=new Pn("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const N=Wc(0,null);return{data:Promise.reject(N),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(N)}}}}}}let u,d;const f=new Promise((T,N)=>{u=T,d=N});(i=r==null?void 0:r.signal)===null||i===void 0||i.addEventListener("abort",()=>{const T=new Pn("cancelled","Request was cancelled.");d(T)});const p=l.body.getReader(),g=CL(p,u,d,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const T=g.getReader();return{async next(){const{value:N,done:D}=await T.read();return{value:N,done:D}},async return(){return await T.cancel(),{done:!0,value:void 0}}}}},data:f}}function CL(t,e,n,r){const i=(o,l)=>{const u=o.match(vL);if(!u)return;const d=u[1];try{const f=JSON.parse(d);if("result"in f){e(ia(f.result));return}if("message"in f){l.enqueue(ia(f.message));return}if("error"in f){const p=Wc(0,f);l.error(p),n(p);return}}catch(f){if(f instanceof Pn){l.error(f),n(f);return}}},s=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const d=new Pn("cancelled","Request was cancelled");return o.error(d),n(d),Promise.resolve()}try{const{value:d,done:f}=await t.read();if(f){l.trim()&&i(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new Pn("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}l+=s.decode(d,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const g of p)g.trim()&&i(g.trim(),o);return u()}catch(d){const f=d instanceof Pn?d:Wc(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const aE="@firebase/functions",lE="0.12.9";/**
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
 */const NL="auth-internal",RL="app-check-internal",PL="messaging-internal";function DL(t){const e=(n,{instanceIdentifier:r})=>{const i=n.getProvider("app").getImmediate(),s=n.getProvider(NL),o=n.getProvider(PL),l=n.getProvider(RL);return new EL(i,s,o,l,r)};Ln(new _n(wg,e,"PUBLIC").setMultipleInstances(!0)),Ft(aE,lE,t),Ft(aE,lE,"esm2017")}/**
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
 */function xL(t=jl(),e=vm){const r=ps(je(t),wg).getImmediate({identifier:e}),i=fp("functions");return i&&OL(r,...i),r}function OL(t,e,n){wL(je(t),e,n)}function Z1(t,e,n){return TL(je(t),e)}DL();const ML={apiKey:"AIzaSyAto_nGW6s0pEdDZ2RmkXAjrU3x_oL3etA",authDomain:"pcshop-web-manager.firebaseapp.com",projectId:"pcshop-web-manager",storageBucket:"pcshop-web-manager.firebasestorage.app",messagingSenderId:"243721610856",appId:"1:243721610856:web:67c6a703252b6bc472bddd",measurementId:"G-ET66342BXG"},Jl=j0(ML),Uh=SR(Jl),ge=ID(Jl),zd=cL(Jl),eS=xL(Jl,"europe-west1");Z1(eS,"getHardveraproPrice");Z1(eS,"getVintedPrice");async function LL(){return await k1()?aO(Jl):null}const VL=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő","Egyéb"],Bh=["Készleten","Beépítve","Eladva"];function Pa(){return{uid:`slot-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,file:null}}async function uE(t,e){if(!t)return{url:null,name:null};const n=t.name.replace(/[^a-zA-Z0-9._-]/g,"_"),r=Fd(zd,`${e}/${Date.now()}_${n}`);return await Ld(r,t),{url:await Vd(r),name:t.name}}async function cE(t,e="part_photos"){const n=(t||[]).filter(r=>r==null?void 0:r.file);return n.length===0?[]:Promise.all(n.map(async(r,i)=>{const s=r.file,o=s.name.replace(/[^a-zA-Z0-9._-]/g,"_"),l=`${e}/${Date.now()}_${i}_${o}`,u=Fd(zd,l);await Ld(u,s);const d=await Vd(u);return{id:`${Date.now()}-${i}-${Math.random().toString(36).slice(2,7)}`,name:s.name,url:d}}))}function dE(t){const e=[],n=new Set;return Array.isArray(t==null?void 0:t.photos)&&t.photos.forEach((r,i)=>{const s=typeof r=="string"?r:r==null?void 0:r.url;!s||n.has(s)||(n.add(s),e.push({id:typeof r=="object"&&(r==null?void 0:r.id)||`ph-${i}-${n.size}`,name:typeof r=="object"&&(r==null?void 0:r.name)||`Kép ${i+1}`,url:s}))}),Array.isArray(t==null?void 0:t.photoUrls)&&t.photoUrls.forEach((r,i)=>{!r||n.has(r)||(n.add(r),e.push({id:`purl-${i}-${n.size}`,name:`Kép ${i+1}`,url:r}))}),t!=null&&t.photoFileUrl&&!n.has(t.photoFileUrl)&&(n.add(t.photoFileUrl),e.push({id:"legacy-photo",name:t.photoFileName||"Termékkép",url:t.photoFileUrl})),e}function hE({file:t}){const e=M.useMemo(()=>t?URL.createObjectURL(t):null,[t]);return M.useEffect(()=>()=>{e&&URL.revokeObjectURL(e)},[e]),e?c.createElement("img",{src:e,alt:(t==null?void 0:t.name)||"Előnézet",style:{height:64,width:84,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)",flexShrink:0}}):null}function FL({parts:t=[],userEmail:e}){const n=(e||"").toLowerCase(),[r,i]=M.useState([]),[s,o]=M.useState(!1),[l,u]=M.useState(""),d=M.useMemo(()=>{const x=new Set(VL);return(t||[]).forEach(J=>{J!=null&&J.category&&String(J.category).trim()&&x.add(String(J.category).trim())}),r.forEach(J=>{J&&J.trim()&&x.add(J.trim())}),Array.from(x)},[t,r]),[f,p]=M.useState(!1),[g,T]=M.useState(""),[N,D]=M.useState("Videókártya"),[F,k]=M.useState(""),[_,A]=M.useState(""),[L,V]=M.useState(!1),[B,E]=M.useState(null),[v,w]=M.useState([Pa()]),[S,C]=M.useState(!1),[P,I]=M.useState(""),[Ie,le]=M.useState(null),[Te,$e]=M.useState(""),[K,te]=M.useState("Videókártya"),[oe,ve]=M.useState(""),[ue,ce]=M.useState(""),[de,ut]=M.useState("Készleten"),[nt,Ct]=M.useState(!1),[Vn,Tn]=M.useState(null),[Dt,Xt]=M.useState(!1),[dn,yt]=M.useState([]),[zt,Yt]=M.useState([]),[In,Sn]=M.useState(""),[xt,hn]=M.useState(!1),[ct,me]=M.useState("active"),[U,ie]=M.useState("all"),[re,R]=M.useState(""),[H,X]=M.useState(null),[Ee,ze]=M.useState(""),[Re,dt]=M.useState(""),[Oe,nr]=M.useState(!1),[De,Fn]=M.useState(null),[rr,Ei]=M.useState(!1),[pr,zn]=M.useState(null),[Kr,ir]=M.useState(null),Nr=M.useMemo(()=>{const x=re.trim().toLowerCase();return(t||[]).filter(J=>{const _e=J.status||"Készleten";return ct==="active"?_e==="Készleten":ct==="all"?!0:_e===ct}).filter(J=>U==="all"?!0:(J.category||"")===U).filter(J=>x?(J.name||"").toLowerCase().includes(x)||(J.category||"").toLowerCase().includes(x)||(J.serialNumber||"").toLowerCase().includes(x):!0)},[t,ct,U,re]);function wi(x=null){const J=l.trim();J&&(i(_e=>_e.includes(J)?_e:[..._e,J]),x?x(J):D(J),u(""),o(!1))}function fn(){T(""),D(d[0]||"Videókártya"),k(""),A(""),V(!1),E(null),w([Pa()]),I("")}function _s(){w(x=>[...x,Pa()])}function Gr(x,J){w(_e=>_e.map(Ae=>Ae.uid===x?{...Ae,file:J||null}:Ae))}function Es(x){w(J=>{const _e=J.filter(Ae=>Ae.uid!==x);return _e.length>0?_e:[Pa()]})}async function kn(x){var _e;x.preventDefault(),I("");const J=Number(_);if(!g.trim()||_.trim()===""||Number.isNaN(J)||J<0){I("Adj meg alkatrésznevet és érvényes beszerzési árat (0 Ft is lehet).");return}C(!0);try{let Ae=null,Ut=null;if(B){const Tt=await uE(B,"invoices");Ae=Tt.url,Ut=Tt.name}const An=await cE(v,"part_photos"),Hn=An.map(Tt=>Tt.url);await ts(on(ge,"parts"),{name:g.trim(),category:N.trim()||"Egyéb",serialNumber:F.trim()||"-",purchasePrice:J,status:"Készleten",buildId:null,soldPrice:null,soldAt:null,paidWithOwnCard:!!L,paidByEmail:L?n:null,invoiceFileUrl:Ae,invoiceFileName:Ut,photos:An,photoUrls:Hn,photoFileUrl:Hn[0]||null,photoFileName:((_e=An[0])==null?void 0:_e.name)||null,createdByEmail:n,createdAt:Date.now()}),fn(),p(!1)}catch(Ae){console.error("Alkatrész mentési hiba:",Ae),I(`Hiba mentés közben: ${(Ae==null?void 0:Ae.message)||"Ismeretlen hiba"}`)}finally{C(!1)}}function Rr(x){le(x),$e(x.name||""),te(x.category||d[0]||"Egyéb"),ve(x.serialNumber&&x.serialNumber!=="-"?x.serialNumber:""),ce(x.purchasePrice!==void 0&&x.purchasePrice!==null?String(x.purchasePrice):"0"),ut(x.status||"Készleten"),Ct(!!x.paidWithOwnCard),Tn(null),Xt(!1),yt(dE(x)),Yt([]),Sn("")}function it(){Yt(x=>[...x,Pa()])}function Qr(x,J){Yt(_e=>_e.map(Ae=>Ae.uid===x?{...Ae,file:J||null}:Ae))}function Un(x){Yt(J=>J.filter(_e=>_e.uid!==x))}async function Bn(x){var _e;if(x.preventDefault(),!Ie)return;Sn("");const J=Number(ue);if(!Te.trim()||ue.trim()===""||Number.isNaN(J)||J<0){Sn("Adj meg érvényes nevet és beszerzési árat (0 Ft is lehet).");return}hn(!0);try{let Ae=Dt?null:Ie.invoiceFileUrl||null,Ut=Dt?null:Ie.invoiceFileName||null;if(Vn){const mn=await uE(Vn,"invoices");Ae=mn.url,Ut=mn.name}const An=await cE(zt,"part_photos"),Hn=new Set,Tt=[...dn,...An].filter(mn=>!(mn!=null&&mn.url)||Hn.has(mn.url)?!1:(Hn.add(mn.url),!0)),uo=Tt.map(mn=>mn.url),Yr=Bh.includes(de)?de:"Készleten";await Lt(Ue(ge,"parts",Ie.id),{name:Te.trim(),category:K.trim()||"Egyéb",serialNumber:oe.trim()||"-",purchasePrice:J,status:Yr,...Yr==="Készleten"?{buildId:null,soldAt:null,soldPrice:null}:{},paidWithOwnCard:!!nt,paidByEmail:nt?Ie.paidByEmail||n:null,invoiceFileUrl:Ae,invoiceFileName:Ut,photos:Tt,photoUrls:uo,photoFileUrl:uo[0]||null,photoFileName:((_e=Tt[0])==null?void 0:_e.name)||null,updatedAt:Date.now()}),le(null),Tn(null),Yt([])}catch(Ae){console.error("Alkatrész szerkesztési hiba:",Ae),Sn(`Hiba mentés közben: ${(Ae==null?void 0:Ae.message)||"Ismeretlen hiba"}`)}finally{hn(!1)}}function gr(x){X(x),ze(String(x.soldPrice??x.purchasePrice??0)),dt("")}async function Ti(x){if(x.preventDefault(),!H)return;dt("");const J=Number(Ee);if(Ee.trim()===""||Number.isNaN(J)||J<0){dt("Adj meg érvényes eladási árat (0 Ft is lehet).");return}nr(!0);try{await Lt(Ue(ge,"parts",H.id),{status:"Eladva",soldPrice:J,soldAt:Date.now()}),X(null),ze("")}finally{nr(!1)}}async function Pr(){if(!De)return;const x=De;Fn(null),Ei(!0);try{await Lt(Ue(ge,"parts",x.id),{status:"Készleten",soldPrice:null,soldAt:null,buildId:null})}finally{Ei(!1)}}async function pa(){if(!pr)return;const x=pr;zn(null),ir(x.id);try{await Js(Ue(ge,"parts",x.id))}finally{ir(null)}}const ws=Number((H==null?void 0:H.purchasePrice)||0),Xr=Number(Ee),jn=Number.isNaN(Xr)?null:Xr-ws,$n=Vn?Vn.name:!Dt&&(Ie!=null&&Ie.invoiceFileUrl)?Ie.invoiceFileName||"Feltöltött számla":null;return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("h2",{style:{margin:0}},"Készletkövető"),c.createElement("button",{className:"btn btn-green",onClick:()=>{f&&fn(),p(x=>!x)}},f?c.createElement(Ge,{size:16}):c.createElement(dr,{size:16}),f?"Bezárás":"Új alkatrész")),f&&c.createElement("form",{className:"card",onSubmit:kn,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új alkatrész felvétele a készletbe"),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész neve (pl. RTX 3060 8 GB)",value:g,onChange:x=>T(x.target.value),required:!0}),c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:4}},c.createElement("span",{className:"muted",style:{fontSize:12}},"Kategória"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"2px 7px",fontSize:11},onClick:()=>o(x=>!x)},c.createElement(mO,{size:12})," Új kategória")),c.createElement("select",{value:N,onChange:x=>D(x.target.value)},d.map(x=>c.createElement("option",{key:x,value:x},x))),s&&c.createElement("div",{className:"row",style:{marginTop:6,gap:6}},c.createElement("input",{placeholder:"Új kategória neve...",value:l,onChange:x=>u(x.target.value)}),c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"6px 10px",fontSize:12},onClick:()=>wi(D)},"Hozzáad"))),c.createElement("input",{placeholder:"Sorozatszám (SN, opcionális)",value:F,onChange:x=>k(x.target.value)}),c.createElement("input",{type:"number",min:"0",placeholder:"Beszerzési ár (Ft)",value:_,onChange:x=>A(x.target.value),required:!0})),c.createElement("div",{className:"grid-2",style:{marginTop:10,gap:10}},c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Számla csatolása (opcionális — PDF vagy kép)"),c.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:x=>{var J;return E(((J=x.target.files)==null?void 0:J[0])||null)}}),B&&c.createElement("div",{className:"muted",style:{fontSize:11,marginTop:4}},"Kiválasztva: ",B.name)),c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(b1,{size:13})," Termékképek (galériából vagy kamerával)"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"2px 8px",fontSize:11},onClick:_s},c.createElement(dr,{size:12})," További kép")),v.map((x,J)=>c.createElement("div",{key:x.uid,style:{display:"flex",alignItems:"center",gap:8,marginBottom:J<v.length-1?8:0}},c.createElement(hE,{file:x.file}),c.createElement("input",{type:"file",accept:"image/*",onChange:_e=>{var Ae;return Gr(x.uid,((Ae=_e.target.files)==null?void 0:Ae[0])||null)}}),v.length>1&&c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"5px 7px"},onClick:()=>Es(x.uid),title:"Mező törlése"},c.createElement(Ge,{size:12})))))),c.createElement("div",{style:{marginTop:10}},c.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6}},c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:L,onChange:x=>V(x.target.checked)}),c.createElement("span",null,"Saját kártyával fizetve (",n,")"))),P&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},P),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:S},S?"Mentés...":"Felvétel a készletbe"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{fn(),p(!1)}},"Mégse"))),c.createElement("div",{className:"row",style:{marginBottom:14,flexWrap:"wrap",gap:10}},c.createElement("div",{className:"row"},c.createElement("button",{className:`btn ${ct==="active"?"":"btn-ghost"}`,onClick:()=>me("active")},"Aktív készlet"),Bh.map(x=>c.createElement("button",{key:x,className:`btn ${ct===x?"":"btn-ghost"}`,onClick:()=>me(x)},x)),c.createElement("button",{className:`btn ${ct==="all"?"":"btn-ghost"}`,onClick:()=>me("all")},"Összes")),c.createElement("select",{value:U,onChange:x=>ie(x.target.value),style:{maxWidth:210}},c.createElement("option",{value:"all"},"Minden kategória"),d.map(x=>c.createElement("option",{key:x,value:x},x))),c.createElement("div",{style:{flex:1,minWidth:200}},c.createElement("input",{placeholder:"Keresés név, kategória vagy SN alapján...",value:re,onChange:x=>R(x.target.value)}))),Nr.length===0?c.createElement("div",{className:"card"},c.createElement("div",{className:"muted"},"Nincs a szűrésnek megfelelő alkatrész.")):c.createElement("div",{className:"grid-2"},Nr.map(x=>{var An,Hn;const J=x.status||"Készleten",_e=J==="Eladva",Ae=(Hn=(An=x.topMarketOffers)==null?void 0:An[0])==null?void 0:Hn.price,Ut=dE(x);return c.createElement("div",{className:"card",key:x.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:10,borderRadius:12}},c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("strong",{style:{fontSize:15}},x.name),c.createElement("div",{className:"row"},x.category&&c.createElement("span",{className:"badge badge-indigo"},x.category),c.createElement("span",{className:`badge ${_e?"badge-green":J==="Beépítve"?"badge-purple":"badge-blue"}`},J))),Ut.length>0&&c.createElement("div",{style:{marginBottom:8,display:"grid",gridTemplateColumns:Ut.length===1?"1fr":"repeat(2, 1fr)",gap:6}},Ut.map(Tt=>c.createElement("a",{key:Tt.id,href:Tt.url,target:"_blank",rel:"noreferrer"},c.createElement("img",{src:Tt.url,alt:Tt.name||x.name,style:{width:"100%",height:Ut.length===1?150:95,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)"}})))),c.createElement("div",{className:"muted",style:{fontSize:12}},"SN: ",c.createElement("strong",null,x.serialNumber||"-"),x.paidWithOwnCard?" • Saját kártyás tétel":""),c.createElement("div",{className:"row",style:{marginTop:8,fontSize:13}},c.createElement("span",null,"Beszerzés: ",c.createElement("strong",null,Number(x.purchasePrice||0).toLocaleString("hu-HU")," Ft")),_e&&x.soldPrice!==null&&x.soldPrice!==void 0?c.createElement("span",{className:"green"},"Eladva: ",c.createElement("strong",null,Number(x.soldPrice).toLocaleString("hu-HU")," Ft")):Ae?c.createElement("span",{className:"muted"},"Piaci ár: ",c.createElement("strong",null,Number(Ae).toLocaleString("hu-HU")," Ft")):null),x.invoiceFileUrl&&c.createElement("div",{style:{marginTop:8}},c.createElement("a",{href:x.invoiceFileUrl,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Számla: ",x.invoiceFileName||"Megnyitás"))),c.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>Rr(x)},c.createElement(mg,{size:14})," Szerkesztés"),!_e&&J!=="Beépítve"&&c.createElement("button",{className:"btn btn-green",onClick:()=>gr(x)},"Eladás"),_e&&c.createElement("button",{className:"btn btn-ghost",disabled:rr,onClick:()=>Fn(x)},c.createElement(K_,{size:14})," Eladás visszavonása"),c.createElement("button",{className:"btn btn-red",disabled:Kr===x.id,onClick:()=>zn(x),title:"Törlés"},c.createElement(qt,{size:14})," ",Kr===x.id?"Törlés...":"Törlés")))})),Ie&&c.createElement("div",{onClick:()=>!xt&&le(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3,overflowY:"auto"}},c.createElement("form",{className:"card",onClick:x=>x.stopPropagation(),onSubmit:Bn,style:{width:"100%",maxWidth:540,margin:"auto",borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:12}},c.createElement("h3",{style:{margin:0}},"Alkatrész szerkesztése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>le(null),disabled:xt},c.createElement(Ge,{size:16}))),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész neve",value:Te,onChange:x=>$e(x.target.value),required:!0}),c.createElement("select",{value:K,onChange:x=>te(x.target.value)},d.map(x=>c.createElement("option",{key:x,value:x},x))),c.createElement("input",{placeholder:"Sorozatszám (SN)",value:oe,onChange:x=>ve(x.target.value)}),c.createElement("input",{type:"number",min:"0",placeholder:"Beszerzési ár (Ft)",value:ue,onChange:x=>ce(x.target.value),required:!0}),c.createElement("select",{value:de,onChange:x=>ut(x.target.value)},Bh.map(x=>c.createElement("option",{key:x,value:x},x))),c.createElement("div",{style:{display:"flex",alignItems:"center"}},c.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6}},c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:nt,onChange:x=>Ct(x.target.checked)}),c.createElement("span",{style:{fontSize:13}},"Saját kártyás")))),c.createElement("div",{style:{marginTop:12,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Számla (csere vagy törlés)"),$n&&c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"3px 8px",fontSize:11},onClick:()=>{Tn(null),Xt(!0)}},c.createElement(qt,{size:12})," Számla törlése")),c.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:x=>{var _e;const J=((_e=x.target.files)==null?void 0:_e[0])||null;Tn(J),J&&Xt(!1)}}),$n?c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:4}},"Aktuális számla: ",c.createElement("strong",null,$n)):c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:4}},"Nincs csatolt számla.")),c.createElement("div",{style:{marginTop:10,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(pO,{size:13})," Termékképek (galériából vagy kamerával)"),c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"4px 9px",fontSize:12},onClick:it},c.createElement(dr,{size:13})," További kép feltöltése")),dn.length>0&&c.createElement("div",{style:{marginBottom:8,display:"flex",flexWrap:"wrap",gap:8}},dn.map(x=>c.createElement("div",{key:x.id,style:{position:"relative"}},c.createElement("img",{src:x.url,alt:x.name,style:{height:72,width:92,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)"}}),c.createElement("button",{type:"button",onClick:()=>yt(J=>J.filter(_e=>_e.id!==x.id)),style:{position:"absolute",top:3,right:3,background:"rgba(0,0,0,0.75)",color:"#fff",border:"none",borderRadius:999,width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0},title:"Kép törlése"},c.createElement(Ge,{size:11}))))),zt.map(x=>c.createElement("div",{key:x.uid,style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},c.createElement(hE,{file:x.file}),c.createElement("input",{type:"file",accept:"image/*",onChange:J=>{var _e;return Qr(x.uid,((_e=J.target.files)==null?void 0:_e[0])||null)}}),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"5px 7px"},onClick:()=>Un(x.uid),title:"Képmező törlése"},c.createElement(Ge,{size:12})))),dn.length===0&&zt.length===0&&c.createElement("div",{className:"muted",style:{fontSize:12}},"Kattints a „További kép feltöltése” gombra új kép hozzáadásához a galériából vagy kamerával.")),In&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},In),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>le(null),disabled:xt},"Mégse"),c.createElement("button",{type:"submit",className:"btn btn-green",disabled:xt},c.createElement(pm,{size:15})," ",xt?"Mentés...":"Mentés")))),H&&c.createElement("div",{onClick:()=>!Oe&&X(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("form",{className:"card",onClick:x=>x.stopPropagation(),onSubmit:Ti,style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Alkatrész eladásának rögzítése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>X(null),disabled:Oe},c.createElement(Ge,{size:16}))),c.createElement("div",{className:"muted",style:{marginBottom:12,fontSize:13}},c.createElement("strong",null,H.name)," • Beszerzés:"," ",c.createElement("strong",null,ws.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladási ár (Ft)"),c.createElement("input",{type:"number",min:"0",value:Ee,onChange:x=>ze(x.target.value),autoFocus:!0,required:!0}),jn!==null&&c.createElement("div",{className:"row",style:{marginTop:10,fontSize:13}},c.createElement("span",{className:"muted"},"Várható profit:"),c.createElement("strong",{className:jn>=0?"green":"red"},jn>=0?"+":"",jn.toLocaleString("hu-HU")," Ft")),Re&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Re),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>X(null),disabled:Oe},"Mégse"),c.createElement("button",{type:"submit",className:"btn btn-green",disabled:Oe},c.createElement(pm,{size:15})," ",Oe?"Mentés...":"Eladás mentése")))),De&&c.createElement("div",{onClick:()=>!rr&&Fn(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:x=>x.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Eladás visszavonása"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>Fn(null),disabled:rr},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Visszavonod az eladást: ",c.createElement("strong",null,De.name),"?",c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"Az alkatrész újra ",c.createElement("strong",null,"Készleten")," státuszba kerül, és kikerül az eladások közül.")),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>Fn(null),disabled:rr},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-green",disabled:rr,onClick:Pr},c.createElement(K_,{size:14})," ",rr?"Visszavonás...":"Visszavonás")))),pr&&c.createElement("div",{onClick:()=>zn(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:x=>x.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Alkatrész törlése"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>zn(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd a készletből: ",c.createElement("strong",null,pr.name),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>zn(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:pa},c.createElement(qt,{size:14})," Igen, törlöm")))))}const fE=[{key:"cpu",label:"Processzor",category:"Processzor",multi:!1},{key:"gpu",label:"Videókártya",category:"Videókártya",multi:!1},{key:"motherboard",label:"Alaplap",category:"Alaplap",multi:!1},{key:"ram",label:"Memória (RAM)",category:"Memória",multi:!0},{key:"storage",label:"Háttértár (SSD/HDD)",category:"Háttértár",multi:!0},{key:"psu",label:"Tápegység",category:"Tápegység",multi:!1},{key:"case",label:"Ház",category:"Ház",multi:!1},{key:"cooler",label:"Hűtő",category:"Hűtő",multi:!1}],jh={cpu:"",gpu:"",motherboard:"",psu:"",case:"",cooler:""},mE={ram:[""],storage:[""]};function pE(){return{uid:`pc-slot-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,file:null}}async function zL(t){const e=(t||[]).filter(n=>n==null?void 0:n.file);return e.length===0?[]:Promise.all(e.map(async(n,r)=>{const i=n.file,s=i.name.replace(/[^a-zA-Z0-9._-]/g,"_"),o=Fd(zd,`build_photos/${Date.now()}_${r}_${s}`);await Ld(o,i);const l=await Vd(o);return{id:`${Date.now()}-${r}-${Math.random().toString(36).slice(2,7)}`,name:i.name,url:l}}))}function gE(t){const e=[],n=new Set;return Array.isArray(t==null?void 0:t.photos)&&t.photos.forEach((r,i)=>{const s=typeof r=="string"?r:r==null?void 0:r.url;!s||n.has(s)||(n.add(s),e.push({id:typeof r=="object"&&(r==null?void 0:r.id)||`bph-${i}-${n.size}`,name:typeof r=="object"&&(r==null?void 0:r.name)||`PC kép ${i+1}`,url:s}))}),e}function UL({file:t}){const e=M.useMemo(()=>t?URL.createObjectURL(t):null,[t]);return M.useEffect(()=>()=>{e&&URL.revokeObjectURL(e)},[e]),e?c.createElement("img",{src:e,alt:(t==null?void 0:t.name)||"PC előnézet",style:{height:68,width:92,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)",flexShrink:0}}):null}function BL({parts:t=[],builds:e=[]}){const[n,r]=M.useState(!1),[i,s]=M.useState(null),[o,l]=M.useState(""),[u,d]=M.useState(!1),[f,p]=M.useState(""),[g,T]=M.useState([]),[N,D]=M.useState([]),[F,k]=M.useState(!1),[_,A]=M.useState(null),[L,V]=M.useState(""),[B,E]=M.useState(null),[v,w]=M.useState(""),[S,C]=M.useState(""),[P,I]=M.useState(!1),[Ie,le]=M.useState(null),[Te,$e]=M.useState(jh),[K,te]=M.useState(mE),oe=M.useMemo(()=>{const U=new Set((i==null?void 0:i.partIds)||[]);return(t||[]).filter(ie=>U.has(ie.id)||(ie.status||"Készleten")==="Készleten"&&!ie.buildId)},[t,i]),ve=M.useMemo(()=>{const U=Object.values(Te).filter(Boolean);return Object.values(K).forEach(ie=>{(ie||[]).forEach(re=>{re&&U.push(re)})}),U},[Te,K]),ue=M.useMemo(()=>{const U=new Map(oe.map(ie=>[ie.id,ie]));return ve.map(ie=>U.get(ie)).filter(Boolean)},[oe,ve]),ce=M.useMemo(()=>ue.reduce((U,ie)=>U+Number(ie.purchasePrice||0),0),[ue]);function de(){s(null),l(""),d(!1),p(""),T([]),D([]),V(""),$e(jh),te(mE)}function ut(){de(),D([pE()]),r(!0)}function nt(U){const ie=new Set(U.partIds||[]),re=(t||[]).filter(Re=>ie.has(Re.id)),R={...jh},H={ram:[],storage:[]},X=new Set;fE.forEach(Re=>{const dt=re.filter(Oe=>(Oe.category||"").toLowerCase()===Re.category.toLowerCase());Re.multi?(dt.forEach(Oe=>{H[Re.key].push(Oe.id),X.add(Oe.id)}),H[Re.key].length===0&&H[Re.key].push("")):dt[0]&&(R[Re.key]=dt[0].id,X.add(dt[0].id))});const Ee=re.filter(Re=>!X.has(Re.id));if(Ee.length>0){const Re=H.storage.filter(Boolean);H.storage=[...Re,...Ee.map(dt=>dt.id)]}s(U),l(U.name||"");const ze=U.status==="Eladva";d(ze),p(ze&&U.soldPrice!==null&&U.soldPrice!==void 0?String(U.soldPrice):""),T(gE(U)),D([]),$e(R),te(H),V(""),r(!0),window.scrollTo({top:0,behavior:"smooth"})}function Ct(){D(U=>[...U,pE()])}function Vn(U,ie){D(re=>re.map(R=>R.uid===U?{...R,file:ie||null}:R))}function Tn(U){D(ie=>ie.filter(re=>re.uid!==U))}function Dt(U,ie){$e(re=>({...re,[U]:ie}))}function Xt(U,ie,re){te(R=>{const H=[...R[U]||[""]];return H[ie]=re,{...R,[U]:H}})}function dn(U){te(ie=>({...ie,[U]:[...ie[U]||[""],""]}))}function yt(U,ie){te(re=>{const R=(re[U]||[""]).filter((H,X)=>X!==ie);return{...re,[U]:R.length?R:[""]}})}function zt(U,ie){return oe.filter(re=>(re.category||"").toLowerCase()===U.toLowerCase()?re.id===ie?!0:!ve.includes(re.id):!1)}async function Yt(U){if(U.preventDefault(),V(""),!o.trim()){V("Add meg a gép nevét.");return}if(ue.length===0){V("Válassz ki legalább egy alkatrészt.");return}const ie=u?Number(f):null;if(u&&(f.trim()===""||Number.isNaN(ie)||ie<0)){V("Add meg a gép eladási árát.");return}k(!0);try{const re=await zL(N),R=new Set,H=[...g,...re].filter(De=>!(De!=null&&De.url)||R.has(De.url)?!1:(R.add(De.url),!0)),X=Date.now(),Ee=u?"Eladva":"Összerakva",ze=ue.map(De=>De.id),Re={name:o.trim(),partIds:ze,partsSummary:ue.map(De=>({id:De.id,name:De.name,category:De.category||"",serialNumber:De.serialNumber||"",purchasePrice:Number(De.purchasePrice||0),invoiceFileUrl:De.invoiceFileUrl||null})),photos:H,totalCost:ce,status:Ee,soldPrice:u?ie:null,soldAt:u?(i==null?void 0:i.soldAt)||X:null};let dt=i==null?void 0:i.id;i?await Lt(Ue(ge,"builds",i.id),Re):dt=(await ts(on(ge,"builds"),{...Re,createdAt:X})).id;const nr=(Array.isArray(i==null?void 0:i.partIds)?i.partIds:[]).filter(De=>!ze.includes(De));await Promise.all([...nr.map(De=>Lt(Ue(ge,"parts",De),{buildId:null,status:"Készleten",soldAt:null,soldPrice:null})),...ue.map(De=>Lt(Ue(ge,"parts",De.id),{buildId:dt,status:u?"Eladva":"Beépítve",...u?{soldAt:(i==null?void 0:i.soldAt)||X,soldPrice:ie}:{soldAt:null,soldPrice:null}}))]),de(),r(!1)}catch(re){console.error("Gép mentési hiba:",re),V(`Hiba mentés közben: ${(re==null?void 0:re.message)||"Ismeretlen hiba"}`)}finally{k(!1)}}function In(U){E(U),w(String(U.soldPrice??U.totalCost??0)),C("")}async function Sn(U){if(U.preventDefault(),!B)return;C("");const ie=Number(v);if(v.trim()===""||Number.isNaN(ie)||ie<0){C("Adj meg érvényes eladási árat (0 Ft is lehet).");return}I(!0);try{const re=B.soldAt||Date.now();await Lt(Ue(ge,"builds",B.id),{status:"Eladva",soldPrice:ie,soldAt:re}),Array.isArray(B.partIds)&&B.partIds.length>0&&await Promise.all(B.partIds.map(R=>Lt(Ue(ge,"parts",R),{status:"Eladva",soldAt:re}))),E(null),w("")}finally{I(!1)}}async function xt(){if(!Ie)return;const U=Ie;le(null),A(U.id);try{const ie=Array.isArray(U.partIds)?U.partIds:[],re=Array.isArray(U.partsSummary)?U.partsSummary.map(X=>X==null?void 0:X.id).filter(Boolean):[],R=Array.isArray(U.parts)?U.parts.map(X=>typeof X=="string"?X:X==null?void 0:X.id).filter(Boolean):[],H=Array.from(new Set([...ie,...re,...R]));await Promise.all(H.map(X=>Lt(Ue(ge,"parts",X),{status:"Készleten",buildId:null,soldAt:null,soldPrice:null}))),await Js(Ue(ge,"builds",U.id)),(i==null?void 0:i.id)===U.id&&(de(),r(!1))}finally{A(null)}}const hn=Number((B==null?void 0:B.totalCost)||0),ct=Number(v),me=Number.isNaN(ct)?null:ct-hn;return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("h2",{style:{margin:0}},"Gépösszeállító"),c.createElement("button",{className:"btn btn-green",onClick:()=>{n?de():ut()}},n?c.createElement(Ge,{size:16}):c.createElement(dr,{size:16}),n?"Bezárás":"Új gép készletből")),n&&c.createElement("form",{className:"card",onSubmit:Yt,style:{marginBottom:16}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},i?`Gép szerkesztése: ${i.name}`:"Új gép összeállítása alkatrészenként"),i&&c.createElement("span",{className:`badge ${i.status==="Eladva"?"badge-green":"badge-blue"}`},i.status||"Összerakva")),c.createElement("div",{style:{marginBottom:14}},c.createElement("input",{placeholder:"Gép neve (pl. Ryzen 5600 + RTX 3060)",value:o,onChange:U=>l(U.target.value),required:!0})),c.createElement("div",{className:"grid-2",style:{gap:12}},fE.map(U=>{if(!U.multi){const re=Te[U.key]||"",R=zt(U.category,re);return c.createElement("div",{key:U.key,style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("strong",null,U.label),c.createElement("span",{className:"muted",style:{fontSize:12}},R.length," elérhető")),c.createElement("select",{value:re,onChange:H=>Dt(U.key,H.target.value)},c.createElement("option",{value:""},"-- Nincs kiválasztva --"),R.map(H=>c.createElement("option",{key:H.id,value:H.id},H.name," (",Number(H.purchasePrice||0).toLocaleString("hu-HU")," Ft)"))))}const ie=K[U.key]||[""];return c.createElement("div",{key:U.key,style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:6}},c.createElement("strong",null,U.label),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"3px 8px",fontSize:12},onClick:()=>dn(U.key)},c.createElement(dr,{size:12})," Modul / meghajtó")),ie.map((re,R)=>{const H=zt(U.category,re);return c.createElement("div",{className:"row",key:`${U.key}-${R}`,style:{marginBottom:6,gap:6}},c.createElement("select",{value:re,onChange:X=>Xt(U.key,R,X.target.value)},c.createElement("option",{value:""},"-- Válassz ",U.label.toLowerCase()," --"),H.map(X=>c.createElement("option",{key:X.id,value:X.id},X.name," (",Number(X.purchasePrice||0).toLocaleString("hu-HU")," Ft)"))),ie.length>1&&c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"6px 8px"},onClick:()=>yt(U.key,R),title:"Slot törlése"},c.createElement(qt,{size:13})))}))})),c.createElement("div",{style:{marginTop:14,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("span",{className:"muted",style:{fontSize:12,display:"inline-flex",alignItems:"center",gap:5}},c.createElement(b1,{size:14})," Képek az elkészült PC-ről (galériából vagy kamerával)"),c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"4px 9px",fontSize:12},onClick:Ct},c.createElement(dr,{size:13})," További kép feltöltése")),g.length>0&&c.createElement("div",{style:{marginBottom:8,display:"flex",flexWrap:"wrap",gap:8}},g.map(U=>c.createElement("div",{key:U.id,style:{position:"relative"}},c.createElement("img",{src:U.url,alt:U.name,style:{height:76,width:104,borderRadius:6,objectFit:"cover",border:"1px solid var(--border)"}}),c.createElement("button",{type:"button",onClick:()=>T(ie=>ie.filter(re=>re.id!==U.id)),style:{position:"absolute",top:3,right:3,background:"rgba(0,0,0,0.75)",color:"#fff",border:"none",borderRadius:999,width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:0},title:"Kép törlése"},c.createElement(Ge,{size:11}))))),N.map(U=>c.createElement("div",{key:U.uid,style:{display:"flex",alignItems:"center",gap:8,marginBottom:8}},c.createElement(UL,{file:U.file}),c.createElement("input",{type:"file",accept:"image/*",onChange:ie=>{var re;return Vn(U.uid,((re=ie.target.files)==null?void 0:re[0])||null)}}),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"5px 7px"},onClick:()=>Tn(U.uid),title:"Képmező törlése"},c.createElement(Ge,{size:12})))),g.length===0&&N.length===0&&c.createElement("div",{className:"muted",style:{fontSize:12}},"Kattints a „További kép feltöltése” gombra PC-fotó hozzáadásához.")),c.createElement("div",{style:{marginTop:14,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.03)"}},c.createElement("div",{className:"row"},c.createElement("strong",null,"Bekerülési ár:"),c.createElement("strong",{style:{fontSize:16,color:"#60a5fa"}},ce.toLocaleString("hu-HU")," Ft")),ue.length>0&&c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"Kiválasztva:"," ",ue.map(U=>`${U.name} (${Number(U.purchasePrice||0).toLocaleString("hu-HU")} Ft)`).join(" • ")),c.createElement("div",{className:"row",style:{marginTop:10}},c.createElement("label",null,c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:u,onChange:U=>d(U.target.checked)})," ","Gép eladva egyben"),u&&c.createElement("input",{type:"number",min:"0",placeholder:"Eladási ár (Ft)",value:f,onChange:U=>p(U.target.value),style:{maxWidth:220},required:!0}))),L&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},L),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:F},F?"Mentés...":i?"Módosítások mentése":"Mentés"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{de(),r(!1)}},"Mégse"))),c.createElement("div",{className:"grid-2"},(e||[]).map(U=>{const ie=Array.isArray(U.partsSummary)?U.partsSummary:[],re=Number(U.totalCost||0),R=U.soldPrice!==null&&U.soldPrice!==void 0?Number(U.soldPrice):null,H=U.status==="Eladva",X=H&&R!==null?R-re:null,Ee=gE(U);return c.createElement("div",{className:"card",key:U.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:12,borderRadius:12}},c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("div",{className:"row",style:{gap:8}},c.createElement(gm,{size:18,color:"#60a5fa"}),c.createElement("strong",{style:{fontSize:16}},U.name)),c.createElement("span",{className:`badge ${H?"badge-green":"badge-blue"}`},U.status||"Összerakva")),Ee.length>0&&c.createElement("div",{style:{marginBottom:10,display:"grid",gridTemplateColumns:Ee.length===1?"1fr":"repeat(2, 1fr)",gap:6}},Ee.map(ze=>c.createElement("a",{key:ze.id,href:ze.url,target:"_blank",rel:"noreferrer"},c.createElement("img",{src:ze.url,alt:ze.name||U.name,style:{width:"100%",height:Ee.length===1?160:100,objectFit:"cover",borderRadius:8,border:"1px solid var(--border)"}})))),c.createElement("div",{style:{display:"grid",gridTemplateColumns:H&&X!==null?"repeat(3, 1fr)":"repeat(2, 1fr)",gap:8,padding:10,borderRadius:8,background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border)",marginBottom:12}},c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Bekerülés"),c.createElement("strong",{style:{fontSize:13}},re.toLocaleString("hu-HU")," Ft")),H&&R!==null?c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Eladva"),c.createElement("strong",{style:{fontSize:13,color:"#60a5fa"}},R.toLocaleString("hu-HU")," Ft")),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Profit"),c.createElement("strong",{style:{fontSize:13},className:X>=0?"green":"red"},X>=0?"+":"",X.toLocaleString("hu-HU")," Ft"))):c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:11}},"Állapot"),c.createElement("strong",{style:{fontSize:13}},"Eladásra vár"))),ie.length>0&&c.createElement("div",{style:{display:"flex",flexDirection:"column"}},ie.map((ze,Re)=>c.createElement("div",{key:`${ze.id||Re}-${Re}`,className:"row",style:{padding:"6px 0",borderBottom:Re<ie.length-1?"1px solid rgba(255,255,255,0.06)":"none",gap:8}},c.createElement("div",{className:"row",style:{gap:8,minWidth:0}},ze.category&&c.createElement("span",{className:"badge badge-indigo",style:{fontSize:11,padding:"2px 7px",flexShrink:0}},ze.category),c.createElement("span",{style:{fontSize:13,overflow:"hidden",textOverflow:"ellipsis"}},ze.name)),c.createElement("span",{className:"muted",style:{fontSize:13,whiteSpace:"nowrap",fontVariantNumeric:"tabular-nums"}},Number(ze.purchasePrice||0).toLocaleString("hu-HU")," Ft"))))),c.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>nt(U)},c.createElement(mg,{size:14})," Szerkesztés"),!H&&c.createElement("button",{className:"btn btn-green",onClick:()=>In(U)},"Eladás rögzítése"),c.createElement("button",{className:"btn btn-red",disabled:_===U.id,onClick:()=>le(U),title:"Gép törlése"},c.createElement(qt,{size:14})," ",_===U.id?"Törlés...":"Törlés")))})),B&&c.createElement("div",{onClick:()=>!P&&E(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("form",{className:"card",onClick:U=>U.stopPropagation(),onSubmit:Sn,style:{width:"100%",maxWidth:420,margin:0,borderRadius:12,boxShadow:"0 20px 50px rgba(0, 0, 0, 0.6)"}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Gép eladásának rögzítése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>E(null),disabled:P},c.createElement(Ge,{size:16}))),c.createElement("div",{className:"muted",style:{marginBottom:12,fontSize:13}},"Gép: ",c.createElement("strong",null,B.name)," • Bekerülés:"," ",c.createElement("strong",null,hn.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladási ár (Ft)"),c.createElement("input",{type:"number",min:"0",value:v,onChange:U=>w(U.target.value),autoFocus:!0,required:!0}),me!==null&&c.createElement("div",{className:"row",style:{marginTop:10,fontSize:13}},c.createElement("span",{className:"muted"},"Várható profit:"),c.createElement("strong",{className:me>=0?"green":"red"},me>=0?"+":"",me.toLocaleString("hu-HU")," Ft")),S&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},S),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>E(null),disabled:P},"Mégse"),c.createElement("button",{type:"submit",className:"btn btn-green",disabled:P},c.createElement(pm,{size:15})," ",P?"Mentés...":"Eladás rögzítése")))),Ie&&c.createElement("div",{onClick:()=>le(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:U=>U.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12,boxShadow:"0 20px 50px rgba(0, 0, 0, 0.6)"}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Gép törlése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>le(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd ezt a gépet: ",c.createElement("strong",null,Ie.name),"?",c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"A beépített alkatrészei automatikusan visszakerülnek a készletbe.")),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>le(null)},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-red",onClick:xt},c.createElement(qt,{size:14})," Igen, törlöm")))))}const jL=["fabianbal500@gmail.com","beastmaster0626@gmail.com"],yE=10,vE=10;function $L(t){if(!t)return!1;const e=new Date(t),n=new Date;return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()}function HL(t,e){const n=new Map((e||[]).map(o=>[o.id,o])),r=Array.isArray(t.partIds)?t.partIds:Array.isArray(t.parts)?t.parts.map(o=>typeof o=="string"?o:o==null?void 0:o.id).filter(Boolean):[],i=[],s=new Set;return r.forEach(o=>{const l=n.get(o);l!=null&&l.invoiceFileUrl&&!s.has(l.invoiceFileUrl)&&(s.add(l.invoiceFileUrl),i.push({id:l.id,label:l.category?`${l.name} (${l.category})`:l.name,url:l.invoiceFileUrl}))}),i}function WL({parts:t,builds:e,cardExpenses:n=[],manualSales:r=[],userEmail:i}){const s=(i||"").toLowerCase(),[o,l]=M.useState(!1),[u,d]=M.useState(""),[f,p]=M.useState(""),[g,T]=M.useState(""),[N,D]=M.useState(!1),[F,k]=M.useState(""),[_,A]=M.useState(!1),[L,V]=M.useState(""),[B,E]=M.useState(""),[v,w]=M.useState("0"),[S,C]=M.useState(""),[P,I]=M.useState(!1),[Ie,le]=M.useState(""),[Te,$e]=M.useState(!1),[K,te]=M.useState({}),[oe,ve]=M.useState(null),[ue,ce]=M.useState(null),de=t.filter(R=>R.status!=="Eladva"),ut=de.reduce((R,H)=>R+(H.purchasePrice||0),0),nt=de.reduce((R,H)=>{var X,Ee;return R+(((Ee=(X=H.topMarketOffers)==null?void 0:X[0])==null?void 0:Ee.price)||H.purchasePrice||0)},0),Ct=t.filter(R=>R.paidWithOwnCard).map(R=>({id:R.id,kind:"part",name:R.name,amount:R.purchasePrice||0,note:`Készlet • SN: ${R.serialNumber||"-"}`,ownerEmail:(R.paidByEmail||s).toLowerCase(),createdAt:R.createdAt||0})),Tn=[...n.filter(R=>!R.settled).map(R=>({id:R.id,kind:"manual",name:R.name,amount:R.amount||0,note:R.note||"Korábbi / külső tétel",ownerEmail:(R.createdByEmail||"").toLowerCase(),createdAt:R.createdAt||0})),...Ct].sort((R,H)=>H.createdAt-R.createdAt),Dt=Array.from(new Set([...jL.map(R=>R.toLowerCase()),...Tn.map(R=>R.ownerEmail).filter(Boolean)])),Xt=t.filter(R=>R.status==="Eladva"&&!R.buildId),yt=[...e.filter(R=>R.status==="Eladva").map(R=>({id:`build-${R.id}`,rawId:R.id,source:"build",partIds:Array.isArray(R.partIds)?R.partIds:[],title:`[Gép] ${R.name}`,cost:R.totalCost||0,price:R.soldPrice||0,profit:(R.soldPrice||0)-(R.totalCost||0),soldAt:R.soldAt||0,note:"",invoices:HL(R,t)})),...Xt.map(R=>({id:`part-${R.id}`,rawId:R.id,source:"part",title:R.name,cost:R.purchasePrice||0,price:R.soldPrice||0,profit:(R.soldPrice||0)-(R.purchasePrice||0),soldAt:R.soldAt||0,note:"",invoices:R.invoiceFileUrl?[{id:R.id,label:R.name,url:R.invoiceFileUrl}]:[]})),...r.map(R=>({id:`spontaneous-${R.id}`,rawId:R.id,source:"spontaneous",title:`[Spontán] ${R.title}`,cost:R.cost||0,price:R.price||0,profit:(R.price||0)-(R.cost||0),soldAt:R.soldAt||R.createdAt||0,note:R.note||"",invoices:[]}))].sort((R,H)=>H.soldAt-R.soldAt),zt=yt.filter(R=>$L(R.soldAt)),Yt=zt.reduce((R,H)=>R+(H.price||0),0),In=zt.reduce((R,H)=>R+(H.profit||0),0),Sn=yt.reduce((R,H)=>R+(H.profit||0),0),xt=yt.length>yE,hn=Te?yt:yt.slice(0,yE);function ct(R){te(H=>({...H,[R]:!H[R]}))}async function me(R){R.preventDefault(),k("");const H=Number(f);if(!u.trim()||f.trim()===""||Number.isNaN(H)||H<0){k("Adj meg érvényes tételnevet és összeget (0 Ft is lehet).");return}D(!0);try{await ts(on(ge,"card_expenses"),{name:u.trim(),amount:H,note:g.trim(),createdByEmail:s,settled:!1,createdAt:Date.now()}),d(""),p(""),T(""),l(!1)}catch(X){k(`Hiba mentés közben: ${(X==null?void 0:X.message)||"Ismeretlen hiba"}`)}finally{D(!1)}}async function U(R){R.ownerEmail===s&&(R.kind==="part"?await Lt(Ue(ge,"parts",R.id),{paidWithOwnCard:!1}):await Lt(Ue(ge,"card_expenses",R.id),{settled:!0,settledAt:Date.now()}))}async function ie(R){R.preventDefault(),le("");const H=Number(B),X=v.trim()===""?0:Number(v);if(!L.trim()||B.trim()===""||Number.isNaN(H)||H<0){le("Adj meg megnevezést és érvényes eladási árat (0 Ft is lehet).");return}if(Number.isNaN(X)||X<0){le("A költség/beszerzés nem lehet negatív.");return}I(!0);try{const Ee=Date.now();await ts(on(ge,"sales_log"),{title:L.trim(),price:H,cost:X,note:S.trim(),createdByEmail:s,soldAt:Ee,createdAt:Ee}),V(""),E(""),w("0"),C(""),A(!1)}catch(Ee){le(`Hiba mentés közben: ${(Ee==null?void 0:Ee.message)||"Ismeretlen hiba"}`)}finally{I(!1)}}async function re(){if(!ue)return;const R=ue;ce(null),ve(R.id);try{R.source==="spontaneous"?await Js(Ue(ge,"sales_log",R.rawId)):R.source==="part"?await Lt(Ue(ge,"parts",R.rawId),{status:"Készleten",soldPrice:null,soldAt:null,buildId:null}):R.source==="build"&&(await Lt(Ue(ge,"builds",R.rawId),{status:"Összerakva",soldPrice:null,soldAt:null}),Array.isArray(R.partIds)&&R.partIds.length>0&&await Promise.all(R.partIds.map(H=>Lt(Ue(ge,"parts",H),{status:"Beépítve",soldAt:null}).catch(()=>null))))}finally{ve(null)}}return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("h2",{style:{margin:0}},"Pénzügy & Profit"),c.createElement("div",{className:"row"},c.createElement("button",{className:"btn btn-green",onClick:()=>{le(""),A(R=>!R)}},_?c.createElement(Ge,{size:15}):c.createElement(dr,{size:15}),_?"Bezárás":"Spontán eladás"),c.createElement("button",{className:"btn btn-purple",onClick:()=>{k(""),l(R=>!R)}},o?c.createElement(Ge,{size:15}):c.createElement(dr,{size:15}),o?"Bezárás":"Saját kártyás tétel"))),_&&c.createElement("form",{className:"card",onSubmit:ie,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új spontán eladás rögzítése"),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Gyors, nem készletes vagy eseti eladások (pl. kábel, hűtő, apróság) felvétele az eladási naplóba."),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Megnevezés (pl. DisplayPort kábel / 12cm venti)",value:L,onChange:R=>V(R.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Eladási ár / bevétel (Ft)",value:B,onChange:R=>E(R.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Beszerzés / költség (Ft, alapból 0)",value:v,onChange:R=>w(R.target.value)}),c.createElement("input",{placeholder:"Megjegyzés (opcionális)",value:S,onChange:R=>C(R.target.value)})),Ie&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Ie),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:P},P?"Mentés...":"Felvétel a naplóba"),c.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>A(!1)},"Mégse"))),o&&c.createElement("form",{className:"card",onSubmit:me,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új saját kártyás tétel (",s,")"),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Korábbi, már nem a készletben lévő alkatrészek vagy külső kártyás kötések rögzítéséhez."),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész / tétel neve (pl. GTX 1660 Super)",value:u,onChange:R=>d(R.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Összeg (Ft) — 0 is lehet",value:f,onChange:R=>p(R.target.value),required:!0})),c.createElement("div",{style:{marginTop:10}},c.createElement("input",{placeholder:"Megjegyzés (opcionális, pl. már eladott gépben volt)",value:g,onChange:R=>T(R.target.value)})),F&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},F),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:N},N?"Mentés...":"Rögzítés a saját kártyámra"),c.createElement("button",{className:"btn btn-ghost",type:"button",onClick:()=>l(!1)},"Mégse"))),c.createElement("div",{className:"grid-2"},c.createElement("div",{className:"card"},c.createElement("h3",{style:{marginTop:0}},"Havi Realizált Profit"),c.createElement("div",{className:"row"},c.createElement("span",null,"E havi árbevétel:"),c.createElement("strong",null,Yt.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("strong",null,"E havi tiszta profit:"),c.createElement("strong",{className:In>=0?"green":"red"},In>=0?"+":"",In.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("span",{className:"muted"},"Összesített profit:"),c.createElement("strong",null,Sn>=0?"+":"",Sn.toLocaleString("hu-HU")," Ft"))),c.createElement("div",{className:"card"},c.createElement("h3",{style:{marginTop:0}},"Aktív Készlet Mérlege"),c.createElement("div",{className:"row"},c.createElement("span",null,"Befektetett tőke:"),c.createElement("strong",null,ut.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("span",null,"Legolcsóbb piaci érték:"),c.createElement("strong",null,nt.toLocaleString("hu-HU")," Ft")),c.createElement("div",{className:"row",style:{marginTop:6}},c.createElement("strong",null,"Várható árrés:"),c.createElement("strong",{className:nt-ut>=0?"green":"red"},nt-ut>=0?"+":"",(nt-ut).toLocaleString("hu-HU")," Ft")))),c.createElement("div",{className:"grid-2",style:{marginTop:4}},Dt.map(R=>{const H=Tn.filter(Oe=>Oe.ownerEmail===R),X=H.reduce((Oe,nr)=>Oe+(nr.amount||0),0),Ee=R===s,ze=!!K[R],Re=H.length>vE,dt=ze?H:H.slice(0,vE);return c.createElement("div",{className:"card",key:R},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("h3",{style:{margin:0}},R),c.createElement("div",{className:"row"},Re&&c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"4px 9px",fontSize:12},onClick:()=>ct(R)},ze?c.createElement(c.Fragment,null,c.createElement(W_,{size:13})," Kevesebb"):c.createElement(c.Fragment,null,c.createElement(H_,{size:13})," Összes (",H.length,")")),c.createElement("span",{className:`badge ${Ee?"badge-purple":"badge-blue"}`},Ee?"Saját kártyád":"Másik fiók"))),H.length===0?c.createElement("div",{className:"muted"},"Nincs elszámolatlan saját kártyás tétel."):c.createElement(c.Fragment,null,dt.map(Oe=>c.createElement("div",{className:"row",key:`${Oe.kind}-${Oe.id}`,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",null,c.createElement("strong",null,Oe.name),c.createElement("div",{className:"muted"},Number(Oe.amount||0).toLocaleString("hu-HU")," Ft • ",Oe.note)),Ee?c.createElement("button",{className:"btn btn-purple",onClick:()=>U(Oe)},"Kivettem"):c.createElement("span",{className:"muted",style:{fontSize:12}},"Csak megtekinthető"))),c.createElement("div",{className:"row",style:{marginTop:10}},c.createElement("strong",null,"Kintlévőség összesen:"),c.createElement("strong",{style:{color:"#c084fc"}},X.toLocaleString("hu-HU")," Ft"))))})),c.createElement("div",{className:"card"},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("h3",{style:{margin:0}},"Eladási Napló (",yt.length,")"),c.createElement("div",{className:"row"},c.createElement("button",{type:"button",className:"btn btn-green",style:{padding:"5px 10px",fontSize:12},onClick:()=>{le(""),A(R=>!R)}},c.createElement(dr,{size:14})," Spontán eladás"),xt&&c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"5px 10px",fontSize:12},onClick:()=>$e(R=>!R)},Te?c.createElement(c.Fragment,null,c.createElement(W_,{size:14})," Kevesebb mutatása"):c.createElement(c.Fragment,null,c.createElement(H_,{size:14})," Összes megjelenítése (",yt.length,")")))),hn.map(R=>{var H;return c.createElement("div",{key:R.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",{className:"row"},c.createElement("div",null,c.createElement("span",null,R.title," (",R.cost.toLocaleString("hu-HU")," → ",R.price.toLocaleString("hu-HU")," Ft)"),R.note&&c.createElement("div",{className:"muted"},R.note)),c.createElement("div",{className:"row"},c.createElement("strong",{className:R.profit>=0?"green":"red"},R.profit>=0?"+":"",R.profit.toLocaleString("hu-HU")," Ft"),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:oe===R.id,onClick:()=>ce(R),title:"Eltávolítás a naplóból"},c.createElement(qt,{size:13})))),R.source==="build"&&((H=R.invoices)==null?void 0:H.length)>0&&c.createElement("div",{className:"row",style:{marginTop:6,flexWrap:"wrap",gap:10}},R.invoices.map(X=>c.createElement("a",{key:`${R.id}-${X.id}`,href:X.url,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Számla: ",X.label))))})),ue&&c.createElement("div",{onClick:()=>ce(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:R=>R.stopPropagation(),style:{width:"100%",maxWidth:430,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Eltávolítás az eladási naplóból"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>ce(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},ue.source==="spontaneous"?c.createElement(c.Fragment,null,"Biztosan törlöd a naplóból: ",c.createElement("strong",null,ue.title),"?"):c.createElement(c.Fragment,null,"Eltávolítod az eladási naplóból: ",c.createElement("strong",null,ue.title),"?",c.createElement("div",{className:"muted",style:{marginTop:6,fontSize:12}},"A tétel / gép visszakerül a készletbe vagy az összerakott gépek közé."))),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>ce(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:re},c.createElement(qt,{size:14})," Megerősítés")))))}function qL({dealWatches:t=[],foundDeals:e=[]}){const[n,r]=M.useState(!1),[i,s]=M.useState(""),[o,l]=M.useState(""),[u,d]=M.useState(!1),[f,p]=M.useState(""),[g,T]=M.useState(null),[N,D]=M.useState(null),[F,k]=M.useState(null);async function _(V){V.preventDefault(),p("");const B=i.trim(),E=o.trim()===""?null:Number(o);if(!B){p("Add meg a keresett alkatrész vagy gép nevét.");return}if(E!==null&&(Number.isNaN(E)||E<0)){p("A maximum ár nem lehet negatív.");return}d(!0);try{await ts(on(ge,"deal_watches"),{query:B,maxPrice:E,active:!0,createdAt:Date.now()}),s(""),l(""),r(!1)}catch(v){console.error("Figyelés mentési hiba:",v),p(`Hiba mentés közben: ${(v==null?void 0:v.message)||"Ismeretlen hiba"}`)}finally{d(!1)}}async function A(){if(!g)return;const V=g;T(null),k(V.id);try{await Js(Ue(ge,"deal_watches",V.id))}finally{k(null)}}async function L(){if(!N)return;const V=N;D(null),k(V.id);try{await Js(Ue(ge,"found_deals",V.id))}finally{k(null)}}return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("div",{className:"row",style:{gap:8}},c.createElement(C1,{size:20,color:"#f97316"}),c.createElement("h2",{style:{margin:0}},"Deal Hunter")),c.createElement("button",{className:"btn btn-green",onClick:()=>{p(""),r(V=>!V)}},n?c.createElement(Ge,{size:16}):c.createElement(dr,{size:16}),n?"Bezárás":"Új figyelés")),n&&c.createElement("form",{className:"card",onSubmit:_,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Új keresési figyelés felvétele"),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Keresett tétel (pl. RTX 3060 Ti / Ryzen 5600)",value:i,onChange:V=>s(V.target.value),required:!0}),c.createElement("input",{type:"number",min:"0",placeholder:"Maximum célár (Ft, opcionális)",value:o,onChange:V=>l(V.target.value)})),f&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},f),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:u},u?"Mentés...":"Figyelés mentése"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>r(!1)},"Mégse"))),c.createElement("div",{className:"card",style:{marginBottom:16,borderRadius:12}},c.createElement("h3",{style:{marginTop:0}},"Aktív figyelések (",t.length,")"),t.length===0?c.createElement("div",{className:"muted"},"Még nincs beállított figyelés."):t.map(V=>c.createElement("div",{key:V.id,className:"row",style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",null,c.createElement("strong",null,V.query),V.maxPrice!==null&&V.maxPrice!==void 0&&c.createElement("span",{className:"muted",style:{marginLeft:8,fontSize:12}},"Max: ",c.createElement("strong",null,Number(V.maxPrice).toLocaleString("hu-HU")," Ft"))),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:F===V.id,onClick:()=>T(V),title:"Figyelés törlése"},c.createElement(qt,{size:13})," Törlés")))),c.createElement("div",{className:"card",style:{borderRadius:12}},c.createElement("h3",{style:{marginTop:0}},"Talált ajánlatok (",e.length,")"),e.length===0?c.createElement("div",{className:"muted"},"Még nincs rögzített találat."):e.map(V=>c.createElement("div",{key:V.id,className:"row",style:{padding:"8px 0",borderBottom:"1px solid var(--border)",gap:10}},c.createElement("div",{style:{minWidth:0}},c.createElement("strong",{style:{fontSize:14}},V.title||V.query||"Ajánlat"),c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:2}},V.price!==void 0&&V.price!==null&&c.createElement("strong",{className:"green",style:{marginRight:8}},Number(V.price).toLocaleString("hu-HU")," Ft"),V.query&&c.createElement("span",null,"Keresés: ",V.query)),V.url&&c.createElement("div",{style:{marginTop:4}},c.createElement("a",{href:V.url,target:"_blank",rel:"noreferrer",style:{color:"#60a5fa",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(fO,{size:12})," Hirdetés megnyitása"))),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},disabled:F===V.id,onClick:()=>D(V),title:"Találat törlése"},c.createElement(qt,{size:13})," Törlés")))),g&&c.createElement("div",{onClick:()=>T(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:V=>V.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Figyelés törlése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>T(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd ezt a figyelést: ",c.createElement("strong",null,g.query),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>T(null)},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-red",onClick:A},c.createElement(qt,{size:14})," Igen, törlöm")))),N&&c.createElement("div",{onClick:()=>D(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:V=>V.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Találat törlése"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:6},onClick:()=>D(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13,lineHeight:1.5}},"Biztosan törlöd ezt a talált ajánlatot:"," ",c.createElement("strong",null,N.title||N.query||"Ajánlat"),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>D(null)},"Mégse"),c.createElement("button",{type:"button",className:"btn btn-red",onClick:L},c.createElement(qt,{size:14})," Igen, törlöm")))))}const _E=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő","Gép","Egyéb"],KL=["Processzor","Videókártya","Alaplap","Memória","Háttértár","Tápegység","Ház","Hűtő"],GL=["Csere másikra","Javítva","Visszatérítve / jóváírva","Folyamatban","Elutasítva"];function Du(t){const e=new Date(Number(t||Date.now())),n=e.getMonth()+1,r=e.getFullYear()+Math.floor(n/12),i=(n%12+12)%12,s=new Date(r,i+1,0).getDate(),o=Math.min(e.getDate(),s),l=new Date(e.getTime());return l.setFullYear(r,i,o),l.getTime()}function $h(t){return t?new Date(Number(t)).toLocaleDateString("hu-HU"):"-"}function go(t){const e=new Date(Number(t||Date.now())),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${i}`}function Hh(){return KL.map(t=>({name:"",category:t,serialNumber:""}))}async function Wh(t,e="warranty"){const n=Array.from(t||[]);return n.length===0?[]:Promise.all(n.map(async(r,i)=>{const s=r.name.replace(/[^a-zA-Z0-9._-]/g,"_"),o=`warranty_invoices/${e}_${Date.now()}_${i}_${s}`,l=Fd(zd,o);await Ld(l,r);const u=await Vd(l);return{id:`${Date.now()}-${i}-${Math.random().toString(36).slice(2,7)}`,label:r.name,url:u}}))}function Ri(...t){const e=[],n=new Set;return t.forEach(r=>{(Array.isArray(r)?r:[]).forEach((i,s)=>{!(i!=null&&i.url)||n.has(i.url)||(n.add(i.url),e.push({id:i.id||`inv-${s}-${n.size}`,label:i.label||i.name||"Számla",url:i.url}))})}),e}function QL({parts:t=[],builds:e=[],warrantyItems:n=[],warrantyComplaints:r=[],userEmail:i}){const[s,o]=M.useState("active"),[l,u]=M.useState(""),[d,f]=M.useState(!1),[p,g]=M.useState(null),[T,N]=M.useState(""),[D,F]=M.useState(""),[k,_]=M.useState("Videókártya"),[A,L]=M.useState(""),[V,B]=M.useState(go(Date.now())),[E,v]=M.useState(""),[w,S]=M.useState([]),[C,P]=M.useState([]),[I,Ie]=M.useState(!1),[le,Te]=M.useState(""),[$e,K]=M.useState(!1),[te,oe]=M.useState(null),[ve,ue]=M.useState(""),[ce,de]=M.useState(""),[ut,nt]=M.useState(go(Date.now())),[Ct,Vn]=M.useState(""),[Tn,Dt]=M.useState(Hh()),[Xt,dn]=M.useState([]),[yt,zt]=M.useState([]),[Yt,In]=M.useState(!1),[Sn,xt]=M.useState(""),[hn,ct]=M.useState(!1),[me,U]=M.useState(null),[ie,re]=M.useState(""),[R,H]=M.useState(""),[X,Ee]=M.useState(""),[ze,Re]=M.useState(""),[dt,Oe]=M.useState("Csere másikra"),[nr,De]=M.useState(""),[Fn,rr]=M.useState("0"),[Ei,pr]=M.useState(!0),[zn,Kr]=M.useState(""),[ir,Nr]=M.useState(""),[wi,fn]=M.useState(null),[_s,Gr]=M.useState(!1),[Es,kn]=M.useState(""),[Rr,it]=M.useState(null),[Qr,Un]=M.useState(null),Bn=Date.now(),gr=M.useMemo(()=>{const b=new Map,W=[];(n||[]).forEach(G=>{G.sourceKey?b.set(G.sourceKey,G):G.hidden||W.push(G)});const Y=new Map((t||[]).map(G=>[G.id,G])),Se=(e||[]).filter(G=>G.status==="Eladva"),Ve=[];return Se.forEach(G=>{const He=G.soldAt||G.createdAt||Bn,ht=`build-${G.id}`,se=b.get(ht),It=(se==null?void 0:se.soldAt)||He,yr=Du(It),Zr=Array.isArray(G.partIds)?G.partIds:Array.isArray(G.parts)?G.parts.map(Ne=>typeof Ne=="string"?Ne:Ne==null?void 0:Ne.id).filter(Boolean):[],Jt=Array.isArray(G.partsSummary)?G.partsSummary:[],Bt=new Map(Jt.map(Ne=>[Ne.id,Ne])),Ye=Array.from(new Set([...Zr,...Jt.map(Ne=>Ne.id).filter(Boolean)]));let Le=[];Array.isArray(se==null?void 0:se.components)&&se.components.length>0?Le=se.components.map((Ne,Ke)=>({id:Ne.id||`${G.id}-ov-${Ke}`,name:Ne.name||"Alkatrész",category:Ne.category||"",serialNumber:Ne.serialNumber||"-",invoiceFileUrl:Ne.invoiceFileUrl||null})):Ye.forEach(Ne=>{const Ke=Y.get(Ne),vt=Bt.get(Ne),As=(Ke==null?void 0:Ke.name)||(vt==null?void 0:vt.name),Bd=(Ke==null?void 0:Ke.serialNumber)||(vt==null?void 0:vt.serialNumber)||"-",jd=(Ke==null?void 0:Ke.category)||(vt==null?void 0:vt.category)||"",bs=(Ke==null?void 0:Ke.invoiceFileUrl)||(vt==null?void 0:vt.invoiceFileUrl)||null;As&&Le.push({id:Ne,name:As,category:jd,serialNumber:Bd,invoiceFileUrl:bs})});const Is=[];Ye.forEach(Ne=>{const Ke=Y.get(Ne),vt=Bt.get(Ne),As=(Ke==null?void 0:Ke.invoiceFileUrl)||(vt==null?void 0:vt.invoiceFileUrl);As&&Is.push({id:Ne,label:(Ke==null?void 0:Ke.name)||(vt==null?void 0:vt.name)||"Alkatrész számla",url:As})});const We=Le.filter(Ne=>Ne.invoiceFileUrl).map((Ne,Ke)=>({id:Ne.id||`comp-inv-${Ke}`,label:Ne.name||"Alkatrész számla",url:Ne.invoiceFileUrl})),co=Array.isArray(se==null?void 0:se.invoices)?se.invoices:[],Ss=Ri(co,Is,We),ks=Le.length>0?Le.map(Ne=>`${Ne.name} (${Ne.serialNumber})`).join(" • "):"Gép csomag";Ve.push({id:(se==null?void 0:se.id)||ht,sourceKey:ht,isAutoBuild:!0,isManualPc:!1,name:(se==null?void 0:se.name)||`[Gép] ${G.name||"Névtelen gép"}`,buyerName:(se==null?void 0:se.buyerName)||G.buyerName||"",category:(se==null?void 0:se.category)||"Gép",serialNumber:(se==null?void 0:se.serialNumber)||ks,componentRows:Le,soldAt:It,expiresAt:yr,note:(se==null?void 0:se.note)||"",invoices:Ss,rawOverrideDoc:se||null})}),W.forEach(G=>{const He=G.soldAt||G.createdAt||Bn,ht=G.type==="pc_build"||Array.isArray(G.components),se=ht?(G.components||[]).map((Ye,Le)=>({id:Ye.id||`${G.id}-comp-${Le}`,name:Ye.name||"Alkatrész",category:Ye.category||"",serialNumber:Ye.serialNumber||"-",invoiceFileUrl:Ye.invoiceFileUrl||null})):[],It=Array.isArray(G.invoices)?G.invoices:[],yr=G.invoiceFileUrl?[{id:G.id,label:G.name,url:G.invoiceFileUrl}]:[],Zr=se.filter(Ye=>Ye.invoiceFileUrl).map((Ye,Le)=>({id:Ye.id||`m-comp-${Le}`,label:Ye.name,url:Ye.invoiceFileUrl})),Jt=Ri(It,yr,Zr),Bt=se.length>0?se.map(Ye=>`${Ye.name} (${Ye.serialNumber})`).join(" • "):G.serialNumber||"-";Ve.push({id:G.id,sourceKey:null,isAutoBuild:!1,isManualPc:ht,name:G.name||"Névtelen tétel",buyerName:G.buyerName||"",category:G.category||(ht?"Gép":"Egyéb"),serialNumber:Bt,componentRows:se,soldAt:He,expiresAt:Du(He),note:G.note||"",invoices:Jt,rawOverrideDoc:G})}),Ve.map(G=>{const He=Bn>G.expiresAt,ht=Math.ceil((G.expiresAt-Bn)/(1e3*60*60*24));return{...G,isExpired:He,daysLeft:ht}}).sort((G,He)=>G.expiresAt-He.expiresAt)},[t,e,n,Bn]),Ti=M.useMemo(()=>{const b=new Map;return gr.forEach(W=>{if((W.componentRows||[]).forEach((Y,Se)=>{const Ve=Y.serialNumber&&Y.serialNumber!=="Nincs"&&Y.serialNumber!=="Úton"?Y.serialNumber:"-",G=`entry:${W.id}:comp:${Se}`;b.has(G)||b.set(G,{key:G,entry:W,compIndex:Se,name:Y.name,serialNumber:Ve,label:`${Y.category?`[${Y.category}] `:""}${Y.name} — SN: ${Ve} (${W.name})`})}),!W.isAutoBuild&&!W.isManualPc&&W.name){const Y=W.serialNumber&&W.serialNumber!=="-"?W.serialNumber:"-",Se=`entry:${W.id}:single`;b.has(Se)||b.set(Se,{key:Se,entry:W,compIndex:null,name:W.name,serialNumber:Y,label:`${W.category?`[${W.category}] `:""}${W.name} — SN: ${Y}`})}}),(t||[]).forEach((W,Y)=>{if(!(W!=null&&W.name))return;const Se=W.serialNumber&&W.serialNumber!=="Nincs"&&W.serialNumber!=="Úton"?W.serialNumber:"-",Ve=`part:${W.id||Y}`;b.has(Ve)||b.set(Ve,{key:Ve,entry:null,compIndex:null,name:W.name,serialNumber:Se,label:`${W.category?`[${W.category}] `:""}${W.name} — SN: ${Se}${W.status?` (${W.status})`:""}`})}),Array.from(b.values())},[t,gr]),Pr=gr.filter(b=>!b.isExpired).length,pa=gr.filter(b=>b.isExpired).length,ws=M.useMemo(()=>{const b=l.trim().toLowerCase();return gr.filter(W=>s==="active"?!W.isExpired:s==="expired"?W.isExpired:!0).filter(W=>b?(W.name||"").toLowerCase().includes(b)||(W.buyerName||"").toLowerCase().includes(b)||(W.serialNumber||"").toLowerCase().includes(b)||(W.category||"").toLowerCase().includes(b)||(W.note||"").toLowerCase().includes(b):!0)},[gr,s,l]),Xr=M.useMemo(()=>(r||[]).reduce((b,W)=>b+Number(W.cost||0),0),[r]);function jn(){f(!1),K(!1),ct(!1)}function $n(){g(null),N(""),F(""),_("Videókártya"),L(""),B(go(Date.now())),v(""),S([]),P([]),Te("")}function x(){oe(null),ue(""),de(""),nt(go(Date.now())),Vn(""),Dt(Hh()),dn([]),zt([]),xt("")}function J(){$n(),jn(),f(!0)}function _e(){x(),jn(),K(!0)}function Ae(b){var W,Y,Se;if(jn(),b.isManualPc&&((W=b.rawOverrideDoc)!=null&&W.id)){oe(b.rawOverrideDoc.id);const Ve=(b.name||"").replace(/^\[Gép\]\s*/i,"");ue(Ve),de(b.buyerName||""),nt(go(b.soldAt||Date.now())),Vn(b.note||"");const G=(b.componentRows||[]).map(He=>({id:He.id,name:He.name||"",category:He.category||"",serialNumber:He.serialNumber==="-"?"":He.serialNumber||"",invoiceFileUrl:He.invoiceFileUrl||null}));Dt(G.length>0?G:Hh()),dn(Ri((Y=b.rawOverrideDoc)==null?void 0:Y.invoices,b.invoices)),zt([]),xt(""),K(!0),window.scrollTo({top:0,behavior:"smooth"});return}g(b),N(b.name||""),F(b.buyerName||""),_(_E.includes(b.category)?b.category:"Egyéb"),L(b.serialNumber==="-"?"":b.serialNumber||""),B(go(b.soldAt||Date.now())),v(b.note||""),S(Ri((Se=b.rawOverrideDoc)==null?void 0:Se.invoices,b.invoices)),P([]),Te(""),f(!0),window.scrollTo({top:0,behavior:"smooth"})}function Ut(b=null){if(kn(""),U(b||null),Array.isArray(b==null?void 0:b.componentRows)&&b.componentRows.length>0){re(""),H("0");const Y=b.componentRows[0];Ee(Y.name||""),Re(Y.serialNumber||"-")}else if(b&&!b.isAutoBuild&&!b.isManualPc)re(""),H(""),Ee(b.name||""),Re(b.serialNumber||"-");else{const Y=Ti[0];re(Y?Y.key:""),H(""),Ee(Y?Y.name:""),Re(Y?Y.serialNumber:"-")}Oe("Csere másikra"),De(""),rr("0"),pr(!0),Kr(""),Nr(""),fn(null),jn(),ct(!0),window.scrollTo({top:0,behavior:"smooth"})}function An(b){var Se;H(b);const W=Number(b),Y=(Se=me==null?void 0:me.componentRows)==null?void 0:Se[W];Y&&(Ee(Y.name||""),Re(Y.serialNumber||"-"))}function Hn(b){if(re(b),!b)return;const W=Ti.find(Y=>Y.key===b);W&&(W.entry&&U(W.entry),Ee(W.name),Re(W.serialNumber||"-"))}function Tt(b,W,Y){Dt(Se=>Se.map((Ve,G)=>G===b?{...Ve,[W]:Y}:Ve))}function uo(){Dt(b=>[...b,{name:"",category:"",serialNumber:""}])}function Yr(b){Dt(W=>{const Y=W.filter((Se,Ve)=>Ve!==b);return Y.length>0?Y:[{name:"",category:"",serialNumber:""}]})}async function mn(b){var Ve;b.preventDefault(),xt("");const W=Tn.filter(G=>G.name.trim()!=="").map(G=>({name:G.name.trim(),category:G.category.trim(),serialNumber:G.serialNumber.trim()||"-",invoiceFileUrl:G.invoiceFileUrl||null}));if(!ve.trim()){xt("Add meg a gép nevét.");return}if(W.length===0){xt("Töltsd ki legalább egy alkatrész nevét a géphez.");return}const Y=new Date(`${ut}T12:00:00`).getTime(),Se=Number.isNaN(Y)?Date.now():Y;In(!0);try{const G=await Wh(yt,"pc_warranty"),He=Ri(Xt,G),se={type:"pc_build",name:ve.trim().startsWith("[Gép]")?ve.trim():`[Gép] ${ve.trim()}`,buyerName:ce.trim(),category:"Gép",components:W,serialNumber:W.map(It=>`${It.name} (${It.serialNumber})`).join(" • "),invoices:He,invoiceFileUrl:((Ve=He[0])==null?void 0:Ve.url)||null,soldAt:Se,expiresAt:Du(Se),note:Ct.trim(),hidden:!1};te?await Lt(Ue(ge,"warranty_items",te),{...se,updatedAt:Date.now()}):await ts(on(ge,"warranty_items"),{...se,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()}),x(),K(!1)}catch(G){console.error("Teljes gép garancia mentési hiba:",G),xt(`Hiba mentés közben: ${(G==null?void 0:G.message)||"Ismeretlen hiba"}`)}finally{In(!1)}}async function ga(b){var Se,Ve,G,He;if(b.preventDefault(),Te(""),!T.trim()){Te("Add meg az alkatrész / tétel nevét.");return}const W=new Date(`${V}T12:00:00`).getTime(),Y=Number.isNaN(W)?Date.now():W;Ie(!0);try{const ht=await Wh(C,"item_warranty"),se=Ri(w,ht),It={name:T.trim(),buyerName:D.trim(),category:k,serialNumber:A.trim()||"-",invoices:se,invoiceFileUrl:((Se=se[0])==null?void 0:Se.url)||null,soldAt:Y,expiresAt:Du(Y),note:E.trim(),hidden:!1};if(p!=null&&p.isAutoBuild&&(p!=null&&p.sourceKey)){const yr=((Ve=p.rawOverrideDoc)==null?void 0:Ve.id)||p.sourceKey;await fm(Ue(ge,"warranty_items",yr),{...It,sourceKey:p.sourceKey,createdByEmail:((G=p.rawOverrideDoc)==null?void 0:G.createdByEmail)||(i||"").toLowerCase(),updatedAt:Date.now()},{merge:!0})}else(He=p==null?void 0:p.rawOverrideDoc)!=null&&He.id?await Lt(Ue(ge,"warranty_items",p.rawOverrideDoc.id),{...It,updatedAt:Date.now()}):await ts(on(ge,"warranty_items"),{...It,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()});$n(),f(!1)}catch(ht){console.error("Garancia mentési hiba:",ht),Te(`Hiba mentés közben: ${(ht==null?void 0:ht.message)||"Ismeretlen hiba"}`)}finally{Ie(!1)}}async function Ts(){var W;if(!Rr||Rr.isAutoBuild)return;const b=Rr;it(null),(W=b.rawOverrideDoc)!=null&&W.id&&await Js(Ue(ge,"warranty_items",b.rawOverrideDoc.id)),((p==null?void 0:p.id)===b.id||te===b.id)&&($n(),x(),jn())}async function Jr(b){var Se,Ve,G,He,ht;if(b.preventDefault(),kn(""),!X.trim()){kn("Válaszd ki a legördülő menüből a garanciáztatott alkatrészt.");return}const W=Fn.trim()===""?0:Number(Fn);if(Number.isNaN(W)||W<0){kn("A költség nem lehet negatív.");return}const Y=dt==="Csere másikra"&&Ei;if(Y&&!zn.trim()){kn("Add meg az új cserealkatrész nevét.");return}Gr(!0);try{let se=null;if(wi&&(se=((Se=(await Wh([wi],"replacement_invoice"))[0])==null?void 0:Se.url)||null),Y&&me){const It=zn.trim(),yr=ir.trim()||"-";if(me.componentRows&&me.componentRows.length>0){const Zr=R!==""&&!Number.isNaN(Number(R))?Number(R):me.componentRows.findIndex(Le=>(Le.name||"").toLowerCase()===X.trim().toLowerCase()),Jt=me.componentRows.map((Le,Is)=>Is===Zr?{id:Le.id,name:It,category:Le.category||"",serialNumber:yr,invoiceFileUrl:se||Le.invoiceFileUrl||null}:{id:Le.id,name:Le.name,category:Le.category||"",serialNumber:Le.serialNumber||"-",invoiceFileUrl:Le.invoiceFileUrl||null}),Bt=Jt.map(Le=>`${Le.name} (${Le.serialNumber})`).join(" • "),Ye=Ri(me.invoices,se?[{id:`rep-${Date.now()}`,label:It,url:se}]:[]);if(me.isAutoBuild&&me.sourceKey){const Le=((Ve=me.rawOverrideDoc)==null?void 0:Ve.id)||me.sourceKey;await fm(Ue(ge,"warranty_items",Le),{sourceKey:me.sourceKey,name:me.name,buyerName:me.buyerName||"",category:me.category||"Gép",components:Jt,serialNumber:Bt,invoices:Ye,soldAt:me.soldAt,expiresAt:me.expiresAt,note:me.note||"",hidden:!1,createdByEmail:((G=me.rawOverrideDoc)==null?void 0:G.createdByEmail)||(i||"").toLowerCase(),updatedAt:Date.now()},{merge:!0})}else(He=me.rawOverrideDoc)!=null&&He.id&&await Lt(Ue(ge,"warranty_items",me.rawOverrideDoc.id),{components:Jt,serialNumber:Bt,invoices:Ye,updatedAt:Date.now()})}else if(!me.isAutoBuild&&((ht=me.rawOverrideDoc)!=null&&ht.id)){const Zr=Ri(me.invoices,se?[{id:`rep-${Date.now()}`,label:It,url:se}]:[]);await Lt(Ue(ge,"warranty_items",me.rawOverrideDoc.id),{name:It,serialNumber:yr,invoices:Zr,...se?{invoiceFileUrl:se}:{},updatedAt:Date.now()})}}await ts(on(ge,"warranty_complaints"),{partName:X.trim(),serialNumber:ze.trim()||"-",replacementName:Y?zn.trim():"",replacementSn:Y?ir.trim()||"-":"",replacementInvoiceUrl:se,resolutionType:dt,solutionDetail:nr.trim(),cost:W,createdByEmail:(i||"").toLowerCase(),createdAt:Date.now()}),re(""),H(""),U(null),Ee(""),Re(""),Oe("Csere másikra"),De(""),rr("0"),Kr(""),Nr(""),fn(null),ct(!1)}catch(se){console.error("Panasz mentési hiba:",se),kn(`Hiba mentés közben: ${(se==null?void 0:se.message)||"Ismeretlen hiba"}`)}finally{Gr(!1)}}async function ya(){if(!Qr)return;const b=Qr;Un(null),await Js(Ue(ge,"warranty_complaints",b.id))}const Ud=Array.isArray(me==null?void 0:me.componentRows)&&me.componentRows.length>0;return c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("div",null,c.createElement("h2",{style:{margin:0}},"Garancia nyilvántartás (1 hónap)"),c.createElement("div",{className:"muted",style:{fontSize:12}},"Az eladás napjától számított 1 hónap garancia • Az eladott gépek automatikusan megjelennek")),c.createElement("div",{className:"row"},c.createElement("button",{className:"btn btn-orange",onClick:()=>hn?ct(!1):Ut()},hn?c.createElement(Ge,{size:16}):c.createElement(q_,{size:16}),hn?"Bezárás":"Panasz felvétele"),c.createElement("button",{className:"btn btn-ghost",onClick:()=>{$e?(x(),K(!1)):_e()}},$e?c.createElement(Ge,{size:16}):c.createElement(yO,{size:16}),$e?"Bezárás":"Teljes gép garanciába"),c.createElement("button",{className:"btn btn-green",onClick:()=>{d?($n(),f(!1)):J()}},d?c.createElement(Ge,{size:16}):c.createElement(dr,{size:16}),d?"Bezárás":"Új tétel"))),$e&&c.createElement("form",{className:"card",onSubmit:mn,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},te?"Teljes gép garanciájának szerkesztése":"Teljes gép felvétele garanciába (alkatrészenként)"),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Az alkatrészek alapból ki vannak generálva — töltsd ki a típusokat és SN-eket, a vevő nevét, és töltsd fel a számlákat egyben."),c.createElement("div",{className:"grid-2",style:{marginBottom:12}},c.createElement("input",{placeholder:"Gép neve (pl. Budget GAMING PC)",value:ve,onChange:b=>ue(b.target.value),required:!0}),c.createElement("input",{placeholder:"Vevő neve (pl. Kovács János)",value:ce,onChange:b=>de(b.target.value)}),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladás dátuma (+1 hónap garancia)"),c.createElement("input",{type:"date",value:ut,onChange:b=>nt(b.target.value),required:!0})),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Megjegyzés a géphez (opcionális)"),c.createElement("input",{placeholder:"Megjegyzés...",value:Ct,onChange:b=>Vn(b.target.value)}))),c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)",marginBottom:12}},c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("strong",null,"Alkatrészek és sorozatszámok (SN)"),c.createElement("button",{type:"button",className:"btn btn-ghost",style:{padding:"4px 9px",fontSize:12},onClick:uo},c.createElement(dr,{size:13})," Új alkatrész sor")),Tn.map((b,W)=>c.createElement("div",{key:`pc-comp-${W}`,style:{display:"grid",gridTemplateColumns:"0.85fr 1.25fr 1.2fr auto",gap:8,marginBottom:8,alignItems:"center"}},c.createElement("input",{placeholder:"Kategória",value:b.category,onChange:Y=>Tt(W,"category",Y.target.value)}),c.createElement("input",{placeholder:`${b.category||"Alkatrész"} típusa (pl. RTX 3060 8 GB)`,value:b.name,onChange:Y=>Tt(W,"name",Y.target.value)}),c.createElement("input",{placeholder:"Sorozatszám (SN)",value:b.serialNumber,onChange:Y=>Tt(W,"serialNumber",Y.target.value)}),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"6px 8px"},onClick:()=>Yr(W),title:"Sor törlése"},c.createElement(qt,{size:13}))))),c.createElement("div",{style:{padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:6}},"Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)"),c.createElement("input",{type:"file",multiple:!0,accept:"application/pdf,image/*",onChange:b=>zt(Array.from(b.target.files||[]))}),yt.length>0&&c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:6}},"Kiválasztva (",yt.length,"): ",yt.map(b=>b.name).join(", ")),Xt.length>0&&c.createElement("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}},Xt.map(b=>c.createElement("span",{key:b.id,className:"badge badge-indigo",style:{display:"inline-flex",alignItems:"center",gap:6}},b.label,c.createElement("button",{type:"button",onClick:()=>dn(W=>W.filter(Y=>Y.id!==b.id)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:0,display:"inline-flex"},title:"Számla eltávolítása"},c.createElement(Ge,{size:12})))))),Sn&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Sn),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:Yt},Yt?"Mentés...":te?"Módosítások mentése":"Gép mentése garanciába"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{x(),K(!1)}},"Mégse"))),hn&&c.createElement("form",{className:"card",onSubmit:Jr,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},"Garanciális panasz felvétele",me?` — ${me.name}`:""),c.createElement("div",{className:"muted",style:{marginBottom:10}},"Válaszd ki a legördülő menüből a cserélt / garanciáztatott alkatrészt — az SN automatikusan beállítódik."),Ud?c.createElement("div",{style:{marginBottom:10}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Garanciáztatott alkatrész kiválasztása a gépből"),c.createElement("select",{value:R,onChange:b=>An(b.target.value),required:!0},me.componentRows.map((b,W)=>c.createElement("option",{key:`${b.id||W}-${W}`,value:String(W)},b.category?`[${b.category}] `:"",b.name," — SN: ",b.serialNumber||"-")))):c.createElement("div",{style:{marginBottom:10}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Garanciáztatott alkatrész kiválasztása"),c.createElement("select",{value:ie,onChange:b=>Hn(b.target.value),required:!0},Ti.length===0&&c.createElement("option",{value:""},"-- Nincs elérhető alkatrész --"),Ti.map(b=>c.createElement("option",{key:b.key,value:b.key},b.label)))),c.createElement("div",{className:"row",style:{padding:"8px 12px",borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.03)",marginBottom:10,fontSize:13}},c.createElement("div",null,c.createElement("span",{className:"muted"},"Kiválasztott alkatrész: "),c.createElement("strong",null,X||"-")),c.createElement("div",null,c.createElement("span",{className:"muted"},"Automatikus SN: "),c.createElement("strong",null,ze||"-"))),c.createElement("div",{className:"grid-2"},c.createElement("select",{value:dt,onChange:b=>Oe(b.target.value)},GL.map(b=>c.createElement("option",{key:b,value:b},b))),c.createElement("input",{type:"number",min:"0",placeholder:"Költség neked (Ft, alapból 0)",value:Fn,onChange:b=>rr(b.target.value)})),c.createElement("div",{style:{marginTop:10}},c.createElement("input",{placeholder:"Megoldás részletei (pl. cserélve másik példányra, postaköltség, stb.)",value:nr,onChange:b=>De(b.target.value)})),dt==="Csere másikra"&&c.createElement("div",{style:{marginTop:12,padding:12,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.025)"}},c.createElement("label",{style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:10}},c.createElement("input",{type:"checkbox",style:{width:"auto"},checked:Ei,onChange:b=>pr(b.target.checked)}),c.createElement("span",null,"Régi alkatrész cseréje az újra a garancia táblában")),Ei&&c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Új alkatrész neve (pl. Ryzen 5 5600)",value:zn,onChange:b=>Kr(b.target.value),required:!0}),c.createElement("input",{placeholder:"Új alkatrész SN száma",value:ir,onChange:b=>Nr(b.target.value)}),c.createElement("div",{style:{gridColumn:"1 / -1"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Új alkatrész számlája (opcionális — PDF vagy kép)"),c.createElement("input",{type:"file",accept:"application/pdf,image/*",onChange:b=>{var W;return fn(((W=b.target.files)==null?void 0:W[0])||null)}})))),Es&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},Es),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:_s},_s?"Mentés...":"Panasz mentése"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>ct(!1)},"Mégse"))),d&&c.createElement("form",{className:"card",onSubmit:ga,style:{marginBottom:16}},c.createElement("h3",{style:{marginTop:0}},p?`Garancia szerkesztése: ${p.name}`:"Új alkatrész / tétel felvétele"),c.createElement("div",{className:"grid-2"},c.createElement("input",{placeholder:"Alkatrész / tétel neve (pl. RX 6700 XT)",value:T,onChange:b=>N(b.target.value),required:!0}),c.createElement("input",{placeholder:"Vevő neve (opcionális)",value:D,onChange:b=>F(b.target.value)}),c.createElement("select",{value:k,onChange:b=>_(b.target.value)},_E.map(b=>c.createElement("option",{key:b,value:b},b))),c.createElement("input",{placeholder:"Sorozatszám (SN)",value:A,onChange:b=>L(b.target.value)}),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Eladás dátuma (+1 hónap garancia)"),c.createElement("input",{type:"date",value:V,onChange:b=>B(b.target.value),required:!0})),c.createElement("div",null,c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:4}},"Megjegyzés (opcionális)"),c.createElement("input",{placeholder:"Megjegyzés...",value:E,onChange:b=>v(b.target.value)}))),c.createElement("div",{style:{marginTop:12,padding:10,borderRadius:8,border:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"}},c.createElement("div",{className:"muted",style:{fontSize:12,marginBottom:6}},"Számlák feltöltése (több fájl is kiválasztható egyszerre — PDF vagy kép)"),c.createElement("input",{type:"file",multiple:!0,accept:"application/pdf,image/*",onChange:b=>P(Array.from(b.target.files||[]))}),C.length>0&&c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:6}},"Kiválasztva (",C.length,"): ",C.map(b=>b.name).join(", ")),w.length>0&&c.createElement("div",{style:{marginTop:8,display:"flex",flexWrap:"wrap",gap:6}},w.map(b=>c.createElement("span",{key:b.id,className:"badge badge-indigo",style:{display:"inline-flex",alignItems:"center",gap:6}},b.label,c.createElement("button",{type:"button",onClick:()=>S(W=>W.filter(Y=>Y.id!==b.id)),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:0,display:"inline-flex"},title:"Számla eltávolítása"},c.createElement(Ge,{size:12})))))),le&&c.createElement("div",{className:"red",style:{marginTop:8,fontSize:13}},le),c.createElement("div",{className:"row",style:{marginTop:12}},c.createElement("button",{className:"btn btn-green",type:"submit",disabled:I},I?"Mentés...":p?"Módosítások mentése":"Mentés"),c.createElement("button",{type:"button",className:"btn btn-ghost",onClick:()=>{$n(),f(!1)}},"Mégse"))),c.createElement("div",{className:"row",style:{marginBottom:14}},c.createElement("div",{className:"row"},c.createElement("button",{className:`btn ${s==="active"?"":"btn-ghost"}`,onClick:()=>o("active")},"Aktív (",Pr,")"),c.createElement("button",{className:`btn ${s==="expired"?"":"btn-ghost"}`,onClick:()=>o("expired")},"Lejárt (",pa,")"),c.createElement("button",{className:`btn ${s==="all"?"":"btn-ghost"}`,onClick:()=>o("all")},"Összes (",gr.length,")")),c.createElement("div",{style:{flex:1,minWidth:200}},c.createElement("input",{placeholder:"Keresés név, vevő, SN vagy kategória alapján...",value:l,onChange:b=>u(b.target.value)}))),ws.length===0?c.createElement("div",{className:"card"},c.createElement("div",{className:"muted"},"Nincs megjeleníthető garanciális tétel ebben a nézetben.")):c.createElement("div",{className:"grid-2"},ws.map(b=>{var W;return c.createElement("div",{className:"card",key:b.id,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:12,borderRadius:12}},c.createElement("div",null,c.createElement("div",{className:"row",style:{marginBottom:8}},c.createElement("div",{className:"row",style:{gap:8}},c.createElement(N1,{size:18,color:b.isExpired?"#ef4444":"#22c55e"}),c.createElement("strong",{style:{fontSize:15}},b.name)),c.createElement("div",{className:"row"},b.isAutoBuild&&c.createElement("span",{className:"badge badge-blue"},"Eladott gép"),b.isManualPc&&c.createElement("span",{className:"badge badge-purple"},"Teljes gép"),b.category&&c.createElement("span",{className:"badge badge-indigo"},b.category),c.createElement("span",{className:`badge ${b.isExpired?"badge-red":"badge-green"}`},b.isExpired?"Lejárt":b.daysLeft===0?"Ma jár le":`${b.daysLeft} nap hátra`))),b.buyerName&&c.createElement("div",{className:"muted",style:{fontSize:13,marginBottom:8,display:"inline-flex",alignItems:"center",gap:6}},c.createElement(EO,{size:13})," Vevő: ",c.createElement("strong",null,b.buyerName)),c.createElement("div",{className:"row",style:{padding:"8px 10px",borderRadius:8,background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border)",marginBottom:10,fontSize:13}},c.createElement("span",{className:"muted",style:{display:"inline-flex",alignItems:"center",gap:5}},c.createElement(hO,{size:13})," Eladva: ",c.createElement("strong",null,$h(b.soldAt))),c.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:5},className:b.isExpired?"red":"green"},b.isExpired&&c.createElement(_O,{size:13}),"Lejár: ",c.createElement("strong",null,$h(b.expiresAt)))),b.componentRows&&b.componentRows.length>0?c.createElement("div",{style:{border:"1px solid var(--border)",borderRadius:8,padding:"4px 10px",background:"rgba(255, 255, 255, 0.015)"}},b.componentRows.map((Y,Se)=>c.createElement("div",{key:`${Y.id||Se}-${Se}`,className:"row",style:{padding:"6px 0",borderBottom:Se<b.componentRows.length-1?"1px solid rgba(255,255,255,0.06)":"none",gap:8}},c.createElement("div",{style:{minWidth:0}},c.createElement("div",{style:{fontSize:13,fontWeight:500}},Y.name),Y.category&&c.createElement("div",{className:"muted",style:{fontSize:11}},Y.category)),c.createElement("span",{className:"muted",style:{fontSize:12,textAlign:"right",wordBreak:"break-all"}},"SN: ",Y.serialNumber||"-")))):c.createElement("div",{className:"muted",style:{fontSize:13}},"SN: ",c.createElement("strong",null,b.serialNumber)),b.note&&c.createElement("div",{className:"muted",style:{marginTop:8,fontSize:12}},b.note),((W=b.invoices)==null?void 0:W.length)>0&&c.createElement("div",{style:{marginTop:10,paddingTop:8,borderTop:"1px solid rgba(255,255,255,0.06)",display:"flex",flexDirection:"column",gap:4}},b.invoices.map(Y=>c.createElement("a",{key:`${b.id}-${Y.id}`,href:Y.url,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:5}},c.createElement(Ml,{size:13})," Számla: ",Y.label)))),c.createElement("div",{className:"row",style:{paddingTop:6,borderTop:"1px solid rgba(255,255,255,0.06)"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>Ae(b)},c.createElement(mg,{size:14})," Szerkesztés"),c.createElement("button",{className:"btn btn-ghost",onClick:()=>Ut(b)},c.createElement(q_,{size:14})," Panasz"),!b.isAutoBuild&&c.createElement("button",{className:"btn btn-red",onClick:()=>it(b),title:"Törlés"},c.createElement(qt,{size:14}))))})),c.createElement("div",{className:"card",style:{marginTop:18,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Garanciális panaszok (",r.length,")"),c.createElement("span",{className:"muted",style:{fontSize:13}},"Összes költség: ",c.createElement("strong",{className:"red"},Xr.toLocaleString("hu-HU")," Ft"))),r.length===0?c.createElement("div",{className:"muted"},"Még nincs rögzített garanciális panasz."):r.map(b=>c.createElement("div",{key:b.id,style:{padding:"8px 0",borderBottom:"1px solid var(--border)"}},c.createElement("div",{className:"row"},c.createElement("div",null,c.createElement("strong",null,b.partName),b.serialNumber&&b.serialNumber!=="-"&&c.createElement("span",{className:"muted",style:{marginLeft:8,fontSize:12}},"SN: ",b.serialNumber),b.replacementName&&c.createElement("div",{className:"green",style:{fontSize:12,marginTop:2}},"→ Új csere: ",c.createElement("strong",null,b.replacementName),b.replacementSn&&b.replacementSn!=="-"?` (SN: ${b.replacementSn})`:""),c.createElement("div",{className:"muted",style:{fontSize:12,marginTop:2}},"Megoldás: ",c.createElement("strong",null,b.resolutionType||"Egyéb"),b.solutionDetail?` — ${b.solutionDetail}`:"",b.createdAt?` • ${$h(b.createdAt)}`:""),b.replacementInvoiceUrl&&c.createElement("div",{style:{marginTop:4}},c.createElement("a",{href:b.replacementInvoiceUrl,target:"_blank",rel:"noreferrer",style:{color:"#fb923c",fontSize:12,display:"inline-flex",alignItems:"center",gap:4}},c.createElement(Ml,{size:13})," Cserealkatrész számlája"))),c.createElement("div",{className:"row"},c.createElement("strong",{className:Number(b.cost||0)>0?"red":"green"},Number(b.cost||0).toLocaleString("hu-HU")," Ft"),c.createElement("button",{type:"button",className:"btn btn-red",style:{padding:"4px 8px"},onClick:()=>Un(b),title:"Panasz törlése"},c.createElement(qt,{size:13}))))))),Rr&&c.createElement("div",{onClick:()=>it(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:b=>b.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Garancia tétel törlése"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>it(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13}},"Biztosan törlöd a garancia listából: ",c.createElement("strong",null,Rr.name),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>it(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:Ts},c.createElement(qt,{size:14})," Törlés")))),Qr&&c.createElement("div",{onClick:()=>Un(null),style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,zIndex:1e3}},c.createElement("div",{className:"card",onClick:b=>b.stopPropagation(),style:{width:"100%",maxWidth:420,margin:0,borderRadius:12}},c.createElement("div",{className:"row",style:{marginBottom:10}},c.createElement("h3",{style:{margin:0}},"Panasz törlése"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>Un(null)},c.createElement(Ge,{size:16}))),c.createElement("div",{style:{fontSize:13}},"Biztosan törlöd ezt a panaszt: ",c.createElement("strong",null,Qr.partName),"?"),c.createElement("div",{className:"row",style:{marginTop:14,justifyContent:"flex-end"}},c.createElement("button",{className:"btn btn-ghost",onClick:()=>Un(null)},"Mégse"),c.createElement("button",{className:"btn btn-red",onClick:ya},c.createElement(qt,{size:14})," Törlés")))))}const EE=["fabianbal500@gmail.com","beastmaster0626@gmail.com"],qh="BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w";function XL(){const[t,e]=M.useState([]),[n,r]=M.useState(null),[i,s]=M.useState(!1),[o,l]=M.useState(""),[u,d]=M.useState(""),[f,p]=M.useState(""),[g,T]=M.useState([]),[N,D]=M.useState([]),[F,k]=M.useState([]),[_,A]=M.useState("inventory"),[L,V]=M.useState([]),[B,E]=M.useState([]),[v,w]=M.useState([]),[S,C]=M.useState([]);M.useEffect(()=>{const le=hN(Uh,async Te=>{Te&&EE.includes((Te.email||"").toLowerCase())?(r(Te),await P(Te.email.toLowerCase())):r(null),s(!0)});return()=>le()},[]),M.useEffect(()=>{if(!n)return;const le=Ni(bi(on(ge,"parts"),Ci("createdAt","desc")),ce=>{V(ce.docs.map(de=>({id:de.id,...de.data()})))}),Te=Ni(bi(on(ge,"builds"),Ci("createdAt","desc")),ce=>{E(ce.docs.map(de=>({id:de.id,...de.data()})))}),$e=Ni(bi(on(ge,"deal_watches"),Ci("createdAt","desc")),ce=>{w(ce.docs.map(de=>({id:de.id,...de.data()})))}),K=Ni(bi(on(ge,"found_deals"),Ci("foundAt","desc")),ce=>{C(ce.docs.map(de=>({id:de.id,...de.data()})))}),te=Ni(bi(on(ge,"card_expenses"),Ci("createdAt","desc")),ce=>{e(ce.docs.map(de=>({id:de.id,...de.data()})))}),oe=Ni(bi(on(ge,"sales_log"),Ci("soldAt","desc")),ce=>{T(ce.docs.map(de=>({id:de.id,...de.data()})))}),ve=Ni(bi(on(ge,"warranty_items"),Ci("soldAt","desc")),ce=>{D(ce.docs.map(de=>({id:de.id,...de.data()})))}),ue=Ni(bi(on(ge,"warranty_complaints"),Ci("createdAt","desc")),ce=>{k(ce.docs.map(de=>({id:de.id,...de.data()})))});return()=>{le(),Te(),$e(),K(),te(),oe(),ve(),ue()}},[n]);async function P(le){try{if(!("Notification"in window)||await Notification.requestPermission()!=="granted")return;const $e=await LL();if(!$e||!qh||qh==="BJ79MZmer9zzmvoX50NQuZLqISBudcwByd04Ah4W-O6io4iRebliNerHzMgRX_aOfzXwuQoJpBJTf72e8cdps-w")return;const K=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),te=await lO($e,{vapidKey:qh,serviceWorkerRegistration:K});if(te){const oe=le.replace(/[^a-z0-9]/g,"_");await fm(Ue(ge,"device_tokens",oe),{email:le,token:te,updatedAt:VD()},{merge:!0})}}catch{}}async function I(le){le.preventDefault(),p("");const Te=o.trim().toLowerCase();if(!EE.includes(Te)){p("Ez az e-mail cím nincs engedélyezve.");return}try{await uN(Uh,Te,u)}catch{p("Hibás e-mail vagy jelszó.")}}if(!i)return null;if(!n)return c.createElement("div",{style:{maxWidth:380,margin:"80px auto",padding:16}},c.createElement("form",{className:"card",onSubmit:I},c.createElement("div",{style:{textAlign:"center",marginBottom:16}},c.createElement(gm,{size:40,color:"#3b82f6"}),c.createElement("h2",{style:{margin:"8px 0 4px"}},"PC Bolt Manager"),c.createElement("div",{className:"muted"},"Zártkörű Webes Készlet & Deal Hunter")),c.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10}},c.createElement("input",{type:"email",placeholder:"E-mail cím",value:o,onChange:le=>l(le.target.value),required:!0}),c.createElement("input",{type:"password",placeholder:"Jelszó",value:u,onChange:le=>d(le.target.value),required:!0}),f&&c.createElement("div",{className:"red",style:{fontSize:13}},f),c.createElement("button",{className:"btn",type:"submit",style:{justifyContent:"center",padding:11}},"Belépés"))));const Ie=[{id:"inventory",label:"Készlet",icon:vO},{id:"builder",label:"Gépépítő",icon:TO},{id:"finance",label:"Pénzügy",icon:wO},{id:"warranty",label:"Garancia",icon:N1},{id:"deals",label:"Deal Hunter",icon:C1}];return c.createElement("div",{className:"app-shell"},c.createElement("aside",{className:"desktop-sidebar"},c.createElement("div",{className:"row",style:{marginBottom:12}},c.createElement("strong",{style:{display:"flex",alignItems:"center",gap:8}},c.createElement(gm,{size:20,color:"#3b82f6"})," PC Bolt"),c.createElement("button",{className:"btn btn-ghost",style:{padding:6},onClick:()=>fN(Uh),title:"Kilépés"},c.createElement(gO,{size:16}))),Ie.map(le=>{const Te=le.icon;return c.createElement("button",{key:le.id,className:_===le.id?"active":"",onClick:()=>A(le.id)},c.createElement(Te,{size:18})," ",le.label)})),c.createElement("main",{className:"main-content"},_==="inventory"&&c.createElement(FL,{parts:L,userEmail:n.email}),_==="builder"&&c.createElement(BL,{parts:L,builds:B}),_==="finance"&&c.createElement(WL,{parts:L,builds:B,cardExpenses:t,manualSales:g,userEmail:n.email}),_==="warranty"&&c.createElement(QL,{parts:L,builds:B,warrantyItems:N,warrantyComplaints:F,userEmail:n.email}),_==="deals"&&c.createElement(qL,{dealWatches:v,foundDeals:S})),c.createElement("nav",{className:"mobile-bottom-nav"},Ie.map(le=>{const Te=le.icon;return c.createElement("button",{key:le.id,className:_===le.id?"active":"",onClick:()=>A(le.id)},c.createElement(Te,{size:20}),c.createElement("span",null,le.label))})))}Kh.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(XL,null)));
