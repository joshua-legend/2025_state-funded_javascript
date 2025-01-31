// 정규표현식 타입 => /문자열/
const a = /hello/i;
const b = a.test("HELLO world!");
console.log(b);

const str = "hello world!";
const result = str.match(a); //
console.log(result);

const c = /a{2,4}/;
// aa or aaa or aaaa 있냐
console.log(c.test("a"));
console.log(c.test("aa"));
console.log(c.test("aaa"));
console.log(c.test("aaaa"));
console.log(c.test("aaaaa"));
