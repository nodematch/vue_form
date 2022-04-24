<template>
  <div class="container">
    <div class="card">
      <div class="fs-4 my-2 text-center">
        <p>あま市・大治町医療機関の患者</p>
        <p>発症早期における治療選択フロー 第2版</p>
        <div class="card m-3">
          <div class="card-body text-center text-dark">
            <div class="fs-4 text-center"><b>対象（下記をすべて満たす）</b></div>
            <div class="fs-6 text-center text-danger fw-bold">・18才以上 または 12~17才でBW≧40kg</div>
            <div class="fs-6 text-center text-danger fw-bold">・day0~7の外来患者</div>
            <div class="fs-6 text-center mt-3">日数の数え方</div>
            <table class="table table-bordered fs-6">
              <tr class="table-info">
                <td>day 0</td>
                <td>day 1</td>
                <td>day 2</td>
                <td>day 3</td>
              </tr>
              <tr>
                <td>発症日</td>
                <td>発症翌日</td>
                <td>・・・</td>
                <td>・・・</td>
              </tr>
            </table>
          </div>
        </div>
        <p class="text-end fs-6">あま市民病院ICT作成（2022年3月23日）</p>
      </div>
      <div class="card p-1 m-1 bg-light">
        <div class="card-body text-center text-dark">
          <div class="text-center fs-4 mb-5">
            <p>BA.2 流行期のフロー</p>
            <p class="fs-6">早期治療：ラゲブリオ、パキロビッドパック、ベクルリー</p>
            <p class="fs-6">2022年4月1日~</p>
            <p class="text-end fs-6"></p>
          </div>
          <router-link class="btn btn-primary fs-5" to="/titleinformation1?type=ba2">スクリーニングを開始する</router-link>
        </div>
      </div>
      <div class="card p-1 m-1 bg-light">
        <div class="card-body text-center text-dark">
          <div class="text-center fs-4 mb-5">
            <p>オミクロン流行期のフロー</p>
          </div>
          <router-link class="btn btn-primary fs-5 disabled" to="/titleinformation1?type=omicron">
            <p><s>スクリーニングを開始する</s></p>
            <p>終了しました</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import router from "@/router";
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  setup(){
    if(location.search == "?printinput=true"){
      router.push({name: "PrintInput"})
    }
  }
});
</script>
