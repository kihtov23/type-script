//-------------------- typeof -----------------------
//works only for primitive types not for objects like Movie and so on
function triple(input: number | string) {
  if (typeof input === "number") {
    return input * 3;
  }
  return input.repeat(3);
}

//truthiness guards
function validate(input: string): string | null {
  if (input.length > 0) return input;
  return null;
}

const validatedResult = validate("Oleg");
console.log(validatedResult);
const validatedResult1 = validate("");
console.log(validatedResult1);

// ! if null return false
if (validatedResult1) {
  console.log("there is some value");
} else {
  console.log("no value");
}

//narrowing object type props
type SomeMovie = {
  duration: number;
};
type TVShows = {
  seriesNumber: number;
  episodeDuration: number;
};

function getRuntime(media: SomeMovie | TVShows) {
  if ("duration" in media) {
    return media.duration;
  } else if ("episodeDuration" in media) {
    return media.seriesNumber * media.episodeDuration;
  }
}

const someTVShow: TVShows = {
  seriesNumber: 3,
  episodeDuration: 40,
};

console.log(getRuntime(someTVShow));

// ---------------- instanceof --------------
let justStringWithAnyType: any = "Oleg";
if (justStringWithAnyType instanceof Date) {
  console.log("This is date");
}

//instance of could be applied to classes (but not objects)
class Mouse {
  constructor(public buttonsNumber: number) {}
}
const someMouse: Mouse = new Mouse(7);
if (someMouse instanceof Mouse) {
  console.log("this is mouse");
}

//------------------- type predicate ----------------
console.log("------------------- type predicate ----------------");
type MyCat = {
  catName: string;
};

type MyDog = {
  dogName: string;
  age: number;
};
const myCat: MyCat = { catName: "Luna" };
const myDog: MyDog = { dogName: "SomeDog", age: 5 };

function isCat(animal: MyCat | MyDog): animal is MyCat {
  return (animal as MyCat).catName !== undefined;
}

if (isCat(myCat)) {
  //compiler knows here that myCat is of type MyCat, because isCat function has this "animal is MyCat"
  console.log(myCat.catName);
}

console.log(isCat(myCat));
console.log(isCat(myDog));
