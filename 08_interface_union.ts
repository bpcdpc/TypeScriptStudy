interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  major: string;
}

interface Player extends Person {
  skill: string;
}

function getInfo(p: Student | Player) {
  if ("major" in p) {
    console.log(`학생 ${p.name}: ${p.age}세, ${p.major} 전공`);
  }
  if ("skill" in p) {
    console.log(`선수 ${p.name}: ${p.age}세, ${p.skill} 기술 보유`);
  }
}

const p1: Student = { name: "빈영", age: 46, major: "Computer Science" };
const p2: Player = { name: "선우", age: 7, skill: "소리 지르기" };

getInfo(p1);
getInfo(p2);
