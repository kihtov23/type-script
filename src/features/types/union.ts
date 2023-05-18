//example, where compiler can understand specific union case
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    return parseFloat(price.replace("$", "")) * tax;
  }
  return price * tax;
}

console.log("---------------------- calculate tax ----------------");
console.log(calculateTax(100, 0.2));
console.log(calculateTax("$100", 0.2));

//array of 2 multiple types
const someThings: (number | string)[] = ["test", 23];

//-----Literal types
let someSpecificNumber: 23 = 23;
let yes: "yes" = "yes";
let no: "no" = "no";

//now we combine 2 concepts together, literal types and union type
let yourChoice: "yes" | "no";
yourChoice = "yes";

let differentTypes: "23" | false | 7 = 7;

//one more example
type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  //a combination of literal types and union type
  conversionFunction: "good day " | "good evening"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return conversionFunction + result;
}

const combinedAges = combine(30, 26, "good day ");
console.log(combinedAges);

const combinedStrings = combine("Hello", "world", "good evening");
console.log(combinedStrings);
