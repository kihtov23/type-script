let firstName: string = "Oleg";
firstName = "Vika";

const lastName: string = "Kikhtov";
//no way to change const
//lastName = "Kikthova"

var age: number = 31;
age = 32;

console.log(firstName + " " + lastName);

let editable: boolean = false;
editable = true;

//type inference
let x = 23;

//any
let something: any = "hello world";
something = 23;
something = true;

//this will also compile
//something();
//something.someMethod();

//if we use explicit method:
let someName = "Oleg";
//then this will not compile
//someName.someMethod()

//deleyed initialization and implicit any
const movies = ["Arrival", "The Thing", "Aliens"];
// if we don't this is a last line of code then type will be any
let foundMovie;

for (let movie of movies) {
  // foundMovie still remains with type - any
  if (movie === "Aliens") foundMovie = "Aliens";
}
