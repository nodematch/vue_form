<template>
  <help-input @evT="infs = $event" @evD="date = $event" @evAll="date = $event.dateArray; infs = $event.textArray"/>
  <div class="page">
    <!-- Head -->
    <div class="fontTitle center">コロナ重症化リスク患者 紹介FAX</div>
    <div class="left fontL">宛先&emsp;あま市民病院院長 梅屋 崇</div>
    <div class="right">FAX: 052-462-0655 （受付時間 : 終日）</div>
    <div class="left">
      &emsp;酸素需要予測スコアに基づき、下記患者の治療をご検討ください。
    </div>
    <table class="step-2b">
      <tr>
        <td class="center">
          <b class="fontL">太字枠を記入 </b>
        </td>
        <td class="box right">
          <table>
            <tr class="yymmdd">
              <td>{{ date[0] }}</td>
              <td>年</td>
              <td>{{ date[1] }}</td>
              <td>月</td>
              <td>{{ date[2] }}</td>
              <td>日</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!-- INPUT_1 -->
    <table class="lineThick wide" border="1">
      <tr>
        <td rowspan="2">医療機関名称&emsp;{{ infs[0] }}</td>
        <td rowspan="2">
          <p>TEL&emsp;{{ infs[3] }}</p>
          <p>FAX&emsp;{{ infs[4] }}</p>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td>担当医師名&emsp;{{ infs[1] }}</td>
        <td>所在地&emsp;{{ infs[2] }}</td>
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
            <div class="fontL"></div>
            <div>性別</div>
            <div class="fontL"></div>
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

    <!-- Input_3 -->
    <table class="layout">
      <tr>
        <td>
          <!-- Input_3.1-2 -->
          <div class="center">重症化リスク</div>
          <table class="half lineNormal step-2" border="1">
            <tr v-for="item in riskL" :key="item">
              <td>{{ item }}</td>
            </tr>
          </table>
          <div class="center">重症化リスク（特に重いもの）</div>
          <table class="half lineNormal step-2" border="1">
            <tr v-for="item in riskH" :key="item">
              <td>{{ item }}</td>
            </tr>
          </table>
        </td>
        <td>
          <!-- Input_3.3 -->
          <div>*パキロビッドパックでは必須</div>
          <br />
          <p class="center">適応外項目がないか確認（レ点）</p>
          <table class="half lineThick step-2" border="1">
            <tr>
              <td>SARS-Co2感染を確認、発症している</td>
              <td></td>
            </tr>
            <tr>
              <td>酸素が必要でない（SpO2: 93以上）</td>
              <td></td>
            </tr>
            <tr class="h10">
              <td class="heightL">
                ゼビュディ、パキロビッドパック、レムデジビルの成分に対して重い過敏症の既往がない
              </td>
              <td></td>
            </tr>
            <tr>
              <td>成人または、12歳以上40kg以上の小児</td>
              <td></td>
            </tr>
          </table>
          <p class="center">スクリーニング推奨薬 ({{ typeName }})</p>
          <table class="half lineNormal step-2a" border="1">
            <tr>
              <td class="text-center">{{ medicine }}</td>
            </tr>
            <tr>
              <td>代替薬 : {{ addition }}</td>
            </tr>
          </table>
          <br />
        </td>
      </tr>
    </table>
    <br />
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
import { questionSet, NameOfType } from "@/store/questionnaire.summary";
import { defineComponent, ref } from "vue";
import HelpInput from "@/components/HelpInput.vue";

export default defineComponent({
  name: "PrintView2",
  components: {
    HelpInput,
  },
  props: {
    resultNumber: {
      type: Number,
      default: 2,
    },
    medicine: {
      type: String,
      default: "",
    },
    addition: {
      type: String,
      default: "",
    },
    answers: {
      type: Array,
      default: () => {
        [];
      },
    },
    riskL: {
      type: Array,
      default: () => ["", "", ""],
    },
    riskH: {
      type: Array,
      default: () => ["", ""],
    },
  },
  setup(props) {
    const typeName = NameOfType(location.search);
    const resultList = questionSet[typeName].result;
    const rslt = resultList[props.resultNumber];
    const infs = ref(["","","","",""]);
    const date = ref(["", "", ""]);

    return {
      rslt,
      typeName,
      infs,
      date,
    };
  },
});
</script>

<style scoped>
@import "@/css/print_1024px";
tr.yymmdd td {
  width: 45px;
  text-align: right;
}
</style>
