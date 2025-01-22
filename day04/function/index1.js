// 함수
// 자바스크립트에서는 함수를 일급 객체[타입]로 취급함 ㅅㄱ

// array, object, function
const a = [];
const b = {};
const c = function (a, b) {
  return a + b;
};
const d = c(1, 2); // 3

const subway = {
  name: "부평점 서브웨이",
  sale: 0,
  sellBread: function () {
    this.sale = this.sale + 1000;
  },
  printSale: function () {
    console.log(this.sale);
  },
};

// subway.sellBread();
// subway.sellBread();
// subway.sellBread();
// subway.printSale();

// baskinRabbins 오브젝트 타입
// icecream:["민트초코","엄마는외계인","지헌이는맏형"]
// sale: 0
// sellIcecream: 민트초코 - 2000, 엄외 - 2500, 지헌맏형 - 4000 함수
// printSale: 매출보여주는 함수
// addIcecream: 아이스크림 추가

const baskinRabbins = {
  icecreams: [
    { name: "민트초코", price: 2000 },
    { name: "엄마는외계인", price: 2500 },
    { name: "지헌이는맏형", price: 4000 },
  ],
  sale: 0,
  sellIcecream: function (num) {
    if (this.icecreams[num] == undefined) console.log("그런 번호 없음");
    else {
      console.log(`${this.icecreams[num].name}아이스크림이 판매되었습니다. ㅅㄱ`);
      this.sale = this.sale + this.icecreams[num].price;
    }
  },
  printSale: function () {
    console.log(`현재 매출:${this.sale}`);
  },
  addIcecream: function (name, price) {
    this.icecreams.push({ name: name, price: price });
  },
};

baskinRabbins.sellIcecream(0);
baskinRabbins.sellIcecream(2);
baskinRabbins.printSale();
baskinRabbins.sellIcecream(3);
baskinRabbins.addIcecream("치즈케잌", 3500);
baskinRabbins.sellIcecream(3);
baskinRabbins.printSale();
