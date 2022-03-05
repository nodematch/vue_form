<template>
  <div class="container">
    <div class="text-center mb-3 fontL">入力フォーム</div>
    <div class="form-group">
      <div
        v-for="choice in questions.list"
        :key="choice.name"
        class="form-inline"
      >
        <input
          type="radio"
          name="risk"
          :value="choice.id"
          :id="choice.text"
          v-model.number="riskNumber"
          class="col-1"
        />
        <div class="col-11">
          <label :for="choice.text" class="float-left">
            {{ choice.text }}
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
import { defineComponent, Ref, ref } from "vue";
import { personData } from "@/store/ill.model";
import errCheck from "@/store/errCheck";
import router from "@/router/index";
import { questions } from "@/store/questionnaire";

export default defineComponent({
  name: "MediForm",
  setup() {
    const answer = ref([]);
    const riskNumber = ref(99);
    return {
      questions,
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
