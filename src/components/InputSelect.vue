<template>
  <div v-bind:class="classWrap">
    <label v-bind:class="classTitle">{{ title }}</label>
    <div class="form-check col-3">
      <input
        type="radio"
        value="0"
        v-bind:class="classInput"
        v-bind:name="sc.name"
        v-bind:id="sc.sel0"
        v-bind:checked="value==0"
        @change="$emit('chv', $event.target.value)"
      />
      <label v-bind:class="classLabel" v-bind:for="sc.sel0">{{ sc.sel0 }}</label>
    </div>
    <div class="form-check col-3">
      <input
        type="radio"
        value="1"
        v-bind:class="classInput"
        v-bind:name="sc.name"
        v-bind:id="sc.sel1"
        v-bind:checked="value==1"
        @change="$emit('chv', $event.target.value)"
      />
      <label v-bind:class="classLabel" v-bind:for="sc.sel1">{{ sc.sel1 }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Sel {
  name: string,
  sel0: string,
  sel1: string,
}

export default defineComponent({
  name: "InputSelect",
  props: {
    title: {
      type: String,
      default: "hereT",
    },
    value: {
      type: Number,
      default: 0,
    },
    fs: {
      type: String,
      default: "fs-4",
    },
    color: {
      type: String,
      default: "",
    },
    sc: {
      type: Object as PropType<Sel>,
    }
  },
  setup(p){
    const classTitle = "col-6 col-form-label " + p.fs;
    const classLabel = "form-check-label  " + p.fs;
    const classInput = "form-check-input " + p.fs;
    const classWrap = "row p-1 mx-1 justify-content-center " + p.color;
    return {
      classTitle,
      classInput,
      classLabel,
      classWrap,
    }
  },
})
</script>
