<template>
  <div class="container">
    <div class="m-1">
      <div class="text-center fs-2">{{ head[0] }}</div>
      <div class="text-center fs-2">{{ head[1] }}</div>
      <div class="text-end fs-4">{{ head[2] }}</div>
    </div>
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
          <div class="text-center">参考文献</div>
        </div>
        <div class="col-10">
          {{ msg[2] }}
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <button class="btn btn-success m-2" @click="go2">
          ～発症３日目(day0-2) 「早期治療薬スクリーニング（STEP2）」へ進む
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary m-2" @click="go1">
          発症４～７日目(day3-6) 「酸素需要予測スクリーニング（STEP1)」へ進む
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleInf",
  setup() {
    const go1 = () => {
      router.push({
        name: "home",
      });
    };
    const go2 = () => {
      router.push({
        name: "titleInfv2",
      });
    };
    const head = [
      "あま市・大治町医療機関の患者",
      "発症早期における治療選択フロー第１版",
      "あま市民病院ICT作成（2022年3月7日）",
    ];
    const title = [
      "STEP 1",
      "COVID-19 酸素必要性予測のスクリーニング（YamadaらのCOVIREGI-JPの解析より）",
    ];
    const msg = [
      "SpO2値を使わないため、電話診療でも、判定可能。高齢者は感度高く、若年者は特異度を高く、カットオフ値設定。ここでは外来患者を対象とする。",
      "発症4～8日目（day3～7)の患者",
      "Yamada G,et al. Predicting respiratory failure for COVID-19 :a simple clinical score for evaluating the need for hospitalization. Epidemiol Infect 2021",
    ];
    return {
      go1,
      go2,
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
