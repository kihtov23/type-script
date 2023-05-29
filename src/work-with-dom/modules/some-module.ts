export function PrintFullName() {
  console.log("Oleh Kikhtov");
}

//typescript documentation recommends to use modules but not namespaces
//if we don't use module - the code will be in global scope

//even single function export is module export
export function add(a: number, b: number): number {
  return a + b;
}

//we can export class, const, function and so on
export const pi = 3.14;

export class Body {
  constructor(public height: number) {}
}

export class Cup {
  constructor(public size: number) {}
}
