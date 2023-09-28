//숫자의 표현
function solution(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      arr.push(i);
    }
  }
  return arr.length;
}

//다음 큰 숫자
const binaryOneCount = (n) => {
  return n.toString(2).replace(/0/gi, "").length;
};

function solution(n) {
  const nOneCount = binaryOneCount(n);
  let bigger = n + 1;
  while (true) {
    const biggerOneCount = binaryOneCount(bigger);
    if (nOneCount === biggerOneCount) {
      break;
    } else {
      bigger++;
    }
  }
  return bigger;
}

//다른 사람 풀이
function solution2(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

//피보나치 수
function solution(n) {
  const arr = [0, 1];
  let counter = 2;
  while (counter <= n) {
    const current = arr[counter - 2] + arr[counter - 1];
    arr.push(current % 1234567);
    counter++;
  }
  return arr[arr.length - 1];
}
