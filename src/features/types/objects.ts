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

//function signature which could be confused, after semicolon we have object return type
function functionWhichReturnsObject(userId: number): {
  userId: number;
  userName: string;
} {
  return { userId: 1, userName: "Oleg" };
}

//compilation error for extra property
//printPerson({name: "Oleg", age: 31, secondName: "Kikhtov"})
let personWithExtraProperty = { name: "Oleg", age: 31, secondName: "Kikhtov" };
printPerson(personWithExtraProperty);

type Person = { name: string; age: number };
function modifyPerson(person: Person): Person {
  return { name: person.name, age: person.age + 18 };
}

//optional object property
type Table = {
  height: number;
  width: number;
  material?: string;
};

function updateTable(table: Table): Table {
  return table;
}

updateTable({ height: 10, width: 10 });

//readonly props
type Bicycle = {
  readonly id: number;
  name: string;
};

const bicycle: Bicycle = { id: 1, name: "Pride" };
bicycle.name = "Test";
//compilation error here:
//bicycle.id = 2

//--- destructure object
type Movie = {
  readonly title: string;
  originalTitle?: string;
  boxOffice: {
    budget: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  boxOffice: {
    budget: 165000000,
    grossWorldwide: 400671789,
  },
};

function getProfit({ boxOffice: { budget, grossWorldwide } }: Movie): number {
  return grossWorldwide - budget;
}
console.log(`Profit = ${getProfit(dune)}`);
