import { SingleQ, risks } from "./questionnaire.model";

const Qa: SingleQ = new SingleQ(
  "qa",
  [
    { id: 0, text: "a-1" },
    { id: 1, text: "a-2" },
  ],
  (answer: number) => {
    return answer == 0 ? 1 : 2;
  }
);
const Qb: SingleQ = new SingleQ("qb", risks, (answer: number) => {
  return 2;
});
const Qc: SingleQ = new SingleQ(
  "qc",
  [
    { id: 0, text: "b-1" },
    { id: 1, text: "b-2" },
  ],
  (answer: number) => {
    return 0;
  }
);

export const qs: Array<SingleQ> = [Qa, Qb, Qc];

// https://forms.office.com/Pages/ResponsePage.aspx?id=uDKHwHaraE2cVKdNIWbiGjagFg6-k9hEl_quC62v_dNUM1BXN1BJRTFWQUw4WU9RMkpZUEhBRUhPOS4u
