"use strict";
function combine(input1, input2, convertionFunction) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return convertionFunction + result;
}
const combinedAges = combine(30, 26, "good day ");
console.log(combinedAges);
const combinedStrings = combine("Hello", "world", "good evening");
console.log(combinedStrings);
//# sourceMappingURL=union-aliases.js.map