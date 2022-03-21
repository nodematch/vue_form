<template>
  <div class="container">
    <div class="text-center m-3 fs-2">COVID-19 酸素需要予測のスクリーニング</div>
    <div class="text-center m-3 fs-2">STEP1 入力フォーム</div>
    <form>
      <input-write :title="'年齢'" :value="val.age" @chv="changeValue.age" :color="'greyA'"/>
      <input-select :title="'性別'" :color="'greyA'" :sc="{name: 'sex', sel0:'女', sel1:'男'}" :value="val.sex" @chv="changeValue.sex" />
      <input-write :title="'身長'" :value="val.height" @chv="changeValue.height" :color="'greyA'"/>
      <input-write :title="'体重'" :value="val.weight" @chv="changeValue.weight" :color="'greyA'"/>
      <div v-for="(item, idx) in risks" :key="item.name">
        <div class="row p-1 mx-1 greyB justify-content-center" v-if="item.isShow(val.ageType)">
          <label class="col-6 col-form-label text-center fs-3">{{ item.name }}</label>
          <div class="form-check col-3">
            <input class="form-check-input fs-3" type="radio" :name="item.name" value="1" :id="'y' + item.name" v-model.number="riskVals[idx]" />
            <label class="form-check-label fs-3" :for="'y' + item.name">有</label>
          </div>
          <div class="form-check col-3">
            <input class="form-check-input fs-3" type="radio" :name="item.name" value="0" :id="'n' + item.name" v-model.number="riskVals[idx]" />
            <label class="form-check-label fs-3" :for="'n' + item.name">無</label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import InputWrite from "@/components/InputWrite.vue";
import InputSelect from "@/components/InputSelect.vue";
import { Calculation, risks } from "@/store/riskForm1";
import router from "@/router/index";

export default defineComponent({
  name: "TestView",
  components: {
    InputWrite,
    InputSelect,
  },
  setup() {
    const val = reactive({
      age: 0,
      sex: 0,
      height: 0,
      weight: 0,
      ageType: 0,
      bmi: 0,
    });
    const riskVals = ref([0,0,0,0,0,0,0,0,0,0]);
    const changeValue = {
      age: (v: string) => {
        val.age = parseInt(v);
        val.ageType = Calculation.AgeType(val.age);
      },
      sex: (v: string) => { val.sex = parseInt(v);},
      height: (v: string) => { 
        val.height = parseInt(v);
        val.bmi = Calculation.BMI(val.height, val.weight);
      },
      weight: (v: string) => { 
        val.weight = parseInt(v);
        val.bmi = Calculation.BMI(val.height, val.weight);
      },
    };

    const ckickDone = () => {
      let chk = "";
      chk = Calculation.checkValue({ n: val.age, min: 18, max: 150, name: "age" });
      chk = Calculation.checkValue({ n: val.height, min: 1, max: 250, name: "height" });
      chk = Calculation.checkValue({ n: val.weight, min: 1, max: 199, name: "weight" });
      if(chk != ""){
        alert(chk);
      } else {
        let score = Calculation.Point(risks, {age: val.age, ageType: val.ageType, height: val.height, weight: val.weight, sex: val.sex, riskVals: riskVals.value })
        console.log(score);
        if (!Calculation.judge(val.ageType, score)) {
          let rst = window.confirm("低いスコア(" + score + ") : 次の入力フォームへ進んで下さい");
          if (rst) { router.push({ name: "TitleInformation2" }); }
        } else {
          let rst = window.confirm("高いスコア(" + score + ") : 表示されるページの印刷、およびFaxをお願いします");
          // if (rst) { Print(score); }
        }
      }
    };


    return {
      val,
      changeValue,
      risks,
      riskVals,
    };
  },
})
</script>
