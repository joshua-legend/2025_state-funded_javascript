// add 함수 x,y
function add(x, y) {
  return x + y;
}

// minus 함수
function minus(x, y) {
  return x - y;
}

// hello 함수: 이름이 들어오면 ~~님 안녕 돌려주는함수

// tolength 함수: 문자가 들어오면 "~~문자: 문자의 길이"
// ex) tolength("happy") => "happy문자: 5"
// ex) tolegnth("coke") => "coke문자:4"

function hello(name) {
  return `${name}님 안녕`;
}

function tolength(word) {
  return `${word}문자: ${word.length}`;
}

// square_three: x가 들오면 제곱의 세배 돌려줌
// lunch_menu: x가 들오면 점심메뉴:~~ 입니다. 돌려줌
// allergy_test: 어떠한 긴 글이 들오고 거기에 새우,땅콩,조개 중 하나 단어가 포함되면
// 알러지 있음 돌려주고 아니면 알러지 없음 돌려주는 함수

function square_three(x) {
  return x ** 2 * 3;
}
function lunch_menu(x) {
  return `점심메뉴:${x} 입니다.`;
}
function allergy_test(sentence) {
  const hasShrimp = sentence.includes("새우");
  const hasPeanut = sentence.includes("땅콩");
  const hasShell = sentence.includes("조개");
  return hasShrimp || hasPeanut || hasShell ? "알러지 있음" : "알러지 없음";
}

//threeToArray 세개의 단어를 넣으면 배열로 돌려주는 함수
// 고기,야채,스프 -> [고기,야채,스프]

function threeToArray(a, b, c) {
  return [a, b, c];
}

// getIphone version, model, storage
// 13, plus, 256 => {version:13,model ... }

function getIphone(a, b, c) {
  return { version: a, model: b, storage: c };
}

// 각도(0~180)
// 몇도를 넣으면 -> 평각,직각,둔각,예각 돌려주는 함수
function getAngle(angle) {
  if (0 < angle && angle < 90) return "예각";
  else if (angle == 90) return "직각";
  else if (90 < angle && angle < 180) return "둔각";
  else if (angle == 180 || angle == 0) return "평각";
  else return "에바각";
}

// 어떠한 단어를 입력하고, 하나의 알파벳도 입력하면
// 그 알파벳 기준으로 앞뒤로 쪼개서 앞의 단어를 대문자로 돌려줌

// icecream, r => ICEC
// americano, i => AMER
// trump, u => TR
// function change(word, alpha) {
//   return word.split(alpha)[0].toUpperCase();
// }
// function add(a, b) {
//   return a + b;
// }

// 어떠한 단어를 입력하면
// 단어의 길이가 4~10 사이면
// 길이가 유효!0 돌려주고 아니면 길이가 유효하지않음!

function isValid(word) {
  return 4 <= word.length && word.length <= 10 ? "길이가 유효" : "길이가 유효하지 않음";
}
