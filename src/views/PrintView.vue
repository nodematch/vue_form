<template>
  <div class="page">
    <!-- Head -->
    <div class="fontTitle center">コロナ酸素需要予測患者 紹介FAX</div>
    <div class="left fontL">宛先&emsp;あま市民病院院長 梅屋 崇</div>
    <div class="right">FAX: 052-462-0655 （受付時間 : 終日）</div>
    <div class="left">
      &emsp;初期治療選択フローに基づき、下記患者の治療をご検討ください。
    </div>
    <table class="step-2b">
      <tr>
        <td class="center">
          <b class="fontL">太字枠を記入 </b>
        </td>
        <td class="box right">
          &emsp;&emsp;&emsp;&emsp;年&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;日
        </td>
      </tr>
    </table>
    <!-- INPUT_1 -->
    <table class="lineThick wide" border="1">
      <tr>
        <td rowspan="2">医療機関名称</td>
        <td rowspan="2">
          <p>TEL</p>
          <p>FAX</p>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td>担当医師名</td>
        <td>所在地</td>
      </tr>
    </table>
    <!-- INPUT_2 -->
    <table class="lineThick wide" border="1">
      <tr>
        <td rowspan="2">
          <div>(フリガナ)</div>
          <p>患者氏名</p>
        </td>
        <td>
          <div class="row">
            <div>年齢</div>
            <div class="fontL">{{ age }}</div>
            <div>性別</div>
            <div class="fontL">{{ sex }}</div>
          </div>
        </td>
      </tr>
      <tr>
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
    <table class="lineThick wide" border="1">
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
          (*)eGFR&emsp;&emsp;&emsp;&emsp;血清Cr&emsp;&emsp;&emsp;&emsp;検査日
        </td>
      </tr>
    </table>
    <table class="even">
      <tr>
        <td></td>
        <td>*パキロビッドパックでは必須</td>
      </tr>
    </table>

    <!-- Input_3 -->
    <table class="layout">
      <tr>
        <td>
          <!-- Input_3.1 -->
          <div class="center">適応外項目がないか確認（レ点）</div>
          <table class="half lineThick step-2" border="1">
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
            <tr>
              <td>
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
          <div class="center">備考 : その他リスク因子等</div>
          <table class="half lineThick">
            <tr class="textArea">
              <td></td>
            </tr>
          </table>
        </td>
        <td>
          <!-- Input_3.3 -->
          <p class="center">重症化予測スコア（COVIREGI-JPの解析）</p>
          <table class="half lineNormal even" border="1">
            <tr>
              <td class="center">年代&emsp;(カットオフ値)</td>
              <td class="center">スコア</td>
            </tr>
            <tr>
              <td class="center">{{ ageType }}&emsp;&emsp;({{ cutoff }})</td>
              <td class="center">{{ score }}</td>
              <!-- <td class="center">{{ score }}</td> -->
            </tr>
          </table>
          <!-- Input_3.4 -->
          <p class="center">
            スコア詳細（&#9675; : 症状あり、&emsp;― : 症状なし）
          </p>
          <table class="half lineNormal step-4" border="1">
            <tr>
              <td>BMI</td>
              <td class="center">{{ bmi }}</td>
              <td>うっ血性心不全</td>
              <td class="center" v-html="ills[0]"></td>
            </tr>
            <tr>
              <td>脳血管疾患</td>
              <td class="center" v-html="ills[1]"></td>
              <td>糖尿病</td>
              <td class="center" v-html="ills[2]"></td>
            </tr>
            <tr>
              <td>高血圧</td>
              <td class="center" v-html="ills[3]"></td>
              <td>悪性疾患</td>
              <td class="center" v-html="ills[4]"></td>
            </tr>
            <tr>
              <td>発熱</td>
              <td class="center" v-html="ills[5]"></td>
              <td>咳</td>
              <td class="center" v-html="ills[6]"></td>
            </tr>
            <tr>
              <td>呼吸困難</td>
              <td class="center" v-html="ills[7]"></td>
              <td>喘鳴</td>
              <td class="center" v-html="ills[8]"></td>
            </tr>
            <tr>
              <td>倦怠感</td>
              <td class="center" v-html="ills[9]"></td>
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
    <p>
      <b class="fontL">回答</b>&emsp;&emsp;1. 受診予定（予約日
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）&emsp;&emsp;2.
      検討中&emsp;&emsp;&emsp;3. 不可（理由
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;）
    </p>
    <div class="right">
      回答医師（&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;）&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      年&emsp;&emsp;&emsp;&emsp;&emsp;月&emsp;&emsp;&emsp;&emsp;&emsp;日&emsp;
    </div>
    <p class="right">
      今後ともよろしくお願い申し上げます。&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;あま市民病院
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrintView",
  setup() {
    console.log(window.devicePixelRatio);
  },
  props: {
    age: {
      type: Number,
      default: null,
    },
    sex: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      default: null,
    },
    ageType: {
      type: String,
      default: "",
    },
    bmi: {
      type: Number,
      default: null,
    },
    ills: {
      type: Array,
      default: new Array<string>("", "", "", "", "", "", "", "", "", ""),
    },
    cutoff: {
      type: Number,
      default: null,
    },
  },
});
</script>

<style scoped>
@import "@/css/print_1024px.css";
</style>
