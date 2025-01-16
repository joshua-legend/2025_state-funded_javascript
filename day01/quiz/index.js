//1번 퀴즈
// const name = prompt("당신의 이름");
// const age = prompt("당신의 나이");
// const color = prompt("좋아하는 색");
// console.log(`제 이름은 ${name}, 나이는 ${age}살이고, 좋아하는 색은 ${color}`);

//2번 퀴즈
// const today_date = new Date().toLocaleDateString();
// const schedule = prompt("금일 스케쥴");
// console.log(`오늘은 ${today_date}, 계획하신 일정은 ${schedule}입니다`);

//3번 퀴즈
const first = prompt("첫번째 숫자");
const second = prompt("두번째 숫자");
const sum = Number(first) + Number(second);
const diff = Number(first) - Number(second);
window.alert(`${first}와 ${second} 합:${sum} 차:${diff}`);

//4번 퀴즈
const price = prompt("음식 가격");
const count = prompt("음식 갯수");
window.alert(`총 음식 가격:${Number(price) * Number(count)}`);

//5번 퀴즈
const c = prmopt("섭씨");
window.alert(`화씨 온도:${Number(c) * 1.8 + 32}`);

//6번 퀴즈
const side = prmopt("정사각형의 한변의 길이");
window.alert(`정사각형의 넓이는 뭐냐고:${Number(side) * Number(side)}`);
