//프롬프트로 몇살인지 물어보고
//알럿으로 ~~년생이시군요!
const age = prompt("몇살임?");
const birth = 2026 - Number(age);
window.alert(`${birth}년생이시군요!`);
