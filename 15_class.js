// class Student {
//   public name: string;
//   private grade: number;
//   constructor(name: string, grade: number) {
//     this.name = name;
//     this.grade = grade;
//   }
//   public get Grade(): number {
//     return this.grade;
//   }
//   public set Grade(grade: number) {
//     if (grade < 1 || grade > 4) {
//       throw new Error("학년은 1~3 사이여야 합니다.");
//     }
//     this.grade = grade;
//   }
//   public getGrade(): number {
//     return this.grade;
//   }
//   public setGrade(value: number): void {
//     this.grade = value;
//   }
// }
// const student1: Student = new Student("빈영", 100);
// console.log(student1.name);
// const grade: number = student1.Grade;
// console.log(grade);
// student1.Grade = 20;
// console.log(student1.Grade);
class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
}
class HighSchoolStudent extends Student {
    constructor(name, grade) {
        super(name, grade);
    }
    printGrade() {
        console.log(`학년: ${this.grade}`);
    }
    printGrade2() {
        console.log(`학년: ${this.getGrade()}`);
    }
}
const s = new HighSchoolStudent("빈영", 3);
// s.grade = 2;
s.printGrade();
s.printGrade2();
export {};
