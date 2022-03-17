<template>
  <div class="container">
    <div class="card p-1">
      <div class="card-body text-center text-dark bg-light">
        <div class="text-center fs-4 mb-5">
          <p>あま市・大治町医療機関の患者</p>
          <p>発症早期における治療選択フロー第１版</p>
          <p class="text-end fs-6">あま市民病院ICT作成（2022年3月7日）</p>
        </div>
        <router-link class="btn btn-primary fs-5" to="/titleinformation1">スクリーニングを開始する</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    // if (location.search == "?id=printv2") {
    //   router.push({
    //     name: "PrintBu2",
    //   });
    // }
  },
});
</script>
