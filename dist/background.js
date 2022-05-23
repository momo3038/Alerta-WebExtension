(()=>{var e={3150:function(e,r){var t,n;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,void 0===(n="function"==typeof(t=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",t="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",n=e=>{const n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(n).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,t)=>(...n)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):t.singleCallbackArg||n.length<=1&&!1!==t.singleCallbackArg?r.resolve(n[0]):r.resolve(n)},o=e=>1==e?"argument":"arguments",i=(e,r,t)=>new Proxy(r,{apply:(r,n,s)=>t.call(n,e,...s)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const g=(e,r={},t={})=>{let n=Object.create(null),s={has:(r,t)=>t in e||t in n,get(s,c,m){if(c in n)return n[c];if(!(c in e))return;let A=e[c];if("function"==typeof A)if("function"==typeof r[c])A=i(e,e[c],r[c]);else if(l(t,c)){let r=((e,r)=>function(t,...n){if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((s,o)=>{if(r.fallbackToNoCallback)try{t[e](...n,a({resolve:s,reject:o},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),t[e](...n),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(t[e](...n),s()):t[e](...n,a({resolve:s,reject:o},r))}))})(c,t[c]);A=i(e,e[c],r)}else A=A.bind(e);else if("object"==typeof A&&null!==A&&(l(r,c)||l(t,c)))A=g(A,r[c],t[c]);else{if(!l(t,"*"))return Object.defineProperty(n,c,{configurable:!0,enumerable:!0,get:()=>e[c],set(r){e[c]=r}}),A;A=g(A,r[c],t["*"])}return n[c]=A,A},set:(r,t,s,a)=>(t in n?n[t]=s:e[t]=s,!0),defineProperty:(e,r,t)=>Reflect.defineProperty(n,r,t),deleteProperty:(e,r)=>Reflect.deleteProperty(n,r)},c=Object.create(e);return new Proxy(c,s)},c=e=>({addListener(r,t,...n){r.addListener(e.get(t),...n)},hasListener:(r,t)=>r.hasListener(e.get(t)),removeListener(r,t){r.removeListener(e.get(t))}}),m=new s((e=>"function"!=typeof e?e:function(r){const t=g(r,{},{getContent:{minArgs:0,maxArgs:0}});e(t)}));let A=!1;const u=new s((e=>"function"!=typeof e?e:function(r,n,s){let a,o,i=!1,l=new Promise((e=>{a=function(r){A||(console.warn(t,(new Error).stack),A=!0),i=!0,e(r)}}));try{o=e(r,n,a)}catch(e){o=Promise.reject(e)}const g=!0!==o&&((c=o)&&"object"==typeof c&&"function"==typeof c.then);var c;if(!0!==o&&!g&&!i)return!1;return(g?o:l).then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)})),!0})),f=({reject:t,resolve:n},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?n():t(new Error(e.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?t(new Error(s.message)):n(s)},d=(e,r,t,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise(((e,r)=>{const s=f.bind(null,{resolve:e,reject:r});n.push(s),t.sendMessage(...n)}))},p={devtools:{network:{onRequestFinished:c(m)}},runtime:{onMessage:c(u),onMessageExternal:c(u),sendMessage:d.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:d.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},x={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":x},services:{"*":x},websites:{"*":x}},g(e,p,n)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=n(chrome)}else e.exports=browser})?t.apply(r,[e]):t)||(e.exports=n)}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var a=r[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(3150),r=t.n(e);function n(e,r){return a(""+e.userPreferences.alerta.uiUrl,r)}function s(e,r,t){return t&&"GoToAlertaHome"!==r?a(e.userPreferences.alerta.uiUrl+"alert/"+t,r):n(e,r)}function a(e,t){return n=this,s=void 0,o=function(){var n;return function(e,r){var t,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(e,o)}catch(e){a=[6,e],n=0}finally{t=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,(function(s){switch(s.label){case 0:return[4,r().tabs.create({active:!0,url:e})];case 1:return n=s.sent(),t&&r().notifications.clear(t),r().windows.update(n.windowId,{focused:!0}),[2,n]}}))},new((a=void 0)||(a=Promise))((function(e,r){function t(e){try{l(o.next(e))}catch(e){r(e)}}function i(e){try{l(o.throw(e))}catch(e){r(e)}}function l(r){var n;r.done?e(r.value):(n=r.value,n instanceof a?n:new a((function(e){e(n)}))).then(t,i)}l((o=o.apply(n,s||[])).next())}));var n,s,a,o}function o(){return void 0!==r().notifications.onShown}var i,l=function(){return(l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)};function g(e){var r;return{title:e.service[0]+" - "+e.event,message:null!==(r=e.text)&&void 0!==r?r:" "}}!function(e){e[e.NotYetFetched=0]="NotYetFetched",e[e.OK=1]="OK",e[e.KO=2]="KO"}(i||(i={}));var c,m={pollingState:{alertaFetchQuery:"",alerts:[],isNewState:!0,status:{result:i.NotYetFetched}},userPreferences:{alerta:{apiUrl:"http://localhost:8080/api/",uiUrl:"http://localhost:8080/",apiSecret:"XXX"},notification:{persistentNotifications:!1,showNotifications:!0,playAudio:!1},filters:{groups:[],environments:["Production"],services:[]},username:"John Doe"}},A=function(e,r,t,n){return new(t||(t=Promise))((function(s,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function i(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?s(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,i)}l((n=n.apply(e,r||[])).next())}))},u=function(e,r){var t,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(e,o)}catch(e){a=[6,e],n=0}finally{t=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},f=m,d=function(e){return A(void 0,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,r().storage.local.set(e)];case 1:return t.sent(),Object.assign(f,e),[2]}}))}))},p=function(){return f};function x(){return A(this,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return[4,r().storage.local.get(null)];case 1:return e=t.sent(),Object.assign(f,e),[2,e]}}))}))}!function(e){e[e.NotYetFetched=0]="NotYetFetched",e[e.OK=1]="OK",e[e.KO=2]="KO"}(c||(c={})),c.NotYetFetched;var h,b=function(e,r){return r.length>0?r.reduce((function(r,t){return r+"&"+e+"="+t}),""):""},v=function(){return(v=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)};function y(e){return r=this,t=void 0,s=function(){var r;return function(e,r){var t,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(6===a[0]&&o.label<s[1]){o.label=s[1],s=a;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(a);break}s[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(e,o)}catch(e){a=[6,e],n=0}finally{t=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,(function(t){switch(t.label){case 0:return r=function(e,r){switch(r.event){case h.POLLING_RESULT_RECEIVED:return function(e,r){return v(v({},e),{pollingState:v(v({},e.pollingState),{alerts:r.fetchedAlerts,isNewState:!1,status:{result:c.OK}})})}(e,r.payload);case h.POLLING_IN_ERROR:return function(e,r){return v(v({},e),{pollingState:v(v({},e.pollingState),{status:{result:c.KO,error:v({},r)}})})}(e,r.payload);case h.SAVE_USER_PREFERENCES:return function(e,r){return v(v({},e),{pollingState:v(v({},e.pollingState),{alertaFetchQuery:(t=r,n=b("group",t.filters.groups)+b("service",t.filters.services)+b("environment",t.filters.environments),"status=open&status=ack&sort-by=lastReceiveTime"+(""===n?"":n)),isNewState:!0}),userPreferences:r});var t,n}(e,r.payload);default:return e}}(p(),e),[4,d(r)];case 1:return t.sent(),[2]}}))},new((n=void 0)||(n=Promise))((function(e,a){function o(e){try{l(s.next(e))}catch(e){a(e)}}function i(e){try{l(s.throw(e))}catch(e){a(e)}}function l(r){var t;r.done?e(r.value):(t=r.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}l((s=s.apply(r,t||[])).next())}));var r,t,n,s}!function(e){e[e.POLLING_RESULT_RECEIVED=0]="POLLING_RESULT_RECEIVED",e[e.USER_PREF_UPDATED=1]="USER_PREF_UPDATED",e[e.POLLING_IN_ERROR=2]="POLLING_IN_ERROR",e[e.SAVE_USER_PREFERENCES=3]="SAVE_USER_PREFERENCES"}(h||(h={}));var w=function(){r().alarms.onAlarm.addListener((function(){k(p())})),r().alarms.create("PollingAlerta",{delayInMinutes:.1,periodInMinutes:.2})},k=function(e){fetch(e.userPreferences.alerta.apiUrl+"alerts?"+e.pollingState.alertaFetchQuery,{headers:{Authorization:"Key "+e.userPreferences.alerta.apiSecret}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){!function(e,t){var n=e.alerts;if(n){var s=n.filter((function(e){return t.pollingState.alerts&&!t.pollingState.alerts.map((function(e){return e.id})).includes(e.id)})),a=e.alerts.length;r().browserAction.setBadgeText({text:a.toString()}),r().browserAction.setBadgeBackgroundColor({color:a>0?"red":"green"}),function(e,t){if(e.userPreferences.notification.showNotifications&&!e.pollingState.isNewState&&t.length>0){var n=1==t.length?(s=t[0],a=e.userPreferences,i=l({type:"basic",iconUrl:"alert.png"},g(s)),o()||(i.buttons=[{title:"Ack"},{title:"View alert details"}],i.requireInteraction=a.notification.persistentNotifications,i.isClickable=!0),{notificationId:"Alert_"+s.id,options:i}):function(e,r){var t={type:"list",title:e.length+" new alerts detected !",message:"Click to open Alerta",iconUrl:"alert.png"};return o()||(t.items=e.map(g),t.buttons=[{title:"Go to alerta"}],t.requireInteraction=r.notification.persistentNotifications,t.isClickable=!0),{notificationId:"GoToAlertaHome",options:t}}(t,e.userPreferences);e.userPreferences.notification.playAudio&&new Audio(r().runtime.getURL("bip.mp3")).play(),r().notifications.create(n.notificationId,n.options)}var s,a,i}(t,s),y({event:h.POLLING_RESULT_RECEIVED,payload:{newAlerts:s,fetchedAlerts:n}})}}(t,e)})).catch((function(e){r().browserAction.setBadgeText({text:"ERR"}),r().browserAction.setBadgeBackgroundColor({color:"red"}),y({event:h.POLLING_IN_ERROR,payload:{status:e.status,statusText:e.statusText}})}))};r().runtime.onInstalled.addListener((function(){return A(void 0,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,d(m)];case 1:return e.sent(),[2]}}))})).then(w)})),r().runtime.onStartup.addListener((function(){return x().then(w)})),r().storage.onChanged.addListener((function(e,r){"local"===r&&x()})),r().browserAction.onClicked.addListener((function(){return n(p())})),r().notifications.onClicked.addListener((function(e){return s(p(),e,e.split("_").pop())})),o()||r().notifications.onButtonClicked.addListener((function(e,t){return function(e,t,a){"GoToAlertaHome"===t?n(e,t):t.startsWith("Alert_")&&0===a?function(e,t,n){if(n){var s={status:"ack",text:e.userPreferences.username?e.userPreferences.username+": I'll take a look ...":""};fetch(e.userPreferences.alerta.apiUrl+"alert/"+n+"/status",{method:"PUT",body:JSON.stringify(s),headers:{"Content-type":"application/json",Authorization:"Key "+e.userPreferences.alerta.apiSecret}}).then((function(e){return r().notifications.clear(t)}))}}(e,t,t.split("_").pop()):!t.startsWith("Alert_")||1!==a&&void 0!==a||s(e,t,t.split("_").pop())}(p(),e,t)}))})()})();