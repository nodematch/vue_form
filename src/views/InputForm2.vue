<template>
  <div class="container">
    <div class="text-center py-2 fs-3 redA">早期治療薬のスクリーニング</div>
    <!-- SingleSelectQuestion -->
    <div v-if="show.category == 0" class="text-start">
      <div class="fs-3 p-2 mb-4" v-html="singleQ[show.index].title"></div>
      <div class="fs-6 p-3" v-html="singleQ[show.index].message"></div>
      <form  class="form-check fs-6"  v-for="item in singleQ[show.index].choices"  :key="item.text">
        <input type="radio" name="single" :value="item.id" :id="item.text" v-model="answerSingle[show.index]" class="form-check-input" />
        <label :for="item.text" class="form-check-label" v-html="item.text"></label>
      </form>
      <div v-if="show.index == 7 || show.index == 10" class="mt-6">
        <medicine-table />
      </div>
      <button-component :contents="btn0" />
    </div>
    <!-- MultiSelectQuestion -->
    <div v-if="show.category == 1">
      <div class="fs-3 p-2 mb-4" v-html="multiQ[show.index].title"></div>
      <div class="fs-6 p-3" v-html="multiQ[show.index].message"></div>
      <form class="fs-6 form-check" v-for="item in multiQ[show.index].choices" :key="item.text">
        <input class="form-check-input" type="checkbox" name="multi" :value="item.id" :id="item.text" v-model="answerMulti[show.index]" />
        <label class="form-check-label" :for="item.text" v-html="item.text"></label>
      </form>
      <button-component :contents="btn0" />
    </div>
    <!-- RESULT MESSAGE -->
    <div v-if="show.category == 2">
      <br />
      <div class="fs-3 p-2 mb-4" v-html="resultS[show.index].title"></div>
      <div class="fs-6 p-3" v-html="resultS[show.index].message"></div>
      <div class="mt-3" v-if="show.index > 2">
        <p class="fs-5 text-center">あま市民病院に投薬依頼する場合</p>
        <button-component :contents="btnPrint" />
        <br />
        <p class="fs-5 text-center">依頼しない場合</p>
        <div class="text-center">これで終了です。</div>
        <button-component :contents="btnBackHome" />
      </div>
      <div class="mt-3" v-if="show.index <= 2">
        <div class="text-center">これで終了です。</div>
        <button-component :contents="btnBackHome" />
      </div>
    </div>

    <!-- Buttons -->
    <div class="text-end" v-if="hist.length != 0">
      <button class="btn btn-success m-6 fs-6" @click="back">&emsp;戻る&emsp;</button>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { multiCheckData, resultScreenData, singleCheckData } from "@/store/questionnaire";
import { Category, Succession } from "@/store/questionnaire.model";
import { defineComponent, ref } from "vue";
import MedicineTable from "@/components/MedicineTable.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent({
  name: "InputForm2",
  components: {
    MedicineTable,
    ButtonComponent,
  },
  setup() {
    const singleQ = singleCheckData.qs;
    const multiQ = multiCheckData.qs;
    const answerSingle = ref(singleCheckData.as);
    const answerMulti = ref(multiCheckData.as);
    const suc: Succession = { category: Category.singleCheck, index: 0 };
    const show = ref(suc);
    const hist = ref(new Array<Succession>());
    const resultS = resultScreenData.list;
    const back = () => {
      show.value = hist.value[hist.value.length - 1];
      hist.value.pop();
    };
    const btn0 = [{
      text: "進む",
      func: () => {
        hist.value.push(show.value);
        if (show.value.category == Category.singleCheck) {
          if(answerSingle.value[show.value.index] == -1){
            alert("no select");
          } else {
            show.value = singleQ[show.value.index].next(answerSingle.value[show.value.index]);
          }
        } else {
          show.value = multiQ[show.value.index].next(answerMulti.value[show.value.index]);
        }
      },
      color: "btn-primary fs-4",
    }];
    const btnPrint = [{
      text: "FAX印刷ページへ",
      func: () => {
        let light: string[] = [];
        let heavy: string[] = [];
        let heavyOfA = [1, 5, 10, 11, 12, 13, 17];
        for (let i of answerMulti.value[0]) {
          if (heavyOfA.includes(i)) {
            heavy.push(multiQ[0].choices[i].text);
          } else {
            light.push(multiQ[0].choices[i].text);
          }
        }
        for (let i of answerMulti.value[1]) {
          heavy.push(multiQ[1].choices[i].text);
        }
        let rst = resultS[show.value.index];
        router.push({
          name: "PrintView2",
          params: {
            resultNumber: show.value.index,
            answers: answerSingle.value,
            riskL: light,
            riskH: heavy,
            medicine: rst.medicine,
            addition: rst.addition,
          },
        });
      },
      color: "btn-danger fs-5",
    }];
    const btnBackHome = [{
      text: " 次の患者のフローを行う",
      func: () => { router.push({ name: "home" }); },
      color: "btn-warning fs-5"
    }]
    return {
      answerSingle,
      answerMulti,
      singleQ,
      multiQ,
      show,
      hist,
      resultS,
      btn0,
      btnPrint,
      btnBackHome,
      back,
    };
  },
});
</script>

