<template>
  <div>
    <HelloWorld msg="重症化予測スコア 入力フォーム" />
  </div>
  <div>
    <score-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ScoreForm from "@/components/ScoreForm.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    ScoreForm,
  },
});
</script>
