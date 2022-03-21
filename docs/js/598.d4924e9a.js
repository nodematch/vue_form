"use strict";(self["webpackChunksample0222"]=self["webpackChunksample0222"]||[]).push([[598],{8231:function(e,n,l){l.d(n,{Z:function(){return m}});var a=l(3396),t=l(7139);const s={class:"row justify-content-center my-1"},o=["onClick"];function i(e,n,l,i,r,c){return(0,a.wg)(),(0,a.iD)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contents,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-auto",key:e.text},[(0,a._)("button",{class:(0,t.C_)("btn m-1 "+e.color),onClick:e.func},(0,t.zw)(e.text),11,o)])))),128))])}var r=(0,a.aZ)({name:"ButtonComponent",props:{contents:Array}}),c=l(89);const u=(0,c.Z)(r,[["render",i]]);var m=u},6598:function(e,n,l){l.r(n),l.d(n,{default:function(){return W}});var a=l(3396),t=l(9242),s=l(7139);const o={class:"container"},i=(0,a._)("div",{class:"text-center m-3 fs-2"},"COVID-19 酸素需要予測のスクリーニング",-1),r=(0,a._)("div",{class:"text-center m-3 fs-6"},[(0,a._)("b",null,"day3-7"),(0,a.Uk)("(発症日はday0）かつ 18才以上")],-1),c=(0,a._)("div",{class:"text-center m-3 fs-6"},"STEP1 入力フォーム",-1),u={class:"row p-1 justify-content-center greyA"},m=(0,a._)("label",{for:"age",class:"col-6 col-form-label text-center fs-3"},"年齢",-1),f={class:"col-6"},g={class:"row p-1 justify-content-center greyA"},d=(0,a._)("label",{class:"col-6 col-form-label text-center fs-3"},"性別",-1),v={class:"form-check col-3"},p=(0,a._)("label",{class:"form-check-label fs-3",for:"female"},"女",-1),h={class:"form-check col-3"},w=(0,a._)("label",{class:"form-check-label fs-3",for:"male"},"男",-1),y={class:"row p-1 justify-content-center greyA"},b=(0,a._)("label",{for:"height",class:"col-6 col-form-label text-center fs-3"},"身長",-1),_={class:"col-6"},k={class:"row p-1 justify-content-center greyA"},x=(0,a._)("label",{for:"weight",class:"col-6 col-form-label text-center fs-3"},"体重",-1),V={class:"col-6"},A={key:0,class:"row p-1 greyB justify-content-center"},T={class:"col-6 col-form-label text-center fs-3"},C={class:"form-check col-3"},Z=["name","id","onUpdate:modelValue"],U=["for"],j={class:"form-check col-3"},H=["name","id","onUpdate:modelValue"],D=["for"],P=(0,a._)("br",null,null,-1);function B(e,n,l,B,I,S){const G=(0,a.up)("button-component");return(0,a.wg)(),(0,a.iD)("div",o,[i,r,c,(0,a._)("form",null,[(0,a._)("div",u,[m,(0,a._)("div",f,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control fs-3",maxlength:"3","onUpdate:modelValue":n[0]||(n[0]=n=>e.age=n),onChange:n[1]||(n[1]=(...n)=>e.setAgeType&&e.setAgeType(...n)),max:"150",min:"18",id:"age"},null,544),[[t.nr,e.age,void 0,{number:!0}]])])]),(0,a._)("div",g,[d,(0,a._)("div",v,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:"sex",id:"female",value:"0","onUpdate:modelValue":n[2]||(n[2]=n=>e.sex=n)},null,512),[[t.G2,e.sex]]),p]),(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:"sex",id:"male",value:"1","onUpdate:modelValue":n[3]||(n[3]=n=>e.sex=n)},null,512),[[t.G2,e.sex]]),w])]),(0,a._)("div",y,[b,(0,a._)("div",_,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control fs-3",maxlength:"3","onUpdate:modelValue":n[4]||(n[4]=n=>e.height=n),max:"299",min:"0",id:"height"},null,512),[[t.nr,e.height,void 0,{number:!0}]])])]),(0,a._)("div",k,[x,(0,a._)("div",V,[(0,a.wy)((0,a._)("input",{type:"number",class:"form-control fs-3",maxlength:"3","onUpdate:modelValue":n[5]||(n[5]=n=>e.weight=n),max:"199",min:"0",id:"weight"},null,512),[[t.nr,e.weight,void 0,{number:!0}]])])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.risks,((n,l)=>((0,a.wg)(),(0,a.iD)("div",{key:n.name},[n.isShow(e.ageType)?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("label",T,(0,s.zw)(n.name),1),(0,a._)("div",C,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:n.name,value:"1",id:"y"+n.name,"onUpdate:modelValue":n=>e.riskVals[l]=n},null,8,Z),[[t.G2,e.riskVals[l],void 0,{number:!0}]]),(0,a._)("label",{class:"form-check-label fs-3",for:"y"+n.name},"有",8,U)]),(0,a._)("div",j,[(0,a.wy)((0,a._)("input",{class:"form-check-input fs-3",type:"radio",name:n.name,value:"0",id:"n"+n.name,"onUpdate:modelValue":n=>e.riskVals[l]=n},null,8,H),[[t.G2,e.riskVals[l],void 0,{number:!0}]]),(0,a._)("label",{class:"form-check-label fs-3",for:"n"+n.name},"無",8,D)])])):(0,a.kq)("",!0)])))),128))]),P,(0,a.Wm)(G,{contents:e.buttonContent},null,8,["contents"])])}var I=l(4870),S=l(2482);class G{constructor(e,n){(0,S.Z)(this,"name",""),(0,S.Z)(this,"points",[0,0,0]),this.name=n,this.points=e}PointAtAgeType(e){return this.points[e]}isShow(e){return 0!=this.points[e]}}const M={BMI(e,n){return n/(e/100)**2},AgeType(e){return e<40?0:e<65?1:2},Point(e,n){let l=0;for(let t=0;t<e.length;t++)l+=e[t].PointAtAgeType(n.ageType)*n.riskVals[t];n.age>29&&n.age<40||n.age>49&&n.age<60?l+=1:n.age>59&&n.age<65?l+=3:n.age>74&&(l+=2),1==n.sex&&n.age<65&&(l+=1);const a=n.weight/(n.height/100)**2;return n.age<40?a>30?l+=2:a>23&&(l+=1):a>25&&(l+=2),l},judge(e,n){return 0==e&&n>5||1==e&&n>4||2==e&&n>2},checkValue(e){let n="";return"string"===typeof e.n?n="value of "+e.name+" is invalid":(e.n=e.n,(e.n<e.min||e.max<e.n)&&(n="value of "+e.name+" is invalid")),n}},z=[new G([0,0,2],"うっ血性心不全"),new G([0,0,1],"脳血管疾患"),new G([0,1,2],"糖尿病"),new G([0,0,2],"高血圧"),new G([3,0,0],"悪性疾患"),new G([2,2,4],"発熱"),new G([0,1,1],"咳"),new G([1,2,4],"呼吸困難"),new G([1,0,0],"喘鳴"),new G([0,1,0],"倦怠感")];var E={numbers(e){const n={valid:!0,msg:""};return e.forEach((e=>{"string"===typeof e.n?(n.valid=!1,n.msg="value of "+e.name+" is invalid"):(e.n=e.n,(e.n<e.min||e.max<e.n)&&(n.valid=!1,n.msg="value of "+e.name+" is invalid"))})),n}},F=l(5276),K=l(8231),O=(0,a.aZ)({name:"InputForm1",components:{ButtonComponent:K.Z},setup(){const e=(0,I.iH)(0),n=(0,I.iH)(0),l=(0,I.iH)(0),a=(0,I.iH)(0),t=(0,I.iH)([0,0,0,0,0,0,0,0,0,0]),s=(0,I.iH)(0),o=(0,I.iH)("result message here"),i=()=>{s.value=M.AgeType(e.value)},r=()=>{let i=E.numbers([{n:e.value,min:18,max:150,name:"age"},{n:l.value,min:1,max:250,name:"height"},{n:a.value,min:1,max:199,name:"weight"}]);if(i.valid){let i,r=M.Point(z,{age:e.value,ageType:s.value,height:l.value,weight:a.value,sex:n.value,riskVals:t.value});console.log(r),M.judge(s.value,r)?(o.value="高いスコア("+r+") : 表示されるページの印刷、およびFaxをお願いします",i=window.confirm(o.value),i&&c(r)):(o.value="低いスコア("+r+") : 次の入力フォームへ進んで下さい",i=window.confirm(o.value),i&&F.Z.push({name:"TitleInformation2"}))}else o.value=i.msg,alert(o.value)},c=o=>{let i=1==n.value?"男":"女",r=new Array(t.value.length);for(let e=0;e<z.length;e++)z[e].isShow(s.value)?1==t.value[e]?r[e]="&#9675":r[e]="":r[e]="―";let c="18-39",u=6;1==s.value?(c="40-64",u=5):2==s.value&&(c="65-",u=3),F.Z.push({name:"PrintView1",params:{age:e.value,sex:i,ills:r,bmi:Math.floor(10*M.BMI(l.value,a.value))/10,score:o.toString(),ageType:c,cutoff:u}})},u=[{text:"完了",func:r,color:"btn-primary fs-2"}];return{age:e,sex:n,height:l,weight:a,resultMsg:o,ageType:s,riskVals:t,buttonContent:u,setAgeType:i,risks:z}}}),Y=l(89);const q=(0,Y.Z)(O,[["render",B]]);var W=q},2482:function(e,n,l){function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}l.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=598.d4924e9a.js.map