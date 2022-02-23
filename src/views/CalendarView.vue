<template>
  <div>Calendar</div>
  <div>{{ gts }}</div>
  <div><button @click="project">BTN</button></div>
  <div><button @click="act">ACT</button></div>
  <div><input type="file" accept="text/plain" @change="fileUpload" /></div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { store } from "@/store";

export default defineComponent({
  name: "CalendarView",
  setup() {
    const project = () => {
      console.log(store);
    };
    const act = () => {
      store.dispatch("increment");
    };
    const gts = computed(() => store.getters.getNumber);
    const fileUpload = (event: any) => {
      console.log("upload");
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file, "utf-8");
      reader.onload = function (ev: ProgressEvent<FileReader>) {
        console.log(reader.result);
      };
      console.log(event);
    };
    return {
      project,
      gts,
      act,
      fileUpload,
    };
  },
});
</script>
