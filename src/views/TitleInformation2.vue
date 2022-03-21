<template>
  <div class="container">
    <div class="text-end fs-6">{{ typeName }}</div>
    <accordion-version-1 :contents="accordionContent" :headText="headText" :color="headColor" />
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
    const typeName = location.search == "?type=ba2" ? "ba2" : "omicron";
    const headText = "<p>STEP 2</p><p>重症化リスク(+) 患者の「COVID-19早期治療薬スクリーニング」</p>";
    const headColor = "greenB"
    const accordionContent = [
      {
        title: "<b>対象</b>",
        msg: "<b>12才以上 かつ day0-7の外来患者。重症化リスク・発症日・SpO2が必要。（発症日はday0）</b>",
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
        text: "スクリーニング開始",
        func: () => {
          router.push({ name: "InputForm2", query: {type: typeName} });
        },
        color: "greenB"
      },
    ];
    return {
      headText,
      headColor,
      accordionContent,
      buttonContent,
      typeName,
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
