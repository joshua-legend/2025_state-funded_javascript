// 유저에게 만들고 싶은 아이디를 물어보고

const userId = prompt("아이디 입력 ㄱ");

// 1. 아이디의 길이가 4 ~ 16글자 사이여야하고
if (userId.length < 4 || 16 < userId.length) alert("아이디 길이가 유효하지 않습니다!");
else if (!(userId.includes("!") || userId.includes("@") || userId.includes("#") || userId.includes("&"))) alert("반드시 특수문자 (!,@,#,&) 하나 포함해야합니다!");
else if (userId.slice(userId.length - 1, userId.length) != userId.slice(userId.length - 1, userId.length).toUpperCase()) alert("마지막 알파벳은 무조건 대문자여야 합니다!");
else alert("아이디 완성!");
