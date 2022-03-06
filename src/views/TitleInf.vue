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
        入力フォームへ進む
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleInf",
  setup() {
    const onclick = () => {
      router.push({
        name: "home",
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
