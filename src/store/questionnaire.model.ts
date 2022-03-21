export const Category = {
  singleCheck: 0,
  multiCheck: 1,
  result: 2,
} as const;
export type Category = typeof Category[keyof typeof Category];

export class SingleCheck {
  qst: Array<Single> = [];
  ans: Array<number> = [];
  constructor(qst: Array<Single>) {
    this.qst = qst;
    this.ans = new Array<number>(qst.length);
    for (let i = 0; i < this.ans.length; i++) {
      this.ans[i] = -1;
    }
  }
}
export class MultiCheck {
  qst: Array<Multi> = [];
  ans: Array<number[]> = [];
  constructor(qst: Array<Multi>) {
    this.qst = qst;
    this.ans = new Array<number[]>(qst.length);
    for (let i = 0; i < this.ans.length; i++) {
      this.ans[i] = [];
    }
  }
}
export class ResultScreen {
  list: Array<Result> = [];
  constructor(list: Array<Result>) {
    this.list = list;
  }
}
type Single = {
  title: string;
  message: string;
  choices: Array<{ id: number; text: string }>;
  next: (answer: number) => Succession;
  paxlo: boolean,
};
type Multi = {
  title: string;
  message: string;
  choices: Array<{ id: number; text: string }>;
  next: (answer: number[]) => Succession;
};
type Result = {
  title: string;
  message: string;
  medicine?: string;
  addition?: string;
};

export type Succession = {
  category: Category;
  index: number;
};

export const riskA: string[] = [
  "COPD、ステロイド吸入要するBA",
  "活動性の悪性腫瘍",
  "HIV感染症（CD<200/ul）、骨髄・臓器移植、原発性免疫不全",
  "ステロイド（PSL20mg以上相当）14日以上、長期の免疫調節薬（MTX、AZA、6-MP 等）、生物学的製剤",
  "心血管系疾患（脳梗塞、心筋梗塞、狭心症等）、うっ血性心不全、心筋症",
  "重度の肝臓疾患（肝硬変等）",
  "CKD eGFr < 30相当",
  "コントロール不良DM（A1c > 8）",
  "高度の肥満（BMI≧30）",
  "60代男性 + a（HT、HL、治療するDM、喫煙、BMI≧25）",
  "80代以上男女または70代男性",
];
export const riskB: string[] = [
  "60歳以上",
  "CKD",
  "治療を要する糖尿病",
  "高血圧、高脂血症",
  "BMI≧25",
  "過去30日以内の喫煙",
  "慢性神経疾患（認知症、脳卒中、てんかんを含む）、重度精神疾患、重度学習障害、脳性麻痺、ダウン症、遺伝性疾患",
  "医療技術への状態的な依存（持続陽圧呼吸治療等）",
  "24週以後の妊婦",
];
