<template>
  <div class="container">
    <div class="fs-3 p-2 title">
      <div>{{ title[0] }}</div>
      <div>{{ title[1] }}</div>
    </div>
    <div class="msg fs-5">
      <div class="row p-1">
        <div class="col-2">
          <div class="text-center">特徴</div>
        </div>
        <div class="col-10">
          {{ msg[0] }}
        </div>
      </div>
      <div class="row p-1">
        <div class="col-2">
          <div class="text-center">対象</div>
        </div>
        <div class="col-10">
          {{ msg[1] }}
        </div>
      </div>
      <div class="row p-1">
        <div class="col-2">
          <div class="text-center fs-6">参考文献</div>
        </div>
        <div class="col-10 fs-6">
          {{ msg[2] }}
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-success m-2" @click="onclick">
        入力フォームへ進む
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
      "重症化リスク(+) COVID-19早期治療薬スクリーニング",
    ];
    const msg = [
      "ワクチン、リスク因子、症状、発症日からの日数、投与までのタイムラグを考慮。適応のある患者に、より多くより早く、初期治療薬投与を目的とするため、発症から日が浅く症状が軽い場合は、内服薬を優先。",
      "day 7 以内（発症から8日目以内）、重症化リスク（＋）、発症日、SpO2が必要。（発症日をday0とする）",
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
@import "@/css/bootstrap.min.css";

.title {
  background-color: rgb(156, 156, 240);
}
.msg {
  background-color: rgb(194, 211, 248);
}
</style>
