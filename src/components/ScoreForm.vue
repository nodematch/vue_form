<template>
  <div>
    <table border="1">
      <tr class="one">
        <th>年齢</th>
        <td>
          <input
            type="number"
            maxlength="3"
            v-model.number="age"
            @change="setAge"
            max="150"
            min="18"
          />
        </td>
      </tr>
      <tr class="one">
        <th>性別</th>
        <td>
          <input
            type="radio"
            name="sex"
            id="female"
            value="0"
            v-model="sex"
            max="100"
          />
          <label for="female">女性</label>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="sex"
            id="male"
            value="1"
            v-model="sex"
            max="100"
          />
          <label for="male">男性</label>
        </td>
      </tr>
      <tr class="one">
        <th>身長</th>
        <td>
          <input
            type="number"
            maxlength="3"
            v-model.number="height"
            max="299"
            min="0"
            @change="setBMIs"
          />
        </td>
      </tr>
      <tr class="one">
        <th>体重</th>
        <td>
          <input
            type="number"
            maxlength="3"
            v-model.number="weight"
            max="199"
            min="0"
            @change="setBMIs"
          />
        </td>
      </tr>
      <tr class="one">
        <th>BMI</th>
        <td>{{ bmi() }}</td>
      </tr>
      <tr v-for="(ill, idx) in ills" :key="ill.name" class="two">
        <th v-if="ill.isShow(ageType)">
          {{ ill.name }}
        </th>
        <td v-if="ill.isShow(ageType)">
          <input
            type="radio"
            :name="ill.name"
            value="1"
            :id="'y' + ill.name"
            v-model.number="illVal[idx]"
          />
          <label :for="'y' + ill.name">あり</label>
          &nbsp;&nbsp;
          <input
            type="radio"
            :name="ill.name"
            value="0"
            :id="'n' + ill.name"
            v-model.number="illVal[idx]"
          />
          <label :for="'n' + ill.name">なし</label>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td class="w40"></td>
        <td class="w90">
          <button class="doneBtn" @click="onclick">完了</button>
        </td>
        <td class="w40"></td>
      </tr>
    </table>

    <div v-if="isDone">
      <h2>{{ resultMsg }}</h2>
      <button @click="clickPrint">Print</button>
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
  setup(props, context) {
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
        console.log(pd.score);
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
table {
  display: block;
  max-width: 400px;
  margin: auto;
  border-collapse: collapse;
  border-spacing: 150px 50px;
  font-size: 1.5em;
}
h2 {
  margin: auto;
  margin-top: 30px;
  font-size: 1em;
}
td,
th {
  border-width: 0px 0px;
  border-style: solid;
  padding: 0.3em 0.2em;
  height: 2em;
}
td {
  width: 15em;
}
th {
  width: 10em;
}
tr.one {
  background-color: rgb(235, 235, 235);
}
tr.two {
  background-color: lightcyan;
}
.doneBtn {
  padding: auto;
  margin: auto;
  width: 4em;
  height: 1.5em;
  font-size: 1.5em;
  text-align: center;
}
input {
  font-size: 1.2em;
}
</style>
