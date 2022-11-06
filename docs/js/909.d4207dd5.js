"use strict";(self["webpackChunksample0222"]=self["webpackChunksample0222"]||[]).push([[909],{8231:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3396),l=n(7139);const o={class:"row justify-content-center my-1"},s=["onClick"];function r(e,t,n,r,i,c){return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contents,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-auto",key:e.text},[(0,a._)("button",{class:(0,l.C_)("btn m-1 "+e.color),onClick:e.func},(0,l.zw)(e.text),11,s)])))),128))])}var i=(0,a.aZ)({name:"ButtonComponent",props:{contents:Array}}),c=n(89);const m=(0,c.Z)(i,[["render",r]]);var u=m},268:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(3396),l=n(7139),o=n(9242);const s={class:"container"},r=(0,a._)("div",{class:"text-center m-3 fs-2"},"COVID-19 酸素需要予測のスクリーニング",-1),i={class:"text-end fs-6"},c=(0,a._)("div",{class:"text-center m-3 fs-6"},[(0,a._)("b",null,"day3-7"),(0,a.Uk)("(発症日はday0）かつ 18才以上")],-1),m=(0,a._)("div",{class:"text-center m-3 fs-6"},"Step A 入力フォーム",-1),u={class:"row p-1 justify-content-center greyA"},f=(0,a._)("label",{for:"age",class:"col-6 col-form-label text-center fs-3"},"年齢",-1),g={class:"col-6"},p={class:"row p-1 justify-content-center greyA"},h=(0,a._)("label",{class:"col-6 col-form-label text-center fs-3"},"性別",-1),d={class:"form-check col-3"},y=(0,a._)("label",{class:"form-check-label fs-3",for:"female"},"女",-1),v={class:"form-check col-3"},w=(0,a._)("label",{class:"form-check-label fs-3",for:"male"},"男",-1),b={class:"row p-1 justify-content-center greyA"},x=(0,a._)("label",{for:"height",class:"col-6 col-form-label text-center fs-3"},"身長",-1),k={class:"col-6"},_={class:"row p-1 justify-content-center greyA"},V=(0,a._)("label",{for:"weight",class:"col-6 col-form-label text-center fs-3"},"体重",-1),T={class:"col-6"},A={key:0,class:"row p-1 greyB justify-content-center"},C={class:"col-6 col-form-label text-center fs-3"},U={class:"form-check col-3"},Z=["name","id","onUpdate:modelValue"],j=["for"],D={class:"form-check col-3"},S=["name","id","onUpdate:modelValue"],B=["for"],I=(0,a._)("br",null,null,-1);function P(e,t,n,P,q,G){const z=(0,a.up)("button-component");return(0,a.wg)(),(0,a.iD)("div",s,[r,(0,a._)("div",i,(0,l.zw)(e.typeName),1),c,m,(0,a._)("form",null,[(0,a._)("div",u,[f,(0,a._)("div",g,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control fs-3",maxlength:"3","onUpdate:modelValue":t[0]||(t[0]=t=>e.val.age=t),onChange:t[1]||(t[1]=(...t)=>e.setAgeType&&e.setAgeType(...t)),max:"150",min:"12",id:"age"},null,544),[[o.nr,e.val.age,void 0,{number:!0}]])])]),(0,a._)("div",p,[h,(0,a._)("div",d,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:"sex",id:"female",value:"0","onUpdate:modelValue":t[2]||(t[2]=t=>e.val.sex=t)},null,512),[[o.G2,e.val.sex]]),y]),(0,a._)("div",v,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:"sex",id:"male",value:"1","onUpdate:modelValue":t[3]||(t[3]=t=>e.val.sex=t)},null,512),[[o.G2,e.val.sex]]),w])]),(0,a._)("div",b,[x,(0,a._)("div",k,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control fs-3",maxlength:"3","onUpdate:modelValue":t[4]||(t[4]=t=>e.val.height=t),max:"299",min:"0",id:"height"},null,512),[[o.nr,e.val.height,void 0,{number:!0}]])])]),(0,a._)("div",_,[V,(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control fs-3",maxlength:"3","onUpdate:modelValue":t[5]||(t[5]=t=>e.val.weight=t),max:"199",min:"0",id:"weight"},null,512),[[o.nr,e.val.weight,void 0,{number:!0}]])])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.risks,((t,n)=>((0,a.wg)(),(0,a.iD)("div",{key:t.name},[t.isShow(e.val.ageType)?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("label",C,(0,l.zw)(t.name),1),(0,a._)("div",U,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:t.name,value:"1",id:"y"+t.name,"onUpdate:modelValue":t=>e.riskVals[n]=t},null,8,Z),[[o.G2,e.riskVals[n],void 0,{number:!0}]]),(0,a._)("label",{class:"form-check-label fs-3",for:"y"+t.name},"有",8,j)]),(0,a._)("div",D,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:t.name,value:"0",id:"n"+t.name,"onUpdate:modelValue":t=>e.riskVals[n]=t},null,8,S),[[o.G2,e.riskVals[n],void 0,{number:!0}]]),(0,a._)("label",{class:"form-check-label fs-3",for:"n"+t.name},"無",8,B)])])):(0,a.kq)("",!0)])))),128))]),I,(0,a.Wm)(z,{contents:e.buttonContent},null,8,["contents"])])}var q=n(4870),G=n(2482);class z{constructor(e,t){(0,G.Z)(this,"name",""),(0,G.Z)(this,"points",[0,0,0]),this.name=t,this.points=e}PointAtAgeType(e){return this.points[e]}isShow(e){return 0!=this.points[e]}}const H={BMI(e,t){return t/(e/100)**2},AgeType(e){return e<40?0:e<65?1:2},Point(e,t){let n=0;for(let l=0;l<e.length;l++)n+=e[l].PointAtAgeType(t.ageType)*t.riskVals[l];t.age>29&&t.age<40||t.age>49&&t.age<60?n+=1:t.age>59&&t.age<65?n+=3:t.age>74&&(n+=2),1==t.sex&&t.age<65&&(n+=1);const a=t.weight/(t.height/100)**2;return t.age<40?a>30?n+=2:a>23&&(n+=1):a>25&&(n+=2),n},judge(e,t){return 0==e&&t>5||1==e&&t>4||2==e&&t>2},checkValue(e){let t="";return"string"===typeof e.n?t="value of "+e.name+" is invalid":(e.n=e.n,(e.n<e.min||e.max<e.n)&&(t="value of "+e.name+" is invalid")),t},formatSex(e){return 1==e?"男":"女"},formatAgeType(e){return 0==e?"18-39":1==e?"40-64":"65-"},formatCutoff(e){return 0==e?6:1==e?5:3}},M=[new z([0,0,2],"うっ血性心不全"),new z([0,0,1],"脳血管疾患"),new z([0,1,2],"糖尿病"),new z([0,0,2],"高血圧"),new z([3,0,0],"悪性疾患"),new z([2,2,4],"発熱"),new z([0,1,1],"咳"),new z([1,2,4],"呼吸困難"),new z([1,0,0],"喘鳴"),new z([0,1,0],"倦怠感")];var N=n(3809),F=n(8231),K=n(7544),Y=(0,a.aZ)({name:"InputForm1",components:{ButtonComponent:F.Z},setup(){const e=(0,K.Ny)(location.search),t=(0,q.qj)({age:0,sex:0,height:0,weight:0,ageType:0,bmi:0}),n=(0,q.iH)([0,0,0,0,0,0,0,0,0,0]),a=()=>{t.ageType=H.AgeType(t.age)},l=()=>{let a="";if(a=H.checkValue({n:t.age,min:12,max:150,name:"age"}),""==a&&(a=H.checkValue({n:t.height,min:1,max:250,name:"height"})),""==a&&(a=H.checkValue({n:t.weight,min:1,max:199,name:"weight"})),""!=a)alert(a);else{t.bmi=H.BMI(t.height,t.weight);let a=H.Point(M,{age:t.age,ageType:t.ageType,height:t.height,weight:t.weight,sex:t.sex,riskVals:n.value});if(console.log(a),H.judge(t.ageType,a)){let e=window.confirm("高いスコア("+a+") : 表示されるページの印刷、およびFaxをお願いします");e&&o(a)}else{let t=window.confirm("低いスコア("+a+") : 次の入力フォームへ進んで下さい");t&&N.Z.push({name:"TitleInformation2",query:{type:e}})}}},o=a=>{let l=new Array(n.value.length);for(let e=0;e<M.length;e++)M[e].isShow(t.ageType)?1==n.value[e]?l[e]="&#9675":l[e]="":l[e]="―";N.Z.push({name:"PrintView1",query:{type:e},params:{age:t.age,sex:H.formatSex(t.sex),ills:l,bmi:Math.floor(10*t.bmi)/10,score:a.toString(),ageType:H.formatAgeType(t.ageType),cutoff:H.formatCutoff(t.ageType)}})},s=[{text:"完了",func:l,color:"btn-primary fs-2"}];return{val:t,riskVals:n,buttonContent:s,setAgeType:a,risks:M,typeName:e}}}),O=n(89);const W=(0,O.Z)(Y,[["render",P]]);var E=W}}]);
//# sourceMappingURL=909.d4207dd5.js.map