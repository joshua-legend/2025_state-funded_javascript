//ENTP,ISFP
// const mbti = prompt("mbti 무엇?");
// const first = mbti[0].toUpperCase();
// const second = mbti[1].toUpperCase();
// const third = mbti[2].toUpperCase();
// const fourth = mbti[3].toUpperCase();
// const mbtiObj = {
//   E: "외향적",
//   I: "내향적",
//   S: "감각적",
//   N: "직관적",
//   T: "이성적",
//   F: "감성적",
//   J: "계획적",
//   P: "즉흥적",
// };

// alert(`${mbtiObj[first]} ${mbtiObj[second]} ${mbtiObj[third]} ${mbtiObj[fourth]}`);

const email = prompt("이메일 입력");
const hasAt = email.includes("@");
const hasDot = email.includes(".com") || email.includes(".net");
const hasDomain = email.includes("naver") || email.includes("kakao") || email.includes("yahoo") || email.includes("paran");
hasAt && hasDot && hasDomain ? alert("이메일 타당함") : alert("이메일 타당하지 않음");

const num = 100;

num.toString(); // 문자화

//프로토타입[원본]
//타입을 만들거임
//~~ 타입을 만들었음[설계도(원본)]
Number.isNaN(); // nan인지 아닌지 물어보는거임
