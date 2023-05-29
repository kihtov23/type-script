let someVariable: unknown = "dog";
let charNumber = (someVariable as string).length;

let someVariable1: unknown = "cat";
//this will not compile
//let charNumber1 = someVariable1.length
let charNumber1 = (<string>someVariable1).length;
