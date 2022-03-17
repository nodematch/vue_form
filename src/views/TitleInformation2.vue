<template>
  <div class="container">
    <accordion-version-1 :contents="accordionContent" :headText="headText" />
    <button-component :contents="buttonContent" />
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import AccordionVersion1 from "../components/AccordionVersion1.vue"
import ButtonComponent from "../components/ButtonComponent.vue";

export default defineComponent({
  name: "TitleInformation2",
  components: {
    AccordionVersion1,
    ButtonComponent,
  },
  setup() {
    const headText = "<p>STEP 2</p><p>重症化リスク(+) COVID-19早期治療薬スクリーニング</p>";
    const accordionContent = [
      {
        title: "<b>対象</b>",
        msg: "<b>day 7 以内の外来患者（発症から8日目以内。発症日をday0とする）。重症化リスク・発症日・SpO2が必要。</b>",
        isShow: "show",
        idn:"aa",
      },
      {
        title: "特徴",
        msg: "ワクチン、リスク因子、症状、発症日からの日数、投与までのタイムラグを考慮。適応のある患者に、より多くより早く、初期治療薬投与を目的とするため、発症から日が浅く症状が軽い場合は、内服薬を優先。",
        isShow: "show",
        idn: "bb",
      },
      {
        title: "参考文献",
        msg: "Terada M. et.al. Risk factors for severity on admission and the disease progression during hospitalization in a large cohort of patients with COVID-19 in Japan 国立国際医療センター、COVID-19 レジストリ研究解析結果",
        isShow: "hide",
        idn: "cc",
      },
    ];
    const buttonContent = [
      {
        text: "「早期治療薬スクリーニング」へ進む",
        func: () => {
          router.push({
            name: "InputForm2",
          });
        },
        color: "btn-success"
      },
    ];
    return {
      headText,
      accordionContent,
      buttonContent,
    };
  },
});
</script>

<style scoped>
.title {
  background-color: rgb(156, 156, 240);
}
.msg {
  background-color: rgb(194, 211, 248);
}
</style>
