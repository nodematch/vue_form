"use strict";(self["webpackChunksample0222"]=self["webpackChunksample0222"]||[]).push([[784],{4397:function(n,t,o){o.d(t,{Z:function(){return f}});var e=o(3396),a=o(7139);const i={class:"accordion my-3"},c=["innerHTML"],r=["id"],s=["data-bs-target","aria-controls","innerHTML"],l=["id","aria-labelledby"],d=["innerHTML"];function u(n,t,o,u,p,m){return(0,e.wg)(),(0,e.iD)("div",i,[(0,e._)("div",{class:(0,a.C_)("accordion-body fs-5 display-1 fw-normal p-2 "+n.color),innerHTML:n.headText},null,10,c),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.contents,(n=>((0,e.wg)(),(0,e.iD)("div",{class:"accordion-item",key:n.idn},[(0,e._)("h2",{class:"accordion-header",id:n.idn+"parent"},[(0,e._)("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+n.idn+"child","aria-expanded":"true","aria-controls":"#"+n.idn+"child",innerHTML:n.title},null,8,s)],8,r),(0,e._)("div",{id:n.idn+"child",class:(0,a.C_)("accordion-collapse collapse "+n.isShow),"aria-labelledby":"#"+n.idn+"parent"},[(0,e._)("div",{class:"accordion-body",innerHTML:n.msg},null,8,d)],10,l)])))),128))])}var p=(0,e.aZ)({name:"AccordionVersion1",props:{contents:Array,headText:String,color:String}}),m=o(89);const h=(0,m.Z)(p,[["render",u]]);var f=h},8231:function(n,t,o){o.d(t,{Z:function(){return u}});var e=o(3396),a=o(7139);const i={class:"row justify-content-center my-1"},c=["onClick"];function r(n,t,o,r,s,l){return(0,e.wg)(),(0,e.iD)("div",i,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.contents,(n=>((0,e.wg)(),(0,e.iD)("div",{class:"col-auto",key:n.text},[(0,e._)("button",{class:(0,a.C_)("btn m-1 "+n.color),onClick:n.func},(0,a.zw)(n.text),11,c)])))),128))])}var s=(0,e.aZ)({name:"ButtonComponent",props:{contents:Array}}),l=o(89);const d=(0,l.Z)(s,[["render",r]]);var u=d},5784:function(n,t,o){o.r(t),o.d(t,{default:function(){return b}});var e=o(3396),a=o(7139);const i={class:"container"},c={class:"text-end fs-6"},r=(0,e._)("div",{class:"fs-6 mt-4"},null,-1);function s(n,t,o,s,l,d){const u=(0,e.up)("accordion-version-1"),p=(0,e.up)("button-component");return(0,e.wg)(),(0,e.iD)("div",i,[(0,e._)("div",c,(0,a.zw)(n.typeName),1),(0,e.Wm)(u,{contents:n.accordionContent,headText:n.headText,color:n.headColor},null,8,["contents","headText","color"]),(0,e.Wm)(p,{contents:n.buttonContent},null,8,["contents"]),r])}var l=o(3809),d=o(4397),u=o(8231),p=o(7544),m=(0,e.aZ)({name:"TitleInformation1",components:{AccordionVersion1:d.Z,ButtonComponent:u.Z},setup(){const n=(0,p.Ny)(location.search),t="<p>Step A</p><p>COVID-19「 酸素需要予測のスクリーニング」</p>",o="blueA",e=[{title:"対象",msg:"18才以上 かつ day3～6の外来患者 (発症日はday0） かつ 症状の軽快が乏しい患者",isShow:"show",idn:"aa"},{title:"特徴",msg:"SpO2値を使わないため、電話診療でも、判定可能。高齢者は感度高く、若年者は特異度を高く、カットオフ値設定。",isShow:"show",idn:"bb"},{title:"参考文献",msg:"Yamada G,et al. Predicting respiratory failure for COVID-19 :a simple clinical score for evaluating the need for hospitalization. Epidemiol Infect 2021",isShow:"hide",idn:"cc"}],a=[{text:"スクリーニング開始",func:()=>{l.Z.push({name:"InputForm1",query:{type:n}})},color:"blueA"}];return{accordionContent:e,headText:t,headColor:o,typeName:n,buttonContent:a}}}),h=o(89);const f=(0,h.Z)(m,[["render",s]]);var b=f}}]);
//# sourceMappingURL=784.b920d0fe.js.map