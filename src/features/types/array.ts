//create array which is always empty
const purchases: [] = [];
//compilation error
//purchases.push(1)

const cars: string[] = [];
cars.push("Kia");
//or
const carsArray: Array<string> = [];

//multidimensional array
const ticTac: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

//instanceof
console.log("--------------- instanceof ------------------");
console.log(cars instanceof Array);
