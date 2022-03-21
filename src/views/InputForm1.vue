<template>
  <div class="container">
    <div class="text-center m-3 fs-2">COVID-19 酸素需要予測のスクリーニング</div>
    <div class="text-center m-3 fs-6"><b>day3-7</b>(発症日はday0）かつ 18才以上</div>
    <div class="text-center m-3 fs-6">STEP1 入力フォーム</div>
    <form>
      <!-- No1 -->
      <div class="row p-1 justify-content-center greyA">
        <label for="age" class="col-6 col-form-label text-center fs-3">年齢</label>
        <div class="col-6">
          <input type="number" class="form-control fs-3" maxlength="3" v-model.number="age" @change="setAgeType"  max="150"  min="18" id="age" />
        </div>
      </div>
      <!-- No2 -->
      <div class="row p-1 justify-content-center greyA">
        <label class="col-6 col-form-label text-center fs-3">性別</label>
        <div class="form-check col-3">
          <input class="form-check-input fs-3" type="radio" name="sex" id="female" value="0" v-model="sex" />
          <label class="form-check-label fs-3" for="female">女</label>
        </div>
        <div class="form-check col-3">
          <input class="form-check-input fs-3" type="radio" name="sex" id="male" value="1" v-model="sex" />
          <label class="form-check-label fs-3" for="male">男</label>
        </div>
      </div>
      <!-- No3 -->
      <div class="row p-1 justify-content-center greyA">
        <label for="height" class="col-6 col-form-label text-center fs-3">身長</label>
        <div class="col-6">
          <input type="number" class="form-control fs-3" maxlength="3" v-model.number="height" max="299" min="0" id="height">
        </div>
      </div>
      <!-- No4 -->
      <div class="row p-1 justify-content-center greyA">
        <label for="weight" class="col-6 col-form-label text-center fs-3">体重</label>
        <div class="col-6">
          <input type="number" class="form-control fs-3" maxlength="3" v-model.number="weight" max="199" min="0" id="weight">
        </div>
      </div>
      <!-- No5- -->
      <div v-for="(item, idx) in risks" :key="item.name">
        <div class="row p-1 greyB justify-content-center" v-if="item.isShow(ageType)">
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
import { defineComponent, ref } from "vue";
import { Calculation, risks } from "@/store/riskForm1"
import errCheck from "@/store/errCheck";
import router from "@/router/index";
import ButtonComponent from "@/components/ButtonComponent.vue"

export default defineComponent({
  name: "InputForm1",
  components: {
    ButtonComponent,
  },
  setup() {
    const age = ref(0);
    const sex = ref(0);
    const height = ref(0);
    const weight = ref(0);
    const riskVals = ref([0,0,0,0,0,0,0,0,0,0]);
    const ageType = ref(0);
    const resultMsg = ref("result message here");
    const setAgeType = () => { ageType.value = Calculation.AgeType(age.value); };
    const onclick = () => {
      let chk = errCheck.numbers([
        { n: age.value, min: 18, max: 150, name: "age" },
        { n: height.value, min: 1, max: 250, name: "height" },
        { n: weight.value, min: 1, max: 199, name: "weight" },
      ]);
      if (!chk.valid) {
        resultMsg.value = chk.msg;
        alert(resultMsg.value);
      } else {
        let score = Calculation.Point(risks, {age: age.value, ageType: ageType.value, height: height.value, weight: weight.value, sex: sex.value, riskVals: riskVals.value })
        console.log(score);
        let result;
        if (!Calculation.judge(ageType.value, score)) {
          resultMsg.value = "低いスコア(" + score + ") : 次の入力フォームへ進んで下さい";
          result = window.confirm(resultMsg.value);
          if (result) {
            router.push({ name: "TitleInformation2" });
          }
        } else {
          resultMsg.value = "高いスコア(" + score + ") : 表示されるページの印刷、およびFaxをお願いします";
          result = window.confirm(resultMsg.value);
          if (result) {
            Print(score);
          }
        }
      }
    };
    const Print = (score: number) => {
      let sexStr: string = sex.value == 1 ? "男" : "女";
      let risks_: string[] = new Array<string>(riskVals.value.length);
      for (let i = 0; i < risks.length; i++) {
        if (!risks[i].isShow(ageType.value)) {
          risks_[i] = "―";
        } else if (riskVals.value[i] == 1) {
          risks_[i] = "&#9675";
        } else {
          risks_[i] = "";
        }
      }
      let _ageType = "18-39";
      let _cutoff = 6;
      if (ageType.value == 1) {
        _ageType = "40-64";
        _cutoff = 5;
      } else if (ageType.value == 2) {
        _ageType = "65-";
        _cutoff = 3;
      }
      router.push({
        name: "PrintView1",
        params: {
          age: age.value,
          sex: sexStr,
          ills: risks_,
          bmi:  Math.floor(Calculation.BMI(height.value, weight.value) * 10) / 10,
          score: score.toString(),
          ageType: _ageType,
          cutoff: _cutoff,
        },
      });
    };
    const buttonContent = [{
      text: "完了",
      func: onclick,
      color: "btn-primary fs-2"
    }];

    return {
      age,
      sex,
      height,
      weight,
      resultMsg,
      ageType,
      riskVals,
      buttonContent,
      setAgeType,
      risks,
    };
  },
});
</script>
