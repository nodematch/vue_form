<template>
  <div class="container">
    <div class="text-center mb-3 fontL">入力フォーム</div>
    <div class="form-group color_1">
      <div class="form-inline">
        <label for="age" class="col-6">年齢</label>
        <input
          type="number"
          maxlength="3"
          v-model.number="age"
          @change="setAge"
          max="150"
          min="18"
          class="form-control col-6"
        />
      </div>
    </div>
    <div class="form-group color_1">
      <div class="form-inline">
        <label class="col-6">性別</label>
        <input
          type="radio"
          name="sex"
          id="female"
          value="0"
          v-model="sex"
          class="form-check col-1"
        />
        <label for="female" class="form-check-label col-2">女</label>
        <input
          type="radio"
          name="sex"
          id="male"
          value="1"
          v-model="sex"
          class="form-check col-1"
        />
        <label for="male" class="form-check-label col-2">男</label>
      </div>
    </div>
    <div class="form-group color_1">
      <div class="form-inline">
        <label for="age" class="col-6">身長</label>
        <input
          type="number"
          maxlength="3"
          v-model.number="height"
          max="299"
          min="0"
          @change="setBMIs"
          class="form-control col-6"
        />
      </div>
    </div>
    <div class="form-group color_1">
      <div class="form-inline">
        <label for="age" class="col-6">体重</label>
        <input
          type="number"
          maxlength="3"
          v-model.number="weight"
          max="199"
          min="0"
          @change="setBMIs"
          class="form-control col-6"
        />
      </div>
    </div>
    <!-- <div class="form-group color_1">
      <div class="form-inline">
        <label for="age" class="col-6">BMI</label>
        <div class="col-6">{{ bmi() }}</div>
      </div>
    </div> -->
    <div v-for="(ill, idx) in ills" :key="ill.name" class="color_2">
      <div class="form-group" v-if="ill.isShow(ageType)">
        <div class="form-inline">
          <label class="col-6">{{ ill.name }}</label>
          <input
            type="radio"
            :name="ill.name"
            value="1"
            :id="'y' + ill.name"
            v-model.number="illVal[idx]"
            class="form-check col-1"
          />
          <label :for="'y' + ill.name" class="form-check-label col-2">
            有
          </label>
          <input
            type="radio"
            :name="ill.name"
            value="0"
            :id="'n' + ill.name"
            v-model.number="illVal[idx]"
            class="form-check col-1"
          />
          <label :for="'n' + ill.name" class="form-check-label col-2">
            無
          </label>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary" @click="onclick">完了</button>
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
          resultMsg.value = "低いスコア : 次の入力フォームへ進んで下さい";
          result = window.confirm(resultMsg.value);
          if (result) {
            console.log("Y");
            window.location.href = "https://www.google.com";
          } else {
            console.log("N");
          }
        } else {
          resultMsg.value =
            "高いスコア : 表示されるページの印刷、およびFaxをお願いします";
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
          ills_[i] = "――";
        } else if (illVal.value[i] == 1) {
          ills_[i] = "&#9675";
        } else {
          ills_[i] = "";
        }
      }
      let ageType_ = "18-39";
      if (pd.ageType == 1) {
        ageType_ = "40-64";
      } else if (pd.ageType == 2) {
        ageType_ = "65-";
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
@import "@/bootstrap.css";

/* table {
  display: block;
  max-width: 16em;
  margin: auto;
  border-collapse: collapse;
  border-spacing: 1em 1em;
  font-size: 1.5em;
} */
.color_1 {
  background-color: rgb(235, 235, 235);
}
.color_2 {
  background-color: lightcyan;
}
input {
  font-size: 1em;
}
label {
  font-size: 1em;
}
.fontL {
  font-size: 1.4em;
}
</style>
