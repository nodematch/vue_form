<template>
  <div v-bind:class="classWrap">
    <label v-bind:for="title" v-bind:class="classLabel">{{ title }}</label>
    <div v-bind:class="col[1]">
      <input
        v-bind:type="inputType"
        v-bind:class="classInput"
        :value="value"
        @input="$emit('chv', $event.target.value)"
        v-bind:id="title"
      />
    </div>
  </div>  
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: "InputWrite",
  props: {
    title: {
      type: String,
      default: "hereT",
    },
    value: {
      type: [Number,String],
      default: 0,
    },
    fs: {
      type: String,
      default: "fs-3",
    },
    col: {
      type: Array as PropType<string[]>,
      default:() => { return ["col-6", "col-6"]},
    },
    color: {
      type: String,
      default: "",
    },
  },
  setup(p){
    const classLabel = p.col[0] + " " + "col-form-label " + p.fs;
    const classInput = "form-control col-control " + p.fs;
    const classWrap = "row p-1 mx-1 justify-content-center " + p.color;
    const inputType = typeof p.value;
    return {
      classInput,
      classLabel,
      classWrap,
      inputType,
    }
  },
})
</script>
