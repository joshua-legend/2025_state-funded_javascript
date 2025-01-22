const age = +prompt("나이 몇살");
const busType = +prompt("버스 타입 입력(1~3)");
const bus_data = ["시내버스", "광역버스", "마을버스"];
const bus_fee = [1200, 2000, 1000];

if (age <= 7 || 65 <= age) alert("무료입니다!");
else if (8 <= age && age <= 19) alert(`청소년 비용은 ${bus_data[busType - 1]}비용은 ${bus_fee[busType - 1] * 0.7}원 입니다.`);
else alert(`일반 비용은 ${bus_data[busType - 1]}비용은 ${bus_fee[busType - 1] * 1}원 입니다.`);
