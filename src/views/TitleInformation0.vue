<template>
  <div class="container">
    <p class="fs-4 text-center m-2">スクリーニング選択({{ typeName }})</p>
    <div class="card">
      <div class="card-body">
        <p class="card-title">・<b class="fs-5">day0~2</b>の患者（12歳以上）</p>
        <p class="card-title">※Step Aは必要ありません</p>
        <button-component :contents="btn1" />
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <p class="card-title">・<b class="fs-5">day3～6</b>の患者（18歳以上）</p>
        <button-component :contents="btn0" />
      </div>
    </div>
    <div class="fs-6 mt-4"></div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { NameOfType } from "@/store/questionnaire.summary";

export default defineComponent({
  name: "TitleInformation0",
  components: {
    ButtonComponent,
  },
  setup() {
    const typeName = NameOfType(location.search);
    const headText = "<p>Step A</p><p>COVID-19「 酸素需要予測のスクリーニング」</p>"
    const headColor = "blueA";
    const btn0 = [
      {
        text: "「酸素需要予測スクリーニング（Step A）」へ進む",
        func: () => {
          router.push({ name: "TitleInformation1", query: {type: typeName} });
        },
        color: "blueA",
      },
    ];
    const btn1 = [
      {
        text: "「早期治療薬スクリーニング（Step B）」へ進む",
        func: () => {
          router.push({ name: "TitleInformation2", query: {type: typeName} });
        },
        color: "greenB"
      },
    ]
    return {
      headText,
      headColor,
      btn0,
      btn1,
      typeName,
    };
  },
});
</script>
