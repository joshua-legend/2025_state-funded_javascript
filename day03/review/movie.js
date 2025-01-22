const movie_number = +prmopt("영화 번호 입력(1~3)");
const age = +prompt("나이 입력");
const movie_genre_list = ["액션영화", "로맨틱 코미디", "공포영화"];
const moive_price_list = [10000, 8000, 9000];

if (age < 13) alert(`귀하의 나이는 ${age}이고 선택한 영화는 ${movie_genre_list[movie_number - 1]}이므로 최종 티켓 가격 ${moive_price_list[movie_number - 1] * 0.5}입니다.`);
else if (age >= 60) alert(`귀하의 나이는 ${age}이고 선택한 영화는 ${movie_genre_list[movie_number - 1]}이므로 최종 티켓 가격 ${moive_price_list[movie_number - 1] * 0.7}입니다.`);
else alert(`귀하의 나이는 ${age}이고 선택한 영화는 ${movie_genre_list[movie_number - 1]}이므로 최종 티켓 가격 ${moive_price_list[movie_number - 1] * 1}입니다.`);
