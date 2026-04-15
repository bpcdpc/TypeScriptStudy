// 함수 정의 실습
// 구구단의 단을 매개변수로 전달받아 출력하는 함수를 정의하고 호출하시오.
function timeTables(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
timeTables(3);
export {};
