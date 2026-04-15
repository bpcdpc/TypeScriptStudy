type PersonName = string;

let name: string = "신호탄";
let name1: PersonName = "국기봉";

function printAge(num: string | number) {
  console.log(num);
}

type Age = number | string;

function printAge1(num: Age) {
  console.log(num);
}

printAge1(100);
printAge1("10");

type Person = { name: string; age: number };
