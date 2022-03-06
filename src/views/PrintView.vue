<template>
  <div class="page">
    <!-- Head -->
    <div class="h_L f_Title Left">
      宛先 :&emsp;&emsp;あま市民病院院長&emsp;&emsp;梅屋&emsp;崇
    </div>
    <div class="h_M f_M Right">
      FAX: 052-462-0655&nbsp;（受付時間&nbsp;:&nbsp;終日）
    </div>
    <div class="f_M Left h_L">
      酸素需要予測スコアに基づき、下記患者の治療をご検討ください。
    </div>

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
      <tr class="h_M">
        <td rowspan="2">
          <table class="v2">
            <tr>
              <td>医療機関名称</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </td>
        <td rowspan="2">
          <table class="v2">
            <tr>
              <td>TEL</td>
            </tr>
            <tr>
              <td>FAX</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr class="h_M"></tr>
      <tr>
        <td>担当医師名</td>
        <td>所在地</td>
      </tr>
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
              <td class="f_L">{{ age }}</td>
              <td>性別</td>
              <td class="f_L">{{ sex }}</td>
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
        <td>携帯電話</td>
        <td>自宅電話</td>
      </tr>
    </table>
    <!-- INPUT_3 -->
    <table class="thick wide Large" border="1">
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
          <div class="h_S Center">適応外項目がないか確認（レ点）</div>
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
          <!-- Input_3.2 -->
          <div class="h_S Center">備考 : その他リスク因子等</div>
          <table class="half thick">
            <tr class="textArea">
              <td class="w80 line"></td>
            </tr>
          </table>
        </td>
        <td>
          <!-- Input_3.3 -->
          <div class="h_S Center">重症化予測スコア（COVIREGI-JPの解析）</div>
          <table class="half normal _4-4 Middle" border="1">
            <tr>
              <td class="Center">年代&emsp;(カットオフ値)</td>
              <td class="Center">スコア</td>
            </tr>
            <tr>
              <td class="Center">{{ ageType }}&emsp;&emsp;({{ cutoff }})</td>
              <td class="Center f_L">{{ score }}</td>
              <!-- <td class="Center">{{ score }}</td> -->
            </tr>
          </table>
          <!-- Input_3.4 -->
          <div class="h_S Center">
            スコア詳細（&#9675; : 症状あり、&emsp;― : 症状なし）
          </div>
          <table class="half normal _3-1-3-1 Middle" border="1">
            <tr>
              <td>BMI</td>
              <td class="Center f_L">{{ bmi }}</td>
              <td>うっ血性心不全</td>
              <td class="Center f_L" v-html="ills[0]"></td>
            </tr>
            <tr>
              <td>脳血管疾患</td>
              <td class="Center f_L" v-html="ills[1]"></td>
              <td>糖尿病</td>
              <td class="Center f_L" v-html="ills[2]"></td>
            </tr>
            <tr>
              <td>高血圧</td>
              <td class="Center f_L" v-html="ills[3]"></td>
              <td>悪性疾患</td>
              <td class="Center f_L" v-html="ills[4]"></td>
            </tr>
            <tr>
              <td>発熱</td>
              <td class="Center f_L" v-html="ills[5]"></td>
              <td>咳</td>
              <td class="Center f_L" v-html="ills[6]"></td>
            </tr>
            <tr>
              <td>呼吸困難</td>
              <td class="Center f_L" v-html="ills[7]"></td>
              <td>喘鳴</td>
              <td class="Center f_L" v-html="ills[8]"></td>
            </tr>
            <tr>
              <td>倦怠感</td>
              <td class="Center f_L" v-html="ills[9]"></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <!-- <div class="Left-Left">
            Yamada G,et al.Predicting respriatory failure for COVID-19
          </div>
          <div class="Left-Left">
            patients in Japan: a simple clinical score for evaluating the
          </div>
          <div class="Left-Left">
            need for hospitalization. Epidemiol Infect 2021
          </div> -->
        </td>
      </tr>
    </table>
    <div class="h_S"></div>
    <hr />
    <!-- Foot -->
    <table class="_2-7-2-7">
      <tr class="h_L">
        <td>
          <b class="f_L">回答</b>
        </td>
        <td class="f_M">
          1. 受診予定（予約日&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
        </td>
        <td class="f_M">2. 検討中</td>
        <td class="f_M">
          3. 不可（理由&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
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
table.thick {
  border: 1mm solid;
}
table.normal {
  border: 0.5mm solid;
}
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
  width: 75mm;
}
table._7-1 td:nth-child(even) {
  width: 15mm;
}
table._2-7-2-7 td:nth-child(odd) {
  width: 20mm;
}
table._2-7-2-7 td:nth-child(even) {
  width: 75mm;
}
.textArea {
  height: 24mm !important;
}
td {
  text-align: left;
  text-indent: 1.5mm;
}
table.Large tr {
  height: 11mm;
}
table.Middle tr {
  height: 8.5mm;
}
table.wide td {
  width: 95mm;
}
table.v2 tr {
  height: 8mm;
}
table.w20 td {
  width: 20mm;
}
table.w20 tr {
  height: 8mm;
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
  font-size: 10px;
}
.f_Title {
  font-size: 20px;
}
</style>
