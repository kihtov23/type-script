function findElement<T>(element: T): T {
  return element;
}

findElement<number>(123);
findElement<string>("oleg");

// infer generic type
function printElements<T>(first: T, second: T): void {
  console.log(`first= ${first}, second= ${second}`);
}
printElements(1, 2);
printElements("Oleg", "Kikhtov");

//in tsx file if we crate generic arrow function we need to add <T,> comma sign,
//otherwise < T > will be html tag

//several generic types, naming convention T, U, V ... alphabetically

type Pen = {
  color: string;
};

type Box = {
  size: string;
  pen: Pen;
};

const pen1: Pen = {
  color: "dark",
};
const box1: Box = {
  size: "big",
  pen: pen1,
};

function merge<T, U>(firstObj: T, secondObj: U) {
  return {
    ...firstObj,
    ...secondObj,
  };
}

let mergedObjects = merge(pen1, box1);
console.log(mergedObjects);

// just to confirm that spead operator copy by value only top level and lower lower are copied by reference
mergedObjects.pen.color = "red";

console.log(pen1);

//------ generic type constraints
function merge1<T extends object, U extends object>(first: T, second: U) {
  return {
    ...first,
    ...second,
  };
}

//compilation error here
//const result1 = merge1(pen1, 9)

interface Lengthy {
  length: number;
}

function getLength<T extends Lengthy>(lengthy: T) {
  return lengthy.length;
}

//default generic type
function printThisParam<T = Pen>(param: T) {
  console.log(param);
}

//---- generic classes
class PlayList<T> {
  constructor(public playlist: T[]) {}
  add(element: T) {
    this.playlist.push(element);
  }
}

const playList = new PlayList<string>(["firstSong", "secondSong"]);
playList.add("some other song");
