export interface InputData1 {
  ageType: number,
  weight: number,
  height: number,
  sex: number,
  age: number,
  riskVals: number[],
}

export class RiskData1 {
  constructor(
    points: [young: number, middle: number, old: number],
    name: string
  ) {
    this.name = name;
    this.points = points;
  }
  name = "";
  points: [young: number, middle: number, old: number] = [0, 0, 0];
  PointAtAgeType(ageType: number) {
    return this.points[ageType];
  }
  isShow(ageType: number) {
    return this.points[ageType] != 0;
  }
}

export const Calculation = {
  BMI(height: number, weight: number) { return weight / (height / 100) ** 2 },
  AgeType(age: number): number {
    if (age < 40) {
      return 0;
    } else if (age < 65) {
      return 1;
    } else {
      return 2;
    }
  },
  Point(ills: RiskData1[], d: InputData1): number {
    let sum = 0;
    //ill
    for (let i = 0; i < ills.length; i++) {
      sum += ills[i].PointAtAgeType(d.ageType) * d.riskVals[i];
    }
    //age
    if ((d.age > 29 && d.age < 40) || (d.age > 49 && d.age < 60)) {
      sum += 1;
    } else if (d.age > 59 && d.age < 65) {
      sum += 3;
    } else if (d.age > 74) {
      sum += 2;
    }
    //sex
    if (d.sex == 1 && d.age < 65) {
      sum += 1;
    }
    //bmi
    const bmi = d.weight / (d.height / 100) ** 2;
    if (d.age < 40) {
      if (bmi > 30) {
        sum += 2;
      } else if (bmi > 23) {
        sum += 1;
      }
    } else {
      if (bmi > 25) {
        sum += 2;
      }
    }
    //score
    return sum;
  },
  judge(ageType: number, score: number): boolean {
    return (ageType == 0 && score > 5) || (ageType == 1 && score > 4) || (ageType == 2 && score > 2);
  },
  checkValue(vs: { n: number | string; min: number; max: number; name: string }): string {
    let result = "";
    if(typeof vs.n === "string") {
      result = "value of " + vs.name + " is invalid";
    } else {
      vs.n = vs.n as number;
      if (vs.n < vs.min || vs.max < vs.n) {
        result = "value of " + vs.name + " is invalid";
      }
    }
    return result;
  },
};

export const risks: RiskData1[] = [
  new RiskData1([0, 0, 2], "うっ血性心不全"),
  new RiskData1([0, 0, 1], "脳血管疾患"),
  new RiskData1([0, 1, 2], "糖尿病"),
  new RiskData1([0, 0, 2], "高血圧"),
  new RiskData1([3, 0, 0], "悪性疾患"),
  new RiskData1([2, 2, 4], "発熱"),
  new RiskData1([0, 1, 1], "咳"),
  new RiskData1([1, 2, 4], "呼吸困難"),
  new RiskData1([1, 0, 0], "喘鳴"),
  new RiskData1([0, 1, 0], "倦怠感"),
];