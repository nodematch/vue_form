<template>
  <div class="container">
    <div class="text-center m-3 fs-2">COVID-19 酸素需要予測のスクリーニング</div>
    <div class="text-end fs-6">{{ typeName }}</div>
    <div class="text-center m-3 fs-6"><b>day3-7</b>(発症日はday0）かつ 18才以上</div>
    <div class="text-center m-3 fs-6">STEP1 入力フォーム</div>
    <form>
      <!-- No1 -->
      <div class="row p-1 justify-content-center greyA">
        <label for="age" class="col-6 col-form-label text-center fs-3">年齢</label>
        <div class="col-6">
          <input type="number" class="form-control fs-3" maxlength="3" v-model.number="val.age" @change="setAgeType"  max="150"  min="12" id="age" />
        </div>
      </div>
      <!-- No2 -->
      <div class="row p-1 justify-content-center greyA">
        <label class="col-6 col-form-label text-center fs-3">性別</label>
        <div class="form-check col-3">
          <input class="form-check-input fs-3" type="radio" name="sex" id="female" value="0" v-model="val.sex" />
          <label class="form-check-label fs-3" for="female">女</label>
        </div>
        <div class="form-check col-3">
          <input class="form-check-input fs-3" type="radio" name="sex" id="male" value="1" v-model="val.sex" />
          <label class="form-check-label fs-3" for="male">男</label>
        </div>
      </div>
      <!-- No3 -->
      <div class="row p-1 justify-content-center greyA">
        <label for="height" class="col-6 col-form-label text-center fs-3">身長</label>
        <div class="col-6">
          <input type="number" class="form-control fs-3" maxlength="3" v-model.number="val.height" max="299" min="0" id="height">
        </div>
      </div>
      <!-- No4 -->
      <div class="row p-1 justify-content-center greyA">
        <label for="weight" class="col-6 col-form-label text-center fs-3">体重</label>
        <div class="col-6">
          <input type="number" class="form-control fs-3" maxlength="3" v-model.number="val.weight" max="199" min="0" id="weight">
        </div>
      </div>
      <!-- No5- -->
      <div v-for="(item, idx) in risks" :key="item.name">
        <div class="row p-1 greyB justify-content-center" v-if="item.isShow(val.ageType)">
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
    <br />
    <button-component :contents="buttonContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { Calculation, risks } from "@/store/riskForm1"
import router from "@/router/index";
import ButtonComponent from "@/components/ButtonComponent.vue"
import { NameOfType } from "@/store/questionnaire.summary"

export default defineComponent({
  name: "InputForm1",
  components: {
    ButtonComponent,
  },
  setup() {
    const typeName = NameOfType(location.search);
    const val = reactive({
      age: 0,
      sex: 0,
      height: 0,
      weight: 0,
      ageType: 0,
      bmi: 0,
    });
    const riskVals = ref([0,0,0,0,0,0,0,0,0,0]);
    const setAgeType = () => { 
      // console.log(Calculation.AgeType(val.age));
      val.ageType = Calculation.AgeType(val.age); 
    };
    const onclick = () => {
      let chk = "";
      chk = Calculation.checkValue({ n: val.age, min: 12, max: 150, name: "age" });
      if(chk == "") chk = Calculation.checkValue({ n: val.height, min: 1, max: 250, name: "height" });
      if(chk == "") chk = Calculation.checkValue({ n: val.weight, min: 1, max: 199, name: "weight" });
      if(chk != ""){
        alert(chk);
      } else {
        val.bmi = Calculation.BMI(val.height, val.weight);
        let score = Calculation.Point(risks, {age: val.age, ageType: val.ageType, height: val.height, weight: val.weight, sex: val.sex, riskVals: riskVals.value })
        console.log(score);
        if (!Calculation.judge(val.ageType, score)) {
          let rst = window.confirm("低いスコア(" + score + ") : 次の入力フォームへ進んで下さい");
          if (rst) { router.push({ name: "TitleInformation2", query: {type: typeName} }); }
        } else {
          let rst = window.confirm("高いスコア(" + score + ") : 表示されるページの印刷、およびFaxをお願いします");
          if (rst) { Print(score); }
        }
      }
    };
    const Print = (score: number) => {
      let risks_: string[] = new Array<string>(riskVals.value.length);
      for (let i = 0; i < risks.length; i++) {
        if (!risks[i].isShow(val.ageType)) {
          risks_[i] = "―";
        } else if (riskVals.value[i] == 1) {
          risks_[i] = "&#9675";
        } else {
          risks_[i] = "";
        }
      }
      router.push({
        name: "PrintView1",
        query: {type: typeName},
        params: {
          age: val.age,
          sex: Calculation.formatSex(val.sex),
          ills: risks_,
          bmi:  Math.floor(val.bmi * 10) / 10,
          score: score.toString(),
          ageType: Calculation.formatAgeType(val.ageType),
          cutoff: Calculation.formatCutoff(val.ageType),
        },
      });
    };
    const buttonContent = [{
      text: "完了",
      func: onclick,
      color: "btn-primary fs-2"
    }];

    return {
      val,
      riskVals,
      buttonContent,
      setAgeType,
      risks,
      typeName,
    };
  },
});
</script>
