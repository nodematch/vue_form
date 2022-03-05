import { Qs, Question, risks } from "./questionnaire.model";

const Qa: Question = new Question(
  "qa",
  [
    { id: 0, text: "a-1" },
    { id: 1, text: "a-2" },
  ],
  false,
  (answer: Array<number>) => {
    return answer[0] == 0 ? 1 : 2;
  }
);
const Qb: Question = new Question(
  "qb",
  risks,
  true,
  (answer: Array<number>) => {
    if (answer.length == 0) {
      return 2;
    } else {
      return 0;
    }
  }
);
const Qc: Question = new Question(
  "qc",
  [
    { id: 0, text: "b-1" },
    { id: 1, text: "b-2" },
  ],
  false,
  (answer: Array<number>) => {
    return 0;
  }
);

export const questions: Qs = new Qs([Qa, Qb, Qc]);
