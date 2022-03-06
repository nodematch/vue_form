<template>
  <div class="page">
    <!-- Head -->
    <div class="tall fontTitle Left">
      宛先 :&emsp;&emsp;あま市民病院院長&emsp;&emsp;梅屋&emsp;崇
    </div>
    <div class="middle fontL Right">FAX: 052-462-0655 （受付時間 : 終日）</div>
    <div class="fontL Left tall">
      初期治療選択フローに基づき、下記患者の治療をご検討ください。
    </div>

    <table class="wide">
      <tr class="Small">
        <td class="Right">
          <b class="fontL">太字枠を記入</b>
        </td>
        <td class="Right">
          <b>年&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;日</b>
        </td>
      </tr>
    </table>
    <!-- INPUT_1 -->
    <table class="thick wide tall" border="1">
      <tr class="middle">
        <td rowspan="2">
          <table class="middle">
            <tr>
              <td>医療機関名称</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </td>
        <td rowspan="2">
          <table class="middle">
            <tr>
              <td>TEL</td>
            </tr>
            <tr>
              <td>FAX</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr class="middle"></tr>
      <tr>
        <td>担当医師名</td>
        <td>所在地</td>
      </tr>
    </table>
    <!-- INPUT_2 -->
    <table class="thick wide tall" border="1">
      <tr class="middle">
        <td rowspan="2">
          <table class="middle">
            <tr>
              <td>（フリガナ）</td>
            </tr>
            <tr>
              <td>&nbsp;&nbsp;患者氏名</td>
            </tr>
          </table>
        </td>
        <td>
          <table class="_2">
            <tr>
              <td>年齢</td>
              <td class="fontL">{{ age }}</td>
              <td>性別</td>
              <td class="fontL">{{ sex }}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr class="middle">
        <td>生年月日</td>
      </tr>
      <tr>
        <td colspan="2">住所</td>
      </tr>
      <tr>
        <td>携帯電話</td>
        <td>自宅電話</td>
      </tr>
    </table>
    <!-- INPUT_3 -->
    <table class="thick wide tall" border="1">
      <tr>
        <td>コロナ発症日</td>
        <td>コロナ診断日</td>
      </tr>
      <tr>
        <td>SpO2&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;測定日</td>
        <td>妊娠&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;有&emsp;・&emsp;無</td>
      </tr>
      <tr>
        <td>コロナワクチン接種回数</td>
        <td>
          以前のコロナ感染歴&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;年&emsp;&emsp;&emsp;&emsp;月
        </td>
      </tr>
      <tr>
        <td>最後の接種日</td>
        <td>
          eGFR&emsp;&emsp;&emsp;&emsp;血清Cr&emsp;&emsp;&emsp;&emsp;検査日
        </td>
      </tr>
    </table>

    <!-- Input_3 -->
    <table class="wide">
      <tr>
        <td>
          <!-- Input_3.1 -->
          <div class="Small Center">適応外項目がないか確認（レ点）</div>
          <table class="half thick _6-1 middle" border="1">
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
              <td class="tall">
                ゼビュディ、パキロピッドパック、レムデジビルの成分に対して重い過敏症の既往がない
              </td>
              <td></td>
            </tr>
            <tr>
              <td>成人または、12歳以上40kg以上の小児</td>
              <td></td>
            </tr>
          </table>
          <div class="Small Center">備考</div>
          <table class="half normal middle _4-4" border="1">
            <tr>
              <td class="Center">スクリーニング推奨薬</td>
              <td class="Center"></td>
            </tr>
            <tr>
              <td class="Center">クリニック希望薬</td>
              <td class="Center"></td>
            </tr>
          </table>
          <div class="tall fontS Right">
            パピロキット推奨の場合はお薬手帳を持参させて下さい&emsp;
          </div>
          <div class="middle Center">該当する重症化リスク（レ点）</div>
        </td>
        <td>
          <!-- Input_3.3 -->
          <table class="half normal short _9-1" border="1">
            <div v-for="item in risks" :key="item.name">
              <tr>
                <td class="fontS">{{ item.text }}</td>
                <td></td>
              </tr>
            </div>
          </table>
        </td>
      </tr>
    </table>
    <div class="Small"></div>
    <hr />
    <!-- Foot -->
    <table class="_2-7-2-7">
      <tr class="tall">
        <td>
          <b class="fontL">回答</b>
        </td>
        <td class="fontL">
          1. 受診予定（予約日&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
        <td class="fontL">2. 検討中</td>
        <td class="fontL">
          3. 不可（理由&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
      </tr>
    </table>
    <div class="tall Right fontL">
      回答医師（&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;）&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      年&emsp;&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;&emsp;日&emsp;
    </div>
    <div class="middle fontL Right">
      今後ともよろしくお願い申し上げます。&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;あま市民病院
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { risks } from "@/store/questionnaire.model";

