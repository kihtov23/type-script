//defines shape of objects
//object
//
type Table1 = {
  readonly name: string;
  cost: number;
  color?: string;
};

//similar to object declaration
interface Table2 {
  readonly name: string;
  cost: number;
  color?: string;
}

const table2: Table2 = {
  name: "table name",
  cost: 123,
};
console.log(table2);

//try to change readonly, compilation error
//table2.name = "new name"

//methods in the interface
interface IScreen {
  name: string;
  getSize: () => number;
  printText: (message: string) => void;
  //we also can define method as this
  doSomething(): string;
}
const myScreen: IScreen = {
  name: "Dell",
  getSize: () => {
    return 27;
  },
  printText: (message: string) => {
    console.log(`Message=${message}`);
  },
  doSomething() {
    return "test";
  },
};
myScreen.printText("Hi");

// ! combine interfaces
interface MyShape {
  name: string;
}

interface MyShape {
  countSquare: () => number;
}

const circular: MyShape = {
  name: "circular",
  countSquare: () => {
    return 123;
  },
};

// ! extending interface. It is similar to type intersection

interface ExtendedShape extends MyShape, IScreen {
  color: string;
}
