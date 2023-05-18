const myMarks: number[] = [4, 5, 4, 5, 5];

let total = 0;
for (let i = 0; i < myMarks.length; i++) {
  total += myMarks[i];
}
console.log(`Total = ${total}`);
total = 0;

console.log("----------------- iterate though indexes-----------------------");
// type of index is string here
for (let index in myMarks) {
  console.log(index);
}

console.log("-------------- for..of-------------------------");
for (let mark of myMarks) {
  total += mark;
}
console.log(`Total = ${total}`);
