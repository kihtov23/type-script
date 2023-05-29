class Player {
  //by default all properties and methods are public
  readonly id: number;
  firstName: string;
  //by default props are public
  public age: number;
  private score: number = 0;
  constructor(id: number, firstName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.age = age;
  }
}

const olegPlayer = new Player(1, "Oleg", 23);
console.log(olegPlayer);

//will not compile
//olegPlayer.score;

//Properties shorthand. It's called parameter properties
//before
class PlayerBefore {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
//after
class PlayerAfter {
  constructor(public name: string, private age: number) {}
}

// getter and setter
class PlayerWithSetGet {
  constructor(
    public firstName: string,
    public lastName: string,
    private _age: number
  ) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set age(age: number) {
    if (age < 0) {
      throw new Error("Score cannot be nagative!");
    }
    this._age = age;
  }

  get age() {
    return this._age;
  }
}
const playerWithGetAndSet = new PlayerWithSetGet("Oleg", "Kikhtov", 31);
//we can use setter with = sign:
playerWithGetAndSet.age = 32;

//----------------- base class constructor
class Shape {
  constructor(public shape: string) {}
}

class SomeCircle extends Shape {
  constructor(public radius: number) {
    super("circular");
  }
}

//------------ protected modifier
class PlayerWithProtectedProp {
  constructor(protected name: string) {}
}

class ExtendedPlayer extends PlayerWithProtectedProp {
  name = "Oleg";
}

//---------------- class and interface --------------
interface Colorful {
  color: string;
}

interface Printable {
  print: () => void;
}

class Car implements Colorful, Printable {
  constructor(public color: string) {}
  print(): void {
    console.log(`My color is = ${this.color}`);
  }
}

const car1 = new Car("white");

//------------------- abstract class -------------
abstract class SomeWorker {
  abstract getWorkingHours(): number;
}

class FullTimeWorker extends SomeWorker {
  getWorkingHours(): number {
    return 40;
  }
}

class PartTimeWorker extends SomeWorker {
  getWorkingHours(): number {
    return 20;
  }
}
