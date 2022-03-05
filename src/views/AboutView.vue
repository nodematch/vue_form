<template>
  <div>
    <medi-form />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MediForm from "@/components/MediForm.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    MediForm,
  },
});
</script>
