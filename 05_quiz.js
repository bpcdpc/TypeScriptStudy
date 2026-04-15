// 함수 정의 실습
// 점수(score)를 매개 변수로 전달받아 학점(A,B~F)을 반환하는 함수를 정의하고 여러번 호출하시오.
function grade(score) {
    switch (true) {
        case score >= 90:
            return "A";
        case score >= 80:
            return "B";
        case score >= 70:
            return "C";
        case score >= 60:
            return "D";
        case score < 60:
            return "F";
        default:
            return "wrong score";
    }
}
console.log(grade(10));
console.log(grade(100));
export {};
