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
