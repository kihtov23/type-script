type Cow = {
  name: string;
  type: "cow";
};

type Cat = {
  name: string;
  type: "cat";
};

type Pig = {
  name: string;
  type: "pig";
};

type AnimalType = Cow | Cat | Pig;

function makeSound(animal: AnimalType) {
  switch (animal.type) {
    case "cat":
      return "mrrr";
    case "cow":
      return "Moooo";
    case "pig":
      return "pi pi";
    default:
      //this will lead to compile error if we don't handle some type
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const testCat: Cat = {
  name: "my cat",
  type: "cat",
};

console.log(makeSound(testCat));

//not handled in switch
const pig: Pig = {
  name: "some pig name",
  type: "pig",
};
console.log(makeSound(pig));
