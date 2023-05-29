//copy an object. It copies only first-level, if object has nested objects - it will copy the reference
const objA = {
  name: "nameA",
  cost: "CostA",
};
console.log(objA);

const objB = { ...objA };
console.log(objB);

console.log(`ObjA === objB. ${objA === objB} `);

//copy and extend object
const objD = { ...objA, size: 23 };
console.log(objD);

//override property "size"
const objE = { ...objD, size: 1 };
console.log(objE);

// --------- combine arrays
console.log("----------------------- combine arrays ---------------");
const arr1 = ["one", "two"];
const arr2 = ["three", "for"];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

// ---------- function arguments (like param in C#)
function handleArgs(...args: string[]): void {
  for (let a of args) {
    console.log(a);
  }
}
console.log("----------------------- function args ---------------");
handleArgs(...["one", "two", "three"]);
handleArgs(...["apple"]);
document;
