export type Choice = {
  id: number;
  text: string;
};

export class SingleQ {
  constructor(
    message: string,
    list: Array<Choice>,
    nextQID: (answer: number) => number
  ) {
    this.message = message;
    this.list = list;
    this.nextQID = nextQID;
  }
  message = "";
  list: Array<Choice> = [];
  nextQID(answer: number) {
    return 0;
  }
}

export const risks: Array<Choice> = [
  { id: 0, text: "60歳以上" },
  { id: 1, text: "活動性の悪性腫瘍" },
  { id: 2, text: "BMI≧25" },
  { id: 3, text: "過去30日以内の喫煙" },
  { id: 4, text: "24週以後の妊婦" },
  { id: 5, text: "COPD、ステロイド吸入要するBA" },
  { id: 6, text: "CKD,重度の肝疾患（肝硬変等）" },
  { id: 7, text: "治療を要する糖尿病" },
  { id: 8, text: "高血圧、うっ血性心不全、高脂血症" },
  { id: 9, text: "ステロイド長期投与（PSL20mg以上相当）、生物学的製剤" },
  { id: 10, text: "HIV感染症（CD<200/ul）、骨髄・臓器移植、原発性免疫不全" },
  { id: 11, text: "免疫調節薬（MTX、AZA、6-MP 等）の長期投与" },
  { id: 12, text: "うっ血性心不全、心筋症" },
  { id: 13, text: "心血管系疾患の既往（脳梗塞、心筋梗塞、狭心症等）" },
  { id: 14, text: "慢性神経疾患（認知症、脳卒中、てんかんを含む）" },
  { id: 15, text: "重度の精神疾患、重度の学習障害、脳性麻痺" },
  { id: 16, text: "ダウン症、遺伝性疾患" },
  { id: 17, text: "医療技術への状態的な依存（持続陽圧呼吸治療等）" },
];
