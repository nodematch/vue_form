import { Category, MultiCheck, SingleCheck } from "./questionnaire.model";

export const singleCheck: SingleCheck = new SingleCheck([
  {
    message: "ワクチン歴、コロナ感染歴",
    choices: [
      { id: 0, text: "A" },
      { id: 1, text: "B" },
      { id: 2, text: "一つも当てはまらない" },
    ],
    next: (answer: number) => {
      return { category: Category.singleCheck, index: 1 };
    },
  },
  {
    message: "ワクチン歴、コロナ感染歴",
    choices: [
      { id: 0, text: "c" },
      { id: 1, text: "d" },
      { id: 2, text: "一つも当てはまらない" },
    ],
    next: (answer: number) => {
      return { category: Category.singleCheck, index: 1 };
    },
  },
]);
export const multiCheck: MultiCheck = new MultiCheck([
  {
    message: "mul",
    choices: [
      { id: 0, text: "m1" },
      { id: 1, text: "m2" },
      { id: 2, text: "m3" },
      { id: 3, text: "m4" },
    ],
    next: (answer: number[]) => {
      return { category: Category.singleCheck, index: 1 };
    },
  },
]);

// https://forms.office.com/Pages/ResponsePage.aspx?id=uDKHwHaraE2cVKdNIWbiGjagFg6-k9hEl_quC62v_dNUM1BXN1BJRTFWQUw4WU9RMkpZUEhBRUhPOS4u
