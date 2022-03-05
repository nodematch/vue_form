<template>
  <div class="page">
    <!-- Head -->
    <div class="h_L f_Title Left">
      宛先&nbsp;:&nbsp;あま市民病院院長&emsp;&emsp;梅屋&emsp;崇
    </div>
    <div class="h_M f_M Right">
      FAX: 052-462-0655&nbsp;（受付時間&nbsp;:&nbsp;平日８時半～１７時）
    </div>
    <div class="h_S"></div>
    <div class="f_M Left h_M">
      酸素需要予測スコアに基づき、下記患者の治療をご検討ください。
    </div>
    <div class="h_L"></div>

    <table class="wide">
      <tr class="h_S">
        <td class="Right">
          <b class="f_L">太字枠を記入</b>
        </td>
        <td class="Right">
          <b>年&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;日</b>
        </td>
      </tr>
    </table>
    <!-- INPUT_1 -->
    <table class="thick wide Large" border="1">
      <tr>
        <td>医療機関名称</td>
        <td>担当医師名</td>
      </tr>
      <tr class="h_M">
        <td rowspan="2">
          <table class="v2">
            <tr>
              <td>所在地</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </td>
        <td rowspan="2">
          <table class="v2">
            <tr>
              <td>TEL&nbsp;:&nbsp;</td>
            </tr>
            <tr>
              <td>FAX&nbsp;:&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr class="h_M"></tr>
    </table>
    <!-- INPUT_2 -->
    <table class="thick wide Large" border="1">
      <tr class="h_M">
        <td rowspan="2">
          <table class="v2">
            <tr>
              <td>（フリガナ）</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;患者氏名</td>
            </tr>
          </table>
        </td>
        <td>
          <table class="w20">
            <tr>
              <td>年齢</td>
              <td>{{ age }}</td>
              <td>性別</td>
              <td>{{ sex }}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr class="h_M">
        <td>生年月日</td>
      </tr>
      <tr>
        <td colspan="2">住所</td>
      </tr>
      <tr>
        <td>携帯電話 :</td>
        <td>自宅電話 :</td>
      </tr>
    </table>
    <!-- INPUT_3 -->
    <table class="thick wide Large" border="1">
      <tr>
        <td>コロナ発症日</td>
        <td>コロナ診断日</td>
      </tr>
      <tr>
        <td>
          SpO2&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;（測定日 :
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
        <td>妊娠&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;有&emsp;・&emsp;無</td>
      </tr>
      <tr>
        <td>コロナワクチン接種回数</td>
        <td>最後の接種日</td>
      </tr>
      <tr>
        <td>
          （以前のコロナ感染歴&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;年&emsp;&emsp;&emsp;&emsp;月）
        </td>
        <td>
          （eGFR :&emsp;&emsp;&emsp;&emsp;血清Cr :&emsp;&emsp;&emsp;&emsp;
          検査日 :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
      </tr>
    </table>

    <!-- Input_3 -->
    <table class="wide">
      <tr>
        <td>
          <!-- Input_3.1 -->
          <div class="f_S Center">適応外項目がないか確認（レ点）</div>
          <table class="half thick _7-1 Middle" border="1">
            <tr>
              <td>SARS-Co2感染を確認</td>
              <td></td>
            </tr>
            <tr>
              <td>発症している</td>
              <td></td>
            </tr>
            <tr>
              <td>酸素が必要でない（SpO2: 93以上）</td>
              <td></td>
            </tr>
            <tr class="h10">
              <td class="h_L">
                ゼビュディ、パキロピッドパック、レムデジビルの成分に対して重い過敏症の既往がない
              </td>
              <td></td>
            </tr>
            <tr>
              <td>成人または、12歳以上40kg以上の小児</td>
              <td></td>
            </tr>
          </table>
          <div class="h_S"></div>
          <div class="h_S Center">該当する重症化リスク</div>
          <table class="half normal Middle" border="1">
            <tr>
              <td class="Center">りすく名</td>
            </tr>
          </table>
        </td>
        <td>
          <!-- Input_3.3 -->
          <div class="h_S Center">重症化リスク一覧</div>
          <table class="half normal Small" border="1">
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
            <tr>
              <td>A</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <div class="h_L"></div>
    <div class="h_S"></div>
    <hr />
    <!-- Foot -->
    <div class="h_M f_L Left">回答 :</div>
    <table class="_7-3-7">
      <tr class="h_L">
        <td class="f_M">
          1.受診予定（予約日&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
        <td class="f_M">2.検討中</td>
        <td class="f_M">
          3.不可（理由&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
      </tr>
    </table>
    <div class="h_L Right f_M">
      回答医師（&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;）&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      年&emsp;&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;&emsp;日&emsp;
    </div>
    <div class="h_M f_M Right">
      今後ともよろしくお願い申し上げます。&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;あま市民病院
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrintComponentv2",
  props: {
    age: {
      type: Number,
      default: 18,
    },
    sex: {
      type: String,
      default: "例",
    },
    score: {
      type: Number,
      default: 6,
    },
    ageType: {
      type: String,
      default: "sample",
    },
    bmi: {
      type: Number,
      default: 22,
    },
    ills: {
      type: Array,
      default: new Array<string>("", "", "", "", "", "", "", "", "", ""),
    },
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
  padding: 20mm 20mm;
  font-size: 11px;
  background-color: white;
  position: relative;
  width: 210mm;
}
table.thick {
  border: 1mm solid;
}
table.normal {
  border: 0.5mm solid;
}
table.half {
  width: 80mm;
  margin: 1.5mm auto;
  padding: 0mm;
}
table.wide {
  width: 170mm;
  margin: 2mm 0mm;
  padding: 0mm;
}
table._4-4 td {
  width: 40mm;
}
table._3-1-3-1 td:nth-child(odd) {
  width: 30mm;
}
table._3-1-3-1 td:nth-child(even) {
  width: 10mm;
}
table._7-1 td:nth-child(odd) {
  width: 70mm;
}
table._7-1 td:nth-child(even) {
  width: 10mm;
}
table._7-3-7 td:nth-child(odd) {
  width: 70mm;
}
table._7-3-7 td:nth-child(even) {
  width: 30mm;
}
.textArea {
  height: 21mm !important;
}
td {
  text-align: left;
  text-indent: 1.5mm;
}
table.Large tr {
  height: 10mm;
}
table.Middle tr {
  height: 8mm;
}
table.Small tr {
  height: 5mm;
}
table.Small td {
  font-size: 9px;
}
table.wide td {
  width: 85mm;
}
table.v2 tr {
  height: 8mm;
}
table.w20 td {
  width: 20mm;
}
/* Height */
.h_L {
  height: 10mm !important;
}
.h_M {
  height: 8mm !important;
}
.h_S {
  height: 5mm !important;
}
/* Text-Align */
.Left {
  text-align: left !important;
  text-indent: 1.5mm;
}
.Center {
  text-align: center !important;
}
.Right {
  text-align: right !important;
}
.Left-Left {
  text-align: left;
  text-indent: 5mm;
}
/* Font-Size */
.f_L {
  font-size: 16px;
}
.f_M {
  font-size: 12px;
}
.f_S {
  font-size: 8px;
}
.f_Title {
  font-size: 20px;
}
</style>
