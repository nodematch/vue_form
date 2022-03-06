<template>
  <div class="container">
    <div class="head">
      <p>{{ head[0] }}</p>
      <p>{{ head[1] }}</p>
      <p class="text-right">{{ head[2] }}</p>
    </div>
    <div class="title">
      <p>{{ title[0] }}</p>
      <p>{{ title[1] }}</p>
    </div>
    <table class="msg table-borderless">
      <tr>
        <td class="col-2 text-center">特徴</td>
        <td>{{ msg[0] }}</td>
      </tr>
      <tr>
        <td class="col-2 text-center">対象</td>
        <td>{{ msg[1] }}</td>
      </tr>
      <tr>
        <td class="col-2 text-center">参考文献</td>
        <td>{{ msg[2] }}</td>
      </tr>
    </table>
    <div class="text-center">
      <button class="btn block-center" @click="onclick">
        治療薬選択フローシートへ
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleInfv2",
  setup() {
    const onclick = () => {
      window.location.href =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=uDKHwHaraE2cVKdNIWbiGjagFg6-k9hEl_quC62v_dNUM1BXN1BJRTFWQUw4WU9RMkpZUEhBRUhPOS4u";
    };
    const head = [
      "あま市・大治町医療機関の患者",
      "発症早期における治療選択フロー第１版",
      "あま市民病院ICT作成（2022年3月7日）",
    ];
    const title = [
      "STEP 2",
      "重症化リスク(+) COVID-19早期治療薬スクリーニング（あま市民病院ICT）",
    ];
    const msg = [
      "ワクチン、リスク因子、症状、発症日からの日数、投与までのタイムラグを考慮。適応のある患者に、より多くより早く、初期治療薬投与を目的とするため、発症から日が浅く症状が軽い場合は、内服薬を優先。",
      "発症から8日目以内（day 7 以内）、重症化リスク（＋）、発症日、SpO2が必要",
      "Terada M. et.al. Risk factors for severity on admission and the disease progression during hospitalization in a large cohort of patients with COVID-19 in Japan 国立国際医療センター、COVID-19 レジストリ研究解析結果",
    ];
    return {
      onclick,
      head,
      title,
      msg,
    };
  },
});
</script>

<style scoped>
@import "@/bootstrap.css";

.head {
  margin: 1em 0em;
}
.head p {
  font-size: 1.5em;
}
.title {
  background-color: rgb(156, 156, 240);
  margin: 0;
  padding: 0.3em 0.2em;
}
.title p {
  font-size: 1.2em;
  margin: 0.1em;
}
.msg {
  margin: 0;
  background-color: rgb(194, 211, 248);
}
.msg td {
  font-size: 1em;
  text-align: left;
  padding: 0.2em 1em;
}
.btn {
  margin: 1em;
}
</style>
