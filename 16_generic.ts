function getNumber(value: number): number {
  return value;
}
function getString(value: string): string {
  return value;
}
function getSimple<T>(value: T): T {
  return value;
}

const result1 = getSimple<number>(100);
console.log(result1);

const result2 = getSimple<string>("랄랄랄");
console.log(result2);

const result3 = getSimple(true);
console.log(result3);

console.log("==========");

function getBoolean(bool: boolean) {
  return bool;
}

function getArray(arr: string[]) {
  return arr;
}

function getArray2(arr: Array<string>) {
  return arr;
}

function getObject(obj: { name: string }) {
  return obj;
}

function getValue<T>(value: T): T {
  return value;
}

console.log(getValue(true));
console.log(getValue<string[]>(["1"]));
console.log(getValue<Array<String>>(["1"]));
console.log(getValue({ name: "빈영" }));

console.log("==========");

interface Box<T, U> {
  value: T;
  weight: U;
}

const box1: Box<number, number> = { value: 10, weight: 100 };
const box2: Box<string, string> = { value: "Hello!", weight: "1000" };

console.log(box1.value, box1.weight);
console.log(box2.value, box2.weight);

console.log("==========");

interface Vehicle<T, U, E> {
  speed: T;
  wheels: U;
  seats: E;
}

const v1: Vehicle<number, number, number> = {
  speed: 100,
  wheels: 4,
  seats: 5,
};

const v2: Vehicle<string, string, string> = {
  speed: "1000",
  wheels: "4",
  seats: "5",
};

console.log(v1);
console.log(v2);

console.log("==========");

interface ApiResponse<T> {
  data: T;
  status: number;
}

const res: ApiResponse<string> = {
  data: "success",
  status: 200,
};

interface List<T> {
  items: T[];
}

console.log("==========");

function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("Hello!");
printLength([1, 2, 3]);
printLength({ length: 3, name: "빈영" });
// printLength(123);

console.log("==========");

function logValue<T extends string | number>(value: T) {
  console.log(value);
}

logValue("Hello!");
logValue(123);
// logValue(true);

console.log("==========");

interface Person {
  name: string;
  age?: number;
}

function printName<T extends Person>(obj: T) {
  console.log(obj.name);
}

printName({ name: "빈영" });
printName({ name: "선우", age: 7 });
// printName({ age: 100 });

console.log("==========");

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: { name: string; age: number } = { name: "빈영", age: 46 };

getProperty(user, "name");
getProperty(user, "age");
// getProperty(user, "job");
