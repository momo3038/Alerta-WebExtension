(()=>{"use strict";function e(e,t){r(""+e.userPreferences.alertaUiUrl,t)}function t(t,n,o){o&&"GoToAlertaHome"!==n?r(t.userPreferences.alertaUiUrl+"alert/"+o,n):e(t,n)}function r(e,t){chrome.tabs.create({active:!0,url:e},(function(e){t&&chrome.notifications.clear(t),chrome.windows.update(e.windowId,{focused:!0})}))}var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e){var t;return{title:e.service[0]+" - "+e.event,message:null!==(t=e.text)&&void 0!==t?t:" "}}var i={fetchAlertPollingState:{status:"Not yet fetched"},pollingState:{alertaFetchQuery:"",alerts:[],isNewState:!0,fetchAlertState:{status:"Not yet fetched"}},userPreferences:{alertaApiServerUrl:"http://localhost:8080/api/",alertaUiUrl:"http://localhost:8080/",persistentNotifications:!1,showNotifications:!0,alertaApiSecret:"XXX",username:"John Doe",filterGroups:[],filterEnvironments:["Production"],filterServices:[],playAudio:!1}},a=i,s=function(e){chrome.storage.local.set(e,(function(){Object.assign(a,e)}))},c=function(e){chrome.storage.local.set({fetchAlertPollingState:e})},l=function(){return a};function u(){return new Promise((function(e,t){chrome.storage.local.get(null,(function(r){if(chrome.runtime.lastError)return t(chrome.runtime.lastError);e(r)}))}))}var f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(){chrome.alarms.onAlarm.addListener((function(){p(l())})),chrome.alarms.create("PollingAlerta",{delayInMinutes:.1,periodInMinutes:.2})},p=function(e){fetch(e.userPreferences.alertaApiServerUrl+"alerts?"+e.pollingState.alertaFetchQuery,{headers:{Authorization:"Key "+e.userPreferences.alertaApiSecret}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){!function(e,t){var r=e.alerts;if(r){var i=r.filter((function(e){return t.pollingState.alerts&&!t.pollingState.alerts.map((function(e){return e.id})).includes(e.id)})),a=e.alerts.length;chrome.browserAction.setBadgeText({text:a.toString()}),chrome.browserAction.setBadgeBackgroundColor({color:a>0?"red":"green"}),function(e,t){if(e.userPreferences.showNotifications&&!e.pollingState.isNewState&&t.length>0){var r=1==t.length?(a=t[0],s=e.userPreferences,{id:"Alert_"+a.id,payload:n({type:"basic",iconUrl:"alert.png",requireInteraction:s.persistentNotifications,isClickable:!0,buttons:[{title:"Ack"},{title:"View alert details"}]},o(a))}):{id:"GoToAlertaHome",payload:{type:"list",title:(i=t).length+" new alerts detected !",message:"Click to open Alerta",items:i.map(o),iconUrl:"alert.png",isClickable:!0,buttons:[{title:"Go to alerta"}]}};e.userPreferences.playAudio&&new Audio(chrome.runtime.getURL("bip.mp3")).play(),chrome.notifications.create(r.id,r.payload)}var i,a,s}(t,i),(i.length>0||t.pollingState.isNewState)&&s(f(f({},t),{pollingState:f(f({},t.pollingState),{alerts:r,isNewState:!1})}))}}(t,e),c({status:"OK"})})).catch((function(e){chrome.browserAction.setBadgeText({text:"ERR"}),chrome.browserAction.setBadgeBackgroundColor({color:"red"}),c({status:"KO",error:{status:e.status,statusText:e.statusText}})}))};chrome.runtime.onInstalled.addListener((function(){return new Promise((function(e,t){chrome.storage.local.set(i,(function(){if(chrome.runtime.lastError)return t(chrome.runtime.lastError);a=i,e()}))})).then(h)})),chrome.runtime.onStartup.addListener((function(){return u().then(h)})),chrome.storage.onChanged.addListener((function(e,t){"local"===t&&u().then((function(e){var t=e;Object.assign(a,t)}))})),chrome.browserAction.onClicked.addListener((function(){return e(l())})),chrome.notifications.onClicked.addListener((function(e){return t(l(),e,e.split("_").pop())})),chrome.notifications.onButtonClicked.addListener((function(r,n){return function(r,n,o){"GoToAlertaHome"===n?e(r,n):n.startsWith("Alert_")&&0===o?function(e,t,r){if(r){var n={status:"ack",text:e.userPreferences.username?e.userPreferences.username+": I'll take a look ...":""};fetch(e.userPreferences.alertaApiServerUrl+"alert/"+r+"/status",{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json",Authorization:"Key "+e.userPreferences.alertaApiSecret}}).then((function(e){return chrome.notifications.clear(t)}))}}(r,n,n.split("_").pop()):n.startsWith("Alert_")&&1===o&&t(r,n,n.split("_").pop())}(l(),r,n)}))})();