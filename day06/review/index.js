// 화살표 함수 구현하기
// 1. 음식 이모지 넣으면  음식이모지 피자 나오는 함수
// ex) 🍍 -> 🍍피자
const makePizza = (food) => food + "pizza";

// 2. 영단어를 넣으면 그 영단어를 3배곱해서 돌려주는 함수
// ex) kim -> kimkimkim
const threeWord = (word) => word.repeat(3);

// 3. 원화를 넣으면 달러를 돌려주는 함수
const toDollar = (won) => won / 1430;

// gotoAcademy 함수가 있음
// const goToAcademy = (transport) => {
//   console.log("집에서 출발");
//   transport();
//   console.log("학원 도착");
// };

// const taxi = () => {
//   console.log("택시타고 감");
// };

// const bus = () => {
//   console.log("버스타고 감");
// };

// const walk = () => {
//   console.log("걸어서 감");
// };
// const bicycle = () => {
//   console.log("자전거 타고감");
// };

// const momCar = () => {
//   console.log("엄마차 뽑았다");
// };

// goToAcademy(taxi);
// goToAcademy(momCar);

// makeBeverage
// 커피 만들기 => {1.원두갈기 2.평탄화하기 3.커피기계넣기 4.버튼 클릭 5. 즙짜기}
// 스무디 만들기 => {1.재료넣기 2. 얼음넣기 3.갈기 4. 즙짜기}
// 차 만들기   => {1.티백넣기 2.뜨물넣기 3.후불기}

// 시작: 콘솔 주문 받기
// 종료: 콘솔 주문 완료

const makeBeverage = (makeSomething) => {
  console.log("주문 받기");
  makeSomething();
  console.log("주문 완료");
};

const makeCoffee = () => {
  console.log("1.원두갈기");
  console.log("2.평탄화");
  console.log("3.기계넣기");
  console.log("4.버튼누르기");
  console.log("5.즙짜기");
};
const makeSmoothie = () => {
  console.log("1.재료넣기");
  console.log("2.얼음넣기");
  console.log("3.갈기");
  console.log("4.즙짜기");
};
const makeTea = () => {
  console.log("1.티백넣기");
  console.log("2.뜨물넣기");
  console.log("3.후불기");
};

makeBeverage(makeTea);
