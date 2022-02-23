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
            @change="checkAge"
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
            v-model.number="sex"
          />
          <label for="female">女性</label>
          &nbsp;&nbsp;
          <input
            type="radio"
            name="sex"
            id="male"
            value="1"
            v-model.number="sex"
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
          />
        </td>
      </tr>
      <tr v-for="ill in ills" :key="ill.name" class="two">
        <th v-if="ill.isShow()">
          {{ ill.name }}
        </th>
        <td v-if="ill.isShow()">
          <input
            type="radio"
            :name="ill.id"
            value="1"
            :id="'y' + ill.id"
            v-model.number="ill.val"
          />
          <label :for="'y' + ill.id">あり</label>
          &nbsp;&nbsp;
          <input
            type="radio"
            :name="ill.id"
            value="0"
            :id="'n' + ill.id"
            v-model.number="ill.val"
          />
          <label :for="'n' + ill.id">なし</label>
        </td>
      </tr>
    </table>

    <div>
      <button class="doneBtn" @click="onclick">Done</button>
    </div>
    <div v-if="isDone">
      <h2>{{ resultMsg }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ScoreForm",
  props: {
    msg: String,
  },
  setup(prop, context) {
    const onclick = () => {
      isDone.value = true;
      console.log(countAll());
    };
    const checkAge = (ev: any) => {
      const num = ev.target.value;
      if (num > 17 && num < 40) {
        showNumber.value = 0;
      } else if (num > 39 && num < 65) {
        showNumber.value = 1;
      } else if (num > 64) {
        showNumber.value = 2;
      } else {
        console.log("err : num = " + num);
      }
      console.log("showNumber = " + showNumber.value);
    };
    const age = ref(18);
    const sex = ref(0);
    const height = ref(160);
    const weight = ref(50);
    const resultMsg = "result message here";
    const isDone = ref(false);
    const showNumber = ref(1);
    class Ill {
      constructor(name: string, id: number, points: Array<number>) {
        this.name = name;
        this.id = id;
        this.points = points;
      }
      name = "";
      id = 0;
      val = 0;
      points: Array<number> = [];
      isShow() {
        return this.points[showNumber.value] != 0;
      }
      getpoint() {
        return this.points[showNumber.value];
      }
    }
    const ills = ref<Array<Ill>>([
      new Ill("うっ血性心不全", 0, [0, 0, 2]),
      new Ill("脳血管疾患", 1, [0, 0, 1]),
      new Ill("糖尿病", 2, [0, 1, 2]),
      new Ill("高血圧", 3, [0, 0, 2]),
      new Ill("悪性疾患", 4, [3, 0, 0]),
      new Ill("発熱", 5, [2, 2, 4]),
      new Ill("咳", 6, [0, 1, 1]),
      new Ill("呼吸困難", 7, [1, 2, 4]),
      new Ill("喘鳴", 8, [1, 0, 0]),
      new Ill("倦怠感", 9, [0, 1, 0]),
    ]);
    const countAll = () => {
      var sum = 0;
      //ills
      ills.value.forEach((element) => {
        sum += element.getpoint() * element.val;
      });
      //sex
      if (sex.value == 1 && age.value < 65) {
        sum += 1;
      }
      //age
      if (
        (age.value > 29 && age.value < 40) ||
        (age.value > 49 && age.value < 60)
      ) {
        sum += 1;
      } else if (age.value > 59 && age.value < 65) {
        sum += 3;
      } else if (age.value > 74) {
        sum += 2;
      }
      //weight, height
      var bmi: number = weight.value / (height.value / 100) ** 2;
      console.log("BMI = " + bmi);
      if (age.value < 40) {
        if (bmi > 30) {
          sum += 2;
        } else if (bmi > 23) {
          sum += 1;
        }
      } else {
        if (bmi > 25) {
          sum += 2;
        }
      }
      //Result
      return sum;
    };
    return {
      onclick,
      checkAge,
      age,
      sex,
      height,
      weight,
      resultMsg,
      isDone,
      ills,
      showNumber,
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
  padding: 8px 6px;
  height: 45px;
}
td {
  width: 250px;
}
th {
  width: 150px;
}
tr.one {
  background-color: rgb(235, 235, 235);
}
tr.two {
  background-color: lightcyan;
}
.doneBtn {
  padding: auto;
  margin: 20px 200px;
  width: 160px;
  height: 40px;
  font-size: 1.5em;
}
input {
  font-size: 1.2em;
}
/* td:nth-child(odd),
th:nth-child(odd) {
  background-color: aqua;
}
td:nth-child(even),
th:nth-child(even) {
  background-color: cadetblue;
} */
</style>
