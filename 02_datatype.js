// 기본적인 타입
let num = 10;
const greet = "Hello, TypeScript!";
const isOn = true;
const person = { name: "빈영", age: 46 };
const numbers = [1, 2, 3, 4, 5];
const bts = ["빈영", "선우", "영희", "병선"];
const item = ["빈영", 30, true];
let name = "빈영";
name = 1;
name = { name: "빈영", age: 35 };
let empty = null;
let notAssigned = undefined;
// 함수의 매개변수와 반환값의 타입
function add(a, b) {
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
function sayHello(name) {
    return `Hello, ${name}`;
}
function greeting(name, callback) {
    return callback(name);
}
const greet1 = greeting("선생님", sayHello);
const greet2 = greeting("친구", (name) => {
    return `Hi, ${name}`;
});
console.log(greet1, greet2);
export {};
