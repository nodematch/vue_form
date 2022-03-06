<template>
  <div class="container">
    <div class="text-center mb-3 fontL">入力フォーム</div>
    <div class="text-left fs-4 p-3">{{ qs[index].message }}</div>
    <div class="form-group">
      <div
        class="form-check p-1"
        v-for="item in qs[index].list"
        :key="item.name"
      >
        <input
          type="radio"
          name="risk"
          :value="item.id"
          :id="item.text"
          v-model="a"
          class="form-check-input fs-6"
        />
        <label :for="item.text" class="form-check-label fs-6">
          {{ item.text }}
        </label>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary" @click="onclick">完了</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import errCheck from "@/store/errCheck";
import router from "@/router/index";
import { qs } from "@/store/questionnaire";

export default defineComponent({
  name: "MediForm",
  setup() {
    let index = 2;
    const a = ref([0, 0, 0]);
    const onclick = () => {
      console.log(index);
      console.log(a.value);
      console.log(qs[index].nextQID(a.value[index]));
      let n: number = qs[index].nextQID(a.value[index]);
      index = n;
    };
    console.log(qs[index]);
    return {
      a,
      onclick,
    };
  },
});
</script>

<style scoped>
@import "@/bootstrap-5.0.2-dist/css/bootstrap.min.css";

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
/* input {
  font-size: 1em;
}
label {
  font-size: 1em;
} */
.fontL {
  font-size: 1.4em;
}
</style>
