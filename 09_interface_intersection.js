function getInfo(p) {
    console.log(`학생이자 선수 ${p.name}: ${p.age}세, ${p.major} 전공, ${p.skill} 기술 보유`);
}
const p1 = {
    name: "빈영",
    age: 46,
    major: "Computer Science",
    skill: "소리지르기",
};
const p2 = {
    name: "선우",
    age: 7,
    skill: "드러눕기",
    major: "심리학",
};
getInfo(p1);
getInfo(p2);
export {};
