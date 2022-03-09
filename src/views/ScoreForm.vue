<template>
  <div class="container">
    <div class="text-center m-3 fs-1">
      COVID-19 酸素必要性予測のスクリーニング
    </div>
    <div class="text-center m-3 fs-1">入力フォーム</div>
    <div class="row mb-2 p-2 color_1 align-items-center">
      <div class="col-6">
        <label for="age">年齢</label>
      </div>
      <div class="col-6">
        <input
          type="number"
          maxlength="3"
          v-model.number="age"
          @change="setAge"
          max="150"
          min="18"
          class="form-control"
        />
      </div>
    </div>
    <div class="row mb-2 p-2 color_1 align-items-center">
      <div class="col-6">
        <label>性別</label>
      </div>
      <div class="col-1">
        <input
          type="radio"
          name="sex"
          id="female"
          value="0"
          v-model="sex"
          class="form-check-input"
        />
      </div>
      <div class="col-2">
        <label for="female" class="form-check-label">女</label>
      </div>
      <div class="col-1">
        <input
          type="radio"
          name="sex"
          id="male"
          value="1"
          v-model="sex"
          class="form-check-input"
        />
      </div>
      <div class="col-2">
        <label for="male" class="form-check-label">男</label>
      </div>
    </div>
    <div class="row mb-2 p-2 color_1 align-items-center">
      <div class="col-6">
        <label for="age">身長</label>
      </div>
      <div class="col-6">
        <input
          type="number"
          maxlength="3"
          v-model.number="height"
          max="299"
          min="0"
          @change="setBMIs"
          class="form-control"
        />
      </div>
    </div>
    <div class="row mb-2 p-2 color_1 align-items-center">
      <div class="col-6">
        <label for="age">体重</label>
      </div>
      <div class="col-6">
        <input
          type="number"
          maxlength="3"
          v-model.number="weight"
          max="199"
          min="0"
          @change="setBMIs"
          class="form-control"
        />
      </div>
    </div>
    <div v-for="(ill, idx) in ills" :key="ill.name">
      <div
        class="row mb-2 p-2 color_2 align-items-center"
        v-if="ill.isShow(ageType)"
      >
        <div class="col-6">
          <label>{{ ill.name }}</label>
        </div>
        <div class="col-1">
          <input
            type="radio"
            :name="ill.name"
            value="1"
            :id="'y' + ill.name"
            v-model.number="illVal[idx]"
            class="form-check-input"
          />
        </div>
        <div class="col-2">
          <label :for="'y' + ill.name" class="form-check-label">有</label>
        </div>
        <div class="col-1">
          <input
            type="radio"
            :name="ill.name"
            value="0"
            :id="'n' + ill.name"
            v-model.number="illVal[idx]"
            class="form-check-input"
          />
        </div>
        <div class="col-2">
          <label :for="'n' + ill.name" class="form-check-label">無</label>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary m-4 fs-1" @click="onclick">完了</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { personData } from "@/store/ill.model";
import { ills } from "@/store/ill.data";
import errCheck from "@/store/errCheck";
import router from "@/router/index";

export default defineComponent({
  name: "ScoreForm",
  setup() {
    let pd = new personData({ age: 18, sex: 0, height: 160, weight: 50 }, ills);
    const age = ref(0);
    const sex = ref(pd.sex);
    const height = ref(0);
    const weight = ref(0);
    const illVal = ref(pd.illValue);
    const ageType = ref(pd.ageType);
    const bmi = () => {
      return Math.floor(pd.bmi * 10) / 10;
    };
    const setAge = () => {
      pd.age = age.value;
      pd.setAgeType();
      ageType.value = pd.ageType;
    };
    const setBMIs = () => {
      pd.weight = weight.value;
      pd.height = height.value;
      pd.setBMI();
    };
    const setOtherInf = () => {
      pd.sex = sex.value;
      pd.illValue = illVal.value;
    };
    const resultMsg = ref("result message here");
    const isDone = ref(false);
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
        setAge();
        setBMIs();
        setOtherInf();
        pd.calcPoint(ills);
        console.log("bmi = " + pd.bmi + " ,score = " + pd.score);
        var result;
        if (!pd.judge()) {
          resultMsg.value =
            "低いスコア(" + pd.score + ") : 次の入力フォームへ進んで下さい";
          result = window.confirm(resultMsg.value);
          if (result) {
            console.log("Y");
            router.push({
              name: "titleInfv2",
            });
          } else {
            console.log("N");
          }
        } else {
          resultMsg.value =
            "高いスコア(" +
            pd.score +
            ") : 表示されるページの印刷、およびFaxをお願いします";
          result = window.confirm(resultMsg.value);
          if (result) {
            console.log("Y");
            clickPrint();
          } else {
            console.log("N");
          }
        }
      }
    };
    const clickPrint = () => {
      let sexStr: string = pd.sex == 1 ? "男" : "女";
      let ills_: string[] = new Array<string>(illVal.value.length);
      for (let i = 0; i < ills.length; i++) {
        if (!ills[i].isShow(pd.ageType)) {
          ills_[i] = "―";
        } else if (illVal.value[i] == 1) {
          ills_[i] = "&#9675";
        } else {
          ills_[i] = "";
        }
      }
      let ageType_ = "18-39";
      let cutoff_ = 6;
      if (pd.ageType == 1) {
        ageType_ = "40-64";
        cutoff_ = 5;
      } else if (pd.ageType == 2) {
        ageType_ = "65-";
        cutoff_ = 3;
      }
      router.push({
        name: "print",
        params: {
          age: pd.age,
          sex: sexStr,
          ills: ills_,
          bmi: Math.floor(pd.bmi * 10) / 10,
          score: pd.score.toString(),
          ageType: ageType_,
          cutoff: cutoff_,
        },
      });
    };

    return {
      onclick,
      setAge,
      setBMIs,
      age,
      sex,
      height,
      weight,
      resultMsg,
      isDone,
      ills,
      ageType,
      illVal,
      bmi,
      clickPrint,
    };
  },
});
</script>

<style scoped>
@import "@/css/bootstrap.min.css";
label,
input {
  font-size: 1.8em;
}
.color_1 {
  background-color: rgb(235, 235, 235);
}
.color_2 {
  background-color: lightcyan;
}
</style>
