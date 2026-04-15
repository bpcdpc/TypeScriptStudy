interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  major: string;
}

const s1: Student = { name: "빈영", age: 46, major: "Computer Science" };
console.log(s1);

// const s2: Student = { name: "선우", age: 7 }; // Error
// console.log(s2);
