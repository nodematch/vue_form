<template>
  <div class="container">
    <div class="text-center pt-2 pb-2 fs-3 head">
      早期治療薬のスクリーニング
    </div>
    <!-- SingleSelectQuestion -->
    <div v-if="show.category == 0" class="text-start">
      <div class="fs-3 p-2 mb-4" v-html="singleQ[show.index].title"></div>
      <div class="fs-6 p-3" v-html="singleQ[show.index].message"></div>
      <div
        class="p-1 row fs-6"
        v-for="item in singleQ[show.index].choices"
        :key="item.text"
      >
        <div class="col-auto">
          <input
            type="radio"
            name="single"
            :value="item.id"
            :id="item.text"
            v-model="answerSingle[show.index]"
            class="form-check-input"
          />
        </div>
        <div class="col-auto">
          <label
            :for="item.text"
            class="form-check-label"
            v-html="item.text"
          ></label>
        </div>
      </div>
      <div v-if="show.index == 7 || show.index == 10" class="mt-6">
        <medicine-table />
      </div>
      <div class="text-center">
        <button
          class="btn btn-primary m-4 fs-4"
          @click="next"
          v-bind:disabled="answerSingle[show.index] == -1"
        >
          &emsp;&emsp;進む&emsp;&emsp;
        </button>
      </div>
    </div>
    <!-- MultiSelectQuestion -->
    <div v-if="show.category == 1">
      <div class="fs-3 p-2 mb-4" v-html="multiQ[show.index].title"></div>
      <div class="fs-6 p-3" v-html="multiQ[show.index].message"></div>
      <div
        class="p-1 row fs-6"
        v-for="item in multiQ[show.index].choices"
        :key="item.text"
      >
        <div class="col-auto">
          <input
            type="checkbox"
            name="multi"
            :value="item.id"
            :id="item.text"
            v-model="answerMulti[show.index]"
            class="form-check-input"
          />
        </div>
        <div class="col-auto">
          <label
            :for="item.text"
            class="form-check-label"
            v-html="item.text"
          ></label>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-primary m-4 fs-4" @click="next">
          &emsp;&emsp;進む&emsp;&emsp;
        </button>
      </div>
    </div>
    <!-- RESULT MESSAGE -->
    <div v-if="show.category == 2">
      <br />
      <div class="fs-3 p-2 mb-4" v-html="resultS[show.index].title"></div>
      <div class="fs-6 p-3" v-html="resultS[show.index].message"></div>
      <div class="mt-3" v-if="show.index > 2">
        <p class="fs-5 text-center">あま市民病院に投薬依頼する場合</p>
        <div class="text-center">
          <button class="btn btn-danger m-4 fs-5" @click="settle">
            &emsp;&emsp;FAX印刷ページへ&emsp;&emsp;
          </button>
        </div>
        <p class="fs-5 text-center">依頼しない場合</p>
        <div>ご協力ありがとうございました。</div>
        <div class="text-center">
          <button class="btn btn-warning m-4 fs-5" @click="backHome">
            終了（最初の画面へ戻る）
          </button>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="text-end" v-if="hist.length != 0">
      <button class="btn btn-success m-6 fs-6" @click="back">
        &emsp;戻る&emsp;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import {
  multiCheckData,
  resultScreenData,
  singleCheckData,
} from "@/store/questionnaire";
import { Category, Succession } from "@/store/questionnaire.model";
import { defineComponent, ref } from "vue";
import MedicineTable from "@/components/MedicineTable.vue";

export default defineComponent({
  name: "InputForm2",
  components: {
    MedicineTable,
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
    const next = () => {
      hist.value.push(show.value);
      if (show.value.category == Category.singleCheck) {
        show.value = singleQ[show.value.index].next(
          answerSingle.value[show.value.index]
        );
      } else {
        show.value = multiQ[show.value.index].next(
          answerMulti.value[show.value.index]
        );
      }
    };
    const back = () => {
      show.value = hist.value[hist.value.length - 1];
      hist.value.pop();
    };
    const settle = () => {
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
    };
    const backHome = () => {
      router.push({
        name: "TitleInformation1",
      });
    };
    return {
      answerSingle,
      answerMulti,
      singleQ,
      multiQ,
      show,
      hist,
      resultS,
      next,
      back,
      settle,
      backHome,
    };
  },
});
</script>

<style scoped>
@import "@/css/bootstrap.min.css";

.head {
  background-color: rgb(255, 71, 108);
}
</style>
