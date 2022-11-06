import { singleDataOmi } from "./questionnaire.omi.single";
import { singleDataBa2 } from "./questionnaire.ba2.single";
import { singleDataBa5 } from "./questionnaire.ba5.single";
import { singleDataba275 } from "./questionnaire.ba275.single";
import { multiData } from "./questionnaire.multi";
import { resultDataOmi } from "./questionnaire.omi.result";
import { resultDataBa2 } from "./questionnaire.ba2.result";
import { resultDataBa5 } from "./questionnaire.ba5.result";
import { resultDataba275 } from "./questionnaire.ba275.result";

export const questionSet = {
  "omicron": { single: singleDataOmi.qst, multi: multiData.qst, result: resultDataOmi.list },
  "ba2": { single: singleDataBa2.qst, multi: multiData.qst, result: resultDataBa2.list },
  "ba5": { single: singleDataBa5.qst, multi: multiData.qst, result: resultDataBa5.list },
  "ba275": { single: singleDataba275.qst, multi: multiData.qst, result: resultDataba275.list }
};
export const answerSet = {
  "omicron": { single: singleDataOmi.ans, multi: multiData.ans },
  "ba2": { single: singleDataBa2.ans, multi: multiData.ans },
  "ba5": { single: singleDataBa5.ans, multi: multiData.ans },
  "ba275": { single: singleDataba275.ans, multi: multiData.ans }
}
export const NameOfType = (locationSearch: string): "ba2"|"omicron"|"ba5"|"ba275" => {
  if (locationSearch ==  "?type=ba2"){
    window.location.href = "https://nodematch.github.io/404.html"
    return "ba2"
  }else if(locationSearch ==  "?type=omicron"){
    window.location.href = "https://nodematch.github.io/404.html"
    return "omicron"
  }else if(locationSearch ==  "?type=ba5"){
    return "ba5"
  }else if(locationSearch ==  "?type=ba275"){
    return "ba275"
  }else {
    window.location.href = "https://nodematch.github.io/404.html"
    return "ba2"
  }
}