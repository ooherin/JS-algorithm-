//짝지어 제거하기
function solution(s) {
  const stack = [];
  [...s].forEach((i) => {
    if (stack[stack.length - 1] === i) {
      stack.pop();
    } else {
      stack.push(i);
    }
  });
  return stack.length == 0 ? 1 : 0;
}

//카펫
function solution(brown, yellow) {
  let total = brown + yellow;
  const divideArr = [];
  for (let i = 1; i <= total; i++) {
    if (total % i === 0) {
      divideArr.push([i, total / i]);
    }
  }
  let answer;
  divideArr.forEach((set) => {
    const [a, b] = set;
    if ((a - 2) * (b - 2) === yellow) {
      answer = [a, b];
    }
  });
  return answer;
}
