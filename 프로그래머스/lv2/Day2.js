function solution(s) {
  if (s[0] === ")") {
    return false;
  }
  const stack = [];
  [...s].forEach((e) => {
    if (e === ")" && stack[stack.length - 1] == "(") {
      stack.pop();
    } else {
      stack.push(e);
    }
  });
  if (!stack.length) {
    return true;
  }
  return false;
}

//효율성 테스트 : (이 맞는지 확인하는 것보다 똑같은지 아닌지 판단하는 것이 더 쉽다.
function solution(s) {
  if (s[0] === ")") {
    return false;
  }
  const stack = [];
  [...s].forEach((e) => {
    if (e === ")" && stack[stack.length - 1] !== e) {
      stack.pop();
    } else {
      stack.push(e);
    }
  });
  if (!stack.length) {
    return true;
  }
  return false;
}
