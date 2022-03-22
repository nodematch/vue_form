import { Category, MultiCheck } from "./questionnaire.model";

// MULTI
export const multiData: MultiCheck = new MultiCheck([
  {
    title: "重症化リスク因子があるか、お聞きします。",
    message:
      "あてはまる因子を、すべて選んでください。(ない場合はそのまま進んで下さい)<br> * は特に重い因子",
    choices: [
      { id: 0, text: "60歳以上" },
      { id: 1, text: "COPD, ステロイド吸入を要するBA *" },
      { id: 2, text: "CKD" },
      { id: 3, text: "治療が必要な糖尿病" },
      { id: 4, text: "高血圧、高脂血症" },
      { id: 5, text: "活動性の悪性腫瘍 *" },
      { id: 6, text: " 肥満（BMI≧25）" },
      { id: 7, text: "喫煙（過去30日以内）" },
      { id: 8, text: "24週以後の妊婦" },
      {
        id: 9,
        text: "14日以上のステロイド（PSL20mg/d相当）、生物学的製剤、免疫調整薬（メトトレキサート、メルカプトリン、アザチオプリン等）の長期投与",
      },
      { id: 10, text: "HIV感染症、骨髄・臓器移植、原発性免疫不全 *" },
      { id: 11, text: "うっ血性心不全、心筋症 *" },
      {
        id: 12,
        text: "心血管系疾患の既往（脳梗塞、心筋梗塞、狭心症、閉塞性動脈硬化症等） *",
      },
      { id: 13, text: "慢性神経疾患（認知症、脳卒中、てんかんを含む） *" },
      { id: 14, text: "重度の精神疾患、重度の学習障害、脳性麻痺" },
      { id: 15, text: "ダウン症、遺伝性疾患" },
      { id: 16, text: "重度の肝疾患（肝硬変等）" },
      { id: 17, text: "医療技術への常態化した依存（NIPPV等） *" },
    ],
    next: (answer: number[]) => {
      if (answer.length == 0) {
        return { category: Category.result, index: 1 };
      } else {
        return { category: Category.multiCheck, index: 1 };
      }
    },
  },
  {
    title: "特にリスクが高いと考えられる因子について、さらにお聞きします。",
    message:
      "あてはまる因子を、すべて選んでください。(ない場合はそのまま進んで下さい)",
    choices: [
      { id: 0, text: "70代男性、80代以上男女" },
      { id: 1, text: "高度のCKD（eGFR ＜30相当)" },
      { id: 2, text: "コントロール不良DM（A1c＞8相当）" },
      { id: 3, text: "高度の肥満（BMI≧30）" },
      {
        id: 4,
        text: "60代男性プラスアルファ（HT、 HL、治療を要するDM、喫煙、BMI≧25）",
      },
    ],
    // eslint-disable-next-line 
    next: (answer: number[]) => {
      return { category: Category.singleCheck, index: 1 };
    },
  },
]);

