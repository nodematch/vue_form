<template>
  <div class="row justify-content-center my-1">
    <div class="col-auto" v-for="item in contents" :key="item.text">
      <button v-bind:class="'btn m-1 ' + item.color" @click="item.func">
        {{ item.text }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Btn {
  text: string,
  func: void,
  color: string,
}
export default defineComponent({
  name: "ButtonComponent",
  props: {
    contents: Array as PropType<Btn[]>,
  },
})
</script>
