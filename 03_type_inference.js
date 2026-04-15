// 형 추론
let name = "빈영";
let age = 46;
let isOn = true;
let person1 = { name: "빈영", age: 46 };
const bts = ["빈영", "선우", "영희", "병선"];
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isOn); // boolean
console.log(typeof person1); // object
console.log(typeof bts); //sting[]
// name = 1; // Error
// age = "1"; // Error
// person1 = { name: "빈영" }; // Error
// 함수에서의 형 추론
function sayHello(name) {
    return `Hello ${name}`;
}
function sayHello1(name) {
    // 리턴값을 string으로 형 추론
    return `Hello ${name}`;
}
function sayHello2(name) {
    // 리턴값을 void로 형 추론
    console.log(`Hello ${name}`);
    return;
}
function sayHello3(name) {
    // 리턴값을 void로 형 추론
    console.log(`Hello ${name}`);
}
const result2 = sayHello2("빈영");
console.log(result2);
// 유니온 타입
let num = 10;
num = 46;
console.log(typeof num);
function getAge(age) {
    return `My age is ${age}`;
}
console.log(getAge(46));
console.log(getAge("46"));
let person = "빈영";
console.log(person, typeof person);
person = { name: "빈영" };
console.log(person, typeof person);
export {};
