//일반 함수
function add(x, y) {
  return x + y;
}

//화살표 함수
//add , minus
const add = (x, y) => x + y;
const minus = (x, y) => x - y;
//홀짝
const oddOrEven = (x) => (x % 2 ? "홀" : "짝");
