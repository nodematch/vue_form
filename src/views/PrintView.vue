<template>
  <div class="page">
    <!-- Head -->
    <table>
      <tr class="h8">
        <td class="w170 textLeft fontL">
          宛先&nbsp;:&nbsp;あま市民病院院長&emsp;&emsp;梅屋&emsp;崇
        </td>
      </tr>
      <tr class="h8">
        <td class="w170 textRight">
          FAX: 052-462-0655&nbsp;（受付時間&nbsp;:&nbsp;平日８時半～１７時）
        </td>
      </tr>
      <tr class="h3">
        <td class="w170"></td>
      </tr>
      <tr>
        <td class="w170 textRLeft">
          &nbsp;&nbsp;下記患者を、外来または入院にて、中和抗体療法（ゼビュディ）、パキロピッドパック、レムデジビル、酸素投与等、御加療お願いします。
        </td>
      </tr>
    </table>
    <table class="wide">
      <tr>
        <td class="w20"></td>
        <td class="w90">
          <b>太字枠を記入</b>
        </td>
        <td class="w20 textRight">年</td>
        <td class="w20 textRight">月</td>
        <td class="w20 textRight">日</td>
      </tr>
    </table>
    <!-- Input_1 -->
    <table class="lineThick wide">
      <tr class="h10">
        <td class="w90 textLeft line">医療機関名称</td>
        <td class="w80 textLeft line">担当医師名</td>
      </tr>
      <tr class="h8">
        <td class="w90 textLeft lineCol">所在地</td>
        <td class="w80 textLeft">TEL&nbsp;:&nbsp;</td>
      </tr>
      <tr class="h8">
        <td class="w90 textLeft lineCol"></td>
        <td class="w80 textLeft">FAX&nbsp;:&nbsp;</td>
      </tr>
    </table>
    <!-- Input_2 -->
    <table class="lineThick wide">
      <tr class="h8">
        <td class="w90 textLeft lineCol">（フリガナ）</td>
        <td class="w20 textLeft">年齢 :</td>
        <td class="w20">{{ age }}</td>
        <td class="w20 textLeft">性別 :</td>
        <td class="w20">{{ sex }}</td>
      </tr>
      <tr class="h8">
        <td class="w90 textLeft lineCol">&nbsp;患者氏名</td>
        <td colspan="4" class="w80 textLeft lineRow">生年月日&nbsp;:&nbsp;</td>
      </tr>
      <tr class="h10">
        <td colspan="5" class="w170 textLeft lineRow">住所&nbsp;:&nbsp;</td>
      </tr>
      <tr class="h10">
        <td class="w90 textLeft">携帯電話&nbsp;:&nbsp;</td>
        <td colspan="4" class="w80 textLeft">自宅電話&nbsp;:&nbsp;</td>
      </tr>
      <tr class="h10">
        <td class="w170 textLeft lineRow" colspan="5">
          発症日&nbsp;:&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SpO2&nbsp;:&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SpO2測定日&nbsp;:&nbsp;
        </td>
      </tr>
    </table>
    <!-- Input_3 -->
    <table>
      <tr>
        <td>
          <!-- Input_3.1 -->
          <div class="h5 w80 textCenter">適応外項目がないか確認</div>
          <table class="half lineThick">
            <tr class="h8">
              <td class="w70 line">SARS-Co2感染が確認されている</td>
              <td class="w10 line lineThick"></td>
            </tr>
            <tr class="h10">
              <td class="w70 line">
                発症している（COVID19感染として妥当な症状がある）
              </td>
              <td class="w10 line"></td>
            </tr>
            <tr class="h8">
              <td class="w70 line">酸素が必要でない（SpO2: 93以上）</td>
              <td class="w10 line"></td>
            </tr>
            <tr class="h10">
              <td class="w70 line">
                ゼビュディ、パキロピッドパック、レムデジビルの成分に対して重い過敏症の既往がない
              </td>
              <td class="w10 line"></td>
            </tr>
            <tr class="h8">
              <td class="w70 line">酸素が必要でない（SpO2: 93以上）</td>
              <td class="w10 line"></td>
            </tr>
          </table>
          <div class="h5 w80"></div>
          <!-- Input_3.2 -->
          <div class="h5 w80 textCenter">
            備考&nbsp;:&nbsp;その他リスク因子等
          </div>
          <table class="half lineThick">
            <tr class="textArea">
              <td class="w80 line"></td>
            </tr>
          </table>
        </td>
        <td>
          <!-- Input_3.3 -->
          <div class="h5 w80 textCenter">重症化予測スコア</div>
          <table class="half line">
            <tr class="h8">
              <td class="w40 textCenter line" colspan="2">年代</td>
              <td class="w40 textCenter line" colspan="2">スコア</td>
            </tr>
            <tr class="h10">
              <td class="w40 textCenter line" colspan="2">{{ ageType }}</td>
              <td class="w40 textCenter line" colspan="2">{{ score }}</td>
            </tr>
          </table>
          <div class="h5 w80"></div>
          <!-- Input_3.4 -->
          <table class="half line">
            <tr class="h8">
              <td class="w30 line textCenter">BMI</td>
              <td class="w10 line textCenter">{{ bmi }}</td>
              <td class="w30 line textCenter">うっ血性心不全</td>
              <td class="w10 line textCenter" v-html="ills[0]"></td>
            </tr>
            <tr class="h8">
              <td class="w30 line textCenter">脳血管疾患</td>
              <td class="w10 line textCenter" v-html="ills[1]"></td>
              <td class="w30 line textCenter">糖尿病</td>
              <td class="w10 line textCenter" v-html="ills[2]"></td>
            </tr>
            <tr class="h8">
              <td class="w30 line textCenter">高血圧</td>
              <td class="w10 line textCenter" v-html="ills[3]"></td>
              <td class="w30 line textCenter">悪性疾患</td>
              <td class="w10 line textCenter" v-html="ills[4]"></td>
            </tr>
            <tr class="h8">
              <td class="w30 line textCenter">発熱</td>
              <td class="w10 line textCenter" v-html="ills[5]"></td>
              <td class="w30 line textCenter">咳</td>
              <td class="w10 line textCenter" v-html="ills[6]"></td>
            </tr>
            <tr class="h8">
              <td class="w30 line textCenter">呼吸困難</td>
              <td class="w10 line textCenter" v-html="ills[7]"></td>
              <td class="w30 line textCenter">喘鳴</td>
              <td class="w10 line textCenter" v-html="ills[8]"></td>
            </tr>
            <tr class="h8">
              <td class="w30 line textCenter">倦怠感</td>
              <td class="w10 line textCenter" v-html="ills[9]"></td>
              <td class="w30 line textCenter"></td>
              <td class="w10 line textCenter"></td>
            </tr>
          </table>
          <div class="h5 textRight">
            &#9675; : 症状あり&emsp;&emsp;―― : 症状なし
          </div>
        </td>
      </tr>
    </table>

    <div class="h10"></div>
    <hr />
    <!-- Foot -->
    <table>
      <tr class="h8 fontL">
        <td colspan="3">あま市民病院からの回答&nbsp;:</td>
      </tr>
      <tr class="h8 textLeft">
        <td colspan="3">
          以下のようにさせていただきました。今後ともよろしくお願い申し上げます。
        </td>
      </tr>
      <tr class="h3">
        <td></td>
      </tr>
      <tr class="h10">
        <td class="w70 textCenter">
          1.受診予定（予約日&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
        <td class="w30 textCenter">2.検討中</td>
        <td class="w70 textCenter">
          3.不可（理由&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
      </tr>
      <tr class="h8">
        <td class="w70 textRight">回答医師&nbsp;:</td>
        <td class="w30"></td>
        <td class="w70 textRight">
          年&emsp;&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;&emsp;日&emsp;
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrintView",
  props: {
    age: Number,
    sex: String,
    score: Number,
    ageType: String,
    bmi: Number,
    ills: Array,
  },
});
</script>

