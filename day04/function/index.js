// function[함수]
// 마술상자
// 입력: x
// 출력: x + 100

function plus100(x) {
  return x + 100;
}

// plus100 [함수 이름]
const a = plus100(500);
console.log(a); // 600

//twice
//x가 들어면 두배를 돌려주는 함수 만들고
//실행까지해서 콘솔로 나타내셈

function twice(momo) {
  return momo * 2;
}
const b = twice(100);
console.log(b); // 200

// luckybiky 함수만들고
// 어떠한 문구를 넣으면 마지막에 러키비키잖아😊 붙혀서 돌려주는
// 함수를 만들고 실행해서 콘솔로그 확인하기
function luckybiky(sentence) {
  return sentence + "럭키비키잔앙😊";
}
const c = luckybiky("월요일이라서 너무");
console.log(c);

function ramen() {
  return "라면";
}

function icecream(x) {}

// 홀수 짝수 판별 함수 만들어주세요
// 반환값: 홀수 or 짝수
function isOddOrEven(x) {
  return x % 2 ? "홀수" : "짝수";
}
