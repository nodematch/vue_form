<template>
  <div>
    <header-component />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default defineComponent({
  components: {
    HeaderComponent,
  },
});
</script>

<style>
@import "../src/css/originalColor.css";
@page {
  size: A4 portrait;
  margin: 0mm;
  padding: 0mm;
}
@media print{
  .noprint {
    display: none;
  }
}
</style>
