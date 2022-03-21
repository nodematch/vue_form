export default {
  numbers( array: Array<{ n: number | string; min: number; max: number; name: string }>): { valid: boolean; msg: string } {
    const result: { valid: boolean; msg: string } = { valid: true, msg: "" };
    array.forEach((el) => {
      if (typeof el.n === "string") {
        result.valid = false;
        result.msg = "value of " + el.name + " is invalid";
      } else {
        el.n = el.n as number;
        if (el.n < el.min || el.max < el.n) {
          result.valid = false;
          result.msg = "value of " + el.name + " is invalid";
        }
      }
    });
    return result;
  },
};
