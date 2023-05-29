//file type is .js here
//to import type like class or interface we use keyword "type" which make code more stable
import { PrintFullName, type Cup } from "./some-module.js";

//or we can rename what we import
import { PrintFullName as printName } from "./some-module.js";

//we can provide any name for default export, and no brackets needed
import thisIsDefault from "./default-export.js";
//if I need to import more modules from that file, I could put that in separate line (to use brackets)
import { addThreeNumbersUtils } from "./default-export.js";
// or this
//import thisIsDefault, { addThreeNumbersUtils } from "./default-export.js";

PrintFullName();

//this is from default export
console.log(`this is default export ${thisIsDefault(3, 5)}`);

console.log(`addThreeNumbersUtils = ${addThreeNumbersUtils(1, 2, 3)}`);
