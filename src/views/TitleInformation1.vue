<template>
  <div class="container">
    <div class="text-end fs-6">{{ typeName }}</div>
    <accordion-version-1 :contents="accordionContent" :headText="headText" :color="headColor"/>
    <div class="card">
      <div class="card-body">
        <p class="card-title">・対象患者（<b class="fs-5">day3～7</b> かつ 18才以上）</p>
        <button-component :contents="btn0" />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <p class="card-title">・<b class="fs-5">対象以外</b>の患者（ただし、day0~7 かつ 12歳以上）</p>
        <button-component :contents="btn1" />
      </div>
    </div>
    <div class="fs-6 mt-4"></div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import AccordionVersion1 from "../components/AccordionVersion1.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { NameOfType } from "@/store/questionnaire.summary";

export default defineComponent({
  name: "TitleInformation1",
  components: {
    AccordionVersion1,
    ButtonComponent,
  },
  setup() {
    const typeName = NameOfType(location.search);
    const headText = "<p>STEP1</p><p>COVID-19「 酸素需要予測のスクリーニング」</p>"
    const headColor = "blueA";
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
          router.push({ name: "InputForm1", query: {type: typeName} });
        },
        color: "blueA",
      },
    ];
    const btn1 = [
      {
        text: "「早期治療薬スクリーニング（STEP2）」へ進む",
        func: () => {
          router.push({ name: "TitleInformation2", query: {type: typeName} });
        },
        color: "greenB"
      },
    ]
    return {
      accordionContent,
      headText,
      headColor,
      btn0,
      btn1,
      typeName,
    };
  },
});
</script>
