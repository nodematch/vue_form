(function(){"use strict";var t={780:function(t,e,n){var r=n(9242),o=n(3396);function a(t,e,n,r,a,i){const c=(0,o.up)("header-component"),d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o.Wm)(d)])}const i=t=>((0,o.dD)("data-v-4d9328fd"),t=t(),(0,o.Cn)(),t),c={class:"navbar greenA"},d={class:"container-fluid"},u=i((()=>(0,o._)("h1",{class:"navbar-brand fs-4"},"あま市民病院ICT",-1))),s={class:"nav-item dropdown"},l=i((()=>(0,o._)("button",{class:"btn btn-secondary dropdown-toggle nav-link text-dark bg-light",type:"button",id:"navh","data-bs-toggle":"dropdown"}," メニュー ",-1))),f={class:"dropdown-menu dropdown-menu-end nav-item","aria-labelledby":"navh"},p=(0,o.Uk)("Top");function m(t,e,n,r,a,i){const m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",c,[(0,o._)("div",d,[u,(0,o._)("div",s,[l,(0,o._)("ul",f,[(0,o._)("li",null,[(0,o.Wm)(m,{to:"/",class:"dropdown-item",id:"toTop"},{default:(0,o.w5)((()=>[p])),_:1})])])])])])}var v=n(4870),b=(0,o.aZ)({name:"HeaderComponent",setup(){const t=(0,v.iH)("collaspe"),e=()=>{t.value="collapse"};return{collapseSt:t,closeNavBar:e}}}),h=n(89);const g=(0,h.Z)(b,[["render",m],["__scopeId","data-v-4d9328fd"]]);var y=g,w=(0,o.aZ)({components:{HeaderComponent:y}});const _=(0,h.Z)(w,[["render",a]]);var k=_,x=n(5276),C=n(9749);const O=(0,C.MT)({state:{count:2},mutations:{increment(t){t.count++,console.log("state.count++")}},getters:{getNumber(t){return t.count}},actions:{increment(){O.commit("increment")}}});var T=n(7818);(0,r.ri)(k).use(x.Z,O,T.ZP).mount("#app")},5276:function(t,e,n){n.d(e,{Z:function(){return w}});var r=n(678),o=n(3396);const a={class:"container"},i={class:"card"},c=(0,o.uE)('<div class="fs-4 my-2 text-center"><p>あま市・大治町医療機関の患者</p><p>発症早期における治療選択フロー 第2版</p><div class="card m-3"><div class="card-body text-center text-dark"><div class="fs-4 text-center"><b>対象（下記をすべて満たす）</b></div><div class="fs-6 text-center text-danger fw-bold">・18才以上 または 12~17才でBW≧40kg</div><div class="fs-6 text-center text-danger fw-bold">・day0~7の外来患者</div><div class="fs-6 text-center mt-3">日数の数え方</div><table class="table table-bordered fs-6"><tr class="table-info"><td>day 0</td><td>day 1</td><td>day 2</td><td>day 3</td></tr><tr><td>発症日</td><td>発症翌日</td><td>・・・</td><td>・・・</td></tr></table></div></div><p class="text-end fs-6">あま市民病院ICT作成（2022年3月23日）</p></div>',1),d={class:"card p-1 m-1 bg-light"},u={class:"card-body text-center text-dark"},s=(0,o._)("div",{class:"text-center fs-4 mb-5"},[(0,o._)("p",null,"オミクロン流行期のフロー")],-1),l=(0,o.Uk)("スクリーニングを開始する"),f=(0,o._)("div",{class:"card p-1 m-1 bg-light"},[(0,o._)("div",{class:"card-body text-center text-dark"},[(0,o._)("div",{class:"text-center fs-4 mb-5"},[(0,o._)("p",null,"BA.2 流行期のフロー"),(0,o._)("p",null,"準備中")])])],-1);function p(t,e,n,r,p,m){const v=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",i,[c,(0,o._)("div",d,[(0,o._)("div",u,[s,(0,o.Wm)(v,{class:"btn btn-primary fs-5",to:"/titleinformation1"},{default:(0,o.w5)((()=>[l])),_:1})])]),f])])}var m=(0,o.aZ)({name:"HomeView",setup(){}}),v=n(89);const b=(0,v.Z)(m,[["render",p]]);var h=b;const g=[{path:"/",name:"home",component:h},{path:"/titleinformation1",name:"TitleInformation1",component:()=>n.e(966).then(n.bind(n,1966))},{path:"/inputform2",name:"InputForm2",component:()=>n.e(876).then(n.bind(n,3876))},{path:"/printview1",name:"PrintView1",props:!0,component:()=>n.e(164).then(n.bind(n,2164))},{path:"/inputform1",name:"InputForm1",component:()=>n.e(598).then(n.bind(n,6598))},{path:"/printview2",name:"PrintView2",props:!0,component:()=>n.e(839).then(n.bind(n,7839))},{path:"/titleinformation2",name:"TitleInformation2",props:!1,component:()=>n.e(921).then(n.bind(n,7921))},{path:"/:catchAll(.*)",name:"NotFound",component:()=>n.e(806).then(n.bind(n,1806))}],y=(0,r.p7)({history:(0,r.PO)("/vue_form/"),routes:g});var w=y}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],a=t[s][2];for(var c=!0,d=0;d<r.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[d])}))?r.splice(d--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{164:"f97aca6d",598:"d4924e9a",806:"8d0f882a",839:"07f7819a",876:"25c0ca1c",921:"e237b4c5",966:"3919bd28"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{164:"26f661c9",839:"26f661c9",876:"c4132b9f",921:"815b05e5"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="sample0222:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,d;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+a){c=l;break}}c||(d=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var f=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),d&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue_form/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=c,o.parentNode.removeChild(o),r(d)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(e(i,c))return o();t(r,c,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={164:1,839:1,876:1,921:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,d=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,d,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],d=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(d)var s=d(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self["webpackChunksample0222"]=self["webpackChunksample0222"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(780)}));r=n.O(r)})();
//# sourceMappingURL=app.2173cfb7.js.map