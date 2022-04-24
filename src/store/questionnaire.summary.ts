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
export const NameOfType = (locationSearch: string): "ba2"|"omicron" => {
  if (locationSearch ==  "?type=ba2"){
    return "ba2"
  }else if(locationSearch ==  "?type=omicron"){
    window.location.href = "https://nodematch.github.io/404.html"
    return "omicron"
  }else {
    window.location.href = "https://nodematch.github.io/404.html"
    return "ba2"
  }
}