"use strict";(self["webpackChunksample0222"]=self["webpackChunksample0222"]||[]).push([[631],{4461:function(t,a,l){l.d(a,{Z:function(){return z}});var e=l(3396),d=l(9242),r=l(7139);const n={class:"container noprint"},f={class:"p-1"},s={class:"form-check mx-1"},u=(0,e._)("label",{class:"form-check-label",for:"helpC"},"入力補助を利用する",-1),c=(0,e._)("div",null,"---------",-1),i={class:"form-check mx-1"},v=(0,e._)("label",{class:"form-check-label",for:"getDate"},"現在の日付を使う",-1),o=(0,e._)("label",{for:"ta",class:"form-label"}," テキストを貼り付けて（入力して）ください。改行ごとに印刷用紙に反映されます。 ",-1),_={class:"table"},p=(0,e._)("th",null,"医療機関名",-1),h=(0,e._)("th",null,"担当医師名",-1),b=(0,e._)("th",null,"所在地",-1),w=(0,e._)("th",null,"TEL",-1),m=(0,e._)("th",null,"FAX",-1);function y(t,a,l,y,k,g){return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("form",f,[(0,e._)("div",s,[(0,e.wy)((0,e._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=a=>t.checkValue=a),id:"helpC",onChange:a[1]||(a[1]=a=>t.$emit("evAll",t.dataObj()))},null,544),[[d.e8,t.checkValue]]),u])]),(0,e.wy)((0,e._)("div",null,[c,(0,e._)("form",null,[(0,e._)("div",i,[(0,e.wy)((0,e._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=a=>t.checkDate=a),id:"getDate",onChange:a[3]||(a[3]=a=>t.$emit("evD",t.dateArray()))},null,544),[[d.e8,t.checkDate]]),v]),o,(0,e.wy)((0,e._)("textarea",{class:"form-control",id:"ta",rows:"5","onUpdate:modelValue":a[4]||(a[4]=a=>t.textValue=a),onInput:a[5]||(a[5]=a=>t.$emit("evT",t.checkText()))},null,544),[[d.nr,t.textValue]])]),(0,e._)("div",null,[(0,e._)("table",_,[(0,e._)("tr",null,[p,(0,e._)("td",null,(0,r.zw)(t.textArray[0]),1)]),(0,e._)("tr",null,[h,(0,e._)("td",null,(0,r.zw)(t.textArray[1]),1)]),(0,e._)("tr",null,[b,(0,e._)("td",null,(0,r.zw)(t.textArray[2]),1)]),(0,e._)("tr",null,[w,(0,e._)("td",null,(0,r.zw)(t.textArray[3]),1)]),(0,e._)("tr",null,[m,(0,e._)("td",null,(0,r.zw)(t.textArray[4]),1)])])])],512),[[d.F8,t.checkValue]])])}var k=l(4870),g=(0,e.aZ)({name:"HelpInput",setup(){const t=(0,k.iH)("(例) 〇〇医院\n(例) 梅屋　崇\n(例) あま市\n(例) 000-00-0000\n(例) 111-11-1111"),a=(0,k.iH)(!1),l=(0,k.iH)(["","","","",""]),e=(0,k.iH)(!1),d=()=>{if(e.value){let t=new Date,a=t.getFullYear().toString(),l=(t.getMonth()+1).toString(),e=t.getDate().toString();return[a,l,e]}return["","",""]},r=()=>{let a=t.value.split("\n"),e=t.value.split("\r\n"),d=a.length>e.length?a:e;for(let t=0;t<5;t++)l.value[t]=t<d.length?d[t]:"";return l.value},n=()=>a.value?{textArray:r(),dateArray:d()}:{textArray:["","","","",""],dateArray:["","",""]};return r(),{textValue:t,checkValue:a,checkText:r,textArray:l,checkDate:e,dateArray:d,dataObj:n}}}),A=l(89);const x=(0,A.Z)(g,[["render",y]]);var z=x},631:function(t,a,l){l.r(a),l.d(a,{default:function(){return R}});var e=l(3396),d=l(7139);const r=t=>((0,e.dD)("data-v-3f0f7535"),t=t(),(0,e.Cn)(),t),n={class:"page"},f=r((()=>(0,e._)("div",{class:"fontTitle center"},"コロナ重症化リスク患者 紹介FAX",-1))),s=r((()=>(0,e._)("div",{class:"left fontL"},"宛先 あま市民病院院長 梅屋 崇",-1))),u=r((()=>(0,e._)("div",{class:"right"},"FAX: 052-462-0655 （受付時間 : 終日）",-1))),c=r((()=>(0,e._)("div",{class:"left"},"  酸素需要予測スコアに基づき、下記患者の治療をご検討ください。 ",-1))),i={class:"step-2b"},v=r((()=>(0,e._)("td",{class:"center"},[(0,e._)("b",{class:"fontL"},"太字枠を記入 ")],-1))),o={class:"box right"},_={class:"yymmdd"},p=r((()=>(0,e._)("td",null,"年",-1))),h=r((()=>(0,e._)("td",null,"月",-1))),b=r((()=>(0,e._)("td",null,"日",-1))),w={class:"lineThick wide",border:"1"},m={rowspan:"2"},y={rowspan:"2"},k=r((()=>(0,e._)("tr",null,null,-1))),g=(0,e.uE)('<table class="lineThick wide" border="1" data-v-3f0f7535><tr data-v-3f0f7535><td rowspan="2" data-v-3f0f7535><div data-v-3f0f7535>(フリガナ)</div><p data-v-3f0f7535>患者氏名</p></td><td data-v-3f0f7535><div class="row" data-v-3f0f7535><div data-v-3f0f7535>年齢</div><div class="fontL" data-v-3f0f7535></div><div data-v-3f0f7535>性別</div><div class="fontL" data-v-3f0f7535></div></div></td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>生年月日</td></tr><tr data-v-3f0f7535><td colspan="2" data-v-3f0f7535>住所</td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>携帯電話</td><td data-v-3f0f7535>自宅電話</td></tr></table><table class="lineThick wide" border="1" data-v-3f0f7535><tr data-v-3f0f7535><td data-v-3f0f7535>コロナ発症日</td><td data-v-3f0f7535>コロナ診断日</td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>SpO2       測定日</td><td data-v-3f0f7535>妊娠      有 ・ 無</td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>コロナワクチン接種回数</td><td data-v-3f0f7535> 以前のコロナ感染歴       年    月 </td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>最後の接種日</td><td data-v-3f0f7535> (*)eGFR    血清Cr    検査日 </td></tr></table>',2),A={class:"layout"},x=r((()=>(0,e._)("div",{class:"center"},"重症化リスク",-1))),z={class:"half lineNormal step-2",border:"1"},D=r((()=>(0,e._)("div",{class:"center"},"重症化リスク（特に重いもの）",-1))),H={class:"half lineNormal step-2",border:"1"},T=(0,e.uE)('<div data-v-3f0f7535>*パキロビッドパックでは必須</div><br data-v-3f0f7535><p class="center" data-v-3f0f7535>適応外項目がないか確認（レ点）</p><table class="half lineThick step-2" border="1" data-v-3f0f7535><tr data-v-3f0f7535><td data-v-3f0f7535>SARS-Co2感染を確認、発症している</td><td data-v-3f0f7535></td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>酸素が必要でない（SpO2: 93以上）</td><td data-v-3f0f7535></td></tr><tr class="h10" data-v-3f0f7535><td class="heightL" data-v-3f0f7535> ゼビュディ、パキロビッドパック、レムデジビルの成分に対して重い過敏症の既往がない </td><td data-v-3f0f7535></td></tr><tr data-v-3f0f7535><td data-v-3f0f7535>成人または、12歳以上40kg以上の小児</td><td data-v-3f0f7535></td></tr></table>',4),V={class:"center"},L={class:"half lineNormal step-2a",border:"1"},C={class:"text-center"},S=r((()=>(0,e._)("br",null,null,-1))),N=r((()=>(0,e._)("br",null,null,-1))),E=r((()=>(0,e._)("hr",null,null,-1))),F=r((()=>(0,e._)("p",null,[(0,e._)("b",{class:"fontL"},"回答"),(0,e.Uk)("  1. 受診予定（予約日            ）  2. 検討中   3. 不可（理由                ） ")],-1))),Z=r((()=>(0,e._)("div",{class:"right"}," 回答医師（              ）         年     月     日  ",-1))),I=r((()=>(0,e._)("p",{class:"right"}," 今後ともよろしくお願い申し上げます。                    あま市民病院 ",-1)));function O(t,a,l,r,O,U){const X=(0,e.up)("help-input");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(X,{onEvT:a[0]||(a[0]=a=>t.infs=a),onEvD:a[1]||(a[1]=a=>t.date=a),onEvAll:a[2]||(a[2]=a=>{t.date=a.dateArray,t.infs=a.textArray})}),(0,e._)("div",n,[f,s,u,c,(0,e._)("table",i,[(0,e._)("tr",null,[v,(0,e._)("td",o,[(0,e._)("table",null,[(0,e._)("tr",_,[(0,e._)("td",null,(0,d.zw)(t.date[0]),1),p,(0,e._)("td",null,(0,d.zw)(t.date[1]),1),h,(0,e._)("td",null,(0,d.zw)(t.date[2]),1),b])])])])]),(0,e._)("table",w,[(0,e._)("tr",null,[(0,e._)("td",m,"医療機関名称 "+(0,d.zw)(t.infs[0]),1),(0,e._)("td",y,[(0,e._)("p",null,"TEL "+(0,d.zw)(t.infs[3]),1),(0,e._)("p",null,"FAX "+(0,d.zw)(t.infs[4]),1)])]),k,(0,e._)("tr",null,[(0,e._)("td",null,"担当医師名 "+(0,d.zw)(t.infs[1]),1),(0,e._)("td",null,"所在地 "+(0,d.zw)(t.infs[2]),1)])]),g,(0,e._)("table",A,[(0,e._)("tr",null,[(0,e._)("td",null,[x,(0,e._)("table",z,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.riskL,(t=>((0,e.wg)(),(0,e.iD)("tr",{key:t},[(0,e._)("td",null,(0,d.zw)(t),1)])))),128))]),D,(0,e._)("table",H,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.riskH,(t=>((0,e.wg)(),(0,e.iD)("tr",{key:t},[(0,e._)("td",null,(0,d.zw)(t),1)])))),128))])]),(0,e._)("td",null,[T,(0,e._)("p",V,"スクリーニング推奨薬 ("+(0,d.zw)(t.typeName)+")",1),(0,e._)("table",L,[(0,e._)("tr",null,[(0,e._)("td",C,(0,d.zw)(t.medicine),1)]),(0,e._)("tr",null,[(0,e._)("td",null,"代替薬 : "+(0,d.zw)(t.addition),1)])]),S])])]),N,E,F,Z,I])],64)}var U=l(3747),X=l(4870),Y=l(4461),$=(0,e.aZ)({name:"PrintView2",components:{HelpInput:Y.Z},props:{resultNumber:{type:Number,default:2},medicine:{type:String,default:""},addition:{type:String,default:""},answers:{type:Array,default:()=>{}},riskL:{type:Array,default:()=>["","",""]},riskH:{type:Array,default:()=>["",""]}},setup(t){const a="?type=ba2"==location.search?"ba2":"omicron",l=U.c[a].result,e=l[t.resultNumber],d=(0,X.iH)(["","","","",""]),r=(0,X.iH)(["","",""]);return{rslt:e,typeName:a,infs:d,date:r}}}),j=l(89);const K=(0,j.Z)($,[["render",O],["__scopeId","data-v-3f0f7535"]]);var R=K}}]);
//# sourceMappingURL=631.8e6707c6.js.map