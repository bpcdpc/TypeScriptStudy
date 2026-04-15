function getNumber(value) {
    return value;
}
function getString(value) {
    return value;
}
function getSimple(value) {
    return value;
}
const result1 = getSimple(100);
console.log(result1);
const result2 = getSimple("랄랄랄");
console.log(result2);
const result3 = getSimple(true);
console.log(result3);
console.log("==========");
function getBoolean(bool) {
    return bool;
}
function getArray(arr) {
    return arr;
}
function getArray2(arr) {
    return arr;
}
function getObject(obj) {
    return obj;
}
function getValue(value) {
    return value;
}
console.log(getValue(true));
console.log(getValue(["1"]));
console.log(getValue(["1"]));
console.log(getValue({ name: "빈영" }));
console.log("==========");
const box1 = { value: 10, weight: 100 };
const box2 = { value: "Hello!", weight: "1000" };
console.log(box1.value, box1.weight);
console.log(box2.value, box2.weight);
console.log("==========");
const v1 = {
    speed: 100,
    wheels: 4,
    seats: 5,
};
const v2 = {
    speed: "1000",
    wheels: "4",
    seats: "5",
};
console.log(v1);
console.log(v2);
console.log("==========");
const res = {
    data: "success",
    status: 200,
};
console.log("==========");
function printLength(value) {
    console.log(value.length);
}
printLength("Hello!");
printLength([1, 2, 3]);
printLength({ length: 3, name: "빈영" });
// printLength(123);
console.log("==========");
function logValue(value) {
    console.log(value);
}
logValue("Hello!");
logValue(123);
// logValue(true);
console.log("==========");
function printName(obj) {
    console.log(obj.name);
}
printName({ name: "빈영" });
printName({ name: "선우", age: 7 });
// printName({ age: 100 });
console.log("==========");
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: "빈영", age: 46 };
getProperty(user, "name");
getProperty(user, "age");
export {};
// getProperty(user, "job");
