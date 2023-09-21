function solution(quiz) {
  var answer = [];
  quiz.forEach((e) => {
    const [front, back] = e.split(" = ");
    let calculate = front.split(" ");
    let result;
    if (calculate[1] == "-") {
      result = calculate[0] / 1 - calculate[2] / 1;
    } else {
      result = calculate[0] / 1 + calculate[2] / 1;
    }
    if (result == back) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  });
  return answer;
}

//다른 사람 풀이
function solution(quiz) {
  //map을 씀
  return quiz.map((t) => {
    //구조 분해 할당
    const [calc, result] = t.split(" = ");
    //+포함시 sign을 1로, -포함시 sign을 -1로
    const sign = calc.includes("+") ? 1 : -1;
    //+이면 +로 split, -이면 -로 split
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    //왼쪽은 계산. 앞에다가 +를 붙이면 숫자가 됨.
    //기본적으로 +로 계산한 후 -이면 앞에다가 곱해줌
    return +a + +b * sign === +result ? "O" : "X";
  });
}

//다항식 더하기
function solution(polynomial) {
  let answer = "";
  let [a, b] = [0, 0];
  const splited = polynomial.split(" + ");
  splited.forEach((e) => {
    if (e.includes("x")) {
      a += e.slice(0, -1) / 1 || 1;
    } else {
      b += e / 1;
    }
  });
  if (a > 0) {
    if (a == 1) {
      answer += `x`;
    } else {
      answer += `${a}x`;
    }
  }
  if (b > 0) {
    if (answer.length) {
      answer += ` + `;
    }
    answer += b;
  }
  return answer;
}

//다른 사람 풀이
function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
