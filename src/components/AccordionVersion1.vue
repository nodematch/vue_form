<template>
  <div class="accordion my-3">
    <div class="accordion-body blueA fs-5 display-1 fw-normal p-2" v-html="headText"></div>
    <div class="accordion-item" v-for="item in contents" :key="item.idn">
      <h2 class="accordion-header" v-bind:id='item.idn + "parent"'>
        <button class="accordion-button" type="button" data-bs-toggle="collapse" v-bind:data-bs-target='"#" + item.idn + "child"' aria-expanded="true" v-bind:aria-controls='"#" + item.idn + "child"' v-html="item.title"></button>
      </h2>
      <div v-bind:id='item.idn + "child"' v-bind:class="'accordion-collapse collapse ' + item.isShow" v-bind:aria-labelledby='"#" + item.idn + "parent"'>
        <div class="accordion-body" v-html="item.msg"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,PropType } from 'vue'

export interface Acc {
  title: string,
  msg: string,
  isShow: string,
  idn: string,
}

export default defineComponent({
  name: "AccordionVersion1",
  props: {
    contents: Array as PropType<Acc[]>,
    headText: String,
  },
})
</script>
