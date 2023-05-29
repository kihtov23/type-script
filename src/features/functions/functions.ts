function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result " + num);
}

//arrow function
function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(3, 5, printResult);
addAndHandle(10, 20, (res) => {
  console.log("this is a result " + res);
  return res;
});

console.log(printResult(add(1, 2)));

let combineNumbers: (a: number, b: number) => number;
combineNumbers = add;
console.log(combineNumbers(1, 2));

function printHelloName(name: string) {
  console.log(`Hello ${name}`);
}

printHelloName("Oleg");

//lambda
const printAge = (age: number) => {
  console.log(`Your age is ${age}`);
};
printAge(31);

//default values
function printMyAge(age = 31) {
  console.log(`My age is ${age}`);
}
printMyAge();

function printYear(year: number = 2023) {
  console.log(`Your line in ${year}`);
}
printYear();

//return type
function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(`Sum of 1 and 2 is ${addTwoNumbers(1, 2)}`);
const multiplyNumbers = (num1: number, num2: number): number => {
  return num1 * num2;
};

//never type
function throwError(message: string): never {
  throw new Error(message);
}

//void vs undefined
function returnVoid() {
  console.log("inside void function");
}
let voidResult = returnVoid();
if (voidResult === undefined) console.log("void = underfined");
