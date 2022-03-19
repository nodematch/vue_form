<template>
  <nav class="navbar greenA">
    <div class="container-fluid">
      <h1 class="navbar-brand fs-4">あま市民病院ICT</h1>
      <div class="nav-item dropdown">
        <button class="btn btn-secondary dropdown-toggle nav-link text-dark bg-light" type="button" id="navh" data-bs-toggle="dropdown">
          メニュー
        </button>
        <ul class="dropdown-menu dropdown-menu-end nav-item" aria-labelledby="navh">
          <li>
            <router-link to="/" class="dropdown-item" id="toTop">Top</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  setup() {
    const collapseSt = ref("collaspe")
    const closeNavBar = () => {
      collapseSt.value = "collapse"
    }
    return {
      collapseSt,
      closeNavBar,
    }
    // const closeNavBar = () => {
    //   var collapse = document.getElementById("toTop");

    // }
    // }]
  }
});
</script>
<style scoped>
@media print{
  nav {
    display: none;
  }
}
</style>
