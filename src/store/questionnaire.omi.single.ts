import { Category, SingleCheck } from "./questionnaire.model";

// SINGLE
export const singleDataOmi: SingleCheck = new SingleCheck([
  // index=0
  {
    title:
      "今回のCOVID-19発症日について、最後のワクチン接種との間隔や以前の新型コロナ感染歴との間隔についてお聞きします",
    message:
      "以下の条件について、<b>ひとつでも</b>当てはまりますか。<br>・コロナワクチン2回以上接種かつ、最後の接種日から2週間～3か月である<br>・3か月以内に以前の新型コロナウィルス感染歴がある",
    choices: [
      { id: 0, text: "はい" },
      { id: 1, text: "いいえ、ひとつも当てはまらない" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.result, index: 0 };
      } else {
        return { category: Category.multiCheck, index: 0 };
      }
    },
    paxlo: false,
  },
  //index=1
  {
    title: "発症からどれくらい経過しているか、お聞きします。",
    message: "day いくつ ですか？<b>（発症日はday 0)</b>",
    choices: [
      { id: 0, text: "~ day3" },
      { id: 1, text: "day4 ~ 7" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.singleCheck, index: 2 };
      } else {
        return { category: Category.singleCheck, index: 3 };
      }
    },
    paxlo: false,
  },
  //index=2
  {
    title: "症状が比較的落ち着いているか、お聞きします。(day0-3)",
    message:
      "以下の条件について、<b>すべて</b>当てはまりますか。<br>・食欲は比較的ある（食事は普段の半分位食べている）<br>・呼吸苦なし、かつ、SpO2≧95",
    choices: [
      { id: 0, text: "はい、<b>全て</b>当てはまる" },
      { id: 1, text: "いいえ、少なくともひとつは当てはまらない" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.singleCheck, index: 6 };
      } else {
        return { category: Category.singleCheck, index: 8 };
      }
    },
    paxlo: false,
  },
  //index=3
  {
    title: "症状が比較的落ち着いているか、お聞きします。(day4-7)",
    message:
      "以下の条件について、<b>すべて</b>当てはまりますか。<br>・食欲は比較的ある（食事は普段の半分位食べている）<br>・呼吸苦なし、かつ、SpO2≧95",
    choices: [
      { id: 0, text: "はい、<b>全て</b>当てはまる" },
      { id: 1, text: "いいえ、少なくともひとつは当てはまらない" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.singleCheck, index: 4 };
      } else {
        return { category: Category.singleCheck, index: 5 };
      }
    },
    paxlo: false,
  },
  //index=4
  {
    title: "熱や倦怠感の経過を、お聞きします。(day4-7,mild)",
    message:
      "熱や倦怠感は、解熱薬服用後でなくとも、明らかに良くなってきていますか？",
    choices: [
      { id: 0, text: "明らかに良くなってきていて、ほぼ解熱している。" },
      { id: 1, text: "明らかに良くなってきているとは言えない。" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.result, index: 2 };
      } else {
        return { category: Category.result, index: 3 };
      }
    },
    paxlo: false,
  },
  //index=5
  {
    title: "<b>本日の</b>SpO2を確認します(day4-7,#)",
    message:
      "<b>手が冷たかったり、マスクをしていると、実際より低い数値になることがあります。</b>マニュキュアやネイルアートをしている場合は、正しく測定できません。",
    choices: [
      { id: 0, text: "SpO2≧93" },
      { id: 1, text: "SpO2＜93" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.result, index: 4 };
      } else {
        return { category: Category.result, index: 5 };
      }
    },
    paxlo: false,
  },
  //index=6
  {
    title:
      "腎機能を、お聞きします。(day0-3,mild)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",
    message: "eGFR≧30 と確認できますか？",
    choices: [
      { id: 0, text: "eGFR≧30と確認できる" },
      { id: 1, text: "eGFR＜30、あるいは不明" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.singleCheck, index: 7 };
      } else {
        return { category: Category.result, index: 6 };
      }
    },
    paxlo: false,
  },
  //index=7
  {
    title: "服薬中のすべての薬について、お聞きします(day0-3,mild)",
    message:
      "<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",
    choices: [
      { id: 0, text: "すべて、パキロビッドパックの併用禁忌薬でない" },
      { id: 1, text: "併用禁忌薬がある、あるいは確認できない" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.result, index: 7 };
      } else {
        return { category: Category.result, index: 8 };
      }
    },
    paxlo: true,
  },
  //index=8
  {
    title: "<b>本日の</b>SpO2を確認します(day0-3),#",
    message:
      "<b>手が冷たかったり、マスクをしていると、実際より低い数値になることがあります。</b>マニュキュアやネイルアートをしている場合は、正しく測定できません。",
    choices: [
      { id: 0, text: "SpO2≧93" },
      { id: 1, text: "SpO2＜93" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.singleCheck, index: 9 };
      } else {
        return { category: Category.result, index: 9 };
      }
    },
    paxlo: false,
  },
  //index=9
  {
    title:
      "腎機能を、お聞きします。(day0-3,#)<br>3か月以内の腎機能を教えてください。ただし、進行性の腎障害の懸念がなければ、6か月以内の腎機能でかまいません。",
    message: "eGFR≧30 と確認できますか？",
    choices: [
      { id: 0, text: "eGFR≧30と確認できる" },
      { id: 1, text: "eGFR＜30、あるいは不明" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.singleCheck, index: 10 };
      } else {
        return { category: Category.result, index: 10 };
      }
    },
    paxlo: false,
  },
  //index=10
  {
    title: "服薬中のすべての薬について、お聞きします(day0-3,#)",
    message:
      "<b>すべて</b>、パキロビッドパックの併用禁忌薬ではないと、確認ができますか？",
    choices: [
      { id: 0, text: "すべて、パキロビッドパックの併用禁忌薬でない" },
      { id: 1, text: "併用禁忌薬がある、あるいは確認できない" },
    ],
    next: (answer: number) => {
      if (answer == 0) {
        return { category: Category.result, index: 11 };
      } else {
        return { category: Category.result, index: 12 };
      }
    },
    paxlo: true,
  },
]);
