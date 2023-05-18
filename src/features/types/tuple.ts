//tuple in Typescript is an array with fixed length and types

type Tuple1 = [name: string, secondName: string];
type Tuple2 = [number, boolean];

type HttpResponse = [number, string];
const successResponse = [200, "Ok"];
const notFoundResponse = [404, "Not found"];

//because tuple is an array in typescript, we can push more elements to it
successResponse.push(123);
console.log(successResponse);
