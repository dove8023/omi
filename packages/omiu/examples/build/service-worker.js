"use strict";var precacheConfig=[["./example.html","2a5f047158a54cb5bca83c1772e19bfe"],["./index.html","7f9c5b79691787ec8971a24dd72eddae"],["./static/css/example.fd06c8ea.css","61481dd833f64d7dc1a3d9a3f0013228"],["./static/css/index.fd06c8ea.css","f3dc97a76192a4564884538b5a8073f2"],["./static/css/zh-cn.fd06c8ea.css","73345a6f338b9a2c6479b828ba16713a"],["./static/js/0.8fb434d6.chunk.js","0a64ed60b6d6e82b49622c243e5edb83"],["./static/js/1.d363610c.chunk.js","456021e0220035e3001298091d884d05"],["./static/js/10.d6833434.chunk.js","a177f3a51d3b2fe9f22f62c048116ed8"],["./static/js/11.e3f34381.chunk.js","7c508f880105f2e7086f072b69ba4a67"],["./static/js/12.62ce9e1a.chunk.js","a9b717697d944be5203c1fe6c53ff58f"],["./static/js/13.6f3e704b.chunk.js","716a4adad6338969f227bb5ed93dc25b"],["./static/js/14.5790bf74.chunk.js","082ecc763248cc5a341771936261e80c"],["./static/js/15.fddfb1d9.chunk.js","7060cd09f3632105853af0c22fbd5d03"],["./static/js/16.241d13a7.chunk.js","39b38a06ff653f95f4fb3705cc70ee81"],["./static/js/17.6f2a34de.chunk.js","3b767942d2a0603c422f9b5d6c8fe6f5"],["./static/js/18.c7918521.chunk.js","42e257df544f2a24e69515d6afa3cdb1"],["./static/js/19.6291d369.chunk.js","59924df4a1855aaa97511ac0602df7be"],["./static/js/2.3638a980.chunk.js","9af492ba9c7a13fd131d8e364be54a3f"],["./static/js/20.4cbe22ae.chunk.js","a027f550d7c42d90e7b094788ff6fb09"],["./static/js/21.863d5957.chunk.js","fcc0cd72e4875f8f362e819dba9f7884"],["./static/js/3.7d9a8b96.chunk.js","49fe275bfbf9227338e67f5b3d6bacd3"],["./static/js/4.cc664042.chunk.js","97b5d10111b92b4794a98ff908fdf073"],["./static/js/5.f0862772.chunk.js","73210a24695c9f0947cd473ee77f8795"],["./static/js/6.a83b1627.chunk.js","95a694fd4090705da5ef8dc3430b10de"],["./static/js/7.edec998a.chunk.js","d49c9eadf71ecdf2210e5a231e8b7fe7"],["./static/js/8.e77f2d7e.chunk.js","baf7898ea3f4de8cb4eef915420cdba4"],["./static/js/9.a0be550b.chunk.js","ddd187867d3341567feb7ac52143e329"],["./static/js/example.9b3b700e.js","adb5231afa6dbcef315f6c64f51f0d43"],["./static/js/index.ace24ff7.js","4c72b224968cbf7c4cafff10679202ca"],["./static/js/timeline.c209a6ea.js","b9041979b3833138cb4b288b278e7d94"],["./static/js/tree.6acf7ccc.js","309d0293279628bba1fe630631743303"],["./static/js/zh-cn.2b54cdff.js","27ea88cfb516f5c2021204b55d419bb5"],["./static/media/loading.84a15aa0.svg","84a15aa010f310acb5f4bc99ce8f7ed1"],["./static/media/omi-logo.979f9173.svg","979f9173db1ab18c35b7e720f0bb41a0"],["./timeline.html","f6b0fc038e515105526c8d7f3c83e433"],["./tree.html","f15116776c62e6d510bcd02e196949dc"],["./zh-cn.html","586ad07a14628f15d33c014d056ee656"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});