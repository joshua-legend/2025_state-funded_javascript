const cook = (recipe) => {
  console.log("요리시작!");
  recipe();
  console.log("요리끝!");
};

//1.불🔥 //2.얼음🧊 //3. 번개⚡
const skill = (x) => {
  console.log("스킬 준비!");
  x();
  console.log("스킬 완료!");
};

const fire = () => {
  console.log("🔥");
};
const ice = () => {
  console.log("🧊");
};

const lightening = () => {
  console.log("⚡");
};

const kyun = () => {
  console.log("현균이 소환");
};

skill(fire);
skill(ice);
skill(kyun);
