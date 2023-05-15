function addNumbers(n1: number, n2: number, resultPhrase: string) {
  let result = n1 + n2;
  return resultPhrase + result;
}

const number1 = 5;
const number2 = 2.8;

const resutl = addNumbers(number1, number2, "result: ");
console.log(resutl);
