<template>
  <div>
    <score-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScoreForm from "@/components/ScoreForm.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ScoreForm,
  },
});
</script>
