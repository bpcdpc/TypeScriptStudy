// 기본적인 타입

let num: number = 10;
const greet: string = "Hello, TypeScript!";
const isOn: boolean = true;
const person: object = { name: "빈영", age: 46 };
const numbers: number[] = [1, 2, 3, 4, 5];
const bts: string[] = ["빈영", "선우", "영희", "병선"];
const item: [string, number, boolean] = ["빈영", 30, true];
let name: any = "빈영";
name = 1;
name = { name: "빈영", age: 35 };
let empty: null = null;
let notAssigned: undefined = undefined;

// 함수의 매개변수와 반환값의 타입
function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(4, 5); // 형 추론
// const result2 = add("4", "5"); // Error
// const result3: string = add(4, 5); // Error
// const result4: number = add(4); // Error

// function sayHello(name: string): string {
//   return `Hello, ${name}`;
// }

// let greeting = sayHello("빈영");
// console.log(greeting);

// function sayHi(name: string): void {
//   console.log(`Hi, ${name}`);
// }

// const hi = sayHi("빈영");
// console.log(hi);

function sayHello(name: string): string {
  return `Hello, ${name}`;
}

function greeting(name: string, callback: (name: string) => string): string {
  return callback(name);
}

const greet1 = greeting("선생님", sayHello);
const greet2 = greeting("친구", (name: string) => {
  return `Hi, ${name}`;
});
console.log(greet1, greet2);
