import { singleDataOmi } from "./questionnaire.omi.single";
import { singleDataBa2 } from "./questionnaire.ba2.single";
import { multiData } from "./questionnaire.multi";
import { resultDataOmi } from "./questionnaire.omi.result";
import { resultDataBa2 } from "./questionnaire.ba2.result";
export const questionSet = {
  "omicron": { single: singleDataOmi.qst, multi: multiData.qst, result: resultDataOmi.list },
  "ba2": { single: singleDataBa2.qst, multi: multiData.qst, result: resultDataBa2.list },
};
export const answerSet = {
  "omicron": { single: singleDataOmi.ans, multi: multiData.ans },
  "ba2": { single: singleDataBa2.ans, multi: multiData.ans },
}
