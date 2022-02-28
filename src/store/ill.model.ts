export const AgeType = {
  young: 0,
  middle: 1,
  old: 2,
} as const;
export type AgeType = typeof AgeType[keyof typeof AgeType];

export class illData {
  constructor(
    points: [young: number, middle: number, old: number],
    name: string
  ) {
    this.name = name;
    this.points = points;
  }
  name = "";
  points: [young: number, middle: number, old: number] = [0, 0, 0];
  calcPoint(ageType: AgeType) {
    return this.points[ageType];
  }
  isShow(ageType: AgeType) {
    return this.points[ageType] != 0;
  }
}

export class personData {
  constructor(
    inf: { age: number; sex: number; weight: number; height: number },
    ills: illData[]
  ) {
    this.age = inf.age;
    this.sex = inf.sex;
    this.weight = inf.weight;
    this.height = inf.height;
    this.setBMI();
    this.setAgeType();
    this.illValue = new Array<number>(ills.length);
    for (let i = 0; i < ills.length; i++) {
      this.illValue[i] = 0;
    }
  }
  ageType: AgeType = AgeType.young;
  weight = 0;
  height = 0;
  bmi = 0;
  sex = 0; //0=femal
  age = 18;
  illValue: number[] = new Array<number>();
  score = 0;
  setBMI() {
    this.bmi = this.weight / (this.height / 100) ** 2;
  }
  setAgeType() {
    if (this.age < 40) {
      this.ageType = AgeType.young;
    } else if (this.age < 65) {
      this.ageType = AgeType.middle;
    } else {
      this.ageType = AgeType.old;
    }
  }
  calcPoint(ills: illData[]) {
    let sum = 0;
    //ill
    for (let i = 0; i < ills.length; i++) {
      sum += ills[i].points[this.ageType] * this.illValue[i];
    }
    //age
    if ((this.age > 29 && this.age < 40) || (this.age > 49 && this.age < 60)) {
      sum += 1;
    } else if (this.age > 59 && this.age < 65) {
      sum += 3;
    } else if (this.age > 74) {
      sum += 2;
    }
    //sex
    if (this.sex == 1 && this.age < 65) {
      sum += 1;
    }
    //bmi
    if (this.age < 40) {
      if (this.bmi > 30) {
        sum += 2;
      } else if (this.bmi > 23) {
        sum += 1;
      }
    } else {
      if (this.bmi > 25) {
        sum += 2;
      }
    }
    //score
    this.score = sum;
  }
  judge(): boolean {
    // let a: boolean = this.ageType == AgeType.young && this.score > 5;
    // let b: boolean = this.ageType == AgeType.middle && this.score > 4;
    // let c: boolean = this.ageType == AgeType.old && this.score > 2;
    //return a || b || c;
    return (
      (this.ageType == AgeType.young && this.score > 5) ||
      (this.ageType == AgeType.middle && this.score > 4) ||
      (this.ageType == AgeType.old && this.score > 2)
    );
  }
}
