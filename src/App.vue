<template>
  <!-- <header-component /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HeaderComponent from "@/components/Header.vue";

export default defineComponent({
  // components: {
  //   HeaderComponent,
  // },
});
</script>

<style>
/* #app {
  padding: 0mm;
  margin: 0mm;
} */
@page {
  size: A4 portrait;
  margin: 0mm;
  padding: 0mm;
}
</style>