<style scoped>
@page {
  size: A4 portrait;
  margin: 0px;
}
* {
  margin: 0px;
  padding: 0px;
  border-collapse: collapse;
  border-color: black;
}
body {
  width: 210mm;
}
.page {
  margin: 0 auto;
  page-break-after: avoid;
  box-sizing: border-box;
  padding: 15mm 20mm;
  font-size: 11px;
  background-color: white;
  position: relative;
}
table.lineThick,
td.lineThick {
  border: 1mm solid;
}
table.line,
td.line {
  border: 0.5mm solid;
}
table.lineRow,
td.lineRow {
  border-width: 0.5mm 0mm;
  border-style: solid;
}
table.lineCol,
td.lineCol {
  border-width: 0mm 0.5mm;
  border-style: solid;
}
table.half {
  width: 80mm;
  margin: 0mm 2mm;
  padding: 0mm;
}
table.wide {
  width: 170mm;
  margin: 2mm 0mm;
  padding: 0mm;
}
.w10 {
  width: 10mm;
}
.w20 {
  width: 20mm;
}
.w30 {
  width: 30mm;
}
.w40 {
  width: 40mm;
}
.w50 {
  width: 50mm;
}
.w60 {
  width: 60mm;
}
.w70 {
  width: 70mm;
}
.w80 {
  width: 80mm;
}
.w90 {
  width: 90mm;
}
.w110 {
  width: 110mm;
}
.w170 {
  width: 170mm;
}
.textLeft {
  text-align: left;
  text-indent: 1.5mm;
}
.textRight {
  text-align: right;
}
.textCenter {
  text-align: center;
}
.fontL {
  font-size: 15px;
}
.h3 {
  height: 3mm;
}
.h5 {
  height: 5mm;
}
.h10 {
  height: 10mm;
}
.h16 {
  height: 16mm;
}
.textArea {
  height: 21mm;
}
.h8 {
  height: 8mm;
}
</style>
