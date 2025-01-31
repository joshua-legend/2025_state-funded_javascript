const arr = [1, 3, 5, 7, 9];
const q1 = arr.map((x, i) => {
  return i;
});
console.log(q1);

// 배열 0부터 1000까지 담긴 코드 만드셈
const q2 = Array(1001)
  .fill(0)
  .map((x, i) => i);

// 배열 5의 배수 0부터 100까지 ㄱ
// Array(101)
//   .fill(0)
//   .map((x, i) => i)
//   .filter((x) => x % 5 == 0);
// Array(21)
//   .fill(0)
//   .map((x, i) => i * 5);

// 0 ~ 100 3의 배수는 🐭 5의 배수는 🐷 15의 배수는 🐰
// 나머지는 숫자 ㄱ

// Array(101)
//   .fill(0)
//   .map((x, i) => i)
//   .map((x) => {
//     if (x % 3 == 0 && x % 5 == 0) return "🐰";
//     else if (x % 3 == 0) return "🐭";
//     else if (x % 5 == 0) return "🐷";
//     else return x;
//   });

// [1900~2025]
// [{연도:1900,띠:🐭},{연도:1901,띠:"🐮"}, ]

const makeZodiac = (to, from) => {
  const zodiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return Array(from - to)
    .fill(0)
    .map((v, i) => i + to)
    .map((v) => {
      return { 연도: v, 띠: zodiac[v % 12] };
    });
};

const result = makeZodiac(1000, 3000);
console.log(result);
