const person = { name: "빈영", age: 30 };

interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "빈영", age: 46 };
// const person2: Person = { name: "빈영" };
// const person3: Person = { name: "빈영", age: 46, team: "grid" };

interface Movie {
  title: string;
  rank: number;
}

const movie1: Movie = { title: "에브리띵에브리웨어올앳원스", rank: 1 };
const movie2: Movie = { title: "이터널선샤인", rank: 2 };
const movie3: Movie = { title: "파리,텍사스", rank: 3 };
const movie4: Movie = { title: "프로메테우스", rank: 4 };

console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);

interface Student {
  name: string;
  grade: number;
  major?: string;
}

function studentInfo(s: Student) {
  console.log(s.name, s.grade, s.major ? s.major : "");
}

studentInfo({ name: "빈영", grade: 4 });

const s1: Student = { name: "선우", grade: 2, major: "심리" };
studentInfo(s1);

studentInfo({ name: "영희", grade: 3 });

const s2: Student = { name: "병선", grade: 4, major: "방사선학" };
studentInfo(s2);
