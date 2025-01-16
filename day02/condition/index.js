//if문
// const username = prompt("이름이 뭐에요");
// if (username == "엄준식") {
//   alert("살아있따.");
// }

// 0보다 큰숫자를 넣으면 알럿으로 양의 정수입니다!
// const num = Number(prompt("숫자입력"));

// if (num > 0) {
//   alert("양의 정수입니다.");
// } else {
//   alert("음의 정수입니다.");
// }

// 어떤 정수를 입력해서 홀수 또는 짝수 알려주는 프로그램
// const num = +prompt("숫자 입력");
// if (num % 2) {
//   alert("홀수");
// } else {
//   alert("짝수");
// }

// const num = +prompt("정수 입력");
// if (num > 0) {
//   alert("양의 정수");
// } else if (num == 0) {
//   alert("0입니다.");
// } else {
//   alert("음의 정수");
// }

// 숫자가 아니면 에러!알럿나오기

// 정수를 입력해서, 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수
// const num = +prompt("정수 입력");

// // NaN

// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 == 1;
// const isNegaOdd = num % 2 == -1;
// const isEven = num % 2 == 0;

// if (isPositive && isOdd) {
//   alert("양의 홀수");
// } else if (isPositive && isEven) {
//   alert("양의 짝수");
// } else if (isNegative && isNegaOdd) {
//   alert("음의 홀수");
// } else if (isNegative && isEven) {
//   alert("음의 짝수");
// } else {
//   const result = num == 0 ? "0입니다." : "에러입니다.";
//   alert(result);
// }

// 몇년생인지 물어보고, 알럿으로 띠 나타내기 ㅅㄱ

const year = +prompt("몇년생");
// 8 - 용, 9 - 뱀, 10 - 말, 11 -양
// 0 - 원숭, 1 - 닭, 2 - 개, 3 - 돼지
// 4 - 쥐, 5 - 소 , 6 - 호랑이, 7 - 토끼
if (year % 12 == 0) {
  alert("원숭이");
} else if (year % 12 == 1) {
  alert("닭");
} else if (year % 12 == 2) {
  alert("개");
} else if (year % 12 == 3) {
  alert("돼지");
} else if (year % 12 == 4) {
  alert("쥐");
} else if (year % 12 == 5) {
  alert("소");
} else if (year % 12 == 6) {
  alert("호랑이");
} else if (year % 12 == 7) {
  alert("토끼");
} else if (year % 12 == 8) {
  alert("용");
} else if (year % 12 == 9) {
  alert("뱀");
} else if (year % 12 == 10) {
  alert("말");
} else {
  alert("양");
}
