<template>
  <nav class="navbar greenA">
    <div class="container-fluid">
      <h1 class="navbar-brand fs-4">あま市民病院ICT</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navh" aria-controls="navh" aria-expanded="false" aria-label="メニュー">
        メニュー
      </button>
      <div class="collapse navbar-collapse" id="navh">
        <ul class="navbar-nav text-center fs-5 mb-2">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" href="#">Top</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>
<style scoped>
@media print{
  nav {
    display: none;
  }
}
</style>
