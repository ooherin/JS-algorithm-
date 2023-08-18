//둘만의 암호
function solution(s, skip, index) {
  const alpa = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const filtered = alpa.filter((el) => ![...skip].includes(el));
  const answer = [...s].map((el) => {
    newIdx = filtered.indexOf(el) + index;
    //나머지로 구해도 동일
    while (newIdx > filtered.length - 1) {
      newIdx = newIdx - filtered.length;
    }
    return filtered[newIdx];
  });
  return answer.join("");
}

//콜라문제
function solution(a, b, n) {
  var answer = 0;
  let current = n;
  let arr = [];
  while (current >= a) {
    answer += Math.floor(current / a) * b;
    let getCoke = Math.floor(current / a) * b;
    current = current + getCoke - (getCoke / b) * a;
  }
  return answer;
}
//b를 사용안햇음. 테케가 맞았던 거는 b가 1이라 영향을 안받았기 때문임.
// '/'은 그냥 나누기, 몫이 아님