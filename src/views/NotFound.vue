<template>
  <div>Not Found</div>
  <button-component :contents="buttonContent" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import router from "@/router";

export default defineComponent({
  name: "NotFound",
  components: {
    ButtonComponent,
  },
  setup() {
    const buttonContent = [{
      text: "トップへ戻る",
      func: () => { router.push({ name: "home"})},
      color: "bg-light"
    }];
    return {
      buttonContent,
    }
  },
});
</script>
