<template>
  <div class="container noprint">
    <form class="m-1">
      <div class="form-check mx-1">
        <input class="form-check-input" type="checkbox" v-model="checkValue" id="helpC">
        <label class="form-check-label" for="helpC">入力補助を利用する</label>
      </div>
    </form>
    <div v-show="checkValue">
      <form>
        <label for="ta" class="form-label">Example textarea</label>
        <textarea class="form-control" id="ta" rows="5" v-model="textValue" @input="checkText(textArray)"></textarea>
      </form>
      <div>
        <table class="table">
          <tr>
            <th>医療機関名</th>
            <td>{{ textArray[0] }}</td>
          </tr>
          <tr>
            <th>担当医師名</th>
            <td>{{ textArray[1] }}</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>{{ textArray[2] }}</td>
          </tr>
          <tr>
            <th>TEL</th>
            <td>{{ textArray[3] }}</td>
          </tr>
          <tr>
            <th>FAX</th>
            <td>{{ textArray[4] }}</td>
          </tr>
        </table>
        改行してテキストを貼り付けて（入力して）ください。
        印刷用紙に反映されます。
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: "TestView",
  setup(){
    const textValue = ref("改行してテキストを\n貼り付けて（入力して）\nください。\n印刷用紙に反映されます。");
    const checkValue = ref(false)
    const textArray = ref(["", "", "", "", ""]);
    const checkText = (textArr5: string[]) => {
      let strsN = textValue.value.split('\n');
      let strsR = textValue.value.split('\r\n');
      let strs = strsN.length > strsR.length ? strsN : strsR;
      for (let i = 0; i < 5; i++) {
        textArr5[i] = i < strs.length ? strs[i] : "";
      }
      return textArr5;
    };
    checkText(textArray.value);
    return {
      textValue,
      checkValue,
      checkText,
      textArray,
    }
  }
})
</script>
