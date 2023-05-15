enum Role {
  ADMIN = 5,
  READ_ONLY = "readonly",
}

const person = {
  name: "Oleg",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY,
};

let favoriteActivities: any[];
favoriteActivities = ["Sports", 5];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.READ_ONLY) {
  console.log(person.role.toString());
}

//define new object type just inside function parameter
function printPerson(person: { name: string; age: number }): void {
  console.log(`Person name: = ${person.name}, person age = ${person.age}`);
}
printPerson({ name: "Oleg", age: 31 });
