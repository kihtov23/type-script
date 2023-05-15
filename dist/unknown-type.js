"use strict";
let userInputUnknown;
let userInputAny;
let someName;
userInputUnknown = 5;
userInputUnknown = 'Hello ';
if (typeof userInputUnknown === 'string') {
    someName = userInputUnknown;
}
userInputAny = 123;
someName = userInputAny;
function generateError(message, errorCode) {
    //throw {message: message, errorCode: errorCode }
    while (true) {
    }
}
let result = generateError("An error occured.", 123);
console.log(result);
//# sourceMappingURL=unknown-type.js.map