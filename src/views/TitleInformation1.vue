<template>
  <div class="container">
    <accordion-version-1 :contents="accordionContent" :headText="headText" />
    <div class="fs-6"><b>対象患者（18才以上 かつ day3～7）:</b></div>
    <button-component :contents="btn0" />
    <div class="fs-6 mt-4">対象以外の患者（ただし、day0~7 かつ 12歳以上）:</div>
    <button-component :contents="btn1" />
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
    const headText = "<p>STEP1</p><p>COVID-19「 酸素需要予測のスクリーニング」</p>"
    const accordionContent = [
      {
        title: "対象",
        msg: "18才以上 かつ day3～7の外来患者 (発症日はday0）",
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
    const btn0 = [
      {
        text: "「酸素需要予測スクリーニング（STEP1）」へ進む",
        func: () => {
          router.push({
            name: "InputForm1",
          });
        },
        color: "blueA",
      },
    ];
    const btn1 = [
      {
        text: "「早期治療薬スクリーニング（STEP2）」へ進む",
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
      btn0,
      btn1,
    };
  },
});
</script>
