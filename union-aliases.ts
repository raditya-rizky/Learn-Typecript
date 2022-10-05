type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const ages = combine(10, 33, "as-number");
console.log(ages);

const ages1 = combine("10", "33", "as-number");
console.log(ages);

const names = combine("rad", "dew", "as-string");
console.log(names);
