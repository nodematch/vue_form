<template>
  <div class="container my-4">
    <table class="table table-borderless">
      <thead class="color1">
        <tr>
          <td>
            <div class="fs-4 text-center">{{ title }}</div>
            <div class="fs-6 text-end">{{ text1 }}</div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr class="fs-6" v-for="item in items" :key="item">
          <td v-html="item"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MedicineTable",
  setup() {
    const title = "パキロビッドパック併用禁忌薬 早見表";
    const text1 =
      "出典: パキロビッドパック 投与前チェックシート（ファイザー）※併用注意薬は、同チェックシート参照）";
    const items = [
      [
        "<b>降圧薬</b>●オルメサルタン/メドキソミル・アゼルニジピン（<b class='cc'>レザルタス配合錠</b>） ●アゼルニジピン（<b class='cc'>カルブロック</b>）",
      ],
      [
        "<b>高脂血症</b>●ロミタピドメシル酸塩（<b class='cc'>ジャクスタピッド</b>）",
      ],
      ["<b>抗凝固薬</b>●リバーロキサバン（<b class='cc'>イグザレルト</b>）"],
      [""],
      [
        "<b>催眠鎮痛薬・抗不安薬</b>●クロラゼプ酸二カリウム（<b class='cc'>メンドン</b>）●エスタゾラム（<b class='cc'>ユーロジン</b>）●フルラゼパム塩酸塩（<b class='cc'>ダルメート</b>）●トリアゾラム（<b class='cc'>ハルシオン</b>）",
      ],
      [
        "<b>抗てんかん薬・抗不安薬</b>●ミダゾラム（<b class='cc'>ドルミカム、ミダフレッサ</b>）●ジアゼパム（<b class='cc'>セルシン、ホリゾン</b>）",
      ],
      [
        "<b>抗精神病薬</b>●ブロナンセリン（<b class='cc'>ロナセン</b>）●ルラシドン塩酸塩（<b class='cc'>ラツーダ</b>）●<b class='cc'>ピモジド</b>",
      ],
      [
        "<b>抗てんかん薬</b>●カルバマゼピン（<b class='cc'>テグレトール</b>）●フェノバルビタール（<b class='cc'>フェノバール</b>）●フェニトイン（<b class='cc'>ヒダントール、アレビアチン</b>）●ホスフェニトインナトリウム（<b class='cc'>ホストイン</b>）",
      ],
      [""],
      [
        "<b>鎮痛薬</b>●アンピロキシカム（<b class='cc'>フルカム</b>） ●ピロキシカム（<b class='cc'>バキソ、フェルデン</b>）",
      ],
      [
        "<b>頭痛治療薬</b>●エルゴタミン酒石酸塩・無水カフェイン・イソプロピルアンチピリン（<b class='cc'>クリアミン</b>）",
      ],
      [
        "<b>片頭痛治療薬</b>●エレトリプタン臭化水素酸塩（<b class='cc'>レルパックス</b>）●<b class='cc'>ジヒドロエルゴタミンメシル酸塩</b>",
      ],
      [""],
      [
        "<b>抗不整脈薬</b>●アミオダロン塩酸塩（<b class='cc'>アンカロン</b>）●ペプリジル塩酸塩（<b class='cc'>ベプリコール</b>）●フレカイニド酢酸塩（<b class='cc'>タンボコール</b>）●プロパフェノン塩酸塩（<b class='cc'>プロノン</b>）●<b class='cc'>キニジン</b>硫酸塩",
      ],
      [""],
      [
        "<b>肺高血圧治療薬</b>●シルデナフィルクエン酸塩（<b class='cc'>レバチオ</b>）●タダラフィル（<b class='cc'>アドシルカ</b>）●リオシグアト（<b class='cc'>アデムパス</b>）",
      ],
      [""],
      [
        "<b>抗結核薬</b>●リファブチン（<b class='cc'>ミコブティン</b>） ●リファンピシン（<b class='cc'>リファジン</b>）",
      ],
      ["<b>抗真菌薬</b>●ボリコナゾール（<b class='cc'>ブイフェンド</b>）"],
      [""],
      [
        "<b>抗ガン薬</b>●ベネトクラクス（<b class='cc'>ベネクレクスタ</b>）の用量漸増期 ●アパルタミド（<b class='cc'>アーリーダ</b>）",
        [""],
      ],
      ["<b>勃起不全改善薬</b>●バルデナフィル塩酸塩（<b class='cc'>レビトラ</b>）"],
      [""],
      ["<b>そのほか</b>"],
      [
        "<b>子宮収縮薬</b>●<b class='cc'>エルゴメトリンマレイン</b>酸塩 ●メチルエルゴメトリンマレイン酸塩（<b class='cc'>パルタン</b>）",
      ],
      [
        "●<b class='cc'>セイヨウオトギリソウ</b>（<b class='cc'>セント・ジョーンズ・ワート</b>）含有食品: ハーブティー、サプリメントなど",
      ],
      [
        "●<b class='cc'>コルヒチン</b>（腎機能または肝機能障害のある患者に投与されている場合）",
      ],
    ];
    return {
      title,
      text1,
      items,
    };
  },
});
</script>
<style scoped>
.color1 {
  background-color: rgb(187, 187, 187);
}
.color2 {
  background-color: rgb(235, 235, 235);
}
::v-deep .cc {
  color: blue;
}
</style>
