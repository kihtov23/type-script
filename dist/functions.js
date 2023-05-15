"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result " + num);
}
function addAndHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addAndHandle(3, 5, printResult);
addAndHandle(10, 20, (res) => {
    console.log("this is a result " + res);
    return res;
});
//console.log(printResult(add(1, 2)))
//let test = undefined;
let combineNumbers;
combineNumbers = add;
//combineNumbers = printResult
console.log(combineNumbers(1, 2));
//# sourceMappingURL=functions.js.map