const food = prompt("좋아하는 음식");
const place = prompt("가장 최근에 갔던 장소");
console.log(`최근에 갔던 ${place}에서 ${food}을(를) 먹고 싶어요!`);

const height = prompt("키(m) 몇");
const weight = prmopt("몸무게 몇");
const bmi = Number(weight) / (Number(height) * Number(height));
console.log(`님 BMI ${bmi}임`);

const rate = prompt("오늘의 환율");
const dollar = prompt("얼마(USD)를 원으로 환전하겠습니까?");
const won = Number(rate) * Number(dollar);
console.log(`${dollar}달러 → ${won}원입니다.`);

const btc_rate = prompt("1 BTC = 몇 원");
const btc = prompt("몇 BTC를 환산하고 싶습니까?");
const result = Number(btc_rate) * Number(btc);
console.log(result);
