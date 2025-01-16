// 프롬프트로 유저에게 닉네임을 물어봐서
// 알럿으로 ~~님 환영합니다!
// 만약에 빈문자로 입력하면 Guest님 환영합니다! 나오기
const usernickname = prompt("닉네임 입력");
alert(`${usernickname || "Guest"}님 환영합니다.`);

// 프롬프트로 유저에게 화장실 비밀번호를 물어봐서
// 1024와 일치하면 알럿으로 화장실 비밀번호 정답!

const password = prompt("화장실 비밀번호좀");
password == "1024" && alert("비밀번호 화장실 정답!");
