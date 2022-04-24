<template>
  <div class="page">
    <!-- Head -->
    <div class="right">あま市民病院&emsp;TEL : 052-444-2252</div>
    <div class="right">FAX: 052-462-0655</div>
    <div class="fontTitle center">診療情報提供書</div>
    <div class="left fontL">宛先&emsp;あま市民病院 休日当番医先生</div>
    <table class="thishead" border="0">
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="4"></td>
        <td colspan="2">海部医師会急病診療所</td>
      </tr>
      <tr>
        <td>担当医師</td>
        <td><input type="text" class="inputSpace" size="20"></td>
      </tr>
      <tr>
        <td>TEL</td>
        <td>0567-25-5210</td>
      </tr>
      <tr>
        <td>FAX</td>
        <td></td>
      </tr>
    </table>
    <br />
    <table class="wide step-2a">
      <tr class="heightL">
        <td>患者氏名（カタカナ）</td>
        <td><input type="text" class="inputSpace" size="84"></td>
      </tr>
      <tr class="heightL">
        <td>生年月日</td>
        <td><input type="text" class="inputSpace" size="84"></td>
      </tr>
      <tr class="heightL">
        <td>性別</td>
        <td><span class="sel1" @click="select" id="male">&nbsp;男&nbsp;</span>・<span class="sel1" @click="select" id="female">&nbsp;女&nbsp;</span></td>
      </tr>
      <tr class="heightL">
        <td>住所（市町村）</td>
        <td>
          <span class="sel2" @click="select" id="a">あま市</span> ・ 
          <span class="sel2" @click="select" id="b">大治町</span> ・ 
          <span class="sel2" @click="select" id="c">蟹江町</span> ・ 
          <span class="sel2" @click="select" id="d">津島市</span> ・ 
          <span class="sel2" @click="select" id="e">弥富町</span> ・ 
          <span class="sel2" @click="select" id="f">愛西市</span> ・ 
          <span class="sel2" @click="select" id="g">飛島村</span> ・ 
          <span class="sel2" @click="select" id="h">その他</span>
        </td>
      </tr>
      <tr class="heightL">
        <td>患者連絡先（電話）</td>
        <td><span><input type="text" class="inputSpace" size="68"></span>&emsp;(<span class="sel3" id="him"  @click="select">本人</span> ・ <span class="sel3" id="fam"  @click="select">その他</span>)</td>
      </tr>
      <tr>
        <td>診断名</td>
        <td class="row_2"><textarea class="inputSpace" rows="3" cols="87"></textarea></td>
      </tr>
      <tr>
        <td>既往歴</td>
        <td class="row_3"><textarea class="inputSpace" rows="4" cols="87"></textarea></td>
      </tr>
      <tr>
        <td>紹介目的</td>
        <td class="row_2"><textarea class="inputSpace" rows="3" cols="87"></textarea></td>
      </tr>
      <tr>
        <td>臨床症状・経過</td>
        <td class="row_5"><textarea class="inputSpace" rows="9" cols="87"></textarea></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "PrintInput",
  setup(){
    const a = "a";
    const select = (ev: Event) =>{
      let target = ev.target as HTMLElement
      console.log(target.id)
      let others;
      if (target.id == "male"){
        others = ["female"]
      }else if (target.id == "female"){
        others = ["male"]
      }
      else if (target.id == "him"){
        others = ["fam"]
      }
      else if (target.id == "fam"){
        others = ["him"]
      } else {
        others = ["a", "b", "c", "d", "e", "f", "g", "h"]
        others = others.filter(element => element != target.id);
      }
      for (let item of others) {
        let span = document.getElementById(item)
        if(span){
          span.style.borderWidth = "0px";
          target.style.borderWidth = "2px"
        }
      }
    }
    return {
      a,
      select,
    }
  }
})
</script>

<style scoped>
@import "@/css/print_1024px.css";
table.thishead {
  border: 0px none;
  table-layout: fixed;
  width: 100%;
  margin: 5px auto;
  padding: 0mm;
}
table.thishead tr:nth-child(1) td {
  height: 2px;
}
table.thishead td:nth-child(1) {
  width: 70%;
  height: 30px;
}
table.thishead td:nth-child(2) {
  width:10%;
  height: 30px;
}
table.thishead td:nth-child(3) {
  width:20%;
  height: 30px;
}
.row_2 {
  height: 120px;
}
.row_3 {
  height: 180px;
}
.row_4 {
  height: 240px;
}
.row_5 {
  height: 300px;
}
.inputSpace {
  border:solid 0px;
  font-size: 18px;
  line-height: 30px;
}
.sel1 {
  border-radius:20px / 20px;
  border: black solid 0px;
}
.sel2 {
  border-radius:40px / 20px;
  border: black solid 0px;
}
.sel3 {
  border-radius:30px / 20px;
  border: black solid 0px;
}
</style>