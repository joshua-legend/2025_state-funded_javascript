// 콘솔로 로또번호 나타내기 ㄱ
// [1,5,9,23,38,44]
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const lotto = new Array(6).fill(0).map((v) => getRandom(1, 45));

// while 사용해서 로또 만들기
const getLotto = () => {
  while (true) {
    const lotto = Array(6)
      .fill(1)
      .map((v) => String(getRandom(1, 45)));

    const newLotto = lotto
      .reduce((a, c) => {
        if (a.includes(c)) return a;
        else return a + "," + c;
      })
      .split(",");
    if (newLotto.length == 6) return newLotto;
  }
};

const getLotto1 = () => {
  while (true) {
    const lotto = [
      ...new Set(
        Array(6)
          .fill(1)
          .map((v) => String(getRandom(1, 45)))
      ),
    ];
    if (lotto.length == 6) return lotto;
  }
};
