//1. 놀이동산에 놀러갔을때, prompt 손님의 키를 묻고
// 키가 140 이하면, 탑승금지 알럿이 나오고 아니면 탑승가능 알럿
const height = prompt("님 키몇");
const quiz1_result = Number(height) > 140 ? "탑승가능" : "탑승금지";
alert(quiz1_result);

//2. 숫자를 prompt로 입력했을때, 짝수인지 홀수인지
// 알럿으로 알려주기
const num = prompt("숫자입력");
const quiz2_result = Number(num) % 2 == 1 ? "홀수" : "짝수";
alert(quiz2_result);

//3. 태어난 년도를 입력하고, 20살 이상이면 성인입니다. 아니면
// 미성년자 입니다. 나타내기
const birth = prompt("태어난 년도");
const age = 2026 - Number(birth);
const quiz3_result = age >= 20 ? "성인" : "미성년자";
alert(quiz3_result);

//4. 시 분 초를 입력해서 초로 나타내기
const hour = prompt("시 입력");
const min = prompt("분 입력");
const sec = prompt("초 입력");
alert(`${Number(hour) * 3600 + Number(min) * 60 + Number(sec)}초`);

//5. 두 숫자를 입력하고 더 큰숫자를 알럿으로 나타내기
const first = prompt("첫번째 숫자");
const second = prompt("두번째 숫자");
alert(Number(first) > Number(second) ? first : second);
