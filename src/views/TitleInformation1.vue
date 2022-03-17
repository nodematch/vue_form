<template>
  <div class="container">
    <accordion-version-1 :contents="accordionContent" :headText="headText" />
    <button-component :contents="buttonContent" />
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import AccordionVersion1 from "../components/AccordionVersion1.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

export default defineComponent({
  name: "TitleInformation1",
  components: {
    AccordionVersion1,
    ButtonComponent,
  },
  setup() {
    const headText = "<p>STEP1</p><p>COVID-19 酸素需要予測のスクリーニング</p>"
    const accordionContent = [
      {
        title: "<b>対象</b>",
        msg: "<b>day3～7の外来患者（発症4～8日目の患者。発症日をday0とする）</b>",
        isShow: "show",
        idn:"aa",
      },
      {
        title: "特徴",
        msg: "SpO2値を使わないため、電話診療でも、判定可能。高齢者は感度高く、若年者は特異度を高く、カットオフ値設定。",
        isShow: "show",
        idn: "bb",
      },
      {
        title: "参考文献",
        msg: "Yamada G,et al. Predicting respiratory failure for COVID-19 :a simple clinical score for evaluating the need for hospitalization. Epidemiol Infect 2021",
        isShow: "hide",
        idn: "cc",
      },
    ];
    const buttonContent = [
      {
        text: "「酸素需要予測スクリーニング」へ進む",
        func: () => {
          router.push({
            name: "InputForm1",
          });
        },
        color: "btn-primary"
      },
      {
        text: "day0-2 （ ～発症3日目）の患者 : 「早期治療薬スクリーニング（STEP2）」へ進む",
        func: () => {
          router.push({
            name: "TitleInformation2",
          });
        },
        color: "btn-success"
      },
    ]
    return {
      accordionContent,
      headText,
      buttonContent,
    };
  },
});
</script>
