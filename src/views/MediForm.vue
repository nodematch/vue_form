<template>
  <div class="container">
    <div class="text-center m-3 fs-1">早期治療薬のスクリーニング</div>
    <div class="text-center m-3 fs-1">入力フォーム</div>
    <div class="text-left fs-4 p-3">{{ q.message }}</div>

    <div v-if="q.isSingle">
      <div class="p-1 form-check row" v-for="item in q.list" :key="item.name">
        <input
          type="radio"
          name="single"
          :value="item.id"
          :id="item.text"
          v-model="a"
          class="form-check-input fs-4"
        />
        <label :for="item.text" class="form-check-label fs-4">
          {{ item.text }}
        </label>
      </div>
      <div class="text-center">
        <button class="btn btn-primary m-2 fs-4" @click="next_s">
          &emsp;&emsp;進む&emsp;&emsp;
        </button>
      </div>
    </div>
    <div v-if="!q.isSingle">
      <div class="p-1 form-check row" v-for="item in q.list" :key="item.name">
        <input
          type="checkbox"
          name="multi"
          :value="item.id"
          :id="item.text"
          v-model="a"
          class="form-check-input fs-4"
        />
        <label :for="item.text" class="form-check-label fs-4">
          {{ item.text }}
        </label>
      </div>
      <div class="text-center">
        <button class="btn btn-primary m-2 fs-4" @click="next_m">
          &emsp;&emsp;進む&emsp;&emsp;
        </button>
      </div>
    </div>

    <div class="text-end">
      <button class="btn btn-success m-2 fs-6" @click="back">
        &emsp;戻る&emsp;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { multiCheck, singleCheck } from "@/store/questionnaire";
import { Category, Succession } from "@/store/questionnaire.model";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MediForm",
  setup() {
    const answerSingle = ref(singleCheck.as);
    const answerMulti = ref(multiCheck.as);
    const index = ref(0);
    const category = ref(0);
    const hist = new Array<Succession>();
    const setQ = (succession: Succession) => {
      index.value = succession.index;
      category.value = succession.category;
    };
    const next = () => {
      if (category.value == Category.singleCheck) {
        setQ(singleCheck.qs[index.value].next(answerSingle.value[index.value]));
      } else {
        setQ(multiCheck.qs[index.value].next(answerMulti.value[index.value]));
      }
    };
    return {
      answerSingle,
      answerMulti,
      index,
      category,
      next,
    };
  },
  //   setup() {
  //     let answers = Array<number | number[]>(Questions.length);
  //     // for (let i = 0; i < answers.length; i++) {
  //     //   answers[i] = [];
  //     // }
  //     let index = 0;
  //     const q = new<Array>(ref(Questions[index]));
  //     const next = () => {
  //       let ni = q.value.nextQID(answers[index]);
  //       setQ(ni);
  //     };
  //     return {
  //       a,
  //       q,
  //       next_s,
  //       next_m,
  //       back,
  //       index,
  //       answers,
  //     };
  //   },
});
</script>

<style scoped>
@import "@/css/bootstrap.min.css";

.color_1 {
  background-color: rgb(235, 235, 235);
}
.color_2 {
  background-color: lightcyan;
}
</style>
