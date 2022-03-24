<template>
  <div class="container noprint">
    <form class="p-1">
      <div class="form-check mx-1">
        <input class="form-check-input" type="checkbox" v-model="checkValue" id="helpC" @change="$emit('evAll', dataObj())">
        <label class="form-check-label" for="helpC">入力補助を利用する</label>
      </div>
    </form>
    <div v-show="checkValue">
      <div>---------</div>
      <form>
        <div class="form-check mx-1">
          <input class="form-check-input" type="checkbox" v-model="checkDate" id="getDate" @change="$emit('evD', dateArray())">
          <label class="form-check-label" for="getDate">現在の日付を使う</label>
        </div>
        <label for="ta" class="form-label">
          テキストを貼り付けて（入力して）ください。改行ごとに印刷用紙に反映されます。
        </label>
        <textarea class="form-control" id="ta" rows="5" v-model="textValue" @input="$emit('evT',checkText())"></textarea>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: "HelpInput",
  setup(){
    const textValue = ref("記入例クリニック\n記入 太郎\n記入例町\n000-00-0000\n111-11-1111");
    const checkValue = ref(false)
    const textArray = ref(["", "", "", "", ""]);
    const checkDate = ref(false);
    const dateArray = () => {
      if(checkDate.value) {
        let d = new Date();
        let year = d.getFullYear().toString();
        let mounth = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        return [year, mounth, day];
      } else {
        return ["", "", ""];
      }
    }
    const checkText = () => {
      let strsN = textValue.value.split('\n');
      let strsR = textValue.value.split('\r\n');
      let strs = strsN.length > strsR.length ? strsN : strsR;
      for (let i = 0; i < 5; i++) {
        textArray.value[i] = i < strs.length ? strs[i] : "";
      }
      return textArray.value;
    };
    const dataObj = () => {
      if(checkValue.value) {
        return {textArray: checkText(), dateArray: dateArray()};
      } else {
        return {textArray: ["", "", "", "", ""], dateArray: ["", "", ""]};
      }
    }
    checkText();
    return {
      textValue,
      checkValue,
      checkText,
      textArray,
      checkDate,
      dateArray,
      dataObj,
    }
  }
})
</script>
