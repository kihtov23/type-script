import axios from "axios";
//lodash package does not contain types declaration ([name].d.ts) so we need to add it separately with
//npm install --save-dev @types/lodash from
//https://github.com/DefinitelyTyped/DefinitelyTyped
import _ from "lodash";

//this is referencing index.d.ts from axios package
//if we open package.json in axios module, we can find attribute called "types", which references index.d.ts
//we can use such files as documentation
axios;

//it could be possible that some package does not contain type declaration files
//those files could be found in "types" package, which contains file declarations for 7k popular packages
//https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html
_.sample([3, 34, 15]);
