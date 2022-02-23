<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style scoped>
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
