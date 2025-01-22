// const arr = [1, 3, 5, 7, 9];

// 🧡개중요 짱중요 ㅈㄴ중요 이거만 가져가도됨🧡
// 요소들을 바꿔주는 함수
const double = (x) => x * 2;
const plus10 = (x) => x + 10;
const changeChineseFood = (x) => (x ** 2 < 10 ? "짜장면" : "탕수육");
const changeFood = (x) => (x ** 3 < 100 ? "커피" : "붕어빵");
// 세제곱을하고 자리수가 2자리 이하면 커피 아니면 붕어빵
// 129[3자리] ->붕어빵
// 23[2자리] -> 커피

// const newArr = arr.map(double);
// const newArr1 = arr.map(plus10);
// const newArr2 = arr.map(changeChineseFood);
// console.log(newArr);
// console.log(newArr1);
// console.log(newArr2);

// const fruits = ["peach", "mango", "strawberry", "apple", "orange", "mandarin", "plum", "persimmon", "fig"];

// //문자길이가 6글자 이상이면 💙 아니면 💔 바꾸기
// const changeHeart = (word) => (word.length >= 6 ? word + " 💙" : word + " 💔");
// const a = fruits.map(changeHeart);
// //문자길이를 두배 했을 때, 15보다 작으면 과일이름 짧음 아니면 과일이름 김
// const change_to_long_short = (word) => (word.length * 2 < 15 ? "짧음" : "김");
// const b = fruits.map(change_to_long_short);

//map: 요소를 조건(함수)에 맞게 바꿔줌
//some: 요소중에 조건(함수)에 맞는거 하나라도 갖는지 물음
//every: 요소중에 조건(함수)에 맞는거 모두 갖는지 물음

const arr = [1, 3, 5, 7, 9];
const hasThree = (x) => x == 3;
const hasUnderFive = (x) => x < 5;
const hasEven = (x) => x % 2 == 0;
const hasUnderTen = (x) => x < 10;

const fruits = ["peach", "mango", "strawberry", "apple", "orange", "mandarin", "plum", "persimmon", "fig"];

// 1. 과일 이름중에 k,b,s로 시작하는게 있으면 true 아니면 false
const isStartKBS = (word) => word.startsWith("k") || word.startsWith("b") || word.startsWith("s");
const result = fruits.some(isStartKBS);

// 2. 과일 이름중에 길이가 모두 4~12글자 사이면 true 아니면 false
const checkLength = (word) => 4 <= word.length && word.length <= 12;
const result1 = fruits.every(checkLength);

// 3. 과일 이름중에 i,o,u가 있으면 "💛" 아니면 "🧨" 바꾸기
const changeText = (word) => (word.includes("i") || word.includes("o") || word.includes("u") ? "💛" : "🧨");
const result2 = fruits.map(changeText);

const song = `
Ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived, I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Ooh
Oh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love's the only war worth fighting for
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
Right next to you
Next to you
Right next to you
Oh-oh, oh
If the world was ending, I'd wanna be next to you
If the party was over and our time on Earth was through
I'd wanna hold you just for a while and die with a smile
If the world was ending, I'd wanna be next to you
If the world was ending, I'd wanna be next to you
Ooh
I'd wanna be next to you
`;

// song를 배열로 바꾸고, 각각 문자 길이로 바꾼다음 문자길이가 6글자 넘으면 '💛' 아니면 그대로 나오고 출력하기
const result3 = song
  .split(" ")
  .map((word) => (word.length > 6 ? "💛" : word))
  .join(" ");

// filter[입구컷]
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArr = numArr.filter((x) => x % 2);
// 제곱을 했을 때, 100보다 작으면 살린다음, + 10하기
numArr.filter((x) => x ** 2 < 100).map((x) => x + 10);