export default defineComponent({
  name: "PrintView",
  props: {
    age: {
      type: Number,
      default: 999,
    },
    sex: {
      type: String,
      default: "例",
    },
    score: {
      type: Number,
      default: 99,
    },
    ageType: {
      type: String,
      default: "sample",
    },
    bmi: {
      type: Number,
      default: 99,
    },
    ills: {
      type: Array,
      default: new Array<string>("&#9675", "―", "", "", "", "", "", "", "", ""),
    },
    cutoff: {
      type: Number,
      default: 99,
    },
  },
  setup() {
    return {
      risks,
    };
  },
});
</script>

<style scoped>
@page {
  size: 210mm 297mm portrait;
  margin: 0mm;
  overflow: visible;
}
* {
  margin: 0mm;
  padding: 0mm;
  border-collapse: collapse;
  border-color: black;
}

.page {
  margin: 0 auto;
  padding: 0mm;
  page-break-after: avoid;
  box-sizing: border-box;
  /* ver,hor */
  padding: 5mm 10mm;
  font-size: 12px;
  width: 210mm;
  height: 297mm;
  background-color: cornsilk;
}
body {
  width: 210mm;
  height: 297mm;
  padding: 0mm;
  margin: 0mm;
}
html {
  padding: 0mm;
}
/* table-line */
table.thick {
  border: 1mm solid;
}
table.normal {
  border: 0.5mm solid;
}
/* table-size */
table.half {
  width: 90mm;
  margin: 1.5mm auto;
  padding: 0mm;
}
table.wide {
  width: 190mm;
  margin: 2mm auto;
  padding: 0mm;
}
table.wide td {
  width: 95mm;
}
/* td-width */
table._2 td {
  width: 20mm;
}
table._4-4 td {
  width: 45mm;
}
table._3-1-3-1 td:nth-child(odd) {
  width: 35mm;
}
table._3-1-3-1 td:nth-child(even) {
  width: 10mm;
}
table._7-1 td:nth-child(odd) {
  width: 80mm;
}
table._7-1 td:nth-child(even) {
  width: 10mm;
}
table._2-7-2-7 td:nth-child(odd) {
  width: 20mm;
}
table._2-7-2-7 td:nth-child(even) {
  width: 75mm;
}
table._9-1 td:nth-child(odd) {
  width: 90mm;
}
table._9-1 td:nth-child(even) {
  width: 10mm;
}
table._6-1 td:nth-child(odd) {
  width: 66mm;
}
table._6-1 td:nth-child(even) {
  width: 14mm;
}
td {
  text-align: left;
  text-indent: 1.5mm;
}
/* Height */
table.tall tr {
  height: 10mm;
}
table.middle tr {
  height: 8mm;
}
table.short tr {
  height: 5mm;
}
div.tall {
  height: 10mm !important;
}
div.middle {
  height: 8mm !important;
}
div.Small {
  height: 5mm !important;
}
.textArea {
  height: 24mm !important;
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
/* Font-Size */
.fontL {
  font-size: 16px;
}
.fontL {
  font-size: 12px;
}
.fontS {
  font-size: 10px;
}
.fontTitle {
  font-size: 20px;
}
</style>
