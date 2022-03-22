<template>
  <div class="container">
    <div class="text-center py-2 fs-3 redA">早期治療薬のスクリーニング</div>
    <div class="text-end fs-6">{{ typeName }}</div>
    <!-- SingleSelectQuestion -->
    <div v-if="show.category == 0" class="text-start">
      <div class="fs-3 p-2 mb-4" v-html="qst.single[show.index].title"></div>
      <div class="fs-6 p-3" v-html="qst.single[show.index].message"></div>
      <form  class="form-check fs-6"  v-for="item in qst.single[show.index].choices"  :key="item.text">
        <input type="radio" name="single" :value="item.id" :id="item.text" v-model="ans.single[show.index]" class="form-check-input" />
        <label :for="item.text" class="form-check-label" v-html="item.text"></label>
      </form>
      <button-component :contents="btn0" />
      <div v-if="qst.single[show.index].paxlo" class="mt-6">
        <medicine-table />
      </div>
    </div>
    <!-- MultiSelectQuestion -->
    <div v-if="show.category == 1">
      <div class="fs-3 p-2 mb-4" v-html="qst.multi[show.index].title"></div>
      <div class="fs-6 p-3" v-html="qst.multi[show.index].message"></div>
      <form class="fs-6 form-check" v-for="item in qst.multi[show.index].choices" :key="item.text">
        <input class="form-check-input" type="checkbox" name="multi" :value="item.id" :id="item.text" v-model="ans.multi[show.index]" />
        <label class="form-check-label" :for="item.text" v-html="item.text"></label>
      </form>
      <button-component :contents="btn0" />
    </div>
    <!-- RESULT MESSAGE -->
    <div v-if="show.category == 2">
      <br />
      <div class="fs-3 p-2 mb-4" v-html="qst.result[show.index].title"></div>
      <div class="fs-6 p-3" v-html="qst.result[show.index].message"></div>
      <div class="mt-3" v-if="qst.result[show.index].addition != 'noPrint'">
        <p class="fs-5 text-center">あま市民病院に投薬依頼する場合</p>
        <button-component :contents="btnPrint" />
        <br />
        <p class="fs-5 text-center">依頼しない場合</p>
        <div class="text-center">これで終了です。</div>
        <button-component :contents="btnBackHome" />
      </div>
      <div class="mt-3"  v-if="qst.result[show.index].addition == 'noPrint'">
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
import { questionSet, answerSet } from "@/store/questionnaire.summary"
import { Category, Succession } from "@/store/questionnaire.model";
import { defineComponent, ref, reactive } from "vue";
import MedicineTable from "@/components/MedicineTable.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default defineComponent({
  name: "InputForm2",
  components: {
    MedicineTable,
    ButtonComponent,
  },
  setup() {
    const typeName = location.search == "?type=ba2" ? "ba2" : "omicron";
    const qst = questionSet[typeName];
    const ans = reactive(answerSet[typeName]);
    const suc: Succession = { category: Category.singleCheck, index: 0 };
    const show = ref(suc);
    const hist = ref(new Array<Succession>());
    const back = () => {
      show.value = hist.value[hist.value.length - 1];
      hist.value.pop();
      window.scrollTo(0,0);
    };
    const btn0 = [{
      text: "進む",
      func: () => {
        hist.value.push(show.value);
        if (show.value.category == Category.singleCheck) {
          if(ans.single[show.value.index] == -1){
            alert("no select");
          } else {
            show.value = qst.single[show.value.index].next(ans.single[show.value.index]);
          }
        } else {
          show.value = qst.multi[show.value.index].next(ans.multi[show.value.index]);
        }
        window.scrollTo(0,0);
      },
      color: "btn-primary fs-4",
    }];
    const btnPrint = [{
      text: "FAX印刷ページへ",
      func: () => {
        let light: string[] = [];
        let heavy: string[] = [];
        let heavyOfA = [1, 5, 10, 11, 12, 13, 17];
        for (let i of ans.multi[0]) {
          if (heavyOfA.includes(i)) {
            heavy.push(qst.multi[0].choices[i].text);
          } else {
            light.push(qst.multi[0].choices[i].text);
          }
        }
        for (let i of ans.multi[1]) {
          heavy.push(qst.multi[1].choices[i].text);
        }
        let rst = qst.result[show.value.index];
        router.push({
          name: "PrintView2",
          query: {type: typeName},
          params: {
            resultNumber: show.value.index,
            answers: ans.single,
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
      ans,
      qst,
      show,
      hist,
      btn0,
      btnPrint,
      btnBackHome,
      back,
      typeName,
    };
  },
});
</script>

